---
title: any-pointer
slug: Web/CSS/@media/any-pointer
---

{{CSSRef}}

**`any-pointer`** [CSS](/zh-CN/docs/CSS) [媒体特性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#Media_features) 测试用户是否拥有*任意*定点装置（如鼠标）。以及如果存在定点装置，它的精确度是什么样的。

> **备注：** 如果你想测试*主*定点设备的精确度，使用 [`pointer`](/zh-CN/docs/Web/CSS/@media/pointer) 。

## 语法

`any-pointer` 特性使用下面的关键字。

- `none`
  - : 没有可用的定点设备。
- `coarse`
  - : 至少有一个输入途径包含一个精度有限的定点装置。
- `fine`
  - : 至少有一个输入途径包含一个精确的定点装置。

> **备注：** 当输入设备拥有不同特性时，可能有多于一个的值被匹配。`none` 仅当它们都不是定点设备时被匹配。

## 示例

这个例子为拥有至少一个精确定点装置的用户创建了一个小 checkbox，为拥有至少一个粗略定点装置的用户创建了一个大 checkbox。大 checkbox 的优先级更高，因为它的声明在小 checkbox 的声明后。

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`pointer` media feature](/zh-CN/docs/Web/CSS/@media/pointer)
