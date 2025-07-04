---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

**`toUTCString()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日付を [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1) 形式で表す文字列を返します。負の年を使用することができます。タイムゾーンは常に協定世界時 (UTC) です。 `toGMTString()` は、このメソッドの別名です。

{{InteractiveExample("JavaScript デモ: Date.prototype.toUTCString()", "shorter")}}

```js interactive-example
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// 予想される結果: "Wed, 14 Jun 2017 07:00:00 GMT"
```

## 構文

```js-nolint
toUTCString()
```

### 引数

なし。

### 返値

指定された日時を UTC タイムゾーンを使用して表した文字列（書式については解説を参照）。日付が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)である場合は `null` です。

## 解説

`toUTCString()` から返される文字列は、 `Www, dd Mmm yyyy HH:mm:ss GMT` の形の文字列です。

| 書式文字列 | 説明                                                   |
| ---------- | ------------------------------------------------------ |
| `Www`      | 曜日、3 文字で表す (例 Sun, Mon, ...)                  |
| `dd`       | 日、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `Mmm`      | 月、3 文字で表す (例 Jan, Feb, ...)                    |
| `yyyy`     | 年、必要に応じて先頭に 0 が付いた 4 桁以上の数字で表す |
| `hh`       | 時、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `mm`       | 分、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `ss`       | 秒、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |

### 別名

JavaScript の `Date` API は、Java の `java.util.Date` ライブラリーから着想を得ています（後者は 1997 年の Java 1.1 以降、事実上古いものとなっています）。特に、 Java の `Date` クラスには `toGMTString` というメソッドがありました。このメソッドの名前は不適切でした。なぜなら、[グリニッジ標準時](https://ja.wikipedia.org/wiki/グリニッジ標準時)は[協定世界時](https://ja.wikipedia.org/wiki/協定世界時) (UTC) と同じではないのに対し、 JavaScript の日付は常に UTC 時間で動作するからです。ウェブの互換性の理由から、 `toGMTString` は `toUTCString` の別名として残っており、これらはまったく同じ関数オブジェクトを参照しています。つまり、次のようになります。

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## 例

### toUTCString() の使用

```js
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
