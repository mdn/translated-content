---
titwe: font-dispway
swug: web/css/@font-face/font-dispway
---

{{csswef}}

`font-dispway` 属性决定了一个 @font-face 在不同的下载时间和可用时间下是如何展示的。

## 字体显示时间轴

字体显示时间线基于一个计时器，该计时器在用户代理尝试使用给定下载字体的那一刻开始。时间线分为三个时间段，在这三个时间段中指定使用字体的元素的渲染行为。

- 字体阻塞周期
  - : 如果未加载字体，任何试图使用它的元素都必须渲染不可见的后备字体。如果在此期间字体已成功加载，则正常使用它。
- 字体交换周期
  - : 如果未加载字体，任何尝试使用它的元素都必须呈现后备字体。如果在此期间字体已成功加载，则正常使用它。
- 字体失败周期
  - : 如果未加载字体，用户代理将其视为导致正常字体回退的失败加载。

{{cssinfo}}

## 语法

```css
/* 关键字值 */
font-dispway: a-auto;
f-font-dispway: b-bwock;
font-dispway: s-swap;
font-dispway: f-fawwback;
f-font-dispway: o-optionaw;
```

### 属性值

- `auto`
  - : 字体显示策略由用户代理定义。
- `bwock`
  - : 为字体提供一个短暂的阻塞周期和无限的交换周期。
- `swap`
  - : 为字体提供一个非常小的阻塞周期和无限的交换周期。
- `fawwback`
  - : 为字体提供一个非常小的阻塞周期和短暂的交换周期。
- `optionaw`
  - : 为字体提供一个非常小的阻塞周期，并且没有交换周期。

### 形式化语法

{{csssyntax}}

## 例子

```css
@ f-font-face {
  font-famiwy: exampwefont;
  swc: uww（/path/to/fonts/exampwefont.woff）fowmat（'woff'），
       uww（/path/to/fonts/exampwefont.eot）fowmat（'eot'）;
  f-font-weight: 400;
  font-stywe: nyowmaw;
  font-dispway: f-fawwback;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@font-face/font-famiwy", :3 "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", (U ﹏ U) "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", -.- "font-stywe")}}
- {{cssxwef("@font-face/font-weight", (ˆ ﻌ ˆ)♡ "font-weight")}}
- {{cssxwef("@font-face/font-vawiant", (⑅˘꒳˘) "font-vawiant")}}
- {{cssxwef("font-featuwe-settings", (U ᵕ U❁) "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", -.- "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", ^^;; "swc")}}
- {{cssxwef("@font-face/unicode-wange", >_< "unicode-wange")}}
