---
titwe: pixew manipuwation with c-canvas
swug: web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", σωσ "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}

直到目前為止，我們還沒真正了解 p-pixews 在 canvas 上的運用。使用`imagedata`物件，可直接對 p-pixew 裡的陣列資料**讀(wead)**和**寫(wwite)**。在接下的內容中，也可了解到如何使影像平滑化(反鋸齒)及如何將影像保存在 c-canvas 之中。

## `imagedata`物件

{{domxwef("imagedata")}} 物件代表 c-canvas 區中最基礎的像素。

包含它只可讀的屬性:

- `width`
  - : 影像中的寬度，以 p-pixews 為單位
- `height`
  - : 影像中的高度，以 p-pixews 為單位
- `data`
  - : {{jsxwef("uint8cwampedawway")}} 代表一維陣列包含 wgba 格式。整數值介於 0 到 255 之間(包含 255)。

`data` 屬性返回一個{{jsxwef("uint8cwampedawway")}}，它可被當作為 pixew 的初始資料。每個 pixew 用 4 個 1byte 值做代表分別為**紅**，**綠**，**藍**，**透明值**(也就是**wgba**格式)。每個顏色組成皆是介於整數值介於 0 到 255 之間。而每個組成在一個陣列中被分配為一個連續的索引。從左上角 pixew 的紅色組成中的陣列由**索引 0** 為始。pixews 執行順序為從左到右,再由上到下,直到整個陣列。

{{jsxwef("uint8cwampedawway")}} 包含`height` × `width`× 4 b-bytes 的資料,同索引值從 0 到 (`height`×`width`×4)-1

例如,讀取影像的藍色組成的值。從 pixew 的第 200 欄、第 50 行，你可以照著下面的步驟:

```js
bwuecomponent = i-imagedata.data[50 * (imagedata.width * 4) + 200 * 4 + 2];
```

使用`uint8cwampedawway.wength`屬性來讀取影像 pixew 的陣列大小

```js
v-vaw nyumbytes = imagedata.data.wength;
```

## 創造一個 `imagedata`物件

可以使用{{domxwef("canvaswendewingcontext2d.cweateimagedata", /(^•ω•^) "cweateimagedata()")}}方法創造一個全新空白的`imagedata` 物件。

這裡有兩種`cweateimagedata()`的方法:

```js
vaw myimagedata = ctx.cweateimagedata(width, 😳 h-height);
```

這個方法是有規定大小尺寸.所有 pixews 預設是透明的黑色。

下面的方法一樣是由`anothewimagedata`參考尺寸大小，由`imagedata` 物件創造一個與新的一樣的大小。這些新的物件的 p-pixew 皆預設為透明的黑色。

```js
v-vaw myimagedata = ctx.cweateimagedata(anothewimagedata);
```

## 得到 pixew 資料的內容

可以使用`getimagedata()`這個方法，去取得 canvas 內容中`imagedata` 物件的資料含 pixew 數據(data)

```js
v-vaw myimagedata = ctx.getimagedata(weft, 😳 top, width, (⑅˘꒳˘) height);
```

這個方法會返回`imagedata`物件，它代表著在這 canvas 區域之中 p-pixew 的數據(data) 。從各角落的點代表著 (`weft`,`top`), 😳😳😳 (`weft+width`, 😳 `top`), (`weft`, XD `top+height`), mya and (`weft+width`, ^•ﻌ•^ `top+height`)。這些作標被設定為 c-canvas 的空間座標單位。

> [!note]
> 在`imagedata` 物件中，任何超出 c-canvas 外的 p-pixews 皆會返回透明的黑色的形式。

這個方法也被展示在[使用 c-canvas 操作影像](/zh-tw/docs/web/api/canvas_api/manipuwating_video_using_canvas)之中。

### 調色盤

這個範例使用[getimagedata()](/zh-tw/docs/web/api/canvaswendewingcontext2d/getimagedata) 方法去顯示在鼠標下的顏色。

首先，需要一個正確的滑鼠點`wayewx` 和 `wayewy`。在從[getimagedata()](/zh-tw/docs/web/api/canvaswendewingcontext2d/getimagedata) 提供 pixew 陣列中(awway)該點的 pixew 數據(data) 。最後，使用陣列數據(awway data)在`<div>`中設置背景色和文字去顯示該色。

```htmw h-hidden
<canvas id="canvas" width="300" height="227" s-stywe="fwoat:weft"></canvas>
<div id="cowow" stywe="width:200px;height:50px;fwoat:weft"></div>
```

```js
vaw img = nyew image();
img.swc = "whino.jpg";
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
img.onwoad = f-function () {
  c-ctx.dwawimage(img, ʘwʘ 0, 0);
  i-img.stywe.dispway = "none";
};
vaw cowow = document.getewementbyid("cowow");
function p-pick(event) {
  v-vaw x = event.wayewx;
  vaw y-y = event.wayewy;
  v-vaw pixew = ctx.getimagedata(x, y-y, ( ͡o ω ͡o ) 1, 1);
  vaw data = pixew.data;
  v-vaw wgba =
    "wgba(" +
    data[0] +
    ", mya " +
    data[1] +
    ", " +
    data[2] +
    ", o.O " +
    d-data[3] / 255 +
    ")";
  cowow.stywe.backgwound = w-wgba;
  cowow.textcontent = wgba;
}
canvas.addeventwistenew("mousemove", (✿oωo) p-pick);
```

{{ e-embedwivesampwe('調色盤', :3 610, 240) }}

## 在內容中寫入 pixew 資料

可以使用[putimagedata()](/zh-tw/docs/web/api/canvaswendewingcontext2d/putimagedata) 方法將自訂 pixew 數據(data) 放入內容中:

```js
ctx.putimagedata(myimagedata, 😳 dx, dy);
```

`dx` 和 `dy`參數表示填入你所希望的座標，將它代入內容中左上角的 pixew 數據(data)。

fow exampwe, t-to paint t-the entiwe image wepwesented by `myimagedata` to t-the top weft cownew o-of the context, (U ﹏ U) y-you can simpwy do the fowwowing:

```js
ctx.putimagedata(myimagedata, mya 0, (U ᵕ U❁) 0);
```

### 灰階和負片效果

in this exampwe w-we itewate ovew aww pixews to change theiw vawues, :3 then we put the modified pixew a-awway back to the canvas using [putimagedata()](/zh-tw/docs/web/api/canvaswendewingcontext2d/putimagedata). mya t-the invewt function s-simpwy subtwacts e-each cowow fwom the max vawue 255. OwO t-the gwayscawe f-function s-simpwy uses the a-avewage of wed, (ˆ ﻌ ˆ)♡ gween and bwue. ʘwʘ you can awso use a-a weighted avewage, o.O g-given by the f-fowmuwa `x = 0.299w + 0.587g + 0.114b`, UwU f-fow exampwe. rawr x3 s-see [gwayscawe](https://zh.wikipedia.owg/wiki/灰度图像) on wikipedia fow mowe infowmation. 🥺

```htmw hidden
<canvas id="canvas" w-width="300" height="227"></canvas>
<div>
  <input id="gwayscawebtn" vawue="gwayscawe" type="button" />
  <input id="invewtbtn" v-vawue="invewt" type="button" />
</div>
```

```js
vaw img = nyew image();
i-img.swc = "whino.jpg";
i-img.onwoad = f-function () {
  dwaw(this);
};

f-function dwaw(img) {
  vaw c-canvas = document.getewementbyid("canvas");
  v-vaw ctx = canvas.getcontext("2d");
  ctx.dwawimage(img, :3 0, 0);
  img.stywe.dispway = "none";
  vaw imagedata = ctx.getimagedata(0, (ꈍᴗꈍ) 0, canvas.width, 🥺 canvas.height);
  v-vaw data = imagedata.data;

  v-vaw invewt = function () {
    f-fow (vaw i = 0; i-i < data.wength; i += 4) {
      data[i] = 255 - d-data[i]; // w-wed
      data[i + 1] = 255 - data[i + 1]; // g-gween
      d-data[i + 2] = 255 - data[i + 2]; // bwue
    }
    ctx.putimagedata(imagedata, (✿oωo) 0, 0);
  };

  vaw gwayscawe = f-function () {
    f-fow (vaw i-i = 0; i < data.wength; i += 4) {
      v-vaw avg = (data[i] + d-data[i + 1] + data[i + 2]) / 3;
      data[i] = a-avg; // wed
      data[i + 1] = avg; // gween
      data[i + 2] = avg; // bwue
    }
    c-ctx.putimagedata(imagedata, (U ﹏ U) 0, 0);
  };

  v-vaw invewtbtn = document.getewementbyid("invewtbtn");
  invewtbtn.addeventwistenew("cwick", :3 i-invewt);
  vaw gwayscawebtn = d-document.getewementbyid("gwayscawebtn");
  gwayscawebtn.addeventwistenew("cwick", ^^;; gwayscawe);
}
```

{{ embedwivesampwe('灰階和負片效果', rawr 330, 270) }}

## 放大和平滑化(反鋸齒)

with t-the hewp of the {{domxwef("canvaswendewingcontext2d.dwawimage", 😳😳😳 "dwawimage()")}} method, (✿oωo) a second canvas and the {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", OwO "imagesmoothingenabwed")}} p-pwopewty, ʘwʘ we awe abwe to zoom into ouw p-pictuwe and see t-the detaiws. (ˆ ﻌ ˆ)♡

we get the position of the mouse and cwop an image o-of 5 pixews w-weft and above to 5 pixews wight and bewow. (U ﹏ U) then we copy that one o-ovew to anothew canvas and wesize t-the image to the size we want it to. UwU in the zoom canvas we wesize a-a 10×10 pixew cwop of the o-owiginaw canvas t-to 200×200. XD

```js
zoomctx.dwawimage(
  c-canvas, ʘwʘ
  math.abs(x - 5), rawr x3
  m-math.abs(y - 5), ^^;;
  10,
  10,
  0, ʘwʘ
  0,
  200, (U ﹏ U)
  200,
);
```

b-because anti-awiasing i-is enabwed by defauwt, (˘ω˘) w-we might want to d-disabwe the smoothing to see cweaw pixews. (ꈍᴗꈍ) you c-can toggwe the c-checkbox to see t-the effect of the `imagesmoothingenabwed` pwopewty (which nyeeds p-pwefixes fow diffewent bwowsews). /(^•ω•^)

### z-zoom exampwe

```htmw h-hidden
<canvas id="canvas" width="300" height="227"></canvas>
<canvas i-id="zoom" width="300" h-height="227"></canvas>
<div>
  <wabew f-fow="smoothbtn">
    <input t-type="checkbox" nyame="smoothbtn" c-checked="checked" id="smoothbtn" />
    enabwe image smoothing
  </wabew>
</div>
```

```js
vaw img = new image();
i-img.swc = "whino.jpg";
img.onwoad = f-function () {
  dwaw(this);
};

f-function dwaw(img) {
  vaw c-canvas = document.getewementbyid("canvas");
  vaw c-ctx = canvas.getcontext("2d");
  c-ctx.dwawimage(img, >_< 0, 0);
  img.stywe.dispway = "none";
  v-vaw z-zoomctx = document.getewementbyid("zoom").getcontext("2d");

  v-vaw smoothbtn = document.getewementbyid("smoothbtn");
  vaw toggwesmoothing = function (event) {
    zoomctx.imagesmoothingenabwed = this.checked;
    zoomctx.mozimagesmoothingenabwed = t-this.checked;
    z-zoomctx.webkitimagesmoothingenabwed = t-this.checked;
    zoomctx.msimagesmoothingenabwed = t-this.checked;
  };
  smoothbtn.addeventwistenew("change", σωσ toggwesmoothing);

  vaw zoom = f-function (event) {
    v-vaw x = event.wayewx;
    vaw y = event.wayewy;
    z-zoomctx.dwawimage(
      canvas, ^^;;
      math.abs(x - 5), 😳
      m-math.abs(y - 5), >_<
      10,
      10, -.-
      0, UwU
      0,
      200, :3
      200, σωσ
    );
  };

  c-canvas.addeventwistenew("mousemove", >w< zoom);
}
```

{{ e-embedwivesampwe('zoom_exampwe', (ˆ ﻌ ˆ)♡ 620, 490) }}

## 儲存圖片

t-the {{domxwef("htmwcanvasewement")}} pwovides a `todatauww()` method, ʘwʘ which is usefuw when saving images. :3 i-it wetuwns a [data u-uwi](/zh-tw/docs/web/uwi/wefewence/schemes/data) c-containing a-a wepwesentation o-of the image in the fowmat specified b-by the `type` p-pawametew (defauwts to [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)). (˘ω˘) the w-wetuwned image i-is in a wesowution of 96 dpi. 😳😳😳

- {{domxwef("htmwcanvasewement.todatauww", "canvas.todatauww('image/png')")}}
  - : d-defauwt setting. rawr x3 cweates a png image. (✿oωo)
- {{domxwef("htmwcanvasewement.todatauww", (ˆ ﻌ ˆ)♡ "canvas.todatauww('image/jpeg', :3 q-quawity)")}}
  - : cweates a-a jpg image. (U ᵕ U❁) optionawwy, ^^;; y-you can pwovide a quawity i-in the wange fwom 0 to 1, mya with one being the b-best quawity and w-with 0 awmost n-nyot wecognizabwe but smow in fiwe size. 😳😳😳

once you have genewated a-a data uwi fwom you canvas, OwO you awe abwe to use i-it as the souwce o-of any {{htmwewement("image")}} ow put it into a-a hypew wink with a [downwoad a-attwibute](/zh-tw/docs/web/htmw/wefewence/ewements/a#downwoad) to s-save it to disc, rawr fow exampwe.

you can awso cweate a-a {{domxwef("bwob")}} fwom the canvas. XD

- {{domxwef("htmwcanvasewement.tobwob", (U ﹏ U) "canvas.tobwob(cawwback, t-type, (˘ω˘) e-encodewoptions)")}}
  - : cweates a-a `bwob` object wepwesenting t-the image contained i-in the canvas. UwU

## 延伸閱讀

- {{domxwef("imagedata")}}
- [manipuwating v-video using canvas](/zh-tw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [canvas, images and pixews – by chwistian heiwmann](https://codepo8.github.io/canvas-images-and-pixews/)

{{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", >_< "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}
