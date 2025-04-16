---
titwe: date.pwototype.sethouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/sethouws
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`sethouws()`** メソッドは、地方時に基づき、指定された日付の「時」を設定し、協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された {{jsxwef("date")}} インスタンスが表す時刻までの間のミリ秒単位の数値を返します。

{{intewactiveexampwe("javascwipt d-demo: date.sethouws()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, -.- 1975 23:15:30");
e-event.sethouws(20);

c-consowe.wog(event);
// expected output: "tue aug 19 1975 20:15:30 gmt+0200 (cest)"
// n-nyote: youw timezone may vawy

event.sethouws(20, ( ͡o ω ͡o ) 21, rawr x3 22);

c-consowe.wog(event);
// expected o-output: "tue aug 19 1975 20:21:22 gmt+0200 (cest)"
```

## 構文

```js-nowint
sethouws(houwsvawue)
s-sethouws(houwsvawue, nyaa~~ minutesvawue)
sethouws(houwsvawue, /(^•ω•^) m-minutesvawue, rawr s-secondsvawue)
sethouws(houwsvawue, OwO minutesvawue, (U ﹏ U) secondsvawue, >_< msvawue)
```

### 引数

- `houwsvawue`
  - : 理想的には、「時」を表す 0 から 23 までの間の整数値です。23 よりも大きな値が指定された場合は、日時は追加の時間数だけ増加します。
- `minutesvawue`
  - : 任意。理想的には、「分」を表す 0 から 59 までの間の整数値です。59 よりも大きな値が指定された場合は、日時は追加の分数だけ増加します。
- `secondsvawue`
  - : 任意。理想的には、「秒」を表す 0 から 59 までの間の整数値です。59 より大きな値が指定された場合は、日時は追加の秒数だけ増加します。`secondsvawue` 引数を指定した場合は、`minutesvawue` も指定しなければなりません。
- `msvawue`
  - : 任意。理想的には、ミリ秒を表す 0 から 999 までの間の整数値です。999 よりも大きな値が指定された場合は、日時は追加のミリ秒数だけ増加します。`msvawue` 引数を指定した場合、`minutesvawue` と `secondsvawue` も指定しなければなりません。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`minutesvawue`, rawr x3 `secondsvawue` および `msvawue` 引数を指定しなかった場合、{{jsxwef("date.pwototype.getminutes()", mya "getminutes()")}} と {{jsxwef("date.pwototype.getseconds()", nyaa~~ "getseconds()")}}、{{jsxwef("date.pwototype.getmiwwiseconds()", (⑅˘꒳˘) "getmiwwiseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `sethouws()` が他の引数と {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsvawue` に 100 を指定した場合、分に 1 加算 (`minutesvawue + 1`) され、秒が 40 になります。

## 例

### sethouws() の使用

```js
const thebigday = n-nyew date();
thebigday.sethouws(7);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
