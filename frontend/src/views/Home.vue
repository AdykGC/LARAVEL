<template>
    <div class="home">
        <div class="video-wrap">
            <video autoplay="" loop="" muted="" class="custom-video" poster="">
                <source src="../assets/Videos/video.mp4" type="video/mp4"> Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
};
</script>


<style scoped>
.video-wrap {
    z-index: 0;
}

.custom-video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>