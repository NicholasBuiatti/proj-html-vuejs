import { reactive } from 'vue';

const myData = reactive({
    teams: [
        {
            urlImg: "../public/img/team1.png",
            name: "Cristiano Messi",
            ruolo: "CEO/Founder"
        },
        {
            urlImg: "../public/img/team2.png",
            name: "Sergio Naymer",
            ruolo: "Programmer"
        },
        {
            urlImg: "../public/img/team3.png",
            name: "Antonela Roccuzzo",
            ruolo: "Progect Manager"
        },
        {
            urlImg: "../public/img/team4.png",
            name: "Lionel Ramos",
            ruolo: "Game Design"
        }

    ],
    squads: [
        {
            ImgSmall: '1.png',
            imgBig: 'm1.png',
            name: 'Ninga Gaming',
        },
        {
            ImgSmall: '5.png',
            imgBig: 'm2.png',
            name: 'Witch Gaming',
        },
        {
            ImgSmall: '3.png',
            imgBig: 'm3.png',
            name: 'SkullG Gaming',
        },
        {
            ImgSmall: '2.png',
            imgBig: '',
            name: 'King Gaming',
        },
        {
            ImgSmall: '6.png',
            imgBig: '',
            name: 'Witch Astro',
        },
        {
            ImgSmall: '1.png',
            imgBig: '',
            name: 'Dng Gaming',
        },
        {
            ImgSmall: '1.png',
            imgBig: '',
            name: 'Joker Gaming',
        },
        {
            ImgSmall: '1.png',
            imgBig: '',
            name: 'Krull Gaming'
        },
        {
            ImgSmall: '4.png',
            imgBig: '',
            name: 'Panda Gaming'
        },
        {
            ImgSmall: '1.png',
            imgBig: '',
            name: 'Shark Gaming',

        },
    ],
    tester: [
        {
            imgTester: "../assets/test1.png",
            nameTester: "Mohammed Salah",
            roleTester: "CEO/Founder",
            DescTester: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester: "../assets/test2.png",
            nameTester: "Mohammed Salah",
            roleTester: "CEO/Founder",
            DescTester: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester: "../assets/test3.png",
            nameTester: "Mohammed Salah",
            roleTester: "CEO/Founder",
            DescTester: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
        {
            imgTester: "../assets/test4.png",
            nameTester: "Mohammed Salah",
            roleTester: "CEO/Founder",
            DescTester: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat eligendi inventore voluptatum dolores minus."
        },
    ],
    shop: [
        {
            urlImgCart: "../assets/cart1.png",
            urlmImgShop: "../assets/s1.png",
            dispositivo: "Asus Rog Strix A53",
            costo: "$970.00 $999"
        },
        {
            urlImgCart: "../assets/cart2.png",
            urlmImgShop: "../assets/s2.png",
            dispositivo: "Asus Rog Strix A53",
            costo: "$970.00 $999"
        },
        {
            urlImgCart: "../assets/cart3.png",
            urlmImgShop: "../assets/s3.png",
            dispositivo: "Asus Rog Strix A53",
            costo: "$970.00 $999"
        },
        {
            urlmImgShop: "../assets/s3.png",

        }
    ]
});

export default myData;
/*
const ilMioOggettone = {

};

const iMieiDati = reactive(ilMioOggettone);

export default ilMioOggettone;
*/

// getImg(flagIcon) {
//     let risultato = new URL(`../flagIcon/${flagIcon}`, import.meta.url);
//     return risultato.href;
// },