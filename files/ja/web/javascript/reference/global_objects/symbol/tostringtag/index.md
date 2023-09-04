---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}

**`Symbol.toStringTag`** ウェルノウンシンボルは、オブジェクトを説明する既定の文字列の作成に使用される文字列値のプロパティです。 {{jsxref("Object.prototype.toString()")}} メソッドによって内部的にアクセスされます。

{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}{{js_property_attributes(0,0,0)}}

## 例

### 既定のタグ

```js
Object.prototype.toString.call("foo"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// ... and more
```

### 組込み toStringTag シンボル

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
```

### 独自クラスの既定のオブジェクトタグ

クラスを作成すると、 JavaScript は既定で "Object" というタグをつけます。

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

### toStringTag による独自タグ

`toStringTag` を使えば、独自のタグを設定することができます。

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
let test = document.createElement("button");
test.toString(); // Returns [object HTMLButtonElement]
test[Symbol.toStringTag]; // Returns HTMLButtonElement
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.toStringTag")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
