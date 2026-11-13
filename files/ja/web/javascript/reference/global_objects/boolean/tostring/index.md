---
title: Boolean.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("Boolean")}} 値のメソッドで、指定された論理値を表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Boolean.prototype.toString()")}}

```js interactive-example
const flag1 = new Boolean(true);

console.log(flag1.toString());
// 予想される結果: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// 予想される結果: "true"
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

指定された論理値を表す文字列です。

## 解説

{{jsxref("Boolean")}} オブジェクトは {{jsxref("Object")}} の `toString` メソッドを上書きしており、 {{jsxref("Object.prototype.toString()")}} を継承していません。`Boolean` 値の場合、`toString` メソッドは論理値の文字列表現を返します。この文字列は `"true"` または `"false"` のどちらかです。

この `toString()` メソッドは、その `this` 値が `Boolean` プリミティブまたはラッパーオブジェクトであることが要求されます。 `this` 値がそれ以外の場合、論理値への変換を試みることなく {{jsxref("TypeError")}} が発生します。

`Boolean` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドがないため、 JavaScript は文字列を期待するコンテキストで `Boolean` オブジェクトが使用された場合（例：[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals) など）、自動的に `toString()` メソッドを呼び出します。ただし、論理値のプリミティブは、[文字列への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)を行う際に `toString()` メソッドを参照しません。代わりに、元の `toString()` 実装と同じアルゴリズムを使用して直接変換されます。

```js
Boolean.prototype.toString = () => "Overridden";
console.log(`${true}`); // "true"
console.log(`${new Boolean(true)}`); // "Overridden"
```

## 例

### toString() の使用

```js
const flag = new Boolean(true);
console.log(flag.toString()); // "true"
console.log(false.toString()); // "false"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
