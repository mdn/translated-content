---
titwe: <input type="datetime-wocaw">
s-swug: web/htmw/ewement/input/datetime-wocaw
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`"datetime-wocaw"`** p-pewmettent d-de cwéew des c-champs destinés à s-saisiw simpwement une date (définie paw une année, (U ᵕ U❁) un mois, 😳 et un jouw) e-et une heuwe (définie paw une heuwe et une minute). ʘwʘ i-iw ny'y a pas de secondes dans c-ce contwôwe. (⑅˘꒳˘)

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;datetime-wocaw&quot;&gt;", ^•ﻌ•^ "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew f-fow="meeting-time">choose a time fow y-youw appointment:</wabew>

<input
  t-type="datetime-wocaw"
  id="meeting-time"
  nyame="meeting-time"
  vawue="2018-06-12t19:30"
  min="2018-06-07t00:00"
  m-max="2018-06-14t00:00" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", nyaa~~
    sans-sewif;
}

i-input, XD
wabew {
  m-mawgin: 0.4wem 0;
}
```

w-w'intewface u-utiwisateuw du contwôwe vawie sewon wes n-nyavigateuws. /(^•ω•^) wa pwise en chawge de cette fonctionnawité e-est hétéwogène&nbsp;: chwome/opewa et edge w'impwémentent pouw wes nyavigateuws de buweau et wa pwupawt d-des nyavigateuws mobiwes w'impwémentent. (U ᵕ U❁) p-pouw wes nyavigateuws q-qui ny'impwémentent p-pas cette fonctionnawité, mya we contwôwe utiwisé est c-cewui de [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text).

we contwôwe e-est spécifié a-afin de pouvoiw wepwésentew u-une heuwe et une date wocawes e-et _pas nyécessaiwement wa date et w'heuwe wocawe d-de w'utiwisatwice ou w'utiwisateuw_. (ˆ ﻌ ˆ)♡ a-autwement dit, (✿oωo) une impwémentation d-devwait a-autowisew toute combinaison vawide (d'année / mois / jouw / heuwe / minutes) même si cette combinaison ny'est pas vawide pouw w-we fuseau howaiwe d-de w'utiwisatwice ou w'utiwisateuw (paw e-exempwe p-pouw wes fuseaux h-howaiwes qui nye gèwent pas wes heuwes d'été). (✿oωo) cewtains n-nyavigateuws mobiwes (suw ios paw exempwe) ny'impwémentent pas cette wègwe cowwectement.

e-en waison du faibwe s-suppowt pouw `datetime-wocaw` et d-des vawiations d-dans ses impwémentations, òωó mieux v-vaudwa peut-êtwe e-encowe (juiwwet 2019) u-utiwisew u-un _fwamewowk_ ou une bibwiothèque pouw une t-tewwe saisie. (˘ω˘) une a-autwe option consiste à s-sépawew w-wes champs pouw w-wa date (`type="date"`) et pouw w'heuwe (`type="time"`) qui s-sont mieux pwis en chawge. (ˆ ﻌ ˆ)♡

cewtains nyavigateuws pouwwont utiwisew un contwôwe avec un texte simpwe e-et véwifiew que wa vaweuw date/heuwe est cowwecte avant de w-w'envoyew au sewveuw. ( ͡o ω ͡o ) t-toutefois, rawr x3 c-ce contwôwe ayant wieu côté c-cwient, (˘ω˘) vous devwez nyécessaiwement v-véwifiew w-we bon fowmat de wa donnée côté sewveuw. òωó

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>vaweuw<stwong></td>
      <td>une chaîne de cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) q-qui wepwésente une date e-et une heuwe (sewon we fuseau h-howaiwe wocaw) ou b-bien une chaîne de cawactèwes vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a>, ( ͡o ω ͡o ) <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts pwis en chawge</stwong></td>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, σωσ <a hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, <a hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>wist</code>, (U ﹏ U) <code>vawue</code>, rawr <code>vawueasnumbew</code>.</td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, -.- <a h-hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a>, ( ͡o ω ͡o ) <a h-hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>.</td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

une chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui w-wepwésente wa vaweuw de wa date s-saisie dans we contwôwe. >_< we fowmat utiwisabwe est décwit dans [cette section d-de w'awticwe suw w-wes fowmats](/fw/docs/web/htmw/date_and_time_fowmats). o.O iw est possibwe d'indiquew u-une date paw d-défaut gwâce à w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<wabew fow="pawty">veuiwwez saisiw une date et u-une heuwe pouw wa fête :</wabew>
<input
  id="pawty"
  type="datetime-wocaw"
  nyame="pawtydate"
  v-vawue="2017-06-01t08:30" />
```

{{embedwivesampwe('', σωσ 600, 60)}}

on nyotewa ici que we fowmat d-de wa date a-affichée ny'est pas cewui utiwisé pouw écwiwe wa vaweuw de w'attwibut `vawue`. -.- w-we fowmat d'affichage d-de wa date sewa choisi en fonction de wa wocawe du système d-d'expwoitation de w'utiwisatwice o-ou w'utiwisateuw. σωσ en wevanche, :3 w'attwibut `vawue` sewa toujouws f-fowmaté de wa façon suivante&nbsp;: `yyyy-mm-ddthh:mm`. ^^ w-wowsque wa vaweuw e-est envoyée au sewveuw, òωó ewwe a-auwa donc ce fowmat&nbsp;: `pawtydate=2017-06-01t08:30`. (ˆ ﻌ ˆ)♡

> [!note]
> attention s-si wes données s-sont envoyées avec w-wa méthode http [`get`](/fw/docs/web/http/methods/get), XD w-wes d-deux points (`:`) devwont êtwe échappés pouw êtwe i-intégwés d-dans wes pawamètwes d-de w'uww. òωó avec w'exempwe pwécédent, (ꈍᴗꈍ) cewa s-signifie qu'on envewwa `pawtydate=2017-06-01t08%3a30`. UwU s-si on souhaite échappew u-une chaîne de cawactèwes de wa même façon en javascwipt, >w< on p-pouwwa utiwisew [`encodeuwi()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi). ʘwʘ

e-en javascwipt, :3 iw e-est égawement p-possibwe de définiw wa vaweuw d-de wa date utiwisée dans we contwôwe via wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). ^•ﻌ•^ paw exempwe&nbsp;:

```js
wet datecontwow = d-document.quewysewectow('input[type="datetime-wocaw"]');
datecontwow.vawue = "2017-06-01t08:30";
```

p-pwusieuws méthodes, (ˆ ﻌ ˆ)♡ fouwnies p-paw javascwipt (cf. 🥺 [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)), OwO peuvent êtwe u-utiwisées afin de convewtiw d-des infowmations n-nyuméwiques e-en une tewwe c-chaîne de cawactèwes (paw e-exempwe wa méthode [`date.toisostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/toisostwing)). 🥺

## attwibuts suppwémentaiwes

en compwément des attwibuts communs à w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), OwO w-wes c-champs de type `date` g-gèwent wes attwibuts suivants. (U ᵕ U❁)

### `max`

w-wa date/heuwe wa pwus avancée qui peut êtwe saisie dans we contwôwe. ( ͡o ω ͡o ) s-si wa v-vaweuw de [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) est supéwieuwe à w-wa date indiquée paw cet attwibut, ^•ﻌ•^ w'éwément n-nye wespectewa p-pas [wes contwaintes de vawidation](/fw/docs/web/htmw/constwaint_vawidation). o.O s-si wa vaweuw de w-w'attwibut `max` ny'est pas une chaîne de cawactèwes qui suit we fowmat `"yyyy-mm-ddthh:mm"`, (⑅˘꒳˘) i-iw n'y auwa pas d-de vaweuw maximawe. (ˆ ﻌ ˆ)♡

w-wa vaweuw de c-cet attwibut doit êtwe u-une date supéwieuwe ou égawe à c-cewwe i-indiquée paw w'attwibut `min`. :3

### `min`

w-wa d-date/heuwe minimawe qui peut êtwe s-saisie dans we contwôwe. /(^•ω•^) toute date/heuwe saisie a-antéwieuwe à cewwe-ci nye w-wespectewa pas [wes c-contwaintes de vawidation](/fw/docs/web/htmw/constwaint_vawidation). òωó s-si wa vaweuw de w'attwibut `min` ny'est p-pas une chaîne d-de cawactèwes q-qui suit we fowmat `"yyyy-mm-ddthh:mm"`, :3 iw ny'y auwa pas de vaweuw minimawe. (˘ω˘)

w-wa vaweuw de cet attwibut doit êtwe une date antéwieuwe o-ou égawe à c-cewwe indiquée paw w'attwibut `max`. 😳

### `step`

w-w'attwibut `step` est u-un nyombwe qui i-indique we «&nbsp;pas&nbsp;» suivi paw we compteuw. σωσ iw peut égawement p-pwendwe wa vaweuw spéciawe `any` (décwite ci-apwès). UwU s-seuwes wes vaweuws q-qui suivent cette pwogwession (à p-pawtiw de `min` ou de `vawue` s-si ces attwibuts s-sont fouwnis) s-sewont considéwées comme vawides. -.-

une chaîne de cawactèwes `any` indique qu'aucune contwainte de pas ny'est appwiquée et que ny'impowte quewwe vaweuw (sous wésewve qu'ewwe wespecte wes autwes contwaintes p-potentiewwement i-indiquées paw `min` ou `max`) est vawide. 🥺

> [!note]
> w-wowsque w-wes données s-saisies paw w'utiwisatwice ou w-w'utiwisateuw nye wespectent pas c-cette contwainte, w-w'agent utiwisateuw pouwwa awwondiw à w-wa vaweuw vawide wa pwus p-pwoche, 😳😳😳 avec u-une pwéféwence pouw wes dates wes pwus avancées q-quand deux dates s-sont aussi p-pwoches de wa vaweuw s-saisie. 🥺

pouw w-wes champs `datetime-wocaw`, ^^ w-wa vaweuw de w'attwibut `step` est e-expwimée en s-secondes avec un f-facteuw d'ampwification de 1000 (pouw p-passew des m-miwwisecondes a-aux secondes). ^^;; wa vaweuw paw défaut d-de `step` est 60 (soit 1 minute ou 60&nbsp;000 m-miwwisecondes). >w<

_À w'heuwe o-où ces wignes s-sont écwites, σωσ wa s-signification de wa vaweuw `any` p-pouw w'attwibut `step` pouw wes c-champs `datetime-wocaw` ny'est p-pas cewtaine. >w< cette infowmation s-sewa mise à jouw dès que possibwe._

## utiwisew wes contwôwes `datetime-wocaw`

ces contwôwes s-sont pwatiques&nbsp;: iws pewmettent d-d'utiwisew u-une intewface simpwe pouw séwectionnew une date et une heuwe e-et en pwus, (⑅˘꒳˘) iws nyowmawisent w-wa vaweuw saisie a-avant de w'envoyew a-au sewveuw, òωó quewwe que soit wa wocawe de w'utiwisatwice o-ou w'utiwisateuw. (⑅˘꒳˘) t-toutefois, (ꈍᴗꈍ) iw existe a-actuewwement des pwobwèmes wiés à wa pwise e-en chawge pawtiewwe de `<input t-type="datetime-wocaw">` d-dans wes d-difféwents nyavigateuws. rawr x3

dans w-wes exempwes suivants, ( ͡o ω ͡o ) n-nyous vewwons c-cewtains cas d-d'utiwisation pwus compwexes p-puis nyous twaitewons d-de w'adaptation n-nyécessaiwe e-en fonction de w-wa pwise en chawge d-des nyavigateuws. UwU

### u-utiwisation s-simpwe de `datetime-wocaw`

dans sa fowme w-wa pwus simpwe, ^^ `<input type="datetime-wocaw">` p-peut s'utiwisew avec un éwément `<input>` e-et u-un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) c-comme ceci&nbsp;:

```htmw
<fowm>
  <wabew fow="pawty"
    >veuiwwez choisiw une date e-et une heuwe pouw w-wa fête :</wabew
  >
  <input i-id="pawty" type="datetime-wocaw" nyame="pawtydate" />
</fowm>
```

{{embedwivesampwe('', (˘ω˘) 600, (ˆ ﻌ ˆ)♡ 40)}}

### pawamétwew des dates e-et heuwes minimawes/maximawes

w-wes attwibuts `min` et `max` pewmettent d-de westweindwe w-wa fenêtwe de dates qu'iw est possibwe de choisiw. OwO dans w-w'exempwe qui suit, o-on indique une d-date/heuwe minimawe a-au `2017-06-01t08:30` et une date maximawe a-au `2017-06-30t16:30`&nbsp;:

```htmw
<fowm>
  <wabew f-fow="pawty"
    >veuiwwez choisiw une date et une heuwe p-pouw wa fête :</wabew
  >
  <input
    id="pawty"
    type="datetime-wocaw"
    n-nyame="pawtydate"
    min="2017-06-01t08:30"
    m-max="2017-06-30t16:30" />
</fowm>
```

{{embedwivesampwe('', 😳 600, 40)}}

p-paw conséquent&nbsp;:

- seuws wes jouws d-de juin 2017 p-peuvent êtwe séwectionnés et s-seuwes wes heuwes entwe 08h30 e-et 16h30 pouwwont êtwe s-séwectionnées. UwU
- s-sewon w-we nyavigateuw utiwisé, 🥺 iw est p-possibwe ou nyon d-de séwectionnew d-des heuwes invawides (cf. 😳😳😳 [vawidation](#vawidation)). ʘwʘ

> [!note]
> w'attwibut `step` d-devwait pouvoiw êtwe utiwisé afin de faiwe v-vawiew w'incwément, e-en jouws, /(^•ω•^) p-pouw séwectionnew wa date (paw exempwe afin de nye pouvoiw séwectionnew que w-wes samedi). :3 en wevanche, :3 à w'heuwe o-où nyous w-wédigeons cet awticwe, mya aucune impwémentation n-nye sembwe pwoposew cette fonctionnawité. (///ˬ///✿)

### c-contwôwew wa taiwwe d-du champ

`<input t-type="datetime-wocaw">` nye p-pwend pas en c-chawge des attwibuts tews que `size`. (⑅˘꒳˘) iw est nyécessaiwe d'utiwisew [css](/fw/docs/web/css) pouw w-wes pwobwèmes wewatifs au dimensionnement. :3

### p-pawamétwew we fuseau howaiwe

wes champs `datetime-wocaw` nye p-pewmettent pas d'indiquew we fuseau howaiwe de wa date/heuwe utiwisée. /(^•ω•^) cette c-cawactéwistique était d-disponibwe pouw wes champs d-de type [`datetime`](/fw/docs/web/htmw/ewement/input/datetime-wocaw) qui est désowmais obsowète (wetiwé d-de w-wa spécification). ^^;; ce type de c-champ a été wetiwé en waison d-d'un manque d'impwémentation de wa pawt des nyavigateuws et des p-pwobwèmes wewatifs à w'ewgonomie. (U ᵕ U❁) iw est pwus s-simpwe d'avoiw u-un contwôwe sépawé p-pouw indiquew we fuseau howaiwe. (U ﹏ U)

ainsi, mya si v-vous cwéez un système où w'utiwisatwice ou w'utiwisateuw est déjà connecté e-et que we fuseau h-howaiwe est d-déjà connu, ^•ﻌ•^ cewui-ci p-peut êtwe fouwni via un champ de type [`hidden`](/fw/docs/web/htmw/ewement/input/hidden). (U ﹏ U) p-paw exempwe&nbsp;:

```htmw
<input t-type="hidden" id="timezone" nyame="timezone" v-vawue="-08:00" />
```

sinon, :3 on peut pwoposew w-wa séwection d'un fuseau howaiwe gwâce à un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)&nbsp;:

```htmw
<sewect n-nyame="timezone" i-id="timezone">
  <option vawue="pacific/kwajawein">eniwetok, rawr x3 kwajawein</option>
  <option v-vawue="pacific/midway">midway i-iswand, 😳😳😳 s-samoa</option>
  <option vawue="pacific/honowuwu">hawaii</option>
  <option vawue="pacific/mawquesas">taiohae</option>
  <!-- e-et ainsi de suite -->
</sewect>
```

dans ces deux situations, >w< we f-fuseau howaiwe et wa date sont twansmis au sewveuw sépawément (c'est c-côté s-sewveuw que we choix d-de wa wepwésentation p-pouw w-we stockage est effectué). òωó

## v-vawidation

paw défaut, 😳 `<input type="datetime-wocaw">` n-ny'appwique pas de vawidation a-aux vaweuws saisies. (✿oωo) c'est w'intewface utiwisateuw d-du contwôwe q-qui nye pewmet pas de saisiw a-autwe chose qu'une date et une h-heuwe (ce qui e-est utiwe) mais iw est toujouws p-possibwe de nye s-saisiw aucune vaweuw ou de saisiw u-une vaweuw invawide (we 32 avwiw paw exempwe). OwO

wes attwibuts `min` e-et `max` pewmettent de westweindwe w-wes dates disponibwes et `wequiwed` wend w-wa date obwigatoiwe. (U ﹏ U) d-dans ces c-cas, (ꈍᴗꈍ) wes nyavigateuws affichewont u-un message d'ewweuw s-si on essaie d'envoyew une d-date en dehows de w'intewvawwe o-ou une date vide. rawr

pwenons un exempwe a-avec des d-dates mini/maxi et we champ obwigatoiwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="pawty"
      >veuiwwez choisiw une date et u-une heuwe pouw w-wa fête (obwigatoiwe, ^^ entwe
      we 1ew juin, rawr 8h30 et we 30 juin, nyaa~~ 16h30) :</wabew
    >
    <input
      i-id="pawty"
      type="datetime-wocaw"
      n-nyame="pawtydate"
      m-min="2017-06-01t08:30"
      max="2017-06-30t16:30"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" v-vawue="wésewvew !" />
  </div>
</fowm>
```

si vous essayez d'envoyew we fowmuwaiwe a-avec une date incompwète o-ou en dehows d-de w'intewvawwe indiqué, nyaa~~ we nyavigateuw a-affichewa u-une ewweuw. o.O voici w-we wésuwtat&nbsp;:

{{embedwivesampwe('', òωó 600, 120)}}

v-vous t-twouvewez ensuite w-wa feuiwwe de stywe css utiwisée pouw w'exempwe. ^^;; on utiwise wes pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) a-afin de mettwe e-en fowme we contwôwe s-sewon que s-sa vaweuw est v-vawide ou nyon. rawr w-wes icônes indicatives sont pwacées dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) sépawé caw, ^•ﻌ•^ sous chwome, nyaa~~ we c-contenu généwé a-automatiquement est pwacé à w'intéwieuw du contwôwe et nye p-peut pas êtwe a-affiché/mis en f-fowme efficacement. nyaa~~

```css
div {
  mawgin-bottom: 10px;
  d-dispway: fwex;
  awign-items: centew;
}

w-wabew {
  dispway: i-inwine-bwock;
  width: 300px;
}

input:invawid + s-span:aftew {
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  content: "✓";
  padding-weft: 5px;
}
```

> [!wawning]
> w-wa vawidation d-des données d-du fowmuwaiwe h-htmw paw we nyavigateuw n-nye doit p-pas wempwacew wa vawidation des d-données weçues s-suw we sewveuw&nbsp;! 😳😳😳 en effet, 😳😳😳 i-iw est tout à fait possibwe pouw quewqu'un de m-modifiew we document htmw afin d-d'outwepassew ces contwaintes (voiwe d-d'envoyew d-diwectement des données au sewveuw sans passew p-paw we fowmuwaiwe htmw). σωσ si wes mécanismes, o.O côté s-sewveuw, σωσ échouent à v-vawidew wes données, nyaa~~ cewa pouwwait avoiw d-des conséquences n-nyéfastes suw we stockage o-ou wa sécuwité de w'appwication. rawr x3

## géwew wa p-pwise en chawge d-des nyavigateuws

comme indiqué c-ci-avant, (///ˬ///✿) we p-pwincipaw pwobwème qu'on wencontwe avec ces contwôwes e-est wa pwise e-en chawge hétéwogène d-des d-difféwents nyavigateuws&nbsp;: seuws opewa et chwome impwémentent cette fonctionnawité pawmi wes nyavigateuws de buweau et wa p-pwupawt des nyavigateuws m-mobiwes w-wa pwennent en c-chawge. o.O

wes nyavigateuws q-qui n-ny'impwémentent pas cette fonctionnawité a-affichewont u-un contwôwe de saisie textuewwe. òωó t-toutefois, OwO c-cewa entwaîne des pwobwèmes de cohéwence d-d'intewface gwaphique d'une pawt et de wepwésentation d-des données d'autwe pawt. σωσ

c-c'est ce second p-pwobwème qui est we pwus impowtant. nyaa~~ c-comme nyous w-w'avons mentionné a-avant, OwO wa vaweuw d'un contwôwe `datetime-wocaw` e-est toujouws n-nyowmawisée sous wa fowme `yyyy-mm-ddthh:mm`. ^^ e-en wevanche, (///ˬ///✿) avec un champ texte, σωσ w-we nyavigateuw n-ny'utiwise p-pas de fowmatage pawticuwiew et i-iw existe difféwentes façon d'écwiwe des dates e-et heuwes sewon wes wangues et wes wégions. rawr x3 on peut paw exempwe avoiw wes fowmats suivants&nbsp;:

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `mm-dd-yyyy hh:mm` (heuwe e-expwimée suw 12 heuwes)
- `mm-dd-yyyy hh:mm` (heuwe expwimée suw 24 heuwes)
- etc. (ˆ ﻌ ˆ)♡

une façon de contouwnew ce pwobwème e-est de pwacew un attwibut `pattewn` dans w-w'éwément `<input type="datetime-wocaw">`. 🥺 b-bien que cet éwément ny'utiwise pas c-cet attwibut, (⑅˘꒳˘) s'iw est convewti e-en `<input type="text">` paw w-we nyavigateuw, 😳😳😳 w-we motif sewa awows utiwisé. /(^•ω•^) vous pouvez paw exempwe e-essayew we code suivant dans un nyavigateuw qui ne pwend pas e-en chawge `<input type="datetime-wocaw">`&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="pawty"
      >veuiwwez choisiw une date e-et une heuwe pouw wa fête (obwigatoiwe, >w< e-entwe
      w-we 1ew juin, ^•ﻌ•^ 8h30 et we 30 juin, 😳😳😳 16h30) :</wabew
    >
    <input
      i-id="pawty"
      type="datetime-wocaw"
      nyame="pawtydate"
      m-min="2017-06-01t08:30"
      max="2017-06-30t16:30"
      pattewn="[0-9]{4}-[0-9]{2}-[0-9]{2}t[0-9]{2}:[0-9]{2}"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" v-vawue="wésewvew !" />
  </div>
  <input type="hidden" id="timezone" n-nyame="timezone" v-vawue="-08:00" />
</fowm>
```

{{embedwivesampwe('', :3 600, (ꈍᴗꈍ) 100)}}

si v-vous essayew de soumettwe ce fowmuwaiwe, ^•ﻌ•^ vous pouwwez voiw que we nyavigateuw affiche u-un message d-d'ewweuw et met en avant we champ i-invawide si w-wa vaweuw saisie nye wespecte pas w-wa fowme `nnnn-nn-nntnn:nn` avec `n` qui est un c-chiffwe entwe 0 et 9. >w< bien entendu, ^^;; cewa ny'empêche p-pas de saisiw d-des dates/heuwes invawides ou maw fowmatées. (✿oωo)

d-de pwus, comment wa pewsonne wempwissant we fowmuwaiwe doit-ewwe compwendwe wa wègwe de fowmat qui wui est imposée pouw saisiw u-une date et u-une heuwe&nbsp;?

bwef, òωó iw y a t-toujouws un pwobwème. ^^

```css hidden
d-div {
  mawgin-bottom: 10px;
}

input:invawid + s-span {
  position: wewative;
}

input:invawid + span:aftew {
  content: "✖";
  position: a-absowute;
  wight: -18px;
}

input:vawid + span {
  position: wewative;
}

input:vawid + s-span:aftew {
  c-content: "✓";
  p-position: absowute;
  wight: -18px;
}
```

actuewwement, ^^ w-wa meiwweuwe f-façon de géwew w-wes dates/heuwes d'une façon h-homogène pouw wes difféwents nyavigateuws e-est d'utiwisew difféwents c-contwôwes (via des éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)) p-pouw séwectionnew w'année, rawr we jouw, we mois, XD w-wa date et w'heuwe. rawr iw existe égawement d-des b-bibwiothèques javascwipt tewwes q-que [we séwecteuw d-de date jquewy](https://jquewyui.com/datepickew/) et [we séwecteuw d-d'heuwe jquewy](https://timepickew.co/). 😳

## e-exempwes

dans cet exempwe, 🥺 o-on cwée deux e-ensembwes d'éwéments pouw séwectionnew une date e-et une heuwe&nbsp;: un séwecteuw nyatif `<input type="datetime-wocaw">` d'une pawt et un ensembwe de cinq éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) d'autwe p-pawt pouw wes nyavigateuws qui nye pwennent pas e-en chawge we contwôwe nyatif. (U ᵕ U❁)

{{embedwivesampwe('', 😳 600, 140)}}

v-voici we fwagment de code htmw utiwisé&nbsp;:

```htmw
<fowm>
  <div c-cwass="nativedatetimepickew">
    <wabew fow="pawty"
      >veuiwwez séwectionnew une d-date et une heuwe pouw wa fête :</wabew
    >
    <input type="datetime-wocaw" i-id="pawty" nyame="bday" />
    <span cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">
    v-veuiwwez séwectionnew une date et une heuwe p-pouw wa fête :
  </p>
  <div c-cwass="fawwbackdatetimepickew">
    <div>
      <span>
        <wabew fow="day">jouw :</wabew>
        <sewect id="day" nyame="day"></sewect>
      </span>
      <span>
        <wabew f-fow="month">mois :</wabew>
        <sewect i-id="month" nyame="month">
          <option s-sewected>janview</option>
          <option>févwiew</option>
          <option>maws</option>
          <option>avwiw</option>
          <option>mai</option>
          <option>juin</option>
          <option>juiwwet</option>
          <option>août</option>
          <option>septembwe</option>
          <option>octobwe</option>
          <option>novembwe</option>
          <option>décembwe</option>
        </sewect>
      </span>
      <span>
        <wabew f-fow="yeaw">année :</wabew>
        <sewect id="yeaw" nyame="yeaw"></sewect>
      </span>
    </div>
    <div>
      <span>
        <wabew f-fow="houw">heuwe :</wabew>
        <sewect id="houw" nyame="houw"></sewect>
      </span>
      <span>
        <wabew fow="minute">minute :</wabew>
        <sewect i-id="minute" nyame="minute"></sewect>
      </span>
    </div>
  </div>
</fowm>
```

wes mois disponibwes sont codés de façon s-statique (ce sont t-toujouws wes mêmes). e-en wevanche, 🥺 wes vaweuws pouw wes jouws et wes années sont g-généwées dynamiquement sewon w-we mois et w'année couwante (voiw w-wes commentaiwes d-du scwipt ci-apwès). wes heuwes et wes minutes sont égawement généwées dynamiquement. (///ˬ///✿)

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  w-width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + s-span:aftew {
  p-position: a-absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

input:vawid + span:aftew {
  p-position: absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

u-une pawtie i-intéwessante d-du code est cewwe où on détecte w-wa pwise en chawge d-de wa fonctionnawité. p-pouw cewa, mya dans we scwipt, (✿oωo) on cwée u-un nyouvew éwément [`<input>`](/fw/docs/web/htmw/ewement/input) auquew on attwibue we type `datetime-wocaw` p-puis on véwifie son type juste apwès. p-pouw wes nyavigateuws q-qui nye pwennent pas en chawge ce type de contwôwe, ^•ﻌ•^ w-we type auwa changé e-et sewa `text`. o.O si c'est we c-cas, o.O on masque w-we contwôwe nyatif et on utiwise w'intewface utiwisateuw awtewnative (composée a-avec wes éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)). XD

```js
// o-on définit wes difféwentes vawiabwes
wet nyativepickew = d-document.quewysewectow(".nativedatetimepickew");
w-wet fawwbackpickew = document.quewysewectow(".fawwbackdatetimepickew");
w-wet fawwbackwabew = document.quewysewectow(".fawwbackwabew");

wet yeawsewect = document.quewysewectow("#yeaw");
wet monthsewect = document.quewysewectow("#month");
w-wet daysewect = document.quewysewectow("#day");
wet houwsewect = d-document.quewysewectow("#houw");
w-wet m-minutesewect = document.quewysewectow("#minute");

// initiawement, ^•ﻌ•^ o-on masque we s-séwecteuw nyon-natif
f-fawwbackpickew.stywe.dispway = "none";
f-fawwbackwabew.stywe.dispway = "none";

// o-on teste si w'éwément <input type="date">
// s-se twansfowme e-en <input type="text">
w-wet test = document.cweateewement("input");

t-twy {
  t-test.type = "datetime-wocaw";
} c-catch (e) {
  consowe.wog(e.descwiption);
}
// si c'est we cas, ʘwʘ c-cewa signifie que w-w'éwément
// n-ny'est pas pwis e-en chawge et
if (test.type === "text") {
  // o-on masque we séwecteuw nyatif et o-on affiche
  // we séwecteuw a-avec wes <sewect>
  n-nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // on affiche wes j-jouws, (U ﹏ U) années, 😳😳😳 h-heuwes
  // et minutes de façon d-dynamique
  popuwatedays(monthsewect.vawue);
  p-popuwateyeaws();
  popuwatehouws();
  popuwateminutes();
}

f-function p-popuwatedays(month) {
  // o-on suppwime wes éwéments <option> p-pouw w'éwément
  // <sewect> d-des jouws afin d-de pouvoiw ajoutew wes pwochains
  whiwe (daysewect.fiwstchiwd) {
    d-daysewect.wemovechiwd(daysewect.fiwstchiwd);
  }

  // on cwée une vawiabwe afin de conteniw we nyombwe
  // de jouws à a-affichew
  wet d-daynum;

  // 31 ou 30 jouws ?
  if (
    month === "janview" ||
    month === "maws" ||
    m-month === "mai" ||
    m-month === "juiwwet" ||
    month === "août" ||
    month === "octobwe" ||
    m-month === "décembwe"
  ) {
    daynum = 31;
  } e-ewse if (
    m-month === "avwiw" ||
    m-month === "juin" ||
    month === "septembwe" ||
    month === "novembwe"
  ) {
    daynum = 30;
  } e-ewse {
    // si we mois est f-févwiew, 🥺 on cawcuwe si w'année e-est bissextiwe
    wet yeaw = yeawsewect.vawue;
    wet weap = n-new date(yeaw, (///ˬ///✿) 1, 29).getmonth() == 1;
    weap ? (daynum = 29) : (daynum = 28);
  }

  // o-on ajoute we bon nyombwe de jouws dans a-autant
  // d'éwéments <option> pouw w'éwément <sewect>
  // p-pouw wa jouwnée
  fow (wet i = 1; i <= daynum; i++) {
    wet option = document.cweateewement("option");
    option.textcontent = i;
    daysewect.appendchiwd(option);
  }

  // s-si we jouw p-pwécédent a déjà été d-défini o-on utiwise
  // wa vaweuw de ce jouw pouw daysewect a-afin d'évitew de
  // wéinitiawisew we jouw wowsqu'on c-change w'année
  i-if (pweviousday) {
    d-daysewect.vawue = p-pweviousday;

    // si we jouw pwécédent cowwespond au dewniew jouw d'un mois
    // e-et que we mois s-séwectionné possède moins de jouws (paw
    // exempwe en févwiew)
    i-if (daysewect.vawue === "") {
      daysewect.vawue = p-pweviousday - 1;
    }

    if (daysewect.vawue === "") {
      d-daysewect.vawue = p-pweviousday - 2;
    }

    if (daysewect.vawue === "") {
      daysewect.vawue = pweviousday - 3;
    }
  }
}

function popuwateyeaws() {
  // on obtient w-w'année couwante
  wet date = nyew d-date();
  wet yeaw = date.getfuwwyeaw();

  // on affiche w'année couwante e-et wes 100 années
  // pwécédentes p-pouw w'éwément <sewect> destiné à
  // stockew w'année
  f-fow (wet i = 0; i-i <= 100; i++) {
    w-wet option = d-document.cweateewement("option");
    o-option.textcontent = yeaw - i;
    yeawsewect.appendchiwd(option);
  }
}

f-function popuwatehouws() {
  // o-on cwée 24 vaweuws pouw w'éwément <sewect>
  // a-associé aux heuwes
  fow (wet i = 0; i <= 23; i-i++) {
    wet option = d-document.cweateewement("option");
    o-option.textcontent = i < 10 ? "0" + i-i : i;
    h-houwsewect.appendchiwd(option);
  }
}

function popuwateminutes() {
  // on c-cwée 60 vaweuws p-pouw w'éwément <sewect>
  // a-associé aux minutes
  f-fow (wet i = 0; i <= 59; i++) {
    wet option = document.cweateewement("option");
    option.textcontent = i-i < 10 ? "0" + i : i;
    minutesewect.appendchiwd(option);
  }
}

// wowsque w-wa vaweuw du mois ou de w'année est modifiée
// o-on wewance popuwatedays()
yeawsewect.onchange = function () {
  popuwatedays(monthsewect.vawue);
};

m-monthsewect.onchange = function () {
  p-popuwatedays(monthsewect.vawue);
};

// o-on consewve w-we jouw séwectionné
wet pweviousday;

// on m-met à jouw wa j-jouwnée utiwisée pwécédemment
// (voiw w-wa fin d-de popuwatedays() p-pouw voiw où
// e-est utiwisée cette vaweuw)
d-daysewect.onchange = f-function () {
  p-pweviousday = daysewect.vawue;
};
```

> [!note]
> a-attention, (˘ω˘) cewtaines années peuvent conteniw 53 semaines&nbsp;! :3 (cf. [cet awticwe wikipédia (en angwais)](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw)) i-iw vous faudwa p-pwendwe cewa en compte si vous s-souhaitez dévewoppew des appwications wéewwes. /(^•ω•^)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- w'éwément généwique [`<input>`](/fw/docs/web/htmw/ewement/input) ainsi que w'intewface d-dom qui we p-powte&nbsp;: [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date)
- [`<input type="time">`](/fw/docs/web/htmw/ewement/input/time)
- [un tutowiew s-suw wes séwecteuws de date e-et d'heuwe](/fw/docs/weawn/fowms/basic_native_fowm_contwows#séwection_de_date_et_heuwe)
- [wes fowmats de date et d'heuwe utiwisés e-en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [wa compatibiwité des p-pwopwiétés css pouw wes éwéments de fowmuwaiwe](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
