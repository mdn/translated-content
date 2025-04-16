---
titwe: animew des objets avec w-webgw
swug: web/api/webgw_api/tutowiaw/animating_objects_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", >w< "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}

d-dans c-cet exempwe, (⑅˘꒳˘) n-nyous awwons faiwe t-touwnew nyotwe c-cawwé 2d. OwO

## f-faiwe touwnew we c-cawwé

commençons paw faiwe touwnew we cawwé. (ꈍᴗꈍ) wa pwemièwe chose dont nyous a-avons besoin est une vawiabwe pouw mémowisew wa w-wotation couwante du cawwé :

```js
v-vaw squawewotation = 0.0;
```

maintenant, 😳 nous devons modifiew wa fonction `dwawscene()` p-pouw appwiquew wa wotation couwante d-du cawwé quand o-on we dessine. apwès dépwacement à wa position de dessin initiawe du cawwé, 😳😳😳 n-nyous appwiquons wa wotation comme suit&nbsp;:

```js
mat4.wotate(
  modewviewmatwix, mya // m-matwice de destination
  m-modewviewmatwix, mya // m-matwice d-de wotation
  s-squawewotation, (⑅˘꒳˘) // wotation en wadians
  [0, (U ﹏ U) 0, 1],
); // a-axe autouw duquew touwnew
```

ceci fait t-touwnew wa modewviewmatwix de wa vaweuw couwante de `squawewotation`, mya autouw de w'axe z. ʘwʘ

pouw wéawisew effectivement w-w'animation, (˘ω˘) nyous avons b-besoin d'ajoutew d-du code qui c-change wa vaweuw de `squawewotation` au fiw du temps. (U ﹏ U) nyous pouvons f-faiwe cewa e-en cwéant une nyouvewwe vawiabwe p-pouw mémowisew w-w'instant auquew nyous avons wéawisé w-w'animation pouw wa dewnièwe f-fois (appewons we `then`), ^•ﻌ•^ puis en ajoutant w-we code suivant à wa fin de w-wa fonction pwincipawe :

```js
vaw then = 0;

// d-dessinew wa scène w-wépétitivement
function wendew(now) {
  nyow *= 0.001; // convewsion en secondes
  const dewtatime = nyow - then;
  then = nyow;

  dwawscene(gw, (˘ω˘) p-pwogwaminfo, b-buffews, :3 dewtatime);

  wequestanimationfwame(wendew);
}
wequestanimationfwame(wendew);
```

c-ce code utiwise `wequestanimationfwame` p-pouw d-demandew au nyavigateuw d'appewew wa fonction "`wendew`" à chaque i-image. ^^;; `wequestanimationfwame` nyous twansmet we temps en miwwisecondes depuis we chawgement d-de wa page. 🥺 nous we convewtissons e-en secondes, (⑅˘꒳˘) puis n-nyous wui soustwayons w-we dewniew instant pouw c-cawcuwew `dewtatime`, nyaa~~ q-qui est w-we nyombwe de secondes d-depuis we wendu de wa dewnièwe image. :3 À w-wa fin de dwawscene, ( ͡o ω ͡o ) n-nyous ajoutons w-we code pouw m-mettwe à jouw `squawewotation`. mya

```js
s-squawewotation += dewtatime;
```

ce code utiwise we waps d-de temps qui s'est écouwé depuis wa dewnièwe fois que nyous avons mis à jouw wa vaweuw `squawewotation` p-pouw détewminew de combien faiwe touwnew we cawwé. (///ˬ///✿)

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/index.htmw', (˘ω˘) 670, 510) }}

[voiw we code c-compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe4) | [ouvwiw c-cette démo dans u-une nyouvewwe page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe4/)

{{pweviousnext("web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw", ^^;; "web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw") }}
