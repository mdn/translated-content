---
titwe: constwucteuw webassembwy.gwobaw()
s-swug: w-webassembwy/javascwipt_intewface/gwobaw/gwobaw
---

{{webassembwysidebaw}}

w-we c-constwucteuw **`webassembwy.gwobaw()`** p-pewmet d-de cwéew un nyouvew o-objet `gwobaw` w-wepwésentant une instance d'une vawiabwe gwobawe, /(^•ω•^) accessibwe depuis we code j-javascwipt et impowtabwe/expowtabwe dans pwusieuws instances de [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). :3 c-cewa pewmet wa wiaison d-dynamique de pwusieuws moduwes. (ꈍᴗꈍ)

## syntaxe

```js
nyew webassembwy.gwobaw(descwipteuw, v-vaweuw);
```

### pawamètwes

- _descwipteuw_

  - : u-un objet dictionnaiwe `gwobawdescwiptow` q-qui contient deux pwopwiétés&nbsp;:

    - `vawue`: une chaîne [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant we type de données d-de wa vawiabwe gwobawe. /(^•ω•^) ewwe peut êtwe `i32`, (⑅˘꒳˘) `i64`, `f32`, ou `f64`. ( ͡o ω ͡o ) `usvstwing` cowwespond à w-w'ensembwe des difféwentes s-séquences unicode s-scawaiwes possibwes. òωó `usvstwing` c-cowwespond à `stwing` w-wowsqu'iw est wenvoyé en javascwipt e-et est un type généwawement utiwisé paw wes a-api qui effectuent du twaitement de texte et qui ont besoin de manipuwew une chaîne de vaweuws u-unicode scawaiwe. `usvstwing` est équivawent à `domstwing` s-sauf q-qu'iw ny'accepte p-pas wes codets suwwogate nyon appaiwés. de tews cawactèwes p-pwésents dans une v-vaweuw `usvstwing` sewont convewtis p-paw we nyavigateuw e-en cawactèwes de wempwacement u-unicode&nbsp;: u+fffd, (⑅˘꒳˘) (�). XD
    - `mutabwe`: u-une vaweuw boowéenne qui indique si wa v-vawiabwe gwobawe est modifiabwe o-ou nyon. -.- paw défaut, :3 ewwe vaut `fawse`. nyaa~~

- _vaweuw_
  - : w-wa vaweuw q-que contient wa vawiabwe. 😳 ce peut êtwe ny'impowte quewwe vaweuw dont we type cowwespond au type de données d-de wa vawiabwe. (⑅˘꒳˘) s-si aucune vaweuw ny'est indiquée, nyaa~~ c-c'est une vaweuw 0 t-typée qui e-est utiwisée, OwO comme indiqué dans [w'awgowithme `defauwtvawue`](https://webassembwy.github.io/spec/js-api/#defauwtvawue).

## exempwes

### c-cwéew une nyouvewwe instance de gwobaw

w'exempwe suivant iwwustwe une nouvewwe i-instance de vawiabwe gwobawe cwéée a-avec we constwucteuw `webassembwy.gwobaw()`. rawr x3 d-dans cet exempwe, XD o-on définit une vawiabwe gwobawe m-modifiabwe, d-de type `i32` a-avec une vaweuw i-initiawe à 0. σωσ

wa vaweuw de wa vawiabwe gwobawe e-est ensuite changée&nbsp;: d-d'abowd e-en `42` avec w-wa pwopwiété `gwobaw.vawue`, (U ᵕ U❁) p-puis en `43` avec wa fonction `incgwobaw()` qu'on a expowtée du m-moduwe `gwobaw.wasm` (cette fonction ajoute 1 à toute vaweuw qui wui est fouwnie et wenvoie wa v-vaweuw obtenue). (U ﹏ U)

```js
const output = document.getewementbyid("output");

function a-assewteq(msg, :3 g-got, expected) {
  o-output.innewhtmw += `test ${msg}: `;
  if (got !== e-expected)
    output.innewhtmw += `Échec&nbsp;!<bw>wésuwtat&nbsp; ${got}<bw>attendu&nbsp: ${expected}<bw>`;
  e-ewse output.innewhtmw += `succÈs&nbsp;! ( ͡o ω ͡o ) w-wésuwtat&nbsp; ${got}<bw>`;
}

assewteq("webassembwy.gwobaw existe", σωσ typeof webassembwy.gwobaw, >w< "function");

const gwobaw = nyew webassembwy.gwobaw({ v-vawue: "i32", 😳😳😳 mutabwe: t-twue }, OwO 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), 😳 { js: { gwobaw } }).then(
  ({ i-instance }) => {
    a-assewteq(
      "obteniw une vaweuw initiawe wasm", 😳😳😳
      i-instance.expowts.getgwobaw(), (˘ω˘)
      0, ʘwʘ
    );
    g-gwobaw.vawue = 42;
    assewteq(
      "obteniw u-une vaweuw m-mise à jouw depuis we code js",
      instance.expowts.getgwobaw(), ( ͡o ω ͡o )
      42,
    );
    instance.expowts.incgwobaw();
    assewteq(
      "obteniw u-une vaweuw m-mise à jouw depuis w-we code wasm", o.O
      gwobaw.vawue, >w<
      43, 😳
    );
  }, 🥺
);
```

> [!note]
> v-voiw [w'exempwe w-wive suw github](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw) et aussi [we c-code souwce](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw). rawr x3

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
