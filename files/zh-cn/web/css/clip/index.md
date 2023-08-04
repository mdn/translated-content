---
title: clip
slug: Web/CSS/clip
---

{{CSSRef}}{{deprecated_header}}

## 概述

`clip` 属性定义了元素的哪一部分是可见的。`clip` 属性只适用于 {{ cssxref("position","position:absolute") }} 的元素。

> **警告：** 这个属性已被废弃。建议使用 {{cssxref("clip-path")}} 。

{{cssinfo}}

## 语法

[形式语法](/zh-CN/docs/CSS/Value_definition_syntax): {{csssyntax("clip")}}

```
clip: rect(1px, 10em, 3rem, 2ch)
clip: auto

clip: inherit
```

### 值

- `<shape>`

  - : 一个矩形 {{cssxref("&lt;shape&gt;")}}

    ```css
    rect(<top>, <right>, <bottom>, <left>)   /* 标准语法 */
    ```

    或

    ```css
    rect(<top> <right> <bottom> <left>)      /* 向后兼容语法 */
    ```

    `<top>` 和 `<bottom>` 指定相对于盒子*上边框边界* 的偏移，`<right>` 和 `<left>` 指定了相对于盒子*左边框边界* 的偏移。
    `<top>`、`<right>`、`<bottom>` 和 `<left>` 的值可以是 {{cssxref("&lt;length&gt;")}} 值或 `auto`。

- `auto`
  - : 元素不裁剪 (默认值)

## 示例

### 裁剪图像

#### HTML

```html
<p class="dotted-border">
  <img src="macarons.png" title="Original graphic" />
  <img id="top-left" src="macarons.png" title="Graphic clipped to upper left" />
  <img id="middle" src="macarons.png" title="Graphic clipped towards middle" />
  <img
    id="bottom-right"
    src="macarons.png"
    title="Graphic clipped to bottom right" />
</p>
```

#### CSS

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 390px;
  height: 400px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 400px;
  clip: rect(0, 130px, 90px, 0);
}

#middle {
  left: 270px;
  clip: rect(100px, 260px, 190px, 130px);
}

#bottom-right {
  left: 140px;
  clip: rect(200px, 390px, 290px, 260px);
}
```

#### 结果

{{EmbedLiveSample('裁剪图像', '', '450px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Related CSS properties: {{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow-x") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("overflow") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}
