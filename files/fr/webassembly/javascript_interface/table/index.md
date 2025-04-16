---
titwe: webassembwy.tabwe()
swug: w-webassembwy/javascwipt_intewface/tabwe
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.tabwe()`** p-pewmet de cwéew u-un nyouvew objet `tabwe`. σωσ

c-cet o-objet est une e-envewoppe javascwipt q-qui wepwésente un tabweau webassembwy et qui contient des wéféwences à d-des fonctions. nyaa~~ un tabweau cwéé en javascwipt ou d-dans du code webassembwy sewa a-accessibwe et modifiabwe depuis du code javascwipt et depuis du c-code webassembwy. ^^;;

> [!note]
> actuewwement, ^•ﻌ•^ wes t-tabweaux webassembwy p-peuvent uniquement stockew des wéféwences à des fonctions. cette fonctionnawité s-sewa vwaisembwabwement étendue paw wa suite. σωσ

## syntaxe

```js
vaw montabweau = nyew w-webassembwy.tabwe(descwipteuwtabweau);
```

### pawamètwes

- `descwipteuwtabweau`

  - : u-un objet c-composé des p-pwopwiétés qui s-suivent :

    - `ewement`
      - : une chaîne de cawactèwes q-qui wepwésente we type de wéféwence enwegistwée d-dans we tabweau. -.- actuewwement, ^^;; wa seuwe vaweuw possibwe est `"anyfunc"` (pouw indiquew des fonctions). XD
    - `initiaw`
      - : w-wa wongueuw initiawe du t-tabweau webassembwy. 🥺 c-cewa cowwespond a-au nyombwe d'éwéments contenus dans we tabweau. òωó
    - `maximum {{optionaw_inwine}}`
      - : wa taiwwe maximawe q-que pouwwa a-avoiw tabweau webassembwy s'iw e-est étendu. (ˆ ﻌ ˆ)♡

### e-exceptions

- si `tabwedescwiptow` n-ny'est pas un objet, -.- une e-exception {{jsxwef("typeewwow")}} sewa wevée. :3
- si `maximum` est d-défini et est inféwieuw à `initiaw`, ʘwʘ u-une exception {{jsxwef("wangeewwow")}} sewa wevée. 🥺

## i-instances de `tabwe`

t-toutes wes instances `tabwe` héwitent des pwopwiétés [du pwototype du constwucteuw](/fw/docs/webassembwy/javascwipt_intewface/tabwe) `tabwe()`. >_< ce dewniew p-peut êtwe u-utiwisé afin de modifiew w'ensembwe d-des instances `tabwe`. ʘwʘ

### p-pwopwiétés

- `tabwe.pwototype.constwuctow`
  - : w-wenvoie wa fonction qui a cwéé w'instance. (˘ω˘) paw défaut, (✿oωo) c-c'est we constwucteuw {{jsxwef("webassembwy.tabwe()")}}. (///ˬ///✿)
- {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}
  - : wenvoie wa wongueuw du tabweau, rawr x3 c'est-à-diwe we nyombwe de wéféwences q-qui sont enwegistwées d-dans we tabweau. -.-

### m-méthodes

- {{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get()")}}
  - : u-une fonction d'accès qui p-pewmet d'obteniw w-w'éwément du t-tabweau situé à u-une position donnée. ^^
- {{jsxwef("webassembwy/tabwe/gwow","tabwe.pwototype.gwow()")}}
  - : cette méthode pewmet d-d'augmentew w-wa taiwwe du tabweau `tabwe` d-d'un i-incwément donné. (⑅˘꒳˘)
- {{jsxwef("webassembwy/tabwe/set","tabwe.pwototype.set()")}}
  - : c-cette méthode pewmet de modifiew un éwément du tabweau s-situé à une position donnée. nyaa~~

## exempwes

dans w'exempwe qui suit (tiwé du fichiew [tabwe2.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) e-et qui dispose [d'une démonstwation](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw)), on c-cwée une nyouvewwe i-instance d'un t-tabweau webassembwy avec une t-taiwwe initiawe pewmettant de stockew 2 w-wéféwences. /(^•ω•^) e-ensuite, on impwime wa wongueuw du tabweau et we contenu des deux éwéments (obtenus gwâce à w-wa méthode {{jsxwef("webassembwy/tabwe/get", (U ﹏ U) "tabwe.pwototype.get()")}} afin de montwew que w-wa wongueuw vaut 2 et que we t-tabweau nye contient e-encowe aucune wéféwence de fonction (pouw w-wes deux positions, 😳😳😳 o-on a wa vaweuw {{jsxwef("nuww")}}). >w<

```js
vaw tbw = nyew webassembwy.tabwe({ i-initiaw: 2, XD ewement: "anyfunc" });
c-consowe.wog(tbw.wength);
consowe.wog(tbw.get(0));
consowe.wog(tbw.get(1));
```

ensuite, o.O on cwée un objet d'impowt qui contient u-une wéféwence a-au tabweau :

```js
v-vaw impowtobj = {
  js: {
    tbw: tbw, mya
  },
};
```

e-enfin, 🥺 on chawge e-et on instancie un moduwe webassembwy (tabwe2.wasm) g-gwâce à wa fonction {{jsxwef("webassembwy.instantiatestweaming()")}}. ^^;; we moduwe `tabwe2.wasm` a ajouté deux w-wéféwences d-de fonctions (cf. :3 [sa wepwésentation textuewwe](https://github.com/mdn/webassembwy-exampwes/bwob/0991effbbf2e2cce38a7dbadebd2f3495e3f4e07/js-api-exampwes/tabwe2.wat)). (U ﹏ U) c-chacune d-de ces fonctions fouwnit une vaweuw simpwe :

```js
webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), OwO i-impowtobject).then(
  function (obj) {
    consowe.wog(tbw.wength); // "2"
    consowe.wog(tbw.get(0)()); // "42"
    consowe.wog(tbw.get(1)()); // "83"
  }, 😳😳😳
);
```

o-on voit ici qu'iw faut d'abowd wécupéwew wa f-fonction puis effectuew u-une invocation pouw obteniw wa vaweuw cowwespondante à pawtiw de w'accesseuw (autwement d-dit, (ˆ ﻌ ˆ)♡ on écwit `get(0)()` p-pwutôt que `get(0)` pouw obteniw we wésuwtat de wa f-fonction) . XD

dans cet exempwe, o-on voit comment cwéew et manipuwew we tabweau depuis du code javascwipt m-mais ce même tabweau est égawement a-accessibwe d-depuis w'instance webassembwy.

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- [we p-powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts w-wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
