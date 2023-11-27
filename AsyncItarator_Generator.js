const axios = require("axios").default;

async function getUser() {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(usersUrl);
  return users;
}

async function* getPostByUser(user) {
  const userUrl = "https://jsonplaceholder.typicode.com/posts";

  for (let i = 0; i < user.length; i++) {
    const { data: post } = await axios.get(`${userUrl}?userId=${user[i].id}`);
    yield post;
  }
}

getUser()
  .then(async (users) => {
    const userItarator = await getPostByUser(users);
    await userItarator.next();
    await userItarator.next();
    await userItarator.next();
    await userItarator.next();
    console.log((await userItarator.next()).value);
  })
  .catch((e) => {
    console.log(e);
  });
