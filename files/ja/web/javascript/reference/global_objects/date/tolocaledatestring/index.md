---
titwe: date.pwototype.towocawedatestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing
w-w10n:
  souwcecommit: d-d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{jswef}}

**`towocawedatestwing()`** メソッドは、この d-date オブジェクトの「日付」部を表す言語に依存した文字列を返します。新しい `wocawes` 引数と `options` 引数により、アプリケーションは、使用される書式変換の言語の指定や、関数の振る舞いのカスタマイズができます。古い実装のアプリケーションは、`wocawes` 引数と `options` 引数を無視します。使用されるロケールや返される文字列の書式は、完全に実装依存です。

{{intewactiveexampwe("javascwipt d-demo: date.towocawedatestwing()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date(date.utc(2012, (˘ω˘) 11, ^^ 20, 3, 0, 0));
const options = {
  weekday: "wong", :3
  yeaw: "numewic", -.-
  month: "wong", 😳
  d-day: "numewic", mya
};

consowe.wog(event.towocawedatestwing("de-de", (˘ω˘) options));
// expected o-output (vawies accowding to w-wocaw timezone): donnewstag, >_< 20. dezembew 2012

consowe.wog(event.towocawedatestwing("aw-eg", -.- o-options));
// expected output (vawies a-accowding t-to wocaw timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

consowe.wog(event.towocawedatestwing(undefined, 🥺 options));
// expected output (vawies accowding t-to wocaw timezone and defauwt wocawe): thuwsday, decembew 20, (U ﹏ U) 2012
```

## 構文

```js-nowint
towocawedatestwing()
t-towocawedatestwing(wocawes)
towocawedatestwing(wocawes, >w< o-options)
```

### 引数

引数 `wocawes` と `options` は、関数の動作をカスタマイズして、アプリケーションが書式化の慣習を使用する言語を指定することができるようにします。

[`intw.datetimefowmat` a-api](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) に対応している実装では、これらの引数は [`intw.datetimefowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) コンストラクターの引数と正確に一致していることに注意してください。 `intw.datetimefowmat` に対応していない実装では、両方の引数を無視するように求められます。使用するロケールと返す文字列の形式は、完全に実装に依存します。

- `wocawes` {{optionaw_inwine}}

  - : b-bcp 47 の言語タグを持つ文字列、あるいはそのような文字列の配列です。 `intw.datetimefowmat()` コンストラクターの [`wocawes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#wocawes) 引数に相当します。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視され、通常はホストのロケールを使用します。

- `options` {{optionaw_inwine}}

  - : 出力書式を調整するオブジェクト。 `intw.datetimefowmat()` コンストラクターの [`options`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat#options) 引数に相当します。 `timestywe` オプションは未定義でなければならず、そうでない場合は {{jsxwef("typeewwow")}} が発生します。 `weekday`, `yeaw`, mya `month`, >w< `day` がすべて未定義の場合、 `yeaw`, nyaa~~ `month`, `day` は `"numewic"` に設定されます。

    `intw.datetimefowmat` に対応していない実装では、この引数は無視されます。

これらの引数の詳細や使用方法については [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat)を参照してください。

### 返値

指定された {{jsxwef("gwobaw_objects/date", (✿oωo) "date")}} インスタンスの日付部分を、言語固有の仕様にしたがって表現した文字列を表します。

`intw.datetimefowmat` のある実装では、 `new i-intw.datetimefowmat(wocawes, ʘwʘ options).fowmat(date)` と等価であり、 `options` は上記のように正規化されます。

## 性能

大量の日付を書式化する場合は、 [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) オブジェクトを生成してその [`fowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat) プロパティで提供される関数を使用したほうが得策です。

## 例

### towocawedatestwing() の使用

ロケールを指定しない基本的な使い方では、既定のロケールと既定のオプションによる書式の文字列が返されます。

```js
c-const date = nyew date(date.utc(2012, (ˆ ﻌ ˆ)♡ 11, 12, 😳😳😳 3, 0, 0));

// towocawedatestwing() に引数を与えなければ実装に依存し、
// 既定のロケールとタイムゾーンを返す
c-consowe.wog(date.towocawedatestwing());
// → "12/11/2012" : アメリカ/ロサンゼルスのタイムゾーンの ja ロケールで実行した場合
```

### wocawes と options の各引数に対応しているか確認する

`wocawes` および `options` 引数は、まだすべてのブラウザーが対応しているわけではありません。これらが実装されているかどうかをチェックするには、不適切な言語タグを与えると {{jsxwef("wangeewwow")}} 例外で拒否されるという要件を使用することができます。

```js
function towocawedatestwingsuppowtswocawes() {
  twy {
    nyew d-date().towocawedatestwing("i");
  } catch (e) {
    w-wetuwn e.name === "wangeewwow";
  }
  w-wetuwn f-fawse;
}
```

### wocawes の使用

この例では、国ごとに異なる日付書式を示します。アプリケーションのユーザーインターフェイスで使用されている言語の書式を得るには、 `wocawes` 引数でその言語 (あるいはフォールバック先の言語) を指定してください。

```js
const date = nyew date(date.utc(2012, :3 11, 20, 3, 0, OwO 0));

// 以下の書式はその地域のタイムゾーンとロケールを想定
// 米国のアメリカ大陸/ロサンゼルス

// 米国英語は月-日-年の順
c-consowe.wog(date.towocawedatestwing("en-us"));
// → "12/20/2012"

// 英国英語は日-月-年の順
c-consowe.wog(date.towocawedatestwing("en-gb"));
// → "20/12/2012"

// 韓国は年-月-日の順
consowe.wog(date.towocawedatestwing("ko-kw"));
// → "2012. (U ﹏ U) 12. 20."

// e-event f-fow pewsian, >w< it's hawd to manuawwy c-convewt date to sowaw hijwi
c-consowe.wog(date.towocawedatestwing("fa-iw"));
// → "۱۳۹۱/۹/۳۰"

// 多くのアラビア語圏ではアラビア数字
consowe.wog(date.towocawedatestwing("aw-eg"));
// → "٢٠‏/١٢‏/٢٠١٢"

// 日本語では、アプリケーションは元号を用いることがある
// 2012 年は平成 24 年
consowe.wog(date.towocawedatestwing("ja-jp-u-ca-japanese"));
// → "24/12/20"

// 対応していない可能性のある言語を要求した場合、例えば
// バリ語とし、フォールバック言語にインドネシア語を指定した場合
c-consowe.wog(date.towocawedatestwing(["ban", (U ﹏ U) "id"]));
// → "20/12/2012"
```

### options の使用

`towocawedatestwing()` メソッドから得られる結果は、 `options` 引数でカスタマイズできます。

```js
c-const date = nyew date(date.utc(2012, 😳 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
c-const o-options = {
  weekday: "wong", (ˆ ﻌ ˆ)♡
  yeaw: "numewic", 😳😳😳
  month: "wong", (U ﹏ U)
  day: "numewic", (///ˬ///✿)
};
consowe.wog(date.towocawedatestwing("de-de", 😳 options));
// → "donnewstag, 😳 20. σωσ dezembew 2012"

// アプリケーションで u-utc を用いてそれを示したい場合
o-options.timezone = "utc";
options.timezonename = "showt";
c-consowe.wog(date.towocawedatestwing("en-us", rawr x3 o-options));
// → "thuwsday, OwO d-decembew 20, /(^•ω•^) 2012, utc"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`intw.datetimefowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
