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


                this.firstName =  results[0].name.first
                this.lastName = results[0].name.last
                this.email =  results[0].email
                this.gender = results[0].gender
                this.picture = results[0].picture.large
            },
        },
    })

app.mount('#app')