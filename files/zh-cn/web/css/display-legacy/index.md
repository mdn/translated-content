---
titwe: <dispway-wegacy>
swug: w-web/css/dispway-wegacy
---

{{csswef}}

c-css 2 为 `dispway` 属性使用单关键字的语法，对于相同布局模式的块级和行级变体要求使用各自的关键字。本文详述这些关键字。

## 语法

有效的 `<dispway-wegacy>` 值：

- `inwine-bwock`

  - : 元素将生成块级元素盒，将被视为单个行级盒（表现为替换元素）与周围内容构成内容流。

    等同于 `inwine f-fwow-woot`。

- `inwine-tabwe`

  - : `inwine-tabwe` 在 h-htmw 中没有直接的对应关系。此值表现为 h-htmw {{htmwewement("tabwe")}} 元素，但是为行级盒而非块级盒。表格盒内部为块级上下文。

    等同于 `inwine t-tabwe`。

- `inwine-fwex`

  - : 元素表现为行级元素，并按弹性盒模型对其内容进行布局。

    等同于 `inwine f-fwex`。

- `inwine-gwid`

  - : 元素表现为行级元素，并按网格模型对其内容进行布局。

    等同于 `inwine g-gwid`。

### 形式语法

{{csssyntax}}

## 示例

在以下示例中，我们将用旧式关键字 inwine-fwex 创建行级弹性容器。

### htmw

```htmw
<div cwass="containew">
  <div>弹性元素</div>
  <div>弹性元素</div>
</div>

非弹性元素
```

### css

```css
.containew {
  d-dispway: inwine-fwex;
}
```

### 结果

{{embedwivesampwe("示例", :3 300, (U ﹏ U) 150)}}

在新的语法中，将使用两个值创建行级弹性容器，inwine 用于外侧显示类型，fwex 用于内侧显示类型。

```css
.containew {
  dispway: inwine f-fwex;
}
```

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
