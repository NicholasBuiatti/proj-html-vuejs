<script>
// import FILE from 'PERCORSO';
import AppMainTop from './AppMainTop.vue'
import store from '../data/store.js'
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {
            store,
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
            firstImg: 1,
            lastImg: 4,
        }
    },
    methods: {
        getImg(gameImg) {
            let risultato = new URL(`../assets/${gameImg}`, import.meta.url);
            return risultato.href;
        },
        duplicate(arryaList) {
            arryaList.push(arryaList[0]);
            let lastImg = arryaList[arryaList.length - 2]
            arryaList.unshift(lastImg)
            console.log(arryaList);
        },
        raddoppia() {
            this.games.push(this.games[0])
            let lastImg = this.games[this.games.length - 2]
            this.games.unshift(lastImg)
            // SETINTERVALL CHE OGNI TOT SECONDI MI TAGLIA UN IMMAGINE
        },

        // LAVORARE QUI PER SISTEMARE L'ANIMAZIONE
        tagliaImg() {
            this.games.shift()
            console.log('ciao');
        },
        avanti(arrayList) {
            arrayList.push(arrayList[2]);
            arrayList.shift()
        },
        indietro(arrayList) {
            let lastImg = arrayList[arrayList.length - 3]
            arrayList.unshift(lastImg)
            arrayList.pop()
        },

        carouselTimer() {
            setInterval(function () {
                this.games.shift()
                console.log('ciao');
            }, 5000)
        },
        desapearFunction(index) {
            // setTimeout(function () {
            //     this.games.shift()
            // }, 5000)
            if (this.games[index] == this.games[0]) {
                return 'desapear'
            } else {
                return ''
            }

        },
    },
    created() {

    },
    mounted() {
        // this.carouselTimer()
        this.raddoppia()

        setInterval(function () {
            this.tagliaImg()
            console.log('ciao');
        }, 5000)
    }
}
</script>

<template>
    <section>
        <div class="container">
            <AppMainTop titleSection="Trending Games" title="Choose Who Is The Best In World!" :arrayGames="games" />

            <button @click="indietro(games)">indietro</button>
            <button @click="">avanti</button>

            <div class="row justify-content-between flex-nowrap overflow-auto" style="width: 94%; margin: 0 auto;"
                id="pippo">
                <div v-for=" card, i in games" class="card p-0 myBg m-2 float-start" id="
                    InfoGame" style="width: 18rem;">
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



.myBg {
    background-color: rgb(32, 32, 70);
}

a {
    width: 3rem;
    height: 3rem;
    background-color: rgb(5, 204, 124);
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

/* ANIMAZIONE */
.desapear {
    animation: desapear 5s infinite ease-in-out;
}

/* .appear {
    animation: appear 15s infinite ease-in-out;
}

@keyframes appear {
    from {
        max-width: 0rem;
    }

    to {
        width: 18rem;
    }
} */

@keyframes desapear {
    from {
        max-width: 18rem;
    }

    to {
        width: 0rem;
    }
}
</style>