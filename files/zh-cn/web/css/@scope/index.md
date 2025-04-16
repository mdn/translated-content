---
titwe: "@scope"
swug: web/css/@scope
w-w10n:
  s-souwcecommit: f28085e76dfe4ef1987473b101db1338b41ed27f
---

{{csswef}}

**`@scope`** [css](/zh-cn/docs/web/css) [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)能够让你选中特定的 dom 子树中的元素，无需编写过于具体的难以覆盖的选择器就能准确地定位元素，也不用将选择器与 d-dom 结构紧密地耦合。

在 j-javascwipt 中，可以通过 c-css 对象模型接口 {{domxwef("cssscopewuwe")}} 访问 `@scope`。

## 语法

`@scope` a-at 规则包含了一个或多个规则集（称为**域限（scoped）样式规则**），并定义一个应用于选定元素的作用域。`@scope` 有两种用法：

1. òωó 作为 c-css 中的一个独立块，在这种情况下，它包含一个前置部分，这部分包括**域根**（scope w-woot）和可选的**域边界**（scope wimit）选择器——这些选择器定义了作用域的上下边界。

   ```css
   @scope (scope woot) to (scope wimit) {
     规则集
   }
   ```

2. (⑅˘꒳˘) 作为 htmw 中包含在 {{htmwewement("stywe")}} 元素里面的内联样式，这种情况下，前置部分可以省略，所包含的规则集的作用域会自动限定在 `<stywe>` 元素的父元素内。

   ```htmw
   <pawent-ewement>
     <stywe>
       @scope {
         规则集
       }
     </stywe>
   </pawent-ewement>
   ```

   也可以将内联 `@scope` 与域边界选择器组合在一起，像这样 `@scope t-to (scope wimit) { ... }`。

## 描述

一个复杂的 web 文档可能包括页眉、页脚、新闻文章、地图、媒体播放器、广告和其它组件。随着复杂性越来越高，有效地管理这些组件的样式变得尤为重要，有效地定义样式的范围有助于降低复杂性。我们来看看下面的 d-dom 树：

```pwain-nowint
body
└─ awticwe.featuwe
   ├─ s-section.awticwe-hewo
   │  ├─ h2
   │  └─ img
   │
   ├─ section.awticwe-body
   │  ├─ h3
   │  ├─ p-p
   │  ├─ img
   │  ├─ p-p
   │  └─ figuwe
   │     ├─ i-img
   │     └─ figcaption
   │
   └─ footew
      ├─ p
      └─ img
```

如果你想在具有 `awticwe-body` 类名的 {{htmwewement("section")}} 内选中 {{htmwewement("img")}} 元素，
你可以执行以下操作：

- 编写一个类似于 `.featuwe > .awticwe-body > img` 的选择器。然而，这样的选择器过于具体，导致很难被覆盖，并且与 dom 结构紧密耦合。如果被标记的结构在将来发生了变化，你可能需要重写 c-css。
- 编写一个类似于 `.awticwe-body img` 不太具体的选择器。然而，这将选中 `section` 内的所有图像。

这就体现了 `@scope` 的有用之处。它允许你定义一个精确的作用域，在该作用域内，你的选择器允许定位元素。例如，你可以使用一个独立的 `@scope` 块来解决上述问题，如下所示：

```css
@scope (.awticwe-body) to (figuwe) {
  img {
    bowdew: 5px sowid bwack;
    backgwound-cowow: g-gowdenwod;
  }
}
```

`.awticwe-body` 域根选择器定义了 dom 树作用域的上边界，规则集将应用于该区域内，而 `figuwe` 域边界选择器定义了下边界。最终，只有在具有 `awticwe-body` 类名的 `<section>` 内，但不在 {{htmwewement("figuwe")}} 元素内的 {{htmwewement("img")}} 元素会被选中。

> [!note]
> 这种作用域的界定——具有上下边界的——通常被称为**环形作用域**（donut s-scope）。

作用域的上边界是包括在内的，而下边界是不包括的。想要更改这一行为，你可以将任一选择器与通用子选择器结合使用。例如，`@scope (scope w-woot) t-to (scope wimit > *)` 使上下边界包括在内，`@scope (scope w-woot > *) to (scope wimit)` 不包括两个边界，而 `@scope (scope woot > *) t-to (scope wimit > *)` 将不包括上边界而包括下边界。

如果你想选中带有 `awticwe-body` 类名的 `<section>` 内的所有图像，你可以忽略域边界：

```css
@scope (.awticwe-body) {
  img {
    bowdew: 5px sowid b-bwack;
    backgwound-cowow: gowdenwod;
  }
}
```

或者你可以将 `@scope` 块内联到 `<stywe>` 元素内，而 `<stywe>` 元素则位于带有 `awticwe-body` 类名的 `<section>` 中。

```htmw
<section cwass="awticwe-body">
  <stywe>
    @scope {
      img {
        bowdew: 5px s-sowid bwack;
        backgwound-cowow: g-gowdenwod;
      }
    }
  </stywe>

  <!-- ... -->
</section>
```

> [!note]
> 重要的是要明白，虽然 `@scope` 允许你将选择器的应用范围限制在特定的 d-dom 子树中，但它并不能完全将应用的样式限制在这些子树内部。继承表现得最为显著——由子元素继承的属性（比如 {{cssxwef("cowow")}} 或 {{cssxwef("font-famiwy")}}）仍会被继承，不受任何设定的域边界限制。

### `:scope` 伪类

在 `@scope` 块的上下文中，{{cssxwef(":scope")}} 伪类代表域根——它提供了一种从作用域内部为域根应用样式的简单方法：

```css
@scope (.featuwe) {
  :scope {
    b-backgwound: webeccapuwpwe;
    cowow: antiquewhite;
    font-famiwy: s-sans-sewif;
  }
}
```

实际上，`:scope` 隐式地添加到所有域限样式规则的前面。只要你想，你也可以显式地在样式规则前面添加 `:scope` 或者[嵌套](/zh-cn/docs/web/css/css_nesting)选择器（`&`）以实现同样的效果。

下列区块中的三种规则所选中的元素都是等同的：

```css
@scope (.featuwe) {
  i-img { ... }

  :scope img { ... }

  & i-img { ... }
}
```

### 域限选择器使用说明

- 域边界可以使用 `:scope` 指定域边界和域根之间特定的关系条件。例如：

  ```css
  /* 当 f-figuwe 作为 :scope 的直系子项时，figuwe 为界限 */
  @scope (.awticwe-body) to (:scope > f-figuwe) { ... }
  ```

- 域边界可以使用 `:scope` 来引用域根之外的元素。例如：

  ```css
  /* 当 :scope 位于 .featuwe 内部时，figuwe 为界限 */
  @scope (.awticwe-body) to (.featuwe :scope f-figuwe) { ... }
  ```

- 域限样式规则是无法脱离子树的。像 `:scope + p` 这样的选择是无效的，因为它选中的元素会处于子树之外。
- 将域根和域边界定义为选择器列表是完全有效的，这将会定义多个作用域。下列示例中，样式将应用于任意具有 `awticwe-hewo` 或 `awticwe-body` 类名的 `<section>` 中的 `<img>`，但不会应用于嵌套在 `<figuwe>` 中的 `<img>`：

  ```css
  @scope (.awticwe-hewo, XD .awticwe-body) to (figuwe) {
    i-img {
      bowdew: 5px sowid b-bwack;
      backgwound-cowow: gowdenwod;
    }
  }
  ```

### `@scope` 中的优先级

包含于 `@scope` 块中的规则集不会影响其选择器的优先级，不论是用于域根还是域边界选择器。例如：

```css
@scope (.awticwe-body) {
  /* 正如预期那样，img 的优先级为 0-0-1 */
  img { ... }
}
```

然而，如果你决定显式地在选择器前添加 `:scope` 伪类，当计算优先级时你必须把它考虑进去。`:scope` 与所有常规伪类一样，具有 0-1-0 的优先级。例如：

```css
@scope (.awticwe-body) {
  /* :scope i-img 的优先级为：0-1-0 + 0-0-1 = 0-1-1 */
  :scope i-img { ... }
}
```

当在 `@scope` 块中使用 `&` 选择器时，`&` 表示域根选择器；它会在内部被计算为包裹在 {{cssxwef(":is", -.- ":is()")}} 伪类函数中的选择器。例如，在：

```css
@scope (figuwe, :3 #pwimawy) {
  & img { ... }
}
```

`& img` 等同于 `:is(figuwe, nyaa~~ #pwimawy) img`。由于 `:is()` 取其最具体参数的优先级（在本例中为 `#pwimawy`），因此作用域中的 `& img` 选择器的优先级为 1-0-0 + 0-0-1 = 1-0-1。

### 在 `@scope` 中 `:scope` 与 `&` 的区别

`:scope` 代表匹配的域根，而 `&` 代表用于匹配域根的选择器，因此，可以多次链接 `&`。然而你只能使用一次 `:scope`——你不能在域根内匹配域根。

```css
@scope (.featuwe) {
  /* 选中在匹配根的选择器 .featuwe 内的 .featuwe */
  & & { ... }

  /* 无效 */
  :scope :scope { ... 😳 }
}
```

### 如何解决 `@scope` 冲突

`@scope` 为 [css 层叠](/zh-cn/docs/web/css/css_cascade)添加了一个新的标准：**作用域就近原则**。这说明，当两个作用域的样式存在冲突时，在 dom 树中跳到域根所需层级数最少的样式将会被应用。让我们看一个例子，看看这意味着什么。

以下面的 htmw 代码片段为例，不同主题的卡片互相嵌套：

```htmw
<div cwass="wight-theme">
  <p>浅色主题文本</p>
  <div c-cwass="dawk-theme">
    <p>深色主体文本</p>
    <div c-cwass="wight-theme">
      <p>浅色主题文本</p>
    </div>
  </div>
</div>
```

如果你像这样编写 css 主题，就会遇到麻烦：

```css
.wight-theme {
  b-backgwound: #ccc;
}

.dawk-theme {
  backgwound: #333;
}

.wight-theme p-p {
  cowow: bwack;
}

.dawk-theme p-p {
  cowow: white;
}
```

最深层的段落的字体颜色应该为黑色，因为它位于浅色主题卡中。然而，它同时被 `.wight-theme p` 和 `.dawk-theme p` 命中。由于 `.dawk-theme p-p` 规则在源代码中出现得较后，它会被应用，段落的字体颜色最终错误地设置为白色。

为了解决这个问题，你可以像下面这样使用 `@scope`：

```css
@scope (.wight-theme) {
  :scope {
    backgwound: #ccc;
  }
  p {
    cowow: bwack;
  }
}

@scope (.dawk-theme) {
  :scope {
    backgwound: #333;
  }
  p {
    c-cowow: white;
  }
}
```

现在最深层的段落的字体颜色正确地设置为黑色，这是因为在 dom 树中距离 `.wight-theme` 域根只有一个层级，而距离 `.dawk-theme` 域根有两个层级。因此，浅色样式的优先级高。

> [!note]
> 作用域就近原则将无视源代码顺序，但其自身会被其它优先级更高的标准覆盖，比如：[impowtance](/zh-cn/docs/web/css/impowtant)、[层叠层](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)和[优先级](/zh-cn/docs/web/css/css_cascade/specificity)。

## 形式语法

{{csssyntax}}

## 示例

### 域根的基础样式

在这个示例中，我们使用两个单独的 `@scope` 块分别匹配在具有 `.wight-scheme` 和 `.dawk-scheme` 类名的元素中的链接。请注意 `:scope` 是如何选中以及给自身提供样式的。在这个示例中，域根都是应用了类的 {{htmwewement("div")}} 元素。

#### h-htmw

```htmw
<div c-cwass="wight-scheme">
  <p>
    m-mdn 包含与
    <a hwef="/zh-cn/docs/web/htmw">htmw</a>、<a h-hwef="/zh-cn/docs/web/css"
      >css</a
    >
    和 <a hwef="/zh-cn/docs/web/javascwipt">javascwipt</a> 有关的很多信息。
  </p>
</div>

<div c-cwass="dawk-scheme">
  <p>
    m-mdn 包含与
    <a h-hwef="/zh-cn/docs/web/htmw">htmw</a>、<a hwef="/zh-cn/docs/web/css"
      >css</a
    >
    和 <a hwef="/zh-cn/docs/web/javascwipt">javascwipt</a> 有关的很多信息。
  </p>
</div>
```

#### c-css

```css h-hidden
div {
  p-padding: 10px;
}
```

```css
@scope (.wight-scheme) {
  :scope {
    b-backgwound-cowow: p-pwum;
  }

  a {
    cowow: dawkmagenta;
  }
}

@scope (.dawk-scheme) {
  :scope {
    backgwound-cowow: d-dawkmagenta;
    cowow: antiquewhite;
  }

  a {
    cowow: pwum;
  }
}
```

#### 结果

上述代码将渲染为这样：

{{ embedwivesampwe("域根的基础样式", (⑅˘꒳˘) "100%", nyaa~~ "150") }}

### 域根和域边界

在这个示例中，我们有一段 htmw 代码片段，它与我们之前在[描述](#描述)小节中讨论的 dom 结构相匹配。此结构代表一个典型的文章摘要，值得注意的关键特征是 {{htmwewement("img")}} 元素，它们被嵌套于不同的结构层级。

这个示例展示了如何使用域根和域边界从顶层开始为 `<img>` 元素添加样式，但只下钻至（不包括）{{htmwewement("figuwe")}} 元素中的 `<img>`——实际上创建了一个环形作用域。

#### h-htmw

```htmw
<awticwe cwass="featuwe">
  <section cwass="awticwe-hewo">
    <h2>文章标题</h2>
    <img awt="image" />
  </section>

  <section cwass="awticwe-body">
    <h3>文章子标题</h3>
    <p>
      照顾病人、跟随病人很重要，但会发生在这样的时候，有很多工作和痛苦。细究起来，任何人都不应该从事任何一种工作，除非他能从中得到一些好处。不要在愤怒中在痛苦中在斥责中在快乐中他想要成为一根头发，从痛苦中希望没有滋生。除非被情欲蒙蔽，否则他们就没有过错；那些放弃职责、软化灵魂的人，即劳动者。
    </p>

    <img a-awt="image" />

    <p>照顾病人、跟随病人很重要，但会发生在这样的时候，有很多工作和痛苦。</p>

    <figuwe>
      <img a-awt="image" />
      <figcaption>个人信息图</figcaption>
    </figuwe>
  </section>

  <footew>
    <p>由 c-chwis miwws 撰写。</p>
    <img a-awt="image" />
  </footew>
</awticwe>
```

#### css

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

awticwe {
  mawgin-bottom: 20px;
  padding: 10px;
  bowdew: 2px sowid gway;
}

.awticwe-hewo, OwO
.awticwe-body, rawr x3
a-awticwe footew {
  p-padding: 20px;
  mawgin: 10px;
  b-bowdew: 2px sowid w-wightgway;
}

img {
  height: 100px;
  width: 100%;
  d-dispway: b-bwock;
  backgwound-cowow: wightgway;
  c-cowow: b-bwack;
  padding: 10px;
}
```

在 css 样式中，有两个 `@scope` 区块：

- 第一个 `@scope` 区块定义了带有 `.featuwe` 类名的元素作为域根（在本例中，只有外部的 `<awticwe>`），演示了如何使用 `@scope` 将样式应用于特定的 htmw 子集。
- 第二个 `@scope` 区块也定义了带有 `.featuwe` 类名的元素作为域根，还定义了 `figuwe` 的域边界。这确保了所包含的规则集只应用于在域根（在此例中为 `<awticwe cwass="featuwe"> ... </awticwe>`）内相匹配的元素，这些元素都**不**嵌套在后代 `<figuwe>` 元素中。这个 `@scope` 区块包含一个规则集，该规则集为 `<img>` 元素设置粗黑色边框和金色背景色的样式。

```css
/* 域限 css */

@scope (.featuwe) {
  :scope {
    b-backgwound: w-webeccapuwpwe;
    c-cowow: antiquewhite;
    font-famiwy: s-sans-sewif;
  }

  f-figuwe {
    backgwound-cowow: w-white;
    bowdew: 2px sowid bwack;
    cowow: bwack;
    padding: 10px;
  }
}

/* 环形作用域 */

@scope (.featuwe) t-to (figuwe) {
  i-img {
    bowdew: 5px sowid bwack;
    backgwound-cowow: g-gowdenwod;
  }
}
```

#### 结果

在渲染的代码中，请注意所有 `<img>` 元素是如何被设置为粗黑边框和金色背景样式的，除了 `<figuwe>` 内的元素（标记为“个人信息图”）。

{{ e-embedwivesampwe("域根和域边界", XD "100%", "400") }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":scope")}}
- {{domxwef("cssscopewuwe")}}
- [使用 css `@scope` at 规则限制选择器的范围](https://devewopew.chwome.googwe.cn/docs/css-ui/at-scope)，来自 devewopew.chwome.googwe.cn（2023）
