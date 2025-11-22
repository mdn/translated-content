---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
---

{{jsxref("Intl.Locale")}} インスタンスの **`getTimeZones()`** メソッドは、このロケールに対応しているタイムゾーンのリストを返します。

> [!NOTE]
> 一部のブラウザーのあるバージョンでは、このメソッドが `timeZones` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しい配列を返すため、`locale.timeZones === locale.timeZones` が `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性y)の表を確認してください。

## 構文

```js-nolint
getTimeZones()
```

### 引数

なし。

### 返値

関連する `Locale` で対応しているタイムゾーンを表す文字列の配列。各値は [正規化されたIANA タイムゾーン名](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)で、アルファベット順にソートされています。ロケール識別子に地域サブタグが含まれていない場合、返される値は `undefined` です。

> [!NOTE]
> `Temporal` の標準化では、ブラウザーは常に IANA データベースの主識別子を返すことが求められており、これは時間とともに変わる可能性があります。詳細については、[タイムゾーンとオフセット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)を参照してください。

## 例

### 対応しているタイムゾーンの取得

指定された `Locale` で対応しているタイムゾーンをリストアップします。

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getTimeZones()); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getTimeZones()); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTimeZones()); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
- [IANA タイムゾーンデータベース](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (Wikipedia)
