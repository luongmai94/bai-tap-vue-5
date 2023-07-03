const maiapp = document.getElementById(`maiapp`);
const app = Vue.createApp({
  template: `
  <div class="screen">
  <div class="gruop">
  <div><p>Tên</p>
  <input type="text" v-model="name" />
  </div>

  <div><p>Tuổi </p>
  <input type="number" v-model="age" />
  </div>

  <div><p>Số điện thoại </p>
  <input type="number" v-model="telNumber" />
  </div>

  <div>Giới tính 
  <input type="radio" v-model="sex" value="Nam"/><span>Nam </span>
  <input type="radio" v-model="sex" value="Nữ"/><span>Nữ </span>
  </div>

  <div>Trình độ tiếng Nhật
  <select v-model="japaneseLevel">
  <option v-for="level in levels" :key="level">{{level}}</option>
  </select>
  </div>

  <button @click="add">Thêm bạn bè</button>
  </div>
  
  <div class="gruop">
  <MyFriend v-for="friend in friends" :friend="friend" :key="friend.telNumber"/>
  </div>
  </div>
  `,
  data() {
    return {
      name: ``,
      age: ``,
      telNumber: ``,
      sex: ``,
      japaneseLevel: ``,
      levels: [`N1`, `N2`, `N3`, `N4`, `N5`],
      friends: [],
    };
  },
  methods: {
    add() {
      this.friends.push({
        name: this.name,
        age: this.age,
        telNumber: this.telNumber,
        sex: this.sex,
        japaneseLevel: this.japaneseLevel,
      });
      this.name = ``;
      this.age = ``;
      this.telNumber = ``;
      this.sex = ``;
      this.japaneseLevel = ``;
    },
  },
  computed: {},
});

app.component(`MyFriend`, {
  template: `
  <div>
  <p>Tên: {{ friend.name }}</p>
  <p>Tuổi: {{ friend.age }}</p>
  <p>Số điện thoại: {{ friend.telNumber }}</p>
  <p>Giới tính: {{ friend.sex }}</p>
  <p>Trình độ tiếng Nhật: {{ friend.japaneseLevel }}</p>
  </div>
  `,
  props: [`friend`],
});

