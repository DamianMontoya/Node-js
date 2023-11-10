//* 1.Suma Asíncrona de Números: Crea una función que tome dos números como argumentos y
//* devuelva su suma de manera asíncrona utilizando `setTimeout`.
//* El resultado debe ser mostrado en la consola después de 2 segundos.

// funcion asincrona que espera dos seguntos para resolver la promesa y entonces 
// ejecuta el código devolviendo e imprimiendo el valor de la suma
async function add_two_numbers_v1 (num_one, num_two)
{
  await new Promise (resolve => setTimeout(resolve, 2000));
  let sum = num_one + num_two;
  console.log(sum);
  return sum;
};


//  async func with error handling
async function add_two_numbers_v2 (num_one, num_two)
{
    try
    {
        await new Promise (resolve => setTimeout(resolve, 2000));
        let sum = num_one + num_two;
        console.log(sum);
        return sum;
    }
    catch (error)
    {
        console.log(error)
    }
};

async function add_two_numbers_v3 (a,b)
{
    return await new Promise((resolve, reject) => 
    {
            if(isNaN(a) || isNaN(b))
            {
                reject(new Error('Not valid numbers'));
            }
            else
            {
                setTimeout(() => 
                {
                    const sum = a+b; 
                    console.log(sum);
                    resolve(sum);
            }, 2000);
        };
    })
};

// retorna una promesa, se deberá manejar de alguna forma
function add_numbers (num_one, num_two)
{
    return new Promise (resolve => 
        {
            setTimeout(() => 
            {
                const sum = num_one + num_two;
                console.log(sum);
                resolve(sum);
            }, 2000)
        })
};

// otra forma de hacerlo, simplemente con  await y error handling
async function perform_add_numbers (number_one, number_two)
{
    try
    {
        const sum = await add_numbers(number_one, number_two);
        console.log('The addition of the following numbers :' + number_one, number_two + ' equals to: ' + sum);
    }
    catch (error)
    {
        console.log(error);
    }
};

add_two_numbers_v1(1,1);

add_two_numbers_v2(2,2);

perform_add_numbers(3,3);

add_numbers(4,4);

add_two_numbers_v3 (5,5);

module.exports = 
{
    add_numbers,
    perform_add_numbers,
    add_two_numbers_v1,
    add_two_numbers_v2,
    add_two_numbers_v3,
}