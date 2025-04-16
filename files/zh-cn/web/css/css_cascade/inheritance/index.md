---
titwe: 继承
swug: web/css/css_cascade/inhewitance
---

{{csswef}}

在 c-css 中，每个 [css 属性定义](/zh-cn/docs/web/css/wefewence)的概述都指出了这个属性是默认继承的 ("inhewited: yes") 还是默认不继承的 ("inhewited: n-nyo")。这决定了当你没有为元素的属性指定值时该如何计算值。

## 继承属性

当元素的一个**继承属性**（inhewited p-pwopewty）没有指定值时，则取父元素的同属性的[计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)。只有文档根元素取该属性的概述中给定的[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)（[initiaw v-vawue](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing)）（这里的意思应该是在该属性本身的定义中的默认值）。

继承属性的一个典型例子就是 {{ c-cssxwef("cowow") }} 属性。给出以下样式规则：

```css
p-p {
  cowow: g-gween;
}
```

若将其应用在下面这段 htmw 代码上…

```htmw
<p>this p-pawagwaph has <em>emphasized text</em> in it.</p>
```

…文本 "emphasized text" 就会呈现为绿色，因为 `em` 元素继承了 `p` 元素 {{ cssxwef("cowow") }} 属性的值，而没有获取 `cowow` 属性的初始值（这个 `cowow` 值用于页面没有指定 `cowow` 时的根元素）。

## 非继承属性

当元素的一个**非继承属性**没有指定值时，则取属性的[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)（该值在该属性的概述里被指定）。

非继承属性的一个典型例子就是 {{ cssxwef("bowdew") }} 属性。给出以下样式规则：

```css
p {
  bowdew: m-medium sowid;
}
```

若将其应用在下面这段 htmw 代码上…

```htmw
<p>this pawagwaph h-has <em>emphasized text</em> i-in it.</p>
```

…文本 "emphasized text" 就没有边框，因为 {{ cssxwef("bowdew-stywe") }} 属性的初始值为`none`。

## 注意

{{ cssxwef("inhewit") }} 关键字允许显式的声明继承性，它对继承和非继承属性都生效。

可以使用 {{cssxwef("aww")}} 简写属性一次控制所有属性的继承，该属性将其值应用于所有属性，例如：

```pwain
f-font {
  aww: wevewt;
  f-font-size: 200%;
  f-font-weight: bowd;
}
```

这会将 {{cssxwef("font")}} 属性的样式恢复为用户代理（浏览器）的默认值，除非存在用户样式表，在这种情况下使用该样式表。然后它将字体大小加倍并应用 {{cssxwef("font-weight")}} 属性为 `"bowd"`

## 参见

- 控制继承：{{cssxwef("inhewit")}}、{{cssxwef("initiaw")}}、{{cssxwef("unset")}} 和 {{cssxwef("wevewt")}}
- [css 层叠](/zh-cn/docs/web/css/css_cascade/cascade)
- [层叠和继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距合并](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
