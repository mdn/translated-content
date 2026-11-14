---
title: Date.prototype.setHours()
short-title: setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

**`setFullYear()`** は {{jsxref("Date")}} インスタンスのメソッドで、現地時間に基づき、時、分、秒、ミリ秒を変更します。

{{InteractiveExample("JavaScript デモ: Date.prototype.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// 予想される結果: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// メモ: 時間帯は変化します

event.setHours(20, 21, 22);

console.log(event);
// 予想される結果: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## 構文

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### 引数

- `hoursValue`
  - : 「時」を表す 0 から 23 までの間の整数値です。
- `minutesValue` {{optional_inline}}
  - : 「分」を表す 0 から 59 までの間の整数値です。
- `secondsValue` {{optional_inline}}
  - : 「秒」を表す 0 から 59 までの間の整数値です。 `secondsValue` 引数を指定した場合は、 `minutesValue` も指定しなければなりません。
- `msValue`
  - : ミリ秒を表す 0 から 999 までの間の整数値です。999 よりも大きな値が指定された場合は、日時は追加のミリ秒数だけ増加します。`msValue` 引数を指定した場合、 `minutesValue` と `secondsValue` も指定しなければなりません。

### 返値

その場で {{jsxref("Date")}} オブジェクトを変更し、新しい[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)を返します。引数が `NaN` （または `undefined` など、 `NaN` に[変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)されるその他の値）の場合、日付は[無効な日時](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)に設定され、 `NaN` が返されます。

## 解説

`minutesValue`, `secondsValue` および `msValue` 引数を指定しなかった場合、{{jsxref("Date/getMinutes", "getMinutes()")}}、{{jsxref("Date/getSeconds", "getSeconds()")}}、{{jsxref("Date/getMilliseconds", "getMilliseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setHours()` が他の引数と {{jsxref("Date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsValue` に 100 を指定した場合、分に 1 加算 (`minutesValue + 1`) され、秒が 40 になります。

`setHours()` は現地時間を基に動作するため、夏時間 (DST) の境界を越えると、予想外の経過時間が算出されることがあります。例えば、日付の設定によって「春の移行期間（1 時間遅れる）」を跨ぐ場合、新しい日付と古い日付のタイムスタンプの差は、名目上の日数の差に24時間を掛けた値よりも 1 時間少なくなります。逆に、夏時間終了（1 時間進む）の移行期間を越えた場合は、1 時間分多く加算されます。日付を一定の時間分調整する必要がある場合は、{{jsxref("Date/setUTCHours", "setUTCHours()")}} または {{jsxref("Date/setTime", "setTime()")}} を考えてみることを検討してください。

新しい現地時刻がオフセットの移行期間内に該当する場合、正確な時刻は `Temporal` の [`disambiguation: "compatible"`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#現地時間から協定世界時_utc_への変換に伴う曖昧さや不一致) オプションと同じ動作を使用して算出されます。つまり、現地時刻が 2 つの瞬間に該当する場合は、より早い方が選択されます。現地時刻が存在しない場合（ギャップがある場合）、ギャップの期間分だけ先へ進みます。

## 例

### setHours() の使用

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
