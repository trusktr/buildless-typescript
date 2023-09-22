import { Bar } from "./Bar.js"
import { Foo } from "./Foo.js"

export class Test extends Foo<Bar> {
  method() {
    return new Bar()
  }
}

const b = new Test().doFoo()

b.logBar()
