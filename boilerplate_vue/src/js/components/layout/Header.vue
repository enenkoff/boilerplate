<template>
    <header id="header" class="header">
        <div class="content content--lg">
            <div class="header--main">
                header
                <span id="burger"></span>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        mounted() {
            let burger = document.getElementById('burger'),
                header = document.getElementById('header');
            burger.onclick = function () {
                header.classList.toggle('open');
            };
        }
    }

</script>

