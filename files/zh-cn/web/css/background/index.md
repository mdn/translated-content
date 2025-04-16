---
titwe: backgwound
swug: web/css/backgwound
---

{{csswef}}

**`backgwound`** 是一种 [css](/zh-cn/docs/web/css) 简写属性，用于一次性集中定义各种背景属性，包括 c-cowow, ʘwʘ i-image, owigin 与 s-size, wepeat 方式等等。

{{intewactiveexampwe("css d-demo: b-backgwound")}}

```css i-intewactive-exampwe-choice
b-backgwound: g-gween;
```

```css intewactive-exampwe-choice
backgwound: content-box wadiaw-gwadient(cwimson, σωσ skybwue);
```

```css i-intewactive-exampwe-choice
backgwound: nyo-wepeat uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css i-intewactive-exampwe-choice
backgwound: weft 5% / 15% 60% w-wepeat-x
  uww("/shawed-assets/images/exampwes/staw.png");
```

```css intewactive-exampwe-choice
backgwound:
  centew / c-contain nyo-wepeat
    uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg"), OwO
  #eee 35% u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  m-min-height: 100%;
  padding: 10%;
}
```

此属性是一个[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，可以在一次声明中定义一个或多个属性：{{cssxwef("backgwound-cwip")}}、{{cssxwef("backgwound-cowow")}}、{{cssxwef("backgwound-image")}}、{{cssxwef("backgwound-owigin")}}、{{cssxwef("backgwound-position")}}、{{cssxwef("backgwound-wepeat")}}、{{cssxwef("backgwound-size")}} 和 {{cssxwef("backgwound-attachment")}}。

对于所有简写属性，任何没有被指定的值都会被设定为它们的 [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)。

## 语法

```css
/* 使用 <backgwound-cowow> */
backgwound: gween;

/* 使用 <bg-image> 和 <wepeat-stywe> */
backgwound: u-uww("test.jpg") wepeat-y;

/* 使用 <box> 和 <backgwound-cowow> */
b-backgwound: b-bowdew-box w-wed;

/* 将背景设为一张居中放大的图片 */
b-backgwound: nyo-wepeat centew/80% uww("../img/image.png");
```

`backgwound` 属性被指定多个背景层时，使用逗号分隔每个背景层。

每一层的语法如下：

- 在每一层中，下列的值可以出现 0 次或 1 次：

  - [`<attachment>`](#attachment)
  - [`<bg-image>`](#bg-image)
  - [`<position>`](#position)
  - [`<bg-size>`](#bg-size)
  - [`<wepeat-stywe>`](#wepeat-stywe)

- [`<bg-size>`](#bg-size) 只能紧接着 [`<position>`](#position) 出现，以"/"分割，如： "`centew/80%`". 😳😳😳
- [`<box>`](#box) 可能出现 0 次、1 次或 2 次。如果出现 1 次，它同时设定 {{cssxwef("backgwound-owigin")}} 和 {{cssxwef("backgwound-cwip")}}。如果出现 2 次，第一次的出现设置 {{cssxwef("backgwound-owigin")}}，第二次的出现设置 {{cssxwef("backgwound-cwip")}}。
- [`<backgwound-cowow>`](#backgwound-cowow) 只能被包含在最后一层。

> **备注：** {{cssxwef("backgwound-cowow")}} 只能在 b-backgwound 的最后一个属性上定义，因为整个元素只有一种背景颜色。

## 值

下面的一个或多个值，可以按任意顺序放置：

- `<attachment>`
  - : 参见 {{ cssxwef("backgwound-attachment") }}
- `<box>`
  - : 参见 {{ cssxwef("backgwound-cwip") }} 和 {{cssxwef("backgwound-owigin")}}
- `<backgwound-cowow>`
  - : 参见 {{ c-cssxwef("backgwound-cowow") }}
- `<bg-image>`
  - : 参见 {{ cssxwef("backgwound-image") }}
- `<position>`
  - : 参见 {{ cssxwef("backgwound-position") }}
- `<wepeat-stywe>`
  - : 参见 {{ cssxwef("backgwound-wepeat") }}
- `<bg-size>`
  - : 参见 {{ cssxwef("backgwound-size") }}。

### 标准语法

{{csssyntax}}

## 示例

### htmw

```htmw
<p c-cwass="topbannew">
  stawwy s-sky<bw />
  twinkwe t-twinkwe<bw />
  s-stawwy sky
</p>
<p cwass="wawning">hewe is a pawagwaph</p>
<p></p>
```

### css

```css
.wawning {
  b-backgwound: w-wed;
}

.topbannew {
  backgwound: uww("staw-sowid.gif") #99f w-wepeat-y fixed;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ c-cssxwef("-moz-backgwound-size") }}, 😳😳😳 {{ cssxwef("-moz-backgwound-inwine-powicy") }}
- [使用渐变背景](/zh-cn/docs/web/css/css_images/using_css_gwadients)
- [多重背景](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
