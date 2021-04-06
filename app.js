// kita pakai vue sebab kita pakai cdn 
const app = Vue.createApp({
        //data is function that return an object
        data() {
            return {
                firstName : 'Syahin',
                lastName : 'Md Shah',
                email : 'Syahinsyah@gmail.com',
                gender : 'male',
                picture : 'https://randomuser.me/api/portraits/men/2.jpg',
            }
        },
        methods: {
            async getUser() {

                const res = await fetch('https://randomuser.me/api')

                const {results} = await res.json() //destructure result

                
                this.firstName = 'Anis',
                this.lastName = 'Afiqah',
                this.email = 'Anisafiqah@gmail.com',
                this.gender = 'female',
                this.picture = 'https://randomuser.me/api/portraits/women/11.jpg'
            },
        },
    })

app.mount('#app')