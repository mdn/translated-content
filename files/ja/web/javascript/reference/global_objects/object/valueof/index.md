---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`valueOf()`** は {{jsxref("Object")}} インスタンスのメソッドで、 `this` 値を[オブジェクトに](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#オブジェクト変換)変換します。このメソッドは、派生オブジェクトでは独自の[型変換](/ja/docs/Web/JavaScript/Data_structures#型変換)ロジックのためにオーバーライドされるためのものです。

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## 構文

```js-nolint
valueOf()
```

### 引数

なし。

### 返値

指定されたオブジェクトのプリミティブ値を返します。

> [!NOTE]
> 型変換の際に `valueOf` が有益であるためには、プリミティブを返す必要があります。すべてのプリミティブ型は自分自身で `valueOf()` メソッドを持っているので、一般的に `aPrimitiveValue.valueOf()` を呼び出しても `Object.prototype.valueOf()` は呼び出されません。

## 解説

JavaScript は `valueOf` メソッドを、[オブジェクトをプリミティブな値に変換](/ja/docs/Web/JavaScript/Data_structures#型変換)するときに呼び出します。あなたが自分で `valueOf` メソッドを実行する必要はほとんどなく、プリミティブな値が期待される場面にオブジェクトが出くわしたとき JavaScript が自動的に実行します。

このメソッドは[数値変換](/ja/docs/Web/JavaScript/Data_structures#数値変換)と[プリミティブ変換](/ja/docs/Web/JavaScript/Data_structures#プリミティブ変換)で優先的に呼び出されますが、[文字列変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)では `toString()` が優先的に呼び出され、 `toString()` は文字列値を返す可能性がとても高いので（{{jsxref("Object.prototype.toString()")}} の基本実装でも）、この場合 `valueOf()` は通常呼び出されません。

`Object.prototype` 継承するすべてのオブジェクト（つまり、 [`null` プロトタイプオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object#null_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `toString()` メソッドを継承しています。 `Object.prototype.valueOf()` の基本実装は、意図的に有益なものになっていません。オブジェクトを返すことで、その返値はどのような[プリミティブ変換アルゴリズム](/ja/docs/Web/JavaScript/Data_structures#型変換)でも使用することはありません。多くの組み込みオブジェクトは、適切なプリミティブ値を返すためにこのメソッドを上書きします。独自オブジェクトを作成する場合は、 `valueOf()` を上書きして独自メソッドを呼び出すことで、独自オブジェクトをプリミティブ値に変換することができます。一般的に、 `valueOf()` はオブジェクトにとって最も意味のある値を返すために使用します。 `toString()` とは異なり、文字列である必要はありません。また、[`@@toPrimitive`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドを追加することもできます。このメソッドでは、変換処理をさらに制御することができ、型変換の際には常に `valueOf` や `toString` よりも優先されます。

## 例

### valueOf() の使用

基本の `valueOf()` メソッドは、 `this` の値自身を返しますが、まだオブジェクトに変換されていない場合はオブジェクトに変換されます。そのため、その返り値はどのようなプリミティブ変換アルゴリズムでも使用されることはありません。

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### 独自オブジェクトにおける valueOf のオーバーライド

既定の `valueOf` メソッドの代わりに呼び出される関数を作成することができます。型変換中に呼び出されるときには引数を渡されないので、関数は引数として取るべきではありません。

例えば、独自クラス `Box` に `valueOf` メソッドを追加するには次のようにします。

```js
class Box {
  #value;
  constructor(value) {
    this.#value = value;
  }
  valueOf() {
    return this.#value;
  }
}
```

先のコードにおいて、 `Box` 型のオブジェクトがプリミティブ値（特に文字列ではない）として表現されるコンテキストで使用されるとき、 JavaScript で自動的に先のコードで定義されている関数が呼び出されます。

```js
const box = new Box(123);
console.log(box + 456); // 579
console.log(box == 123); // true
```

オブジェクトの `valueOf` メソッドは通常 JavaScript によって呼び出されますが、従うこと以下で自分で呼び出すこともできます。

```js
box.valueOf();
```

### 単項プラスの使用

[単項プラス](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus)は、オペランドに対して[数値変換](/ja/docs/Web/JavaScript/Data_structures#数値変換)を行います。これは、 [`@@toPrimitive`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) を持たないほとんどのオブジェクトでは、 `valueOf()` を呼び出すことを意味しています。しかし、オブジェクトに独自の `valueOf()` メソッドがない場合、基本実装では `valueOf()` は無視され、代わりに `toString()` の返値が使用されます。

```js
+new Date(); // 現在のタイムスタンプ。 new Date().getTime() と同じ
+{}; // NaN （toString() は "[object Object]" を返す）
+[]; // 0 （toString() は空の文字列リストを返す）
+[1]; // 1 （toString() は "1" を返す）
+[1, 2]; // NaN （toString() は "1,2" を返す）
+new Set([1]); // NaN （toString() は "[object Set]" を返す）
+{ valueOf: () => 42 }; // 42
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
