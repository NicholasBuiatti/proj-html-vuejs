<script>
// import FILE from 'PERCORSO';
import AppMainTop from './AppMainTop.vue'
export default {
    name: "",
    components: {
        AppMainTop
    },
    props: {
    },
    data() {
        return {

        }
    },
    methods: {
    },
    created() {

    },
    mounted() {

    }
}
</script>

<template>
    <section class="">
        <div class="container">
            <AppMainTop titleSection="Trending Games" title="Choose Who Is The Best In World!" :arrayGames="games" />
            <div class="row justify-content-around">
                <div class="col-4 p-4 rounded" id="infoMatch">
                    <div class="text-end position-relative" id="containerImgMatch">
                        <img src="../assets/m1.png" class="bg-opacity-75" id="bgImg" alt="">
                        <img src="../assets/1.png"
                            class="h-75 position-absolute position-absolute top-50 start-50 translate-middle" alt="">
                    </div>
                    <div class="text-white text-center pt-4">
                        <h2>Team</h2>
                        <a href="" class="d-inline-block rounded-circle"><img src="../assets/image (13).svg"
                                class="imgLink" alt=""></a>
                        <a href="" class="d-inline-block rounded-circle ms-2"><img src="../assets/image (14).svg"
                                class="imgLink" alt=""></a>
                        <h4 class="mt-3">10.45</h4>
                        <p>1st November, 2022</p>
                        <button type="button" class="btn myBtn">View More</button>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url('../assets/v-bg.png');
    background-size: cover;
    background-position: center;
    padding: 10rem 0;
    position: relative;
}

section::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 25, 53, 0.8);
}

.container {
    position: relative;
}

h1 {
    font-size: 4rem;
}

h4 {
    font-size: 4rem;
}

button {
    width: 3rem;
    aspect-ratio: 1;
}

button:hover {
    background-color: rgb(0, 172, 77);
}

#containerImgMatch {
    background-color: rgb(26, 25, 53);
    border-radius: 25px;
}

#bgImg {
    filter: brightness(50%);
    opacity: 0.3;
}

#infoMatch {
    background-color: rgb(32, 32, 70);
    width: calc(100% / 3 - 0.5rem);
}

.imgLink {
    color: white;
    width: 1.5rem;
    margin: 0 0.5rem;
}

a {
    background-color: rgb(00, 172, 77);
    width: 3rem;
    line-height: 3rem;
}

.myBtn {
    width: 7rem;
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