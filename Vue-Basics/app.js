const app = Vue.createApp({
    data() {
        return {
            showCars: true,
            title: 'BMW',
            model: 2020,
            cars: [
                {title: 'Bentley', model: 2021, img: "https://cdn.motor1.com/images/mgl/wV2RV/s1/bentley-continental-gt-mulliner-coupe.jpg", isFav: true},
                {title: 'Ferrari', model:2019, img: "https://www.supercars.net/blog/wp-content/uploads/2020/09/2020-Ferrari-F8-Tributo.jpg", isFav: false},
                {title: 'Mazerrati', model:2015, img: "https://s7g10.scene7.com/is/image/maserati/maserati/international/Models/my22/ghibli-my22/my22/square/GH_front.jpg?$1400x2000$&fit=constrain", isFav: true},
                {title: 'Audi', model:2010, img: "https://cdn.motor1.com/images/mgl/gLE3o/s1/audi-r8-green-hell-edition-front.jpg", isFav: false},
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Bentley';
        },
        toggleShowCars() {
            this.showCars = !this.showCars;
        },
        toggleIsFav(car){
            car.isFav = !car.isFav
        }
    },
    computed: {
        filteredCars() {
            return this.cars.filter((car) => car.isFav)
        }
    }
});

app.mount('#app');