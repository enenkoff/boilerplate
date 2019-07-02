<template>
    <div class="container">
        <Header/>
        <main id="main" class="main">

        </main>
        <Footer/>
    </div>
</template>

<script>

    import Header from './components/layout/Header';
    import Footer from './components/layout/Footer';

    export default {
        name: 'app',
        props: {

        },
        components: {
            Header,
            Footer,
        },
    }
</script>

