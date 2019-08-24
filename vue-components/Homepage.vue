
<template lang="pug">
    div.mainpage
        .wrapper
            h1 it is homepage
            router-link(to="/stream/stream1") test stream 1
            router-link(to="/stream/stream2") test stream 2
</template>


<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
