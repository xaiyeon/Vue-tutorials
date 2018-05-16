new Vue({
    el: '#app',
    data: {
        titleX: 'Vue 2 is so cool I wanna be cool.',
        name: 'Riku',
        url: 'https://youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0,
        }
    },
    methods: {
        greet(time){
            return `HI HI ${time}, BYE BYE! ${this.name}`
        },
        changeWage(amount){
            this.wage += amount;
        },
        logEvent(e){
            console.log(e);
        },
        // we use this to get the event of mouse from doc
        logCoords(e){
            this.coords.x = e.offsetX;
            this.coords.y = e.offsetY;
        }
    }
})