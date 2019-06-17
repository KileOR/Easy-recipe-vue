<template>
  <div class="add-recipe container">
    <h2 class="center-align indigo-text">Add new recipe</h2>
    <form @submit.prevent="addRecipe">
      <div class="field title">
        <label for="title">Recipes name</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">ingredients:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
      </div>
      <div class="field add-ingredient">
        <label for="ingredient">Add ingredient</label>
        <input type="text" name="ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {  
  name: 'AddRecipe',
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    }
  },
  methods: {
    addRecipe() {
      if (this.title) {
        this.feedback = null
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+-.()'"!\-:@]/g,
          lower: true
        })

        db.collection('recipes').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a recipe title'
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add ingredient'
      }
    }
  }
}
</script>

<style>
.add-recipe {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-recipe h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-recipe .field {
  margin: 20px auto;
}
</style>
