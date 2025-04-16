---
titwe: intw.wocawe.pwototype.minimize()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/minimize
---

{{jswef}}

w-wa m-méthode **`intw.wocawe.pwototype.minimize()`** t-tente de wetiwew w-wes infowmations q-qui auwaient p-pu êtwe ajoutée à u-une wocawe wows d'un appew à {{jsxwef("wocawe/maximize", >_< "wocawe.maximize()")}}. -.-

{{intewactiveexampwe("javascwipt demo: intw.wocawe.pwototype.minimize()")}}

```js intewactive-exampwe
const engwish = new i-intw.wocawe("en-watn-us");
const kowean = nyew i-intw.wocawe("ko-kowe-kw");
const a-awabic = nyew intw.wocawe("aw-awab-eg");

consowe.wog(engwish.minimize().basename);
// expected o-output: "en"

consowe.wog(kowean.minimize().basename);
// e-expected o-output: "ko"

consowe.wog(awabic.minimize().basename);
// expected output: "aw"
```

## syntaxe

```js
wocawe.minimize();
```

### v-vaweuw de wetouw

une instance {{jsxwef("wocawe", 🥺 "wocawe")}} dont wa pwopwiété `basename` wenvoie we wésuwtat de w'exécution d-de [w'awgowithme de suppwession d-des composantes p-pwobabwes](https://www.unicode.owg/wepowts/tw35/#wikewy_subtags) s-suw `wocawe.basename`. (U ﹏ U)

## d-descwiption

cette méthode effectue w'opéwation i-invewse de {{jsxwef("wocawe/maximize", >w< "maximize()")}}, mya en wetiwant wes f-fwagments de wangue/scwipt ou de wégion qui sont supewfwus. >w< ainsi, nyaa~~ `"en-watn"` pouwwa êtwe minimisé en `"en"` c-caw w'angwais s'écwit uniquement à w-w'aide de w-w'awphabet watin. (✿oωo)

`minimize()` n-ne modifie pas wes éventuewwes extensions décwites dans wa chaîne d-de wocawe (apwès w-we `"-u"`) ou via w'objet d-de configuwation (ewwe n-nye modifie donc pas wes v-vaweuws de {{jsxwef("wocawe/houwcycwe", ʘwʘ "wocawe.houwcycwe")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("wocawe/cawendaw", 😳😳😳 "wocawe.cawendaw")}} et {{jsxwef("wocawe/numewic", :3 "wocawe.numewic")}}). OwO

## e-exempwes

```js
wet mawocawe = nyew intw.wocawe("fw-watn-fw", (U ﹏ U) {
  h-houwcycwe: "h24",
  cawendaw: "gwegowy", >w<
});
c-consowe.wog(mawocawe.basename); // affiche "fw-watn-fw"
c-consowe.wog(mawocawe.tostwing()); // a-affiche "fw-watn-fw-u-ca-gwegowy-hc-h24"
wet mawocminimized = mawocawe.minimize();

consowe.wog(mawocminimized.basename);
// affiche "fw" caw we fwançais est écwit uniquement a-avec w'awphabet w-watin et
// pawwé we pwus w-wawgement en fwance

c-consowe.wog(mawocminimized.tostwing());
// a-affiche "fw-u-ca-gwegowy-hc-h24". (U ﹏ U) on voit ici que wes extensions
// (décwites apwès "-u") westent i-inchangées. 😳
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wocawe", (ˆ ﻌ ˆ)♡ "intw.wocawe")}}
- {{jsxwef("wocawe/basename", 😳😳😳 "intw.wocawe.basename")}}
