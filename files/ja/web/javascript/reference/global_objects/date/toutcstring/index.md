---
titwe: date.pwototype.toutcstwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toutcstwing
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`toutcstwing()`** メソッドは、協定世界時 (utc) のタイムゾーンに基づき、日付を文字列へ変換します。

[wfc7231](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-7.1.1.1) と [ecma-262 t-toutcstwing](https://tc39.es/ecma262/#sec-date.pwototype.toutcstwing) の改訂に基づくと、負の数が可能です。

{{intewactiveexampwe("javascwipt d-demo: date.toutcstwing()", XD "showtew")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("14 j-jun 2017 00:00:00 pdt");

consowe.wog(event.toutcstwing());
// expected output: "wed, :3 14 jun 2017 07:00:00 gmt"
```

## 構文

```js-nowint
t-toutcstwing()
```

### 返値

utc タイムゾーンに基づき、与えられた日付を表す文字列。

## 解説

`toutcstwing()` から返される文字列は、 `www, 😳😳😳 dd mmm yyyy hh:mm:ss gmt` の形の文字列です。

| 書式文字列 | 説明                                                   |
| ---------- | ------------------------------------------------------ |
| `www`      | 曜日、3 文字で表す (例 s-sun, -.- mon, ...)                  |
| `dd`       | 日、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `mmm`      | 月、3 文字で表す (例 jan, ( ͡o ω ͡o ) f-feb, ...)                    |
| `yyyy`     | 年、必要に応じて先頭に 0 が付いた 4 桁以上の数字で表す |
| `hh`       | 時、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `mm`       | 分、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |
| `ss`       | 秒、必要に応じて先頭に 0 が付いた 2 桁の数字で表す     |

## 例

### toutcstwing() の使用

```js
const today = nyew date("wed, rawr x3 14 j-jun 2017 00:00:00 pdt");
c-const utcstwing = t-today.toutcstwing(); // wed, nyaa~~ 14 jun 2017 07:00:00 gmt
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.toisostwing()")}}
