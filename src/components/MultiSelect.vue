<template>
  <div class="select">
    {{ articleId }}
    <div class="select__fileld" @click="openList">
      <div class="text" v-if="checkedTypes.length != 0">
        {{ selectedRoomms }}
      </div>
      <div class="text" v-else>{{ text }}</div>
      <div class="btns">
        <div class="delete" v-show="showDelete" @click.stop="clearTypes">
          <div class="delete_icon"></div>
        </div>
        <div class="arrow">
          <div v-show="isOpen">
            <div class="up_icon"></div>
          </div>
          <div v-show="!isOpen">
            <div class="down_icon"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="select__list"
      v-if="isOpen"
      v-click-outside="
        () => {
          isOpen = false;
        }
      "
    >
      <div v-for="(room, i) of rooms" :key="i">
        <label :for="room" class="checkbox"
          >{{ room }}
          <input
            type="checkbox"
            class="checkbox__input"
            :id="room"
            :value="room"
            v-model="checkedTypes"
            @change="onChange"
          />
          <div class="checkbox__custom">
            <div class="check_icon"></div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import for_selects from "@/mixins/for_selects";
import { mapState } from "vuex";

export default {
  mixins: [for_selects],

  data() {
    return {
      roomName: "комн",
      text: "Комнатность",
      postBody: {
        rooms: this.rooms,
      },
    };
  },

  methods: {
  },

  computed: {
    ...mapState({
      rooms: (state) => state.type2,
    }),

    selectedRoomms() {
      if (this.checkedTypes.length < 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.showDelete = false;
        return null;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.showDelete = true;
        let res = this.checkedTypes;
        return res.sort((a, b) => a - b).join(",") + " " + this.roomName;
      }
    },
  },
};
</script>

<style scoped>
* {
  font-size: 15px;
}
.select {
  width: 296px;
}
.select__fileld {
  display: flex;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  padding: 8px;
  justify-content: space-between;
  margin: 5px;
}

.select__list {
  margin-top: 6px;
  box-shadow: 0px 2px 10px rgba(40, 40, 40, 0.18);
  border-radius: 8px;
}

.delete {
  margin: 0 15px;
}

.btns {
  display: flex;
}

.checkbox {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  padding: 12px 16px 12px;
}
.checkbox__custom {
  width: 18px;
  height: 18px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 14px;
}

.checkbox__input {
  opacity: 0;
  position: absolute;
}

.checkbox__input:checked + .checkbox__custom {
  background-color: #3da14b;
  border: 1px solid #3da14b;
}

.checkbox:has(.checkbox__input:checked + .checkbox__custom) {
  background-color: #f5f5f5;
}

.check_icon {
  background: no-repeat center center url("../assets/img/Icon_check_mark.svg");
  background-size: contain;
  width: 12px;
  height: 9px;
}
</style>