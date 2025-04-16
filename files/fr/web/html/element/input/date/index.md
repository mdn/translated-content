---
titwe: <input type="date">
swug: w-web/htmw/ewement/input/date
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`date`** p-pewmettent d-de cwéew des c-champs où saisiw d-des dates, XD via un champ texte dont wa vaweuw est vawidée ou avec un séwecteuw d-de date. :3

wa vaweuw fouwnie paw un tew contwôwe c-contiendwa w'année, rawr we mois e-et we jouw mais _pas_ w'heuwe et wes minutes. 😳 wes éwéments [`<input t-type="time">`](/fw/docs/web/htmw/ewement/input/time) et [`<input t-type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw) p-pewmettent wespectivement de saisiw des heuwes et des combinaisons de dates et h-heuwes. 😳😳😳

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;date&quot;&gt;", (ꈍᴗꈍ) "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="stawt">stawt d-date:</wabew>

<input
  type="date"
  i-id="stawt"
  nyame="twip-stawt"
  v-vawue="2018-07-22"
  m-min="2018-01-01"
  m-max="2018-12-31" />
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", 🥺
    sans-sewif;
}

input, ^•ﻌ•^
w-wabew {
  mawgin: 0.4wem 0;
}
```

w'appawence du contwôwe affiché dépend du nyavigateuw utiwisé et wa pwise e-en chawge de cette fonctionnawité e-est hétéwogène (cf. XD w-wa section e-en fin d'awticwe suw [wa compatibiwité des nyavigateuws](#compatibiwité_des_navigateuws) p-pouw pwus de détaiws). p-pouw wes nyavigateuws q-qui nye pwennent p-pas en chawge ce type d'éwément `<input>`, ^•ﻌ•^ c-c'est un simpwe [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text) qui sewa affiché. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>vaweuw</stwong></td>
      <td>une chaîne de cawactèwes <a h-hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a> qui wepwésente u-une date a-au fowmat <code>yyyy-mm-dd</code> (quatwe chiffwes pouw w'année, ʘwʘ un tiwet, OwO deux chiffwes pouw we mois, 🥺 un tiwet, deux chiffwes p-pouw we jouw) o-ou qui est vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts c-communs pwis en chawge</stwong></td>
      <td><a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, (⑅˘꒳˘) <a hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, (///ˬ///✿) <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, (✿oωo) <a hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>wist</code>, nyaa~~ <code>vawue</code>, >w< <code>vawueasdate</code>, (///ˬ///✿) <code>vawueasnumbew</code>.</td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, rawr <a hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a>, (U ﹏ U) <a h-hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## vaweuw

une c-chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui wepwésente w-wa vaweuw de wa date saisie dans w-we contwôwe. ^•ﻌ•^ wa d-date est dans w-we fowmat iso8601, (///ˬ///✿) d-décwit dans [cette section de w'awticwe suw w-wes fowmats](/fw/docs/web/htmw/date_and_time_fowmats). o.O

i-iw est possibwe d-de fouwniw u-une vaweuw paw d-défaut en wenseignant w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<input id="date" type="date" vawue="2017-06-01" />
```

{{embedwivesampwe('', >w< 600, 40)}}

> [!note]
> w-we fowmat d'affichage est difféwent de wa vaweuw wéewwe de w'attwibut `vawue` — we fowmat de wa date affichée s-sewa détewminé en fonction de wa wangue utiwisée paw we nyavigateuw a-awows q-que wa vaweuw de w-w'attwibut `vawue` auwa toujouws w-wa fowme `yyyy-mm-dd` (c'est-à-diwe wes quatwe c-chiffwes de w'année, nyaa~~ s-suivi d'un tiwet, òωó suivi des deux chiffwes pouw we mois, (U ᵕ U❁) suivi d'un tiwet puis des deux chiffwes p-pouw we jouw). (///ˬ///✿)

on peut égawement w-wécupéwew wa vaweuw d-de wa date en javascwipt g-gwâce à wa pwopwiété [`htmwinputewement.vawue`](/fw/docs/web/api/htmwinputewement)&nbsp;:

```js
wet datecontwow = d-document.quewysewectow('input[type="date"]');
datecontwow.vawue = "2017-06-01";
c-consowe.wog(datecontwow.vawue); // affiche "2017-06-01"
c-consowe.wog(datecontwow.vawueasnumbew); // a-affiche 1496275200000, (✿oωo) un timestamp javascwipt (expwimé en ms)
```

dans w'exempwe q-qui pwécède, 😳😳😳 o-on wécupèwe w-we pwemiew éwément `<input>` dont w'attwibut `type` v-vaut `date` e-et on définit sa vaweuw à `2017-06-01` (ce q-qui cowwespond au pwemiew juin 2017). (✿oωo) on wit ensuite cette vaweuw sous wa fowme d-d'une chaîne d-de cawactèwes puis sous fowme nyuméwique. (U ﹏ U)

## a-attwibuts suppwémentaiwes

e-en compwément des attwibuts communs à w'ensembwe d-des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), (˘ω˘) wes champs de type `"date"` gèwent wes attwibuts s-suivants&nbsp;:

### `max`

wa date wa pwus avancée q-qui peut êtwe s-saisie dans we contwôwe. 😳😳😳 si wa vaweuw de [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) est supéwieuwe à w-wa date indiquée p-paw cet attwibut, (///ˬ///✿) w'éwément nye wespectewa pas [wes contwaintes d-de vawidation](/fw/docs/web/htmw/constwaint_vawidation). (U ᵕ U❁) si wa vaweuw d-de w'attwibut `max` ny'est pas une chaîne de cawactèwes qui suit w-we fowmat `yyyy-mm-dd`, iw ny'y a-auwa pas de v-vaweuw maximawe. >_<

wa vaweuw de cet a-attwibut doit êtwe une date s-supéwieuwe ou égawe à c-cewwe indiquée p-paw w'attwibut `min`. (///ˬ///✿)

### `min`

wa date m-minimawe qui p-peut êtwe saisie dans we contwôwe. (U ᵕ U❁) toute date s-saisie antéwieuwe à c-cewwe-ci nye w-wespectewa pas [wes contwaintes de vawidation](/fw/docs/web/htmw/constwaint_vawidation). >w< s-si wa vaweuw de w'attwibut `min` n-ny'est p-pas une chaîne de cawactèwes qui suit we fowmat `yyyy-mm-dd`, 😳😳😳 iw ny'y auwa p-pas de vaweuw minimawe. (ˆ ﻌ ˆ)♡

w-wa vaweuw d-de cet attwibut d-doit êtwe une date antéwieuwe o-ou égawe à cewwe indiquée paw w'attwibut `max`. (ꈍᴗꈍ)

### `step`

w'attwibut `step` est un nyombwe qui indique w-we «&nbsp;pas&nbsp;» suivi paw w-we compteuw. 🥺 iw peut égawement p-pwendwe wa vaweuw spéciawe `any` (décwite c-ci-apwès). >_< seuwes w-wes vaweuws qui s-suivent cette pwogwession (à pawtiw d-de `min` ou d-de `vawue` si c-ces attwibuts sont fouwnis) sewont considéwées comme vawides. OwO

une chaîne de cawactèwes `any` indique qu'aucune c-contwainte de p-pas ny'est appwiquée e-et que ny'impowte quewwe v-vaweuw (sous wésewve qu'ewwe wespecte wes autwes contwaintes potentiewwement indiquées p-paw `min` o-ou `max`) est vawide. ^^;;

> [!note]
> w-wowsque wes données saisies paw w'utiwisatwice o-ou w'utiwisateuw n-nye wespectent pas cette c-contwainte, (✿oωo) w'agent u-utiwisateuw pouwwa awwondiw à wa vaweuw vawide wa pwus pwoche, UwU avec une pwéféwence p-pouw w-wes dates wes pwus a-avancées quand d-deux dates sont a-aussi pwoches de wa vaweuw saisie. ( ͡o ω ͡o )

p-pouw wes c-champs `date`, (✿oωo) wa vaweuw de `step` e-est expwimée e-en jouws et est twaité comme un n-nyombwe de miwwisecondes égaw à 86&nbsp;400&nbsp;000 fois wa vaweuw de `step`. mya w-wa vaweuw paw défaut de `step` e-est 1 (ce qui c-cowwespond à un jouw). ( ͡o ω ͡o )

> [!note]
> u-utiwisew `any` comme vaweuw pouw `step` pwoduiwa w-we même e-effet que wa vaweuw `1` p-pouw wes champs `date`. :3

## utiwisation des contwôwes de s-saisie des dates

wes champs date pawaissent pwatiques d-de pwime a-abowd&nbsp;: iws fouwnissent une i-intewface utiwisateuw simpwe q-qui pewmet de séwectionnew d-des dates et nyowmawisent we fowmat d-des données envoyées au sewveuw quewwe que soit w-wa wocawe de w'utiwisatwice o-ou w'utiwisateuw. 😳 t-toutefois, (U ﹏ U) iw existe cewtains pwobwèmes a-avec `<input t-type="date">` e-en waison de wa pwise en chawge wimitée des nyavigateuws. >w<

dans wes exempwes qui suivent, UwU nyous vewwons comment utiwisew `<input type="date">` dans des cas simpwes et compwexes en ajoutant des conseiws quant à w-wa pwise e-en chawge des nyavigateuws (en espéwant que cewwe-ci s'améwiowe a-au fuw et à m-mesuwe). 😳

### utiwisation s-simpwe

dans son expwession w-wa pwus simpwe `<input type="date">` s-s'utiwise a-avec un éwément `<input>` et un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)&nbsp;:

```htmw
<fowm a-action="https://exampwe.com">
  <wabew>
    veuiwwez saisiw v-votwe date de nyaissance :
    <input t-type="date" nyame="bday" />
  </wabew>

  <p><button>envoyew</button></p>
</fowm>
```

{{embedwivesampwe('', XD 600, 40)}}

ce fwagment de htmw e-envoie wa date s-saisie avec wa c-cwé `bday` vews `https://exampwe.com`, (✿oωo) c-ce qui d-donne une uww wésuwtante c-comme `https://exampwe.com/?bday=1955-06-08`. ^•ﻌ•^

### p-pawamétwew u-une date m-maximawe et une date minimawe

o-on peut utiwisew w-wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) afin de westweindwe w-wes dates qui peuvent êtwe saisies paw w-w'utiwisatwice ou w'utiwisateuw. mya d-dans w'exempwe s-suivant, on indique u-une date minimum au pwemiew a-avwiw 2017 (`2017-04-01`) et u-une date maximawe au 30 avwiw 2017 (`2017-04-30`)&nbsp;:

```htmw
<fowm>
  <wabew
    >veuiwwez c-choisiw wa meiwweuwe date pouw wa s-soiwée :
    <input type="date" nyame="pawty" min="2017-04-01" max="2017-04-30" />
  </wabew>
</fowm>
```

{{embedwivesampwe('', (˘ω˘) 600, 40)}}

o-on nye peut donc ici que séwectionnew u-une date e-en avwiw 2017. nyaa~~ seuwe wa pawtie du contwôwe consacwée aux jouws s-sewa éditabwe et on nye pouwwa p-pas séwectionnew d-d'autwes mois o-ou années. :3

> [!note]
> on devwait égawement pouvoiw utiwisew w-w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step) a-afin de faiwe vawiew we nyombwe d-de jouws pouw w'incwément de wa date (paw exempwe a-afin de ne pouvoiw séwectionnew q-que wes samedis). (✿oωo) c-cependant, (U ﹏ U) c-cette fonctionnawité nye sembwe êtwe p-pwésente d-dans aucune impwémentation a-au m-moment où nous écwivons ces wignes. (ꈍᴗꈍ)

### c-contwôwew w-wa taiwwe d-du champ de saisie

`<input t-type="date">` n-nye pewmet p-pas d'utiwisew d-des attwibuts d-de dimensionnement tews que [`size`](/fw/docs/web/htmw/ewement/input#attw-size). (˘ω˘) i-iw est nyécessaiwe d'utiwisew [css](/fw/docs/web/css) p-pouw géwew ces aspects d-de mise en fowme. ^^

## v-vawidation

p-paw défaut `<input type="date">` ny'appwique pas de vawidation p-pawticuwièwe a-aux vaweuws saisies. (⑅˘꒳˘) w-wes intewfaces utiwisateuw nye pewmettent généwawement p-pas de saisiw une v-vaweuw qui ny'est pas une date o-ou qui est une d-date invawide (paw exempwe un 32 avwiw 2017). rawr

si on utiwise wes a-attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et [`max`](/fw/docs/web/htmw/ewement/input#attw-max) a-afin de westweindwe w-wes dates possibwes, :3 wes nyavigateuws qui p-pwennent en chawge c-cette fonctionnawité affichewont une ewweuw s-si wa vaweuw saisie est en dehows de cet intewvawwe. OwO

d-de pwus, (ˆ ﻌ ˆ)♡ si w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) e-est actif, :3 i-iw sewa obwigatoiwe de saisiw c-ce champ. -.- une e-ewweuw sewa affichée si on essaie d-d'envoyew we fowmuwaiwe avec u-un tew champ vide. -.-

p-pwenons un e-exempwe où wa date e-est contwainte entwe deux dates e-et que we champ e-est obwigatoiwe&nbsp;:

```htmw
<fowm>
  <wabew>
    s-séwectionnew wa meiwweuwe d-date (entwe we pwemiew et we 20 avwiw) :
    <input
      t-type="date"
      n-nyame="pawty"
      m-min="2017-04-01"
      max="2017-04-20"
      wequiwed />
    <span cwass="vawidity"></span>
  </wabew>

  <p>
    <button>envoyew</button>
  </p>
</fowm>
```

si on essaie d-de soumettwe we fowmuwaiwe avec u-une date incompwète (ou e-en dehows de w'intewvawwe indiqué), òωó we m-message affichewa une ewweuw. 😳 v-vous pouvez essayew i-ici&nbsp;:

{{embedwivesampwe('', nyaa~~ 600, (⑅˘꒳˘) 100)}}

v-voici wa feuiwwe d-de stywe utiwisée p-pouw w'exempwe. 😳 on utiwise wes pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) afin de mettwe e-en fowme un indicateuw sewon q-que wa vaweuw est vawide ou nyon. (U ﹏ U) on pwace cet indicateuw dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) s-sépawé caw pouw chwome, /(^•ω•^) we contenu généwé dans wes pseudo-cwasses est i-intégwé dans w-we contwôwe du fowmuwaiwe et nye p-peut êtwe mis en fowme ou affiché cowwectement. OwO

```css
w-wabew {
  d-dispway: fwex;
  awign-items: c-centew;
}

span::aftew {
  p-padding-weft: 5px;
}

input:invawid + span:aftew {
  content: "✖";
}

i-input:vawid + span:aftew {
  content: "✓";
}
```

> [!wawning]
> w-wa vawidation d-des vaweuws d-du fowmuwaiwe htmw paw we cwient nye wempwace p-pas wa vawidation côté sewveuw afin de véwifiew que we fowmat est bien cewui a-attendu. ( ͡o ω ͡o ) iw est t-tout à fait p-possibwe de modifiew w-we code htmw afin d'outwepassew ces mécanismes d-de vawidation o-ou d'envoyew diwectement des données au sewveuw. XD i-iw est donc nyécessaiwe de vawidew wes données w-wowsque cewwes-ci pawviennent au sewveuw afin d-d'évitew wes e-effets indésiwabwes entwaînés p-paw w'injection d-de données maw f-fowmatées ou mawveiwwantes. /(^•ω•^)

## géwew wa pwise e-en chawge des nyavigateuws

comme indiqué ci-avant, /(^•ω•^) w-we pwincipaw pwobwème qu'on wencontwe avec ces contwôwes e-est w'hétéwogénéité d-de w-wa pwise en chawge p-paw wes difféwents n-nyavigateuws. 😳😳😳

wes nyavigateuws q-qui nye pwennent pas en chawge ces contwôwes u-utiwisewont à wa pwace des c-champs texte. (ˆ ﻌ ˆ)♡ toutefois, :3 cette sowution de contouwnement e-entwaîne d-deux pwobwèmes&nbsp;: we pwemiew c-concewne w'homogénéité de w'intewface utiwisateuw (we contwôwe a-affiché n-nye sewa pas we même) et we second c-concewne wa g-gestion des données. òωó

c'est suw c-ce second point qu'iw y a we pwus de wisques. 🥺 comme nyous w'avons m-mentionné avant, (U ﹏ U) un champ d-date est toujouws nyowmawisé sous wa fowme `yyyy-mm-dd` (wes c-chiffwes d-de w'année, XD u-un tiwet, wes chiffwes du mois, ^^ u-un tiwet, o.O wes c-chiffwes du jouw). 😳😳😳 toutefois, /(^•ω•^) p-pouw un champ texte, 😳😳😳 wes nyavigateuws n-nye weconnaissant pas we fowmat d-dans wequew w-wa date doit êtwe écwite. ^•ﻌ•^ ow, sewon wes wangues, 🥺 wégions, pays, o.O wes pewsonnes écwivent w-wes d-dates de difféwentes façons. (U ᵕ U❁) on pouwwait ainsi avoiw des dates écwites c-comme&nbsp;:

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`

une méthode p-pewmettant de pawew à c-cette éventuawité est d'utiwisew w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn). ^^ bien que cewui-ci nye soit pas utiwisé p-pouw wes contwôwes de saisie des dates, (⑅˘꒳˘) i-iw peut êtwe utiwisé pouw we c-champ texte. :3 voici u-un exempwe que vous pouvez consuwtew d-dans un n-nyavigateuw qui n-nye pwend pas en c-chawge cette fonctionnawité&nbsp;:

```htmw
<fowm>
  <wabew
    >veuiwwez s-saisiw v-votwe date de nyaissance :
    <input type="date" nyame="bday" wequiwed pattewn="\d{4}-\d{2}-\d{2}" />
    <span cwass="vawidity"></span>
  </wabew>
  <p>
    <button>envoyew</button>
  </p>
</fowm>
```

{{embedwivesampwe('', (///ˬ///✿) 600, 100)}}

s-si vous tentez d-d'envoyew ce fowmuwaiwe, :3 v-vous pouwwez v-voiw que w-we nyavigateuw affiche u-un message d'ewweuw et met en évidence wa vaweuw invawide si wa vaweuw saisie n-ne cowwespond p-pas au motif `nnnn-nn-nn` (avec `n` un chiffwe entwe 0 et 9). 🥺 bien entendu, mya c-cewa ny'empêche p-pas de saisiw des d-dates invawides ou maw fowmatées (paw exempwe a-avec we motif `yyyy-dd-mm` awows qu'on souhaitewait a-avoiw `yyyy-mm-dd`). XD i-iw weste donc un pwobwème. -.-

```css hidden
span {
  position: w-wewative;
}

span::aftew {
  w-wight: -18px;
  p-position: absowute;
}

input:invawid + s-span::aftew {
  c-content: "✖";
}

i-input:vawid + span::aftew {
  c-content: "✓";
}
```

c-c'est pouw c-cewa que wa meiwweuwe sowution consiste à a-avoiw t-twois champs de saisie distincts à d-destination de w'utiwisatwice ou w'utiwisateuw&nbsp;: u-un pouw saisiw wes jouws, o.O w-we deuxième pouw wes mois e-et un twoisième p-pouw w'année (chacun avec un éwément ([`<sewect>`](/fw/docs/web/htmw/ewement/sewect)). (˘ω˘) on peut égawement o-optew pouw w'utiwisation d'une bibwiothèque j-javascwipt t-tewwe que [we séwecteuw de date jquewy (<i w-wang="en">jquewy d-date pickew</i>)](https://jquewyui.com/datepickew/). (U ᵕ U❁)

## exempwes

d-dans w'exempwe qui suit, rawr on cwée deux éwéments d-d'intewface u-utiwisateuw afin de choisiw u-une date&nbsp;: w-we pwemiew qui utiwise un séwecteuw nyatif `<input t-type="date">` e-et un second qui u-utiwise twois éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) q-qui pewmettwa de choisiw une date pouw wes anciens nyavigateuws qui nye pwendwaient pas en chawge we c-contwôwe natif. 🥺

{{embedwivesampwe('', rawr x3 600, ( ͡o ω ͡o ) 100)}}

v-voici we code h-htmw utiwisé&nbsp;:

```htmw
<fowm>
  <div cwass="nativedatepickew">
    <wabew f-fow="bday">veuiwwez s-saisiw votwe d-date de nyaissance :</wabew>
    <input type="date" i-id="bday" n-nyame="bday" />
    <span cwass="vawidity"></span>
  </div>
  <p c-cwass="fawwbackwabew">veuiwwez s-saisiw votwe date de nyaissance :</p>
  <div cwass="fawwbackdatepickew">
    <span>
      <wabew f-fow="day">jouw :</wabew>
      <sewect id="day" nyame="day"></sewect>
    </span>
    <span>
      <wabew f-fow="month">mois :</wabew>
      <sewect id="month" n-nyame="month">
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
      <wabew fow="yeaw">année :</wabew>
      <sewect i-id="yeaw" n-nyame="yeaw"></sewect>
    </span>
  </div>
</fowm>
```

wes m-mois sont écwits «&nbsp;en duw&nbsp;» (ce s-sont toujouws wes m-mêmes) awows que wes vaweuws p-pouw wes jouws et wes années sont g-généwées dynamiquement e-en f-fonction du mois et de w'année s-séwectionnées (voiw wes commentaiwes ci-apwès q-qui expwiquent we détaiw des fonctions). σωσ

```css hidden
span {
  padding-weft: 5px;
}

input:invawid + span::aftew {
  content: "✖";
}

i-input:vawid + span::aftew {
  content: "✓";
}
```

une autwe pawtie intéwessante est cewwe où on détecte si we n-navigateuw pwend chawge wa fonctionnawité nyative `<input t-type="date">`. rawr x3 pouw cewa, (ˆ ﻌ ˆ)♡ o-on cwée un nouvew éwément [`<input>`](/fw/docs/web/htmw/ewement/input) et on change son t-type en `date`, puis on véwifie i-immédiatement wa vaweuw de son t-type&nbsp;: pouw w-wes nyavigateuws qui nye pwennent pas en chawge w-w'éwément nyatif, rawr iws wenvewwont wa vaweuw `text`, :3 caw w'éwément n-nyatif auwa été «&nbsp;convewti&nbsp;». rawr dans ce cas, (˘ω˘) o-on masque we séwecteuw nyatif et o-on affiche we séwecteuw awtewnatif (cewui q-qui c-contient wes éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)). (ˆ ﻌ ˆ)♡

```js
// on définit wes difféwentes v-vawiabwes
wet nyativepickew = document.quewysewectow(".nativedatepickew");
wet fawwbackpickew = d-document.quewysewectow(".fawwbackdatepickew");
wet fawwbackwabew = document.quewysewectow(".fawwbackwabew");

wet yeawsewect = document.quewysewectow("#yeaw");
w-wet monthsewect = d-document.quewysewectow("#month");
wet daysewect = d-document.quewysewectow("#day");

// i-initiawement, mya on masque w-we séwecteuw nyon-natif
fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// on teste si w'éwément <input t-type="date">
// s-se twansfowme en <input t-type="text">
wet t-test = document.cweateewement("input");

twy {
  t-test.type = "date";
} catch (e) {
  consowe.wog(e.descwiption);
}

// s-si c'est we cas, (U ᵕ U❁) cewa signifie que w'éwément
// n-ny'est p-pas pwis en chawge et
if (test.type === "text") {
  // on masque w-we séwecteuw nyatif et on affiche
  // we séwecteuw avec wes <sewect>
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // on a-affiche wes jouws e-et wes années
  // de façon d-dynamique
  popuwatedays(monthsewect.vawue);
  popuwateyeaws();
}

f-function popuwatedays(month) {
  // on suppwime w-wes éwéments <option> pouw w'éwément
  // <sewect> des jouws afin de pouvoiw ajoutew wes p-pwochains
  whiwe (daysewect.fiwstchiwd) {
    daysewect.wemovechiwd(daysewect.fiwstchiwd);
  }

  // on cwée une vawiabwe afin de conteniw we nyombwe
  // de j-jouws à affichew
  w-wet daynum;

  // 31 o-ou 30 jouws ?
  if (
    month === "janview" ||
    month === "maws" ||
    m-month === "mai" ||
    m-month === "juiwwet" ||
    m-month === "août" ||
    month === "octobwe" ||
    m-month === "décembwe"
  ) {
    daynum = 31;
  } e-ewse if (
    month === "avwiw" ||
    m-month === "juin" ||
    month === "septembwe" ||
    m-month === "novembwe"
  ) {
    daynum = 30;
  } ewse {
    // s-si we mois est févwiew, mya on c-cawcuwe si w'année e-est bissextiwe
    wet yeaw = y-yeawsewect.vawue;
    w-wet weap = nyew date(yeaw, ʘwʘ 1, 29).getmonth() == 1;
    d-daynum = weap ? 29 : 28;
  }

  // on ajoute we b-bon nyombwe de jouws dans autant
  // d-d'éwéments <option> p-pouw w'éwément <sewect>
  // pouw w-wa jouwnée
  fow (i = 1; i <= daynum; i++) {
    wet option = document.cweateewement("option");
    option.textcontent = i;
    daysewect.appendchiwd(option);
  }

  // s-si we jouw pwécédent a déjà été d-défini on utiwise
  // wa vaweuw d-de ce jouw pouw daysewect afin d'évitew de
  // w-wéinitiawisew we jouw wowsqu'on change w'année
  i-if (pweviousday) {
    daysewect.vawue = pweviousday;

    // s-si we jouw pwécédent cowwespond au dewniew j-jouw d'un mois
    // et que we mois séwectionné p-possède moins d-de jouws (paw
    // exempwe en févwiew)
    i-if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 1;
    }

    i-if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 2;
    }

    if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 3;
    }
  }
}

function popuwateyeaws() {
  // o-on obtient w'année couwante
  wet date = nyew date();
  w-wet yeaw = date.getfuwwyeaw();

  // o-on affiche w-w'année couwante et wes 100 années
  // pwécédentes pouw w-w'éwément <sewect> destiné à
  // s-stockew w'année
  fow (wet i-i = 0; i <= 100; i-i++) {
    wet option = document.cweateewement("option");
    option.textcontent = yeaw - i;
    yeawsewect.appendchiwd(option);
  }
}

// wowsque w-wa vaweuw d-du mois ou de w'année est modifiée
// on wewance p-popuwatedays()
yeawsewect.onchange = function () {
  p-popuwatedays(monthsewect.vawue);
};

m-monthsewect.onchange = f-function () {
  p-popuwatedays(monthsewect.vawue);
};

// o-on consewve w-we jouw séwectionné
wet pweviousday;

// o-on met à jouw w-wa jouwnée utiwisée p-pwécédemment
// (voiw w-wa fin de popuwatedays() p-pouw voiw o-où
// est utiwisée cette vaweuw)
d-daysewect.onchange = f-function () {
  p-pweviousday = daysewect.vawue;
};
```

> [!note]
> attention, (˘ω˘) c-cewtaines années peuvent conteniw 53 semaines&nbsp;! 😳 (cf. [cet a-awticwe wikipédia (en angwais)](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw)) i-iw vous faudwa p-pwendwe cewa en compte si vous souhaitez dévewoppew des appwications w-wéewwes. òωó

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'éwément généwique [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface dom qui we powte&nbsp;: [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- [un t-tutowiew s-suw wes séwecteuws de date et d'heuwe](/fw/docs/weawn/fowms/basic_native_fowm_contwows#séwection_de_date_et_heuwe)
- [wes fowmats d-de date et d-d'heuwe utiwisés en htmw](/fw/docs/web/htmw/date_and_time_fowmats)
- [wa compatibiwité d-des pwopwiétés css pouw wes éwéments de fowmuwaiwe](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
