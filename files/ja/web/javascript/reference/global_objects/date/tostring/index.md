---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

**`toString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時を地方時で解釈したものを表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.toString()", "shorter")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// 予想される結果: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// メモ: タイムゾーンは変化する場合があります
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

指定された日時を表す文字列（書式については解説を参照）。日付が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)である場合は `null` です。

## 解説

`toString()` メソッドは、[型変換プロトコル](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の一部です。 `Date` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) メソッドがあるため、 `Date` オブジェクトが暗黙的に[文字列へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)される場合、このメソッドが常に `toString()` よりも優先されます。ただし、 `Date.prototype[Symbol.toPrimitive]()` は、内部では依然として `this.toString()` を呼び出します。

{{jsxref("Date")}} オブジェクトは、 {{jsxref("Object")}} の {{jsxref("Object/toString", "toString()")}} メソッドを上書きします。この文字列は、日付と時刻の両方が含まれており、 {{jsxref("Date/toDateString", "toDateString()")}} と {{jsxref("Date/toTimeString", "toTimeString()")}} で指定された文字列表現が、間に空白を入れて結合されたものです。例えば、 "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)" のようになります。

`Date.prototype.toString()` は {{jsxref("Date")}} インスタンスに対して呼び出されなければなりません。もし `this` 値が `Date.prototype` を継承していない場合、 {{jsxref("TypeError")}} が発生します。

- 日付部分を取得したい場合は、 {{jsxref("Date/toDateString", "toDateString()")}} を使用してください。
- 時刻部分を取得したい場合は、 {{jsxref("Date/toTimeString", "toTimeString()")}} を使用してください。
- 日付を地方時ではなく UTC として解釈したい場合は、 {{jsxref("Date/toUTCString", "toUTCString()")}} を使用してください。
- 日付をもっとユーザーが読みやすい形式（例えばローカライズ）で整形したい場合は、 {{jsxref("Date/toLocaleString", "toLocaleString()")}} を使用してください。

## 例

### toString() の使用

```js
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
