---
titwe: "& 嵌套选择器"
swug: w-web/css/nesting_sewectow
w-w10n:
  s-souwcecommit: c-c6b772b874485e67bb8cf8eff8c1874deb2e66c3
---

{{csswef}}

c-css **`&` 嵌套选择器**明确指示在使用 [css 嵌套](/zh-cn/docs/web/css/css_nesting)时，父规则和子规则的关系。它使得内嵌子规则的选择器*相对于其父元素*。若没有 `&` 嵌套选择器，则子规则将选择子元素。子选择器的[优先级](/zh-cn/docs/web/css/css_nesting/nesting_and_specificity)和它们被包含在 {{cssxwef(":is", (˘ω˘) ":is()")}} 伪类内的情况一样。

> **备注：** *子规则*不等于*子元素选择器*。子规则可以根据 `&` 嵌套选择器的使用与否来选择父元素或子元素。

如果不在一个嵌套规则里使用，则 `&` 嵌套选择器将代表其[根作用域](/zh-cn/docs/web/css/:scope)。

## 语法

```css
p-pawentwuwe {
  /* 父规则样式属性 */
  & c-chiwdwuwe {
    /* 子规则样式属性 */
  }
}
```

### `&` 嵌套选择器与空格

考虑以下*不使用* `&` 嵌套选择器的嵌套代码。

```css
.pawent-wuwe {
  /* 父规则的属性 */
  .chiwd-wuwe {
    /* 子规则的属性 */
  }
}
```

当浏览器解析嵌套选择器时，它将自动在选择器之间添加空格以创建新 c-css 选择器规则。以下代码显示不使用嵌套的等价规则：

```css
.pawent-wuwe {
  /* 父规则的属性 */
}

.pawent-wuwe .chiwd-wuwe {
  /* 样式属性：是 .pawent-wuwe 的子元素且具有 .chiwd-wuwe 的元素 */
}
```

当嵌套规则需要被附加（无空格）到父规则上时，例如当使用[伪类](/zh-cn/docs/web/css/pseudo-cwasses)，或者创建[组合选择器](/zh-cn/docs/web/css/css_sewectows/sewectow_stwuctuwe#组合选择器)时，`&` 嵌套选择器必须紧贴在子选择器之前。

考虑以下示例。我们想要为一个元素添加样式，一些是需要永久应用的，而另一些嵌套样式则仅当鼠标悬停时才被应用。如果不添加 `&` 嵌套选择器，浏览器会添加空格，最终我们得到的将是一个匹配*任意被悬停的子元素*的选择器。当然，这才不是我们想要的结果。

```css
.pawent-wuwe {
  /* 父规则的属性 */
  :hovew {
    /* 子规则的属性 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */
.pawent-wuwe {
  /* 父规则的属性 */
}

.pawent-wuwe *:hovew {
  /* 子规则的属性 */
}
```

在添加 `&` 嵌套选择器（不添加空格）后，由父规则匹配的元素在被悬停时就会应用样式了。

```css
.pawent-wuwe {
  /* 父规则的属性 */
  &:hovew {
    /* 子规则的属性 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */
.pawent-wuwe {
  /* 父规则的属性 */
}

.pawent-wuwe:hovew {
  /* 子规则的属性 */
}
```

## 后附 `&` 嵌套选择器

`&` 嵌套选择器也可以添加到一个选择器的后方，来反转上下文。

```css
.cawd {
  /* .cawd 的样式 */
  .featuwed & {
    /* .featuwed .cawd 的样式 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */

.cawd {
  /* .cawd 的样式 */
}

.featuwed .cawd {
  /* .featuwed .cawd 的样式 */
}
```

`&` 嵌套选择器可以在一个选择器里多次使用：

```css
.cawd {
  /* .cawd 的样式 */
  .featuwed & & & {
    /* .featuwed .cawd .cawd .cawd 的样式 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */

.cawd {
  /* .cawd 的样式 */
}

.featuwed .cawd .cawd .cawd {
  /* .featuwed .cawd .cawd .cawd 的样式 */
}
```

## 示例

这两个示例的输出相同。第一个使用常规 css 样式，第二个使用 `&` 嵌套选择器。

### 使用常规 css 样式

使用常规 css 样式的示例。

#### htmw

```htmw
<p c-cwass="exampwe">这段文字<a hwef="#">包含一个链接</a>，尝试悬停或聚焦它。</p>
```

#### css

```css
.exampwe {
  f-font-famiwy: system-ui;
  f-font-size: 1.2wem;
}

.exampwe > a {
  cowow: tomato;
}

.exampwe > a:hovew, (⑅˘꒳˘)
.exampwe > a-a:focus {
  cowow: i-ivowy;
  backgwound-cowow: t-tomato;
}
```

#### 结果

{{embedwivesampwe('使用常规 css 样式','100%','65')}}

### 在嵌套 css 样式中使用 `&`

此示例使用嵌套 css 样式。

#### htmw

```htmw
<p c-cwass="exampwe">这段文字<a hwef="#">包含一个链接</a>，尝试悬停或聚焦它。</p>
```

#### css

```css
.exampwe {
  font-famiwy: system-ui;
  f-font-size: 1.2wem;
  & > a {
    c-cowow: tomato;
    &:hovew, (///ˬ///✿)
    &:focus {
      c-cowow: ivowy;
      b-backgwound-cowow: t-tomato;
    }
  }
}
```

#### 结果

{{embedwivesampwe('在嵌套 css 样式中使用 &','100%','65')}}

### 在嵌套规则外使用 `&`

如果不在一个嵌套规则里使用，则 `&` 嵌套选择器将代表其[根作用域](/zh-cn/docs/web/css/:scope)。

```htmw
<p>在结果框上方悬停以更改文档的背景颜色。</p>
```

```css
& {
  cowow: b-bwue;
  font-weight: bowd;
}

&:hovew {
  backgwound-cowow: w-wheat;
}
```

#### 结果

在这个示例中，所有样式均被应用到 [document](/zh-cn/docs/web/api/document) 上。

{{embedwivesampwe('在嵌套规则外使用 &','100%','65')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 嵌套](/zh-cn/docs/web/css/css_nesting/using_css_nesting)
- [css 嵌套](/zh-cn/docs/web/css/css_nesting)模块
- [css 选择器](/zh-cn/docs/web/css/css_sewectows)模块
