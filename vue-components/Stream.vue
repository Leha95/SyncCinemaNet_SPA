
<template lang="pug">
    div.stream
        .wrapper
            div.blocks
                div.block.block-left
                    h1.block-title \#{{stream_id}}
                    video.video
                    .bottom-panel
                        .hash-tags
                            | #hashtag #hashtag2 #hashtag #hashtag2 #hashtag #hashtag2 #hashtag #hashtag2 #hashtag #hashtag2 #hashtag #hashtag2
                        .viewers
                            | Viewers : {{viewers}}
                div.block.block-right
                    h1.block-title #chat
                    div.chat
                    
            
            
</template>


<script>
export default {
    props:['stream_id'],
    data(){
        return {
            viewers : 666
        }
	},
	
	
}
</script>

<style lang="stylus">

.bottom-panel
    display flex
    justify-content space-between
    width 100%
    .hash-tags
        flex-grow 3
        font-size 12px
        font-weight bold
        max-width 300px
    .viewers
        min-width 100px
        font-size 16px
        font-weight bold

.stream
    display flex
    flex-direction column
    height 100%
    .wrapper
        height 100%
        max-width 800px
h1
    color:black;

.blocks
    display flex
    justify-content space-between
    height 100%
    max-height 360px

    .block
        .block-title
            margin-bottom 20px

    .block-left
        max-width 480px;
        width : 70%;
        margin-right 10px
        margin-bottom 20px
        .video
            --width : calc(100% + 0px);
            width calc(var(--width))
            max-width 480px;
            height calc(var(--width) /  3 * 4);
            max-height 360px;
            background-color #222222
            border-radius 20px
            margin-bottom 20px

    .block-right
        max-width 240px;
        width : 30%;
        .chat
            width 100%
            height 100%;
            max-height 480px;
            background-color #222222
            border-radius 20px
        
</style>

