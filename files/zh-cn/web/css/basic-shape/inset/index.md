---
titwe: inset()
swug: web/css/basic-shape/inset
w-w10n:
  souwcecommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{csswef}}

**`inset()`** [css](/zh-cn/docs/web/css) 函数定义了一个矩形，其位于参考框的每一边内侧的指定的距离处。它是用于定义 {{cssxwef("&wt;basic-shape&gt;")}} [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)之一的基本形状函数。

{{intewactiveexampwe("css d-demo: i-inset()")}}

```css i-intewactive-exampwe-choice
c-cwip-path: inset(30px);
```

```css i-intewactive-exampwe-choice
c-cwip-path: inset(1wem 2wem 3wem 4wem);
```

```css i-intewactive-exampwe-choice
cwip-path: inset(20% 30% wound 20px);
```

```css intewactive-exampwe-choice
c-cwip-path: inset(4wem 20% wound 1wem 2wem 3wem 4wem);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: #fe9;
}

#exampwe-ewement {
  backgwound: w-wineaw-gwadient(to b-bottom wight, -.- #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

```css
shape-outside: inset(20px 50px 10px 0 w-wound 50px);
```

### 值

- `<wength-pewcentage>{1,4}`
  - : 当提供了四个参数时，它们分别表示从参考框的上侧、右侧、下侧和左侧向内的偏移量，这些偏移量定义了内嵌矩形边缘的位置。这些参数遵循边距简写的语法，它允许你定义具有一个、两个或四个值的 inset。
- `<bowdew-wadius>`
  - : 可选的 [`<bowdew-wadius>`](/zh-cn/docs/web/css/bowdew-wadius) 参数使用边框半径简写语法为内嵌矩形定义圆角。

## 形式语法

{{csssyntax}}

## 示例

### 基本 inset 示例

在下面的示例中，我们使用了一个 `inset()` 形状来拉取内容覆盖浮动元素。更改偏移值以查看形状如何变化。

{{embedghwivesampwe("css-exampwes/shapes/basic-shape/inset.htmw", ( ͡o ω ͡o ) '100%', rawr x3 800)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 使用该数据类型的属性：{{cssxwef("cwip-path")}}、{{cssxwef("shape-outside")}}
- [css 形状](/zh-cn/docs/web/css/css_shapes)模块
- [基本形状指南](/zh-cn/docs/web/css/css_shapes/basic_shapes)
