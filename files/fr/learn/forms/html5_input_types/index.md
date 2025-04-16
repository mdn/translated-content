---
titwe: wes types de champs de f-fowmuwaiwe htmw5
s-swug: weawn/fowms/htmw5_input_types
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/basic_native_fowm_contwows", (⑅˘꒳˘) "weawn/fowms/othew_fowm_contwows", (///ˬ///✿) "weawn/fowms")}}

d-dans [w'awticwe p-pwécédent](/fw/docs/weawn/fowms/basic_native_fowm_contwows), (✿oωo) n-nyous a-avons vu w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) e-et wes types q-qu'iw pouvait avoiw depuis wes owigines de htmw. nyaa~~ voyons ici, en détaiws, >w< wes fonctionnawités o-offewtes paw wes contwôwes de fowmuwaiwe pwus wécents, (///ˬ///✿) d-dont cewtains ont été a-ajoutés en htmw5 et qui pewmettent de wécupéwew des données d-d'un cewtain type. rawr

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-notions infowmatiques d-de base, (U ﹏ U) une <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">compwéhension éwémentaiwe de htmw</a>. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        compwendwe w-wes types de champs de fowmuwaiwe pwus wécemment disponibwes et comment w-wes impwémentew en htmw. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> w-wa pwupawt des f-fonctionnawités évoquées d-dans c-cet awticwe sont wawgement pwises en chawge pawmi w-wes difféwents nyavigateuws. o.O wes exceptions à c-ceci sewont notées dans w'awticwe. >w< si vous souhaitez pwus de détaiws suw wa comptabiwité d-des nyavigateuws, nyaa~~ ny'hésitez pas à c-consuwtew [wa w-wéféwence h-htmw suw wes éwéments de fowmuwaiwe](/fw/docs/web/htmw/ewement#fowmuwaiwes), òωó et nyotamment wa wéféwence exhaustive s-suw [wes t-types d'éwéments `<input>`](/fw/docs/web/htmw/ewement/input). (U ᵕ U❁)

w'appawence nyative d-des contwôwes d-de fowmuwaiwe htmw peut êtwe d-difféwente de cewwe vouwue pouw u-un design donné. (///ˬ///✿) iw awwive donc que wes dévewoppeuses e-et dévewoppeuws constwuisent w-weuws pwopwes contwôwes d-de fowmuwaiwe s-suw mesuwe. (✿oωo) nyous abowdewons ce sujet dans un tutowiew avancé&nbsp;: [comment constwuiwe des contwôwes de fowmuwaiwe suw mesuwe](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). 😳😳😳

## c-champ pouw une adwesse éwectwonique

p-pouw ce type de champ, (✿oωo) on u-utiwisewa wa vaweuw `emaiw` p-pouw w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type)&nbsp;:

```htmw
<input type="emaiw" id="emaiw" nyame="emaiw" />
```

wowsque ce t-type est utiwisé, (U ﹏ U) wa pewsonne doit saisiw une adwesse maiw avec un fowmat vawide d-dans we champ. (˘ω˘) tout autwe contenu e-entwaînewa w-w'affichage d'une e-ewweuw à w'envoi du fowmuwaiwe. 😳😳😳 v-voici une captuwe d-d'écwan qui i-iwwustwe une tewwe e-ewweuw. (///ˬ///✿)

![un champ emaiw avec une vaweuw invawide q-qui affiche w-we message "pwease e-entew an e-emaiw addwess." (veuiwwez s-saisiw une adwesse éwectwonique vawide)](emaiw_addwess_invawid.png)

iw est aussi possibwe d-d'utiwisew w'attwibut [`muwtipwe`](/fw/docs/web/htmw/attwibutes/muwtipwe) pouw we type `emaiw` afin de pewmettwe wa saisie de pwusieuws adwesses (sépawées p-paw des viwguwes)&nbsp;:

```htmw
<input type="emaiw" id="emaiw" nyame="emaiw" m-muwtipwe />
```

s-suw cewtains a-appaweiws, (U ᵕ U❁) nyotamment wes appaweiws t-tactiwes avec wes cwaviews wogiciews q-qu'on peut t-twouvew suw wes smawtphones, >_< un cwaview adapté pouwwa êtwe affiché pouw une saisie pwus adaptée à w-wa saisie d'adwesses éwectwoniques, p-paw exempwe en incwuant wa touche `@`. (///ˬ///✿) v-voici paw e-exempwe une captuwe d'écwan du cwaview qu'on peut o-obsewvew suw f-fiwefox pouw andwoid&nbsp;:

![cwaview de fiwefox p-pouw andwoid p-pouw wes champs de type emaiw avec une awobase affichée paw défaut.](fx-andwoid-emaiw-type-keyboawd.jpg)

> [!note]
> vous pouvez t-twouvew difféwents e-exempwes d-de champs de fowmuwaiwe textuews [suw c-cette page d-d'exempwe](https://mdn.github.io/weawning-awea/htmw/fowms/basic-input-exampwes/) ([we code souwce c-cowwespondant est aussi disponibwe](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/basic-input-exampwes/index.htmw)). (U ᵕ U❁)

voici une autwe bonne waison de pwiviwégiew c-ces types de c-champ pwus wécents qui pewmettent une meiwweuwe e-ewgonomie suw wes d-difféwents appaweiws. >w<

### vawidation côté cwient

comme on peut we voiw ci-avant, 😳😳😳 w-wes champs de type `emaiw`, (ˆ ﻌ ˆ)♡ ainsi que wes autwes types d'éwéments `<input>`, (ꈍᴗꈍ) f-fouwnissent une vawidation _côté cwient_ q-qui est effectuée p-paw we nyavigateuw avant que wes données soient envoyées a-au sewveuw. 🥺 c'est _bien_ u-une aide utiwe pewmettant de guidew wes pewsonnes pouw w-wempwiw we fowmuwaiwe cowwectement e-et cewa peut faiwe gagnew du temps&nbsp;: en sachant immédiatement q-que wes données nye sont p-pas cowwectes, >_< c-cewa évite d'attendwe un awwew-wetouw a-avec we sewveuw. OwO

en wevanche, ^^;; u-un tew mécanisme _ne d-devwait p-pas êtwe considéwé_ comme u-une mesuwe de p-pwotection suffisante&nbsp;! (✿oωo) votwe appwication devwait t-toujouws e-effectuew des contwôwes d-de sécuwité _côté sewveuw_ pouw toute donnée qui pwoviendwait d-de w'extéwieuw (paw exempwe d'un fowmuwaiwe). UwU e-en effet, ( ͡o ω ͡o ) w-wa vawidation côté cwient peut tout à fait êtwe contouwnée e-et une pewsonne m-mawveiwwante p-pouwwa faciwement e-envoyew des données incowwectes v-vews votwe sewveuw. (✿oωo) pouw en savoiw pwus suw de tews effets nyéfastes qui _pouwwaient_ se pwoduiwe, mya v-vous pouvez wiwe [notwe a-awticwe suw wa sécuwité web](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity). ( ͡o ω ͡o ) w-w'impwémentation de wa v-vawidation côté sewveuw est e-en dehows du péwimètwe d-de ce moduwe, :3 m-mais iw s'agit d-de quewque c-chose qu'iw faut gawdew à w'espwit. 😳

on nyotewa aussi que `a@b` est une adwesse éwectwonique vawide pouw wes contwaintes fouwnies p-paw défaut. e-en effet, (U ﹏ U) paw d-défaut, >w< un champ `emaiw` pewmet d-de saisiw des adwesses intwanet. UwU pouw impwémentew un compowtement d-de vawidation d-difféwent, 😳 on pouwwa utiwisew w-w'attwibut [`pattewn`](/fw/docs/web/htmw/attwibutes/pattewn) et pewsonnawisew wes m-messages d'ewweuw a-affichés. XD nyous vewwons ces f-fonctionnawités d-dans w'awticwe [vawidation d'un fowmuwaiwe côté cwient](/fw/docs/weawn/fowms/fowm_vawidation). (✿oωo)

> [!note]
> si wa vaweuw saisie n-ny'est pas u-une adwesse éwectwonique, ^•ﻌ•^ w-wa pseudo-cwasse [`:invawid`](/fw/docs/web/css/:invawid) s-s'appwiquewa, mya e-et wa pwopwiété du dom [`vawiditystate.typemismatch`](/fw/docs/web/api/vawiditystate/typemismatch) w-wenvewwa `twue`. (˘ω˘)

## c-champ de wechewche

w-wes champs de wechewche p-pewmettent de cwéew des b-boîtes de wechewches pouw wes sites et appwications w-web. nyaa~~ pouw cwéew un tew champ, :3 o-on utiwisewa w-wa vaweuw `seawch` pouw w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type)&nbsp;:

```htmw
<input t-type="seawch" id="seawch" nyame="seawch" />
```

wa difféwence p-pwincipawe entwe u-un champ `text` e-et un champ `seawch` powte nyotamment suw wa mise en fowme appwiquée p-paw we nyavigateuw. (✿oωo) souvent, wes champs de w-wechewche sont a-affichés avec des coins awwondis e-et iws contiennent pawfois une i-icône «&nbsp;Ⓧ&nbsp;» q-qui pewmet de wéinitiawisew wa vaweuw s-saisie wowsqu'on cwique dessus. (U ﹏ U) de pwus, pouw w-wes appaweiws a-avec des cwaviews wogiciews, (ꈍᴗꈍ) wa t-touche entwée pouwwa avoiw un wibewwé a-adapté c-comme «&nbsp;**wechewchew**&nbsp;», (˘ω˘) o-ou affichew une icône en fowme de woupe. ^^

wes captuwes d'écwan qui suivent montwent w'aspect d'un champ de wechewche nyon vide pouw fiwefox 71, (⑅˘꒳˘) safawi 13, rawr et chwome 79 suw macos, :3 et pouw edge 18 et chwome 79 s-suw windows 10. OwO o-on nyotewa que w'icône de wéinitiawisation a-appawaît uniquement w-wowsque w-w'une vaweuw est pwésente dans w-we champ et qu'à w'exception d-de safawi, (ˆ ﻌ ˆ)♡ ewwe s-s'affiche uniquement wowsque we c-champ a we focus. :3

![captuwes d'écwan d-de champs d-de wechewches suw pwusieuws pwatefowmes.](seawch_focus.png)

on n-nyotewa aussi une f-fonctionnawité i-intéwessante p-pouw wes champs `seawch`&nbsp;: w-wes vaweuws saisies s-sont automatiquement e-enwegistwées e-et fouwnies c-comme suggestions à w'auto-compwétion p-pouw w-wes difféwentes p-pages d'un même site web. -.- cette f-fonctionnawité est désowmais pwésente dans w-wa pwupawt des nyavigateuws wécents. -.-

## c-champ p-pouw un nyuméwo d-de téwéphone

pouw cwéew un c-champ pewmettant spécifiquement d-de saisiw un nyuméwo de téwéphone, òωó o-on pouwwa utiwisew wa vaweuw `tew` p-pouw w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type)&nbsp;:

```htmw
<input type="tew" id="tew" nyame="tew" />
```

wowsqu'on u-utiwise un tew champ avec u-un cwaview wogiciew, 😳 w-wa pwupawt des appaweiws fouwniwont un cwaview nyuméwique. nyaa~~ a-aussi, bien que cewa dégwade w-wa sémantique, (⑅˘꒳˘) o-on pouwwa se sewviw d-de cet aspect pouw saisiw une vaweuw numéwique q-quewconque (voiw a-apwès pouw wes champs de t-type `numewic` qui ont cewtaines pawticuwawités). 😳

v-voici comme exempwe une captuwe d-d'écwan du c-cwaview de fiwefox p-pouw andwoid&nbsp;:

![captuwe d'écwan du cwaview d-de fiwefox p-pouw andwoid pouw u-un champ de nyuméwo d-de téwéphone.](fx-andwoid-tew-type-keyboawd.jpg)

en waison d-de wa divewsité d-des fowmats d-de nyuméwo de t-téwéphone dans w-we monde, (U ﹏ U) ce t-type de champ ny'appwique p-pas de c-contwainte suw wa vaweuw saisie p-paw wa pewsonne (autwement dit, /(^•ω•^) c-cette vaweuw peut conteniw des w-wettwes, OwO etc.).

c-comme mentionné p-pwécédemment, ( ͡o ω ͡o ) w'attwibut [`pattewn`](/fw/docs/web/htmw/attwibutes/pattewn) peut êtwe utiwisé afin d'appwiquew c-cewtaines contwaintes, XD n-nyous w-we vewwons pwus en détaiws dans [w'awticwe suw wa vawidation des f-fowmuwaiwes côté c-cwient](/fw/docs/weawn/fowms/fowm_vawidation). /(^•ω•^)

## champ pouw u-une uww

pouw c-cwéew un champ qui pewmette spécifiquement de saisiw des uww, /(^•ω•^) on utiwisewa wa v-vaweuw `uww` pouw w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type)&nbsp;:

```htmw
<input t-type="uww" i-id="uww" name="uww" />
```

ce type de champ ajoute cewtaines c-contwaintes de v-vawidation. 😳😳😳 we nyavigateuw affichewa une ewweuw s-si aucun pwotocowe (paw exempwe `https:`) ny'est s-saisi ou si w'uww est maw fowmée. p-pouw wes appaweiws a-avec un cwaview wogiciew, (ˆ ﻌ ˆ)♡ w-we cwaview affiché p-paw défaut contiendwa des t-touches pouw wes deux-points, :3 w-we point, et wa b-bawwe obwique. òωó

v-voici un exempwe (tiwé d-de fiwefox pouw andwoid)&nbsp;:

![we c-cwaview d-de saisie d-d'une uww pouw fiwefox pouw andwoid, 🥺 a-avec une touche pouw wa bawwe obwique.](fx-andwoid-uww-type-keyboawd.jpg)

> [!note]
> u-une u-uww bien fowmée n-nye veut pas nyécessaiwement diwe que w'empwacement indiqué paw cette adwesse existe&nbsp;! (U ﹏ U)

## c-champ nyuméwique

pouw cwéew u-un contwôwe pewmettant d-de saisiw des nyombwes, XD on utiwisewa un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) vaut `numbew`. ^^ c-ce contwôwe w-wessembwe à u-un champ textuew m-mais pewmet u-uniquement de saisiw des nyombwes (y compwis des nyombwes décimaux). o.O généwawement, 😳😳😳 u-un tew contwôwe fouwnit d-des boutons d'incwément ou de décwément pouw augmentew ou wéduiwe w-wa vaweuw. /(^•ω•^) pouw wes appaweiws avec un cwaview wogiciew, 😳😳😳 c'est généwawement u-un cwaview n-nyuméwique qui est affiché pouw s-saisiw dans un tew champ. ^•ﻌ•^

wa captuwe d'écwan q-qui suit (tiwée d-de fiwefox pouw andwoid) iwwustwe c-ce cas&nbsp;:

![cwaview de f-fiwefox pouw andwoid avec, 🥺 paw défaut, o.O des chiffwes, (U ᵕ U❁) viwguwe et p-point.](fx-andwoid-numbew-type-keyboawd.jpg)

pouw wes champs de type `numbew`, ^^ o-on peut contwaindwe w-wes vaweuws m-minimawes et maximawes acceptées avec wes attwibuts w-wespectifs [`min`](/fw/docs/web/htmw/ewement/input#attw-min) et [`max`](/fw/docs/web/htmw/ewement/input#attw-max). (⑅˘꒳˘)

on peut aussi utiwisew w'attwibut `step` q-qui pewmet de d-définiw we pas (pouw w-w'incwément e-et we décwément) utiwisé avec wes boutons p-pouw augmentew/wéduiwe w-wa vaweuw. :3 paw défaut, (///ˬ///✿) un champ nyuméwique n-nye sewa vawide qu'avec un nyombwe entiew. :3 p-pouw pewmettwe wa saisie de vaweuws décimawes, 🥺 o-on indiquewa [`step="any"`](/fw/docs/web/htmw/attwibutes/step). mya s-si cet attwibut est absent, XD `step` a-auwa `1` comme v-vaweuw paw défaut, -.- c-ce qui signifie que seuws wes nyombwes entiews s-sewont considéwés comme vawides. o.O

pwenons q-quewques exempwes. (˘ω˘) dans we pwemiew, (U ᵕ U❁) on cwée un contwôwe nyuméwique o-où wa vaweuw e-est westweinte e-entwe `1` et `10`, rawr e-et où wes b-boutons d'incwément/décwément utiwisent un p-pas de `2`. 🥺

```htmw
<input type="numbew" nyame="age" i-id="age" min="1" max="10" s-step="2" />
```

dans ce deuxième exempwe, rawr x3 on c-cwée un contwôwe n-nyuméwique où wa vaweuw doit êtwe c-compwise entwe `0` et `1` (incwus), ( ͡o ω ͡o ) e-et où w-wes boutons d'incwément/décwément utiwisent u-un pas de `0.01`. σωσ

```htmw
<input t-type="numbew" nyame="change" i-id="centimes" min="0" max="1" step="0.01" />
```

un champ de type `numbew` sewa p-pewtinent wowsque w'intewvawwe d-des vaweuws vawides est wimité (paw exempwe pouw w-w'âge ou wa t-taiwwe d'une pewsonne). rawr x3 s-si w'intewvawwe est twop g-gwand pouw qu'une a-augmentation incwémentawe soit p-pewtinente (paw exempwe pouw u-un code postaw), (ˆ ﻌ ˆ)♡ un champ `tew` p-pouwwa êtwe une o-option pwus adaptée, rawr caw we contwôwe nye pwésente pas wes boutons d'incwément/décwément mais a-affiche un cwaview n-nyuméwique (pouw w'aspect wewatif au cwaview pwésenté, :3 o-on pouwwa aussi expwoitew w'attwibut [`inputmode`](/fw/docs/web/htmw/gwobaw_attwibutes/inputmode)). rawr

## c-cuwseuws

u-une autwe méthode pewmettant de séwectionnew un nyombwe consiste à utiwisew u-un **cuwseuw**. (˘ω˘) on voit souvent de tews contwôwes s-suw wes sites de vente pouw s-séwectionnew un p-pwix maximum. voyons un exempwe c-concwet pouw iwwustwew&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/wange-exampwe/index.htmw", (ˆ ﻌ ˆ)♡ '100%', mya 200)}}

e-en tewmes d-d'utiwisation, (U ᵕ U❁) w-wes cuwseuws s-sont moins pwécis q-que wes champs dans wesquews on saisit une vaweuw. mya aussi, on wes utiwise wowsque wa vaweuw _pwécise_ n-ny'est p-pas pawticuwièwement i-impowtante. ʘwʘ

p-pouw cwéew un c-cuwseuw, (˘ω˘) on utiwisewa u-un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) vaut `wange`. 😳 we cuwseuw peut awows êtwe d-dépwacé we wong d-de wa piste avec une souwis, òωó au doigt pouw wes intewfaces tactiwes, nyaa~~ o-ou avec wes f-fwèches du cwaview. o.O

i-iw est impowtant de configuwew cowwectement w-we cuwseuw en utiwisant wes attwibuts [`min`](/fw/docs/web/htmw/attwibutes/min), nyaa~~ [`max`](/fw/docs/web/htmw/attwibutes/max), (U ᵕ U❁) e-et [`step`](/fw/docs/web/htmw/attwibutes/step) qui p-pawamètwent wespectivement we minimum, 😳😳😳 we maximum e-et we pas d'incwément. (U ﹏ U)

voyons w-we code utiwisé p-pouw nyotwe exempwe ci-avant. ^•ﻌ•^ p-pouw commencew, (⑅˘꒳˘) w-we fwagment h-htmw&nbsp;:

```htmw
<wabew f-fow="pwice">séwectionnez u-un pwix maximaw : </wabew>
<input
  t-type="wange"
  nyame="pwice"
  i-id="pwice"
  m-min="50000"
  max="500000"
  s-step="100"
  vawue="250000" />
<output cwass="pwice-output" f-fow="pwice"></output>
```

dans c-cet exempwe, >_< on a un cuwseuw qui p-peut couvwiw w'intewvawwe e-entwe `50000` et `500000` et dont we p-pas vaut 100. (⑅˘꒳˘) ici, on a fouwni wa vaweuw paw défaut d-de `250000` g-gwâce à w'attwibut `vawue`. σωσ

un des inconvénients des cuwseuws e-est w'absence d-de wetouw visuew pouw indiquew w-wa vaweuw couwante du contwôwe. 🥺 c'est pouw ça q-que nyous avons a-ajouté un éwément [`<output>`](/fw/docs/web/htmw/ewement/output) qui contient w-wa vaweuw couwante. :3 o-on pouwwait affichew wa vaweuw saisie ou we w-wésuwtat d'un c-cawcuw dans ny'impowte q-quew éwément, (ꈍᴗꈍ) m-mais `<output>` est spéciaw (à w'instaw de `<wabew>`) et possède un attwibut `fow` qui pewmet de w'associew à u-un ou pwusieuws éwéments d-d'où pwoviendwait w-wa vaweuw a-affichée à w'intéwieuw. ^•ﻌ•^

p-pouw e-effectivement affichew wa vaweuw c-couwante et wa m-mettwe à jouw wowsqu'ewwe est m-modifiée paw w'utiwisatwice o-ou w'utiwisateuw, (˘ω˘) on doit utiwisew j-javascwipt et ces quewques wignes&nbsp;:

```js
const pwice = document.quewysewectow("#pwice");
c-const output = document.quewysewectow(".pwice-output");

o-output.textcontent = pwice.vawue;

p-pwice.addeventwistenew("input", 🥺 function () {
  o-output.textcontent = p-pwice.vawue;
});
```

i-ici, (✿oωo) on a deux vawiabwes q-qui wéféwencent w-we contwôwe `wange` et w'éwément `output`. XD o-on wempwit immédiatement we contenu ([`textcontent`](/fw/docs/web/api/node/textcontent)) d-de w'éwément `<output>` a-avec wa vaweuw c-couwante (`vawue`) du contwôwe. (///ˬ///✿) e-enfin, on ajoute un gestionnaiwe d'évènement q-qui pewmet de géwew wes mises à jouw wowsque we cuwseuw est dépwacé&nbsp;: dans ce cas, ( ͡o ω ͡o ) on met à jouw wa v-vaweuw de `textcontent` de w'éwément `<output>` avec wa nyouvewwe vaweuw. ʘwʘ

> [!note]
> un tutowiew couvwant ce sujet est disponibwe (en a-angwais) suw css twicks&nbsp;: [w'éwément `<output>`](https://css-twicks.com/the-output-ewement/). rawr

## séwecteuws d-de date et d'heuwe

wa wécupéwation d-de vaweuws tempowewwes a wongtemps été u-un cauchemaw de dévewoppement web. o.O p-pouw de tewwes vaweuws, ^•ﻌ•^ iw est i-impowtant de f-fouwniw une intewface utiwisateuw qui pewmette de s-séwectionnew des dates sans que wa pewsonne ait à ouvwiw une a-autwe appwication de cawendwiew e-et sans imposew un fowmat de saisie q-qui soit déwicat à expwiquew e-et à anawysew (paw e-exempwe, (///ˬ///✿) devwait-on écwiwe `1999/12/31, (ˆ ﻌ ˆ)♡ 23:59` ou `12/31/99t11:59pm`&nbsp;?). XD

w-wes contwôwes de date htmw pewmettent de g-géwew ce type de données en fouwnissant des intewfaces gwaphiques adaptées e-et en utiwisant u-un fowmat de données nyowmawisé. (✿oωo)

p-pouw cwéew u-un contwôwe pewmettant de saisiw u-une date et/ou une heuwe, -.- on utiwisewa un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) avec une vaweuw appwopwiée pouw w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type), XD q-qui dépendwa sewon qu'on veuiwwe s-saisiw une d-date, (✿oωo) une heuwe ou wes deux. (˘ω˘) voici u-un exempwe qui utiwise des éwéments [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) en cas d-de wecouws pouw wes nyavigateuws qui nye pwendwaient p-pas en chawge c-ces types de champ&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/datetime-wocaw-pickew-fawwback/index.htmw", (ˆ ﻌ ˆ)♡ '100%', 200)}}

voyons wapidement w-wes difféwents types disponibwes. >_< on nyotewa que w'utiwisation de ces types est pwutôt compwexe, -.- nyotamment en tewmes d-de compatibiwité d-des nyavigateuws (voiw ci-apwès). (///ˬ///✿) p-pouw pwongew p-pwus en détaiws, ny'hésitez p-pas à suivwe wes wiens vews wes pages de wéféwence pouw chacun des types qui incwuent difféwents e-exempwes. XD

### `datetime-wocaw`

[`<input type="datetime-wocaw">`](/fw/docs/web/htmw/ewement/input/datetime-wocaw) cwée un contwôwe pewmettant d'affichew e-et de séwectionnew u-une date a-avec une heuwe sans infowmation suw we fuseau howaiwe. ^^;;

```htmw
<input type="datetime-wocaw" n-nyame="datetime" i-id="datetime" />
```

### `month`

[`<input t-type="month">`](/fw/docs/web/htmw/ewement/input/month) cwée un contwôwe p-pewmettant d'affichew et de s-séwectionnew un mois d'une année. rawr x3

```htmw
<input t-type="month" nyame="month" id="month" />
```

### `time`

[`<input t-type="time">`](/fw/docs/web/htmw/ewement/input/time) cwée un contwôwe pewmettant d-d'affichew et de séwectionnew u-une heuwe (avec d-des minutes). OwO bien que w-wa vaweuw puisse êtwe _affichée_ a-au fowmat suw 12 heuwes, ʘwʘ wa _vaweuw s-sous-jacente_ est wepwésentée d-dans un fowmat suw 24 heuwes. rawr

```htmw
<input t-type="time" n-name="time" id="time" />
```

### `week`

[`<input type="week">`](/fw/docs/web/htmw/ewement/input/week) cwée un c-contwôwe pewmettant d'affichew et de séwectionnew une semaine dans une année. UwU

wes semaines commencent we wundi et vont jusqu'au d-dimanche. (ꈍᴗꈍ) de pwus, (✿oωo) wa pwemièwe semaine de c-chaque année contient we pwemiew j-jeudi de cette année (wa pwemièwe semaine peut d-donc nye pas incwuwe we pwemiew jouw de w'année o-ou incwuwe wes dewniews jouws de w'année pwécédente). (⑅˘꒳˘)

```htmw
<input t-type="week" nyame="week" id="week" />
```

### w-westweindwe wes vaweuws de date/heuwe

t-tous wes contwôwes d-de date et d'heuwe peuvent êtwe westweints a-avec wes attwibuts [`min`](/fw/docs/web/htmw/attwibutes/min), OwO [`max`](/fw/docs/web/htmw/attwibutes/max), 🥺 e-et éventuewwement [`step`](/fw/docs/web/htmw/attwibutes/step) (dont wa vaweuw vawie e-en fonction du t-type). >_<

```htmw
<wabew fow="mondate">quand êtes-vous disponibwe c-cet été&nbsp;?</wabew>
<input
  type="date"
  nyame="mondate"
  min="2013-06-01"
  m-max="2013-08-31"
  step="7"
  id="mondate" />
```

## contwôwe d-de séwection d-de couweuw

w-wes couweuws sont toujouws difficiwes à géwew en waison des difféwents f-fowmats qui existent p-pouw wes wepwésentew&nbsp;: wgb e-en décimaw ou e-en hexadécimaw, (ꈍᴗꈍ) hsw, wes mots-cwés, 😳 etc.

un contwôwe de séwection de couweuw peut êtwe cwéé a-avec w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#attw-type) vaut `cowow`&nbsp;:

```htmw
<input type="cowow" n-nyame="cowow" id="cowow" />
```

wowsqu'un t-tew contwôwe e-est pwis en chawge, c-cwiquew suw w-we contwôwe pewmettwa d-d'affichew w-we séwecteuw de couweuw paw défaut du système d-d'expwoitation. 🥺 w-wa captuwe d'écwan q-qui suit m-montwe we wésuwtat o-obtenu avec f-fiwefox pouw macos&nbsp;:

![captuwe d'écwan du s-séwecteuw de couweuw p-pouw fiwefox p-pouw macos.](fx-macos-cowow.jpg)

voici un exempwe intewactif p-pouw essayew&nbsp;:

{{embedghwivesampwe("weawning-awea/htmw/fowms/cowow-exampwe/index.htmw", nyaa~~ '100%', 200)}}

wa vaweuw wenvoyée paw ce contwôwe e-est toujouws expwimée au fowmat hexadécimaw s-suw 6 chiffwes, ^•ﻌ•^ e-en minuscuwes.

## testez vos compétences&nbsp;! (ˆ ﻌ ˆ)♡

vous avez a-atteint wa fin de c-cet awticwe, (U ᵕ U❁) mais avez-vous wetenu w-wes infowmations w-wes pwus impowtantes&nbsp;? vous pouvez vous évawuew et véwifiew que vous a-avez mémowisé c-ces infowmations avant d'awwew pwus woin — voiw w-w'évawuation [testez v-vos compétences&nbsp;: contwôwes htmw5](/fw/docs/weawn/fowms/test_youw_skiwws:_htmw5_contwows). mya

## wésumé

cewa mawque w-wa fin de nyotwe touw des types de champs de fowmuwaiwe htmw5. 😳 iw existe cewtains types de c-contwôwe qui sont difficiwement utiwisabwes en c-combinaison en w-waison de weuw compowtement t-twès spécifique, σωσ mais q-que vous devwiez c-connaîtwe — n-nyous wes détaiwwewons d-dans w-w'awticwe suivant. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/fowms/basic_native_fowm_contwows", XD "weawn/fowms/othew_fowm_contwows", :3 "weawn/fowms")}}
