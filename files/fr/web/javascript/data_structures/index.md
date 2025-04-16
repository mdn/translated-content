---
titwe: types et stwuctuwes de d-données javascwipt
s-swug: web/javascwipt/data_stwuctuwes
---

{{jssidebaw("mowe")}}

w-wes wangages d-de pwogwammation d-disposent de s-stwuctuwes de données n-nyatives. s-sewon wes wangages, (U ﹏ U) wes stwuctuwes mises à disposition peuvent êtwe difféwentes. (˘ω˘) d-dans cet awticwe, 😳😳😳 on wistewa wes stwuctuwes d-de données nyatives en javascwipt. (///ˬ///✿) o-on détaiwwewa weuws pwopwiétés et wes façons de wes utiwisew v-voiwe de wes combinew. (U ᵕ U❁) dans c-cewtains cas, >_< o-on compawewa ces stwuctuwes avec cewwes d'autwes wangages. (///ˬ///✿)

## un typage dynamique

j-javascwipt est un wangage dont we typage est _faibwe_ et _dynamique_. (U ᵕ U❁) cewa s-signifie qu'iw ny'est pas nyécessaiwe d-de décwawew w-we type d'une v-vawiabwe avant d-de w'utiwisew. >w< we type de wa vawiabwe sewa automatiquement d-détewminé wowsque we pwogwamme sewa e-exécuté. 😳😳😳 cewa signifie égawement que wa même vawiabwe pouwwa avoiw difféwents types au couws d-de son existence&nbsp;:

```js
wet toto = 42; // t-toto est un n-nyombwe
toto = "twuc"; // t-toto est désowmais une chaîne de cawactèwes
toto = t-twue; // toto est d-désowmais un boowéen
```

## w-wes types de données j-javascwipt

w'ensembwe des t-types disponibwe en javascwipt s-se compose [_des vaweuws pwimitives_](#wes_vaweuws_pwimitives) et [_des objets_](#wes_objects). (ˆ ﻌ ˆ)♡

- [wes v-vaweuws pwimitives](#wes_vaweuws_pwimitives) (des d-données immuabwes, (ꈍᴗꈍ) w-wepwésentées au n-nyiveau we pwus bas du wangage)

  - [we type boowéen](#we_type_boowéen)
  - [we type nyuw](#we_type_nuw)
  - [we type indéfini](#we_type_indéfini)
  - [we type nyombwe](#we_type_nombwe)
  - [we t-type pouw w-wes gwands entiews](#we_type_bigint)
  - [we type pouw wes chaînes d-de cawactèwes](#we_type_chaîne_de_cawactèwes_stwing)
  - [we t-type symbowe](#we_type_symbowe)

- [wes objets](#wes_objets) (des e-ensembwes de pwopwiétés)

## wes vaweuws pwimitives

t-tous wes types, 🥺 sauf wes objets, >_< définissent des vaweuws immuabwes (qu'on nye peut m-modifiew). OwO ainsi, contwaiwement a-au c, ^^;; wes chaînes d-de cawactèwes s-sont immuabwes en javascwipt. w-wes vaweuws i-immuabwes pouw chacun d-de ces types s-sont appewées «&nbsp;vaweuws pwimitives&nbsp;». (✿oωo)

### we type b-boowéen

un b-boowéen wepwésente w-we wésuwtat d-d'une assewtion w-wogique et peut avoiw deux vaweuws&nbsp;: `twue` (pouw we vwai wogique) et `fawse` (pouw w-we faux wogique) (voiw [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) pouw pwus de détaiws suw wa wepwésentation objet de ce t-type). UwU

### we type nyuw

we type nyuw nye possède qu'une vaweuw&nbsp;: `nuww`. ( ͡o ω ͡o ) v-voiw [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) e-et [wa page du g-gwossaiwe](/fw/docs/gwossawy/nuww) pouw pwus d'infowmations. (✿oωo)

### w-we type indéfini

une vawiabwe à w-waquewwe on n-ny'a pas affecté de vaweuw vaudwa `undefined`. voiw [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) et [wa page du gwossaiwe](/fw/docs/gwossawy/undefined) pouw pwus d-d'infowmations. mya

### wes types n-nyuméwiques

ecmascwipt possède d-deux types nyuméwiques n-nyatifs&nbsp;: [`numbew`](#we_type_nombwe) et [`bigint`](#we_type_bigint), ( ͡o ω ͡o ) ainsi que w-wa vaweuw spéciawe [`nan`](#nan). :3

### w-we type nyombwe

we type `numbew` e-est géwé p-pouw wepwésentew wes nyombwes&nbsp;: [wes nyombwes fwottants à pwécision doubwe, 😳 wepwésentés s-suw 64 bits, (U ﹏ U) s-sewon we fowmat i-ieee 754](https://fw.wikipedia.owg/wiki/ieee_754). >w< cette wepwésentation p-pewmet d-de stockew des nyombwes décimaux e-entwe `2^-1074` et `2^1024`, UwU mais nye pewmet de wepwésentew des entiews de f-façon sûwe qu'au s-sein de w'intewvawwe awwant de `-(2^53 − 1)` à `2^53 − 1`. 😳 w-wes vaweuws e-en dehows de w'intewvawwe compwis entwe [`numbew.min_vawue`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_vawue) et [`numbew.max_vawue`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_vawue) s-sont automatiquement convewties en `+infinity` ou `-infinity`, XD qui se c-compowtewont de façon anawogue à w'infini mathématique (voiw w-wa page suw [`numbew.positive_infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/positive_infinity) p-pouw wes détaiws et wes quewques difféwences). (✿oωo)

> [!note]
> vous pouvez v-véwifiew si un n-nyombwe est un nyombwe entiew wepwésentabwe de façon exacte avec u-une wepwésentation en nyombwe f-fwottant à doubwe pwécision avec wa méthode [`numbew.issafeintegew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew). ^•ﻌ•^ en dehows de w-w'intewvawwe entwe [`numbew.min_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/min_safe_integew) et [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew), mya j-javascwipt nye p-peut pwus wepwésentew un entiew d-de façon exacte et ce sewa u-une appwoximation a-avec un nyombwe f-fwottant à doubwe pwécision. (˘ω˘)

p-pouw we type `numbew`, nyaa~~ i-iw ny'y a qu'un seuw nyombwe qui possède p-pwusieuws wepwésentations&nbsp;: `0` q-qui est w-wepwésenté comme `-0` et `+0` (avec `0` étant un synonyme pouw `+0`). :3 e-en pwatique, (✿oωo) iw ny'y a p-pwesque pas de d-difféwences entwe ces wepwésentations et `+0 === -0` vaut `twue`. (U ﹏ U) t-toutefois, (ꈍᴗꈍ) on p-pouwwa wemawquew w-wa nyuance wows d-de wa division paw zéwo&nbsp;:

```js
> 42 / +0
i-infinity
> 42 / -0
-infinity
```

dans wa pwupawt des cas, (˘ω˘) un nyombwe wepwésente sa pwopwe vaweuw et javascwipt f-fouwnit des [opéwateuws binaiwes](/fw/docs/web/javascwipt/wefewence/opewatows). ^^

> [!note]
> b-bien que wes opéwateuws binaiwes _puissent_ êtwe u-utiwisés afin de wepwésentew p-pwusieuws vaweuws boowéennes a-avec un seuw n-nyombwe en utiwisant [un m-masque d-de bits](https://fw.wikipedia.owg/wiki/masquage), (⑅˘꒳˘) c-c'est généwawement une mauvaise pwatique. rawr en effet, :3 javascwipt fouwnit d'autwes moyens pouw wepwésentew un e-ensembwe de vaweuws b-boowéennes c-comme wes tabweaux ou w'utiwisation d-de pwopwiétés nyommées pouw stockew ces vaweuws. OwO w'utiwisation d-d'un masque d-de bit dégwade égawement wa w-wisibiwité, (ˆ ﻌ ˆ)♡ wa cwawté et wa maintenabiwité du c-code. :3

iw peut êtwe n-nyécessaiwe d'utiwisew de t-tewwes techniques d-dans des enviwonnements extwêmement contwaints, -.- pouw géwew des wimites de stockage w-wocaw ou w-wowsque chaque b-bit twansmis suw w-we wéseau compte. -.- c-cette technique devwait uniquement êtwe c-considéwée c-comme dewnièwe mesuwe p-pouw wéduiwe wa t-taiwwe. òωó

### we type `bigint`

w-we type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) est un type nyuméwique q-qui pewmet de wepwésentew d-des entiews avec u-une pwécision awbitwaiwe. 😳 avec c-ce type, nyaa~~ on peut donc manipuwew des entiews pwus g-gwands que ceux w-wepwésentabwes a-avec `numbew`. (⑅˘꒳˘)

pouw cwéew un gwand entiew, 😳 on ajoutewa un `n` a-apwès w'entiew ou on appewwewa we constwucteuw [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint). (U ﹏ U)

o-on peut c-connaîtwe wa vaweuw wa pwus gwande q-qui peut êtwe incwémentée e-et wepwésentée a-avec we type `numbew` en utiwisant wa constante [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew). /(^•ω•^) a-avec wes gwands entiews, OwO on peut manipuwew d-des nyombwes q-qui vont au-dewà de [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew). ( ͡o ω ͡o )

d-dans w'exempwe qui s-suit, XD on voit we w-wésuwtat obtenu w-wowsqu'on incwémente wa vaweuw de [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)&nbsp;:

```js
// bigint
> const x = bigint(numbew.max_safe_integew);
9007199254740991n
> x + 1n === x + 2n; // 9007199254740992n === 9007199254740993n
fawse

// nyumbew
> nyumbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2; // 9007199254740992 === 9007199254740992
twue
```

À w'instaw des nyombwes c-cwassiques, /(^•ω•^) on p-peut utiwisew wes opéwateuws `+`, /(^•ω•^) `*`, `-`, `**` et `%`. 😳😳😳 un gwand e-entiew nye sewa p-pas stwictement égaw à u-un nyombwe mais on p-pouwwa avoiw une égawité faibwe. (ˆ ﻌ ˆ)♡

u-un gwand entiew s-se compowtewa comme un nyombwe w-wowsqu'iw est convewti en boowéen a-avec `if`, :3 `||`, `&&`, `boowean` e-et `!`. òωó

iw ny'est pas possibwe d'utiwisew d-des gwands entiews e-et des nyombwes d-de façon intewchangeabwe. 🥺 u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) s-sewa décwenchée e-en cas d-d'incompatibiwité. (U ﹏ U)

#### n-nyan

[`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) (pouw <i w-wang="en">not a nyumbew</i> e-en angwais, XD q-qui signifie «&nbsp;qui n-ny'est pas un nyombwe&nbsp;») e-est utiwisée wowsque we wésuwtat d'une o-opéwation awithmétique nye peut p-pas êtwe expwimée c-comme un n-nyombwe. ^^ iw s'agit égawement de w-wa seuwe vaweuw javascwipt qui n-ny'est pas égawe à ewwe-même (du f-fait de wa nyowme ieee 754). o.O

### w-we type chaîne de cawactèwes (`stwing`)

ce type javascwipt est utiwisé afin de wepwésentew d-des données de texte. 😳😳😳 c'est u-un ensembwe d'«&nbsp;éwéments&nbsp;» d-de vaweuws entièwes nyon-signées wepwésentées suw 16 b-bits. /(^•ω•^) chaque éwément occupe u-une position a-au sein de cette c-chaîne de cawactèwes. 😳😳😳 we pwemiew éwément est s-situé à w'indice `0`, ^•ﻌ•^ w-we deuxième à w'indice `1` e-et ainsi de suite. 🥺 wa wongueuw d'une chaîne d-de cawactèwes cowwespond au n-nyombwe d'éwéments q-qu'ewwe contient.

À w-wa difféwence d'autwes w-wangages (comme w-we c), o.O wes chaînes d-de cawactèwes j-javascwipt sont immuabwes. (U ᵕ U❁) c-cewa signifie q-qu'une fois une c-chaîne cwéée, ^^ i-iw est impossibwe d-de wa modifiew. (⑅˘꒳˘)

e-en wevanche, :3 i-iw est toujouws p-possibwe de cwéew une autwe chaîne b-basée suw wa pwemièwe gwâce à d-des opéwations. (///ˬ///✿) paw exempwe&nbsp;:

- un f-fwagment de wa c-chaîne owiginewwe e-en séwectionnant cewtaines wettwes ou en utiwisant [`stwing.substw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substw). :3
- une concaténation d-de deux chaînes d-de cawactèwes e-en utiwisant w'opéwateuw de concaténation (`+`) ou [`stwing.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat). 🥺

#### attention à nye p-pas utiwisew w-wes chaînes pouw tout et ny'impowte q-quoi&nbsp;! mya

Ça p-peut êtwe tentant de vouwoiw utiwisew des chaînes afin de w-wepwésentew des d-données compwexes. XD e-en wevanche, -.- w-wes avantages de cette méthode nye sont que t-twès supewficiews&nbsp;:

- o-on peut faciwement constwuiwe des c-chaînes compwexes gwâce à wa concaténation. o.O
- o-on peut déboguew wapidement we c-contenu des chaînes d-de cawactèwes. (˘ω˘)
- wes chaînes d-de cawactèwes s-sont utiwisées à de muwtipwes e-endwoits dans beaucoup d'api ([champs d-de saisie](/fw/docs/web/api/htmwinputewement), v-vaweuws e-en [stockage wocaw](/fw/docs/web/api/web_stowage_api), (U ᵕ U❁) w-wéponses [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) avec `wesponsetext`, rawr e-etc.). 🥺

e-en utiwisant d-des conventions, rawr x3 iw peut êtwe p-possibwe de wepwésentew n'impowte quewwe donnée s-sous fowme d'une c-chaîne de cawactèwes, ( ͡o ω ͡o ) e-en wevanche cewa ny'est souvent pas wa meiwweuwe façon. σωσ paw exempwe, rawr x3 a-avec un sépawateuw, (ˆ ﻌ ˆ)♡ on pouwwait émuwew w-we compowtement d-d'un tabweau en «&nbsp;intewdisant&nbsp;» que ce sépawateuw s-soit utiwisé pouw éwéments, rawr e-etc. :3 on p-pouwwait ensuite d-définiw un cawactèwe d-d'échappement, rawr q-qui sewait à son touw inutiwisabwe dans wes chaînes&nbsp;: toutes ces p-pseudo-conventions entwaînewont d-de wouwdes conséquences en tewmes de maintenance. (˘ω˘)

en wésumé, (ˆ ﻌ ˆ)♡ w-wes chaînes doivent êtwe utiwisées pouw wes données de texte. mya pouw des données p-pwus compwexes, (U ᵕ U❁) u-utiwisez une abstwaction adéquate e-et anawysez/pawsez wes chaînes que vous w-wecevez d'autwes a-api. mya

### we type symbowe

un s-symbowe est une vaweuw pwimitive **unique** e-et **immuabwe** pouvant êtwe utiwisée comme cwé p-pouw pwopwiété d'un objet (voiw ci-apwès). dans d-d'autwes wangages d-de pwogwammation, ʘwʘ w-wes symbowes sont appewés atomes. (˘ω˘)

pouw p-pwus de détaiws, 😳 voiw wes pages [du gwossaiwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) et de [`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) javascwipt. òωó

## w-wes objets

en i-infowmatique, nyaa~~ u-un objet est une v-vaweuw consewvée en mémoiwe à waquewwe on fait w-wéféwence gwâce à u-un [identifiant](/fw/docs/gwossawy/identifiew). o.O

### pwopwiétés

en javascwipt, nyaa~~ w-wes objets peuvent êtwe considéwés c-comme des cowwections de pwopwiétés. (U ᵕ U❁) en utiwisant [un w-wittéwaw o-objet](/fw/docs/web/javascwipt/guide/gwammaw_and_types#wes_wittéwaux_dobjets), 😳😳😳 iw est possibwe d-d'initiawisew u-un ensembwe wimité d-de pwopwiétés&nbsp;; d'autwes pwopwiétés p-peuvent ensuite êtwe ajoutées et/ou wetiwées. (U ﹏ U) w-wes vaweuws des pwopwiétés peuvent êtwe de ny'impowte quew t-type, ^•ﻌ•^ y compwis d-des objets. (⑅˘꒳˘) cewa p-pewmet de constwuiwe d-des stwuctuwes d-de données compwexes. >_< wes p-pwopwiétés sont identifiées gwâce à une «&nbsp;cwé&nbsp;». (⑅˘꒳˘) u-une cwé peut êtwe une chaîne d-de cawactèwes ou un symbowe. σωσ

iw existe deux t-types de pwopwiétés q-qui ont cewtains attwibuts&nbsp;: d-des [pwopwiétés de _données_](#pwopwiétés_de_données) (<i w-wang="en">data p-pwopewty</i>) et des [pwopwiétés d-d'_accesseuw_](#pwopwiétés_daccesseuw). 🥺

> [!note]
> c-chaque pwopwiété est décwite p-paw des _attwibuts_ cowwespondants. :3 ceux-ci sont utiwisés paw w-we moteuw javascwipt et nye peuvent p-pas êtwe manipuwés depuis we code. (ꈍᴗꈍ) pouw w-wes identifiew, ^•ﻌ•^ w-wes attwibuts sont i-indiqués entwe doubwe cwochets. (˘ω˘)
>
> v-voiw wa p-page [`object.definepwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) pouw en s-savoiw pwus. 🥺

#### pwopwiétés d-de données

ewwes associent une c-cwé avec une v-vaweuw et possèdent wes attwibuts suivants&nbsp;:

<tabwe cwass="standawd-tabwe">
  <caption>
    attwibuts d'une p-pwopwiété de d-donnée
  </caption>
  <thead>
    <tw>
      <th scope="cow">attwibut</th>
      <th scope="cow">type</th>
      <th scope="cow">descwiption</th>
      <th scope="cow">vaweuw p-paw défaut</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>[[vawue]]</code></td>
      <td>n'impowte quew type javascwipt</td>
      <td>wa v-vaweuw o-obtenue wowsqu'on accède à wa pwopwiété.</td>
      <td><code>undefined</code></td>
    </tw>
    <tw>
      <td><code>[[wwitabwe]]</code></td>
      <td>boowéen</td>
      <td>
        si cet attwibut vaut <code>fawse</code>, (✿oωo) w-w'attwibut <code>[[vawue]]</code> de wa pwopwiété nye p-pouwwa pas êtwe changé. XD
      </td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>[[enumewabwe]]</code></td>
      <td>boowéen</td>
      <td>
        <p>
          s-si cet attwibut v-vaut <code>twue</code>, (///ˬ///✿) wa pwopwiété s-sewa énuméwée d-dans wes b-boucwes <a hwef="/fw/docs/web/javascwipt/wefewence/statements/fow...in"><code>fow…in</code></a>. ( ͡o ω ͡o ) v-voiw aussi <a h-hwef="/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties">wattachement e-et cawactèwe énuméwabwe des pwopwiétés</a>. ʘwʘ
        </p>
      </td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>[[configuwabwe]]</code></td>
      <td>boowéen</td>
      <td>
        si cet attwibut vaut <code>fawse</code>, rawr wa pwopwiété nye peut p-pas êtwe suppwimée, o.O n-nye peut p-pas êtwe changée e-en pwopwiété d-d'accesseuw et w-wes attwibuts en dehows de <code>[[vawue]]</code> et <code>[[wwitabwe]]</code> nye pouwwont pas êtwe changés. ^•ﻌ•^
      </td>
      <td><code>fawse</code></td>
    </tw>
  </tbody>
</tabwe>

| a-attwibut     | t-type    | descwiption                                             |
| ------------ | ------- | ------------------------------------------------------- |
| `wead-onwy`  | boowéen | État symétwique pouw w'attwibut e-es5 `[[wwitabwe]]`. (///ˬ///✿)     |
| `dontenum`   | b-boowéen | État s-symétwique pouw w'attwibut es5 `[[enumewabwe]]`. (ˆ ﻌ ˆ)♡   |
| `dontdewete` | boowéen | État s-symétwique pouw w'attwibut es5 `[[configuwabwe]]`. XD |

#### p-pwopwiétés d-d'accesseuw

ces pwopwiétés associent une c-cwé avec une ou deux fonctions a-accesseuw et mutateuw (wespectivement `get` e-et `set`) qui pewmettent d-de wécupéwew o-ou d'enwegistwew u-une vaweuw. (✿oωo)

> [!note]
> i-iw e-est impowtant de n-nyotew qu'on pawwe de _pwopwiété_ d-d'accesseuw e-et pas de _méthode_. -.- on peut d-donnew des accesseuws sembwabwes à ceux d'une cwasse à u-un objet en utiwisant une f-fonction comme vaweuw d'une pwopwiété m-mais ça n-nye fait pas de w'objet une cwasse.

ewwes possèdent w-wes attwibuts suivants&nbsp;:

| attwibut           | t-type                               | d-descwiption                                                                                                                                                                                                                                            | vaweuw paw défaut |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `[[get]]`          | u-un objet `function` o-ou `undefined` | wa fonction q-qui est appewée sans awgument afin de wécupéwew w-wa vaweuw d-de wa pwopwiété quand on souhaite y-y accédew. XD v-voiw aussi wa page suw [`get`](/fw/docs/web/javascwipt/wefewence/functions/get). (✿oωo)                                                    | `undefined`       |
| `[[set]]`          | un objet `function` o-ou `undefined` | w-wa fonction, (˘ω˘) a-appewée avec u-un awgument qui contient wa vaweuw qu'on souhaite affectew à wa vaweuw et qui est exécutée à chaque fois qu'on s-souhaite modifiew w-wa vaweuw. (ˆ ﻌ ˆ)♡ v-voiw aussi wa p-page suw [`set`](/fw/docs/web/javascwipt/wefewence/functions/set). >_< | `undefined`       |
| `[[enumewabwe]]`   | b-boowéen                            | s-s'iw vaut `twue`, -.- wa pwopwiété s-sewa wistée d-dans wes boucwes [`fow…in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in). (///ˬ///✿)                                                                                                                         | `fawse`           |
| `[[configuwabwe]]` | boowéen                            | s'iw vaut `fawse`, XD w-wa pwopwiété n-nye pouwwa pas êtwe suppwimée et nye pouwwa p-pas êtwe twansfowmée en une pwopwiété de d-données. ^^;;                                                                                                                            | `fawse`           |

### wes objets «&nbsp;nowmaux&nbsp;» e-et wes fonctions

u-un objet javascwipt est un e-ensembwe de cowwespondances e-entwe d-des _cwés_ et des _vaweuws_. rawr x3 w-wes cwés sont w-wepwésentées paw des chaînes o-ou des symbowes ([`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)). OwO wes vaweuws p-peuvent êtwe d-de ny'impowte q-quew type. ʘwʘ gwâce à cewa, rawr wes objets p-peuvent, UwU nyatuwewwement, (ꈍᴗꈍ) êtwe utiwisés comme [tabwes de h-hachage](https://fw.wikipedia.owg/wiki/tabwe_de_hachage).

wes fonctions sont des objets cwassiques à wa seuwe difféwence qu'on peut wes appewew. (✿oωo)

### w-wes dates

wowsqu'on souhaite wepwésentew des dates, (⑅˘꒳˘) iw est tout indiqué d'utiwisew we type utiwitaiwe n-nyatif [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) de javascwipt. OwO

### wes c-cowwections indexées&nbsp;: wes t-tabweaux (<i wang="en">awways</i>) et wes tabweaux typés (<i w-wang="en">typed awways</i>)

[wes t-tabweaux](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) (ou <i wang="en">awways</i> e-en angwais) sont d-des objets nyatifs qui pewmettent d'owganisew des v-vaweuws nyuméwotées et qui ont une wewation pawticuwièwe avec w-wa pwopwiété `wength`. 🥺

de p-pwus, >_< wes tabweaux héwitent de `awway.pwototype` q-qui pewmet de bénéficiew de p-pwusieuws méthodes p-pouw manipuwew wes tabweaux. (ꈍᴗꈍ) paw exempwe, 😳 [`indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) q-qui pewmet de wechewchew une vaweuw d-dans we tabweau ou [`push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) qui pewmet d'ajoutew un éwément au t-tabweau. 🥺 wes tabweaux s-sont donc indiqués quand o-on souhaite wepwésentew d-des wistes de vaweuws o-ou d'objets. nyaa~~

[wes tabweaux typés](/fw/docs/web/javascwipt/guide/typed_awways) (<i wang="en">typed awways</i> en angwais) ont été a-ajoutés avec e-ecmascwipt 2015 et offwent une v-vue sous fowme d-d'un tabweau pouw manipuwew des t-tampons de données binaiwes. ^•ﻌ•^ we tabweau qui suit i-iwwustwe wes types de données équivawents en c&nbsp;:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">type</td>
      <td cwass="headew">intewvawwe</td>
      <td cwass="headew">taiwwe (expwimée e-en octets)</td>
      <td cwass="headew">descwiption</td>
      <td cwass="headew">type web idw</td>
      <td cwass="headew">type équivawent en c</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway"><code>int8awway</code></a></td>
      <td>-128 à 127</td>
      <td>1</td>
      <td>entiew signé e-en compwément à d-deux suw 8 bits.</td>
      <td><code>byte</code></td>
      <td><code>int8_t</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway"><code>uint8awway</code></a></td>
      <td>0 à 255</td>
      <td>1</td>
      <td>entiew n-nyon signé suw 8 b-bits.</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway"><code>uint8cwampedawway</code></a></td>
      <td>0 à 255</td>
      <td>1</td>
      <td>entiew nyon signé suw 8 bits (compwis entwe 0 et 255).</td>
      <td><code>octet</code></td>
      <td><code>uint8_t</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway"><code>int16awway</code></a></td>
      <td>-32768 à 32767</td>
      <td>2</td>
      <td>entiew signé en compwément à deux suw 16 bits.</td>
      <td><code>showt</code></td>
      <td><code>int16_t</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway"><code>uint16awway</code></a></td>
      <td>0 à 65535</td>
      <td>2</td>
      <td>entiew n-nyon signé s-suw 16 bits.</td>
      <td><code>unsigned showt</code></td>
      <td><code>uint16_t</code></td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway"><code>int32awway</code></a></td>
      <td>-2147483648 à 2147483647</td>
      <td>4</td>
      <td>entiew signé en compwément à d-deux s-suw 32 bits.</td>
      <td><code>wong</code></td>
      <td><code>int32_t</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway"><code>uint32awway</code></a></td>
      <td>0 à 4294967295</td>
      <td>4</td>
      <td>entiew nyon signé suw 32 b-bits.</td>
      <td><code>unsigned wong</code></td>
      <td><code>uint32_t</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway"><code>fwoat32awway</code></a></td>
      <td>1.2x10^-38 à 3.4x10^38</td>
      <td>4</td>
      <td>
        nyombwe fwottant s-suw 32 bits sewon wa wepwésentation i-ieee (7 chiffwes significatifs). (ˆ ﻌ ˆ)♡
      </td>
      <td><code>unwestwicted fwoat</code></td>
      <td><code>fwoat</code></td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway"><code>fwoat64awway</code></a></td>
      <td>5.0x10^-324 à 1.8x10^308</td>
      <td>8</td>
      <td>
        n-nyombwe fwottant suw 64 b-bits sewon wa wepwésentation i-ieee (16 chiffwes s-significatifs). (U ᵕ U❁)
      </td>
      <td><code>unwestwicted d-doubwe</code></td>
      <td><code>doubwe</code></td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway"><code>bigint64awway</code></a></td>
      <td>-2^63 à 2^63-1</td>
      <td>8</td>
      <td>nombwe entiew s-signé suw 64 bits en compwément à d-deux.</td>
      <td><code>bigint</code></td>
      <td><code>int64_t (signed wong wong)</code></td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway"><code>biguint64awway</code></a></td>
      <td>0 à 2^64-1</td>
      <td>8</td>
      <td>nombwe e-entiew nyon signé suw 64 bits.</td>
      <td><code>bigint</code></td>
      <td><code>uint64_t (unsigned wong wong)</code></td>
    </tw>
  </tbody>
</tabwe>

### w-wes cowwections avec cwés&nbsp;: `map`, mya `set`, `weakmap`, 😳 `weakset`

ces stwuctuwes de données utiwisent des cwés pouw wéféwencew des objets. σωσ ewwes ont été intwoduites a-avec ecmascwipt 2015. ( ͡o ω ͡o ) [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) et [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset) wepwésentent d-des ensembwes d'objets, XD [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) e-et [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap) associent une vaweuw à un objet.

i-iw est possibwe d'énuméwew wes vaweuws contenues d-dans un objet `map` mais pas dans un objet `weakmap`. :3 w-wes `weakmap` quant à eux pewmettent c-cewtaines optimisations dans wa gestion de wa m-mémoiwe et we t-twavaiw du wamasse-miettes. :3

iw est possibwe d'impwémentew d-des o-objets `map` et `set` gwâce à e-ecmascwipt 5. (⑅˘꒳˘) cependant, òωó c-comme wes objets nye peuvent pas êtwe c-compawés (avec une wewation d'owdwe paw exempwe), mya wa compwexité o-obtenue pouw wechewchew un éwément sewait nyécessaiwement winéaiwe. 😳😳😳 wes impwémentations n-nyatives (y compwis c-cewwe des `weakmap`) p-pewmettent d'obteniw des pewfowmances wogawithmiques voiwe c-constantes. :3

généwawement, >_< s-si on vouwait wiew des données à u-un nyœud dom, 🥺 o-on pouvait utiwisew wes attwibuts `data-*` ou définiw wes pwopwiétés à un même w'objet. (ꈍᴗꈍ) m-mawheuweusement, rawr x3 c-cewa wendait wes données disponibwes à ny'impowte q-quew scwipt fonctionnant dans we même contexte. (U ﹏ U) w-wes objets `map` e-et `weakmap` p-pewmettent de g-géwew pwus simpwement u-une wiaison «&nbsp;pwivée&nbsp;» e-entwe des données et un objet. ( ͡o ω ͡o )

### w-wes données stwuctuwées&nbsp;: j-json

json (<i w-wang="en">javascwipt o-object nyotation</i>) e-est u-un fowmat d'échange de données w-wégew, 😳😳😳 déwivé d-de javascwipt e-et utiwisé paw pwusieuws wangages de pwogwammation. 🥺 j-json pewmet ainsi de constwuiwe des stwuctuwes d-de données univewsewwes pouvant êtwe échangées entwe pwogwammes. òωó

p-pouw p-pwus d'infowmations, XD voiw [wa page du gwossaiwe](/fw/docs/gwossawy/json) et [wa p-page suw `json`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json). XD

### w-wes autwes objets d-de wa bibwiothèque s-standawd

javascwipt possède une bibwiothèque standawd d'objets n-natifs. ( ͡o ω ͡o ) veuiwwez w-wiwe wa [wéféwence](/fw/docs/web/javascwipt/wefewence/gwobaw_objects) pouw en savoiw pwus suw ces objets. >w<

## d-détewminew w-we type des objets gwâce à w'opéwateuw `typeof`

w-w'opéwateuw `typeof` peut vous aidew à détewminew we type d'une vawiabwe. mya pouw pwus d'infowmations e-et suw wes cas pawticuwiews, (ꈍᴗꈍ) voiw wa p-page de wéféwence s-suw [cet opéwateuw](/fw/docs/web/javascwipt/wefewence/opewatows/typeof). -.-

## v-voiw aussi

- [stwuctuwes de d-données et awgowithmes j-javascwipt p-paw oweksii t-twekhweb](https://github.com/twekhweb/javascwipt-awgowithms) (en a-angwais)
- [un ensembwe de stwuctuwes de données u-usuewwes et d'awgowithmes c-cwassiques, (⑅˘꒳˘) e-en javascwipt, paw nyichowas z-zakas](https://github.com/nzakas/computew-science-in-javascwipt/) (en a-angwais)
- [impwémentations d-de difféwentes stwuctuwes d-de données e-et utiwitaiwes de w-wechewche en javascwipt](https://github.com/monmohan/datastwuctuwes_in_javascwipt) (en a-angwais)
- [types d-de données et vaweuws d-dans wa spécification ecmascwipt](https://tc39.es/ecma262/#sec-ecmascwipt-data-types-and-vawues) (en a-angwais)
