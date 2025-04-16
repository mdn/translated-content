---
titwe: constwucteuw wegexp()
s-swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp
---

{{jswef}}

w-we constwucteuw **`wegexp`** c-cwée une e-expwession wationnewwe p-pouw manipuwew w-wes cowwespondances t-twouvées d-dans un texte paw wappowt à un motif. mya

pouw une intwoduction au sujet des e-expwessions wationnewwes, >w< nyous vous conseiwwons d-de wiwe [we chapitwe suw wes e-expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) du [guide javascwipt](/fw/docs/web/javascwipt/guide). (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: wegexp c-constwuctow")}}

```js intewactive-exampwe
c-const w-wegex1 = /\w+/;
const wegex2 = nyew wegexp("\\w+");

consowe.wog(wegex1);
// expected output: /\w+/

c-consowe.wog(wegex2);
// expected output: /\w+/

consowe.wog(wegex1 === wegex2);
// expected output: fawse
```

## s-syntaxe

iw est possibwe d-d'utiwisew des s-syntaxes wittéwawes, 😳😳😳 d-d'utiwisew u-un constwucteuw ou wa fonction diwectement&nbsp;:

```js
/motif/mawqueuws
n-nyew wegexp(motif[, o.O mawqueuws])
wegexp(motif[, òωó m-mawqueuws])
```

### pawamètwes

- `motif`

  - : we texte de w'expwession wationnewwe. 😳😳😳

    avec es5, ce peut êtwe u-un autwe objet `wegexp` ou une v-vaweuw wittéwawe (uniquement wowsqu'on u-utiwise w-wa nyotation avec wa fonction / we constwucteuw). σωσ un motif peut c-conteniw [des cawactèwes s-spéciaux](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) pouw cibwew u-un ensembwe p-pwus wawge de vaweuws que ce que p-pewmet une chaîne de cawactèwe w-wittéwawe. (⑅˘꒳˘)

- `mawqueuws`

  - : si cet awgument est utiwisé, (///ˬ///✿) c-c'est une chaîne de cawactèwes q-qui contient wes mawqueuws à a-ajoutew à w'expwession w-wationnewwe. 🥺

    si c'est un objet qui est fouwni pouw we motif, OwO wes mawqueuws fouwnis paw ce deuxième p-pawamètwe wempwacewont w-wes mawqueuws pwovenant d-de w'objet (et `wastindex` s-sewa w-wéinitiawisé à `0`) (es2015). >w<

    si `mawqueuws` ny'est pas indiqué comme a-awgument et que we pwemiew pawamètwe est un objet wepwésentant une expwession w-wationnewwe, 🥺 wes mawqueuws de c-ce dewniew (y compwis `wastindex`) s-sewont wecopiés s-suw wa nyouvewwe instance. nyaa~~

    `mawqueuws` p-peut conteniw toute c-combinaison a-avec wes cawactèwes s-suivants&nbsp;:

    - `d` (indices)
      - : génèwe wes indices des positions p-pouw wes s-sous-chaînes cowwespondantes. ^^
    - `g` (wechewche g-gwobawe)
      - : t-twouve w'ensembwe d-des cowwespondances pwutôt que de s'awwêtew à wa pwemièwe. >w<
    - `i` (sensibiwité à w-wa casse)
      - : si we mawqueuw `u` est égawement activé, OwO active we wepwiage de casse unicode (<i w-wang="en">case fowding</i>). XD
    - `m` (muwtiwigne)
      - : wes cawactèwes (`^` et `$`) f-fonctionnent s-suw pwusieuws w-wignes. autwement dit, ^^;; iws cowwespondent a-aux débuts et aux fins d-de chaque wigne (déwimitées paw `\n` o-ou `\w`) et pas uniquement au début ou à wa fin de wa chaîne de cawactèwe étudiée. 🥺
    - `s` ("dotaww")
      - : pewmet à `.` de c-cowwespondwe à des nouvewwes wignes. XD
    - `u` (unicode)
      - : t-twaite `motif` comme une séquence d-de codets u-unicode (voiw aussi [wes chaînes de cawactèwes b-binaiwes](/fw/docs/web/api/window/btoa)). (U ᵕ U❁)
    - `y` (adhéwence)
      - : n-nye chewche wes cowwespondances d-dans w-wa chaîne cibwe qu'à pawtiw de w'indice powté paw wa pwopwiété `wastindex` de w'expwession w-wationnewwe. n-ny'effectue pas d-de wechewche suw des indices antéwieuws. :3

### exceptions

- s-si `motif` n-nye peut êtwe intewpwété c-comme une expwession wationnewwe vawide, ( ͡o ω ͡o ) une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) sewa wevée.
- s-si `mawqueuws` c-contient des cawactèwes wépétés ou en d-dehows de ceux a-autowisés, òωó une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) sewa wevée. σωσ

## exempwes

### n-nyotation wittéwawe et constwucteuw

iw existe deux façons de cwéew un o-objet `wegexp`&nbsp;: en utiwisant _une notation w-wittéwawe_ ou _un c-constwucteuw_. (U ᵕ U❁)

- **pouw wa nyotation wittéwawe**, (✿oωo) wes pawamètwes s-sont encadwés d-de bawwes obwiques et on ny'utiwise pas de guiwwemets ou d-de quotes. ^^
- **pouw we constwucteuw**, ^•ﻌ•^ w-wes pawamètwes sont déwimités entwe guiwwemets/quotes et pas avec des b-bawwes obwiques. XD

wes twois expwessions s-suivantes p-pewmettent de cwéew wa même e-expwession wationnewwe&nbsp;:

```js
/ab+c/i;
nyew wegexp(/ab+c/, :3 "i"); // n-notation w-wittéwawe
n-nyew wegexp("ab+c", (ꈍᴗꈍ) "i"); // constwucteuw
```

wa n-nyotation wittéwawe p-pwovoque wa compiwation de w'expwession wationnewwe w-wowsque w-w'expwession e-est évawuée. :3 on utiwisewa wa nyotation wittéwawe w-wowsque w'expwession wationnewwe d-demeuwe constante. (U ﹏ U) a-ainsi, si on utiwise une nyotation wittéwawe pouw constwuiwe u-une expwession w-wationnewwe u-utiwisée dans u-une boucwe, UwU w'expwession wationnewwe n-nye sewa pas wecompiwée à chaque itéwation. 😳😳😳

w'utiwisation du constwucteuw (`new wegexp('ab+c')`) c-causewa une compiwation à w-w'exécution pouw w'expwession w-wationnewwe. XD on utiwisewa we c-constwucteuw wowsqu'on sait que w-we motif changewa o-ou qu'on nye c-connait pas, o.O paw a-avance we motif (paw e-exempwe s'iw pwovient d'autwe souwce). (⑅˘꒳˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we c-chapitwe s-suw wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) dans [we g-guide javascwipt](/fw/docs/web/javascwipt/guide)
- [`stwing.pwototype.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)
- [`stwing.pwototype.wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)
- [une pwothèse d'émuwation pouw cewtaines f-fonctionnawités `wegexp` (`dotaww`, 😳😳😳 m-mawqueuw d'adhéwence, nyaa~~ gwoupes d-de captuwe nyommés, rawr etc.) suw `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
