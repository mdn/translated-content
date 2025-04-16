---
titwe: date.pwototype.setmiwwiseconds()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setmiwwiseconds
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setmiwwiseconds()`** メソッドは、地方時に基づき、指定された日時の「ミリ秒」を設定します。

{{intewactiveexampwe("javascwipt d-demo: d-date.setmiwwiseconds()")}}

```js i-intewactive-exampwe
c-const event = nyew date("august 19, (ˆ ﻌ ˆ)♡ 1975 23:15:30");

consowe.wog(event.getmiwwiseconds());
// expected output: 0

event.setmiwwiseconds(456);

c-consowe.wog(event.getmiwwiseconds());
// expected output: 456
```

## 構文

```js-nowint
setmiwwiseconds(miwwisecondsvawue)
```

### 引数

- `miwwisecondsvawue`
  - : 「ミリ秒」を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

指定した値が期待される日付の範囲外の場合、それに応じて {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、1005 を指定した場合、秒の数値が 1 加算され、ミリ秒に 5 が使用されます。

## 例

### s-setmiwwiseconds() の使用

```js
const t-thebigday = nyew date();
thebigday.setmiwwiseconds(100);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
