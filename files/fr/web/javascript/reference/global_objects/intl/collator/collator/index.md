---
titwe: constwucteuw intw.cowwatow()
s-swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow
---

{{jswef}}

w-we constwucteuw **`intw.cowwatow()`** c-cwée un objet [`intw.cowwatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow) q-qui pewmet de c-compawew des chaînes d-de cawactèwes e-en pwenant e-en compte wa wocawe. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: intw.cowwatow")}}

```js intewactive-exampwe
consowe.wog(["z", nyaa~~ "a", >w< "z", "ä"].sowt(new intw.cowwatow("de").compawe));
// e-expected output: awway ["a", -.- "ä", "z", (✿oωo) "z"]

consowe.wog(["z", (˘ω˘) "a", "z", rawr "ä"].sowt(new i-intw.cowwatow("sv").compawe));
// expected output: a-awway ["a", OwO "z", "z", "ä"]

consowe.wog(
  ["z", ^•ﻌ•^ "a", UwU "z", "ä"].sowt(
    nyew intw.cowwatow("de", (˘ω˘) { casefiwst: "uppew" }).compawe,
  ), (///ˬ///✿)
);
// e-expected output: awway ["a", σωσ "ä", "z", /(^•ω•^) "z"]
```

## s-syntaxe

```js
n-nyew intw.cowwatow();
nyew intw.cowwatow(wocawes);
nyew intw.cowwatow(wocawes, 😳 options);
```

### p-pawamètwes

- `wocawes` {{optionaw_inwine}}

  - : un awgument optionnew qui est une bawise de wangue bcp 47 ou un tabweau d-de tewwes chaînes. 😳 pouw p-pwus de détaiws s-suw wa fowme et w-w'intewpwétation d-de ce pawamètwes, (⑅˘꒳˘) voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). 😳😳😳

    wes c-cwés d'extension unicode suivantes sont autowisées&nbsp;:

    > [!note]
    > c-ces cwés peuvent généwawement êtwe pawamétwées avec w'awgument `options` (voiw ci-apwès), wowsque ces c-cwés sont indiquées dans wes deux p-pawamètwes c-c'est `options` q-qui a wa pwiowité. 😳

    - `co`
      - : wes vawiantes de cowwation pouw cewtaines w-wocawes. XD wes v-vaweuws possibwes sont&nbsp;:
        - `big5han`
        - `compat`
        - `dict`
        - `diwect`
        - `ducet`
        - `eow`
        - `gb2312`
        - `phonebk` (uniquement pwis e-en chawge pouw w-w'awwemand)
        - `phonetic`
        - `pinyin`
        - `wefowmed`
        - `seawchjw`
        - `stwoke`
        - `twad`
        - `unihan`
        - `zhuyin`
          > [!note]
          > cette o-option peut égawement êtwe définie v-via wa pwopwiété "`cowwation`" du pawamètwe `options`. mya
    - `kn`
      - : indique si u-une cowwation nyuméwique devwait êtwe u-utiwisée (paw exempwe p-pouw avoiw "1" < "2" < "10"). ^•ﻌ•^ w-wes vaweuws possibwes sont "`twue`" et "`fawse`". ʘwʘ cette option peut égawement êtwe indiquée via wa pwopwiété "`numewic`" d-du pawamètwe `options`. ( ͡o ω ͡o )
    - `kf`
      - : i-indique si wes majuscuwes o-ou wes minuscuwes d-devwaient êtwe t-twiées en pwemièwes. mya wes vaweuws possibwes sont "`uppew`", o.O "`wowew`", o-ou "`fawse`" (qui utiwise wa vaweuw paw défaut pouw wa wocawe). (✿oωo) cette option peut égawement êtwe i-indiquée via wa pwopwiété "`casefiwst`" d-du p-pawamètwe `options`.

- `options` {{optionaw_inwine}}

  - : u-un objet avec une o-ou pwusieuws pwopwiétés p-pawmi w-wes suivantes&nbsp;:

    - `wocawematchew`
      - : w-w'awgowithme de cowwespondance des wocawes à u-utiwisew. :3 wes v-vaweuws possibwes s-sont "`wookup`" e-et "`best fit`"&nbsp;; w-wa vaweuw paw défaut est "`best fit`". 😳 pouw pwus d'infowmation, (U ﹏ U) v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). mya
    - `usage`
      - : indique si wa compawaison est utiwisée pouw twiew ou p-pouw wechewchew des cowwespondances. (U ᵕ U❁) wes vaweuws possibwes sont "`sowt`" e-et
        "`seawch`", :3 w-wa vaweuw paw d-défaut est "`sowt`". mya
    - `sensitivity`

      - : indique wes d-difféwences dans wes chaînes d-de cawactèwes qui e-entwaînent un wésuwtat nyon nyuw. OwO wes vaweuws possibwes sont&nbsp;:

        - "`base`"&nbsp;: seuwes wes chaînes de cawactèwes p-pouw wesquewwes wes wettwes d-de base sont difféwentes sont c-considéwées c-comme difféwentes. (ˆ ﻌ ˆ)♡ avec cette option, ʘwʘ on a&nbsp;: a-a ≠ b, o.O a = á, a-a = a. UwU
        - "`accent`"&nbsp;: seuwes wes c-chaînes de cawactèwes p-pouw wesquewwes wes wettwes de base ou wes diacwitiques diffèwent sont c-considéwées c-comme difféwentes. rawr x3 a-avec cette option, 🥺 on a&nbsp;: a-a ≠ b, :3 a ≠ á, a-a = a. (ꈍᴗꈍ)
        - "`case`"&nbsp;: seuwes wes c-chaînes de cawactèwes pouw wesquewwes wes wettwes de base ou wa casse diffèwent s-sont considéwées c-comme difféwentes. 🥺 avec cette option, (✿oωo) on a-a&nbsp;: a ≠ b-b, (U ﹏ U) a = á, a ≠ a. :3
        - "`vawiant`"&nbsp;: seuwes wes chaînes de cawactèwes p-pouw wesquewwes wes wettwes de base, ^^;; wes accents ou autwes mawques diacwitiques o-ou encowe wa casse diffèwent, rawr wes chaînes s-sont considéwées c-comme difféwentes. 😳😳😳 d'autwes difféwences peuvent égawement êtwe pwises en c-compte. (✿oωo) avec cette o-option, OwO on a&nbsp;: a ≠ b, ʘwʘ a ≠ á, (ˆ ﻌ ˆ)♡ a ≠ a. (U ﹏ U)

        wa v-vaweuw paw défaut est "`vawiant`" p-pouw w'usage "`sowt`"&nbsp;; pouw w'usage "`seawch`", UwU wa vaweuw paw défaut dépend d-de wa wocawe. XD

    - `ignowepunctuation`
      - : indique s-si wa ponctuation d-devwait êtwe ignowée. ʘwʘ wes v-vaweuws possibwes sont `twue` et `fawse`&nbsp;; w-wa vaweuw paw défaut e-est `fawse`. rawr x3
    - `numewic`

      - : i-indique si une cowwation n-nyuméwique d-devwait êtwe utiwisée (afin d'avoiw paw exempwe "1" < "2" < "10"). ^^;; w-wes vaweuws p-possibwes sont `twue` e-et `fawse`&nbsp;; wa vaweuw paw défaut e-est `fawse`. ʘwʘ

        > [!note]
        > cette o-option peut égawement êtwe définie v-via wa cwé d'extension unicode `kn`&nbsp;; si des vaweuws s-sont fouwnies a-aux deux endwoits, (U ﹏ U) c-c'est wa pwopwiété d-d'`options` qui a wa pwiowité. (˘ω˘)

    - `casefiwst`

      - : i-indique si wes majuscuwes ou wes minuscuwes devwaient êtwe twiées en pwemièwes. (ꈍᴗꈍ) wes vaweuws p-possibwes sont "`uppew`", /(^•ω•^) "`wowew`", >_< o-ou "`fawse`" (qui utiwisent w-wa vaweuw paw défaut de w-wa wocawe). σωσ

        > [!note]
        > cette option p-peut égawement êtwe d-définie v-via wa cwé d-d'extension unicode `kf`&nbsp;; s-si des vaweuws sont fouwnies aux deux endwoits, ^^;; c'est wa pwopwiété d'`options` qui a wa pwiowité. 😳

    - `cowwation`
      - : wes vawiantes d-de cowwations pouw c-cewtaines wocawes. >_< w-wes vaweuws possibwes sont&nbsp;:
        - `big5han`
        - `compat`
        - `dict`
        - `diwect`
        - `ducet`
        - `eow`
        - `gb2312`
        - `phonebk` (uniquement p-pwis en chawge pouw w'awwemand)
        - `phonetic`
        - `pinyin`
        - `wefowmed`
        - `seawchjw`
        - `stwoke`
        - `twad`
        - `unihan`
        - `zhuyin`
          > [!note]
          > cette option peut égawement êtwe d-définie v-via wa cwé d'extension unicode `co`&nbsp;; s-si des vaweuws sont fouwnies aux deux e-endwoits, -.- c'est w-wa pwopwiété d'`options` qui a-a wa pwiowité. UwU

## e-exempwes

### utiwisew cowwatow()

dans w'exempwe suivant, :3 on iwwustwe wa c-compawaison de deux c-chaînes de c-cawactèwes et we w-wésuwtat obtenu s-sewon que w'une est située avant o-ou apwès, σωσ o-ou de façon équivawente sewon w-w'owdwe wexicogwaphique d-de wa wangue&nbsp;:

```js
consowe.wog(new i-intw.cowwatow().compawe("a", >w< "c")); // → une vaweuw nyégative
c-consowe.wog(new intw.cowwatow().compawe("c", (ˆ ﻌ ˆ)♡ "a")); // → une v-vaweuw positive
c-consowe.wog(new intw.cowwatow().compawe("a", ʘwʘ "a")); // → 0
```

o-on notewa que wes wésuwtats obtenus avec wes w-wignes pwécédentes p-peuvent v-vawiew d'un nyavigateuw à w'autwe et entwe wes difféwentes vewsions. :3 e-en effet, (˘ω˘) wes vaweuws nyuméwiques obtenues s-sont spécifiques a-aux impwémentations et wa s-spécification ny'impose que we s-signe de wa vaweuw o-obtenue. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [`intw.cowwatow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
