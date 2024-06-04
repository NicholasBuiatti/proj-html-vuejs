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
    <div class="p-5 cardMatch row justify-content-between rounded border border-success">
        <div class="col-5 row text-white justify-content-between align-items-center">
            <div class="card p-0 border-0">
                <img src="../../assets/t3.png" class="card-img-top p-3 myBgColorCard" alt="">
                <div class="card-body  text-start">
                    <p class="card-text text-success">Italy</p>
                    <h5 class="card-title text-white">NameTeam</h5>
                </div>
            </div>

            <h2 class="text-success rounded">VS</h2>

            <div class="card p-0 border-0">
                <img src="../../assets/t3.png" class="card-img-top p-3 myBgColorCard" alt="">
                <div class="card-body  text-start">
                    <p class="card-text text-success">Italy</p>
                    <h5 class="card-title text-white">NameTeam</h5>
                </div>
            </div>
        </div>
        <div class="col-7 text-white row align-items-center justify-content-between">
            <div class="col-7 text-start">
                <h1>PUBG Battelground</h1>
                <p>Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                    tellus. Vivamus magna justo.</p>
            </div>
            <div class="col-4 rounded p-3 myBgColorCard" id="infoMatch">
                <h4>10.45</h4>
                <p>1st November, 2022</p>
                <a href="" class="d-inline-block rounded-circle"><img src="../../assets/image (13).svg" class="imgLink"
                        alt=""></a>
                <a href="" class="d-inline-block rounded-circle ms-2"><img src="../../assets/image (14).svg"
                        class="imgLink" alt=""></a>
            </div>

        </div>
    </div>
</template>

<style scoped>
.myBgColorCard {
    background-color: rgb(26, 25, 53);
}

.card {
    width: calc(100% / 3);
    background-color: rgb(21, 34, 88);
}

.cardMatch {
    background-color: rgb(32, 32, 70);
}

h2 {
    width: 7rem;
    line-height: 7rem;
    background-color: rgb(26, 25, 53);
}

h4 {
    font-size: 2rem;
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

.cardMatch:hover {
    background-color: rgb(51, 50, 135);
    border: unset;
}

.cardMatch:hover #infoMatch {
    background-color: rgb(5, 204, 124);
    color: black;
}

.cardMatch:hover a {
    background-color: rgb(26, 25, 53);
}

.cardMatch:hover .imgLink {
    filter: invert(100%);
}
</style>