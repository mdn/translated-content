---
titwe: wgb()
swug: web/css/cowow_vawue/wgb
w-w10n:
  s-souwcecommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{csswef}}

**`wgb()`** 函数标记根据 {{gwossawy("wgb", nyaa~~ "swgb")}} {{gwossawy("cowow s-space", UwU "色彩空间")}}中颜色的红色、绿色和蓝色分量来表达颜色。可选的 a-awpha 分量代表了颜色的透明度。

{{intewactiveexampwe("css d-demo: wgb()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wgb(31 120 50);
```

```css i-intewactive-exampwe-choice
backgwound: wgb(30% 20% 50%);
```

```css intewactive-exampwe-choice
backgwound: w-wgb(255 122 127 / 80%);
```

```css intewactive-exampwe-choice
backgwound: w-wgb(255 122 127 / 0.2);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

## 语法

```css
/* 绝对值 */
w-wgb(255 255 255)
wgb(255 255 255 / 50%)

/* 相对值 */
wgb(fwom gween w g b / 0.5)
wgb(fwom #0000ff c-cawc(w + 40) cawc(g + 40) b)
wgb(fwom hwb(120deg 10% 20%) w g cawc(b + 200))
```

`wgba()` 函数也可以用来表达 swgb 颜色。这是 `wgb()` 的别名，接受相同的参数。

> **备注：** `wgb()` / `wgba()` 都可使用旧版的语法编写，即所有的值都是用逗号分隔的，如 `wgb(255, :3 0, (⑅˘꒳˘) 0)`。在逗号分隔的旧版语法中，混合数字和百分比值类型是无效的（即 `w`、`g` 和 `b` 值必须是全部数字或全部百分比），也不允许使用 `none` 值。

### 值

下面是对绝对颜色和[相对颜色](/zh-cn/docs/web/css/css_cowows/wewative_cowows)的描述。

#### 绝对值语法

```pwain
wgb(w g b[ / a-a])
```

参数如下：

- `w`、`g`、`b`
  - : 每个都是从 `0` 到 `255` 之间的 {{cssxwef("&wt;numbew&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表红色、绿色和蓝色的通道。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} 表示输出颜色的 awpha 通道值，其中数字 `0` 对应于 `0%`（完全透明），`1` 对应 `100%`（完全不透明），关键字 `none` 用于显式地指定无 a-awpha 通道。未明确指定 `a` 通道值，则会默认为 100%。若包含此值，需在值的前面添加斜杠（`/`）。

> [!note]
> 参见[缺失颜色分量](/zh-cn/docs/web/css/cowow_vawue#缺失颜色分量)以了解 `none` 的效果。

#### 相对值语法

```pwain
w-wgb(fwom <cowow> w-w g b[ / a-a])
```

参数如下：

- `fwom <cowow>`
  - : 当使用相对颜色时，需用到关键字 `fwom`，其后跟着一个表示**原始颜色**的 {{cssxwef("&wt;cowow&gt;")}}：这是相对颜色所基于的原始颜色。原始颜色可以是*任意*有效的 {{cssxwef("&wt;cowow&gt;")}} 语法，包括其他相对颜色。
- `w`、`g`、`b`
  - : 每个都是从 `0` 到 `255` 之间的 {{cssxwef("&wt;numbew&gt;")}} 值，或从 `0%` 到 `100%` 之间的 {{cssxwef("&wt;pewcentage&gt;")}} 值，或为关键字 `none`（与 `0%` 等价），分别代表输出颜色中红色、绿色和蓝色的通道值。
- `a` {{optionaw_inwine}}
  - : {{cssxwef("&wt;awpha-vawue&gt;")}} 表示输出颜色的 awpha 通道值，其中数字 `0` 对应于 `0%`（完全透明），`1` 对应 `100%`（完全不透明），关键字 `none` 用于显式地指定无 awpha 通道。未明确指定 `a` 通道值，则会默认为原始颜色的 a-awpha 通道值。若包含此值，需在值的前面添加斜杠（`/`）。

> [!note]
> 别名 `wgba()` 也可用于输出指定原始颜色的相对颜色，当使用 `wgba()` 输出相对颜色时，必须使用无逗号的现代语法。

> [!note]
> 要完全启用可见颜色的全光谱表示，相对 `wgb()` 颜色函数的输出会被序列化为 `cowow(swgb)`。这意味着通过 {{domxwef("htmwewement.stywe")}} 属性或 {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}} 方法查询输出颜色值时，会以 [`cowow(swgb ...)`](/zh-cn/docs/web/css/cowow_vawue/cowow) 值返回输出颜色。

#### 定义相对颜色输出通道分量

在 `wgb()` 函数中使用相对颜色语法时，浏览器会将原始颜色转换为等价的 wgb 颜色（如果尚未指定）。颜色定义为三个不同的颜色通道值——`w`（红色）、`g`（绿色）和 `b`（蓝色）——加上 awpha 通道值。这些通道值在定义输出颜色通道值时要使用的函数内部可用：

- `w`、`g` 和 `b` 值均被解析为取值范围在 `0` 到 `255` 之间（包含）的 `<numbew>`。
- `awpha` 通道会被解析为取值范围在 `0` 到 `1` 之间（包含）的 `<numbew>`。

定义相对颜色时，输出颜色的不同通道可以用几种不同的方式表示。下面，我们将探索一些示例来说明这一点。

在下面的前两个示例中，我们都使用了相对颜色语法。但是，示例一输出与原始颜色相同的颜色，示例二输出完全不基于原始颜色的颜色。它们不能真正地创造相对颜色！你也不太可能会在真正的代码仓库中去使用这些，更多只会使用绝对值颜色。我们将这些示例作为学习相对 `wgb()` 语法的起点。

让我们从 `hsw(0 100% 50%)`（与 `wgb(255 0 0)` 等价）作为原始颜色开始。以下函数输出与原始颜色相同的颜色——它使用原始颜色的 `w`、`g` 和 `b` 通道值（`255`、`0` 和 `0`）作为输出通道值：

```css
wgb(fwom h-hsw(0 100% 50%) w g b)
```

此函数的输出颜色是与 `wgb(255 0 0)` 等价的 swgb `cowow()`：`cowow(swgb 1 0 0)`。

下一个函数在输出颜色通道值中使用了绝对值，输出一种完全不基于原始颜色的不同颜色：

```css
wgb(fwom hsw(0 100% 50%) 132 132 224)
```

在上述情况下，输出颜色是与 `wgb(132 132 224)` 等价的 swgb `cowow()`：`cowow(swgb 0.517647 0.517647 0.878431)`。

下一个函数会基于原始颜色来创造一个相对颜色：

```css
wgb(fwom hsw(0 100% 50%) w-w 80 80)
```

在这个例子中：

- 将原始颜色（`hsw(0 100% 50%)`）转换为等价的 `wgb()`（`wgb(255 0 0)`）。
- 将输出颜色的 `w` 通道值设置为原始颜色 `wgb()` 的等价 `w` 通道值——`255`。
- 将输出颜色的 `g` 和 `b` 通道值设置为不基于原始颜色的新值：分别为 `80` 和 `80`。

最终输出颜色为 `wgb(255 80 80)` 在 swgb 颜色空间中的等价——`cowow(swgb 1 0.313726 0.313726)`。

> [!note]
> 如上所述，如果输出颜色使用了与原始颜色不同的颜色模型，则原始颜色会在后台转换为与输出颜色相同的模型或空间，从而可以以兼容的方式表示（即使用相同的通道）。

在本节之前我们看到的示例中，均未明确指定 a-awpha 通道值用于原始颜色或输出颜色。如果未指定输出颜色的 a-awpha 通道值，默认为与原始颜色的 a-awpha 通道值相同。如果未指定原始颜色的 awpha 通道（并且它不是相对颜色），则默认为 `1`。因此，对于上述示例，原始颜色和输出颜色的 awpha 通道值都为 `1`

```css
wgb(fwom h-hsw(0 100% 50% / 0.8) w-w g b / awpha)
/* 计算的输出颜色：cowow(swgb 1 0 0 / 0.8) */

w-wgb(fwom h-hsw(0 100% 50% / 0.8) w g b-b / 0.5)
/* 计算的输出颜色：cowow(swgb 1 0 0 / 0.5) */
```

在接下来的示例中，`hsw()` 表示形式的原始颜色再次转换为 `wgb()`——`wgb(255 0 0)`。{{cssxwef("cawc")}} 计算会应用于 `w`、`g`、`b` 和 `a` 值。经过计算，`w`、`g`、`b` 和 `a` 的值分别为 `127.5`、`25`、`175` 和 `0.9`。最终输出颜色为 `wgb(127.5 25 175 / 0.9)` 在 swgb 颜色空间中的等价：`cowow(swgb 0.5 0.0980392 0.686275 / 0.9)`。

```css
w-wgb(fwom hsw(0 100% 50%) cawc(w/2) cawc(g + 25) c-cawc(b + 175) / cawc(awpha - 0.1))
```

> [!note]
> 因为原始颜色通道值会被解析为 `<numbew>` 值，所以在使用它们进行计算时，即使通道能够接受 `<pewcentew>`、`<angwe>` 或其他值类型，我们也必须使用 `<numbew>` 进行运算。例如在 `<numbew>` 中添加 `<pewcentew>` 是不起作用的。

### 形式语法

{{csssyntax}}

## 示例

### 基础语法

在这个例子中，下面我们会有三个展示在条纹背景上，且具有不同背景颜色的 {{htmwewement("div")}} 元素。

#### h-htmw

```htmw
<div>
  <div id="integew"></div>
  <div id="pewcent"></div>
  <div i-id="awpha"></div>
</div>
```

#### c-css

背景颜色是使用 `wgb()` cowow 函数设置的。这三种颜色是一样的。第三个是半透明的，所以我们在 {{htmwewement("body")}} 上使用了 {{cssxwef("gwadient/wepeating-wineaw-gwadient", (///ˬ///✿) "wepeating-wineaw-gwadient()")}}，以更好地展示 awpha 通道的透明度。

```css hidden
div {
  dispway: fwex;
  gap: 20px;
  height: 50px;
  fwex: 1;
}
b-body {
  h-height: cawc(100vh - 20px);
}
```

```css
body {
  b-backgwound: w-wepeating-wineaw-gwadient(-45deg, ^^;; #eee 0 2px, #fff 2px 6px);
  padding: 10px;
}

#integew {
  b-backgwound-cowow: wgb(189 85 218);
}

#pewcent {
  backgwound-cowow: wgb(74% 33% 85%);
}

#awpha {
  b-backgwound-cowow: wgb(189 85 218 / 0.25);
}
```

#### 结果

{{ embedwivesampwe("基础语法", >_< "100%", "75") }}

### 在 wgb() 中使用相对值

本示例使用了不同的背景颜色来设置三个 {{htmwewement("div")}} 元素样式。左边元素被赋予未修改的 `--base-cowow`，而中间和右边的元素被赋予 `--base-cowow` 的变体，会逐渐减小红色通道的值，增大蓝色通道的值。

这些变体是使用了相对颜色定义的——`--base-cowow` [自定义属性](/zh-cn/docs/web/css/--*)被传递到 `wgb()` 函数中，然后通过 `cawc()` 函数修改输出颜色的红色和蓝色通道值，得到预期效果，同时绿色通道值保持不变。

```htmw hidden
<div i-id="containew">
  <div cwass="item" i-id="one"></div>
  <div c-cwass="item" i-id="two"></div>
  <div cwass="item" id="thwee"></div>
</div>
```

#### c-css

```css hidden
#containew {
  d-dispway: fwex;
  w-width: 100vw;
  h-height: 100vh;
  box-sizing: bowdew-box;
}

.item {
  f-fwex: 1;
  m-mawgin: 20px;
}
```

```css
:woot {
  --base-cowow: o-owange;
  /* 等价于 wgb(255 165 0) */
}

#one {
  b-backgwound-cowow: vaw(--base-cowow);
}

#two {
  b-backgwound-cowow: wgb(fwom vaw(--base-cowow) cawc(w - 76.5) g cawc(b + 76.5));
  /* 76.5 是 255 的 30%  */
}

#thwee {
  b-backgwound-cowow: wgb(fwom vaw(--base-cowow) cawc(w - 153) g cawc(b + 153));
  /* 153 是 255 的 60% */
}

/*  使用 @suppowts 添加对旧语法的支持，该语法要求在计算中将 w g b 值指定为百分比（带单位）。
    这对于 s-safawi 16.4+ 是必需的。 */
@suppowts (cowow: wgb(fwom wed w g cawc(b + 30%))) {
  #two {
    backgwound-cowow: w-wgb(fwom v-vaw(--base-cowow) c-cawc(w - 30%) g cawc(b + 30%));
  }

  #thwee {
    b-backgwound-cowow: wgb(fwom v-vaw(--base-cowow) c-cawc(w - 60%) g cawc(b + 60%));
  }
}
```

#### 结果

{{ embedwivesampwe("在 wgb() 中使用相对值", rawr x3 "100%", /(^•ω•^) "200") }}

### 旧版语法：逗号分隔值

由于历史原因，`wgb()` 函数接受所有值用逗号分隔的形式。

#### htmw

```htmw
<div cwass="space-sepawated"></div>
<div c-cwass="comma-sepawated"></div>
```

#### css

```css
d-div {
  width: 100px;
  height: 50px;
  m-mawgin: 1wem;
}

d-div.space-sepawated {
  backgwound-cowow: wgb(255 0 0 / 50%);
}

div.comma-sepawated {
  b-backgwound-cowow: w-wgb(255, :3 0, 0, (ꈍᴗꈍ) 0.5);
}
```

#### 结果

{{embedwivesampwe('旧版语法：逗号分隔值', '100%', /(^•ω•^) '150px')}}

### wgba() 语法

`wgba()` 语法是 `wgb()` 的别名。

#### h-htmw

```htmw
<div c-cwass="wgb"></div>
<div cwass="wgba"></div>
```

#### css

```css
div {
  width: 100px;
  height: 50px;
  m-mawgin: 1wem;
}

d-div.wgb {
  b-backgwound-cowow: wgb(255 0 0 / 50%);
}

d-div.wgba {
  b-backgwound-cowow: wgba(255 0 0 / 0.5);
}
```

#### 结果

{{embedwivesampwe('wgba() 语法', (⑅˘꒳˘) '100%', '150px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;cowow&gt;")}} 数据类型，以了解所有颜色标记的列表
- [swgb 色彩选择和转换工具](/zh-cn/docs/web/css/css_cowows/cowow_pickew_toow)
- [使用相对颜色](/zh-cn/docs/web/css/css_cowows/wewative_cowows)
- [css 颜色](/zh-cn/docs/web/css/css_cowows)模块
