<template>
    <main @click="increment()">  
      <div class="pointer" v-if="counter == 0">
        <img src="/pointer.png" alt="Pixel icon hand">
        <p>We need your clicks to start!</p>
      </div>        
      <h1 v-else class="no-select" :style="cssVars">Sensor<br>Variable<br>Font<br></h1>
      <h2 class="no-select">Workshop</h2>     
      <p>{{ counter }}</p> 

      <progress-bar :counter="counter" />
    </main>
</template>

<script>
import progressBar from '../components/ProgressBar.vue'

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  components: {
    progressBar
  },  
  // data: function() {
  //   return {
  //     contador: data.counter, 
  //   };
  // },
  computed: {
    counter () {
      return this.$store.state.counter
    },
    cssVars() {
      return {
        '--BACK': this.counter,
      }
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    }
  }


}
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
