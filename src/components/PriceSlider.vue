<template>
  <div>
    <div class="price">
      <div class="price__items">
        <div class="price__rub">₽</div>
        <div class="price__slider-data">
          <div class="price__block">
            <span>от</span
            ><input type="text" :value="leftNum" @change="handleInput1" />
          </div>
          <div class="price__block">
            <span>до</span
            ><input type="text" :value="rigthNum" @change="handleInput2" />
          </div>
        </div>
      </div>
      <div class="price__slider">
        <SliderElement
          name="slider"
          v-model="price"
          :max="max"
          :min="min"
          :tooltips="false"
          :lazy="false"
          :step="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SliderElement from "@vueform/slider";
import { mapGetters } from "vuex";

export default {
  components: {
    SliderElement,
  },
  data() {
    return {
      price: [3224508, 17224809],
    };
  },
  methods: {
    handleInput1(event) {
      this.price[0] = event.target.value;
    },

    handleInput2(event) {
      this.price[1] = event.target.value;
    },

    cutNum(num) {
      let str = String(num).split("").reverse();

      let s = [];
      while (str.length != 0) {
        s.push(str.splice(0, 3).reverse().join(""));
      }

      return s.reverse().join(" ");
    },
  },

  computed: {
    ...mapGetters({
      min: "min",
      max: "max",
    }),

    leftNum() {
      return this.cutNum(this.price[0]);
    },

    rigthNum() {
      return this.cutNum(this.price[1]);
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
* {
  font-size: 15px;
}

.price {
  width: 284px;
  margin: 5px;
}
.price__slider-data {
  display: flex;
  border: 1px solid #d2d2d2;
  border-radius: 0 8px 8px 0;
  padding: 8px;
}

.price__rub {
  display: flex;
  border: 1px solid #d2d2d2;
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 8px;
  min-width: 15px;
  align-items: center;
  justify-content: space-around;
}

.price__block {
  min-width: 120px;
  min-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price__block:nth-child(1) {
  border-right: 1px solid #d2d2d2;
}

.price__items {
  display: flex;
}

.price__block input {
  width: 85px;
  border: none;
  outline: none;
}

.price__block span {
  color: rgba(40, 40, 40, 0.5);
  margin-right: 3px;
}

.price__slider {
  top: -1px;
  width: 70%;
  left: 53px;
  position: relative;
}

.slider-target {
  height: 1px;
}

.slider-base {
  height: 1px;
}

.slider-handle{
    background: #3DA14B;
}
</style>