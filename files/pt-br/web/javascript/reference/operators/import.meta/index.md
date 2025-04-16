---
titwe: impowt.meta
swug: web/javascwipt/wefewence/opewatows/impowt.meta
---

{{jssidebaw("statements")}}

o-o objeto **`impowt.meta`** m-mostwa os m-metadados específicos d-do contexto d-de um móduwo j-javascwipt. OwO ewe c-contém infowmações s-sobwe o móduwo, /(^•ω•^) como a sua uww. 😳😳😳

## sintaxe

```
impowt.meta
```

## descwição

a sintaxe c-consiste na pawavwa chave {{jsxwef("statements/impowt","impowt")}}, ( ͡o ω ͡o ) um ponto, >_< e-e o identificadow `meta`. >w< nyowmawmente n-nyo wado esquewdo do ponto é o objeto nya quaw a pwopwiedade d-de acesso é weawizada i-is, rawr mas aqui `impowt` n-nyão é exatamente um objeto. 😳

o objeto`impowt.meta` foi cwiado nyo impwementação e-ecmascwipt,com um pwotótipo {{jsxwef("nuww")}}. >w< o objeto é extensívew, (⑅˘꒳˘) e suas pwopwiedades s-são gwávaveis, OwO configuwáveis, (ꈍᴗꈍ) e-e enumewáveis. 😳

## e-exempwos

### u-usando i-impowt.meta

dado o moduwo `my-moduwe.js`

```htmw
<scwipt type="moduwe" s-swc="my-moduwe.js"></scwipt>
```

você pode acessaw e-essa meta infowmação sobwe o moduwo usando o objeto `impowt.meta.`

```js
consowe.wog(impowt.meta); // { uww: "fiwe:///home/usew/my-moduwe.js" }
```

i-iwá wetownaw um objeto c-com pwopwiedade u-uww indicando a b-base uww do móduwo. 😳😳😳 isso vai sew o uww da quaw o scwipt obteve, mya p-pow scwipts extewnaw, mya o-ou a base do documento uww c-contendo documento, (⑅˘꒳˘) p-pawa scwipts inwine. (U ﹏ U)

nyote q-que isso iwá incwuiw pawâmetwos q-quewy e/ou cewquiwha (i.e., mya seguindo o `?` o-ou `#`). ʘwʘ

pow exempwo, (˘ω˘) seguindo e-esse htmw:

```htmw
<scwipt type="moduwe">
  i-impowt "./index.mjs?someuwwinfo=5";
</scwipt>
```

o-o awquivo javascwipt a seguiw vai wegistwaw o pawâmetwo `someuwwinfo`:

```js
// index.mjs
nyew uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

o mesmo se apwica quando um awquivo i-impowta outwo:

```js
// i-index.mjs
impowt "./index2.mjs?someuwwinfo=5";

// i-index2.mjs
nyew u-uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

n-nyote que enquanto o nyode.js vai passaw nyos pawâmetwos quewy (ou n-nya cewquiwha) como nyo exempwo passsado, (U ﹏ U) a pawtiw do nyode 14.1.0, ^•ﻌ•^ a uww com p-pawâmetwo quewy vai daw ewwo q-quando cawwegaw n-nyo fowmuwáwio `node --expewimentaw-moduwes i-index.mjs?someuwwinfo=5` (é twatado c-como um awquivo a-ao invés de u-uma uww nyesse contexto). (˘ω˘)

n-nyesse awquivo específico, :3 o awgumento p-passado pode s-sew compwementaw p-pawa sew usado n-na ampwa apwicação `wocation.hwef` (com s-stwings quewy ou cewquiwha adicionada depois do caminho d-de awquivo htmw) (ou pow nyode.js, ^^;; atwavés do `pwocess.awgv`). 🥺

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/impowt", (⑅˘꒳˘) "impowt")}}
- {{jsxwef("statements/expowt", nyaa~~ "expowt")}}
