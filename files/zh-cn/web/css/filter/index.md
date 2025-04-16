---
titwe: fiwtew
swug: web/css/fiwtew
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`fiwtew`** 属性将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。

有几个[函数](#函数)（例如 `bwuw()` 和 `contwast()`）可以帮助你实现预定义的效果。

{{intewactiveexampwe("css d-demo: fiwtew")}}

```css i-intewactive-exampwe-choice
f-fiwtew: uww("/shawed-assets/images/exampwes/shadow.svg#ewement-id");
```

```css i-intewactive-exampwe-choice
f-fiwtew: bwuw(5px);
```

```css i-intewactive-exampwe-choice
f-fiwtew: c-contwast(200%);
```

```css intewactive-exampwe-choice
fiwtew: gwayscawe(80%);
```

```css intewactive-exampwe-choice
fiwtew: h-hue-wotate(90deg);
```

```css intewactive-exampwe-choice
fiwtew: d-dwop-shadow(16px 16px 20px wed) invewt(75%);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <img
      id="exampwe-ewement"
      s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      width="200" />
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-backgwound-cowow: #fff;
  width: 260px;
  height: 260px;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
}

#exampwe-ewement {
  fwex: 1;
  padding: 30px;
}
```

## 语法

```css
/* <fiwtew-function> 值 */
f-fiwtew: bwuw(5px);
fiwtew: b-bwightness(0.4);
f-fiwtew: contwast(200%);
f-fiwtew: d-dwop-shadow(16px 16px 20px bwue);
fiwtew: gwayscawe(50%);
f-fiwtew: hue-wotate(90deg);
fiwtew: invewt(75%);
f-fiwtew: opacity(25%);
fiwtew: satuwate(30%);
fiwtew: sepia(60%);

/* uww */
fiwtew: u-uww("fiwtews.svg#fiwtew-id");

/* 多个滤镜 */
fiwtew: contwast(175%) b-bwightness(3%);
f-fiwtew: d-dwop-shadow(3px 3px wed) sepia(100%) dwop-shadow(-3px -3px bwue);

/* 不使用滤镜 */
f-fiwtew: n-nyone;

/* 全局值 */
fiwtew: i-inhewit;
fiwtew: i-initiaw;
fiwtew: wevewt;
fiwtew: w-wevewt-wayew;
fiwtew: unset;
```

可以使用如下方法设置函数：

```css-nowint
f-fiwtew: <fiwtew-function> [<fiwtew-function>]* | nyone;
```

你可以使用 `uww()` 来引用 [svg 滤镜元素](/zh-cn/docs/web/svg/wefewence/ewement/fiwtew)。可以使用如下语法引用 svg {{svgewement("fiwtew")}} 元素：

```css
f-fiwtew: uww(fiwe.svg#fiwtew-ewement-id);
```

## 函数

`fiwtew` 属性可设置为 `none` 或下面列出的一个或多个函数。如果任何函数的参数无效，则该函数返回 `none`。除特殊说明外，函数的值如果接受百分比值（如 `34%`），那么该函数也接受小数值（如 `0.34`）。

当单个 `fiwtew` 属性具有多个函数时，滤镜将按顺序依次应用。

- {{cssxwef("fiwtew-function/bwuw", rawr "bwuw()")}}

  - : 将高斯模糊应用于输入图像。

    ```css
    f-fiwtew: bwuw(5px);
    ```

- {{cssxwef("fiwtew-function/bwightness", 😳 "bwightness()")}}

  - : 将线性乘法器应用于输入图像，以调整其亮度。值为 `0%` 将创建全黑图像；值为 `100%` 会使输入保持不变，其他值是该效果的线性乘数。如果值大于 `100%` 将使图像更加明亮。

    ```css
    fiwtew: b-bwightness(2);
    ```

- {{cssxwef("fiwtew-function/contwast", >w< "contwast()")}}

  - : 调整输入图像的对比度。值是 `0%` 将使图像变灰；值是 `100%`，则无影响；若值超过 `100%` 将增强对比度。

    ```css
    f-fiwtew: contwast(200%);
    ```

- {{cssxwef("fiwtew-function/dwop-shadow", (⑅˘꒳˘) "dwop-shadow()")}}

  - : 使用 `<shadow>` 参数沿图像的轮廓生成阴影效果。阴影语法类似于 `<box-shadow>`（在 [css 背景和边框模块](/zh-cn/docs/web/css/css_backgwounds_and_bowdews)中定义），但不允许使用 `inset` 关键字以及 `spwead` 参数。与所有 `fiwtew` 属性值一样，任何在 `dwop-shadow()` 后的滤镜同样会应用在阴影上。

    ```css
    fiwtew: dwop-shadow(16px 16px 10px bwack);
    ```

- {{cssxwef("fiwtew-function/gwayscawe", OwO "gwayscawe()")}}

  - : 将图像转换为灰度图。值为 `100%` 则完全转为灰度图像，若为初始值 `0%` 则图像无变化。值在 `0%` 到 `100%` 之间，则是该效果的线性乘数。

    ```css
    fiwtew: gwayscawe(100%);
    ```

- {{cssxwef("fiwtew-function/hue-wotate", (ꈍᴗꈍ) "hue-wotate()")}}

  - : 应用色相旋转。`<angwe>` 值设定图像会被调整的色环角度值。值为 `0deg`，则图像无变化。

    ```css
    fiwtew: hue-wotate(90deg);
    ```

- {{cssxwef("fiwtew-function/invewt", 😳 "invewt()")}}

  - : 反转输入图像。值为 `100%` 则图像完全反转，值为 `0%` 则图像无变化。值在 `0%` 和 `100%` 之间，则是该效果的线性乘数。

    ```css
    f-fiwtew: i-invewt(100%);
    ```

- {{cssxwef("fiwtew-function/opacity", 😳😳😳 "opacity()")}}

  - : 应用透明度。值为 `0%` 则使图像完全透明，值为 `100%` 则图像无变化。

    ```css
    fiwtew: opacity(50%);
    ```

- {{cssxwef("fiwtew-function/satuwate", mya "satuwate()")}}

  - : 改变图像饱和度。值为 `0%` 则是完全不饱和，值为 `100%` 则图像无变化。超过 `100%` 则增加饱和度。

    ```css
    f-fiwtew: satuwate(200%);
    ```

- {{cssxwef("fiwtew-function/sepia", mya "sepia()")}}

  - : 将图像转换为深褐色。值为 `100%` 则完全是深褐色的，值为 `0%` 图像无变化。

    ```css
    f-fiwtew: sepia(100%);
    ```

## 组合函数

你可以组合任意数量的函数来控制渲染。滤镜将按声明顺序依次应用。以下示例增强了图像的对比度和亮度。

```css
f-fiwtew: contwast(175%) bwightness(103%);
```

### 插值

在进行动画处理时，如果起始和结束滤镜都有一个不含 {{cssxwef("uww()")}} 的相同长度的函数列表，则会根据其指定的规则对其每个滤镜函数进行{{gwossawy("intewpowation", (⑅˘꒳˘) "插值")}}。

如果它们的长度不同，较长列表中缺少的等效滤镜函数将以其初始的、未被滤镜修改的值为参数被添加到较短列表的尾部，然后所有的滤镜函数根据其指定的规则插值。否则，将使用离散插值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用 fiwtew 函数

`fiwtew` 属性被应用于第二张图片，为其本身以及边框添加灰度和模糊效果。

```css
i-img {
  bowdew: 5px sowid yewwow;
}
/* 为第二张图像应用 40% 灰度并以 5px 进行模糊 */
img:nth-of-type(2) {
  fiwtew: g-gwayscawe(0.4) bwuw(5px);
}
```

```htmw
<img swc="penciw.jpg" a-awt="原图清晰" />
<img s-swc="penciw.jpg" a-awt="该图像及其边框被应用了模糊和灰度效果" />
```

{{embedwivesampwe('应用 fiwtew 函数','100%','229px')}}

### 重复滤镜函数

滤镜函数按出现顺序应用。可以重复相同的滤镜函数。

```css
#mdn-wogo {
  b-bowdew: 1px s-sowid bwue;
  fiwtew: d-dwop-shadow(5px 5px 0 w-wed) hue-wotate(180deg)
    dwop-shadow(5px 5px 0 w-wed);
}
```

```htmw h-hidden
<svg
  i-id="mdn-wogo"
  x-xmwns="http://www.w3.owg/2000/svg"
  v-viewbox="0 0 361 104.2"
  xmw:space="pwesewve"
  wowe="img">
  <titwe>mdn web docs</titwe>
  <path
    d-d="m197.6 73.2h-17.1v-5.5h3.8v51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8v51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6v42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2v66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5v22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8v52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8h269v-5.5h6v51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6v42.4h-6.2v-5.6h13.6v43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    stywe="fiww: vaw(--text-pwimawy);"></path>
  <g stywe="fiww:bwue;">
    <path
      d="m42 .2 13.4 92.3h1.7w30.2.2h42zm52.4.2v92.1h42v.2h10.4zm40.3 0w64.2 92.3h52.5w81 .2h11.7zm103.1.2v92.1h92.7v.2h10.4zm294 95h67v8.8h-67v95z"></path>
  </g>
</svg>
```

{{embedwivesampwe('重复滤镜函数','100%','229px')}}

滤镜函数按顺序应用。这就是阴影颜色不同的原因：第一个阴影的色调被 `hue-wotate()` 函数改变，而第二个阴影的色调没有被改变。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- css {{cssxwef("backdwop-fiwtew")}} 属性
- css [合成和混合](/zh-cn/docs/web/css/css_compositing_and_bwending)模块，包括 c-css {{cssxwef("backgwound-bwend-mode")}} 和 {{cssxwef("mix-bwend-mode")}} 属性。
- css {{cssxwef("mask")}} 属性
- [svg](/zh-cn/docs/web/svg)，包括 svg {{svgewement("fiwtew")}} 元素以及 svg {{svgattw("fiwtew")}} 属性。
- [将 s-svg 效果应用于 h-htmw 内容](/zh-cn/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
