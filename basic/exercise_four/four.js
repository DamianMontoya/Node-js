//* 4. Código Síncrono y Asíncrono: Crea una función que demuestre la diferencia entre el
//* código síncrono y asíncrono. Realiza una operación matemática simple de manera síncrona y
//* otra operación asíncrona (por ejemplo, una promesa) y muestra la diferencia en el tiempo
//* de ejecución.

const async_addition = async (a, b) =>
{
    return await new Promise ((resolve, reject) => 
    {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b))
            {
                reject(new Error ('Not valid numbers'));
            };

            const sum = a + b;
            resolve(sum);
        },2000);
    });
};

// Si no hubieramos puesto async en la funcion flecha de arriba y un await podriamos usar la de abajo
const performe_async_addition = async (a,b) => 
{
    const result = await async_addition(a,b);
    console.log(result);
    return result;
};

const sync_addition = (a, b) => 
{
    console.log(a + b);
    let sum = a+b;
    return sum;
}

async_addition(10,10)
performe_async_addition(5,5);
sync_addition(1,1);

module.exports = 
{
    async_addition,
    performe_async_addition,
    sync_addition
}