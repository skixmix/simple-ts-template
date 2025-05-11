import { IHelloWorld } from "./hello-world.interface";

export class HelloWorld implements IHelloWorld {
  sayHello(): void {
    console.log("Hello World");
  }
}
