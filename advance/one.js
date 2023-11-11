// 1. Leer y mostrar el contenido de un archivo de forma asíncrona.

const fs = require ('fs');

function read_show_files (file_path)
{
    console.log('searching for data...');
    
    fs.readFile(file_path,(error,data) =>
    {
        if(error)
        {
            console.log('petardazo', error);
        }

        console.log('loading data:\n', data.toString());
    })
};

read_show_files('./txt.txt');

function read_show_files_v2 (file_path)
{
    return new Promise((resolve, reject) =>
    {
        fs.readFile(file_path,(error, data) =>
        {
            if(error)
            {
                reject(error)
            }
            else
            {
            resolve(data.toString());
            }
        });
    });
};
async function display(file_path)
{
    let data;
    console.log('finding data...')
    try
    {
        data = await read_show_files_v2(file_path)
        console.log(data);
    }
    catch(error)
    {
        console.log('Error has occurred');
    }
    
    return data;
}
display('./txta.txt'); // returns error has occurred as path is invented
display('./txt.txt')