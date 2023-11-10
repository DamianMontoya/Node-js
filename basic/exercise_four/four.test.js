const { async_addition,performe_async_addition, sync_addition} = require ('./four.js');

describe('async_addition()', () => {
    test('Correctly adds two valid numbers', async () => 
    {
        const result = await async_addition(3, 5);
        expect(result).toBe(8);
    });

    test('handles invalid numbers correctly', async () => 
    {
        await expect(async_addition('i am doing my best', 5)).rejects.toThrow('Not valid numbers');
        await expect(async_addition(3, 'be patient ')).rejects.toThrow('Not valid numbers');
    });

    test('handles negative numbers', async () => 
    {
        const result = await async_addition(-3, 5);
        expect(result).toBe(2);
    });
});

describe('performe_async_addition()', () => 
{
    test('Performs asynchronous addition correctly', async () => 
    {
        const result = await performe_async_addition(3, 5);
        expect(result).toBe(8);
    });

    test('Properly handles errors from async_addition', async () => 
    {
        await expect(performe_async_addition('abc', 5)).rejects.toThrow('Not valid numbers');
    });
});

describe('sync_addition()', () =>
{
    test('it returns what it shuld', () =>
    {
        expect(sync_addition(1,2)).toBe(3);
        expect(sync_addition(1, -2)).toBe(-1);
    });
});

