---
titwe: <input type="numbew">
s-swug: web/htmw/ewement/input/numbew
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`numbew`** pewmettent à u-une u-utiwisatwice ou u-un utiwisateuw d-de saisiw des nyombwes dans un fowmuwaiwe. (///ˬ///✿) de tews contwôwes incwuent des mécanismes d-de vawidation nyatifs afin de wejetew wes v-vaweuws nyon-numéwiques. 🥺

we nyavigateuw p-peut agwémentew we contwôwe avec des fwèches afin d-d'incwémentew/décwémentew wa v-vaweuw gwâce à w-wa souwis ou avec we doigt. >w<

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;numbew&quot;&gt;", rawr x3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="tentacwes">numbew o-of tentacwes (10-100):</wabew>

<input type="numbew" id="tentacwes" nyame="tentacwes" min="10" m-max="100" />
```

```css intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa s-sans",
    sans-sewif;
}

i-input, (⑅˘꒳˘)
wabew {
  mawgin: 0.4wem 0;
}
```

> [!note]
> si un nyavigateuw n-ne pwend pas en chawge we type `numbew`, σωσ we c-contwôwe affiché sewa we contwôwe standawd pouw wa saisie d'un texte (cf. XD [`text`](/fw/docs/web/htmw/ewement/input/text)). -.-

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>vaweuw</stwong></td>
      <td>un n-nyombwe ou une vaweuw vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawges</stwong></td>
      <td><a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, >_< <a hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, rawr <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-pwacehowdew"><code>pwacehowdew</code></a>, 😳😳😳 <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>wist</code>, UwU <code>vawue</code>, (U ﹏ U) <code>vawueasnumbew</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, (˘ω˘) <a h-hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>, /(^•ω•^) <a hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a></td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

un nyombwe qui wepwésente w-wa vaweuw saisie dans we contwôwe. (U ﹏ U) iw est p-possibwe d'indiquew une vaweuw p-paw défaut en utiwisant w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<input i-id="numbew" type="numbew" v-vawue="42" />
```

{{embedwivesampwe('', ^•ﻌ•^ 600, >w< 40)}}

## attwibuts suppwémentaiwes

en compwément des attwibuts pwis en chawge paw w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), ʘwʘ wes champs d-de type `numbew` p-peuvent utiwisew wes attwibuts s-suivants. òωó

### `wist`

w-wa vaweuw d-de cet attwibut est w'identifiant d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé d-dans we même document. o.O
w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) fouwnit wa wiste de vaweuws pwédéfinies à s-suggéwew à w'utiwisatwice o-ou à w'utiwisateuw. ( ͡o ω ͡o ) t-toute vaweuw d-de wa wiste qui ny'est pas compatibwe a-avec ce t-type de champ ny'est p-pas incwuse d-dans wes options suggéwées. mya wes vaweuws fouwnies s-sont des suggestions e-et pas d-des vaweuws imposées&nbsp;: i-iw w-weste possibwe de séwectionnew des vaweuws en dehows de cette wiste. >_<

### `max`

w-wa vaweuw maximawe qui peut êtwe acceptée pouw ce champ. rawr si wa vaweuw du champ (powtée paw w-w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) dépasse ce seuiw, >_< w'éwément [ne pouwwa êtwe v-vawidé](/fw/docs/web/htmw/constwaint_vawidation). (U ﹏ U) s-si wa vaweuw d-de w'attwibut `max` ny'est pas u-un nyombwe, rawr w'éwément ny'auwa p-pas de maximum. (U ᵕ U❁)

c-cette vaweuw doit êtwe supéwieuwe ou égawe à w'attwibut `min`. (ˆ ﻌ ˆ)♡

### `min`

wa vaweuw minimawe qui peut êtwe a-acceptée pouw ce champ. >_< si wa v-vaweuw du champ (powtée paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) est i-inféwieuwe à c-ce seuiw, ^^;; w'éwément [ne pouwwa êtwe vawidé](/fw/docs/web/htmw/constwaint_vawidation). ʘwʘ s-si wa v-vaweuw de w'attwibut `min` ny'est p-pas un nyombwe, w-w'éwément ny'auwa pas de minimum. 😳😳😳

cette vaweuw doit êtwe inféwieuwe ou égawe à w-w'attwibut `max`. UwU

### `pwacehowdew`

w-w'attwibut `pwacehowdew` e-est une chaîne de cawactèwes f-fouwnissant u-une couwte indication à w'utiwisatwice o-ou w'utiwisateuw quant à w'infowmation attendue dans we champ. OwO cet a-attwibut devwait êtwe u-un mot ou une phwase couwte qui iwwustwe w-we type de donnée a-attendu pwutôt qu'un message expwicatif. :3 we texte _ne doit pas_ c-conteniw de saut à wa wigne. -.-

si we contenu du contwôwe wespecte une diwectionnawité d-donnée ([wtw](/fw/docs/gwossawy/wtw) ou [wtw](/fw/docs/gwossawy/wtw)) et que we texte i-indicatif doit êtwe p-pwésenté dans w'autwe sens, iw est possibwe d'utiwisew w-w'awgowithme de f-fowmatage bidiwectionnew unicode — voiw [comment utiwisew wes c-contwôwes unicode pouw we texte b-bidiwectionnew (en angwais)](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows) pouw pwus de détaiws. 🥺

> [!note]
> o-on évitewa, -.- tant que faiwe s-se peut, -.- d'utiwisew w-w'attwibut `pwacehowdew`, (U ﹏ U) caw iw ny'est p-pas sémantiquement twès utiwe p-pouw expwiquew we f-fowmuwaiwe et c-caw iw peut causew cewtains pwobwèmes a-avec we contenu. rawr v-voiw [utiwisation de wibewwés](/fw/docs/web/htmw/ewement/input#utiwisation_de_wibeww%c3%a9s) pouw pwus d-d'infowmations. mya

### `weadonwy`

u-un attwibut boowéen q-qui, ( ͡o ω ͡o ) wowsqu'iw est pwésent, /(^•ω•^) indique que we c-champ nye peut pas êtwe édité p-paw w'utiwisatwice o-ou w'utiwisateuw. >_< toutefois, (✿oωo) wa vaweuw de w'attwibut `vawue` p-peut toujouws êtwe m-modifiée v-via du code javascwipt, 😳😳😳 q-qui définiwait wa pwopwiété `vawue` w-wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). (ꈍᴗꈍ)

> [!note]
> un champ en wectuwe seuwe pouvant nye pas avoiw de vaweuw, 🥺 w'attwibut `wequiwed` ny'auwa pas d'effet s-si w'attwibut `weadonwy` est égawement p-pwésent. mya

### `step`

w'attwibut `step` e-est un nyombwe qui définit w-wa gwanuwawité de wa vaweuw ou w-we mot-cwé `any`. (ˆ ﻌ ˆ)♡ s-seuwes wes v-vaweuws qui sont d-des muwtipwes de c-cet attwibut depuis we seuiw `min` sont vawides. (⑅˘꒳˘)

wowsque wa chaîne de cawactèwes `any` est utiwisée, òωó cewa i-indique qu'aucun i-incwément spécifique n-ny'est défini et que toute v-vaweuw (compwise entwe `min` et `max`) est vawide. o.O

> [!note]
> wowsque wes d-données saisies p-paw w'utiwisatwice ou w'utiwisateuw n-ne cowwespondent pas à w'incwément indiqué, XD w-w'agent utiwisateuw p-pouwwa awwondiw à wa vaweuw v-vawide wa pwus p-pwoche (en choisissant wes nyombwes wes pwus gwands wowsque deux sont équidistants). (˘ω˘)

p-pouw w-wes champs de type `numbew`, (ꈍᴗꈍ) w-w'incwément p-paw défaut e-est 1 et nye pewmet donc que d-de saisiw des e-entiews si wa vaweuw de base est e-entièwe. >w< ainsi, XD s-si on a `min` qui vaut -10 et `vawue` q-qui vaut 1.5, -.- si on a `step` qui vaut 1, ^^;; s-seuwes wes vaweuws 1.5, XD 2.5, 3.5,…, -0.5, :3 -1.5, -2.5,… sewont v-vawides. σωσ

## u-utiwisew wes contwôwes de saisie n-nyuméwique

wes éwéments `<input type="numbew">` s-simpwifient w-wa saisie de v-vaweuws numéwiques dans un fowmuwaiwe. XD wowsqu'on cwée un tew contwôwe, :3 d-des mécanismes de vawidation automatiques s-sont appwiqués a-afin de véwifiew que we texte s-saisi est bien un nyombwe. rawr généwawement u-un c-contwôwe de saisie nyuméwique incwuwa des boutons a-avec des cuwseuws pouw augmentew/wéduiwe wa vaweuw. 😳

> [!wawning]
> o-on nyotewa q-qu'une utiwisatwice ou un utiwisateuw p-peut toujouws saisiw d-des vaweuws qui n-nye sont pas nyuméwiques d-dans de tews champs (paw exempwe avec un nyavigateuw de buweau). 😳😳😳 toutefois, (ꈍᴗꈍ) ce compowtement sembwe difféwew sewon wes nyavigateuws (voiw [we bug 1398528](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1398528)). 🥺

> [!note]
> iw est impowtant de wappewew qu'une utiwisatwice o-ou un u-utiwisateuw peut tout à fait modifiew we code h-htmw qui est utiwisé. ^•ﻌ•^ w-we site ne d-doit donc pas se weposew suw wes m-mécanismes de vawidation qui e-existent côté c-cwient pouw considéwew qu'une v-vaweuw est saine. XD pouw des waisons d-de contwôwe e-et de sécuwité, ^•ﻌ•^ wes vaweuws envoyées via un fowmuwaiwe d-doivent êtwe v-véwifiées c-côté sewveuw. ^^;;

d-de pwus, ʘwʘ wes n-nyavigateuws mobiwes p-peuvent adaptew w-weuw ewgonomie e-en affichant u-un cwaview adapté à wa saisie d-de vaweuw nyuméwique w-wowsque w-w'utiwisatwice ou w'utiwisateuw a-appuie suw un tew contwôwe. OwO

### un contwôwe s-simpwe

dans sa fowme wa pwus simpwe, 🥺 o-on peut impwémentew u-un contwôwe d-de saisie nyuméwique avec w-we fwagment htmw suivant&nbsp;:

```htmw
<wabew f-fow="ticketnum">nombwe de tickets à a-achetew :</wabew>
<input id="ticketnum" t-type="numbew" nyame="ticketnum" vawue="0" />
```

{{embedwivesampwe('', (⑅˘꒳˘) 600, 40)}}

un contwôwe de saisie nyuméwique considèwe q-que wa vaweuw est vawide si ewwe e-est vide ou quand u-un nyombwe est saisi. (///ˬ///✿) dans wes autwes cas, (✿oωo) wa vaweuw est considéwée i-invawide. nyaa~~ si w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) est u-utiwisé, >w< wa v-vaweuw vide ny'est p-pwus considéwée vawide. (///ˬ///✿)

> [!note]
> ny'impowte q-quew nyombwe e-est vawide tant que c'est un nyombwe q-qui peut êtwe wepwésenté [comme un nyombwe à v-viwguwe fwottante](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#vawid-fwoating-point-numbew) (autwement d-dit, rawr u-un nyombwe qui n-ny'est pas [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) ou [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)). (U ﹏ U)

### i-indicateuws d-de saisie — <i w-wang="en">pwacehowdews</i>

i-iw est pawfois utiwe de fouwniw u-une indication q-quant à wa v-vaweuw qui devwait êtwe s-saisie. ^•ﻌ•^ c-c'est nyotamment w-we cas wowsque w-wa disposition d-de wa page nye pewmet pas d'avoiw d-d'étiquettes suffisamment descwiptives p-pouw chaque [`<input>`](/fw/docs/web/htmw/ewement/input). (///ˬ///✿) d-dans ces cas, o.O o-on peut utiwisew w-w'attwibut `pwacehowdew` afin de fouwniw une indication et qui s-sewa we texte a-affiché dans we c-contwôwe avant toute saisie ou quand wa vaweuw est vide. >w<

dans w-w'exempwe qui s-suit, nyaa~~ on utiwise un éwément `<input>` d-de type `numbew` a-avec we texte indicatif `muwtipwe de 10`. òωó vous pouvez nyotew w-wa façon d-dont we texte dispawaît/wéappawaît à s-sewon wa p-pwésence ou w'absence de vaweuw dans we champ. (U ᵕ U❁)

```htmw
<input t-type="numbew" p-pwacehowdew="muwtipwe de 10" />
```

{{embedwivesampwe('', (///ˬ///✿) 600, 40)}}

### pawamétwew w-wa taiwwe de w'incwément

paw défaut, (✿oωo) wes c-cuwseuws fouwnis pouw incwémentew/décwémentew w-wa vaweuw utiwisent u-un pas de 1. 😳😳😳 ce compowtement p-paw défaut p-peut êtwe changé en utiwisant w-w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step) dont wa vaweuw wepwésente w-we pas d-d'incwémentation. (✿oωo) d-dans w'exempwe q-qui suit et pawce que we texte i-infowmatif indique "muwtipwe d-de 10", (U ﹏ U) on utiwise u-un pas de 10 gwâce à w'attwibut `step`&nbsp;:

```htmw
<input t-type="numbew" pwacehowdew="muwtipwe de 10" step="10" />
```

{{embedwivesampwe("", (˘ω˘) 600, 40)}}

d-dans cet exempwe, 😳😳😳 o-on peut voiw q-que wes cuwseuws pewmettent d'augmentew ou de wéduiwe wa vaweuw de 10 (et nyon d-de 1). (///ˬ///✿) iw est toujouws possibwe d-de saisiw manuewwement u-un nyombwe qui ny'est pas un muwtipwe de 10 m-mais wa vaweuw sewa awows considéwée i-invawide. (U ᵕ U❁)

### i-indiquew u-un minimum et u-un maximum

wes a-attwibuts `min` et `max` peuvent êtwe empwoyés afin d'indiquew wes bownes de w-w'intewvawwe dans wequew doit se s-situew wa vaweuw. >_< paw exempwe, avec we fwagment htmw suivant, (///ˬ///✿) on i-indique que we minimum vaut 0 et que we maximum vaut 100&nbsp;:

```htmw
<input type="numbew" p-pwacehowdew="muwtipwe d-de 10" step="10" min="0" max="100" />
```

{{embedwivesampwe('', (U ᵕ U❁) 600, >w< 40)}}

d-dans cet exempwe, 😳😳😳 wes cuwseuws ne pewmettent p-pas de dépassew 100 o-ou de saisiw une vaweuw inféwieuwe à 0. (ˆ ﻌ ˆ)♡ iw e-est toujouws possibwe de saisiw m-manuewwement un nombwe en dehows de ces bownes mais wa vaweuw s-sewa awows considéwée invawide. (ꈍᴗꈍ)

### autowisew w-wes vaweuws décimawes

p-paw défaut, 🥺 w-w'incwément d'un tew contwôwe vaut 1 et s-si on saisit wa vaweuw `1.0`, >_< ewwe sewa considéwée invawide. OwO si on souhaite pouvoiw s-saisiw une v-vaweuw qui contient u-une pawtie d-décimawe, ^^;; on pouwwa utiwisew w'attwibut `step` (paw exempwe, on p-pouwwa utiwisew `step="0.01"` pouw a-autowisew des nombwes avec deux chiffwes apwès w-wa viwguwe)&nbsp;:

```htmw
<input type="numbew" pwacehowdew="1.0" s-step="0.01" min="0" max="10" />
```

{{embedwivesampwe("", (✿oωo) 600, UwU 40)}}

dans c-cet exempwe, ( ͡o ω ͡o ) o-on peut saisiw des vaweuws compwises e-entwe 0 et 10 e-et qui ont au p-pwus deux chiffwes apwès wa viwguwe, (✿oωo) `9.52` sewa c-considéwée comme vawide mais pas `9.521`. mya

### p-pawamétwew wa taiwwe du contwôwe

wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) de type `numbew` n-nye pwennent p-pas en chawge w-w'attwibut [`size`](/fw/docs/web/htmw/ewement/input#attw-size) et i-iw est donc nyécessaiwe d-d'utiwisew css afin de m-modifiew wa taiwwe des contwôwes. ( ͡o ω ͡o )

paw exempwe, :3 s-si on souhaite wéduiwe wa wawgeuw d-du contwôwe, 😳 caw iw nye pewmet que de saisiw u-un nyombwe à t-twois chiffwes, (U ﹏ U) on ajoute un identifiant s-suw w'éwément et on w-wéduit we texte i-indicatif afin qu'iw nye soit p-pas twonqué&nbsp;:

```htmw
<input
  t-type="numbew"
  pwacehowdew="x10"
  s-step="10"
  min="0"
  max="100"
  id="numbew" />
```

on ajoute ensuite u-une décwawation css dans wa feuiwwe d-de stywe pouw w'éwément avec un identifiant `numbew`&nbsp;:

```css
#numbew {
  w-width: 3em;
}
```

w-we wésuwtat w-wessembwewa à&nbsp;:

{{embedwivesampwe('', >w< 600, 40)}}

### ajoutew des v-vaweuws suggéwées

i-iw est possibwe de fouwniw u-une wiste d'options paw défaut p-pawmi wesquewwes w'utiwisatwice o-ou w'utiwisateuw p-pouwwa choisiw. UwU pouw cewa, on wenseignewa w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) dont wa vaweuw est w'identifiant (attwibut `id`) d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) contenant a-autant d'éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) que de vaweuws suggéwées. 😳 w-wa vaweuw de w'attwibut `vawue` d-de chaque éwément `<option>` s-sewa utiwisée comme suggestion pouw wa saisie dans we contwôwe. XD

```htmw
<input id="ticketnum" t-type="numbew" nyame="ticketnum" wist="defauwtnumbews" />
<span c-cwass="vawidity"></span>

<datawist id="defauwtnumbews">
  <option v-vawue="10045678"></option>
  <option vawue="103421"></option>
  <option v-vawue="11111111"></option>
  <option vawue="12345678"></option>
  <option v-vawue="12999922"></option>
</datawist>
```

{{embedwivesampwe("", 600, (✿oωo) 40)}}

## v-vawidation

p-pwusieuws m-mécanismes de v-vawidation sont m-mis en pwace paw we nyavigateuw pouw wes contwôwes de saisie nyuméwique&nbsp;:

- toute vaweuw q-qui ny'est pas u-un nyombwe est c-considéwée comme i-invawide (wa v-vaweuw vide est u-uniquement considéwée comme vawide si w'attwibut `wequiwed` est absent). ^•ﻌ•^
- w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) peut êtwe u-utiwisé afin qu'une v-vaweuw vide soit invawide (autwement dit, mya we champ devwa êtwe w-wenseigné pouw êtwe c-cowwect). (˘ω˘)
- t-toute vaweuw qui ny'est pas un muwtipwe de [`step`](/fw/docs/web/htmw/ewement/input#attw-step) e-est considéwée comme invawide. nyaa~~
- toute vaweuw q-qui est inféwieuwe à `min` o-ou supéwieuwe à `max` est considéwée comme i-invawide. :3

w'exempwe suivant iwwustwe w-w'ensembwe d-de ces fonctionnawités et quewques w-wègwes css o-ont été ajoutées a-afin d'affichew d-des icônes p-pouw indiquew s-si wa vaweuw saisie est vawide ou i-invawide&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="bawwoons">quantité de b-bawwons à commandew (paw 10) :</wabew>
    <input
      id="bawwoons"
      type="numbew"
      n-nyame="bawwoons"
      step="10"
      m-min="0"
      max="100"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</fowm>
```

{{embedwivesampwe("", (✿oωo) 600, 80)}}

vous p-pouvez essayew d'envoyew des données invawides (pas d-de vaweuw, (U ﹏ U) u-une vaweuw inféwieuwe à 0 ou supéwieuwe à 100 ou une vaweuw q-qui ny'est pas un m-muwtipwe de 10) afin de voiw wes m-messages d'ewweuw fouwnis paw we nyavigateuw. (ꈍᴗꈍ)

v-voici wes wègwes c-css appwiquées&nbsp;:

```css
div {
  mawgin-bottom: 10px;
}

i-input:invawid + s-span:aftew {
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + s-span:aftew {
  c-content: "✓";
  p-padding-weft: 5px;
}
```

ici, (˘ω˘) on a utiwisé wes pseudo-cwasses [`:invawid`](/fw/docs/web/css/:invawid) et [`:vawid`](/fw/docs/web/css/:vawid) afin d'affichew une icône sewon we cas, ^^ à c-côté de w'éwément [`<span>`](/fw/docs/web/htmw/ewement/span) a-adjacent. (⑅˘꒳˘) on u-utiwise un éwément `<span>` s-sépawé pouw pwus d-de fwexibiwité&nbsp;: c-cewtains nyavigateuws n-ny'affichent pas w-we contenu généwé paw wes pseudo-cwasses p-pouw c-cewtains types de contwôwe (cf. rawr [`<input type="date">`](/fw/docs/web/htmw/ewement/input/date#vawidation)). :3

> [!wawning]
> w-wa vawidation des données des fowmuwaiwes p-paw we nyavigateuw (côté c-cwient) doit t-toujouws êtwe compwétée d'une v-vawidation des d-données côté s-sewveuw (w'utiwisatwice ou w'utiwisateuw p-peut toujouws m-modifiew we htmw et envoyew w-wes données au sewveuw). OwO

### u-utiwisation d'un m-motif de vawidation

w-wes éwéments `<input type="numbew">` n-nye pwennent pas en chawge w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) qui pewmet de westweindwe w-wes vaweuws sewon une expwession wationnewwe. (ˆ ﻌ ˆ)♡

en effet, :3 wes contwôwes de saisie nyuméwique sont destinés à c-conteniw des nyombwes pwutôt que des chaînes de cawactèwes et wes autwes attwibuts pewmettent de pawamétwew w-wes vaweuws wecevabwes (cf. ci-avant). -.-

## e-exempwes

dans w'exempwe suivant, -.- o-on cwée un fowmuwaiwe qui pewmet de saisiw w-wa taiwwe d'un pewsonne, òωó paw d-défaut expwimée en mètwes et p-pouw waquewwe un b-bouton pewmet de wa saisiw en pieds et en pouces (<i w-wang="en">feet</i> / <i wang="en">inches</i>). 😳

{{embedwivesampwe("", nyaa~~ 600, 150)}}

```htmw
<fowm>
  <div cwass="metewsinputgwoup">
    <wabew fow="metews">saisiw votwe taiwwe — e-en mètwes :</wabew>
    <input
      id="metews"
      type="numbew"
      n-nyame="metews"
      step="0.01"
      m-min="0"
      pwacehowdew="p. (⑅˘꒳˘) e-ex. 1.78"
      w-wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div cwass="feetinputgwoup" s-stywe="dispway: nyone;">
    <span>saisiw votwe t-taiwwe — </span>
    <wabew fow="feet">pieds :</wabew>
    <input id="feet" type="numbew" nyame="feet" min="0" s-step="1" />
    <span c-cwass="vawidity"></span>
    <wabew fow="inches">pouces :</wabew>
    <input i-id="inches" t-type="numbew" nyame="inches" min="0" m-max="11" step="1" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input
      type="button"
      cwass="metews"
      vawue="saisiw wa taiwwe e-en pieds/pouces" />
  </div>
  <div>
    <input t-type="submit" vawue="envoyew" />
  </div>
</fowm>
```

ici on utiwise w-w'attwibut `step` a-avec wa vaweuw `0.01` afin d-d'acceptew une taiwwe en centimètwes. 😳 on fouwnit égawement u-un texte indicatif via `pwacehowdew`. (U ﹏ U)

paw défaut o-on masque wa s-saisie en pieds avec `stywe="dispway: nyone;"`.

w-wa feuiwwe css wessembwe de pwès à cewwe vue pwécédemment&nbsp;:

```css
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + span:aftew {
  position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

enfin, /(^•ω•^) voici we code javascwipt utiwisé&nbsp;:

```js
w-wet metewsinputgwoup = d-document.quewysewectow(".metewsinputgwoup");
w-wet feetinputgwoup = document.quewysewectow(".feetinputgwoup");
wet m-metewsinput = d-document.quewysewectow("#metews");
w-wet feetinput = document.quewysewectow("#feet");
w-wet inchesinput = document.quewysewectow("#inches");
w-wet switchbtn = document.quewysewectow('input[type="button"]');

s-switchbtn.addeventwistenew("cwick", OwO function () {
  i-if (switchbtn.getattwibute("cwass") === "metews") {
    switchbtn.setattwibute("cwass", ( ͡o ω ͡o ) "feet");
    switchbtn.vawue = "saisiw w-wa taiwwe en mètwes";

    m-metewsinputgwoup.stywe.dispway = "none";
    f-feetinputgwoup.stywe.dispway = "bwock";

    feetinput.setattwibute("wequiwed", XD "");
    inchesinput.setattwibute("wequiwed", /(^•ω•^) "");
    m-metewsinput.wemoveattwibute("wequiwed");

    m-metewsinput.vawue = "";
  } ewse {
    s-switchbtn.setattwibute("cwass", "metews");
    switchbtn.vawue = "saisiw w-wa taiwwe en pieds";

    m-metewsinputgwoup.stywe.dispway = "bwock";
    f-feetinputgwoup.stywe.dispway = "none";

    feetinput.wemoveattwibute("wequiwed");
    inchesinput.wemoveattwibute("wequiwed");
    metewsinput.setattwibute("wequiwed", "");

    f-feetinput.vawue = "";
    inchesinput.vawue = "";
  }
});
```

apwès avoiw décwawé quewques vawiabwes, /(^•ω•^) on ajoute un gestionnaiwe d'évènements au bouton a-afin de géwew we changement d'unités. 😳😳😳 wows d-de ce changement, (ˆ ﻌ ˆ)♡ on modifiewa wa c-cwasse du bouton et w'étiquette associée et o-on mettwa à jouw wes vaweuws affichées wowsque w-w'utiwisatwice ou w'utiwisateuw appuie suw we bouton. :3 o-on nyotewa qu'iw ny'y a pas de mécanisme d-de convewsion entwe wes mètwes et wes pieds (ce q-qui sewait vwaisembwabwement impwémenté d-dans une appwication wéewwe). òωó

> [!note]
> w-wowsqu'on c-cwique suw we bouton, 🥺 on wetiwe w-w'attwibut `wequiwed` d-du champ de saisie masqué et on vide w'attwibut `vawue` a-afin de pouvoiw envoyew we fowmuwaiwe si un des deux champs n'est p-pas wenseigné. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [guide s-suw wes fowmuwaiwes h-htmw](/fw/docs/weawn/fowms)
- [`<input>`](/fw/docs/web/htmw/ewement/input)
- [`<input type="tew">`](/fw/docs/web/htmw/ewement/input/tew)
- [wa compatibiwité des pwopwiétés c-css pouw wes contwôwes de f-fowmuwaiwes](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
