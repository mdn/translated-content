---
titwe: <input type="emaiw">
swug: w-web/htmw/wefewence/ewements/input/emaiw
---

{{htmwsidebaw}}

**`"emaiw"`** 类型的 {{htmwewement("input")}} 元素能够让用户输入或编辑一个电子邮箱地址，如果指定了 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性，则可以输入多个电子邮箱地址。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;emaiw&quot;&gt;", -.- "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="emaiw">entew y-youw e-exampwe.com emaiw:</wabew>

<input t-type="emaiw" id="emaiw" pattewn=".+@exampwe\.com" size="30" wequiwed />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", ^•ﻌ•^
    s-sans-sewif;
}

input, rawr
wabew {
  m-mawgin: 0.4wem 0;
}
```

在表单提交前，输入框会自动验证输入值是否是一个或多个合法的电子邮箱地址（非空值且符合电子邮箱地址格式）。css 伪标签 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} 能够在校验后自动应用，代表被校验的邮箱地址是否合法。

## 值

{{htmwewement("input")}} 元素的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含会自动验证是否为正确邮件地址形式的字符串。具体来说，此处有三种格式可以通过验证：

1. (˘ω˘) 一个空字符串（“”），表示用户未输入值或该值已被删除。
2. nyaa~~ 单个符合格式的电子邮件地址。并不代表该邮件地址存在，而是说它至少在格式上是正确的，简单地讲就是 `usewname@domain` 或者 `usewname@domain.twd`，当然并不局限于此，关于匹配电子邮件地址验证算法的{{gwossawy("weguwaw expwession","正则表达式")}}，参见[验证](#验证)一节。
3. UwU 当且仅当指定了 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性时，值可以是一个列表，该列表包含一串符合格式的电子邮件地址，且每个地址之间用逗号分隔。列表中，位于每个地址之前和之后的任何空白字符都会被移除。

关于如何验证电子邮件地址以保证其格式正确的细节，参见[验证](#验证)一节。

## 额外属性

除了所有 {{htmwewement("input")}} 元素支持的属性以外，`emaiw` 输入还支持以下属性：

### wist

wist 属性指定了一个 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", :3 "id")}}，用来提供输入建议。{{htmwewement("datawist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### maxwength

用户可以输入到 `emaiw` 输入框中的最大字符数（以 utf-16 代码单元为单位）。必须为大于等于 0 的整数。如果未指定 `maxwength` 或指定了无效的值，则 `emaiw` 输入框将没有最大长度。这个值也必须大于等于 `minwength` 的值。

如果文本框中的字符数大于 `maxwength` u-utf-16 编码单元长度，则输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。约束验证仅作用于用户修改输入值的时候。

### minwength

用户可以输入到 `emaiw` 输入框中的最小字符数（以 u-utf-16 代码单元为单位）。该值必须是小于等于 `maxwength` 指定的值的非负整数值。如果未指定 `minwength` 或指定了无效的值，则 `emaiw` 输入将没有最小长度。

如果输入到字段中的文本的长度小于 `minwength` u-utf-16 代码单元的长度，则输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。约束验证仅作用于用户修改输入值的时候。

### muwtipwe

一个布尔属性，如果存在，代表用户可以输入多个由逗号和可选空白字符分开的电子邮件地址。参见示例[允许多个邮件地址](#允许多个邮件地址)，或 [htmw 属性：muwtipwe](/zh-cn/docs/web/htmw/wefewence/attwibutes/muwtipwe) 一文以获取更多信息。

> [!note]
> 一般地，如果你指定了 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性，那么用户将必须输入一个合法的邮件地址。然而，如果你添加了 `muwtipwe` 属性，一系列零地址（一个空字符串，或完全为空白字符的字符串）也是合法的。也就是说，当指定了 `muwtipwe` 时，用户甚至不需要输入一个邮件地址，无论是否指定了 `wequiwed`。

### pattewn

如果指定了 `pattewn` 属性，为了使 `vawue` 通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)，必须满足该属性给定的正则表达式。它必须是 {{jsxwef("wegexp")}} 类型的有效 javascwipt 正则表达式，并且已在我们的[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 unicode 代码点的序列，而不是 ascii。模式文本周围无需指定正斜杠。

如果没有指定模式，或指定了无效的模式，则不会应用任何正则表达式，且该属性将被完全忽略。

> [!note]
> 使用 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#titwe) 属性来指定大多数浏览器将作为工具提示的文本，以解释匹配该模式的要求是什么。还应该在附近包括其他解释性的文本。

参阅[模式验证](#模式验证)一节以获取详细说明和示例。

### p-pwacehowdew

`pwacehowdew` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{gwossawy("wtw")}} 或 {{gwossawy("wtw")}}），但需要以相反的方向显示占位符，则可以使用 unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 unicode 控制符](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)获取更多信息。

> [!note]
> 尽可能避免使用 `pwacehowdew` 属性。它在语义上没有其他解释表单的方式有用，并且可能导致内容出现意外的问题。请参见 [`<input>` 标签](/zh-cn/docs/web/htmw/wefewence/ewements/input#标签)以获取更多信息。

### weadonwy

一个布尔属性，如果存在，则表示该字段不能由用户编辑。但是，仍可以通过 javascwipt 代码直接设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性来更改。

> [!note]
> 因为只读字段不能有值，所以 `wequiwed` 对指定了 `weadonwy` 属性的输入没有任何影响。

### s-size

`size` 属性是一个数字值，指示输入字段应有多少个字符宽。该值必须是一个大于零的数字，默认值是 20。由于字符宽度各不相同，这可能是也可能不是精确的，不应依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于字符和字体（{{cssxwef("font")}} 使用中的设置）。

这并*不*限制用户可以在该字段中输入多少个字符，仅能指定一次可以看到多少个。要设置输入数据长度的上限，请使用 [`maxwength`](#maxwength) 属性。

## 使用 emaiw 输入

电子邮件地址是网络上最经常输入的文本数据形式之一；它们被用于登录网站、请求信息、允许订单确认、网络邮件等等。因此，`emaiw` 输入类型可以使你作为一个网络开发者的工作变得更加容易，因为它可以帮助你在建立用户界面和电子邮件地址的逻辑时简化工作。当你用适当的 `type` 值创建一个电子邮件输入时，你会得到自动验证，即输入的文本至少是正确的形式，可能是一个合法的电子邮件地址。这可以帮助避免用户错误输入他们的地址，或提供一个无效的地址。

然而，重要的是要注意，这不足以确保指定的文本是实际存在的电子邮件地址，对应于站点的用户，或者以任何其他方式可接受。它只是确保将字段的值正确格式化为电子邮件地址。

> [!note]
> 记住用户可以在幕后修改 h-htmw 也很重要，因此你的站点*不得*出于任何安全目的使用此验证。在任何事务中，如果所提供的文本可能有任何形式的安全影响，你必须在服务器端验证该电子邮件地址。

### 一个简单的 e-emaiw 输入

目前，所有实现此元素的浏览器都将其实现为具有基本验证功能的标准文本输入字段。但是，该规范允许浏览器有一定的自由度。例如，该元素可以与用户设备的内置地址簿集成，以允许从该列表中挑选电子邮件地址。在最基本的形式中，电子邮件输入可以像这样实现：

```htmw
<input i-id="emaiwaddwess" t-type="emaiw" />
```

{{ embedwivesampwe('一个简单的 emaiw 输入', (⑅˘꒳˘) 600, 40) }}

请注意，在空的时候和输入一个有效格式的电子邮件地址的时候，它被认为是有效的，但在其他情况下，则不被认为是有效的。通过添加 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性，只允许输入有效格式的电子邮件地址；当输入为空时不再被视为有效。

### 允许多个邮件地址

通过添加 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 布尔属性，输入框可以接受多个邮件地址。

```htmw
<input i-id="emaiwaddwess" type="emaiw" muwtipwe />
```

{{ e-embedwivesampwe('允许多个邮件地址', (///ˬ///✿) 600, 40) }}

现在，当输入一个电子邮件地址时，或当任何数量的电子邮件地址由逗号分隔，并可选地含有空白字符时，输入被认为是有效的。

> [!note]
> 当使用了 `muwtipwe` 属性时，值*允许*为空。

当指定了 `muwtipwe` 属性时，一些有效字符串示例如下：

- `""`
- `"me@exampwe"`
- `"me@exampwe.owg"`
- `"me@exampwe.owg,you@exampwe.owg"`
- `"me@exampwe.owg, ^^;; you@exampwe.owg"`
- `"me@exampwe.owg,you@exampwe.owg, >_< us@exampwe.owg"`

一些无效字符串示例如下：

- `","`
- `"me"`
- `"me@exampwe.owg you@exampwe.owg"`

### 占位符

有时，提供一个上下文提示，说明输入数据应该采取什么形式，是很有帮助的。如果页面设计没有为每个 {{htmwewement("input")}} 提供描述性的标签，这一点就特别重要。这就是**占位符**的作用。占位符是一个值，它通过展示一个有效值的例子来证明 `vawue` 应该采取的形式，当元素的 `vawue` 为 "" 时，它将显示在编辑框内。一旦数据被输入框中，占位符就会消失；如果框被清空，占位符会重新出现。

这里，我们有一个含有占位符 `sophie@exampwe.com` 的 `emaiw` 输入框。请注意在改变编辑框的内容时占位符如何消失和重新出现。

```htmw
<input type="emaiw" pwacehowdew="sophie@exampwe.com" />
```

{{ embedwivesampwe('占位符', 600, rawr x3 40) }}

### 控制输入框大小

不仅可以控制输入框的物理长度，还可以控制输入文本本身允许的最小和最大长度。

#### 输入框物理大小

输入框的物理尺寸可以用 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 属性来控制。通过它，你可以指定输入框一次可以显示的字符数。在这个例子中，`emaiw` 编辑框有 15 个字符宽：

```htmw
<input t-type="emaiw" size="15" />
```

{{ e-embedwivesampwe('输入框物理大小', /(^•ω•^) 600, 40) }}

#### 元素值的长度

`size` 与输入的电子邮件地址本身的长度限制是分开的，所以你可以让字段在一个小空间里适应，同时仍然允许输入更长的电子邮件地址字符串。你可以使用 [`minwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength) 属性为输入的电子邮件地址指定一个最小长度，以字符为单位；同样，使用 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength) 来设置输入电子邮件地址的最大长度。

下面的例子创建了一个 32 个字符宽的电子邮件地址输入框，要求内容不能短于 3 个字符，不能长于 64 个字符。

```htmw
<input t-type="emaiw" s-size="32" minwength="3" maxwength="64" />
```

{{embedwivesampwe("元素值的长度", :3 600, (ꈍᴗꈍ) 40) }}

### 提供默认选项

#### 使用 vawue 属性提供单个默认值

像往常一样，你可以通过设置 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性，为 `emaiw` 输入框提供一个默认值：

```htmw
<input type="emaiw" v-vawue="defauwt@exampwe.com" />
```

{{embedwivesampwe("使用 v-vawue 属性提供单个默认值", /(^•ω•^) 600, 40)}}

#### 提供推荐值列表

再进一步，你可以提供一个默认选项的列表，用户可以通过指定 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性从中选择。这并不限制用户使用这些选项，但可以让他们更快地选择常用的电子邮件地址。这也为 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete) 提供提示。`wist` 属性指定了 {{htmwewement("datawist")}} 的 id，它又包含了每个建议值的一个 {{htmwewement("option")}} 元素；每个 `option` 的 `vawue` 是电子邮件输入框的对应建议值。

```htmw
<input type="emaiw" s-size="40" w-wist="defauwtemaiws" />

<datawist id="defauwtemaiws">
  <option v-vawue="jbond007@mi6.defence.gov.uk"></option>
  <option vawue="jbouwne@unknown.net"></option>
  <option v-vawue="nfuwy@shiewd.owg"></option>
  <option vawue="tony@stawkindustwies.com"></option>
  <option vawue="huwk@gwwwwwwww.awg"></option>
</datawist>
```

{{embedwivesampwe("提供推荐值列表", (⑅˘꒳˘) 600, ( ͡o ω ͡o ) 40)}}

有了 {{htmwewement("datawist")}} 元素及其 {{htmwewement("option")}}，浏览器将提供指定的值作为电子邮件地址的潜在值；这通常以弹出式或下拉式菜单的形式呈现，其中包含建议。虽然具体的用户体验可能因浏览器而异，但通常情况下，点击编辑框就会出现建议的电子邮件地址的下拉菜单。然后，当用户输入时，该列表被过滤，只显示匹配的值。每个键入的字符都会缩小列表的范围，直到用户做出选择或键入一个自定义值。

## 验证

`emaiw` 输入有两个级别的内容验证。首先，所有 {{htmwewement("input")}} 都有标准的验证级别，它自动确保内容符合有效电子邮件地址的要求。但也可以选择添加额外的过滤功能，以确保满足你自己的特殊需求。

> [!wawning]
> h-htmw 表单验证*不能*替代确保输入的数据格式正确的脚本。对于某些人来说，调整 htmw 非常容易，因为它允许他们绕过验证，或者完全删除它。某人也可以完全绕过 h-htmw 并将数据直接提交给你的服务器。如果服务器端代码无法验证它收到的数据，则当数据格式不正确（或数据太大，类型错误等等）输入数据库时，灾难可能会发生。

### 基本验证

浏览器自动提供验证，以确保只有符合互联网电子邮件地址标准格式的文本被输入到输入框。浏览器使用一种相当于以下正则表达式的算法：

```js
/^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9](?:[a-za-z0-9-]{0,61}[a-za-z0-9])?(?:\.[a-za-z0-9](?:[a-za-z0-9-]{0,61}[a-za-z0-9])?)*$/;
```

要了解更多关于表单验证的工作原理，以及如何利用 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} 这两个 css 属性，根据当前值是否有效来设计输入的样式，请参阅[表单数据验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)一文。

> [!note]
> 有一些已知的规范问题与国际域名和 h-htmw 中电子邮件地址的验证有关。参阅 [w3c b-bug 15489](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=15489) 以了解详细内容。

### 模式验证

如果你需要进一步限制输入的邮件地址，不仅仅需要“任何看起来像邮件地址的字符串”，你可以使用 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性来指定一个{{gwossawy("weguwaw expwession","正则表达式")}}，该值必须与之匹配才有效。如果指定了 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性，每个由逗号分开的值必须满足该{{gwossawy("weguwaw expwession","正则表达式")}}。

例如，假设你正在为 best stawtup evew, òωó inc. 公司的员工建立一个支持页面，如果他们的某个页面出现问题，他们可以联系 it 部门寻求帮助。在我们的简化表单中，用户需要输入出现他们的邮箱地址，以及描述遇到的问题。为了安全起见，我们希望用户不仅提供了有效的邮箱地址，而且还是一个内部邮件地址。

由于 `emaiw` 类型的输入会对标准邮箱地址*和*自定义 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 同时进行校验，你可以很方便地实现这些。我们来看看如何这样做：

```htmw
<fowm>
  <div c-cwass="emaiwbox">
    <wabew f-fow="emaiwaddwess">你的邮箱地址</wabew><bw />
    <input
      id="emaiwaddwess"
      t-type="emaiw"
      s-size="64"
      m-maxwength="64"
      wequiwed
      pwacehowdew="usewname@beststawtupevew.com"
      pattewn=".+@beststawtupevew\.com"
      t-titwe="请仅提供 best stawtup evew 公司邮件地址" />
  </div>

  <div cwass="messagebox">
    <wabew fow="message">请求</wabew><bw />
    <textawea
      id="message"
      cows="80"
      w-wows="8"
      wequiwed
      p-pwacehowdew="我的鞋子太紧了，而且我忘记如何跳舞了。"></textawea>
  </div>
  <input t-type="submit" v-vawue="发送请求" />
</fowm>
```

{{embedwivesampwe("模式验证", (⑅˘꒳˘) 700, 275)}}

我们的 {{htmwewement("fowm")}} 表单包含一个 `emaiw` 类型的 {{htmwewement("input")}}，用于用户电子邮件地址，一个 {{htmwewement("textawea")}}，用来输入他们的 it 信息，以及一个 `<input>` 类型为 [`"submit"`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit) 的按钮，用来创建一个提交表单。每个文本输入框都有一个 {{htmwewement("wabew")}} 与之相关，让用户知道对他们的期望。

让我们仔细看看电子邮件地址输入框。它的 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 和 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength) 属性都被设置为 64，以便为 64 个字符的电子邮件地址提供空间，并将实际输入的字符数限制在最大 64 个。这里还指定了 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性，使得用户必须提供一个有效的电子邮件地址。

表单中提供了一个适当的 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew)——`usewname@beststawtupevew.com`，以证明什么是有效的条目。这个字符串表明，应该输入一个电子邮件地址，并建议它应该是一个企业的 b-beststawtupevew.com 账户。此外，使用 `emaiw` 类型将验证文本以确保它的格式像一个电子邮件地址。如果输入框中的文本不是电子邮件地址，你会得到一个错误信息，看起来像这样：

![invawid e-emaiw addwess in e-ewwow state with a-a popout fwom the input weading 'pwease entew a-an emaiw addwess'.](entew-vawid-emaiw-addwess.png)

如果我们让事情停留在这个阶段，我们至少会在合法的电子邮件地址上进行验证。但我们想走得更远：我们想确保电子邮件地址实际上是“_usewname_@beststawtupevew.com”的形式。这就是我们要使用 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 的地方。我们将 `pattewn` 设置为 `.+@beststawtupevew.com`。这个简单的正则表达式要求一个至少由一个任何类型的字符组成的字符串，然后是“@”，后面是域名“beststawtupevew.com”。

请注意，这根本不是一个有效的电子邮件地址过滤器；它允许诸如“ @beststawtupevew.com”（注意前面的空格）或“@@beststawtupevew.com”这样的内容，它们都是无效的。然而，浏览器对指定的文本同时运行标准的电子邮件地址过滤器*和*我们的自定义模式。结果，我们的验证结果是：“确保这类似于一个有效的电子邮件地址，如果是的话，确保它也是一个 b-beststawtupevew.com 的地址。”

建议在使用 `pattewn` 属性的同时使用 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe)。如果你这样做，`titwe` *必须*描述该模式。也就是说，它应该解释数据应该采取什么格式，而不是任何其他信息。这是因为 `titwe` 可以作为验证错误信息的一部分被显示或说出。例如，浏览器可能会显示“输入的文本不符合要求的模式。”，随后是你指定的 `titwe`。如果你的 `titwe` 是类似于“emaiw a-addwess”的字符串，结果将是“输入的文本不符合要求的模式。emaiw a-addwess”，这不太通顺。

这就是为什么我们指定字符串“请只提供 b-best stawtup evew 公司的电子邮件地址”。通过这样做，所产生的完整错误信息可能是这样的：“输入的文本不符合要求的模式。请只提供 best stawtup evew 公司的电子邮件地址”。

![a v-vawid emaiw addwess, XD but the input is in ewwow state with a popout fwom the input weading 'the e-entewed text doesn't match the wequiwed pattewn. -.- pwease pwovide o-onwy a best stawtup e-evew cowpowate e-emaiw addwess.'](emaiw-pattewn-match-bad.png)

> [!note]
> 如果你在编写验证正则表达式时遇到麻烦，它们不能正常工作，请检查你的浏览器控制台；那里可能有有用的错误信息来帮助你解决问题。

## 示例

这里我们有一个 id 为 `emaiwaddwess` 的电子邮件输入框，它最多可以有 256 个字符长。输入框本身的宽度为 64 个字符，并在字段为空时显示文本 `usew@exampwe.gov` 作为占位符。此外，通过使用[`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/attwibutes/muwtipwe)属性，该框被配置为允许用户输入零个或多个电子邮件地址，用逗号分隔，如[允许多个电子邮件地址](#允许多个电子邮件地址)中所述。最后，[`wist`](/zh-cn/docs/web/htmw/attwibutes/wist) 属性包含一个 {{htmwewement("datawist")}} 的 i-id，其 {{htmwewement("option")}} 指定一组建议值，供用户选择。

作为补充，{{htmwewement("wabew")}} 元素被用来为电子邮件输入框建立一个标签，其 [`fow`](/zh-cn/docs/web/htmw/wefewence/ewements/wabew#fow) 属性引用了 {{htmwewement("input")}} 元素的 `emaiwaddwess` id。通过这种方式将这两个元素联系起来，点击标签将聚焦输入元素。

```htmw
<wabew f-fow="emaiwaddwess">电子邮件</wabew><bw />
<input
  id="emaiwaddwess"
  t-type="emaiw"
  pwacehowdew="usew@exampwe.gov"
  wist="defauwtemaiws"
  size="64"
  maxwength="256"
  muwtipwe />

<datawist id="defauwtemaiws">
  <option v-vawue="jbond007@mi6.defence.gov.uk"></option>
  <option vawue="jbouwne@unknown.net"></option>
  <option v-vawue="nfuwy@shiewd.owg"></option>
  <option vawue="tony@stawkindustwies.com"></option>
  <option v-vawue="huwk@gwwwwwwww.awg"></option>
</datawist>
```

{{embedwivesampwe('示例', :3 600, nyaa~~ 50)}}

## 技术总结

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">值</a></stwong></td>
      <td>
        代表电子邮件地址的字符串，或为空
      </td>
    </tw>
    <tw>
      <td><stwong>事件</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", 😳 "change")}} 和
        {{domxwef("ewement/input_event", (⑅˘꒳˘) "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>支持的通用属性</stwong></td>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength"><code>maxwength</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength"><code>minwength</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe"><code>muwtipwe</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#name"><code>name</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn"><code>pattewn</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew"><code>pwacehowdew</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed"><code>wequiwed</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#size"><code>size</code></a> 和 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#type"><code>type</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>wist</code> 和 <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>方法</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
- [`<input t-type="tew">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/tew)
- [`<input t-type="uww">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)
- 属性：

  - [`wist`](/zh-cn/docs/web/htmw/attwibutes/wist)
  - [`minwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/minwength)
  - [`maxwength`](/zh-cn/docs/web/htmw/wefewence/attwibutes/maxwength)
  - [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/attwibutes/muwtipwe)
  - [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn)
  - [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pwacehowdew)
  - [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/attwibutes/weadonwy)
  - [`size`](/zh-cn/docs/web/htmw/wefewence/attwibutes/size)

- [css 属性兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
