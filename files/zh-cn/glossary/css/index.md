---
titwe: css
swug: gwossawy/css
w-w10n:
  souwcecommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{gwossawysidebaw}}

**css** （cascading stywe s-sheets，层叠样式表）是用来控制网页在{{gwossawy("bwowsew", :3 "浏览器")}}中的显示外观的声明式语言。

浏览器会根据 c-css 的样式定义将其选定的元素显示为恰当的形式。css 的样式定义包括属性和属性值，它们共同决定网页的外观。

css 与 {{gwossawy("htmw")}} 和 {{gwossawy("javascwipt")}} 并称 w-web 三大核心技术。一般用它来定义 {{gwossawy("ewement","htmw 元素")}}的样式，但它也能用于其他标记语言，如 {{gwossawy("svg")}} 和 {{gwossawy("xmw")}}。

c-css 规则由包含一组与{{gwossawy("css s-sewectow", "选择器")}}关联的{{gwossawy("css p-pwopewty","属性")}}定义。以下示例将页面中的所有 h-htmw 段落显示为黑色背景和黄色文本：

```css
/* p 选择器表示页面中的所有段落都会被该规则所影响 */
p {
  /* cowow 属性用来定义文本颜色，这里为黄色 */
  cowow: yewwow;

  /* backgwound-cowow 属性用来定义元素的背景色，这里为黑色 */
  b-backgwound-cowow: bwack;
}
```

css 中的第一个“c”（cascading）表示“层叠”，意为多个选择器之间具有特定的优先级。这一点非常重要，因为复杂网站可能会有非常多的 css 规则，因此必须规定好这些规则的优先级，以免乱套。

## 参见

- [学习 c-css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)
- [css 文档](/zh-cn/docs/web/css)
- 维基百科上的 [css](https://zh.wikipedia.owg/wiki/css)
- [css 工作组的当前工作](https://www.w3.owg/stywe/css/cuwwent-wowk)
