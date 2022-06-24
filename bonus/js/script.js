var app = new Vue({
    el: '#app',
    data: {
        currentActiveElement: 0,
        timingFunction: null,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    methods: {
        
        previousSlides(){
            
            if(this.currentActiveElement > 0) {
                // Decremento di 1 currentActiveElement
                this.currentActiveElement--;
            } else {
                this.currentActiveElement = this.slides.length - 1;
            }
        },
        nextSlides(){
            
            if(this.currentActiveElement < this.slides.length - 1) {
                // Incrementa di 1 currentActiveElement
                this.currentActiveElement++;
            } else {
                this.currentActiveElement = 0;
            }  
        },
        clickSlides(index){
            this.currentActiveElement = index;
        },
        timingNextSlides(){
            this.previousSlides();
        },
        blockNextSlides(){
            clearInterval(this.timingFunction);
            this.timingFunction = null;
        },
        restartNextSlides(){
            this.timingFunction = setInterval(this.timingNextSlides,3000);
        }
        
    },
    mounted() {
        this.timingFunction = setInterval(this.timingNextSlides,3000);
    }
  })