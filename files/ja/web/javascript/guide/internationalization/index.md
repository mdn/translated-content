---
title: 国際化
slug: Web/JavaScript/Guide/Internationalization
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}

`Intl` オブジェクトは、 ECMAScript Internationalization API の名前空間であり、ロケールや文化に配慮した幅広いデータや操作を指定して提供します。

## 日付と時刻の書式化

{{jsxref("Intl.DateTimeFormat")}} オブジェクトは、日付と時刻の書式化に便利です。次の形式は、米国で使用されている英語の日付の書式です。（結果はタイムゾーンごとに異なります。）

```js
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// ローカルタイムゾーンは、設定によって異なります。
// CEST の場合の出力: 07/17/14, 02:00 AM GMT+2
// PDT の場合の出力: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
```

## 数値の書式化

{{jsxref("Intl.NumberFormat")}} オブジェクトは、例えば通貨などの数値の書式化に便利なオブジェクトです。

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

## 照合

{{jsxref("Intl.Collator")}} オブジェクトは、文字列の比較やソートに有益なオブジェクトです。

例えば、ドイツ語には実際、「電話帳順」と「辞書順」という 2 つの異なるソート順があります。電話帳順では音が強調され、ソート前に "ä", "ö" などの文字が "ae", "oe" などのように展開されたかのように表示されます。

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// ["Hochberg", "Hoenigswald", "Holzman"] であるかのようにソートされる
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

ドイツ語にはウムラウト付きで活用する単語があるため、辞書ではウムラウトを無視して並べ替えるのが合理的です（schon と schön のような、ウムラウトのみが異なる単語を並べる場合を除く）。

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// ["Hochberg", "Honigswald", "Holzman"] であるかのようにソートされる
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

{{jsxref("Intl")}} API に関する詳細情報は、 [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/) もご覧ください。

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Meta_programming")}}
