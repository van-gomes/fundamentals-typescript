const profile = {
    name: 'Vania',
    age: 22,
    showName() {
        console.log(this.name);
    }
}

const objProfile = {
    name: 'Mitinho',
    age: 2,
    showName() {
        console.log(this.name);
    }
}

profile.showName();
objProfile.showName();