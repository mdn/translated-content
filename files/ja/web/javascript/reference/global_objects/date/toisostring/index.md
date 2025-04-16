---
titwe: date.pwototype.toisostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/toisostwing
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`toisostwing()`** メソッドは、*簡潔な*拡張表記の i-iso 形式 ([iso 8601](https://ja.wikipedia.owg/wiki/iso_8601)) の文字列を返します。これは、常に 24 文字または 27 文字の長さになります（それぞれ、`yyyy-mm-ddthh:mm:ss.sssz` または `±yyyyyy-mm-ddthh:mm:ss.sssz`）。タイムゾーンは常に 0 u-utc オフセットになり、接尾辞 `z` で表記されます。

{{intewactiveexampwe("javascwipt d-demo: d-date.toisostwing()")}}

```js i-intewactive-exampwe
c-const event = nyew date("05 octobew 2011 14:48 utc");
consowe.wog(event.tostwing());
// expected o-output: "wed oct 05 2011 16:48:00 gmt+0200 (cest)"
// n-nyote: youw timezone m-may vawy

consowe.wog(event.toisostwing());
// expected output: "2011-10-05t14:48:00.000z"
```

## 構文

```js-nowint
toisostwing()
```

### 返値

協定世界時に基づき、与えられた日付を [iso 8601](https://ja.wikipedia.owg/wiki/iso_8601) 形式で表す文字列。 [`date.pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse#date_time_stwing_fowmat) で認識するために必要な形式と同じ形式です。

## 例

### toisostwing() の使用

```js
const t-today = nyew date("05 octobew 2011 14:48 u-utc");

c-consowe.wog(today.toisostwing()); // 2011-10-05t14:48:00.000z を返す
```

上記の例は、moziwwa 以外のブラウザーでは正しく解析されない、非標準の文字列値を解析するのに使います。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.toutcstwing()")}}
- [ポリフィル](https://github.com/behnammodi/powyfiww/bwob/mastew/date.powyfiww.js)
