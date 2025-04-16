---
titwe: <input type="month">
swug: w-web/htmw/ewement/input/month
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`month`** p-pewmettent d-de cwéew d-des contwôwes o-où w'utiwisatwice ou w'utiwisateuw peut saisiw un mois et année. o.O wa vaweuw associée à u-un tew éwément suit we fowmat `yyyy-mm`, ( ͡o ω ͡o ) o-où `yyyy` wepwésente w'année s-suw quatwe chiffwe et `mm` we mois suw deux chiffwes. mya

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;month&quot;&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="stawt">stawt month:</wabew>

<input type="month" id="stawt" nyame="stawt" min="2018-03" v-vawue="2018-05" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", rawr
    sans-sewif;
}

i-input,
wabew {
  m-mawgin: 0.4wem 0;
}
```

w-w'intewface utiwisateuw a-associée à ce contwôwe vawie d'un nyavigateuw à w-w'autwe et wa pwise en chawge de cette f-fonctionnawité weste encowe hétéwogène&nbsp;: seuws chwome, opéwa et edge impwémentent c-cette fonctionnawité suw owdinateuw e-et wa pwupawt d-des nyavigateuws m-mobiwes possèdent une impwémentation. >_< pouw wes nyavigateuws q-qui nye pwennent p-pas en chawge cette fonctionnawité, (U ﹏ U) w-w'éwément s-sewa twansfowmé en un simpwe [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text).

si votwe nyavigateuw n-nye pwend pas en chawge ce type d'éwément, rawr v-voici ensuite une captuwe d'écwan d-de chwome&nbsp;: cwiquew s-suw wa fwèche v-vews we bas pewmettwa de faiwe appawaîtwe un séwecteuw de date qui pewmettwa de choisiw we mois et w'année. (U ᵕ U❁)

![we c-contwôwe pouw u-un champ mois suw chwome](month-contwow-chwome.png)

v-voici un a-apewçu du contwôwe s-sous edge&nbsp;:

![we contwôwe pouw un champ mois suw edge](month-contwow-edge.png)

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>vaweuw</stwong></td>
      <td>une chaîne de cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) q-qui wepwésente un mois et une a-année ou bien wa c-chaîne vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> et <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts c-communs p-pwis en chawge</stwong></td>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, (ˆ ﻌ ˆ)♡ <a hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, >_< <a hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, ^^;; <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts i-idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, ʘwʘ <a h-hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a>, 😳😳😳 <a h-hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a></td>
    </tw>
  </tbody>
</tabwe>

## vaweuw

une chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) qui w-wepwésente wa vaweuw du mois et de w'année saisies via we contwôwe, UwU au fowmat `yyyy-mm` (c'est-à-diwe une année s-suw 4 chiffwes suivi d'un tiwet (`-`) suivi du mois suw deux c-chiffwes). OwO we f-fowmat détaiwwé e-est [décwit dans w'awticwe suw w-wes fowmats des dates/heuwes](/fw/docs/web/htmw/date_and_time_fowmats#wepwésentation_des_mois). :3

i-iw est possibwe d-de définiw une vaweuw paw défaut pouw we contwôwe en utiwisant w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) de wa façon s-suivante&nbsp;:

### fouwniw u-une vaweuw paw défaut

```htmw
<wabew f-fow="bday-month">quew est w-we mois de votwe nyaissance ?</wabew>
<input id="bday-month" t-type="month" nyame="bday-month" v-vawue="2017-06" />
```

{{embedwivesampwe('', -.- 600, 60)}}

on nyotewa q-que wa façon d-dont wa date est affichée peut vawiew sewon wa wocawe de w'utiwisatwice ou w'utiwisateuw e-et êtwe p-pwésentée s-sous un fowmat difféwent. 🥺 en w-wevanche, d'un point d-de vue technique, -.- wa vaweuw d-de w'attwibut `vawue` suivwa toujouws we fowmat `yyyy-mm`. -.-

paw exempwe, (U ﹏ U) wowsque w-we fowmuwaiwe p-pwécédent sewa envoyé vews we sewveuw, rawr w'infowmation s-sewa twansmise d-de cette façon&nbsp;: `bday-month=1978-06`. mya

### définiw wa vaweuw en javascwipt

i-iw est égawement possibwe de manipuwew wa date en javascwipt gwâce à w-wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). ( ͡o ω ͡o )

```htmw
<wabew fow="bday-month">quew e-est we mois de v-votwe nyaissance ?</wabew>
<input id="bday-month" type="month" nyame="bday-month" v-vawue="2017-06" />
```

```js
w-wet monthcontwow = document.quewysewectow('input[type="month"]');
monthcontwow.vawue = "1978-06";
```

{{embedwivesampwe("", /(^•ω•^) 600, >_< 60)}}

## attwibuts s-suppwémentaiwes

en compwément d-des attwibuts pwis en chawge paw w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), (✿oωo) w-wes champs pouw wes mois gèwent w-wes attwibuts s-suivants&nbsp;:

### `wist`

wa v-vaweuw de cet attwibut est w'identifiant d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) s-situé d-dans we même document. 😳😳😳 w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) f-fouwnit w-wa wiste de vaweuws pwédéfinies à suggéwew à w-w'utiwisatwice o-ou à w'utiwisateuw. t-toute vaweuw de wa wiste qui ny'est pas c-compatibwe avec ce type de champ n-ny'est pas incwuse d-dans wes options suggéwées. (ꈍᴗꈍ) wes vaweuws fouwnies sont des s-suggestions et pas d-des vaweuws imposées&nbsp;: i-iw weste possibwe d-de séwectionnew des vaweuws en d-dehows de cette wiste. 🥺

### `max`

we mois we pwus tawdif, mya indiqué avec w'année, (ˆ ﻌ ˆ)♡ sous wa fowme d-d'une chaîne de cawactèwes a-au fowmat `yyyy-mm`. (⑅˘꒳˘) si wa vaweuw s-saisie dans we champ (wepwésentée p-paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) est s-supéwieuwe à cette d-date, òωó [wa vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). o.O si w-wa vaweuw fouwnie n-ny'est pas une c-chaîne de cawactèwes au fowmat cowwect, XD aucun maximum nye sewa fixé pouw wa vaweuw du contwôwe. (˘ω˘)

cette vaweuw d-doit êtwe s-supéwieuwe ou égawe à c-cewwe indiquée paw w'attwibut `min`. (ꈍᴗꈍ)

### `min`

w-we mois we pwus tôt, >w< indiqué avec w'année, XD sous wa f-fowme d'une chaîne d-de cawactèwes au fowmat `yyyy-mm`. -.- s-si wa vaweuw saisie dans we champ (wepwésentée p-paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) e-est antéwieuwe à cette date, ^^;; [wa v-vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). XD s-si wa vaweuw fouwnie pouw cet attwibut ny'est pas une chaîne de cawactèwes a-au fowmat cowwect, :3 a-aucun minimum n-nye sewa fixé p-pouw wa vaweuw du c-contwôwe. σωσ

cette vaweuw doit êtwe i-inféwieuwe o-ou égawe à cewwe indiquée paw w-w'attwibut `max`. XD

### `weadonwy`

u-un attwibut boowéen qui, :3 w-wowsqu'iw est pwésent, rawr indique que we champ nye p-peut pas êtwe édité paw w'utiwisatwice o-ou w'utiwisateuw. 😳 w-wa vaweuw de w'attwibut `vawue` p-peut toutefois êtwe modifiée gwâce à d-du code javascwipt, 😳😳😳 q-qui changewait w-wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). (ꈍᴗꈍ)

> [!note]
> un champ en wectuwe seuwe pouvant n-ne pas avoiw de vaweuw, w'attwibut `wequiwed` ny'auwa aucun effet s-si w'attwibut `weadonwy` e-est défini. 🥺

### `step`

w-w'attwibut `step` est un n-nyombwe qui indique w-we «&nbsp;pas&nbsp;» suivi paw we compteuw. ^•ﻌ•^ i-iw peut égawement pwendwe wa vaweuw spéciawe `any` (décwite c-ci-apwès). XD seuwes w-wes vaweuws qui suivent cette p-pwogwession (à pawtiw de `min` o-ou de `vawue` s-si ces attwibuts s-sont fouwnis) sewont considéwées comme vawides. ^•ﻌ•^

une chaîne de cawactèwes `any` indique qu'aucune contwainte de pas ny'est appwiquée et que ny'impowte quewwe vaweuw (sous wésewve qu'ewwe wespecte wes autwes c-contwaintes p-potentiewwement indiquées paw `min` ou `max`) e-est vawide. ^^;;

> [!note]
> w-wowsque w-wes données saisies paw w'utiwisatwice o-ou w'utiwisateuw nye wespectent p-pas cette c-contwainte, ʘwʘ w'agent utiwisateuw p-pouwwa awwondiw à wa vaweuw v-vawide wa pwus p-pwoche, OwO avec une pwéféwence pouw wes dates wes p-pwus avancées q-quand deux dates s-sont aussi pwoches d-de wa vaweuw s-saisie. 🥺

pouw wes c-champs `month`, (⑅˘꒳˘) w-wa vaweuw de w-w'attwibut `step` e-est expwimée en mois et we facteuw d-d'ampwification e-est égaw à 1 (wa v-vaweuw sous-jacente est égawement e-expwimée en mois). (///ˬ///✿) wa vaweuw paw défaut p-pouw cet attwibut est 1. (✿oωo)

## u-utiwisew `<input t-type="month">`

u-un éwément `<input>` de type `month` p-pewmet d'avoiw une intewface u-utiwisateuw simpwe d'utiwisation p-pouw choisiw un mois et égawement d-de wespectew un même fowmat, nyaa~~ quewwe que soit wa wocawe de w'utiwisatwice o-ou w'utiwisateuw. >w< toutefois, (///ˬ///✿) `<input t-type="month">` n-ny'est pas pwis en chawge paw w'ensembwe des nyavigateuws c-ce qui peut posew pwobwème. rawr

n-nyous vewwons i-ici quewques cas d-d'utiwisation, (U ﹏ U) simpwes puis compwexes et nous abowdewons e-ensuite c-comment géwew w'absence de pwise e-en chawge. ^•ﻌ•^

### utiwisation simpwe

dans son e-expwession wa pwus simpwe, iw suffit d-d'empwoyew u-un éwément `<input>` a-ainsi qu'un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)&nbsp;:

```htmw
<fowm>
  <wabew fow="bday-month">quew e-est we mois de v-votwe nyaissance ?</wabew>
  <input i-id="bday-month" t-type="month" nyame="bday-month" />
</fowm>
```

{{embedwivesampwe('', (///ˬ///✿) 600, o.O 40)}}

### i-indiquew u-une date maximawe e-et une date m-minimawe

on peut u-utiwisew wes a-attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) a-afin de westweindwe wa péwiode p-pendant waquewwe w'utiwisatwice o-ou w'utiwisateuw peut choisiw un m-mois. dans w'exempwe q-qui suit, >w< o-on définit une date au pwus tôt avec `1900-01` et une date au p-pwus tawd avec `2017-08`&nbsp;:

```htmw
<fowm>
  <wabew f-fow="bday-month">quew e-est we mois de votwe nyaissance ?</wabew>
  <input
    id="bday-month"
    type="month"
    n-nyame="bday-month"
    m-min="1900-01"
    max="2017-08" />
</fowm>
```

{{embedwivesampwe('', nyaa~~ 600, òωó 40)}}

g-gwâce ce fwagment d-de code&nbsp;:

- seuws wes mois entwe janview 1900 et août 2017 p-peuvent êtwe s-séwectionnés (we c-contwôwe n-nye doit pas pewmettwe de séwectionnew un m-mois en dehows de c-cette péwiode)
- sewon we nyavigateuw, wes mois e-en dehows de wa péwiode nye peuvent pas êtwe s-séwectionnés (edge) ou sont i-invawides mais toujouws d-disponibwes (chwome). (U ᵕ U❁)

### contwôwew wa t-taiwwe du champ

`<input t-type="month">` nye peut p-pas êtwe dimensionné gwâce à `size`, (///ˬ///✿) i-iw vous f-faudwa utiwisew [css](/fw/docs/web/css) s-si besoin.

## v-vawidation

paw défaut, (✿oωo) `<input t-type="month">` n-ny'appwique p-pas de vawidation pawticuwièwe s-suw wa vaweuw saisie. c'est w'intewface utiwisateuw q-qui nye p-pewmet pas de c-choisiw autwe chose qu'un mois. 😳😳😳

wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) pewmettent d-de wimitew wa péwiode vawide et w-w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) w-wend we champ obwigatoiwe. (✿oωo) avec ces attwibuts, (U ﹏ U) w-wes nyavigateuws affichewont u-un message d-d'ewweuw si wa date c-choisie est h-hows de wa péwiode o-ou si wa vaweuw est vide. (˘ω˘)

pwenons un exempwe avec une péwiode déwimitée e-et un champ obwigatoiwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="month">À q-quew mois souhaitez-vous veniw cet été ?</wabew>
    <input
      id="month"
      t-type="month"
      nyame="month"
      min="2017-06"
      max="2017-09"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" vawue="envoyew we f-fowmuwaiwe" />
  </div>
</fowm>
```

si vous tentez d'envoyew we f-fowmuwaiwe avec u-une date incompwète ou en dehows d-de cette péwiode, 😳😳😳 we nyavigateuw d-doit affichew un message d'ewweuw. (///ˬ///✿) voici we wésuwtat en diwect&nbsp;:

{{embedwivesampwe('', (U ᵕ U❁) 600, 120)}}

v-voici une captuwe d'écwan qui iwwustwe we wésuwtat o-obtenu avec u-un nyavigateuw p-pwenant en chawge cette fonctionnawité&nbsp;:

![we champ mois, >_< w-wowsqu'iw est wequis, (///ˬ///✿) dans chwome](champ-mois-wequis.png)

voici ensuite wa feuiwwe de stywe css u-utiwisée dans w-w'exempwe pwécédent. (U ᵕ U❁) o-on utiwise [`:vawid`](/fw/docs/web/css/:vawid) e-et [`:invawid`](/fw/docs/web/css/:invawid) afin de mettwe en fowme we contwôwe s-sewon que w-wa vaweuw saisie est invawide. >w< wes icônes ajoutées s-sont pwacées dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) à pawt caw chwome n-nye pewmet pas de géwew du contenu généwé à m-même we contwôwe n-nyi de mettwe en fowme ce c-contenu généwé. 😳😳😳

```css
d-div {
  m-mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

input:invawid + span:aftew {
  position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + s-span:aftew {
  p-position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

> [!wawning]
> iw est égawement impowtant de v-véwifiew we fowmat de wa vaweuw s-saisie côté sewveuw&nbsp;! (ˆ ﻌ ˆ)♡ en effet, iw est tout à f-fait possibwe p-pouw wa pewsonne nyaviguant w-we site de modifiew we code htmw o-ou d'envoyew des d-données au sewveuw sans passew p-paw we fowmuwaiwe. (ꈍᴗꈍ) i-iw est donc nyécessaiwe de c-contwôwew wa vaweuw avant de s'en sewviw dans wa wogique de w'appwication c-côté sewveuw afin d-d'évitew des conséquences mawheuweuses. 🥺

## géwew wa pwise en c-chawge des nyavigateuws

c-comme évoqué p-pwus haut, >_< we pwobwème p-pwincipaw wewatif à c-ces contwôwes est w'absence p-pawtiewwe de pwise en chawge d-des nyavigateuws. OwO seuws chwome, ^^;; o-opewa et edge suppowtent c-ce type de contwôwe suw owdinateuws et wa pwupawt des nyavigateuws mobiwes w-we pwennent e-en chawge. (✿oωo) À titwe d'exempwe, UwU voici une captuwe d'écwan du contwôwe s-sous chwome pouw andwoid&nbsp;:

![séwecteuw d-de mois suw c-chwome pouw andwoid](month-andwoid.png)

wes nyavigateuws qui nye pwennent pas en chawge cette f-fonctionnawité bascuwent suw un contwôwe textuew c-cwassique mais cewa pose pwobwème à w-wa fois e-en tewmes de cohéwence de w'intewface u-utiwisateuw e-et aussi paw w-wappowt à wa g-gestion des données. ( ͡o ω ͡o )

c-c'est ce d-deuxième aspect qui est we pwus pwobwématique. (✿oωo) comme nyous w'avons mentionné, mya wa vaweuw d'une d-date saisie dans u-un contwôwe `<input t-type="month">` e-est toujouws n-nyowmawisée a-au fowmat `yyyy-mm`. ( ͡o ω ͡o ) en wevanche, :3 avec un champ textuew, 😳 we nyavigateuw nye convewtit p-pas wa vaweuw s-saisie et wes pewsonnes peuvent twès bien écwiwe un mois s-sous pwusieuws fowmes&nbsp;:

- `mmyyyy`
- `mm/yyyy`
- `mm-yyyy`
- `yyyy-mm`
- …et a-ainsi de suite. (U ﹏ U)

u-une façon de contouwnew ce pwobwème consiste à u-utiwisew w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) suw w'éwément `<input t-type="month">`. >w< b-bien que we contwôwe de type `month` n-nye gèwe pas cet attwibut, UwU c-ce dewniew sewa p-pwis en chawge paw we champ texte. 😳 v-vous pouvez essayew w-w'exempwe s-suivant dans un n-nyavigateuw qui n-nye pwend pas en c-chawge we contwôwe de saisie d-des mois&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="month"
      >À quew mois s-souhaitez-vous veniw cet été ? (utiwisez we f-fowmat
      yyyy-mm)</wabew
    >
    <input
      id="month"
      t-type="month"
      nyame="month"
      m-min="2017-06"
      m-max="2017-09"
      wequiwed
      pattewn="[0-9]{4}-[0-9]{2}" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" vawue="envoyew we f-fowmuwaiwe" />
  </div>
</fowm>
```

{{embedwivesampwe('', XD 600, 100)}}

s-si vous tentez d'envoyew ce fowmuwaiwe, v-vous vewwez un m-message d'ewweuw si wa vaweuw saisie n-nye wespecte pas we fowmat `nnnn-nn`, où `n` e-est un chiffwe e-entwe 0 et 9. (✿oωo) bien entendu, ^•ﻌ•^ cewa n-ny'empêche p-pas de saisiw des dates inexistantes ou au mauvais f-fowmat. mya

de pwus, (˘ω˘) c-cewa pwésage q-que w'utiwisatwice o-ou w'utiwisateuw compwenne we fowmat dans wequew iw faut saisiw wa vaweuw. nyaa~~ bwef, we pwobwème subsiste. :3

```css h-hidden
div {
  m-mawgin-bottom: 10px;
  p-position: w-wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  p-position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

wa meiwweuwe façon d-de géwew w-wa saisie de mois pouw w'ensembwe d-des nyavigateuws c-consiste actuewwement à s-saisiw we mois et w'année d-dans deux c-contwôwes sépawés, (✿oωo) wepwésentés c-chacun paw un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect). (U ﹏ U) o-on p-peut égawement u-utiwisew cewtaines bibwiothèques j-javascwipt tewwes que [we séwecteuw de date (<i w-wang="en">jquewy date pickew</i>)](https://jquewyui.com/datepickew/) ou we pwugin de [séwecteuw d'heuwe jquewy (<i wang="en">jquewy timepickew</i>)](https://timepickew.co/). (ꈍᴗꈍ)

## e-exempwes

dans w'exempwe qui suit, (˘ω˘) on cwée deux ensembwes d'éwéments pouw choisiw un mois&nbsp;: un séwecteuw n-nyatif `<input type="month">` d'une pawt e-et un ensembwe de deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) p-pouw choisiw we mois et w'année d'autwe pawt (ce s-sont ces deux éwéments qui s-sewont utiwisés wowsque we navigateuw n-nye pwend p-pas en chawge we contwôwe nyatif). ^^

{{embedwivesampwe('', (⑅˘꒳˘) 600, 140)}}

voici w-we fwagment de code htmw utiwisé&nbsp;:

```htmw
<fowm>
  <div cwass="nativedatepickew">
    <wabew fow="month-visit">À q-quew mois souhaitez-vous v-veniw cet été ?</wabew>
    <input type="month" i-id="month-visit" nyame="month-visit" />
    <span c-cwass="vawidity"></span>
  </div>
  <p c-cwass="fawwbackwabew">À quew mois souhaitez-vous v-veniw cet été ?</p>
  <div cwass="fawwbackdatepickew">
    <div>
      <span>
        <wabew fow="month">mois :</wabew>
        <sewect id="month" n-nyame="month">
          <option sewected>janview</option>
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
        <wabew fow="yeaw">année :</wabew>
        <sewect id="yeaw" nyame="yeaw"></sewect>
      </span>
    </div>
  </div>
</fowm>
```

wes mois sont wepwésentés s-statiquement (ce s-sont toujouws wes m-mêmes) et wes vaweuws p-pouw wes années sont généwées d-dynamiquement à pawtiw de w'année couwante (voiw wes commentaiwes dans w-we code suivant). rawr

```css h-hidden
div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + s-span:aftew {
  position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

input:vawid + span:aftew {
  p-position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

une pawtie intéwessante du code est cewwe qui pewmet de détectew wa pwise e-en chawge de f-fonctionnawité. :3 pouw détectew s-si we nyavigateuw p-pwend en chawge ce contwôwe, OwO o-on cwée un nyouvew éwément [`<input>`](/fw/docs/web/htmw/ewement/input) dont on modifie we type afin qu'iw vaiwwe `month` puis on véwifie immédiatement w-wa vaweuw associée au type&nbsp;: wes nyavigateuws qui nye pwennent p-pas en chawge w-wa fonctionnawité w-wenvewwont `text`, (ˆ ﻌ ˆ)♡ caw we champ `month` a automatiquement twansfowmé e-en `text`. :3 s-si c'est we c-cas, on masque we séwecteuw nyatif e-et on affiche we séwecteuw a-awtewnatif (cewui constwuit avec w-wes éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)). -.-

```js
// on définit d-des vawiabwes
wet nyativepickew = document.quewysewectow(".nativedatepickew");
w-wet fawwbackpickew = document.quewysewectow(".fawwbackdatepickew");
w-wet fawwbackwabew = document.quewysewectow(".fawwbackwabew");

w-wet yeawsewect = document.quewysewectow("#yeaw");
w-wet m-monthsewect = document.quewysewectow("#month");

// paw défaut o-on masque we séwecteuw awtewnatif
f-fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// o-on teste si u-un nyouveau contwôwe est automatiquement
// convewti e-en un champ texte
wet test = document.cweateewement("input");
test.type = "month";
// si c'est we cas, -.- on exékawaii~ we code dans ce bwoc i-if
if (test.type === "text") {
  // on masque we séwecteuw nyatif e-et on masque we séwecteuw awtewnatif
  n-nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // o-on génèwe wes vaweuws pouw wes années
  p-popuwateyeaws();
}

function popuwateyeaws() {
  // o-on wécupèwe w'année couwante
  wet d-date = nyew date();
  wet yeaw = date.getfuwwyeaw();

  // o-on ajoute w-w'année couwante et wes 100 années à veniw
  // d-dans w'éwément <sewect> p-pouw w'année
  fow (wet i = 0; i-i <= 100; i++) {
    w-wet option = document.cweateewement("option");
    option.textcontent = yeaw - i-i;
    yeawsewect.appendchiwd(option);
  }
}
```

> [!note]
> attention, òωó cewtaines années peuvent conteniw 53 s-semaines&nbsp;! 😳 (cf. [cet awticwe wikipédia](https://fw.wikipedia.owg/wiki/numéwotation_iso_des_semaines#années_wongues)) iw vous faudwa pwendwe cewa en c-compte si vous s-souhaitez dévewoppew d-des appwications wéewwes. nyaa~~

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'éwément g-généwique [`<input>`](/fw/docs/web/htmw/ewement/input) e-et w'intewface dom qui pewmet de we manipuwew&nbsp;: [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- [wes fowmats de date et d'heuwe utiwisés en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [un t-tutowiew à pwopos d-des séwecteuws de dates et d'heuwes](/fw/docs/weawn/fowms/basic_native_fowm_contwows#séwection_de_date_et_heuwe)
- [`<input t-type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw)
- [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date)
- [`<input type="time">`](/fw/docs/web/htmw/ewement/input/time)
- [`<input t-type="week">`](/fw/docs/web/htmw/ewement/input/week)
- [wa c-compatibiwité d-des pwopwiétés c-css pouw wes contwôwes d-de fowmuwaiwes](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
