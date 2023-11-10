const {async_multiply, print_result} = require ('./two.js');

describe('async_multiply', () => 
{
    test('should multiply two valid numbers', async () => 
    {
      const console_spy = jest.spyOn(console, 'log');
      const result = await async_multiply(3, 4);

      expect(console_spy).not.toHaveBeenCalled();
      expect(result).toBe(12);

      console_spy.mockRestore();

    });
  
    test('should reject with an error for invalid numbers', async () => 
    {
      await expect(async_multiply('Jessi this is hard', 4)).rejects.toThrow("not valid numbers to multiply my friend");
    });
  });
  
  describe('print_result', () => 
  {
    test('should print the result to the console', async () => 
    {
      const console_spy = jest.spyOn(console, 'log');
      const result = await print_result(3,3);

      expect(console_spy).toHaveBeenCalledWith('The result is', result);
      expect(console_spy).toHaveBeenCalledTimes(1);
      expect(result).toBe(9);

      console_spy.mockRestore();
    });
  });