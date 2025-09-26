---
title: メソッド定義
slug: Web/JavaScript/Reference/Functions/Method_definitions
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**メソッド定義**は、オブジェクト初期化子内で関数プロパティを定義するための簡略化された構文です。また、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)内でも使用できます。

{{InteractiveExample("JavaScript デモ: メソッド定義")}}

```js interactive-example
const obj = {
  foo() {
    return "bar";
  },
};

console.log(obj.foo());
// 予想される結果: "bar"
```

## 構文

```js-nolint
({
  property(引数) {},
  *generator(引数) {},
  async property(引数) {},
  async *generator(引数) {},

  // 計算されたキー
  [式](引数) {},
  *[式](引数) {},
  async [式](引数) {},
  async *[式](引数) {},
})
```

## 解説

簡略構文は[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)や[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)構文に似ています。

以下のようなコードがあったとします。

```js
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

これを以下のように短縮することができます。

```js
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

この構文を使用して定義されたプロパティは、作成されたオブジェクトの自身のプロパティであり、通常のプロパティと同様に構成不可、列挙可能、書き込み可能です。

[`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*)、[`async function`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)、[`async function*`](/ja/docs/Web/JavaScript/Reference/Statements/async_function*) のプロパティはすべて固有のメソッド構文があります。下記にある例を参照してください。

ただし、メソッド構文は、値として関数を持つ通常のプロパティとは同等ではないことに注意してください。意味論的に、違いがあります。これにより、オブジェクトリテラルで定義されたメソッドは、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)内のメソッドとより一貫性を持つようになります。

### メソッド定義は構築可能ではない

メソッドはコンストラクターにはなれません。コンストラクターとしてインスタンス化しようとすると、 {{jsxref("TypeError")}} が発生します。 一方、関数として作成されたプロパティはコンストラクターとして使用できます。

```js example-bad
const obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor
```

### メソッド定義内での super の使用

メソッドとして定義された関数のみが [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) キーワードにアクセスすることができます。 `super.prop` は、メソッドが初期化されたオブジェクトのプロトタイプ上でプロパティを検索します。

```js-nolint example-bad
const obj = {
  __proto__: {
    prop: "foo",
  },
  notAMethod: function () {
    console.log(super.prop); // SyntaxError: 'super' keyword unexpected here
  },
};
```

## 例

### メソッド定義の使用

```js
const obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### クラス内でのメソッド定義

まったく同じ構文を使用して、クラスインスタンスで利用できるパブリックインスタンスメソッドを定義することができます。クラス内では、メソッド間を区切るカンマは必要ありません。

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
  secondPublicMethod() {
    return "goodbye world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"
```

パブリックインスタンスメソッドはクラスの `prototype` プロパティ上に定義されるため、そのクラスのすべてインスタンスで共有されます。これらは書き込み可能、列挙不可、構成不可です。

インスタンスメソッド内では、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) と [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) は通常のメソッドと同様に動作します。通常、`this` はインスタンス自体を参照します。サブクラスでは、`super` を使用することで、メソッドが添付されたオブジェクトのプロトタイプにアクセスでき、スーパークラスのメソッドを呼び出すことができます。

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod()); // "hello world"
```

静的メソッドとプライベートメソッドは似た構文を使用します。これらは [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static) および[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)のページで説明されています。

### 算出プロパティ名

メソッド構文は[算出プロパティ名](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#算出プロパティ名)にも対応しています。

```js
const bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo".toUpperCase()]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.FOO()); // 2
```

### ジェネレーターメソッド

ジェネレータープロパティ名の前にアスタリスク (`*`) が必要であることに注意してください。（すなわち、 `* g(){}` は動作しますが、 `g *(){}` は動作しません。）

```js
// 名前付きプロパティを使用
const obj = {
  g: function* () {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  *g() {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

const it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### 非同期メソッド

```js
// 名前付きプロパティ
const obj = {
  f: async function () {
    await somePromise;
  },
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  async f() {
    await somePromise;
  },
};
```

### 非同期ジェネレーターメソッド

```js
// 名前付きプロパティの使用
const obj = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// 簡略構文を使用して同じオブジェクトを生成
const obj2 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_objects)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set)
- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
