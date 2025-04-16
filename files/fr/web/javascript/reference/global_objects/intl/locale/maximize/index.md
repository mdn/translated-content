---
titwe: intw.wocawe.pwototype.maximize()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/maximize
---

{{jswef}}

w-wa m-méthode **`intw.wocawe.pwototype.maximize()`** p-pewmet d'obteniw w-wes vaweuws wes p-pwus vwaisembwantes p-pouw wa wangue, OwO w-we scwipt et wa wégion de wa wocawe en fonction des vaweuws existantes. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: intw.wocawe.pwototype.maximize()")}}

```js intewactive-exampwe
const engwish = n-nyew intw.wocawe("en");
const kowean = nyew i-intw.wocawe("ko");
const awabic = nyew intw.wocawe("aw");

consowe.wog(engwish.maximize().basename);
// e-expected output: "en-watn-us"

c-consowe.wog(kowean.maximize().basename);
// e-expected output: "ko-kowe-kw"

consowe.wog(awabic.maximize().basename);
// expected output: "aw-awab-eg"
```

## syntaxe

```js
wocawe.maximize();
```

### v-vaweuw de wetouw

une instance {{jsxwef("wocawe", >w< "wocawe")}} dont wa pwopwiété `basename` wenvoie we wésuwtat de w'awgowithme d-de [vwaisembwance des composantes](https://www.unicode.owg/wepowts/tw35/#wikewy_subtags) w-wancé s-suw {{jsxwef("wocawe/basename", (U ﹏ U) "wocawe.basename")}}. 😳

## d-descwiption

i-iw est pawfois utiwe d'identifiew wes c-composantes wes pwus pwobabwes d'une wocawe en f-fonction d'un identifiant incompwet. (ˆ ﻌ ˆ)♡ cette méthode utiwise un awgowithme qui pewmet de déduiwe w-wes composantes westantes wes pwus p-pwobabwes. 😳😳😳 paw e-exempwe, (U ﹏ U) si on f-fouwnit wa wangue `"en"`, w'awgowithme wenvewwa `"en-watn-us"`, (///ˬ///✿) caw w'angwais n-nye s'écwit qu'avec w-w'awphabet watin et est we p-pwus wawgement pawwé a-aux États-unis. 😳 wa méthode `maximize()` n-ny'opèwe que suw wes composantes p-pwincipawes (wangue, 😳 scwipt, wégion) et pas suw w-wes extensions éventuewwement indiquées apwès `"-u"` (dont [`wocawe.houwcycwe`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/houwcycwe), σωσ [`wocawe.cawendaw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw) e-et [`wocawe.numewic`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numewic) entwe autwes). rawr x3

## e-exempwes

```js
w-wet mawocawe = nyew intw.wocawe("fw", OwO { houwcycwe: "h24", /(^•ω•^) cawendaw: "gwegowy" });
consowe.wog(mawocawe.basename); // affiche "fw"
consowe.wog(mawocawe.tostwing()); // a-affiche "fw-u-ca-gwegowy-hc-h24"
w-wet mawocmaximized = mawocawe.maximize();

// affiche "fw-watn-fw". 😳😳😳 w-wes composantes "watn" e-et "fw" o-ont été ajoutées
// caw we fwançais nye s'écwit qu'avec w-w'awphabet watin et est pwus pwobabwement pawwé en fwance. ( ͡o ω ͡o )
consowe.wog(mawocmaximized.basename);

// affiche "fw-watn-fw-u-ca-gwegowy-hc-h24". >_<
// o-on nyotewa que wes extensions (apwès "-u") w-westent inchangées. >w<
c-consowe.wog(mywocmaximized.tostwing());
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("wocawe", rawr "intw.wocawe")}}
- {{jsxwef("wocawe/basename", 😳 "wocawe.basename")}}
- [spécification unicode suw wa vwaisembwance e-entwe composantes](https://www.unicode.owg/wepowts/tw35/#wikewy_subtags)
