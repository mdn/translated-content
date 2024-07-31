---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{JSRef}}

**`isPrototypeOf()`** は {{jsxref("Object")}} インスタンスのメソッドで、オブジェクトが別のオブジェクトのプロトタイプチェーンに存在するかどうかを判定します。

> **メモ:** `isPrototypeOf()` は、 [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子とは異なります。 `object instanceof AFunction` という式では、`object` のプロトタイプチェーンは `AFunction` 自身ではなく、`AFunction.prototype` に対して判定されます。

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

## 構文

```js-nolint
isPrototypeOf(object)
```

### 引数

- `object`
  - : プロトタイプチェーンの検索対象。

### 返値

論理値で、呼び出されるオブジェクト (`this`) が `object` のプロトタイプチェーンにあるかどうかを示します。オブジェクト `this` がオブジェクトでない（プリミティブである）場合は `false` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `this` が `null` または `undefined` の場合に発生します（オブジェクトに[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#オブジェクト変換)できないため）。

## 解説

`Object.prototype` を継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべて）は、 `isPrototypeOf()` メソッドを継承します。このメソッドによって、オブジェクトが他のオブジェクトのプロトタイプチェーンの中に存在するかどうかを調べることができます。引数として渡された `object` がオブジェクトでない（つまりプリミティブである）場合、このメソッドは直接 `false` を返します。そうでない場合、 `this` 値は[オブジェクトに変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)され、 `object` のプロトタイプチェーンを、チェーンの終端に達するか、 `this` 値が見つかるまで探します。

## 例

### isPrototypeOf の使用

この例は、`baz` オブジェクトのプロトタイプチェーンに、`Baz.prototype` と `Bar.prototype`、`Foo.prototype`、`Object.prototype` が存在しているデモです。

```js
class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// プロトタイプチェーン:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

`isPrototypeOf()` メソッドは、{{jsxref("Operators/instanceof", "instanceof")}} 演算子と同様に、特定のプロトタイプチェーンから継承されたオブジェクトを扱うときにのみ機能するコードを持つ場合、たとえばそのオブジェクトに特定のメソッドやプロパティが存在することを保証する場合に特に便利です。

たとえば、`baz` オブジェクトが `Foo.prototype` に由来しているか検証してみます。

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

しかし、 `Foo.prototype` が `baz` のプロトタイプチェーンに存在したからといって、 `baz` が `Foo` をコンストラクターとして使用して作成されたとは限りません。例えば、 `baz` が `Foo.prototype` をプロトタイプとして直接割り当てることもできます。この場合、コードが `baz` から `Foo` の[プライベートフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_properties)を読み込んでも、失敗します。

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.prototype.isPrototypeOf(baz)) {
  console.log(Foo.getValue(baz)); // TypeError: クラスが宣言していないオブジェクトからプライベートメンバー #value を読み取ることはできません。
}
```

[`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) も同様です。プライベートフィールドを安全な方法で読み取る必要がある場合は、代わりに [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) を使用してブランデッドチェックメソッドを提供してください。

```js
class Foo {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
  static isFoo(x) {
    return #value in x;
  }
}

const baz = { __proto__: Foo.prototype };

if (Foo.isFoo(baz)) {
  // baz は Foo でないため実行されない
  console.log(Foo.getValue(baz));
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
