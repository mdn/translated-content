---
title: <dl>
slug: Web/HTML/Reference/Elements/dl
---

**HTML `<dl>` 元素** （或 _HTML_ _描述列表元素_）是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)。

{{InteractiveExample("HTML Demo: &lt;dl&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

在 HTML5 之前， \<dl> 被大家以定义列表所熟知。

- _[内容分类](/zh-CN/docs/Web/HTML/Guides/Content_categories)_ [Flow content](/zh-CN/docs/Web/HTML/Guides/Content_categories#flow_content)(流体内容), 如果`<dl>` 元素的子元素包含一个键值对，则显示其中内容。

1. *允许的内容*一：零组或多组 dom 结构，每组 dom 结构中包含一个或多个{{HTMLElement("dt")}} 元素，以及 一个或多个{{HTMLElement("dd")}}元素，可通过{{HTMLElement("script")}}元素和{{HTMLElement("template")}}元素进行混入。二：一组或多组{{HTMLElement("div")}}元素，可通过{{HTMLElement("script")}}元素和{{HTMLElement("template")}}元素混入。

- _标签省略_：不允许，开始标签和结束标签都不能省略。
- _允许的父元素_：符合流内容的任何元素
- _DOM 接口_：{{domxref("HTMLDListElement")}}

## 属性

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

### 单条术语与描述

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("单条术语与描述")}}

### 多条术语、单条描述

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("多条术语、单条描述")}}

### 单条术语、多条描述

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("单条术语、多条描述")}}

### 多条术语、多条描述

同样的，该元素同样可以支持在一个列表中出现多条术语以及多条描述。

### 元数据

描述列表可以很方便的将元数据展示为键—值对列表：

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

小技巧：通过 CSS3，我们可以很容易的在术语后面添加一个与内容无关的分隔符号，比如：

```css
dt::after {
  content: ": ";
}
```

### 在 `div` 元素中包装名称值组

WHATWG HTML 允许在 {{HTMLElement("div")}} 元素中的 {{HTMLElement("dl")}} 元素中包装每个名称 - 值组。当使用元数据时，或全局属性适用于整个组或用于样式时，这可能很有用。

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

## 备注

请不要将该元素（也不要用 {{HTMLElement("ul")}} 元素）用来在页面创建具有缩进效果的内容。虽然这样的结果样式看上去没问题，但是，这是很糟糕的做法，并且语义也不清晰。

要改变描述列表中描述的缩进量，请使用 [CSS](/zh-CN/docs/Web/CSS) {{cssxref("margin")}} 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dt")}}
- {{HTMLElement("dd")}}
