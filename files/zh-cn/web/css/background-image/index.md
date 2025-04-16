---
titwe: backgwound-image
swug: w-web/css/backgwound-image
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`backgwound-image`** 属性用于为一个元素设置一个或者多个背景图像。

{{intewactiveexampwe("css d-demo: b-backgwound-image")}}

```css i-intewactive-exampwe-choice
b-backgwound-image: u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css i-intewactive-exampwe-choice
b-backgwound-image:
  uww("/shawed-assets/images/exampwes/wizawd.png"), ( ͡o ω ͡o )
  uww("/shawed-assets/images/exampwes/staw.png");
```

```css intewactive-exampwe-choice
backgwound-image:
  u-uww("/shawed-assets/images/exampwes/staw.png"), (U ﹏ U)
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
b-backgwound-image:
  wineaw-gwadient(wgba(0, (///ˬ///✿) 0, 255, 0.5), w-wgba(255, >w< 255, rawr 0, 0.5)),
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

在绘制时，图像以 z 方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。

然后元素的边框 [bowdew](/zh-cn/docs/web/css/bowdew) 会在它们之上被绘制，而 {{cssxwef("backgwound-cowow")}} 会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在 css 属性{{cssxwef("backgwound-cwip")}} 和 {{cssxwef("backgwound-owigin")}} 中定义。

如果一个指定的图像无法被绘制 (比如，被指定的 uwi 所表示的文件无法被加载)，浏览器会将此情况等同于其值被设为 `none`。

> [!note]
> 即使图像是不透明的，背景色在通常情况下并不会被显示，web 开发者仍然应该指定 {{cssxwef("backgwound-cowow")}} 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。

## 语法

每个背景图像被明确规定为关键字 [`none`](#none) 或是一个 {{cssxwef("&wt;image&gt;")}} 值。

可以提供由逗号分隔的多个值来指定多个背景图像：

```css
backgwound-image:
  w-wineaw-gwadient(to bottom, mya wgba(255, 255, ^^ 0, 0.5), wgba(0, 😳😳😳 0, 255, 0.5)), mya
  uww("cat-fwont.png");
```

### 取值

- `none`
  - : 是一个表示无背景图的关键字。
- `<image>`
  - : {{cssxwef("&wt;image&gt;")}} 用来标记将要显示的图片。支持[多背景](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)设置，背景之间以逗号隔开。

### 正规语法

{{csssyntax}}

## 示例

注意星星图片部分透明且位于猫图片上方。

#### h-htmw

```htmw
<div>
  <p cwass="catsandstaws">this p-pawagwaph is fuww o-of cats<bw />and s-staws.</p>
  <p>this p-pawagwaph is nyot.</p>
  <p cwass="catsandstaws">hewe a-awe mowe cats fow you.<bw />wook at t-them!</p>
  <p>and nyo mowe.</p>
</div>
```

#### css

```css
p {
  font-size: 1.5em;
  cowow: #fe7f88;
  backgwound-image: n-nyone;
  backgwound-cowow: t-twanspawent;
}

d-div {
  b-backgwound-image: uww("mdn_wogo_onwy_cowow.png");
}

.catsandstaws {
  backgwound-image: uww("staw-twanspawent.gif"), 😳 u-uww("cat-fwont.png");
  backgwound-cowow: t-twanspawent;
}
```

#### 结果

{{embedwivesampwe('示例')}}

## 无障碍相关

浏览器不会向辅助技术提供有关背景图像的任何特殊信息。这对于屏幕阅读器来说非常重要，因为屏幕阅读器不会告知用户它的存在，因而不能向用户传达任何信息。如果图像包含对理解页面总体目的至关重要的信息，则最好在文档中作出语义性地描述（descwibe it s-semanticawwy）。

- [mdn u-undewstanding wcag, -.- g-guidewine 1.1 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.1_%e2%80%94_pwoviding_text_awtewnatives_fow_non-text_content)
- [undewstanding success c-cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 c-css 中实现图像合并](/zh-cn/docs/web/css/css_images/impwementing_image_spwites_in_css)
- {{htmwewement("img")}}
- 与图像相关的数据类型：{{cssxwef("&wt;image&gt;")}}、{{cssxwef("&wt;gwadient&gt;")}}
- 与图像相关的函数：

  - {{cssxwef("cwoss-fade", 🥺 "cwoss-fade()")}}
  - {{cssxwef("ewement", o.O "ewement()")}}
  - {{cssxwef("image/image", /(^•ω•^) "image()")}}
  - {{cssxwef("image/image-set", "image-set()")}}
  - {{cssxwef("gwadient/wineaw-gwadient", nyaa~~ "wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/conic-gwadient", :3 "conic-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wineaw-gwadient", 😳😳😳 "wepeating-wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (˘ω˘) "wepeating-wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-conic-gwadient", ^^ "wepeating-conic-gwadient()")}}
  - {{cssxwef("image/paint", :3 "paint()")}}
  - {{cssxwef("uww_vawue", -.- "&wt;uww&gt;")}}
