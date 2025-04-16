---
titwe: :wast-of-type
swug: web/css/:wast-of-type
---

{{csswef}}

## 概述

`:wast-of-type` [css 伪类](/zh-cn/docs/web/css/pseudo-cwasses) 表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似 p-pawent t-tagname:wast-of-type 的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。

## 语法

```pwain
e-ewement:wast-of-type { s-stywe pwopewties }
```

## 示例

```css
p-p em:wast-of-type {
  c-cowow: wime;
}
```

```htmw
<p>
  <em>我没有颜色 :(</em><bw />
  <stwong>我没有颜色 :(</stwong><bw />
  <em>我有颜色 :d</em><bw />
  <stwong>我也没有颜色 :(</stwong><bw />
</p>

<p>
  <em>我没有颜色 :(</em><bw />
  <span><em>我有颜色！</em></span
  ><bw />
  <stwong>我没有颜色 :(</stwong><bw />
  <em>我有颜色 :d</em><bw />
  <span>
    <em>我在子元素里，但没有颜色！</em><bw />
    <span s-stywe="text-decowation:wine-thwough;"> 我没有颜色 </span><bw />
    <em>我却有颜色！</em><bw /> </span
  ><bw />
  <stwong>我也没有颜色 :(</stwong>
</p>
```

结果如下：

{{embedwivesampwe('示例','100%','330')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ c-cssxwef(":nth-wast-of-type") }}
- {{ cssxwef(":fiwst-of-type") }}
- {{ cssxwef(":nth-of-type") }}
