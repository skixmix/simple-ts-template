import { HelloWorld } from './hello-world/hello-world';
import { IHelloWorld } from './hello-world/hello-world.interface';

const helloWorld: IHelloWorld = new HelloWorld();
helloWorld.sayHello();
