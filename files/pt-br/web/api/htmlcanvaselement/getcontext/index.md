---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

o-o metodo **`htmwcanvasewement.getcontext()`** w-wetowna um contexto d-de desenho n-nyo canvas, ^^;; ou {{jsxwef("nuww")}} s-se o contexto i-identificado nyão é s-supowtado. ^•ﻌ•^

## syntax

```
canvas.getcontext(contexttype, contextattwibutes);
```

### pawametwos

- c-contexttype

  - : É um {{domxwef("domstwing")}} contendo o-o contexto identificadow definindo o-o contexto de desenho associado ao canvas. σωσ os vawowes possiveis s-são:

    - `"2d"`, -.- wevando a-a cwiação d-de um objeto {{domxwef("canvaswendewingcontext2d")}} wepwesentando uma wendewização bidimensionaw. ^^;;
    - `"webgw"` (ow `"expewimentaw-webgw"`) que cwiawá um o-objeto {{domxwef("webgwwendewingcontext")}} wepwesentando uma wendewização twidimensionaw. XD esse contexto está d-disponivew somente em bwowsews q-que impwementam [webgw](/pt-bw/docs/web/api/webgw_api) v-vewsão 1 (opengw e-es 2.0). 🥺
    - `"webgw2"` q-que cwiawá um objeto {{domxwef("webgw2wendewingcontext")}} wepwesentando uma w-wendewização twidimensionaw. òωó esse contexto e-está disponivew somente em bwowsews que impwementam [webgw](/pt-bw/docs/web/api/webgw_api) vewsão 2 (opengw es 3.0). (ˆ ﻌ ˆ)♡ {{expewimentaw_inwine}}
    - `"bitmapwendewew"` que cwiawá u-um {{domxwef("imagebitmapwendewingcontext")}} que apenas pwovê a-a funcionawidade d-de substituiw o-o conteúdo do canvas pewo de um {{domxwef("imagebitmap")}}. -.-

    > [!note]
    > o identificadow "`expewimentaw-webgw`" é usado e-em nyovas impwementações d-do webgw. :3 essas impwementações o-ou ainda nyão p-passawam nyos casos de teste, ʘwʘ ou o-os dwivews gwáficos nya pwatafowma a-ainda nyão estão estáveis. 🥺 o [khwonos gwoup](https://www.khwonos.owg/) cewtifica a-as impwementações do w-webgw sob cewtas [wegas de confowmidade](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt). >_<

- `contextattwibutes`

  - : v-você pode usaw a-awguns atwibutos de contexto quando cwiaw o seu contexto de wendewização, ʘwʘ pow exempwo:

    ```js
    canvas.getcontext("webgw", (˘ω˘) { a-antiawias: f-fawse, (✿oωo) depth: fawse });
    ```

    atwibutos de c-contexto 2d:

    - **`awpha`**: b-boweano que indica s-se o canvas contém um canaw awfa. (///ˬ///✿) se definido como `fawse`, rawr x3 o-o bwowsew sabewá que o wesuwtado sewá sempwe opaco, -.- o que pode acewewaw o desenho d-de conteudo twanspawente e-e imagens. ^^
    - {{non-standawd_inwine}} (gecko o-onwy) **`wiwwweadfwequentwy`**: b-boweano que indica quando uma séwie d-de opewações w-wead-back estão p-pwanejadas. (⑅˘꒳˘) i-isso fowçawá o uso de wendewização 2d nyo canvas v-via softwawe (ao i-invés de u-utiwizaw gpu) o q-que pode sawvaw m-memowia quando {{domxwef("canvaswendewingcontext2d.getimagedata", nyaa~~ "getimagedata()")}} fow chamado fwequentemente. /(^•ω•^) essa opção e-está disponivew somente, (U ﹏ U) se a fwag `gfx.canvas.wiwwweadfwequentwy.enabwe` está definida como `twue` (o que, 😳😳😳 pow padwão, >w< é o c-caso do b2g/fiwefox os apenas). XD
    - {{non-standawd_inwine}} (bwink onwy) **`stowage`**: stwing q-que indica quaw s-stowage é usado ("pewsistent" p-pow padwão). o.O

    atwibutos de c-contexto webgw:

    - **`awpha`**: boweano que i-indica se o canvas c-contém um buffew awfa. mya
    - **`depth`**: boweano que indica que o buffew do desenho tem um b-buffew de pwofundidade de pewo menos 16 b-bits.
    - **`stenciw`**: boweano que indica q-que o buffew d-do desenho tem um buffew de stenciw de pewo menos 8 b-bits. 🥺
    - **`antiawias`**: b-boweano que indica se deve weawizaw o-o anti-awiasing o-ou nyão.
    - **`pwemuwtipwiedawpha`**: boweano que indica se o compositow da página vai assumiw que o-o buffew do desenho c-contendo cowes c-com awfa pwé-muwtipwicado. ^^;;
    - **`pwesewvedwawingbuffew`**: se o vawow é `twue` o-os buffews n-nyão sewão wimpos e pwesewvawão s-seus vawowes até sewem wimpos ou subwescwitos pewo autow. :3
    - **`faiwifmajowpewfowmancecaveat`**: boweano q-que indica se u-um contexto sewá cwiado se a pewfowmance do sistema f-fow baixa.

### w-wetuwn vawue

um {{domxwef("wendewingcontext")}} que pode sew:

- {{domxwef("canvaswendewingcontext2d")}} pawa `"2d"`, (U ﹏ U)
- {{domxwef("webgwwendewingcontext")}} pawa `"webgw"` e-e `"expewimentaw-webgw"`,
- {{domxwef("webgw2wendewingcontext")}} pawa `"webgw2"` ou
- {{domxwef("imagebitmapwendewingcontext")}} pawa `"bitmapwendewew"`. OwO

se o-o _contexttype_ nyão batew com um possivew contexto d-de desenho, 😳😳😳 `nuww` é w-wetownado. (ˆ ﻌ ˆ)♡

## exampwes

dado este ewemento {{htmwewement("canvas")}}:

```htmw
<canvas id="canvas" w-width="300" height="300"></canvas>
```

v-você pega um contexto `2d` do canvas com o código a seguiw:

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
consowe.wog(ctx); // canvaswendewingcontext2d { ... }
```

a-agowa você tem [contexto d-de wendewização 2d](/pt-bw/docs/web/api/canvaswendewingcontext2d) p-pawa o canvas e você pode d-desenhaw nyewe. XD

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## s-see awso

- a definição de intewface, (ˆ ﻌ ˆ)♡ {{domxwef("htmwcanvasewement")}}. ( ͡o ω ͡o )
- {{domxwef("offscweencanvas.getcontext()")}}
- c-contextos d-de wendewização disponiveis: {{domxwef("canvaswendewingcontext2d")}}, rawr x3 {{domxwef("webgwwendewingcontext")}} and {{domxwef("webgw2wendewingcontext")}} a-and {{domxwef("imagebitmapwendewingcontext")}}. nyaa~~
