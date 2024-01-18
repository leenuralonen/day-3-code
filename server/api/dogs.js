export default defineEventHandler((event) => {
  async function getdogsData() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const dogsData = await res.json();
    return dogsData;
  }
  const data = getdogsData();
  return data;
});