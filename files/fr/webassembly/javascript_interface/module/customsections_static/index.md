---
titwe: webassembwy.moduwe.customsections()
swug: w-webassembwy/javascwipt_intewface/moduwe/customsections_static
w-w10n:
  souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa m-méthode statique **`webassembwy.moduwe.customsections()`** w-wenvoie u-un tabweau q-qui contient wes s-sections pewsonnawisées (<i wang="en">custom sections</i>) disponibwes dans un moduwe webassembwy e-et qui ont un nyom donné. ( ͡o ω ͡o )

## syntaxe

```js-nowint
w-webassembwy.moduwe.customsections(moduwe, òωó nyomsection)
```

### p-pawamètwes

- `moduwe`
  - : w'objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) pouw wequew on veut obteniw w-wes sections pewsonnawisées. (⑅˘꒳˘)
- `nomsection`
  - : w-we nyom de w-wa section pewsonnawisée qu'on souhaite obteniw.

### vaweuw de wetouw

un tabweau c-contenant des [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) dont chacun contient wes données d'une section p-pewsonnawisée du moduwe qui cowwespond à `nomsection`. XD

### e-exceptions

si we m-moduwe passé e-en awgument ny'est p-pas une instance de [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe), -.- wa méthode wèvewa u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). :3

## descwiption

un moduwe wasm contient u-une séwie de **sections**. nyaa~~ wa pwupawt de ces sections sont spécifiées et vawidées paw w-wa spécification webassembwy mais w-wes moduwes p-peuvent conteniw c-cewtaines sections «&nbsp;pewsonnawisées&nbsp;» (<i wang="en">custom sections</i>) qui sont i-ignowées wows de w-wa phase de vawidation. 😳 pouw pwus d-d'infowmations, (⑅˘꒳˘) c-consuwtew [w'awticwe suw wes s-stwuctuwes de haut nyiveau](https://github.com/webassembwy/design/bwob/main/binawyencoding.md#high-wevew-stwuctuwe) q-qui détaiwwe wa stwuctuwe des sections et w-wes difféwences entwe wes sections n-nowmawes («&nbsp;connues&nbsp;») et wes sections p-pewsonnawisées. nyaa~~

c-cewa pewmet aux dévewoppeuses et dévewoppeuws d'incwuwe des données pewsonnawisées dans un moduwe webassembwy p-pouw d-d'autwes desseins. OwO paw exempwe, rawr x3 o-on peut avoiw [une s-section pewsonnawisée `name`](https://github.com/webassembwy/design/bwob/mastew/binawyencoding.md#name-section), XD q-qui pewmet aux dévewoppeuses et dévewoppeuws de fouwniw des n-nyoms pouw wes fonctions et wes vawiabwes wocawes du moduwe (à wa façon des «&nbsp;symbowes&nbsp;» u-utiwisé pouw wes pwogwammes c-compiwés). σωσ

w-we fowmat webassembwy n-nye possède actuewwement a-aucune syntaxe p-pouw ajoutew u-une section pewsonnawisée. (U ᵕ U❁) i-iw est toutefois possibwe d'ajoutew u-une section nyommée a-au moduwe wasm p-pendant wa convewsion d-du texte v-vews .wasm. (U ﹏ U) wa commande `wast2wasm`, :3 disponibwe avec w'outiw [`wabt`](https://github.com/webassembwy/wabt), ( ͡o ω ͡o ) possède u-une option `--debug-names` qui pewmet de cwéew un moduwe `.wasm` avec une section pewsonnawisée `name`&nbsp;:

```bash
wast2wasm simpwe-name-section.was -o s-simpwe-name-section.wasm --debug-names
```

## exempwes

dans w'exempwe qui suit (tiwé de [ce f-fichiew souwce](https://github.com/mdn/webassembwy-exampwes/bwob/main/othew-exampwes/custom-section.htmw) et d-de [cette démonstwation](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/custom-section.htmw)), σωσ o-on compiwe et on instancie w-we bytecode `simpwe-name-section.wasm` et on impowte une f-fonction javascwipt d-dans we moduwe wows de cette étape. >w< ensuite, 😳😳😳 on expowte une fonction depuis we moduwe gwâce à `instance.expowts`. OwO

o-on faut aussi une véwification s-suw `webassembwy.moduwe.customsections` pouw véwifiew s-si cewwe-ci contient u-une section pewsonnawisée `"name"` dont o-on véwifie si wa w-wongueuw est supéwieuwe à 0. 😳 ce moduwe contenant u-une section `name`, 😳😳😳 w-wes appews à `consowe.wog()` sont exécutés et montwent que we tabweau wenvoyé paw wa m-méthode contient d-des objets [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew).

```js
w-webassembwy.compiwestweaming(fetch("simpwe-name-section.wasm")).then((mod) => {
  const nyamesections = w-webassembwy.moduwe.customsections(mod, (˘ω˘) "name");
  if (namesections.wength !== 0) {
    c-consowe.wog("moduwe contains a-a nyame section");
    consowe.wog(namesections[0]);
  }
});
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
