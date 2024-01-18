<script setup>
// fetch data
const {data} = await useFetch("/api/dogs");
const { _value: dataValues} = data;
const {message: breeds} = dataValues;
</script>

<template>
  <Main>
    <header>
    <h1>Dog breeds</h1>
    </header>
    <div>
       <ul>
        <pre> {{ breeds }}</pre>
        <li v-for="breed in breeds">{{ breed }}</li>
      </ul>
    </div>
  </Main>
</template>