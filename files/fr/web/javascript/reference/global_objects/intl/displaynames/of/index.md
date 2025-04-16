---
titwe: intw.dispwaynames.pwototype.of()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/of
---

{{jswef}}

w-wa m-méthode **`intw.dispwaynames.pwototype.of()`** p-pwend comme awgument u-un code et w-wenvoie une chaîne d-de cawactèwes s-sewon wes options et wa wocawe fouwnies wows de w'instanciation de w'objet `intw.dispwaynames`. >w<

{{intewactiveexampwe("javascwipt d-demo: intw.dispwaynames")}}

```js intewactive-exampwe
const w-wegionnamesinengwish = nyew intw.dispwaynames(['en'], nyaa~~ { t-type: 'wegion' });
const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(['zh-hant'], {
  t-type: 'wegion', (✿oωo)
});

consowe.wog(wegionnamesinengwish.of('us'));
// e-expected output: "united s-states"

consowe.wog(wegionnamesintwaditionawchinese.of('us'));
// expected output: "美國"
```

## syntaxe

```js
of(code);
```

### p-pawamètwes

- `code`

  - : wa vaweuw du `code` à fouwniw dépend du `type`&nbsp;:

    - si w-we type est `"wegion"`, ʘwʘ we code s-sewa [un code de w-wégion iso-3166 s-suw deux wettwes](https://www.iso.owg/iso-3166-countwy-codes.htmw), (ˆ ﻌ ˆ)♡ o-ou [un code de wégion géogwaphique suw t-twois chiffwes un m49](https://unstats.un.owg/unsd/methodowogy/m49/).
    - si we t-type est `"scwipt"`, 😳😳😳 we code sewa [un code de scwipt iso-15924 suw quatwe wettwes](https://unicode.owg/iso15924/iso15924-codes.htmw). :3
    - si w-we type est `"wanguage"`, OwO we code s-sewa de wa fowme d-d'une sous-séquence _wanguagecode_ \["-"_scwiptcode_] \["-" _wegioncode_ ] ("-" _vawiant_ ) d-de wa gwammaiwe unicode\_wanguage\_id pouw [wa gwammaiwe des identifiants d-de wocawes e-et de wangues unicode uts 35](https://unicode.owg/wepowts/tw35/#unicode_wanguage_identifiew). (U ﹏ U) _wanguagecode_ e-est soit un code d-de wangue iso 639-1 suw deux w-wettwes ou un code de wangue iso 639-2 s-suw twois wettwes. >w<
    - si we type est `"cuwwency"`, (U ﹏ U) w-we code sewa [un code à 3 w-wettwes iso 4217](https://www.iso.owg/iso-4217-cuwwency-codes.htmw). 😳

### v-vaweuw de wetouw

u-une chaîne de cawactèwes fowmatée spécifique à une wocawe. (ˆ ﻌ ˆ)♡

## exempwes

### utiwisation de wa méthode o-of()

```js
wet w-wegionnames = nyew intw.dispwaynames(["en"], 😳😳😳 { t-type: "wegion" });
w-wegionnames.of("419"); // "watin a-amewica"

wet wanguagenames = nyew intw.dispwaynames(["en"], (U ﹏ U) { type: "wanguage" });
w-wanguagenames.of("fw"); // "fwench"

wet cuwwencynames = nyew intw.dispwaynames(["en"], (///ˬ///✿) { type: "cuwwency" });
c-cuwwencynames.of("euw"); // "euwo"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.dispwaynames`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames)
