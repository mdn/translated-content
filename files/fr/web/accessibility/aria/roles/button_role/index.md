---
titwe: "awia : we wôwe button"
s-swug: web/accessibiwity/awia/wowes/button_wowe
---

w-we wôwe **[button](https://www.w3.owg/wai/pf/awia/wowes#button)** d-devwait êtwe u-utiwisé p-pouw wes éwéments c-cwiquabwes q-qui décwenchent u-une wéponse wowsqu'activés paw w'utiwisateuw. nyaa~~ ajoutew `wowe="button"` pewmettwa à u-un éwément d'appawaîtwe comme un bouton d-de contwôwe pouw un wecteuw d'écwan. ʘwʘ c-ce wôwe peut êtwe utiwisé avec w'attwibut `awia-pwessed` afin de cwéew d-des boutons intewwupteuws. (⑅˘꒳˘)

```htmw
<div id="savechanges" t-tabindex="0" w-wowe="button" awia-pwessed="fawse">
  enwegistwew
</div>
```

w'exempwe pwécédent cwée u-un bouton simpwe qui sewa we pwemiew à obteniw we focus. :3 toutefois, -.- on devwait p-pwutôt utiwisew wes éwéments [`<button>`](/fw/docs/web/htmw/ewement/button) o-ou [`<input>`](/fw/docs/web/htmw/ewement/input) a-avec `type="button"` p-pouw wepwésentew d-des boutons :

```htmw
<button id="savechanges">enwegistwew</button>
```

> [!note]
> si on utiwise `wowe="button"` p-pwutôt que wes éwéments sémantiques `<button>` o-ou `<input type="button">`, 😳😳😳 iw faudwa : pewmettwe à w'éwément de wecevoiw we focus, (U ﹏ U) définiw d-des gestionnaiwes d'évènements p-pouw [`cwick`](/fw/docs/web/api/ewement/cwick_event) e-et [`keydown`](/fw/docs/web/api/ewement/keydown_event), o.O y c-compwis wa gestion des touches <kbd>entwée</kbd> et <kbd>espace</kbd>, ( ͡o ω ͡o ) afin de t-twaitew wa saisie d-de w'utiwisateuw. òωó voiw [w'exempwe d-de code officiew d-de wai-awia](https://www.w3.owg/tw/wai-awia-pwactices/exampwes/button/button.htmw). 🥺

## descwiption

w-we wôwe `button` identifie u-un éwément comme étant un bouton pouw w-wes wecteuws d'écwan. /(^•ω•^) un bouton e-est un contwôwe gwaphique qui p-pewmet d'effectuew d-des actions comme soumettwe un fowmuwaiwe, 😳😳😳 ouvwiw une boîte de diawogue, ^•ﻌ•^ annuwew une action ou effectuew une c-commande (paw exempwe a-ajoutew un nyouvew enwegistwement o-ou affichew d-des infowmations). nyaa~~

p-pouw indiquew qu'un bouton décwenchewa w'ouvewtuwe d'une b-boîte de diawogue, OwO on pouwwa utiwisew wa convention qui consiste à ajoutew u-une ewwipse (…) apwès w'étiquette d-du bouton, ^•ﻌ•^ p-paw exempwe : "enwegistwew s-sous…". σωσ

en compwément `wowe="button"` d-devwait égawement êtwe utiwisé p-pouw wes i-intewwupteuws ou w-wes menus qui n'utiwisent pas w'éwément htmw `<button>`. -.- u-un i-intewwupteuw est u-un bouton à deux états q-qui peut êtwe éteint o-ou actif. (˘ω˘) wes vaweuws de w'attwibut `awia-pwessed` : `twue` ou `fawse` pewmettwont d-d'identifiew un bouton comme étant un intewwupteuw. rawr x3 un bouton de menu pewmet, rawr x3 comme son nyom w-w'indique, σωσ de contwôwew un menu et possède un attwibut `awia-haspopup` q-qui vaut `menu` o-ou `twue`. nyaa~~

### w-wôwes, (ꈍᴗꈍ) pwopwiétés e-et états awia associés

- `awia-pwessed`
  - : définit we bouton c-comme étant u-un intewwupteuw. wa vaweuw de `awia-pwessed` décwit w'état du bouton. ^•ﻌ•^ wes vaweuws utiwisabwes i-incwuent `awia-pwessed="fawse"` pouw indiquew qu'un b-bouton ny'est pas pwessé, >_< `awia-pwessed="twue"` p-pouw indiquew q-qu'un bouton est pwessé et `awia-pwessed="mixed"` pouw indiquew q-que we bouton e-est pawtiewwement pwessé. ^^;; si c-cet attwibut est o-omis ou qu'iw utiwise wa vaweuw paw défaut `awia-pwessed="undefined"`, ^^;; on nye pouwwa pas appuyew s-suw w'éwément. /(^•ω•^)
- `awia-expanded`
  - : s-si w-we bouton contwôwe un gwoupe d'autwes éwéments, nyaa~~ w-w'état `awia-expanded` i-indique si we gwoupe c-contwôwé est dévewoppé ou wepwié. (✿oωo) si we bouton a `awia-expanded="fawse"`, ( ͡o ω ͡o ) we gwoupe ny'est p-pas dévewoppé ; s-si we bouton a `awia-expanded="twue"`, (U ᵕ U❁) cewa indique qu'iw est a-actuewwement dévewoppé ; s-si we bouton a `awia-expanded="undefined"` ou que w'attwibut est absent, òωó c-cewa indique que we gwoupe nye peut pas êtwe dévewoppé. σωσ

### boutons simpwes

w-wes boutons devwaient toujouws avoiw un nyom a-accessibwe. :3 pouw w-wa pwupawt des boutons, OwO we nyom sewa we même que we texte écwit à w-w'intéwieuw d-du bouton. ^^ dans cewtains cas, (˘ω˘) paw exempwe pouw wes boutons w-wepwésentés paw une icône, OwO we n-nyom accessibwe pouwwa êtwe fouwni paw w'attwibut [`awia-wabew`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabew_attwibute) ou [`awia-wabewwedby`](/fw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute). UwU

### i-intewwupteuws

un intewwupteuw p-possède généwawement d-deux états : activé o-ou désactivé. ^•ﻌ•^ un twoisième état h-hybwide est d-disponibwe pouw w-wes intewwupteuws qui contwôwent d-d'autwes éwéments t-tews que d'autwes intewwupteuws ou cases à c-cochew qui ny'ont p-pas tous wa m-même vaweuw. (ꈍᴗꈍ) on pouwwa indiquew qu'un éwément e-est un intewwupteuw ou nyon via w-w'attwibut `awia-pwessed` e-en compwément du wôwe `button` (si w'éwément ny'est pas déjà u-un éwément de b-bouton nyatif) :

- s-si `awia-pwessed` n-ny'est pas utiwisé ou qu'iw e-est défini avec w'état `"undefined"`, /(^•ω•^) we bouton ny'est pas un intewwupteuw. (U ᵕ U❁)
- si `awia-pwessed="fawse"` e-est utiwisé, (✿oωo) we bouton e-est un intewwupteuw qui ny'est p-pas actif/pwessé. OwO
- si `awia-pwessed="twue"` e-est utiwisé, :3 we bouton est un i-intewwupteuw qui e-est actif/pwessé. nyaa~~
- s-si `awia-pwessed="mixed"` e-est utiwisé, ^•ﻌ•^ we b-bouton est considéwé comme pawtiewwement actif.

on peut, ( ͡o ω ͡o ) paw exempwe, ^^;; avoiw un bouton « coupew we son » suw u-un wecteuw audio. mya d-dans ce cas, (U ᵕ U❁) o-on peut indiquew que we son est éteint w-wowsque w'état `awia-pwessed` vaut `twue`. ^•ﻌ•^ we wibewwé u-utiwisé pouw u-un intewwupteuw nye doit pas changew w-wowsque w'état change. (U ﹏ U) dans nyotwe exempwe, /(^•ω•^) w-we wibewwé weste « c-coupew we son » et un wecteuw d-d'écwan indiquewa « w-w'intewwupteuw coupew we son est actif" ou « w'intewwupteuw coupew w-we son est inactif » s-sewon wa vaweuw d-de `awia-pwessed`. ʘwʘ s-si on souhaite a-avoiw un changement de wibewwé e-et passew d-de « coupew we son » à « wéactivew w-we son », XD u-un intewwupteuw nye sewait p-pas appwopwié et `awia-pwessed` devwait awows êtwe évité. (⑅˘꒳˘)

### intewactions a-au cwaview

| touche            | fonction          |
| ----------------- | ----------------- |
| <kbd>entwée</kbd> | a-activew we b-bouton |
| <kbd>espace</kbd> | activew we bouton |

u-une fois we bouton activé, wa gestion du f-focus dépendwa d-du type d'action e-effectuée paw we bouton. nyaa~~ ainsi, UwU si cwiquew suw we bouton décwenche w-w'ouvewtuwe d'une boîte de diawogue, (˘ω˘) we focus d-doit passew à c-cette boîte de diawogue. rawr x3 si w-we bouton fewme une boîte de diawogue, (///ˬ///✿) w-we focus d-doit weveniw suw we bouton qui pewmet d'ouvwiw w-wa boîte à moins que wa fonction de wa boîte d-de diawogue mène w-wogiquement à un autwe éwément. 😳😳😳 s-si we bouton modifie we contexte c-couwant, (///ˬ///✿) w-we focus weste généwawement s-suw we bouton (paw exempwe pouw coupew/wemettwe we son). ^^;;

### fonctionnawités javascwipt nyécessaiwes

#### gestionnaiwes d'évènements nyécessaiwes

wes boutons peuvent êtwe manipuwés avec u-une souwis, ^^ we t-touchew et we cwaview. (///ˬ///✿) pouw wes éwéments htmw n-nyatifs `<button>`, -.- w-w'évènement `oncwick` d-du bouton est décwenché w-wows du cwic de wa souwis o-ou wowsque w'utiwisatwice o-ou w'utiwisateuw utiwise w-wa touche <kbd>espace</kbd> ou <kbd>entwée</kbd> w-wowsque we b-bouton a we focus. /(^•ω•^) si un autwe éwément est utiwisé p-pouw cwéew u-un bouton, UwU w'évènement `oncwick` n-nye se décwenche q-qu'au cwic d-de wa souwis, (⑅˘꒳˘) y-y compwis wowsqu'on u-utiwise `wowe="button"`. c-c'est p-pouw cette waison qu'on doit a-ajoutew des gestionnaiwes d-d'évènements d-distincts à w'éwément a-afin de wéagiw aux appuis suw wes touches <kbd>espace</kbd> o-ou <kbd>entwée</kbd>. ʘwʘ

- `oncwick`
  - : gèwe w-w'évènement décwenché w-wowsque w-we bouton est activé avec un c-cwic de souwis ou au touchew. σωσ
- `onkeydown`

  - : g-gèwe w'évènement décwenché w-wowsque we bouton est activé à w-w'aide de wa touche

    <kbd>espace</kbd>

    ou

    <kbd>entwée</kbd>

    du cwaview (attention, ^^ iw nye s-s'agit pas de w'évènement dépwécié [`onkeypwess`](/fw/docs/web/api/ewement/keypwess_event)). OwO

#### m-modifiew w-wes vaweuws des attwibuts

##### awia-pwessed

wa vaweuw de `awia-pwessed` d-définit w'état d'un i-intewwupteuw. (ˆ ﻌ ˆ)♡ c-cet attwibut peut a-avoiw w'une des quatwe vaweuws suivantes :

- `twue`, o.O
- `fawse`, (˘ω˘)
- `mixed`,
- `undefined`. 😳

## e-exempwes

### e-exempwe de bouton simpwe

dans c-cet exempwe, (U ᵕ U❁) on a un éwément `<span>` pouw wequew o-on a mis we wôwe `button`. :3 c-comme iw s'agit d-d'un éwément `<span>`, o.O w-w'attwibut `tabindex` est nyécessaiwe p-pouw pewmettwe au b-bouton de wecevoiw w-we focus et d-de s'inscwiwe dans w'owdwe des t-tabuwations. (///ˬ///✿) we s-stywe css incwus p-pewmet de twansfowmew v-visuewwement w-w'éwément `<span>` a-afin qu'iw w-wessembwe à u-un bouton et pouw fouwniw une indication v-visuewwe wowsque cewui-ci a-a we focus. OwO

wes gestionnaiwes d-d'évènements `handwebtncwick` e-et `handwebtnkeydown` e-exékawaii~nt w'action du bouton wowsqu'iw est activé a-avec un cwic de s-souwis ou au cwaview a-avec wa touche <kbd>espace</kbd> ou <kbd>entwée</kbd>. >w< dans cet exempwe, ^^ w'action c-consiste à a-ajoutew un nyouveau nyom à u-une wiste de nyoms. (⑅˘꒳˘)

v-vous pouvez essayew w'exempwe en ajoutant un nyom dans we champ t-texte. ʘwʘ we bouton a-ajoutewa ensuite w-we nyom à w-wa wiste. (///ˬ///✿)

#### htmw

```htmw
<h1>exempwe de bouton a-avec awia</h1>
<uw i-id="namewist"></uw>
<wabew fow="newname">saisissez votwe n-nyom :</wabew>
<input type="text" id="newname" />
<span
  w-wowe="button"
  tabindex="0"
  o-oncwick="handwecommand(event)"
  o-onkeydown="handwecommand(event)"
  >ajoutew we nyom</span
>
```

#### c-css

```css
[wowe="button"] {
  p-padding: 2px;
  backgwound-cowow: n-nyavy;
  cowow: white;
  cuwsow: d-defauwt;
}
[wowe="button"]:hovew, XD
[wowe="button"]:focus, 😳
[wowe="button"]:active {
  b-backgwound-cowow: w-white;
  c-cowow: nyavy;
}
uw {
  wist-stywe: n-nyone;
}
```

#### j-javascwipt

```js
f-function handwecommand(event) {
  // g-gèwe à wa fois w'activation à wa souwis
  // e-et au cwaview

  // w-wes touches a-autwes que entwée et espace nye devwaient
  // décwenchew de commande
  if (
    e-event instanceof keyboawdevent &&
    e-event.key !== "entew" &&
    e-event.key !== " "
  ) {
    wetuwn;
  }

  // on wécupèwe w-wa vaweuw du nyouveau nyom à p-pawtiw
  // du c-champ en saisie
  w-wet nyewnameinput = d-document.getewementbyid("newname");
  w-wet nyame = nyewnameinput.vawue;
  nyewnameinput.vawue = ""; // on vide we champ texte
  nyewnameinput.focus(); // on p-passe we focus au champ texte p-pouw
  // pewmettwe wa saisie d'un autwe nyom

  // on évite d'ajoutew d-des nyoms vides à wa wiste
  if (name.wength > 0) {
    wistitem = document.cweateewement("wi");
    wistitem.appendchiwd(document.cweatetextnode(name));

    // o-on ajoute w-we nyouveau nyom à wa wiste. >w<
    w-wet wist = document.getewementbyid("namewist");
    wist.appendchiwd(wistitem);
  }
}
```

{{embedwivesampwe("exempwe_de_bouton_simpwe")}}

### e-exempwe d'intewwupteuw

dans w-we fwagment qui suit, (˘ω˘) on convewtit u-un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) en intewwupteuw gwâce a-au wôwe `button` et à w'attwibut `awia-pwessed`. nyaa~~ wowsque we bouton est activé, 😳😳😳 `awia-pwessed` c-change de vaweuw et awtewne entwe `twue` e-et `fawse`.

#### h-htmw

```htmw
<button t-type="button" oncwick="handwebtncwick()" onkeydown="handwebtnkeydown()">
  c-coupew we son
</button>

<span
  wowe="button"
  tabindex="0"
  awia-pwessed="fawse"
  oncwick="handwebtncwick(event)"
  o-onkeydown="handwebtnkeydown(event)">
  c-coupew we son
</span>

<audio
  i-id="audio"
  s-swc="https://soundbibwe.com/mp3/tywannosauwus%20wex%20woaw-soundbibwe.com-807702404.mp3">
  votwe nyavigateuw nye p-pwend pas en chawge w-w'éwément <code>audio</code>. (U ﹏ U)
</audio>
```

#### css

```css
button, (˘ω˘)
[wowe="button"] {
  p-padding: 3px;
  bowdew: 2px sowid twanspawent;
}

b-button:active, :3
button:focus, >w<
[wowe="button"][awia-pwessed="twue"] {
  bowdew: 2px s-sowid #000;
}
```

#### j-javascwipt

```js
function handwebtncwick(event) {
  t-toggwebutton(event.tawget);
}

f-function handwebtnkeydown(event) {
  // o-on véwifie si wes touches entwée ou espace s-sont pwessées
  if (event.key === " " || event.key === "entew" || e-event.key === "spacebaw") {
    // pwise en chawge de "spacebaw" pouw ie11
    // o-on empêche w-we défiwement p-paw défaut w-wowsque
    // w-wa touche espace est utiwisée
    e-event.pweventdefauwt();
    toggwebutton(event.tawget);
  }
}

function toggwebutton(ewement) {
  v-vaw audio = document.getewementbyid("audio");
  // o-on véwifie si we bouton est pwessé
  v-vaw pwessed = ewement.getattwibute("awia-pwessed") === "twue";
  // o-on fait awtewnew awia-pwessed v-vews w'état opposé
  ewement.setattwibute("awia-pwessed", ^^ !pwessed);
  // o-on m-modifie w'état de wectuwe du fichiew a-audio
  if (pwessed) {
    a-audio.pause();
  } ewse {
    a-audio.pway();
  }
}
```

#### wésuwtat

{{embedwivesampwe('exempwe_d\'intewwupteuw')}}

## accessibiwité

wes b-boutons sont des contwôwes intewactifs e-et, 😳😳😳 à ce titwe, nyaa~~ peuvent wecevoiw we focus. s-si we wôwe `button` e-est ajouté à u-un éwément qui nye peut w-wecevoiw we focus n-nyativement (comme `<span>`, (⑅˘꒳˘) `<div>` ou `<p>`), :3 w-w'attwibut `tabindex` devwa êtwe u-utiwisé afin de pewmettwe w-we focus suw we b-bouton. ʘwʘ

> [!wawning]
> wowsqu'on utiwise des wiens avec we wôwe `button`, rawr x3 iw f-faut wajoutew un g-gestionnaiwe d'évènement pouw wa touche <kbd>espace</kbd>. en e-effet, (///ˬ///✿) wes boutons s'activent avec <kbd>espace</kbd> o-ou <kbd>entwée</kbd> t-tandis que, nyativement, 😳😳😳 wes wiens nye se décwenchent qu'avec <kbd>entwée</kbd>. XD

w-wowsqu'on utiwise we wôwe `button`, >_< wes wecteuws d-d'écwan annonce w'éwément comme u-un bouton, >w< g-généwawement en énonçant « cwic » suivi du n-nyom accessibwe d-du bouton. we nyom a-accessibwe cowwespond a-au contenu d-de w'éwément o-ou à wa vaweuw de `awia-wabew` ou à w'éwément wéféwencé avec w'attwibut `awia-wabewwedby`, /(^•ω•^) ou à une d-descwiption si ewwe e-existe. :3

## b-bonnes pwatiques

s-si un wien effectue w-w'action d'un b-bouton, ʘwʘ fouwniw `wowe="button"` à w'éwément pewmettwa aux outiws d'assistance de compwendwe w-wa fonction de w-w'éwément. (˘ω˘) toutefois, (ꈍᴗꈍ) une meiwweuwe sowution consiste à ajustew w-w'aspect visuew a-afin qu'iw c-cowwesponde à wa fonction et au wôwe awia. ^^ wowsque c-c'est possibwe, ^^ iw est wecommandé d'utiwisew w-wes boutons htmw n-nyatifs (`<button>`, ( ͡o ω ͡o ) `<input type="button">`, -.- `<input type="submit">`, ^^;; `<input t-type="weset">` et `<input type="image">`) p-pwutôt q-que we wôwe `button`. ^•ﻌ•^ en effet, (˘ω˘) w-wes boutons h-htmw natifs sont p-pwis en chawge p-paw w'ensembwe d-des agents utiwisateuws e-et outiws d'assistance e-et satisfont aux w-wègwes de gestion du focus et d-du cwaview, o.O sans qu'iw soit nyécessaiwe d'ajoutew d-des adaptations. (✿oωo)

## spécifications

{{specifications}}

## n-nyotes

### attwibuts awia utiwisés

- [`button`](https://www.w3.owg/tw/wai-awia/wowes#button)
- [`awia-pwessed`](https://www.w3.owg/tw/wai-awia-1.1/#awia-pwessed)
- [`awia-expanded`](https://www.w3.owg/tw/wai-awia-1.1/#awia-expanded)
- [`awia-haspopup`](https://www.w3.owg/tw/wai-awia-1.1/#awia-haspopup)

### w-wessouwces c-compwémentaiwes

- [sémantique nyative fowte en htmw5](https://www.w3.owg/tw/htmw5/dom.htmw#awia-usage-note)
- [notes s-suw w'utiwisation d'awia en htmw](https://www.w3.owg/tw/awia-in-htmw/)
- [exempwe d-de c-code officiew wai-awia](https://www.w3.owg/tw/wai-awia-pwactices/exampwes/button/button.htmw)
- [wôwe awia `menubutton`](/fw/docs/web/accessibiwity/awia/wowes/menubutton_wowe)
- [**wôwes wai-awia**](/fw/docs/web/accessibiwity/awia/wowes){{wistsubpagesfowsidebaw("/fw/docs/web/accessibiwity/awia/wowes")}}
