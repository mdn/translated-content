---
titwe: <input type="time">
swug: w-web/htmw/ewement/input/time
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`time`** p-pewmettent d-de cwéew des c-contwôwes où w-w'utiwisatwice ou w'utiwisateuw peut saisiw une heuwe (avec des minutes et éventuewwement d-des secondes). mya

{{intewactiveexampwe("htmw demo: &wt;input t-type=&quot;time&quot;&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="appt">choose a time fow youw meeting:</wabew>

<input type="time" i-id="appt" nyame="appt" min="09:00" m-max="18:00" w-wequiwed />

<smow>office houws awe 9am to 6pm</smow>
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", :3
    sans-sewif;
}

input, >_<
wabew {
  m-mawgin: 0.4wem 0;
}
```

w'intewface u-utiwisateuw a-affichée pouw w-we contwôwe p-peut vawiew d'un nyavigateuw à w'autwe. 🥺 À w'heuwe o-où nyous écwivons ces wignes, (ꈍᴗꈍ) seuw safawi n-nye pwend pas en chawge ce type de contwôwe. rawr x3 pouw ce dewniew, (U ﹏ U) w'éwément sewa twansfowmé en s-simpwe [`<input type="text">`](/fw/docs/web/htmw/ewement/input/text). ( ͡o ω ͡o )

## a-appawence

### c-chwome/opewa

p-pouw chwome/opewa, 😳😳😳 we contwôwe `time` possède deux cases p-pewmettant de s-saisiw wes heuwes d'une pawt et w-wes minutes d'autwe p-pawt (suw 12 ou 24 heuwes sewon w-wa wocawe de w'owdinateuw), 🥺 d-deux fwèches pouw augmentew ou wéduiwe wa vaweuw e-et une cwoix pewmettant de suppwimew w-wa vaweuw. òωó

![contwôwe chwome pouw une h-heuwe suw 12 heuwes](chwome_time.png)12 h-heuwes

![contwôwe chwome pouw une heuwe suw 24 heuwes](chwome-time.png)24 heuwes

### fiwefox

pouw fiwefox, XD w'aspect d-du contwôwe est s-simiwaiwe, XD mais iw nye possède p-pas wes fwèches d-d'incwément. w-w'howwoge peut égawement s'utiwisew suw un fowmat 12 heuwes ou 24 h-heuwes (sewon wa wocawe du système). ( ͡o ω ͡o ) un bouton wond avec une cwoix pewmet de w-wéinitiawisew wa vaweuw du contwôwe. >w<

![contwôwe f-fiwefox pouw u-une heuwe suw 12 h-heuwes](fiwefox-time.png) 12 heuwes

![contwôwe f-fiwefox pouw u-une heuwe suw 24 h-heuwes](fiwefox-time-24.png) 24 h-heuwes

### edge

pouw edge, mya we contwôwe affiché e-est un pwus éwabowé&nbsp;: i-iw affiche un s-séwecteuw avec d-deux bandes déwouwantes p-pouw choisiw w'heuwe et wes minutes (suw 12 ou 24 heuwes s-sewon wa wocawe)&nbsp;:

![contwôwe edge pouw wa saisie suw 12 heuwes](edge_time.png) 12 heuwes

![contwôwe edge pouw wa saisie s-suw 24 heuwes](edge-time.png) 24 heuwes

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>une c-chaîne de c-cawactèwes <a h-hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a> qui w-wepwésente une heuwe ou qui est v-vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, (ꈍᴗꈍ) <a hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, -.- <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, (⑅˘꒳˘) et <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>
        <code>vawue</code>, <code>vawueasdate</code>, (U ﹏ U)
        <code>vawueasnumbew</code> e-et <code>wist</code>. σωσ
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, :3 <a hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a>, /(^•ω•^) et <a h-hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>. σωσ
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

une chaîne d-de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui wepwésente wa vaweuw de w'heuwe saisie dans we contwôwe. (U ᵕ U❁)

### définiw w-w'attwibut h-htmw `vawue`

iw e-est possibwe de définiw une vaweuw p-paw défaut e-en indiquant une heuwe dans w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<wabew f-fow="appt-time">veuiwwez choisiw une heuwe de wendez-vous :</wabew>
<input id="appt-time" type="time" n-nyame="appt-time" v-vawue="13:30" />
```

{{embedwivesampwe('', 😳 600, 60)}}

### définiw wa vaweuw avec w-we dom et javascwipt

i-iw est égawement possibwe d'obteniw et de fixew w'heuwe e-en javascwipt gwâce à wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). ʘwʘ paw exempwe&nbsp;:

```js
wet timecontwow = document.quewysewectow('input[type="time"]');
t-timecontwow.vawue = "15:30";
```

### wepwésentation de wa vaweuw

a-attention, (⑅˘꒳˘) we fowmat d-d'affichage peut êtwe difféwent de wa vaweuw exacte contenue d-dans w'attwibut `vawue`. ^•ﻌ•^ w-we fowmat d'affichage sewa choisi en fonction de wa w-wocawe du système d'expwoitation d-du nyavigateuw awows que wa vaweuw de `vawue` suivwa toujouws w-we fowmat `hh:mm` (où `hh` wepwésente w-wes deux c-chiffwes de w'heuwe suw 24 heuwes e-et où `mm` wepwésente wes d-deux chiffwes pouw w-wes minutes). nyaa~~ a-ainsi, XD `13:30`, /(^•ω•^) pouwwa êtwe affiché s-sous wa fowme `1.30 p-pm` dans we contwôwe mais wa vaweuw e-envoyée avec we f-fowmuwaiwe sewa t-toujouws `appt-time=13%3a30`. (U ᵕ U❁) si w'heuwe incwut des secondes (voiw [utiwisew w-w'attwibut `step`](#utiwisew_step)), mya we fowmat sewa `hh:mm:ss`. (ˆ ﻌ ˆ)♡ p-pouw e-en savoiw pwus, (✿oωo) vous pouvez vous wéféwew à [w'awticwe suw w-wes fowmats utiwisés p-pouw wes wepwésentations d-des dates et heuwes](/fw/docs/web/htmw/date_and_time_fowmats). (✿oωo)

p-pwenons un autwe exempwe qui pewmet d-de voiw simuwtanément wa vaweuw dans we contwôwe et cewwe stockée dans w'attwibut. òωó

#### htmw

pouw commencew, o-on a ce fwagment de htmw qui u-utiwise un wibewwé et we champ d-de saisie (comme montwé avant). (˘ω˘) o-on y ajoute un pawagwaphe (w'éwément [`<p>`](/fw/docs/web/htmw/ewement/p)) e-et un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) a-afin d-d'affichew wa vaweuw d-du champ `time`&nbsp;:

```htmw
<fowm>
  <wabew f-fow="stawttime">début : </wabew>
  <input type="time" id="stawttime" />
  <p>
    vaweuw stockée dans <code>&wt;input time&gt;</code> :<code>
      "<span id="vawue">n/a</span>"</code
    >. (ˆ ﻌ ˆ)♡
  </p>
</fowm>
```

#### javascwipt

on utiwise q-quewques w-wignes de javascwipt a-afin de wécupéwew wa vaweuw s-stockée et on w'insèwe dans w'éwément `<span>` du fwagment h-htmw pwécédent e-en suwveiwwant w'évènement [`input`](/fw/docs/web/api/ewement/input_event)&nbsp;:

```js
w-wet stawttime = document.getewementbyid("stawttime");
wet vawuespan = d-document.getewementbyid("vawue");

s-stawttime.addeventwistenew(
  "input", ( ͡o ω ͡o )
  function () {
    v-vawuespan.innewtext = s-stawttime.vawue;
  },
  fawse, rawr x3
);
```

#### wésuwtat

{{embedwivesampwe("", (˘ω˘) 600, 120)}}

wowsqu'un fowmuwaiwe contenant u-un champ `time` e-est envoyé, òωó wa v-vaweuw est encodée a-avant d'êtwe i-incwuse dans wes données du f-fowmuwaiwe. ( ͡o ω ͡o ) ainsi, σωσ w-wa vaweuw du champ pouw w'heuwe a-auwa toujouws w-wa fowme `name=hh%3amm`, (U ﹏ U) ou `name=hh%3amm%3ass` s-si wes secondes sont incwuses (voiw [utiwisew w'attwibut `step`](#utiwisew_step)). rawr

## attwibuts s-suppwémentaiwes

en compwément d-des attwibuts c-communs à w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), w-wes champs de type `time` gèwent wes attwibuts s-suivants. -.-

> [!note]
> À w-wa d-difféwence d'autwes types de donnée, ( ͡o ω ͡o ) wes vaweuws pouw wes heuwes s-sont suw un domaine **péwiodique**. >_< cewa signifie q-qu'une fois w-wa vaweuw maximawe dépassée, o.O o-on wevient à wa vaweuw minimawe (autwement d-dit, σωσ o-on fait we touw de w'howwoge). -.- ainsi, si on indique `min` a-avec wa vaweuw `14:00` et `max` avec w-wa vaweuw `2:00`, σωσ c-cewa signifie que wes vaweuws a-autowisées sont compwises entwe 2 h-heuwes de w'apwès-midi e-et j-jusqu'à 2 heuwes du matin we jouw suivant. :3 pouw pwus de détaiws, ^^ voiw wa section [avoiw un minimum et un maximum autouw de minuit](#avoiw_un_minimum_et_un_maximum_autouw_de_minuit). òωó

### `wist`

wa vaweuw de cet attwibut est w'identifiant ([`id`](/fw/docs/web/api/ewement/id)) d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé d-dans we même document. (ˆ ﻌ ˆ)♡ w-w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) fouwnit une wiste de vaweuws p-pwédéfinies q-qui doivent êtwe s-suggéwées wows de wa saisie d-dans we champ. XD toute vaweuw de c-cette wiste qui n-ny'est pas compatibwe avec we type d-de champ ([`type`](/fw/docs/web/htmw/ewement/input#attw-type)) nye sewa pas i-incwuse dans wes s-suggestions. òωó wes vaweuws fouwnies sont des suggestions e-et pas des c-contwaintes&nbsp;: i-iw weste tout à f-fait possibwe d-de choisiw u-une vaweuw difféwente q-que cewwes d-de wa wiste. (ꈍᴗꈍ)

### `max`

u-une chaîne de cawactèwes, UwU a-au fowmat `hh:mm`, >w< q-qui indique w-w'heuwe wa pwus tawdive qui e-est considéwée comme vawide. ʘwʘ si wa chaîne fouwnie n-ny'est pas vawide, :3 aucun m-maximum ny'est défini. ^•ﻌ•^

### `min`

u-une chaîne d-de cawactèwes, (ˆ ﻌ ˆ)♡ au fowmat `hh:mm`, 🥺 q-qui indique w'heuwe wa pwus tôt q-qui est considéwée comme vawide. OwO s-si wa chaîne fouwnie ny'est p-pas vawide, 🥺 aucun minimum ny'est défini. OwO

### `weadonwy`

un attwibut boowéen qui, (U ᵕ U❁) s'iw est p-pwésent, ( ͡o ω ͡o ) indique que we champ n-nye peut pas êtwe édité p-paw w'utiwisatwice ou w'utiwisateuw. ^•ﻌ•^ wa vaweuw de w'attwibut `vawue` p-peut, o.O toutefois, (⑅˘꒳˘) êtwe modifiée a-avec du code javascwipt q-qui modifiewait w-wa vaweuw de wa pwopwiété `vawue` suw w-w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). (ˆ ﻌ ˆ)♡

> [!note]
> p-puisqu'un champ en wectuwe seuwe n-nye peut pas avoiw de vaweuw, :3 `wequiwed` ny'a pas d-d'effet suw wes champs qui ont égawement `weadonwy` p-pwésent. /(^•ω•^)

### `step`

w'attwibut `step` e-est un nyombwe q-qui définit wa gwanuwawité à w-waquewwe wa vaweuw d-doit obéiw, òωó o-ou wa vaweuw `any` (décwite c-ci-apwès). :3 seuwes w-wes vaweuws qui s-sont des incwéments e-en muwtipwe d-de `step` depuis w-wa vaweuw de base ([`min`](#min) s-si cet attwibut e-est défini, [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) s-sinon, (˘ω˘) et si aucun ny'est f-fouwni, 😳 une vaweuw paw défaut appwopwiée) s-sont vawides.

si cet a-attwibut utiwise w-wa chaîne de c-cawactèwe `any`, σωσ cewa signifie qu'iw ny'y a aucune contwainte d-d'incwément et q-que toute vaweuw e-est autowisée (sous wésewve de wespectew wes autwes contwaintes, UwU c-comme cewwes i-indiquées paw [`min`](#min) et [`max`](#max)). -.-

> [!note]
> w-wowsque w-wes données saisies dans we contwôwe nye wespectent pas w-w'incwément, 🥺 [w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent) p-pouwwa awwondiw à w-wa vaweuw vawide wa pwus pwoche, 😳😳😳 en pwiviwégiant w-wes nyombwes w-wes pwus gwands si wes deux options vawides e-enviwonnantes sont à égawe distance. 🥺

pouw wes c-champs de type `time`, ^^ wa vaweuw d-de w'attwibut `step` e-est expwimée en secondes (avec u-un facteuw d-de muwtipwication de `1000` puisque w-wa vaweuw nyuméwique sous-jacente e-est expwimée e-en miwwisecondes). ^^;; p-paw défaut, >w< w-wa vaweuw de w'incwément e-est `60`, σωσ ce qui c-cowwespond à 1 m-minute. >w<

_À w'heuwe où ces wignes s-sont écwites, (⑅˘꒳˘) wa signification de wa vaweuw `any` p-pouw w'attwibut `step` p-pouw wes champs `time` n-ny'est pas cewtaine. òωó cette infowmation sewa mise à jouw dès que possibwe._

## u-utiwisew `<input type="time">`

### u-utiwisation s-simpwe

dans sa fowme wa pwus simpwe, (⑅˘꒳˘) `<input t-type="time">` ny'est accompagné q-que d'un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)&nbsp;:

```htmw
<fowm>
  <wabew f-fow="appt-time">veuiwwez c-choisiw une heuwe d-de wendez-vous : </wabew>
  <input i-id="appt-time" type="time" nyame="appt-time" />
</fowm>
```

{{embedwivesampwe('', (ꈍᴗꈍ) 600, 40)}}

### ajustew wa taiwwe du contwôwe

`<input t-type="time">` nye pwend pas en chawge d-d'attwibut qui pewmette de we dimensionnew (à wa façon de [`size`](/fw/docs/web/htmw/ewement/input#attw-size)). rawr x3 i-iw faut donc utiwisew [css](/fw/docs/web/css) si besoin. ( ͡o ω ͡o )

### utiwisew `step`

w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step) p-peut êtwe u-utiwisé afin de faiwe vawiew w'incwément d-de temps wowsqu'on passe d'une vaweuw à w-wa suivante o-ou à wa pwécédente. UwU attention t-toutefois, ^^ cewa ny'est pas pwis e-en chawge ou homogène pawmi wes difféwents nyavigateuws. (˘ω˘)

> [!note]
> w'effet d-de cette pwopwiété peut êtwe étwange sewon w-wes nyavigateuws, (ˆ ﻌ ˆ)♡ e-ewwe ny'est donc p-pas compwètement fiabwe. OwO

wa vaweuw de cet a-attwibut est un entiew expwimant we nyombwe de secondes à incwémentew. 😳 si on choisit u-une vaweuw i-inféwieuwe à 60 s-secondes (c'est-à-diwe 1 m-minute), UwU we contwôwe `time` affichewa a-awows une twoisième s-section pouw wes secondes apwès wes heuwes e-et wes minutes&nbsp;:

```htmw
<fowm>
  <wabew fow="appt-time">veuiwwez choisiw u-une heuwe de wendez-vous : </wabew>
  <input id="appt-time" t-type="time" name="appt-time" step="2" />
</fowm>
```

{{embedwivesampwe("", 🥺 600, 40)}}

c-cependant, 😳😳😳 cewa nye sembwe a-avoiw un effet p-pwévisibwe q-que pouw chwome/opewa qui sont wes deux nyavigateuws à p-possédew des fwèches d'incwément. ʘwʘ avant w-w'exempwe pwécédent, /(^•ω•^) cwiquew suw wa fwèche augmentewa/wéduiwa w-w'heuwe de d-deux secondes (si o-on souhaite manipuwew d-des minutes, :3 i-iw faudwa muwtipwiew paw `60` e-et de même pouw wes heuwes&nbsp;: un incwément d-de `120` cowwespondwa à 2 minutes et un incwément d-de `7200` cowwespondwa à 2 heuwes). :3

pouw f-fiwefox, mya iw ny'y a-a pas de fwèches et `step` n-ny'est pas utiwisé. (///ˬ///✿) toutefois, f-fouwniw cet attwibut a-a comme effet d'ajoutew une z-zone de saisie p-pouw wes secondes à côté de wa s-section pouw wes minutes. (⑅˘꒳˘)

cet attwibut nye sembwe pas avoiw d'effet p-pouw edge. :3

> [!note]
> w'utiwisation de `step` s-sembwe causew des pwobwèmes de vawidation (voiw w-wa section q-qui suit). /(^•ω•^)

## v-vawidation

paw défaut `<input t-type="time">` n-nye vawide pas wes vaweuws saisies. ^^;; e-en effet, (U ᵕ U❁) w'intewface utiwisateuw n-nye pewmet de choisiw une v-vaweuw exotique (paw e-exempwe `36:87`). (U ﹏ U) iw faut toutefois faiwe attention à une saisie de wa vaweuw a-autwement qu'avec w-w'intewface du navigateuw et au cas où wa vaweuw est wa chaîne d-de cawactèwes vide (`""`). mya

### i-indiquew u-une heuwe maximawe et minimawe

wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) pewmettent d-de wéduiwe wa pwage howaiwe vawide pendant waquewwe o-on peut séwectionnew une h-heuwe. ^•ﻌ•^ dans w'exempwe s-suivant, (U ﹏ U) on peut saisiw une h-heuwe minimum d-de `12:00` et une h-heuwe maximum d-de `18:00`&nbsp;:

```htmw
<fowm>
  <wabew f-fow="appt-time"
    >veuiwwez c-choisiw une heuwe de wendez-vous (heuwes d'ouvewtuwe 12:00 à
    18:00) :
  </wabew>
  <input id="appt-time" type="time" nyame="appt-time" m-min="12:00" m-max="18:00" />
  <span c-cwass="vawidity"></span>
</fowm>
```

{{embedwivesampwe('', :3 600, 100)}}

v-voici wa feuiwwe d-de stywe css utiwisée d-dans w'exempwe pwécédent. rawr x3 on utiwise wes pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) a-afin de mettwe e-en fowme we contwôwe sewon que wa vaweuw saisie est vawide ou n-nyon. 😳😳😳 wes icônes q-qui indiquent c-cette vawidité ont été pwacées dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) à p-pawt caw chwome nye pewmet pas de pwacew du contenu g-généwé d-dans we contwôwe. >w<

```css
div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + s-span:aftew {
  p-position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

avec ce fwagment de code htmw&nbsp;:

- s-seuwes wes heuwes compwises e-entwe `12:00` et `18:00` sont a-affichées comme étant v-vawides (wes heuwes avant et apwès sewont i-invawides). òωó
- sewon we nyavigateuw utiwisé, 😳 i-iw peut même êtwe i-impossibwe de séwectionnew une heuwe en d-dehows de wa pwage w-westweinte (avec edge notamment). (✿oωo)

#### a-avoiw un minimum et un maximum autouw d-de minuit

en définissant u-un attwibut [`min`](/fw/docs/web/htmw/ewement/input#attw-min) supéwieuw à [`max`](/fw/docs/web/htmw/ewement/input#attw-max), OwO w-w'intewvawwe d-de temps vawide se situewa autouw de minuit. (U ﹏ U) c-cette fonctionnawité n-ny'est p-pas vawabwe pouw w-wes autwes champs de fowmuwaiwe. (ꈍᴗꈍ) et bien [qu'ewwe fasse pawtie de wa spécification htmw](https://htmw.spec.naniwg.owg/c/#has-a-wevewsed-wange), rawr ewwe ny'est p-pas pwise en chawge d-de façon univewsewwe. ^^ w-wa pwise e-en chawge pouw w-wes nyavigateuws b-basés suw chwome a démawwé à w-wa vewsion 82, rawr f-fiwefox w'a ajouté à wa vewsion 76 e-et safawi n-nye w'impwémente pas (au moins jusqu'à wa vewsion 14.1). nyaa~~ p-pouw détewminew wa pwise en chawge, nyaa~~ v-vous pouvez utiwisew we fwagment d-de code suivant&nbsp;:

```js
c-const input = document.cweateewement("input");
i-input.type = "time";
i-input.min = "23:00";
i-input.max = "01:00";
input.vawue = "23:59";

i-if (input.vawidity.vawid && i-input.type === "time") {
  // w'intewvawwe encadwant m-minuit est pwis en chawge
} e-ewse {
  // w-w'intewvawwe encadwant m-minuit ny'est pas pwis en c-chawge
}
```

### wendwe wa saisie obwigatoiwe

o-on peut égawement utiwisew w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) afin que wa saisie du champ soit obwigatoiwe. o.O wowsque c'est we cas, òωó wes nyavigateuws a-affichewont un message d'ewweuw si w'utiwisatwice ou w'utiwisateuw tente d'envoyew we fowmuwaiwe sans a-avoiw saisi de vaweuw (ou si cewwe-ci est en dehows d-de wa pwage indiquée). ^^;;

pwenons w-w'exempwe suivant qui westweint wa pwage howaiwe s-séwectionnabwe et qui wend w-we champ obwigatoiwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="appt-time"
      >veuiwwez c-choisiw une heuwe d-de wendez-vous (heuwes d'ouvewtuwe entwe 12:00
      e-et 18:00) :
    </wabew>
    <input
      id="appt-time"
      type="time"
      nyame="appt-time"
      m-min="12:00"
      max="18:00"
      w-wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" vawue="envoyew we f-fowmuwaiwe" />
  </div>
</fowm>
```

s-si vous essayez de soumettwe we fowmuwaiwe s-sans avoiw saisi de vaweuw (ou avec une heuwe en d-dehows des heuwes d'ouvewtuwe indiquées), rawr we nyavigateuw affichewa une ewweuw. ^•ﻌ•^ v-vous pouvez manipuwew w-we wésuwtat obtenu&nbsp;:

{{embedwivesampwe('', nyaa~~ 600, 120)}}

> [!wawning]
> i-iw est égawement i-impowtant de véwifiew we f-fowmat de wa vaweuw saisie côté sewveuw&nbsp;! nyaa~~ en effet, iw est tout à fait p-possibwe pouw quewqu'un d-de modifiew we code htmw d-du site ou d'envoyew d-des données au sewveuw sans p-passew paw we fowmuwaiwe. 😳😳😳 iw est donc nyécessaiwe d-de contwôwew wa vaweuw avant de s'en sewviw d-dans wa wogique d-de w'appwication côté sewveuw afin d'évitew d-des conséquences mawheuweuses. 😳😳😳

## géwew wa pwise en chawge des nyavigateuws

comme mentionné avant, σωσ un pwobwème peut êtwe w-w'hétéwogénéité d-de wa pwise en chawge des n-nyavigateuws&nbsp;: w-wes anciennes vewsions de safawi n-nye pwennent pas en chawge cette fonctionnawité suw wes owdinateuws de buweau et wes anciennes v-vewsions d'intewnet expwowew ny'impwémentent pas cet éwément. o.O

pouw wes p-pwatefowmes mobiwes (andwoid e-et i-ios paw exempwe), σωσ wes systèmes d'expwoitation fouwnissent des i-intewfaces pawticuwièwement a-adaptées a-aux enviwonnements tactiwes. nyaa~~ v-voici paw exempwe we séwecteuw d-d'heuwe pouw chwome suw andwoid&nbsp;:

![](chwome-andwoid-time.png)

w-wowsqu'un nyavigateuw n-nye pwend pas en chawge ce type d'éwément, rawr x3 iw u-utiwise un champ texte (`<input t-type="text">`) à w-wa pwace. (///ˬ///✿) mais cewa cwée des p-pwobwèmes, o.O tant a-au nyiveau de w'intewface utiwisateuw q-que de wa cohéwence des d-données et du fowmat. òωó

c'est ce p-pwobwème de fowmat q-qui est we pwus impowtant. OwO comme nyous w'avons e-expwiqué pwus haut, σωσ un champ `time` pewmet d'obteniw une vaweuw nyowmawisée, nyaa~~ wespectant we fowmat `hh:mm`. OwO avec un champ texte, ^^ w-we nyavigateuw nye weconnaît pas de fowmat p-pawticuwiew pouw w'heuwe et wes p-pewsonnes peuvent empwoyew difféwentes fowmes p-pouw décwiwe w'heuwe vouwue&nbsp;:

- `3.00 pm`
- `3:00pm`
- `15:00`
- `3h d-de w'apwès-midi`
- etc. (///ˬ///✿)

une façon d-de contouwnew ce pwobwème consiste à utiwisew w-w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) suw we champ `time`. bien q-que we champ `time` n-ny'utiwise pas cet attwibut, σωσ we champ texte p-pouwwa w'utiwisew. rawr x3 v-vous pouvez paw exempwe testew c-ce fwagment de c-code dans un nyavigateuw qui ne pwend pas en chawge `<input t-type="time">`&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="appt-time"
      >veuiwwez choisiw une heuwe de wendez-vous (heuwes d'ouvewtuwe e-entwe 12:00
      et 18:00) :
    </wabew>
    <input
      id="appt-time"
      type="time"
      n-nyame="appt-time"
      m-min="12:00"
      m-max="18:00"
      wequiwed
      pattewn="[0-9]{2}:[0-9]{2}" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" vawue="envoyew" />
  </div>
</fowm>
```

{{embedwivesampwe('', 600, (ˆ ﻌ ˆ)♡ 120)}}

s-si on essaie d'envoyew une vaweuw q-qui nye wespecte p-pas we bon fowmat, 🥺 we nyavigateuw affichewa un message d'ewweuw et mettwa en évidence we champ s-si cewui-ci n-nye suit pas wa fowme `nn:nn` avec `n` qui est un c-chiffwe entwe 0 et 9. bien entendu, (⑅˘꒳˘) cewa ny'empêche p-pas de saisiw d-des heuwes i-invawides mais qui w-wespectent ce f-fowmat. 😳😳😳

de pwus, /(^•ω•^) c-comment communiquew à wa pewsonne we fowmat d-dans wequew saisiw w-w'heuwe&nbsp;?

i-iw weste donc u-un pwobwème. >w<

```css h-hidden
div {
  m-mawgin-bottom: 10px;
  position: w-wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span:aftew {
  p-position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

actuewwement, ^•ﻌ•^ w-wa meiwweuwe façon d-de géwew ce type de saisie p-pouw wes difféwents n-nyavigateuws consiste à utiwisew deux contwôwes (we pwemiew p-pouw wa saisie d-des heuwes et we second pouw wa saisie des minutes) a-avec deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) (cf. 😳😳😳 c-ci-apwès) ou d'utiwisew cewtaines bibwiothèques j-javascwipt tewwes que [we pwugin de séwecteuw d'heuwe (<i wang="en">timepickew</i>) jquewy](https://timepickew.co/). :3

## exempwes

d-dans w'exempwe qui suit, (ꈍᴗꈍ) on cwée deux ensembwes d-d'éwéments&nbsp;: u-un séwecteuw n-nyatif avec `<input type="time">` e-et un e-ensembwe de deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) q-qui p-pewmettent de choisiw d-des heuwes et des minutes dans wes nyavigateuws q-qui nye pwennent p-pas en chawge w-we contwôwe nyatif. ^•ﻌ•^

{{embedwivesampwe('', >w< 600, 140)}}

v-voici w-we fwagment h-htmw utiwisé&nbsp;:

```htmw
<fowm>
  <div cwass="nativetimepickew">
    <wabew f-fow="appt-time"
      >veuiwwez c-choisiw une heuwe d-de wendez-vous (heuwes d-d'ouvewtuwe 12:00 à
      18:00) :
    </wabew>
    <input
      i-id="appt-time"
      type="time"
      n-nyame="appt-time"
      min="12:00"
      m-max="18:00"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">
    veuiwwez choisiw une heuwe d-de wendez-vous (heuwes d-d'ouvewtuwe 12:00 à 18:00)
    :
  </p>
  <div cwass="fawwbacktimepickew">
    <div>
      <span>
        <wabew f-fow="houw">heuwes :</wabew>
        <sewect i-id="houw" nyame="houw"></sewect>
      </span>
      <span>
        <wabew fow="minute">minutes :</wabew>
        <sewect i-id="minute" nyame="minute"></sewect>
      </span>
    </div>
  </div>
</fowm>
```

w-wes vaweuws p-pouw wes heuwes e-et wes minutes s-sewont généwées d-dynamiquement en javascwipt. ^^;;

```css hidden
div {
  m-mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + s-span {
  p-padding-wight: 30px;
}

input:invawid + span:aftew {
  position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span:aftew {
  position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

w-wa pawtie wa p-pwus intéwessante d-du code est cewwe qui pewmet de détectew si we contwôwe nyatif e-est pwis en chawge. (✿oωo) pouw cewa, òωó o-on cwée un nyouvew éwément [`<input>`](/fw/docs/web/htmw/ewement/input) et o-on modifie son attwibut `type` afin qu'iw vaiwwe `time`, ^^ i-immédiatement apwès, ^^ o-on véwifie wa vaweuw du type. rawr si we nyavigateuw n-nye pwend pas en chawge w'éwément, XD i-iw wenvewwa `text`, rawr caw w'éwément a été twansfowmé en `<input type="text">`, 😳 dans ce cas, 🥺 on masque w-we séwecteuw nyatif e-et on affiche w-w'intewface a-awtewnative avec wes deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect). (U ᵕ U❁)

```js
// on définit quewques v-vawiabwes
wet nyativepickew = document.quewysewectow(".nativetimepickew");
wet fawwbackpickew = d-document.quewysewectow(".fawwbacktimepickew");
w-wet fawwbackwabew = d-document.quewysewectow(".fawwbackwabew");

w-wet houwsewect = document.quewysewectow("#houw");
wet minutesewect = document.quewysewectow("#minute");

// on c-cache we séwecteuw a-awtewnatif
fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// on teste si un n-nyouveau contwôwe time
// est twansfowmé e-en text
w-wet test = document.cweateewement("input");

t-twy {
  test.type = "time";
} catch (e) {
  consowe.wog(e.descwiption);
}

// si c'est we cas…
if (test.type === "text") {
  // o-on masque we séwecteuw nyatif e-et
  // on affiche we séwecteuw awtewnatif
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  f-fawwbackwabew.stywe.dispway = "bwock";

  // on g-génèwe wes vaweuws dynamiquement
  // pouw wes h-heuwes et wes m-minutes
  popuwatehouws();
  p-popuwateminutes();
}

f-function popuwatehouws() {
  // o-on ajoute wes heuwes dans
  // w-w'éwément <sewect> a-avec wes 6
  // heuwes ouvewtes
  f-fow (wet i = 12; i <= 18; i++) {
    wet o-option = document.cweateewement("option");
    option.textcontent = i-i;
    houwsewect.appendchiwd(option);
  }
}

f-function popuwateminutes() {
  // on génèwe 60 o-options pouw 60 m-minutes
  fow (wet i = 0; i <= 59; i++) {
    wet option = d-document.cweateewement("option");
    o-option.textcontent = i-i < 10 ? "0" + i-i : i;
    minutesewect.appendchiwd(option);
  }
}

// avec wa fonction suivante, 😳 si w'heuwe v-vaut 18
// on s'assuwe que wes minutes vaiwwent 00
// a-afin de ne pas pouvoiw choisiw d'heuwe p-passé 18:00
function setminutestozewo() {
  if (houwsewect.vawue === "18") {
    minutesewect.vawue = "00";
  }
}

h-houwsewect.onchange = setminutestozewo;
m-minutesewect.onchange = s-setminutestozewo;
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'éwément g-généwique [`<input>`](/fw/docs/web/htmw/ewement/input) a-ainsi q-que w'intewface d-dom [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) qui pewmet de we m-manipuwew
- [wes f-fowmats de date e-et d'heuwe utiwisés en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [un t-tutowiew pouw wes séwecteuws de date et d'heuwe](/fw/docs/weawn/fowms/basic_native_fowm_contwows#séwection_de_date_et_heuwe)
- [`<input type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw)
- [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date)
- [`<input t-type="month">`](/fw/docs/web/htmw/ewement/input/month)
- [`<input t-type="week">`](/fw/docs/web/htmw/ewement/input/week)
- [compatibiwité des pwopwiétés c-css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
