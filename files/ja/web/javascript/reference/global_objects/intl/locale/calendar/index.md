---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
tags:
  - 国際化
  - Intl
  - JavaScript
  - プロパティ
  - Locale
  - ローカライズ
  - プロトタイプ
  - リファレンス
browser-compat: javascript.builtins.Intl.Locale.calendar
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
---
{{JSRef}}

**`Intl.Locale.prototype.calendar`** プロパティは、 `Locale` で使用される暦の種類を返すアクセサープロパティです。

## 解説

`calendar` プロパティは `Locale` の一部、 `Locale` の暦を示す部分を返します。世界の大部分はグレゴリオ暦を使用していますが、世界各地で使用されている地域暦もいくつかあります。以下の表に、有効な Unicode 暦キー文字列をすべて示します。

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

## ロケール文字列へのカレンダーの追加

暦は、ロケールキーの「拡張キー」に該当します。これらのキーは、ロケールに関するデータを追加するもので、拡張子 `-u` を使用してロケール識別子に追加します。したがって、 {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターに渡される初期のロケール識別子文字列に暦の種類を追加することができます。暦の種類を追加するには、まず文字列に `-u` 拡張を追加します。次に、暦の種類を追加することを示すために `-ca` 拡張を追加します。最後に、暦を文字列に追加します。

```js
let locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist" と表示
```

### 構成オブジェクトによる暦の追加

{{jsxref("Intl/Locale/Locale", "Intl.Locale")}} コンストラクターには、オプションで構成オブジェクトの引数があり、カレンダーを含めた拡張の種類を渡すために使用することができます。構成オブジェクトの `calendar` プロパティを望みの暦の値に設定し、コンストラクターに渡します。

```js
let locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // "buddhist" と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode 暦識別子](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
