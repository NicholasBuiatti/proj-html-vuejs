<script>
// import FILE from 'PERCORSO';

export default {
    name: "",
    components: {

    },
    props: {
    },
    data() {
        return {
            games: [
                {
                    imgGame: "protfolio1.png",
                    nameGame: "Assassin's Creed",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio2.png",
                    nameGame: "Call of Duty",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio3.png",
                    nameGame: "Tomb Raider",
                    descGame: "Donec solliucidum malesuada."
                },
                {
                    imgGame: "protfolio4.png",
                    nameGame: "Mortal Combat X",
                    descGame: "Donec solliucidum malesuada."
                },
            ],
        }
    },
    methods: {
        getImg(gameImg) {
            let risultato = new URL(`../assets/${gameImg}`, import.meta.url);
            return risultato.href;
        },
        next() {
            this.games.push(this.games[0])
            this.games.shift()
        },
        back() {
            let lastImg = this.games[this.games.length - 1]
            this.games.unshift(lastImg)
            this.games.pop()
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row mb-3 justify-content-between">
                <div class="col-6">
                    <h5 class="text-success">Trending Games</h5>
                    <h1 class="text-white">Choose Who Is The Best In World!</h1>
                </div>
                <div class="col-2 text-end align-self-end">
                    <button @click="next()" class="rounded-circle">
                        <img src="../assets/image (11).svg" style="height: 1rem; " alt="">
                    </button>
                    <button class="rounded-circle">
                        <img @click="back()" src="../assets/image (12).svg" style="height: 1rem; " alt="">
                    </button>
                </div>

            </div>
            <div class="row justify-content-between">
                <div v-for="card, i in games" class="card p-0 myBg " id="InfoGame" style="width: 18rem;">
                    <span class="position-absolute top-0 start-0 p-2">New</span>
                    <img :src="getImg(card.imgGame)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-9 text-white">
                                <h5 class="card-title">{{ card.nameGame }}</h5>
                                <p class="card-text">{{ card.descGame }}</p>
                            </div>
                            <a href="#" class="btn rounded-circle">
                                <img src="../assets/image (9).svg" alt="" id="iconPlay">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
section {
    height: 120vh;
    background-color: rgb(32, 32, 70);
    background-image: url('../assets/protfolio-vector.png');
    padding: 10rem 0;
}

h1 {
    font-size: 4rem;
}

.myBg {
    background-color: rgb(32, 32, 70);
}

a {
    width: 3rem;
    height: 3rem;
    background-color: rgb(5, 204, 124);
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}

span {
    background-color: rgb(5, 204, 124);
}

#InfoGame:hover {
    background-color: rgb(5, 204, 124);
    border: none;
}

#InfoGame:hover a {
    background-color: rgb(32, 32, 70);

}

#InfoGame:hover #iconPlay {
    filter: invert(100%);
}
</style>