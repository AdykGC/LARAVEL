<template>
    <div class="container-login">
        <section class="section-profile-login">
            <form action="{% url 'connect' %}" method="post" class="custom-form mt-lg-4 mt-2">
                <h1>Sign in</h1>
                <div class="form-group">
                    <label >Email</label>
                    <br>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        class="form-control"
                        placeholder="Your email"
                        required="">
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <br>
                    <input type="password"
                        name="password"
                        id="password"
                        pattern="^(?=.*[A-Za-z])(?=.*\d).{8,}$"
                        class="form-control"
                        placeholder="Password"
                        required=""
                        oninvalid="this.setCustomValidity('[8<= Password], Password = [A-Z][0-9] ')"
                        oninput="this.setCustomValidity('')"/>
                </div>
                <div class="form-group">
                    <button 
                        type="submit"> Login
                    </button>
                    <br>
                    <router-link to="/profile/register" class="btn btn-link">Create an Account</router-link>
                    <br>
                    <router-link to="/profile/register" class="btn btn-link">Lost your password?</router-link>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: "section-profile-login",
};
</script>
