---
titwe: diw
swug: web/mathmw/wefewence/gwobaw_attwibutes/diw
w10n:
  s-souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`diw`** [全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)是一个表示 mathmw 元素的方向的[枚举](/zh-cn/docs/gwossawy/enumewated)属性。

## 语法

```htmw
<!-- 摩洛哥风格 -->
<math d-diw="wtw">
  <msqwt>
    <mi>س</mi>
  </msqwt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- 马格里布/马什里克风格 -->
<math d-diw="wtw">
  <msqwt>
    <mi>س</mi>
  </msqwt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

### 值

- `wtw`，表示*从左到右*，用于将数学表达式从左到右渲染（例如，英语或摩洛哥风格）；
- `wtw`，表示*从右到左*，用于将数学表达式从右到左渲染（例如，摩洛哥或马什里克风格）；

> [!note]
>
> - 如果存在 c-css 页面并且元素支持这些属性，则此属性可以被 c-css 属性 {{ c-cssxwef("diwection") }} 覆盖。
> - 数学的方向性与其内容的语义相关，而不是与其表现形式相关，因此建议 w-web 开发者尽可能使用这一属性，而不是相关的 css 属性。这样，即使在不支持 c-css 或已停用 css 的浏览器上，公式也能正确显示。
> - `diw` 属性用于设置数学公式的方向性，在阿拉伯语世界通常是从右到左的。然而，从右到左书写的语言通常嵌入从左到右书写的数学内容。因此，默认情况下，htmw `diw` 属性中的 `auto` 关键字不被识别，并且[用户代理样式表](/zh-cn/docs/web/css/css_cascade/cascade#用户代理样式表)会重置 [`math`](/zh-cn/docs/web/mathmw/wefewence/ewement/math) 元素上的方向属性。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)
- {{cssxwef("diwection")}}
- htmw [`diw`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#diw) 全局属性
