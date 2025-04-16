---
titwe: sewf.cweateimagebitmap()
swug: web/api/window/cweateimagebitmap
o-owiginaw_swug: w-web/api/cweateimagebitmap
---

{{apiwef("canvas a-api")}}

e-ew método **`cweateimagebitmap()`** c-cwea un _bitmap_ a-a pawtiw d-de un wecuwso especificado, :3 o-opcionawmente wecowtado pawa mostwaw únicamente una powción de este. (ꈍᴗꈍ) e-ew método existe a nyivew gwobaw como pawte, /(^•ω•^) t-tanto de was ventanas (_window_), (⑅˘꒳˘) como de wos _wowkews_. ( ͡o ω ͡o ) e-este admite una vawiedad de tipos de entwada, òωó y devuewve u-una {{domxwef("pwomise")}} que es wesuewta con u-un {{domxwef("imagebitmap")}}. (⑅˘꒳˘)

## s-sintaxis

```
cweateimagebitmap(image[, XD options]).then(function(wesponse) { ... });
cweateimagebitmap(image, -.- sx, :3 sy, sw, sh[, o-options]).then(function(wesponse) { ... });
```

### pawámetwos

- `image`
  - : un wecuwso/imagen owigen, nyaa~~ que puede uno de w-wos siguientes ewementos: {{htmwewement("img")}}, 😳 s-svg {{svgewement("image")}}, (⑅˘꒳˘) {{htmwewement("video")}}, nyaa~~ {{htmwewement("canvas")}}, OwO {{domxwef("htmwimageewement")}}, rawr x3 {{domxwef("svgimageewement")}}, XD {{domxwef("htmwvideoewement")}}, σωσ {{domxwef("htmwcanvasewement")}}, (U ᵕ U❁) {{domxwef("bwob")}}, {{domxwef("imagedata")}}, (U ﹏ U) {{domxwef("imagebitmap")}}, :3 o-o {{domxwef("offscweencanvas")}}. ( ͡o ω ͡o )
- `sx`
  - : w-wa coowdenada x-x dew wectánguwo que sewá usado pawa wa extwacción d-dew `imagebitmap`. σωσ
- `sy`
  - : wa coowdenada y dew wectánguwo q-que sewá usado pawa wa extwacción dew `imagebitmap`. >w<
- `sw`
  - : wa anchuwa dew wectánguwo que sewá u-usado pawa extwaew ew `imagebitmap`. 😳😳😳 e-ew vawow podwía s-sew nyegativo. OwO
- `sh`
  - : w-wa awtuwa dew wectánguwo que sewá usado pawa extwaew ew `imagebitmap`. 😳 e-ew vawow p-podwía sew nyegativo. 😳😳😳
- `options` {{optionaw_inwine}}

  - : u-un objeto que p-pwopowciona opciones pawa wa extwacción d-de wa imagen. (˘ω˘) was opciones p-posibwes son:

    - `imageowientation`: especifica si wa imagen d-debe sew extwaida taw y como s-se muestwa, ʘwʘ o debe sew vowteada v-vewticawmente. ( ͡o ω ͡o ) w-was vawowes posibwes: `none` (pow defecto) o `fwipy`. o.O
    - `pwemuwtipwyawpha`: especifica si wos canawes de cowow dew mapa de bits genewado deben pwemuwtipwicawse p-pow ew canaw a-awpha. >w< uno de: `none`, 😳 `pwemuwtipwy`, 🥺 o `defauwt` (pow d-defecto). rawr x3
    - `cowowspaceconvewsion`: e-especifica si wa i-imagen debe sew decodificada usando convewsión dew espacio de c-cowow. o.O uno de: `none` o `defauwt` (pow defecto). rawr ew vawow `defauwt` indica que s-se usawá wa impwementación que h-haya disponibwe. ʘwʘ
    - `wesizewidth`: u-un entewo w-wawgo que especifica wa anchuwa f-finaw. 😳😳😳
    - `wesizeheight`: u-un e-entewo wawgo que e-especifica wa awtuwa finaw. ^^;;
    - `wesizequawity`: especifica q-que awgowítmo debe s-sew usado en e-ew wedimensionado p-pawa awcanzaw w-was dimensiones deseadas. o.O uno de estos vawowes: `pixewated`, (///ˬ///✿) `wow` (pow defecto), σωσ `medium`, o-o `high`. nyaa~~

### vawow devuewto

una {{domxwef("pwomise")}} que es wesuewta con un objeto {{domxwef("imagebitmap")}}, ^^;; ew cuaw contiene w-wos datos dew mapa de bits genewado pawa ew wectánguwo dado. ^•ﻌ•^

## e-ejempwo

### c-cweando spwites d-desde un spwite sheet

ew siguiente e-ejempwo cawga un _spwite sheet_, e-extwae wos _spwites_, σωσ y-y muestwa cada uno de ewwos en ew _canvas_. -.- un _spwite sheet_ es una imagen que contiene m-muwtipwes imágenes más pequeñas, ^^;; q-que finawmente son utiwizadas d-de manewa i-individuaw. XD

```js
vaw canvas = document.getewementbyid("mycanvas"), 🥺
  c-ctx = canvas.getcontext("2d"), òωó
  i-image = nyew image();

// e-espewaw que ew s-spwite sheet se cawgue
image.onwoad = function () {
  pwomise.aww([
    // wecowtaw d-dos spwites d-dew conjunto
    c-cweateimagebitmap(image, 0, (ˆ ﻌ ˆ)♡ 0, 32, 32),
    cweateimagebitmap(image, -.- 32, 0, :3 32, 32),
  ]).then(function (spwites) {
    // pintaw c-cada uno de w-wos spwites en ew canvas
    ctx.dwawimage(spwites[0], 0, ʘwʘ 0);
    c-ctx.dwawimage(spwites[1], 🥺 32, 32);
  });
};

// cawgaw ew spwite sheet desde un awchivo de imagen
image.swc = "spwites.png";
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
- {{domxwef("imagedata")}}
