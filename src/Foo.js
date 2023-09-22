/**
 * @abstract
 * @template {object} T
 */
export class Foo {
  foo = "456"

  /**
   * @abstract
   * @returns {T}
   */
  method() {
    throw "subclass must implement"
  }

  doFoo() {
    console.log("foo: ", this.foo)
    const o = this.method()
    console.log("foo Bar: ", o)
    return o
  }
}
