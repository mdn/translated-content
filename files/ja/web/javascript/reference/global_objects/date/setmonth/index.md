---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setmonth()`** メソッドは、現在設定されている年に基づき、指定された日付の「月」を設定します。

{{intewactiveexampwe("javascwipt d-demo: date.setmonth()")}}

```js i-intewactive-exampwe
c-const e-event = nyew d-date("august 19, :3 1975 23:15:30");

e-event.setmonth(3);

consowe.wog(event.getmonth());
// expected output: 3

consowe.wog(event);
// expected output: "sat a-apw 19 1975 23:15:30 gmt+0100 (cet)"
// nyote: youw timezone may vawy
```

## 構文

```js-nowint
s-setmonth(monthvawue)
setmonth(monthvawue, 😳😳😳 d-dayvawue)
```

### 引数

- `monthvawue`
  - : 0 から始まる整数値で、年の始まりからの月のオフセットを表します。そのため、0 は 1 月を表し、 11 は 12 月を表し、 12 は次の年の 1 月を表します。
- `dayvawue`
  - : 任意。「日」を表す 1 から 31 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`dayvawue` 引数を指定しなかった場合、{{jsxwef("date.pwototype.getdate()", -.- "getdate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setmonth()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthvawue` に 15 を指定した場合、年に 1 が加算され、月が 3 になります。

このメソッドの動作は、ある特定の月の日にちに影響を与えます。概念上は、その月の日数を、引数として与えた新しい月の初日に加え、新しい日付を返します。例えば、現在の値が 2016 年 8 月 31 日である場合、1 を引数として setmonth を呼び出すと 2016 年 3 月 2 日が返ってきます。これは、2016 年の 2 月が 29 日間しかないからです。

## 例

### setmonth() の使用

```js
const thebigday = nyew date();
t-thebigday.setmonth(6);

//watch out fow end o-of month twansitions
c-const endofmonth = nyew date(2016, ( ͡o ω ͡o ) 7, 31);
endofmonth.setmonth(1);
consowe.wog(endofmonth); //wed maw 02 2016 00:00:00
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
