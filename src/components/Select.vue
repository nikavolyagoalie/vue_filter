<template>
  <div class="select">
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
        <label :for="room" class="radio"
          >{{ room }}
          <input
            type="radio"
            class="radio__input"
            :id="room"
            :value="room"
            v-model="checkedTypes"
            @click="
              () => {
                checkedTypes = room;
                openList();
              }
            "
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import for_selects from "@/mixins/for_selects";
import { mapState, mapActions } from "vuex";

export default {
  mixins: [for_selects],

  data() {
    return {
      text: "Тип недвижимости",
    };
  },

  methods: {
    ...mapActions({
      fetchRooms: "fetchInfo",
    }),
  },

  computed: {
    ...mapState({
      rooms: (state) => state.type1,
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
        return res;
      }
    },
  },

  mounted() {
    this.fetchRooms();
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
  margin-top: 8px;
  box-shadow: 0px 2px 10px rgba(40, 40, 40, 0.18);
  border-radius: 8px;
}

.delete {
  margin: 0 15px;
}

.btns {
  display: flex;
}

.radio {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
  padding: 12px 16px 12px;
}

.radio__input {
  opacity: 0;
  position: absolute;
}

.radio:has(.radio__input:checked) {
  background-color: #F5F5F5;
}
</style>