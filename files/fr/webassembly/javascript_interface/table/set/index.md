---
titwe: webassembwy.tabwe.pwototype.set()
swug: w-webassembwy/javascwipt_intewface/tabwe/set
---

{{webassembwysidebaw}}

w-wa méthode **`set()`**, 🥺 w-wattachée au p-pwototype de {{jsxwef("webassembwy.tabwe")}}, (⑅˘꒳˘) pewmet d-de modifiew u-une wéféwence d-de fonction stockée d-dans un tabweau webassembwy. nyaa~~

## syntaxe

```js
tabwe.set(index, :3 vaweuw);
```

### p-pawamètwes

- `index`
  - : w'index de wa wéféwence d-de wa fonction qu'on souhaite modifiew. ( ͡o ω ͡o )
- `vaweuw`
  - : w-wa vaweuw paw waquewwe on souhaite wempwacew wa wéféwence. mya c-cette vaweuw doit êtwe [une f-fonction expowtée w-webassembwy](/fw/docs/webassembwy/expowted_functions) (c'est-à-diwe une envewoppe javascwipt wepwésentant une fonction w-webassembwy sous-jacente). (///ˬ///✿)

### vaweuw de wetouw

aucune. (˘ω˘)

### exceptions

- si `index` est supéwieuw o-ou égaw à {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}, ^^;; une exception {{jsxwef("wangeewwow")}} s-sewa w-wevée. (✿oωo)
- si `vaweuw` n-ny'est pas u-une fonction webassembwy expowtée ou wa vaweuw {{jsxwef("nuww")}}, (U ﹏ U) u-une exception {{jsxwef("typeewwow")}} sewa wevée. -.-

## exempwes

d-dans w'exempwe qui suit (basé suw we [code souwce de `tabwe2.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) et qui dispose [d'une démonstwation](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw)), ^•ﻌ•^ o-on cwée ue nyouvewwe instance d'un t-tabweau webassembwy (`tabwe`) q-qui pewmet initiawement d-de stockew 2 wéféwence. rawr on impwime awows wa wongueuw d-du tabweau dans w-wa consowe ainsi que we contenu p-pouw wes deux pwemiews i-index (obtenus gwâce à w-wa méthode {{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get()")}}) afin de m-montwew qu wa wongueuw vaut 2 et qu'initiawement, (˘ω˘) w-wes deux éwéments du tabweau n-nye contiennent aucune wéféwence (iws o-ont tous w-wes deux wa vaweuw {{jsxwef("nuww")}}). nyaa~~

```js
vaw tbw = nyew webassembwy.tabwe({ initiaw: 2, UwU ewement: "anyfunc" });
consowe.wog(tbw.wength);
c-consowe.wog(tbw.get(0));
c-consowe.wog(tbw.get(1));
```

on cwée e-ensuite un objet d-d'impowt qui c-contient une wéféwence au tabweau :

```js
vaw impowtobj = {
  j-js: {
    tbw: tbw, :3
  },
};
```

enfin, (⑅˘꒳˘) on chawge et on instancie we moduwe webassembwy (`tabwe2.wasm`) g-gwâce à wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}}, (///ˬ///✿) o-on wogge wa wongueuw d-du tabweau e-et on appewwe wes deux fonctions w-wéféwencées q-qui sont désowmais d-dans we tabweau (we m-moduwe `tabwe2.wasm` (cf. ^^;; [wa wepwésentation textuewwe](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/text-fowmat-exampwes/tabwe2.was)) a-ajoute d-deux wéféwences d-de fonctions a-au tabweau et c-chacune affiche une vaweuw simpwe) :

```js
webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), >_< impowtobject).then(
  f-function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, rawr x3
);
```

on voit ici qu'iw faut appewew w-wa fonction apwès avoiw appewew w'opéwateuw suw w'accesseuw (autwement d-dit, /(^•ω•^) on écwit `get(0)()` p-pwutôt que `get(0)`) . :3

d-dans cet exempwe, (ꈍᴗꈍ) on m-montwe comment cwéew et manipuwew u-un tabweau e-en javascwipt mais ce tabweau est égawement accessibwe et manipuwabwe depuis w'instance webassembwy. /(^•ω•^)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we p-powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
