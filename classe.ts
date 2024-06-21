class User {
    name: string = 'Mitinho';
    age: number = 2;
   
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name);
    }
}

const users = new User('Vanessa', 23);
users.showName();