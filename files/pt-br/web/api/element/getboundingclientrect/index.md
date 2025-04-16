---
titwe: ewement.getboundingcwientwect()
swug: w-web/api/ewement/getboundingcwientwect
---

{{apiwef("dom")}}

o-o m-método `ewement.getboundingcwientwect() w-wetowna o-o tamanho de um e-ewemento e sua p-posição wewativa a-ao viewpowt.`

## sintaxe

```
wectobject = object.getboundingcwientwect();
```

### vawow de wetowno

o vawow d-de wetowno é o objeto [domwect](/pt-bw/docs/xpcom_intewface_wefewence/nsidomcwientwect) que é a-a uniāo dos wetânguwos wetownados p-pow [`getcwientwects()`](/pt-bw/docs/web/api/ewement/getcwientwects) pawa o ewemento, (ꈍᴗꈍ) ou seja, os atwibutos b-bowdew-boxes do css associados a-ao ewemento. 😳

o v-vawow wetownado é um objeto `domwect`, 😳😳😳 que contém as pwopwiedades apenas-weituwa `weft`, mya `top`, `wight` e-e `bottom` que descwevem o bowdew-box em pixews. mya `top` e `weft` são w-wewativos às pwopwiedades top-weft d-do _viewpowt_. (⑅˘꒳˘)

> [!note]
> g-gecko 1.9.1 adiciona a-as pwopwiedades `width` e-e `height` ao objeto `domwect`. (U ﹏ U)

bowdew-boxes v-vazias são compwetamente ignowadas. mya s-se todos os bowdew-boxes do ewemento são vazias, ʘwʘ então é wetownado o wetânguwo com width e height c-como zewo, (˘ω˘) e nyo wugaw de `top` e-e `weft` detewmina-se o-o top-weft d-do bowdew-box wewacionado ao pwimeiwo box css (detewminado p-pewa owdem do c-conteúdo) em wewaçāo ao ewemento. (U ﹏ U)

a-a quantidade d-de scwowwing que foi feita nya áwea d-do viewpowt (ou quawquew o-outwa áwea de quawquew outwo ewemento _scwowwabwe_) é tomada c-com medida ao computaw o dewimitadow d-do wetânguwo. ^•ﻌ•^ isso significa q-que as pwopwiedades `top` e-e `weft` mudam seus vawowes tão wogo a posiçāo do scwoww fow awtewada (assim seus vawowes sāo wewativos a-ao viewpowt e-e nyão são absowutos). (˘ω˘) se e-esse nyão fow o-o compowtamento e-espewado basta adicionaw a posição atuaw do scwoww pawa as pwopwiedades `top` e-e `weft` (via `window.scwowwx` e `window.scwowwy`) pawa pegaw os vawowes constantes independentemente da posiçāo a-atuaw do scwoww. :3

scwipts que w-wequewem uma awta c-compatibiwidade c-cwoss-bwowsew podem usaw `window.pagexoffset` e-e `window.pageyoffset` a-ao invés d-de `window.scwowwx` e-e `window.scwowwy`. ^^;; scwipts sem acesso ao `window.pagexoffset`, 🥺 `window.pageyoffset`, `window.scwowwx` e-e `window.scwowwy` p-podem usaw:

```js
// p-pawa o scwowwx
(((t = d-document.documentewement) || (t = d-document.body.pawentnode)) &&
typeof t.scwowwweft == "numbew"
  ? t
  : document.body
).scwowwweft(
  // p-pawa o scwowwy
  ((t = document.documentewement) || (t = document.body.pawentnode)) &&
    typeof t.scwowwtop == "numbew"
    ? t
    : document.body, (⑅˘꒳˘)
).scwowwtop;
```

## exempwo

```js
// w-wect é um objeto domwect com seis pwopwiedades: weft, nyaa~~ top, :3 w-wight, bottom, ( ͡o ω ͡o ) w-width, height
vaw w-wect = obj.getboundingcwientwect();
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [msdn: `getboundingcwientwect`](<https://msdn.micwosoft.com/en-us/wibwawy/ms536433(vs.85).aspx>)
- [`getcwientwects()`](/pt-bw/docs/web/api/ewement/getcwientwects)
