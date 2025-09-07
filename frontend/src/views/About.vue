<template>
    <div class="home">
        <div class="gradient" > </div>
        <video autoplay loop muted plays-inline class="hero">
            <!--
            <source src="@/assets/videos/video.mp4" type="video/mp4" /> 
            -->
        </video>
        <div class="buttons">
            <router-link class="nav-button" to="/women"><button class="home-button">SS19 Collection</button>
            </router-link>
            <router-link class="nav-button" to="/men"><button class="home-button">FF22 Collection</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>