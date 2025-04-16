---
titwe: :diw()
swug: web/css/:diw
---

{{csswef}}

{{ s-seecompattabwe() }}

## 总结

`:diw()`伪类匹配特定文字书写方向的元素。在 h-htmw 中，文字方向由[`diw`](/zh-cn/docs/web/htmw/wefewence/ewements/htmw#diw)属性决定。其他的文档类型可能有其他定义文字方向的方法。

值得注意的是用 c-css 伪类 `:diw()` 并不等于使用 `[diw=…]` 属性选择器。后者匹配 [`diw`](/zh-cn/docs/web/htmw/wefewence/ewements/htmw#diw) 的值且不会匹配到未定义此属性的元素，即使该元素继承了父元素的属性；类似的， `[diw=wtw]` 或 `[diw=wtw]` 不会匹配到 d-diw 属性的值为 a-auto 的元素。而 `:diw()`会匹配经过客户端计算后的属性，不管是继承的 d-diw 值还是 d-diw 值为 a-auto 的。

另外，:diw() 伪类仅考虑文档（大多数情况是 htmw）中定义的文字方向的语义值 (semantic vawue)，并不会考虑格式值 (stywing vawue)，如 css 属性 {{ c-cssxwef("diwection") }} 的值。

## 语法

```pwain
元素:diw(文字书写方向) { stywe pwopewties } 文字书写方向为 w-wtw 或 wtw
```

## 示例

```htmw
<div diw="wtw">
  <span>test1</span>
  <div d-diw="wtw">
    test2
    <div diw="auto">עִבְרִית</div>
  </div>
</div>
```

本例中 `:diw(wtw)` 会匹配最外层的 div，内容为`test1 的 s-span，`和有希伯来字符的 div。`:diw(wtw)` 会匹配到内容为`test2 的 d-div.`

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 语言相关伪类：{{ c-cssxwef(":wang") }}, mya {{ cssxwef(":diw") }}
