var api = {
  getGithubApi() {
    let url = `https://api.github.com/users/cikai`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
