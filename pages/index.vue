<template>
    <main @click="increment()">  
      <div class="pointer" v-if="counter.value == 0">
        <img src="/pointer.png" alt="Pixel icon hand">
        <p>We need your clicks to start!</p>
      </div>        
      <h1 v-else class="no-select" :style="cssVars">Sensor<br>Variable<br>Font<br></h1>
      <h2 class="no-select">Workshop</h2>     
      <!-- <p class="no-select">{{ counter.value }}</p>  -->

      <progress-bar :counter="counter.value" />
    </main>
</template>

<script>
import progressBar from '../components/ProgressBar.vue'

export default {
  components: {
    progressBar
  },  
  data() {
    return {
      counter: 0
    }
  },
  created() {
    this.interval = setInterval(() => this.refresh(), 500);
  },
  async fetch() {
    this.counter = await fetch(
      'https://api.countapi.xyz/get/sensorIntroWorkshop/count'
    ).then(res => res.json())
  },
  computed: {
    cssVars() {
      return {
        '--BACK': this.counter.value,
      }
    }
  },
  methods: {
    refresh() {
      this.$fetch()
    },
    async increment(){
      if(this.counter.value < 900){
        this.counter = await fetch(
        'https://api.countapi.xyz/update/sensorIntroWorkshop/count/?amount=1'
        ).then(res => res.json())
        
      }
      
    }
  }
}

// API doc
// ** create
// https://api.countapi.xyz/create?namespace=sensorIntroWorkshop&key=counter&value=0
// https://api.countapi.xyz/create?namespace=sensorIntroWorkshop&key=count&enable_reset=1&value=0

// ** get
// https://api.countapi.xyz/get/sensorIntroWorkshop/counter
// https://api.countapi.xyz/get/sensorIntroWorkshop/count

// ** update (+1)
// https://api.countapi.xyz/update/sensorIntroWorkshop/counter/?amount=1
// https://api.countapi.xyz/update/sensorIntroWorkshop/count/?amount=1

// ** set (to reset)
// https://api.countapi.xyz/set/sensorIntroWorkshop/counter?value=0
// https://api.countapi.xyz/set/sensorIntroWorkshop/count?value=0

</script>

<style>
:root{
    /*From 1 to 900*/
    --BACK: 1;
}

@font-face {
    font-family: "Grid";
    src: url("../assets/font/GridlitePEVFTRIAL-All.ttf") format("truetype-variations");
}

html, body{
    height: 100%;
    margin: 0;
    padding: 0;  
}
#__nuxt, #__layout{
  height: 100%;
}

.no-select {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}
main{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation-name: backgroundColorPalette;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
h1{
    margin: 0;
    font-family: "Grid";
    font-variation-settings: "wght" 1, "BACK" var(--BACK), "ESHP" 3;
    color: #00AEEF;
    font-size: 9em;
    text-align: center;

}
h2{
    font-family: "Grid";
    font-variation-settings: "wght" 623, "BACK" 140, "ESHP" 4;
    padding-top: 2em;
}

.pointer{
  text-align: center;
}
.pointer img{
  max-width: 55%;
}
.pointer p{
  padding-top: 1em;
}
@keyframes backgroundColorPalette {
    0% {
      background: #00AEEF;
    }
    25% {
      background: #2D78FD;
    }
    50% {
      background: #5A59FB;
    }
    75% {
      background: #B084F8;
    }
    100% {
      background: #E4AEF6;
    }
  }


</style>
