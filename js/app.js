const { createApp } = Vue

  createApp({
    data() {
      return {
        user: 'Ben',
        count: 0,
        link: "https://www.malt.fr/profile/benjaminkielinski",
        users: ['Ben', 'PP', 'Toine', 'Riton'],
        forceProfil: false
      }
    },
    methods: {
        increment() {
            this.count++;
        }
    }
  }).mount('#app')