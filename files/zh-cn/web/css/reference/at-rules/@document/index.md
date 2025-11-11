---
title: "@document"
slug: Web/CSS/Reference/At-rules/@document
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{deprecated_header}}{{Non-standard_header}}

**`@document`** [CSS](/zh-CN/docs/Web/CSS) [At 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)根据文档的 URL 限制其中包含的样式规则的作用范围。它主要是为用户定义的样式表而设计的，但也可以在开发者定义的样式表上使用。

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## 语法

`@document` 规则可以指定一个或多个匹配函数。如果其中的任何函数适用于给定的 URL，则该规则将对该 URL 生效。可用的函数如下：

- `url()`
  - : 匹配完全相符的 URL。
- `url-prefix()`
  - : 匹配文档的 URL 是否以参数指定的值开头。
- `domain()`
  - : 匹配文档的域名是否为参数中指定的域名或者为它的子域名。
- `media-document()`
  - : 根据参数中的字符串匹配媒体查询，匹配其中之一：`video`、`image`、`plugin` 或 `all`。
- `regexp()` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 匹配文档的 URL 是否和参数中指定的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)匹配，该表达式必须匹配整个 URL。

提供给 `url()`、`url-prefix()`、`domain()` 和 `media-document()` 函数的参数可以不使用引号括起来。但提供给 `regexp()` 函数的参数*必须*用引号括起来。

提供给 `regexp()` 函数的正则表达式中的转义字符必须再次进行一次 CSS 转义。例如，一个句号（`.`）在正则表达式中匹配任何字符。如果想要匹配一个真正的句号，必须首先按照正则表达式的规则转义一次（变为 `\.`）然后再使用 CSS 规则对该字符串进行转义（转换为 `\\.`）。

`@document` 目前只在 Firefox 火狐浏览器中支持。如果你想在非 Firefox 火狐浏览器中使用此功能，你可以尝试使用由 @An-Error94 提供的 [polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill)，它使用了用户脚本、[data-\* 属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)和[属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)的组合。

> [!NOTE]
> 这个属性还有一个带有 `-moz-` 的前缀版本——`@-moz-document`。在 Firefox 火狐浏览器 59 的 Nightly 和 Beta 版本中，此版本已被限制仅在用户和 UA 样式表中使用——这是一个旨在减轻潜在的 CSS 注入攻击的实验性特性。（请参阅 [Firefox bug 1035091](https://bugzil.la/1035091)）。

## 形式语法

```plain
@document [ <url>                    |
            url-prefix(<string>)     |
            domain(<string>)         |
            media-document(<string>) |
            regexp(<string>)
          ]# {
  <group-rule-body>
}
```

## 示例

### 指定 CSS 规则的文档

```css
@document url("http://www.w3.org/"),
          url-prefix("http://www.w3.org/Style/"),
          domain("mozilla.org"),
          media-document("video"),
          regexp("https:.*") {
  /* 这里适用的 CSS 规则：
     - 页面为“http://www.w3.org/”
     - 任何 URL 以“http://www.w3.org/Style/”开头的页面
     - 任何 URL 的主机为“mozilla.org”或以“.mozilla.org”结尾的页面
     - 任何独立视频
     - 任何以“https:”开头的页面 */

  /* 让上述网页变得超级丑 */
  body {
    color: purple;
    background: yellow;
  }
}
```

## 规范

`@document` 在第三版中[开始拟定标准](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document)，并在后来被[推迟](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes)到第 4 版，但随后被移除。

## 浏览器兼容性

{{Compat}}

## 参见

- www-style 邮件列表中的[各网站用户样式表规则](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135)。
