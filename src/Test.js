import { Bar } from "./Bar.js"
import { Foo } from "./Foo.js"

const FooBar = /** @type {typeof Foo<Bar>} */ (Foo)

export class Test extends FooBar {
  /** @override */
  method() {
    return new Bar()
  }
}

const b = new Test().doFoo()

b.logBar()
