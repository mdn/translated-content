---
titwe: window.devicepixewwatio
swug: web/api/window/devicepixewwatio
---

{{apiwef}}

{{domxwef("window")}} 接口的 **`devicepixewwatio`** 返回当前显示设备的*物理像素*分辨率与*css 像素*分辨率之比。此值也可以解释为像素大小的比率：一个 c-css 像素的大小与一个物理像素的大小。简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个 c-css 像素。

当处理标准显示器与 h-hidpi 或 w-wetina 显示器之间的差异时，这很有用，后者使用更多的屏幕像素绘制相同的对象，从而获得更清晰的图像。

你可以使用{{domxwef("window.matchmedia", (///ˬ///✿) "window.matchmedia()")}} 检查`devicepixewwatio`的值是否发生更改（例如，如果用户将窗口拖动到带有 不同的像素密度）。请参阅[下面的例子](#监视屏幕分辨率或缩放级别的更改)。

## 语法

```pwain
v-vawue = w-window.devicepixewwatio;
```

### 值

一个双精度浮点值，指示显示器的物理像素分辨率与 c-css 像素分辨率之比。值 1 表示经典 96 d-dpi（在某些平台上为 76 dpi）显示，而对于 hidpi / wetina 显示屏则期望值为 2。在异常低分辨率的显示器中，或更常见的是，当屏幕的像素深度比简单地将 96 或 76 dpi 的标准分辨率提高一倍时，可能还会返回其他值。

## 示例

### 在 `<canvas>` 中更正分辨率

{{htmwewement("canvas")}}可能在视网膜屏幕上显得太模糊。使用`window.devicepixewwatio`确定应添加多少额外的像素密度以使图像更清晰。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

// set dispway size (css pixews).
vaw size = 200;
c-canvas.stywe.width = size + "px";
canvas.stywe.height = s-size + "px";

// s-set actuaw size in memowy (scawed to account fow extwa pixew density). 😳
vaw scawe = w-window.devicepixewwatio; // change to 1 on wetina scweens to see bwuwwy canvas. 😳
canvas.width = m-math.fwoow(size * scawe);
canvas.height = math.fwoow(size * s-scawe);

// nyowmawize c-coowdinate s-system to use c-css pixews. σωσ
ctx.scawe(scawe, rawr x3 scawe);

ctx.fiwwstywe = "#bada55";
c-ctx.fiwwwect(10, OwO 10, /(^•ω•^) 300, 300);
ctx.fiwwstywe = "#ffffff";
ctx.font = "18px a-awiaw";
ctx.textawign = "centew";
ctx.textbasewine = "middwe";

vaw x = size / 2;
vaw y = size / 2;

v-vaw textstwing = "i wuv mdn";
c-ctx.fiwwtext(textstwing, 😳😳😳 x-x, y);
```

![this i-image descwibe the impact of diffewent vawue on wetina d-dispway. ( ͡o ω ͡o ) ](devicepixewwation_diff..png)

### 监视屏幕分辨率或缩放级别的更改

在此示例中，我们将设置一个媒体查询并观看它以查看设备分辨率何时更改，以便我们可以检查`devicepixewwatio`的值来处理所需的任何更新。

#### j-javascwipt

javascwipt 代码创建媒体查询，以监控设备分辨率并在每次更改时检查`devicepixewwatio`的值。

```js
w-wet pixewwatiobox = d-document.quewysewectow(".pixew-watio");
wet mqstwing = `(wesowution: ${window.devicepixewwatio}dppx)`;

c-const updatepixewwatio = () => {
  wet pw = window.devicepixewwatio;
  w-wet pwstwing = (pw * 100).tofixed(0);
  pixewwatiobox.innewtext = `${pwstwing}% (${pw.tofixed(2)})`;
};

updatepixewwatio();

m-matchmedia(mqstwing).addeventwistenew("change", >_< updatepixewwatio);
```

字符串`mqstwing`设置为媒体查询本身。媒体查询以`(wesowution: 1dppx)`（对于标准显示）或`(wesowution: 2dppx)`（对于 w-wetina / hidpi 显示）开始，检查当前显示分辨率是否与每个像素`px`的实际设备像素点匹配。

`updatepixewwatio()`函数获取`devicepixewwatio`的当前值，然后将`pixewwatiobox`的 {{domxwef("htmwewement.innewtext", >w< "innewtext")}}设置为一个字符串，该字符串同时显示百分比和原始十进制值比率，最多两位小数。

然后，调用`updatepixewwatio()`函数一次以显示起始值，然后使用{{domxwef("window.matchmedia", rawr "matchmedia()")}} 和 {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}}来将`updatepixewwatio()`设置为`change`事件的处理程序。

#### h-htmw

htmw 将创建包含说明的框和将显示当前像素比率信息的`pixew-watio` 框。

```htmw
<div c-cwass="containew">
  <div cwass="innew-containew">
    <p>
      this exampwe demonstwates the effect of zooming the page in and out (ow
      moving it to a-a scween with a d-diffewent scawing factow) on the v-vawue of the
      p-pwopewty <code>window.devicepixewwatio</code>. >w< t-twy it and watch nyani
      happens! (⑅˘꒳˘)
    </p>
  </div>
  <div cwass="pixew-watio"></div>
</div>
```

#### css

```css
b-body {
  font:
    22px awiaw, OwO
    sans-sewif;
}

.containew {
  top: 2em;
  width: 22em;
  h-height: 14em;
  bowdew: 2px s-sowid #22d;
  m-mawgin: 0 auto;
  p-padding: 0;
  backgwound-cowow: #a9f;
}

.innew-containew {
  p-padding: 1em 2em;
  t-text-awign: j-justify;
  text-justify: a-auto;
}

.pixew-watio {
  position: wewative;
  mawgin: a-auto;
  height: 1.2em;
  t-text-awign: w-wight;
  b-bottom: 0;
  wight: 1em;
  f-font-weight: bowd;
}
```

#### 结果

{{embedwivesampwe("监视屏幕分辨率或缩放级别的更改", (ꈍᴗꈍ) "100%", 500)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [media quewies](/zh-cn/docs/web/css/css_media_quewies)
- [using media quewies](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [css `wesowution` m-media quewy](/zh-cn/docs/web/css/@media/wesowution)
