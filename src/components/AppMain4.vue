<script>
// import FILE from 'PERCORSO';
import AppMain4Match from './AppMainComponents/AppMain4Match.vue'
export default {
    name: "AppMain4",
    components: {
        AppMain4Match
    },
    props: {
    },
    data() {
        return {
            matches: [
                {
                    imgGame: "../assets/protfolio1.png",
                    nameGame: "Assassin's Creed",
                    descGame: "Donec solliucidum malesuada.",
                    nameSmall: "AC"
                },
                {
                    imgGame: "../assets/protfolio2.png",
                    nameGame: "Call of Duty",
                    descGame: "Donec solliucidum malesuada.",
                    nameSmall: "COD"
                },
                {
                    imgGame: "../assets/protfolio3.png",
                    nameGame: "Tomb Raider",
                    descGame: "Donec solliucidum malesuada.",
                    nameSmall: ""
                },
                {
                    imgGame: "../assets/protfolio4.png",
                    nameGame: "Mortal Combat X",
                    descGame: "Donec solliucidum malesuada.",
                    nameSmall: "MCX"
                },
                {
                    nameGame: 'PUBG Battlegroung',
                    nameSMall: 'PUBG',
                    descGame: 'Donec sollicidum malesuada'
                }

            ],
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
    <section>
        <div class="container text-center">
            <h5 class="text-success">Trending Battle</h5>
            <h1 class="text-white">Upcoming Match</h1>
            <ul class="list-group list-group-horizontal justify-content-center mb-3">
                <li class="list-group-item">All</li>
                <li class="list-group-item">PUBG</li>
                <li class="list-group-item">AC</li>
                <li class="list-group-item">COD</li>
                <li class="list-group-item">MCX</li>
            </ul>
            <AppMain4Match />
        </div>
    </section>

</template>

<style scoped>
section {
    background-color: rgb(20, 25, 53);
    height: 100vh;
}

li {
    background-color: rgb(20, 25, 53);
    border: none;
    color: white;
}
</style>