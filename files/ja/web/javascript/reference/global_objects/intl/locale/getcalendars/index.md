---
title: Intl.Locale.prototype.getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
---

{{JSRef}}

{{jsxref("Intl.Locale")}} インスタンスの **`getCalendars()`** メソッドは、 `Locale` の 1 つ以上の固有のカレンダー識別子の配列を返します。

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドが `calendars` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.calendars === locale.calendars` が常に `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getCalendars()
```

### 引数

なし。

### 返値

`Locale` で一般的に使用されるすべてのカレンダーを、優先度の高い順に並べた文字列の配列。`Locale` にすでに [`calendar`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) が設定されている場合、返される配列はその値のみになります。

対応している暦の一覧については、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。

## 例

### 対応しているカレンダーを取得

`Locale` オブジェクトに `calendar` が設定されていない場合、`getCalendars()` は指定された `Locale` で一般的に使用されるすべてのカレンダーをリストアップします。`calendar` を明示的に設定する例については、[`calendar` の例](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#例) を参照してください。

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.calendars); // logs ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.calendars); // logs ["gregory", "japanese"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
- [Unicode カレンダー識別子](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
