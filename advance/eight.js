// 8. Utilizar el módulo `os` para obtener información del sistema.

const os = require('os');

class operating_system
{
    constructor(architecture, cpus)
    {
        this.architecture = os.arch();
        this.cpus = os.cpus();
        this.machine = os.machine()
    }

    show_system() 
    {
        for(let property of operating_system.property)
        {
            console.log(property)
        }
    }
};

let my_so = new operating_system();

console.log(my_so)