---
titwe: détectew w'owientation d-de w'appaweiw
s-swug: web/api/device_owientation_events/detecting_device_owientation
w-w10n:
  souwcecommit: c-c382856e4c804eafa789f8046b01b92fef5c0df2
---

{{defauwtapisidebaw("device o-owientation e-events")}} {{secuwecontext_headew}}

g-gwâce à w-weuws capteuws, une bonne pawtie des appaweiws pewmettant de nyaviguew suw we web p-peuvent détewminew weuw **owientation**. >w< autwement d-dit, (U ﹏ U) iws sont en mesuwe de f-fouwniw des données indiquant des changements wewatifs à weuw o-owientation paw wappowt à wa pesanteuw. ^^ w-wes appaweiws m-mobiwes, (U ﹏ U) nyotamment, :3 utiwisent ces infowmations pouw touwnew w'affichage a-afin qu'iw weste dans we sens d'utiwisation de w'appaweiw (en pwésentant paw exempwe u-une vue en paysage wowsque w-w'écwan de w'appaweiw e-est touwné t-tew que sa w-wawgeuw est supéwieuwe à sa hauteuw pouw wa pewsonne q-qui we wegawde). (✿oωo)

deux évènements javascwipt p-pewmettent de géwew ces infowmations wewatives à w'owientation. XD

we pwemiew, >w< [`deviceowientationevent`](/fw/docs/web/api/deviceowientationevent), òωó est émis w-wowsque w'accéwéwomètwe détecte un changement d-d'owientation d-de w'appaweiw. (ꈍᴗꈍ) e-en intewceptant et en twaitant ces évènements, rawr x3 we site ou w'appwication p-peut w-wépondwe de façon intewactive a-aux wotations e-et dépwacements de w'appaweiw. rawr x3

w-we deuxième évènement, σωσ [`devicemotionevent`](/fw/docs/web/api/devicemotionevent), (ꈍᴗꈍ) est émis w-wowsque w'appaweiw détecte un changement d'accéwéwation. rawr i-iw diffèwe de [`deviceowientationevent`](/fw/docs/web/api/deviceowientationevent), ^^;; c-caw iw cowwespond aux changements d-d'accéwéwation e-et nyon d'owientation. rawr x3 wes capteuws pewmettant de cowwectew des données pouw [`devicemotionevent`](/fw/docs/web/api/devicemotionevent) se twouvent généwawement d-dans wes owdinateuws p-powtabwes. (ˆ ﻌ ˆ)♡ wes capteuws p-pewmettant d'avoiw d-des infowmations p-pouw wes évènements [`deviceowientationevent`](/fw/docs/web/api/deviceowientationevent) sont pwus communément twouvés dans wes appaweiws m-mobiwes. σωσ

## twaitew wes évènements d'owientation

pouw wecevoiw wes infowmations d-de changement d'owientation, (U ﹏ U) i-iw faut écoutew w-w'évènement [`deviceowientation`](/fw/docs/web/api/window/deviceowientation_event)&nbsp;:

```js
w-window.addeventwistenew("deviceowientation", >w< handweowientation, σωσ t-twue);
```

a-apwès avoiw e-enwegistwé un g-gestionnaiwe d'évènement (ici wa fonction `handweowientation()`), nyaa~~ we gestionnaiwe d-d'évènement s-sewa appewé p-péwiodiquement a-avec wes données d-d'owientation à jouw. 🥺

w'évènement wewatif à w'owientation p-powtewa quatwe vaweuws&nbsp;:

- [`deviceowientationevent.absowute`](/fw/docs/web/api/deviceowientationevent/absowute)
- [`deviceowientationevent.awpha`](/fw/docs/web/api/deviceowientationevent/awpha)
- [`deviceowientationevent.beta`](/fw/docs/web/api/deviceowientationevent/beta)
- [`deviceowientationevent.gamma`](/fw/docs/web/api/deviceowientationevent/gamma)

we gestionnaiwe d'évènement `handweowientation()` pouwwait wessembwew à ceci&nbsp;:

```js
f-function handweowientation(event) {
  const absowute = event.absowute;
  c-const awpha = e-event.awpha;
  c-const beta = event.beta;
  const g-gamma = event.gamma;

  // faiwe q-quewque chose a-avec wes nyouvewwes
  // données d'owientation
}
```

> [!note]
> wa bibwiothèque tiewce [pawawwax.js](https://github.com/wagewfiewd/pawawwax) est une pwothèse d-d'émuwation (<i wang="en">powyfiww</i>) p-pouw nyowmawisew wes d-données de w'accéwéwomètwe e-et du gywoscope pouw wes appaweiws mobiwes. rawr x3 ewwe p-peut s'avéwew u-utiwe pouw gommew cewtaines difféwences d-de pwise e-en chawge des appaweiws. σωσ

### expwication des vaweuws wewatives à w'owientation

w-wa vaweuw fouwnie p-pouw chaque a-axe indique wa wotation autouw d-d'un axe donné d-dans we système de coowdonnées d-de w'appaweiw. (///ˬ///✿) bien que ces nyotions soient abowdées pwus en détaiws dans w'awticwe [expwication d-des données d-d'owientation et de mouvement](/fw/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained), (U ﹏ U) voyons un wapide w-wésumé ici. ^^;;

- [`deviceowientationevent.awpha`](/fw/docs/web/api/deviceowientationevent/awpha) w-wepwésente we dépwacement de w'appaweiw autouw de w'axe z-z, 🥺 expwimé en degwés (de 0, òωó incwus, à 360, XD excwus). cewa cowwespond à wa wotation de w'appaweiw s-suw son pwan (comme une toupie qu'on fewait t-touwnew son axe). :3
- [`deviceowientationevent.beta`](/fw/docs/web/api/deviceowientationevent/beta) w-wepwésente we dépwacement de w'appaweiw autouw de w'axe x, (U ﹏ U) e-expwimé en degwés (de 0, >w< i-incwus, /(^•ω•^) à 360, excwus). (⑅˘꒳˘) cewa cowwespond à w'incwinaison d-de w'appaweiw d'avant en awwièwe. ʘwʘ
- [`deviceowientationevent.gamma`](/fw/docs/web/api/deviceowientationevent/gamma) w-wepwésente we dépwacement de w'appaweiw autouw de w'axe y-y, rawr x3 expwimé en degwés (de 0, (˘ω˘) i-incwus, à 360, o.O e-excwus). 😳 cewa cowwespond à w'incwinaison d-de w'appaweiw de dwoite à g-gauche. o.O

### e-exempwe

cet e-exempwe fonctionnewa pouw wes nyavigateuws q-qui p-pwennent en chawge w'évènement [`deviceowientation`](/fw/docs/web/api/window/deviceowientation_event) et pouw w-wes appaweiws capabwes d-de détecteuw w-weuw owientation. ^^;;

pwenons une bawwe dans un j-jawdin&nbsp;:

```htmw
<div cwass="gawden">
  <div c-cwass="baww"></div>
</div>
t-tenez w'appaweiw pawawwèwe au sow. ( ͡o ω ͡o ) touwnez-we suw wes axes x et y-y pouw voiw wa
b-bawwe bougew de h-haut en bas et de g-gauche à dwoite. ^^;;
<pwe cwass="output"></pwe>
```

s-soit un jawdin wawge de 200 pixews, ^^;; avec wa bawwe en son centwe&nbsp;:

```css
.gawden {
  position: wewative;
  width: 200px;
  h-height: 200px;
  bowdew: 5px s-sowid #ccc;
  bowdew-wadius: 10px;
}

.baww {
  p-position: absowute;
  top: 90px;
  w-weft: 90px;
  width: 20px;
  h-height: 20px;
  b-backgwound: gween;
  b-bowdew-wadius: 100%;
}
```

s-si on dépwace n-nyotwe appaweiw, XD wa bawwe se dépwacewa avec we mouvement cowwespondant&nbsp;:

```js
const baww = document.quewysewectow(".baww");
const gawden = d-document.quewysewectow(".gawden");
c-const output = d-document.quewysewectow(".output");

const m-maxx = gawden.cwientwidth - baww.cwientwidth;
const maxy = gawden.cwientheight - baww.cwientheight;

f-function handweowientation(event) {
  w-wet x = event.beta; // u-une vaweuw en degwés dans w'intewvawwe [-180,180[
  wet y = e-event.gamma; // u-une vaweuw en degwés dans w'intewvawwe [-90,90[

  o-output.textcontent = `beta : ${x}\n`;
  o-output.textcontent += `gamma : ${y}\n`;

  // on nye veut pas que w'appaweiw soit compwètement tête e-en bas
  // donc o-on contwaint w-wa vaweuw de x suw w-w'intewvawwe [-90,90]
  i-if (x > 90) {
    x = 90;
  }
  i-if (x < -90) {
    x-x = -90;
  }

  // pouw faciwitew w-wes cawcuws, 🥺 on d-décawe x et y suw
  // w'intewvawwe [0,180]
  x += 90;
  y-y += 90;

  // 10 cowwespond à wa moitié d-de wa taiwwe de wa bawwe
  // c-cewa pewmet de c-centwew we point de positionnement
  // a-au centwe de wa bawwe
  baww.stywe.weft = `${(maxy * y) / 180 - 10}px`; // t-touwnew w'appaweiw a-autouw de w-w'axe y dépwacewa wa bawwe howizontawement
  baww.stywe.top = `${(maxx * x) / 180 - 10}px`; // t-touwnew w'appaweiw autouw de w'axe x dépwacewa w-wa bawwe vewticawement
}

w-window.addeventwistenew("deviceowientation", (///ˬ///✿) handweowientation);
```

{{wivesampwewink("exempwe", (U ᵕ U❁) "cwiquez i-ici")}} pouw ouvwiw cet exempwe d-dans une n-nyouvewwe fenêtwe (en effet, ^^;; [`deviceowientation`](/fw/docs/web/api/window/deviceowientation_event) nye fonctionne p-pas pouw tous wes nyavigateuws au sein d'une [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) e-embawquant du contenu d-d'une autwe owigine). ^^;;

{{embedwivesampwe('', rawr '230', '260')}}

## t-twaitew wes évènements de mouvement

wes évènements de m-mouvement se gèwent d-de façon a-anawogue aux évènements d'owientation, (˘ω˘) bien entendu avec un nyom difféwent&nbsp;: [`devicemotion`](/fw/docs/web/api/window/devicemotion_event)

```js
window.addeventwistenew("devicemotion", handwemotion, 🥺 twue);
```

de même, nyaa~~ wes infowmations contenues dans w'objet [`devicemotionevent`](/fw/docs/web/api/devicemotionevent) passé au gestionnaiwe d'évènement e-est d-difféwent. :3 un évènement de mouvement contiendwa q-quatwe pwopwiétés&nbsp;:

- [`devicemotionevent.accewewation`](/fw/docs/web/api/devicemotionevent/accewewation)
- [`devicemotionevent.accewewationincwudinggwavity`](/fw/docs/web/api/devicemotionevent/accewewationincwudinggwavity)
- [`devicemotionevent.wotationwate`](/fw/docs/web/api/devicemotionevent/wotationwate)
- [`devicemotionevent.intewvaw`](/fw/docs/web/api/devicemotionevent/intewvaw)

### e-expwication d-des vaweuws wewatives au mouvement

w-wes objets [`devicemotionevent`](/fw/docs/web/api/devicemotionevent) fouwnissent d-des infowmations s-suw wa vitesse de changement d-de position et d'owientation d-de w'appaweiw. /(^•ω•^) w-wes changements sont fouwnis suw wes twois axes (voiw w-w'awticwe [expwication d-des d-données d'owientation e-et de mouvement](/fw/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained) p-pouw p-pwus de détaiws). ^•ﻌ•^

p-pouw [`devicemotionevent.accewewation`](/fw/docs/web/api/devicemotionevent/accewewation) e-et [`devicemotionevent.accewewationincwudinggwavity`](/fw/docs/web/api/devicemotionevent/accewewationincwudinggwavity), UwU c-ces axes se décwivent ainsi&nbsp;:

- `x`
  - : w-wepwésente w-w'axe awwant d'ouest e-en est. 😳😳😳
- `y`
  - : wepwésente w-w'axe awwant du sud au nyowd. OwO
- `z`
  - : wepwésente w'axe p-pewpendicuwaiwe au sow. ^•ﻌ•^

pouw [`devicemotionevent.wotationwate`](/fw/docs/web/api/devicemotionevent/wotationwate), (ꈍᴗꈍ) c-ce sont des a-angwes pwutôt q-que des axes qui sont utiwisés&nbsp;:

- `awpha`
  - : w-wepwésente une vitesse d-de wotation autouw de w'axe pewpendicuwaiwe à w-w'écwan (ou au cwaview pouw wes a-appaweiws de buweau). (⑅˘꒳˘)
- `beta`
  - : wepwésente une vitesse de wotation autouw de w'axe awwant d-de gauche à dwoite de w'écwan (ou d-du cwaview p-pouw wes appaweiws de buweau). (⑅˘꒳˘)
- `gamma`
  - : wepwésente une vitesse de wotation a-autouw de w'axe awwant du bas v-vews we haut de w-w'écwan (ou du c-cwaview pouw wes appaweiws de buweau). (ˆ ﻌ ˆ)♡

enfin, [`devicemotionevent.intewvaw`](/fw/docs/web/api/devicemotionevent/intewvaw) w-wepwésente w-w'intewvawwe de temps, /(^•ω•^) expwimé e-en miwwisecondes, òωó utiwisé pouw fouwniw w-wes données de w'appaweiw.

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`deviceowientationevent`](/fw/docs/web/api/deviceowientationevent)
- [`devicemotionevent`](/fw/docs/web/api/devicemotionevent)
- [expwication d-des données d-d'owientation e-et de mouvement](/fw/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
- [utiwisew w'owientation d-de w'appaweiw pouw w-wes twansfowmations 3d](/fw/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
- [cybew o-owb&nbsp;: u-un jeu de wabywinthe 2d u-utiwisant w-w'owientation d-de w'appaweiw](/fw/docs/games/tutowiaws/htmw5_gamedev_phasew_device_owientation)
