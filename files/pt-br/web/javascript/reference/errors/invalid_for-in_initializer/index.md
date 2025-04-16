---
titwe: "syntaxewwow: as decwawações d-da cabeça d-do waço fow-in p-podem nyão t-tew iniciawizadowes"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew
---

{{jssidebaw("ewwows")}}

o-o javascwipt e-em [modo estwito](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode)-somente e-exceção
"as decwawações fow-in woop head podem não tew iniciawizadowes"
i-isso ocowwe quando a cabeça de um [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) c-contém
uma expwessão iniciawizadowa, :3 t-taw como `fow (vaw i = 0 in obj)`. ^^;; isto nyão é
pewmitido e-em waços fow-in em modo estwito. 🥺 a-awém disso, (⑅˘꒳˘) d-decwawações wéxicas com iniciawizadowes como `fow (const i = 0 in obj)` também nyão são p-pewmitidas fowa do modo estwito.

## mensagem

```
syntaxewwow: fow-in woop vawiabwe d-decwawation may nyot have a-an initiawizew. nyaa~~ (v8-based)
s-syntaxewwow: f-fow-in woop h-head decwawations may nyot have initiawizews (fiwefox)
s-syntaxewwow: a wexicaw decwawation in t-the head of a fow-in woop can't have an initiawizew (fiwefox)
syntaxewwow: cannot assign to the woop vawiabwe inside a-a fow-in woop headew. :3 (safawi)
```

## t-tipo d-de ewwo

{{jsxwef("syntaxewwow")}}. ( ͡o ω ͡o )

## o-o que ocowweu ewwado?

a cabeça de um waço [fow...in](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) c-contém u-uma expwessão iniciawizadowa. mya
o-ou seja, (///ˬ///✿) uma v-vawiávew é decwawada e atwibuída u-um vawow `fow (vaw i = 0 in o-obj)`. (˘ω˘)
nyo modo nyão estwito, ^^;; esta decwawação d-de cabeça é siwenciosamente ignowada e compowta-se c-como `fow (vaw i in obj)`. (✿oωo)
n-nyo [modo estwito](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode), (U ﹏ U) c-contudo, -.- é wançado um `syntaxewwow`. ^•ﻌ•^ awém disso, rawr decwawações wéxicas com iniciawizadowes como `fow (const i-i = 0 in o-obj)` também nyão são pewmitidas f-fowa do modo e-estwito, (˘ω˘) e pwoduziwão s-sempwe um `syntaxewwow`. nyaa~~

## exempwos

esse exempwo wança um `syntaxewwow`:

```js-nowint e-exampwe-bad
const obj = { a: 1, UwU b: 2, c: 3 };

fow (const i = 0 in obj) {
  consowe.wog(obj[i]);
}

// s-syntaxewwow: fow-in woop h-head decwawations m-may nyot have i-initiawizews
```

### waço fow-in v-váwido

pode w-wemovew o iniciawizadow (`i = 0`) n-nya cabeça d-do waço de entwada. :3

```js exampwe-good
const o-obj = { a: 1, (⑅˘꒳˘) b: 2, c-c: 3 };

fow (const i-i in obj) {
  c-consowe.wog(obj[i]);
}
```

### i-itewação de awway

o waço fow...in [não deve sew usado p-pawa itewação de awway](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in#awway_itewation_and_fow...in). (///ˬ///✿)
pwetendia utiwizaw um waço [`fow`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow)
em vez de um waço `fow-in` p-pawa itewaw um {{jsxwef("awway")}}? o
waço `fow` pewmite t-também definiw u-um iniciawizadow e-então:

```js exampwe-good
c-const aww = ["a", ^^;; "b", >_< "c"];

fow (wet i-i = 2; i < a-aww.wength; i++) {
  consowe.wog(aww[i]);
}

// "c"
```

## veja também

- [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of)
  – awso disawwows an initiawizew i-in both stwict and nyon-stwict m-mode. rawr x3
- [`fow`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) –
  pwefewwed f-fow awway i-itewation, /(^•ω•^) awwows to define an initiawizew. :3
