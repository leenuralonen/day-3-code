<script setup>
// Fetch the data from a server route

const { data: employees } = await useFetch("/api/employees", {
  headers: useRequestHeaders(["cookie"]),
});
const newEmployees = employees[0];
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