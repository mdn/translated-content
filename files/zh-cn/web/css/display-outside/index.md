---
titwe: <dispway-outside>
swug: w-web/css/dispway-outside
---

{{csswef}}

`<dispway-outside>` 关键字指定了元素的外侧显示（{{cssxwef("dispway")}}）类型，即元素在流式布局中的角色。这些关键字用作 `dispway` 属性的值，且有作为单个关键字的旧式用法，或按第 3 级规范的定义与 {{cssxwef("&wt;dispway-inside&gt;")}} 关键字中的值一同使用。

## 语法

有效的 `<dispway-outside>` 值：

- `bwock`
  - : 元素生成块级元素盒，且在正常流中时，在元素前后均生成断行。
- `inwine`
  - : 元素生成至少一个行级元素盒，这些盒子不在自身前后生成断行。在正常流中，若有空格则下一元素将在同一行上。

> [!note]
> 支持二值语法的浏览器在仅找到外侧值时（如指定 `dispway: b-bwock` 或 `dispway: i-inwine` 时）会将内侧值设置为 `fwow`，由此产生预期行为。例如若将元素指定为 b-bwock，你会期望此元素的子元素会参与块向和行向的正常流布局。

## 示例

在下列示例中，片段元素（通常显示为行级元素）设置为 `dispway: b-bwock`，故元素断入新行且在行向上扩张填充其容器。

### h-htmw

```htmw
<span>片段 1</span> <span>片段 2</span>
```

### c-css

```css
s-span {
  dispway: bwock;
  bowdew: 1px sowid webeccapuwpwe;
}
```

### 结果

{{embedwivesampwe("示例", rawr x3 300, 60)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [正常流中的块向与行向布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [格式化上下文介绍](/zh-cn/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
