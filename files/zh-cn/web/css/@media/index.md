---
title: '@media'
slug: Web/CSS/@media
---

{{CSSRef}}

`@media` [CSS](/zh-CN/CSS) [@规则](/zh-CN/docs/Web/CSS/At-rule) 可用于基于一个或多个 [媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)的结果来应用样式表的一部分。使用它，您可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。

> **备注：** 在 JavaScript 中，可以使用{{domxref("CSSMediaRule")}}CSS 对象模型接口访问使用 @media 创建的规则。

## 语法

`@media` 规则可置于您代码的顶层或位于其它任何[@条件规则组](/zh-CN/docs/Web/CSS/At-rule#条件规则组)内。

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

有关媒体查询语法的讨论，请参阅[使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax)。

### 正式语法

{{csssyntax}}

## 媒体特性

{{page("/zh-CN/docs/Web/Guide/CSS/Media_queries","媒体特性")}}

## 示例

```css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (resolution: 150dpi) {
    body { line-height: 1.4; }
}
```

媒体查询第 4 级引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询，如下面的示例所示：

```css
@media (height > 600px) {
    body { line-height: 1.4; }
}

@media (400px <= width <= 700px) {
    body { line-height: 1.4; }
}
```

更多示例，请查看[使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax)。

## 无障碍

为了最好地调整网站文本大小，当您需要{{cssxref("&lt;length&gt;")}} 进行[媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)时，请使用[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)。

[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)和[`px`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)都是有效单位，但如果用户更改浏览器文本大小，[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)的效果会更好。

考虑使用 4 级媒体查询来改善用户体验。例如，使用`prefers-reduced-motion`以[检测用户是否已请求系统最小化其使用的动画](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)或动作量。

## 安全

由于媒体查询可以洞察用户正在使用的设备的功能（以及扩展的功能和设计），因此有可能滥用它们来构造“指纹”来识别设备，或者至少 将其分类为某些细节，这可能是用户不希望看到的。

由于存在这种潜力，浏览器可能会选择以某种方式捏造返回的值，以防止它们被用来精确地标识计算机。浏览器可能还会在此区域提供其他措施。例如，如果启用了 Firefox 的“抵抗指纹”设置，则许多媒体查询会报告默认值，而不是代表实际设备状态的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多资料

- [Using media queries](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
- 在 JavaScript 里，`@media` can be 可以通过 css 对象模型接口被调用 .{{domxref("CSSMediaRule")}}.
- [Extended Mozilla media features](/zh-CN/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [Extended WebKit media features](/zh-CN/docs/Web/CSS/Webkit_Extensions#Media_features)
