<template>
  <div>
    <h1>Add News</h1>
    <div class="wrapper">
      <div>
        <input type="text" v-model="AddNewsHeader" placeholder="Header">
      </div>
      <div>
      <input type="text" v-model="AddNewsBody" placeholder="body">
      </div>
      <button class="addNewNews" type="button" @click="saveFile">Add News</button>
    </div>
    <button class="goBackBtn" @click="goBack">Go back</button>
  </div>
</template>

<script>
//imports global windows variable with all news
import blogList from './newsHolder.js';

// <!-- SCRIPTS -->
export default {
  data(){
    return {  
      AddNewsHeader: '',
      AddNewsBody: '',
      AllNewsList: blogList,
    }
  },
  
  methods:{
    saveFile: function() {
      blogList.push({header: this.AddNewsHeader , body: this.AddNewsBody});
      var stringyfyedBlogList = JSON.stringify(blogList);
      window.localStorage.setItem('newsGlobalVar', stringyfyedBlogList);
      this.$router.push('/')
    },

    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<!-- STYLES -->
<style>
  .addNewNews,
  .goBackBtn {
    background: lightgreen;
    cursor: pointer;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
  }

  .goBackBtn {
    background: lightblue;
  }

  .wrapper  > div > input{
    padding: 6px;
    margin: 3px;
    min-width: 650px;
    min-height: 50px;
  }
</style>