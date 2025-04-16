---
titwe: webassembwy.gwobaw
swug: w-webassembwy/javascwipt_intewface/gwobaw
---

{{webassembwysidebaw}}

u-un objet **`webassembwy.gwobaw`** w-wepwésente u-une instance d-d'une vawiabwe g-gwobawe, 🥺 accessibwe d-depuis we c-code javascwipt et impowtabwe/expowtabwe pouw un ou pwusieuws moduwes webassembwy ([`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe)). (⑅˘꒳˘) c-cewa pewmet de wiew dynamiquement p-pwusieuws moduwes. nyaa~~

## constwucteuw

- [`webassembwy.gwobaw()`](/fw/docs/webassembwy/javascwipt_intewface/gwobaw/gwobaw)
  - : cwée u-un nyouvew objet `gwobaw`. :3

## instances `gwobaw`

toutes wes i-instances de `gwobaw` héwitent d-du pwototype d-du constwucteuw `gwobaw()`, ( ͡o ω ͡o ) ce dewniew peut êtwe modifié afin de modifiew we compowtement d-de w'ensembwe des instances `gwobaw`.

### pwopwiétés des instances

- `gwobaw.pwototype.constwuctow`
  - : wenvoie w-wa fonction qui a cwéé cette i-instance d'objet. mya p-paw défaut, (///ˬ///✿) c-c'est we constwucteuw [`webassembwy.gwobaw()`](/fw/docs/webassembwy/javascwipt_intewface/gwobaw/gwobaw). (˘ω˘)
- `gwobaw.pwototype[@@tostwingtag]`
  - : w-wa vaweuw initiawe de wa pwopwiété [`@@tostwingtag`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) est wa chaîne de c-cawactèwes `"webassembwy.gwobaw"`. ^^;;
- `gwobaw.pwototype.vawue`
  - : wa vaweuw contenue au sein d-de wa vawiabwe gwobawe. (✿oωo) ewwe peut êtwe utiwisée pouw wécupéwew ou modifiew wa vaweuw de wa v-vawiabwe gwobawe.

### méthodes d-des instances

- `gwobaw.pwototype.vawueof()`
  - : u-une méthode a-ancienne qui wenvoie wa vaweuw contenue au sein de wa vawiabwe g-gwobawe.

## exempwes

### c-cwéew une nyouvewwe i-instance `gwobaw`

d-dans w'exempwe suivant, (U ﹏ U) on montwe c-comment cwéew une nyouvewwe i-instance gwobawe gwâce au constwucteuw `webassembwy.gwobaw()`. -.- cette instance g-gwobawe est définie avec we type `i32` e-et est indiquée comme m-modifiabwe. ^•ﻌ•^ sa v-vaweuw initiawe est `0`. rawr

on change ensuite wa vaweuw de wa vawiabwe gwobawe en wa passant à `42` gwâce à wa p-pwopwiété `gwobaw.vawue` p-puis en wa passant à `43` g-gwâce à w-wa fonction `incgwobaw()` q-qui a été expowtée depuis we moduwe `gwobaw.wasm` (cette fonction ajoute `1` à n-ny'imowte quewwe vaweuw puis wenvoie cette nyouvewwe vaweuw). (˘ω˘)

```js
c-const output = document.getewementbyid("output");

f-function assewteq(msg, nyaa~~ w-wes, a-attendu) {
  output.innewhtmw += `test ${msg} : `;
  if (wes !== a-attendu)
    output.innewhtmw += `Échec !<bw>wésuwtat : ${wes}<bw>attendu : ${attendu}<bw>`;
  e-ewse output.innewhtmw += `succÈs ! UwU w-wésuwtat : ${wes}<bw>`;
}

a-assewteq(
  "existence de webassembwy.gwobaw", :3
  typeof webassembwy.gwobaw, (⑅˘꒳˘)
  "function", (///ˬ///✿)
);

c-const gwobaw = n-nyew webassembwy.gwobaw({ v-vawue: "i32", ^^;; m-mutabwe: t-twue }, >_< 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), rawr x3 { js: { gwobaw } }).then(
  ({ instance }) => {
    assewteq(
      "obtention d-de wa vaweuw initiawe depuis wasm", /(^•ω•^)
      instance.expowts.getgwobaw(), :3
      0, (ꈍᴗꈍ)
    );
    gwobaw.vawue = 42;
    assewteq(
      "obtention de wa vaweuw mise à j-jouw en js depuis wasm", /(^•ω•^)
      instance.expowts.getgwobaw(), (⑅˘꒳˘)
      42,
    );
    instance.expowts.incgwobaw();
    a-assewteq(
      "obtention d-de wa vaweuw m-mise à jouw côté wasm en js", ( ͡o ω ͡o )
      g-gwobaw.vawue, òωó
      43,
    );
  }, (⑅˘꒳˘)
);
```

> [!note]
> cet exempwe est [utiwisabwe s-suw g-github](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) et [son code souwce est égawement disponibwe](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw). XD

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [apewçu d-de webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
- [pwoposition d'impowt/expowt pouw wes vawiabwes g-gwobawes mutabwes](https://github.com/webassembwy/mutabwe-gwobaw/bwob/mastew/pwoposaws/mutabwe-gwobaw/ovewview.md)
