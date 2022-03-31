---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
tags:
  - Boolean
  - クラス
  - JavaScript
  - リファレンス
browser-compat: javascript.builtins.Boolean
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean
---
{{JSRef}}

**`Boolean`** オブジェクトは論理値のオブジェクトラッパーです。

## 解説

最初の引数に渡された値は、必要に応じて論理値に変換されます。値が省略された場合や、値が `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}},  空文字列 (`""`) であった場合、オブジェクトは `false` の初期値を持ちます。それ以外のあらゆる値は、オブジェクトや空の配列 (`[]`)、"`false`" という文字列も含めて、 `true` の初期値を持つオブジェクトを生成します。

{{Glossary("Primitive", "プリミティブ")}}の `Boolean` 値である `true` や `false` を、 `true` や `false` の値を持った `Boolean` オブジェクトと混同しないでください。

その値が {{jsxref("undefined")}} や {{jsxref("null")}} でないオブジェクトは**すべて**、 `Boolean` オブジェクトの値が `false` である場合も含めて、条件文に渡されるとすべて `true` に評価されます。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は `true` に評価されます。

```js
var x = new Boolean(false);
if (x) {
  // このコードは実行されます。
}
```

この振る舞いは `Boolean` プリミティブには適用されません。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は `false` に評価されます。

```js
var x = false;
if (x) {
  // このコードは実行されません
}
```

`Boolean` オブジェクトを論理値でない値から論理値への変換に使わないでください。代わりに、 `Boolean` を関数として使ったり、[二重否定演算子](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT)を使用したりすることで同じことが行えます。

```js
var x = Boolean(expression);     // こちらを使うか...
var x = !!(expression);          // ...こちらを使ってください
var x = new Boolean(expression); // これは使わないでください！
```

`Boolean` オブジェクトの初期値としてオブジェクトを指定した場合、それが値が `false` の `Boolean` オブジェクトであっても、新しい `Boolean` オブジェクトは `true` の値を持ちます。

```js
var myFalse = new Boolean(false);   // 初期値は false
var g = Boolean(myFalse);       // 初期値は true
var myString = new String('Hello'); // 文字列オブジェクト
var s = Boolean(myString);      // 初期値は true
```

`Boolean` プリミティブの代わりに `Boolean` オブジェクト使用しないでください。

> **Note:** 標準外の [`document.all`](/ja/docs/Web/API/Document#properties) プロパティがこのコンストラクターの引数として使用された場合、結果は `Boolean` オブジェクトで値は `false` となります。このプロパティは古く、標準外で、使用するべきではありません。

`==` を使用して緩い比較でオブジェクトと boolean プリミティブを比較した場合、実際にはどのように比較が行われるのかを明確に理解することが重要です。以下の例を考えてみてください。

```js
if ([]) { console.log("[] is truthy")}         // "[] is truthy" と出力
if ([] == false) { console.log("[] == false")} // "[] == false" と出力
```

`[]` が真値であるにもかかわらず `[] == false` となるのは、 `[] == false` は `[]` の*値*と `false` を比較するからです。そして、 `[]` の*値*を取得するために、 JavaScript エンジンはまず `[].toString()` を呼び出します。これは `""` を返すので、*これ*が実際に `false` と比較されます。言い換えれば、 `[] == false` は `"" == false` と同じです。そして、 `""` は偽値です。ということで、この例の動作はこれで説明できます。

## コンストラクター

- {{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}
  - : 新しい `Boolean` オブジェクトを生成します。

## インスタンスメソッド

- {{jsxref("Boolean.prototype.toString()")}}
  - : このオブジェクトの値に応じて、文字列で `true` または `false` のどちらかを返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : {{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### `Boolean` オブジェクトを初期値 `false` で生成

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```

### `Boolean` オブジェクトを初期値 `true` で生成

```js
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boolean](/ja/docs/Glossary/Boolean)
- [論理値プリミティブ](/ja/docs/Web/JavaScript/Data_structures#boolean_type)
- [ブーリアン型 (Wikipedia)](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%BC%E3%83%AA%E3%82%A2%E3%83%B3%E5%9E%8B)
