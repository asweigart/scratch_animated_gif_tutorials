

(function(){

  var TutorialPage = {
    template:"#tutorial-page",
    delimiters:["(#",'#)'],
    /*data:function(){
      return{
        slide:{
          title:"",
          text:"",
          image:undefined,
          foot:"",
        }
      }
    },*/
    computed:{
      slide:function(){
        var slide = this.slides[this.$route.params.index]
        return slide?slide:this.slides[0]
      }
    },
    props:['slides'],
  }

  var router = new VueRouter({
    routes:[
      {path:"/:index", name:"slide", component:TutorialPage},
      {path:"/",redirect:"/0"}
    ]
  })

  new Vue({
    el:'#app',
    delimiters:["(#",'#)'],
    router:router,
    data:{
      tutorial:window.tutorial
    },
    computed:{
      slides:function(){
        return this.tutorial.slides?this.tutorial.slides:[]
      }
    },
    methods: {
      changePage: function (e) {
        var page = e.target.value;
        this.$router.push({name: "slide", params: {index: page}})
      },
      nextPage: function () {
        var next_page = parseInt(this.$router.currentRoute.params.index) + 1
        if (next_page < this.slides.length) {
          this.$router.push({name: "slide", params: {index: next_page}})
        }
      },
      prevPage: function () {
        var prev_page = parseInt(this.$router.currentRoute.params.index) - 1
        if (prev_page >= 0) {
          this.$router.push({name: "slide", params: {index: prev_page}})
        }
      },
      arrowHandler:function(e){
        switch(e.key){
          case "ArrowRight":
            this.nextPage()
            break;
          case "ArrowLeft":
            this.prevPage()
            break;
        }
      }
    },
    mounted:function(){
      document.onkeyup = this.arrowHandler
    }
  })
})()