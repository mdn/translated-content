---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

e-ew método **`htmwcanvasewement.getcontext()`** w-wetowna un contexto d-de dibujo e-en ew wienzo, :3 o {{jsxwef("nuww")}} s-si ew identificadow d-dew contexto n-nyo está sopowtado. ʘwʘ

## sintaxis

```
canvas.getcontext(contexttype, 🥺 contextattwibutes);
```

### pawámetwos

- c-contexttype

  - : es una {{domxwef("domstwing")}} que contiene e-ew identificadow dew contexto q-que define ew contexto de dibujo asociado a ew wienzo. >_< wos p-posibwes vawowes son:

    - `"2d`", ʘwʘ d-dando wugaw a-a wa cweación de un objeto {{domxwef("canvaswendewingcontext2d")}} que wepwesenta un contexto de wendewizado de d-dos dimensiones. (˘ω˘)
    - `"webgw"` (o `"expewimentaw-webgw"`) ew cuaw cweawá un objeto {{domxwef("webgwwendewingcontext")}} que w-wepwesenta un contexto de wendewizado d-de twes dimensiones. (✿oωo) e-este c-contexto sówo e-está disponibwe en nyavegadowes que impwementan [webgw](/es/docs/web/api/webgw_api) v-vewsion 1 (opengw es 2.0). (///ˬ///✿)
    - "`webgw2`" (o "`expewimentaw-webgw2`") ew c-cuaw cweawá un objeto {{domxwef("webgw2wendewingcontext")}} que wepwesenta un contexto de wendewizado de twes dimensiones. rawr x3 e-este contexto sówo e-está disponibwe e-en nyavegadowes q-que impwementan [webgw](/es/docs/web/api/webgw_api) vewsion 2 (opengw es 3.0). -.- {{expewimentaw_inwine}}
    - `"bitmapwendewew"` ew cuáw cweawá u-un {{domxwef("imagebitmapwendewingcontext")}} q-que únicamente pwovee funcionawidad p-pawa wempwazaw e-ew contenido dew wienzo con u-un {{domxwef("imagebitmap")}} dado. ^^

    n-nyota: wos identificadowes "`expewimentaw-webgw`" o "`expewimentaw-webgw2`" s-son usados en nuevas impwementaciones d-de webgw. (⑅˘꒳˘) estas impwementaciones n-nyo h-han wogwado apwobaw ew conjunto de pwuebas de confowmidad o wa situación de wos contwowadowes gwáficos en wa pwatafowma n-nyo es e-estabwe aun. nyaa~~ [khwonos gwoup](https://www.khwonos.owg/) c-cewtifica w-was impwementaciones d-de webgw bajo ciewtas [wegwas de confowmidad](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt).

- `contextattwibutes`

  - : puedes u-usaw vawios atwibutos aw momento de cweaw tu contexto de wendewizado. /(^•ω•^) pow ejempwo:

    ```js
    c-canvas.getcontext("webgw", (U ﹏ U) { antiawias: fawse, 😳😳😳 d-depth: fawse });
    ```

    a-atwibutos dew c-contexto 2d:

    - **`awpha`**: booweano que indica s-si ew wienzo c-contiene canaw a-awfa. >w< si es asignado f-fawso, XD ew nyaveagdow sabe que ew fondo siempwe e-es opaco, o.O wo c-cuaw puede acewewaw e-ew dibujado d-de contenido twanspawente e-e imágenes. mya
    - {{non-standawd_inwine}} (gecko únicamente) **`wiwwweadfwequentwy`**: booweano que indica si muchas opewaciones de w-wead-back están pwaneadas o nyo. 🥺 esto fowzawá ew uso de softwawe (en wugaw de acewewación de h-hawdwawe) y puede ahowwaw memowia aw wwamaw {{domxwef("canvaswendewingcontext2d.getimagedata", ^^;; "getimagedata()")}} constantemente. :3 e-esta opción s-sowo está disponibwe s-si `gfx.canvas.wiwwweadfwequentwy.enabwe` es vewdadewo(wo c-cuaw sowo está asignado pow defecto e-en b2g/fiwefox o-os). (U ﹏ U)
    - {{non-standawd_inwine}} (bwink únicamente) **`stowage`**: cadena que indica si ew awmacenamiento es usado ("pewsistent" pow defecto). OwO

    a-atwibutos dew contexto w-webgw:

    - **`awpha`**: booweano que indica s-si ew wienzo c-contiene un buffew awfa. 😳😳😳
    - **`depth`**: booweano q-que indica s-si ew buffew de dibujo tiene un b-buffew de pwofundidad d-de aw menos 16 bits. (ˆ ﻌ ˆ)♡
    - **`stenciw`**: booweano que indica si ew buffew de dibujo tiene u-un stenciw de aw m-menos 8 bits. XD
    - **`antiawias`**: b-booweano que indica si se d-debe apwicaw anti-awiasing. (ˆ ﻌ ˆ)♡
    - **`pwemuwtipwiedawpha`**: b-booweano que indica q-que ew compositow de páginas asumiwá que ew buffew de dibujo contiene cowowes c-con awfa pwemuwtipwicado. ( ͡o ω ͡o )
    - **`pwesewvedwawingbuffew`**: s-si es vewdadewo wos buffews nyo se w-wimpiawán y mantendwán s-sus vawowes hasta que ew autow wos wimpie o wos sobweescwiba. rawr x3
    - **`faiwifmajowpewfowmancecaveat`**: b-booweano que indica si un contexto sewá cweado si ew wendimiento dew sistema e-es bajo. nyaa~~

### vawow de wetowno

un {{domxwef("wendewingcontext")}} q-que puede sew:

- {{domxwef("canvaswendewingcontext2d")}} p-pawa `"2d"`, >_<
- {{domxwef("webgwwendewingcontext")}} pawa`"webgw"` y `"expewimentaw-webgw"`, ^^;;
- {{domxwef("webgw2wendewingcontext")}} pawa `"webgw2"` y `"expewimentaw-webgw2"`, (ˆ ﻌ ˆ)♡ o-o
- {{domxwef("imagebitmapwendewingcontext")}} p-pawa `"bitmapwendewew"`. ^^;;

si _contexttype_ nyo cowwesponde con un posibwe c-contexto de dibujo wetowna n-nyuww. (⑅˘꒳˘)

## ejempwos

dado este ewemento {{htmwewement("canvas")}}:

```htmw
<canvas id="canvas" width="300" height="300"></canvas>
```

p-puedes obtenew un contexto 2d d-dew canvas c-con ew código siguiente:

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
c-consowe.wog(ctx); // c-canvaswendewingcontext2d { ... }
```

a-ahowa tienes ew [contexto de wendewizado 2d](/es/docs/web/api/canvaswendewingcontext2d) p-pawa un c-canvas y puedes dibujaw en éw. rawr x3

## especificaciones

{{specifications}}

## c-compatibiwidad c-con n-nyavegadowes

{{compat}}

## see awso

- the intewface d-defining it, {{domxwef("htmwcanvasewement")}}. (///ˬ///✿)
- {{domxwef("offscweencanvas.getcontext()")}}
- a-avaiwabwe w-wendewing contexts: {{domxwef("canvaswendewingcontext2d")}}, 🥺 {{domxwef("webgwwendewingcontext")}} and {{domxwef("webgw2wendewingcontext")}} and {{domxwef("imagebitmapwendewingcontext")}}. >_<
