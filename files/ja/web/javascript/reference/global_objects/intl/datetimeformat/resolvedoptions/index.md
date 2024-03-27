---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
---

{{JSRef}}

**`Intl.DateTimeFormat.prototype.resolvedOptions()`** メソッドは、この {{jsxref("Intl/DateTimeFormat")}} オブジェクトの初期化時に計算されたロケールや日付と時刻の整形オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

## 構文

```js
resolvedOptions();
```

### 返値

この {{jsxref("Intl/DateTimeFormat")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには以下のプロパティがあります。

- `locale`
  - : 実際に使用したロケールの BCP 47 言語タグ。このロケールにつながる入力 BCP 47 言語タグに Unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `locale` に含まれます。
- `calendar`
  - : 例: "gregory"
- `numberingSystem`
  - : Unicode 拡張キーの `"ca"` および `"nu"` で要求された値、または既定値が入ります。
- `timeZone`
  - : `options` 引数の同名のプロパティで要求された値です。提供された値がなければ {{jsxref("undefined")}} (ランタイムの既定のタイムゾーン) です。警告: アプリケーションは {{jsxref("undefined")}} が返されることに依存しないでください。将来のバージョンではランタイムの既定のタイムゾーンを識別する {{jsxref("String")}} 値が返されるようになる可能性があるからです。
- `hour12`
  - : `options` 引数の同名のプロパティで要求された値、または既定値が入ります。
- `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`
  - : `options` 引数の対応するプロパティと、選択したロケールでの日付時刻の書式設定に利用可能な組み合わせや表現との間で、書式のマッチングを行った結果の値。これらのプロパティの中には、対応するコンポーネントが書式化された出力では表現されないものもあります。

## 例

### resolvedOptions メソッドの使用

```js
var germanFakeRegion = new Intl.DateTimeFormat("de-XX", { timeZone: "UTC" });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.calendar; // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone; // "UTC"
usedOptions.month; // "numeric"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
