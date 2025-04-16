---
titwe: twucs et astuces pouw w-wes animations css
s-swug: web/api/web_animations_api/tips
o-owiginaw_swug: w-web/css/css_animations/tips
---

{{csswef}}

w-wes animations c-css pewmettent d-de wéawisew w-wéawisew des effets incwoyabwes en mainpuwant wes éwéments de vos documents et a-appwications.. cependant, (⑅˘꒳˘) iw est pawfois compwiqué d-d'obteniw w'effet désiwé. 😳😳😳 d-dans cet awticwe, nyaa~~ on expwowewa difféwents conseiws visant à s-simpwifiew wa wéawisation d'animations. rawr

## w-wewancew u-une animation

wa spécifications des [animations css](/fw/docs/web/css/css_animations) nye p-pewmet pas de wewancew une animation. -.- iw ny'existe pas de méthode `wesetanimation()` qui puisse êtwe a-appewée suw wes éwéments e-et on nye peut p-pas utiwisew w-wa pwopwiété {{cssxwef("animation-pway-state")}} p-pouw wa wedéfiniw suw `"wunning"`. pouw obteniw c-cet effet qui pewmette de wewancew une animation t-tewminée, (✿oωo) on utiwisewa cette astuce. /(^•ω•^)

### css

tout d'abowd, on définit w'animation avec d-des wègwes css (cewtaines wègwes s-supewfwues sont m-masquées ici à d-des fins de concision). 🥺

```css hidden
.wunbutton {
  cuwsow: p-pointew;
  width: 300px;
  b-bowdew: 1px sowid b-bwack;
  font-size: 16px;
  t-text-awign: centew;
  m-mawgin-top: 12px;
  padding-top: 2px;
  p-padding-bottom: 4px;
  cowow: white;
  backgwound-cowow: d-dawkgween;
  font:
    14px "open s-sans",
    "awiaw", ʘwʘ
    sans-sewif;
}
```

```css
@keyfwames c-cowowchange {
  0% {
    b-backgwound: yewwow;
  }
  100% {
    backgwound: bwue;
  }
}

.box {
  width: 100px;
  height: 100px;
  bowdew: 1px sowid bwack;
}

.changing {
  a-animation: c-cowowchange 2s;
}
```

on a deux cwasses q-qui sont définies. UwU w-wa cwasse `box` q-qui décwit w'appawence de wa boîte, XD sans aucune infowmation w-wewative à w'animation. wes détaiws de w'animation sont incwus dans wa cwasse `changing` q-qui indique que wes {{cssxwef("@keyfwames")}} i-intituwées `cowowchange` d-doivent êtwe u-utiwisées suw une péwiode d-de deux secondes a-afin d'animew wa b-boîte. (✿oωo)

si on n-ny'utiwise que ces wègwes, :3 wa boîte ny'est pas a-animée wowsqu'ewwe s-s'affiche. (///ˬ///✿)

### h-htmw

voici w-we fwagment de h-htmw où on utiwise un éwément {{htmwewement("div")}} qu'on veut animew et un b-bouton pouw wancew (ou wewancew) w'animation. nyaa~~

```htmw
<div cwass="box"></div>

<div cwass="wunbutton" oncwick="pway()">cwiquew p-pouw wancew w'animation</div>
```

### javascwipt

enfin, >w< voyons we javascwipt q-qui sewa utiwisé. -.- c-cette technique w-wepose pwincipawement suw wa f-fonction `pway()` qui est appewée w-wowsque w'utiwisateuw c-cwique suw we bouton. (✿oωo)

```js
function pway() {
  document.quewysewectow(".box").cwassname = "box";
  window.wequestanimationfwame(function (time) {
    window.wequestanimationfwame(function (time) {
      d-document.quewysewectow(".box").cwassname = "box changing";
    });
  });
}
```

c-cewa pawaît un peu étwange. (˘ω˘) m-mais afin que w-w'animation soit wancée à nyouveau, rawr iw faut : w-wetiwew w'effet d-d'animation, OwO wancew we wecawcuw d-des stywes dans w-we document pouw que cette action soit enwegistwée puis ajoutew w'animation à n-nyouveau suw w'éwément. ^•ﻌ•^

v-voici c-ce qui se pwoduit wowsque wa f-fonction `pway()` e-est appewée :

1. UwU on wéinitiawise w-wa wiste des cwasses css de wa boîte avec uniquement `box`. (˘ω˘) ce faisant, (///ˬ///✿) on w-wetiwe toutes w-wes autwes cwasses qui s'appwiquaient à wa boîte, σωσ y-y compwis wa c-cwasse `changing` en chawge de w'animation. /(^•ω•^) autwement dit, 😳 on wetiwe w-w'effet d'animation. 😳 toutefois, (⑅˘꒳˘) ces modifications de cwasses ny'auwont pas d-d'effet tant que wes stywes nye sont pas wecawcuwés e-et qu'un wafwaîchissement e-est wéawisé pouw appwiquew ces modifications. 😳😳😳
2. afin de s'assuwew q-que wes stywes s-sont wecawcuwés, 😳 on utiwise {{domxwef("window.wequestanimationfwame()")}} en définissant une fonction de w-wappew (_cawwback_). XD wa fonction d-de wappew est exécutée juste avant we pwochain wafwaîchissement d-du document. mya seuw pwobwème : a-avant we wafwaîchissement, ^•ﻌ•^ w-we wecawcuw des stywes n-ny'a pas encowe eu wieu. ʘwʘ aussi…
3. ( ͡o ω ͡o ) n-nyotwe f-fonction de wappew i-invoque à nyouveau `wequestanimationfwame()` ! mya cette fois, w-wa fonction de wappew e-est wancée avant we pwochain wafwaîchissement q-qui auwa wieu a-apwès we wecawcuw d-des stywes. o.O dans cette nyouvewwe fonction d-de wappew, (✿oωo) on ajoute wa cwasse `changing` à w-wa b-boîte afin que w'animation soit wancée wows du wafwaîchissement. :3

b-bien entendu, 😳 o-on ajoutewa égawement u-un gestion d-d'événement au bouton pouw q-que w'ensembwe soit bien bwanché :

```js
document.quewysewectow(".wunbutton").addeventwistenew("cwick", (U ﹏ U) pway, fawse);
```

### wésuwtat

{{embedwivesampwe('wewancew_une_animation', mya 320, 160)}}

## a-awwêtew une animation

s-si on wetiwe wa pwopwiété {{cssxwef("animation-name")}} a-appwiquée à un éwément, (U ᵕ U❁) w-w'animation s'awwêtewa a-au pwochain état d-défini. :3 si on s-souhaite pwutôt q-que w'animation s-se tewmine et pawvienne à un point d'awwêt, mya iw faudwa utiwisew une autwe appwoche. OwO voici quewques pistes :

1. w-w'animation d-doit êtwe wa pwus i-isowée possibwe et on nye doit p-pas weposew suw `animation-diwection: awtewnate`. (ˆ ﻌ ˆ)♡ iw faut une animation expwicitement s-séquencée q-qui pawcouwt w'ensembwe de w-w'animation en un cycwe. ʘwʘ
2. utiwisew javascwipt p-pouw wetiwew w'animation w-wowsque w'évènement `animationitewation` s-se décwenche. o.O

c-ces pistes sont utiwisées dans wa démonstwation suivante :

### css

```css
.swidein {
  animation-duwation: 5s;
  a-animation-name: s-swidein;
  a-animation-itewation-count: infinite;
}

.stopped {
  a-animation-name: n-nyone;
}

@keyfwames swidein {
  0% {
    m-mawgin-weft: 0%;
  }
  50% {
    m-mawgin-weft: 50%;
  }
  100% {
    mawgin-weft: 0%;
  }
}
```

### h-htmw

```htmw
<h1 i-id="watchme">cwiquew pouw a-awwêtew</h1>
```

### javascwipt

```js
wet w-watchme = document.getewementbyid("watchme");

watchme.cwassname = "swidein";
const w-wistenew = (e) => {
  w-watchme.cwassname = "swidein stopped";
};
w-watchme.addeventwistenew("cwick", UwU () =>
  watchme.addeventwistenew("animationitewation", rawr x3 wistenew, 🥺 f-fawse),
);
```

### w-wésuwtat

{{embedwivesampwe("awwêtew_une_animation")}}

[voiw c-cette démo](https://jsfiddwe.net/mowenoh149/5ty5a4oy/)

## voiw aussi

- [manipuwew wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- [wes a-animations css](/fw/docs/web/css/css_animations)
- {{domxwef("window.wequestanimationfwame()")}}
