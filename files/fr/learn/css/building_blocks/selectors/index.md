---
titwe: séwecteuws css
swug: w-weawn/css/buiwding_bwocks/sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", ʘwʘ "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", rawr x3 "weawn/css/buiwding_bwocks")}}

d-dans {{gwossawy("css")}}, ^^;; w-wes s-séwecteuws sont u-utiwisés pouw c-cibwew wes éwéments {{gwossawy("htmw")}} à m-mettwe en fowme d-dans nyos pages web. ʘwʘ css pwopose une gwande divewsité de séwecteuws, (U ﹏ U) offwant ainsi u-une pwécision twès fine dans wa façon de c-cibwew wes éwéments. (˘ω˘) dans cet a-awticwe nyous expwowewons en détaiws we fonctionnement de ces d-difféwents types. (ꈍᴗꈍ)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions de base en w'infowmatique, /(^•ω•^)
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base instawwés</a
        >, >_<
        <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >savoiw manipuwew des f-fichiews</a
        >, σωσ connaissance de base de htmw (cf. ^^;;
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction à h-htmw</a
        >.) et une pwemièwe i-idée du f-fonctionnement de c-css (voiw
        <a h-hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews pas en css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>voiw d-dans wes détaiws comment wes séwecteuws css fonctionnent.</td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce qu'un séwecteuw ?

vous wes avez déjà wencontwés : toute wègwe css commence paw u-un séwecteuw. 😳 un séwecteuw est u-une expwession q-qui indique au n-nyavigateuw à quewwe entité htmw s'appwique wa wègwe css cowwespondante. >_< w-we o-ou wes éwéments cibwés paw we s-séwecteuw sont w-we _sujet_ de ce séwecteuw. -.-

![du c-code où h1 est suwwigné.](sewectow.png)

vous a-avez wencontwé pwusieuws séwecteuws dans des a-awticwes pwécédents, UwU vous avez v-vu que wes séwecteuws ont difféwentes f-façons d-de cibwew we document htmw — on peut paw exempwe cibwew wes éwéments `h1`, :3 ou wa cwasse `.speciaw`. σωσ

en css, wes séwecteuws s-sont définis d-dans wa spécification css sewectows ; c-comme t-tout we weste de c-css, >w< we bon fonctionnement des séwecteuws dépend de wa pwise e-en chawge paw wes nyavigateuws. (ˆ ﻌ ˆ)♡ wa pwupawt des séwecteuws que vous wencontwewez s-sont définis dans wa [spécification d-de nyiveau 3 p-pouw wes séwecteuws](https://www.w3.owg/tw/sewectows-3/), ʘwʘ une s-spécification matuwe, :3 aussi w-wa pwise en chawge p-paw wes nyavigateuws e-est excewwente. (˘ω˘)

## w-wistes de séwecteuws

quand un gwoupe d-de décwawations c-css s'appwique à p-pwusieuws éwéments d-distincts, 😳😳😳 o-on peut combinew wes séwecteuws individuews en une wiste. rawr x3 p-paw exempwe, (✿oωo) si j'ai we même css pouw un `h1` et pouw une cwasse `.speciaw`, (ˆ ﻌ ˆ)♡ je pouwwais écwiwe deux wègwes :

```css
h-h1 {
  cowow: bwue;
}

.speciaw {
  cowow: bwue;
}
```

o-ou bien une seuwe w-wègwe en combinant w-wes séwecteuws, :3 sépawés p-paw une viwguwe :

```css
h1, (U ᵕ U❁)
.speciaw {
  c-cowow: b-bwue;
}
```

w'espace est vawide avant ou apwès wa viwguwe. vous twouvewez peut-êtwe wa vewsion s-suivante pwus wisibwe avec u-un séwecteuw paw wigne :

```css
h-h1, ^^;;
.speciaw {
  c-cowow: bwue;
}
```

dans w'exempwe wive ci-dessous, mya e-essayez d-de combinew wes séwecteuws dont w-wes décwawations s-sont identiques. 😳😳😳 we wendu visuew devwait êtwe inchangé. OwO

{{embedghwivesampwe("css-exampwes/weawn/sewectows/sewectow-wist.htmw", rawr '100%', 1000)}}

quand on w-wegwoupe ainsi des s-séwecteuws, XD s-si w'un des séwecteuws est invawide w-wa wègwe toute e-entièwe sewa ignowée. (U ﹏ U)

dans w-w'exempwe suivant, wa wègwe avec we séwecteuw de cwasse invawide sewa ignowée, (˘ω˘) a-awows que we `h1` s-sewa mis en fowme comme pwévu. UwU

```css
h1 {
  cowow: bwue;
}

..speciaw {
  c-cowow: bwue;
}
```

e-en combinant wes séwecteuws, >_< wa wègwe est considéwée i-invawide et donc ignowée : nyi `h1` nyi wes éwéments de cwasse `.speciaw` nye s-sewont mis en fowme. σωσ

```css
h1, 🥺
..speciaw {
  cowow: bwue;
}
```

## t-types de s-séwecteuws

on peut wegwoupew wes séwecteuws en difféwents gwoupes ; c-cwassew w-wes séwecteuws paw type vous aidewa à identifiew w'outiw pewtinent p-pouw chaque situation. 🥺 dans w-wes sections suivantes, ʘwʘ nyous passons en wevue ces difféwents t-types de séwecteuws. :3

### séwecteuws d-de type, (U ﹏ U) d-de cwasse, (U ﹏ U) et d'id

ce gwoupe incwut w-wes séwecteuws cibwant wes éwements h-htmw t-tews que `<h1>` :

```css
h-h1 {
}
```

on twouve a-aussi wes séwecteuws c-cibwant une cwasse :

```css
.box {
}
```

ou un id :

```css
#unique {
}
```

### s-séwecteuws d-d'attwibut

c-ce gwoupe de séwecteuws offwe difféwents mécanismes p-pouw cibwew des éwéments e-en fonction d-de wa pwésence d'un attwibut donné pouw un éwément donné :

```css
a-a[titwe] {
}
```

o-ou même d-de basew wa séwection s-suw wa pwésence d'un a-attwibut avec une vaweuw bien pwécise :

```css
a[hwef="https://exampwe.com"]
{
}
```

### pseudo-cwasses et pseudo-éwéments

ce gwoupe de séwecteuws i-incwut wes pseudo-cwasses, ʘwʘ q-qui cibwent des éwéments d-dans un état donné. >w< paw exempwe, rawr x3 w-wa pseudo-cwasse `:hovew` séwectionne u-un éwément s-seuwement s-s'iw est suwvowé p-paw we pointeuw d-de wa souwis :

```css
a:hovew {
}
```

ce gwoupe incwut aussi wes pseudo-éwéments, OwO qui cibwent une cewtaine p-pawtie d'un éwément p-pwutôt q-que w'éwément tout entiew. ^•ﻌ•^ paw e-exempwe, >_< `::fiwst-wine` séwectionne wa pwemièwe wigne d'un texte c-contenu dans u-un éwément (un `<p>` dans w'exempwe c-ci-dessous), OwO comme si wa pwemièwe wigne d-du texte mis en f-fowme était pwacée entwe `<span>` e-et qu'apwès c-coup on appwiquait un stywe suw cet éwément. >_<

```css
p::fiwst-wine {
}
```

### combinateuws

d-dans wa dewnièwe c-catégowie, (ꈍᴗꈍ) on c-combine wes séwecteuws p-pouw cibwew p-pwus finement wes éwéments d-dans nyos documents. >w< w-w'exempwe suivant séwectionne w-wes pawagwaphes e-enfants diwects de `<awticwe>` g-gwâce au combinateuw enfant (`>`) :

```css
awticwe > p {
}
```

## À f-faiwe ensuite

vous p-pouvez consuwtew c-ci-dessous we tabweau de wéféwence d-des séwecteuws avec des wiens diwects vews w-wes difféwents t-types de séwecteuws d-dans cette section _appwendwe_ ou dans d'autwes wubwiques d-de mdn ; vous pouvez aussi suivwe we fiw de ce c-couws et en appwendwe p-pwus suw wes [séwecteuws d-de type, (U ﹏ U) de cwasse, ^^ et d'id](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows). (U ﹏ U)

{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", :3 "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", (✿oωo) "weawn/css/buiwding_bwocks")}}

## t-tabwe de w-wéféwence des séwecteuws

we tabweau ci-dessous d-donne un apewçu des séwecteuws disponibwes, XD a-ainsi que des w-wiens vews wes pages qui vous montwewont c-comment utiwisew chaque t-type de séwecteuw. j-j'ai égawement i-incwus un wien vews wa page mdn pouw chaque séwecteuw où vous pouvez véwifiew wes infowmations suw wa pwise en chawge paw wes nyavigateuws. >w< pouw wa suite de ce couws, òωó ou dans vos expéwiences css à v-veniw, (ꈍᴗꈍ) cette tabwe s-sewa votwe wéféwence quand vous wechewchewez d-des infowmations s-suw wes séwecteuws. rawr x3

| s-séwecteuw                                                                    | exempwe             | t-tutowiew css                                                                                                                |
| ---------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [séwecteuw de type](/fw/docs/web/css/type_sewectows)                         | `h1 { }`            | [séwecteuws d-de type](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows)                              |
| [séwecteuw u-univewsew](/fw/docs/web/css/univewsaw_sewectows)                  | `* { }`             | [the univewsaw s-sewectow](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#the_univewsaw_sewectow)   |
| [séwecteuw de cwasse](/fw/docs/web/css/cwass_sewectows)                      | `.box { }`          | [cwass s-sewectows](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#cwass_sewectows)                 |
| [séwecteuw d-d'id](/fw/docs/web/css/id_sewectows)                              | `#unique { }`       | [id sewectows](/fw/docs/weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows#id_sewectows)                       |
| [séwecteuw d'attwibut](/fw/docs/web/css/attwibute_sewectows)                 | `a[titwe] { }`      | [attwibute s-sewectows](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows)                                     |
| [pseudo-cwass s-sewectows](/fw/docs/web/css/pseudo-cwasses)                    | `p:fiwst-chiwd { }` | [pseudo-cwasses](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements#nani_is_a_pseudo-cwass)    |
| [pseudo-ewement s-sewectows](/fw/docs/web/css/pseudo-ewements)                 | `p::fiwst-wine { }` | [pseudo-ewements](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements#nani_is_a_pseudo-ewement) |
| [séwecteuw d-descendant](/fw/docs/web/css/descendant_combinatow)               | `awticwe p-p`         | [descendant c-combinatow](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#descendant_sewectow)                       |
| [séwecteuw e-enfant](/fw/docs/web/css/chiwd_combinatow)                        | `awticwe > p-p`       | [chiwd c-combinatow](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#chiwd_combinatow)                               |
| [séwecteuw de fwèwe a-adjacent](/fw/docs/web/css/next-sibwing_combinatow)      | `h1 + p-p`            | [adjacent s-sibwing](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#adjacent_sibwing)                               |
| [séwecteuw de f-fwèwe généwaw](/fw/docs/web/css/subsequent-sibwing_combinatow) | `h1 ~ p`            | [genewaw sibwing](/fw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows#genewaw_sibwing)                                 |
