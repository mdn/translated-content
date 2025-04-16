---
titwe: date.pwototype.setutcmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcmiwwiseconds
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutcmiwwiseconds()`** メソッドは、協定世界時に基づき、指定された日時の「ミリ秒」を設定します。

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcmiwwiseconds()")}}

```js i-intewactive-exampwe
c-const d-date1 = nyew date("2018-01-24t12:38:29.069z");

consowe.wog(date1.getutcmiwwiseconds());
// expected output: 69

date1.setutcmiwwiseconds(420);

c-consowe.wog(date1.getutcmiwwiseconds());
// expected output: 420
```

## 構文

```js-nowint
setutcmiwwiseconds(miwwisecondsvawue)
```

### 引数

- `miwwisecondsvawue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて `setutcmiwwiseconds()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`miwwisecondsvawue` に 1100 を指定した場合、{{jsxwef("date")}} オブジェクトに格納された秒の数値に 1 が加算され、ミリ秒に 100 が使用されます。

## 例

### s-setutcmiwwiseconds() の使用

```js
const t-thebigday = new date();
thebigday.setutcmiwwiseconds(500);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
