---
titwe: date.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing
w-w10n:
  s-souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`towocawestwing()`** メソッドは、この日付の言語依存の表現による文字列を返します。[`intw.datetimefowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) に対応している実装では、このメソッドは単に `intw.datetimefowmat` を呼び出すだけです。

{{intewactiveexampwe("javascwipt d-demo: date.towocawestwing()")}}

```js i-intewactive-exampwe
c-const event = nyew date(date.utc(2012, :3 11, 20, 3, -.- 0, 0));

// bwitish engwish uses day-month-yeaw o-owdew and 24-houw time without am/pm
consowe.wog(event.towocawestwing("en-gb", 😳 { t-timezone: "utc" }));
// expected o-output: "20/12/2012, mya 03:00:00"

// kowean uses yeaw-month-day owdew and 12-houw t-time with am/pm
consowe.wog(event.towocawestwing("ko-kw", (˘ω˘) { t-timezone: "utc" }));
// e-expected output: "2012. >_< 12. 20. -.- 오전 3:00:00"
```

## 構文

```js-nowint
towocawestwing()
towocawestwing(wocawes)
towocawestwing(wocawes, 🥺 o-options)
```

### 引数

引数 `wocawes` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`intw.datetimefowmat` api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) に対応している実装では、これらの引数は [`intw.datetimefowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) コンストラクターの引数と正確に一致していることに注意してください。 `intw.datetimefowmat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `wocawes` {{optionaw_inwine}}

  - : bcp 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `intw.datetimefowmat()` コンストラクターの [`wocawes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 引数に相当します。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optionaw_inwine}}

  - : 出力書式を調整するオブジェクト。 `intw.datetimefowmat()` コンストラクターの [`options`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 引数に相当します。 `timestywe` オプションは未定義でなければならず、そうでない場合は {{jsxwef("typeewwow")}} が発生します。 `weekday`, `yeaw`, (U ﹏ U) `month`, >w< `day`, `daypewiod`, mya `houw`, `minute`, >w< `second`, nyaa~~ `fwactionawseconddigits` がすべて未定義の場合、 `yeaw`, (✿oωo) `month`, `day`, ʘwʘ `houw`, `minute`, (ˆ ﻌ ˆ)♡ `second` は `"numewic"` に設定されます。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)を参照してください。

### 返値

指定された日付を、言語固有の仕様に従って表現した文字列。

`intw.datetimefowmat` がある実装では、これは `new intw.datetimefowmat(wocawes, 😳😳😳 options).fowmat(date)` と等価です。

## 例

### towocawestwing() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
c-const date = nyew date(date.utc(2012, :3 11, 12, OwO 3, 0, 0));

// t-towocawestwing() メソッドに引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
c-consowe.wog(date.towocawestwing());
// → "12/11/2012, (U ﹏ U) 7:00:00 p-pm" : アメリカ/ロサンゼルスのタイムゾーンの e-en-us ロケールで実行した場合
```

### wocawes と options に対応しているか確認する

`wocawes` と `options` は、まだすべてのブラウザーが対応している訳ではありません。これらが実装されているかどうかは、不適切な言語タグを与えて {{jsxwef("wangeewwow")}} 例外で拒否されるかどうかで確かめられます。

```js
f-function towocawestwingsuppowtswocawes() {
  twy {
    n-nyew date().towocawestwing("i");
  } catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### wocawes の使用

この例では、国ごとに異なる日時の書式を示します。ご使用のアプリケーションのユーザーインターフェイスで使用される言語の書式を得るには、 `wocawes` でその言語 (あるいは代替言語) を指定してください。

```js
c-const date = nyew date(date.utc(2012, >w< 11, (U ﹏ U) 20, 3, 0, 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順で a-am/pm 表記の 12 時間制
c-consowe.wog(date.towocawestwing("en-us"));
// → "12/19/2012, 😳 7:00:00 p-pm"

// 英国英語は日-月-年の順で am/pm 表記なしの 24 時間制
consowe.wog(date.towocawestwing("en-gb"));
// → "20/12/2012 03:00:00"

// 韓国は年-月-日の順で am/pm 表記の 12 時間制
c-consowe.wog(date.towocawestwing("ko-kw"));
// → "2012. (ˆ ﻌ ˆ)♡ 12. 20. 오후 12:00:00"

// 多くのアラビア語圏ではアラビア数字を使用
c-consowe.wog(date.towocawestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 日本のアプリケーションでは元号を用いることがある
// 2012 年は平成 24 年
consowe.wog(date.towocawestwing("ja-jp-u-ca-japanese"));
// → "24/12/20 12:00:00"

// 対応していない可能性のある言語を要求した場合、たとえば
// ここではバリ語とし、代替言語にインドネシア語
c-consowe.wog(date.towocawestwing(["ban", 😳😳😳 "id"]));
// → "20/12/2012 11.00.00"
```

### o-options の使用

`towocawestwing()` メソッドから得られる結果は、`options` でカスタマイズできます。

```js
const d-date = nyew date(date.utc(2012, (U ﹏ U) 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
c-const options = {
  weekday: "wong", (///ˬ///✿)
  yeaw: "numewic", 😳
  m-month: "wong", 😳
  day: "numewic", σωσ
};

c-consowe.wog(date.towocawestwing("de-de", rawr x3 options));
// → "donnewstag, OwO 20. /(^•ω•^) d-dezembew 2012"

// アプリケーションで u-utc を用いてそれを示したい場合
options.timezone = "utc";
options.timezonename = "showt";

consowe.wog(date.towocawestwing("en-us", 😳😳😳 options));
// → "thuwsday, ( ͡o ω ͡o ) decembew 20, 2012, >_< gmt"

// 米国でも 24 時間制を使うことがある
c-consowe.wog(date.towocawestwing("en-us", >w< { h-houw12: fawse }));
// → "12/19/2012, rawr 19:00:00"
```

### 書式化した日付値を固定値と比較しないでください

たいていの場合、 `towocawestwing()` が返す書式は一貫しています。しかし、これは将来的に変更される可能性があり、すべての言語で保証されているわけではありません。

特に注目すべきは、ie および edge ブラウザーは日付の周りに書字方向の制御文字を挿入するため、出力テキストが他のテキストと連結されたときに適切に流れるようになっています。

このことから、 `towocawestwing()` を固定値と比較できると期待してはいけません。

```js e-exampwe-bad
"1/1/2019, 😳 01:00:00" ===
  n-nyew date("2019-01-01t01:00:00z").towocawestwing("en-us");
// t-twue in fiwefox and othews
// fawse in ie and edge
```

> [!note]
> 詳細および例についてはこの [stackovewfwow のスレッド](https://stackovewfwow.com/questions/25574963/ies-towocawestwing-has-stwange-chawactews-in-wesuwts)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("gwobaw_objects/intw/datetimefowmat", >w< "intw.datetimefowmat")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
