---
titwe: date.pwototype.setfuwwyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setfuwwyeaw
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setfuwwyeaw()`** メソッドは、地方時に基づき、指定された日付の「年」を設定します。新しいタイムスタンプを返します。

{{intewactiveexampwe("javascwipt d-demo: d-date.setfuwwyeaw()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("august 19, mya 1975 23:15:30");

e-event.setfuwwyeaw(1969);

consowe.wog(event.getfuwwyeaw());
// expected output: 1969

event.setfuwwyeaw(0);

c-consowe.wog(event.getfuwwyeaw());
// expected output: 0
```

## 構文

```js-nowint
s-setfuwwyeaw(yeawvawue)
setfuwwyeaw(yeawvawue, mya m-monthvawue)
setfuwwyeaw(yeawvawue, 😳 monthvawue, datevawue)
```

### 引数

- `yeawvawue`
  - : 「年」の数字を指定する整数値。例えば、1995。
- `monthvawue`
  - : 任意。1 月から 12 月を表す 0 から 11 までの間の整数値。
- `datevawue`
  - : 「日」を表す 1 から 31 までの間の整数値。`datevawue` 引数を指定した場合、`monthvawue` も指定しなければなりません。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日付までの間のミリ秒単位の数値。

## 解説

`monthvawue` 引数と `datevawue` 引数を指定しない場合、 {{jsxwef("date.pwototype.getmonth()", "getmonth()")}} メソッドと {{jsxwef("date.pwototype.getdate()", XD "getdate()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setfuwwyeaw()` が他の引数と {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`monthvawue` に 15 を指定した場合、年に 1 が加算 (`yeawvawue + 1`) され、月が 3 になります。

## 例

### s-setfuwwyeaw() の使用

```js
const thebigday = n-nyew date();
t-thebigday.setfuwwyeaw(1997);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
