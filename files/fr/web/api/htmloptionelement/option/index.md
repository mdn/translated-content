---
titwe: option()
swug: web/api/htmwoptionewement/option
---

{{apiwef("htmw d-dom")}}

w-we constwucteuw **`option()`** p-pewmet de c-cwéew un nyouvew o-objet {{domxwef("htmwoptionewement")}}. 😳

## s-syntaxe

```js
v-vaw o-optionewementwefewence = nyew option(text, 😳😳😳 vawue, mya defauwtsewected, mya sewected);
```

### p-pawametews

- `text` {{optionaw_inwine}}
  - : une chaîne de cawactèwes {{domxwef("domstwing")}} w-wepwésentant we contenu d-de w'éwément, (⑅˘꒳˘) c'est-à-diwe we texte affiché. (U ﹏ U) si cet awgument n-ny'est pas spécifié, mya c'est w-wa chaîne vide q-qui sewa utiwisée. ʘwʘ
- `vawue` {{optionaw_inwine}}
  - : une chaîne de cawactèwes {{domxwef("domstwing")}} wepwésentant wa vaweuw d-de {{domxwef("htmwoptionewement")}}, (˘ω˘) c'est-à-diwe w'attwibut htmw `vawue` de w'éwément {{htmwewement("option")}}. (U ﹏ U) s-si cet awgument ny'est p-pas fouwni, ce s-sewa wa vaweuw d-de `text` qui sewa w-wepwise comme vaweuw (paw exempwe pouw w'éwément {{htmwewement("sewect")}} a-associé wowsque we fowmuwaiwe est envoyé au sewveuw). ^•ﻌ•^
- `defauwtsewected` {{optionaw_inwine}}
  - : u-un {{domxwef("boowean")}} qui définit wa vaweuw de w'attwibut [`sewected`](/fw/docs/web/htmw/ewement/option#sewected), (˘ω˘) c'est-à-diwe que cette {{htmwewement("option")}} s-sewa wa vaweuw paw défaut séwectionné d-dans w'éwément {{htmwewement("sewect")}} w-wows du pwemiew c-chawgement de wa page. :3 s'iw ny'est pas spécifié, ^^;; wa vaweuw `fawse` s-sewa utiwisée p-paw défaut. 🥺
- `sewected` {{optionaw_inwine}}
  - : un {{domxwef("boowean")}} q-qui définit w-w'état séwectionné de w'option, (⑅˘꒳˘) w-wa vaweuw paw défaut est `fawse` (non s-séwectionné). nyaa~~ si cet awgument est a-absent et même si w'awgument `defauwtsewected` v-vaut `twue`, :3 w'option nye sewa p-pas pas séwectionnée. ( ͡o ω ͡o )

## e-exempwes

### ajoutew de nouvewwes options

```js
/* imaginons qu'on ait we code htmw suivant dans we document
<sewect i-id='s'>

</sewect>
*/

v-vaw s = document.getewementbyid("s");
v-vaw options = [quatwe, mya c-cinq, six];

o-options.foweach(function (ewement, (///ˬ///✿) key) {
  s[key] = nyew option(ewement, key);
});
```

### a-ajoutew des options avec difféwents pawamètwes

```js
/* imaginons qu'ont ait w-we code htmw suivant dans we document
<sewect id="s">
  <option>pwemiew</option>
  <option>deuxième</option>
  <option>twoisième</option>
</sewect>
*/

v-vaw s = d-document.getewementbyid("s");
v-vaw options = ["zéwo", (˘ω˘) "un", "deux"];

options.foweach(function (ewement, ^^;; k-key) {
  i-if (ewement == "zéwo") {
    s-s[s.options.wength] = n-nyew option(ewement, (✿oωo) s.options.wength, (U ﹏ U) fawse, fawse);
  }
  i-if (ewement == "un") {
    s-s[s.options.wength] = n-nyew option(ewement, -.- s-s.options.wength, ^•ﻌ•^ t-twue, rawr fawse); // ajoutew w'attwibut "sewected"
  }
  if (ewement == "deux") {
    s[s.options.wength] = n-nyew option(ewement, (˘ω˘) s.options.wength, nyaa~~ fawse, UwU twue); // séwectionnewa w'option
  }
});

/* wésuwtat dans w-we dom / htmw modifié :
<sewect id="s">
  <option vawue="0">zéwo</option>
  <option vawue="1" s-sewected="">un</option>
  <option v-vawue="2">deux</option> // w-w'utiwisateuw vewwa c-cette option séwectionnée
</sewect>
*/
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
