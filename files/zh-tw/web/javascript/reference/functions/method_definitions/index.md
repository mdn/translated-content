---
title: 方法定義
slug: Web/JavaScript/Reference/Functions/Method_definitions
---

{{JsSidebar("Functions")}}

自 ECMAScript 2015 開始，引入了一種於物件初始器（objects initializers）中定義方法的簡短語法。是一個將函式指派予方法名稱的簡便方式。

{{InteractiveExample("JavaScript Demo: Functions Definitions")}}

```js interactive-example
const obj = {
  foo() {
    return "bar";
  },
};

console.log(obj.foo());
// Expected output: "bar"
```

## 語法

```plain
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
  async property( parameters… ) {},
  async* generator( parameters… ) {},

  // with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
  async [property]( parameters… ) {},

  // compare getter/setter syntax:
  get property() {},
  set property(value) {}
};
```

## 說明

這個簡短的語法和在 ECMAScript 2015 引入 [getter](/zh-TW/docs/Web/JavaScript/Reference/Functions/get) 以及 [setter](/zh-TW/docs/Web/JavaScript/Reference/Functions/set) 類似。

請看以下程式碼：

```js
var obj = {
  foo: function () {
    /* code */
  },
  bar: function () {
    /* code */
  },
};
```

你可以把它縮減為：

```js
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  },
};
```

### 產生器方法

[產生器方法](/zh-TW/docs/Web/JavaScript/Reference/Statements/function*)（Generator method）也可以透過簡短語法定義之。用的時候：

- 簡短語法的星號（\*）必須放在產生器方法的屬性名前面。也就是說 `* g(){}` 能動但 `g *(){}` 不行；
- 非產生器方法的定義可能不會有 `yield` 關鍵字。也就是說[過往的產生器函式](/zh-TW/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)動不了、並拋出{{jsxref("SyntaxError")}}。Always use `yield` in conjunction with the asterisk (\*).

```js
// Using a named property
var obj2 = {
  g: function* () {
    var index = 0;
    while (true) yield index++;
  },
};

// The same object using shorthand syntax
var obj2 = {
  *g() {
    var index = 0;
    while (true) yield index++;
  },
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Async 方法

{{jsxref("Statements/async_function", "Async 方法", "", 1)}} 也可以透過簡短語法定義。

```js
// Using a named property
var obj3 = {
  f: async function () {
    await some_promise;
  },
};

// The same object using shorthand syntax
var obj3 = {
  async f() {
    await some_promise;
  },
};
```

### Async generator methods

[Generator methods](/zh-TW/docs/Web/JavaScript/Reference/Statements/function*) can also be {{jsxref("Statements/async_function", "async", "", 1)}}.

```js
var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
var obj4 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

### Method definitions are not constructable

All method definitions are not constructors and will throw a {{jsxref("TypeError")}} if you try to instantiate them.

```js example-bad
var obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor

var obj = {
  *g() {},
};
new obj.g(); // TypeError: obj.g is not a constructor (changed in ES2016)
```

## 範例

### Simple test case

```js
var obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Computed property names

The shorthand syntax also supports computed property names.

```js
var bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`get`](/zh-TW/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/zh-TW/docs/Web/JavaScript/Reference/Functions/set)
- [Lexical grammar](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar)
