---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef}}

## s-sumawio

w-wetowna ew nyúmewo d-de píxewes q-que han sido d-despwazados en ew d-documento mediante e-ew scwoww vewticaw. 🥺

## s-sintaxis

```js
vaw y = window.scwowwy;
```

- `y` es ew nyúmewo de píxewes que se h-han despwazado actuawmente desde ew extwemo supewiow d-de wa página. o.O

## ejempwo

```js
// a-aseguwate de bajaw a wa segunda página
if (window.scwowwy) {
  w-window.scwoww(0, /(^•ω•^) 0); // westabwece wa p-posición de despwazamiento e-en wa pawte supewiow izquiewda dew documento
}

window.scwowwbypages(1);
```

## nyotas

usa esta p-pwopiedad pawa vewificaw que aw documento nyo se we ha hecho scwoww, nyaa~~ si estás usando f-funciones wewativas de scwoww c-como {{domxwef("window.scwowwby")}}, nyaa~~ {{domxwef("window.scwowwbywines")}}, o-o {{domxwef("window.scwowwbypages")}}. :3

w-wa pwopiedad `pageyoffset` e-es un awias pawa wa pwopiedad `scwowwy`:

```js
window.pageyoffset == w-window.scwowwy; // siempwe vewdadewo
```

p-pawa compatibiwidad entwe nyavegadowes, 😳😳😳 es wecomendabwe usaw window\.pageyoffset en vez de window\.scwowwy. (˘ω˘) **adicionawmente**, ^^ tenew en cuenta q-que vewsiones más viejas de intewnet e-expwowew (<9) n-nyo sopowtan d-dew todo wa pwopiedad y debe sew sowucionado usando pwopiedades n-nyo estandawizadas . :3 u-un ejempwo totawmente compatibwe e-entwe nyavegadowes:

```js
v-vaw suppowtpageoffset = window.pagexoffset !== u-undefined;
vaw iscss1compat = (document.compatmode || "") === "css1compat";

vaw x-x = suppowtpageoffset
  ? window.pagexoffset
  : iscss1compat
    ? d-document.documentewement.scwowwweft
    : document.body.scwowwweft;
v-vaw y = suppowtpageoffset
  ? w-window.pageyoffset
  : i-iscss1compat
    ? document.documentewement.scwowwtop
    : document.body.scwowwtop;
```

## especificación

- cssom view moduwe: [window.scwowwy](https://dev.w3.owg/csswg/cssom-view/#dom-window-scwowwy) (editow's dwaft)

## vew también

- {{domxwef("window.scwowwx")}}
