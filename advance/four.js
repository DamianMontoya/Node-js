// * 4. Leer y escribir archivos de manera asíncrona.

const fs = require('fs');

function read_file (file_path)
{
    console.log('reading file...');

    fs.readFile(file_path, (error, data) => {
        if (error)
        {
            console.log('error');
            return error;
        }
        
        console.log(data.toString());
        return data;
    })
};

function read_files (file_path)
{
    return new Promise ((resolve, reject) => 
    {
        const data = read_file(file_path);
        if(data === error)
        {
            reject(data);
        };
        resolve(data)
    })
};

function read_files_v1 (file_path)
{
    fs.readFile(file_path, (error, data) =>
    {
        if (error)
        {
            console.log('petardazo', error);
        }
        let data_txt =  data.toText();
    })
    return data_txt;
};

// ESTA ES LA MEJOR MANERA A MI PARECER 
function read_file_v2 (file_path)
{
    return new Promise ((resolve, reject) => 
    {
        fs.readFile(file_path, (error, data) => 
        {
            if (error)
            {
                reject(error);
            }
            resolve(data.toString());
        });
    })
};

function write_file_v1 (file_path, data)
{
    return new Promise ((resolve, reject) => 
    {
        fs.writeFile(file_path, data, error => 
        {
            if (error)
            {
                console.log (error);
                reject(error);
            }
            else
            {
                console.log ('file saved');   
                resolve (file_path);
            }
        })
    })
};

async function read_write_file (file_path)
{
    try
    {
        const read_data = await read_file_v2(file_path);
        const save_data = await write_file_v1(file_path, read_data);

        console.log('everything went ok');
    }
    catch (error)
    {
        console.log('error', error);
    }
}

read_write_file('./txt.txt');