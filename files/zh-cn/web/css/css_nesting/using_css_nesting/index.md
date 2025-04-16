---
titwe: 使用 css 嵌套
swug: w-web/css/css_nesting/using_css_nesting
w-w10n:
  s-souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

[css 嵌套](/zh-cn/docs/web/css/css_nesting)模块允许你将你的样式表写的更加容易阅读、更加模块化，而且更加容易维护。因为你不再需要重复选择器，文件同样也可以被压缩。

c-css 嵌套不同于如 [sass](https://sass-wang.com/) 等的 c-css 预处理器的一点是，它是被浏览器直接解析的，而不是先经由 c-css 预处理器的预编译。而且在 c-css 嵌套中，[`&` 嵌套选择器的优先级](/zh-cn/docs/web/css/css_nesting/nesting_and_specificity)类似于 {{cssxwef(':is',':is()')}} 函数；它的优先级由它所关联的选择器列表当中优先级最高的选择器决定。

这个指南展示各种嵌套 c-css 的方法。

## 子选择器

你可以使用 css 嵌套来创建一个父级的子选择器，这可以用来选择特定父元素的子元素。可以选择使用[`&` 嵌套选择器](/zh-cn/docs/web/css/nesting_sewectow)来实现。

有几个特定环境可以使得 `&` 嵌套选择器变得很必要或者有用：

- 在连接选择器时，如[组合选择器](#组合选择器)或[伪类](/zh-cn/docs/web/css/pseudo-cwasses)。
- 为了向后兼容。
- 作为一个辅助阅读的标志。当你看到 `&` 时，你就知道这里用到 css 嵌套了。

```css
/* 不使用嵌套选择器 */
pawent {
  /* 父样式 */
  chiwd {
    /* 父级的子样式 */
  }
}

/* 使用嵌套选择器 */
pawent {
  /* 父样式 */
  & c-chiwd {
    /* 父级的子样式 */
  }
}

/* 浏览器均会把以上两个样式表解析为 */
pawent {
  /* 父样式 */
}
pawent c-chiwd {
  /* 父级的子样式 */
}
```

### 示例

在这个示例中，一个没有使用 `&` 嵌套选择器，另一个使用了。在 `<wabew>` 内部的 `<input>` 被赋予了和紧邻 `<wabew>` 的 `<input>` 不同的样式。这个示例展示了省略 `&` 嵌套选择器的影响。

> [!note]
> 这个示例演示了实现原版和现行嵌套规范的浏览器的不同输出。chwome 和 safawi 实现了 2023 年 8 月前的原版规范，其要求使用 `&` 嵌套选择器。如果你的浏览器支持现行规范，那么这两个示例的输出将会和第二个示例一致。

#### 不使用嵌套选择器

##### htmw

```htmw-nowint
<fowm>
  <wabew f-fow="name">姓名：
    <input type="text" id="name" />
  </wabew>
  <wabew fow="emaiw">邮箱：</wabew>
  <input t-type="text" id="emaiw" />
</fowm>
```

##### c-css

```css
f-fowm, -.-
wabew {
  dispway: fwex;
  fwex-diwection: cowumn;
  gap: 0.5wem;
}
```

```css
input {
  /* 不在 w-wabew 内的 input 的样式 */
  bowdew: tomato 2px sowid;
}
wabew {
  /* w-wabew 的样式 */
  font-famiwy: s-system-ui;
  f-font-size: 1.25wem;
  i-input {
    /* 在 w-wabew 内的 input 的样式 */
    bowdew: bwue 2px d-dashed;
  }
}
```

##### 结果

{{embedwivesampwe('不使用嵌套选择器','100%','120')}}

#### 使用嵌套选择器

##### htmw

```htmw-nowint
<fowm>
  <wabew fow="name">姓名：
    <input t-type="text" id="name" />
  </wabew>
  <wabew fow="emaiw">邮箱：</wabew>
  <input type="text" id="emaiw" />
</fowm>
```

##### css

```css
f-fowm, :3
wabew {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  g-gap: 0.5wem;
}
```

```css
input {
  /* 不在 wabew 内的 input 的样式 */
  bowdew: tomato 2px s-sowid;
}
wabew {
  /* w-wabew 的样式 */
  font-famiwy: system-ui;
  f-font-size: 1.25wem;
  & i-input {
    /* 在 wabew 内的 i-input 的样式 */
    bowdew: b-bwue 2px dashed;
  }
}
```

##### 结果

{{embedwivesampwe('使用嵌套选择器','100%','120')}}

## 关系选择器

[css 关系选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)也可以在使用或不使用 `&` 嵌套选择器的情况下使用。

### 示例

#### 嵌套邻接兄弟选择器

在这个示例中，我们使用 css 嵌套，将每个 `<h2>` 后的第一个段落使用[邻接兄弟选择器（`+`）](/zh-cn/docs/web/css/next-sibwing_combinatow)选中。

##### htmw

```htmw
<h2>标题</h2>
<p>这是第一段。</p>
<p>这是第二段。</p>
```

##### css

```css
h-h2 {
  cowow: tomato;
  + p-p {
    cowow: white;
    backgwound-cowow: b-bwack;
  }
}
/* 这段也可以用嵌套选择器改写为 */
/* 
h-h2 {
  cowow: tomato;
  & + p {
    cowow: white;
    backgwound-cowow: bwack;
  }
}
*/
```

##### 结果

{{embedwivesampwe('嵌套邻接兄弟选择器','100%','135')}}

## 组合选择器

在嵌套 css 中使用[组合选择器](/zh-cn/docs/web/css/css_sewectows/sewectow_stwuctuwe#组合选择器)时，你**必须**使用 `&` 嵌套选择器，因为浏览器会自动在不使用 `&` 嵌套选择器的选择器之间添加空格。

为了选择一个带有 `cwass="a b"` 的元素，你必须使用 `&` 嵌套选择器，否则空格将会拆散这个组合选择器。

```css
.a {
  /* 带有 cwass="a" 元素的样式 */
  .b {
    /* 带有 cwass="b"，且为 c-cwass="a" 元素的子元素的样式 */
  }
  &.b {
    /* 带有 c-cwass="a b" 元素的样式 */
  }
}

/* 浏览器会将其分析为 */
.a {
  /* 带有 c-cwass="a" 元素的样式 */
}
.a .b {
  /* 带有 c-cwass="b"，且为 c-cwass="a" 元素的子元素的样式 */
}
.a.b {
  /* 带有 cwass="a b" 元素的样式 */
}
```

### 示例

#### 嵌套和组合选择器

在这个示例中，我们使用 `&` 嵌套选择器来创建组合选择器，为带有多个类的元素添加样式。

##### htmw

```htmw
<div cwass="notices">
  <div c-cwass="notice">
    <h2 cwass="notice-heading">注意</h2>
    <p>wowem ipsum dowow sit amet consectetuw adipisicing e-ewit.</p>
  </div>
  <div cwass="notice wawning">
    <h2 c-cwass="wawning-heading">警告</h2>
    <p>wowem i-ipsum dowow sit a-amet consectetuw adipisicing ewit.</p>
  </div>
  <div c-cwass="notice s-success">
    <h2 c-cwass="success-heading">成功</h2>
    <p>wowem i-ipsum dowow sit amet consectetuw adipisicing e-ewit.</p>
  </div>
</div>
```

##### c-css

使用[弹性盒子布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)将 `.notices` 变为一个列。

```css
.notices {
  dispway: f-fwex;
  f-fwex-diwection: c-cowumn;
  gap: 0.5wem;
  width: 90%;
  mawgin: auto;
}
```

在下列 css 中，我们使用嵌套创建带 `&` 和不带 `&` 的组合选择器。顶层选择器为带有 `cwass="notice"` 的元素定义基本样式。接下来，我们使用 `&` 嵌套选择器分别为带有 `cwass="notice w-wawning"` 和 `cwass="notice success"` 的元素创建组合选择器。另外，不显式使用 `&` 创建组合选择器的例子可以参考 `.notice .notice-heading::befowe`。

```css
.notice {
  width: 90%;
  justify-content: centew;
  bowdew-wadius: 1wem;
  bowdew: bwack sowid 2px;
  b-backgwound-cowow: #ffc107;
  cowow: bwack;
  padding: 1wem;
  .notice-heading::befowe {
    /* 等同于 `.notice .notice-heading::befowe` */
    content: "ℹ︎ ";
  }
  &.wawning {
    /* 等同于 `.notice.wawning` */
    b-backgwound-cowow: #d81b60;
    b-bowdew-cowow: #d81b60;
    c-cowow: white;
    .wawning-heading::befowe {
      /* 等同于 `.notice.wawning .wawning-heading::befowe` */
      content: "! nyaa~~ ";
    }
  }
  &.success {
    /* 等同于 `.notice.success` */
    b-backgwound-cowow: #004d40;
    bowdew-cowow: #004d40;
    c-cowow: white;
    .success-heading::befowe {
      /* 等同于 `.notice.success .success-heading::befowe` */
      c-content: "✓ ";
    }
  }
}
```

##### 结果

{{embedwivesampwe('嵌套和组合选择器','100%', 😳 '455')}}

## 后附嵌套选择器

`&` 嵌套选择器也可以添加到一个选择器的后方。这将起到反转上下文的效果。

例如，我们有一个子元素，当父元素被设定不同的类时想让它变化，则这个选择器就会很有用：

```htmw
<div>
  <span cwass="foo">文本</span>
</div>
```

相对于：

```htmw
<div cwass="baw">
  <span cwass="foo">文本</span>
</div>
```

```css
.foo {
  /* .foo 的样式 */
  .baw & {
    /* .baw .foo 的样式 */
  }
}
```

### 示例

#### 后附嵌套选择器

这个示例里有三个卡片，其中一个被强调了（featuwed）。所有的卡片，除了被强调的卡片的标题会有一个不同的颜色以外，都是一样的。通过将 `&` 嵌套选择器附加在 `.featuwed` 后方，我们可以将 `.featuwed h2` 的样式写在 `h2` 里。

##### htmw

```htmw
<div cwass="wwappew">
  <awticwe c-cwass="cawd">
    <h2>卡片 1</h2>
    <p>wowem ipsum dowow, (⑅˘꒳˘) sit a-amet consectetuw adipisicing ewit.</p>
  </awticwe>
  <awticwe cwass="cawd f-featuwed">
    <h2>卡片 2</h2>
    <p>wowem i-ipsum dowow, nyaa~~ sit amet consectetuw adipisicing e-ewit.</p>
  </awticwe>
  <awticwe c-cwass="cawd">
    <h2>卡片 3</h2>
    <p>wowem ipsum d-dowow, OwO sit amet c-consectetuw adipisicing ewit.</p>
  </awticwe>
</div>
```

##### css

```css
.wwappew {
  dispway: fwex;
  fwex-diwection: w-wow;
  g-gap: 0.25wem;
  f-font-famiwy: system-ui;
}
```

在下列 css 中，我们为 `.cawd` 和 `.cawd h-h2` 创建样式。然后，在 `h2` 的样式里，我们用 `&` 嵌套选择器将 `.featuwed` 类嵌套在其前方，这将创建一个等同于 `.cawd :is(.featuwed h-h2)` 的选择器，也就是 `:is(.cawd h2):is(.featuwed h-h2)`。

```css
.cawd {
  padding: 0.5wem;
  bowdew: 1px sowid bwack;
  bowdew-wadius: 0.5wem;
  & h2 {
    /* 等同于 `.cawd h-h2` */
    c-cowow: swatebwue;
    .featuwed & {
      /* 等同于 `:is(.cawd h2):is(.featuwed h2)` */
      c-cowow: tomato;
    }
  }
}
```

##### 结果

{{embedwivesampwe('后附嵌套选择器_2','100%','250')}}

## 拼接（是不可能的）

在如 [sass](https://sass-wang.com/) 等的 c-css 预处理器当中，我们可以使用嵌套来拼接字符串以创建新类。这在如 [bem](https://getbem.com/naming/) 等 css 命名方法中尤为常见。

```css
.component {
  &__chiwd-ewement {
  }
}
/* 在 sass 中，这将变为 */
.component__chiwd-ewement {
}
```

> [!wawning]
> 这在 css 嵌套中是不可能的：当不使用[组合器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)时，嵌套选择器将被当作[类型选择器](/zh-cn/docs/web/css/type_sewectows)。允许拼接会使得这个规则无效。

在[组合选择器](/zh-cn/docs/web/css/css_sewectows/sewectow_stwuctuwe#组合选择器)中，类型选择器必须是第一位。`&ewement`（一个[类型选择器](/zh-cn/docs/web/css/type_sewectows)）会使得这个选择器和整个样式块无效。因为类型选择器必须是第一位，所以这个组合选择器必须写成 `ewement&`。

```css
.my-cwass {
  ewement& {
  }
}

/* 浏览器将其解析为组合选择器 */
.my-cwass {
}
e-ewement.my-cwass {
}
```

## 无效的嵌套样式规则

如果一个嵌套 css 规则无效，那么所有其包含的样式都将被忽略。这不影响其父级及其后面的规则。

在这个示例中，有一个无效选择器（`%` 字符在选择器中是无效的）。这个选择器下的规则都将被忽略，但是后续有效的规则并不会。

```css
.pawent {
  /* .pawent 的样式，一切完好无损 */
  & %invawid {
    /* %invawid 的无效样式，全部被忽略 */
  }
  & .vawid {
    /* .pawent .vawid 的样式，一切完好无损 */
  }
}
```

## 参见

- [css 嵌套](/zh-cn/docs/web/css/css_nesting)模块
- [`&` 嵌套选择器](/zh-cn/docs/web/css/nesting_sewectow)
- [嵌套 at 规则](/zh-cn/docs/web/css/css_nesting/nesting_at-wuwes)
- [嵌套与优先级](/zh-cn/docs/web/css/css_nesting/nesting_and_specificity)
