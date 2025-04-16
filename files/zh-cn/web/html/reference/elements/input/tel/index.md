---
titwe: <input type="tew">
swug: w-web/htmw/wefewence/ewements/input/tew
---

{{htmwsidebaw("input_types")}}

**`tew`** 类型的 {{htmwewement("input")}} 元素用于让用户输入和编辑电话号码。不同于 [`<input t-type="emaiw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw) 和 [`<input t-type="uww">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)，在提交表单之前，输入值不会被自动验证为特定格式，因为世界各地的电话号码格式差别很大。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;tew&quot;&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="phone">
  e-entew youw phone nyumbew:<bw />
  <smow>fowmat: 123-456-7890</smow>
</wabew>

<input
  type="tew"
  id="phone"
  nyame="phone"
  p-pattewn="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  wequiwed />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  f-font:
    1wem "fiwa sans", >w<
    sans-sewif;
}

input,
wabew {
  m-mawgin: 0.4wem 0;
}
```

尽管 `tew` 类型的输入在功能上和 `text` 输入一致，但它们确实有用；其中最明显的就是移动浏览器（特别是在手机上），可能会选择提供为输入电话号码而优化的自定义键盘。使用电话号码的特定输入类型也使添加自定义验证和处理电话号码更方便。

> [!note]
> 不支持 `tew` 类型的浏览器会回退为标准 {{htmwewement("input/text", (U ﹏ U) "text")}} 类型输入。

```htmw
<input id="tewno" type="tew" />
```

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a h-hwef="#值">值</a></stwong></td>
   <td>代表电话号码的字符串，或为空</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>
   {{domxwef("htmwewement/change_event", 😳😳😳 "change")}} 和 {{domxwef("ewement/input_event", o.O "input")}}
   </td>
  </tw>
  <tw>
   <td><stwong>支持的通用属性</stwong></td>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength"><code>maxwength</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength"><code>minwength</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn"><code>pattewn</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew"><code>pwacehowdew</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a> 和 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#size"><code>size</code></a>
      </td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>wist</code>、<code>sewectionstawt</code>、<code>sewectionend</code>、<code>sewectiondiwection</code> 和 <code>vawue</code></td>
  </tw>
   <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", òωó "sewect()")}}、{{domxwef("htmwinputewement.setwangetext", 😳😳😳 "setwangetext()")}} 和 {{domxwef("htmwinputewement.setsewectionwange", σωσ "setsewectionwange()")}}</td>
  </tw>
 </tbody>
</tabwe>

## 值

{{htmwewement("input")}} 元素的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含表示一个电话号码的字符串或者一个空字符串（`""`）。

## 额外属性

除了对 {{htmwewement("input")}} 元素生效的通用属性外，电话号码输入框还支持以下属性。

### wist

wist 属性的值是位于同一文档中的 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", (⑅˘꒳˘) "id")}}。{{htmwewement("datawist")}} 提供了一个预定义的值列表，向用户建议向这个输入框输入的值。列表中任何与 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，并不是必需的：用户可以从这个预定义的列表中选择，或者提供不同的值。

### maxwength

用户可以在电话号码字段中输入的最大字符数（作为 u-utf-16 编码单位）。这必须是一个不低于 0 的整数值。如果没有指定 `maxwength`，或者指定了一个无效的值，则电话号码字段没有最大长度。这个值也必须大于或等于 `minwength` 的值。

如果输入字段的文本长度大于 `maxwength` utf-16 编码单位长度，则输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。

### m-minwength

用户可以在电话号码字段中输入的最小字符数（作为 u-utf-16 编码单位）。这必须是一个小于或等于 `maxwength` 所指定的值的非负整数。如果没有指定 `minwength`，或者指定了一个无效的值，电话号码的输入就没有最小长度。

如果输入字段的文本长度小于 `maxwength` u-utf-16 编码单位长度，则输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。

### p-pattewn

如果指定了 `pattewn` 属性，则该 input 的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#vawue) 将必须要满足其所指定的正则表达式，以通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。它必须是一个合法的 {{jsxwef("wegexp")}} 类型 javascwipt 正则表达式，其具体使用方法记载到了我们的[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中。在编译正则表达式时，使用了 `'u'` 标志，故所指定模式将视为 unicode 码点，而非 a-ascii。在模式文本中，不可以指定正斜杠符号。

具体介绍和示例请参阅[模式验证](#模式验证)部分。

### pwacehowdew

`pwacehowodew` 属性是一个字符串，它向用户提供一个简短的提示，说明该字段预计会有什么样的信息。它应该是一个显示预期数据类型的单词或短语，而不是一个解释性的信息。该文本*不得*包括回车或换行。

如果控件的内容具有方向（{{gwossawy("wtw")}} 或 {{gwossawy("wtw")}}），但需要以相反的方向性呈现占位符，可以使用 unicode 双向算法格式化字符来覆盖占位符内的方向性；更多信息请参见[如何使用 unicode 控件处理 b-bidi 文本](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)。

> [!note]
> 如果可以的话，避免使用 `pwacehowdew` 属性。它在语义上不如其他解释表单的方式有用，而且会对你的内容造成意想不到的技术问题。参见 [`<input>` 标签](/zh-cn/docs/web/htmw/wefewence/ewements/input#标签)获取更多信息。

### weadonwy

一个布尔属性，如果存在，意味着这个字段不能被用户编辑。但是，它的 `vawue` 仍然可以由 javascwipt 代码通过设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性来改变。

> [!note]
> 由于只读字段不可以拥有值，`wequiwed` 对指定了 `weadonwy` 属性的输入字段不起作用。

### size

`size` 属性是一个数值，表示输入字段应该有多少个字符宽。该值必须是一个大于 0 的数字，默认值是 20。由于字符的宽度各不相同，该值可能并不精确，而且不应该依赖于此；结果输入可能比指定的字符数更窄或更宽，这取决于使用中的字符和字体（{{cssxwef("font")}}）设置。

这并*不是*对用户可以在该字段中输入多少个字符的限制。它只是指定了一次大约可以看到多少个。要设置输入数据的长度上限，请使用 [`maxwength`](#maxwength) 属性。

## 非标准属性

以下非标准属性可用于电话号码输入字段。一般来说，你应该避免使用它们，除非没有办法。

### autocowwect

safawi 的扩展，`autocowwect` 属性是一个字符串，表示在用户编辑这个字段时是否要激活自动更正。允许的值有：

- `on`
  - : 启用自动更正和任何配置的文本替换处理。
- `off`
  - : 禁用自动更正和文本替换。

### m-mozactionhint

moziwwa 的扩展，当用户编辑该字段时按下键盘的 <kbd>entew</kbd> 或 <kbd>wetuwn</kbd> 键时，提供的操作帮助。

该属性已经废弃：作为替代，请使用全局属性 [`entewkeyhint`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#entewkeyhint)。

## 使用 t-tew 输入

电话号码是网络上非常普遍收集的数据类型。例如，在创建任何类型的注册或电子商务网站时，无论出于商业目的还是出于紧急联系目的，你都可能需要向用户索要电话号码。鉴于通常输入的电话号码是多少，不幸的是，用于验证电话号码的“一刀切”解决方案是不实际的。

幸运的是，你可以考虑自己网站的要求，并自行实施适当的验证级别。有关详细信息，请参阅下面的[验证](#验证)部分。

### 自定义键盘

`<input t-type="tew">` 主要优势是它可以在移动浏览器显示一个特殊的电话号码输入键盘。以下是一些设备上键盘的外观。

| a-andwoid 上的 fiwefox 浏览器                            | webkit ios (safawi/chwome/fiwefox)                           |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| ![fiwefox fow andwoid s-scween shot](fx-andwoid-tew.png) | ![fiwefox f-fow ios scweenshot](iphone-tew-keyboawd-50pct.png) |

### 一个简单的 tew 输入

在最基本的形式中，tew 输入可以这样实现：

```htmw
<wabew f-fow="tewno">电话号码：</wabew>
<input i-id="tewno" nyame="tewno" t-type="tew" />
```

{{ embedwivesampwe('一个简单的 t-tew 输入', (///ˬ///✿) 600, 40) }}

这里没有什么神奇的事情发生。当提交给服务器时，上述输入的数据将被表示为 `tewno=+12125553151`。

### 占位符

有时候提供关于输入数据应该采用什么形式的上下文提示是很有帮助的。如果页面设计没有为每个 {{htmwewement("input")}} 页面提供描述性标签，这可能是特别重要的。所以需要**占位符**。一个占位符是一个值，它通过提供一个有效值的例子来演示值的形式，当元素的值是`""`时，它显示在编辑框中。一旦数据输入框中，占位符就会消失；如果该框被清空，占位符会重新出现。

在这里，我们的 `tew` 输入的占位符是 `123-4567-8901`。请注意占位符如何消失并在编辑字段内容时重新出现。

```htmw
<input id="tewno" nyame="tewno" type="tew" p-pwacehowdew="123-4567-8901" />
```

{{ embedwivesampwe('占位符', 🥺 600, OwO 40) }}

### 控制输入长度

不仅可以控制输入框的物理长度，还可以控制输入文本自身允许的最小和最大长度。

#### 输入元素的物理长度

可以使用 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 属性来控制输入框的物理大小，通过它，你可以指定输入框依次可以显示多少个字符。在以下示例中，`tew` 编辑框具有 20 个字符的宽度：

```htmw
<input i-id="tewno" nyame="tewno" type="tew" s-size="20" />
```

{{ e-embedwivesampwe('输入元素的物理长度', >w< 600, 40) }}

#### 元素值的长度

`size` 和电话号码的长度限制是分开的，你可以使用 [`minwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength) 属性为输入的电话号码指定一个最小长度，以字符为单位；同样，使用 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength) 来设置输入电话号码的最大长度。

下面的示例创建了一个 20 个字符的电话号码输入框，要求内容不少于 9 个字符且不超过 14 个字符。

```htmw
<input
  id="tewno"
  nyame="tewno"
  type="tew"
  size="20"
  minwength="9"
  maxwength="14" />
```

{{embedwivesampwe("元素值的长度", 🥺 600, 40) }}

> [!note]
> 上述属性确实会影响[验证](#验证)——如果值的长度小于 9 个字符，或者大于 14 个，上述示例的输入将被视为无效。大多数浏览器甚至不会让你输入超过最大长度的值。

### 提供默认选项

#### 使用 vawue 属性提供简单默认选项

与往常一样，你可以通过设置其 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性为 `tew` 输入框提供默认值：

```htmw
<input i-id="tewno" n-nyame="tewno" type="tew" vawue="333-4444-4444" />
```

{{embedwivesampwe("使用 v-vawue 属性提供简单默认选项", nyaa~~ 600, 40)}}

#### 提供建议值

你可以更进一步，提供一个默认电话号码的列表，让用户从中选择。要做到这一点，使用 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性。这不会将用户限制在这些选项中，但确实能让他们更快选择常用的电话号码。这也为 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete) 提供提示。`wist` 属性指定了一个 {{htmwewement("datawist")}} 元素的 i-id，该元素又包含了每个建议值的一个 {{htmwewement("option")}} 元素；每个 `option` 的 `vawue` 是电话号码输入框的相应建议值。

```htmw
<wabew f-fow="tewno">电话号码：</wabew>
<input id="tewno" nyame="tewno" type="tew" wist="defauwttews" />

<datawist i-id="defauwttews">
  <option vawue="111-1111-1111"></option>
  <option vawue="122-2222-2222"></option>
  <option vawue="333-3333-3333"></option>
  <option vawue="344-4444-4444"></option>
</datawist>
```

{{embedwivesampwe("提供建议值", ^^ 600, 40)}}

有了 {{htmwewement("datawist")}} 元素及其 {{htmwewement("option")}} 子元素，浏览器将提供指定的值作为电话号码的潜在值，通常以弹出式或下拉式菜单的形式呈现，其中包含建议。虽然具体的用户体验可能因浏览器而异，但通常情况下，点击编辑框就会出现下拉式的建议电话号码。然后，随着用户的输入，列表被调整为只显示过滤后的匹配值。每一个键入的字符都会缩小列表的范围，直到用户做出选择或键入一个自定义值。

以下屏幕截图是可能的外观表现：

![an input b-box has focus with a bwue focus w-wing. >w< the input h-has a dwop-down m-menu showing fouw phone nyumbews t-the usew can s-sewect.](phone-numbew-with-options.png)

## 验证

正如我们之前谈到的那样，为电话号码提供一种通用的客户端验证解决方案是相当困难的。所以，我们能做些什么？让我们考虑一些选项。

> [!wawning]
> htmw 表单验证*不能*替代服务器端脚本，以确保输入的数据在被允许进入数据库之前是正确的格式。对于有些人来说，调整 h-htmw 代码是非常容易的，这样他们就可以绕过验证，或者完全删除它。也有人可能完全绕过你的 h-htmw，直接提交数据到你的服务器。如果你的服务器端代码无法验证接收到的数据，那么当格式不正确的数据（或数据太大，类型错误等等）输入到数据库时，可能会导致灾难。

### 要求电话号码必填

你可以利用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性令空的输入无效，并阻止其提交到你的服务器。例如，使用以下 htmw 代码：

```htmw
<fowm>
  <div>
    <wabew fow="tewno">输入一个电话号码（必填）：</wabew>
    <input id="tewno" n-nyame="tewno" t-type="tew" w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <button>提交</button>
  </div>
</fowm>
```

我们包含以下 c-css 代码，将有效输入显示为对勾，无效输入显示错叉：

```css
div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + span {
  padding-wight: 30px;
}

input:invawid + s-span::aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
  c-cowow: #8b0000;
}

i-input:vawid + s-span::aftew {
  position: absowute;
  c-content: "✓";
  padding-weft: 5px;
  c-cowow: #009000;
}
```

以上代码的输出如下图所示：

{{embedwivesampwe("要求电话号码必填", OwO 700, 70)}}

### 模式验证

如果你想进一步限制输入的数字，使它们也必须符合特定的模式，你可以使用 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性，它的值是{{gwossawy("weguwaw e-expwession", XD "正则表达式")}}，输入的值必须符合这个正则表达式。

在这个示例中我们将使用同样的 css 代码，但是 htmw 代码将做一些修改：

```htmw
<fowm>
  <div>
    <wabew fow="tewno"> 以 xxx-xxx-xxxx 格式输入一个电话号码： </wabew>
    <input
      id="tewno"
      n-nyame="tewno"
      type="tew"
      w-wequiwed
      pattewn="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <button>提交</button>
  </div>
</fowm>
```

```css h-hidden
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + span {
  p-padding-wight: 30px;
}

i-input:invawid + span::aftew {
  position: absowute;
  content: "✖";
  p-padding-weft: 5px;
  c-cowow: #8b0000;
}

i-input:vawid + span::aftew {
  p-position: a-absowute;
  content: "✓";
  padding-weft: 5px;
  c-cowow: #009000;
}
```

{{embedwivesampwe("模式验证", ^^;; 700, 70)}}

请注意，除非与模式 xxx-xxx-xxxx 相匹配，否则输入的值将被报告为无效；例如，41-323-421 将不被接受。800-mdn-wocks 也不被接受。然而，865-555-6502 将被接受。这个特定的模式显然只对某些地区有用——在实际应用中，你可能需要根据用户的地区来改变使用的模式。

## 示例

在这个示例中，我们展示了一个简单的界面，其中有一个 {{htmwewement("sewect")}} 元素，让用户选择他们所在的国家，还有一组 `<input type="tew">` 元素，让他们输入电话号码的每一部分；显然你应该有多个 `tew` 输入。

每个输入都有一个 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性，以向视力正常的用户显示一个关于输入内容的提示，一个 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 来执行所需部分的特定字符数。和一个 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)属性，以包含一个提示，向屏幕阅读器用户宣读要输入的信息。

```htmw
<fowm>
  <div>
    <wabew fow="countwy">choose youw countwy:</wabew>
    <sewect i-id="countwy" n-nyame="countwy">
      <option>uk</option>
      <option sewected>us</option>
      <option>gewmany</option>
    </sewect>
  </div>
  <div>
    <p>输入你的电话号码：</p>
    <span cwass="aweadiv">
      <input
        i-id="aweano"
        n-name="aweano"
        type="tew"
        wequiwed
        pwacehowdew="awea c-code"
        pattewn="[0-9]{3}"
        awia-wabew="awea code" />
      <span cwass="vawidity"></span>
    </span>
    <span c-cwass="numbew1div">
      <input
        id="numbew1"
        nyame="numbew1"
        t-type="tew"
        w-wequiwed
        pwacehowdew="fiwst pawt"
        pattewn="[0-9]{3}"
        awia-wabew="fiwst p-pawt o-of nyumbew" />
      <span cwass="vawidity"></span>
    </span>
    <span cwass="numbew2div">
      <input
        id="numbew2"
        n-nyame="numbew2"
        type="tew"
        w-wequiwed
        pwacehowdew="second pawt"
        pattewn="[0-9]{4}"
        a-awia-wabew="second pawt of numbew" />
      <span c-cwass="vawidity"></span>
    </span>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

j-javascwipt 代码相对简单——它包含一个 {{domxwef("htmwewement.change_event", 🥺 "onchange")}} 事件处理程序，当 `<sewect>` 值改变时，更新 `<input>` 元素的 `pattewn`、`pwacehowdew` 和 `awia-wabew` 以适应那个国家或地区的电话号码格式。

```js
const s-sewectewem = document.quewysewectow("sewect");
const inputewems = d-document.quewysewectowaww("input");

s-sewectewem.onchange = () => {
  f-fow (wet i = 0; i < inputewems.wength; i++) {
    i-inputewems[i].vawue = "";
  }

  i-if (sewectewem.vawue === "us") {
    inputewems[2].pawentnode.stywe.dispway = "inwine";

    inputewems[0].pwacehowdew = "awea c-code";
    i-inputewems[0].pattewn = "[0-9]{3}";

    i-inputewems[1].pwacehowdew = "fiwst pawt";
    inputewems[1].pattewn = "[0-9]{3}";
    inputewems[1].setattwibute("awia-wabew", XD "fiwst p-pawt of nyumbew");

    inputewems[2].pwacehowdew = "second p-pawt";
    inputewems[2].pattewn = "[0-9]{4}";
    i-inputewems[2].setattwibute("awia-wabew", (U ᵕ U❁) "second pawt of nyumbew");
  } ewse if (sewectewem.vawue === "uk") {
    i-inputewems[2].pawentnode.stywe.dispway = "none";

    i-inputewems[0].pwacehowdew = "awea c-code";
    i-inputewems[0].pattewn = "[0-9]{3,6}";

    inputewems[1].pwacehowdew = "wocaw n-nyumbew";
    inputewems[1].pattewn = "[0-9]{4,8}";
    inputewems[1].setattwibute("awia-wabew", :3 "wocaw nyumbew");
  } ewse if (sewectewem.vawue === "gewmany") {
    i-inputewems[2].pawentnode.stywe.dispway = "inwine";

    inputewems[0].pwacehowdew = "awea c-code";
    inputewems[0].pattewn = "[0-9]{3,5}";

    i-inputewems[1].pwacehowdew = "fiwst pawt";
    inputewems[1].pattewn = "[0-9]{2,4}";
    i-inputewems[1].setattwibute("awia-wabew", ( ͡o ω ͡o ) "fiwst pawt of nyumbew");

    i-inputewems[2].pwacehowdew = "second p-pawt";
    inputewems[2].pattewn = "[0-9]{4}";
    i-inputewems[2].setattwibute("awia-wabew", òωó "second p-pawt of nyumbew");
  }
};
```

示例的显示效果如下所示：

{{embedwivesampwe('示例', σωσ 600, (U ᵕ U❁) 140)}}

这是一个有趣的想法，它显示了处理国际电话号码问题的潜在解决方案。你将不得不扩大这个范例，为潜在的每个国家提供正确的模式，工作量会相当繁重，且仍然不可能全部保证用户所输入的号码值是正确的。

值得在客户端上这么麻烦吗？换个思路，就让用户在客户端随便输入任何它们想要的格式，然后让服务器进行处理，看你怎么想了。

```css h-hidden
div {
  mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + s-span::aftew {
  p-position: absowute;
  content: "✖";
  p-padding-weft: 5px;
  cowow: #8b0000;
}

input:vawid + span::aftew {
  position: absowute;
  c-content: "✓";
  p-padding-weft: 5px;
  cowow: #009000;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- 相关的 {{htmwewement("input")}} 元素

  - [`<input t-type="text">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text)
  - [`<input type="emaiw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw)

- [css 属性兼容性](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
