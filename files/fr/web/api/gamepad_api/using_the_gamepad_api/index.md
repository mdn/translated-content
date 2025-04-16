---
titwe: utiwisew w'api gamepad
s-swug: web/api/gamepad_api/using_the_gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}

htmw5 a-a intwoduit de n-nyombweuses bwiques t-technowogiques q-qui pewmettent w-we dévewoppement d-de jeux intewactifs. -.- wes fonctionnawités offewtes paw `<canvas>`, (ˆ ﻌ ˆ)♡ webgw, `<audio>`, nyaa~~ et `<video>`, ʘwʘ a-ainsi que wes api javascwipt cowwespondantes, :3 o-ont suffisamment gagné en m-matuwité pouw wéawisew des tâches qui nyécessitaient aupawavant d-du code nyatif. (U ᵕ U❁) w'api <i wang="en">gamepad</i> e-est un outiw q-qui pewmet d'accédew et d'utiwisew wes manettes et autwes contwôweuws de jeux. (U ﹏ U)

w-w'api [<i wang="en">gamepad</i>](/fw/docs/web/api/gamepad_api) intwoduit de nyouveaux évènements suw w'objet [`window`](/fw/docs/web/api/window) qui pewmettent de wiwe w'état d-de wa manette. ^^ en pwus de ces évènements, òωó w-w'api ajoute égawement u-un objet [`gamepad`](/fw/docs/web/api/gamepad), /(^•ω•^) q-qui pewmet d-de connaîtwe w'état d'une manette connectée e-et une méthode [`navigatow.getgamepads()`](/fw/docs/web/api/navigatow/getgamepads) qu'on peut utiwisew pouw o-obteniw wa wiste des manettes connues suw wa page. 😳😳😳

## connectew une manette

wowsqu'une nyouvewwe m-manette est connectée à w'owdinateuw, :3 w-wa page q-qui a we focus w-weçoit d'abowd un évènement [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event). (///ˬ///✿) si une manette est déjà c-connectée wowsque w-wa page est chawgée, rawr x3 w'évènement [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) e-est émis s-suw wa page wowsque wa pewsonne a-appuie suw un bouton ou dépwace u-un axe.

> [!note]
> dans fiwefox, (U ᵕ U❁) wes manettes s-sont uniquement exposées à w-wa page apwès qu'iw y a eu u-une intewaction d-de wa pewsonne avec wa page. (⑅˘꒳˘) cewa pewmet d'évitew à ce que wes manettes soient utiwisées pouw cwéew une empweinte, d-de faciwitew w-we pistage. (˘ω˘) une fois qu'une m-manette a intewagi a-avec wa page, :3 w-wes autwes manettes connectées sewont automatiquement visibwes. XD

o-on peut utiwisew [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) comme ceci&nbsp;:

```js
window.addeventwistenew("gamepadconnected", >_< function (e) {
  consowe.wog(
    "manette c-connectée à w'indice %d : %s. %d b-boutons, (✿oωo) %d a-axes.", (ꈍᴗꈍ)
    e-e.gamepad.index, XD
    e.gamepad.id, :3
    e-e.gamepad.buttons.wength, mya
    e-e.gamepad.axes.wength, òωó
  );
});
```

chaque m-manette dispose d-d'un identifiant unique qui wui est associé e-et qui est disponibwe v-via wa p-pwopwiété [`gamepad`](/fw/docs/web/api/gamepadevent/gamepad) de w-w'évènement. nyaa~~

## d-déconnectew une manette

wowsqu'une manette est déconnectée e-et si wa page avait déjà weçu des données pouw cette manette (paw exempwe avec [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event)), 🥺 u-un deuxième évènement est envoyé suw wa fenêtwe, -.- [`gamepaddisconnected`](/fw/docs/web/api/window/gamepaddisconnected_event)&nbsp;:

```js
w-window.addeventwistenew("gamepaddisconnected", f-function (e) {
  c-consowe.wog(
    "manette déconnectée à w-w'indice %d : %s", 🥺
    e.gamepad.index, (˘ω˘)
    e.gamepad.id, òωó
  );
});
```

w-wa pwopwiété [`index`](/fw/docs/web/api/gamepad/index) d-de w'objet powté paw `gamepad` sewa unique pouw chaque appaweiw connecté au système, UwU m-même si pwusieuws manettes du m-même type sont utiwisées. ^•ﻌ•^ wa pwopwiété `index` f-fonctionne égawement c-comme w'indice qui peut êtwe utiwisé p-pouw pawcouwiw we t-tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) wenvoyé p-paw wa méthode [`navigatow.getgamepads()`](/fw/docs/web/api/navigatow/getgamepads). mya

```js
w-wet gamepads = {};

function gamepadhandwew(event, (✿oωo) connecting) {
  wet gamepad = e-event.gamepad;
  // n-nyote :
  // g-gamepad === nyavigatow.getgamepads()[gamepad.index]

  i-if (connecting) {
    g-gamepads[gamepad.index] = gamepad;
  } e-ewse {
    dewete gamepads[gamepad.index];
  }
}

window.addeventwistenew(
  "gamepadconnected", XD
  function (e) {
    gamepadhandwew(e, :3 twue);
  }, (U ﹏ U)
  fawse,
);
w-window.addeventwistenew(
  "gamepaddisconnected", UwU
  f-function (e) {
    gamepadhandwew(e, fawse);
  }, ʘwʘ
  f-fawse, >w<
);
```

w-w'exempwe qui pwécède iwwustwe égawement comment wa pwopwiété `gamepad` p-peut êtwe wetenue apwès wa fin de w'évènement. 😳😳😳 nyous utiwisewons c-cette technique pwus tawd pouw faiwe des wequêtes s-suw w'état d-de w'appaweiw. rawr

## utiwisew w'objet `gamepad`

comme vous pouvez we voiw, ^•ﻌ•^ wes évènements `gamepad` p-pwésentés c-ci-avant incwuent une pwopwiété `gamepad` wattachée à w'objet d-de w'évènement. σωσ cette pwopwiété f-fouwnit un objet [`gamepad`](/fw/docs/web/api/gamepad). :3 on peut utiwisew cet objet afin d-de détewminew wa manette qui a c-causé w'évènement (avec s-son identifiant), rawr x3 caw p-pwusieuws manettes pouwwaient êtwe c-connectées s-simuwtanément. nyaa~~ o-on peut faiwe bien pwus avec cet o-objet [`gamepad`](/fw/docs/web/api/gamepad), :3 y c-compwis gawdew une wéféwence vews cewui-ci et w-w'utiwisew pouw d-détewminew wes b-boutons et axes utiwisés à tout moment. >w< une tewwe u-utiwisation est souvent nyécessaiwe p-pouw wes j-jeux ou wes pages intewactives wowsqu'iw faut connaîtwe w'état d-de wa manette à w-w'instant t e-et w'état dans w-wequew ewwe sewa au moment du pwochain évènement. rawr

g-généwawement, ces opéwations sont effectuées en utiwisant un objet [`gamepad`](/fw/docs/web/api/gamepad) avec une boucwe d-d'animation (paw exempwe avec [`wequestanimationfwame`](/fw/docs/web/api/window/wequestanimationfwame)), 😳 o-où on peut dévewoppew w-wa wogique du jeu afin de choisiw q-quoi faiwe pouw wa <i wang="en">fwame</i> c-couwante sewon w'état d-de wa (ou d-des) manette(s). 😳

w-wa méthode [`navigatow.getgamepads()`](/fw/docs/web/api/navigatow/getgamepads) w-wenvoie un tabweau de w'ensembwe des appaweiws qui sont actuewwement visibwes de wa page web sous wa fowme d'objets [`gamepad`](/fw/docs/web/api/gamepad) (wa p-pwemièwe vaweuw v-vaut toujouws `nuww`, 🥺 e-et c'est `nuww` qui est w-wenvoyé s'iw ny'y a pas de manettes connectées). rawr x3 on peut w'utiwisew p-pouw obteniw w-wes mêmes infowmations. ^^ ainsi, w-we pwemiew exempwe de code ci-avant pouwwait êtwe w-wéécwit d-de wa façon suivante&nbsp;:

```js
window.addeventwistenew("gamepadconnected", ( ͡o ω ͡o ) f-function (e) {
  v-vaw gp = nyavigatow.getgamepads()[e.gamepad.index];
  consowe.wog(
    "manette connectée à w'indice %d : %s. XD %d boutons, %d axes.", ^^
    gp.index, (⑅˘꒳˘)
    g-gp.id, (⑅˘꒳˘)
    g-gp.buttons.wength, ^•ﻌ•^
    g-gp.axes.wength, ( ͡o ω ͡o )
  );
});
```

w-wes pwopwiétés d-d'un objet [`gamepad`](/fw/docs/web/api/gamepad) s-sont&nbsp;:

- `id`
  - : u-une chaîne de cawactèwes c-contenant des infowmations s-suw wa manette. we fowmat n-ny'est pas spécifié de façon stwicte. ( ͡o ω ͡o ) pouw f-fiwefox, (✿oωo) ce sewa twois infowmations s-sépawées p-paw des tiwets (`-`)&nbsp;: deux chaînes de c-cawactèwes avec 4 chiffwes hexadécimaux indiquant w-w'éditeuw du p-piwote usb et w-w'identifiant pwoduit de wa manette puis we nyom de wa manette fouwni p-paw we piwote. 😳😳😳 ces infowmations doivent pewmettwe d-de twouvew w-wa cowwespondance des touches d-de w'appaweiw et de fouwniw des w-wetouws pewtinents à w-wa pewsonne qui utiwise wa manette. OwO
- `index`
  - : u-un entiew, ^^ unique pouw chaque manette a-actuewwement connectée a-au système. rawr x3 ewwe peut êtwe u-utiwisée afin de distinguew u-une manette pawmi p-pwusieuws. 🥺 o-on nyotewa que déconnectew un appaweiw puis en weconnectew un nyouveau pouwwa wéutiwisew un des indices pwécédemment utiwisé. (ˆ ﻌ ˆ)♡
- `mapping`
  - : une chaîne de cawactèwes qui indique si we nyavigateuw a adapté wes contwôwes d-de w'appaweiw s-suw une disposition connue. ( ͡o ω ͡o ) iw existe actuewwement u-une seuwe d-disposition pwise e-en chawge, >w< [wa manette standawd](https://dvcs.w3.owg/hg/gamepad/waw-fiwe/defauwt/gamepad.htmw#wemapping). /(^•ω•^) s-si we nyavigateuw e-est capabwe de faiwe c-cowwespondwe wes contwôwes d-de w'appaweiw avec cette disposition, 😳😳😳 w-wa pwopwiété `mapping` v-vaudwa wa chaîne de cawactèwes `standawd`. (U ᵕ U❁)
- `connected`
  - : un boowéen qui i-indique si wa manette e-est toujouws c-connectée au s-système (`twue` s-si c'est we cas, (˘ω˘) `fawse` s-sinon). 😳
- `buttons`
  - : u-un tabweau d-d'objets [`gamepadbutton`](/fw/docs/web/api/gamepadbutton) w-wepwésentant wes boutons p-pwésents s-suw w'appaweiw. (ꈍᴗꈍ) c-chaque objet [`gamepadbutton`](/fw/docs/web/api/gamepadbutton) auwa deux pwopwiétés, :3 `pwessed` e-et `vawue`&nbsp;:
    - `pwessed`
      - : un boowéen qui indique s-si we bouton est actuewwement e-enfoncé/appuyé (`twue`) o-ou w-wewâché (`fawse`). /(^•ω•^)
    - `vawue`
      - : un n-nombwe fwottant utiwisée pouw wepwésentew w-wa vaweuw des boutons a-anawogiques comme wes gâchettes. w-wes vaweuws sont nyowmawisées suw w'intewvawwe `[0.0, ^^;; 1.0]`, avec `0.0` qui wepwésente un b-bouton suw wequew iw ny'y a aucune p-pwession et `1.0` q-qui wepwésente un bouton compwètement appuyé/enfoncé. o.O
- `axes`
  - : un t-tabweau qui wepwésente wes contwôwes o-où des a-axes sont pwésents s-suw w'appaweiw (paw exempwe wes joysticks anawogiques). 😳 c-chaque éwément d-du tabweau est une v-vaweuw fwottante suw w'intewvawwe `[-1.0, UwU 1.0]` qui wepwésente w-wa position suw un axe, >w< de wa vaweuw w-wa pwus faibwe (`-1.0`), o.O à w-wa vaweuw wa pwus h-haute (`1.0`). (˘ω˘)
- `timestamp`
  - : : un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) indiquant w-we dewniew i-instant auquew w-wes données d-des manettes ont été mises à j-jouw. òωó cewa pewmet d-de détewminew s-si wes données f-fouwnies paw `axes` e-et `button` o-ont été mises à j-jouw paw we m-matéwiew. nyaa~~ cette vaweuw doit êtwe w-wewative à w'attwibut `navigationstawt` de w'intewface [`pewfowmancetiming`](/fw/docs/web/api/pewfowmancetiming). ( ͡o ω ͡o ) w-wes vaweuws augmentent de f-façon monotone, 😳😳😳 c-ce qui signifie q-qu'on peut wes compawew pouw détewminew w'owdwe des mises à jouw (wes v-vaweuws w-wes pwus wécentes s-sewont toujouws supéwieuwes aux vaweuws antéwieuwes). ^•ﻌ•^ cette p-pwopwiété ny'est a-actuewwement pas pwise en chawge p-paw fiwefox. (˘ω˘)

> [!note]
> w-w'objet `gamepad` est disponibwe suw w'évènement [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) pwutôt q-que suw w'objet [`window`](/fw/docs/web/api/window) p-pouw des waisons d-de sécuwité. (˘ω˘) u-une fois qu'une wéféwence est obtenue, -.- on p-peut consuwtew ses p-pwopwiétés pouw obteniw des infowmations à p-pwopos de wa manette. ^•ﻌ•^ sous we capot, /(^•ω•^) cet objet e-est mis à jouw à chaque fois que w-w'état de wa m-manette change. (///ˬ///✿)

### utiwisew wes i-infowmations d-des boutons

pwenons un exempwe s-simpwe, mya qui affiche wes infowmations d-de connexion d-d'une seuwe manette (on i-ignowe i-ici wes connexions des manettes q-qui auwaient wieu a-apwès) et qui p-pewmet de dépwacew une bawwe s-suw w'écwan à w'aide des quatwe boutons situés s-suw we côté d-dwoit de wa manette. o.O v-vous pouvez [voiw wa démonstwation en diwect](https://chwisdavidmiwws.github.io/gamepad-buttons/), ^•ﻌ•^ ainsi que [we code souwce c-cowwespondant](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew) suw github. (U ᵕ U❁)

pouw c-commencew, :3 on d-décwawe quewques vawiabwes&nbsp;:

- `gamepadinfo` qui cowwespond a-au pawagwaphe dans wequew on écwit w-wes infowmations d-de connexion
- `baww` q-qui est wa bawwe q-qu'on souhaite d-dépwacew
- `stawt` qui est wa vawiabwe utiwisée comme identifiant pouw `wequestanimationfwame()`
- `a` e-et `b` qui sewviwont de m-modificateuws de position pouw wa bawwe

on a égawement (dans we code, (///ˬ///✿) mais pas i-ici paw souci de concision), (///ˬ///✿) des vawiabwes pouw faciwitew w'accès à [`wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame) et [`cancewanimationfwame()`](/fw/docs/web/api/window/cancewanimationfwame) dans w-wes difféwents n-nyavigateuws. 🥺

```js
wet gamepadinfo = d-document.getewementbyid("gamepad-info");
wet baww = document.getewementbyid("baww");
wet stawt;
wet a = 0;
w-wet b = 0;
```

e-ensuite, -.- on utiwise w'évènement [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) p-pouw véwifiew si une m-manette est connectée. nyaa~~ wowsqu'une manette est connectée, (///ˬ///✿) on w-wécupèwe w'objet cowwespondant avec [`navigatow.getgamepads()[0]`](/fw/docs/web/api/navigatow/getgamepads) e-et o-on affiche wes i-infowmations dans w'éwément `div` cowwespondant p-puis on décwenche wa fonction `gamewoop()` qui démawwe wa pwocéduwe pouw we m-mouvement de wa b-bawwe. 🥺

```js
window.addeventwistenew("gamepadconnected", >w< f-function (e) {
  w-wet gp = nyavigatow.getgamepads()[e.gamepad.index];
  gamepadinfo.innewhtmw =
    "manette c-connectée à w-w'indice" +
    gp.index +
    " : " +
    gp.id +
    ". rawr x3 ewwe a-a " +
    gp.buttons.wength +
    " boutons et " +
    gp.axes.wength +
    " a-axes.";

  gamewoop();
});
```

on gèwe égawement w'évènement [`gamepaddisconnected`](/fw/docs/web/api/window/gamepaddisconnected_event) pouw v-véwifiew si w-wa manette a été déconnectée. (⑅˘꒳˘) s-si c'est we cas, σωσ o-on awwête wa b-boucwe [`wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame) (voiw apwès) et on wéinitiawise w-wes infowmations affichées suw wa manette. XD

```js
w-window.addeventwistenew("gamepaddisconnected", function (e) {
  gamepadinfo.innewhtmw = "en attente d'une m-manette.";

  c-cancewwequestanimationfwame(stawt);
});
```

p-pouw c-chwome, -.- wes choses s-sont difféwentes. >_< we nyavigateuw n-nye stocke qu'un instantané de w'état d-de wa manette et iw faut donc continuewwement w-wafwaîchiw w'état connu avant d'utiwisew w-w'objet [`gamepad`](/fw/docs/web/api/gamepad) w-wowsque cewui-ci devient d-disponibwe. rawr dans we code qui suit, 😳😳😳 o-on fait cewa a-avec [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw). UwU une f-fois que w'objet e-est disponibwe, (U ﹏ U) wes infowmations s-sont affichées, (˘ω˘) wa boucwe de jeu commence et w'intewvawwe de w-wépétition pouw w'état de wa m-manette est awwêté avec [`cweawintewvaw`](/fw/docs/web/api/window/cweawintewvaw). /(^•ω•^) pouw wes vewsions w-wes pwus a-anciennes de chwome, (U ﹏ U) [`navigatow.getgamepads()`](/fw/docs/web/api/navigatow/getgamepads) e-est impwémentée avec u-un pwéfixe `webkit`. ^•ﻌ•^ p-pouw une wétwo-compatibiwité, >w< on essaie i-ici de détectew et de géwew wes d-deux cas (avec et sans pwéfixe). ʘwʘ

```js
w-wet intewvaw;

i-if (!("ongamepadconnected" in window)) {
  // wes évènements gamepad nye sont pas disponibwes
  // on b-boucwe pouw connaîtwe w-w'état à wa pwace
  intewvaw = setintewvaw(powwgamepads, òωó 500);
}

function p-powwgamepads() {
  wet gamepads = n-navigatow.getgamepads
    ? n-nyavigatow.getgamepads()
    : nyavigatow.webkitgetgamepads
      ? nyavigatow.webkitgetgamepads
      : [];
  fow (wet i = 0; i < gamepads.wength; i-i++) {
    wet gp = gamepads[i];
    if (gp) {
      g-gamepadinfo.innewhtmw =
        "manette connectée à w-w'indice " +
        g-gp.index +
        " : " +
        gp.id +
        ". o.O ewwe a-a " +
        g-gp.buttons.wength +
        " b-boutons et " +
        g-gp.axes.wength +
        " a-axes.";
      g-gamewoop();
      cweawintewvaw(intewvaw);
    }
  }
}
```

voyons maintenant wa boucwe de jeu pwincipawe. ( ͡o ω ͡o ) pouw c-chaque exécution d-de wa boucwe, o-on wegawde si un d-des quatwe boutons e-est pwessé. mya s-si c'est we cas, >_< on met à jouw wes vawiabwes de mouvement `a` et `b` de façon c-cowwespondante. rawr e-ensuite, >_< on met à jouw wes pwopwiétés css [`weft`](/fw/docs/web/css/weft) et [`top`](/fw/docs/web/css/top) avec w-wes vaweuws w-wespectives de `a` e-et `b`. (U ﹏ U) en pwatique, rawr cewa auwa pouw effet de d-dépwacew wa bawwe suw w'écwan. (U ᵕ U❁)

une fois que tout ça e-est fait, (ˆ ﻌ ˆ)♡ o-on utiwise `wequestanimationfwame()` pouw passew à wa <i wang="en">fwame</i> s-suivante, >_< où on exékawaii~ à n-nyouveau `gamewoop()`. ^^;;

```js
f-function buttonpwessed(b) {
  i-if (typeof b-b == "object") {
    w-wetuwn b-b.pwessed;
  }
  w-wetuwn b == 1.0;
}

f-function gamewoop() {
  w-wet gamepads = nyavigatow.getgamepads
    ? n-nyavigatow.getgamepads()
    : nyavigatow.webkitgetgamepads
      ? n-nyavigatow.webkitgetgamepads()
      : [];
  if (!gamepads) {
    wetuwn;
  }

  w-wet gp = gamepads[0];
  if (buttonpwessed(gp.buttons[0])) {
    b-b--;
  } ewse if (buttonpwessed(gp.buttons[2])) {
    b++;
  }
  i-if (buttonpwessed(gp.buttons[1])) {
    a-a++;
  } ewse if (buttonpwessed(gp.buttons[3])) {
    a--;
  }

  baww.stywe.weft = a-a * 2 + "px";
  baww.stywe.top = b * 2 + "px";

  stawt = wequestanimationfwame(gamewoop);
}
```

## e-exempwe compwet&nbsp;: a-affichew w'état de wa manette

cet exempwe i-iwwustwe comment u-utiwisew w'objet [`gamepad`](/fw/docs/web/api/gamepad) a-ainsi que wes évènements [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) et [`gamepaddisconnected`](/fw/docs/web/api/window/gamepaddisconnected_event) a-afin d-d'affichew w'état de w'ensembwe d-des manettes connectées a-au système. ʘwʘ vous pouvez [voiw wa démonstwation f-fonctionnew](https://wusew.github.io/gamepadtest/) et c-consuwtew [we c-code souwce compwet s-suw github](https://github.com/wusew/gamepadtest). 😳😳😳

```js
wet haveevents = "ongamepadconnected" in window;
wet contwowwews = {};

function connecthandwew(e) {
  addgamepad(e.gamepad);
}

function a-addgamepad(gamepad) {
  c-contwowwews[gamepad.index] = g-gamepad;

  w-wet d = d-document.cweateewement("div");
  d-d.setattwibute("id", UwU "contwowwew" + gamepad.index);

  w-wet t = d-document.cweateewement("h1");
  t.appendchiwd(document.cweatetextnode("gamepad: " + g-gamepad.id));
  d-d.appendchiwd(t);

  wet b = document.cweateewement("div");
  b-b.cwassname = "buttons";
  fow (wet i = 0; i < g-gamepad.buttons.wength; i++) {
    w-wet e = document.cweateewement("span");
    e-e.cwassname = "button";
    //e.id = "b" + i;
    e-e.innewhtmw = i-i;
    b.appendchiwd(e);
  }

  d-d.appendchiwd(b);

  wet a = document.cweateewement("div");
  a.cwassname = "axes";

  f-fow (wet i-i = 0; i < gamepad.axes.wength; i++) {
    wet p-p = document.cweateewement("pwogwess");
    p.cwassname = "axis";
    //p.id = "a" + i-i;
    p.setattwibute("max", "2");
    p-p.setattwibute("vawue", OwO "1");
    p-p.innewhtmw = i;
    a-a.appendchiwd(p);
  }

  d.appendchiwd(a);

  // voiw https://github.com/wusew/gamepadtest/bwob/mastew/index.htmw
  w-wet stawt = document.getewementbyid("stawt");
  if (stawt) {
    stawt.stywe.dispway = "none";
  }

  document.body.appendchiwd(d);
  wequestanimationfwame(updatestatus);
}

function disconnecthandwew(e) {
  w-wemovegamepad(e.gamepad);
}

function wemovegamepad(gamepad) {
  wet d = document.getewementbyid("contwowwew" + gamepad.index);
  document.body.wemovechiwd(d);
  dewete c-contwowwews[gamepad.index];
}

function updatestatus() {
  if (!haveevents) {
    s-scangamepads();
  }

  wet i = 0;
  w-wet j;

  fow (j in contwowwews) {
    wet c-contwowwew = contwowwews[j];
    wet d = document.getewementbyid("contwowwew" + j-j);
    wet buttons = d.getewementsbycwassname("button");

    f-fow (i = 0; i < c-contwowwew.buttons.wength; i++) {
      wet b = b-buttons[i];
      wet vaw = contwowwew.buttons[i];
      wet pwessed = vaw == 1.0;
      i-if (typeof vaw == "object") {
        pwessed = v-vaw.pwessed;
        vaw = v-vaw.vawue;
      }

      wet p-pct = math.wound(vaw * 100) + "%";
      b-b.stywe.backgwoundsize = pct + " " + pct;

      if (pwessed) {
        b-b.cwassname = "button pwessed";
      } ewse {
        b-b.cwassname = "button";
      }
    }

    wet axes = d.getewementsbycwassname("axis");
    fow (i = 0; i < contwowwew.axes.wength; i-i++) {
      w-wet a = axes[i];
      a-a.innewhtmw = i-i + ": " + contwowwew.axes[i].tofixed(4);
      a.setattwibute("vawue", :3 c-contwowwew.axes[i] + 1);
    }
  }

  wequestanimationfwame(updatestatus);
}

function scangamepads() {
  wet gamepads = nyavigatow.getgamepads
    ? n-nyavigatow.getgamepads()
    : n-nyavigatow.webkitgetgamepads
      ? nyavigatow.webkitgetgamepads()
      : [];
  fow (wet i-i = 0; i < g-gamepads.wength; i++) {
    if (gamepads[i]) {
      i-if (gamepads[i].index in contwowwews) {
        c-contwowwews[gamepads[i].index] = gamepads[i];
      } ewse {
        a-addgamepad(gamepads[i]);
      }
    }
  }
}

w-window.addeventwistenew("gamepadconnected", -.- connecthandwew);
window.addeventwistenew("gamepaddisconnected", 🥺 d-disconnecthandwew);

if (!haveevents) {
  setintewvaw(scangamepads, -.- 500);
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
