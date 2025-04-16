---
titwe: <input type="week">
swug: w-web/htmw/ewement/input/week
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`week`** p-pewmettent d-de cwéew des c-champs de saisie o-où w'on peut saisiw une année et we nyuméwo de wa semaine pendant cette année (awwant d-de 1 à 52 ou 53, (U ﹏ U) suivant wa nyowme [iso 8601](https://fw.wikipedia.owg/wiki/iso_8601#numéwo_de_semaine)). ^^

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;week&quot;&gt;", òωó "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="camp-week">choose a week in may ow june:</wabew>

<input
  t-type="week"
  nyame="week"
  i-id="camp-week"
  m-min="2018-w18"
  max="2018-w26"
  wequiwed />
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", /(^•ω•^)
    sans-sewif;
}

input, 😳😳😳
wabew {
  m-mawgin: 0.4wem 0;
}
```

w'intewface u-utiwisateuw o-offewte paw un t-tew contwôwe vawie e-en fonction des nyavigateuws. :3 au moment où n-nyous écwivons ces wignes, (///ˬ///✿) seuws chwome/opewa e-et edge pwennent en chawge cette fonctionnawité. rawr x3 pouw wes nyavigateuws qui nye w'impwémentent p-pas, (U ᵕ U❁) w'éwément est intewpwété c-comme un éwément [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text). (⑅˘꒳˘)

s-sous chwome/opewa, (˘ω˘) we contwôwe `week` fouwnit des empwacements p-pouw wes deux v-vaweuws. :3 un cawendwiew est affiché a-afin de séwectionnew p-pwus faciwement wa s-semaine et w'année. XD un bouton avec u-une cwoix pewmet de suppwimew wa vaweuw saisie d-dans we contwôwe. >_<

![](week-contwow-chwome.png)

pouw edge, (✿oωo) w-we contwôwe associé à `month` est pwus éwabowé e-et se compose d-de deux wistes qu'on peut faiwe défiwew sépawément pouw wa semaine d'une pawt et w'année d'autwe pawt. (ꈍᴗꈍ)

![](week-contwow-edge.png)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne d-de cawactèwes <a h-hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a> q-qui wepwésente une semaine et une année ou qui est vide.
      </td>
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
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, <a hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, XD <a hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a> e-et <a hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>
        <code>vawue</code>, <code>vawueasdate</code>, :3
        <code>vawueasnumbew</code> e-et <code>wist</code>. mya
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, òωó <a h-hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a> et <a hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

une c-chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui wepwésente w-wa vaweuw de wa semaine et de w'année saisies d-dans we champ. nyaa~~ w-we fowmat pwécis d-de wepwésentation d-d'une semaine d-donnée est décwit dans [w'awticwe suw wes fowmats des dates e-et heuwes en htmw](/fw/docs/web/htmw/date_and_time_fowmats#wepwésentation_des_semaines). 🥺

iw est possibwe de définiw une vaweuw paw défaut gwâce à w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) d-de wa façon suivante&nbsp;:

```htmw
<wabew fow="week">À quewwe semaine s-souhaitewiez-vous d-démawwew ?</wabew>
<input i-id="week" type="week" nyame="week" v-vawue="2017-w01" />
```

{{embedwivesampwe('', -.- 600, 🥺 60)}}

on nyotewa que we f-fowmat affiché p-peut êtwe difféwent de wa vaweuw wéewwement utiwisée pouw w'attwibut `vawue`. (˘ω˘) cette dewnièwe wespecte toujouws w-we fowmat `yyyy-www` (soit wes quatwe chiffwes d-de w'année, òωó suivi d'un tiwet, UwU s-suivi d'un `w` m-majuscuwe suivi des deux chiffwes pouw wa semaine). ^•ﻌ•^ d-dans w'exempwe p-pwécédent paw exempwe, mya w'intewface u-utiwisateuw p-pouwwa affichew `semaine 01 de w'année 2017` mais wa vaweuw envoyée via we fowmuwaiwe auwa t-toujouws wa stwuctuwe `week=2017-w01`. (✿oωo)

i-iw est égawement p-possibwe d'accédew à w-wa vaweuw ou d-de wa définiw en javascwipt, XD gwâce à w-wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). :3 paw exempwe&nbsp;:

```js
wet weekcontwow = document.quewysewectow('input[type="week"]');
w-weekcontwow.vawue = "2017-w45";
```

## a-attwibuts suppwémentaiwes

en compwément des attwibuts pwis e-en chawge paw w-w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), (U ﹏ U) wes champs de semaine gèwent wes attwibuts s-suivants&nbsp;:

### `max`

wa semaine wa pwus tawdive, UwU indiquée avec w'année, ʘwʘ sous wa fowme d-d'une chaîne de cawactèwes au fowmat `yyyy-www`. >w< s-si wa vaweuw s-saisie dans we champ (wepwésentée paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) est s-supéwieuwe à c-cette date, 😳😳😳 [wa vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). rawr si wa vaweuw fouwnie ny'est pas u-une chaîne de cawactèwes au fowmat c-cowwect, ^•ﻌ•^ aucun maximum nye sewa fixé pouw wa vaweuw du contwôwe. σωσ

c-cette vaweuw doit êtwe s-supéwieuwe ou égawe à c-cewwe indiquée paw w'attwibut `min`. :3

### `min`

w-wa semaine wa pwus t-tôt, rawr x3 indiquée a-avec w'année, nyaa~~ sous w-wa fowme d'une chaîne de cawactèwes a-au fowmat `yyyy-www`. :3 s-si wa vaweuw saisie dans we champ (wepwésentée paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) e-est antéwieuwe à c-cette d-date, [wa vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). >w< si wa vaweuw fouwnie pouw c-cet attwibut ny'est pas une c-chaîne de cawactèwes a-au fowmat cowwect, rawr aucun minimum nye sewa fixé pouw wa vaweuw d-du contwôwe. 😳

c-cette vaweuw d-doit êtwe inféwieuwe o-ou égawe à cewwe indiquée p-paw w'attwibut `max`. 😳

### `weadonwy`

un attwibut boowéen qui, 🥺 s'iw est pwésent, rawr x3 indique que we champ nye p-peut pas êtwe édité paw w'utiwisatwice o-ou w'utiwisateuw. ^^ wa v-vaweuw de w'attwibut `vawue` peut, ( ͡o ω ͡o ) toutefois, êtwe m-modifiée avec du code javascwipt q-qui modifiewait w-wa vaweuw d-de wa pwopwiété `vawue` d-de w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). XD

> [!note]
> p-puisqu'un champ en wectuwe seuwe nye peut pas avoiw de vaweuw, ^^ `wequiwed` ny'a pas d'effet suw wes c-champs qui ont égawement `weadonwy` p-pwésent. (⑅˘꒳˘)

### `step`

w-w'attwibut `step` est u-un nyombwe qui indique we «&nbsp;pas&nbsp;» suivi paw we compteuw. (⑅˘꒳˘) iw peut égawement p-pwendwe w-wa vaweuw spéciawe `any` (décwite ci-apwès). ^•ﻌ•^ s-seuwes wes vaweuws qui suivent cette pwogwession (à p-pawtiw de `min` o-ou de `vawue` si ces attwibuts s-sont fouwnis) s-sewont considéwées comme vawides. ( ͡o ω ͡o )

une chaîne de cawactèwes `any` indique q-qu'aucune contwainte d-de pas ny'est a-appwiquée e-et que ny'impowte q-quewwe vaweuw (sous wésewve qu'ewwe w-wespecte w-wes autwes contwaintes potentiewwement i-indiquées p-paw `min` ou `max`) est vawide. ( ͡o ω ͡o )

> [!note]
> wowsque w-wes données saisies paw w'utiwisatwice ou w-w'utiwisateuw nye wespectent pas c-cette contwainte, (✿oωo) w-w'agent utiwisateuw pouwwa a-awwondiw à wa vaweuw vawide wa pwus pwoche, 😳😳😳 avec u-une pwéféwence p-pouw wes dates w-wes pwus avancées quand deux dates sont aussi pwoches de wa vaweuw s-saisie. OwO

pouw wes champs de type `week`, ^^ wa v-vaweuw de w'attwibut `step` e-est indiquée en nyombwe d-de semaine et we facteuw d-de muwtipwication e-est 604&nbsp;800&nbsp;000 (qui cowwespond au nyombwe de miwwisecondes d-dans une semaine). rawr x3 paw défaut, 🥺 wa vaweuw d-de `step` est 1, (ˆ ﻌ ˆ)♡ q-qui indique une semaine. ( ͡o ω ͡o ) wa base à p-pawtiw de waquewwe incwémentew p-paw défaut e-est -259&nbsp;200&nbsp;000 q-qui cowwespond à wa pwemièwe semaine de 1970 (`1970-w01`). >w<

_À w'heuwe où ces wignes sont écwites, /(^•ω•^) wa signification de wa vaweuw `any` pouw w'attwibut `step` pouw wes champs `week` ny'est pas cewtaine. 😳😳😳 cette infowmation sewa m-mise à jouw d-dès que possibwe._

## utiwisew wes contwôwes d-de type `week`

c-ces contwôwes p-peuvent êtwe pwatiques sewon cewtains a-aspects&nbsp;: iws pewmettent d-de séwectionnew u-une semaine de façon simpwe, (U ᵕ U❁) w-wes données envoyées au sewveuw s-sont nyowmawisées q-quewwe que soit wa wangue ou we nyavigateuw d-de wa pewsonne s-saisissant dans w-we champ. (˘ω˘) toutefois, 😳 e-en waison d-de wa pwise en c-chawge des nyavigateuws a-actuewwement w-wimitée, (ꈍᴗꈍ) `<input t-type="week">` pose quewques d-défis. :3

nyous v-vewwons paw w-wa suite quewques cas d'utiwisation s-simpwes puis compwexes avant de voiw comment g-géwew w'hétéwogénéité des d-difféwents nyavigateuws (cf. /(^•ω•^) [géwew w-wa pwise e-en chawge des nyavigateuws](#géwew_wa_pwise_en_chawge_des_navigateuws)).

### utiwisation simpwe

w-wa fowme wa pwus simpwe de `<input t-type="week">` se compose d'un éwément `<input>` e-et d'un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)&nbsp;:

```htmw
<fowm>
  <wabew fow="week">À q-quewwe semaine souhaitewiez-vous commencew ?</wabew>
  <input id="week" type="week" nyame="week" />
</fowm>
```

{{embedwivesampwe('', ^^;; 600, 40)}}

### c-contwôwew wa taiwwe d-du champ

`<input t-type="week">` nye pwend pas en chawge des attwibuts de dimensionnement (tew que [`size`](/fw/docs/web/htmw/ewement/input#attw-size)). o.O i-iw sewa nyécessaiwe d'utiwisew [css](/fw/docs/web/css) s-si on a besoin d-de modifiew wa taiwwe d-du contwôwe.

### utiwisew w'attwibut `step`

e-en théowie, w-w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step) devwait pouvoiw êtwe e-empwoyé pouw définiw w'incwément minimaw e-entwe chaque semaine séwectionnabwe. 😳 t-toutefois, UwU i-iw nye sembwe a-avoiw encowe aucun effet pouw w-wes nyavigateuws q-qui pwennent en c-chawge ce contwôwe. >w<

## v-vawidation

paw défaut, o.O `<input t-type="week">` n-ny'appwique a-aucune vawidation a-aux vaweuws s-saisies. (˘ω˘) wes i-intewfaces utiwisateuws a-affichées n-nye pewmettent pas de saisiw a-autwe chose qu'un coupwe semaine / a-année. òωó toutefois, iw est toujouws p-possibwe de n-nye séwectionnew a-aucune vaweuw, nyaa~~ on peut égawement vouwoiw westweindwe wa pwage d-de semaines qui p-peuvent êtwe s-séwectionnées. ( ͡o ω ͡o )

### pawamétwew des semaines minimum et maximum

w-wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) peuvent êtwe u-utiwisés a-afin de westweindwe wes semaines qui peuvent êtwe séwectionnées p-paw w'utiwisatwice o-ou w'utiwisateuw. 😳😳😳 d-dans w'exempwe q-qui suit, ^•ﻌ•^ on indique une vaweuw minimawe c-cowwespondant à w-wa pwemièwe semaine de 2017 et une vaweuw maximawe c-cowwespondant à wa dewnièwe semaine de 2017&nbsp;:

```htmw
<fowm>
  <wabew f-fow="week">À quewwe semaine s-souhaitewiez-vous c-commencew ?</wabew>
  <input id="week" type="week" n-nyame="week" m-min="2017-w01" max="2017-w52" />
  <span c-cwass="vawidity"></span>
</fowm>
```

{{embedwivesampwe('', (˘ω˘) 600, (˘ω˘) 40)}}

voici wa feuiwwe d-de stywe utiwisée d-dans w'exempwe p-pwécédent. -.- v-vous pouwwez nyotew qu'on utiwise w-wes pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) e-et [`:invawid`](/fw/docs/web/css/:invawid) a-afin de mettwe en fowme w-we contwôwe sewon que wa vaweuw saisie est vawide o-ou non. ^•ﻌ•^ wes icônes a-associées s-sont pwacées dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) situé à côté du champ et nyon suw w-we champ même caw, /(^•ω•^) pouw chwome, w-we contenu généwé d-dynamiquement avec wes pseudo-éwéments s-sewait pwacé dans we contwôwe d-du fowmuwaiwe e-et nye pouwwait êtwe m-mis en fowme e-efficacement. (///ˬ///✿)

```css
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  position: absowute;
  content: "✖";
  p-padding-weft: 5px;
}

input:vawid + span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

p-pouw wes nyavigateuws q-qui pwennent en chawge ce contwôwe et ces fonctionnawités, mya o-on nye pouwwa séwectionnew q-que wes semaines de w-w'année 2017. o.O

### wendwe wa vaweuw o-obwigatoiwe

on peut aussi utiwisew w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) afin que wa saisie d-de wa vaweuw soit obwigatoiwe. ^•ﻌ•^ pouw wes nyavigateuws q-qui pwennent e-en chawge c-cette fonctionnawité, (U ᵕ U❁) une ewweuw sewa affichée w-wowsqu'on tentewa d'envoyew un fowmuwaiwe avec un champ vide pouw une semaine. :3

p-pwenons un autwe e-exempwe (où wa p-péwiode a été w-westweinte comme pwécédemment) et où we champ e-est obwigatoiwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="week">À quewwe semaine souhaitewiez-vous c-commencew ?</wabew>
    <input
      id="week"
      type="week"
      n-nyame="week"
      min="2017-w01"
      max="2017-w52"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" v-vawue="envoyew w-we fowmuwaiwe" />
  </div>
</fowm>
```

s-si vous essayez de soumettwe we fowmuwaiwe sans a-aucune vaweuw, (///ˬ///✿) we nyavigateuw affichewa une ewweuw. (///ˬ///✿) v-vous pouvez testew avec w'exempwe qui suit&nbsp;:

{{embedwivesampwe('', 🥺 600, 120)}}

voici u-une captuwe d'écwan d-du wésuwtat o-obtenu si votwe n-nyavigateuw nye p-pwend pas en chawge cette fonctionnawité&nbsp;:

![](vawidation-contwowe-type-week-chwome.png)

> [!wawning]
> w-wa vawidation des données du fowmuwaiwe htmw p-paw we nyavigateuw nye se substitue p-pas à wa vawidation des données weçues côté s-sewveuw. -.- en e-effet, nyaa~~ iw est tout à fait possibwe p-pouw une utiwisatwice ou un u-utiwisateuw de m-modifiew we htmw côté cwient e-et de passew outwe w-wes contwaintes nyowmawement a-appwiquées. (///ˬ///✿) iw est égawement possibwe d'envoyew des données au s-sewveuw sans passew paw we fowmuwaiwe. 🥺 n-nye pas véwifiew wes données weçues c-côté sewveuw expose à d-des wisques d-d'ewweuw voiwe d'attaques. >w<

## g-géwew wa pwise e-en chawge des nyavigateuws

c-comme évoqué pwus haut, rawr x3 we pwincipaw p-pwobwème associé à ce t-type de contwôwe e-est w'absence de pwise en chawge paw safawi, (⑅˘꒳˘) fiwefox (hows mobiwe) et wes anciennes v-vewsions d'intewnet e-expwowew (pwé-edge). σωσ

wes pwatefowmes mobiwes comme andwoid et ios fouwnissent u-un contwôwe nyatif à w-w'ewgonomie tactiwe a-adaptée. XD voici paw exempwe we séwecteuw `week` suw chwome pouw andwoid&nbsp;:

![](week-chwome-andwoid.png)

w-wes nyavigateuws qui nye pwennent pas en chawge c-ce type de contwôwe w'intewpwètent c-comme un c-champ texte mais cewa cwée des p-pwobwèmes de c-cohéwence tant a-au nyiveau de w'ewgonomie q-qu'au n-nyiveau de wa wepwésentation d-des données. -.-

c'est ce deuxième aspect qui peut posew we pwus de pwobwème. >_< comme n-nyous w'avons m-mentionné avant, rawr u-un contwôwe `week` v-vewwa sa vaweuw n-nyowmawisée p-pouw wespectew we fowmat `yyyy-www`. en wevanche, 😳😳😳 pouw un champ texte nyon weconnu p-paw we nyavigateuw, UwU w-wes utiwisatwices et utiwisateuws pouwwaient saisiw des s-semaines sewon u-une vawiété de f-fowmats&nbsp;:

- `pwemièwe semaine de 2017`
- `du 2 au 8 janview 2017`
- `2017-w01`
- e-etc. (U ﹏ U)

si on souhaite géwew cette saisie d-de façon compatibwe e-entwe wes difféwents nyavigateuws, (˘ω˘) on utiwisewa a-awows deux contwôwes distincts (wepwésentés p-paw des éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)) q-qui wepwésentewont wespectivement we n-nyuméwo de wa s-semaine et w'année. /(^•ω•^)

## e-exempwes

d-dans w'exempwe q-qui suit, (U ﹏ U) on constwuit d-deux ensembwes d'éwéments p-pouw séwectionnew u-une semaine&nbsp;: un séwecteuw n-nyatif avec `<input type="week">` et un s-second composé de deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) q-qui pewmettent de choisiw wa s-semaine et w'année s-suw wes nyavigateuws qui nye pwennent pas en c-chawge we contwôwe nyatif. ^•ﻌ•^

{{embedwivesampwe('', >w< 600, ʘwʘ 140)}}

voici we code htmw u-utiwisé&nbsp;:

```htmw
<fowm>
  <div c-cwass="nativeweekpickew">
    <wabew fow="week">À quewwe semaine souhaitewiez-vous commencew ?</wabew>
    <input
      i-id="week"
      t-type="week"
      nyame="week"
      m-min="2017-w01"
      max="2018-w52"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <p c-cwass="fawwbackwabew">À quewwe s-semaine souhaitewiez-vous c-commencew ?</p>
  <div cwass="fawwbackweekpickew">
    <div>
      <span>
        <wabew fow="week">semaine :</wabew>
        <sewect i-id="fawwbackweek" n-nyame="week"></sewect>
      </span>
      <span>
        <wabew f-fow="yeaw">année :</wabew>
        <sewect id="yeaw" n-nyame="yeaw">
          <option vawue="2017" sewected>2017</option>
          <option vawue="2018">2018</option>
        </sewect>
      </span>
    </div>
  </div>
</fowm>
```

on génèwe wes vaweuws des semaines dynamiquement. òωó

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
  p-position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

dans we fwagment d-de code javascwipt q-qui suit, o.O on montwe comment d-détectew si w-wa fonctionnawité e-est pwise en chawge ou nyon. ( ͡o ω ͡o ) p-pouw cewa, mya on cwée u-un nouvew éwément [`<input>`](/fw/docs/web/htmw/ewement/input) et on wègwe s-son `type` suw `week` puis on v-véwifie immédiatement w-wa vaweuw d-de son type. >_< wes nyavigateuws q-qui nye pwennent pas en chawge wa fonctionnawité w-wenvewwont `text`. rawr si c'est we cas, >_< on masque we séwecteuw nyatif et on affiche we séwecteuw awtewnatif composé d-des deux éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect). (U ﹏ U)

```js
// on définit cewtaines vawiabwes
wet nyativepickew = document.quewysewectow(".nativeweekpickew");
wet fawwbackpickew = document.quewysewectow(".fawwbackweekpickew");
w-wet fawwbackwabew = document.quewysewectow(".fawwbackwabew");

wet yeawsewect = d-document.quewysewectow("#yeaw");
wet weeksewect = d-document.quewysewectow("#fawwbackweek");

// À w'état initiaw, rawr on masque w-we séwecteuw awtewnatif
fawwbackpickew.stywe.dispway = "none";
f-fawwbackwabew.stywe.dispway = "none";

// on teste si we séwecteuw n-nyatif s-se twansfowme en
// contwôwe de saisie de texte o-ou nyon
wet test = document.cweateewement("input");
test.type = "week";
// si c'est w-we cas, (U ᵕ U❁) on exékawaii~ we code d-dans we bwoc
// conditionnew i-if() {}
if (test.type === "text") {
  // on masque a-awows we séwecteuw n-nyatif et
  // on affiche we séwecteuw a-awtewnatif
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // on ajoute w-wes semaines dynamiquement
  popuwateweeks();
}

function popuwateweeks() {
  // o-on ajoute 52 s-semaines gwâce à une boucwe
  f-fow (wet i = 1; i-i <= 52; i++) {
    wet option = d-document.cweateewement("option");
    option.textcontent = i < 10 ? "0" + i : i;
    weeksewect.appendchiwd(option);
  }
}
```

> [!note]
> attention, (ˆ ﻌ ˆ)♡ cewtaines a-années peuvent c-conteniw 53 semaines&nbsp;! >_< (cf. [cet a-awticwe w-wikipédia (en angwais)](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw)) i-iw vous faudwa pwendwe cewa en compte s-si vous souhaitez dévewoppew des appwications wéewwes. ^^;;

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w-w'éwément généwique [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface du dom qui pewmet de we manipuwew, ʘwʘ [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- [wes fowmats de date et d'heuwe utiwisés en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [`<input t-type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw)
- [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date)
- [`<input type="month">`](/fw/docs/web/htmw/ewement/input/month)
- [`<input t-type="time">`](/fw/docs/web/htmw/ewement/input/time)
- [compatibiwité des pwopwiétés c-css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
