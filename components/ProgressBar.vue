<template>
    <div class="progressBar" >
        <div class="progress" :style="barWidth"></div>
    </div>
</template>

<script>
  export default {    
    props: ['counter'],    
    computed:{
        barWidth(){
            return {
                width: Math.floor(this.counter * 100 / 900) + '%'
            }
        }
    }
  }
</script>

<style>
.progressBar{
    opacity: 0.5;
    height: 15px;
    width: 300px;
    border: 1px solid white;
    margin-top: 2em;
}
.progress{
    height: 100%;
    width: 0;
    background-color: white;
}

</style>