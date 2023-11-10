//* 3. Iteración Asíncrona: Crea una función que itere a través de un arreglo de números y
 //* los muestre en la consola uno por uno con un retraso de 1 segundo entre cada número.
 
async function log_numbers_delay_promise (array)
{
    if(!Array.isArray(array))
    {
        throw new Error('not array, i katakrok');
    }
    for(let num of array)
    {
        await new Promise ((resolve) => {setTimeout(resolve, 1000)});
        console.log(num);
    }
    console.log('Finished counting numbers')
};

//log_numbers_delay_promise([0,1,2,3,4,5,6,7,8,9,10]);


function log_numbers_delay (array)
{

  let count = 0;
  function log_num()
  {
    if(count < array.length)
    {
      count++;
      console.log(array[count])
      setTimeout(log_num,1000)
    }
  }
  log_num();
};

//log_numbers_delay([0,1,2,3,4,5,6,7,8,9,10]);

module.exports = 
{
  log_numbers_delay_promise,
  log_numbers_delay,
}