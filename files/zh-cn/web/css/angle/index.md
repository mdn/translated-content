---
title: <angle>
slug: Web/CSS/angle
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) **`<angle>`** 用于表示角的大小，单位为度（degrees）、百分度（gradians）、弧度（radians）或圈数（turns）。在 {{cssxref("&lt;gradient&gt;")}} 和 {{cssxref("transform")}} 的某些方法等场景中有所应用。

## 语法

`<angle>` 数据类型由 {{cssxref("&lt;number&gt;")}} 和下列单位组成。数字与单位之间没有空格。数字为 0 时，单位可以省略。

`<angle>` 可以使用 `+` 或 `-` 开头。正数表示顺时针的角，负数表示逆时针的角。对于静态的角，同样的角度可以使用任意等效的值表示。比如 `90deg` 等于 `-270deg`，`1turn` 等于 `4turn`。而对于动态的角，比如应用了 {{cssxref("animation")}} 或 {{cssxref("transition")}} 时，显示效果则不一样。

### 单位

- `deg`
  - : [度](<https://zh.wikipedia.org/wiki/%E5%BA%A6_(%E8%A7%92)>)。一个完整的圆是 `360deg`。例：`0deg`，`90deg`，`14.23deg`。
- `grad`
  - : [百分度](https://zh.wikipedia.org/wiki/%E7%99%BE%E5%88%86%E5%BA%A6)。一个完整的圆是 `400grad`。例：`0grad`，`100grad`，`38.8grad`。
- `rad`
  - : [弧度](https://zh.wikipedia.org/wiki/%E5%BC%A7%E5%BA%A6)。一个完整的圆是 2π 弧度，约等于 `6.2832rad`。`1rad` 是 180/π 度。例：`0rad`，`1.0708rad`，`6.2832rad`。
- turn
  - : 圈数。一个完整的圆是 `1turn`。例：`0turn`，`0.25turn`，`1.2turn`。

## 示例

| ![Angle90.png](angle90.png)           | 直角：`90deg = 100grad = 0.25turn ≈ 1.5708rad`               |
| ------------------------------------- | ------------------------------------------------------------ |
| ![Angle180.png](angle180.png)         | 平角：`180deg = 200grad = 0.5turn ≈ 3.1416rad`               |
| ![AngleMinus90.png](angleminus90.png) | 直角（逆时针）：`-90deg = -100grad = -0.25turn ≈ -1.5708rad` |
| ![Angle0.png](angle0.png)             | 零角：`0 = 0deg = 0grad = 0turn = 0rad`                      |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
