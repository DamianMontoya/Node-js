//* 4. Código Síncrono y Asíncrono: Crea una función que demuestre la diferencia entre el
//* código síncrono y asíncrono. Realiza una operación matemática simple de manera síncrona y
//* otra operación asíncrona (por ejemplo, una promesa) y muestra la diferencia en el tiempo
//* de ejecución.

// En este ejercicio he hecho que se pueda ver el tiempo que tarda en ejecutarse 
// cada una de las funciones

function timelap_sync_addition (a, b)
{
    let start = Date.now();
    let sum = a+b;
    let finished = Date.now();


    console.log('sync function done in ' + (finished-start))
    
    return finished - start;
};

timelap_sync_addition(1,20);

const async_addition = async (a, b) =>
{
    return new Promise ((resolve, reject) => 
    {

        if (isNaN(a) || isNaN(b))
        {
            reject(new Error ('Not valid numbers'));
        }
        else
        {
            const sum = a + b;
            resolve(sum);
        }
    });
};

// Si no hubieramos puesto async en la funcion flecha de arriba y un await podriamos usar la de abajo
const performe_async_addition = async (a,b) => 
{
    let start = Date.now();

    const result = await async_addition(a,b);

    let finish = Date.now();

    let timelapse = finish-start;

    return timelapse;
};

 async function wrapped_function ()
 {
    let time = await performe_async_addition(20,20);
    console.log('function done in '+ time)
 } 
 wrapped_function()