fetch("https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user")
  .then((response) => response.json())
  .then((data) => {
    const user = data.find((user) => user.id === "8");
    if (!user) throw new Error("User with ID 8 not found");
    console.log(`Name: ${user.name}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
