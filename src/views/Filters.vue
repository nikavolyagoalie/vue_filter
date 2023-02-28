<template>
  <div class="filters">
    <div class="left">
      <select-types />
    </div>
    <div class="center">
      <prices />
    </div>
    <div class="rigth">
      <multi-select />
    </div>
  </div>
</template>

<script>
import Prices from "@/components/PriceSlider.vue";
import MultiSelect from "@/components/MultiSelect.vue";
import SelectTypes from "@/components/Select.vue";

export default {
  components: {
    Prices,
    MultiSelect,
    SelectTypes,
  },
  data() {
    return {};
  },
};
</script>

<style >
.filters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.delete_icon {
  background: no-repeat center center url("../assets/img/delete.svg");
  background-size: contain;
  width: 8px;
  height: 8px;
}

.up_icon {
  background: no-repeat center center url("../assets/img/Icon_arrow_up.svg");
  background-size: contain;
  width: 10px;
  height: 6px;
}

.down_icon {
  background: no-repeat center center url("../assets/img/Icon_arrow_down.png");
  background-size: contain;
  width: 10px;
  height: 6px;
}

.btns {
    align-items: center;
}
</style>