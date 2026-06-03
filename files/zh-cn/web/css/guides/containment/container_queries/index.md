---
title: CSS 容器查询
slug: Web/CSS/Guides/Containment/Container_queries
---

容器查询使你能够根据元素容器的大小应用样式。例如，如果容器在周围的上下文中可用的空间更少，你可以隐藏某些元素或使用较小的字体。容器查询是[媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)的另一种选择，后者根据视口大小或其他设备特征为元素应用样式。

![一个基于视口宽度（即浏览器的完整宽度）的媒体查询和一个基于容器上下文宽度（即容器元素的宽度）的容器查询](container-query.svg)

## 使用容器查询

要使用容器查询，你需要在元素上声明一个**局限上下文**，以便浏览器知道你可能希望稍后查询此容器的尺寸。为此，请使用 {{Cssxref("container-type")}} 属性，值为 `size`、`inline-size` 或 `normal`。

这些值具有以下效果：

- `size`
  - : 查询将基于容器的[行向和块向](Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#块向与行向尺度)尺度，将布局、样式和大小的限制应用于容器。
- `inline-size`
  - : 查询将基于容器的[行向](Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values#块向与行向尺度)尺度，将布局、样式和行向大小的限制应用于元素。
- `normal`
  - : 该元素不是任何容器大小查询的查询容器，但仍然是容器样式查询的查询容器。

考虑以下带有标题和一些文本的博客文章的卡片组件示例：

```html
<div class="post">
  <div class="card">
    <h2>卡片标题</h2>
    <p>卡片内容</p>
  </div>
</div>
```

你可以使用 `container-type` 属性创建一个容器上下文：

```css
.post {
  container-type: inline-size;
}
```

接下来，使用 at 规则 {{cssxref("@container")}} 定义容器查询。以下示例中的查询将根据具有局限上下文的最近祖先元素的大小应用样式于元素。具体而言，如果容器宽度大于 `700px`，则此查询将为卡片标题应用更大的字体大小：

```css
/* 默认的卡片标题样式 */
.card h2 {
  font-size: 1em;
}

/* 如果容器宽度大于 700px */
@container (min-width: 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

使用容器查询时，卡片可以在页面的多个区域中重复使用，无需每次都知道它放置在的具体位置。如果包含卡片的容器宽度小于 `700px`，卡片标题的字体将变小，如果卡片在宽度大于 `700px` 的容器中，则卡片标题的字体将变大。

有关容器查询语法的更多信息，请参阅 {{cssxref("@container")}} 页面。

### 为局限上下文命名

在上一节中，容器查询基于有局限上下文的最近祖先元素应用样式。可以使用 {{Cssxref("container-name")}} 属性为局限上下文命名。命名后，可以在 `@container` 查询中使用该名称以选择特定容器。以下示例创建了一个名为 `sidebar` 的局限上下文：

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}
```

然后，你可以使用 at 规则 `@container` 选择此局限上下文：

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

有关为局限上下文命名的更多信息，请参见 {{cssxref("container-name")}} 页面。

### 简写容器语法

声明局限上下文的简写方法是使用 `container` 属性：

```css
.post {
  container: sidebar / inline-size;
}
```

有关此属性的更多信息，请参见 {{Cssxref("container")}} 参考。

### 容器查询长度单位

当应用样式到一个容器中使用容器查询时，可以使用容器查询长度单位。这些单位指定了一个相对于查询容器尺寸的长度。使用相对于容器的长度单位的组件更灵活，可以在不必重新计算具体长度值的情况下在不同的容器中使用。

容器查询长度单位包括：

- `cqw`：查询容器宽度的 1%
- `cqh`：查询容器高度的 1%
- `cqi`：查询容器行向尺寸的 1%
- `cqb`：查询容器块尺寸的 1%
- `cqmin`：`cqi` 和 `cqb` 中较小的值
- `cqmax`：`cqi` 和 `cqb` 中较大的值

以下示例使用 `cqi` 单位根据容器的行向尺寸设置标题的字体大小：

```css
@container (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}
```

有关这些单位的更多信息，请参阅[容器查询长度单位](/zh-CN/docs/Web/CSS/Reference/Values/length#容器查询长度单位)参考。

## 容器查询的回退

对于尚不支持容器查询的浏览器，{{cssxref("grid")}} 和 {{cssxref("flex")}} 可用于为该页面上使用的卡片组件创建类似的效果。以下示例使用 {{cssxref("grid-template-columns")}} 声明为卡片组件创建了一个两列布局。

```css
.card {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

如果你想在视口较小的设备上使用单列布局，则可以使用媒体查询来更改网格模板：

```css
@media (max-width: 700px) {
  .card {
    grid-template-columns: 1fr;
  }
}
```

## 参见

- [媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries)
- CSS {{Cssxref("@container")}} at 规则
- CSS {{Cssxref("contain")}} 属性
- CSS {{Cssxref("container")}} 简写属性
- CSS {{Cssxref("container-name")}} 属性
- CSS {{cssxref("content-visibility")}} 属性
- [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)，作者 Ahmad Shadeed
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection of Container Queries articles](https://github.com/sturobson/Awesome-Container-Queries)
