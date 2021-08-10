<template>
  <div class="home">
    <ul v-if="!$route.params.id">
      <li class="studentLine" v-for="(item, i) in Allstudents" :key="i">
        <router-link :to="'/students/' + item.id">{{ item.name }}</router-link>
        <span class="btnWrapper">
          <button class="deletBtn" @click="DeleteThis(i)">X</button>
          <button class="editBtn" @click="Edit(item.id)">Edit</button>
        </span>
      </li>
    </ul>
    <div v-if="$route.params.id">
      <p> Name: {{ printStudentData().name }}</p>
      <p> Surname: {{ printStudentData().surname }}</p>
    </div>
  </div>
</template>

<script>
//imports global windows variable with all news
import Students from './Allstudents.js';

//SCRIPTS
export default {
  data() {
    return {
      Allstudents: Students,
    }
  },
  methods:{
    printStudentData() {
      const student = this.Allstudents
      .find(({ id }) => this.$route.params.id == id);
        return student
    },

    DeleteThis(index) {
      this.Allstudents.splice(index, 1);  
    },

    Edit( itemId) {
      this.$router.push({ path: '/editStudent/' + itemId})
    }
  }
}
</script>

<!--STYLES-->
<style> 
.home {
  width: 60%;
  margin: 0 auto;
}

.btnWrapper {
  position: absolute;
  right: 10px;
  bottom: 5px;
}

.deletBtn {
  background: red;
  padding:2px 15px;
  font-weight: bold;
  margin-right: 30px;
  cursor: pointer;
}

.editBtn {
  cursor: pointer;
  background: lightblue;
  padding:2px 15px;
  font-weight: bold;
}

.studentLine {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: block;
  border: 1px solid #000;
  text-align: left;
  position: relative;
}
</style>