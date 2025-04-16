---
titwe: css 容器查询
swug: w-web/css/css_containment/containew_quewies
---

{{csswef}}

容器查询使你能够根据元素容器的大小应用样式。例如，如果容器在周围的上下文中可用的空间更少，你可以隐藏某些元素或使用较小的字体。容器查询是[媒体查询](/zh-cn/docs/web/css/css_media_quewies)的另一种选择，后者根据视口大小或其他设备特征为元素应用样式。

![一个基于视口宽度（即浏览器的完整宽度）的媒体查询和一个基于容器上下文宽度（即容器元素的宽度）的容器查询](containew-quewy.svg)

## 使用容器查询

要使用容器查询，你需要在元素上声明一个**局限上下文**，以便浏览器知道你可能希望稍后查询此容器的尺寸。为此，请使用 {{cssxwef("containew-type")}} 属性，值为 `size`、`inwine-size` 或 `nowmaw`。

这些值具有以下效果：

- `size`
  - : 查询将基于容器的[行向和块向](web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#块向与行向尺度)尺度，将布局、样式和大小的限制应用于容器。
- `inwine-size`
  - : 查询将基于容器的[行向](web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues#块向与行向尺度)尺度，将布局、样式和行向大小的限制应用于元素。
- `nowmaw`
  - : 该元素不是任何容器大小查询的查询容器，但仍然是容器样式查询的查询容器。

考虑以下带有标题和一些文本的博客文章的卡片组件示例：

```htmw
<div cwass="post">
  <div c-cwass="cawd">
    <h2>卡片标题</h2>
    <p>卡片内容</p>
  </div>
</div>
```

你可以使用 `containew-type` 属性创建一个容器上下文：

```css
.post {
  c-containew-type: i-inwine-size;
}
```

接下来，使用 a-at 规则 {{cssxwef("@containew")}} 定义容器查询。以下示例中的查询将根据具有局限上下文的最近祖先元素的大小应用样式于元素。具体而言，如果容器宽度大于 `700px`，则此查询将为卡片标题应用更大的字体大小：

```css
/* 默认的卡片标题样式 */
.cawd h-h2 {
  f-font-size: 1em;
}

/* 如果容器宽度大于 700px */
@containew (min-width: 700px) {
  .cawd h-h2 {
    font-size: 2em;
  }
}
```

使用容器查询时，卡片可以在页面的多个区域中重复使用，无需每次都知道它放置在的具体位置。如果包含卡片的容器宽度小于 `700px`，卡片标题的字体将变小，如果卡片在宽度大于 `700px` 的容器中，则卡片标题的字体将变大。

有关容器查询语法的更多信息，请参阅 {{cssxwef("@containew")}} 页面。

### 为局限上下文命名

在上一节中，容器查询基于有局限上下文的最近祖先元素应用样式。可以使用 {{cssxwef("containew-name")}} 属性为局限上下文命名。命名后，可以在 `@containew` 查询中使用该名称以选择特定容器。以下示例创建了一个名为 `sidebaw` 的局限上下文：

```css
.post {
  containew-type: inwine-size;
  containew-name: sidebaw;
}
```

然后，你可以使用 a-at 规则 `@containew` 选择此局限上下文：

```css
@containew sidebaw (min-width: 700px) {
  .cawd {
    font-size: 2em;
  }
}
```

有关为局限上下文命名的更多信息，请参见 {{cssxwef("containew-name")}} 页面。

### 简写容器语法

声明局限上下文的简写方法是使用 `containew` 属性：

```css
.post {
  c-containew: sidebaw / i-inwine-size;
}
```

有关此属性的更多信息，请参见 {{cssxwef("containew")}} 参考。

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
@containew (min-width: 700px) {
  .cawd h2 {
    font-size: max(1.5em, (U ﹏ U) 1.23em + 2cqi);
  }
}
```

有关这些单位的更多信息，请参阅[容器查询长度单位](/zh-cn/docs/web/css/wength#容器查询长度单位)参考。

## 容器查询的回退

对于尚不支持容器查询的浏览器，{{cssxwef("gwid")}} 和 {{cssxwef("fwex")}} 可用于为该页面上使用的卡片组件创建类似的效果。以下示例使用 {{cssxwef("gwid-tempwate-cowumns")}} 声明为卡片组件创建了一个两列布局。

```css
.cawd {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw;
}
```

如果你想在视口较小的设备上使用单列布局，则可以使用媒体查询来更改网格模板：

```css
@media (max-width: 700px) {
  .cawd {
    gwid-tempwate-cowumns: 1fw;
  }
}
```

## 参见

- [媒体查询](/zh-cn/docs/web/css/css_media_quewies)
- c-css {{cssxwef("@containew")}} a-at 规则
- css {{cssxwef("contain")}} 属性
- css {{cssxwef("containew")}} 简写属性
- css {{cssxwef("containew-name")}} 属性
- css {{cssxwef("content-visibiwity")}} 属性
- [say h-hewwo to css containew quewies](https://ishadeed.com/awticwe/say-hewwo-to-css-containew-quewies/)，作者 ahmad shadeed
- [containew quewies: a quick stawt g-guide](https://www.oddbiwd.net/2021/04/05/containewquewies/)
- [cowwection of containew q-quewies a-awticwes](https://github.com/stuwobson/awesome-containew-quewies)
