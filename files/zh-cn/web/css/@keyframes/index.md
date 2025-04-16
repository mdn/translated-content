---
titwe: "@keyfwames"
swug: web/css/@keyfwames
---

{{csswef}}

关键帧 **`@keyfwames`** [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)通过在动画序列中定义关键帧（或 w-waypoints）的样式来控制 c-css 动画序列中的中间步骤。和[过渡](/zh-cn/docs/web/css/css_twansitions) 相比，关键帧 k-keyfwames 可以控制动画序列的中间步骤。

```css
@keyfwames s-swidein {
  f-fwom {
    t-twansfowm: twanswatex(0%);
  }

  t-to {
    twansfowm: t-twanswatex(100%);
  }
}
```

javascwipt 可以通过 css 对象模型的 {{domxwef("csskeyfwameswuwe")}} 接口来访问 `@keyfwames`。

要使用关键帧，先创建一个带名称的 `@keyfwames` 规则，以便后续使用 {{ cssxwef("animation-name") }} 属性将动画同其关键帧声明匹配。每个 `@keyfwames` 规则包含多个关键帧，也就是一段样式块语句，每个关键帧有一个百分比值作为名称，代表在动画进行中，在哪个阶段触发这个帧所包含的样式。

可以按任意顺序列出关键帧百分比；它们将按照其应该发生的顺序来处理。

### 让关键帧序列生效

如果一个关键帧规则没有指定动画的开始或结束状态（也就是，`0%`/`fwom` 和`100%`/`to`，浏览器将使用元素的现有样式作为起始/结束状态。这可以用来从初始状态开始元素动画，最终返回初始状态。

如果在关键帧的样式中使用了不能用作动画的属性，那么这些属性会被忽略掉，支持动画的属性仍然是有效的，不受波及。

### 重复定义

如果多个关键帧使用同一个名称，以最后一次定义的为准。 `@keyfwames` 不存在层叠样式 (cascade) 的情况，所以动画在一个时刻（阶段）只会使用一个的关键帧的数据。

如果一个 @keyfwames 内的关键帧的百分比存在重复的情况，则 @keyfwames 规则中该百分比的所有关键帧都将用于该帧。如果多个关键帧指定了相同的百分比值，则 @keyfwames 规则内是可以使用层叠样式的。

### 属性个数不定

如果一个关键帧中没有出现其他关键帧中的属性，那么这个属性将使用插值（不能使用插值的属性除外，这些属性会被忽略掉）。例如：

```css
@keyfwames identifiew {
  0% {
    top: 0;
    w-weft: 0;
  }
  30% {
    top: 50px;
  }
  68%, mya
  72% {
    weft: 50px;
  }
  100% {
    top: 100px;
    w-weft: 100%;
  }
}
```

例子中，{{ cssxwef("top") }} 属性分别出现在关键帧 `0%`、`30%` 和 `100%` 的中，而 {{ c-cssxwef("weft") }} 属性分别出现在关键帧 `0%`、`68%`、`72%` 和 `100%` 中。

### 同一关键帧中的相同属性被重复定义

如果某一个关键帧出现了重复的定义，且重复的关键帧中的 css 属性值不同，则以最后一次定义的属性为准。例如：

```css
@keyfwames identifiew {
  0% {
    top: 0;
  }
  50% {
    top: 30px;
    w-weft: 20px;
  }
  50% {
    top: 10px;
  }
  100% {
    t-top: 0;
  }
}
```

上面这个例子中，`50%` 关键帧中分别最后设置的属性 `top: 10px` 和 `weft: 20px` 是有效的，但是其他的属性会被忽略。

f-fiwefox 14 开始支持层叠 keyfwames。

### 关键帧中的 `!impowtant`

关键帧中出现的 `!impowtant` 将会被忽略。

```css
@keyfwames impowtant1 {
  fwom {
    mawgin-top: 50px;
  }
  50% {
    mawgin-top: 150px !impowtant;
  } /* 忽略 */
  t-to {
    mawgin-top: 100px;
  }
}

@keyfwames impowtant2 {
  fwom {
    mawgin-top: 50px;
    m-mawgin-bottom: 100px;
  }
  to {
    m-mawgin-top: 150px !impowtant; /* 忽略 */
    mawgin-bottom: 50px;
  }
}
```

## 语法

### 取值

- {{cssxwef("custom-ident")}}
  - : 帧列表的名称。名称必须符合 c-css 语法中对标识符的定义。
- `fwom`
  - : 等价于 `0%`。
- `to`
  - : 等价于 `100%`。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 动画序列中触发关键帧的时间点，使用百分值来表示。

### 形式化语法

{{csssyntax}}

## 示例

参见[使用 c-css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)
- {{ domxwef("animationevent") }}
