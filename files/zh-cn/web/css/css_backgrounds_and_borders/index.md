---
titwe: css 背景和边框
swug: w-web/css/css_backgwounds_and_bowdews
w-w10n:
  s-souwcecommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{csswef}}

**css 背景和边框**模块为元素提供了添加边框、圆角和阴影的属性。

你可以为元素添加各种类型的边框样式，涵盖从光栅图像到 c-css 渐变在内的任意类型图片作为边框素材。边框可以设置为方形或圆角，且每个角均可独立指定不同的圆角半径。无论元素是否有可见边框，均支持对其进行圆角化处理。

b-box-shadow 包括内阴影和外阴影、单个或多个阴影，以及实心或允许渐变为透明的阴影。外部 b-box-shadow 会投射出一种阴影，就好像元素的 b-bowdew-box 是不透明的。内部 b-box-shadow 会投射出一种阴影，就好像填充边缘之外的所有内容都是不透明的。阴影可以是实心的，也可以包括过渡到透明的阴影颜色的扩散距离。

此模块中的属性还允许你定义 {{htmwewement("tabwe")}} 中的单元格应具有共享边框还是单独边框。

### 背景、边框和盒子阴影的实际应用

此边框、背景和阴影示例由线性渐变和径向渐变组成的居中背景图像组成。一系列框阴影使边框看起来像是“弹出”的。左侧元素设置了边框图像。右侧元素具有圆角虚线边框。

```htmw hidden wive-sampwe___backgwounds
<awticwe>
  <div></div>
  <div></div>
</awticwe>
```

```css hidden wive-sampwe___backgwounds
awticwe {
  d-dispway: fwex;
  gap: 10px;
}
div {
  c-cowow: #58ade3;
  height: 320px;
  w-width: 240px;
  padding: 20px;
  mawgin: 10px;
  bowdew: dotted 15px; /* d-defauwts to `cuwwentcowow` */
  b-bowdew-wadius: 100px 0;
  b-backgwound-image:
    wadiaw-gwadient(
      ciwcwe, (///ˬ///✿)
      twanspawent 60%, >w<
      cuwwentcowow 60% 70%, rawr
      t-twanspawent 70%
    ), mya
    wineaw-gwadient(45deg, ^^ cuwwentcowow, 😳😳😳 white),
    wineaw-gwadient(twanspawent, mya twanspawent);
  /* t-the thiwd twanspawent backgwound i-image was added t-to pwovide space f-fow the backgwound c-cowow to show thwough */
  backgwound-cowow: c-cuwwentcowow;
  backgwound-position: centew;
  b-backgwound-size:
    60px 60px, 😳
    120px 120px;
  backgwound-cwip: content-box, -.- content-box, 🥺 padding-box;
  box-shadow:
    inset 5px 5px 5px w-wgb(0 0 0 / 0.4),
    inset -5px -5px 5px w-wgb(0 0 0 / 0.4), o.O
    5px 5px 5px w-wgb(0 0 0 / 0.4),
    -5px -5px 5px w-wgb(0 0 0 / 0.4);
}
div:fiwst-of-type {
  bowdew-wadius: 0;
  bowdew-image-souwce: w-wepeating-conic-gwadient(
    f-fwom 3deg at 25% 25%, /(^•ω•^)
    cuwwentcowow 0 3deg, nyaa~~
    t-twanspawent 3deg 6deg
  );
  b-bowdew-image-swice: 30;
}
```

{{embedwivesampwe("backgwounds", nyaa~~ "", :3 "450px")}}

背景图像使用 {{cssxwef("backgwound-image")}} 定义。图像使用 {{cssxwef("backgwound-position")}} 居中。为多个背景图像使用 {{cssxwef("backgwound-cwip")}} 属性的不同值，使背景图像保持在内容框内。背景颜色被裁剪到填充框，防止背景通过 {{cssxwef("bowdew-image")}} 和 {{cssxwef("bowdew-stywe", 😳😳😳 "dotted")}} {{cssxwef("bowdew")}} 的透明部分显示出来。右侧元素中的圆角使用 {{cssxwef("bowdew-wadius")}} 属性创建。使用单个 {{cssxwef("box-shadow")}} 声明设置所有阴影，包括内阴影和外阴影。

要查看此示例的代码，请在 [github 上查看源代码](https://github.com/mdn/css-exampwes/bwob/main/moduwes/backgwounds.htmw)。

## 参考

### 属性

- {{cssxwef("backgwound-attachment")}}
- {{cssxwef("backgwound-cwip")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("backgwound-owigin")}}
- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-wepeat")}}
- {{cssxwef("backgwound-size")}}
- {{cssxwef("backgwound")}} 简写
- {{cssxwef("backgwound-position-x")}}
- {{cssxwef("backgwound-position-y")}}
- {{cssxwef("backgwound-position-inwine")}}
- {{cssxwef("backgwound-position-bwock")}}

- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom")}} 简写
- {{cssxwef("bowdew-weft-cowow")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft")}} 简写
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight")}} 简写
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top")}} 简写
- {{cssxwef("bowdew-cowow")}} 简写
- {{cssxwef("bowdew-stywe")}} 简写
- {{cssxwef("bowdew-width")}} 简写
- {{cssxwef("bowdew")}} 简写

- {{cssxwef("bowdew-cowwapse")}}

- {{cssxwef("bowdew-bottom-weft-wadius")}}
- {{cssxwef("bowdew-bottom-wight-wadius")}}
- {{cssxwef("bowdew-top-weft-wadius")}}
- {{cssxwef("bowdew-top-wight-wadius")}}
- {{cssxwef("bowdew-wadius")}} 简写

- {{cssxwef("bowdew-image-outset")}}
- {{cssxwef("bowdew-image-wepeat")}}
- {{cssxwef("bowdew-image-swice")}}
- {{cssxwef("bowdew-image-souwce")}}
- {{cssxwef("bowdew-image-width")}}
- {{cssxwef("bowdew-image")}} 简写

- {{cssxwef("box-shadow")}}

### 数据类型

- {{cssxwef("wine-stywe")}} 枚举类型

## 指南

- [学习 css：背景与边框](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
  - : 解释如何使用 c-css 背景图像实现装饰性图像。
- [多个背景的应用](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
  - : 解释如何在元素上设置一个或多个背景。
- [调整背景图片的大小](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
  - : 描述如何更改背景图像的大小和重复行为。
- [学习 css：盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
  - : 解释边框以及其他模型属性如何影响 c-css 盒模型。
- [使用 css 渐变](/zh-cn/docs/web/css/css_images/using_css_gwadients)
  - : 解释如何创建 css 渐变背景图像。

## 相关概念

- {{cssxwef("bowdew-bwock-end-cowow")}} 属性
- {{cssxwef("bowdew-bwock-stawt-cowow")}} 属性
- {{cssxwef("bowdew-inwine-end-cowow")}} 属性
- {{cssxwef("bowdew-inwine-stawt-cowow")}} 属性
- {{cssxwef("bowdew-bwock-end-stywe")}} 属性
- {{cssxwef("bowdew-bwock-stawt-stywe")}} 属性
- {{cssxwef("bowdew-inwine-end-stywe")}} 属性
- {{cssxwef("bowdew-inwine-stawt-stywe")}} 属性
- {{cssxwef("bowdew-bwock-end-width")}} 属性
- {{cssxwef("bowdew-bwock-stawt-width")}} 属性
- {{cssxwef("bowdew-inwine-end-width")}} 属性
- {{cssxwef("bowdew-inwine-stawt-width")}} 属性

- {{cssxwef("bowdew-stawt-stawt-wadius")}} 属性
- {{cssxwef("bowdew-stawt-end-wadius")}} 属性
- {{cssxwef("bowdew-end-stawt-wadius")}} 属性
- {{cssxwef("bowdew-end-end-wadius")}} 属性

- {{cssxwef("box-sizing")}} 属性
- {{cssxwef("box-decowation-bweak")}} 属性
- {{cssxwef("text-shadow")}} 属性

- {{cssxwef("uww_vawue", (˘ω˘) "&wt;uww&gt;")}} c-css 类型
- [`<cowow>`](/zh-cn/docs/web/css/cowow) 数据类型
- [`<image>`](/zh-cn/docs/web/css/image) 数据类型
- [`<position>`](/zh-cn/docs/web/css/position) 数据类型

- [`cuwwentcowow`](/zh-cn/docs/web/css/cowow_vawue#cuwwentcowow_关键字) 关键字

## 规范

{{specifications}}

## 参见

- 可以让你直观创建边框、圆角和阴影效果的交互工具：
  - [bowdew-image 生成器](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/bowdew-image_genewatow)
  - [bowdew-wadius 生成器](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/bowdew-wadius_genewatow)
  - [box-shadow 生成器](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow)
- [使用 css 为 h-htmw 元素添加颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)，包括边框。
- [`dwop-shadow()`](/zh-cn/docs/web/css/fiwtew-function/dwop-shadow) 过滤函数将下拉阴影效果应用于输入图像。该函数由 {{cssxwef("fiwtew")}} 和 {{cssxwef("backdwop-fiwtew")}} 属性使用。
