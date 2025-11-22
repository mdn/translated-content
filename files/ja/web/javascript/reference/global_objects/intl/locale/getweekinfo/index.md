---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
---

{{jsxref("Intl.Locale")}} インスタンスの **`getWeekInfo()`** メソッドは、このロケールに対して `firstDay`、`weekend`、`minimalDays` プロパティを持つ `weekInfo` オブジェクトを返します。

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドが `weekInfo` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しいオブジェクトを返すため、`locale.weekInfo === locale.weekInfo` が `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getWeekInfo()
```

### 引数

なし。

### 返値

[UTS 35 の Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) で指定されたロケールデータに関連付けられた週情報を表すオブジェクト。このオブジェクトは以下のプロパティを持ちます。

- `firstDay`
  - : 1（月曜日）から 7（日曜日）までの整数で、ロケールにおける週の最初の曜日を示します。一般的には 1、5、6、または 7 です。
- `weekend`
  - : 1 から 7 までの整数の配列で、ロケールにおける週末の曜日を示します。UTS 35 では代わりに `weekendStart` と `weekendEnd` として格納しているため、通常は連続した値になります。
- `minimalDays`
  - : 1 から 7 までの整数（一般的には 1 または 4）で、月または年の最初の週に必要な最小日数を示し、年の週番号または月の週番号の計算（例：年の第 20 週）に使用されます。例えば、[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) カレンダーでは、年の最初の週はその年に少なくとも 4 日間が含まれている必要があるため、1 月 1 日が金曜日、土曜日、または日曜日の場合、前年の最後の週の一部として番号付けされます。

## 例

### 週情報の取得

指定された `Locale` の週情報を返します。

```js
const he = new Intl.Locale("he"); // ヘブライ語（イスラエル）
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // アフリカーンス語（南アフリカ）
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // 英語（イギリス）
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // アラビア語（アフガニスタン）
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // ディベヒ語（モルディブ）
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
