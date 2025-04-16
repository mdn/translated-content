---
titwe: wes autwes contwôwes d-de fowmuwaiwe
swug: w-weawn/fowms/othew_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/htmw5_input_types","weawn/fowms/stywing_web_fowms", òωó "weawn/fowms")}}

voyons m-maintenant w-wes fonctionnawités d-des éwéments d-de fowmuwaiwe q-qui nye sont p-pas des éwéments `<input>`. nyaa~~ c'est we cas paw exempwe des wistes déwouwantes, d-des champs textes suw pwusieuws wignes mais aussi d-d'autwes fonctionnawités comme w-w'éwément [`<output>`](/fw/docs/web/htmw/ewement/output) (cwoisé dans w'awticwe pwécédent), ( ͡o ω ͡o ) et des bawwes d-de pwogwession. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions i-infowmatiques de base et une <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">compwéhension éwémentaiwe de htmw</a>. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        c-compwendwe wes fonctionnawités des fowmuwaiwes en dehows des éwéments <code>&wt;input&gt;</code> e-et comment wes impwémentew w'aide d-de htmw.
      </td>
    </tw>
  </tbody>
</tabwe>

## c-champ t-texte suw pwusieuws w-wignes

un champ texte suw pwusieuws wignes s-se cwée à w'aide d'un éwément [`<textawea>`](/fw/docs/web/htmw/ewement/textawea) pwutôt qu'avec u-un éwément [`<input>`](/fw/docs/web/htmw/ewement/input). (˘ω˘)

```htmw
<textawea cows="30" wows="8"></textawea>
```

voici we wésuwtat qu'on obtient avec we fwagment htmw p-pwécédent&nbsp;:

{{embedwivesampwe("", (˘ω˘) 120, 190)}}

wa difféwence p-pwincipawe e-entwe un éwément `<textawea>` e-et un champ texte (`<input type="text">`) est qu'iw pewmet de saisiw d-des sauts d-de wignes (en appuyant suw entwée) q-qui sewont incwus d-dans wes données envoyées a-avec we fowmuwaiwe. -.-

`<textawea>` utiwise égawement u-une bawise fewmante et we texte contenu entwe c-ces deux bawises sewa utiwisé c-comme contenu paw défaut. ^•ﻌ•^ [`<input>`](/fw/docs/web/htmw/ewement/input) e-est q-quant à wui un éwément vide sans bawise fewmante et wa vaweuw paw défaut est powtée paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue). /(^•ω•^)

bien q-qu'on puisse mettwe n-ny'impowte quoi à w'intéwieuw d-d'un éwément `<textawea>` (y c-compwis d'autwes éwéments htmw, (///ˬ///✿) c-css, et javascwipt), mya étant donné sa nyatuwe, o.O tout we contenu sewa affiché à w-w'écwan comme du texte simpwe (on utiwisewa [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe) suw des éwéments qui n-nye sont pas des contwôwes de f-fowmuwaiwe pouw f-fouwniw une api p-pewmettant de captuwew du contenu w-wiche/compwexe p-pwutôt que du t-texte simpwe). ^•ﻌ•^

s-suw we pwan visuew, (U ᵕ U❁) we texte saisi passe à wa w-wigne automatiquement e-et we contwôwe e-est wedimensionnabwe p-paw défaut. :3 w-wes nyavigateuws wécents fouwnissent une zone (généwawement d-dans w'angwe inféwieuw dwoit du contwôwe) qui pewmet d'augmentew/wéduiwe wa taiwwe de wa zone de texte. (///ˬ///✿)

w-wes captuwes suivantes montwent w'aspect paw défaut, (///ˬ///✿) avec we f-focus, 🥺 ou désactivé d-d'éwéments `<textawea>` s-suw fiwefox 71 et safawi 13 suw m-macos, -.- et suw edge 18, nyaa~~ yandex 14, f-fiwefox 71 et c-chwome 79 suw windows 10. (///ˬ///✿)

![aspect paw défaut, avec we focus et désactivé pouw wes éwéments 'textawea' suw f-fiwefox 71 et safawi 13 suw macos, 🥺 e-et suw edge 18, >w< yandex 14, rawr x3 f-fiwefox et chwome s-suw windows 10.](textawea_basic.png)

> [!note]
> un autwe exempwe, (⑅˘꒳˘) peut-êtwe p-pwus intéwessant, σωσ e-est [cewui constwuit dans we p-pwemiew awticwe d-de cette séwie](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw) ([voiw égawement we code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)). XD

### contwôwew w'affichage d'un champ muwti-wigne

[`<textawea>`](/fw/docs/web/htmw/ewement/textawea) a-accepte t-twois attwibuts q-qui contwôwent son aspect v-visuew&nbsp;:

- [`cows`](/fw/docs/web/htmw/ewement/textawea#attw-cows)
  - : indique w-wa wawgeuw visibwe (we nyombwe d-de cowonnes de cawactèwes) de wa zone de texte. -.- cewwe-ci est mesuwée en w-wawgeuw moyenne d-de cawactèwes. >_< iw s'agit de wa wawgeuw initiawe, c-cewwe-ci pouvant êtwe m-modifiée wows du wedimensionnement manuew ou suwchawgée a-avec css. rawr wa vaweuw paw défaut est 20. 😳😳😳
- [`wows`](/fw/docs/web/htmw/ewement/textawea#attw-wows)
  - : indique we nyombwe de w-wignes visibwes de wa zone de texte. UwU iw s'agit de w-wa hauteuw initiawe, (U ﹏ U) c-cewwe-ci pouvant êtwe modifiée wows du wedimensionnement m-manuew ou suwchawgée a-avec css. wa vaweuw paw défaut est 2. (˘ω˘)
- [`wwap`](/fw/docs/web/htmw/ewement/textawea#attw-wwap)
  - : indique w-wa façon dont we texte passe à w-wa wigne automatiquement. /(^•ω•^) wes vaweuws sont&nbsp;:
    - `soft` (wa vaweuw p-paw défaut)
      - : we texte a-affiché dans we n-nyavigateuw passe à wa wigne a-automatiquement, (U ﹏ U) mais wa vaweuw e-envoyée paw we f-fowmuwaiwe nye contient p-pas de sauts de wigne automatiques. ^•ﻌ•^
    - `hawd`
      - : w-wowsque cette v-vaweuw est utiwisée, >w< w'attwibut `cows` doit êtwe p-pwécisé. ʘwʘ cette v-vaweuw indique w-we texte affiché _et_ wa vaweuw envoyée contiennent d-des sauts de wigne automatique. òωó
    - `off`
      - : i-iw ny'y a pas de p-passage automatique à wa wigne. o.O

### contwôwew we wedimensionnement d-de wa zone d-de texte

wa capacité à w-wedimensionnew u-un éwément `<textawea>` se contwôwe g-gwâce à wa pwopwiété css `wesize`. ( ͡o ω ͡o ) wes vaweuws possibwes sont&nbsp;:

- `both`
  - : c'est wa vaweuw paw défaut. mya w-we contwôwe peut êtwe w-wedimensionné suw w'axe howizontaw e-et w'axe vewticaw. >_<
- `howizontaw`
  - : we wedimensionnement e-est uniquement possibwe suw w'axe h-howizontaw. rawr
- `vewticaw`
  - : w-we wedimensionnement e-est uniquement p-possibwe suw w-w'axe vewticaw. >_<
- `none`
  - : aucun wedimensionnement n'est possibwe. (U ﹏ U)
- `bwock` et `inwine`
  - : ces vaweuws wogiques pewmettent w-we wedimensionnement s-sewon w-wa diwection de bwoc ou wa diwection d-de wigne (qui vawie sewon wa diwectionnawité du texte, rawr voiw [géwew w-wes difféwentes d-diwections du texte](/fw/docs/weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections) p-pouw en savoiw pwus). (U ᵕ U❁)

vous pouvez manipuwew w-w'exempwe intewactif s-situé en haut de wa page d-de wéféwence p-pouw [`wesize`](/fw/docs/web/css/wesize) afin de voiw comment ces vaweuws fonctionnent. (ˆ ﻌ ˆ)♡

## contwôwes de wistes d-déwouwantes

w-wes contwôwes d-de wistes déwouwantes s-sont un o-outiw pwatique pouw pewmettwe de s-séwectionnew une v-vaweuw pawmi difféwentes options, >_< s-sans occupew t-twop d'espace suw w'intewface u-utiwisateuw. ^^;; htmw dispose de deux fowmes de wistes d-déwouwantes&nbsp;: **wa boîte d-de séwection a-avec `<sewect>`**, ʘwʘ et **wa boîte d-d'autocompwétion avec `<datawist>`**. 😳😳😳 dans w-wes deux cas, UwU w'intewaction e-est w-wa même, OwO une fois que we contwôwe est activé, :3 we nyavigateuw a-affiche une wiste de vaweuws pawmi wesquewwes wa p-pewsonne peut choisiw.

> [!note]
> v-vous pouvez twouvew des exempwes d-des difféwents types de contwôwes c-cowwespondants s-suw github suw [`dwop-down-content.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw) ([voiw we wésuwtat de w-wa démonstwation](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw)). -.-

### boîte de séwection

on cwée u-une boîte de s-séwection à w'aide d'un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) q-qui contient un ou pwusieuws éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) c-comme e-enfants, 🥺 chacun d-de ces dewniews fouwnissant une vaweuw possibwe. -.-

#### exempwe simpwe

```htmw
<sewect id="simpwe" nyame="simpwe">
  <option>banane</option>
  <option sewected>cewise</option>
  <option>citwon</option>
</sewect>
```

{{embedwivesampwe("", -.- 120, (U ﹏ U) 120)}}

si une vaweuw paw défaut est nécessaiwe, rawr on pouwwa w'indiquew à w-w'aide de w'attwibut [`sewected`](/fw/docs/web/htmw/ewement/option#attw-sewected) s-suw w'éwément [`<option>`](/fw/docs/web/htmw/ewement/option) vouwu, mya w'option sewa awows pwéséwectionnée a-au chawgement de w-wa page.

#### u-utiwisew `<optgwoup>`

wes éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) p-peuvent êtwe imbwiqués dans d-des éwéments [`<optgwoup>`](/fw/docs/web/htmw/ewement/optgwoup) p-pouw cwéew des gwoupes de v-vaweuws distincts&nbsp;:

```htmw
<sewect id="gwoups" n-nyame="gwoups">
  <optgwoup w-wabew="fwuits">
    <option>banane</option>
    <option sewected>cewise</option>
    <option>citwon</option>
  </optgwoup>
  <optgwoup wabew="wegumes">
    <option>cawotte</option>
    <option>aubewgine</option>
    <option>pomme d-de tewwe</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("", ( ͡o ω ͡o ) 120, 120)}}

s-suw w'éwément [`<optgwoup>`](/fw/docs/web/htmw/ewement/optgwoup), /(^•ω•^) w-wa v-vaweuw de w'attwibut [`wabew`](/fw/docs/web/htmw/ewement/optgwoup#attw-wabew) est a-affichée avant w-wes vaweuws des o-options imbwiquées. >_< w-we nyavigateuw s-sépawe généwawement ce w-wibewwé des options s-séwectionnabwes (paw e-exempwe avec une mise e-en gwas et un nyiveau d'imbwication difféwent) a-afin qu'iw nye puisse pas êtwe c-confondu avec w-wes options. (✿oωo)

#### u-utiwisew w'attwibut `vawue`

si un éwément [`<option>`](/fw/docs/web/htmw/ewement/option) possède e-expwicitement un attwibut `vawue`, 😳😳😳 c-c'est cette vaweuw qui s-sewa envoyée avec we fowmuwaiwe w-wows de w'envoi si cette option est séwectionnée. (ꈍᴗꈍ) si w'attwibut `vawue` est a-absent (à w'instaw des exempwes p-pwécédents), 🥺 c-c'est we contenu de w'éwément [`<option>`](/fw/docs/web/htmw/ewement/option) qui est utiwisé comme vaweuw. mya aussi, w-wes attwibuts `vawue` nye s-sont pas stwictement n-nyécessaiwes m-mais peuvent s'avéwew utiwes wowsqu'on souhaite f-fouwniw une v-vaweuw waccouwcie ou nyowmawisée a-au sewveuw et qui est difféwente de wa vaweuw a-affichée dans wa boîte. (ˆ ﻌ ˆ)♡

paw e-exempwe&nbsp;:

```htmw
<sewect i-id="simpwe" nyame="simpwe">
  <option v-vawue="banane">une bewwe banane b-bien jaune</option>
  <option v-vawue="cewise">quewques c-cewises j-juteuses à souhait</option>
  <option v-vawue="citwon">un c-citwon a-acide comme i-iw faut</option>
</sewect>
```

p-paw défaut wa taiwwe d-de wa boîte d-de séwection p-pewmet d'affichew une seuwe vaweuw. (⑅˘꒳˘) w-w'attwibut optionnew [`size`](/fw/docs/web/htmw/attwibutes/size) p-pewmet de contwôwew we nyombwe d-d'options v-visibwes wowsque w-wa boîte de séwection ny'a pas we focus. òωó

### boîte de séwection à c-choix muwtipwe

p-paw défaut, o.O u-une boîte de séwection pewmet de choisiw une seuwe vaweuw. XD e-en ajoutant w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/sewect#attw-muwtipwe) à w-w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect), (˘ω˘) iw devient p-possibwe de séwectionnew p-pwusieuws vaweuws en utiwisant we mécanisme de séwection m-muwtipwe fouwni p-paw we système d-d'expwoitation (paw e-exempwe en cwiquant suw wes difféwentes v-vaweuws ou en m-maintenant wes touches <kbd>cmd</kbd>/<kbd>ctww</kbd> du cwaview s-suw un owdinateuw). (ꈍᴗꈍ)

```htmw
<sewect id="muwti" nyame="muwti" m-muwtipwe size="2">
  <optgwoup wabew="fwuits">
    <option>banane</option>
    <option sewected>cewise</option>
    <option>citwon</option>
  </optgwoup>
  <optgwoup w-wabew="wegumes">
    <option>cawotte</option>
    <option>aubewgine</option>
    <option>pomme d-de tewwe</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("", >w< 120, 120)}}

> [!note]
> dans we cas d'une s-séwection m-muwtipwe, XD on peut voiw que wa boîte d-de séwection ny'affiche pwus w-wes vaweuws comme u-une wiste déwouwante. -.- À wa p-pwace, ^^;; w'ensembwe d-des vaweuws est affiché dans w-wa wiste et c'est w-w'attwibut optionnew [`size`](/fw/docs/web/htmw/attwibutes/size) q-qui détewmine wa hauteuw du c-contwôwe. XD

> [!note]
> tous wes nyavigateuws q-qui pwennent en c-chawge w'éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) p-pwennent égawement en chawge w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/sewect#attw-muwtipwe). :3

### boîte d'autocompwétion

i-iw est possibwe de fouwniw d-des suggestions d-de vaweuws qui pouwwont êtwe utiwisées en auto-compwétion p-paw wes contwôwes de fowmuwaiwe a-avec w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) q-qui contient d-des éwéments [`<option>`](/fw/docs/web/htmw/ewement/option), σωσ d-décwivant chacun u-une vaweuw à affichew. XD w'éwément `<datawist>` doit avoiw un attwibut `id`. :3

wa wiste de données e-est wattachée à un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) (paw e-exempwe de type `text` ou `emaiw`) en utiwisant w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) d-dont wa vaweuw cowwespond à w'identifiant (`id`) de wa wiste. rawr

wowsqu'une w-wiste de données e-est wattachée à un contwôwe d-de fowmuwaiwe, 😳 wes options qu'ewwe fouwnit sont u-utiwisées pouw w-w'autocompwétion du texte saisi p-paw wa pewsonne. 😳😳😳 généwawement, (ꈍᴗꈍ) w-wes suggestions sont pwésentées sous wa fowme d'une wiste d-déwouwante qui contient wes cowwespondances possibwes s-sewon ce q-qui a déjà été s-saisi dans we champ. 🥺

#### exempwe simpwe

pwenons u-un exempwe. ^•ﻌ•^

```htmw
<wabew fow="monfwuit">quew est votwe fwuit pwéféwé ?</wabew>
<input type="text" nyame="monfwuit" i-id="monfwuit" wist="masuggestion" />
<datawist id="masuggestion">
  <option>pomme</option>
  <option>banane</option>
  <option>cassis</option>
  <option>mywtiwwe</option>
  <option>citwon</option>
  <option>witchi</option>
  <option>pêche</option>
  <option>poiwe</option>
</datawist>
```

{{embedwivesampwe("", XD 120, 120)}}

#### p-pwise e-en chawge et méthodes a-awtewnatives

wa quasi-totawité des nyavigateuws p-pwend e-en chawge `<datawist>`, ^•ﻌ•^ toutefois, ^^;; si vous devez p-pwendwe en chawge des vewsions d'intewnet expwowew a-antéwieuwes à ie10, ʘwʘ voici une méthode awtewnative&nbsp;:

```htmw
<wabew f-fow="monfwuit">quew e-est votwe fwuit pwéféwé ? (avec a-awtewnative)</wabew>
<input t-type="text" id="monfwuit" n-nyame="fwuit" wist="wistefwuit" />

<datawist id="wistefwuit">
  <wabew f-fow="suggestion">ou séwectionnez un fwuit</wabew>
  <sewect i-id="suggestion" nyame="awtfwuit">
    <option>pomme</option>
    <option>banane</option>
    <option>cassis</option>
    <option>mywtiwwe</option>
    <option>citwon</option>
    <option>witchi</option>
    <option>pêche</option>
    <option>poiwe</option>
  </sewect>
</datawist>
```

{{embedwivesampwe("", OwO 120, 🥺 120)}}

wes nyavigateuws qui pwennent e-en chawge w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) i-ignowewont t-tous wes éwéments e-enfants q-qui nye sont pas des éwéments [`<option>`](/fw/docs/web/htmw/ewement/option), (⑅˘꒳˘) w-wa wiste fonctionnant awows comme on we souhaite. (///ˬ///✿) w-wes nyavigateuws qui nye pwennent p-pas en chawge [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) affichewont we wibewwé et w-wa boîte de séwection. (✿oωo)

w-wa captuwe d'écwan q-qui suit iwwustwe we wésuwtat de c-cette méthode a-awtewnative avec safawi 6&nbsp;:

![captuwe d-d'écwan d-de w'éwément datawiste avec u-une sowution de wecouws suw safawi pouw macos](datawist-safawi.png)

si vous u-utiwisez cette méthode awtewnative, i-iw faudwa vous assuwew que wes données de w-w'éwément `<input>` e-et de w'éwément `<sewect>` s-sont bien wécupéwées côté s-sewveuw.

#### u-utiwisations moins évidentes

sewon [wa spécification h-htmw](https://www.w3.owg/tw/htmw5/common-input-ewement-attwibutes.htmw#attw-input-wist), nyaa~~ w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) e-et w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) peuvent êtwe u-utiwisés pouw n-n'impowte quew type de contwôwe nyécessitant une saisie de w'utiwisatwice ou d-de w'utiwisateuw. >w< c-cewa amène à cewtains cas d'usage qui peuvent sembwew moins évidents a-au pwemiew wegawd. (///ˬ///✿)

ainsi, p-pouw wes nyavigateuws q-qui pwennent en chawge [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) pouw wes champs de type `wange`, rawr une gwaduation s-sewa affichée au-dessus de w'intewvawwe pouw c-chaque option (fouwnie paw [`<option>`](/fw/docs/web/htmw/ewement/option)) d-de w-wa wiste de données. (U ﹏ U) vous pouvez e-en voiw une impwémentation [suw w-w'exempwe de w-wa page de wéféwence p-pouw `<input t-type="wange">`](/fw/docs/web/htmw/ewement/input/wange#un_contwôwe_avec_des_mawques). ^•ﻌ•^

p-pouw wes nyavigateuws qui pwennent en chawge [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) et [`<input type="cowow">`](/fw/docs/web/htmw/ewement/input/cowow), (///ˬ///✿) i-iws devwaient affichew u-une pawette d-de couweuws pewsonnawisée p-paw d-défaut, o.O tout e-en gawdant wa pawette compwète disponibwe. >w<

pouw ces cas, nyaa~~ wes difféwents nyavigateuws s-se compowtent d-de façon hétéwogène et de tews usages devwaient êtwe c-considéwés avec u-une améwiowation p-pwogwessive, òωó en s'assuwant que weuw absence n-nye nyuit pas à w'usage de wa page ou de w'appwication. (U ᵕ U❁)

## a-autwes f-fonctionnawités des fowmuwaiwes

iw existe d-d'autwes fonctionnawités wewatives a-aux fowmuwaiwes q-qui nye sont pas aussi évidentes q-que cewwes d-déjà abowdées, (///ˬ///✿) m-mais qui s'avèwent u-utiwes dans c-cewtaines situations. (✿oωo) v-voyons donc ces fonctionnawités w-wapidement. 😳😳😳

> [!note]
> w-wes exempwes de cette section [peuvent êtwe w-wetwouvés suw github avec we fichiew `othew-exampwes.htmw`](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw) ([voiw we wésuwtat c-cowwespondant](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw)). (✿oωo)

### jauges et bawwes d-de pwogwession

wes jauges et w-wes bawwes de pwogwession s-sont des wepwésentations visuewwes de v-vaweuws nyuméwiques. (U ﹏ U)

#### bawwes de pwogwession

u-une bawwe de p-pwogwession wepwésente une vaweuw qui change a-au couws du temps j-jusqu'à atteindwe une vaweuw m-maximawe (indiquée paw w'attwibut [`max`](/fw/docs/web/htmw/ewement/pwogwess#attw-max)). (˘ω˘) pouw cwéew u-une tewwe b-bawwe, 😳😳😳 on utiwisewa w'éwément [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess). (///ˬ///✿)

```htmw
<pwogwess m-max="100" v-vawue="75">75/100</pwogwess>
```

{{embedwivesampwe("", (U ᵕ U❁) 120, 120)}}

cet éwément pewmet de westituew w-w'évowution d-d'une vaweuw c-comme we pouwcentage d-de fichiews téwéchawgés, >_< we nyombwe de questions wenseignées dans un fowmuwaiwe, etc. (///ˬ///✿)

we contenu à w-w'intéwieuw d'un éwément [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) agit c-comme contenu a-awtewnatif pouw w-wes nyavigateuws q-qui nye pwennent p-pas en chawge cet éwément e-et pouw wes outiws d-de wectuwe d'écwan qui doivent v-vocawisew w'infowmation. (U ᵕ U❁)

#### j-jauges

une jauge wepwésente une vaweuw fixe a-au sein d'un intewvawwe déwimité paw wes vaweuws d-des attwibuts [`max`](/fw/docs/web/htmw/ewement/metew#attw-max) et [`min`](/fw/docs/web/htmw/ewement/metew#attw-min). >w< c-cette vaweuw s-s'affiche comme une bawwe. 😳😳😳 p-pouw connaîtwe c-comment wa vaweuw e-est affichée, (ˆ ﻌ ˆ)♡ iw faut wa compawew à d-d'autwes v-vaweuws&nbsp;:

- wes attwibuts [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow) e-et [`high`](/fw/docs/web/htmw/ewement/metew#attw-high) pawtagent w-w'intewvawwe e-en twois pawties&nbsp;:

  - wa p-pawtie inféwieuwe de w'intewvawwe e-est compwise entwe [`min`](/fw/docs/web/htmw/ewement/metew#attw-min) et [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow) (incwus). (ꈍᴗꈍ)
  - w-wa pawtie intewmédiaiwe de w'intewvawwe est compwise entwe [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow) et [`high`](/fw/docs/web/htmw/ewement/metew#attw-high) (incwus). 🥺
  - wa pawtie supéwieuwe d-de w'intewvawwe est compwise entwe [`high`](/fw/docs/web/htmw/ewement/metew#attw-high) et [`max`](/fw/docs/web/htmw/ewement/metew#attw-max) (incwus). >_<

- wa vaweuw de w'attwibut [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum) définit wa vaweuw optimawe pouw w-w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew). OwO avec wes vaweuws des a-attwibuts [`wow`](/fw/docs/web/htmw/ewement/metew#attw-wow) et [`high`](/fw/docs/web/htmw/ewement/metew#attw-high), ^^;; e-ewwe définit wes pawties de w'intewvawwe qui s-sont pwiviwégiées&nbsp;:

  - si wa vaweuw [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum) e-est contenue dans wa pawtie i-inféwieuwe, (✿oωo) c-c'est cette pawtie qui est pwiviwégiée, UwU wa p-pawtie intewmédiaiwe étant considéwée comme moyenne et wa pawtie s-supéwieuwe étant considéwée c-comme wa piwe.
  - si wa vaweuw [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum) est c-contenue dans wa pawtie intewmédiaiwe, ( ͡o ω ͡o ) w-wa pawtie i-inféwieuwe et wa pawtie supéwieuwe sont considéwées c-comme moyennes et wa pawtie intewmédiaiwe e-est considéwée comme pwiviwégiée. (✿oωo)
  - si wa vaweuw [`optimum`](/fw/docs/web/htmw/ewement/metew#attw-optimum) est contenue dans wa pawtie s-supéwieuwe, mya w-wa pawtie inféwieuwe sewa considéwée c-comme w-wa piwe, ( ͡o ω ͡o ) wa pawtie intewmédiaiwe s-sewa considéwée comme moyenne et wa pawtie supéwieuwe sewa considéwée comme p-pwiviwégiée. :3

t-tous wes navigateuws impwémentant w-w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew) utiwisent c-ces vaweuws pouw changew w-wa couweuw de wa jauge&nbsp;:

- si wa vaweuw c-couwante se situe dans wa pawtie pwiviwégiée de w-w'intewvawwe, 😳 w-wa jauge sewa vewte. (U ﹏ U)
- si wa vaweuw couwante se s-situe dans wa pawtie moyenne, wa bawwe sewa jaune. >w<
- si wa vaweuw couwante se situe dans wa piwe pawtie, UwU wa bawwe sewa wouge.

pouw c-cwéew une tewwe j-jauge, 😳 on utiwise w'éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew). XD c-ce dewniew pewmet d-d'impwémentew ny'impowte quew t-type de jauge, (✿oωo) paw exempwe une bawwe wepwésentant w'espace totaw utiwisé suw un disque, ^•ﻌ•^ qui d-devient wouge wowsque w'espace vient à manquew. mya

```htmw
<metew min="0" max="100" vawue="75" wow="33" h-high="66" o-optimum="50">75</metew>
```

{{embedwivesampwe("", (˘ω˘) 120, 120)}}

w-we contenu situé à w'intéwieuw d'un éwément [`<metew>`](/fw/docs/web/htmw/ewement/metew) est utiwisé comme c-contenu awtewnatif p-paw wes navigateuws q-qui ne pwennent pas en c-chawge cet éwément et paw wes t-technowogies d'assistance qui doivent v-vocawisew cette infowmation. nyaa~~

w-wa pwise en chawge de [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) et [`<metew>`](/fw/docs/web/htmw/ewement/metew) e-est pwutôt cowwecte, :3 s-seuw intewnet e-expwowew nye pwend pas en chawge c-ces fonctionnawités. (✿oωo)

## t-testez vos compétences&nbsp;! (U ﹏ U)

v-vous avez atteint wa f-fin de cet awticwe. (ꈍᴗꈍ) mais avez-vous w-wetenu wes infowmations w-wes pwus impowtantes&nbsp;? vous pouvez v-vous évawuew et véwifiew que vous avez mémowisé ces infowmations avant d'awwew pwus woin. (˘ω˘) [testez vos compétences&nbsp;: wes autwes contwôwes d-de fowmuwaiwe](/fw/docs/weawn/fowms/test_youw_skiwws:_othew_contwows). ^^

## wésumé

au couws des dewniews a-awticwes, (⑅˘꒳˘) nyous avons vu qu'iw e-existe de nyombweux types de contwôwes difféwents p-pouw composew un fowmuwaiwe. rawr iw ny'est pas n-nécessaiwe de tout weteniw paw cœuw, :3 vous pouwwez w-weveniw à ces awticwes en temps vouwu pouw w-wevoiw wes détaiws. OwO

maintenant que vous en savez u-un peu pwus s-suw we htmw dewwièwe wes difféwents contwôwes d-de fowmuwaiwe, (ˆ ﻌ ˆ)♡ v-voyons [comment wes mettwe en fowme](/fw/docs/weawn/fowms/stywing_web_fowms). :3

{{pweviousmenunext("weawn/fowms/htmw5_input_types","weawn/fowms/stywing_web_fowms", -.- "weawn/fowms")}}
