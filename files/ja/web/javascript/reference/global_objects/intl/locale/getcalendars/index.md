---
title: Intl.Locale.prototype.getCalendars()
short-title: getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getCalendars()`** は {{jsxref("Intl.Locale")}} インスタンスのメソッドで、このロケールの 1 つ以上の固有の暦識別子の配列を返します。

> [!NOTE]
> 一部のブラウザーの一部のバージョンでは、このメソッドが `calendars` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.calendars === locale.calendars` が常に `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getCalendars()
```

### 引数

なし。

### 返値

`Locale` で一般的に使用されるすべての暦を、優先度の高い順に並べた文字列の配列。`Locale` にすでに [`calendar`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) が設定されている場合、返される配列はその値のみになります。

対応している暦の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。

## 例

### 対応している暦を取得

`Locale` オブジェクトに `calendar` が設定されていない場合、`getCalendars()` は指定された `Locale` で一般的に使用されるすべての暦をリストアップします。`calendar` を明示的に設定する例については、[`calendar` の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#例) を参照してください。

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode 暦識別子](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)（Unicode ロケールデータマークアップ言語仕様書）
