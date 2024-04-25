function signUpUser(firstName, lastName) {
  return new Promise((res) => {
    res({ firstName, lastName });
  });
}

export default signUpUser;
