

(function(){

  var TutorialPage = {
    el:"#tutorial-page",
    data:function(){
      return{
        slide:{
          title:"",
          text:"",
          image:undefined,
          foot:"",
        }
      }
    },
    created:function(){
      var current_slide = window.tutorial.slides[this.$route.index]
      if(current_slide){
        this.slide = current_slide
      }
    }
  }

  var router = new VueRouter({
    routes:[
      {path:"/:index",component:TutorialPage}
    ]
  })

  new Vue({
    el:'#app',
    router:router,
  })
})()