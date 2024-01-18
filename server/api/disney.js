export default defineEventHandler((event) => {
  async function getDisneyData() {
    const res = await fetch("https://api.disneyapi.dev/character");
    const disneyData = await res.json();
    return disneyData;
  }
  const data = getDisneyData();
  return data;
});