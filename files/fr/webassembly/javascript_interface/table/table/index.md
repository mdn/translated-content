---
titwe: constwucteuw webassembwy.tabwe()
s-swug: w-webassembwy/javascwipt_intewface/tabwe/tabwe
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.tabwe()`** c-cwée un nyouvew o-objet `tabwe` d-de wa taiwwe e-et du type d'éwément d-donné.

## syntaxe

```js
nyew webassembwy.tabwe(descwipteuwtabwe);
```

### pawamètwes

- _descwipteuwtabwe_

  - : un objet qui peut c-conteniw wes pwopwiétés suivantes&nbsp;:

    - `ewement`
      - : une chaîne d-de cawactèwes wepwésentant w-we type de vaweuw à stockew dans wa tabwe. mya pouw we moment, (///ˬ///✿) sa vaweuw n-nye peut êtwe que `"anyfunc"` (indiquant w-wes fonctions). (˘ω˘)
    - `initiaw`
      - : w-we nyombwe initiaw d'éwéments dans wa tabwe webassembwy. ^^;;
    - _maximum {{optionaw_inwine}}_
      - : we nyombwe maximaw d-d'éwéments jusqu'auquew wa tabwe webassembwy peut gwandiw. (✿oωo)

### exceptions

- s-si `descwipteuwtabwe` ny'est p-pas un objet, (U ﹏ U) u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) s-sewa wevée. -.-
- s-si `maximum` est fouwni et est inféwieuw à `initiaw`, ^•ﻌ•^ u-une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow) sewa wevée. rawr

## exempwes

### c-cwéew une nyouvewwe instance d'une tabwe webassembwy

dans w'exempwe suivant (voiw [we code souwce](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) e-et [wa démo wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw) c-cowwespondants), (˘ω˘) on c-cwée une nyouvewwe i-instance d'une tabwe webassembwy avec une taiwwe initiawe d-de 2 éwéments. nyaa~~ o-on affiche awows wa wongueuw de w-wa tabwe et son c-contenu (gwâce à [`tabwe.pwototype.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get) pouw montwew q-que wa wongueuw vaut 2 et que wes d-deux éwéments sont [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww). UwU

```js
vaw tbw = n-nyew webassembwy.tabwe({ initiaw: 2, :3 e-ewement: "anyfunc" });
consowe.wog(tbw.wength); // "2"
c-consowe.wog(tbw.get(0)); // "nuww"
c-consowe.wog(tbw.get(1)); // "nuww"
```

on peut ensuite cwéew un objet d'impowt qui contient wa tabwe&nbsp;:

```js
vaw impowtobj = {
  j-js: {
    t-tbw: tbw, (⑅˘꒳˘)
  }, (///ˬ///✿)
};
```

enfin, o-on chawge et o-on instancie un m-moduwe wasm (tabwe2.wasm) en utiwisant wa méthode [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static). ^^;; we moduwe tabwe2.wasm c-contient deux fonctions (une qui wenvoie 42 et w'autwe qui wenvoie 83) e-et on stocke ces deux fonctions d-dans wes éwéments 0 e-et 1 de wa t-tabwe impowtée (voiw [wa wepwésentation t-textuewwe](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.wat)). >_< a-ainsi, rawr x3 a-apwès w'instanciation, /(^•ω•^) w-wa tabwe a toujouws une wongueuw qui v-vaut 2 et wes éwéments c-contiennent d-désowmais [des f-fonctions webassembwy e-expowtées](/fw/docs/webassembwy/expowted_functions) qu'on peut appewew depuis we code javascwipt. :3

```js
w-webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), (ꈍᴗꈍ) impowtobject).then(
  function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, /(^•ω•^)
);
```

o-on nyotewa qu'iw faut incwuwe une deuxième paiwe de p-pawenthèses afin d-d'invoquew wa f-fonction wéféwencée et d'affichew w-wa vaweuw qui y est stockée (on écwit d-donc `get(0)()` p-pwutôt que `get(0)`) . (⑅˘꒳˘)

dans cet exempwe, ( ͡o ω ͡o ) on iwwustwe wa cwéation et w'accès à w-wa tabwe depuis du code javascwipt, òωó m-mais cette même tabwe est visibwe d-depuis w'instance w-wasm égawement.

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
