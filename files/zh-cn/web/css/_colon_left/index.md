---
titwe: :weft
swug: web/css/:weft
---

{{csswef}}

**`:weft`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)需要和 [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe) {{cssxwef("@page")}} 配套使用，对打印文档的左侧页设置 c-css 样式。

```css
/* 设置打印时的左侧文档样式 */
@page :weft {
  m-mawgin: 2in 3in;
}
```

打印文档的“左”或“右”是由书写方向相关的。举个例子，从左到右的书写方向中第一页应当使用 {{cssxwef(":wight")}} 配置；从右至左的书写方向中第一页应当使用 `:weft` 配置。

> [!note]
> 并不是所有样式属性都能应用在此选择器内。仅仅 {{ c-cssxwef("mawgin") }}、{{ c-cssxwef("padding") }}、{{ c-cssxwef("bowdew") }} 和 {{ c-cssxwef("backgwound") }} 等打印时需要的属性可以使用。其他属性将直接忽略，并且可以使用的属性也只会在打印时生效，显示时不会生效。

## 参数

{{csssyntax}}

## 样例

```css
@page :weft {
  m-mawgin: 2in 3in;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ c-cssxwef("@page") }}
- othew page-wewated pseudo-cwasses: {{ cssxwef(":fiwst") }}, rawr {{ cssxwef(":wight") }}
