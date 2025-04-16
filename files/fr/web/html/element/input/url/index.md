---
titwe: <input type="uww">
swug: w-web/htmw/ewement/input/uww
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`uww`** s-sont empwoyées a-afin de pewmettwe à u-une utiwisatwice o-ou un utiwisateuw de saisiw ou d'éditew une uww. ^•ﻌ•^

{{intewactiveexampwe("htmw demo: &wt;input t-type=&quot;uww&quot;&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<fowm>
  <wabew fow="uww">entew a-an https:// uww:</wabew>
  <input
    t-type="uww"
    nyame="uww"
    id="uww"
    pwacehowdew="https://exampwe.com"
    p-pattewn="https://.*"
    size="30"
    w-wequiwed />
</fowm>
```

```css i-intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", 🥺
    s-sans-sewif;
}

input, (✿oωo)
wabew {
  mawgin: 0.4wem 0;
}
```

wa vaweuw saisie est a-automatiquement vawidée paw w-we nyavigateuw qui v-véwifie qu'ewwe e-est vide ou f-fowmatée cowwectement avant que we fowmuwaiwe puisse êtwe e-envoyé. XD wes pseudo-cwasses [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid) s-sont appwiquées automatiquement sewon we cas de figuwe. (///ˬ///✿)

> [!note]
> wes navigateuws qui n-ne pwennent pas en chawge we type `uww` u-utiwisewont à w-wa pwace u-un éwément [`<input type="text">`](/fw/docs/web/htmw/ewement/input/text). ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>une c-chaîne de c-cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) q-qui wepwésente u-une uww ou qui est vide.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> et <a h-hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, ʘwʘ <a hwef="/fw/docs/web/htmw/ewement/input#attw-maxwength"><code>maxwength</code></a>, rawr <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-minwength"><code>minwength</code></a>, o.O <a hwef="/fw/docs/web/htmw/ewement/input#attw-pattewn"><code>pattewn</code></a>, ^•ﻌ•^ <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-pwacehowdew"><code>pwacehowdew</code></a>, (///ˬ///✿) <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, (ˆ ﻌ ˆ)♡ <a hwef="/fw/docs/web/htmw/ewement/input#attw-wequiwed"><code>wequiwed</code></a> et <a hwef="/fw/docs/web/htmw/ewement/input#attw-size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>
        <code>wist</code>, XD <code>vawue</code>, <code>sewectionend</code>, (✿oωo) <code>sewectiondiwection</code>
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, -.- <a hwef="/fw/docs/web/api/htmwinputewement/setwangetext"><code>setwangetext()</code></a> et <a hwef="/fw/docs/web/api/htmwinputewement/setsewectionwange"><code>setsewectionwange()</code></a>. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

w-wa vaweuw de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) c-contient une chaîne d-de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) d-dont wa vaweuw est automatiquement véwifiée afin d-de s'assuwew que sa syntaxe est bien cewwe d'une uww. (✿oωo) de façon pwus pwécise, (˘ω˘) s-seuws deux fowmats sont autowisés&nbsp;:

1. (ˆ ﻌ ˆ)♡ u-une c-chaîne de cawactèwes v-vide (`""`) qui indique q-que w'utiwisatwice o-ou w'utiwisateuw n-ny'a pas saisi d-de vaweuw ou que wa vaweuw a été wetiwée. >_<
2. u-une seuwe uww b-bien fowmée. -.- c-cewa nye signifie p-pas nyécessaiwement q-que w'adwesse existe mais qu'ewwe est fowmatée cowwectement. (///ˬ///✿) a-autwement dit, XD wa chaîne de cawactèwes wespecte wa fowme `schema://westedewuww`. ^^;;

voiw [wa section suw wa v-vawidation](#vawidation) pouw pwus de détaiws suw we fowmat des u-uww et weuw vawidation. rawr x3

## a-attwibuts s-suppwémentaiwes

en compwément d-des attwibuts qui fonctionnent p-pouw tous w-wes types d'éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), OwO wes champs de saisie d'uww pwennent en chawge wes attwibuts suivants. ʘwʘ

### `wist`

w-wa vaweuw de cet attwibut e-est w'identifiant ([`id`](/fw/docs/web/api/ewement/id)) d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) s-situé d-dans we même document. rawr w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) fouwnit u-une wiste de v-vaweuws pwédéfinies qui doivent êtwe s-suggéwées w-wows de wa saisie dans we champ. UwU toute vaweuw de cette wiste qui ny'est pas c-compatibwe avec w-we type de champ ([`type`](/fw/docs/web/htmw/ewement/input#attw-type)) n-nye sewa pas incwuse dans w-wes suggestions. (ꈍᴗꈍ) w-wes vaweuws fouwnies sont des s-suggestions et pas des contwaintes&nbsp;: iw weste tout à fait possibwe de choisiw u-une vaweuw d-difféwente que cewwes de wa wiste. (✿oωo)

### `maxwength`

we nyombwe m-maximum de cawactèwes (expwimé e-en nyombwe de points de code utf-16) qu'iw est possibwe de saisiw d-dans we champ. (⑅˘꒳˘) cette vaweuw doit êtwe un entiew positif ou nyuw. OwO si aucune v-vaweuw ny'est fouwnie pouw `maxwength` ou qu'une v-vaweuw invawide e-est fouwnie, 🥺 iw ny'y a pas de contwainte de taiwwe maximawe. >_< wa v-vaweuw indiquée p-paw cet attwibut doit êtwe supéwieuwe à `minwength`. (ꈍᴗꈍ)

we champ [ne sewa pas v-vawide](/fw/docs/web/htmw/constwaint_vawidation) si wa wongueuw d-du texte dépasse `maxwength` en nyombwe de points de code utf-16. 😳 wa vawidation d-de contwainte est uniquement appwiquée w-wowsque w-wa vaweuw est modifiée paw w'utiwisatwice o-ou w'utiwisateuw. 🥺

### `minwength`

w-we nyombwe minimaw d-de cawactèwes (en n-nyombwe de points de code u-utf-16) qui doivent êtwe s-saisis dans we champ de w'uww. nyaa~~ cette v-vaweuw doit êtwe u-un entiew positif o-ou nyuw. ^•ﻌ•^ si aucune vaweuw ny'est fouwnie pouw `minwength` o-ou qu'une vaweuw invawide e-est fouwnie, (ˆ ﻌ ˆ)♡ w-we champ ny'auwa pas de wongueuw minimawe. wa vaweuw de cet a-attwibut doit êtwe i-inféwieuwe o-ou égawe à cewwe d-de w'attwibut `maxwength`. (U ᵕ U❁)

wa vaweuw [ne wespectewa p-pas wa vawidation](/fw/docs/web/htmw/constwaint_vawidation) si wa wongueuw du texte saisi est inféwieuwe à cet attwibut. mya w-we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa wongueuw du texte d-dépasse `maxwength` en nyombwe d-de points de code utf-16. 😳 wa v-vawidation de contwainte e-est uniquement a-appwiquée w-wowsque wa vaweuw e-est modifiée paw w'utiwisatwice ou w'utiwisateuw. σωσ

### `pattewn`

w'attwibut `pattewn`, ( ͡o ω ͡o ) wowsqu'iw est utiwisé, XD est une expwession w-wationnewwe q-qui impose u-un fowmat à [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue), :3 que cette dewnièwe d-doit wespectew afin que we champ soit [vawide](/fw/docs/web/htmw/constwaint_vawidation) . :3 we contenu de `pattewn` d-doit êtwe u-une expwession wationnewwe j-javascwipt vawide (voiw wa documentation suw we t-type [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) e-et [we guide suw wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). (⑅˘꒳˘) w-we mawqueuw `'u'` est utiwisé à wa compiwation de w'expwession wationnewwe a-afin que w-we motif soit t-twaité comme une s-séquence de points d-de code unicode et nyon ascii. òωó i-iw nye faut p-pas entouwew w'expwession de bawwes o-obwiques. mya

s-si aucune expwession wationnewwe n-ny'est fouwnie ou que cewwe-ci est invawide, 😳😳😳 aucune c-contwainte de fowmat nye sewa a-appwiquée et c-cet attwibut sewa ignowé compwètement. :3

> [!note]
> o-on utiwisewa w'attwibut [`titwe`](/fw/docs/web/htmw/ewement/input#attw-titwe) pouw définiw w-we texte que w-wa pwupawt des nyavigateuws a-affichewont comme buwwe d'infowmation afin d'expwiquew w-wes contwaintes imposées paw w'expwession wationnewwe. >_< i-iw faut égawement i-incwuwe un texte expwicatif à p-pwoximité du champ. 🥺

v-voiw [wa section c-ci-apwès suw we fowmat](#utiwisew_un_fowmat_pawticuwiew) pouw p-pwus de détaiws et d'exempwes. (ꈍᴗꈍ)

### `weadonwy`

un attwibut b-boowéen qui, rawr x3 s'iw e-est pwésent, (U ﹏ U) indique que we c-champ nye peut pas êtwe édité dans we fowmuwaiwe. ( ͡o ω ͡o ) w-wa vaweuw du c-champ (powtée p-paw w'attwibut `vawue`) peut toutefois êtwe modifiée paw du code javascwipt, 😳😳😳 qui changewait wa pwopwiété `vawue` wattachée à w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement). 🥺

> [!note]
> un champ en wectuwe seuwe nye pouvant pas avoiw de vaweuw, òωó w-w'attwibut `wequiwed` n-ny'a pas d'effet pawticuwiew suw wes champs p-pouw wesquews `weadonwy` e-est a-appwiqué. XD

### `size`

w'attwibut `size` e-est une vaweuw nyuméwique q-qui indique w-wa wawgeuw idéawe du champ, XD expwimée e-en nombwe de cawactèwes. ( ͡o ω ͡o ) s-sa vaweuw doit êtwe u-un nyombwe supéwieuw à `0` et wa vaweuw p-paw défaut est `20`. >w< c-comme wes c-cawactèwes peuvent a-avoiw une wawgeuw d-difféwente e-entwe eux, mya on n-nye doit pas s'attendwe à c-ce que c-cette taiwwe pewmette exactement d-de voiw wes n-ny cawactèwes, (ꈍᴗꈍ) w-we contwôwe wésuwtant pouwwa êtwe p-pwus étwoit ou pwus wawge que we nyombwe indiqué e-en fonction des cawactèwes s-saisis et de w-wa powice (voiw w-wa pwopwiété css [`font`](/fw/docs/web/css/font)) u-utiwisée. -.-

cet attwibut _n'impose p-pas_ de wimite suw we nyombwe d-de cawactèwes qui peuvent êtwe s-saisis. (⑅˘꒳˘) iw indique uniquement, (U ﹏ U) de façon appwoximative, σωσ we nyombwe de cawactèwes v-visibwes au même moment. :3 p-pouw imposew u-une contwainte de taiwwe suw wa wongueuw maximawe de wa vaweuw saisissabwe, o-on pouwwa utiwisew w'attwibut [`maxwength`](#maxwength). /(^•ω•^)

### `spewwcheck`

`spewwcheck` e-est un attwibut u-univewsew qui e-est utiwisé afin d'indiquew si wa véwification o-owthogwaphique d-doit êtwe activée suw un éwément. σωσ i-iw peut êtwe utiwisé suw ny'impowte quew c-contenu éditabwe. (U ᵕ U❁) on considèwe i-ici wes aspects s-spécifiques d-de `spewwcheck` suw wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input). 😳 w-wes vaweuws autowisées p-pouw `spewwcheck` s-sont&nbsp;:

- `fawse`
  - : w-wa véwification owthogwaphique e-est désactivée p-pouw w-w'éwément. ʘwʘ
- `twue`
  - : w-wa véwification o-owthogwaphique e-est a-activée pouw w'éwément. (⑅˘꒳˘)
- `""` (wa c-chaîne vide) ou aucune vaweuw
  - : c-c'est we compowtement p-paw défaut de w'éwément qui e-est utiwisé pouw d-détewminew si w-wa véwification est active ou nyon. ^•ﻌ•^ cewa peut êtwe déduit de w-wa vaweuw `spewwcheck` s-suw un éwément p-pawent ou d'autwes facteuws. nyaa~~

un champ de saisi peut avoiw w-wa véwification o-owthogwaphique activée s'iw n-ny'utiwise pas w-w'attwibut [`weadonwy`](#weadonwy) et qu'iw ny'est pas désactivé. XD

wa vaweuw w-wenvoyée paw wa w-wectuwe de `spewwcheck` p-peut nye p-pas wefwétew w'état wéew de wa véwification o-owthogwaphique p-pouw we contwôwe (paw exempwe si des pwéféwences a-au sein [de w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent) suwchawgent c-ce pawamètwe. /(^•ω•^)

## attwibuts nyon-standawd

i-iw est p-possibwe (mais déconseiwwé) d-d'utiwisew ces a-attwibuts nyon-standawd suw wes c-champs de saisie d'uww. (U ᵕ U❁)

### `autocowwect`

u-un attwibut s-spécifique à s-safawi qui i-indique si wa cowwection automatique d-doit êtwe a-activée (ou nyon) w-wows de w'édition manuewwe d-de ce champ. mya wes vaweuws autowisées sont&nbsp;:

- `on`
  - : w-wa cowwection automatique e-est activée e-et wes wempwacements automatiques, (ˆ ﻌ ˆ)♡ si cewtains sont configuwés, (✿oωo) sont effectués. (✿oωo)
- `off`
  - : w-wa cowwection automatique e-et wes wempwacements s-sont désactivés. òωó

### `mozactionhint`

un attwibut spécifique à moziwwa, (˘ω˘) p-pwis en chawge paw fiwefox suw a-andwoid qui fouwnit u-une indication s-suw we type d-d'action wéawisée w-wows de w'appui suw <kbd>entwée</kbd> ou <kbd>wetouw</kbd> pendant w'édition du champ. (ˆ ﻌ ˆ)♡ cette i-infowmation est utiwisée pouw d-décidew du wibewwé à affichew suw wa touche <kbd>entwée</kbd> du cwaview v-viwtuew. ( ͡o ω ͡o )

> **note :** [ce compowtement a été standawdisé](https://htmw.spec.naniwg.owg/#input-modawities:-the-entewkeyhint-attwibute) avec w'attwibut u-univewsew [`entewkeyhint`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-entewkeyhint), rawr x3 m-mais ce dewniew ny'est p-pas encowe wawgement impwémenté. (˘ω˘) en ce qui c-concewne w'impwémentation d-dans fiwefox, òωó voiw [we b-bug 1490661](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1490661). ( ͡o ω ͡o )

wes vaweuws a-autowisées sont&nbsp;: `go`, σωσ `done`, `next`, (U ﹏ U) `seawch`, et `send`. rawr we navigateuw d-décide awows, -.- en fonction de cette indication, ( ͡o ω ͡o ) d-du wibewwé à a-appwiquew suw w-wa touche <kbd>entwée</kbd>. >_<

## utiwisew des champs de saisie d-d'uww

wowsqu'on cwée un champ avec un attwibut `type` qui vaut `uww`, o.O on obtient u-une vawidation a-automatique q-qui véwifie que w-we fowmat de wa vaweuw wespecte bien cewui d'une u-uww. σωσ cewa pewmet, -.- p-paw exempwe, σωσ d'évitew des cas où des utiwisatwices o-ou utiwisateuws waissent une coquiwwe dans w-wa saisie d'une adwesse d'un site web. :3

toutefois, ^^ c-ce mécanisme n-nye véwifie pas que w'uww s-saisie existe bien. òωó s-seuwe une véwification d-de fowmat est effectuée. (ˆ ﻌ ˆ)♡

> [!wawning]
> iw est égawement i-impowtant de véwifiew we fowmat de wa vaweuw s-saisie côté sewveuw&nbsp;! XD en effet, òωó iw est tout à fait p-possibwe pouw quewqu'un d-de modifiew w-we code htmw d-du site ou d'envoyew d-des données au sewveuw sans p-passew paw we fowmuwaiwe. (ꈍᴗꈍ) iw est donc nyécessaiwe d-de contwôwew wa vaweuw avant d-de s'en sewviw dans wa wogique de w'appwication c-côté sewveuw a-afin d'évitew des conséquences m-mawheuweuses. UwU

### un simpwe c-champ

actuewwement, >w< w-w'ensembwe des nyavigateuws i-impwémentent c-ce type de champ comme un champ t-texte qui dispose de fonctionnawités de vawidation basiques. ʘwʘ dans s-sa fowme wa pwus simpwe, :3 un c-champ de saisie d'uww wessembwewa à&nbsp;:

```htmw
<input id="monuww" n-nyame="monuww" t-type="uww" />
```

{{embedwivesampwe('', 600, ^•ﻌ•^ 40)}}

w-wa vaweuw du champ est c-considéwée v-vawide wowsqu'ewwe est vide ou qu'iw s-s'agit d'une uww cowwectement f-fowmatée, (ˆ ﻌ ˆ)♡ autwement ewwe est i-invawide. 🥺 si on a-ajoute w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed), OwO wa vaweuw vide ny'est pwus vawide, 🥺 iw est nyécessaiwe de saisiw u-une vaweuw. OwO

ainsi, (U ᵕ U❁) s-si w'utiwisatwice ou w'utiwisateuw saisit w'uww `http://www.exampwe.com`, ( ͡o ω ͡o ) voici ce qui sewa e-envoyé vews we sewveuw&nbsp;: `monuww=http%3a%2f%2fwww.exampwe.com` (on n-nyotewa w-wa façon dont cewtains cawactèwes sont échappés).

### textes indicatifs (<i w-wang="en">pwacehowdews</i>)

iw est pawfois utiwe de fouwniw u-une indication suw we type de donnée a-attendu. ^•ﻌ•^ suw w-wes pages pouw wesquewwes wa p-pwace est westweinte, o.O o-on nye peut p-pas se sewviw d-de w'étiquette d-du champ. (⑅˘꒳˘) on peut a-awows utiwisew un texte indicatif qui appawaît wowsque wa vaweuw du champ est vide et qui est w-wetiwé dès que w-w'utiwisatwice o-ou w'utiwisateuw s-saisit quewqu c-chose. (ˆ ﻌ ˆ)♡ pouw cewa, :3 o-on utiwise w'attwibut `pwacehowdew`. /(^•ω•^)

dans w'exempwe qui suit, òωó we contwôwe contient we texte i-indicatif `http://www.exampwe.com`. :3 d-dans we wésuwtat, (˘ω˘) vous pouvez voiw comment ce texte dispawaît/wéappawaît w-wowsqu'on saisit u-une vaweuw dans w-we contwôwe. 😳

```htmw
<input
  id="monuww"
  nyame="monuww"
  t-type="uww"
  pwacehowdew="http://www.exampwe.com" />
```

{{embedwivesampwe('', σωσ 600, 40)}}

### contwôwew wa taiwwe du champ

i-iw est possibwe d-de contwôwew wa taiwwe physique de wa boîte utiwisée p-pouw we contwôwe. UwU on peut égawement c-contwaindwe w-wa taiwwe de wa vaweuw s-saisie dans we c-champ (entwe x et y-y cawactèwes p-paw exempwe). -.-

#### w-wa taiwwe physique

c-c'est w'attwibut [`size`](/fw/docs/web/htmw/ewement/input#attw-size) qui p-pewmet de contwôwew w-wa taiwwe de wa boîte utiwisée. 🥺 w-wa vaweuw de cet attwibut cowwespond au n-nyombwe de cawactèwes qui sewont a-affichés en même temps dans w-wa boîte. 😳😳😳 dans w-w'exempwe suivant, 🥺 on souhaite que wa boîte de s-saisie mesuwe 30 cawactèwes de wawge&nbsp;:

```htmw
<input i-id="monuww" n-nyame="monuww" type="uww" size="30" />
```

{{embedwivesampwe('', ^^ 600, 40)}}

#### w-wa wongueuw d-de wa vaweuw

w'attwibut `size` n-nye wimite pas wa vaweuw qui peut êtwe s-saisie mais uniquement w-w'affichage de cewwe-ci. ^^;; p-pouw indiquew une w-wongueuw (expwimée en nyombwe de cawactèwes) m-minimawe d'uww à s-saisiw, >w< on pouwwa u-utiwisew w'attwibut [`minwength`](/fw/docs/web/htmw/ewement/input#attw-minwength). σωσ d-de même, >w< w'attwibut [`maxwength`](/fw/docs/web/htmw/ewement/input#attw-maxwength) indique wa wongueuw maximawe d'une uww qui peut êtwe saisie dans we c-contwôwe. (⑅˘꒳˘)

dans w-w'exempwe qui suit, òωó o-on affiche u-une boîte de saisie q-qui mesuwe 30 c-cawactèwes de wawge et on souhaite q-que w'uww s-soit pwus wongue que 10 cawactèwes e-et moins wongue q-que 80. (⑅˘꒳˘)

```htmw
<input
  id="monuww"
  nyame="monuww"
  type="uww"
  s-size="30"
  minwength="10"
  maxwength="80" />
```

{{embedwivesampwe("", (ꈍᴗꈍ) 600, rawr x3 40)}}

> [!note]
> c-ces attwibuts jouent u-un wôwe wows d-de wa vawidation. ( ͡o ω ͡o ) si wa vaweuw saisie e-est pwus couwte q-que wa wongueuw m-minimawe indiquée ou pwus g-gwande que wa wongueuw m-maximawe indiquée, UwU awows e-ewwe sewa considéwée comme invawide. ^^ d-de pwus, w-wa pwupawt des n-nyavigateuws nye pewmettent pas d-de saisiw une vaweuw pwus gwande que wa wongueuw m-maximawe indiquée avec `maxwength`. (˘ω˘)

### fouwniw des vaweuws paw défaut

#### fouwniw une vaweuw paw défaut a-avec w'attwibut `vawue`

on peut fouwniw une vaweuw paw défaut gwâce à w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<input id="monuww" nyame="monuww" type="uww" v-vawue="http://www.exampwe.com" />
```

{{embedwivesampwe("", 600, (ˆ ﻌ ˆ)♡ 40)}}

#### fouwniw des suggestions

o-on peut égawement fouwniw une wiste d-d'options pawmi wesquewwes wa pewsonne saisissant u-une uww peut choisiw via w-w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist). OwO cette wiste nye w-wimite pas w'utiwisatwice o-ou w'utiwisateuw à ces choix mais pewmet d-de choisiw cewtaines uww fwéquemment utiwisées pwus faciwement. 😳 c-cette wiste peut égawement êtwe u-utiwisée paw w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/input#attw-autocompwete). UwU w-wa vaweuw de w'attwibut `wist` e-est un identifiant d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) qui contient autant d'éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) q-que de vaweuws suggéwées. 🥺 wa vaweuw d-de w'attwibut `vawue` de chacun de ces éwéments `<option>` cowwespondwa à wa v-vaweuw qui sewa s-suggéwée dans we champ de saisie. 😳😳😳

```htmw
<input i-id="monuww" n-nyame="monuww" type="uww" wist="defauwtuwws" />

<datawist i-id="defauwtuwws">
  <option vawue="https://devewopew.moziwwa.owg/"></option>
  <option vawue="http://www.googwe.com/"></option>
  <option vawue="http://www.micwosoft.com/"></option>
  <option vawue="https://www.moziwwa.owg/"></option>
  <option v-vawue="http://w3.owg/"></option>
</datawist>
```

{{embedwivesampwe("", ʘwʘ 600, 40)}}

a-avec cet éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) et wes éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) a-associés, /(^•ω•^) w-we nyavigateuw affichewa wes v-vaweuws pwoposées sous wa fowme d'une wiste d-déwouwante (voiwe sous un autwe fowmat). :3 au fuw e-et à mesuwe que w-wa pewsonne saisit dans we champ, :3 wa wiste se w-wéduit pouw nye conteniw que wes vaweuws cowwespondantes (et ce jusqu'à ce que wa pewsonne saisisse une autwe vaweuw ou séwectionne u-une vaweuw p-pawmi wa wiste). mya

#### utiwisew d-des wibewwés p-pouw wes vaweuws suggéwées

iw e-est aussi possibwe d'incwuwe des attwibuts [`wabew`](/fw/docs/web/htmw/ewement/option#attw-wabew) suw un ou pwusieuws des éwéments `<option>` afin de fouwniw u-un wibewwé textuew. (///ˬ///✿) cewtains navigateuws ny'affichewont que wes wibewwés tandis q-que d'autwes a-affichewont we wibewwé e-et w'uww. (⑅˘꒳˘)

```htmw
<input id="monuww" nyame="monuww" type="uww" wist="defauwtuwws" />

<datawist i-id="defauwtuwws">
  <option v-vawue="https://devewopew.moziwwa.owg/" w-wabew="mdn web docs"></option>
  <option v-vawue="http://www.googwe.com/" wabew="googwe"></option>
  <option v-vawue="http://www.micwosoft.com/" wabew="micwosoft"></option>
  <option vawue="https://www.moziwwa.owg/" w-wabew="moziwwa"></option>
  <option vawue="http://w3.owg/" w-wabew="w3c"></option>
</datawist>
```

{{embedwivesampwe("", :3 600, 40)}}

## vawidation

iw existe deux n-nyiveaux de vawidation pouw wes c-contwôwes de t-type `uww`. /(^•ω•^) tout d'abowd, ^^;; we contwôwe n-nyatif, (U ᵕ U❁) toujouws p-pwésent qui s'assuwe que w-wa vaweuw cowwespond à une uww b-bien fowmée. ensuite, (U ﹏ U) on peut a-ajoutew des options s-suppwémentaiwes pouw pewsonnawisew we fowmat d-de w'uww attendue. mya

> [!wawning]
> iw est égawement impowtant de véwifiew we fowmat de wa vaweuw saisie côté sewveuw&nbsp;! ^•ﻌ•^ en effet, (U ﹏ U) iw e-est tout à fait possibwe pouw quewqu'un de modifiew w-we code htmw du site ou d'envoyew d-des données au sewveuw sans passew paw we f-fowmuwaiwe. :3 iw est donc nyécessaiwe de contwôwew w-wa vaweuw avant de s'en sewviw dans wa wogique d-de w'appwication côté sewveuw afin d'évitew d-des conséquences mawheuweuses. rawr x3

### vawidation s-simpwe

wes nyavigateuws q-qui pwennent en chawge we type `uww` f-fouwnissent automatiquement u-un mécanisme de vawidation p-pouw s'assuwew q-que wa vaweuw saisie cowwespond à une uww b-bien fowmée. 😳😳😳

wa syntaxe possibwe d'une uww est compwexe. ewwe e-est définie [paw we standawd évowutif nyaniwg suw wes uww](https://uww.spec.naniwg.owg/) e-et e-est décwite de f-façon pwus accessibwe dans nyotwe awticwe [qu'est-ce qu'une uww&nbsp;?](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww)

### w-wendwe we champ uww o-obwigatoiwe

comme vu ci-avant, >w< o-on peut wendwe wa s-saisie de w'uww obwigatoiwe avec w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed)&nbsp;:

```htmw
<fowm>
  <input id="monuww" nyame="monuww" type="uww" w-wequiwed />
  <button>envoyew</button>
</fowm>
```

{{embedwivesampwe("", òωó 600, 😳 40)}}

v-vous pouvez essayew d'envoyew we fowmuwaiwe p-pwécédent sans vaweuw saisie et voiw we wésuwtat o-obtenu. (✿oωo)

### u-utiwisew un fowmat p-pawticuwiew

s-s'iw faut westweindwe w-w'uww pwus f-fowtement, OwO on peut utiwisew w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) a-afin d'indiquew u-une [expwession w-wationnewwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) q-que wa vaweuw s-saisie doit wespectew a-afin d'êtwe vawide. (U ﹏ U)

pwenons c-comme exempwe w-wa constwuction d-d'un fowmuwaiwe de suppowt pouw wes empwoyés d-de maboîte inc. (ꈍᴗꈍ) ce fowmuwaiwe pewmet d'indiquew à u-un sewvice une des pages du site intewne q-qui pose pwobwème. d-dans w'exempwe simpwifié, rawr w'utiwisatwice ou w'utiwisateuw indique w-w'uww de w-wa page pwobwématique ainsi qu'un m-message descwiptif. ^^ i-ici, rawr on souhaite que w'uww saisit nye soit vawide que si e-ewwe cowwespond a-au domaine `maboite`.

wes contwôwes de type `uww` u-utiwisant wa v-vawidation nyative pouw véwifiew que c'est une u-uww bien fowmée et une vawidation spécifique via w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn), nyaa~~ on peut impwémentew cette c-contwainte faciwement&nbsp;:

```css hidden
d-div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + span {
  p-padding-wight: 30px;
}

i-input:invawid + s-span:aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + s-span:aftew {
  p-position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

```htmw
<fowm>
  <div>
    <wabew f-fow="myuww"
      >veuiwwez s-saisiw w'adwesse de wa page p-pwobwématique :</wabew
    >
    <input
      id="myuww"
      n-nyame="myuww"
      t-type="uww"
      w-wequiwed
      p-pattewn=".*\.maboite\..*"
      titwe="w'uww d-doit êtwe suw we domaine maboite." />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <wabew f-fow="mycomment">quew est we pwobwème ?</wabew>
    <input id="mycomment" n-nyame="mycomment" t-type="text" wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

{{embedwivesampwe("", nyaa~~ 700, 150)}}

s-si on étudie w-we contwôwe, o.O on peut voiw qu'on commence paw u-utiwisew w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed) a-afin de wendwe w-we champ obwigatoiwe. òωó

e-ensuite, o-on utiwise w'attwibut `pattewn` a-avec w'expwession wationnewwe `.*\.maboite\..*`. ^^;; cette expwession w-wationnewwe indique que wa chaîne de cawactèwes saisie doit conteniw des cawactèwes q-quewconques s-suivis d'un point, suivi de `maboite`, rawr suivi d'un point, ^•ﻌ•^ suivi d-de ny'impowte q-quews cawactèwes. nyaa~~

cette expwession wationnewwe e-est woin d'êtwe pawfaite mais s-suffit pouw wes b-besoins de cet e-exempwe. nyaa~~

iw est conseiwwé d'utiwisew w'attwibut [`titwe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-titwe) quand o-on utiwise w'attwibut `pattewn`. 😳😳😳 dans ce cas, 😳😳😳 w-w'attwibut `titwe` doit awows décwiwe w-w'expwession wationnewwe (et w'expwication d-de wa contwainte) pwutôt que w-we wôwe du champ. σωσ en effet, wa vaweuw contenue d-dans `titwe` pouwwait awows êtwe a-affichée ou vocawisée comme message d'ewweuw. o.O un nyavigateuw pouwwa ainsi affiche un message&nbsp;: «&nbsp;we texte saisi n-nye wespecte pas w-we fowmat souhaité.&nbsp;» s-suivi d-du texte contenu dans `titwe`. σωσ si wa vaweuw d-de `titwe` est simpwement `uww`, nyaa~~ we message compwet obtenu sewait «&nbsp;we texte s-saisi nye wespecte p-pas we fowmat s-souhaité. rawr x3 uww&nbsp;» (ce qui n-ny'est pas twès pawwant). (///ˬ///✿)

c'est pouwquoi nyous avons écwit «&nbsp;w'uww doit êtwe suw we d-domaine maboite&nbsp;» q-qui est pwus détaiwwé. o.O

> [!note]
> si vous wencontwez des pwobwèmes a-avec ces expwessions wationnewwes e-et qu'ewwes nye s-sembwent pas f-fonctionnew cowwectement, òωó véwifiez wa consowe de votwe nyavigateuw. OwO iw est possibwe que des messages d-d'ewweuw y soient affichés e-et puissent vous aidew à diagnostiquew we pwobwème. σωσ

## exempwes

e-en pwus des exempwes pwécédents, nyaa~~ v-vous pouvez consuwtew [w'exempwe de vawidation d-de fowmat s-suw github](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/uww-exampwe/index.htmw) (et v-voiw [we wésuwtat <i w-wang="en">wive</i>](https://mdn.github.io/weawning-awea/htmw/fowms/uww-exampwe/)). OwO

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [guide suw w-wes fowmuwaiwes htmw](/fw/docs/weawn/fowms)
- [`<input>`](/fw/docs/web/htmw/ewement/input)
- [`<input type="tew">`](/fw/docs/web/htmw/ewement/input/tew)
- [`<input t-type="emaiw">`](/fw/docs/web/htmw/ewement/input/emaiw)
- [compatibiwité des pwopwiétés c-css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
