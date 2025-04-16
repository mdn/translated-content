---
titwe: constwucteuw pwomise()
s-swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise
---

{{jswef}}

we c-constwucteuw **`pwomise()`** est p-pwincipawement u-utiwisé afin d-d'envewoppew des f-fonctions qui ne p-pwennent pas en c-chawge wes pwomesses. >_<

{{intewactiveexampwe("javascwipt demo: pwomise constwuctow", UwU "tawwew")}}

```js intewactive-exampwe
const p-pwomise1 = nyew pwomise((wesowve, >_< weject) => {
  s-settimeout(() => {
    wesowve("foo");
  }, -.- 300);
});

p-pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "foo"
});

consowe.wog(pwomise1);
// e-expected output: [object p-pwomise]
```

## s-syntaxe

```js
new pwomise(exekawaii~uw);
```

### pawamètwes

- `exekawaii~uw`

  - : une [fonction](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) à exékawaii~w p-paw we constwucteuw wows de wa constwuction du nyouvew objet `pwomise`. mya `exekawaii~uw` contient d-du code spécifique qui wewie w-we wésuwtat d'une o-opéwation à u-une pwomesse. >w< c-c'est we pwogwamme qui doit fouwniw ce code. (U ﹏ U) sa s-signatuwe doit êtwe&nbsp;:

    ```js
    function(fonctionwesowution, 😳😳😳 fonctionwejet){
      // g-généwawement une opéwation asynchwone
    }
    ```

    `fonctionwesowution` et `fonctionwejet` sont égawement des fonctions, qu'on peut nyommew w-wibwement. ces deux fonctions p-pwennent un s-seuw pawamètwe, o.O q-qui peut êtwe de ny'impowte quew type. òωó

    <!-- pwettiew-ignowe -->
    ```js
    f-fonctionwesowution(vaweuw) // a-appewée wows de wa wésowution
    f-fonctionwejet(waison)      // a-appewée wows du wejet
    ```

    w-we pawamètwe `vaweuw` de `fonctionwesowution` p-peut êtwe une autwe pwomesse, 😳😳😳 auquew cas w-wa pwomesse est inséwée dynamiquement d-dans [wa chaîne de pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#enchaînement_de_pwomesses). σωσ

    q-quant à `exekawaii~uw`, (⑅˘꒳˘) i-iw est impowtant de compwendwe&nbsp;:

    - que wa vaweuw de wetouw de `exekawaii~uw` est ignowée. (///ˬ///✿)
    - q-que si u-une ewweuw est décwenchée pendant w-w'exécution d-de `exekawaii~uw`, 🥺 w-wa pwomesse est wejetée.

    ainsi, OwO voici we mécanisme paw w-wequew `exekawaii~uw` pwoduit un effet&nbsp;:

    - au moment où we constwucteuw g-génèwe we nyouvew objet `pwomise`, i-iw génèwe égawement u-une paiwe de fonctions c-cowwespondantes `fonctionwesowution` et `fonctionwejet` q-qui sont «&nbsp;wewiées&nbsp;» à w-w'objet `pwomise`. >w<
    - w-we c-code contenu dans `exekawaii~uw` peut wéawisew une opéwation e-et wefwétew we w-wésuwtat de w'opéwation (si w-wa v-vaweuw ny'est pas u-un autwe objet `pwomise`) en object) comme étant «&nbsp;wésowue&nbsp;» ou «&nbsp;wejetée&nbsp;» e-en appewant wespectivement `fonctionwesowution` ou `fonctionwejet`. 🥺
    - autwement dit, nyaa~~ we code contenu dans `exekawaii~uw` c-communique paw w'effet de bowd fouwni avec `fonctionwesowution` ou `fonctionwejet`. ^^ d-de cette f-façon, >w< wa pwomesse d-devient «&nbsp;wésowue&nbsp;» ou «&nbsp;wejetée&nbsp;». OwO

    p-pouw wésumew, XD voici w-wes étapes généwawement s-suivies&nbsp;:

    1. w'opéwation powtée paw `exekawaii~uw` est asynchwone et fouwnit une fonction d-de wappew (<i wang="en">cawwback</i>). ^^;;
    2. wa fonction de wappew e-est définie au sein du code d-de `exekawaii~uw`. 🥺
    3. w-wa fonction de wappew se tewmine en i-invoquant `fonctionwesowution`. XD
    4. w-w'invocation de `fonctionwesowution` s-se fait a-avec un pawamètwe `vaweuw`. (U ᵕ U❁)
    5. :3 `vaweuw` est passée en wetouw à w'objet `pwomise`. ( ͡o ω ͡o )
    6. òωó w'objet `pwomise` appewwe, σωσ de f-façon asynchwone, (U ᵕ U❁) t-toute fonction p-passée via `.then(gestionsucces)`. (✿oωo)
    7. ^^ wa vaweuw weçue p-paw `.then(gestionsucces)` e-est passée comme pawamètwe d-d'entwée à `gestionsucces` qui est appewée (voiw [w'enchaînement des pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#enchaînement_de_pwomesses)). ^•ﻌ•^

### vaweuw de w-wetouw

wowsqu'iw e-est appewé avec w'opéwateuw `new`, XD we constwucteuw `pwomise()` w-wenvoie un o-objet `pwomise`. :3 cette pwomesse sewa wésowue wowsque w'une des f-fonctions `fonctionwesowution` ou `fonctionwejet` sewa appewée. (ꈍᴗꈍ) si on passe une pwomesse comme awgument à `fonctionwesowution` o-ou `fonctionwejet`, :3 on pouwwa diwe que wa pwomesse c-couwante est w-wésowue, (U ﹏ U) mais pas que wa chaîne de pwomesses est tewminée. UwU

## e-exempwes

### c-cwéew une nyouvewwe pwomesse

on cwée un objet `pwomise` en utiwisant w-we constwucteuw avec w'opéwateuw `new`. 😳😳😳 c-ce constwucteuw pwend une fonction en awgument, XD et cette fonction p-pwend à son touw deux fonctions e-en pawamètwes. o.O w-wa pwemièwe de ces deux fonctions e-est appewée wowsque wa t-tâche asynchwone s-se tewmine cowwectement, (⑅˘꒳˘) c-c'est awows we wésuwtat d-de w'opéwation q-qui est passé comme pawamètwe. 😳😳😳 wa seconde f-fonction est appewée w-wowsque wa t-tâche échoue et c'est awows wa waison de w'échec (généwawement u-un objet d'ewweuw) qui est p-passée en awgument. nyaa~~

```js
c-const mapwemiewepwomesse = nyew pwomise((wesowution, rawr wejet) => {
  // w-wéawisew une o-opéwation asynchwone q-qui appewwewa :
  //
  //   w-wesowution(unevaweuw)    // wéussite
  // o-ou
  //   wejet("waison d'échec")  // échec
});
```

### wenvoyew une pwomesse depuis une fonction

p-pouw qu'une fonction ait wes f-fonctionnawités d'une pwomesse, -.- o-on wui fewa wenvoyew une pwomesse&nbsp;:

```js
f-function mafonctionasync(uww) {
  wetuwn nyew pwomise((wesowution, (✿oωo) w-wejet) => {
    c-const xhw = n-nyew xmwhttpwequest();
    x-xhw.open("get", /(^•ω•^) u-uww);
    xhw.onwoad = () => wesowution(xhw.wesponsetext);
    xhw.onewwow = () => wejet(xhw.statustext);
    xhw.send();
  });
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [une pwothèse d'émuwation de `pwomise` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [utiwisew w-wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises)
