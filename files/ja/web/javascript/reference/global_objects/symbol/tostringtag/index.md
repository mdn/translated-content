---
title: Symbol.toStringTag
short-title: toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.toStringTag`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#ウェルノウンシンボル)の `Symbol.toStringTag` を表します。{{jsxref("Object.prototype.toString()")}} は `this` に対して、このオブジェクトの型を表す文字列を持つプロパティを、このシンボルで探します。

{{InteractiveExample("JavaScript デモ: Symbol.toStringTag")}}

```js interactive-example
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));
// 予想される結果: "[object Validator]"
```

## 値

ウェルノウンシンボル `Symbol.toStringTag` です。

{{js_property_attributes(0, 0, 0)}}

## 例

### 既定のタグ

値によっては `Symbol.toStringTag` を持たず、特別な `toString()` 表現を持つものもあります。完全な一覧は、{{jsxref("Object.prototype.toString()")}} を参照してください。

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// … などなど
```

### 組み込み toStringTag シンボル

ほとんどの組み込みオブジェクトは、独自の `[Symbol.toStringTag]` プロパティを提供 しています。ほとんどの組み込みオブジェクト `[Symbol.toStringTag]` プロパティは書き込み不可、列挙不可、構成可能です。例外は {{jsxref("Iterator")}} で、互換性の理由から書き込み可能です。

{{jsxref("Promise")}} のようなコンストラクターオブジェクトでは、コンストラクターのすべてのインスタンスが `[Symbol.toStringTag]` を継承し、文字列化できるように、プロパティは `Constructor.prototype` にインストールされます。{{jsxref("Math")}} や {{jsxref("JSON")}} のようなコンストラクター以外のオブジェクトの場合、プロパティは静的プロパティとしてインストールされ、名前空間オブジェクト自体が文字列化できるようになります。コンストラクターが独自の `toString` メソッドを提供することもあります（例えば、{{jsxref("Intl.Locale")}}）。この場合、 `[Symbol.toStringTag]` プロパティは、明示的に `Object.prototype.toString` を呼び出した場合にのみ使用されます。

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// … などなど
```

### 独自クラスの既定のオブジェクトタグ

クラスを作成すると、 JavaScript は既定で "Object" というタグをつけます。

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

`toStringTag` を利用して、独自のカスタムタグを設定することができるようになりました。

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

### すべての DOM プロトタイプオブジェクトで利用可能な toStringTag

[WebIDL の仕様変更](https://github.com/whatwg/webidl/pull/357)が 2020 年半ばに行われた関係で、ブラウザーはすべての DOM プロトタイプオブジェクトに `Symbol.toStringTag` プロパティを追加するようになりました。例えば、{{domxref("HTMLButtonElement")}} の `Symbol.toStringTag` プロパティにアクセスするには次のようにします。

```js
const test = document.createElement("button");
test.toString(); // "[object HTMLButtonElement]"
test[Symbol.toStringTag]; // "HTMLButtonElement"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Symbol.toStringTag` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Object.prototype.toString()")}}
