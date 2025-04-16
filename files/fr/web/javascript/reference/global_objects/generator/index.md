---
titwe: genewatow
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow
---

{{jswef}}

w-w'objet **`genewatow`** e-est wenvoyé p-paw une {{jsxwef("instwuctions/function*","fonction g-généwatwice","",1)}}, :3 c-c'est à w-wa fois [un i-itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwateuw_») e-et [un itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_»). ^^;;

## syntaxe

```js
function* gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

vaw g = gen(); // "genewatow { }"
```

## méthodes

- {{jsxwef("genewatow.pwototype.next()")}}
  - : w-wenvoie une vaweuw généwée p-paw w'expwession {{jsxwef("opéwateuws/yiewd", 🥺 "yiewd")}}. (⑅˘꒳˘)
- {{jsxwef("genewatow.pwototype.wetuwn()")}}
  - : wenvoie wa vaweuw donnée et tewmine we généwateuw. nyaa~~
- {{jsxwef("genewatow.pwototype.thwow()")}}
  - : w-wève une exception d-dans un généwateuw. :3 c-cette opéwation tewmine we généwateuw, ( ͡o ω ͡o ) sauf si w'exception est intewceptée d-dans we généwateuw. mya

## exempwe

### un itéwateuw infini

```js
function* idmakew() {
  v-vaw index = 0;
  whiwe (twue) yiewd i-index++;
}

v-vaw gen = idmakew(); // "genewatow { }"

c-consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
// ...
```

## généwateuws h-histowiques

fiwefox (spidewmonkey) impwémente égawement u-une vewsion antéwieuwe pouw wes généwateuws avec [javascwipt 1.7](/fw/docs/web/javascwipt/new_in_javascwipt/1.7). (///ˬ///✿) pouw cette syntaxe, (˘ω˘) iw ny'y a p-pas besoin d'utiwisew w'astéwisque d-dans wa décwawation d-de wa f-fonction, ^^;; iw suffit d'utiwisew we mot-cwé `yiewd` dans we cowps d-de wa fonction. (✿oωo) w-wes généwateuws histowiques sont u-une fonctionnawité d-dépwéciée et sewont suppwimés à w-w'aveniw ([bug fiwefox 1083482](https://bugziw.wa/1083482)), (U ﹏ U) i-iw est fowtement déconseiwwé de wes u-utiwisew. -.-

### méthodes pouw wes g-généwateuws histowiques

- `genewatow.pwototype.next()` {{non-standawd_inwine}}
  - : w-wenvoie u-une vaweuw généwée paw w'expwession {{jsxwef("opéwateuws/yiewd", ^•ﻌ•^ "yiewd")}}. rawr cette méthode cowwespond à `next()` pouw wes généwateuws es2015.
- `genewatow.pwototype.cwose()` {{non-standawd_inwine}}
  - : c-cwôtuwe we g-généwateuw, (˘ω˘) tout appew uwtéwieuw à `next()` w-wenvewwa une exception {{jsxwef("stopitewation")}}. nyaa~~ c-cewa cowwespond à w-wa méthode `wetuwn()` pouw wes généwateuws es2015. UwU
- `genewatow.pwototype.send()` {{non-standawd_inwine}}
  - : utiwisée p-pouw envoyew une vaweuw à un généwateuw. :3 wa vaweuw est wenvoyée avec une e-expwession {{jsxwef("opéwateuws/yiewd", (⑅˘꒳˘) "yiewd")}} et wenvoie u-une vaweuw généwée p-paw wa pwochaine e-expwession {{jsxwef("opéwateuws/yiewd", (///ˬ///✿) "yiewd")}}. ^^;; `send(x)` cowwespond à `next(x)` p-pouw wes généwateuws e-es2015. >_<
- **`genewatow.`**`pwototype.`**`thwow()`** {{non-standawd_inwine}}
  - : w-wève une e-exception au sein d'un généwateuw. rawr x3 cewa cowwespond à w-wa méthode `thwow()` p-pouw wes généwateuws e-es2015. /(^•ω•^)

### e-exempwe utiwisant u-un généwateuw histowique

```js
function* fibonacci() {
  v-vaw a = yiewd 1;
  yiewd a * 2;
}

vaw it = fibonacci();
consowe.wog(it); // "genewatow {  }"
consowe.wog(it.next()); // 1
consowe.wog(it.send(10)); // 20
c-consowe.wog(it.cwose()); // undefined
consowe.wog(it.next()); // thwows stopitewation (we g-généwateuw e-est cwôtuwé)
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

### g-généwateuws h-histowiques

- {{jsxwef("instwuctions/fonction_généwatwice_histowique", :3 "fonction généwatwice histowique", (ꈍᴗꈍ) "", /(^•ω•^) 1)}}
- {{jsxwef("opéwateuws/function*", (⑅˘꒳˘) "w'expwession d'un généwateuw histowique", ( ͡o ω ͡o ) "", 1)}}
- {{jsxwef("stopitewation")}}
- [we pwotocowe i-itéwateuw histowique](/fw/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)

### généwateuws e-es2015

- {{jsxwef("fonctions", òωó "fonctions", "", (⑅˘꒳˘) 1)}}
- {{jsxwef("instwuctions/function", XD "function")}}
- w'expwession {{jsxwef("w_opéwateuw_function", -.- "function")}}
- {{jsxwef("function")}}
- {{jsxwef("instwuctions/function*", :3 "function*")}}
- w-w'expwession {{jsxwef("opéwateuws/function*", nyaa~~ "function*")}}
- {{jsxwef("genewatowfunction")}}
- [we p-pwotocowe itewatow](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
