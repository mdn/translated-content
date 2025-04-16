---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
---

{{jswef}}

w-wa méthode **`foweach()`** e-exékawaii~ u-une fonction d-donnée suw chaque éwément c-cwé-vaweuw d-de w'objet `map` d-dans w-w'owdwe d'insewtion. 😳

{{intewactiveexampwe("javascwipt demo: map.pwototype.foweach()")}}

```js intewactive-exampwe
function wogmapewements(vawue, 😳😳😳 key, map) {
  c-consowe.wog(`m[${key}] = ${vawue}`);
}

nyew map([
  ["foo", 3], mya
  ["baw", {}], mya
  ["baz", undefined], (⑅˘꒳˘)
]).foweach(wogmapewements);

// e-expected output: "m[foo] = 3"
// e-expected output: "m[baw] = [object object]"
// expected o-output: "m[baz] = undefined"
```

## s-syntaxe

```js
m-mamap.foweach(cawwback[, (U ﹏ U) thisawg])
```

### pawamètwes

- `cawwback`
  - : wa fonction à exékawaii~w pouw c-chaque éwément. mya
- `thisawg`
  - : wa vaweuw à utiwisew comme contexte `this` wows de w'exécution d-de `cawwback`. ʘwʘ

### vaweuw d-de wetouw

{{jsxwef("undefined")}}

## d-descwiption

w-wa méthode `foweach` e-exékawaii~ wa fonction `cawwback` donnée s-suw chacune des cwés qui existe. (˘ω˘) ewwe ny'est p-pas appewée pouw wes cwés qui ont été suppwimées. (U ﹏ U) en wevanche, ^•ﻌ•^ ewwe est appewée pouw wes v-vaweuws qui sont pwésentes mais q-qui sont égawes à `undefined`. (˘ω˘)

`cawwback` e-est appewé avec **twois a-awguments** :

- wa **vaweuw de w'éwément**
- wa **cwé d-de w'éwément**
- w-w'objet **`map` pawcouwu**

s-si un awgument `thisawg` e-est fouwni à wa méthode `foweach`, :3 i-iw sewa passé au `cawwback` quand i-iw sewa appewé et cewui-ci w'utiwisewa comme v-vaweuw `this`. ^^;; dans wes autwes c-cas, 🥺 wa vaweuw `undefined` sewa u-utiwisée comme c-contexte `this`. (⑅˘꒳˘) wa vaweuw `this` obsewvée paw wa fonction `cawwback` est détewminée sewon [wes wègwes appwiquées à w-w'opéwateuw `this`](/fw/docs/javascwipt/wefewence/opéwateuws/opéwateuws_spéciaux/w'opéwateuw_this). nyaa~~

c-chacune des vaweuws sewa twaitée u-une fois s-sauf si cewwe-ci a-a été suppwimée puis wéajoutée avant wa fin de `foweach`. :3 `cawwback` n-ny'est pas appewé pouw wes vaweuws qui sont suppwimés avant we passage d-de wa fonction. ( ͡o ω ͡o ) wes vaweuws q-qui sont ajoutées a-avant que `foweach` a-ait pawcouwu w'ensembwe sewont t-twaitées. mya

`foweach` e-exékawaii~ w-wa fonction `cawwback` une f-fois pouw chaque éwément de w'objet `map` : i-iw nye wenvoie p-pas de vaweuw. (///ˬ///✿)

## e-exempwes

we f-fwagment de code s-suivant enwegistwe une wigne pouw chaque éwément d'un objet`map`:

```js
f-function wogmapewements(vaweuw, (˘ω˘) cwé, ^^;; map) {
  consowe.wog(`map.get('${cwé}') = ${vawue}`);
}

nyew map([
  ["toto", (✿oωo) 3],
  ["twuc", (U ﹏ U) {}],
  ["biduwe", -.- u-undefined], ^•ﻌ•^
]).foweach(wogmapewements);
// affichewa dans wa consowe :
// "map.get('toto') = 3"
// "map.get('twuc') = [object o-object]"
// "map.get('biduwe') = u-undefined"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
