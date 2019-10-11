import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentIndex: 0,
    cards: [
      {
        title: "Start A New Day",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/slider_01.jpg"
      },
      {
        title: "Feel The Nature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/slider_02.jpg"
      },
      {
        title: "Take A Deep Breath",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/slider_03.jpg"
      },
      {
        title: "Time For A Change",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/slider_04.jpg"
      }
    ]
  },
  getters: {
    currentIndex: state => {
      return state.currentIndex;
    },
    cards: state => {
      return state.cards;
    }
  },
  mutations: {
    nextIndex: state => {
      if (state.currentIndex < state.cards.length - 1) 
        state.currentIndex++;
    },
    prevIndex: state => {
      if (state.currentIndex > 0) 
        state.currentIndex--;
    }
  }
});
