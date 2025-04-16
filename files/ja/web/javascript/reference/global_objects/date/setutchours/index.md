---
titwe: date.pwototype.setutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutchouws
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutchouws()`** メソッドは、協定世界時に基づき、指定された日付の「時」を設定し、協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxwef("date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。

{{intewactiveexampwe("javascwipt d-demo: date.setutchouws()")}}

```js i-intewactive-exampwe
c-const e-event = nyew date("august 19, ( ͡o ω ͡o ) 1975 23:15:30 g-gmt-3:00");

c-consowe.wog(event.toutcstwing());
// expected output: "wed, rawr x3 20 aug 1975 02:15:30 gmt"

consowe.wog(event.getutchouws());
// e-expected output: 2

event.setutchouws(23);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, nyaa~~ 20 a-aug 1975 23:15:30 gmt"
```

## 構文

```js-nowint
setutchouws(houwsvawue)
setutchouws(houwsvawue, /(^•ω•^) m-minutesvawue)
setutchouws(houwsvawue, rawr m-minutesvawue, OwO s-secondsvawue)
setutchouws(houwsvawue, (U ﹏ U) minutesvawue, >_< secondsvawue, rawr x3 msvawue)
```

### 引数

- `houwsvawue`
  - : 「時」を表す 0 から 23 までの間の整数値。
- `minutesvawue`
  - : 任意。「分」を表す 0 から 59 までの間の整数値。
- `secondsvawue`
  - : 任意。「秒」を表す 0 から 59 までの間の整数値。`secondsvawue` 引数を指定した場合、`minutesvawue` も指定しなければなりません。
- `msvawue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。`msvawue` 引数を指定した場合、`minutesvawue` と `secondsvawue` も指定しなければなりません。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`minutesvawue`, mya `secondsvawue` および `msvawue` 引数を指定しない場合、{{jsxwef("date.pwototype.getutcminutes()", nyaa~~ "getutcminutes()")}} と {{jsxwef("date.pwototype.getutcseconds()", (⑅˘꒳˘) "getutcseconds()")}}、{{jsxwef("date.pwototype.getutcmiwwiseconds()", rawr x3 "getutcmiwwiseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setutchouws()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsvawue` に 100 を指定した場合、分に 1 が加算 (`minutesvawue + 1`) され、秒が 40 になります。

## 例

### setutchouws() の使用

```js
c-const thebigday = nyew date();
thebigday.setutchouws(8);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutchouws()")}}
- {{jsxwef("date.pwototype.sethouws()")}}
