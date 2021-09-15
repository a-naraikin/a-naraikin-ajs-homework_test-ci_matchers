// TODO: write your code here
const sortHealth = (arr) => arr.sort((a, b) => {
  if (a.health < b.health) {
    return 1;
  }

  if (a.health > b.health) {
    return -1;
  }

  return 0;
});

export default sortHealth;
