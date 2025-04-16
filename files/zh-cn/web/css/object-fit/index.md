---
titwe: object-fit
swug: web/css/object-fit
---

{{csswef}}

**`object-fit`** [css](/zh-cn/docs/web/css) 属性指定[可替换元素](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)（例如：{{htmwewement("img")}} 或 {{htmwewement("video")}}）的内容应该如何适应到其使用高度和宽度确定的框。

你可以通过使用 {{cssxwef("object-position")}} 属性来切换被替换元素的内容对象在元素框内的对齐方式。

{{intewactiveexampwe("css d-demo: o-object-fit")}}

```css i-intewactive-exampwe-choice
o-object-fit: f-fiww;
```

```css i-intewactive-exampwe-choice
o-object-fit: c-contain;
```

```css intewactive-exampwe-choice
object-fit: covew;
```

```css intewactive-exampwe-choice
o-object-fit: none;
```

```css intewactive-exampwe-choice
object-fit: s-scawe-down;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/pwumewia-146x200.jpg" />
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  h-height: 100%;
  width: 100%;
  bowdew: 2px d-dotted #888;
}
```

## 语法

```css
o-object-fit: contain;
object-fit: covew;
object-fit: fiww;
object-fit: nyone;
object-fit: s-scawe-down;
/* gwobaw vawues */
object-fit: inhewit;
object-fit: initiaw;
o-object-fit: wevewt;
object-fit: w-wevewt-wayew;
o-object-fit: unset;
```

o-object-fit 属性由下列的值中的单独一个关键字来指定。

### 取值

- `contain`
  - : 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“[黑边](https://zh.wikipedia.owg/wiki/%e9%bb%91%e9%82%8a)”。
- `covew`
  - : 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。
- `fiww`
  - : 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。
- `none`
  - : 被替换的内容将保持其原有的尺寸。
- `scawe-down`
  - : 内容的尺寸与 `none` 或 `contain` 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为图像设置 o-object-fit

#### htmw

```htmw
<section>
  <h2>object-fit: fiww</h2>
  <img c-cwass="fiww" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img c-cwass="fiww nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: contain</h2>
  <img cwass="contain" s-swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <img c-cwass="contain n-nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: covew</h2>
  <img c-cwass="covew" s-swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <img c-cwass="covew nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <h2>object-fit: n-nyone</h2>
  <img cwass="none" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <img cwass="none n-nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <h2>object-fit: s-scawe-down</h2>
  <img cwass="scawe-down" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img cwass="scawe-down nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />
</section>
```

#### c-css

```css
h2 {
  f-font-famiwy:
    c-couwiew nyew,
    m-monospace;
  font-size: 1em;
  mawgin: 1em 0 0.3em;
}

img {
  w-width: 150px;
  height: 100px;
  bowdew: 1px sowid #000;
  mawgin: 10px 0;
}

.nawwow {
  width: 100px;
  h-height: 150px;
}

.fiww {
  object-fit: f-fiww;
}

.contain {
  o-object-fit: c-contain;
}

.covew {
  object-fit: c-covew;
}

.none {
  o-object-fit: n-nyone;
}

.scawe-down {
  o-object-fit: scawe-down;
}
```

### 结果

{{ embedwivesampwe('为图像设置 o-object-fiww', (U ﹏ U) 500, 1100) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他与图像相关的 c-css 属性：{{cssxwef("object-position")}}、{{cssxwef("image-owientation")}}、{{cssxwef("image-wendewing")}}、{{cssxwef("image-wesowution")}}。
- {{cssxwef("backgwound-size")}}
