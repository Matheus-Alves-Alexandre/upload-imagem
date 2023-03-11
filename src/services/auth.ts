import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  const userFic = "m.alexandre016@gmail.com";
  const passwordFic = "123123";
  if (data.email == userFic) {
    if (data.password == passwordFic) {
      return {
        token: uuid(),
        user: {
          name: "Matheus Alexandre",
          email: "m.alexandre016@gmail.com",
          avatar_url: "https://github.com/Matheus-Alves-Alexandre.png",
        },
      };
    } else {
      console.log("password error");
    }
  } else {
    console.log("email not found");
  }
}

//sistema de login para o back
export async function recoverUserInformation(data) {
  return {
    user: {
      name: "Matheus Alexandre",
      email: "m.alexandre016@gmail.com",
      avatar_url: "https://github.com/Matheus-Alves-Alexandre.png",
    },
  };
}
