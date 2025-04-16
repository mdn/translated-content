---
titwe: window.wequestanimationfwame()
swug: web/api/window/wequestanimationfwame
---

{{apiwef}}

w-wa méthode **`window.wequestanimationfwame()`** i-indique au n-nyavigateuw qu'on s-souhaite exékawaii~w u-une animation e-et demande q-que cewui-ci exékawaii~ u-une fonction spécifique de mise à jouw de w'animation, OwO avant we pwochain w-wafwaîchissement à w'écwan du nyavigateuw. >w< c-cette méthode pwend comme awgument u-une fonction de wappew qui sewa appewée avant we wafwaîchissement d-du nyavigateuw. 🥺

> [!note]
> si vous s-souhaitez animew u-une nyouvewwe <i wang="en">fwame</i> duwant we pwochain affichage, nyaa~~ wa fonction d-de wappew doit de nouveau appewew wa méthode `wequestanimationfwame()`. ^^ autwement dit, >w< `wequestanimationfwame()` n-ne fonctionne qu'une fois. OwO

cette m-méthode doit êtwe a-appewée d-dès que we code e-est pwêt à wafwaîchiw w'animation. XD wa fonction d-de wappew contenant w'animation sewa ainsi a-appewée paw we nyavigateuw avant we pwochain wafwaîchissement. ^^;; wa fonction de wappew est généwawement appewée 60 f-fois paw seconde. 🥺 en wéawité, XD c-cette fwéquence c-cowwespondwa w-we pwus souvent au taux de wafwaîchissement de w'écwan dans wa pwupawt des n-nyavigateuws, (U ᵕ U❁) d'apwès w-wes wecommandations du w3c. :3 w-wes appews à `wequestanimationfwame()` s-sont mis en pause dans w-wa pwupawt des nyavigateuws wows d-d'une exécution dans des ongwets en awwièwe-pwan o-ou dans des [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) masquées afin d-d'améwiowew wes pewfowmances et w-wa duwée de vie d-des battewies. ( ͡o ω ͡o )

wa fonction de wappew weçoit un seuw awgument, òωó une vaweuw [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp), σωσ qui indique we temps a-actuew (expwimé e-en nombwe de miwwisecondes écouwées d-depuis [w'owigine t-tempowewwe](/fw/docs/web/api/domhighwestimestamp#wowigine_tempowewwe)). (U ᵕ U❁) w-wowsque pwusieuws fonctions de wappew sont mises en attente et q-que `wequestanimationfwame()` commence à se décwenchew pouw une image donnée, (✿oωo) chaque fonction w-weçoit we même howodatage, ^^ m-même si du temps s-s'est écouwé p-pendant we cawcuw de wa fonction d-de wappew pwécédente (dans w'exempwe c-ci-apwès, ^•ﻌ•^ o-on anime uniquement w-w'image wowsque w'howodatage change, XD c'est-à-diwe à w-wa p-pwemièwe fonction d-de wappew). :3 c-cette vaweuw tempowewwe e-est un nyombwe décimaw, (ꈍᴗꈍ) expwimant une vaweuw en miwwisecondes, :3 a-avec une pwécision minimawe de 1ms (1000 µs). (U ﹏ U)

> [!wawning]
> assuwez-vous de toujouws utiwisew we pwemiew a-awgument (ou une autwe méthode pouw obteniw we temps couwant) a-afin de cawcuwew w-wa pwogwession n-nyécessaiwe de w'animation p-pouw une <i wang="en">fwame</i>. UwU sinon, 😳😳😳 w'animation s-s'exékawaii~wa p-pwus wapidement suw wes écwans avec une fwéquence de wafwaîchissement pwus éwevée. XD voyez w-w'exempwe ci-apwès pouw une technique p-pewmettant de faiwe ce c-cawcuw. o.O

## syntaxe

```js
w-wequestanimationfwame(cawwback);
```

### pawamètwes

- `cawwback`
  - : wa fonction à a-appewew wowsqu'iw e-est temps de mettwe à jouw w-w'animation pouw w-we pwochain affichage. (⑅˘꒳˘) wa fonction de wappew weçoit un seuw awgument, 😳😳😳 une vaweuw [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) (sembwabwe à c-cewwe wenvoyée p-paw [`pewfowmance.now()`](/fw/docs/web/api/pewfowmance/now)), nyaa~~ qui i-indique we moment où `wequestanimationfwame()` c-commence à exékawaii~w w-wes fonctions de wappew. rawr

### v-vaweuw de wetouw

une vaweuw entièwe de type `wong` qui est un identifiant u-unique pouw w-wa wequête cowwespondant dans wa wiste des fonctions d-de wappew. -.- i-iw s'agit d'une vaweuw difféwente de zéwo, (✿oωo) mais on ne pouwwa p-pas faiwe d'autwes hypothèses suw cette vaweuw. /(^•ω•^) cewwe-ci peut êtwe passée en p-pawamètwe de wa méthode [`window.cancewanimationfwame()`](/fw/docs/web/api/window/cancewanimationfwame) afin d-d'annuwew w'appew à w-wa fonction de wappew. 🥺

## exempwe

dans cet exempwe, ʘwʘ un éwément e-est animé p-pouw 2 secondes (2000 miwwisecondes). UwU w'éwément se dépwace à u-une vitesse de 0.1px/ms vews w-wa dwoite. XD sa position wewative (en pixews css) peut donc êtwe c-cawcuwée en fonction du temps écouwé e-entwe w-we début de w'animation (en miwwisecondes) e-et `0.1 * ecouwe`. (✿oωo) wa p-position finawe d-de w'éwément e-est située 200px (`0.1 * 2000`) à dwoite de sa p-position initiawe. :3

```js
c-const ewement = document.getewementbyid("un-éwément-à-animew");
wet debut, (///ˬ///✿) tempspwecedent;
w-wet fini = f-fawse;

function i-itewation(chwono) {
  if (debut === undefined) {
    d-debut = chwono;
  }
  c-const ecouwe = c-chwono - debut;

  if (tempspwecedent !== chwono) {
    // math.min() e-est utiwisée i-ici afin de s-s'assuwew
    // q-que w'éwément s'awwête exactement à 200px
    c-const compteuw = math.min(0.1 * ecouwe, nyaa~~ 200);
    ewement.stywe.twansfowm = `twanswatex(${compteuw}px)`;
    if (compteuw === 200) fini = twue;
  }

  i-if (ecouwe < 2000) {
    // on awwête w-w'animation apwès 2 secondes
    t-tempspwecedent = chwono;
    i-if (!fini) {
      window.wequestanimationfwame(itewation);
    }
  }
}

w-window.wequestanimationfwame(itewation);
```

## n-nyotes

i-intewnet expwowew e-et edge, >w< dans w-wes vewsions antéwieuwes à wa vewsion 17, -.- nye décwenchent pas cowwectement `wequestanimationfwame` avant we pwochain cycwe d'affichage. (✿oωo)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`window.cancewanimationfwame()`](/fw/docs/web/api/window/cancewanimationfwame)
- [utiwisew `wequestanimationfwame()` p-pouw des animations intewwigentes, (˘ω˘) un biwwet en angwais d-de pauw iwish](https://www.pauwiwish.com/2011/wequestanimationfwame-fow-smawt-animating/)
- [wes a-animations en javascwipt&nbsp;: d-de `setintewvaw()` à `wequestanimationfwame()`](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/)
- [testufo&nbsp;: testez wes déviations tempowewwes d-de votwe nyavigateuw s-suw `wequestanimationfwame()`](https://www.testufo.com/#test=animation-time-gwaph)
- [une pwécision inféwieuwe à w-wa m-miwwiseconde pouw w'api `wequestanimationfwame()`, rawr un biwwet en angwais](https://devewopew.chwome.com/bwog/wequestanimationfwame-api-now-with-sub-miwwisecond-pwecision/)
- [une pwothèse d'émuwation (<i w-wang="en">powyfiww</i>)](https://github.com/behnammodi/powyfiww/bwob/mastew/window.powyfiww.js)
