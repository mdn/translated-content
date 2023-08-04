---
title: "@keyframes"
slug: Web/CSS/@keyframes
---

{{CSSRef}}

关键帧 **`@keyframes`** [at-rule](/zh-CN/docs/Web/CSS/At-rule) 规则通过在动画序列中定义关键帧（或 waypoints）的样式来控制 CSS 动画序列中的中间步骤。和 [转换 transition](/zh-CN/docs/Web/CSS/CSS_transitions) 相比，关键帧 keyframes 可以控制动画序列的中间步骤。

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

JavaScript 可以通过 CSS 对象模型的 {{domxref("CSSKeyframesRule")}} 接口来访问 `@keyframes`。

要使用关键帧，先创建一个带名称的 `@keyframes` 规则，以便后续使用 {{ cssxref("animation-name") }} 属性将动画同其关键帧声明匹配。每个 `@keyframes` 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。

可以按任意顺序列出关键帧百分比；它们将按照其应该发生的顺序来处理。

### 让关键帧序列生效

如果一个关键帧规则没有指定动画的开始或结束状态（也就是，`0%`/`from` 和`100%`/`to`，浏览器将使用元素的现有样式作为起始/结束状态。这可以用来从初始状态开始元素动画，最终返回初始状态。

如果在关键帧的样式中使用了不能用作动画的属性，那么这些属性会被忽略掉，支持动画的属性仍然是有效的，不受波及。

### 重复定义

如果多个关键帧使用同一个名称，以最后一次定义的为准。 `@keyframes` 不存在层叠样式 (cascade) 的情况，所以动画在一个时刻（阶段）只会使用一个的关键帧的数据。

如果一个 @keyframes 内的关键帧的百分比存在重复的情况，则 @keyframes 规则中该百分比的所有关键帧都将用于该帧。如果多个关键帧指定了相同的百分比值，则 @keyframes 规则内是可以使用层叠样式的。

### 属性个数不定

如果一个关键帧中没有出现其他关键帧中的属性，那么这个属性将使用插值（不能使用插值的属性除外，这些属性会被忽略掉）。例如：

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

例子中，{{ cssxref("top") }} 属性分别出现在关键帧 `0%`、`30%` 和 `100%` 的中，而 {{ cssxref("left") }} 属性分别出现在关键帧 `0%`、`68%`、`72%` 和 `100%` 中。

### 同一关键帧中的相同属性被重复定义

如果某一个关键帧出现了重复的定义，且重复的关键帧中的 CSS 属性值不同，则以最后一次定义的属性为准。例如：

```css
@keyframes identifier {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    left: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
```

上面这个例子中，`50%` 关键帧中分别最后设置的属性 `top: 10px` 和 `left: 20px` 是有效的，但是其他的属性会被忽略。

Firefox 14 开始支持层叠 keyframes。

### 关键帧中的 `!important`

关键帧中出现的 `!important` 将会被忽略。

```css
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  50% {
    margin-top: 150px !important;
  } /* 忽略 */
  to {
    margin-top: 100px;
  }
}

@keyframes important2 {
  from {
    margin-top: 50px;
    margin-bottom: 100px;
  }
  to {
    margin-top: 150px !important; /* 忽略 */
    margin-bottom: 50px;
  }
}
```

## 语法

### 取值

- {{cssxref("custom-ident")}}
  - : 帧列表的名称。名称必须符合 CSS 语法中对标识符的定义。
- `from`
  - : 等价于 `0%`。
- `to`
  - : 等价于 `100%`。
- {{cssxref("&lt;percentage&gt;")}}
  - : 动画序列中触发关键帧的时间点，使用百分值来表示。

### 形式化语法

{{csssyntax}}

## 示例

参见[使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{ domxref("AnimationEvent") }}
