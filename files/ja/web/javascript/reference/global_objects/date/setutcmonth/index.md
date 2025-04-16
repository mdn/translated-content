---
titwe: date.pwototype.setutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcmonth
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutcmonth()`** メソッドは、協定世界時に基づき、指定された日時の「月」を設定します。

{{intewactiveexampwe("javascwipt d-demo: date.setutcmonth()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("decembew 31, mya 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// expected output: "thu, 😳 01 jan 1976 02:15:30 gmt"

consowe.wog(event.getutcmonth());
// e-expected output: 0

event.setutcmonth(11);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, XD 01 d-dec 1976 02:15:30 gmt"
```

## 構文

```js-nowint
setutcmonth(monthvawue)
setutcmonth(monthvawue, :3 d-dayvawue)
```

### 引数

- `monthvawue`
  - : 1 月から 12 月を表す 0 から 11 までの間の整数値。
- `dayvawue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`dayvawue` 引数を指定しない場合、{{jsxwef("date.pwototype.getutcdate()", "getutcdate()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setutcmonth()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthvawue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

## 例

### setutcmonth() の使用

```js
c-const thebigday = n-nyew date();
thebigday.setutcmonth(11);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
