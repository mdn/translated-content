---
title: :nth-child()
slug: Web/CSS/Reference/Selectors/:nth-child
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

[CSS](/zh-CN/docs/Web/CSS) **`:nth-child()`** [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)根据元素在父元素的子元素列表中的索引来选择元素。换言之，`:nth-child()` 选择器根据父元素内的所有兄弟元素的位置来选择子元素。

{{InteractiveExample("CSS Demo: :nth-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-child(-n + 3) {
  border: 2px solid orange;
  margin-bottom: 1px;
}

li:nth-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

> [!NOTE]
> 在 `element:nth-child()` 的语法中，子元素的计数包括任何元素类型的兄弟子元素；但是只有当*该子元素位置上的*元素与选择器的其他组件匹配时，才被视为匹配。

## 语法

`:nth-child()` 以一个参数来描述匹配兄弟元素列表中元素索引的模式。元素索引从 1 开始。

```css-nolint
:nth-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### 关键字值

- `odd`
  - : 表示元素在兄弟元素列表中的位置是奇数：1、3、5……。
- `even`
  - : 表示元素在兄弟元素列表中的位置是偶数：2、4、6……。

### 函数符号

- `<An+B>`
  - : 表示元素在兄弟元素列表中的位置是 `An+B` 模式的元素，其中 `n` 为正整数或 0，`A` 和 `B` 为整数，且 `A` 不为 0。其中：
    - `A` 是整数步长，
    - `B` 是整数偏移量，
    - `n` 是从 0 开始的所有非负整数。

    它可以被理解为列表中的第 `An+B` 个元素。`A` 和 `B` 必须都是 {{cssxref("&lt;integer&gt;")}} 值。

### `of <selector>` 语法

通过传递一个选择器参数，我们可以选择与该选择器匹配的第 **n** 个元素。例如，下面的选择器匹配前三个设置了 `class="important"` 的列表项。

```css
:nth-child(-n + 3 of li.important) {
}
```

这与将选择器移到函数之外不同，如：

```css
li.important:nth-child(-n + 3) {
}
```

该选择器会匹配属于前三个子元素，且与选择器 `li.important` 匹配的列表项。

## 示例

### 选择器示例

- `tr:nth-child(odd)` or `tr:nth-child(2n+1)`
  - : 表示 HTML 表格中的奇数行：1、3、5……。
- `tr:nth-child(even)` or `tr:nth-child(2n)`
  - : 表示 HTML 表格中的偶数行：2、4、6……。
- `:nth-child(7)`
  - : 表示第 7 个元素。
- `:nth-child(5n)`
  - : 表示第 5、10、15……个元素。第一个匹配的元素是 **0** \[=5x0]，但由于元素的索引是从 1 开始的而 `n` 从 0 开始，所以不会匹配任何元素。这乍一看可能有点奇怪，但是当公式中的 `B` 部分为 `>0` 的值时，就会变得更有意义，就像下面的示例一样。
- `:nth-child(n+7)`
  - : 表示第七个及其之后的元素：**7** \[=0+7]、**8** \[=1+7]、**9** \[=2+7]，**等等**。
- `:nth-child(3n+4)`
  - : 表示第 **4** \[=(3×0)+4]、**7** \[=(3×1)+4]、**10** \[=(3×2)+4]、**13** \[=(3×3)+4]……个元素。
- `:nth-child(-n+3)`
  - : 表示前三个元素。\[=-0+3、-1+3、-2+3]
- `p:nth-child(n)`
  - : 表示兄弟元素列表中的每个 `<p>` 元素。这与简单的 `p` 选择器选择的元素相同（尽管具有更高的优先级）。
- `p:nth-child(1)` 或 `p:nth-child(0n+1)`
  - : 表示每一个兄弟元素列表中的第一个 `<p>` 元素。这与 {{cssxref(":first-child")}} 选择器相同（并且具有相同的优先级）。
- `p:nth-child(n+8):nth-child(-n+15)`
  - : 表示兄弟元素列表中的第 8 到第 15 个，且为 `<p>` 元素的元素。

### 详细示例

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>，元素间不插入 <code>&lt;em&gt;</code> 元素。
</h3>
<p>第 1、3、5、7 个子节点被选中。</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>，元素间插入 <code>&lt;em&gt;</code> 元素。
</h3>
<p>
  第 1、5、7 个子节点被选中。<br />
  3 会被计数，因为它是一个子节点，但是它不会被选中，因为它不是
  <code>&lt;span&gt;</code>。
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>这是一个 `em`。</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>，元素间插入 <code>&lt;em&gt;</code> 元素。
</h3>
<p>
  第 1、4、6、8 个子节点被选中。<br />
  3 不会被计数或选中，因为它是 <code>&lt;em&gt;</code> 而不是
  <code>&lt;span&gt;</code>，而 <code>nth-of-type</code> 只选择该类型的子节点。
  <code>&lt;em&gt;</code> 被完全跳过和忽略。
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>这是一个 `em`。</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### 结果

{{EmbedLiveSample('详细示例', 550, 550)}}

### 使用 `of <selector>`

在这个示例中有一个无序列表，其中一些名字已经使用 `class="noted"` 将其标记为**标注项**。已使用粗底边框将它们高亮显示。

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

在下面的 CSS 中，我们选中标记了 `class="noted"` 的第**偶数**个列表项。

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### 结果

带有 `class="noted"` 的项具有粗底边框，而第 3、10 和 17 项具有纯色背景，因为它们是带有 `class="noted"` 的第*偶数*个列表项。

{{EmbedLiveSample('使用 of selector', 550, 120)}}

### `of <selector>` 语法与 `<selector> nth-child`

在这个示例中，有两个无序列表，其中第一个列表显示了 `li:nth-child(-n + 3 of .noted)` 的效果，第二个列表显示了 `li.noted:nth-child(-n + 3)` 的效果。

#### HTML

```html
<ul class="one">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
<ul class="two">
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
}

li {
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}

ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### 结果

第一个示例将样式应用于前三个带有 `class="noted"` 的列表项，无论它们是否是列表中的前三项。

第二个示例仅将样式应用于列表中的前三个项目中带有 `class="noted"` 的列表项。

{{EmbedLiveSample('of selector 语法与 selector nth-child', 550, 150)}}

### 使用 `of <selector>` 修复条纹表格

表格通常会使用*斑马条纹*，即在行之间交替使用浅色和深色背景颜色，使表格更易于阅读和无障碍。如果某一行被隐藏，条纹将会被合并，从而改变了预期的效果。在这个示例中，你可以看到两个带有 `hidden` 行的表格。第二个表格使用 `of :not([hidden])` 处理隐藏的行。

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html-nolint
<table class="broken">
  <thead>
    <tr><th>姓名</th><th>年龄</th><th>国家</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>马达加斯加</td></tr>
    <tr><td>Yuki</td><td>48</td><td>日本</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>墨西哥</td></tr>
    <tr><td>Adilah</td><td>27</td><td>摩洛哥</td></tr>
    <tr><td>Vieno</td><td>55</td><td>芬兰</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>巴西</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>姓名</th><th>年龄</th><th>国家</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>马达加斯加</td></tr>
    <tr><td>Yuki</td><td>48</td><td>日本</td></tr>
    <tr hidden><td>Tlayolotl</td><td>36</td><td>墨西哥</td></tr>
    <tr><td>Adilah</td><td>27</td><td>摩洛哥</td></tr>
    <tr><td>Vieno</td><td>55</td><td>芬兰</td></tr>
    <tr><td>Ricardo</td><td>66</td><td>巴西</td></tr>
  </tbody>
</table>
```

```html hidden
</div>
```

#### CSS

```css hidden
.wrapper {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### 结果

第一个表格直接使用了 `:nth-child(even)`，且在第三行应用了 `hidden` 属性。因此，在这种情况下，第三行是不可见的，第二行和第四行会被计为偶数项，尽管从技术上讲它们是偶数项，但从视觉上讲它们不是。

第二个表格使用了 _of 语法_，使用 `:nth-child(even of :not([hidden]))` 以只选择**不**隐藏的 `tr`。

{{EmbedLiveSample('使用 of selector 修复条纹表格', 550, 180)}}

### 为表格列添加样式

要设置表格列的样式，你不能在 {{HTMLElement("col")}} 元素上设置样式，因为表格单元格不是它的子元素（就像你可以使用行元素 {{HTMLElement("tr")}}一样）。像 `:nth-child()` 这样的伪类可以方便地选择列单元格。

在这个例子中，我们为每个列设置不同的样式。

#### HTML

```html-nolint
<table>
<caption>学生名册</caption>
<colgroup>
  <col/>
  <col/>
  <col/>
</colgroup>
  <thead>
    <tr><th>姓名</th><th>年龄</th><th>国家</th></tr>
  </thead>
  <tbody>
    <tr><td>Mamitiana</td><td>23</td><td>马达加斯加</td></tr>
    <tr><td>Yuki</td><td>48</td><td>日本</td></tr>
  </tbody>
</table>
```

#### CSS

```css
td {
  padding: 0.125rem 0.5rem;
  height: 3rem;
  border: 1px solid black;
}

tr :nth-child(1) {
  text-align: left;
  vertical-align: bottom;
  background-color: silver;
}

tbody tr :nth-child(2) {
  text-align: center;
  vertical-align: middle;
}

tbody tr :nth-child(3) {
  text-align: right;
  vertical-align: top;
  background-color: tomato;
}
```

#### 结果

{{EmbedLiveSample('为表格列添加样式', 100, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":has", ":has()") }}：用于选择父元素的伪类
- [树结构的伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes#树结构的伪类)
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
