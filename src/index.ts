import fetchUser from "./githubAPI";

(async () => {
  const userData = await fetchUser('kharioki')
  document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();
