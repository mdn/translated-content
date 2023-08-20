---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
---

{{JSRef}}

**`Symbol.unscopables`** ウェルノウンシンボルは、自身のプロパティ名と継承されたプロパティ名が、関連付けられたオブジェクトの [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 環境バインディングから除外されているオブジェクトの値を指定するために使用されます。

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## 解説

The `@@unscopables` シンボル (`Symbol.unscopables`) は、 [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 環境バインディングでプロパティ名が語彙的変数として公開されないようにするために、任意のオブジェクトに定義することができます。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)を使用している場合、 `with` 文は使用できず、このシンボルも必要ないことに注意してください。

`unscopables` オブジェクトでプロパティを `true` に設定すると、そのプロパティは*スコープ不能*になり、語彙的スコープ変数には表示されません。プロパティを `false` に設定すると、 `scopable` になり、語彙的スコープ変数に表示されます。

{{js_property_attributes(0,0,0)}}

## 例

### with 文内のスコープ

次のコードは、ES5 以下であれば正しく動作します。しかし、 ECMAScript 2015（ES6）以降では、{{jsxref("Array.prototype.keys()")}} メソッドが導入されました。これは、`with` 環境内で "keys" はメソッドであり変数ではないことを意味します。これが `unscopable` シンボルを導入すべき時です。ビルトインの `unscopables` 設定は、配列のメソッドのいくつかが `with` 環境のスコープに入らないようにするために、{{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} として実装されています。

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

### オブジェクト内の unscopables

自分のオブジェクトに `unscopables` を設定することもできます。

```js
var obj = {
  foo: 1,
  bar: 2,
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true,
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.unscopables")}}

## 関連情報

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文 ([厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では利用不可)
