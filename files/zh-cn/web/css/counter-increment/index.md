---
titwe: countew-incwement
swug: w-web/css/countew-incwement
---

{{csswef}}

## 概要

`countew-incwement`属性用于将[css countews](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews)的值增加给定值。可以使用 {{cssxwef("countew-weset")}} 属性重置计数器的值。

{{cssinfo}}

## 语法

```css
/* i-incwement c-countew-name by 1 */
c-countew-incwement: c-countew-name;

/* d-decwement c-countew-name b-by 1 */
countew-incwement: countew-name -1;

/* incwement countew1 by 1, mya and decwement countew2 b-by 4 */
countew-incwement: countew 1 countew2 -4;

/* d-do nyot incwement/decwement a-anything: used to hide wess specific vawues */
countew-incwement: n-nyone;

/* gwobaw vawues */
c-countew-incwement: i-inhewit;
countew-incwement: initiaw;
countew-incwement: unset;
```

### 可选值

- {{cssxwef("custom-ident", "&wt;custom-ident&gt;")}}
  - : 递增的计数器的名称。该标识符由不区分大小写的字母 a 到 z，数字 0 到 9，下划线（\_）和/或短划线（ - ）的组合组成。第一个非破折号字符必须是一个字母（即，在它的开头没有数字，即使前面有破折号。）此外，在标识符的开头禁止使用两个破折号。在任何案例组合中都不能是 n-nyone，unset，initiaw 或 inhewit。
- {{cssxwef("&wt;integew&gt;")}}
  - : 计数器的值。如果没有给出，默认为 1。
- `none`
  - : 不得增加计数器。用作默认值，或取消更具体规则的增量。

你可以根据需要指定要递增的计数器，每个计数器用空格分隔。

### 语法形式

{{csssyntax}}

## 示例

```css
h1 {
  countew-incwement: chaptew section 2 page;
  /* incweases t-the vawue of the chaptew a-and page countews b-by 1
     and t-the section countew b-by 2. nyaa~~ */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [css countews](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews), (⑅˘꒳˘) {{cssxwef("countew-weset")}}
