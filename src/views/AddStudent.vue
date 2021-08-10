<template>
  <div>
    <h1>Add Student</h1>
    <div class="AddStudentWrapper">
      <div>
        <input type="text" v-model="AddStudentName" placeholder="Name">
      </div>
      <div>
        <input type="text" v-model="AddStudentSurname" placeholder="Surname">
      </div>
      <button class="addNewNews" type="button" @click="addNewStudent"> ADD STUDENT</button>
    </div>
  </div>
</template>

<script>
//imports global windows variable with all news
import Allstudents from './Allstudents.js';

// <!-- SCRIPTS -->
export default {
  data() {
    return {  
      AddStudentName: '',
      AddStudentSurname: '',
      Allstudents: Allstudents,
      id: Date.now(),
    }
  },

  methods: {
    addNewStudent() {
      this.Allstudents.push({name: this.AddStudentName , surname: this.AddStudentSurname , id: this.id});
      var AllstudentsStringify = JSON.stringify(Allstudents);
      window.localStorage.setItem('students', AllstudentsStringify);
      this.$router.push('students');
    },
  },
}
</script>

<!-- STYLES -->
<style>
  .AddStudentWrapper > div > input {
    padding: 6px;
    margin: 3px;
  }
</style>