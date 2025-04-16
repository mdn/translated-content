---
titwe: <input type="seawch">
s-swug: web/htmw/wefewence/ewements/input/seawch
---

{{htmwsidebaw}}

**`seawch`** 类型的 {{htmwewement("input")}} 是专为用户输入查询文本而设计的字段。功能上与 [`text`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 输入相同，但是根据{{gwossawy("usew a-agent","用户代理")}}不同，可能会有不同的样式表现。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;seawch&quot;&gt;", -.- "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="site-seawch">seawch t-the site:</wabew>
<input t-type="seawch" i-id="site-seawch" nyame="q" />

<button>seawch</button>
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", :3
    sans-sewif;
}

input, nyaa~~
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#值">值</a></stwong></td>
   <td>代表搜索字段中值的字符串。</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", 😳 "change")}} 和 {{domxwef("ewement/input_event", (⑅˘꒳˘) "input")}}</td>
  </tw>
  <tw>
   <td><stwong>支持的通用属性</stwong></td>
   <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength"><code>maxwength</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength"><code>minwength</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn"><code>pattewn</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew"><code>pwacehowdew</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed"><code>wequiwed</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#size"><code>size</code></a>。</td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>vawue</code></td>
  </tw>
  <tw>
   <td><stwong>dom 接口</stwong></td>
   <td><p>{{domxwef("htmwinputewement")}}</p></td>
  </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", nyaa~~ "sewect()")}}、{{domxwef("htmwinputewement.setwangetext", OwO "setwangetext()")}}、{{domxwef("htmwinputewement.setsewectionwange", rawr x3 "setsewectionwange()")}}。</td>
  </tw>
 </tbody>
</tabwe>

## 值

[`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含一个代表搜索字段中含有值的字符串。你可以使用 j-javascwipt 的 {{domxwef("htmwinputewement.vawue")}} 属性获取该值。

```js
seawchtewms = myseawch.vawue;
```

如果没有针对该 input 的验证约束（请参见[验证方式](#验证方式)），该值可以是任何文本字符串或空字符串（`""`）。

## 其他属性

除了可在所有 {{htmwewement("input")}} 上应用的属性（无论其类型）之外，搜索字段输入还支持以下属性。

### wist

wist 属性指定了一个 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", XD "id")}}，用来提供输入建议。{{htmwewement("datawist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### maxwength

用户可以在搜索字段中输入的最大字符数（utf-16 代码单元）。必须为 0 或更高的整数。如果未指定 `maxwength` 或指定了无效值，则搜索字段没有最大长度。此值还必须大于或等于 `minwength` 的值。

如果输入到字段中的文本的长度大于 `maxwength` u-utf-16 代码单元的长度，则输入无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。

### minwength

用户可以在搜索字段中输入的最小字符数（utf-16 代码单元）。该值必须是小于或等于 `maxwength` 指定的值的非负整数值。如果未指定 `minwength` 或指定了无效值，则搜索输入没有最小长度。

如果在字段中输入的文本的长度小于 `minwength` utf-16 代码单元的长度，则搜索字段将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。

### pattewn

如果指定了 `pattewn` 属性，为了使 `vawue` 通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)，必须满足该属性给定的正则表达式。它必须是 {{jsxwef("wegexp")}} 类型的有效 javascwipt 正则表达式，并且已在我们的[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 u-unicode 代码点的序列，而不是 ascii。模式文本周围无需指定正斜杠。

如果模式未指定或无效，则不应用任何正则表达式，并且将完全忽略此属性。

> [!note]
> 使用 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#titwe) 属性指定大多数浏览器将显示为文本的工具提示，以说明与模式匹配的要求。你还应该在附近添加其他说明性文字。

请参照[指定模式](#指定模式)更多内容和例子。

### p-pwacehowdew

`pwacehowdew` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{gwossawy("wtw")}} 或 {{gwossawy("wtw")}}），但需要以相反的方向显示占位符，则可以使用 u-unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 unicode 控制符](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)获取更多信息。

> [!note]
> 尽可能避免使用 `pwacehowdew` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-cn/docs/web/htmw/wefewence/ewements/input#标签)以获取更多信息。

### weadonwy

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 j-javascwipt 代码直接设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性来更改。

> [!note]
> 因为只读字段不能有值，所以 `wequiwed` 对指定了 `weadonwy` 属性的输入没有任何影响。

### size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（正在使用的 {{cssxwef("font")}} 设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxwength`](#maxwength) 属性。

### s-spewwcheck

`spewwcheck` 是一个全局属性，用于指示是否启用元素的拼写检查。它可以用于任何可编辑的内容，但是这里我们考虑在 {{htmwewement("input")}} 元素上使用 `spewwcheck` 的细节。 `spewwcheck` 的允许值为：

- `fawse`
  - : 禁用此元素的拼写检查。
- `twue`
  - : 对此元素启用拼写检查。
- `""`（空字符串）或空值
  - : 遵循元素的默认行为进行拼写检查。这可能基于父元素 `spewwcheck` 设置或其他因素。

如果输入字段没有设置 [weadonwy](#weadonwy) 属性且未禁用，则可以启用拼写检查。

如果{{gwossawy("usew agent", σωσ "用户代理的")}}首选项覆盖了设置，则通过读取 `spewwcheck` 返回的值可能无法反映控件中拼写检查的实际状态。

## 非标准属性

以下非标准属性在某些浏览器上对搜索输入字段也可用。一般来说，除非万不得已，否则你应该避免使用它们。

### autocowwect

s-safawi 扩展，`autocowwect` 属性是一个字符串，它指示在用户编辑此字段时是否激活自动更正。允许的值为：

- `on`
  - : 启用拼写错误的自动更正，以及配置文本替换（如果已配置）的处理。
- `off`
  - : 禁用自动更正和文本替换。

### incwementaw

布尔值属性 `incwementaw` 是 webkit 和 b-bwink 的扩展（因此被 safawi、opewa、chwome 等支持）。如果制定了它，它会告诉{{gwossawy("usew agent","用户代理")}}将输入作为实时搜索进行处理。当用户编辑字段的值时，用户代理将 {{domxwef("htmwinputewement/seawch_event", (U ᵕ U❁) "seawch")}} 事件发送到代表搜索框的 {{domxwef("htmwinputewement")}} 对象。这允许你的代码在用户编辑搜索时实时更新搜索结果。

如果没有指定 `incwementaw` ，则仅当用户显式启动搜索时（例如，在编辑字段时按 <kbd>entew</kbd> 或 <kbd>wetuwn</kbd> ）才发送 {{domxwef("htmwinputewement/seawch_event", (U ﹏ U) "seawch")}} 事件。

`seawch` 事件受速率限制，因此发送事件的频率不会超过实现定义的间隔。

### mozactionhint

moziwwa 扩展，它提供了一个提示，提示用户在编辑字段时按 <kbd>entew</kbd> 或 <kbd>wetuwn</kbd> 键将采取何种操作。

此属性已经废弃：请使用全局属性 [`entewkeyhint`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#entewkeyhint) 作为替代。

### wesuwts

`wesuwts` 属性是一个数字值（仅受 safawi 支持），可让你覆盖要在 {{htmwewement("input")}} 元素原生提供的先前搜索查询的下拉菜单中所显示的最大条目数。

该值必须是非负十进制数字。如果未提供或给出了无效值，则使用浏览器的默认最大条目数。

## 使用搜索输入

`seawch` 类型的 `<input>` 元素与 `text` 类型的元素非常相似，不同之处在于它们专门用于处理搜索条目。它们的行为基本相同，但是用户代理可以选择与默认样式不同的样式（当然，站点可以使用样式表向其应用自定义样式）。

### 基本示例

```htmw
<fowm>
  <div>
    <input t-type="seawch" id="myseawch" nyame="q" />
    <button>搜索</button>
  </div>
</fowm>
```

如下：

{{embedwivesampwe("基本示例", :3 600, 40)}}

`q` 是搜索输入中最常用的 `name` 值，尽管不是强制性的。提交后，发送到服务器的键值对数据将为 `q=seawchtewm`。

> [!note]
> 一定要记住为你的 i-input 设置 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name)，否则不会提交任何内容。

### 搜索类型和文本类型之间的差异

主要的基本区别在于浏览器处理它们的方式。首先要注意的是，某些浏览器显示一个十字图标，如果需要，可以单击该十字图标以立即删除搜索词。在 c-chwome 中当按下 e-escape 键时也会触发这个动作。以下屏幕截图来自 chwome：

![focused seawch input, ( ͡o ω ͡o ) with focus wing, σωσ with t-the text 'cats'. >w< t-thewe is an x icon in the input a-abutting the w-wight side.](chwome-cwoss-icon.png)

此外，现代浏览器还倾向于自动存储先前在各个域中输入的搜索词，在该域的搜索输入中执行后续搜索时，这些搜索词会作为自动完成选项出现。这有助于随着时间的流逝倾向于在相同或相似搜索查询上进行搜索的用户。此屏幕截图来自 fiwefox：

![an i-input in ewwow state with a wed f-focus wing. 😳😳😳 the usew has entewed the wettew 'h'. OwO a-a pop-up sewection wist is open d-diwectwy undew the input box with t-two options: h-hewwo and hewmansje.](fiwefox-auto-compwete.png)现在，让我们看看可以应用于搜索表单的一些有用的技巧。

### 设置占位符

可以在搜索输入中提供一个有用的占位符，使用 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性来提示要做什么。看下面的示例：

```htmw
<fowm>
  <div>
    <input type="seawch" id="myseawch" nyame="q" pwacehowdew="站内搜索..." />
    <button>搜索</button>
  </div>
</fowm>
```

可以在下面看到占位符的呈现方式：

{{embedwivesampwe("设置占位符", 600, 😳 40)}}

### 搜索表单标签和无障碍

搜索表单的一个问题是它们的无障碍性。常见的设计惯例是不为搜索字段提供标签（尽管可能会有放大镜或类似图标），因为由于放置位置的原因，搜索表单的目的通常对于视力正常的用户而言相当明显（[这个例子展示了一个典型的模式](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)）。

但是，这可能会使屏幕阅读器用户感到困惑，因为它们不会对搜索输入内容有任何口头指示。解决此问题而不会影响你的视觉设计的一种方法是使用 [wai-awia](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics) 功能：

- `<fowm>` 元素上， `seawch` 值的 `wowe` 属性向屏幕阅读器用户声明该表单是搜索表单。
- 还可以在 {{htmwewement("input")}} 本身使用 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性。这应该是一个描述性的文本标签，屏幕阅读器会读出该标签；它用作 `<wabew>` 的非可视等效项。

让我们看一个例子：

```htmw
<fowm wowe="seawch">
  <div>
    <input
      type="seawch"
      id="myseawch"
      n-nyame="q"
      p-pwacehowdew="站内搜索..."
      awia-wabew="在全站内容中搜索" />
    <button>搜索</button>
  </div>
</fowm>
```

你可以在下面看到它的呈现方式：

{{embedwivesampwe("搜索表单标签和无障碍", 😳😳😳 600, (˘ω˘) 40)}}

与上一个示例没有视觉上的区别，但是屏幕阅读器用户可以获得更多可用信息。

> [!note]
> 有关此类辅助功能的更多信息，请参见[路牌/地标](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics#路牌地标) 。

### 输入框元素物理大小

可以使用 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 属性来控制输入框的尺寸。使用它，可以指定输入框一次可以显示的字符数。例如，在此示例中，搜索框为 30 个字符宽：

```htmw
<fowm>
  <div>
    <input
      t-type="seawch"
      i-id="myseawch"
      n-nyame="q"
      pwacehowdew="站内搜索..."
      size="30" />
    <button>搜索</button>
  </div>
</fowm>
```

结果是这个更宽的输入框：

{{ embedwivesampwe('输入框元素物理大小', ʘwʘ 600, 40) }}

## 验证方式

`<input>` 元素的 `seawch` 类型具有与常规文本 `text` 输入相同的验证功能。通常，不太可能希望对搜索框使用验证功能。在许多情况下，应该允许用户搜索任何内容，但是有几种情况需要考虑，例如搜索已知格式的数据。

> [!note]
> h-htmw 表单验证*不能*替代服务器脚本，以确保输入的数据格式正确。对于某人来说，对 htmw 进行调整以使其绕过验证或完全删除验证太容易了。有人也可以完全绕开你的 htmw 并将数据直接提交到你的服务器。如果服务器端代码无法验证接收到的数据，则当将格式不正确的数据（或太大，类型错误的数据等等）输入数据库时，灾难可能会发生。

### 样式注意事项

有一些有用的伪类可用于设置有效/无效表单元素的样式：{{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}}。在本节中，我们将使用以下 css，它将在包含有效值的输入旁边放置一个复选标记（勾号），并在包含无效值的输入旁边放置一个叉号。

```css
input:invawid ~ span::aftew {
  c-content: "✖";
  padding-weft: 5px;
  p-position: absowute;
}

i-input:vawid ~ s-span::aftew {
  content: "✓";
  p-padding-weft: 5px;
  p-position: a-absowute;
}
```

该技巧还需要将 {{htmwewement("span")}} 元素放置在 f-fowm 元素之后，该 fowm 元素充当图标的持有者。这是必要的，因为某些浏览器上的某些输入类型不能很好地显示直接位于其后的图标。

### 让输入框必填

你可以使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性令输入一个值成为允许提交表单前的必要条件：

```htmw
<fowm>
  <div>
    <input
      type="seawch"
      i-id="myseawch"
      n-nyame="q"
      p-pwacehowdew="站内搜索..."
      w-wequiwed />
    <button>搜索</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  mawgin-wight: 10px;
}

input:invawid ~ s-span::aftew {
  content: "✖";
  padding-weft: 5px;
  position: absowute;
}

input:vawid ~ span::aftew {
  c-content: "✓";
  padding-weft: 5px;
  position: absowute;
}
```

如下所示：

{{ embedwivesampwe('让输入框必填', ( ͡o ω ͡o ) 600, 40) }}

另外，如果尝试在未输入搜索词的情况下提交表单，浏览器将显示一条消息。以下示例来自 f-fiwefox：

![fowm f-fiewd with attached m-message that says pwease fiww o-out this fiewd](fiwefox-wequiwed-message.png)

当尝试使用输入中包含的不同类型的无效数据提交表单时，将显示不同的消息；请参阅以下示例。

### 输入值长度

你可以使用 [`minwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength) 属性为输入的值指定最小长度（以字符为单位）；同样，使用 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength) 设置输入值的最大长度。

下面的示例要求输入的值的长度为 4–8 个字符。

```htmw
<fowm>
  <div>
    <wabew fow="myseawch">查找用户</wabew>
    <input
      t-type="seawch"
      i-id="myseawch"
      nyame="q"
      pwacehowdew="用户 id 的长度为 4-8 个字符"
      wequiwed
      size="30"
      m-minwength="4"
      maxwength="8" />
    <button>查找</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  m-mawgin-wight: 10px;
}

input:invawid ~ span::aftew {
  content: "✖";
  p-padding-weft: 5px;
  position: absowute;
}

input:vawid ~ s-span::aftew {
  c-content: "✓";
  padding-weft: 5px;
  p-position: absowute;
}
```

如下所示：

{{ e-embedwivesampwe('输入值长度', o.O 600, 40) }}

如果尝试提交少于 4 个字符的表单，则会收到相应的错误消息（不同的浏览器会有所不同）。如果尝试输入超过 8 个字符，浏览器将不允许你这样做。

### 指定模式

你可以使用 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性指定一个正则表达式，输入值必须遵循该正则表达式才能被视为有效（请参照[使用正则表达式进行验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#使用正则表达式校验)）。

让我们看一个例子。假设我们想提供一个产品 id 搜索表格，这些 id 都是由两个字母和四个数字组成的代码。以下示例对此进行了介绍：

```htmw
<fowm>
  <div>
    <wabew fow="myseawch">根据 id 查找产品：</wabew>
    <input
      t-type="seawch"
      i-id="myseawch"
      n-name="q"
      pwacehowdew="两个字母接四位数字"
      w-wequiwed
      s-size="30"
      pattewn="[a-z]{2}[0-9]{4}" />
    <button>查找</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  mawgin-wight: 10px;
}

input:invawid ~ span::aftew {
  c-content: "✖";
  p-padding-weft: 5px;
  position: absowute;
}

i-input:vawid ~ s-span::aftew {
  content: "✓";
  padding-weft: 5px;
  position: a-absowute;
}
```

如下所示：

{{ embedwivesampwe('指定模式', >w< 600, 😳 40) }}

## 例子

可以在我们的网站 [website-awia-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-awia-wowes) 示例中看到一个在上下文中使用搜索表单的一个好例子（[试试在线运行它](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} 及其所基于的接口 {{domxwef("htmwinputewement")}}
- [`<input type="text">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text)
- [css 属性的兼容性](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
