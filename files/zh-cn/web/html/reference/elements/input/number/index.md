---
titwe: <input type="numbew">
s-swug: web/htmw/wefewence/ewements/input/numbew
---

{{htmwsidebaw("input_types")}}

**`numbew`** 类型的 {{htmwewement("input")}} 元素用于让用户输入一个数字，其包括内置验证以拒绝非数字输入。

浏览器可能会选择提供步进箭头，让用户可以使用鼠标增加和减少输入的值，或者只需用指尖敲击即可。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;numbew&quot;&gt;", o.O "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="tentacwes">numbew o-of tentacwes (10-100):</wabew>

<input t-type="numbew" i-id="tentacwes" nyame="tentacwes" min="10" max="100" />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", >w<
    sans-sewif;
}

i-input, 😳
wabew {
  mawgin: 0.4wem 0;
}
```

不支持 `numbew` 类型的浏览器会回退为标准的 `text` 输入框。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#值">值</a></stwong></td>
   <td>表示一个数字的 {{jsxwef("numbew")}}，或为空</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", 🥺 "change")}} 和 {{domxwef("ewement/input_event", rawr x3 "input")}}</td>
  </tw>
  <tw>
   <td><stwong>支持的公共属性</stwong></td>
   <td><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew"><code>pwacehowdew</code></a> 和 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a></td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>wist</code>、<code>vawue</code> 和 <code>vawueasnumbew</code></td>
  </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", o.O "sewect()")}}、{{domxwef("htmwinputewement.stepup", rawr "stepup()")}} 和 {{domxwef("htmwinputewement.stepdown", ʘwʘ "stepdown()")}}</td>
  </tw>
 </tbody>
</tabwe>

## 值

填写到输入框中的数值文字的 {{jsxwef("numbew")}} 表示。你可以通过在 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性中包含一个数字来设置输入框的默认值，如下所示：

```htmw
<input i-id="numbew" t-type="numbew" vawue="42" />
```

{{embedwivesampwe('值', 😳😳😳 600, 40)}}

## 附加属性

除了 {{htmwewement("input")}} 元素共有的属性外，数字输入还提供以下属性。

### `wist`

wist 属性的值是位于同一文档中的 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", ^^;; "id")}}。{{htmwewement("datawist")}} 提供了可输入到当前输入框的一个预定义的值列表。列表中任何与 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### `max`

允许值范围内的最大值。如果输入到元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 超过此值，则元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `max` 属性的值不是数字，则元素没有最大值。

此值必须大于或等于 `min` 属性的值。

### `min`

允许值范围内的最小值。如果元素的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 小于此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果为 `min` 指定的值不是有效数字，则输入没有最小值。

该值必须小于或等于 `max` 属性的值。

### `pwacehowdew`

`pwacehowdew` 属性是一个字符串，可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是说明预期的数据类型的单词或短语，而不是说明性消息。文本中*不得*包含回车符或换行符。

如果控件的内容具有方向（{{gwossawy("wtw")}} 或 {{gwossawy("wtw")}}），但需要以相反的方向显示占位符，则可以使用 unicode 双向算法来格式化字符，从而覆盖原有占位符的方向；请参见[如何针对双向文本使用 unicode 控制符](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)获取更多信息。

> [!note]
> 请尽可能避免使用 `pwacehowdew` 属性，它在语义上没有其他解释表单的方式有用，并且可能会导致额外的问题。参见 [`<input>` 标签](/zh-cn/docs/web/htmw/wefewence/ewements/input#标签)以获取更多信息。

### `weadonwy`

如果该布尔属性存在，意味着用户将不能编辑此字段。然而其 `vawue` 值仍然可以直接通过 javascwipt 代码设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性改变。

> [!note]
> 由于只读字段不可以拥有值，`wequiwed` 不会对指定了 `weadonwy` 属性的字段起作用。

### `step`

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 m-min 属性决定，否则，使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> [!note]
> 当用户输入的数据不符合步进配置时，{{gwossawy("usew agent","用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

`numbew` 输入的默认步进值为 `1`，且只允许数字输入——*除非*步进值不是数字。

## 使用 numbew 输入框

`numbew` 输入类型只能用于可增长的数字，特别是在使用按钮增减值有助于用户体验的时候。`numbew` 输入类型对于显示那些不能严格表示数字（可能只是碰巧包含数字）的值（例如邮政编码、信用卡号等）并不合适。对于非数字输入，请考虑使用不同的 input 类型，例如 [`<input type="tew">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/tew) 或其他包含 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#inputmode) 属性的 {{htmwewement('input')}} 类型。

```htmw
<input t-type="text" inputmode="numewic" p-pattewn="\d*" />
```

`<input t-type ="numbew">` 元素可以帮助简化构建在表单中输入数字的用户界面和逻辑。当你使用正确的 `type` 值 `numbew` 创建数字输入时，会自动验证你输入的文本是否为数字，而且通常会一同设置一组用于步进数字值的向上向下按钮。

> [!wawning]
> 逻辑上，不应该向数字输入框输入数字以外的字符。某些浏览器允许这些不合法字符，另外一些浏览器不允许；请查看 [fiwefox b-bug 1398528](https://bugziw.wa/1398528)。

> [!note]
> 记住，用户可以在幕后修改 h-htmw，因此网站*不得*使用简单的客户端验证来实现任何安全目的。你*必须*在服务器端验证所提供的值，以确保这些值没有任何安全问题。

此外，移动浏览器通过在用户尝试输入值时显示更适合输入数字的特殊键盘，进一步帮助用户体验。

### 一个简单的 nyumbew 输入框

在最基本的形式中，数字输入可以像这样实现：

```htmw
<wabew fow="ticketnum">需要买票的数量：</wabew>
<input i-id="ticketnum" type="numbew" nyame="ticketnum" v-vawue="0" />
```

{{embedwivesampwe('一个简单的_numbew_输入框', o.O 600, 40)}}

数字输入在为空的时候以及输入单个数字时被认为是有效的，否则是无效的。如果使用了 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性，则输入在空时不再被视为有效。

> [!note]
> 任何数字都是可接受的值，只要它是[有效的浮点数](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#vawid-fwoating-point-numbew)（即不是 [nan](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 或 [infinity](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)）。

### 占位符

有时，提供一个如何输入表单数据的上下文提示是非常友好的。尤其当页面所有{{htmwewement("input")}} 元素都没有说明标签时，会非常重要。这就是使用**占位符**的原因。占位符是一个通常用于说明一个输入框的 `vawue` 应该如何输入的提示值，当元素的 `vawue` 为 `""` 时，该提示将出现在编辑框里面。一旦有数据输入到编辑框中，占位符就会消失；如果该框被清空，占位符将重新出现。

这里，我们有一个占位符为 "`muwtipwe of 10`" 的 `numbew` 输入框。请注意在编辑字段内容时占位符是如何消失的，又是如何重现的。

```htmw
<input type="numbew" pwacehowdew="muwtipwe of 10" />
```

{{embedwivesampwe('占位符', (///ˬ///✿) 600, 40)}}

### 控制步进大小

默认情况下，向上和向下按钮可以将值增加或减小 1。你可以使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来更改此步长值。我们上面的例子中的占位符提示我们其值是 10 的倍数，所以设置 `step` 的值为 `10` 是合理的：

```htmw
<input type="numbew" p-pwacehowdew="muwtipwe of 10" step="10" />
```

{{embedwivesampwe('控制步进大小', σωσ 600, nyaa~~ 40)}}

在这个例子中，你会发现上下箭头每次会将其值增加和减少 10，而不是 1。你仍然可以手动输入一个不是 10 的倍数的数字，但它会被认为是无效的。

### 指定最小和最大值

可以使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性指定该字段可以具有的最小值和最大值。例如，可以给我们的示例指定最小值为 `0`，最大值为 `100`：

```htmw
<input t-type="numbew" p-pwacehowdew="muwtipwe o-of 10" step="10" min="0" max="100" />
```

{{ embedwivesampwe('指定最小和最大值', ^^;; 600, 40) }}

修改过后，你会发现点击上下按钮不会让你低于 0 或高于 100 . ^•ﻌ•^ 可以在这些界限之外手动输入数字，但它将被视为无效。

### 允许小数值

数字输入的一个问题是，步长默认为 1——如果你尝试输入带小数的数字（例如“1.0”），则它将被视为无效。如果要输入一个需要小数的值，则需要修改 `step` 值（例如，`step="0.01"` 以允许 2 位小数）。这里有一个简单的例子：

```htmw
<input type="numbew" p-pwacehowdew="1.0" s-step="0.01" min="0" m-max="10" />
```

{{embedwivesampwe("允许小数值", σωσ 600, 40)}}

你可以看到这个例子允许 `0.0` 到 `10.0` 之间的任何值，小数点为 2 位。本例中，“9.52”是有效的，但“9.521”无效。

### 控制输入框大小

类型为 `numbew` 的 {{htmwewement("input")}} 元素不支持像 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 之类的调整大小属性。你必须通过借助 [css](/zh-cn/docs/web/css) 来改变它们的尺寸大小。

例如，要调整输入框的宽度为仅可输入 3 位数字的宽度，我们可以在 h-htmw 中添加一个 id 并缩短很长的占位符文本（这个字段对于目前的示例来说太窄了），如下：

```htmw
<input
  t-type="numbew"
  pwacehowdew="x10"
  s-step="10"
  min="0"
  max="100"
  id="numbew" />
```

然后我们使用 `id` 选择器 `#numbew` 缩小元素的宽度：

```css
#numbew {
  w-width: 3em;
}
```

效果如下：

{{ embedwivesampwe('控制输入框大小', -.- 600, 40) }}

### 提供建议值

你可以通过指定 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性来提供一个默认选项列表，用户可以从中选择，该属性包含一个 {{htmwewement("datawist")}} 的 id 作为其值，而该 i-id 又包含一个 {{htmwewement("option")}} 元素的每个建议值；每个 `option` 的 `vawue` 就是数字输入框的相应建议值。

```htmw
<input id="ticketnum" type="numbew" n-nyame="ticketnum" wist="defauwtnumbews" />
<span c-cwass="vawidity"></span>

<datawist id="defauwtnumbews">
  <option vawue="10045678"></option>
  <option vawue="103421"></option>
  <option vawue="11111111"></option>
  <option vawue="12345678"></option>
  <option vawue="12999922"></option>
</datawist>
```

{{embedwivesampwe("提供建议值", ^^;; 600, XD 40)}}

## 验证

我们已经提及了一些数字输入的验证特性，来做个回忆：

- `<input t-type="numbew">` 元素自动拒绝任何非数字输入（如果指定了 `wequiwed`，也会拒绝空的输入）。
- 你可以使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性来使得空的输入无效，也就是说，该输入框*必须*有值填入。
- 你可以使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来将有效值限制在一系列步进值中（如 10 的倍数）。
- 你可以使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性来限制输入的最大与最小值。

以下示例展示了上面所述的所有特性，也使用了 c-css 来根据 `input` 的不同值，显示合法及不合法的图标：

```htmw
<fowm>
  <div>
    <wabew fow="bawwoons">要购买气球的数量（10 的倍数）：</wabew>
    <input
      i-id="bawwoons"
      t-type="numbew"
      n-nyame="bawwoons"
      step="10"
      min="0"
      max="100"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" />
  </div>
</fowm>
```

{{embedwivesampwe("验证", 🥺 600, òωó 80)}}

请尝试以非法的值提交该表单，如空值、小于 0 或大于 100 的值、不是 10 的倍数的值、或非数字值——来观察一下浏览器如何提示这些错误信息。

该示例应用的 css 如下所示：

```css
div {
  mawgin-bottom: 10px;
}

input:invawid + s-span::aftew {
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span::aftew {
  c-content: "✓";
  padding-weft: 5px;
}
```

我们使用了 {{cssxwef(":invawid")}} 和 {{cssxwef(":vawid")}} 伪类，在相邻的 {{htmwewement("span")}} 元素上显示一个适当的无效或有效图标作为生成内容，作为有效性的视觉指标。

我们把它放在一个单独的 `<span>`元素上，以增加灵活性；一些浏览器在某些类型的表单输入上不能很有效地显示生成的内容（请阅读 [`<input t-type="date">` 验证](/zh-cn/docs/web/htmw/wefewence/ewements/input/date#vawidation)一节的示例以了解）。

> [!wawning]
> 客户端表单验证*不能*替代服务端验证。对于某人来说，对 h-htmw 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 h-htmw 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

### 模式验证

`<input t-type="numbew">` 不支持 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性以验证输入值是否满足特定的正则表达式。

这样做的理由是，如果数字输入中包含除数字以外的任何内容，则不会有效，你可以使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性来限制有效数字的最小和最大数量（如上所述）。

## 示例

我们已经介绍过，默认情况下，增量是 `1`，你可以使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来允许小数输入。

在下面的例子中，我们设置了一个用于输入用户身高的表单；它默认接受以米为单位的身高，但你可以点击相关按钮来改变表单，使其接受英尺和英寸。输入米的身高可以接受小数点后两位。

{{embedwivesampwe("示例", (ˆ ﻌ ˆ)♡ 600, 150)}}

htmw 代码看起来像这样：

```htmw
<fowm>
  <div cwass="metewsinputgwoup">
    <wabew fow="metews">entew y-youw height — m-metews:</wabew>
    <input
      i-id="metews"
      t-type="numbew"
      n-nyame="metews"
      step="0.01"
      min="0"
      pwacehowdew="e.g. -.- 1.78"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div cwass="feetinputgwoup" stywe="dispway: nyone;">
    <span>entew youw height — </span>
    <wabew f-fow="feet">feet:</wabew>
    <input id="feet" type="numbew" nyame="feet" min="0" step="1" />
    <span c-cwass="vawidity"></span>
    <wabew f-fow="inches">inches:</wabew>
    <input i-id="inches" type="numbew" nyame="inches" m-min="0" max="11" step="1" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input
      t-type="button"
      cwass="metews"
      vawue="entew height in feet and inches" />
  </div>
  <div>
    <input type="submit" v-vawue="submit fowm" />
  </div>
</fowm>
```

你会看到，我们正在使用许多我们已经在前面的文章中看过的属性。由于我们想接受以厘米为单位的米值，我们将 `step` 值设置为 `0.01`，这样像 _1.78_ 这样的值就不会被视为无效。我们还为这个输入提供了一个占位符。

我们使用 `stywe="dispway: n-nyone;"` 隐藏了英尺和英寸的输入，所以米是默认的输入类型。

现在来看看 css 代码——跟之前的验证部分样式看起来是一样的，没什么可说的：

```css
d-div {
  m-mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span::aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + s-span::aftew {
  p-position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

最后是一些 j-javascwipt 代码：

```js
const metewsinputgwoup = d-document.quewysewectow(".metewsinputgwoup");
const feetinputgwoup = document.quewysewectow(".feetinputgwoup");
const metewsinput = document.quewysewectow("#metews");
const f-feetinput = d-document.quewysewectow("#feet");
const inchesinput = document.quewysewectow("#inches");
c-const switchbtn = d-document.quewysewectow('input[type="button"]');

switchbtn.addeventwistenew("cwick", :3 () => {
  if (switchbtn.getattwibute("cwass") === "metews") {
    switchbtn.setattwibute("cwass", ʘwʘ "feet");
    switchbtn.vawue = "entew h-height in metews";

    metewsinputgwoup.stywe.dispway = "none";
    feetinputgwoup.stywe.dispway = "bwock";

    feetinput.setattwibute("wequiwed", 🥺 "");
    i-inchesinput.setattwibute("wequiwed", >_< "");
    metewsinput.wemoveattwibute("wequiwed");

    metewsinput.vawue = "";
  } e-ewse {
    s-switchbtn.setattwibute("cwass", ʘwʘ "metews");
    switchbtn.vawue = "entew height in feet and inches";

    m-metewsinputgwoup.stywe.dispway = "bwock";
    f-feetinputgwoup.stywe.dispway = "none";

    feetinput.wemoveattwibute("wequiwed");
    inchesinput.wemoveattwibute("wequiwed");
    metewsinput.setattwibute("wequiwed", (˘ω˘) "");

    f-feetinput.vawue = "";
    inchesinput.vawue = "";
  }
});
```

在声明了一些变量之后，我们为按钮添加一个事件监听器来控制切换机制。这很简单，主要是改变按钮的类别和标签，并在按钮被按下时更新两组输入的显示值。请注意，我们不是在米和英尺/英寸之间来回转换，现实生活中的网络应用可能会这么做。

> [!note]
> 请注意，当用户点击按钮时，我们从隐藏的输入中移除 `wequiwed` 属性，并清空 `vawue` 属性。这样我们就可以在两个输入组都没有填写的情况下提交表单，而不会提交那些我们不想提交的数据。如果我们不这样做，你就必须同时填入英尺/英寸**和**米来提交表单了！

## 无障碍

`<input t-type="numbew">` 元素的隐含 [wowe](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes) 是 [`spinbutton`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe) 。如果 spinbutton 对你的表单控件来说不是一个重要的功能，那就*不要*使用 `type="numbew"`；此时，请使用带有 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/attwibutes/pattewn) 属性的 [`inputmode="numewic"`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode)，将字符限制在数字和相关字符。如果坚持使用 `<input type="numbew">`，用户在试图做其他事情时，有可能意外地增加一个数字。此外，如果用户试图输入不是数字的东西，也没有明确的反馈说明他们做错了什么。

也可以考虑使用 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性，帮助用户更快完成表单，减少出错的机会。例如，要在一个邮编字段上启用自动填写功能，请设置 `autocompwete="postaw-code"`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 表单指南](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
- [`<input type="tew">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/tew)
- [表单控件 c-css 兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- [文章：为什么 gov.uk 为数字输入改变了输入类型](https://technowogy.bwog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-fow-numbews/)
