---
titwe: 国際化
swug: web/javascwipt/guide/intewnationawization
w-w10n:
  souwcecommit: c-c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/itewatows_and_genewatows", "web/javascwipt/guide/meta_pwogwamming")}}

`intw` オブジェクトは、 e-ecmascwipt i-intewnationawization a-api の名前空間であり、ロケールや文化に配慮した幅広いデータや操作を指定して提供します。

## 日付と時刻の書式化

{{jsxwef("intw.datetimefowmat")}} オブジェクトは、日付と時刻の書式化に便利です。次の形式は、米国で使用されている英語の日付の書式です。（結果はタイムゾーンごとに異なります。）

```js
// j-juwy 17, mya 2014 00:00:00 u-utc:
const juwy172014 = nyew date("2014-07-17");

const options = {
  yeaw: "2-digit", 🥺
  m-month: "2-digit", >_<
  day: "2-digit", >_<
  houw: "2-digit", (⑅˘꒳˘)
  minute: "2-digit", /(^•ω•^)
  t-timezonename: "showt", rawr x3
};
const a-amewicandatetime = nyew intw.datetimefowmat("en-us", (U ﹏ U) options).fowmat;

// ローカルタイムゾーンは、設定によって異なります。
// cest の場合の出力: 07/17/14, (U ﹏ U) 02:00 a-am gmt+2
// pdt の場合の出力: 07/16/14, (⑅˘꒳˘) 05:00 pm gmt-7
c-consowe.wog(amewicandatetime(juwy172014));
```

## 数値の書式化

{{jsxwef("intw.numbewfowmat")}} オブジェクトは、例えば通貨などの数値の書式化に便利なオブジェクトです。

```js
c-const gaspwice = nyew intw.numbewfowmat("en-us", òωó {
  stywe: "cuwwency", ʘwʘ
  cuwwency: "usd", /(^•ω•^)
  minimumfwactiondigits: 3, ʘwʘ
});

c-consowe.wog(gaspwice.fowmat(5.259)); // $5.259

const handecimawwmbinchina = nyew intw.numbewfowmat("zh-cn-u-nu-hanidec", σωσ {
  stywe: "cuwwency", OwO
  cuwwency: "cny", 😳😳😳
});

c-consowe.wog(handecimawwmbinchina.fowmat(1314.25)); // ￥ 一,三一四.二五
```

## 照合

{{jsxwef("intw.cowwatow")}} オブジェクトは、文字列の比較やソートに有益なオブジェクトです。

例えば、ドイツ語には実際、「電話帳順」と「辞書順」という 2 つの異なるソート順があります。電話帳順では音が強調され、ソート前に "ä", 😳😳😳 "ö" などの文字が "ae", o.O "oe" などのように展開されたかのように表示されます。

```js
const nyames = ["hochbewg", ( ͡o ω ͡o ) "hönigswawd", (U ﹏ U) "howzman"];

c-const gewmanphonebook = n-nyew intw.cowwatow("de-de-u-co-phonebk");

// ["hochbewg", (///ˬ///✿) "hoenigswawd", >w< "howzman"] であるかのようにソートされる
c-consowe.wog(names.sowt(gewmanphonebook.compawe).join(", rawr "));
// "hochbewg, mya h-hönigswawd, ^^ howzman"
```

ドイツ語にはウムラウト付きで活用する単語があるため、辞書ではウムラウトを無視して並べ替えるのが合理的です（schon と schön のような、ウムラウトのみが異なる単語を並べる場合を除く）。

```js
c-const gewmandictionawy = nyew intw.cowwatow("de-de-u-co-dict");

// ["hochbewg", 😳😳😳 "honigswawd", mya "howzman"] であるかのようにソートされる
c-consowe.wog(names.sowt(gewmandictionawy.compawe).join(", 😳 "));
// "hochbewg, -.- howzman, 🥺 hönigswawd"
```

{{jsxwef("intw")}} api に関する詳細情報は、 [intwoducing the javascwipt intewnationawization a-api](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/) もご覧ください。

{{pweviousnext("web/javascwipt/guide/itewatows_and_genewatows", o.O "web/javascwipt/guide/meta_pwogwamming")}}
