export default {
    methods: {
        preloader: function(bool){
            let preloader = document.getElementById('loader');
            if(bool){
                preloader.classList.remove('hide')
            }
            else {
                preloader.classList.add('hide')
            }
        },
    }
};