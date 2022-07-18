---
title: メソッド定義
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - 関数
  - JavaScript
  - 言語機能
  - オブジェクト
  - 構文
browser-compat: javascript.functions.method_definitions
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
---
{{JsSidebar("Functions")}}

ECMAScript 2015 より、オブジェクトイニシャライザーのメソッド定義のための短い構文が導入されました。これは、メソッドの名前に割り当てられた関数の簡略構文です。

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## 構文

```js
const obj = {
  get property() {},
  set property(value) {},
  property( parameters… ) {},
  *generator( parameters… ) {},
  async property( parameters… ) {},
  async* generator( parameters… ) {},

  // 算出されたキーも使用可能:
  get [property]() {},
  set [property](value) {},
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
  async [property]( parameters… ) {},
  async* [generator]( parameters… ) {},
};
```

## 解説

簡略構文は、ECMAScript 第 5 版で導入された[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)や[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)構文に似ています。

以下のようなコードがあったとします。

```js
const obj = {
  foo: function() {
    // ...
  },
  bar: function() {
    // ...
  }
}
```

これを以下のように短縮することができます。

```js
const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
}
```

### ジェネレーターメソッド

[ジェネレーターメソッド](/ja/docs/Web/JavaScript/Reference/Statements/function*)も、同様に簡略構文を使用して定義することができます。

次のように行います。

- ジェネレータープロパティ名の前にアスタリスク (`*`) が必要です。すなわち、 `* g(){}` は動作しますが、 `g *(){}` は動作しません。
- 非ジェネレーターメソッド定義では `yield` キーワードを入れることはできません。つまり [旧式のジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)は動作せず、 {{jsxref("SyntaxError")}} が発生します。 `yield` は常にアスタリスク (`*`) と一緒に使ってください。

```js
// 名前付きプロパティを使用
const obj2 = {
  g: function* () {
    let index = 0
    while (true) {
      yield index++
    }
  }
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  * g() {
    let index = 0
    while (true) {
      yield index++
    }
  }
};

const it = obj2.g()
console.log(it.next().value)  // 0
console.log(it.next().value)  // 1
```

### 非同期メソッド

{{jsxref("Statements/async_function", "非同期メソッド", "", 1)}}も簡略構文を使用して定義することができます。

```js
// 名前付きプロパティ
const obj3 = {
  f: async function () {
    await some_promise
  }
}

// 簡略構文を使用して同じオブジェクトを生成
const obj3 = {
  async f() {
    await some_promise
  }
}
```

### 非同期ジェネレーターメソッド

[ジェネレーターメソッド](/ja/docs/Web/JavaScript/Reference/Statements/function*)も{{jsxref("Statements/async_function", "非同期", "", 1)}}関数にすることができます。

```js
const obj4 = {
  f: async function* () {
    yield 1
    yield 2
    yield 3
  }
};

// 簡略構文を使用して同じオブジェクトを生成
const obj4 = {
  async* f() {
   yield 1
   yield 2
   yield 3
  }
}
```

### メソッド定義はコンストラクターではない

メソッドがコンストラクターになることはできません。インスタンス化しようとすると {{jsxref("TypeError")}} が発生します。

```js example-bad
const objA = {
  method() {}
}
new objA.method  // TypeError: obj.method is not a constructor

const objB = {
  * g() {}
}
new objB.g       // TypeError: obj.g is not a constructor (ES2016 で変更)
```

## 例

### 簡単なテストケース

```js
const obj = {
  a: 'foo',
  b() { return this.a }
};
console.log(obj.b())  // "foo"
```

### 計算されたプロパティ名

簡略構文は計算されたプロパティ名にも対応しています。

```js
const bar = {
  foo0: function() { return 0 },
  foo1() { return 1 },
  ['foo' + 2]() { return 2 }
}

console.log(bar.foo0())  // 0
console.log(bar.foo1())  // 1
console.log(bar.foo2())  // 2

// A global function
function foo() {
  return 1
}

let name = 'foo'
console.log(window[name]())  // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set)
- [字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar)
