<script setup>
// Fetch the data from a server route

const { data } = await useFetch("/api/employees", {
  headers: useRequestHeaders(["cookie"]),
});
const employees = data._value.employees;
console.log(employees) 
</script>

<template>
  <main>
    <h1>Employees</h1>
    <!-- render the fetched data -->
    <ul>
      <li v-for="employee in employees">{{ employee }}</li>
    </ul>
  </main>
</template>