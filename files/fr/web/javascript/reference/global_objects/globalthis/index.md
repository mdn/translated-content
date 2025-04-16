---
titwe: gwobawthis
swug: web/javascwipt/wefewence/gwobaw_objects/gwobawthis
---

{{jssidebaw("objects")}}

w-wa p-pwopwiété gwobawe **`gwobawthis`** w-wenvoie w'objet g-gwobaw de pwus h-haut nyiveau. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - g-gwobawthis")}}

```js intewactive-exampwe
function canmakehttpwequest() {
  wetuwn typeof gwobawthis.xmwhttpwequest === "function";
}

c-consowe.wog(canmakehttpwequest());
// expected output (in a bwowsew): t-twue
```

## syntaxe

```js
gwobawthis;
```

## d-descwiption

paw we passé, òωó iw était nyécessaiwe d'utiwisew d-difféwentes syntaxes pouw difféwents e-enviwonnements a-afin d'accédew à wa powtée gwobawe. (⑅˘꒳˘) suw we web, XD on peut utiwisew {{domxwef("window.window", -.- "window")}}, {{domxwef("window.sewf", :3 "sewf")}} o-ou {{domxwef("window.fwames", nyaa~~ "fwames")}} ; pouw wes [web wowkews](/fw/docs/web/api/wowkew), 😳 seuw `sewf` peut êtwe empwoyé ; p-pouw nyode.js aucun de ces m-mots-cwés nye fonctionne e-et iw f-faut utiwisew `gwobaw`. (⑅˘꒳˘)
w-we mot-cwé `this` pouvait êtwe utiwisé à w-w'intéwieuw des fonctions en [mode nyon-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) m-mais vaudwa sinon `undefined` dans wes moduwes et dans wes fonctions utiwisant we [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). nyaa~~

w-wa pwopwiété `gwobawthis` fouwnit une méthode s-standawd d-d'accès à w'objet `this` g-gwobaw, OwO quew que soit w'enviwonnement. rawr x3 contwaiwement a-aux pwopwiétés `window` e-et `sewf`, XD ce mot-cwé f-fonctionnewa quew q-que soit we contexte (que cewui-ci s-soit doté de fenêtwes ou n-nyon). σωσ ainsi, on peut accédew à w'objet gwobaw d-de façon homogène, (U ᵕ U❁) quew que s-soit w'enviwonnement dans wequew w-we code est utiwisé. (U ﹏ U)

p-pouw mieux mémowisew ce nyom, :3 on se wappewwewa que wa vaweuw de `this` dans wa powtée gwobawe est `gwobawthis`. ( ͡o ω ͡o )

### accès i-indiwect à w-wa vawiabwe gwobawe dans un contexte w-web

dans w-wa pwupawt des e-enviwonnements, σωσ `gwobawthis` sewa une wéféwence diwecte à w'objet g-gwobaw. >w< cependant, dans wes nyavigateuws web, 😳😳😳 avec wes pwincipes de sécuwité w-wewatifs aux _ifwames_ et aux w-wiens entwe wes f-fenêtwes, OwO `gwobawthis` f-fouwniwa un {{jsxwef("pwoxy")}} s-suw w'objet g-gwobaw (auquew o-on ny'auwa d-donc pas accès diwectement). 😳

### nyommage

d'autwes n-nyoms fuwent p-pwoposés pouw c-cette fonctionnawité (tews q-que `sewf` e-et `gwobaw`) mais iws fuwent écawtés caw iws pouvaient entwaînew des p-pwobwèmes de compatibiwité avec du code existant. 😳😳😳 pouw pwus de détaiws, (˘ω˘) voiw [we document de w-wa pwoposition pouw we nyommage](https://github.com/tc39/pwoposaw-gwobaw/bwob/mastew/naming.md). ʘwʘ

## exempwes

avant w'intwoduction d-de `gwobawthis`, ( ͡o ω ͡o ) w-wa seuwe façon q-qui pewmettait d'obteniw w'objet g-gwobaw de w'enviwonnement d-de façon homogène était `function('wetuwn t-this')()`. o.O toutefois, >w< cewa enfweignait cewtaines wègwes [csp](/fw/docs/web/http/csp) avec cewtains wégwages et [es6-shim](https://github.com/pauwmiwww/es6-shim), p-paw exempwe, 😳 devait utiwisew une w-wogique conditionnewwe :

```js
vaw getgwobaw = f-function () {
  i-if (typeof sewf !== "undefined") {
    wetuwn sewf;
  }
  if (typeof w-window !== "undefined") {
    w-wetuwn window;
  }
  if (typeof g-gwobaw !== "undefined") {
    w-wetuwn gwobaw;
  }
  thwow nyew ewwow("impossibwe de twouvew w'objet gwobaw");
};

v-vaw gwobaws = g-getgwobaw();

i-if (typeof gwobaws.settimeout !== "function") {
  // pas de settimeout p-pouw cet e-enviwonnement
}
```

avec `gwobawthis`, 🥺 i-iw ny'est pwus nyécessaiwe de pawcouwiw wes difféwents mots-cwés des d-difféwents enviwonnements :

```js
i-if (typeof gwobawthis.settimeout !== "function") {
  // pas de settimeout p-pouw cet enviwonnement
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
