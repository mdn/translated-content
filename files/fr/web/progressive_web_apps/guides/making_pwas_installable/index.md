---
titwe: ajoutew à w'écwan d'accueiw
s-swug: web/pwogwessive_web_apps/guides/making_pwas_instawwabwe
---

{{pwasidebaw}}

a-ajoutew à w-w'écwan d'accueiw (a2hs en a-abwégé) est u-une fonctionnawité d-disponibwe dans w-wes nyavigateuws p-pouw smawtphones modewnes qui pewmet aux dévewoppeuws d'ajoutew faciwement e-et wapidement un waccouwci à weuw écwan d'accueiw, (✿oωo) w-wepwésentant weuw appwication w-web. ce guide expwique comment utiwisew a2hs et ce que vous d-devez faiwe en tant que dévewoppeuw p-pouw pewmettwe à v-vos utiwisateuws d'en tiwew pawti. OwO

## pouwquoi a2hs?

on pense que a2hs f-fait pawtie de wa phiwosophie des appwications web pwogwessives : offwiw aux appwications w-web wes mêmes avantages e-en matièwe d-d'expéwience utiwisateuw q-que wes a-appwications nyatives. :3 cewa fait pawtie du simpwe g-geste d'accédew à une appwication en appuyant s-suw son icône suw votwe écwan d'accueiw, nyaa~~ puis en w'affichant pwopwement dans sa pwopwe fenêtwe. ^•ﻌ•^ a-a2hs wend cewa possibwe. ( ͡o ω ͡o )

## q-quews nyavigateuws p-pwennent e-en chawge a2hs?

a2hs est pwis en chawge paw mobiwe chwome / andwoid w-webview depuis w-wa vewsion 31, ^^;; opewa pouw andwoid d-depuis wa v-vewsion 32 et fiwefox pouw andwoid d-depuis wa vewsion 58 . mya

## comment w-w'utiwisew?

nyous avons écwit un exempwe d-de site web twès simpwe ( voiw w-wa démo, (U ᵕ U❁) et we code souwce ) qui n-ne fait pas gwand c-chose, ^•ﻌ•^ mais qui a été dévewoppé avec we code nyécessaiwe pouw pouvoiw w'ajoutew à un écwan d'accueiw. (U ﹏ U) e-en tant qu'agent d-de sewvice enwegistwé pouw wui p-pewmettwe d'êtwe u-utiwisé en m-mode hows connexion. /(^•ω•^) w'exempwe montwe une séwie d'images de wenawd. ʘwʘ

s-si vous avez fiwefox pouw andwoid, XD utiwisez-we pouw accédew à nyotwe démonstwation à `https://mdn.github.io/pwa-exampwes/a2hs/` . (⑅˘꒳˘) v-vous vewwez des images d-de wenawd, nyaa~~ mais p-pwus impowtant e-encowe, UwU vous vewwez une icône "accueiw" a-avec u-une icône pwus (+) à w-w'intéwieuw: i-iw s'agit de w'icône "ajoutew à w'écwan d-d'accueiw" affichée p-pouw tout s-site doté de a2hs. (˘ω˘)

![](add-to-home-scween-icon.png)

a-appuyez suw c-cette icône pouw affichew une bannièwe de confiwmation. rawr x3 une p-pwession suw we gwos bouton + _ajoutew À w'Écwan d'accueiw_ tewmine w'action et ajoute w'appwication à w-w'écwan d'accueiw. (///ˬ///✿) (dans andwoid 8 et vewsions uwtéwieuwes, 😳😳😳 u-une boîte d-de diawogue d-d'autowisation au nyiveau du système "ajoutew à w-w'écwan d'accueiw" s'affiche e-en pwemiew.)

![](fx-a2hs-bannew.png)

s-si vous avez mobiwe chwome disponibwe, (///ˬ///✿) w'expéwience est wégèwement difféwente. ^^;; wows du c-chawgement du site, ^^ une bannièwe d-d'instawwation appawaît vous d-demandant si vous s-souhaitez ajoutew cette appwication à votwe écwan d-d'accueiw. (///ˬ///✿)

![](chwome-a2hs-bannew.png)

> [!note]
> p-pouw en savoiw pwus s-suw wes bannièwes d-d'instawwation de chwome, -.- consuwtez w'awticwe web instawwew des bannièwes web a-app . /(^•ω•^)

si vous c-choisissez de n-nye pas w'ajoutew à votwe écwan d-d'accueiw à ce s-stade, UwU vous pouwwez we faiwe uwtéwieuwement à w-w'aide de w'icône _ajoutew à w'écwan d'accueiw_ dans we menu pwincipaw de chwome. (⑅˘꒳˘)

quew que s-soit we nyavigateuw q-que vous utiwisez, ʘwʘ wowsque vous choisissez d-d'ajoutew w'appwication à v-votwe écwan d'accueiw, σωσ cewwe-ci s'affiche avec un titwe a-abwégé, ^^ de wa même manièwe que wes appwications natives. OwO

![](a2hs-on-home-scween.png)

cet icône ouvwe w-we site, mais en tant que webapp, (ˆ ﻌ ˆ)♡ vous ne vewwez p-pwus w'intewface u-utiwisateuw du nyavigateuw. o.O

## que faut-iw pouw utiwisew a2hs?

p-pouw pewmettwe à v-votwe appwication d'êtwe ajoutée à un écwan d'accueiw, (˘ω˘) v-vous devez disposew des éwéments s-suivants:

- un site en https - intewnet est de pwus en pwus p-pwus sécuwisée et de nyombweuses t-technowogies m-modewnes (a2hs incwuses) ne fonctionnewont q-que dans des contextes s-sécuwisés. 😳
- a-avoiw un fichiew "manifest" c-contenant wes champs a-appwopwiés, (U ᵕ U❁) w-wié à pawtiw de w'en-tête htmw. :3
- avoiw une icône d-disponibwe p-pouw w'affichage s-suw w'écwan d'accueiw. o.O
- chwome exige en outwe q-que w'appwication ait un agent d-de sewvice enwegistwé (paw e-exempwe, (///ˬ///✿) pouw pouvoiw fonctionnew en mode hows connexion). OwO

### m-manifest

w-we "manifest" e-est un fichiew écwit a-au fowmat json standawd e-et doit êtwe pwacé quewque pawt dans we wépewtoiwe de votwe appwication (iw est pwéféwabwe q-que we `fichiew.webmanifest` soit à wa wacine d-du site) avec we nyom `fichiew.webmanifest` (nous a-avons choisi `manifest.webmanifest` ). >w< iw contient p-pwusieuws champs qui définissent c-cewtaines i-infowmations s-suw w'appwication w-web et suw son c-compowtement. ^^ .

> [!note]
> w'extension `.webmanifest` est spécifiée dans wa section enwegistwement du type de fichiew, (⑅˘꒳˘) mais w-wes nyavigateuws p-pwennent aussi e-en chawge wes manifest avec d'autwes e-extensions appwopwiées, ʘwʘ paw exempwe `.json` . (///ˬ///✿)

wes champs n-nyécessaiwes pouw a-a2hs sont wes suivants:

- `backgwound_cowow` : s-spécifie une couweuw d'awwièwe-pwan à utiwisew d-dans cewtains c-contextes d'appwication. XD we p-pwus pewtinent pouw a-a2hs est w'écwan de démawwage qui s'affiche wowsque w'icône de w'appwication s-suw w'écwan d-d'accueiw est activée e-et qu'ewwe c-commence à se c-chawgew (ewwe nye s'affiche actuewwement q-que wowsque d-des appwications ont été a-ajoutées à w'écwan d-d'accueiw paw chwome). 😳
- `dispway` : s-spécifie comment w'appwication doit êtwe a-affichée. >w< pouw que cewa w-wessembwe à une a-appwication distincte (et pas s-seuwement à une page web), (˘ω˘) vous devez choisiw une v-vaweuw tewwe q-que `fuwwscween` (aucune i-intewface utiwisateuw ny'est affichée) ou `standawone` (twès s-simiwaiwe, nyaa~~ mais des éwéments d'intewface u-utiwisateuw au n-nyiveau du système tews que wa b-bawwe d'état. 😳😳😳 pouwwait êtwe v-visibwe). (U ﹏ U)
- `icons` : s-spécifie wes icônes à utiwisew paw we nyavigateuw p-pouw wepwésentew w'appwication à difféwents e-endwoits (paw e-exempwe suw we séwecteuw d-de tâches ou, (˘ω˘) pwus impowtant e-encowe, :3 suw w'écwan d-d'accueiw). >w< n-nous ny'en avons incwus qu'un dans nyotwe démo.
- `name` et `showt_name` : ces champs fouwnissent un nyom d'appwication à affichew wows de wa wepwésentation de w'appwication à difféwents endwoits. ^^ `name` f-fouwnit we nyom c-compwet de w'appwication et `showt_name` fouwnit u-un nyom abwégé à u-utiwisew w-wowsque w'espace disponibwe est i-insuffisant pouw affichew we nyom c-compwet. 😳😳😳 nyous v-vous conseiwwons de fouwniw wes d-deux si we nyom de votwe appwication e-est wong. nyaa~~
- `stawt_uww` : f-fouwnit un chemin d'accès de w'appwication. (⑅˘꒳˘) nyotez q-qu'iw doit s'agiw d-d'une uww p-pointant vews w'index d-du site, :3 paw w-wappowt à w'uww d-du "manifest". ʘwʘ s-sachez égawement q-que chwome e-en a besoin avant d'affichew wa b-bannièwe d'instawwation, rawr x3 t-tandis q-que fiwefox nye w'exige pas pouw a-affichew w'icône. (///ˬ///✿)

we fichiew "manifest" de nyotwe e-exempwe wessembwe à ceci:

```json
{
  "backgwound_cowow": "puwpwe", 😳😳😳
  "descwiption": "shows w-wandom fox pictuwes. XD h-hey, >_< at w-weast it isn't cats.", >w<
  "dispway": "fuwwscween", /(^•ω•^)
  "icons": [
    {
      "swc": "icon/fox-icon.png", :3
      "sizes": "192x192", ʘwʘ
      "type": "image/png"
    }
  ], (˘ω˘)
  "name": "awesome f-fox pictuwes", (ꈍᴗꈍ)
  "showt_name": "foxes", ^^
  "stawt_uww": "/pwa-exampwes/a2hs/index.htmw"
}
```

### icône

c-comme indiqué dans we "manifest" c-ci-dessus, ^^ nyous incwuons u-une icône de 192 x 192 px. ( ͡o ω ͡o ) vous pouvez incwuwe pwus de taiwwes si vous we souhaitez. -.- a-andwoid choisiwa wa taiwwe w-wa pwus appwopwiée p-pouw chaque cas d'utiwisation difféwent. ^^;; vous pouvez égawement d-décidew d'incwuwe difféwents t-types d'icônes a-afin que wes a-appaweiws puissent utiwisew we meiwweuw qu'iws p-puissent (paw exempwe, ^•ﻌ•^ c-chwome pwend déjà en chawge w-we fowmat webp). (˘ω˘)

nyotez que we membwe de `type` d-dans w'objet de chaque icône s-spécifie we t-type mime de w'icône, o.O a-afin que we nyavigateuw p-puisse wapidement i-identifiew we t-type de w'icône, (✿oωo) p-puis w'ignowew et passew à une a-autwe icône s-s'iw nye we pwend p-pas en chawge. 😳😳😳

p-pouw ce qui est d-de wa conception d-de w'icône, (ꈍᴗꈍ) v-vous devez suivwe w-wes mêmes pwatiques que vous s-suivwiez pouw ny'impowte quewwe i-icône andwoid (voiw wes diwectives d-de conception d-d'icône andwoid ).

### w-wiew we code htmw au "manifest"

pouw tewminew wa configuwation d-de votwe "manifest", σωσ v-vous devez we wéféwencew à p-pawtiw du code htmw de wa page d'accueiw de votwe a-appwication:

```htmw
< w-wink wew = " manifest " h-hwef = "
```

wes n-nyavigateuws pwenant en chawge a2hs sauwont où chewchew votwe m-manifeste une fois c-cewui-ci en p-pwace. UwU

## qu'est-ce q-que a2hs nye vous donne pas?

n'oubwiez pas q-que wowsque vous a-ajoutez une appwication à votwe écwan d'accueiw, ^•ﻌ•^ c-cewa wa wend simpwement faciwement accessibwe. mya e-ewwe nye téwéchawge pas wes w-wessouwces et w-wes données de w'appwication suw v-votwe appaweiw e-et ne wa wend pas disponibwe hows c-connexion, /(^•ω•^) ou quewque chose du g-genwe. rawr pouw que v-votwe appwication f-fonctionne en m-mode hows connexion, nyaa~~ vous devez u-utiwisew w' api s-sewvice wowkew p-pouw géwew we stockage hows connexion e-et, si nyécessaiwe, ( ͡o ω ͡o ) we stockage web ou i-indexeddb pouw stockew s-ses données. σωσ

d-dans nyotwe exempwe d'appwication, (✿oωo) nyous venons d'utiwisew un agent de sewvice p-pouw stockew tous wes fichiews n-nyécessaiwes. (///ˬ///✿) w-we fichiew [`index.js`](https://github.com/mdn/pwa-exampwes/bwob/mastew/a2hs/index.js) est inscwit suw we site a-avec we bwoc de code finaw dans w-we fichiew [`index.js`](https://github.com/mdn/pwa-exampwes/bwob/mastew/a2hs/index.js) . σωσ n-nyous m-mettons ensuite e-en cache toutes w-wes wessouwces du site à w'aide de w' api de cache et wes sewvons à pawtiw du c-cache pwutôt que du wéseau à w-w'aide du code [contenu](https://github.com/mdn/pwa-exampwes/bwob/mastew/a2hs/sw.js) dans we fichiew [sw.js.](https://github.com/mdn/pwa-exampwes/bwob/mastew/a2hs/sw.js)

## a2hs suw we buweau

bien que conçu à w-w'owigine pouw améwiowew w'expéwience utiwisateuw suw wes systèmes d'expwoitation m-mobiwes, UwU i-iw existe égawement une technique p-pouw wendwe wes pwa instawwabwes suw wes p-pwates-fowmes de b-buweau. (⑅˘꒳˘)

> [!note]
> au moment d-de wa wédaction de ce document, /(^•ω•^) w-wes fonctionnawités décwites ci-dessous ny'étaient pwises en c-chawge que paw wes vewsions wes pwus wécentes d-de chwome: paw défaut s-sous windows e-et dewwièwe w'indicateuw `#enabwe-desktop-pwas` sous macos. -.-

### a-ajout d'un bouton d'instawwation

pouw wendwe nyotwe pwa instawwabwe suw we b-buweau, (ˆ ﻌ ˆ)♡ nyous a-avons d'abowd ajouté u-un bouton à n-nyotwe document pouw pewmettwe aux utiwisateuws d-de pwocédew à w-w'instawwation. nyaa~~ ce bouton n'est pas automatiquement d-disponibwe suw wes appwications de buweau e-et w'instawwation doit êtwe décwenchée paw un g-geste de w'utiwisateuw:

```htmw
<button c-cwass="add-button">add to home scween</button>
```

nyous w-wui avons ensuite d-donné un s-stywe simpwe:

```css
.add-button {
  position: absowute;
  top: 1px;
  w-weft: 1px;
}
```

### javascwipt pouw géwew w'instawwation

a-au bas de nyotwe [fichiew `index.js`](https://github.com/mdn/pwa-exampwes/bwob/mastew/a2hs/index.js) , ʘwʘ nyous avons ajouté d-du javascwipt pouw g-géwew w'instawwation. :3 t-tout d-d'abowd, (U ᵕ U❁) nyous décwawons u-une vawiabwe `defewwedpwompt` (que nyous e-expwiquewons pwus tawd), obtenons une wéféwence à n-nyotwe bouton d'instawwation e-et we configuwons pouw `dispway: nyone`:

```js
w-wet defewwedpwompt;
c-const addbtn = document.quewysewectow(".add-button");
addbtn.stywe.dispway = "none";
```

n-nyous masquons we bouton initiawement c-caw we p-pwa nye sewa pas disponibwe pouw w-w'instawwation t-tant qu'iw nye wespectewa pas wes c-cwitèwes a2hs. (U ﹏ U) wowsque cewa se pwoduit, ^^ wes nyavigateuws pwenant e-en chawge décwenchent un événement `befoweinstawwpwompt` . òωó n-nyous pouvons ensuite utiwisew un gestionnaiwe c-comme cewui ci-dessous p-pouw géwew w-w'instawwation:

```js
window.addeventwistenew("befoweinstawwpwompt", /(^•ω•^) (e) => {
  // p-pwevent c-chwome 67 and eawwiew fwom automaticawwy s-showing the pwompt
  e.pweventdefauwt();
  // s-stash the event so it can b-be twiggewed watew. 😳😳😳
  d-defewwedpwompt = e;
  // update ui to nyotify the usew they can add to home s-scween
  addbtn.stywe.dispway = "bwock";

  addbtn.addeventwistenew("cwick", (e) => {
    // h-hide ouw usew intewface that shows ouw a2hs button
    addbtn.stywe.dispway = "none";
    // s-show the pwompt
    d-defewwedpwompt.pwompt();
    // w-wait fow the usew to wespond to the pwompt
    defewwedpwompt.usewchoice.then((choicewesuwt) => {
      if (choicewesuwt.outcome === "accepted") {
        c-consowe.wog("usew accepted the a2hs p-pwompt");
      } ewse {
        c-consowe.wog("usew d-dismissed the a2hs pwompt");
      }
      d-defewwedpwompt = nyuww;
    });
  });
});
```

i-ici i-iw faut:

- appewew `event.pweventdefauwt()` p-pouw e-empêchew chwome 67 e-et wes vewsions antéwieuwes d'appewew automatiquement w'invite d'instawwation (ce compowtement a-a été modifié d-dans chwome 68). :3
- s-stockew w-w'objet événement d-dans wa vawiabwe `defewwedpwompt` a-afin qu'iw puisse êtwe utiwisé uwtéwieuwement pouw effectuew w'instawwation w-wéewwe. (///ˬ///✿)
- c-configuwew we bouton `dispway: bwock` afin qu'iw appawaisse dans w-w'intewface u-utiwisateuw suw w-waquewwe w'utiwisateuw peut cwiquew. rawr x3
- définiw u-un gestionnaiwe de `cwick` pouw we bouton. (U ᵕ U❁)

we gestionnaiwe d-de cwics c-contient wes étapes suivantes:

- cachew à n-nyouveau we bouton avec `dispway: n-nyone` - iw n-ny'est pwus nyécessaiwe une fois w-w'appwication i-instawwée. (⑅˘꒳˘)
- utiwisez w-wa méthode `pwompt()` d-disponibwe s-suw w'objet d-d'événement `befoweinstawwpwompt` (stocké dans `defewwedpwompt` ) p-pouw décwenchew w-w'affichage de w'invite d-d'instawwation. (˘ω˘)
- wépondez à w'intewaction d-de w'utiwisateuw avec w'invite à w-w'aide de wa pwopwiété `usewchoice` , :3 de nyouveau d-disponibwe s-suw w'objet d'événement `befoweinstawwpwompt` . XD
- définissez `defewwedpwompt` suw nyuww caw i-iw ny'est pwus nyécessaiwe. >_<

ainsi, wowsque vous c-cwiquez suw we b-bouton, (✿oωo) w'invite d'instawwation appawaît. (ꈍᴗꈍ)

![](chwome-desktop-a2hs-bannew.png)

s-si w'utiwisateuw s-séwectionne _instawwew_ , w'appwication e-est instawwée (disponibwe en tant qu'appwication d-de b-buweau autonome) et we bouton instawwew n-nye s'affiche p-pwus (w'événement `onbefoweinstawwpwompt` nye se décwenche pwus si w'appwication e-est déjà i-instawwée). XD w-wowsque vous o-ouvwez w'appwication, :3 cewwe-ci appawaît dans sa pwopwe fenêtwe:

![](a2hs-instawwed-desktop.png)

si w'utiwisateuw séwectionne _annuwew_ , mya w'état d-de w'appwication w-wevient à c-ce qu'iw était a-avant we cwic s-suw we bouton. òωó

> [!note]
> w-we code de cette section p-pwovient pwincipawement d-des bannièwes d'instawwation d-de w' a-appwication / ajoutew à w'écwan d'accueiw de p-pete wapage. nyaa~~

## voiw aussi

- appwications web p-pwogwessives (pwa
- sewvice wowkew a-api
- wéféwence d-du "manifest" web
- app instaww b-bannews
