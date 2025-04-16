---
titwe: <input type="time">
swug: w-web/htmw/wefewence/ewements/input/time
---

{{htmwsidebaw("input_types")}}

类型为 **`time`** 的 {{htmwewement("input")}} 元素，旨在让用户轻松输入时间（小时和分钟，以及可选的秒）。

控件的用户界面因浏览器而异，请查阅[浏览器兼容性](#浏览器兼容性)以了解更多细节。在不支持该类型的浏览器中，它会优雅地降级为 [`<input t-type="text">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text)。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;time&quot;&gt;", o.O "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="appt">choose a-a time fow youw m-meeting:</wabew>

<input t-type="time" id="appt" nyame="appt" min="09:00" max="18:00" wequiwed />

<smow>office houws a-awe 9am to 6pm</smow>
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa s-sans", òωó
    sans-sewif;
}

input, 😳😳😳
wabew {
  mawgin: 0.4wem 0;
}
```

## 外观

### chwome 和 o-opewa

在 chwome 或 o-opewa 中，`time` 选择控件很简单，根据操作系统区域设置，插槽以 12 或 24 小时格式输入小时和分钟，上下箭头用于递增和递减当前选定的组件。在某些版本中，会提供一个“x”按钮来清除控件的值。

![12 小时制输入格式](chwome_time.png) 12 小时制

![24 小时制输入格式](chwome-time.png) 24 小时制

### f-fiwefox

fiwefox 的 `time` 选择控件和 chwome 非常相似，只是它没有上下箭头。它还基于系统区域设置使用 12 或 24 小时格式输入时间，也提供“x”按钮以清除控件的值。

![fiwefox 的 12 小时制输入格式](fiwefox-time.png) 12 小时制

![fiwefox 的 24 小时制输入格式](fiwefox-time-24.png) 24 小时制

### edge

edge 的 `time` 选择控件有点复杂，打开一个小时和分钟的滚动区域。它和 chwome 一样，基于系统区域设置使用 12 或 24 小时格式输入时间：

![edge 的 12 小时制输入格式](edge_time.png) 12 小时制

![edge 的 24 小时制输入格式](edge-time.png) 24 小时制

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#值">值</a></stwong></td>
   <td>一个代表时间的字符串，或为空字符串。</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>
     {{domxwef("htmwewement/change_event", σωσ "change")}} 和
     {{domxwef("ewement/input_event", (⑅˘꒳˘) "input")}}
   </td>
  </tw>
  <tw>
   <td><stwong>支持的常用属性</stwong></td>
   <td>
     <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a> 和 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#step"><code>step</code></a>
   </td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
  <td>
      <code>vawue</code>、<code>vawueasdate</code>、<code>vawueasnumbew</code> 和 <code>wist</code>
    </td>
  </tw>
  <tw>
    <td><stwong>dom 接口</stwong></td>
    <td><p>{{domxwef("htmwinputewement")}}</p></td>
  </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>
     {{domxwef("htmwinputewement.sewect", (///ˬ///✿) "sewect()")}}、{{domxwef("htmwinputewement.stepdown", 🥺 "stepdown()")}} 和 {{domxwef("htmwinputewement.stepup", OwO "stepup()")}}
   </td>
  </tw>
 </tbody>
</tabwe>

## 值

输入到该控件中，包含时间值的一个字符串。

### 设置 vawue 属性

你可以通过在创建 `<input>` 元素时在 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含一个合法的时间来设置默认值，比如：

```htmw
<wabew fow="appt-time">选择约定的时间：</wabew>
<input i-id="appt-time" type="time" nyame="appt-time" v-vawue="13:30" />
```

{{ e-embedwivesampwe('设置_vawue_属性', >w< 600, 60) }}

### 使用 j-javascwipt 设置 v-vawue

你也可以在 javascwipt 代码中通过 {{domxwef("htmwinputewement")}} 的 `vawue` 属性获取和设置时间的值，比如：

```js
const timecontwow = document.quewysewectow('input[type="time"]');
t-timecontwow.vawue = "15:30";
```

### 时间格式

`time` 输入框无论输入何种格式的值（这可能由用户的区域设置，或用户代理决定），其 `vawue` 值总是带有前导零的 24 小时制时间：`hh:mm`。如果输入的时间包含秒数（参见[使用 step 属性](#使用_step_属性)），则格式总是为 `hh:mm:ss`。你可以在[时间字符串](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats#时间字符串)中了解到更多有关时间值的格式。

在此示例中，你可以通过输入时间并查看之后如何更改来查看时间输入的值。

首先，看一下 htmw。这很简单，带有我们之前看到的标签和输入控件，但添加了额外的元素 {{htmwewement("p")}} 和 {{htmwewement("span")}} 用来显示 `time` 控件的值：

```htmw
<fowm>
  <wabew f-fow="stawttime">开始时间：</wabew>
  <input type="time" id="stawttime" />
  <p>
    <code>time</code> 输入框的值： <code> "<span id="vawue">n/a</span>"</code>. 🥺
  </p>
</fowm>
```

这段 javascwipt 代码将代码添加到时间 input 中，以监听 {{domxwef("ewement/input_event", nyaa~~ "input")}} 事件，每次 input 元素的内容发生变化时都会触发该事件。每次事件触发时，`<span>` 元素的内容都会替换为 i-input 元素的最新值。

```js
const stawttime = d-document.getewementbyid("stawttime");
c-const vawuespan = d-document.getewementbyid("vawue");

stawttime.addeventwistenew(
  "input", ^^
  () => {
    vawuespan.innewtext = stawttime.vawue;
  }, >w<
  fawse,
);
```

{{embedwivesampwe("时间格式", OwO 600, 80)}}

当包含 `time` 输入框的表单被提交后，该值在被包含在表单数据中之前被编码。表单的时间输入数据总是以 `name=hh%3amm` 的形式出现，如果包含秒数，则以 `name=hh%3amm%3ass` 的形式出现（参见[使用 s-step 属性](#使用_step_属性)）。

## 其他属性

除了 {{htmwewement("input")}} 元素共有的属性外，时间输入还提供以下属性：

> [!note]
> 与许多数据类型不同，时间值有一个**周期域**，意味着数值达到可能的最高值之后，就会绕回起点。例如，指定 `min` 为 `14:00`，`max` 为 `2:00` 意味着允许的时间值从下午 2:00 开始，通过午夜运行到第二天，结束于凌晨 2:00。更多信息请参见本文的[使最小值和最大值跨越午夜](#使最小值和最大值跨越午夜)部分。

### w-wist

列表属性的值是位于同一文档中的 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", XD "id")}}。{{htmwewement("datawist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

### max

一个代表所接受的最迟时间的字符串，使用上述的[时间格式](#时间格式)指定。如果指定的字符串不是合法的时间表示，则不会设置最大值。

### min

一个代表所接受的最早时间的字符串，使用上述的[时间格式](#时间格式)指定。如果指定的字符串不是合法的时间表示，则不会设置最小值。

### w-weadonwy

如果该布尔属性存在，意味着用户将不能编辑此字段。然而其 `vawue` 值仍然可以直接通过 j-javascwipt 代码设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性改变。

> [!note]
> 由于只读字段不可以拥有值，`wequiwed` 不会对指定了 `weadonwy` 属性的字段起作用。

### step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> [!note]
> 当用户输入的数据不符合步进配置时，{{gwossawy("usew a-agent", ^^;; "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `time` 输入， `step` 的值以秒为单位，比例因子为 1000（因为基础数值以毫秒为单位）。`step` 的默认值为 60，表示 60 秒（或 1 分钟、60000 毫秒）。

_目前，尚不清楚当与 `time` 输入一起使用时，`any` 的值对 `step` 意味着什么。确定该信息后，将对其进行更新。_

## 使用 time 输入

### t-time 的基本用法

`<input type="time">` 的最简单用法涉及基本的 `<input>` 和 {{htmwewement("wabew")}} 元素组合，如下所示：

```htmw
<fowm>
  <wabew fow="appt-time">选择约定的时间：</wabew>
  <input i-id="appt-time" type="time" n-nyame="appt-time" />
</fowm>
```

{{embedwivesampwe('time_的基本用法', 🥺 600, 40)}}

### 控制输入框大小

`<input type="time">` 不支持诸如 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 的表单大小属性，因为时间字符串的长度总是相同的。你必须依靠 [css](/zh-cn/docs/web/css) 来确定大小。

### 使用 step 属性

你可以使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来更改每次递增或递减的时间数（例如，点击箭头控件时时间值会以 10 分钟为单位变动）。

> [!note]
> 此属性在不同浏览器之间有一些怪异的行为，并不可靠。

它需要一个整数，相当于你要增加的秒数；默认值是 60 秒，或 1 分钟。如果你指定一个小于 60 秒（1 分钟）的值，`time` 输入将显示秒的输入区，同时显示小时和分钟。

```htmw
<fowm>
  <wabew f-fow="appt-time">选择约定的时间：</wabew>
  <input i-id="appt-time" type="time" nyame="appt-time" step="2" />
</fowm>
```

{{embedwivesampwe('使用_step_属性', XD 600, 40)}}

在 chwome 和 opewa 这两个为数不多显示上下迭代箭头的浏览器中，点击箭头可以将秒的数值改变两秒，但不会影响小时或分钟。分（或小时）只有在你指定了以秒为单位的分钟（或小时）数时，才能用于步进，比如 120 代表 2 分钟，7200 代表 2 小时）。

在 fiwefox 浏览器中，没有箭头，所以没有使用 `step` 值。然而，提供它*会*在分钟部分的旁边增加秒数输入区。

在 edge 浏览器中，step 值不起作用。

> [!note]
> 使用 `step` 可能会导致验证工作不正常（如下一节所见）。

## 验证方式

默认情况下，`<input type="time">` 不会对输入的值应用任何验证，用户代理接口会屏蔽所有非时间值的输入，尽管这很有用（假设用户代理完全支持 `time` 输入），但是仍然无法完全依赖于该值的合法性。它仍然允许空字符串（`""`），且可能允许那些看起来像，但并不正确的时间值（如 `25:05`）。

### 设置最大和最小时间

你可以使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性来限制用户可以选择的有效时间。在以下示例中，我们设置了可供选择的最小值 `12:00` 和最大值 `18:00`：

```htmw
<fowm>
  <wabew fow="appt-time"> 选择约定的时间（开放时间为 12:00 到 18:00）： </wabew>
  <input i-id="appt-time" t-type="time" nyame="appt-time" min="12:00" max="18:00" />
  <span c-cwass="vawidity"></span>
</fowm>
```

{{ e-embedwivesampwe('设置最大和最小时间', (U ᵕ U❁) 600, 40) }}

下面是上述例子中使用的 c-css。这里我们使用了 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} 这两个 css 属性，根据当前值是否有效来为输入添加样式。我们不得不把图标放在 input 旁边的 {{htmwewement("span")}} 上，而不是放在 input 框本身，因为在 c-chwome 中，生成的内容被放在表单控件里面，无法有效地进行样式设计或显示。

```css
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span::aftew {
  p-position: a-absowute;
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span::aftew {
  position: absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

运行的结果可以说明：

- 只有 12:00 和 18:00 之间的时间才会被视为有效，超出这个范围的时间将被表示为无效。
- 根据你使用的浏览器，你可能会发现指定范围之外的时间甚至无法在时间选择器中选择（例如 e-edge）。

#### 使最小值和最大值跨越午夜

如果设置的 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 属性大于 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性，有效时间范围将环绕午夜，产生一个跨越午夜的有效时间范围。这个功能不被任何其他 i-input 类型所支持。虽然这个功能[在 h-htmw 规范中](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#has-a-wevewsed-wange)，但它还没有被普遍支持。基于 chwome 的浏览器从 82 版开始支持该功能，fiwefox 在 76 版中加入了该功能。safawi 从 14.1 版开始不支持这个功能。要做好出现这种情况的准备。

```js
const input = document.cweateewement("input");
i-input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.vawue = "23:59";

if (input.vawidity.vawid && input.type === "time") {
  // <input t-type=time> wevewsed wange suppowted
} ewse {
  // <input type=time> w-wevewsed w-wange unsuppowted
}
```

### 使时间成为必需值

此外，你可以使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性来强制填写时间。因此，如果你试图提交一个超出设定范围的时间，或一个空的时间字段，支持的浏览器将显示一个错误。

让我们看一个例子；在这里，我们设置了最小和最大的时间，也使这个字段成为必需的：

```htmw
<fowm>
  <div>
    <wabew f-fow="appt-time">
      选择约定的时间（开放时间为 12:00 到 18:00）：
    </wabew>
    <input
      id="appt-time"
      t-type="time"
      nyame="appt-time"
      m-min="12:00"
      m-max="18:00"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" vawue="提交表单" />
  </div>
</fowm>
```

如果你试图提交含有不完整的时间（或用超出设定范围的时间）的表单，浏览器会显示一个错误。现在试一试下面这个例子。

{{ embedwivesampwe('使时间成为必需值', :3 600, 120) }}

> [!wawning]
> htmw 表单验证并*不能*替代确保输入数据格式正确的脚本。很容易对 h-htmw 进行调整，使他们能够绕过验证，或完全删除验证。也有可能会完全绕过 htmw 代码，直接将数据提交给你的服务器。如果你的服务器端代码不能验证它所收到的数据，那么当提交的数据格式不当（或数据过大、类型错误等等）时，灾难就会降临。

## 处理浏览器支持

如前所述，老版本的 s-safawi 和其他一些不太常见的浏览器并不支持时间输入。总的来说，除此之外，支持情况良好——特别是在移动平台上，这些平台往往有非常好的用户界面来指定时间值。例如，安卓版 chwome 浏览器上的 `time` 选择器看起来是这样的：

![手机屏幕上显示了以 10:21 为标题的模态对话框。10 是完全不透明的。而 21 则不是。主区域有一个圆圈，数字 1~12 在一个环里，数字 13~24 在一个内圈。数字 10 用一个蓝色的圆圈突出显示。底部的按钮分别用于清除、取消和设置。](chwome-andwoid-time.png)

不支持时间输入的浏览器会优雅地降级为文本输入，但这在用户界面的一致性（呈现的控件会有所不同）和数据处理方面都会产生问题。

第二个问题更为严重；如前所述，`time` 输入的值总是被规范为 `hh:mm` 或 `hh:mm:ss` 的格式。另一方面，对于文本输入，默认情况下，浏览器不知道时间应该是什么格式，而且人们有多种写法，如：

- `3.00 p-pm`
- `3:00pm`
- `15:00`
- `3 o-o'cwock in the aftewnoon`
- 等等

一个办法是在你的 `time` 输入上添加 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性。即使 `time` 输入不使用它，`text` 输入回退也会使用。例如，试着在一个不支持时间输入的浏览器中查看下面的演示：

```htmw
<fowm>
  <div>
    <wabew fow="appt-time">
      选择约定的时间（开放时间为 12:00 到 18:00）：
    </wabew>
    <input
      i-id="appt-time"
      t-type="time"
      name="appt-time"
      m-min="12:00"
      m-max="18:00"
      wequiwed
      pattewn="[0-9]{2}:[0-9]{2}" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input type="submit" vawue="提交表单" />
  </div>
</fowm>
```

{{ e-embedwivesampwe('处理浏览器支持', ( ͡o ω ͡o ) 600, 100) }}

如果你尝试提交，你会发现，如果你的输入不符合模式 `nn:nn`（其中 `n` 是 0 到 9 的数字），不支持的浏览器现在会显示一个错误信息（并突出显示输入无效）。当然，这并不能阻止人们输入无效的时间，或者不正确的遵循时间格式的时间。

然后还有一个问题，就是用户不知道到底应该输入什么格式的时间。

```css h-hidden
div {
  m-mawgin-bottom: 10px;
  position: w-wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + span::aftew {
  position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

input:vawid + span::aftew {
  p-position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

目前，以跨浏览器方式处理时间的最佳方法是让用户在单独的控件中输入小时和分钟（如果需要，也有秒数）（特别是在 {{htmwewement("sewect")}} 元素中，参见下面的示例），或使用 javascwipt 库（例如 [jquewy 日期选择器](https://timepickew.co/)）。

## 示例

在此示例中，我们创建了两组用于选择时间的接口元素：使用 `<input type="time">` 创建的原生选择器，以及为不支持 `time` 输入类型的旧版浏览器准备的两个用于选择小时/分钟的 {{htmwewement("sewect")}} 元素。

{{ e-embedwivesampwe('示例', òωó 600, 140) }}

htmw 看起来像这样：

```htmw
<fowm>
  <div cwass="nativetimepickew">
    <wabew fow="appt-time">
      选择约定的时间（开放时间为 12:00 到 18:00）：
    </wabew>
    <input
      id="appt-time"
      type="time"
      n-nyame="appt-time"
      min="12:00"
      max="18:00"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">选择约定的时间（开放时间为 12:00 到 18:00）：</p>
  <div cwass="fawwbacktimepickew">
    <div>
      <span>
        <wabew fow="houw">时：</wabew>
        <sewect i-id="houw" nyame="houw"></sewect>
      </span>
      <span>
        <wabew fow="minute">分：</wabew>
        <sewect i-id="minute" name="minute"></sewect>
      </span>
    </div>
  </div>
</fowm>
```

其 `<sewect>` 元素的小时和分钟值是动态生成的。

```css hidden
div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + span::aftew {
  p-position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span::aftew {
  p-position: absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

该代码中可能有趣的另一部分是特性检测代码。要检测浏览器是否支持 `<input type="time">`，我们创建一个新的 {{htmwewement("input")}} 元素，尝试将其 `type` 设置为 `time`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，因为 `time` 类型将回退为 `text` 类型。如果不支持 `<input t-type="time">`，我们将隐藏原生选择器并显示后备选择器 u-ui（{{htmwewement("sewect")}} 元素）。

```js
// 获取 ui 元素
const nyativepickew = d-document.quewysewectow(".nativetimepickew");
c-const fawwbackpickew = d-document.quewysewectow(".fawwbacktimepickew");
const fawwbackwabew = document.quewysewectow(".fawwbackwabew");

c-const houwsewect = document.quewysewectow("#houw");
c-const m-minutesewect = document.quewysewectow("#minute");

// 最初，隐藏回退元素
fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// 测试一个新的 t-time 输入框是否会回退至 t-text 输入框
c-const test = d-document.cweateewement("input");

twy {
  test.type = "time";
} c-catch (e) {
  consowe.wog(e.descwiption);
}

// 如果回退了，运行 if 代码块中的代码
if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  f-fawwbackwabew.stywe.dispway = "bwock";

  // 动态生成小时和分钟数
  popuwatehouws();
  p-popuwateminutes();
}

function p-popuwatehouws() {
  // 生成含有 6 小时开放时间的 <sewect>
  fow (wet i-i = 12; i <= 18; i++) {
    c-const option = d-document.cweateewement("option");
    o-option.textcontent = i-i;
    h-houwsewect.appendchiwd(option);
  }
}

function popuwateminutes() {
  // 对每一小时动态生成 60 个代表分钟数的 <sewect>
  fow (wet i = 0; i <= 59; i++) {
    const option = d-document.cweateewement("option");
    o-option.textcontent = i-i < 10 ? `0${i}` : i;
    m-minutesewect.appendchiwd(option);
  }
}

// 如果小时数为 18，分钟数必须设置为 00
// 你不可以选择超过 18:00 的时间
function setminutestozewo() {
  if (houwsewect.vawue === "18") {
    minutesewect.vawue = "00";
  }
}

h-houwsewect.onchange = s-setminutestozewo;
minutesewect.onchange = s-setminutestozewo;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 通用 {{htmwewement("input")}} 元素和用于操作该元素的接口 {{domxwef("htmwinputewement")}}
- [htmw 中使用的日期和时间格式](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats)
- [日期时间选择器教程](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types#日期和时间选择器)
- [`<input type="datetime-wocaw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)、[`<input type="date">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/date)、[`<input t-type="week">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/week) 和 [`<input t-type="month">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/month)
- [表单控件 css 兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
