<template>
    <header>
        <div class="navbar-container">
            <!-- Левая часть -->
            <div class="nav-left">
                <router-link class="nav-link lab la-github" to="/">
                    <span>Github</span>
                </router-link>
            </div>


            <!-- Центральная часть -->
            <div class="nav-center">
                <router-link class="nav-link" to="/home">
                    <span>Home</span>
                </router-link>
                <router-link class="nav-link" to="/blog">
                    <span>Bloge</span>
                </router-link>
                <router-link class="nav-link" to="/">
                    <span>Shop</span>
                </router-link>
                <router-link class="nav-link" to="/">
                    <span>Pages</span>
                </router-link>
                <router-link class="nav-link" to="/">
                    <span>Contact us</span>
                </router-link>
            </div>


            <!-- Правая часть -->
            <div class="nav-right">
                <router-link class="nav-link las la-user-circle" to="/profile/login">
                    <span></span>
                </router-link>
                <router-link class="nav-link las la-shopping-cart" to="/">
                    <span></span>
                </router-link>
                <router-link class="nav-link lar la-heart" to="/">
                    <span></span>
                </router-link>
                <router-link class="nav-link las la-search" to="/">
                    <span></span>
                </router-link>
            </div>
        </div>
    </header>
</template>

