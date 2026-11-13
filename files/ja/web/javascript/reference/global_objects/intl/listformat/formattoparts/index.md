---
title: Intl.ListFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`formatToParts()`** は {{jsxref("Intl.ListFormat")}} インスタンスのメソッドで、{{jsxref("Intl/ListFormat/format", "format()")}} によって返される書式化済み文字列のそれぞれの部分を表すオブジェクトの配列を返します。これは、ロケール固有のトークンから独自の文字列を構築する際に役立ちます。

{{InteractiveExample("JavaScript デモ: Intl.listformat.prototype.formatToParts()", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatterEn = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const formatterFr = new Intl.ListFormat("fr", {
  style: "long",
  type: "conjunction",
});

const partValuesEn = formatterEn.formatToParts(vehicles).map((p) => p.value);
const partValuesFr = formatterFr.formatToParts(vehicles).map((p) => p.value);

console.log(partValuesEn);
// 予想される結果: "["Motorcycle", ", ", "Bus", ", and ", "Car"]"
console.log(partValuesFr);
// 予想される結果: "["Motorcycle", ", ", "Bus", " et ", "Car"]"
```

## 構文

```js-nolint
formatToParts(list)
```

### 引数

- `list`
  - : 文字列の入った、Array などの反復可能オブジェクト。これを省略すると空の配列が書式化対象となってしまい、やや混乱を招く可能性があるため、常に明示的にリストを渡すことをお勧めします。

### 返値

書式化されたのリストを部分ごとに格納したオブジェクトの配列 ({{jsxref("Array")}}) です。各オブジェクトには `type` と `value` の 2 つのプロパティがあり、それぞれに文字列が格納されています。`value` を指定された順序で連結すると、{{jsxref("Intl/ListFormat/format", "format()")}} と同じ文字列になります。`type` は以下のどちらかになります。

- `literal`
  - : 書式化パターンの一部である任意の文字列。例えば、`", "`、`", and"` など。
- `element`
  - : リストの要素で、指定されたとおりのものです。

## 例

### formatToParts() の使用

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const myListFormat = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(myListFormat.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": " and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
