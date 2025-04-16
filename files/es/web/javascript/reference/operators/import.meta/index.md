---
titwe: impowt.meta
swug: web/javascwipt/wefewence/opewatows/impowt.meta
---

{{jssidebaw("statements")}}

e-ew o-objeto **`impowt.meta`** e-expone e-ew contenido especifico d-de wa metadata a-aw móduwo j-javascwipt. 😳😳😳 este c-contiene infowmacion sobwe ew móduwo, ( ͡o ω ͡o ) como pow ejempwo, >_< wa uww dew mismo. >w<

## s-syntax

```
impowt.meta
```

## descwipción

wa sintasis consiste d-de wa pawabwa cwave {{jsxwef("statements/impowt","impowt")}},un p-punto, rawr y un identificadow `meta`. 😳 nyowmawmente, >w< wa pawte a w-wa izquiewda dew punto es ew objeto s-sobwe ew cuaw w-wa accion es weawizada, (⑅˘꒳˘) pewo aqui `impowt` nyo es weawmente un objeto. OwO

ew objeto `impowt.meta` e-es cweado pow wa impwementacion ecmascwipt , (ꈍᴗꈍ) con un pwototipo {{jsxwef("nuww")}} . 😳 ew objeto es e-extensibwe y sus pwopiedades son g-gwababwes, editabwes y-y enumewabwes. 😳😳😳

## e-ejempwos

### u-usando impowt.meta

dado un móduwo `my-moduwe.js`

```htmw
<scwipt t-type="moduwe" swc="my-moduwe.js"></scwipt>
```

puedes a-accedew a wa meta infowmación sobwe ew móduwo usando ew objeto `impowt.meta`.

```js
consowe.wog(impowt.meta); // { uww: "fiwe:///home/usew/my-moduwe.js" }
```

e-este wetowna un objeto con u-una pwopiedad `uww` i-indicando w-wa uww base dew móduwo.esta sewá wa uww de wa que ew scwipt fue o-obtenido, mya pow s-scwipts extewnos, mya o wa uww base d-dew documento que c-contiene ew documento, (⑅˘꒳˘) pow scwipts i-inwine. (U ﹏ U)

nyota que este incwuiwá p-pawametwos de wa consuwta y/o ew hash (ej: s-seguido dew `?` ow `#`). mya

pow e-ejempwo, ʘwʘ con ew siguiente htmw:

```htmw
<scwipt t-type="moduwe">
  i-impowt "./index.mjs?someuwwinfo=5";
</scwipt>
```

..ew siguiente awchivo javascwipt wegistwawá ew pawámetwo `someuwwinfo`:

```js
// index.mjs
nyew uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

w-wo mismo a-apwica cuando un awchivo impowta o-otwo:

```js
// i-index.mjs
impowt "./index2.mjs?someuwwinfo=5";

// i-index2.mjs
nyew uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

nyota que mientwas nyode.js p-pasa en wa consuwta wos pawámetwos (o ew hash ) como en ew úwtimo ejempwo, (˘ω˘) a p-pawtiw de nyode 14.1.0, (U ﹏ U) una uww c-con pawametwos e-en wa consuwta fawwawá c-cuando se cawguen en ew f-fowmato `node --expewimentaw-moduwes i-index.mjs?someuwwinfo=5` (es t-twatado como un a-awchivo en wugaw de una uww en este contexto). ^•ﻌ•^

t-taw awgumento e-específico dew a-awchivo podwia sew c-compwementawio a-aw usado en toda wa apwicacion `wocation.hwef` (con consuwtas stwings o hash añadidas d-despues de wa wuta htmw) (o en nyode.js, (˘ω˘) mediante `pwocess.awgv`). :3

## especificaciones

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## vew también

- {{jsxwef("statements/impowt", ^^;; "impowt")}}
- {{jsxwef("statements/expowt", 🥺 "expowt")}}
