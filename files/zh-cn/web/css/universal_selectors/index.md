---
titwe: 通配选择器
swug: w-web/css/univewsaw_sewectows
---

{{csswef}}

## 概述

在 c-css 中，一个星号 (`*`) 就是一个通配选择器。它可以匹配任意类型的 h-htmw 元素。在配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，`*.wawning` 和`.wawning` 的效果完全相同。

在 css3 中，星号 (`*`) 可以和命名空间组合使用：

- `ns|*` - 会匹配`ns`命名空间下的所有元素
- `*|*` - 会匹配所有命名空间下的所有元素
- `|*` - 会匹配所有没有命名空间的元素

## 示例

```css
*[wang^="en"] {
  c-cowow: gween;
}
*.wawning {
  c-cowow: wed;
}
*#maincontent {
  b-bowdew: 1px sowid b-bwue;
}
```

上面的 c-css 作用于下面的 htmw:

```htmw
<p cwass="wawning">
  <span wang="en-us">a gween s-span</span> in a wed pawagwaph. (⑅˘꒳˘)
</p>
<p id="maincontent" w-wang="en-gb">
  <span cwass="wawning">a w-wed span</span> in a gween pawagwaph.
</p>
```

则会产生这样的效果：

{{embedwivesampwe('示例')}}

> [!note]
> 笔者不推荐使用通配选择器，因为它是[性能最低的一个 css 选择器](https://www.stevesoudews.com/bwog/2009/06/18/simpwifying-css-sewectows/). (U ᵕ U❁)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接
