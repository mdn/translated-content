---
title: Intl.Locale.prototype.calendars
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
  - Calendars
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
browser-compat: javascript.builtins.Intl.Locale.calendars
---
{{JSRef}}

**`Intl.Locale.prototype.calendars`** プロパティは、 `Locale` のカレンダー識別子の配列を返すアクセサープロパティです。

## 解説

`calendar` プロパティは、 `Locale` で対応しているすべてのカレンダーを配列で返します。配列の項目は、 `Locale` オブジェクトの暦年代を表します。以下の表は、有効なすべての Unicode 暦キー文字列と、それらが表す暦の時代の説明を示しています。

### Unicode 暦キー

- `buddhist`
  - : タイの仏教暦
- `chinese`
  - : 古来の中国の暦
- `coptic`
  - : コプト暦
- `dangi`
  - : 古来の韓国の暦
- `ethioaa`
  - : Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)
- `ethiopic`
  - : Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)
- `gregory`
  - : グレゴリオ暦
- `hebrew`
  - : 古来のヘブライ暦
- `indian`
  - : インド暦
- `islamic`
  - : イスラム暦
- `islamic-umalqura`
  - : イスラム暦、ウンムアルクーラ
- `islamic-tbla`
  - : イスラム暦、表形式 (閏年 [2,5,7,10,13,16,18,21,24,26,29] - 天体暦)
- `islamic-civil`
  - : イスラム暦、表形式 (閏年 [2,5,7,10,13,16,18,21,24,26,29] - 市民暦)
- `islamic-rgsa`
  - : イスラム暦、サウジアラビア地方
- `iso8601`
  - : ISO カレンダー (ISO 8601 カレンダーの曜日規則を使用したグレゴリオ暦)
- `japanese`
  - : 日本の皇紀
- `persian`
  - : ペルシャ暦
- `roc`
  - : 中華民国暦 (中華民国)
- `islamicc`
  - : シビル（アルゴリズム）アラビア暦
    > **Warning:** `islamicc` 暦は非推奨です。 `islamic-civil` を使用してください。

## 例

### 対応しているカレンダーを取得

この `Locale` が対応しているカレンダーをリスト出力します。

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
- [Unicode カレンダー識別子](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
