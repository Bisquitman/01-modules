import bio from "mpackage";

const user = {
  name: "иван иванов",
  dateBirth: "10.11.1987",
  purpose: "карьерный рост",
};

const getCurrentAge = (date) => {
  const now = new Date(); // Текущая дата
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Текущая дата без времени
  const yearb = date.split(".")[2];
  const monthb = date.split(".")[1];
  const dayb = date.split(".")[0];
  const bday = new Date(yearb, monthb, dayb); // Дата рождения
  const bdnow = new Date(today.getFullYear(), bday.getMonth(), bday.getDate()); // ДР в этом году
  let age;

  age = today.getFullYear() - bday.getFullYear();
  if (today < bdnow) {
    age = age - 1;
  }
  return age;
};

const generateId = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getUserNameCapitalize = (order) => {
  let index;
  if (order === "firstName") {
    index = 0;
  } else if (order === "lastName") {
    index = 1;
  } else {
    return;
  }

  return user.name.split(" ")[index].charAt(0).toUpperCase() + user.name.split(" ")[index].slice(1);
};

user.id = generateId(10);

user.firstName = getUserNameCapitalize("firstName");
user.lastName = getUserNameCapitalize("lastName");
delete user.name;

user.age = getCurrentAge(user.dateBirth);

user.purpose = user.purpose.charAt(0).toUpperCase() + user.purpose.slice(1);

bio(user);

