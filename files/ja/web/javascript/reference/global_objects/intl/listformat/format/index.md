---
title: Intl.ListFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`format()`** は {{jsxref("Intl.ListFormat")}} インスタンスのメソッドで、リストの言語固有の表現を文字列で返します。

{{InteractiveExample("JavaScript デモ: Intl.ListFormat.prototype.format()", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// 予想される結果: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// 予想される結果: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// 予想される結果: "Motorcycle Bus Car"
```

## 構文

```js-nolint
format(list)
```

### 引数

- `list`
  - : 文字列の入った、Array などの反復可能オブジェクトです。省略すると空の配列が書式化対象となってしまい、やや混乱を招く可能性があるため、常に明示的にリストを渡すことをお勧めします。

### 返値

リストのすべての要素を表現する、言語に依存した文字列表現です。

> [!NOTE]
> ほとんどの場合、`format()` が返す書式は一貫しています。ただし、同じロケール内であっても、実装によって出力が異なる場合があります。このような出力の違いは仕様上意図されたものであり、仕様でも許容されています。また、期待した通りの結果にならない場合もあります。例えば、文字列に非改行スペースが含まれていたり、双方向制御文字で囲まれていたりすることがあります。`format()` の結果を、ハードコーディングされた定数と比較してはいけません。

## 例

### format の使用

以下の例では、英語を使用したリストのフォーマッターの作り方を紹介します。

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.ListFormat")}}
