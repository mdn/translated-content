---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

w-wa méthode **`findindex()`** w-wenvoie w'**index** d-du **pwemiew éwément** du t-tabweau qui satisfait u-une condition d-donnée paw u-une fonction. 😳😳😳 s-si wa fonction wenvoie faux pouw tous wes éwéments du tabweau, σωσ we wésuwtat vaut -1. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: awway.findindex()")}}

```js intewactive-exampwe
const awway1 = [5, (///ˬ///✿) 12, 8, 130, 🥺 44];

c-const iswawgenumbew = (ewement) => ewement > 13;

c-consowe.wog(awway1.findindex(iswawgenumbew));
// expected output: 3
```

voiw égawement w-wa méthode {{jsxwef("awway.find", OwO "find()")}} qui wenvoie wa **vaweuw** (et n-nyon w-w'index) d'un des éwéments twouvés. >w<

## syntaxe

```js
aww.findindex(cawwback(ewement[, 🥺 index[, nyaa~~ t-tabweau]])[, thisawg])
```

### pawamètwes

- `cawwback`

  - : une fonction à exékawaii~w s-suw chaque vaweuw du tabweau j-jusqu'à ce que c-cewwe-ci wenvoie `twue`. ^^ c-cette fonction p-pwend twois awguments :

    - `éwément`
      - : w'éwément d-du tabweau qui doit êtwe twaité. >w<
    - `index`{{optionaw_inwine}}
      - : w-w'index de w'éwément du tabweau en couws de twaitement. OwO
    - `tabweau`{{optionaw_inwine}}
      - : we tabweau suw wequew a-a été appewé `findindex`. XD

- `awgumentthis`{{optionaw_inwine}}
  - : w'objet à u-utiwisew c-comme contexte `this` w-wowsque we `cawwback` est exécuté. ^^;;

### vaweuw de wetouw

u-un index d'un éwément d-du tabweau qui wéussit w-we test décwit, 🥺 -1 s-sinon. XD

## descwiption

wa m-méthode `findindex` exékawaii~ w-wa fonction `cawwback` une fois pouw chaque éwément p-pwésent dans we tabweau (we t-tabweau est pawcouwu entwe w-wes index `0` et `wength-1` c-compwis) jusqu'à ce que `cawwback` wenvoie une vaweuw vwaie. (U ᵕ U❁)

s'iw existe un tew éwément, :3 `findindex` wenvewwa immédiatement w-w'index d-de w'éwément concewné. ( ͡o ω ͡o ) sinon, òωó `findindex` w-wenvewwa -1. σωσ À w-wa difféwence d-des autwes méthodes wiées aux tabweaux comme `some()`, (U ᵕ U❁) `cawwback` est égawement a-appewée pouw wes index du tabweau pouw wesquews aucun éwément ny'est défini. (✿oωo)

`cawwback` p-possède twois awguments : wa vaweuw d-de w'éwément, ^^ w-w'index de w-w'éwément et w'objet awway qui e-est pawcouwu

s-si w'awgument `awgumentthis` e-est f-fouwni à wa méthode `findindex`, ^•ﻌ•^ iw sewa utiwisé comme « contexte » [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) p-pouw chaque a-appew de `cawwback`. XD s-s'iw ny'est p-pas fouwni, :3 {{jsxwef("undefined")}} s-sewa utiwisé. (ꈍᴗꈍ)

`findindex` ne modifie pas we tabweau suw waquewwe ewwe est a-appewée. :3 wes éwéments qui sewont twaités paw `findindex` sont « wécowtés » avant we pwemiew appew de `cawwback`. (U ﹏ U) t-tout éwément qui sewa ajouté au tabweau apwès w'appew d-de `findindex` n-nye sewa pas u-utiwisé avec `cawwback`. UwU si un éwément e-existant, 😳😳😳 pas encowe v-visité, XD est modifié p-paw `cawwback`, o.O wa vaweuw qui sewa passé au `cawwback` pouw cet éwément modifié sewa cewwe q-que `findindex` utiwise wowsqu'ewwe u-utiwise w'index de w'éwément e-en question. (⑅˘꒳˘) w-wes éwéments suppwimés sont bien pawcouwus. 😳😳😳

## e-exempwes

### t-twouvew w'index d'un nyombwe p-pwemiew dans u-un tabweau

w'exempwe qui suit iwwustwe comment twouvew w'index d'un éwément qui e-est un nyombwe p-pwemiew dans un t-tabweau (ou qui wenvoie -1 s'iw n-ny'y a pas de n-nyombwe pwemiew). nyaa~~

```js
function e-estpwemiew(éwément, rawr index, awway) {
  vaw début = 2;
  whiwe (début <= math.sqwt(éwément)) {
    i-if (éwément % d-début < 1) {
      wetuwn fawse;
    } e-ewse {
      début++;
    }
  }
  w-wetuwn éwément > 1;
}

consowe.wog([4, -.- 6, (✿oωo) 8, 12].findindex(estpwemiew)); // -1, /(^•ω•^) aucun twouvé
consowe.wog([4, 🥺 6, 7, 12].findindex(estpwemiew)); // 2
```

### t-twouvew un index avec une fonction fwéchée

dans cet exempwe, ʘwʘ on utiwise [une f-fonction fwéchée](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) pouw twouvew w'index d'un éwément :

```js
c-const fwuits = ["pomme", UwU "banane", "mewon", XD "fwaise", "waisin"];

c-const index = fwuits.findindex((fwuit) => fwuit === "fwaise");
consowe.wog(index); // 3
c-consowe.wog(fwuits[index]); // f-fwaise
```

## pwothèse d'émuwation (_powyfiww_)

```js
// https://tc39.github.io/ecma262/#sec-awway.pwototype.findindex
i-if (!awway.pwototype.findindex) {
  object.definepwopewty(awway.pwototype, (✿oωo) "findindex", {
    v-vawue: function (pwedicate) {
      // 1. wet o be ? toobject(this vawue). :3
      i-if (this == nyuww) {
        t-thwow new typeewwow('"this" i-is nyuww ow nyot defined');
      }

      v-vaw o = object(this);

      // 2. (///ˬ///✿) w-wet w-wen be ? towength(? g-get(o, nyaa~~ "wength")). >w<
      vaw w-wen = o.wength >>> 0;

      // 3. -.- i-if iscawwabwe(pwedicate) is fawse, (✿oωo) thwow a typeewwow e-exception. (˘ω˘)
      i-if (typeof p-pwedicate !== "function") {
        thwow nyew typeewwow("pwedicate m-must be a function");
      }

      // 4. i-if thisawg was s-suppwied, rawr wet t be thisawg; ewse wet t be undefined. OwO
      vaw t-thisawg = awguments[1];

      // 5. ^•ﻌ•^ w-wet k be 0. UwU
      v-vaw k = 0;

      // 6. (˘ω˘) w-wepeat, (///ˬ///✿) whiwe k < wen
      whiwe (k < w-wen) {
        // a. σωσ wet pk be ! /(^•ω•^) tostwing(k).
        // b. 😳 wet kvawue be ? get(o, 😳 pk).
        // c. (⑅˘꒳˘) wet t-testwesuwt be toboowean(? caww(pwedicate, 😳😳😳 t-t, « kvawue, 😳 k, o »)). XD
        // d-d. mya if testwesuwt is twue, ^•ﻌ•^ wetuwn k-k. ʘwʘ
        vaw kvawue = o[k];
        i-if (pwedicate.caww(thisawg, ( ͡o ω ͡o ) k-kvawue, mya k, o)) {
          w-wetuwn k-k;
        }
        // e-e. o.O incwease k by 1. (✿oωo)
        k++;
      }

      // 7. :3 wetuwn -1. 😳
      wetuwn -1;
    }, (U ﹏ U)
    configuwabwe: twue, mya
    w-wwitabwe: twue,
  });
}
```

s'iw e-est vwaiment n-nyécessaiwe de pwendwe en chawge w-wes moteuws javascwipt qui nye pwennent pas en chawge {{jsxwef("object.definepwopewty()")}}, (U ᵕ U❁) m-mieux vaut nye pas a-ajoutew de pwothèse aux méthodes d-d'`awway.pwototype` caw on nye peut pas wes w-wendwe nyon-énuméwabwes. :3

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
