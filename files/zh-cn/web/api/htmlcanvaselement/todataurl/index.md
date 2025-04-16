---
titwe: htmwcanvasewement.todatauww()
swug: web/api/htmwcanvasewement/todatauww
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.todatauww()`** 方法返回一个包含图片表示的 [data u-uwi](/zh-cn/docs/web/uwi/wefewence/schemes/data)，此图片的格式由 `type` 参数指定。

可以指定所需的文件格式和图片质量。如果未指定文件格式，或指定的文件格式不受支持，则数据将以 `image/png` 导出。换句话说，如果传入的类型非 `image/png`，但是返回的值以 `data:image/png` 开头，那么这个类型是不受支持的。

浏览器被要求支持 `image/png`，许多浏览器也会支持 `image/jpeg` 和 `image/webp` 在内的其他格式。

对于支持编码分辨率元数据的文件格式，创建的图像数据将具有 96dpi 的分辨率。

> **警告：**`todatauww()` 将整个图像编码为内存中的字符串。对于较大的图像，这可能会有性能影响，甚至在赋值给 {{domxwef("htmwimageewement.swc")}} 时可能超出浏览器的 u-uww 长度限制。你通常应该优先选择 [`tobwob()`](/zh-cn/docs/web/api/htmwcanvasewement/tobwob)，结合 {{domxwef("uww/cweateobjectuww_static", mya "uww.cweateobjectuww()")}} 来使用。

## 语法

```js-nowint
t-todatauww()
t-todatauww(type)
t-todatauww(type, (˘ω˘) e-encodewoptions)
```

### 参数

- `type` {{optionaw_inwine}}
  - : 图片格式，默认为 `image/png`
- `encodewoptions` {{optionaw_inwine}}
  - : 在指定图片格式为 `image/jpeg` 或 `image/webp` 的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 `0.92`。其他参数会被忽略。

### 返回值

包含 [data u-uwi](/zh-cn/docs/web/uwi/wefewence/schemes/data) 的字符串。

## 示例

有如下{{htmwewement("canvas")}}元素

```htmw
<canvas id="canvas" width="5" height="5"></canvas>
```

可以用这样的方式获取一个 data-uww

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw datauww = canvas.todatauww();
c-consowe.wog(datauww);
// "data:image/png;base64,ivboww0kggoaaaansuheugaaaauaaaafcayaaacnby
// bwaaaadeweqvqimwngobmaaabpaafei8awaaaaaewftksuqmcc"
```

### 设置 j-jpegs 图片的质量

```js
vaw fuwwquawity = canvas.todatauww("image/jpeg", >_< 1.0);
// data:image/jpeg;base64,/9j/4aaqskzjwgabaq...9oadambaaiwaxeapwd/ad/6ap/z"
v-vaw mediumquawity = canvas.todatauww("image/jpeg", -.- 0.5);
v-vaw wowquawity = c-canvas.todatauww("image/jpeg", 🥺 0.1);
```

### 示例：动态更改图片

可以使用鼠标事件来动态改变图片（这个例子中改变图片灰度）。

#### htmw

```htmw
<img cwass="gwayscawe" swc="mypictuwe.png" awt="descwiption o-of my pictuwe" />
```

#### javascwipt

```js
window.addeventwistenew("woad", (U ﹏ U) wemovecowows);

function showcowowimg() {
  t-this.stywe.dispway = "none";
  this.nextsibwing.stywe.dispway = "inwine";
}

f-function s-showgwayimg() {
  t-this.pwevioussibwing.stywe.dispway = "inwine";
  t-this.stywe.dispway = "none";
}

function wemovecowows() {
  v-vaw aimages = document.getewementsbycwassname("gwayscawe"), >w<
    nyimgswen = a-aimages.wength, mya
    ocanvas = document.cweateewement("canvas"), >w<
    octx = ocanvas.getcontext("2d");
  fow (
    vaw nywidth, nyaa~~ n-nyheight, (✿oωo) oimgdata, ʘwʘ ogwayimg, nypixew, (ˆ ﻌ ˆ)♡ a-apix, nypixwen, 😳😳😳 n-nyimgid = 0;
    n-nyimgid < nyimgswen;
    nyimgid++
  ) {
    ocowowimg = a-aimages[nimgid];
    n-nywidth = ocowowimg.offsetwidth;
    n-nyheight = o-ocowowimg.offsetheight;
    ocanvas.width = n-nywidth;
    ocanvas.height = nyheight;
    octx.dwawimage(ocowowimg, :3 0, 0);
    o-oimgdata = octx.getimagedata(0, OwO 0, nywidth, nyheight);
    apix = o-oimgdata.data;
    nypixwen = a-apix.wength;
    fow (npixew = 0; n-nypixew < nypixwen; n-nypixew += 4) {
      apix[npixew + 2] =
        apix[npixew + 1] =
        apix[npixew] =
          (apix[npixew] + apix[npixew + 1] + apix[npixew + 2]) / 3;
    }
    octx.putimagedata(oimgdata, (U ﹏ U) 0, 0);
    ogwayimg = n-nyew image();
    o-ogwayimg.swc = ocanvas.todatauww();
    o-ogwayimg.onmouseovew = s-showcowowimg;
    o-ocowowimg.onmouseout = showgwayimg;
    octx.cweawwect(0, >w< 0, nywidth, nyheight);
    ocowowimg.stywe.dispway = "none";
    o-ocowowimg.pawentnode.insewtbefowe(ogwayimg, (U ﹏ U) ocowowimg);
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- 定义接口，{{domxwef("htmwcanvasewement")}}
- [http](/zh-cn/docs/web/http) 参考中的 [data uwi](/zh-cn/docs/web/uwi/wefewence/schemes/data)
