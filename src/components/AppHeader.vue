<script>
    import store from '../data/store.js';

    export default {
        data() {
            return {
                store,
            }        
        }
    }
</script>

<template>
    <header class="my-bg">
        <!-- Sezione nav bar -->
        <div class="flex row align-items-center justify-content-center py-3 px-0 w-100 my-fixed">
                
            <!-- Logo Section -->
            <figure class="col-1 mx-0 px-0">
                <img src="../assets/menulogo.png" class="img-fluid" alt="">
            </figure>
            
            <!-- Nav section -->
            <nav class="col-5 p-0">
                <div class=" flex row m-0 p-0 px-2 w-100 justify-content-center">
                    <div class="dropdown col-1">
                        <button class="btn dropdown-toggle text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            HOME
                        </button>
                        <ul class="dropdown-menu bg-violet">
                            <li><button class="dropdown-item text-green" type="button">Home One</button></li>
                            <li><button class="dropdown-item text-green" type="button">Home Two</button></li>
                            <li><button class="dropdown-item text-green" type="button">Home Three</button></li>
                            <li><button class="dropdown-item text-green" type="button">Home Four</button></li>
                        </ul>
                    </div>
                    <div class="dropdown col-1">
                        <button class="btn dropdown-toggle text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PAGES
                        </button>
                        <ul class="dropdown-menu bg-violet">
                                <li><button class="dropdown-item text-green" type="button">About us</button></li>
                                <li><button class="dropdown-item text-green" type="button">Matches</button></li>
                                <li><button class="dropdown-item text-green" type="button">Team</button></li>
                                <li><button class="dropdown-item text-green" type="button">Squad</button></li>
                                <li><button class="dropdown-item text-green" type="button">Squad Details</button></li>
                                <li><button class="dropdown-item text-green" type="button">404</button></li>
                            </ul>
                    </div>
                    <div class="my-width">
                        <button class="btn  text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            TOURNAMENT
                        </button>
                    </div>
                    <div class="dropdown col-1">
                        <button class="btn dropdown-toggle text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SHOP
                        </button>
                        <ul class="dropdown-menu bg-violet">
                                <li><button class="dropdown-item text-green" type="button">Shop Page</button></li>
                                <li><button class="dropdown-item text-green" type="button">Shop Details</button></li>
                                <li><button class="dropdown-item text-green" type="button">Cart Page</button></li>
                            </ul>
                    </div>
                    <div class="dropdown col-1">
                        <button class="btn dropdown-toggle text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BLOG
                        </button>
                        <ul class="dropdown-menu bg-violet">
                            <li><button class="dropdown-item text-green" type="button">Blog Page</button></li>
                            <li><button class="dropdown-item text-green" type="button">Blog Single</button></li>
                        </ul>        
                    </div>
                    <div class="col-1">
                        <button class="btn text-light border-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        CONTACT
                        </button>
                    </div>     
                </div>  
            </nav>
            
            <!-- Sezione Shop -->
            <div class="col-1 flex row justify-content-between m-0 p-0">
                <div class="col-6">
                    <div class="btn-group dropstart">
                        <button type="button" class="btn bg-light my-size shop-zone rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-magnifying-glass violet-c"></i>
                        </button>
                        <ul class="dropdown-menu transformp m-2">
                            <li><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            </li>
                        </ul>
                      </div>
                </div>
                <div class="col-6">
                    <div class="btn-group dropstart">
                        <button type="button" class="btn bg-light my-size shop-zone rounded-5" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-bag-shopping violet-c"></i>
                        </button>
                        <ul class="dropdown-menu m-2 bg-violet">
                            <li></li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item carousel-image bg-img-1 active">
                <div class="text-center myp container">
                    <h6>WELCOME TO RAXG</h6>
                    <h1 class="my-3">ARE YOU READY FOR YOUR NEXT CHALLENGE?</h1>
                    <ul class="flex row align-items-center justify-content-center py-4">
                        <li class="col-2"><button type="button" class="btn btn-green">Read More <i class="fa-solid fa-arrow-right"></i></button></li>
                        <li class="col-2"><button type="button" class="btn btn-green"><i class="fa-solid fa-circle-play"></i></button></li>
                    </ul>
                </div>
              </div>
              <div class="carousel-item carousel-image bg-img-2">
                <div class="text-center myp container">
                    <h6>WELCOME TO RAXG</h6>
                    <h1 class="my-3">ARE YOU READY FOR YOUR NEXT PERFORMANCE?</h1>
                    <ul class="flex row align-items-center justify-content-center py-4">
                        <li class="col-2"><button type="button" class="btn btn-green">Read More <i class="fa-solid fa-arrow-right"></i></button></li>
                        <li class="col-2"><button type="button" class="btn btn-green"><i class="fa-solid fa-circle-play"></i></button></li>
                    </ul>
                </div>
              </div>
              <div class="carousel-item carousel-image bg-img-3">
                <div class="text-center myp container">
                    <h6>WELCOME TO RAXG</h6>
                    <h1 class="my-3">ARE YOU READY FOR YOUR NEXT BEST?</h1>
                    <ul class="flex row align-items-center justify-content-center py-4">
                        <li class="col-2"><button type="button" class="btn btn-green">Read More <i class="fa-solid fa-arrow-right"></i></button></li>
                        <li class="col-2"><button type="button" class="btn btn-green"><i class="fa-solid fa-circle-play"></i></button></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        
        <div class="container position-absolute my-con">
            
            <div>
                <ul class="banner-social">
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li class="my-2">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
    .my-bg {
        color: white;
    }
    
    .my-con {
        position: absolute;
        top: 0;
        left: 50%;
        translate: -50% 0;
    }
    .bg-img-1 {
        background-image: url(../assets/banner1.png);
      }
    
      .bg-img-2 {
        background-image: url(../assets/bg1.png);
      }
    
      .bg-img-3 {
        background-image: url(../assets/bg2.png);
      }
    
      .carousel-image {
        height: 90vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        z-index: -1;
      }

    a {
        text-decoration: none;
        color: white;
        
    }
    
    .my-fixed {
        position: fixed;
        top: 0;
        z-index: 3;
    }

    li {
        list-style-type: none;
    }
    .my-width {
        width: 12.666667%;
    }
    .hover:hover{
        color: #00AC4D;
    }
    
    .shop-zone {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        line-height: 50%;
    }

    h1 {
        font-size: 5rem;
    }

    h6 {
        color: #00AC4D;
    }

    .text-green {
        color: #00AC4D;
    }
    .myp {
        padding-top: 18rem;
    }

    .violet-c {
        color: #333287;
    }


    .bg-violet {
        background-color: #202046;
    }

    .my-size {
        width: 40px;
        height: 40px;
    }

    .btn-green {
        background-color: #00AC4D;
        color: #333287;
        padding: 20px;
    }

    .banner-social {
        position: absolute;
        left: -20%;
        transform: translate(-50%, 125%);
    }

    .banner-social > li {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        line-height: 45px;
        background-color: #202046;
        text-align: center;
    }
    
    .banner-social > li:hover {
        background-color: #00AC4D;
    }
</style>
