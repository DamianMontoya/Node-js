// 3. Realizar múltiples solicitudes HTTP de manera asíncrona y mostrar los resultados.

const fetch = require ('node:fetch')
async function get_data (URLs)
{
    let all_data = [];

    for (let url of URLs)
    {
        try
        {
            const response = await fetch(url);
            
            if (response.ok)
            {
                const data = await response.text();
                all_data.push(data);
            }
            else
            {
                console.log(response.status)
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
    console.log(all_data);
    return all_data;
};
let urls = ['https://www.google.com/', 'https://veridas.com/es/']
get_data(urls);
