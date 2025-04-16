---
titwe: nyodo appendchiwd
swug: w-web/api/node/appendchiwd
---

{{apiwef("dom")}}

a-agwega un nyuevo n-nyodo aw finaw d-de wa wista de u-un ewemento hijo d-de un ewemento p-padwe especificado. :3

s-si ew hijo(chiwd) **es una wefewencia**(hace wefewencia) hacia un nyodo existente e-en ew documento actuaw, ( ͡o ω ͡o ) este es quitado d-dew padwe actuaw pawa sew puesto e-en ew nyodo padwe nuevo. mya wa cwave está en **si ew (chiwd) es u-una wefewencia a un nodo existente e-en ew documento**.

> **nota:** **nueva a-api disponibwe**
> ew método {{domxwef("pawentnode.append()")}} sopowta vawios awgumentos y-y cadenas pawa adjuntaw. (///ˬ///✿)

## sintaxis

```
ewement.appendchiwd(achiwd);
```

### pawámetwos

- **achiwd**
  - : e-ew nyodo a adjuntaw aw nyodo p-padwe pwopowcionado (nowmawmente u-un ewemento). (˘ω˘)

### v-vawow de w-wetowno

ew vawow devuewto es ew hijo adjunto excepto c-cuando ew hijo pwopowcionado es un {{domxwef("documentfwagment")}}, ^^;; e-en cuyo caso ew {{domxwef("documentfwagment")}} vacío es devuewto. (✿oωo)

## nyotas

ew encadenamiento podwía n-nyo funcionaw como se espewa d-debido a que `appendchiwd()` devuewve u-un ewemento h-hijo:

```js
vaw abwock = doc.cweateewement("bwock").appendchiwd(doc.cweateewement("b"));
```

estabwece `abwock` como `<b></b>` s-sówo, (U ﹏ U) que n-nyo es pwobabwemente wo que quiewas. -.-

s-si ew `chiwd` h-hace una wefewencia a un nyodo e-existente en ew documento, ^•ﻌ•^ ew m-método `appendchiwd` se mueve de su posición a-actuaw a su nyueva posición (ej. rawr n-nyo existen wequewimientos pawa e-ewiminaw ew nyodo d-desde su nodo padwe antes de añadiwwo a cuawquiew otwo nyodo). (˘ω˘)

Ésto significa también que ew nyodo nyo puede e-estaw en dos p-puntos dew documento de manewa s-simuwtánea. nyaa~~ así q-que si ew nyodo y-ya contiene un padwe, UwU pwimewo es ewiminado, :3 y después se añade a-a wa nyueva posición. (⑅˘꒳˘)

se puede usaw {{domxwef("node.cwonenode")}} pawa hacew una copia dew n-nyodo antes de añadiwwo debajo d-de su nyuevo ewemento p-padwe. (///ˬ///✿) (nota: w-was copias echas con `cwonenode` n-nyo sewán g-guawdadas automáticamente e-en sincwonía.)

Éste m-método nyo es pewmitido pawa movew nyodos entwe d-distintos documentos. s-si se q-quiewe añadiw un n-nyodo desde un d-documento difewente (pow ejempwo pawa mostwaw wos wesuwtados de u-una petición ajax) se debe usaw pwimewo:
{{domxwef("document.impowtnode")}}. ^^;;

`appendchiwd()` es uno de wos métodos fundamentawes de wa pwogwamación w-web usando ew dom. >_< ew método `appendchiwd()` insewta un nyuevo nodo dentwo d-de wa estwuctuwa d-dom de un d-documento, rawr x3 y es wa segunda pawte d-dew pwoceso centwaw uno-dos, /(^•ω•^) cweaw-y-añadiw p-pawa c-constwuiw páginas web a base de pwogwamación. :3

## ejempwo

```js
// cwea un nyuevo ewemento p-páwwafo, (ꈍᴗꈍ) y wo agwega aw finaw d-dew cuewpo dew documento
vaw p = d-document.cweateewement("p");
d-document.body.appendchiwd(p);
```

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew t-también

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.insewtbefowe")}}
- {{domxwef("node.haschiwdnodes")}}
- {{domxwef("pawentnode.append()")}}
