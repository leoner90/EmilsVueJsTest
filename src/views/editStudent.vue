<template>
	<div class="changeStudentWrapper">
		<h1> CHANGE USER</h1>
		<span>Name:</span>
		<div > 
			<input v-bind:value="printStudentData().name" v-on:input="updateName"/>
		</div>
		<span>Surname:</span>
		<div>
			<input v-bind:value="printStudentData().surname" v-on:input="updateSurname"/>
		</div>
		<button @click="saveChanges()"> SAVE CHANGES </button>
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
			newName: '',
			newSurname: '',
		}
	},

	methods: {
		printStudentData() {
			const student = this.Allstudents
			.find(({ id }) => this.$route.params.id == id);
				return student
		},
	
    updateName() {
			this.newName = event.target.value;
    },

    updateSurname() {
			this.newSurname = event.target.value;
    },

		saveChanges() {
			var person = this.Allstudents.find(({ id }) => this.$route.params.id == id);
      if(this.newName != '') {
        person.name = this.newName;
      }
      if(this.newSurname != '') {
        person.surname = this.newSurname;
      }
			
			
			var AllstudentsStringify = JSON.stringify(this.Allstudents);
			window.localStorage.setItem('students', AllstudentsStringify);
			this.$router.push({ path: '/students' })
		}
	}
}
</script>

<!-- STYLES -->
<style> 
	.changeStudentWrapper > div > input {
		padding: 5px;
		margin: 5px;
	}

	.changeStudentWrapper > span {
		font-weight: bold;
	}
</style>