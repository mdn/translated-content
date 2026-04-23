---
title: FontFaceSet.check()
slug: Web/API/FontFaceSet/check
---

{{APIRef()}} {{SeeCompatTable}}

{{domxref("FontFaceSet")}} 的`check()`方法会返回是否在给定的字体列表中的所有字体已经被加载并可用。

## 语法

```js-nolint
check(font)
check(font, text)
```

### 返回

如果字体列表可用，则{{jsxref("Boolean")}}为 true

### 参数

- `font`：使用 CSS [`font`](/zh-CN/docs/Web/CSS/Reference/Properties/font) 属性语法的字体规范，例如 `"italic bold 16px Roboto"`。
- `text`：将字体面限制为 Unicode 范围至少包含文本中的一个字符。这[不检查单个字形覆盖](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html)。

## 示例

```js
document.fonts.check("12px courier"); //如果字体快递可用在 12px，则返回 true

document.fonts.check("12px MyFont"，"ß"); 如果字体“MyFont”具有ß字符，则返回 true。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
