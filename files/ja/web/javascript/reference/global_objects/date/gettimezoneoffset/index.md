---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getTimezoneOffset()`** は {{jsxref("Date")}} インスタンスのメソッドで、協定世界時 (UTC) タイムゾーンで評価されたこの日時と、ローカルタイムゾーンで評価された同じ日時との差を分単位で返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getTimezoneOffset()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

console.log(date1.getTimezoneOffset());
// 予想される結果: 地方時の分単位の時差（-540 など）。
// Date オブジェクトの時間帯のオフセットではありません。

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// 予想される結果: true
```

## 構文

```js-nolint
getTimezoneOffset()
```

### 引数

なし。

### 返値

UTC タイムゾーンで評価された日時とローカルタイムゾーンで評価された日時の差を分単位で表した数値。実際のローカルタイムアルゴリズムは実装で定義され、適切なデータがないランタイムでは返値が 0 になることが許容されます。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

`date.getTimezoneOffset()` は、 `date` が UTC タイムゾーンで評価されたものとローカルタイムゾーンで評価されたものの差を分単位で返します。つまり、（コードがブラウザーでウェブから実行された場合）ブラウザーを使用しているホストシステムのタイムゾーン、あるいは、コードが実行された JavaScript ランタイム（例えば Node.js 環境） のホストシステムのタイムゾーンです。

### 負の値と正の値

`getTimezoneOffset()` が返す分の値は、ローカルのタイムゾーンが UTC よりも後の場合は正の値、先の場合は負の値になります。例えば、UTC+10 の場合、`-600` を返します。

| 現在のタイムゾーン | 返値 |
| ------------------ | ---- |
| UTC-8              | 480  |
| UTC                | 0    |
| UTC+3              | -180 |

### 夏時間適用地域で変化する結果

毎年夏時間 (DST) に移行する地域では、 `date` が変化すると、 `getTimezoneOffset()` を呼び出して返される分の値が一定でなくなる可能性があります。

> [!NOTE]
> `getTimezoneOffset()` の動作は、コードが実行された時間によって変わることはありません。同じ地域で実行した場合の動作は、常に一定です。結果に影響を与えるのは `date` の値のみです。

> [!NOTE]
> [多くの国では、 1 年に 2 回時間を変更しない実験をしており](https://ja.wikipedia.org/wiki/各国における夏時間)、これは、DST が冬も継続されることを意味しています。例えば、英国では、DST は 1968 年 2 月 18 日午前 2 時から 1971 年 10 月 31 日午前 3 時まで続き、冬の間に時計は戻されませんでした。

ほとんどの実装では、 [IANA time zone database](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) を使用して `date` の瞬間のローカルタイムゾーンのオフセットを正確に決定しています。しかし、そのような情報が得られない場合、実装は 0 を返すかもしれません。

## 例

### getTimezoneOffset() の使用

```js
// 現在の時刻を表す Date インスタンスを作成する
const currentLocalDate = new Date();
// 2016 年 5 月 1 日 03:24 GMT-0200 の Date インスタンスを作成する
const laborDay2016at0324GMTminus2 = new Date("2016-05-01T03:24:00-02:00");
currentLocalDate.getTimezoneOffset() ===
  laborDay2016at0324GMTminus2.getTimezoneOffset();
// 夏時間に毎年移行しないタイムゾーンでは常に true となります。
// 毎年夏時間に移行するあらゆるタイムゾーンは、 false になることがあります。
```

### getTimezoneOffset() と夏時間

夏時間が使用されている地域では、 `date` がある時期によって返値が変わることがあります。下記は、タイムゾーンが UTC-05:00 であるニューヨークでの実行時の出力結果です。

```js
const nyOffsetSummer = new Date("2022-02-01").getTimezoneOffset(); // 300
const nyOffsetWinter = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() と歴史的なデータ

歴史的な理由により、ある地域が属するタイムゾーンが、夏時間によらなくても変化していることがあります。例えば、下記はタイムゾーンが UTC+08:00 である上海での実行時の出力です。

```js
const shModernOffset = new Date("2022-01-27").getTimezoneOffset(); // -480
const shHistoricalOffset = new Date("1943-01-27").getTimezoneOffset(); // -540
```

これは、[日中戦争](https://ja.wikipedia.org/wiki/日中戦争)中で上海が日本の統制下にあった時、日本に合わせてタイムゾーンを UTC+09:00 に変更しており（実質的には「通年夏時間」）、そのことが IANA データベースに記録されていたためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date")}}
