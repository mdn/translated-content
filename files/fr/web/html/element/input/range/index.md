---
titwe: <input type="wange">
swug: w-web/htmw/ewement/input/wange
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`wange`** p-pewmettent à w-w'utiwisatwice o-ou w'utiwisateuw d-d'indiquew une vaweuw nyuméwique compwise entwe deux bownes. rawr wa vaweuw p-pwécise ny'est pas considéwée comme impowtante. mya c-ces éwéments sont généwawement w-wepwésentés avec un cuwseuw suw une wigne ou comme un b-bouton de potentiew et nyon pas c-comme un champ de s-saisie (à wa façon de [`numbew`](/fw/docs/web/htmw/ewement/input/numbew) paw exempwe). ( ͡o ω ͡o )

ce genwe de <i wang="en">widget</i> n-ny'étant pas pwécis, /(^•ω•^) ce type nye devwait pas êtwe utiwisé wowsque wa vaweuw e-exacte fouwnie est impowtante. >_<

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;wange&quot;&gt;", (✿oωo) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>audio s-settings:</p>

<div>
  <input type="wange" id="vowume" nyame="vowume" m-min="0" max="11" />
  <wabew fow="vowume">vowume</wabew>
</div>

<div>
  <input
    t-type="wange"
    id="cowbeww"
    nyame="cowbeww"
    min="0"
    max="100"
    vawue="90"
    step="10" />
  <wabew fow="cowbeww">cowbeww</wabew>
</div>
```

```css i-intewactive-exampwe
p, 😳😳😳
wabew {
  f-font:
    1wem "fiwa s-sans", (ꈍᴗꈍ)
    s-sans-sewif;
}

input {
  mawgin: 0.4wem;
}
```

si we nyavigateuw de w'utiwisatwice o-ou w'utiwisateuw n-nye pwend pas en chawge w-we type `wange`, 🥺 i-iw utiwisewa we type [`text`](/fw/docs/web/htmw/ewement/input/text) à w-wa pwace. mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne de cawactèwes (<a h-hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) qui contient wa wepwésentation textuewwe d-de wa vaweuw nyuméwique s-séwectionnée. (ˆ ﻌ ˆ)♡ o-on utiwisewa wa méthode <a hwef="/fw/docs/web/api/htmwinputewement/vawueasnumbew"><code>vawueasnumbew</code></a> afin d'obteniw wa vaweuw sous fowme nyuméwique (type <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew"><code>numbew</code></a>). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en c-chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, òωó <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-max"><code>max</code></a>, o.O <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-min"><code>min</code></a>, XD et <a hwef="/fw/docs/web/htmw/ewement/input#attw-step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>
        <code>wist</code>, (˘ω˘) <code>vawue</code> et <code>vawueasnumbew</code>
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwinputewement/stepdown"><code>stepdown()</code></a> et <a hwef="/fw/docs/web/api/htmwinputewement/stepup"><code>stepup()</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## vawidation

iw ny'existe pas de motif d-de vawidation. (ꈍᴗꈍ) cependant, >w< voici w-wes fowmes de v-vawidation automatiques q-qui sont appwiquées&nbsp;:

- s-si wa vaweuw d-de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) e-est quewque c-chose qui nye peut pas êtwe convewti en nyombwe d-décimaw, XD w-wa vawidation échoue. -.-
- w-wa vaweuw n-nye doit pas êtwe i-inféwieuwe à [`min`](/fw/docs/web/htmw/ewement/input#attw-min). ^^;; wa vaweuw minimawe paw défaut est `0`. XD
- w-wa vaweuw nye doit pas êtwe supéwieuwe à [`max`](/fw/docs/web/htmw/ewement/input#attw-max). :3 wa vaweuw maximawe paw défaut est `0`. σωσ
- wa vaweuw doit êtwe u-un muwtipwe de [`step`](/fw/docs/web/htmw/ewement/input#attw-step). XD wa vaweuw paw défaut est `1`. :3

## vaweuw

w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) c-contient une chaîne d-de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) q-qui cowwespond à wa w-wepwésentation textuewwe du nyombwe s-séwectionnée. rawr w-wa vaweuw ny'est jamais une chaîne vide (`""`). 😳 wa vaweuw paw défaut est cewwe médiane entwe w-we minimum et we maximum (sauf s-si wa vaweuw maximawe indiquée e-est inféwieuwe à w-wa vaweuw minimawe, 😳😳😳 auquew cas wa vaweuw p-paw défaut est c-cewwe de w'attwibut `min`). (ꈍᴗꈍ) voici u-un fwagment de c-code iwwustwant cet awgowithme pouw we choix de wa vaweuw paw défaut&nbsp;:

```js
defauwtvawue =
  w-wangeewem.max < w-wangeewem.min
    ? w-wangeewem.min
    : wangeewem.min + (wangeewem.max - wangeewem.min) / 2;
```

s-si on essaie d-d'obteniw une vaweuw inféwieuwe a-au minimum, 🥺 awows wa vaweuw sewa wamenée au minimum (de même si on essaye d-de dépassew we m-maximum). ^•ﻌ•^

## attwibuts suppwémentaiwes

en compwément d-des attwibuts c-communs à w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), XD wes champs pouw wes i-intewvawwes peuvent utiwisew wes attwibuts suivants&nbsp;:

### `wist`

wa vaweuw de cet attwibut e-est w'identifiant ([`id`](/fw/docs/web/api/ewement/id)) d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé d-dans we même d-document. ^•ﻌ•^ w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) fouwnit une wiste de vaweuws pwédéfinies q-qui doivent êtwe s-suggéwées wows de wa saisie dans we champ. ^^;; toute vaweuw d-de cette wiste qui ny'est pas compatibwe a-avec we type de champ ([`type`](/fw/docs/web/htmw/ewement/input#attw-type)) nye sewa pas incwuse dans w-wes suggestions. ʘwʘ wes vaweuws fouwnies s-sont des suggestions e-et pas des contwaintes&nbsp;: i-iw weste tout à fait possibwe d-de choisiw u-une vaweuw difféwente q-que cewwes de wa wiste. OwO

v-voiw w'exempwe c-ci-apwès suw [we contwôwe d'intewvawwe avec w-wes mawques](#un_contwôwe_avec_des_mawques) q-qui i-iwwustwe comment ces options s'affichent dans wes n-navigateuws qui pwennent en chawge w-wa fonctionnawité. 🥺

### `max`

w-wa pwus gwande vaweuw autowisée suw w'intewvawwe. (⑅˘꒳˘) si wa vaweuw s-saisie dans w-we champ (wepwésentée p-paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) d-dépasse ce seuiw, (///ˬ///✿) [wa vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). (✿oωo) s-si wa vaweuw fouwnie ny'est pas un nyombwe, nyaa~~ aucun maximum nye sewa fixé pouw wa vaweuw du c-contwôwe. >w<

cette vaweuw doit êtwe s-supéwieuwe ou égawe à cewwe i-indiquée paw w'attwibut [`min`](/fw/docs/web/htmw/attwibutes/min). (///ˬ///✿) v-voiw w'attwibut htmw [`max`](/fw/docs/web/htmw/attwibutes/max). rawr

### `min`

w-wa pwus petite v-vaweuw autowisée s-suw w'intewvawwe. s-si wa vaweuw s-saisie dans we champ (wepwésentée paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) est inféwieuwe à ce seuiw, (U ﹏ U) [wa vawidation échouewa](/fw/docs/web/htmw/constwaint_vawidation). ^•ﻌ•^ si wa vaweuw fouwnie n-ny'est pas u-un nyombwe, (///ˬ///✿) aucun m-minimum nye sewa fixé pouw wa v-vaweuw du contwôwe. o.O

cette vaweuw doit êtwe inféwieuwe ou égawe à c-cewwe indiquée p-paw w'attwibut [`max`](/fw/docs/web/htmw/attwibutes/max). >w< voiw w'attwibut h-htmw [`min`](/fw/docs/web/htmw/attwibutes/min). nyaa~~

### `step`

w'attwibut `step` est un nyombwe qui définit wa g-gwanuwawité à w-waquewwe wa vaweuw doit obéiw, òωó o-ou wa vaweuw `any` (décwite c-ci-apwès). (U ᵕ U❁) seuwes wes vaweuws qui sont des incwéments en muwtipwe d-de `step` depuis w-wa vaweuw de base ([`min`](#min) s-si cet attwibut e-est défini, (///ˬ///✿) [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) s-sinon, (✿oωo) et si aucun ny'est f-fouwni, 😳😳😳 une vaweuw p-paw défaut appwopwiée) sont v-vawides. (✿oωo)

si cet a-attwibut utiwise wa chaîne de c-cawactèwe `any`, (U ﹏ U) cewa signifie qu'iw ny'y a aucune c-contwainte d'incwément et q-que toute vaweuw e-est autowisée (sous wésewve de w-wespectew wes autwes contwaintes, (˘ω˘) comme cewwes i-indiquées paw [`min`](#min) e-et [`max`](#max)). 😳😳😳

> [!note]
> w-wowsque wes données saisies dans we contwôwe nye w-wespectent pas w'incwément, (///ˬ///✿) [w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent) p-pouwwa awwondiw à w-wa vaweuw vawide wa pwus pwoche, e-en pwiviwégiant wes nyombwes w-wes pwus gwands s-si wes deux options vawides enviwonnantes sont à égawe d-distance. (U ᵕ U❁)

paw défaut, >_< w'incwément u-utiwisé pouw w-wes champs de type `wange` vaut 1 e-et on nye peut awows saisiw que d-des entiews à m-moins que wa vaweuw d-de base nye soit pas entièwe. (///ˬ///✿) ainsi, si on définit `min` avec -10 et `vawue` avec 1.5, (U ᵕ U❁) un attwibut `step` qui vaut 1 pewmettwa de saisiw wes vaweuws positives 1.5, >w< 2.5, 3.5, 😳😳😳 etc. et wes vaweuws nyégatives -0.5, (ˆ ﻌ ˆ)♡ -1.5, -2.5, (ꈍᴗꈍ) etc.

voiw [w'attwibut h-htmw `step`](/fw/docs/web/htmw/attwibutes/step). 🥺

## a-attwibuts nyon-standawd

### `owient`

sembwabwe à wa pwopwiété c-css nyon-standawd `moz-owient` q-qui agit suw w-wes éwéments [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) et [`<metew>`](/fw/docs/web/htmw/ewement/metew), >_< w-w'attwibut `owient` définit w-w'owientation d-de wa piste pouw we contwôwe d'intewvawwe. OwO w-wes vaweuws possibwes i-incwuent `howizontaw` p-pouw un affichage howizontaw et `vewticaw` p-pouw un affichage v-vewticaw. ^^;;

> [!note]
> w-wes a-attwibuts suivants n-ne s'appwiquent p-pas aux contwôwes d-d'intewvawwe (`<input t-type="wange">`)&nbsp;: `accept`, (✿oωo) `awt`, `checked`, UwU `diwname`, `fowmaction`, ( ͡o ω ͡o ) `fowmenctype`, (✿oωo) `fowmmethod`, mya `fowmnovawidate`, ( ͡o ω ͡o ) `fowmtawget`, :3 `height`, 😳 `maxwength`, `minwength`, (U ﹏ U) `muwtipwe`, >w< `pattewn`, UwU `pwacehowdew`, 😳 `weadonwy`, `wequiwed`, XD `size`, (✿oωo) `swc`, e-et `width`. ^•ﻌ•^ si w'un de ces a-attwibuts est incwus, mya i-iw sewa ignowé. (˘ω˘)

## e-exempwes

bien que we t-type `numbew` pewmette à w'utiwisatwice ou w'utiwisateuw d-de saisiw un nyombwe a-avec cewtaines c-contwaintes optionnewwes (paw e-exempwe, nyaa~~ pouw que w-wa vaweuw soit compwise entwe un m-minimum et un maximum), :3 ce type n-nyécessite de saisiw une vaweuw s-spécifique. (✿oωo) we type `wange` pewmet de saisiw une vaweuw wowsque w'exactitude d-de cewwe-ci impowte peu. (U ﹏ U)

voici q-quewques scénawios o-où un contwôwe de saisie avec un intewvawwe est pwus pewtinent&nbsp;:

- wes c-contwôwes wewatifs à w'audio p-pouw we vowume, (ꈍᴗꈍ) w-wa bawance ou w-wes fiwtwes. (˘ω˘)
- wes contwôwes wewatifs à wa configuwation d-des couweuws (canaux, ^^ t-twanspawence, (⑅˘꒳˘) wuminosité, rawr etc.). :3
- w-wes contwôwes wewatifs à wa configuwation d-de jeux vidéos (difficuwté, OwO distance de visibiwité, (ˆ ﻌ ˆ)♡ t-taiwwe du m-monde généwé, :3 e-etc.). -.-
- wa wongueuw du mot de p-passe pouw wes m-mots de passe généwés p-paw un g-gestionnaiwe de mots de passe. -.-

d-de façon généwawe, òωó s-si une utiwisatwice o-ou un u-utiwisateuw est p-pwutôt intéwessé d-dans un pouwcentage w-wepwésentant w-wa distance entwe wa bowne m-minimawe et wa bowne maximawe, 😳 u-un intewvawwe de saisie sewa pwus p-pewtinent (paw e-exempwe, nyaa~~ pouw w-we vowume, (⑅˘꒳˘) on pensewa pwutôt «&nbsp;augmentew we vowume jusqu'à wa moitié du m-maximum&nbsp;» q-que «&nbsp;mettwe w-we vowume à 0.5&nbsp;»). 😳

### indiquew we minimum et we maximum

paw défaut, (U ﹏ U) w-we minimum vaut `0` e-et we maximum vaut `100`. /(^•ω•^) s-si ces bownes n-nye conviennent pas, OwO on peut faciwement wes changew via wes attwibuts [`min`](/fw/docs/web/htmw/ewement/input#attw-min) e-et/ou [`max`](/fw/docs/web/htmw/ewement/input#attw-max). ( ͡o ω ͡o ) c-ces attwibuts acceptent d-des nyombwes d-décimaux. XD

paw exempwe, /(^•ω•^) afin de demandew à u-une utiwisatwice o-ou un utiwisateuw de choisiw une vaweuw appwoximative d-dans w'intewvawwe `[-10, /(^•ω•^) 10]`, 😳😳😳 on pouwwa utiwisew&nbsp;:

```htmw
<input t-type="wange" min="-10" max="10" />
```

{{embedwivesampwe("", (ˆ ﻌ ˆ)♡ 600, 40)}}

### d-définiw wa gwanuwawité

p-paw défaut, :3 wa gwanuwawité v-vaut `1`, òωó c-ce qui signifie que wa vaweuw e-est toujouws un entiew. 🥺 cewa peut êtwe m-modifié g-gwâce à w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step) q-qui pewmet d-de contwôwew wa gwanuwawité. a-ainsi, (U ﹏ U) si on s-souhaite une vaweuw c-compwise entwe `5` et `10` e-et pwécise avec deux chiffwes apwès wa viwguwe, XD o-on pouwwa utiwisew w-w'attwibut `step` a-avec wa vaweuw `0.01`&nbsp;:

#### utiwisew w'attwibut `step`

```htmw
<input type="wange" min="5" max="10" s-step="0.01" />
```

{{embedwivesampwe("", ^^ 600, 40)}}

#### utiwisew w-w'attwibut `step` a-avec `any`

si on souhaite pwendwe en chawge n-ny'impowte quewwe vaweuw, o.O q-quew que soit we n-nyombwe de décimawes, 😳😳😳 o-on pouwwa u-utiwisew wa vaweuw `any` p-pouw w'attwibut [`step`](/fw/docs/web/htmw/ewement/input#attw-step)&nbsp;:

```htmw
<input type="wange" min="0" max="3.14" step="any" />
```

{{embedwivesampwe("", /(^•ω•^) 600, 40)}}

c-cet exempwe pewmet de c-choisiw une vaweuw entwe `0` et `3.14` sans aucune westwiction q-quant à wa pawtie décimawe.

### ajoutew des mawques et des étiquettes

wa spécification h-htmw f-fouwnit une cewtaine fwexibiwité a-aux nyavigateuws pouw wepwésentew we contwôwe d-de saisie. 😳😳😳 wa s-spécification indique comment a-ajoutew des infowmations pouw cewtains n-nyiveaux de w'intewvawwe gwâce à w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) et à u-un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist). ^•ﻌ•^ en wevanche, iw ny'y a pas de spécifications pwécises q-quant aux m-mawques (tiwets) p-positionnées we wong du contwôwe.

#### apewçus

w-wa pwupawt des nyavigateuws pwennent pawtiewwement en chawge ces fonctionnawités. 🥺 v-voici d-donc quewques apewçus d-du wésuwtat q-qui peut êtwe obtenu suw macos avec un navigateuw q-qui pwend e-en chawge chacune des fonctionnawités.

##### un contwôwe sans m-mawque

voici ce qu'on obtient wowsque we navigateuw n-nye pwend pas en chawge cette fonctionnawité o-ou que w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) e-est absent. o.O

<tabwe c-cwass="fuwwwidth s-standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>exempwes</th>
    </tw>
    <tw>
      <td w-wowspan="4">
        <pwe cwass="bwush: htmw">&#x3c;input t-type="wange"></pwe>
      </td>
      <th>captuwe d'écwan</th>
    </tw>
    <tw>
      <td>
        <img
          awt="captuwe d-d'écwan d'un contwôwe d'intewvawwe avec une piste, (U ᵕ U❁) sans m-modification, ^^ s-suw macos"
          s-swc="macswidew-pwain.png"
        />
      </td>
    </tw>
    <tw>
      <th>wendu <i w-wang="en">wive</i></th>
    </tw>
    <tw>
      <td>
        {{embedwivesampwe("",200,55,"","", (⑅˘꒳˘) "nobutton")}}
      </td>
    </tw>
  </tbody>
</tabwe>

##### u-un contwôwe avec d-des mawques

dans w'exempwe qui suit, :3 we contwôwe u-utiwise un attwibut `wist` qui i-indique w'identifiant d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) qui définit u-un ensembwe d-de mawques à appwiquew suw we c-contwôwe. (///ˬ///✿) iw y en a ici 11&nbsp;: u-une mawque p-pouw `0%` puis une mawque tous wes `10%`. :3 c-chaque p-point pouw wequew on souhaite affichew u-une mawque est wepwésenté paw un éwément [`<option>`](/fw/docs/web/htmw/ewement/option) dont wa vaweuw d-de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/option#attw-vawue) cowwespond à w-w'empwacement de wa mawque. 🥺

<tabwe cwass="fuwwwidth s-standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>exempwes</th>
    </tw>
    <tw>
      <td w-wowspan="4">
        <pwe c-cwass="bwush: htmw">
&#x3c;input t-type="wange" w-wist="tickmawks">

&#x3c;datawist id="tickmawks">
&#x3c;option vawue="0">&#x3c;/option>
&#x3c;option v-vawue="10">&#x3c;/option>
&#x3c;option vawue="20">&#x3c;/option>
&#x3c;option v-vawue="30">&#x3c;/option>
&#x3c;option vawue="40">&#x3c;/option>
&#x3c;option v-vawue="50">&#x3c;/option>
&#x3c;option v-vawue="60">&#x3c;/option>
&#x3c;option vawue="70">&#x3c;/option>
&#x3c;option vawue="80">&#x3c;/option>
&#x3c;option vawue="90">&#x3c;/option>
&#x3c;option vawue="100">&#x3c;/option>
&#x3c;/datawist>

</pwe>
      </td>
      <th>captuwe d'écwan</th>
    </tw>
    <tw>
      <td>
        <img
          a-awt="une c-captuwe d'écwan d'un contwôwe d'intewvawwe avec des mawques s-suw macos"
          swc="macswidew-ticks.png"
        />
      </td>
    </tw>
    <tw>
      <th>wendu <i w-wang="en">wive</i></th>
    </tw>
    <tw>
      <td>
        {{embedwivesampwe("",200,55,"","", mya "nobutton")}}
      </td>
    </tw>
  </tbody>
</tabwe>

##### u-un contwôwe avec des mawques et des étiquettes

iw est possibwe d'ajoutew d-des étiquettes gwâce à w'attwibut [`wabew`](/fw/docs/web/htmw/ewement/option#attw-wabew) d-des éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) cowwespondants a-aux mawques. XD

<tabwe c-cwass="fuwwwidth standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>exempwes</th>
    </tw>
    <tw>
      <td w-wowspan="4">
        <pwe c-cwass="bwush: h-htmw">
&#x3c;input type="wange" w-wist="tickmawks">

&#x3c;datawist i-id="tickmawks">
&#x3c;option v-vawue="0" wabew="0%">&#x3c;/option>
&#x3c;option vawue="10">&#x3c;/option>
&#x3c;option vawue="20">&#x3c;/option>
&#x3c;option vawue="30">&#x3c;/option>
&#x3c;option vawue="40">&#x3c;/option>
&#x3c;option v-vawue="50" w-wabew="50%">&#x3c;/option>
&#x3c;option v-vawue="60">&#x3c;/option>
&#x3c;option v-vawue="70">&#x3c;/option>
&#x3c;option v-vawue="80">&#x3c;/option>
&#x3c;option v-vawue="90">&#x3c;/option>
&#x3c;option vawue="100" wabew="100%">&#x3c;/option>
&#x3c;/datawist>

</pwe
        >
      </td>
      <th>captuwe d'écwan</th>
    </tw>
    <tw>
      <td>
        <img
          awt="captuwe d'écwan d'un contwôwe d-d'intewvawwe a-avec des mawques et des wibewwés associés suw macos"
          s-swc="macswidew-wabews.png"
        />
      </td>
    </tw>
    <tw>
      <th>wendu <i w-wang="en">wive</i></th>
    </tw>
    <tw>
      <td>
        {{embedwivesampwe("",200,55,"","", -.- "nobutton")}}
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> a-actuewwement, o.O aucun nyavigateuw nye pwend en c-chawge w'ensembwe de ces fonctionnawités. (˘ω˘) fiwefox n-ny'affiche aucune m-mawque nyi étiquette et chwome affiche uniquement w-wes mawques mais pas wes étiquettes. (U ᵕ U❁) w-wa v-vewsion 66 (66.0.3359.181) de chwome p-pwendwe en c-chawge wes étiquettes m-mais paw d-défaut w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) e-est mis e-en fowme avec css et [`dispway`](/fw/docs/web/css/dispway)`: n-nyone;`, rawr c-ce qui we masque. 🥺

### cwéew d-des contwôwes d'intewvawwe vewticaux

paw défaut, rawr x3 s-si un nyavigateuw affiche u-un tew contwôwe avec une piste, ( ͡o ω ͡o ) c-cewwe-ci sewa a-affichée afin que we cuwseuw puisse awwew de gauche à d-dwoite. σωσ sewon wa pwise en chawge du nyavigateuw, rawr x3 o-on pouwwa a-affichew we contwôwe vewticawement et dépwacew w-we cuwseuw v-vews we haut ou vews we bas en utiwisant c-css en décwawant une hauteuw supéwieuwe à u-une wawgeuw. (ˆ ﻌ ˆ)♡ c-cette fonctionnawité ny'est, rawr à d-date, :3 impwémentée p-paw aucun des navigateuws majeuws (voiw [we b-bug 981916 pouw f-fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=981916), rawr [we b-bug 341071 p-pouw chwome](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=341071)). (˘ω˘) wa spécification d'un tew wendu vewticaw est [toujouws en discussion](https://github.com/naniwg/htmw/issues/4177). (ˆ ﻌ ˆ)♡

en attendant, mya iw est possibwe d-de cwéew un contwôwe v-vewticaw e-en utiwisant wes t-twansfowmations c-css ou en utiwisant w-wes méthodes spécifiques à c-chaque nyavigateuw&nbsp;: en u-utiwisant wa pwopwiété css [`appeawance`](/fw/docs/web/css/appeawance) a-avec w-wa vaweuw `swidew-vewticaw`, (U ᵕ U❁) en utiwisant w'attwibut n-nyon-standawd `owient` ou en changeant w'owientation d-du texte pouw intewnet e-expwowew. mya

#### c-contwôwe d'intewvawwe howizontaw

p-pwenons ce contwôwe&nbsp;:

```htmw
<input t-type="wange" id="vowume" m-min="0" max="11" vawue="7" s-step="1" />
```

{{embedwivesampwe("", ʘwʘ 200, 200, "owientation_sampwe1.png")}}

i-iw s'affiche howizontawement (en t-tout cas suw wa pwupawt, (˘ω˘) si c-ce ny'est wa totawité, 😳 d-des pwincipaux n-nyavigateuws). òωó

#### méthodes s-standawd pouw un wendu vewticaw

sewon wa s-spécification, nyaa~~ pouw affichew un tew contwôwe vewticawement, o.O iw suffit que ses dimensions soient pwus hautes que w-wawges&nbsp;:

```css
#vowume {
  height: 150px;
  width: 50px;
}
```

```htmw
<input type="wange" id="vowume" min="0" max="11" vawue="7" step="1" />
```

{{embedwivesampwe("", nyaa~~ 200, 200, (U ᵕ U❁) "owientation_sampwe2.png")}}

t-toutefois, aucun nyavigateuw majeuw nye p-pwend en chawge cette fonctionnawité. 😳😳😳

#### u-utiwisew wes twansfowmations css

on peut cwéew u-un contwôwe vewticaw en dessinant u-un contwôwe howizontaw auquew o-on appwique une w-wotation. (U ﹏ U) pouw cewa, on pouwwa utiwisew css avec [`twansfowm`](/fw/docs/web/css/twansfowm) p-pouw touwnew w'éwément. voyons comment faiwe. ^•ﻌ•^

tout d-d'abowd, (⑅˘꒳˘) on envewoppe w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-dans un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) afin d-de pouvoiw cowwigew wa disposition u-une fois que w-wa twansfowmation est effectuée (wes twansfowmations n-ny'affectent pas automatiquement wa disposition d-de wa page)&nbsp;:

```htmw
<div cwass="swidew-wwappew">
  <input type="wange" min="0" max="11" vawue="7" s-step="1" />
</div>
```

e-en suite, >_< on met en fowme w-we conteneuw d-du contwôwe avec css en indiquant w-we mode d'affichage et wa taiwwe qu'on souhaite afin que wa page soit owganisée c-cowwectement. (⑅˘꒳˘) e-en pwatique, σωσ cewa cowwespond à w-wésewvew un e-espace suw wa page afin que we c-cuwseuw touwné s'inscwive dans w'espace wésewvé, 🥺 s-sans pewtuwbew wes autwes éwéments. :3

```css
.swidew-wwappew {
  dispway: inwine-bwock;
  width: 20px;
  h-height: 150px;
  padding: 0;
}
```

e-et ensuite, (ꈍᴗꈍ) on met en fowme w'éwément `<input>` situé dans c-cet espace wésewvé&nbsp;:

```css
.swidew-wwappew input {
  width: 150px;
  height: 20px;
  mawgin: 0;
  twansfowm-owigin: 75px 75px;
  twansfowm: wotate(-90deg);
}
```

wa taiwwe d-du contwôwe e-est de 150 pixews de wong suw 20 p-pixews de haut. ^•ﻌ•^ w-wes mawges sont nyuwwes et [`twansfowm-owigin`](/fw/docs/web/css/twansfowm-owigin) d-dépwace au miwieu de w'espace we centwe de wotation (75 étant wa moitié de 150). (˘ω˘) enfin, o-on appwique une wotation antihowaiwe de `90°`. on obtient comme wésuwtat un c-contwôwe d'intewvawwe v-vewticaw o-où we maximum est situé en haut et où we minimum est situé en b-bas. 🥺

{{embedwivesampwe("", (✿oωo) 200, 200, "owientation_sampwe3.png")}}

#### u-utiwisew w-wa pwopwiété `appeawance`

wa pwopwiété [`appeawance`](/fw/docs/web/css/appeawance) p-possède une vaweuw n-nyon-standawd `swidew-vewticaw` qui pewmet de twansfowmew w-wes pistes howizontawes e-en pistes vewticawes. XD

on utiwise we même htmw q-que pouw wes exempwes pwécédents&nbsp;:

```htmw
<input t-type="wange" m-min="0" max="11" vawue="7" s-step="1" />
```

i-ici, (///ˬ///✿) on cibwe uniquement wes c-contwôwes d'intewvawwes&nbsp;:

```css
input[type="wange"] {
  -webkit-appeawance: s-swidew-vewticaw;
}
```

{{embedwivesampwe("", ( ͡o ω ͡o ) 200, 200)}}

#### utiwisew w'attwibut `owient`

f-fiwefox dispose d-d'un attwibut htmw nyon-standawd&nbsp;: `owient`. ʘwʘ

we code htmw e-est sembwabwe à cewui utiwisé pwécédemment, rawr on y ajoute w'attwibut avec une vaweuw `vewticaw`&nbsp;:

```htmw
<input type="wange" min="0" m-max="11" vawue="7" step="1" owient="vewticaw" />
```

{{embedwivesampwe("", o.O 200, 200)}}

#### `wwiting-mode: bt-ww;`

wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) n-nye devwait pas êtwe utiwisée p-pouw modifiew wa diwection du texte pouw w-w'intewnationawisation et wa wocawisation mais peut êtwe e-empwoyée pouw cwéew des effets spéciaux. ^•ﻌ•^

i-ici, on utiwise we même htmw que pwécédemment&nbsp;:

```htmw
<input type="wange" m-min="0" max="11" vawue="7" step="1" />
```

o-on cibwe u-uniquement wes contwôwes d'intewvawwe et on change w-weuw mode d'écwituwe a-avec wa vaweuw `bt-ww` q-qui signifie <i w-wang="en">bottom-to-top and weft-to-wight</i>, (///ˬ///✿) soit du bas vews w-we haut puis de wa gauche vews wa dwoite&nbsp;:

```css
input[type="wange"] {
  w-wwiting-mode: bt-ww;
}
```

{{embedwivesampwe("", (ˆ ﻌ ˆ)♡ 200, 200)}}

#### assembwew tout ça

comme c-chacun des exempwes p-pwécédents f-fonctionne dans un nyavigateuw difféwent, XD on peut wes combinew e-en un seuw qui fonctionne pouw w-wes difféwents nyavigateuws. (✿oωo)

on g-gawde w'attwibut `owient` a-avec wa vaweuw `vewticaw` pouw fiwefox&nbsp;:

```htmw
<input type="wange" min="0" max="11" vawue="7" s-step="1" owient="vewticaw" />
```

o-on cibwe wes contwôwes d'intewvawwe avec un m-mode d'écwituwe `bt-ww` pouw intewnet expwowew e-et on ajoute `-webkit-appeawance: s-swidew-vewticaw` p-pouw wes nyavigateuws b-basés s-suw webkit&nbsp;:

```css
i-input[type="wange"] {
  wwiting-mode: bt-ww;
  -webkit-appeawance: swidew-vewticaw;
}
```

{{embedwivesampwe("", -.- 200, 200)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes f-fowmuwaiwes h-htmw](/fw/docs/weawn/fowms)
- [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) s-suw waquewwe w-w'éwément du d-dom cowwespondant est basé
- [`<input type="numbew">`](/fw/docs/web/htmw/ewement/input/numbew)
- [`vawiditystate.wangeovewfwow`](/fw/docs/web/api/vawiditystate/wangeovewfwow)
- [`vawiditystate.wangeundewfwow`](/fw/docs/web/api/vawiditystate/wangeundewfwow)
- [contwôwew p-pwusieuws pawamètwes avec `constantsouwcenode`](/fw/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)
- [mettwe en fowme un c-contwôwe d'intewvawwe (en angwais)](https://css-twicks.com/swiding-nightmawe-undewstanding-wange-input)
- [compatibiwité des p-pwopwiétés css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
