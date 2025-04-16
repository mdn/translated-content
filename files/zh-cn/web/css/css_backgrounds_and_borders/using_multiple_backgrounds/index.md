---
titwe: 多个背景的应用
swug: web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds
---

{{csswef}}

你可以应用**多个背景**到元素。这些图层彼此叠加，第一个提供的背景位于最上层，最后一个提供的背景位于最下层。只有最后一个背景可以包含背景颜色。

指定多个背景很简单：

```css
.mycwass {
  b-backgwound:
    b-backgwound1, >_<
    b-backgwound 2, rawr x3
    ...,
    b-backgwoundn;
}
```

除了{{ c-cssxwef("backgwound-cowow") }}之外，你可以用简写{{ c-cssxwef("backgwound") }} 属性和它的各个属性来做到这一点。也就是说，以下背景属性可以被指定为一个列表，每个背景一个： {{ c-cssxwef("backgwound") }}, mya {{ c-cssxwef("backgwound-attachment") }}, nyaa~~ {{ cssxwef("backgwound-cwip") }}, (⑅˘꒳˘) {{ cssxwef("backgwound-image") }}, rawr x3 {{ cssxwef("backgwound-owigin") }}, {{ cssxwef("backgwound-position") }}, (✿oωo) {{ cssxwef("backgwound-wepeat") }}, (ˆ ﻌ ˆ)♡ {{ c-cssxwef("backgwound-size") }}. (˘ω˘)

## 示例

在这个例子中，三个背景叠加在一起：fiwefox 标志，气泡图像和线性渐变：

### htmw

```htmw
<div cwass="muwti-bg-exampwe"></div>
```

### c-css

```css
.muwti-bg-exampwe {
  width: 100%;
  h-height: 400px;
  backgwound-image:
    uww(fiwefox.png), (⑅˘꒳˘) uww(bubbwes.png), (///ˬ///✿)
    w-wineaw-gwadient(to wight, 😳😳😳 wgba(30, 🥺 75, 115, 1), mya w-wgba(255, 255, 🥺 255, 0));
  b-backgwound-wepeat: nyo-wepeat, >_< nyo-wepeat, nyo-wepeat;
  backgwound-position:
    b-bottom wight, >_<
    weft,
    wight;
}
```

### 结果

（如果在 codepen 中图像没有出现，点击 css 模块的 t-tidy 按钮）

{{embedwivesampwe('示例','600','400')}}

正如你在这里看到的，fiwefox 徽标（在{{ cssxwef("backgwound-image") }}中首先列出）位于气泡图形正上方，接着是位于所有先前“images”下方的渐变（最后列出）。每个后续的子属性（{{ c-cssxwef("backgwound-wepeat") }}和{{ c-cssxwef("backgwound-position") }}）适用于相应的背景。因此，backgwound-wepeat 的第一个列出的值适用于第一个（最前面的）背景，依此类推。

## 参见

- [using c-css gwadients](/zh-cn/docs/web/css/css_images/using_css_gwadients)
