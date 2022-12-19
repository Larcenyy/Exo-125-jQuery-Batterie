const clap = new Audio("sounds/clap.wav")
const boom = new Audio("sounds/boom.wav")
const hihat = new Audio("sounds/hihat.wav")
const kick = new Audio("sounds/kick.wav")
const openhat = new Audio("sounds/openhat.wav")
const ride = new Audio("sounds/ride.wav")
const snare = new Audio("sounds/snare.wav")
const tom = new Audio("sounds/tom.wav")
const tink = new Audio("sounds/tink.wav")


$('body').keydown(function (event){
    console.log("La touche : " + event.which + " a été préssé")
    if (event.which === 65){
        $('.key[data-key = 65]').addClass("playing");
        clap.play()
        setTimeout(function (){
            $('.key[data-key = 65]').removeClass("playing");
            clearInterval()
        },200)

    }
    if (event.which === 83){
        $('.key[data-key = 83]').addClass("playing");
        hihat.play()
        setTimeout(function (){
            $('.key[data-key = 83]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 68){
        $('.key[data-key = 68]').addClass("playing");
        kick.play()
        setTimeout(function (){
            $('.key[data-key = 68]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 70){
        $('.key[data-key = 70]').addClass("playing");
        openhat.play()
        setTimeout(function (){
            $('.key[data-key = 70]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 71){
        $('.key[data-key = 71]').addClass("playing");
        boom.play()
        setTimeout(function (){
            $('.key[data-key = 71]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 72){
        $('.key[data-key = 72]').addClass("playing");
        ride.play()
        setTimeout(function (){
            $('.key[data-key = 72]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 74){
        $('.key[data-key = 74]').addClass("playing");
        snare.play()
        setTimeout(function (){
            $('.key[data-key = 74]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 75){
        $('.key[data-key = 75]').addClass("playing");
        tom.play()
        setTimeout(function (){
            $('.key[data-key = 75]').removeClass("playing");
            clearInterval()
        },200)
    }
    if (event.which === 76){
        $('.key[data-key = 76]').addClass("playing");
        tink.play()
        setTimeout(function (){
            $('.key[data-key = 76]').removeClass("playing");
            clearInterval()
        },200)
    }
    clearInterval(myTime)
})