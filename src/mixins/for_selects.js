import vClickOutside from "click-outside-vue3";

export default {
    data() {
      return {
        selectedEstTypes: "",
        checkedTypes: [],
        showDelete: false,
        isOpen: false,
      };
    },
  
    directives: {
      clickOutside: vClickOutside.directive,
    },
  
    methods: {
      openList() {
        this.isOpen = !this.isOpen;
      },
  
      clearTypes() {
        this.showDelete = !this.showDelete;
        this.checkedTypes = [];
        this.isOpen = !this.isOpen;
      },
    },
  };