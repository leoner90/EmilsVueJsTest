<template>
  <div class="home">
    <div class="blogEl" v-for="(item, i) in blogList" :key="i">
      <h1 class="blog-header">{{item.header}}</h1>
      <text> 
        {{item.body}}
      </text>
    </div>
  </div>
</template>

<script>
//imports global windows variable with all news
import blogList from './newsHolder.js';

// <!-- SCRIPTS -->
export default {
  data() {
    return {
      blogList: blogList,
    }
  }
}
</script>

<!-- STYLES -->
<style> 
  .blogEl {
    border: 1px solid #000;
    padding: 10px;
    width: 60%;
    margin: 15px auto;
    border-radius: 5px;
  }

  .blog-header {
    border-bottom: 1px solid blue;
    padding: 3px;
    margin-bottom: 35px;
     border-radius: 10%;
  }
</style>