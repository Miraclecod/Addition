


new Vue({
    el: '#app',
    data: {
        value1: 0.1,
        value2: 0.2
    },
    methods: {
       sum(){
           alert((this.value1 + this.value2).toFixed(1));
       }
    }
});