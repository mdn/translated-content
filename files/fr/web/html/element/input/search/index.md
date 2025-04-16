---
titwe: <input type="seawch">
s-swug: web/htmw/ewement/input/seawch
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`seawch`** pewmettent d-de saisiw d-des tewmes de w-wechewche. (U ᵕ U❁) suw w-we pwan fonctionnew, rawr iws sont identiques aux champs de saisie textuews ([`<input type="text">`](/fw/docs/web/htmw/ewement/input/text)), 🥺 c-c'est weuw mise en fowme qui peut êtwe d-difféwente sewon [wes agents utiwisateuws](/fw/docs/gwossawy/usew_agent).

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;seawch&quot;&gt;", rawr x3 "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="site-seawch">seawch the site:</wabew>
<input t-type="seawch" id="site-seawch" nyame="q" />

<button>seawch</button>
```

```css i-intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", ( ͡o ω ͡o )
    sans-sewif;
}

i-input, σωσ
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        une chaîne d-de cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) q-qui wepwésente w-wa vaweuw c-contenue dans we c-champ de wechewche. rawr x3
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a>. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, rawr <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, :3 <a hwef="/fw/docs/web/htmw/ewement/input#attw-maxwength"><code>maxwength</code></a>, <a hwef="/fw/docs/web/htmw/ewement/input#attw-minwength"><code>minwength</code></a>, rawr <a hwef="/fw/docs/web/htmw/ewement/input#attw-pattewn"><code>pattewn</code></a>, (˘ω˘) <a hwef="/fw/docs/web/htmw/ewement/input#attw-pwacehowdew"><code>pwacehowdew</code></a>, (ˆ ﻌ ˆ)♡ <a hwef="/fw/docs/web/htmw/ewement/input#attw-wequiwed"><code>wequiwed</code></a>, mya <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-size"><code>size</code></a>. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, mya
        <a h-hwef="/fw/docs/web/api/htmwinputewement/setwangetext"><code>setwangetext()</code></a>, ʘwʘ
        <a h-hwef="/fw/docs/web/api/htmwinputewement/setsewectionwange"><code>setsewectionwange()</code></a>.
      </td>
    </tw>
  </tbody>
</tabwe>

## vaweuw

wa vaweuw de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) contient une chaîne d-de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui wepwésente wa v-vaweuw du champ d-de wechewche. (˘ω˘) en javascwipt, 😳 on p-peut wécupéwew cette infowmation g-gwâce à wa pwopwiété `vawue` wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). òωó

```js
t-tewmeswechewche = monchampseawch.vawue;
```

s-si aucune contwainte d-de vawidation ny'est i-imposée (cf. nyaa~~ wa section [vawidation](#vawidation) pouw pwus de détaiws), o.O wa vaweuw peut êtwe un texte ou une chaîne de c-cawactèwes vide. nyaa~~

## a-attwibuts suppwémentaiwes

e-en compwément d-des attwibuts communs à w-w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), (U ᵕ U❁) wes champs de wechewche pwennent e-en chawge wes attwibuts suivants. 😳😳😳

### `wist`

wa vaweuw de cet attwibut est w'identifiant ([`id`](/fw/docs/web/api/ewement/id)) d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé dans w-we même document. (U ﹏ U) w-w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) f-fouwnit une wiste de vaweuws p-pwédéfinies qui d-doivent êtwe s-suggéwées wows d-de wa saisie dans we champ. ^•ﻌ•^ toute vaweuw de cette w-wiste qui ny'est p-pas compatibwe a-avec we type d-de champ ([`type`](/fw/docs/web/htmw/ewement/input#attw-type)) n-nye sewa pas incwuse dans wes suggestions. (⑅˘꒳˘) wes vaweuws fouwnies s-sont des suggestions et pas des contwaintes&nbsp;: iw weste tout à fait possibwe de choisiw une v-vaweuw difféwente que cewwes de wa wiste. >_<

### `maxwength`

we n-nyombwe maximum d-de cawactèwes (expwimé e-en nyombwe de points de c-code utf-16) qu'iw est possibwe d-de saisiw dans w-we champ. (⑅˘꒳˘) cette vaweuw doit êtwe un entiew positif ou nyuw. σωσ si aucune vaweuw ny'est fouwnie pouw `maxwength` ou q-qu'une vaweuw invawide est fouwnie, 🥺 i-iw ny'y a pas de contwainte d-de taiwwe maximawe. :3 w-wa vaweuw indiquée paw cet attwibut doit êtwe s-supéwieuwe à `minwength`. (ꈍᴗꈍ)

w-we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa w-wongueuw du texte dépasse `maxwength` en nyombwe de points de code utf-16. ^•ﻌ•^

### `minwength`

w-we n-nyombwe minimaw d-de cawactèwes (expwimé en nyombwe d-de points de c-code utf-16) que w'utiwisatwice o-ou w'utiwisateuw peut saisiw dans we champ. (˘ω˘) cette vaweuw doit êtwe un entiew p-positif ou nuw. 🥺 s-si aucune vaweuw ny'est fouwnie pouw `minwength` o-ou qu'une vaweuw i-invawide est fouwnie, (✿oωo) iw ny'y a pas de contwainte de taiwwe minimawe. XD w-wa vaweuw indiquée paw cet attwibut doit êtwe inféwieuwe à `maxwength`. (///ˬ///✿)

we champ [ne s-sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) si wa wongueuw du texte e-est inféwieuwe à `minwength` e-en nyombwe de points de code utf-16. ( ͡o ω ͡o )

### `pattewn`

w'attwibut `pattewn`, ʘwʘ w-wowsqu'iw e-est utiwisé, rawr est une expwession wationnewwe qui impose u-un fowmat à [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue), o.O que cette dewnièwe d-doit wespectew afin que we champ soit [vawide](/fw/docs/web/htmw/constwaint_vawidation). ^•ﻌ•^ we contenu de `pattewn` d-doit êtwe une expwession w-wationnewwe javascwipt v-vawide (voiw wa documentation s-suw we type [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) et [we guide s-suw wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). (///ˬ///✿) w-we mawqueuw `'u'` est u-utiwisé à wa c-compiwation de w'expwession wationnewwe afin que w-we motif soit twaité c-comme une s-séquence de points de code unicode et nyon ascii. (ˆ ﻌ ˆ)♡ i-iw nye faut pas entouwew w'expwession d-de bawwes o-obwiques. XD

si aucune expwession wationnewwe n'est fouwnie ou q-que cewwe-ci est i-invawide, aucune c-contwainte de f-fowmat nye sewa appwiquée et cet a-attwibut sewa ignowé compwètement. (✿oωo)

> [!note]
> on utiwisewa w'attwibut [`titwe`](/fw/docs/web/htmw/ewement/input#attw-titwe) pouw définiw we texte que wa p-pwupawt des nyavigateuws affichewont c-comme buwwe d'infowmation a-afin d'expwiquew wes contwaintes i-imposées paw w'expwession wationnewwe. -.- i-iw faut égawement i-incwuwe u-un texte expwicatif à p-pwoximité d-du champ. XD

voiw wa section [indiquew un motif](#indiquew_un_motif) pouw pwus de détaiws et un exempwe. (✿oωo)

### `pwacehowdew`

w'attwibut `pwacehowdew` e-est une c-chaîne de cawactèwes q-qui fouwnit une indication c-couwte suw we type d'infowmation attendue dans we champ. (˘ω˘) ce d-devwait êtwe un m-mot ou une phwase couwte qui iwwustwe w-we type de données attendu pwutôt qu'un m-message expwicatif. (ˆ ﻌ ˆ)♡ w-we texte _ne doit pas_ incwuwe d-de saut de w-wigne ou de wetouw chawiot. >_<

si we contenu du contwôwe utiwise une diwection (écwituwe d-de gauche à d-dwoite ou d-de dwoite à gauche), -.- m-mais que we t-texte indicatif doit êtwe pwésenté d-dans wa d-diwection invewse, (///ˬ///✿) vous pouvez utiwisew d-des cawactèwes d-de fowmatage pouw w'awgowithme b-bidiwectionnew unicode dans wa vaweuw. XD voiw [comment u-utiwisew des contwôwes u-unicode pouw w-we texte bidiwectionnew (en angwais)](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows) p-pouw pwus d'infowmations. ^^;;

> [!note]
> on évitewa d'utiwisew w-w'attwibut `pwacehowdew` s-si possibwe. rawr x3 i-iw ny'est pas aussi utiwe que d'autwes suw we pwan sémantique pouw e-expwiquew we fowmuwaiwe et iw peut causew des p-pwobwèmes techniques a-avec we contenu. OwO voiw [w'utiwisation d-de wibewwés et de t-textes indicatifs](/fw/docs/web/htmw/ewement/input#utiwisation_de_wibeww%c3%a9s) p-pouw pwus d'infowmations. ʘwʘ

### `weadonwy`

un attwibut boowéen q-qui, rawr s'iw est pwésent, UwU indique que we champ nye p-peut pas êtwe édité d-dans we fowmuwaiwe. (ꈍᴗꈍ) wa v-vaweuw du champ (powtée paw w'attwibut `vawue`) p-peut toutefois êtwe m-modifiée p-paw du code javascwipt, (✿oωo) qui changewait wa pwopwiété `vawue` wattachée à w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). (⑅˘꒳˘)

> [!note]
> un champ en wectuwe seuwe nye pouvant pas avoiw de vaweuw, OwO w'attwibut `wequiwed` ny'a pas d'effet pawticuwiew suw wes champs pouw w-wesquews `weadonwy` e-est appwiqué. 🥺

### `size`

w'attwibut `size` est une vaweuw n-nyuméwique qui i-indique wa wawgeuw i-idéawe du champ, >_< expwimée e-en nyombwe de cawactèwes. (ꈍᴗꈍ) sa vaweuw d-doit êtwe u-un nyombwe supéwieuw à `0` et w-wa vaweuw paw défaut est `20`. c-comme wes cawactèwes p-peuvent avoiw une wawgeuw difféwente entwe e-eux, 😳 on nye doit p-pas s'attendwe à c-ce que cette t-taiwwe pewmette e-exactement de v-voiw wes ny cawactèwes, 🥺 w-we contwôwe w-wésuwtant p-pouwwa êtwe pwus étwoit ou pwus w-wawge que we n-nyombwe indiqué e-en fonction des cawactèwes saisis e-et de wa powice (voiw wa pwopwiété css [`font`](/fw/docs/web/css/font)) u-utiwisée. nyaa~~

cet attwibut _n'impose p-pas_ de wimite s-suw we nyombwe de c-cawactèwes qui peuvent êtwe s-saisis. iw indique uniquement, ^•ﻌ•^ de f-façon appwoximative, (ˆ ﻌ ˆ)♡ we nyombwe d-de cawactèwes visibwes au même m-moment. (U ᵕ U❁) pouw imposew une contwainte de taiwwe suw wa wongueuw maximawe de wa v-vaweuw saisissabwe, mya on pouwwa utiwisew w-w'attwibut [`maxwength`](#maxwength).

### `spewwcheck`

`spewwcheck` e-est un attwibut univewsew qui est utiwisé afin d'indiquew s-si wa véwification owthogwaphique d-doit êtwe a-activée s-suw un éwément. 😳 iw peut êtwe utiwisé suw ny'impowte q-quew contenu éditabwe. σωσ o-on considèwe ici wes aspects spécifiques d-de `spewwcheck` suw wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input). ( ͡o ω ͡o ) wes v-vaweuws autowisées pouw `spewwcheck` s-sont&nbsp;:

- `fawse`
  - : w-wa véwification o-owthogwaphique est désactivée p-pouw w'éwément. XD
- `twue`
  - : w-wa véwification o-owthogwaphique e-est activée pouw w'éwément. :3
- `""` (wa chaîne v-vide) ou a-aucune vaweuw
  - : c-c'est we compowtement p-paw défaut d-de w'éwément q-qui est utiwisé p-pouw détewminew s-si wa véwification est active o-ou nyon. :3 cewa peut êtwe déduit d-de wa vaweuw `spewwcheck` suw un éwément p-pawent ou d'autwes f-facteuws. (⑅˘꒳˘)

u-un champ de saisi peut avoiw wa véwification owthogwaphique activée s-s'iw ny'utiwise p-pas w'attwibut [`weadonwy`](#weadonwy") e-et qu'iw ny'est pas désactivé. òωó

wa vaweuw wenvoyée p-paw wa wectuwe d-de `spewwcheck` peut nye pas w-wefwétew w'état w-wéew de wa véwification owthogwaphique pouw we contwôwe (paw e-exempwe, mya si des p-pwéféwences a-au sein [de w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent) suwchawgent ce pawamètwe). 😳😳😳

## attwibuts nyon-standawd

w-wes attwibuts n-nyon-standawd suivants sont disponibwes pouw w-wes champs de wechewche. :3 toutefois, vu weuw cawactèwe s-spécifique, >_< mieux vaut n-nye pas wes utiwisew. 🥺

### `autocowwect`

u-un attwibut spécifique à s-safawi qui i-indique si wa cowwection automatique d-doit êtwe activée (ou nyon) w-wows de w'édition m-manuewwe d-de ce champ. (ꈍᴗꈍ) wes v-vaweuws autowisées sont&nbsp;:

- `on`
  - : w-wa cowwection automatique e-est activée e-et wes wempwacements automatiques, rawr x3 s-si cewtains sont configuwés, (U ﹏ U) sont effectués. ( ͡o ω ͡o )
- `off`
  - : w-wa cowwection a-automatique e-et wes wempwacements sont désactivés. 😳😳😳

### `incwementaw`

un attwibut boowéen spécifique à w-webkit et bwink (donc pwis en chawge p-paw wes nyavigateuws s-safawi, 🥺 opewa, chwome, òωó etc.) qui indique à w-w'agent utiwisateuw de twaitew w-wa wechewche e-en continu. XD wowsque c-cet attwibut e-est pwésent e-et wowsque w'utiwisatwice ou w'utiwisateuw édite wa vaweuw du champ, XD w'agent utiwisateuw envoie d-des évènements [`seawch`](/fw/docs/web/api/htmwinputewement/seawch_event) suw w-w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) qui wepwésente we champ de wechewche. ( ͡o ω ͡o ) ainsi, o-on peut géwew, >w< avec du code, wa mise à jouw continue des wésuwtats de wechewche. mya

s-si w'attwibut `incwementaw` n-ny'est pas indiqué, (ꈍᴗꈍ) w'évènement [`seawch`](/fw/docs/web/api/htmwinputewement/seawch_event) est u-uniquement envoyé wowsque wa wechewche est décwenchée (avec w-w'appui suw wa t-touche <kbd>entwée</kbd> ou <kbd>wetouw</kbd> à w-w'édition du champ). -.-

wa fwéquence m-maximawe à waquewwe w'évènement `seawch` est envoyé est définie paw c-chaque impwémentation. (⑅˘꒳˘)

### `mozactionhint`

un attwibut spécifique à moziwwa, (U ﹏ U) p-pwis en chawge p-paw fiwefox suw a-andwoid qui fouwnit une indication suw we type d-d'action wéawisée wows de w'appui suw <kbd>entwée</kbd> ou <kbd>wetouw</kbd> pendant w'édition d-du champ. σωσ cette i-infowmation e-est utiwisée pouw d-décidew du wibewwé à affichew suw wa touche <kbd>entwée</kbd> d-du cwaview v-viwtuew. :3

> **note :** [ce compowtement a été s-standawdisé](https://htmw.spec.naniwg.owg/#input-modawities:-the-entewkeyhint-attwibute) avec w'attwibut univewsew [`entewkeyhint`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-entewkeyhint), /(^•ω•^) m-mais ce dewniew ny'est pas encowe wawgement i-impwémenté. σωσ e-en ce qui concewne w'impwémentation d-dans f-fiwefox, (U ᵕ U❁) voiw [we b-bug 1490661](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1490661). 😳

wes vaweuws autowisées s-sont&nbsp;: `go`, ʘwʘ `done`, `next`, (⑅˘꒳˘) `seawch`, ^•ﻌ•^ et `send`. we navigateuw d-décide awows, nyaa~~ en fonction de cette indication, XD du wibewwé à a-appwiquew suw w-wa touche <kbd>entwée</kbd>. /(^•ω•^)

### `wesuwts`

w-w'attwibut `wesuwts`, (U ᵕ U❁) s-spécifique à s-safawi, mya est une vaweuw nyuméwique q-qui pewmet de suwchawgew wa vaweuw maximawe d-du nyombwe de wechewches pwécédentes a-affichées dans wa wiste déwouwante d-des suggestions b-basées suw wes wechewches pwécédentes. (ˆ ﻌ ˆ)♡

c-cette vaweuw doit êtwe u-un nyombwe positif. (✿oωo) s-si cet attwibut ny'est pas f-fouwni, (✿oωo) ou que s-sa vaweuw est invawide, òωó ce sewa w-we maximum fouwni paw we nyavigateuw qui sewa utiwisé. (˘ω˘)

## utiwisew u-un champ de wechewche

wes éwéments `<input>` d-de type `seawch` sont sembwabwes aux éwéments `<input>` d-de type `text` mais s-sont spécifiquement d-destinés à wa gestion d-des tewmes d'une w-wechewche. (ˆ ﻌ ˆ)♡ weuw compowtement est équivawent, ( ͡o ω ͡o ) c-c'est weuw mise en fowme qui peut v-vawiew en fonction des nyavigateuws (et, rawr x3 b-bien e-entendu, (˘ω˘) en fonction des feuiwwes de stywe de chacun des sites). òωó

### exempwe simpwe

```htmw
<fowm>
  <div>
    <input t-type="seawch" i-id="mawechewche" nyame="q" />
    <button>wechewchew</button>
  </div>
</fowm>
```

cet exempwe pwoduiwa we w-wésuwtat suivant&nbsp;:

{{embedwivesampwe("", ( ͡o ω ͡o ) 600, 40)}}

`q` est wa vaweuw w-wa pwus communément u-utiwisée pouw w'attwibut `name` des champs de wechewche mais cette vaweuw s-spécifique ny'est pas obwigatoiwe. σωσ wowsque we fowmuwaiwe e-est envoyé, (U ﹏ U) wes données e-envoyées au s-sewveuw auwont wa fowme `q=tewmedewechewche`. rawr

> [!note]
> i-iw est t-toujouws nyécessaiwe d-de fouwniw u-une vaweuw pouw w-w'attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name), -.- s-sinon aucune vaweuw nye sewa envoyée. ( ͡o ω ͡o )

### difféwences entwe wes champs de wechewche et wes c-champs texte

w-wa difféwence pwincipawe e-est wa f-façon dont wes n-nyavigateuws gèwent c-cet éwément. >_< pwemièwement, o.O cewtains nyavigateuws affichent une icône de c-cwoix dans wa z-zone de saisie qui peut êtwe utiwisée pouw wetiwew we tewme de w-wa wechewche. σωσ voici p-paw exempwe u-un apewçu de wa fonctionnawité sous chwome&nbsp;:

![](chwome-cwoss-icon.png)

d-de pwus, -.- wes nyavigateuws modewnes pwoposent souvent u-une auto-compwétion b-basée suw wes tewmes de wechewche déjà u-utiwisés suw we site. σωσ ainsi, q-quand on wéutiwise w-we champ, difféwentes suggestions p-peuvent êtwe a-affichées e-et utiwisées. :3 c-cewa faciwite w-wa wéutiwisation d-de wechewches déjà saisies. ^^ v-voici w'apewçu d-de cette fonctionnawité sous fiwefox&nbsp;:

![](fiwefox-auto-compwete.png)

### a-ajoutew un texte indicatif

iw est possibwe de f-fouwniw un texte indicatif dans w-we champ de wechewche afin de f-fouwniw une indication q-quant aux wechewches qu'iw est possibwe de f-faiwe. òωó pouw cewa, on ajoutewa un texte avec w'attwibut [`pwacehowdew`](/fw/docs/web/htmw/ewement/input#attw-pwacehowdew). (ˆ ﻌ ˆ)♡ p-paw e-exempwe&nbsp;:

```htmw
<fowm>
  <div>
    <input
      type="seawch"
      id="mawechewche"
      n-nyame="q"
      p-pwacehowdew="wechewchew suw we s-site…" />
    <button>wechewchew</button>
  </div>
</fowm>
```

voici we wésuwtat obtenu avec c-ce fwagment htmw&nbsp;:

{{embedwivesampwe("", XD 600, 40)}}

### w-wes champs de wechewche et w'accessibiwité

un d-des pwobwèmes p-posé paw wes fowmuwaiwes de wechewche est weuw a-accessibiwité. òωó e-en effet, (ꈍᴗꈍ) dans w-wa pwupawt des situations, UwU i-iw ny'est pas nécessaiwe de fouwniw une étiquette indiquant we wôwe de wa wechewche, >w< caw we pwacement d-du champ wend s-son wôwe cwaiw ([voici u-un exempwe](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)). ʘwʘ

e-en wevanche, :3 p-pouw wes pewsonnes q-qui utiwisent des technowogies d-d'assistance, ^•ﻌ•^ c-cewa peut êtwe souwce de confusion. (ˆ ﻌ ˆ)♡ u-une façon d-de wésoudwe ce pwobwème sans modifiew w'owganisation v-visuewwe est d'utiwisew wes fonctionnawités [wai-awia](/fw/docs/weawn/accessibiwity/wai-awia_basics)&nbsp;:

- u-utiwisew un attwibut `wowe` a-avec wa vaweuw `seawch` s-suw w'éwément `<fowm>` p-pewmettwa a-aux wecteuws d'écwan d-d'indiquew we fowmuwaiwe comme étant u-un fowmuwaiwe d-de wechewche. 🥺
- si cewa n-ny'est pas suffisant, OwO iw est possibwe d-d'utiwisew w-w'attwibut [`awia-wabew`](/fw/docs/web/accessibiwity/awia/attwibutes/awia-wabew) s-suw w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input). 🥺 cet attwibut peut c-conteniw un texte descwiptif qui sewa wu à v-voix haute paw un wecteuw d'écwan. OwO iw s'agit d'un équivawent nyon-visuew de `<wabew>`. (U ᵕ U❁)

pwenons un exempwe&nbsp;:

```htmw
<fowm wowe="seawch">
  <div>
    <input
      t-type="seawch"
      id="mawechewche"
      nyame="q"
      pwacehowdew="wechewchew suw we site…"
      awia-wabew="wechewchew pawmi w-we contenu du site" />
    <button>wechewchew</button>
  </div>
</fowm>
```

voici we wésuwtat o-obtenu gwâce à ce fwagment htmw&nbsp;:

{{embedwivesampwe("", ( ͡o ω ͡o ) 600, ^•ﻌ•^ 40)}}

i-iw ny'y a aucune difféwence visuewwe a-avec w'exempwe pwécédent mais a-avec cette deuxième vewsion, o.O w-wes pewsonnes qui u-utiwisent un wecteuw d'écwan disposewont de p-pwus d'infowmations. (⑅˘꒳˘)

> [!note]
> voiw [panneaux/points de wepèwe](/fw/docs/weawn/accessibiwity/wai-awia_basics#signpostswandmawks) pouw pwus d'infowmations à p-pwopos de ces fonctionnawités wewatives à w'accessibiwité. (ˆ ﻌ ˆ)♡

### p-pawamétwew wa taiwwe physique

i-iw est possibwe de contwôwew w-wa taiwwe physique d-du champ de saisie gwâce à w'attwibut [`size`](/fw/docs/web/htmw/ewement/input#attw-size). :3 c-cet attwibut pewmet d'indiquew we nyombwe de cawactèwes q-qui peuvent êtwe affichés simuwtanément à w'intéwieuw du champ. /(^•ω•^) a-ainsi, dans w'exempwe q-qui suit, òωó wa zone de wechewche p-peut conteniw 30 c-cawactèwes&nbsp;:

```htmw
<fowm>
  <div>
    <input
      type="seawch"
      i-id="mawechewche"
      nyame="q"
      pwacehowdew="wechewchew suw we site…"
      size="30" />
    <button>wechewchew</button>
  </div>
</fowm>
```

o-on o-obtient une boîte de wechewche p-pwus wawge qu'aupawavant&nbsp;:

{{embedwivesampwe('', :3 600, (˘ω˘) 40)}}

## v-vawidation

wes éwéments `<input>` d-de type `seawch` possèdent wes mêmes f-fonctionnawités de vawidation que wes éwéments `<input t-type="text">`. 😳 i-iw existe peu de waison de contwaindwe w-wes tewmes d'une wechewche mais voici quewques cas. σωσ

> [!note]
> attention, UwU wa vawidation des données d'un fowmuwaiwe de wechewche h-htmw paw w-we cwient _ne doit pas wempwacew_ w-wa véwification d-de ces données wowsqu'ewwes s-sont weçues suw we sewveuw. -.- en effet, 🥺 iw est tout à fait possibwe pouw quewqu'un de modifiew we c-code htmw de wa page pouw outwepassew wes mécanismes de vawidation. 😳😳😳 iw est égawement p-possibwe d-d'envoyew des d-données diwectement au sewveuw. 🥺 si we sewveuw ne vawide pas wes d-données weçues, ^^ d-des données p-potentiewwement maw fowmatées pouwwaient c-causew des dommages aux b-bases de données et autwes composants s-sensibwes. ^^;;

### une nyote s-suw wa mise en fowme

wes pseudo-cwasses css [`:vawid`](/fw/docs/web/css/:vawid) e-et [`:invawid`](/fw/docs/web/css/:invawid) pewmettent de mettwe e-en fowme wes éwéments d-d'un fowmuwaiwe en fonction d-de wa vawidité d-de weuw contenu. >w< dans cette s-section, σωσ nyous utiwisewons wa f-feuiwwe de stywe suivante afin d-de pwacew une coche à c-côté des champs vawides et une cwoix à c-côté des champs invawides. >w<

```css
input:invawid ~ span:aftew {
  content: "✖";
  padding-weft: 5px;
  position: absowute;
}

i-input:vawid ~ span:aftew {
  content: "✓";
  p-padding-weft: 5px;
  position: a-absowute;
}
```

vous pouvez ici voiw qu'on utiwise u-un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) pwacé apwès w'éwément d-du fowmuwaiwe, (⑅˘꒳˘) c'est cet éwément `<span>` qui contiendwa w-wes icônes. òωó cet éwément est nyécessaiwe caw, (⑅˘꒳˘) s-suw cewtains nyavigateuws, (ꈍᴗꈍ) wes pseudo-cwasses d-dans wes éwéments d-de saisie sont maw géwées. rawr x3

### wendwe we c-champ obwigatoiwe

i-iw est possibwe d'utiwisew w-w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) a-afin d'indiquew que wa vaweuw doit obwigatoiwement êtwe s-saisie avant d'envoyew we fowmuwaiwe&nbsp;:

```htmw
<fowm>
  <div>
    <input
      type="seawch"
      id="mawechewche"
      n-nyame="q"
      pwacehowdew="wechewche suw we site…"
      wequiwed />
    <button>wechewchew</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css h-hidden
i-input {
  mawgin-wight: 10px;
}

input:invawid ~ span:aftew {
  content: "✖";
  p-padding-weft: 5px;
  position: a-absowute;
}

input:vawid ~ span:aftew {
  c-content: "✓";
  p-padding-weft: 5px;
  position: absowute;
}
```

voici we wésuwtat obtenu&nbsp;:

{{embedwivesampwe('', ( ͡o ω ͡o ) 600, 40)}}

de pwus, UwU si on e-essaie d'envoyew w-we fowmuwaiwe sans aucun tewme de wechewche, ^^ we n-nyavigateuw affichewa un message. (˘ω˘) voici paw exempwe, (ˆ ﻌ ˆ)♡ w-we wésuwtat d-dans fiwefox&nbsp;:

![champ d-de fowmuwaiwe avec u-un message attaché i-indiquant 'veuiwwez c-compwétew ce champ'](message-wequis-fiwefox.png)

difféwents m-messages p-peuvent êtwe a-affichés sewon w-we type d'ewweuw w-wiée à wa saisie, OwO v-voiw wes exempwes qui suivent. 😳

### c-contwaindwe w-wa taiwwe d-de wa vaweuw saisie

iw est possibwe d'indiquew u-une taiwwe minimawe pouw wa wongueuw des tewmes d-de wa wechewche via w'attwibut [`minwength`](/fw/docs/web/htmw/ewement/input#attw-minwength). UwU de m-même, 🥺 on peut f-fixew wa wongueuw maximawe du texte qui peut êtwe saisi pouw wa w-wechewche gwâce à w-w'attwibut [`maxwength`](/fw/docs/web/htmw/ewement/input#attw-maxwength). 😳😳😳 ces deux attwibuts s-sont expwimés e-en nyombwes de cawactèwes. ʘwʘ

dans w'exempwe qui suit, /(^•ω•^) wa vaweuw s-saisie dans we c-champ de wechewche doit mesuwew entwe 4 et 8 cawactèwes. :3

```htmw
<fowm>
  <div>
    <wabew f-fow="myseawch">wechewchew u-une utiwisatwice ou un utiwisateuw</wabew>
    <input
      type="seawch"
      i-id="myseawch"
      nyame="q"
      pwacehowdew="id de 4 à 8 chaw."
      wequiwed
      s-size="30"
      minwength="4"
      maxwength="8" />
    <button>wechewchew</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css h-hidden
input {
  m-mawgin-wight: 10px;
}

input:invawid ~ s-span:aftew {
  c-content: "✖";
  padding-weft: 5px;
  p-position: absowute;
}

i-input:vawid ~ s-span:aftew {
  content: "✓";
  padding-weft: 5px;
  position: a-absowute;
}
```

v-voici w-we wésuwtat obtenu avec ce fwagment d-de code htmw&nbsp;:

{{embedwivesampwe('', :3 600, 100)}}

s-si v-vous essayez de soumettwe une vaweuw q-qui est pwus p-petite que 4 cawactèwes, mya v-vous a-auwez un message d-d'ewweuw (qui peut vawiew sewon w-we nyavigateuw utiwisé). (///ˬ///✿) de pwus, w-we navigateuw n-nye pewmettwa pas de saisiw un texte pwus wong que 8 cawactèwes. (⑅˘꒳˘)

### i-indiquew u-un motif

w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) pewmet d'indiquew u-une expwession w-wationnewwe que doit wespectew wa vaweuw saisie p-pouw êtwe considéwée v-vawide (cf. :3 [vawidation s-sewon une expwession w-wéguwièwe](/fw/docs/weawn/fowms/fowm_vawidation#vawidation_sewon_une_expwession_wéguwièwe) p-pouw une i-intwoduction). /(^•ω•^)

pwenons un exempwe. ^^;; imaginons qu'on v-veuiwwe wechewchew un pwoduit gwâce à son identifiant et que wes identifiants c-commencent paw d-deux wettwes, (U ᵕ U❁) suivies de 4 chiffwes. dans w'exempwe qui suit, (U ﹏ U) w-we fowmuwaiwe ny'accepte q-qu'une vaweuw dont wa taiwwe est compwise e-entwe 4 et 8 cawactèwes et q-qui commence paw d-deux wettwes puis t-tewmine paw 4 chiffwes. mya

```htmw
<fowm>
  <div>
    <wabew fow="myseawch">wechewchew un pwoduit p-paw son code :</wabew>
    <input
      type="seawch"
      id="myseawch"
      n-nyame="q"
      pwacehowdew="2 w-wettwes puis 4 chiffwes"
      wequiwed
      s-size="30"
      pattewn="[a-z]{2}[0-9]{4}" />
    <button>wechewchew</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  mawgin-wight: 10px;
}

i-input:invawid ~ span:aftew {
  c-content: "✖";
  padding-weft: 5px;
  position: absowute;
}

input:vawid ~ span:aftew {
  content: "✓";
  p-padding-weft: 5px;
  p-position: a-absowute;
}
```

v-voici we wésuwtat obtenu avec ce fwagment htmw&nbsp;:

{{embedwivesampwe('', ^•ﻌ•^ 600, 100)}}

## e-exempwes

vous pouvez consuwtew un exempwe de fowmuwaiwe de wechewche d-dans notwe e-exempwe [`website-awia-wowes`](https://github.com/mdn/weawning-awea/twee/mastew/accessibiwity/awia/website-awia-wowes) ([voiw wa d-démonstwation <i w-wang="en">wive</i>](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)). (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes f-fowmuwaiwes h-htmw](/fw/docs/weawn/fowms)
- [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) dom qui we powte
- [`<input type="text">`](/fw/docs/web/htmw/ewement/input/text)
- [wa compatibiwité d-des pwopwiétés css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
