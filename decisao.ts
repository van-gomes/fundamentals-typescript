const num = 22;

if (num > 22) {
    console.log("Num maior que 22");
} else if (num === 22) {
    console.log("Num é igual a 22");
}
else {
    console.log("Num menor que 22");
}

const typeUser = {
    admin: "Welcome Admin",
    student: "You are a student",
    viewer: "You can only view"
}

function validateUser (user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

const user = "admin";

validateUser(user);
validateUser("student");
validateUser("viewer");