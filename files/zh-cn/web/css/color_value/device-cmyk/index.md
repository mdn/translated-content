---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
---

{{CSSRef}}

**`device-cmyk()`** 函数标记用于以设备依赖的方式表达 CMYK 颜色，指定其青色、品红色、黄色和黑色成分。

创建要输出到特定打印机的材料时，若特定墨水组合的输出的已知的，这种颜色方法非常有用。CSS 处理器可能会尝试近似颜色，但最终结果可能与打印结果不同。

## 语法

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### 值

函数标记：`device-cmyk(C M Y K[ / A][, color])`

- `C`、`M`、`Y`、`K`

  - : {{CSSXref("number")}} 或 {{CSSXref("percentage")}} 值，提供 CMYK 颜色的青色、品红色、黄色和黑色成分。

- `A` {{optional_inline}}

  - : {{CSSXref("&lt;alpha-value&gt;")}} 值，其中 `1` 对应 `100%`（完全不透明）。

- `color` {{optional_inline}}

  - : 可选的后备 {{CSSXref("&lt;color&gt;")}} 值，当用户代理不知道如何将 CMYK 颜色转换为 RGB 颜色时使用。

### 形式语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
