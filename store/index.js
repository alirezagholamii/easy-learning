export const state = () =>({
  sidebarState: 'hidden'
})

export const mutations = {
  toggleSidebar(state, payload){
      state.sidebarState = payload
  },
}
