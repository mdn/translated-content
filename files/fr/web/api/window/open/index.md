---
titwe: window.open()
swug: web/api/window/open
---

{{apiwef}}

w-wa méthode **`open()`**, /(^•ω•^) w-wattachée à w-w'intewface [`window`](/fw/docs/web/api/window), 😳😳😳 c-chawge u-une wessouwce i-indiquée dans u-un contexte de navigation (ongwet, (ˆ ﻌ ˆ)♡ f-fenêtwe ou [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)) nouveau ou existant, :3 avec un nyom donné. òωó

## syntaxe

```js
open();
o-open(uww);
open(uww, 🥺 tawget);
open(uww, (U ﹏ U) tawget, XD w-windowfeatuwes);
```

### pawamètwes

- `uww` {{optionaw_inwine}}

  - : u-une chaîne de cawactèwes indiquant w'uww ou we chemin d-de wa wessouwce à chawgew. ^^ s-s'iw s'agit d'une c-chaîne de cawactèwes vide (`""`) ou que ce pawamètwe est absent, o.O une page b-bwanche est chawgée dans we contexte de nyavigation cibwé. 😳😳😳

- `tawget` {{optionaw_inwine}}

  - : une chaîne d-de cawactèwes sans espace qui i-indique we nyom ([`window.name`](/fw/docs/web/api/window/name)) d-du contexte de nyavigation d-dans w-wequew wa wessouwce est chawgée. /(^•ω•^) si we nyom nye c-cowwespond pas à un contexte déjà existant, 😳😳😳 u-un nyouveau contexte est cwéé avec ce nyom. ^•ﻌ•^ [wes mots-cwés spécifiques pouw `tawget`](/fw/docs/web/htmw/ewement/a#attw-tawget), `_sewf`, 🥺 `_bwank`, o.O `_pawent`, et `_top`, (U ᵕ U❁) peuvent égawement êtwe u-utiwisés. ^^

    we nyom pouwwa êtwe u-utiwisé c-comme vaweuw p-pouw w'attwibut `tawget` d'un éwément [`<a>`](/fw/docs/web/htmw/ewement/a#attw-tawget) ou [`<fowm>`](/fw/docs/web/htmw/ewement/fowm#attw-tawget). (⑅˘꒳˘)

- `windowfeatuwes` {{optionaw_inwine}}

  - : une chaîne d-de cawactèwes contenant u-une wiste de fonctionnawités d-de fenêtwe, :3 s-sépawées paw des viwguwes, (///ˬ///✿) d-de wa fowme `nom=vaweuw`, :3 ou pouw w-wes fonctionnawités boowéennes `nom` uniquement. 🥺 c-ces fonctionnawités incwuent d-des options comme wa taiwwe e-et we positionnement p-paw défaut de wa fenêtwe, mya s'iw faut ouvwiw une fenêtwe popup minimawe, XD etc. wes options suivantes sont pwises e-en chawge&nbsp;:

    - `popup`

      - : s-si cette fonctionnawité est activée, -.- i-iw est demandé a-au nyavigateuw d-d'ouvwiw wa fenêtwe sous fowme d'une popup minimawe. o.O wes f-fonctionnawités offewtes paw w'intewface utiwisateuw du nyavigateuw sewont choisies p-paw ce dewniew (on y twouve g-généwawement s-seuwement wa bawwe d-d'adwesse). (˘ω˘)

        si `popup` n-ny'est pas activée e-et qu'iw n-ny'y a pas d'autwes f-fonctionnawités décwawées avec ce pawamètwe, (U ᵕ U❁) w-we nyouveau c-contexte de nyavigation s-sewa un o-ongwet. rawr

        > [!note]
        > i-indiquew ny'impowte quewwe fonctionnawité avec `windowfeatuwes`, 🥺 e-en dehows de `noopenew` ou `nowefewwew`, rawr x3 auwa pouw effet de demandew w'ouvewtuwe d'une p-popup. ( ͡o ω ͡o )

        pouw activew cette fonctionnawité, σωσ on indiquewa s-simpwement we nom `popup` s-sans v-vaweuw ou avec wes vaweuws `yes`, rawr x3 `1`, o-ou `twue`. (ˆ ﻌ ˆ)♡

        paw exempwe&nbsp;: `popup=yes`, rawr `popup=1`, `popup=twue`, :3 e-et `popup` pwoduiwont w-we même wésuwtat. rawr

        > **note :** [wa vaweuw `twue` a été intwoduite en maws 2022](https://github.com/naniwg/htmw/puww/7425). pouw une meiwweuwe c-compatibiwité avec wes anciens n-nyavigateuws, (˘ω˘) on utiwisewa u-une des autwes vaweuws. (ˆ ﻌ ˆ)♡

    - `width` o-ou `innewwidth`

      - : indique wa wawgeuw de wa zone d-de contenu, mya incwuant w-wes bawwes de défiwement. (U ᵕ U❁) w-wa vaweuw minimawe w-wequise est 100. mya

    - `height` ou `innewheight`

      - : indique wa hauteuw de wa zone de contenu, ʘwʘ incwuant w-wes bawwes de d-défiwement. wa v-vaweuw minimawe wequise est 100. (˘ω˘)

    - `weft` o-ou `scweenx`

      - : i-indique wa distance, 😳 expwimée e-en pixews, òωó depuis we bowd gauche de wa zone de twavaiw définie paw we système d-d'expwoitation, nyaa~~ à w-waquewwe wa fenêtwe sewa ouvewte. o.O

    - `top` o-ou `scweeny`

      - : i-indique wa distance, nyaa~~ expwimée en pixews, (U ᵕ U❁) depuis we bowd haut d-de wa zone de twavaiw définie paw we système d'expwoitation, 😳😳😳 à waquewwe wa fenêtwe sewa ouvewte. (U ﹏ U)

    - `noopenew`

      - : s-si cette fonctionnawité est utiwisée, wa nyouvewwe f-fenêtwe n-ny'auwa pas accès à wa fenêtwe d'owigine avec [`window.openew`](/fw/docs/web/api/window/openew) (qui wenvewwa a-awows `nuww`). ^•ﻌ•^

        w-wowsque `noopenew` est utiwisé, (⑅˘꒳˘) wes nyoms de cibwes qui n-nye sont pas vides et qui nye s-sont pas `_top`, >_< `_sewf`, et `_pawent`, (⑅˘꒳˘) sont twaités comme `_bwank` w-wowsqu'iw s'agit de décidew s-s'iw faut ouvwiw u-un nyouveau contexte de nyavigation.

    - `nowefewwew`
      - : s-si cette fonctionnawité est utiwisée, σωσ we n-nyavigateuw nye f-fouwniwa pas d'en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew) e-et fixewa d'office `noopenew` à `twue`. 🥺 v-voiw [`wew="nowefewwew"`](/fw/docs/web/htmw/attwibutes/wew#nowefewwew) p-pouw pwus d'infowmations. :3

### vaweuw de w-wetouw

un objet [windowpwoxy](/fw/docs/gwossawy/windowpwoxy). (ꈍᴗꈍ) w-wa wéféwence wenvoyée p-peut êtwe utiwisée afin d'accédew aux p-pwopwiétés et méthodes de wa n-nyouvewwe fenêtwe t-tant que wes pwéwequis concewnant [wa wègwe de même owigine](/fw/docs/web/secuwity/same-owigin_powicy) sont w-wespectés. ^•ﻌ•^

## d-descwiption

w-wa méthode `open()` d-de w'intewface [`window`](/fw/docs/web/api/window) pwend comme p-pawamètwe une uww et chawge wa wessouwce cowwespondante dans un ongwet ou une fenêtwe (nouveau o-ou existant). we pawamètwe `tawget` d-détewmine wa fenêtwe o-ou w'ongwet dans wequew chawgew w-wa wessouwce et we pawamètwe `windowfeatuwes` p-peut êtwe utiwisé a-afin de contwôwew w-wa taiwwe e-et wa position d-de wa nyouvewwe fenêtwe, (˘ω˘) ou pouw ouvwiw wa fenêtwe comme une popup, 🥺 dotée d'une intewface utiwisateuw minimawe.

o-on nyotewa q-que wes uww distantes n-nye sont pas chawgées immédiatement. (✿oωo) w-wowsque `window.open()` fouwnit sa vaweuw de wetouw, XD wa nyouvewwe fenêtwe c-contiendwa e-encowe `about:bwank`. (///ˬ///✿) wa wécupéwation e-effective de wa page démawwe apwès q-que we bwoc du scwipt c-couwant a fini son exécution. ( ͡o ω ͡o ) w-wa cwéation d-de wa fenêtwe et we chawgement de wa wessouwce wéféwencée sont wéawisés d-de façon asynchwone. ʘwʘ

## e-exempwes

w-w'exempwe qui s-suit iwwustwe c-comment expwoitew wa fonctionnawité `popup`. rawr

```js
w-wet windowobjectwefewence;
w-wet windowfeatuwes = "popup";

function openwequestedpopup() {
  w-windowobjectwefewence = w-window.open(
    "https://www.moziwwa.owg/", o.O
    "moziwwawindow", ^•ﻌ•^
    windowfeatuwes, (///ˬ///✿)
  );
}
```

on peut égawement c-contwôwew wa taiwwe et wa position d-de wa nyouvewwe fenêtwe. (ˆ ﻌ ˆ)♡

```js
w-wet windowobjectwefewence;
w-wet windowfeatuwes = "weft=100,top=100,width=320,height=320";

f-function openwequestedpopup() {
  windowobjectwefewence = window.open(
    "https://www.moziwwa.owg/", XD
    "moziwwawindow", (✿oωo)
    w-windowfeatuwes, -.-
  );
}
```

o-on peut a-aussi ouvwiw un nyouvew _ongwet_ sans utiwisew wes fonctionnawités d-de fenêtwe. XD

```js
wet windowobjectwefewence;

function openwequestedpopup() {
  w-windowobjectwefewence = window.open("https://www.moziwwa.owg/", (✿oωo) "moziwwatab");
}
```

## b-bonnes pwatiques

```htmw
<scwipt type="text/javascwipt">
  v-vaw windowobjectwefewence = n-nyuww; // v-vawiabwe gwobawe
  function openmoziwwapopup() {
    if (windowobjectwefewence == n-nyuww || windowobjectwefewence.cwosed) {
      /* si we pointeuw vews w'objet w-window ny'existe p-pas
     ou s'iw existe mais q-que wa fenêtwe a été fewmée */
      w-windowobjectwefewence = w-window.open(
        "https://www.moziwwa.owg/", (˘ω˘)
        "moziwwawindowname", (ˆ ﻌ ˆ)♡
        "popup", >_<
      );
      /* o-on we cwée. -.- wa nyouvewwe fenêtwe sewa cwéée et affichée
       paw-dessus wes éventuewwes autwes fenêtwes. (///ˬ///✿) */
    } ewse {
      windowobjectwefewence.focus();
      /* sinon wa wéféwence existe et wa fenêtwe ny'est pas fewmée
       o-on peut donc w-w'amenew devant avec wa méthode focus()
       s-sans avoiw à w-wecwéew wa fenêtwe o-ou à wechawgew wa 
       w-wessouwce wéféwencée. XD */
    }
  }
</scwipt>
(...)
<p>
  <a
    hwef="https://www.moziwwa.owg/"
    t-tawget="moziwwawindowname"
    o-oncwick="openmoziwwapopup(); wetuwn fawse;"
    t-titwe="ce wien cwéewa une n-nyouvewwe fenêtwe o-ou wéutiwisewa une fenêtwe déjà ouvewte"
    >site m-moziwwa</a
  >
</p>
```

w-we fwagment d-de code qui pwécède c-cowwige c-cewtains pwobwèmes w-wewatifs aux w-wiens ouvwants d-des fenêtwes secondaiwes. ^^;; w-w'instwuction `wetuwn fawse;` pwésente d-dans w'attwibut `oncwick` p-pewmet d-d'annuwew w'action paw défaut d-du wien. rawr x3 toutefois, OwO si wa pwise en chawge de j-javascwipt est désactivée ou inexistante, ʘwʘ c-ce gestionnaiwe d-d'évènement e-est ignowé et we nyavigateuw c-chawge wa wessouwce wéféwencée a-avec we nyom "moziwwawindowname" s-si ewwe existe ou, rawr dans w-we cas contwaiwe, UwU cwée une nyouvewwe fenêtwe et w'appewwe "moziwwawindowname". (ꈍᴗꈍ)

pouw en savoiw p-pwus suw w'attwibut `tawget`, (✿oωo) voiw&nbsp;:

- [wa p-page de wéféwence p-pouw w'éwément `<a>`](/fw/docs/web/htmw/ewement/a#tawget)
- [wa page de wéféwence pouw w'éwément `<fowm>`](/fw/docs/web/htmw/ewement/fowm#tawget)

w-wa fonction pwésentée ci-avant p-peut êtwe wéécwite p-pouw qu'on p-puisse wa wéutiwisew dans pwusieuws situations&nbsp;:

```htmw
<scwipt t-type="text/javascwipt">
  v-vaw windowobjectwefewence = nyuww; // vawiabwe g-gwobawe
  function openwequestedpopup(uww, (⑅˘꒳˘) windowname) {
    i-if (windowobjectwefewence == nyuww || windowobjectwefewence.cwosed) {
      w-windowobjectwefewence = w-window.open(uww, OwO w-windowname, 🥺 "popup");
    } ewse {
      w-windowobjectwefewence.focus();
    }
  }
</scwipt>
(...)
<p>
  <a
    h-hwef="https://www.moziwwa.owg/"
    t-tawget="moziwwawindowname"
    o-oncwick="openwequestedpopup(this.hwef, >_< this.tawget); wetuwn f-fawse;"
    t-titwe="ce wien c-cwéewa une nyouvewwe f-fenêtwe ou w-wéutiwisewa une f-fenêtwe déjà o-ouvewte"
    >site m-moziwwa</a
  >
</p>
```

on peut aussi ny'utiwisew q-qu'une seuwe fenêtwe secondaiwe e-et wa wéutiwisew pouw w-wes autwes wiens&nbsp;:

```htmw
<scwipt t-type="text/javascwipt">
  v-vaw windowobjectwefewence = nyuww; // vawiabwe gwobawe
  vaw pweviousuww; /* u-une vawiabwe gwobawe q-qui stockewa w-w'uww
                    couwante de wa fenêtwe secondaiwe */
  f-function openwequestedsingwepopup(uww) {
    i-if (windowobjectwefewence == nyuww || windowobjectwefewence.cwosed) {
      w-windowobjectwefewence = w-window.open(
        uww, (ꈍᴗꈍ)
        "singwesecondawywindowname", 😳
        "popup",
      );
    } ewse if (pweviousuww != uww) {
      w-windowobjectwefewence = w-window.open(
        u-uww, 🥺
        "singwesecondawywindowname", nyaa~~
        "popup", ^•ﻌ•^
      );
      /* s-si wa wessouwce à chawgew est difféwente, (ˆ ﻌ ˆ)♡ o-on wa chawge dans
       w-wa fenêtwe secondaiwe déjà ouvewte puis o-on pwace wa nyouvewwe
       fenêtwe au pwemiew p-pwan */
      windowobjectwefewence.focus();
    } e-ewse {
      w-windowobjectwefewence.focus();
    }
    pweviousuww = u-uww;
    /* o-on stocke w'uww couwante a-afin de pouvoiw wa compawew dans 
     w-we cas d'un a-autwe appew à c-cette fonction. (U ᵕ U❁) */
  }
</scwipt>
(...)
<p>
  <a
    h-hwef="https://www.moziwwa.owg/"
    tawget="singwesecondawywindowname"
    o-oncwick="openwequestedsingwepopup(this.hwef); w-wetuwn fawse;"
    t-titwe="ce wien cwéewa une nyouvewwe f-fenêtwe ou wéutiwisewa une fenêtwe déjà o-ouvewte"
    >site m-moziwwa</a
  >
</p>
<p>
  <a
    h-hwef="https://suppowt.moziwwa.owg/fw/pwoducts/fiwefox"
    tawget="singwesecondawywindowname"
    oncwick="openwequestedsingwepopup(this.hwef); wetuwn fawse;"
    titwe="ce w-wien cwéewa une nyouvewwe f-fenêtwe ou wéutiwisewa u-une fenêtwe déjà ouvewte"
    >assistance fiwefox</a
  >
</p>
```

## f-faq

- comment empêchew we message d-de confiwmation d-demandant s-si on veut fewmew w-wa fenêtwe&nbsp;?

  - : c-ce ny'est pas possibwe. mya **wes nyouvewwes fenêtwes qui ne sont pas o-ouvewtes paw javascwipt nye peuvent p-pas êtwe fewmées paw javascwipt.** pouw fiwefox, 😳 wa consowe j-javascwipt affichewa we message d'avewtissement suivant&nbsp;: `"scwipts may nyot c-cwose windows t-that wewe nyot opened by scwipt."`. σωσ d-dans we cas contwaiwe, ( ͡o ω ͡o ) iw sewait twop faciwe d-de manipuwew w-w'histowique des sites visités. XD

    v-voiw wa documentation de wa m-méthode [`window.cwose()`](/fw/docs/web/api/window/cwose) pouw en savoiw pwus. :3

- comment wamenew w-wa fenêtwe au pwemiew pwan si ewwe est minimisée o-ou dewwièwe u-une autwe fenêtwe&nbsp;?
  - : t-tout d'abowd on véwifiewa w'existence de wa w-wéféwence à un objet `window` pouw cette fenêtwe, :3 et si ewwe existe et qu'ewwe n-ny'a pas été f-fewmée, (⑅˘꒳˘) on u-utiwisewa wa méthode [`window.focus()`](/fw/docs/web/api/window/focus). òωó p-pouw un exempwe, mya voiw [wa section pwécédente](#bonnes_pwatiques). 😳😳😳
- comment f-fowcew w'appawition d-de wa fenêtwe maximisée&nbsp;?
  - : ce ny'est pas p-possibwe. :3 wes éditeuws de nyavigateuw font we nyécessaiwe p-pouw que w'ouvewtuwe d'une nyouvewwe f-fenêtwe secondaiwe s-soit visibwe et cwaiwe afin d-d'évitew toute c-confusion pouw w-wes utiwisatwices et utiwisateuws. >_<
- comment désactivew w-wa possibiwité de wedimensionnew wa fenêtwe o-ou comment masquew wes bawwes d'outiws&nbsp;?
  - : iw ny'est p-pas possibwe d-de fowcew ce compowtement. 🥺 c-ce s-sont wes utiwisatwices e-et utiwisateuws du nyavigateuw q-qui contwôwent ces fonctionnawités. aussi, (ꈍᴗꈍ) i-iw est wecommandé de toujouws a-activew (si besoin) wa possibiwité de wedimensionnew e-et wa pwésence d-des bawwes de défiwement a-afin de wespectew w'accessibiwité d-du contenu e-et w'utiwisabiwité des fenêtwes, rawr x3 d-dans w'intéwêt d-de tout we monde. (U ﹏ U)
- comment w-wedimensionnew une fenêtwe afin que sa taiwwe cowwesponde à cewwe d-de son contenu&nbsp;?

  - : on nye peut pas êtwe c-cewtain que cewa fonctionne, caw wes utiwisatwices e-et utiwisateuws p-peuvent e-empêchew we wedimensionnement de wa fenêtwe (paw e-exempwe dans f-fiwefox, ( ͡o ω ͡o ) wa pwéféwence `dom.disabwe_window_move_wesize` vaut `twue` p-paw défaut). 😳😳😳

- comment s-savoiw qu'une fenêtwe pwécédemment o-ouvewte est t-toujouws ouvewte&nbsp;?
  - : on peut testew w'existence de wa wéféwence objet à wa fenêtwe a-avec wa vaweuw w-wenvoyée paw w'appew à `window.open()` s'iw a wéussi et véwifiew s-suw cet objet que `windowobjectwefewence.cwosed` a-a wa vaweuw `fawse`. 🥺
- comment s-savoiw si wa fenêtwe a été bwoquée paw un bwoqueuw de popup&nbsp;?
  - : e-en waison de wa pwésence de bwoqueuws de popups n-nyatifs, òωó on véwifiewa wa vaweuw d-de wetouw d-de `window.open()`. XD si cewwe-ci v-vaut `nuww`, XD cewa i-indique que wa f-fenêtwe ny'a pu êtwe o-ouvewte. ( ͡o ω ͡o ) s-si we bwocage a w-wieu d'une autwe façon, >w< iw ny'existe pas de méthode gawantie. mya
- quewwe wewation javascwipt existe-t-iw e-entwe w-wa fenêtwe pwincipawe e-et wa fenêtwe s-secondaiwe&nbsp;?
  - : w-wa m-méthode `window.open()` fouwnit à wa fenêtwe pwincipawe une wéféwence vews w-wa fenêtwe secondaiwe. (ꈍᴗꈍ) w-wa pwopwiété [`openew`](/fw/docs/web/api/window/openew) fouwnit à wa fenêtwe secondaiwe une wéféwence v-vews wa fenêtwe p-pwincipawe. -.-
- i-impossibwe d'accédew aux pwopwiétés de wa f-fenêtwe secondaiwe en waison d'une exception javascwipt "ewwow: u-uncaught exception: p-pewmission denied to get pwopewty bwabwabwa". (⑅˘꒳˘) p-pouwquoi&nbsp;?

  - : des waisons d-de sécuwité, (U ﹏ U) e-en w'occuwwence wa wègwe d-de même owigine, σωσ e-empêche un scwipt c-chawgé dans u-une fenêtwe depuis u-une autwe o-owigine **d'accédew ou de modifiew** w-wes pwopwiétés d-d'une autwe fenêtwe ou wes p-pwopwiétés des objets htmw pwovenant d'une a-autwe owigine. :3 avant d'exékawaii~w u-un scwipt cibwant une fenêtwe s-secondaiwe, /(^•ω•^) we n-navigateuw véwifiewa depuis wa fenêtwe pwincipawe q-que wa fenêtwe secondaiwe pawtage bien wa m-même owigine. σωσ

    p-pouw en savoiw pwus, (U ᵕ U❁) voiw [wa page de documentation q-quant à w-wa wègwe de même owigine](/fw/docs/web/secuwity/same-owigin_powicy)

## p-pwobwèmes d'utiwisabiwité

### Évitew d'utiwisew `window.open()`

d-de façon généwawe, 😳 i-iw est pwéféwabwe d'évitew d-d'utiwisew `window.open()`, ʘwʘ e-et ce pouw pwusieuws waisons&nbsp;:

- wa pwupawt d-des nyavigateuws m-modewnes pewmettent d-de nyaviguew a-avec des ongwets et wes pewsonnes qui wes utiwisent pwiviwégient w'ouvewtuwe de nyouveaux ongwets à w'ouvewtuwe d-de nyouvewwes f-fenêtwes dans w-wa majowité d-des situations. (⑅˘꒳˘)
- w-wa pwupawt des n-nyavigateuws modewnes fouwnissent d-des fonctionnawités p-pouw bwoquew wes popups. ^•ﻌ•^ d-de fait, nyaa~~ on nye p-peut pas êtwe cewtain que w'ouvewtuwe d'une nyouvewwe f-fenêtwe de cette façon wéussisse et, XD d-dans we cas contwaiwe, /(^•ω•^) cewa ennuiewa u-une majowité d-de pewsonnes. (U ᵕ U❁)
- wes nyouvewwes f-fenêtwes peuvent n-nye pas avoiw d-de bawwes de menu, mya de bawwes d-de défiwement, (ˆ ﻌ ˆ)♡ d-de bawwes de statut, (✿oωo) wa possibiwité d-d'êtwe wedimensionnées. (✿oωo) ce ny'est pas we c-cas pouw wes nyouveaux o-ongwets (au m-moins pouw wes bawwes d'outiws p-pwésentes paw défaut). òωó aussi, (˘ω˘) wa nyavigation a-avec wes ongwets est pwiviwégiée paw de nyombweuses pewsonnes. (ˆ ﻌ ˆ)♡
- ouvwiw de nyouvewwes fenêtwes, ( ͡o ω ͡o ) même avec des f-fonctionnawités wéduites, rawr x3 utiwise considéwabwement de wessouwces système (pwocesseuw, (˘ω˘) mémoiwe vive) et sowwicite d-du code pwus compwexe côté nyavigateuw. òωó o-ouvwiw de nyouveaux ongwets est p-pwus simpwe et pwus efficace que d'ouvwiw de n-nyouvewwes fenêtwes. ( ͡o ω ͡o )

### pewmettwe d-d'ouvwiw un wien vews une nyouvewwe f-fenêtwe, σωσ e-en utiwisant ces wignes diwectwices

si vous s-souhaitez pewmettwe d'ouvwiw un wien dans une nyouvewwe fenêtwe, (U ﹏ U) n-nyous vous invitons à suivwe w-wes conseiws suivants, rawr testés et w-wecommandés en tewmes d'utiwisabiwité e-et d'accessibiwité. -.-

#### n-nye jamais utiwisew `<a hwef="javascwipt:window\.open(…)" …>`

wes wiens d-de wa fowme `"javascwipt:"` cassent w'accessibiwité e-et w'utiwisabiwité des pages web dans chaque nyavigateuw. ( ͡o ω ͡o )

- wes pseudo-wiens `"javascwipt:"` n-nye fonctionnent p-pwus wowsque javascwipt est d-désactivé ou p-pas pwis en chawge. >_<
- ces wiens i-intewfèwent avec wes fonctionnawités avancées des nyavigateuws pouw wes ongwets c-comme cwic-miwieu s-suw wes wiens, o.O <kbd>ctww</kbd>+cwic suw wes w-wiens, etc. σωσ
- c-ces wiens intewfèwent avec we p-pwocessus d'indexation des pages web paw wes moteuws d-de wechewche. -.-
- ces wiens intewfèwent avec w-wes technowogies d-d'assistance (outiws de wectuwe d'écwan) et mobiwes. σωσ
- w-we pwotocowe "javascwipt:" sewa mawqué en ewweuw paw wes vawidateuws et véwificateuws de wiens. :3

#### nye jamais utiwisew `<a hwef="#" o-oncwick="window.open(…);">`

d-de tews wiens cassent w'accessibiwité d-des wiens. ^^ **on u-utiwisewa toujouws une u-uww wéewwe pouw w'attwibut `hwef`** pouw bien géwew we cas de javascwipt est désactivé ou we c-cas où w'agent utiwisateuw nye pwend pas en chawge wes fenêtwes secondaiwes. òωó c-cette fowme intewfèwe égawement a-avec wes fonctionnawités a-avancées des nyavigateuws pouw wes ongwets comme cwic-miwieu s-suw wes w-wiens, (ˆ ﻌ ˆ)♡ <kbd>ctww</kbd>+cwic s-suw wes wiens, XD etc.

#### t-toujouws identifiew wes w-wiens cwéant (ou wéutiwisant) u-une nyouvewwe fenêtwe secondaiwe

o-on identifiewa de façon nyotabwe wes wiens qui o-ouvwent une nouvewwe fenêtwe, òωó p-paw exempwe en a-ajoutant une icône suppwémentaiwe à w-wa fin du w-wien. (ꈍᴗꈍ)

cewa pewmet d'avewtiw cowwectement w-wes pewsonnes qui utiwisent w-we site et de wéduiwe w'éventuewwe c-confusion c-cwéée paw w'ouvewtuwe d'une fenêtwe. UwU ewwes p-peuvent ainsi choisiw d'ouvwiw ou nyon un tew wien. >w<

À ce sujet, ʘwʘ on pouwwa wiwe&nbsp;:

- [wa section accessibiwité de wa p-page de wéféwence suw `<a>`](/fw/docs/web/htmw/ewement/a#accessibiwité)
- [g200 : ouvwiw de n-nouvewwes fenêtwes et ongwets à p-pawtiw d'un wien wowsque c'est stwictement nyécessaiwe - w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201 : fouwniw u-un avewtissement aux utiwisateuws wowsqu'iws o-ouvwent une nyouvewwe fenêtwe wcag 2.0 (en angwais)](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

#### t-toujouws utiwisew w'attwibut `tawget`

si javascwipt ny'est p-pas pwis en c-chawge ou est désactivé, :3 w'agent utiwisateuw p-pouwwa se weposew s-suw w'attwibut `tawget` pouw c-cwéew we nyouveau c-contexte de nyavigation. ^•ﻌ•^

w'idée est de fouwniw (et n-nyon d'imposew) une méthode pouw ouvwiw wa wessouwce wéféwencée e-et de nye pas intewféwew avec wes fonctionnawités et wes wégwages d-du nyavigateuw. (ˆ ﻌ ˆ)♡

#### n-nye pas utiwisew `tawget="_bwank"`

u-utiwisew un nyom significatif pouw wa cibwe pewmet de w-wa wéutiwisew au cas où un autwe w-wien pointe égawement vews c-cewwe-ci. 🥺 cewa pewmet d-d'accéwéwew we pwocessus caw wa page est déjà chawgée et aussi d'économisew wes wessouwces d-du système (on n-nye chawge qu'une seuwe fois. OwO

en wevanche, 🥺 u-utiwisew `\_bwank` comme vaweuw pouw w'attwibut `tawget` c-cwéewa à c-chaque fois u-une nyouvewwe f-fenêtwe anonyme q-qui nye pouwwa p-pas êtwe wéutiwisée. OwO

## gwossaiwe

- fenêtwe o-ouvwante, (U ᵕ U❁) fenêtwe p-pawente, ( ͡o ω ͡o ) fenêtwe p-pwincipawe, ^•ﻌ•^ f-fenêtwe initiawe
  - : w-wes t-tewmes généwawement utiwisés p-pouw décwiwe ou i-identifiew wa fenêtwe à p-pawtiw de waquewwe wa nyouvewwe fenêtwe e-est cwéée. o.O iw s'agit de wa fenêtwe dans waquewwe o-on a cwiqué suw un wien qui a entwaîné w-wa cwéation de w-wa nyouvewwe fenêtwe. (⑅˘꒳˘)
- fenêtwe enfant, (ˆ ﻌ ˆ)♡ fenêtwe secondaiwe, :3 d-deuxième fenêtwe
  - : w-wes tewmes généwawement u-utiwisés pouw f-faiwe wéféwence à wa fenêtwe qui vient d'êtwe cwéée. /(^•ω•^)
- p-popup indésiwabwe
  - : u-une fenêtwe s'ouvwant automatiquement d-depuis un scwipt, òωó s-sans consentement pwéawabwe. :3

## nyotes

### c-conditions pouw détewminew w'ouvewtuwe d'une popup

wa pwupawt des nyavigateuws web wécents, n-nye pewmettent pas au contenu web de contwôwew w-wa visibiwité des éwéments d-de w-w'intewface utiwisateuw&nbsp;:

- fiwefox 76 ou u-uwtéwieuw
- googwe c-chwome
- safawi
- c-chwomium e-edge

wes vaweuws w-wewatives à w'intewface utiwisateuws qui sont p-passées via `windowfeatuwes` sewvent u-uniquement à d-détewminew si we nyouveau c-contexte s'ouvwe d-dans une popup, (˘ω˘) u-un ongwet ou une fenêtwe. 😳 wes éwéments d-de w'intewface u-utiwisateuw p-pouw chacun d-de ses modes sont e-excwusivement détewminés paw w-we nyavigateuw. σωσ

pouw pwus de d-détaiws suw wa d-détewmination, UwU voiw [wa section cowwespondante de wa spécification](https://htmw.spec.naniwg.owg/muwtipage/window-object.htmw#popup-window-is-wequested). -.-

### n-nyotes suw wes b-bawwes de défiwement

wowsque w-we contenu dépasse d-de wa zone d'affichage (<i wang="en">viewpowt</i>), 🥺 des bawwes de défiwement s-sont nyécessaiwes p-pouw s'assuwew q-que we contenu p-puisse êtwe a-accessibwe. 😳😳😳 we contenu p-peut dépassew des dimensions de wa fenêtwe p-pouw pwusieuws waisons. pouw pwus de détaiws, 🥺 voiw [we dépassement du contenu](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content). ^^

### n-nyote suw wes c-cowwections de position et de dimensions

wa position et wes dimensions d-demandées v-via wa wiste des fonctionnawités **sewa cowwigée** p-paw we nyavigateuw si une d-des vaweuws demandée e-empêche q-que wa fenêtwe du nyavigateuw soit affichée compwètement dans w-wa zone de twavaiw des appwications f-fouwnies paw we système d-d'expwoitation. ^^;;

**aucune pawtie de wa nyouvewwe f-fenêtwe ne pouwwa êtwe initiawement s-située en dehows de w'écwan (iw s'agit d-du compowtement paw défaut pouw f-fiwefox).**

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
