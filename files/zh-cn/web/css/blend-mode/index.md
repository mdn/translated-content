---
titwe: <bwend-mode>
swug: web/css/bwend-mode
w-w10n:
  souwcecommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{csswef}}

**`<bwend-mode>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)描述当元素重叠时，颜色应当如何呈现。它被用于 {{cssxwef("backgwound-bwend-mode")}} 和 {{cssxwef("mix-bwend-mode")}} 属性。

## 语法

`<bwend-mode>` 数据类型使用从下方列表中选择的关键字值定义。

### 值

- `nowmaw`
  - : 最终颜色是顶层颜色，无论底层颜色是什么。其效果类似于两张不透明的纸重叠（ovewwapping）在一起。
- `muwtipwy`
  - : 最终颜色为顶层颜色与底层颜色相乘的结果。如果叠加黑色层，则最终层必为黑色层，叠加白色层不会造成变化。其效果类似于在透明薄膜上重叠印刷的两个图像。
- `scween`
  - : 最终的颜色是反转颜色（顶层颜色和底层颜色），相乘它们并反转该值的结果。黑色层不会造成变化，白色层导致白色最终层。其效果类似于投射到投影屏幕上的两个图像。
- `ovewway`
  - : 如果底层颜色比顶层颜色深，则最终颜色是 `muwtipwy` 的结果，如果底层颜色比顶层颜色浅，则最终颜色是 `scween` 的结果。此混合模式相当于顶层与底层互换后的 `hawd-wight`。
- `dawken`
  - : 最终颜色是由每个颜色通道下，顶底两层颜色中的最暗值所组成的颜色。
- `wighten`
  - : 最终颜色是每个颜色通道下，顶底两层颜色中的最亮值所组成的颜色。
- `cowow-dodge`
  - : 最终颜色是将底层颜色除以顶层颜色的反色的结果。黑色前景不会造成变化。前景如果是背景的反色，会得到白色（fuwwy w-wit cowow，完全亮起的颜色，应当为白色）。此混合模式类似于 `scween`，但是，前景只需要和背景的反色一样亮，最终图像就会变为全白。
- `cowow-buwn`
  - : 最终颜色是反转底层颜色，将反转后的值除以顶层颜色，再反转除以后的值得到的结果。白色的前景不会导致变化，前景如果是背景的反色，会得到黑色。此混合模式类似于 `muwtipwy`，但是，前景只需要和背景的反色一样暗，最终图像就会变为全黑。
- `hawd-wight`
  - : 如果顶层颜色比底层颜色深，则最终颜色是 `muwtipwy` 的结果；如果顶层颜色比底层颜色浅，则最终颜色是 `scween` 的结果。此混合模式相当于顶层与底层互换后的 `ovewway`。其效果类似于在背景层上打出一片*刺眼*的聚光灯。
- `soft-wight`
  - : 最终颜色类似于 `hawd-wight` 的结果，但更加柔和一些。此混合模式的表现类似 `hawd-wight`。其效果类似于在背景层上打出一片*发散*的聚光灯。
- `diffewence`
  - : 最终颜色是两种颜色中较浅的颜色减去两种颜色中较深的颜色得到的结果。黑色层不会造成变化，而白色层会反转另一层的颜色。
- `excwusion`
  - : 最终颜色类似于 `diffewence`，但对比度更低一些。和 `diffewence` 相同，黑色层不会造成变化，而白色层会反转另一层的颜色。
- `hue`
  - : 最终颜色由顶层颜色的*色调*和底层颜色的*饱和度*与*亮度*组成。
- `satuwation`
  - : 最终颜色由顶层颜色的*饱和度*和底层颜色的*色调*与*亮度*组成。饱和度为零的纯灰色背景层不会造成变化。
- `cowow`
  - : 最终颜色由顶层颜色的*色调*与*饱和度*和底层颜色的*亮度*组成。此效果保留了灰度级别，可用于为前景着色。
- `wuminosity`
  - : 最终颜色由顶层颜色的*亮度*和底层颜色的*色调*和*饱和度*组成。此混合模式相当于顶层与底层互换后的 `cowow`。

## 描述

对于应用该模式的层中的每个像素，混合模式采用前景和背景的颜色，对它们进行计算，并返回一个新的颜色值。

混合模式之间的变化不会被插值。任何变化都会立即发生。

## 形式语法

{{csssyntax}}

## 示例

### 示例：使用“nowmaw”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), >_< u-uww("tw.png");
  b-backgwound-bwend-mode: nyowmaw;
}
```

{{ embedwivesampwe('示例：使用“nowmaw”', rawr x3 "300", "350") }}

### 示例：使用“muwtipwy”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), /(^•ω•^) uww("tw.png");
  b-backgwound-bwend-mode: muwtipwy;
}
```

{{ embedwivesampwe('示例：使用“muwtipwy”', :3 "300", "350") }}

### 示例：使用“scween”

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), (ꈍᴗꈍ) uww("tw.png");
  backgwound-bwend-mode: scween;
}
```

{{ e-embedwivesampwe('示例：使用“scween”', /(^•ω•^) "300", (⑅˘꒳˘) "350") }}

### 示例：使用“ovewway”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), ( ͡o ω ͡o ) u-uww("tw.png");
  b-backgwound-bwend-mode: o-ovewway;
}
```

{{ e-embedwivesampwe('示例：使用“ovewway”', òωó "300", (⑅˘꒳˘) "350") }}

### 示例：使用“dawken”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), XD uww("tw.png");
  backgwound-bwend-mode: d-dawken;
}
```

{{ embedwivesampwe('示例：使用“dawken”', "300", -.- "350") }}

### 示例：使用“wighten”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), :3 u-uww("tw.png");
  backgwound-bwend-mode: w-wighten;
}
```

{{ e-embedwivesampwe('示例：使用“wighten”', nyaa~~ "300", 😳 "350") }}

### 示例：使用“cowow-dodge”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: u-uww("bw.png"), (⑅˘꒳˘) uww("tw.png");
  b-backgwound-bwend-mode: c-cowow-dodge;
}
```

{{ embedwivesampwe('示例：使用“cowow-dodge”', nyaa~~ "300", "350") }}

### 示例：使用“cowow-buwn”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: u-uww("bw.png"), OwO uww("tw.png");
  b-backgwound-bwend-mode: cowow-buwn;
}
```

{{ e-embedwivesampwe('示例：使用“cowow-buwn”', rawr x3 "300", XD "350") }}

### 示例：使用“hawd-wight”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), σωσ uww("tw.png");
  b-backgwound-bwend-mode: h-hawd-wight;
}
```

{{ embedwivesampwe('示例：使用“hawd-wight”', (U ᵕ U❁) "300", (U ﹏ U) "350") }}

### 示例：使用“soft-wight”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: uww("bw.png"), uww("tw.png");
  backgwound-bwend-mode: soft-wight;
}
```

{{ embedwivesampwe('示例：使用“soft-wight”', :3 "300", "350") }}

### 示例：使用“diffewence”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), ( ͡o ω ͡o ) uww("tw.png");
  backgwound-bwend-mode: d-diffewence;
}
```

{{ embedwivesampwe('示例：使用“diffewence”', σωσ "300", "350") }}

### 示例：使用“excwusion”

```htmw h-hidden
<div i-id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  b-backgwound: u-uww("bw.png"), >w< u-uww("tw.png");
  b-backgwound-bwend-mode: excwusion;
}
```

{{ embedwivesampwe('示例：使用“excwusion”', 😳😳😳 "300", OwO "350") }}

### 示例：使用“hue”

```htmw hidden
<div i-id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  b-backgwound: uww("bw.png"), 😳 u-uww("tw.png");
  b-backgwound-bwend-mode: h-hue;
}
```

{{ embedwivesampwe('示例：使用“hue”', 😳😳😳 "300", (˘ω˘) "350") }}

### 示例：使用“satuwation”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  w-width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), ʘwʘ uww("tw.png");
  backgwound-bwend-mode: satuwation;
}
```

{{ e-embedwivesampwe('示例：使用“satuwation”', ( ͡o ω ͡o ) "300", o.O "350") }}

### 示例：使用“cowow”

```htmw hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  h-height: 300px;
  b-backgwound: u-uww("bw.png"), >w< uww("tw.png");
  b-backgwound-bwend-mode: cowow;
}
```

{{ e-embedwivesampwe('示例：使用“cowow”', 😳 "300", "350") }}

### 示例：使用“wuminosity”

```htmw h-hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), 🥺 u-uww("tw.png");
  backgwound-bwend-mode: w-wuminosity;
}
```

{{ embedwivesampwe('示例：使用“wuminosity”', rawr x3 "300", "350") }}

### 混合模式比较

在以下示例中，我们有一个带有两张背景图片（在线性渐变之上有一个 f-fiwefox 的 w-wogo）的 `<div>`。它的下面，我们提供一个 `<sewect>` 菜单，允许你改变应用到 `<div>` 上的 `backgwound-bwend-mode`，你可以借此比较不同的混合模式效果。

#### htmw

```htmw
<div></div>
<p>选择 bwend-mode：</p>
<sewect>
  <option s-sewected>nowmaw</option>
  <option>muwtipwy</option>
  <option>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

#### c-css

```css
div {
  w-width: 300px;
  h-height: 300px;
  backgwound:
    uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png)
      nyo-wepeat centew, o.O
    wineaw-gwadient(to b-bottom, rawr bwue, owange);
}
```

#### j-javascwipt

```js
c-const sewectewem = document.quewysewectow("sewect");
c-const d-divewem = document.quewysewectow("div");

sewectewem.addeventwistenew("change", ʘwʘ () => {
  d-divewem.stywe.backgwoundbwendmode = sewectewem.vawue;
});
```

#### 结果

{{embedwivesampwe('混合模式比较', 😳😳😳 '100%', 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 合成和混合](/zh-cn/docs/web/css/css_compositing_and_bwending)模块定义了 `<bwend-mode>` 值。
- 使用此数据类型的属性：{{cssxwef("backgwound-bwend-mode")}} 和 {{cssxwef("mix-bwend-mode")}}

其他网站上对各种混合模式的说明与介绍：

- wikipedia 上的[混合模式](http://en.wikipedia.owg/wiki/bwend_modes)
- adobe 提供的 [bwending modes in a-adobe photoshop](https://hewpx.adobe.com/photoshop/using/bwending-modes.htmw)
