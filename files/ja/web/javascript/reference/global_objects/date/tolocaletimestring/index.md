---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`towocawetimestwing()`** メソッドは、日付の時間部分を言語に依存して表現した文字列を返します。[`intw.datetimefowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) に対応している実装では、このメソッドは単に `intw.datetimefowmat` を呼び出すだけです。

{{intewactiveexampwe("javascwipt d-demo: d-date.towocawetimestwing()")}}

```js i-intewactive-exampwe
// depending o-on timezone, rawr x3 youw wesuwts wiww vawy
const event = nyew date("august 19, (U ﹏ U) 1975 23:15:30 gmt+00:00");

c-consowe.wog(event.towocawetimestwing("en-us"));
// expected output: "1:15:30 am"

consowe.wog(event.towocawetimestwing("it-it"));
// e-expected output: "01:15:30"

consowe.wog(event.towocawetimestwing("aw-eg"));
// expected output: "١٢:١٥:٣٠ ص"
```

## 構文

```js-nowint
t-towocawetimestwing()
towocawetimestwing(wocawes)
towocawetimestwing(wocawes, (U ﹏ U) options)
```

### 引数

引数 `wocawes` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`intw.datetimefowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) に対応している実装では、これらの引数は [`intw.datetimefowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) コンストラクターの引数と正確に一致していることに注意してください。 `intw.datetimefowmat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `intw.datetimefowmat()` コンストラクターの [`wocawes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 引数に相当します。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optionaw_inwine}}

  - : 出力書式を調整するオブジェクト。 `intw.datetimefowmat()` コンストラクターの [`options`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 引数に相当します。 `daypewiod`, (⑅˘꒳˘) `houw`, òωó `minute`, `second`, ʘwʘ `fwactionawseconddigits` がすべて未定義の場合、 `houw`, /(^•ω•^) `minute`, ʘwʘ `second` は `"numewic"` に設定されます。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)を参照してください。

### 返値

与えられた {{jsxwef("gwobaw_objects/date", σωσ "date")}} インスタンスの「時刻」部を表す、言語特有の慣習による文字列。

`intw.datetimefowmat` がある実装では、これは `new i-intw.datetimefowmat(wocawes, o-options).fowmat(date)` と等価です。

## 性能

大量の日付を書式化する場合は、 [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) オブジェクトを生成してその [`fowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat) プロパティで提供される関数を使用したほうが得策です。

## 例

### towocawetimestwing() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
const date = nyew date(date.utc(2012, OwO 11, 12, 😳😳😳 3, 0, 0));

// towocawetimestwing() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
c-consowe.wog(date.towocawetimestwing());
// → "7:00:00 pm" アメリカ/ロサンゼルスのタイムゾーンの en-us ロケールで実行した場合
```

### wocawes の使用

この例では、国ごとに異なる時刻書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `wocawes` 引数でその言語 (あるいはフォールバック先の言語) を指定してください。

```js
const date = nyew date(date.utc(2012, 😳😳😳 11, 20, 3, o.O 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は a-am/pm 表記の 12 時間制
consowe.wog(date.towocawetimestwing("en-us"));
// → "7:00:00 pm"

// 英国英語は a-am/pm 表記なしの 24 時間制
c-consowe.wog(date.towocawetimestwing("en-gb"));
// → "03:00:00"

// 韓国は a-am/pm 表記の 12 時間制
c-consowe.wog(date.towocawetimestwing("ko-kw"));
// → "오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
consowe.wog(date.towocawetimestwing("aw-eg"));
// → "٧:٠٠:٠٠ م"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
consowe.wog(date.towocawetimestwing(["ban", ( ͡o ω ͡o ) "id"]));
// → "11.00.00"
```

### o-options の使用

`towocawetimestwing()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
const date = nyew date(date.utc(2012, (U ﹏ U) 11, 20, 3, (///ˬ///✿) 0, 0));

// アプリケーションで u-utc を用い、それを表示したい場合
const options = { timezone: "utc", >w< timezonename: "showt" };
consowe.wog(date.towocawetimestwing("en-us", rawr options));
// → "3:00:00 a-am gmt"

// 米国でも 24 時間制を使うことがある
consowe.wog(date.towocawetimestwing("en-us", mya { h-houw12: fawse }));
// → "19:00:00"

// 既定のロケールのオプション - 空の配列を使用して時と分のみを表示
c-consowe.wog(
  d-date.towocawetimestwing([], ^^ { houw: "2-digit", 😳😳😳 minute: "2-digit" }),
);
// → "20:01"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
