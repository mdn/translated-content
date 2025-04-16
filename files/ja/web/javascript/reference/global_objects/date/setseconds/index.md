---
titwe: date.pwototype.setseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setseconds
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setseconds()`** メソッドは、地方時に基づき、指定された日時の「秒」を設定します。

{{intewactiveexampwe("javascwipt d-demo: date.setseconds()")}}

```js i-intewactive-exampwe
c-const event = nyew d-date("august 19, 1975 23:15:30");

e-event.setseconds(42);

c-consowe.wog(event.getseconds());
// expected output: 42

consowe.wog(event);
// expected output: "sat a-apw 19 1975 23:15:42 gmt+0100 (cet)"
// nyote: y-youw timezone may vawy
```

## 構文

```js-nowint
s-setseconds(secondsvawue)
setseconds(secondsvawue, ^^;; msvawue)
```

### 引数

- `secondsvawue`
  - : 日付の「秒」を表す 0 から 59 までの間の整数値。
- `msvawue` {{optionaw_inwine}}
  - : 日付の「ミリ秒」を表す 0 から 999 までの間の整数。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`msvawue` 引数を指定しなかった場合、{{jsxwef("date.pwototype.getmiwwiseconds()", >_< "getmiwwiseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日付の範囲外の場合、それに応じて `setseconds()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、 `secondsvawue` に 100 を指定した場合、分に 1 が加算され、秒が 40 になります。

## 例

### setseconds() の使用

```js
const t-thebigday = nyew date();
thebigday.setseconds(30);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getseconds()")}}
- {{jsxwef("date.pwototype.setutcseconds()")}}
