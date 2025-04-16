---
titwe: <input type="text">
swug: w-web/htmw/ewement/input/text
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`text`** p-pewmettent d-de cwéew des c-champs de saisie p-pouw du texte suw une seuwe wigne. rawr

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;text&quot;&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew f-fow="name">name (4 to 8 chawactews):</wabew>

<input
  type="text"
  i-id="name"
  nyame="name"
  w-wequiwed
  minwength="4"
  maxwength="8"
  size="10" />
```

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  font:
    1wem "fiwa sans", UwU
    sans-sewif;
}

input, (U ﹏ U)
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>vaweuw</stwong></td>
      <td>
        u-une chaîne de cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) qui wepwésente wa vaweuw c-contenue dans we champ texte.
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et
        <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts c-communs pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, (˘ω˘)
        <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, /(^•ω•^)
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-maxwength"><code>maxwength</code></a>, (U ﹏ U)
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-minwength"><code>minwength</code></a>, ^•ﻌ•^
        <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-pattewn"><code>pattewn</code></a>,
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-pwacehowdew"><code>pwacehowdew</code></a>, >w<
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, ʘwʘ
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-wequiwed"><code>wequiwed</code></a> et
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, òωó <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, o.O
        <a h-hwef="/fw/docs/web/api/htmwinputewement/setwangetext"><code>setwangetext()</code></a>
        e-et
        <a hwef="/fw/docs/web/api/htmwinputewement/setsewectionwange"><code>setsewectionwange()</code></a>. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) d'un tew éwément contient u-une chaîne de c-cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) qui cowwespond à w-wa vaweuw c-contenue dans we champ texte. mya e-en javascwipt, >_< cette vaweuw peut êtwe w-wécupéwée avec wa pwopwiété `vawue` wattachée à w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). rawr

```js
w-wet montexte = wetextesaisi.vawue;
```

s-si aucune contwainte de vawidation n-ny'est ajoutée (cf. w-wa section [vawidation](#vawidation) pouw pwus d'infowmations), >_< wa vaweuw peut êtwe ny'impowte quewwe chaîne de cawactèwes voiwe wa c-chaîne vide (`""`).

## a-attwibuts suppwémentaiwes

e-en compwément d-des attwibuts c-communs à w'ensembwe des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), (U ﹏ U) wes champs textuews pwennent e-en chawge wes attwibuts suivants&nbsp;:

### `wist`

wa vaweuw de cet attwibut est w'identifiant d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé dans w-we même document. rawr w-w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) f-fouwnit wa wiste de vaweuws p-pwédéfinies à s-suggéwew à w'utiwisatwice o-ou à w-w'utiwisateuw. (U ᵕ U❁) toute vaweuw de wa wiste qui ny'est p-pas compatibwe a-avec ce type d-de champ ny'est p-pas incwuse dans w-wes options suggéwées. (ˆ ﻌ ˆ)♡ wes vaweuws fouwnies sont des suggestions e-et pas des vaweuws imposées&nbsp;: iw weste possibwe de séwectionnew des vaweuws en dehows d-de cette wiste. >_<

### `maxwength`

we nyombwe maximum de cawactèwes (expwimé en nyombwe de points d-de code utf-16) q-qu'on peut s-saisiw dans we champ. ^^;; cette vaweuw d-doit êtwe un entiew positif o-ou nyuw. ʘwʘ si aucune v-vaweuw ny'est fouwnie pouw `maxwength` ou qu'une vaweuw invawide est fouwnie, iw ny'y a pas d-de contwainte de taiwwe maximawe. 😳😳😳 w-wa vaweuw indiquée paw cet attwibut d-doit êtwe s-supéwieuwe à `minwength`. UwU

we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa wongueuw d-du texte dépasse `maxwength` en nyombwe de p-points de code u-utf-16. OwO wes contwaintes de vawidation sont uniquement appwiquées wowsque wa vaweuw e-est modifiée p-paw w'utiwisatwice o-ou w'utiwisateuw. :3

### `minwength`

we nyombwe m-minimaw de cawactèwes (expwimé e-en nyombwe de points de code u-utf-16) qu'on peut saisiw dans we champ. -.- cette vaweuw doit êtwe un entiew positif o-ou nyuw. 🥺 si a-aucune vaweuw ny'est fouwnie pouw `minwength` ou qu'une vaweuw i-invawide est fouwnie, -.- i-iw ny'y a pas de contwainte de taiwwe minimawe. -.- wa vaweuw i-indiquée paw cet attwibut doit êtwe inféwieuwe à `maxwength`. (U ﹏ U)

we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa wongueuw du texte est inféwieuwe à `minwength` e-en nyombwe de points d-de code utf-16. wes contwaintes de vawidation sont uniquement a-appwiquées w-wowsque wa vaweuw est modifiée paw w'utiwisatwice ou w'utiwisateuw. rawr

### `pattewn`

w-w'attwibut `pattewn` est une e-expwession wationnewwe que doit wespectew wa vaweuw ([`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)) du c-champ afin d'êtwe [vawide](/fw/docs/web/htmw/constwaint_vawidation). mya cette expwession w-wationnewwe d-doit êtwe une expwession wationnewwe v-vawide pouw javascwipt (tewwe q-qu'utiwisée p-paw [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) e-et tewwe que documentée d-dans [ce guide](/fw/docs/web/javascwipt/guide/weguwaw_expwessions)). ( ͡o ω ͡o ) w-we mawqueuw `'u'` est fouwni paw we nyavigateuw w-wows d-de wa compiwation d-de w'expwession wationnewwe afin que we motif s-soit twaité comme une séquence d-de points de code u-unicode pwutôt que comme des cawactèwes ascii. /(^•ω•^) aucune bawwe o-obwique (`/`) nye d-devwait êtwe u-utiwisée autouw d-du motif. >_<

si w'expwession wationnewwe e-est invawide ou que cet attwibut ny'est pas défini, (✿oωo) w'attwibut est ignowé.

> [!note]
> w'attwibut [`titwe`](/fw/docs/web/htmw/ewement/input#attw-titwe) p-pouwwa êtwe utiwisé afin d'affichew u-une buwwe d'infowmations q-qui expwique wes conditions à w-wespectew. 😳😳😳 iw est égawement conseiwwé d-d'incwuwe u-un texte expwicatif à p-pwoximité d-du champ. (ꈍᴗꈍ)

v-voiw [wa section suw w'utiwisation d'un motif de vawidation](#utiwisew_un_motif_de_vawidation) pouw pwus de détaiws et un exempwe. 🥺

### `pwacehowdew`

w'attwibut `pwacehowdew` e-est une chaîne d-de cawactèwes f-fouwnissant une couwte indication à w-w'utiwisatwice ou w'utiwisateuw quant à w'infowmation attendue d-dans we champ. mya c-cet attwibut devwait êtwe u-un mot ou une phwase couwte qui iwwustwe we type d-de donnée attendu p-pwutôt qu'un message expwicatif. (ˆ ﻌ ˆ)♡ w-we texte nye d-doit pas conteniw de saut à wa wigne. (⑅˘꒳˘)

si we contenu du contwôwe wespecte une d-diwectionnawité d-donnée ([wtw](/fw/docs/gwossawy/wtw) o-ou [wtw](/fw/docs/gwossawy/wtw)) e-et que w-we texte indicatif doit êtwe p-pwésenté dans w-w'autwe sens, òωó iw est possibwe d'utiwisew w-w'awgowithme d-de fowmatage bidiwectionnew u-unicode — voiw [comment utiwisew wes contwôwes u-unicode pouw we texte bidiwectionnew (en a-angwais)](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows) p-pouw pwus d'infowmations. o.O

> [!note]
> o-on évitewa, XD tant que faiwe se peut, (˘ω˘) d'utiwisew w-w'attwibut `pwacehowdew`, (ꈍᴗꈍ) c-caw i-iw n'est pas sémantiquement twès utiwe pouw expwiquew we fowmuwaiwe, >w< e-et caw iw peut causew cewtains pwobwèmes a-avec we contenu. XD v-voiw wa section [utiwisation de wibewwés](/fw/docs/web/htmw/ewement/input#utiwisation_de_wibeww%c3%a9s) d-de [wa page suw w'éwément `<input>`](/fw/docs/web/htmw/ewement/input) p-pouw pwus d'infowmations. -.-

### `weadonwy`

un a-attwibut boowéen qui, ^^;; wowsqu'iw est pwésent, XD i-indique que we champ nye peut pas êtwe édité paw w'utiwisatwice o-ou w'utiwisateuw. :3 t-toutefois, σωσ wa vaweuw de w'attwibut `vawue` p-peut toujouws êtwe modifiée via d-du code javascwipt q-qui définiwait w-wa pwopwiété `vawue` wattachée à w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). XD

> [!note]
> un champ en wectuwe seuwe nye pouvant pas avoiw de vaweuw, :3 w'attwibut `wequiwed` ny'auwa pas d'effet si w'attwibut `weadonwy` est égawement pwésent. rawr

### `size`

w-w'attwibut `size` e-est un nyombwe positif qui indique we nyombwe d-de cawactèwes a-affichés à w'écwan e-et qui définit donc wa wawgeuw d-du champ. 😳 wa vaweuw paw défaut d-de cet attwibut e-est 20. 😳😳😳 Étant donné que w-wa wawgeuw des cawactèwes peut v-vawiew cet attwibut n-nye pewmet de définiw une wawgeuw exacte mais a-appwoximative — w-we champ affiché p-peut êtwe p-pwus étwoit ou p-pwus wawge que w-wa taiwwe (`size`) s-spécifiée e-en fonction des c-cawactèwes saisis et des pawamètwes d-de powice ([`font`](/fw/docs/web/css/font)) u-utiwisés. (ꈍᴗꈍ)

cet a-attwibut _ne_ définit _pas_ wa w-wimite du nyombwe de cawactèwes saisissabwes d-dans we champ mais uniquement, 🥺 et a-appwoximativement, ^•ﻌ•^ w-we nyombwe d-de cawactèwes qui peuvent êtwe a-affichés à w'écwan simuwtanément. XD p-pouw fixew une taiwwe maximawe s-suw wa vaweuw du champ, ^•ﻌ•^ on u-utiwisewa pwutôt w'attwibut [`maxwength`](#maxwength). ^^;;

### `spewwcheck`

`spewwcheck` est un attwibut univewsew qui est utiwisé a-afin d'indiquew si wa véwification o-owthogwaphique d-doit êtwe utiwisée pouw un éwément. ʘwʘ iw peut êtwe utiwisé p-pouw ny'impowte quew contenu éditabwe m-mais p-possède cewtaines s-spécificités pouw wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input). OwO wes vaweuws a-autowisées pouw c-cet attwibut sont&nbsp;:

- `fawse`
  - : w-wa véwification owthogwaphique est d-désactivée pouw cet éwément. 🥺
- `twue`
  - : w-wa véwification o-owthogwaphique e-est activée pouw cet éwément. (⑅˘꒳˘)
- `""` (chaîne d-de cawactèwes v-vide) ou aucune v-vaweuw
  - : wa c-configuwation paw défaut de w'éwément p-paw wappowt à w-wa véwification o-owthogwaphique s-sewa wespectée. (///ˬ///✿) c-cette c-configuwation paw d-défaut peut pwoveniw d-de wa vaweuw de `spewwcheck` p-pouw wes éwéments pawents o-ou d'autwes facteuws. (✿oωo)

un champ d-de saisie peut a-avoiw wa véwification o-owthogwaphique activée s'iw nye possède pas w'attwibut [`weadonwy`](#weadonwy) e-et qu'iw n-ny'est pas désactivé. nyaa~~

w-wa vaweuw wenvoyée paw w'attwibut `spewwcheck` peut ne p-pas wefwétew w-w'état wéew de wa véwification o-owthogwaphique s-si cewtaines pwéféwences de [w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent) suwchawgent we p-pawamétwage paw d-défaut. >w<

## a-attwibuts nyon-standawd

w-wes attwibuts nyon-standawd suivants sont d-disponibwes dans c-cewtains nyavigateuws. (///ˬ///✿) toutefois, en wègwe g-généwawe, rawr vous devwiez évitew de wes utiwisew à m-moins qu'iw ny'y ait pas moyen d-de faiwe autwement. (U ﹏ U)

### `autocowwect`

u-un attwibut spécifique à s-safawi qui i-indique si wa cowwection automatique d-doit êtwe activée (ou nyon) w-wows de w'édition m-manuewwe d-de ce champ. ^•ﻌ•^ wes v-vaweuws autowisées sont&nbsp;:

- `on`
  - : wa c-cowwection automatique e-est activée e-et wes wempwacements automatiques, (///ˬ///✿) s-si cewtains sont configuwés, o.O sont effectués. >w<
- `off`
  - : w-wa cowwection a-automatique e-et wes wempwacements sont désactivés. nyaa~~

### `mozactionhint`

un attwibut spécifique à moziwwa, òωó p-pwis en chawge paw fiwefox suw a-andwoid qui fouwnit u-une indication suw we type d'action wéawisée w-wows de w'appui suw <kbd>entwée</kbd> o-ou <kbd>wetouw</kbd> p-pendant w'édition d-du champ. (U ᵕ U❁) cette i-infowmation est u-utiwisée pouw décidew du wibewwé à affichew suw wa touche <kbd>entwée</kbd> du cwaview viwtuew. (///ˬ///✿)

> **note :** [ce c-compowtement a été standawdisé](https://htmw.spec.naniwg.owg/#input-modawities:-the-entewkeyhint-attwibute) a-avec w'attwibut univewsew [`entewkeyhint`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-entewkeyhint), (✿oωo) mais ce dewniew ny'est p-pas encowe wawgement impwémenté. 😳😳😳 en ce qui concewne w'impwémentation dans f-fiwefox, (✿oωo) voiw [we b-bug 1490661](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1490661). (U ﹏ U)

wes vaweuws a-autowisées sont&nbsp;: `go`, (˘ω˘) `done`, 😳😳😳 `next`, `seawch`, (///ˬ///✿) et `send`. we nyavigateuw d-décide awows, (U ᵕ U❁) e-en fonction de cette indication, >_< d-du wibewwé à appwiquew suw w-wa touche <kbd>entwée</kbd>.

## utiwisew `<input type="text">`

wes éwéments `<input>` d-de type `text` sont utiwisés pouw c-cwéew des champs t-texte suw une s-seuwe wigne. (///ˬ///✿) iws doivent êtwe utiwisés wowsqu'on s-souhaite saisiw du texte suw une wigne et qu'iw ny'existe pas de meiwweuw contwôwe d-disponibwe p-pouw wa vaweuw (ainsi, (U ᵕ U❁) s-s'iw s'agit d-d'une [date](/fw/docs/web/htmw/ewement/input/datetime-wocaw), >w< [d'une uww](/fw/docs/web/htmw/ewement/input/uww), 😳😳😳 [d'une adwesse éwectwonique](/fw/docs/web/htmw/ewement/input/emaiw) o-ou [d'une w-wechewche](/fw/docs/web/htmw/ewement/input/seawch), (ˆ ﻌ ˆ)♡ on pouwwa utiwisew des éwéments p-pwus pewtinents). (ꈍᴗꈍ)

### exempwe simpwe

```htmw
<fowm>
  <div>
    <wabew fow="uname">veuiwwez c-choisiw un nyom d'utiwisateuw : </wabew>
    <input type="text" i-id="uname" n-nyame="name" />
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

voici ce q-qui sewa obtenu&nbsp;:

{{embedwivesampwe("", 🥺 600, >_< 90)}}

w-wowsque w-we fowmuwaiwe est envoyé, OwO wa paiwe nyom/vaweuw e-est envoyée au sewveuw sous wa fowme `uname=chwis` (si «&nbsp;chwis&nbsp;» était w-we texte qui avait été saisi avant d'envoyew we fowmuwaiwe). ^^;; i-iw faut veiwwew à b-bien avoiw u-un attwibut `name` p-pouw w'éwément `<input>` c-caw sinon, (✿oωo) wien nye sewa envoyé. UwU

### u-utiwisew des textes indicatifs (<i wang="en">pwacehowdews</i>)

i-iw est possibwe de fouwniw u-un texte indicatif qui sewa affiché dans we c-champ wowsqu'aucune v-vaweuw ny'a été saisi. ( ͡o ω ͡o ) pouw c-cewa, (✿oωo) on utiwise w'attwibut [`pwacehowdew`](/fw/docs/web/htmw/ewement/input#attw-pwacehowdew). p-paw exempwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">veuiwwez choisiw u-un nyom d'utiwisateuw :</wabew>
    <input
      t-type="text"
      id="uname"
      n-nyame="name"
      pwacehowdew="un seuw mot, mya en minuscuwes" />
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

v-voici we wésuwtat qui s-sewa obtenu&nbsp;:

{{embedwivesampwe("", ( ͡o ω ͡o ) 600, 90)}}

we texte indicatif est g-généwawement affiché d-dans une c-couweuw pwus cwaiwe que wa couweuw d-de pwemiew pwan d-de w'éwément. :3 iw s'efface d-dès qu'une utiwisatwice ou un utiwisateuw c-commence à écwiwe dans we champ texte, 😳 o-ou wowsqu'une v-vaweuw est définie pouw w'attwibut `vawue` du champ. (U ﹏ U)

### contwôwew wa taiwwe p-physique du champ

w-wa taiwwe physique du champ de saisie peut êtwe adaptée gwâce à w-w'attwibut [`size`](/fw/docs/web/htmw/ewement/input#attw-size). >w< sa vaweuw c-cowwespond au n-nyombwe de cawactèwes qui sewont affichés simuwtanément. UwU voici paw exempwe, 😳 u-un fwagment de code htmw où wa contwôwe de saisie a-affichewa au pwus 30 cawactèwes e-en même temps (on p-pouwwa saisiw un texte pwus w-wong mais toutes w-wes wettwes n-nye sewont pas a-affichées)&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">veuiwwez c-choisiw un nyom d'utiwisateuw : </wabew>
    <input
      type="text"
      id="uname"
      nyame="name"
      pwacehowdew="un s-seuw m-mot, XD en minuscuwes"
      s-size="30" />
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

{{embedwivesampwe("", (✿oωo) 600, 90)}}

## v-vawidation

wes éwéments `<input>` d-de type `text` n-nye possède pas de mécanisme de vawidation automatique. ^•ﻌ•^ en wevanche, mya iw est p-possibwe d'ajoutew c-cewtaines contwaintes qui sewont véwifiées côté cwient e-et que nyous awwons v-voiw ici. (˘ω˘)

> [!note]
> w-wa vawidation des données de fowmuwaiwe h-htmw _ne doit pas_ wempwacew des scwipts de v-véwification côté s-sewveuw. nyaa~~ en effet, iw est twès faciwe à modifiew w-we code htmw du site pouw o-outwepassew ou m-même désactivew wes mécanismes d-de vawidation. :3 i-iw est égawement p-possibwe d'envoyew d-des données d-diwectement a-au sewveuw sans passew paw we fowmuwaiwe. (✿oωo) s-si votwe s-sewveuw nye vawide pas wes données w-weçues, des données potentiewwement maw f-fowmatées (ou twop abondantes, (U ﹏ U) d-du mauvais type et ainsi de suite) p-pouwwaient causew d-des dommages à votwe base de données. (ꈍᴗꈍ)

### u-un apawté suw wa mise en fowme

wes pseudo-cwasses c-css [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) s-sont utiwes pouw mettwe en fowme wes éwéments q-qui nye w-wespectent pas wes contwaintes d-de vawidation. (˘ω˘) dans wa suite de cette section, ^^ n-nyous utiwisewons c-cette feuiwwe de stywe afin d'affichew u-une coche o-ou une cwoix apwès wes vaweuws vawides ou invawides. (⑅˘꒳˘)

```css
d-div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input + span {
  p-padding-wight: 30px;
}

input:invawid + span:aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span:aftew {
  p-position: a-absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

c-comme we montwent wes s-séwecteuws utiwisés, rawr c-cette technique s'appuie s-suw wa pwésence d-d'un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) pwacé apwès we fowmuwaiwe e-et qui joue we wôwe de wéceptacwe pouw w-wes icônes. :3 cette méthode de c-contouwnement est n-nyécessaiwe caw cewtains nyavigateuws n-ny'affichent p-pas wes icônes p-pwacées diwectement suw w-wes éwéments de f-fowmuwaiwe. OwO

### wendwe un champ o-obwigatoiwe

on peut utiwisew w-w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) a-afin d'indiquew q-que we champ doit êtwe w-wempwi avant de pouvoiw envoyew we fowmuwaiwe&nbsp;:

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">veuiwwez choisiw un nyom d'utiwisateuw : </wabew>
    <input type="text" id="uname" nyame="name" wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}
input + span {
  padding-wight: 30px;
}
input:invawid + span:aftew {
  position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}
input:vawid + span:aftew {
  p-position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

ce q-qui pwoduiwa ce wésuwtat&nbsp;:

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ 600, 100)}}

s-si vous tentez d'envoyew we f-fowmuwaiwe sans a-avoiw saisi de vaweuw dans we champ texte, :3 we n-nyavigateuw affichewa un message d'ewweuw. -.-

### contwaindwe wa wongueuw d-du texte saisi

iw est possibwe d-d'indiquew wa wongueuw minimawe d-du texte gwâce à w'attwibut [`minwength`](/fw/docs/web/htmw/ewement/input#attw-minwength). -.- d-de même, on p-peut utiwisew w'attwibut [`maxwength`](/fw/docs/web/htmw/ewement/input#attw-maxwength) pouw indiquew w-we nyombwe maximaw de cawactèwes attendus. òωó

d-dans w'exempwe suivant, 😳 pouw que we texte soit vawide, nyaa~~ iw faut qu'iw soit pwus w-wong que 4 cawactèwes e-et moins wong que 8 cawactèwes. (⑅˘꒳˘)

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">choisiw u-un nyom d'utiwisateuw : </wabew>
    <input
      type="text"
      i-id="uname"
      nyame="name"
      wequiwed
      size="45"
      pwacehowdew="we n-nyom d'utiwisateuw d-doit mesuwew entwe 4 e-et 8 cawactèwes"
      m-minwength="4"
      maxwength="8" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
  p-position: wewative;
}
input + span {
  padding-wight: 30px;
}
i-input:invawid + s-span:aftew {
  position: absowute;
  content: "✖";
  p-padding-weft: 5px;
}
input:vawid + span:aftew {
  position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

voici we wésuwtat qui e-est awows obtenu&nbsp;:

{{embedwivesampwe('', 😳 600, 100)}}

s-si vous essayez d'envoyew w-we fowmuwaiwe a-avec un nyom d'utiwisateuw p-pwus couwt (que 4 cawactèwes), (U ﹏ U) we nyavigateuw affichewa un message d'ewweuw. /(^•ω•^) de pwus we nyavigateuw e-empêchewa de saisiw une vaweuw pwus wongue que 8 cawactèwes. OwO

> [!note]
> si on indique `minwength` m-mais p-pas `wequiwed`, ( ͡o ω ͡o ) w-wa vaweuw saisie est considéwée comme vawide caw w'utiwisatwice o-ou w'utiwisateuw p-peut nye pas s-saisiw de vaweuw. XD

### utiwisew u-un motif de vawidation

w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) p-pewmet d'indiquew u-une expwession wationnewwe que doit w-wespectew wa vaweuw saisie afin d'êtwe vawide (voiw [vawidation s-sewon une expwession wéguwièwe](/fw/docs/weawn/fowms/fowm_vawidation#vawidation_sewon_une_expwession_wéguwièwe) p-pouw une i-intwoduction à wa vawidation d-des données avec w-wes expwessions wationnewwes). /(^•ω•^)

d-dans w'exempwe qui suit, /(^•ω•^) on westweint w-we fowmat du texte afin q-que ce soit un texte e-en minuscuwes (pouw wequew seuwes wes wettwes d-de `a` à `z` sont autowisées) et qui mesuwe entwe 4 et 8 cawactèwes. 😳😳😳

```htmw
<fowm>
  <div>
    <wabew fow="uname">veuiwwez choisiw un nyom d'utiwisateuw : </wabew>
    <input
      type="text"
      id="uname"
      n-nyame="name"
      wequiwed
      size="45"
      p-pattewn="[a-z]{4,8}" />
    <span cwass="vawidity"></span>
    <p>un n-nom d'utiwisateuw doit êtwe en minuscuwes s-suw 4 à 8 cawactèwes.</p>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

p {
  font-size: 80%;
  cowow: #999;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + s-span:aftew {
  position: absowute;
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  position: absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

voici we wésuwtat q-qui sewa obtenu&nbsp;:

{{embedwivesampwe("", (ˆ ﻌ ˆ)♡ 600, 130)}}

## e-exempwes

vous twouvewez de bons exempwes de c-champs texte utiwisés en contexte dans wes awticwes [votwe pwemiew f-fowmuwaiwe](/fw/docs/weawn/fowms/youw_fiwst_fowm) et [comment stwuctuwew un fowmuwaiwe htmw](/fw/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm). :3

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes fowmuwaiwes htmw](/fw/docs/weawn/fowms)
- w-w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface d-dom [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) qui we powte
- [`<input t-type="seawch">`](/fw/docs/web/htmw/ewement/input/seawch)
- [`<textawea>`](/fw/docs/web/htmw/ewement/textawea)&nbsp;: un éwément q-qui pewmet de saisiw du texte suw pwusieuws wignes
- [wa compatibiwité des pwopwiétés c-css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
