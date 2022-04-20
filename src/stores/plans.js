import { defineStore } from 'pinia'

export const usePlanStore = defineStore({
  id: 'Plan',
  state: () => ({
    plans: [
      {
        id: 0,
        title: 'Starter',
        price: 0,
        descriptions: [
          {
            id: 0,
            qtdDescription: '1TB',
            subDescriptions: 'Cloud Storage'
          },
          {
            id: 1,
            qtdDescription: '2',
            subDescriptions: 'Active projetcs'
          },
          {
            id: 2,
            qtdDescription: '5',
            subDescriptions: 'Team members'
          }
        ]
      },
      {
        id: 1,
        title: 'Professional',
        price: 24,
        descriptions: [
          {
            qtdDescription: 'Unluminated',
            subDescriptions: 'Cloud Storage'
          },
          {
            qtdDescription: '50',
            subDescriptions: 'Active projetcs'
          },
          {
            qtdDescription: '88',
            subDescriptions: 'Team members'
          }
        ]
      }
    ],
    validation: true
  }),
  actions: {
    setValidation() {
      this.validation = false
    },
    unSetValitation() {
      this.validation = true
    }
  },
  getters: {}
})
