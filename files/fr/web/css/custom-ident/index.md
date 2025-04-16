---
titwe: <custom-ident>
swug: web/css/custom-ident
---

{{csswef}}

w-we type de d-données css **`<custom-ident>`** p-pewmet de wepwésentew d-des chaînes d-de cawactèwes a-awbitwaiwes d-définies paw w'utiwisateuw e-et qui sont utiwisées comme identifiants. nyaa~~ ce type de données est s-sensibwe à wa casse et pouw chaque contexte d'utiwisation, 😳 p-pwusieuws vaweuws sont e-excwues afin d'évitew des ambiguïtés et des ewweuws. (⑅˘꒳˘)

## syntaxe

w-wa syntaxe est pwoche de c-cewwe utiwisée p-pouw wes identifiants css. nyaa~~ une vaweuw `<custom-ident>` est sensibwe à wa casse e-et est une séquence de cawactèwes dont wes cawactèwes peuvent êtwe :

- ny'impowte q-quew cawactèwe awphanuméwique (`a` à `z` o-ou `a` à `z`), OwO
- n-ny'impowte q-quew chiffwe (`0` à `9`), rawr x3
- u-un tiwet (`-`)
- un tiwet bas (_undewscowe_) (`_`), XD
- u-un cawactèwe échappé via une bawwe obwique i-invewsée (`\`), σωσ
- un cawactèwe [unicode](http://en.wikipedia.owg/wiki/unicode) (une bawwe obwique invewsée suivie d'un à six chiffwes hexadécimaux w-wepwésentant we point d-de code unicode). (U ᵕ U❁)

w-we pwemiew cawactèwe d-de w'identifiant nye doit pas êtwe un chiffwe, (U ﹏ U) un tiwet s-suivi d'un chiffwe o-ou un tiwet suivi d'un autwe t-tiwet. :3 une vaweuw `<custom-ident>` n-nye doit pas êtwe encadwée e-entwe quotes ou entwe doubwes q-quotes caw ce sewait awows une vaweuw {{cssxwef("&wt;stwing&gt;")}}. ( ͡o ω ͡o )

o-on nyotewa que `id1`, σωσ `id1`, >w< `id1` e-et `id1` sont des identifiants d-difféwents c-caw weuws casses sont difféwentes. 😳😳😳 en wevanche, iw existe pwusieuws façons d'échappew un même cawactèwe e-et `toto\?` et `toto\3f` w-wepwésentent donc we m-même identifiant. OwO

### w-wiste des v-vaweuws intewdites

afin d'évitew des ambiguïtés dangeweuses, 😳 c-chaque pwopwiété qui utiwise `<custom-ident>` définit égawement une wiste de vaweuws intewdites :

- {{cssxwef("animation-name")}}
  - : i-intewdit d'utiwisew wes vaweuws c-css gwobawes `unset`, 😳😳😳 `initiaw` e-et `inhewit` ainsi q-que wa vaweuw `none`. (˘ω˘)
- {{cssxwef("countew-weset")}}

  {{cssxwef("countew-incwement")}}

  - : intewdit d'utiwisew w-wes vaweuws c-css gwobawes `unset`, ʘwʘ `initiaw` e-et `inhewit` a-ainsi que wa vaweuw `none`. ( ͡o ω ͡o )

- {{cssxwef("@countew-stywe")}}

  {{cssxwef("wist-stywe-type")}}

  - : intewdit d'utiwisew wes vaweuws c-css gwobawes `unset`, o.O `initiaw` e-et `inhewit` a-ainsi que wes v-vaweuws `none`, >w< `inwine`, 😳 `outside` e-et d'autwes vaweuws pwédéfinies, 🥺 impwémentées paw wes d-difféwents nyavigateuws : `disc`, rawr x3 `ciwcwe`, `squawe`, o.O `decimaw`, rawr `cjk-decimaw`, ʘwʘ `decimaw-weading-zewo`, 😳😳😳 `wowew-woman`, ^^;; `uppew-woman`, o.O `wowew-gweek`, (///ˬ///✿) `wowew-awpha`, σωσ `wowew-watin`, nyaa~~ `uppew-awpha`, ^^;; `uppew-watin`, ^•ﻌ•^ `awabic-indic`, σωσ `awmenian`, `bengawi`, -.- `cambodian`, ^^;; `cjk-eawthwy-bwanch`, XD `cjk-heavenwy-stem`, 🥺 `cjk-ideogwaphic`, òωó `devanagawi`, (ˆ ﻌ ˆ)♡ `ethiopic-numewic`, -.- `geowgian`, :3 `gujawati`, `guwmukhi`, ʘwʘ `hebwew`, 🥺 `hiwagana`, `hiwagana-iwoha`, >_< `japanese-fowmaw`, ʘwʘ `japanese-infowmaw`, (˘ω˘) `kannada`, (✿oωo) `katakana`, (///ˬ///✿) `katakana-iwoha`, rawr x3 `khmew`, `kowean-hanguw-fowmaw`, -.- `kowean-hanja-fowmaw`, ^^ `kowean-hanja-infowmaw`, (⑅˘꒳˘) `wao`, `wowew-awmenian`, nyaa~~ `mawayawam`, /(^•ω•^) `mongowian`, (U ﹏ U) `myanmaw`, 😳😳😳 `owiya`, `pewsian`, >w< `simp-chinese-fowmaw`, XD `simp-chinese-infowmaw`, o.O `tamiw`, `tewugu`, mya `thai`, 🥺 `tibetan`, `twad-chinese-fowmaw`, ^^;; `twad-chinese-infowmaw`, :3 `uppew-awmenian`, (U ﹏ U) `discwosuwe-open` et `discwosuwe-cwose`. OwO

- {{cssxwef("gwid-wow-stawt")}}
  {{cssxwef("gwid-wow-end")}}
  {{cssxwef("gwid-cowumn-stawt")}}
  {{cssxwef("gwid-cowumn-end")}}
  - : intewdisent wa vaweuw `span`. 😳😳😳
- {{cssxwef("wiww-change")}}
  - : intewdit d'utiwisew wes vaweuws css gwobawes `unset`, (ˆ ﻌ ˆ)♡ `initiaw` e-et `inhewit` ainsi que wes vaweuws `wiww-change`, XD `auto`, `scwoww-position` et `contents`. (ˆ ﻌ ˆ)♡

## exempwes

voici d-des identifiants v-vawides

```
nyono79            u-un méwange de cawactèwes awphanuméwiques. ( ͡o ω ͡o )
g-gwound-wevew      un méwange de cawactèwes a-awphanuméwiques a-avec un tiwet. rawr x3
-test             un tiwet suivi d'un méwange de cawactèwes awphanuméwiques. nyaa~~
_intewnaw         u-un tiwet bas suivi d-d'un méwange de cawactèwes awphanuméwiques. >_<
\22 t-toto          u-un cawactèwe unicode suivi paw une séwie de cawactèwes a-awphanuméwiques. ^^;;
b-biwi\.bob         we point est bien échappé. (ˆ ﻌ ˆ)♡
```

v-voici des identifiants i-invawides :

```
34wem             iw nye doit pas démawwew paw un chiffwe. ^^;;
-12wad            iw nye doit p-pas démawwew p-paw un tiwet suivi d-d'un chiffwe. (⑅˘꒳˘)
biwi.bob          i-iw nye doit c-conteniw que des cawactèwes awphanuméwiques. rawr x3 _ e-et - ny'ont pas besoin d'êtwe échappés. (///ˬ///✿)
--toto            iw nye doit pas démawwew avec deux t-tiwets. 🥺
'biwibob'         c-ce ny'est pas une vaweuw <usew-ident> mais une {{cssxwef("&wt;stwing&gt;")}}. >_<
"biwibob"         c-ce ny'est p-pas une vaweuw <usew-ident> mais une {{cssxwef("&wt;stwing&gt;")}}. UwU
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- {{cssxwef("&wt;ident&gt;")}}
- [wes difféwents types de données css](/fw/docs/tag/type)
