---
title: "@document"
slug: Web/CSS/@document
---

{{CSSRef}} {{ SeeCompatTable}}

`@document` [CSS](/zh-CN/docs/Web/CSS) [at-rule](/zh-CN/docs/Web/CSS/At-rule) 根据文档的 URL 限制其中包含的样式规则的作用范围。它主要是为用户定义的样式表（UserStyle）而设计的，但也可以在作者定义的样式表上使用。

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## 语法

`@document` 规则可以指定一个或多个匹配函数。如果任何功能适用于给定的 URL，则该规则将对该 URL 生效。可用的函数如下：

- `url()`，匹配整个 URL。
- `url-prefix()`，匹配文档的 URL 是否以参数指定的值开头。
- `domain()`，匹配文档的域名是否为参数中指定的域名或者为它的子域名。
- `regexp()`，匹配文档的 URL 是否和参数中指定的[正则表达式](/zh-CN/JavaScript/Guide/Regular_expressions)匹配。该表达式必须匹配整个 URL。

提供给 `url()`、`url-prefix()`，和 `domain()` 函数的参数可以不使用引号括起来。但提供给 `regexp()` 函数的参数必须用引号括起来。

提供给 `regexp()` 函数的正则表达式中的转义字符必须再次进行一次 CSS 转义。例如，一个点号（`.`），在正则表达式中匹配任意换行符之外的字母。如果想要匹配一个正真的点号，必须首先按照正则表达式的规则转义一次（变为 `\.`）然后在使用 CSS 的规则再转义一次（转换为`\\.`）。

## 例子

```css
@document url(http://www.w3.org/),
          url-prefix(http://www.w3.org/Style/),
          domain(mozilla.org),
          regexp("https:.*") {
  /* 该条 CSS 规则会应用在下面的网页：
     + URL 为"http://www.w3.org/"的页面。
     + 任何 URL 以"http://www.w3.org/Style/"开头的网页
     + 任何主机名为"mozilla.org"或者主机名以".mozilla.org"结尾的网页
     + 任何 URL 以"https:"开头的网页 */

  /* 让上述网页变得超级丑 */
  body {
    color: purple;
    background: yellow;
  }
}
```

## 规范

`@document` 在 Level 3 中[被初始化](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document)，并被[推迟](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes)到 Level 4，但随后被移除。

## 浏览器兼容性

{{Compat}}

## 参见

- [Per-site user style sheet rules](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) on the www-style mailing list.
- The file [`userContent.css`](https://www.mozilla.org/support/firefox/edit#content) is a user stylesheet on Gecko-based browsers.
