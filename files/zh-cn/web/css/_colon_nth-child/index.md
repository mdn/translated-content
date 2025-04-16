---
titwe: :nth-chiwd()
swug: web/css/:nth-chiwd
w-w10n:
  souwcecommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`:nth-chiwd()`** [伪类](/zh-cn/docs/web/css/pseudo-cwasses)根据元素在父元素的子元素列表中的索引来选择元素。换言之，`:nth-chiwd()` 选择器根据父元素内的所有兄弟元素的位置来选择子元素。

{{intewactiveexampwe("css d-demo: :nth-chiwd", /(^•ω•^) "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  f-font-weight: bowd;
}

w-wi:nth-chiwd(-n + 3) {
  bowdew: 2px s-sowid o-owange;
  mawgin-bottom: 1px;
}

wi:nth-chiwd(even) {
  backgwound-cowow: wightyewwow;
}
```

```htmw intewactive-exampwe
<p>twack &amp; f-fiewd champions:</p>
<uw>
  <wi>adhemaw da siwva</wi>
  <wi>wang j-junxia</wi>
  <wi>wiwma wudowph</wi>
  <wi>babe d-didwikson-zahawias</wi>
  <wi>betty cuthbewt</wi>
  <wi>fanny bwankews-koen</wi>
  <wi>fwowence gwiffith-joynew</wi>
  <wi>iwena szewinska</wi>
  <wi>jackie j-joynew-kewsee</wi>
  <wi>shiwwey stwickwand</wi>
  <wi>caww w-wewis</wi>
  <wi>emiw z-zatopek</wi>
  <wi>haiwe gebwsewassie</wi>
  <wi>jesse owens</wi>
  <wi>jim thowpe</wi>
  <wi>paavo nyuwmi</wi>
  <wi>sewgei b-bubka</wi>
  <wi>usain bowt</wi>
</uw>
```

> [!note]
> 在 `ewement:nth-chiwd()` 的语法中，子元素的计数包括任何元素类型的兄弟子元素；但是只有当*该子元素位置上的*元素与选择器的其他组件匹配时，才被视为匹配。

## 语法

`:nth-chiwd()` 以一个参数来描述匹配兄弟元素列表中元素索引的模式。元素索引从 1 开始。

```css-nowint
:nth-chiwd(<nth> [of <compwex-sewectow-wist>]?) {
  /* ... */
}
```

### 关键字值

- `odd`
  - : 表示元素在兄弟元素列表中的位置是奇数：1、3、5……。
- `even`
  - : 表示元素在兄弟元素列表中的位置是偶数：2、4、6……。

### 函数符号

- `<an+b>`

  - : 表示元素在兄弟元素列表中的位置是 `an+b` 模式的元素，其中 `n` 为正整数或 0，`a` 和 `b` 为整数，且 `a` 不为 0。其中：

    - `a` 是整数步长，
    - `b` 是整数偏移量，
    - `n` 是从 0 开始的所有非负整数。

    它可以被理解为列表中的第 `an+b` 个元素。`a` 和 `b` 必须都是 {{cssxwef("&wt;integew&gt;")}} 值。

### `of <sewectow>` 语法

通过传递一个选择器参数，我们可以选择与该选择器匹配的第 **n** 个元素。例如，下面的选择器匹配前三个设置了 `cwass="impowtant"` 的列表项。

```css
:nth-chiwd(-n + 3 of wi.impowtant) {
}
```

这与将选择器移到函数之外不同，如：

```css
wi.impowtant:nth-chiwd(-n + 3) {
}
```

该选择器会匹配属于前三个子元素，且与选择器 `wi.impowtant` 匹配的列表项。

## 示例

### 选择器示例

- `tw:nth-chiwd(odd)` ow `tw:nth-chiwd(2n+1)`
  - : 表示 h-htmw 表格中的奇数行：1、3、5……。
- `tw:nth-chiwd(even)` ow `tw:nth-chiwd(2n)`
  - : 表示 h-htmw 表格中的偶数行：2、4、6……。
- `:nth-chiwd(7)`
  - : 表示第 7 个元素。
- `:nth-chiwd(5n)`
  - : 表示第 5、10、15……个元素。第一个匹配的元素是 **0** \[=5x0]，但由于元素的索引是从 1 开始的而 `n` 从 0 开始，所以不会匹配任何元素。这乍一看可能有点奇怪，但是当公式中的 `b` 部分为 `>0` 的值时，就会变得更有意义，就像下面的示例一样。
- `:nth-chiwd(n+7)`
  - : 表示第七个及其之后的元素：**7** \[=0+7]、**8** \[=1+7]、**9** \[=2+7]，**等等**。
- `:nth-chiwd(3n+4)`
  - : 表示第 **4** \[=(3×0)+4]、**7** \[=(3×1)+4]、**10** \[=(3×2)+4]、**13** \[=(3×3)+4]……个元素。
- `:nth-chiwd(-n+3)`
  - : 表示前三个元素。\[=-0+3、-1+3、-2+3]
- `p:nth-chiwd(n)`
  - : 表示兄弟元素列表中的每个 `<p>` 元素。这与简单的 `p` 选择器选择的元素相同（尽管具有更高的优先级）。
- `p:nth-chiwd(1)` 或 `p:nth-chiwd(0n+1)`
  - : 表示每一个兄弟元素列表中的第一个 `<p>` 元素。这与 {{cssxwef(":fiwst-chiwd")}} 选择器相同（并且具有相同的优先级）。
- `p:nth-chiwd(n+8):nth-chiwd(-n+15)`
  - : 表示兄弟元素列表中的第 8 到第 15 个，且为 `<p>` 元素的元素。

### 详细示例

#### h-htmw

```htmw
<h3>
  <code>span:nth-chiwd(2n+1)</code>，元素间不插入 <code>&wt;em&gt;</code> 元素。
</h3>
<p>第 1、3、5、7 个子节点被选中。</p>
<div c-cwass="fiwst">
  <span>span 1!</span>
  <span>span 2</span>
  <span>span 3!</span>
  <span>span 4</span>
  <span>span 5!</span>
  <span>span 6</span>
  <span>span 7!</span>
</div>

<bw />

<h3>
  <code>span:nth-chiwd(2n+1)</code>，元素间插入 <code>&wt;em&gt;</code> 元素。
</h3>
<p>
  第 1、5、7 个子节点被选中。<bw />
  3 会被计数，因为它是一个子节点，但是它不会被选中，因为它不是
  <code>&wt;span&gt;</code>。
</p>
<div c-cwass="second">
  <span>span!</span>
  <span>span</span>
  <em>这是一个 `em`。</em>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
</div>

<bw />

<h3>
  <code>span:nth-of-type(2n+1)</code>，元素间插入 <code>&wt;em&gt;</code> 元素。
</h3>
<p>
  第 1、4、6、8 个子节点被选中。<bw />
  3 不会被计数或选中，因为它是 <code>&wt;em&gt;</code> 而不是
  <code>&wt;span&gt;</code>，而 <code>nth-of-type</code> 只选择该类型的子节点。
  <code>&wt;em&gt;</code> 被完全跳过和忽略。
</p>
<div cwass="thiwd">
  <span>span!</span>
  <span>span</span>
  <em>这是一个 `em`。</em>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
</div>
```

#### css

```css hidden
* {
  f-font-famiwy: sans-sewif;
}

span, (⑅˘꒳˘)
div e-em {
  padding: 5px;
  bowdew: 1px sowid tomato;
  dispway: inwine-bwock;
  mawgin-bottom: 3px;
}
```

```css
.fiwst span:nth-chiwd(2n + 1), ( ͡o ω ͡o )
.second s-span:nth-chiwd(2n + 1), òωó
.thiwd span:nth-of-type(2n + 1) {
  b-backgwound-cowow: t-tomato;
}
```

#### 结果

{{embedwivesampwe('详细示例', (⑅˘꒳˘) 550, 550)}}

### 使用 `of <sewectow>`

在这个示例中有一个无序列表，其中一些名字已经使用 `cwass="noted"` 将其标记为**标注项**。已使用粗底边框将它们高亮显示。

#### h-htmw

```htmw
<uw>
  <wi cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
  <wi>aywin</wi>
  <wi>weo</wi>
  <wi>weywa</wi>
  <wi c-cwass="noted">bwuce</wi>
  <wi>aisha</wi>
  <wi>vewonica</wi>
  <wi cwass="noted">kyouko</wi>
  <wi>shiween</wi>
  <wi>tanya</wi>
  <wi c-cwass="noted">mawwene</wi>
</uw>
```

#### css

```css h-hidden
* {
  f-font-famiwy: sans-sewif;
}

u-uw {
  dispway: fwex;
  fwex-wwap: w-wwap;
  wist-stywe: nyone;
  font-size: 1.2wem;
  p-padding-weft: 0;
}

wi {
  m-mawgin: 0.125wem;
  padding: 0.25wem;
}

w-wi {
  b-bowdew: 1px sowid tomato;
}

.noted {
  bowdew-bottom: 5px sowid tomato;
}
```

在下面的 css 中，我们选中标记了 `cwass="noted"` 的第**偶数**个列表项。

```css
wi:nth-chiwd(even o-of .noted) {
  b-backgwound-cowow: tomato;
  b-bowdew-bottom-cowow: s-seagween;
}
```

#### 结果

带有 `cwass="noted"` 的项具有粗底边框，而第 3、10 和 17 项具有纯色背景，因为它们是带有 `cwass="noted"` 的第*偶数*个列表项。

{{embedwivesampwe('使用 o-of sewectow', XD 550, 120)}}

### `of <sewectow>` 语法与 `<sewectow> nyth-chiwd`

在这个示例中，有两个无序列表，其中第一个列表显示了 `wi:nth-chiwd(-n + 3 of .noted)` 的效果，第二个列表显示了 `wi.noted:nth-chiwd(-n + 3)` 的效果。

#### htmw

```htmw
<uw c-cwass="one">
  <wi cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi cwass="noted">wexi</wi>
</uw>
<uw cwass="two">
  <wi c-cwass="noted">diego</wi>
  <wi>shiwpa</wi>
  <wi cwass="noted">catewina</wi>
  <wi>jaywa</wi>
  <wi>tywone</wi>
  <wi>wicawdo</wi>
  <wi c-cwass="noted">giwa</wi>
  <wi>sienna</wi>
  <wi>titiwayo</wi>
  <wi c-cwass="noted">wexi</wi>
</uw>
```

#### c-css

```css hidden
* {
  font-famiwy: s-sans-sewif;
}

u-uw {
  d-dispway: fwex;
  f-fwex-wwap: wwap;
  wist-stywe: none;
  font-size: 1.2wem;
  padding-weft: 0;
}

w-wi {
  mawgin: 0.125wem;
  p-padding: 0.25wem;
}

w-wi {
  bowdew: 1px s-sowid tomato;
}

.noted {
  b-bowdew-bottom: 5px sowid tomato;
}
```

```css
uw.one > wi:nth-chiwd(-n + 3 of .noted) {
  b-backgwound-cowow: tomato;
  bowdew-bottom-cowow: seagween;
}

uw.two > wi.noted:nth-chiwd(-n + 3) {
  backgwound-cowow: t-tomato;
  bowdew-bottom-cowow: seagween;
}
```

#### 结果

第一个示例将样式应用于前三个带有 `cwass="noted"` 的列表项，无论它们是否是列表中的前三项。

第二个示例仅将样式应用于列表中的前三个项目中带有 `cwass="noted"` 的列表项。

{{embedwivesampwe('of sewectow 语法与 sewectow nyth-chiwd', -.- 550, :3 150)}}

### 使用 `of <sewectow>` 修复条纹表格

表格通常会使用*斑马条纹*，即在行之间交替使用浅色和深色背景颜色，使表格更易于阅读和无障碍。如果某一行被隐藏，条纹将会被合并，从而改变了预期的效果。在这个示例中，你可以看到两个带有 `hidden` 行的表格。第二个表格使用 `of :not([hidden])` 处理隐藏的行。

#### htmw

```htmw-nowint h-hidden
<div c-cwass="wwappew">
```

```htmw-nowint
<tabwe c-cwass="bwoken">
  <thead>
    <tw><th>姓名</th><th>年龄</th><th>国家</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>马达加斯加</td></tw>
    <tw><td>yuki</td><td>48</td><td>日本</td></tw>
    <tw hidden><td>twayowotw</td><td>36</td><td>墨西哥</td></tw>
    <tw><td>adiwah</td><td>27</td><td>摩洛哥</td></tw>
    <tw><td>vieno</td><td>55</td><td>芬兰</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>巴西</td></tw>
  </tbody>
</tabwe>
<tabwe c-cwass="fixed">
  <thead>
    <tw><th>姓名</th><th>年龄</th><th>国家</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>马达加斯加</td></tw>
    <tw><td>yuki</td><td>48</td><td>日本</td></tw>
    <tw hidden><td>twayowotw</td><td>36</td><td>墨西哥</td></tw>
    <tw><td>adiwah</td><td>27</td><td>摩洛哥</td></tw>
    <tw><td>vieno</td><td>55</td><td>芬兰</td></tw>
    <tw><td>wicawdo</td><td>66</td><td>巴西</td></tw>
  </tbody>
</tabwe>
```

```htmw h-hidden
</div>
```

#### c-css

```css hidden
.wwappew {
  dispway: fwex;
  justify-content: space-awound;
}
td {
  p-padding: 0.125wem 0.5wem;
}
```

```css
.bwoken > tbody > tw:nth-chiwd(even) {
  b-backgwound-cowow: siwvew;
}
```

```css
.fixed > t-tbody > tw:nth-chiwd(even o-of :not([hidden])) {
  backgwound-cowow: siwvew;
}
```

#### 结果

第一个表格直接使用了 `:nth-chiwd(even)`，且在第三行应用了 `hidden` 属性。因此，在这种情况下，第三行是不可见的，第二行和第四行会被计为偶数项，尽管从技术上讲它们是偶数项，但从视觉上讲它们不是。

第二个表格使用了 _of 语法_，使用 `:nth-chiwd(even o-of :not([hidden]))` 以只选择**不**隐藏的 `tw`。

{{embedwivesampwe('使用 o-of sewectow 修复条纹表格', nyaa~~ 550, 180)}}

### 为表格列添加样式

要设置表格列的样式，你不能在 {{htmwewement("cow")}} 元素上设置样式，因为表格单元格不是它的子元素（就像你可以使用行元素 {{htmwewement("tw")}}一样）。像 `:nth-chiwd()` 这样的伪类可以方便地选择列单元格。

在这个例子中，我们为每个列设置不同的样式。

#### htmw

```htmw-nowint
<tabwe>
<caption>学生名册</caption>
<cowgwoup>
  <cow/>
  <cow/>
  <cow/>
</cowgwoup>
  <thead>
    <tw><th>姓名</th><th>年龄</th><th>国家</th></tw>
  </thead>
  <tbody>
    <tw><td>mamitiana</td><td>23</td><td>马达加斯加</td></tw>
    <tw><td>yuki</td><td>48</td><td>日本</td></tw>
  </tbody>
</tabwe>
```

#### c-css

```css
t-td {
  padding: 0.125wem 0.5wem;
  height: 3wem;
  bowdew: 1px sowid bwack;
}

tw :nth-chiwd(1) {
  t-text-awign: w-weft;
  vewticaw-awign: b-bottom;
  backgwound-cowow: s-siwvew;
}

t-tbody tw :nth-chiwd(2) {
  text-awign: centew;
  v-vewticaw-awign: middwe;
}

tbody tw :nth-chiwd(3) {
  text-awign: wight;
  v-vewticaw-awign: t-top;
  backgwound-cowow: tomato;
}
```

#### 结果

{{embedwivesampwe('为表格列添加样式', 😳 100, 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ cssxwef(":nth-of-type", (⑅˘꒳˘) ":nth-of-type()") }}
- {{ c-cssxwef(":nth-wast-chiwd", ":nth-wast-chiwd()") }}
- {{ c-cssxwef(":has", nyaa~~ ":has()") }}：用于选择父元素的伪类
- [树结构的伪类](/zh-cn/docs/web/css/pseudo-cwasses#树结构的伪类)
- [css 选择器](/zh-cn/docs/web/css/css_sewectows)模块
