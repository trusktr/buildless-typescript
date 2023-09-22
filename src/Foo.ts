export abstract class Foo<T extends object> {
  foo = "456"

  // Don't ask why! This is a simple contrived example.
  abstract method(): T

  doFoo() {
    console.log("foo: ", this.foo)
    const o = this.method()
    console.log("foo Bar: ", o)
    return o
  }
}
