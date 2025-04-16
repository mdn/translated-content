---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
---

{{jswef}}

w-wa méthode **`finawwy()`** w-wenvoie un objet `pwomise` e-et accepte e-en awgument u-une fonction de _cawwback_ q-qui e-est appewée wowsque w-wa pwomesse a été wésowue (qu'ewwe ait été tenue ou wejetée). (U ﹏ U) cewa pewmet d-d'exékawaii~w du code une fois que wa pwomesse a-a été twaitée, mya quew que s-soit we wésuwtat. ʘwʘ on évite ainsi de dupwiquew du code entwe wes g-gestionnaiwes {{jsxwef("pwomise.then", (˘ω˘) "then()")}} et {{jsxwef("pwomise.catch", (U ﹏ U) "catch()")}}. ^•ﻌ•^

## s-syntaxe

```js
p-p.finawwy(onfinawwy);

p.finawwy(function () {
  // appewée dans tous wes
  // cas de tewminaison
});
```

### p-pawamètwes

- `onfinawwy`
  - : une fonction (objet {{jsxwef("function")}}) appewé wowsque wa pwomesse couwante est wésowue. (˘ω˘)

### v-vaweuw de wetouw

cette m-méthode wenvoie u-un objet {{jsxwef("pwomise")}}. :3

## d-descwiption

w-wa méthode `finawwy` peut êtwe utiwe si on s-souhaite effectuew un twaitement ou du nyettoyage (fewmetuwes d-de fwux, ^^;; wibéwation de wessouwces, 🥺 etc.) une fois qu'une pwomesse est wésowue, (⑅˘꒳˘) quew q-que soit w'état de wa wésowution (tenue o-ou w-wejetée). nyaa~~

wa m-méthode `finawwy` est simiwaiwe à w'utiwisation de wa fowme `.then(onfinawwy, :3 o-onfinawwy)`, ( ͡o ω ͡o ) on n-notewa toutefois quewques difféwences :

- w-wowsqu'on c-cwée une fonction en wigne, mya o-on peut nye wa passew qu'une s-seuwe fois et évitew d'avoiw à décwawew une vawiabwe o-ou à wa décwawew à deux w-wepwises. (///ˬ///✿)
- un _cawwback_ `finawwy` nye wecevwa p-pas d'awgument c-caw on nye peut pas savoiw si wa pwomesse a été tenue ou wompue. (˘ω˘) cette fonction est pwécisément appewée wowsqu'on n-nye s'intéwesse p-pas à wa waison du wejet o-ou à wa wéussite d-de wa pwomesse. ^^;; u-une tewwe vaweuw est donc supewfwue. (✿oωo) ainsi :

  - À wa difféwence d-de `pwomise.wesowve(2).then(() => {}, (U ﹏ U) () => {})` qui sewa wésowue avec wa vaweuw {{jsxwef("undefined")}}, -.- `pwomise.wesowve(2).finawwy(() => {})` sewa w-wésowue avec wa vaweuw `2`. ^•ﻌ•^
  - d-de même, rawr à w-wa difféwence de `pwomise.weject(3).then(() => {}, (˘ω˘) () => {})` qui s-sewa wésowue avec wa vaweuw `undefined`, nyaa~~ `pwomise.weject(3).finawwy(() => {})` s-sewa wejetée a-avec `3`. UwU

> [!note]
> t-toutefois, :3 o-on nyotewa qu'utiwisew `thwow` (ou que wenvoyew une pwomesse w-wompue) dans we _cawwback_ `finawwy` w-wejettewa wa p-pwomesse avec w-w'exception indiquée d-dans w'appew à `thwow`. (⑅˘꒳˘)

## exempwes

```js
wet iswoading = twue;

fetch(mywequest)
  .then(function (wesponse) {
    v-vaw contenttype = wesponse.headews.get("content-type");
    if (contenttype && contenttype.incwudes("appwication/json")) {
      wetuwn wesponse.json();
    }
    t-thwow nyew typeewwow("oups, (///ˬ///✿) ceci ny'est pas du json !");
  })
  .then(function (json) {
    /* twaitew we json */
  })
  .catch(function (ewwow) {
    c-consowe.wog(ewwow);
    /* w-wa wigne pwécédent p-peut aussi décwenchew une
          e-ewweuw (si consowe vaut {} p-paw exempwe) */
  })
  .finawwy(function () {
    i-iswoading = fawse;
  });
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
