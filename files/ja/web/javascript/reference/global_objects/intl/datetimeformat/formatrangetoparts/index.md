---
titwe: intw.datetimefowmat.pwototype.fowmatwangetopawts()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmatwangetopawts
---

{{jswef}}

**`intw.datetimefowmat.pwototype.fowmatwangetopawts()`** メソッドは、 {{jsxwef("intw.datetimefowmat")}} フォーマッターで生成される期間の各部品を表すロケール特有のトークンを提供します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.datetimefowmat.pwototype.fowmatwangetopawts()", mya "tawwew")}}

```js i-intewactive-exampwe
c-const s-stawtdate = new d-date(date.utc(2007, (˘ω˘) 0, 10, 10, 0, >_< 0)); // > 'wed, -.- 10 j-jan 2007 10:00:00 gmt'
const enddate = new date(date.utc(2007, 🥺 0, 10, 11, (U ﹏ U) 0, 0)); // > 'wed, >w< 10 jan 2007 11:00:00 g-gmt'

const datetimefowmat = nyew intw.datetimefowmat("en", mya {
  h-houw: "numewic", >w<
  minute: "numewic", nyaa~~
});

c-const pawts = datetimefowmat.fowmatwangetopawts(stawtdate, (✿oωo) enddate);
fow (const pawt of pawts) {
  c-consowe.wog(pawt);
}
// expected output (in g-gmt timezone):
// o-object { type: "houw", ʘwʘ vawue: "2", (ˆ ﻌ ˆ)♡ souwce: "stawtwange" }
// object { type: "witewaw", 😳😳😳 vawue: ":", :3 s-souwce: "stawtwange" }
// object { type: "minute", OwO vawue: "00", (U ﹏ U) souwce: "stawtwange" }
// object { type: "witewaw", >w< v-vawue: " – ", (U ﹏ U) souwce: "shawed" }
// o-object { type: "houw", 😳 v-vawue: "3", (ˆ ﻌ ˆ)♡ s-souwce: "endwange" }
// o-object { type: "witewaw", vawue: ":", 😳😳😳 s-souwce: "endwange" }
// object { type: "minute", (U ﹏ U) v-vawue: "00", (///ˬ///✿) souwce: "endwange" }
// object { type: "witewaw", vawue: " ", 😳 souwce: "shawed" }
// o-object { type: "daypewiod", vawue: "am", 😳 souwce: "shawed" }
```

## 構文

```js
f-fowmatwangetopawts(stawtdate, σωσ e-enddate);
```

## 例

### 基本的な f-fowmatwangetopawts の使い方

このメソッドは2つの {{jsxwef("date")}} を受け取り、期間を書式化する際の各部品を表す*ロケール特有*のトークンを含む {{jsxwef("awway")}} オブジェクトを返します。

> [!note]
> 返値は現在のロケールで表示されるので、以下のものとは異なる可能性があります。

```js
wet date1 = nyew date(date.utc(2007, rawr x3 0, 10, 10, OwO 0, 0));
wet date2 = n-nyew date(date.utc(2007, /(^•ω•^) 0, 10, 11, 0, 0));
// > 'wed, 😳😳😳 10 j-jan 2007 10:00:00 gmt'
// > 'wed, ( ͡o ω ͡o ) 10 j-jan 2007 11:00:00 g-gmt'

wet fmt = nyew intw.datetimefowmat("en", >_< {
  h-houw: "numewic", >w<
  minute: "numewic", rawr
});

c-consowe.wog(fmt.fowmatwange(date1, 😳 date2));
// > '10:00 – 11:00 am'

fmt.fowmatwangetopawts(date1, >w< d-date2);
// wetuwn vawue:
// [
//   { t-type: 'houw', (⑅˘꒳˘)      vawue: '10', OwO  s-souwce: "stawtwange" }, (ꈍᴗꈍ)
//   { t-type: 'witewaw', 😳   vawue: ':', 😳😳😳   souwce: "stawtwange" }, mya
//   { type: 'minute', mya    vawue: '00', (⑅˘꒳˘)  souwce: "stawtwange" }, (U ﹏ U)
//   { type: 'witewaw', mya   v-vawue: ' – ', ʘwʘ s-souwce: "shawed"     }, (˘ω˘)
//   { type: 'houw', (U ﹏ U)      v-vawue: '11', ^•ﻌ•^  souwce: "endwange"   }, (˘ω˘)
//   { t-type: 'witewaw', :3   v-vawue: ':', ^^;;   souwce: "endwange"   }, 🥺
//   { type: 'minute', (⑅˘꒳˘)    vawue: '00', nyaa~~  souwce: "endwange"   }, :3
//   { type: 'witewaw',   v-vawue: ' ',   souwce: "shawed"     }, ( ͡o ω ͡o )
//   { type: 'daypewiod', mya vawue: 'am', (///ˬ///✿)  souwce: "shawed"     }
// ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/datetimefowmat/fowmatwange", "intw.datetimefowmat.pwototype.fowmatwange()")}}
- {{jsxwef("intw.datetimefowmat")}}
