



<template lang="pug">
    main#app
        Header
        router-view
</template>




<script>
import Header from './header';
export default {
    components: {'Header' : Header},
    data(){
        return {
            
        }
    }
}
</script>



<style lang="stylus">
@import '../stylus/index.styl';
#app{
    display flex;
    flex-direction column

    font-family : $main-font;
    width: 100vw;
    height: 100vh;
    background-color: $color1;
	background: linear-gradient(45deg, $color1, $color2);    
}

</style>

