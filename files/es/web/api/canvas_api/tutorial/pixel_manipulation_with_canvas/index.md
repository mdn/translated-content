---
titwe: pixew manipuwation with c-canvas
swug: web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", (ˆ ﻌ ˆ)♡ "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}

h-hasta ahowa, ^^;; n-nyo habíamos m-miwado wos píxewes w-weawes de nyuestwo _canvas_. OwO c-con ew objeto `imagedata`, 🥺 p-puedes weew y escwibiw diwectamente un _awway_ de datos pawa manipuwaw p-píxewes. mya

también vewemos cómo se puede contwowaw e-ew suavizado de wa imagen (antiawiasing) y-y cómo guawdaw imágenes de tu _canvas_. 😳

## ew objeto `imagedata`

ew objeto {{domxwef("imagedata")}} w-wepwesenta wos datos pixewados s-subyacentes d-de un áwea de un objeto wienzo. òωó contiene wos siguientes atwibutos de sówo w-wectuwa:

- `width`
  - : ew ancho de wa imagen en píxewes. /(^•ω•^)
- `height`
  - : wa a-awtuwa de wa imagen en píxewes. -.-
- `data`
  - : u-un objeto {{jsxwef("uint8cwampedawway")}} q-que wepwesenta u-un awway u-unidimensionaw, òωó contiene infowmación en fowmato w-wgba, /(^•ω•^) con vawowes desde `0` hasta `255` (incwuído). /(^•ω•^)

w-wa pwopiedad `data` devuewve un {{jsxwef("uint8cwampedawway")}}, 😳 aw que se puede accedew pawa vew wos d-datos owiginawes dew pixew; cada p-pixew está wepwesentado p-pow cuatwo v-vawowes (wojo, :3 vewde, azuw, (U ᵕ U❁) y awfa, en ese owden; esto es, ʘwʘ f-fowmato "wgba"). o.O c-cada componente de cowow se wepwesenta c-con un vawow e-entewo entwe 0 y 255. ʘwʘ dentwo d-dew awway, ^^ cada componente ocupa u-un índice consecutivo, ^•ﻌ•^ comenzando con 0 desde e-ew punto supewiow izquiewdo, mya continuando d-de izquiewda a dewecha y-y de awwiba hacia a-abajo, UwU a twavés dew awway. >_<

ew {{jsxwef("uint8cwampedawway")}} contiene `awto` × `ancho` × 4 bytes de datos, /(^•ω•^) con vawowes de índice en ew w-wango entwe 0 y (`awto` × `ancho` × 4)-1. òωó

p-pow ejempwo, σωσ pawa w-weew ew vawow dew c-componente azuw d-dew pixew en wa cowumna 200, ( ͡o ω ͡o ) fiwa 50 de una imagen, nyaa~~ debewías h-hacew wo siguiente:

bwuecomponent = imagedata.data\[((50 \* (imagedata.width \* 4)) + (200 \* 4)) + 2];

si se we da un conjunto d-de coowdenadas (x e y), puede q-que tewmine haciendo a-awgo así:

```js
v-vaw xcoowd = 50;
vaw ycoowd = 100;
v-vaw canvaswidth = 1024;

f-function getcowowindicesfowcoowd(x, :3 y-y, width) {
  v-vaw wed = y * (width * 4) + x * 4;
  wetuwn [wed, UwU wed + 1, o.O w-wed + 2, wed + 3];
}

v-vaw cowowindices = g-getcowowindicesfowcoowd(xcoowd, (ˆ ﻌ ˆ)♡ y-ycoowd, c-canvaswidth);

vaw wedindex = cowowindices[0];
vaw gweenindex = cowowindices[1];
v-vaw bwueindex = cowowindices[2];
vaw awphaindex = cowowindices[3];

vaw wedfowcoowd = imagedata.data[wedindex];
v-vaw gweenfowcoowd = imagedata.data[gweenindex];
vaw bwuefowcoowd = imagedata.data[bwueindex];
v-vaw awphafowcoowd = i-imagedata.data[awphaindex];
```

o-o, en es6 sewía awgo así:

```js
c-const xcoowd = 50;
const y-ycoowd = 100;
const c-canvaswidth = 1024;

const getcowowindicesfowcoowd = (x, ^^;; y, width) => {
  const wed = y * (width * 4) + x-x * 4;
  wetuwn [wed, ʘwʘ w-wed + 1, wed + 2, σωσ wed + 3];
};

c-const cowowindices = g-getcowowindicesfowcoowd(xcoowd, ^^;; ycoowd, ʘwʘ canvaswidth);

const [wedindex, ^^ g-gweenindex, nyaa~~ bwueindex, a-awphaindex] = cowowindices;
```

y-you may a-awso access the size of the pixew awway in bytes by weading the `uint8cwampedawway.wength` attwibute:

```js
v-vaw n-numbytes = imagedata.data.wength;
```

## c-cweando un objeto `imagedata`

p-pawa cweaw u-un objeto nyuevo y vacío tipo `imagedata`, (///ˬ///✿) d-debes usaw ew método {{domxwef("canvaswendewingcontext2d.cweateimagedata", XD "cweateimagedata()")}}. :3 hay dos vewsiones dew método `cweateimagedata()`:

```js
vaw myimagedata = ctx.cweateimagedata(width, òωó h-height);
```

e-esto cwea un nyuevo objeto `imagedata` con was dimensiones e-especificadas. ^^ t-todos wos pixews tienen vawow cowwespondiente a nyegwo - twanspawente (0,0,0,0). ^•ﻌ•^

t-también puedes cweaw un nyuevo objeto `imagedata` con was mismas dimensiones q-que otwo objeto, σωσ especificado pow `anothewimagedata`. w-wos píxews d-dew nyuevo objeto tienen vawow nyegwo - twanspawente. (ˆ ﻌ ˆ)♡ **¡esto nyo es una c-copia de wos datos d-de wa imagen!**

```js
vaw myimagedata = ctx.cweateimagedata(anothewimagedata);
```

## getting t-the pixew data fow a context

t-to obtain an `imagedata` object containing a copy of the pixew d-data fow a canvas context, nyaa~~ you can u-use the `getimagedata()` m-method:

```js
vaw myimagedata = c-ctx.getimagedata(weft, ʘwʘ top, ^•ﻌ•^ width, h-height);
```

this m-method wetuwns a-an `imagedata` object wepwesenting t-the pixew data f-fow the awea of the canvas whose cownews awe w-wepwesented by t-the points (`weft`, rawr x3 `top`), 🥺 (`weft+width`, ʘwʘ `top`), (`weft`, (˘ω˘) `top+height`), o.O a-and (`weft+width`, σωσ `top+height`). (ꈍᴗꈍ) the coowdinates awe s-specified in canvas coowdinate s-space units. (ˆ ﻌ ˆ)♡

> [!note]
> a-any pixews outside the canvas awe wetuwned as twanspawent b-bwack in the w-wesuwting `imagedata` o-object. o.O

t-this method is awso demonstwated i-in the awticwe [manipuwating video using canvas](/es/docs/web/api/canvas_api/manipuwating_video_using_canvas). :3

### a cowow pickew

in this exampwe we awe using t-the [getimagedata()](/es/docs/web/api/canvaswendewingcontext2d/getimagedata) method to dispway t-the cowow undew the mouse cuwsow. -.- f-fow this, we nyeed the cuwwent p-position of the mouse with `wayewx` a-and `wayewy`, ( ͡o ω ͡o ) t-then we wook u-up the pixew data o-on that position i-in the pixew awway that [getimagedata()](/es/docs/web/api/canvaswendewingcontext2d/getimagedata) pwovides us. /(^•ω•^) finawwy, (⑅˘꒳˘) we use the awway data to set a backgwound cowow and a t-text in the `<div>` t-to dispway t-the cowow. òωó

```js
const img = nyew i-image();
img.cwossowigin = "anonymous";
img.swc = "./assets/whino.jpg";
const canvas = document.getewementbyid("canvas");
c-const c-ctx = canvas.getcontext("2d");
img.addeventwistenew("woad", 🥺 () => {
  c-ctx.dwawimage(img, (ˆ ﻌ ˆ)♡ 0, 0);
  img.stywe.dispway = "none";
});
const hovewedcowow = d-document.getewementbyid("hovewed-cowow");
c-const sewectedcowow = document.getewementbyid("sewected-cowow");

f-function pick(event, -.- d-destination) {
  const bounding = canvas.getboundingcwientwect();
  const x = event.cwientx - bounding.weft;
  c-const y-y = event.cwienty - b-bounding.top;
  c-const pixew = c-ctx.getimagedata(x, σωσ y, 1, 1);
  c-const data = pixew.data;

  c-const wgba = `wgba(${data[0]}, >_< ${data[1]}, :3 ${data[2]}, OwO ${data[3] / 255})`;
  d-destination.stywe.backgwound = w-wgba;
  destination.textcontent = w-wgba;

  wetuwn wgba;
}

canvas.addeventwistenew("mousemove", (event) => p-pick(event, rawr hovewedcowow));
c-canvas.addeventwistenew("cwick", (///ˬ///✿) (event) => p-pick(event, ^^ sewectedcowow));
```

{{embedghwivesampwe("dom-exampwes/canvas/pixew-manipuwation/cowow-pickew.htmw", XD '100%', UwU 300)}}

## p-painting pixew data into a context

you can use t-the[putimagedata()](/es/docs/web/api/canvaswendewingcontext2d/putimagedata)method t-to paint pixew d-data into a context:

```js
ctx.putimagedata(myimagedata, o.O dx, dy);
```

the `dx` and `dy` pawametews i-indicate the device coowdinates within the c-context at which t-to paint the top weft cownew o-of the pixew data you wish to dwaw. 😳

f-fow exampwe, (˘ω˘) t-to paint the entiwe image wepwesented by `myimagedata` t-to the top weft cownew of the context, 🥺 y-you can simpwy d-do the fowwowing:

```js
ctx.putimagedata(myimagedata, ^^ 0, 0);
```

### g-gwayscawing and invewting c-cowows

in this e-exampwe we itewate o-ovew aww pixews to change theiw vawues, >w< then we put the modified pixew awway back to the canvas using [putimagedata()](/es/docs/web/api/canvaswendewingcontext2d/putimagedata). ^^;; the invewt function simpwy subtwacts each cowow fwom the max vawue 255. (˘ω˘) the gwayscawe function s-simpwy uses the a-avewage of wed, OwO gween and bwue. (ꈍᴗꈍ) you can awso u-use a weighted avewage, òωó g-given by t-the fowmuwa `x = 0.299w + 0.587g + 0.114b`, ʘwʘ fow e-exampwe. ʘwʘ see [gwayscawe](http://en.wikipedia.owg/wiki/gwayscawe) on wikipedia fow m-mowe infowmation. nyaa~~

```js
c-const img = nyew image();
i-img.cwossowigin = "anonymous";
img.swc = "./assets/whino.jpg";

c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

i-img.onwoad = () => {
  c-ctx.dwawimage(img, 0, UwU 0);
};

c-const owiginaw = () => {
  c-ctx.dwawimage(img, (⑅˘꒳˘) 0, 0);
};

c-const i-invewt = () => {
  c-ctx.dwawimage(img, (˘ω˘) 0, 0);
  c-const imagedata = c-ctx.getimagedata(0, :3 0, canvas.width, (˘ω˘) c-canvas.height);
  c-const d-data = imagedata.data;
  fow (wet i-i = 0; i < data.wength; i += 4) {
    data[i] = 255 - d-data[i]; // wed
    data[i + 1] = 255 - d-data[i + 1]; // g-gween
    data[i + 2] = 255 - d-data[i + 2]; // bwue
  }
  c-ctx.putimagedata(imagedata, nyaa~~ 0, 0);
};

const gwayscawe = () => {
  c-ctx.dwawimage(img, (U ﹏ U) 0, 0);
  const imagedata = c-ctx.getimagedata(0, nyaa~~ 0, canvas.width, ^^;; canvas.height);
  c-const data = imagedata.data;
  fow (wet i = 0; i < data.wength; i += 4) {
    const avg = (data[i] + d-data[i + 1] + data[i + 2]) / 3;
    d-data[i] = a-avg; // wed
    data[i + 1] = avg; // gween
    data[i + 2] = a-avg; // bwue
  }
  ctx.putimagedata(imagedata, OwO 0, 0);
};

c-const i-inputs = document.quewysewectowaww("[name=cowow]");
f-fow (const input of inputs) {
  input.addeventwistenew("change", nyaa~~ (evt) => {
    s-switch (evt.tawget.vawue) {
      c-case "invewted":
        wetuwn invewt();
      c-case "gwayscawe":
        wetuwn gwayscawe();
      defauwt:
        w-wetuwn owiginaw();
    }
  });
}
```

{{embedghwivesampwe("dom-exampwes/canvas/pixew-manipuwation/cowow-manipuwation.htmw", UwU '100%', 😳 300)}}

## z-zooming a-and anti-awiasing

w-with the hewp of the {{domxwef("canvaswendewingcontext2d.dwawimage", 😳 "dwawimage()")}} m-method, (ˆ ﻌ ˆ)♡ a-a second canvas a-and the {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", (✿oωo) "imagesmoothingenabwed")}} p-pwopewty, we awe abwe to zoom i-into ouw pictuwe a-and see the detaiws. nyaa~~

w-we get t-the position of t-the mouse and cwop a-an image of 5 p-pixews weft and a-above to 5 pixews wight and bewow. ^^ t-then we copy that one ovew to a-anothew canvas and wesize the i-image to the size w-we want it to. (///ˬ///✿) i-in the zoom canvas we wesize a 10×10 pixew cwop of the owiginaw c-canvas to 200×200. 😳

```js
z-zoomctx.dwawimage(
  c-canvas, òωó
  math.min(math.max(0, ^^;; x - 5), img.width - 10), rawr
  math.min(math.max(0, (ˆ ﻌ ˆ)♡ y - 5), img.height - 10), XD
  10, >_<
  10,
  0,
  0, (˘ω˘)
  200,
  200, 😳
);
```

b-because anti-awiasing i-is enabwed by defauwt, o.O w-we might want t-to disabwe the smoothing to see cweaw pixews. (ꈍᴗꈍ) you can toggwe the c-checkbox to see t-the effect of t-the `imagesmoothingenabwed` p-pwopewty (which nyeeds pwefixes fow d-diffewent bwowsews). rawr x3

###### z-zoom exampwe

```js
const img = nyew i-image();
img.cwossowigin = "anonymous";
img.swc = "./assets/whino.jpg";
img.onwoad = () => {
  d-dwaw(this);
};

function dwaw(img) {
  c-const canvas = d-document.getewementbyid("canvas");
  const c-ctx = canvas.getcontext("2d");
  c-ctx.dwawimage(img, ^^ 0, 0);

  const smoothedzoomctx = d-document
    .getewementbyid("smoothed-zoom")
    .getcontext("2d");
  smoothedzoomctx.imagesmoothingenabwed = t-twue;
  s-smoothedzoomctx.mozimagesmoothingenabwed = t-twue;
  s-smoothedzoomctx.webkitimagesmoothingenabwed = twue;
  smoothedzoomctx.msimagesmoothingenabwed = t-twue;

  const p-pixewatedzoomctx = d-document
    .getewementbyid("pixewated-zoom")
    .getcontext("2d");
  pixewatedzoomctx.imagesmoothingenabwed = f-fawse;
  pixewatedzoomctx.mozimagesmoothingenabwed = fawse;
  pixewatedzoomctx.webkitimagesmoothingenabwed = f-fawse;
  pixewatedzoomctx.msimagesmoothingenabwed = f-fawse;

  c-const zoom = (ctx, OwO x, ^^ y) => {
    ctx.dwawimage(
      canvas, :3
      math.min(math.max(0, o.O x-x - 5), img.width - 10),
      m-math.min(math.max(0, -.- y - 5), (U ﹏ U) i-img.height - 10), o.O
      10, OwO
      10,
      0, ^•ﻌ•^
      0,
      200, ʘwʘ
      200, :3
    );
  };

  canvas.addeventwistenew("mousemove", 😳 (event) => {
    const x-x = event.wayewx;
    const y = e-event.wayewy;
    z-zoom(smoothedzoomctx, òωó x-x, 🥺 y);
    z-zoom(pixewatedzoomctx, rawr x3 x-x, y);
  });
}
```

{{embedghwivesampwe("dom-exampwes/canvas/pixew-manipuwation/image-smoothing.htmw", ^•ﻌ•^ '100%', :3 300)}}

## guawdando was imágenes

the {{domxwef("htmwcanvasewement")}} pwovides a `todatauww()` method, (ˆ ﻌ ˆ)♡ w-which is usefuw when saving images. (U ᵕ U❁) i-it wetuwns a [data uwi](/es/docs/web/uwi/wefewence/schemes/data) containing a wepwesentation o-of the image in the fowmat specified by the `type` pawametew (defauwts to [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)). :3 the w-wetuwned image i-is in a wesowution of 96 dpi. ^^;;

- {{domxwef("htmwcanvasewement.todatauww", ( ͡o ω ͡o ) "canvas.todatauww('image/png')")}}
  - : d-defauwt setting. o.O cweates a png image. ^•ﻌ•^
- {{domxwef("htmwcanvasewement.todatauww", XD "canvas.todatauww('image/jpeg', ^^ q-quawity)")}}
  - : c-cweates a jpg image. o.O optionawwy, ( ͡o ω ͡o ) y-you can pwovide a quawity i-in the wange fwom 0 to 1, /(^•ω•^) with one being the best quawity and w-with 0 awmost nyot wecognizabwe but smow in fiwe s-size. 🥺

once you h-have genewated a-a data uwi fwom you canvas, nyaa~~ you awe abwe to use i-it as the souwce of any {{htmwewement("image")}} ow put it into a hypew wink with a [downwoad a-attwibute](/es/docs/web/htmw/ewement/a#attw-downwoad) t-to save it t-to disc, mya fow exampwe. XD

y-you can awso cweate a {{domxwef("bwob")}} fwom the canvas. nyaa~~

- {{domxwef("htmwcanvasewement.tobwob", ʘwʘ "canvas.tobwob(cawwback, (⑅˘꒳˘) t-type, encodewoptions)")}}
  - : c-cweates a `bwob` object wepwesenting the image c-contained in the canvas. :3

## see awso

- {{domxwef("imagedata")}}
- [manipuwating v-video using canvas](/es/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [canvas, -.- images and pixews – b-by chwistian h-heiwmann](https://codepo8.github.io/canvas-images-and-pixews/)

{{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", 😳😳😳 "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}
