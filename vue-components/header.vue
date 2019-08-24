
<template lang="pug">
    header
        nav.main-nav
            .wrapper
                .nav-group.nav_logo
                    img(src="./../images/logo.png" class="logo")
                .nav-group.nav_center-items
                    img(src="./../images/nav_fire.png" class="item")
                    img(src="./../images/nav_lock.png" class="item")
                    img(src="./../images/nav_camera.png" class="item")
                .nav-group.account
                    router-link(to="/login").link.login
                        div
                            span Log-in
                    router-link(to="/registration").link.signup Sign-up
</template>


<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/variables.styl';
header 
    height $nav-height
    margin-bottom 20px

.main-nav
    background-color #222222
    color : #EB637B;

    height : $nav-height;
    .wrapper
        display flex;
        justify-content space-between;
        align-items center;
        max-width 800px

        .nav-group
            display flex;
            align-items center;
            justify-content space-between;

            height $nav-height;
            max-width 215px;
            width 100%;
            // padding 0px 10px
            margin 0px 5px


            &.nav_center-items
                justify-content center
                .item
                    margin 0px 7.5px
                @media screen and (max-width:600px) {
                    display : none 
                }

            .item
                height 30px;
            
            &.account
                justify-content flex-end

            .signup
                display flex
                align-items center
                justify-content center
                color white;
                width 85px;
                height 30px;
                background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;
                border-radius: 100px;

            .login
                position relative
                display flex
                justify-content center
                align-items center
                width 85px;
                height 30px;
                border-radius: 100px;
                background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;

                margin-right 10px
                div
                    position absolute
                    display flex
                    align-items center
                    justify-content center
                    background-color #222
                    content "";
                    width calc(100% - 5px);
                    height calc(100% - 5px);
                    margin auto auto
                    border-radius 100px;
                    span
                        

                        background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;
                        border-radius: 100px;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    
                    
    


.logo
    height 30px;

</style>

