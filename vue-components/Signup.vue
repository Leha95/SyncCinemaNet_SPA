

<template lang="pug">
    div.signup
        .wrapper
            <form class="form">
                <h1 class="main-title">CREATE ACCOUNT</h1>
                <div>
                    <input type="text" class="input input-nickname" placeholder="Nickname" @input="check_all" v-model="nickname">
                    <img :src="nickname_ok ? '../images/forms/ok_circle.png' : '../images/forms/error_circle.png' " alt="" class="check nickname-check" @mouseover='nickname_show_help' @mouseleave='nickname_hide_help'>
                    <div class="help help-nickname" :class="{'active' : help_nickname}" :style="{'--x' : nickname_help_x , '--y' : nickname_help_y}">
                        | {{ nickname_help_text }}
                    </div>
                </div>
                <input type="text" class="input input-name" placeholder="Your name">
                <div>
                    <input type="password" class="input input-password" placeholder="Password" @input="check_all" v-model="password">
                    <img :src="password_ok ? '../images/forms/ok_circle.png' : '../images/forms/error_circle.png' " alt="" class="check password-check" @mouseover='password_show_help' @mouseleave='password_hide_help'>
                    <div class="help help-password" :class="{'active' : help_password}" :style="{'--x' : password_help_x , '--y' : password_help_y}">
                        | {{password_help_text}}
                    </div>
                </div>
                <div>
                    <input type="password" class="input input-confirm-password" placeholder="Confirm password" @input="check_all" v-model="confirm_password">
                    <img :src="confirm_password_ok ? '../images/forms/ok_circle.png' : '../images/forms/error_circle.png' " alt="" class="check confirm_password-check" @mouseover='confirm_password_show_help' @mouseleave='confirm_password_hide_help'>
                    <div class="help help-confirm-password" :class="{'active' : help_confirm_password}" :style="{'--x' : confirm_password_help_x , '--y' : confirm_password_help_y}">
                        | {{confirm_password_help_text}}
                    </div>
                </div>
                <div>
                    <input type="email" class="input input-email" placeholder="Email" @input="check_all" v-model="email">
                    <img :src="email_ok ? '../images/forms/ok_circle.png' : '../images/forms/error_circle.png' " alt="" class="check email-check" @mouseover='email_show_help' @mouseleave='email_hide_help'>
                    <div class="help help-email" :class="{'active' : help_email}" :style="{'--x' : email_help_x , '--y' : email_help_y}">
                        | {{email_help_text}}
                    </div>
                </div>
                <button :class="{'send' : true , 'abled' : all_right}">Register</button>
            </form>
</template>

<script>
export default {
    data(){
        return {
			nickname:"",
			password:"",

			nickname_ok:false,
			help_nickname : false,
			nickname_help_x : 0,
			nickname_help_y : 0,
			nickname_help_text : "The number of characters must be greater than 3!",

			password_ok:false,
			help_password : false,
			password_help_x : 0,
			password_help_y : 0,
            password_help_text : "The number of characters must be greater than 3!", 
            
            confirm_password_ok:false,
			help_confirm_password : false,
			confirm_password_help_x : 0,
			confirm_password_help_y : 0,
			confirm_password_help_text : "The number of characters must be greater than 3!", 

            email_ok:false,
			help_email : false,
			email_help_x : 0,
			email_help_y : 0,
			email_help_text : "The number of characters must be greater than 3!", 

			all_right : false
        }
	},
	
	methods:{
		check_all(){
			this.check_nickname();
            this.check_password();
            this.check_confirm_password();
            this.check_email();

			this.all_right =  this.nickname_ok && this.password_ok && this.confirm_password_ok && this.email_ok;
		},

		check_nickname(){
			if(this.nickname.length<3){
				this.nickname_ok = false;
				this.nickname_help_text = "The number of characters must be greater than 3!";
				return false
			}else{
				this.nickname_help_text =  "OK";
				this.nickname_ok = true;
				return true
			}
		},

		check_password(){
			if(this.password.length<3){
				this.password_ok = false;
				this.password_help_text =  "The number of characters must be greater than 3!";
				return false
			}else{
				this.password_ok = true;
				this.password_help_text =  "OK";
				return true
			}
        },
        
        check_confirm_password(){
            console.log(this.confirm_password , this.password);
            if(this.confirm_password != this.password){
				this.confirm_password_ok = false;
				this.confirm_password_help_text =  "Password does not match!";
				return false
			}else
            if(this.confirm_password.length<3){
				this.confirm_password_ok = false;
				this.confirm_password_help_text =  "The number of characters must be greater than 3!";
				return false
			}else{
				this.confirm_password_ok = true;
				this.confirm_password_help_text =  "OK";
				return true
			}
        },
        
        check_email(){
            
            if(this.email.length<3){
				this.email_ok = false;
				this.email_help_text =  "The number of characters must be greater than 3!";
				return false
			}else if(!this.validEmail(this.email)){
				this.email_ok = false;
				this.email_help_text =  "Wrotten email is not correct!";
				return false
			}else{
				this.email_ok = true;
				this.email_help_text =  "OK";
				return true
			}
		},

		nickname_show_help(e){
			this.nickname_help_x = e.target.offsetLeft+15+"px";
			this.nickname_help_y = e.target.offsetTop+15+"px";
			this.help_nickname = true;
		},

		nickname_hide_help(e){
			this.help_nickname = false;
		},

        password_show_help(e){
			this.password_help_x = e.target.offsetLeft+15+"px";
			this.password_help_y = e.target.offsetTop+15+"px";
			this.help_password = true;
		},

		password_hide_help(e){
			this.help_password = false;
		},

		confirm_password_show_help(e){
			this.confirm_password_help_x = e.target.offsetLeft+15+"px";
			this.confirm_password_help_y = e.target.offsetTop+15+"px";
			this.help_confirm_password = true;
		},

		confirm_password_hide_help(e){
			this.help_confirm_password = false;
        },

        email_show_help(e){
			this.email_help_x = e.target.offsetLeft+15+"px";
			this.email_help_y = e.target.offsetTop+15+"px";
			this.help_email = true;
		},

		email_hide_help(e){
			this.help_email = false;
        },



        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        
        
	}
}
</script>

<style lang="stylus" scoped>


.signup
    width 100%;
    height 100%;
    flex-grow 1;
    .wrapper
        height 100%;
        display flex;
        flex-direction column;
        justify-content center;
        align-items:center;  


.signup .form {
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 400px;
	height: 400px;


	background-color: #373656;
	background-image: url('../images/forms/bg.png');
	background-size: 450px 450px;
	background-position: -25px -25px;

	border-radius: 30px;

	box-shadow: 0px 0px 50px black;
}


h1 {
	font-size: 22px;
}

.main-title {
	font-family: Quicksand;
	font-weight: 600;

	color: #f97d75;

	text-shadow: 0px 10px 70px black;


	margin-top: 40px;
	margin-bottom: 15px;
}


.input {
	width: 230px;
	height: 27px;

	margin: 3px 0px;
	padding: 5px 25px;

	background-repeat: no-repeat;
	background-size: 10px;
	background-position: 10px center;
	background-color: #4c4c71;

	color: white;

	border: none;
	border-radius: 100px
}

:active,
:hover,
:focus {
	outline: 0;
	outline-offset: 0;
}

input:focus {
	box-shadow: 0px 0px 5px black;
}

.input-nickname {
	background-image: url('../images/forms/nickname.png');

}

.input-name {
	background-image: url('../images/forms/name.png');
	position: relative;
	left: -2px;

}

.input-password {
	background-image: url('../images/forms/password.png');

}

.input-confirm-password {
	background-image: url('../images/forms/password.png');

}

.input-email {
	background-image: url('../images/forms/email.png');

}

.check {
	position: relative;

	top: 2.5px;
	right: 30px;

	width: 15px;
	height: 15px;

	margin-right: -15px;

}

.help:not(.active) {
	z-index: 100;
	position: absolute;
	opacity: 0;
	padding: 2px;
	transition: 1s all;
	left: var(--x);
	top : var(--y);
}

.help.active {
	z-index: 100;
	position: absolute;
	opacity: 1;
	color: black;
	background-color: white;
	border-radius: 5px;
	padding: 4px;
    left: var(--x);
	top : var(--y);
}

.send {
	width: 150px;
	height: 40px;

	margin-top: 20px;

	color: white;
	font-family: arial;
	font-weight: 600;

	background: linear-gradient(to right, #ce6dfb, #6865f2);
	border-radius: 100px;
	border: none;

	text-align: center;
	vertical-align: middle;
	transition: 1s opacity;
	opacity: 1;
	cursor: pointer;
}

.send:not(.abled) {
	background: linear-gradient(to right, #ce6dfb, #6865f2);
	opacity: 0.1;
	cursor: auto;
}

</style>  