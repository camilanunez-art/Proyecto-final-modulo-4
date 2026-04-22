class UserManager {
    constructor(url) {
        this.users = [];
        this.loadData(url);
    }

    loadData(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.users = JSON.parse(xhr.responseText);
                console.log("Datos cargados correctamente.");
            }
        };
        xhr.send();
    }

    listAllNames() {
        console.log("--- Lista de Usuarios ---");
        this.users.forEach(u => console.log(u.name));
    }

    showBasicInfo() {
        const name = prompt("Ingrese el nombre del usuario:");
        const user = this.users.find(u => u.name.toLowerCase() === name?.toLowerCase());
        if (user) {
            console.log(`Usuario: ${user.username} | Email: ${user.email}`);
        } else {
            console.warn("Usuario no encontrado.");
        }
    }

    showAddressInfo() {
        const name = prompt("Ingrese el nombre del usuario para ver su dirección:");
        const user = this.users.find(u => u.name.toLowerCase() === name?.toLowerCase());
        if (user) {
            console.log("--- Dirección ---");
            console.table(user.address);
        } else {
            console.warn("Usuario no encontrado.");
        }
    }

    showAdvancedInfo() {
        const name = prompt("Ingrese el nombre del usuario para info avanzada:");
        const user = this.users.find(u => u.name.toLowerCase() === name?.toLowerCase());
        if (user) {
            console.log(`Teléfono: ${user.phone}`);
            console.log(`Sitio Web: ${user.website}`);
            console.log("--- Compañía ---");
            console.table(user.company);
        } else {
            console.warn("Usuario no encontrado.");
        }
    }

    listCompanies() {
        console.log("--- Compañías y Catchphrases ---");
        this.users.forEach(u => {
            console.log(`Compañía: ${u.company.name} | Frase: ${u.company.catchPhrase}`);
        });
    }

    listNamesSorted() {
        const sortedNames = this.users.map(u => u.name).sort();
        console.log("--- Usuarios Ordenados ---");
        sortedNames.forEach(name => console.log(name));
    }
}

const manager = new UserManager('https://jsonplaceholder.typicode.com/users');
