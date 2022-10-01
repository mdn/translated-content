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

```css
p { border:dotted;  position:relative; }

#img2 {
  position:absolute;  left:263px;

  clip: rect(40px, 200px, 150px, 30px);
  /* 标准语法，Internet Explorer 4-7 不支持 */
}

#img3 {
  position: absolute; left:526px;

  clip: rect(40px  200px  150px  30px);
  /* 非标准语法，但是包括火狐与 IE 在内的主要浏览器均支持 */
}
```

![hut.jpg](/@api/deki/files/3613/=hut.jpg) ![hut.jpg](/@api/deki/files/3613/=hut.jpg) ![hut.jpg](/@api/deki/files/3613/=hut.jpg)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- Related CSS properties: {{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow-x") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("overflow") }}, {{ Cssxref("display") }}, {{ Cssxref("position") }}
