---
title: flex-basis
slug: Web/CSS/flex-basis
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/css) 属性 **`flex-basis`** 指定了 flex 元素在主轴方向上的初始大小。如果不使用 {{Cssxref("box-sizing")}} 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

> **备注：** 当一个元素同时被设置了 `flex-basis` (除值为 `auto` 外) 和 `width` (或者在 `flex-direction: column` 情况下设置了`height`) , `flex-basis` 具有更高的优先级。

## 语法

```css
/* 指定<'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在 flex item 内容上的自动尺寸 */
flex-basis: content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

这个 `flex-basis` 属性 被指定为关键词 [`content`](/zh-CN/docs/Web/CSS/flex-basis#content) 或者 [`<'width'>`](/zh-CN/docs/Web/CSS/flex-basis#%3C'width'%3E).

### 取值

- `<'width'>`
  - : width 值可以是 {{cssxref("&lt;length&gt;")}}; 该值也可以是一个相对于其父弹性盒容器主轴尺寸的{{cssxref("&lt;percentage&gt;", "百分数")}} 。负值是不被允许的。默认为 `auto`。
- `content`

  - : 基于 flex 的元素的内容自动调整大小。

    > **备注：**由于最初规范中没有包括这个值，在一些早期的浏览器实现的 flex 布局中，content 值无效，可以利用设置 ([width](https://drafts.csswg.org/css2/visudet.html#propdef-width) 或 [height](https://drafts.csswg.org/css2/visudet.html#propdef-height)) 为 auto 达到同样的效果。

    > **备注：** **简史**
    >
    > - 最初，"flex-basis:auto" 的含义是 "参照我的`width`和`height`属性".
    > - 在此之后，"flex-basis:auto" 的含义变成了自动尺寸，而 "main-size" 变成了 "参照我的`width`和`height`属性"。实际执行于 [bug 1032922](https://bugzilla.mozilla.org/show_bug.cgi?id=1032922).
    > - 然后呢，这个更改又在 [bug 1093316](https://bugzilla.mozilla.org/show_bug.cgi?id=1093316) 中被撤销了，所以 "auto" 变回了原来的含义; 而一个新的关键字 'content' 变成了自动尺寸。 ([Firefox bug 1105111](https://bugzil.la/1105111) 包括了增加这个关键字).

### 规范

{{csssyntax}}

## 示例

### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5:after {
  content: "content";
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: "fill/-webkit-fill-available/-moz-available";
}
```

### 结果

{{EmbedLiveSample('示例', '860', '360')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS 弹性盒子指南：_[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS 弹性盒子指南：_[Controlling Ratios of flex items along the main axis](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
- {{cssxref("width")}}
