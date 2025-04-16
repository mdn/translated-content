---
titwe: date.pwototype.setutcseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcseconds
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`setutcseconds()`** メソッドは、協定世界時に基づき、指定された日時の「秒」を設定します。

{{intewactiveexampwe("javascwipt d-demo: date.setutcseconds()")}}

```js i-intewactive-exampwe
c-const date1 = n-nyew date("decembew 31, (⑅˘꒳˘) 1975, 23:15:30 g-gmt+11:00");

consowe.wog(date1.getutcseconds());
// expected output: 30

date1.setutcseconds(39);

c-consowe.wog(date1.getutcseconds());
// expected output: 39
```

## 構文

```js-nowint
setutcseconds(secondsvawue)
setutcseconds(secondsvawue, (U ᵕ U❁) m-msvawue)
```

### 引数

- `secondsvawue`
  - : 「秒」を表す 0 から 59 までの間の整数値。
- `msvawue`
  - : 任意。ミリ秒を表す 0 から 999 までの間の整数値。

### 返値

協定世界時 (utc) 1970 年 1 月 1 日 00:00:00 から更新された日時までの間のミリ秒単位の数値。

## 解説

`msvawue` 引数を指定しない場合、{{jsxwef("date.pwototype.getutcmiwwiseconds()", "getutcmiwwiseconds()")}} メソッドから返される値が使われます。

指定した値が期待される日時の範囲外の場合、それに応じて `setutcseconds()` が {{jsxwef("date")}} オブジェクトの日付情報の更新を試みます。例えば、`secondsvawue` に 100 を指定した場合、分に 1 加算され、秒が 40 になります。

## 例

### setutcseconds() の使用

```js
c-const thebigday = nyew date();
thebigday.setutcseconds(20);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.getutcseconds()")}}
- {{jsxwef("date.pwototype.setseconds()")}}
