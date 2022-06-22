const axios = require("axios");

const posts = [
  {
    userId: 1,
    id: 2,
    title: "String",
    body: "String",
  },
  {
    userId: 1,
    id: 2,
    title: "String",
    body: "String",
  },
  {
    userId: 10,
    id: 100,
    title: "at nam consequatur ea labore ea harum",
    body:
      "cupiditate quo est a modi nesciunt soluta\n" +
      "ipsa voluptas error itaque dicta in\n" +
      "autem qui minus magnam et distinctio eum\n" +
      "accusamus ratione error aut",
  },
];
getUsers = async () => {
  return posts;
};

module.exports = { getUsers };
