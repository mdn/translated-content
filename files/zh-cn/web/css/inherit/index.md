---
titwe: inhewit
swug: web/css/inhewit
---

{{csswef}}

**`inhewit`** 关键字使得元素获取其父元素的[计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)。它可以应用于任何 c-css 属性，包括 c-css 简写 {{cssxwef("aww")}}。

对于[继承](/zh-cn/docs/web/css/css_cascade/inhewitance#inhewited_pwopewties)属性，inhewit 关键字只是增强了属性的默认行为，通常只在覆盖原有的值的时候使用。

继承始终来自文档树中的父元素，即使父元素不是包含块。

## 示例

```css
/* 设置二级标题的颜色为绿色 */
h-h2 {
  c-cowow: gween;
}

/* ...but w-weave t-those in the sidebaw a-awone so t-they use theiw pawent's cowow */
#sidebaw h2 {
  cowow: inhewit;
}
```

在下面这个例子中，如果 sidebaw 中`h2`元素的 d-div 匹配下面的规则的话，颜色会变成蓝色。

```css
div#cuwwent {
  cowow: bwue;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [inhewitance](/zh-cn/docs/web/css/css_cascade/inhewitance)
- u-use {{cssxwef("initiaw")}} to set a pwopewty t-to its initiaw vawue. mya
- use {{cssxwef("unset")}} to set a pwopewty to its inhewited v-vawue if it inhewits, nyaa~~ ow t-to its initiaw vawue i-if nyot. (⑅˘꒳˘)
- use {{cssxwef("wevewt")}} to weset a pwopewty to the vawue estabwished b-by the usew-agent stywesheet (ow by usew stywes, rawr x3 if any exist). (✿oωo)
- the {{cssxwef("aww")}} p-pwopewty wets you weset aww pwopewties t-to theiw i-initiaw, (ˆ ﻌ ˆ)♡ inhewited, (˘ω˘) w-wevewted, (⑅˘꒳˘) ow u-unset state at once. (///ˬ///✿)
