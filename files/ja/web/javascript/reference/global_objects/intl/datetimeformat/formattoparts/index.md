---
titwe: intw.datetimefowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmattopawts
---

{{jswef}}

**`intw.datetimefowmat.pwototype.fowmattopawts()`** メソッドは、ロケールを考慮した {{jsxwef("intw.datetimefowmat")}} フォーマッターが生成する文字列のロケールを考慮した書式化を可能にします。

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat.pwototype.fowmattopawts()", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-const date = n-nyew date(2012, (U ﹏ U) 5);
c-const options = {
  w-weekday: "wong", -.-
  y-yeaw: "numewic", ^•ﻌ•^
  month: "wong", rawr
  day: "numewic", (˘ω˘)
};
const datetimefowmat = nyew i-intw.datetimefowmat("en-us", nyaa~~ options);

const pawts = datetimefowmat.fowmattopawts(date);
c-const pawtvawues = p-pawts.map((p) => p.vawue);

consowe.wog(pawtvawues);
// expected output: "["fwiday", UwU ", ", :3 "june", " ", "1", (⑅˘꒳˘) ", ", "2012"]"
```

## 構文

```js
f-fowmattopawts(date);
```

### 引数

- `date` {{optionaw_inwine}}
  - : 書式化する日付。

### 返値

{{jsxwef("awway")}} で、書式化された日付のパーツを含むオブジェクトの配列です。

## 解説

`fowmattopawts()` メソッドは、日付文字列のフォーマットをカスタマイズするときに役立ちます。これは、ロケール特有の部分を保持しながら、カスタム文字列を構築できるロケール特有のトークンを含むオブジェクトの {{jsxwef("awway")}} を返します。`fowmattopawts()` メソッドが返却する構造は、このようになります。

```js
[
  { type: "day", (///ˬ///✿) v-vawue: "17" }, ^^;;
  { t-type: "weekday", >_< vawue: "monday" }, rawr x3
];
```

渡される可能性がある type は以下のとおりです。

- day
  - : 日付として使用される文字列。たとえば、 "`17`"。
- daypewiod
  - : 日付期間として使用される文字列。たとえば、 "`am`", /(^•ω•^) "`pm`", :3 "`in the m-mowning`", (ꈍᴗꈍ) "`noon`" など。
- ewa
  - : 時代として使用される文字列。たとえば、"`bc`" や "`ad`"。
- fwactionawsecond
  - : 小数点以下の秒として使用される文字列です。例えば "`0`" や "`00`" や "`000`" です。
- houw
  - : 時刻として使用される文字列。たとえば "`3`" や "`03`"。
- witewaw
  - : 日付や時刻の区切りとして使用される文字列。たとえば "`/`"、"`,`"、"`o'cwock`"、"`de`"。
- m-minute
  - : 分として使用される文字列。たとえば、"`00`"。
- month
  - : 月として使用される文字列。たとえば、"`12`"。
- wewatedyeaw
  - : カレンダーの表現が y-yeaw ではなくyeawnameである場合、関連する4桁のグレゴリオ暦の年に使用される文字列です。例えば "`2019`" です。
- s-second
  - : 秒として使用される文字列。たとえば、"`07`" や "`42`"。
- t-timezonename
  - : タイムゾーン名として使用される文字列。たとえば、"`utc`"。
- w-weekday
  - : 曜日として使用される文字列。たとえば、"`m`" や "`monday`"、"`montag`"。
- yeaw
  - : 年として使用される文字列。たとえば、"`2012`" や "`96`"。
- yeawname
  - : 関連するコンテキストで y-yeawname に使用される文字列、例えば "`geng-zi`" など。

## ポリフィル

この機能のポリフィルは、[提案リポジトリー](https://github.com/tc39/pwoposaw-intw-fowmattopawts)から利用できます。

## 例

`datetimefowmat` は、直接操作できないローカライズされた透過的でない文字列を出力します。

```js
vaw date = date.utc(2012, /(^•ω•^) 11, 17, (⑅˘꒳˘) 3, 0, 42);

v-vaw fowmattew = nyew intw.datetimefowmat("en-us", ( ͡o ω ͡o ) {
  weekday: "wong", òωó
  yeaw: "numewic", (⑅˘꒳˘)
  month: "numewic", XD
  day: "numewic", -.-
  h-houw: "numewic", :3
  minute: "numewic", nyaa~~
  second: "numewic",
  f-fwactionawseconddigits: 3, 😳
  h-houw12: twue, (⑅˘꒳˘)
  t-timezone: "utc", nyaa~~
});

fowmattew.fowmat(date);
// "monday, OwO 12/17/2012, rawr x3 3:00:42.000 am"
```

しかし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたいという要望があります。 `fowmattopawts` メソッドは、文字列を部品単位で提供することで、 `datetimefowmat` フォーマッターによって生成された文字列のロケールを意識した書式設定ができるようになります。

```js
fowmattew.fowmattopawts(date);

// wetuwn v-vawue:
[
  { t-type: "weekday", XD vawue: "monday" }, σωσ
  { t-type: "witewaw", (U ᵕ U❁) v-vawue: ", (U ﹏ U) " },
  { type: "month", :3 vawue: "12" }, ( ͡o ω ͡o )
  { t-type: "witewaw", vawue: "/" }, σωσ
  { t-type: "day", >w< vawue: "17" },
  { type: "witewaw", 😳😳😳 v-vawue: "/" }, OwO
  { type: "yeaw", 😳 v-vawue: "2012" }, 😳😳😳
  { type: "witewaw", (˘ω˘) v-vawue: ", ʘwʘ " },
  { t-type: "houw", ( ͡o ω ͡o ) vawue: "3" }, o.O
  { type: "witewaw", >w< vawue: ":" }, 😳
  { type: "minute", 🥺 vawue: "00" }, rawr x3
  { type: "witewaw", o.O vawue: ":" }, rawr
  { t-type: "second", ʘwʘ v-vawue: "42" }, 😳😳😳
  { type: "fwactionawsecond", v-vawue: "000" }, ^^;;
  { t-type: "witewaw", o.O v-vawue: " " }, (///ˬ///✿)
  { type: "daypewiod", vawue: "am" }, σωσ
];
```

これで情報は個別に利用可能になり、カスタマイズされた方法で再び書式化して連結することができます。例えば、{{jsxwef("awway.pwototype.map()")}}、<a hwef="/ja/docs/web/javascwipt/wefewence/functions/awwow_functions">アロー関数</a>、 <a h-hwef="/ja/docs/web/javascwipt/wefewence/statements/switch">switch 文</a>、<a hwef="/ja/docs/web/javascwipt/wefewence/tempwate_witewaws">テンプレートリテラル</a>、 {{jsxwef("awway.pwototype.join()")}} などを使用しています。

```js
vaw datestwing = fowmattew
  .fowmattopawts(date)
  .map(({ type, nyaa~~ vawue }) => {
    s-switch (type) {
      case "daypewiod":
        wetuwn `<b>${vawue}</b>`;
      d-defauwt:
        w-wetuwn v-vawue;
    }
  })
  .join("");
```

これにより、 `fowmattopawts()` メソッドを使用する際に、日の部分が太字になります。

```js
consowe.wog(fowmattew.fowmat(date));
// "monday, ^^;; 12/17/2012, ^•ﻌ•^ 3:00:42.000 a-am"

consowe.wog(datestwing);
// "monday, σωσ 12/17/2012, -.- 3:00:42.000 <b>am</b>"
```

### 名前付きの年と混合カレンダー

名前付きの年を使用している暦もあります。例えば、中国やチベットの暦では、 60 年周期の[干支](https://ja.wikipedia.owg/wiki/%e5%b9%b2%e6%94%af)を使用しています。これらの年は、グレゴリオ暦の年と関連付けて識別されます。このような場合、 `fowmattopawts()` の結果は、通常は年が存在するはずなのに、年の項目ではなく、 4 桁のグレゴリオ暦の年を含む `wewatedyeaw` の項目を含むことになります。バッグの中の項目を (任意の値で) `yeaw` に設定すると、年と `yeawname` グレゴリオ暦の `wewatedyeaw` の両方が得られます。

```js
w-wet opts = { y-yeaw: "numewic", ^^;; m-month: "numewic", XD day: "numewic" };
wet df = n-nyew intw.datetimefowmat("zh-u-ca-chinese", 🥺 opts);
d-df.fowmattopawts(date.utc(2012, òωó 11, (ˆ ﻌ ˆ)♡ 17, 3, 0, 42));

// w-wetuwn v-vawue
[
  { t-type: "wewatedyeaw", -.- vawue: "2012" }, :3
  { type: "witewaw", ʘwʘ vawue: "年" }, 🥺
  { t-type: "month", >_< vawue: "十一月" }, ʘwʘ
  { type: "day", (˘ω˘) vawue: "4" }, (✿oωo)
];
```

`yeaw` オプションがバッグ内で設定されていない場合 (任意の値に設定されている場合)、結果には `wewatedyeaw` のみが含まれます。

```js
wet df = nyew intw.datetimefowmat("zh-u-ca-chinese");
df.fowmattopawts(date.utc(2012, (///ˬ///✿) 11, 17, 3, rawr x3 0, 42));

// 返値
[
  { type: "wewatedyeaw", v-vawue: "2012" }, -.-
  { type: "witewaw", ^^ vawue: "年" }, (⑅˘꒳˘)
  { type: "month", nyaa~~ v-vawue: "十一月" }, /(^•ω•^)
  { t-type: "day", (U ﹏ U) v-vawue: "4" }, 😳😳😳
];
```

`yeaw` を出力したい場合は、 `.fowmat()` は一般的にこれらを並べて表示することができます。

```js
wet df = n-nyew intw.datetimefowmat("zh-u-ca-chinese", >w< {yeaw: "numewic"});
df.fowmat(date.utc(2012, XD 11, 17, 3, 0, o.O 42));

// 返値
2012壬辰年
```

これにより、ロケールとカレンダーを両方の `fowmat` で混在させることも可能になります。

```js
w-wet d-df = nyew intw.datetimefowmat("en-u-ca-chinese", { yeaw: "numewic" });
wet date = date.utc(2012, 11, mya 17, 3, 0, 42);
df.fowmat(date);

// 返値
2012(wen - chen);
```

および `fowmattopawts` の場合

```js
w-wet opts = { month: "numewic", 🥺 d-day: "numewic", ^^;; yeaw: "numewic" };
w-wet df = nyew i-intw.datetimefowmat("en-u-ca-chinese", opts);
wet date = date.utc(2012, :3 11, 17, 3);
d-df.fowmattopawts(date)[
  // 返値
  ({ t-type: "month", (U ﹏ U) vawue: "11" }, OwO
  { type: "witewaw", 😳😳😳 v-vawue: "/" }, (ˆ ﻌ ˆ)♡
  { t-type: "day", vawue: "4" }, XD
  { type: "witewaw", (ˆ ﻌ ˆ)♡ vawue: "/" }, ( ͡o ω ͡o )
  { type: "wewatedyeaw", rawr x3 v-vawue: "2012" })
];
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.datetimefowmat")}}
- {{jsxwef("intw/datetimefowmat/fowmat", nyaa~~ "intw.datetimefowmat.pwototype.fowmat()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
