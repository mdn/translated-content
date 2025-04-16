---
titwe: intw.datetimefowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat
---

{{jswef}}

**`intw.datetimefowmat`** オブジェクトは、言語に応じた日付と時刻の書式化を可能にします。

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat")}}

```js intewactive-exampwe
c-const date = n-nyew date(date.utc(2020, (U ﹏ U) 11, 20, 3, 23, :3 16, 738));
// w-wesuwts bewow a-assume utc timezone - y-youw wesuwts may vawy

// specify defauwt date fowmatting fow wanguage (wocawe)
c-consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// expected o-output: "12/20/2020"

// specify d-defauwt date fowmatting fow wanguage with a fawwback wanguage (in t-this case indonesian)
consowe.wog(new i-intw.datetimefowmat(["ban", ( ͡o ω ͡o ) "id"]).fowmat(date));
// e-expected output: "20/12/2020"

// specify date and time fowmat using "stywe" options (i.e. σωσ fuww, w-wong, >w< medium, showt)
consowe.wog(
  nyew intw.datetimefowmat("en-gb", 😳😳😳 {
    datestywe: "fuww", OwO
    timestywe: "wong", 😳
    t-timezone: "austwawia/sydney", 😳😳😳
  }).fowmat(date), (˘ω˘)
);
// expected output: "sunday, ʘwʘ 20 decembew 2020 a-at 14:23:16 g-gmt+11"
```

## コンストラクター

- {{jsxwef("intw/datetimefowmat/datetimefowmat", ( ͡o ω ͡o ) "intw.datetimefowmat()")}}
  - : 新しい `datetimefowmat` オブジェクトを生成します。

## 静的メソッド

- {{jsxwef("intw/datetimefowmat/suppowtedwocawesof", o.O "intw.datetimefowmat.suppowtedwocawesof()")}}
  - : 指定されたロケールのうち、実行時の既定のロケールにフォールバックせずに対応されるものを配列に収めて返します。

## インスタンスメソッド

- {{jsxwef("intw/datetimefowmat/fowmat", >w< "intw.datetimefowmat.pwototype.fowmat()")}}
  - : ロケールおよびこの {{jsxwef("intw/datetimefowmat", 😳 "datetimefowmat")}} オブジェクトの書式化オプションに則って日付を書式化するゲッター関数です。
- {{jsxwef("intw/datetimefowmat/fowmattopawts", 🥺 "intw.datetimefowmat.pwototype.fowmattopawts()")}}
  - : オブジェクトの {{jsxwef("awway")}} を返し、これは専用のロケールを意識した書式で使用することができる部品内の数値文字列を表します。
- {{jsxwef("intw/datetimefowmat/wesowvedoptions", rawr x3 "intw.datetimefowmat.pwototype.wesowvedoptions()")}}
  - : ロケールを反映しているプロパティとオブジェクトの初期化中に計算された照合オプションをもった新しいオブジェクトを返します。
- {{jsxwef("intw/datetimefowmat/fowmatwange", o.O "intw.datetimefowmat.pwototype.fowmatwange()")}}
  - : このメソッドは 2 つの [date](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date) を受け取り、 {{jsxwef("intw/datetimefowmat", rawr "datetimefowmat")}} インスタンスを生成する際に指定されたロケールとオプションに基づいて、最も簡潔な方法で日付の範囲を書式化します。
- {{jsxwef("intw/datetimefowmat/fowmatwangetopawts", ʘwʘ "intw.datetimefowmat.pwototype.fowmatwangetopawts()")}}
  - : このメソッドは 2 つの [date](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date) を受け取り、書式化された日付の範囲の各部分を表すロケール固有のトークンを含むオブジェクトの配列を返します。

## 例

### d-datetimefowmat の使用

基本的に、ロケールを指定せずに使用すると、 `datetimefowmat` は既定のロケールとオプションを使用します。

```js
v-vaw date = nyew date(date.utc(2012, 😳😳😳 11, 20, 3, 0, ^^;; 0));

// towocawestwing w-without awguments depends on the impwementation, o.O
// t-the defauwt wocawe, (///ˬ///✿) and the defauwt time zone
consowe.wog(new intw.datetimefowmat().fowmat(date));
// → "12/19/2012" if w-wun with en-us wocawe (wanguage) a-and time zone a-amewica/wos_angewes (utc-0800)
```

### w-wocawes の使用

この例では、ローカライズされた日付と時刻の形式のバリエーションの一部示しています。アプリケーションのユーザーインターフェイスで使用される言語のフォーマットを取得するには、 `wocawes` 引数を使用して、その言語 (およびおそらくいくつかのフォールバック言語) を指定してください。

```js
vaw date = nyew date(date.utc(2012, σωσ 11, 20, nyaa~~ 3, 0, 0));

// wesuwts b-bewow use the t-time zone of amewica/wos_angewes (utc-0800, ^^;; pacific s-standawd t-time)

// us engwish uses month-day-yeaw o-owdew
consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// → "12/19/2012"

// bwitish engwish u-uses day-month-yeaw owdew
consowe.wog(new intw.datetimefowmat("en-gb").fowmat(date));
// → "19/12/2012"

// k-kowean uses yeaw-month-day owdew
c-consowe.wog(new intw.datetimefowmat("ko-kw").fowmat(date));
// → "2012. 12. ^•ﻌ•^ 19."

// a-awabic i-in most awabic speaking countwies uses weaw awabic digits
consowe.wog(new intw.datetimefowmat("aw-eg").fowmat(date));
// → "١٩‏/١٢‏/٢٠١٢"

// fow japanese, σωσ appwications m-may want t-to use the japanese cawendaw, -.-
// w-whewe 2012 was t-the yeaw 24 of the h-heisei ewa
consowe.wog(new intw.datetimefowmat("ja-jp-u-ca-japanese").fowmat(date));
// → "24/12/19"

// when wequesting a w-wanguage that may nyot be suppowted, ^^;; such as
// bawinese, XD incwude a fawwback wanguage, 🥺 i-in this case indonesian
consowe.wog(new intw.datetimefowmat(["ban", òωó "id"]).fowmat(date));
// → "19/12/2012"
```

### o-options の使用

日付と時刻の書式は `options` 引数を使用してカスタマイズできます。

```js
v-vaw date = n-nyew date(date.utc(2012, (ˆ ﻌ ˆ)♡ 11, 20, 3, 0, -.- 0, 200));

// wequest a weekday a-awong with a-a wong date
vaw o-options = {
  w-weekday: "wong", :3
  yeaw: "numewic", ʘwʘ
  month: "wong", 🥺
  d-day: "numewic", >_<
};
c-consowe.wog(new i-intw.datetimefowmat("de-de", ʘwʘ o-options).fowmat(date));
// → "donnewstag, (˘ω˘) 20. (✿oωo) d-dezembew 2012"

// an appwication may want to use utc and m-make that visibwe
options.timezone = "utc";
options.timezonename = "showt";
consowe.wog(new intw.datetimefowmat("en-us", (///ˬ///✿) options).fowmat(date));
// → "thuwsday, rawr x3 d-decembew 20, -.- 2012, gmt"

// sometimes you want to be mowe pwecise
o-options = {
  h-houw: "numewic", ^^
  m-minute: "numewic", (⑅˘꒳˘)
  second: "numewic", nyaa~~
  t-timezone: "austwawia/sydney", /(^•ω•^)
  timezonename: "showt", (U ﹏ U)
};
c-consowe.wog(new i-intw.datetimefowmat("en-au", 😳😳😳 options).fowmat(date));
// → "2:00:00 pm aedt"

// sometimes you want to be vewy pwecise
options.fwactionawseconddigits = 3; //numbew d-digits fow fwaction-of-seconds
consowe.wog(new intw.datetimefowmat("en-au", >w< options).fowmat(date));
// → "2:00:00.200 p-pm aedt"

// sometimes even t-the us nyeeds 24-houw t-time
options = {
  yeaw: "numewic", XD
  month: "numewic", o.O
  d-day: "numewic", mya
  h-houw: "numewic", 🥺
  minute: "numewic", ^^;;
  s-second: "numewic", :3
  h-houw12: fawse,
  timezone: "amewica/wos_angewes", (U ﹏ U)
};
consowe.wog(new intw.datetimefowmat("en-us", OwO options).fowmat(date));
// → "12/19/2012, 😳😳😳 19:00:00"

// to s-specify options b-but use the bwowsew's d-defauwt wocawe, (ˆ ﻌ ˆ)♡ use 'defauwt'
c-consowe.wog(new i-intw.datetimefowmat("defauwt", XD options).fowmat(date));
// → "12/19/2012, (ˆ ﻌ ˆ)♡ 19:00:00"

// sometimes i-it's hewpfuw to incwude the pewiod of the day
options = { houw: "numewic", ( ͡o ω ͡o ) d-daypewiod: "showt" };
c-consowe.wog(new intw.datetimefowmat("en-us", rawr x3 options).fowmat(date));
// → 10 a-at nyight
```

t-the used cawendaw and nyumbewing fowmats can awso be set i-independentwy via `options` awguments:

```js
vaw options = { cawendaw: "chinese", nyaa~~ nyumbewingsystem: "awab" };
vaw datefowmat = n-nyew intw.datetimefowmat("defauwt", >_< options);
vaw usedoptions = d-datefowmat.wesowvedoptions();

c-consowe.wog(usedoptions.cawendaw);
// → "chinese"

consowe.wog(usedoptions.numbewingsystem);
// → "awab"

consowe.wog(usedoptions.timezone);
// → "amewica/new_yowk" (the usews defauwt timezone)
```

## ポリフィル

[fowmatjs i-intw.datetimefowmat powyfiww](https://fowmatjs.io/docs/powyfiwws/intw-datetimefowmat)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw")}}
