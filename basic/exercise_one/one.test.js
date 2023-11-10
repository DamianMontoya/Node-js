const { add_numbers, perform_add_numbers, add_two_numbers_v1, add_two_numbers_v2, add_two_numbers_v3 } = require ('./one.js')

describe('add_numbers()', () => {
    
    test('if we dont wait the time to resolve it returns a pending Promise', () => 
    {
        const promise = add_numbers(1,1);
        expect(promise).toBeInstanceOf(Promise);
    });

    test('if we wait the setTimeout to resolve it returns the correct sum value and logs it inthe console', async () =>
    {
        // Mocking time and spying the console log
        jest.useFakeTimers();
        const spy_console_log = jest.spyOn(global.console, 'log');

      
        // Pending promise
        const promise = add_numbers(1,2);

        // Resolve the setTimeout time
        jest.advanceTimersByTime(2000);
        jest.useRealTimers(); 

        // Promise solved
        const resolved_promise = await promise;        

        expect(resolved_promise).toBe(3);
        expect(spy_console_log).toHaveBeenCalledTimes(1);
        expect(spy_console_log).toHaveBeenCalledWith(3);
    });

    test('it sums everything provided, string will be concat', async () =>
    {
        const resolved_promise = await add_numbers('Jessi', ' se paciente, quiero aprender');

        const result = 'Jessi se paciente, quiero aprender';

        expect(resolved_promise).toBe(result);
    })
    
    // Restore the original function after the tests
    afterAll(() => {
    jest.restoreAllMocks();
    });
});


describe('add_two_numbers_v3', () => 
{
    test('it resolves the promise with the correct value in 2 secs and logs it', async () =>
    {
        // Mocking time and spying the console log
        jest.useFakeTimers();
        const spy_console_log = jest.spyOn(global.console, 'log');

        let pending_promise = add_two_numbers_v3(10,10);

        jest.advanceTimersByTime(2000);
        jest.useRealTimers(); 

        const resolved_promise = await pending_promise;

        expect(pending_promise).toBeInstanceOf(Promise);
        await expect(resolved_promise).toBe(20);
        expect(spy_console_log).toHaveBeenCalledTimes(1);
        expect(spy_console_log).toHaveBeenCalledWith(20);
    });

    // NO LO ENTIENDO 
    /*
    test('it throws error if provided numbers are not valid', async () => 
    {

        let rejected_promise = await add_two_numbers_v3('not number', 2);

        await expect(add_two_numbers_v3('a', 2)).rejects.toThrow('Not valid numbers');
    });
    */
});