import { HelloWorld } from './hello-world';
import { IHelloWorld } from './hello-world.interface';

describe('HelloWorld', () => {
  let helloWorld: IHelloWorld;
  let spiedConsoleLog: jest.SpyInstance;

  beforeEach(() => {
    spiedConsoleLog = jest.spyOn(console, 'log');
    spiedConsoleLog.mockImplementation();

    helloWorld = new HelloWorld();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe('sayHello', () => {
    it('should call console log with the correct parameter', () => {
      const expectedLog = 'Hello World';

      helloWorld.sayHello();

      expect(spiedConsoleLog).toHaveBeenCalledWith(expectedLog);
    });
  });
});
