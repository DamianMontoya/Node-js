const {log_numbers_delay_promise, log_numbers_delay} = require('./three.js');

describe('log_numbers_delay_promise()', () =>
{
    test('throws error if argument provided is not an array', async () => 
    {
        await expect(log_numbers_delay_promise('i am a tortoise moving forward')).rejects.toThrow('not array, i katakrok')
    });

    test('it logs the numbers correctly', async () =>
    {
        const console_spy = jest.spyOn(console, 'log');

        const promise =  await log_numbers_delay_promise([1,2,3])

        jest.useFakeTimers();
        jest.advanceTimersByTime(4000);

        expect(console_spy).toHaveBeenCalledTimes(4);

        console_spy.mockRestore();
        jest.useRealTimers(); 

    });
});

// si en el test de arriba pones un array de 3 numeros lo pasa ya que la ejecucion del test no excede los 5 segundos que tiene JEST 
// puestos por defecto para que un test pase. He leido la documentacion y veo que se puede asignar mas tiempo para que no ocurra el timeout pero no quiero 
// hacerlo asi. Quiero adelantar los timers artificialmente y  no entiendo por qué si adelanto el tiempo mockeandolo con advanceTimersByTime sigue saliendo timeOut
// ejemplo: array de 5 numeros, advanceTimersByTime(6), por qué no ocurre todo en un segundo de tiempo real? Cómo avanzo para que los logs sean en el intervalo que yo quiera?



/*

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

*/