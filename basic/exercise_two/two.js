//* 2. Promesa de Multiplicación: Crea una función que tome dos números y devuelva una
//* promesa que resuelva el producto de esos números. Luego, utiliza la promesa para mostrar
//* el resultado.

function async_multiply (a, b) 
{
    return new Promise((resolve, reject) => 
    {
        if (isNaN(a) || isNaN(b))
        {
            reject(new Error ("not valid numbers to multiply my friend"));
        }    
        setTimeout(() => 
        {
            const result = a * b;
            resolve(result);
        }, 1000);
    });
}
  
async function print_result(a,b)
{
    try
    {
    const result = await async_multiply(a, b);
    console.log('The result is', result);
    return result;
    }
    catch(error)
    {
        console.log(error)
    }
}
  
//print_result(3,3);

module.exports =
{
    async_multiply,
    print_result,
}