<script>
// import FILE from 'PERCORSO';
import AppMainTop from "./AppMainTop.vue"
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {
            lastNews: [
                {
                    img: 'b1.png',
                    title: 'Ninja Warrior Gaming',
                    author: 'Admin2',
                    data: 'Oct 24, 2002'
                },
                {
                    img: 'b2.png',
                    title: 'Gost Rider Returns',
                    author: 'Admin',
                    data: 'Oct 25, 2002'
                },
                {
                    img: 'b3.png',
                    title: 'Call Of Deauty 4',
                    author: 'Admin3',
                    data: 'Oct 21, 2002'
                },
                {
                    img: 'b4.png',
                    title: 'Mortal Combat X',
                    author: 'Admin1',
                    data: 'Oct 25, 2002'
                },
            ]
        }
    },
    methods: {
        getImg(gameImg) {
            let risultato = new URL(`../assets/${gameImg}`, import.meta.url);
            return risultato.href;
        },
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
            <AppMainTop titleSection="Latest News" title="Stay Updated With our Latest News Articles"
                :arrayGames="lastNews" />
            <div class="row justify-content-around">
                <div v-for="lastNew, i in lastNews" class="p-0 rounded" id="infoNews">
                    <img :src="getImg(lastNew.img)" class="w-100" alt="">
                    <div class="text-white text-center pt-4">
                        <h4>{{ lastNew.title }}</h4>
                        <div>
                            <p class="mt-3 d-inline-block border-end">
                                <i class="fa-brands fa-youtube"></i>
                                By {{ lastNew.author }}
                            </p>
                            <p class="d-inline-block">
                                <i class="fa-solid fa-calendar-days"></i>
                                {{ lastNew.data }}
                            </p>
                        </div>
                        <button type="button" class="btn myBtn mt-4 mb-3">
                            Read More <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between">
                <h2 class="col-4 text-white">Our news Letter</h2>
                <div class="col-7 input-group mb-3">
                    <input type="text" class="col-7 form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: rgb(26, 25, 53);
    padding: 5rem 0;
}

p {
    padding: 0 1rem;
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}

#infoNews {
    background-color: rgb(32, 32, 70);
    width: calc(100% / 4 - 2rem);
    overflow: hidden;
}

#infoNews:hover h4 {
    color: rgb(0, 172, 77);
}

#infoNews:hover img {
    scale: 1.1;
}

p>i {
    color: rgb(0, 172, 77);
}

.myBtn {
    font-weight: 600;
    width: 8rem;
    aspect-ratio: 0;
    color: black;
    background-color: rgb(5, 204, 124);
}

.myBtn:hover {
    background-color: rgb(32, 32, 70);
    color: rgb(5, 204, 124);
    border: 1px solid rgb(5, 204, 124);
}
</style>