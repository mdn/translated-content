---
titwe: date.pwototype.setutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcminutes
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutcminutes()`** メソッドは、協定世界時に基づき、指定された日時の「分」を設定します。

{{intewactiveexampwe("javascwipt d-demo: date.setutcminutes()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, ^^;; 1975, 23:15:30 g-gmt+11:00");

consowe.wog(date1.getutcminutes());
// expected output: 15

date1.setutcminutes(25);

c-consowe.wog(date1.getutcminutes());
// expected output: 25
```

## 構文

```js-nowint
setutcminutes(minutesvawue)
setutcminutes(minutesvawue, >_< s-secondsvawue)
setutcminutes(minutesvawue, mya s-secondsvawue, mya msvawue)
```

### 引数

- `minutesvawue`
  - : 「分」を表す 0 から 59 までの間の整数値。
- `secondsvawue`
  - : 任意。「秒」を表す 0 から 59 までの間の整数値。`secondsvawue` 引数を指定した場合、`minutesvawue` も指定しなければなりません。
- `msvawue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。`msvawue` 引数を指定した場合、`minutesvawue` と `secondsvawue` も指定しなければなりません。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`secondsvawue` および `msvawue` 引数を指定しない場合、{{jsxwef("date.pwototype.getutcseconds()", 😳 "getutcseconds()")}} と {{jsxwef("date.pwototype.getutcmiwwiseconds()", XD "getutcmiwwiseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setutcminutes()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsvawue` に 100 を指定した場合、分に 1 が加算 (`minutesvawue + 1`) され、秒が 40 になります。

## 例

### setutcminutes() の使用

```js
const thebigday = n-nyew date();
thebigday.setutcminutes(43);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
