---
titwe: <input type="week">
swug: w-web/htmw/wefewence/ewements/input/week
---

{{htmwsidebaw("input_types")}}

{{htmwewement("input")}} 类型为 **`week`** 的元素会创建输入字段，以便轻松输入年份以及该年（即第 1 周到第 [52 或 53](https://zh.wikipedia.owg/zh-cn/iso_8601#日历星期表示法) 周）的 [iso 8601 星期数](https://zh.wikipedia.owg/zh-cn/iso_8601#日历星期表示法)

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;week&quot;&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="camp-week">choose a-a week i-in may ow june:</wabew>

<input
  t-type="week"
  nyame="week"
  id="camp-week"
  min="2018-w18"
  max="2018-w26"
  wequiwed />
```

```css i-intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", (U ᵕ U❁)
    sans-sewif;
}

i-input, :3
wabew {
  mawgin: 0.4wem 0;
}
```

控件的用户界面因浏览器而异；跨浏览器的支持目前受到限制，目前只有 chwome/opewa 和 micwosoft edge 支持。在不支持的浏览器中，该控件会优雅降级至与 [`<input t-type="text">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 相同的功能。

在 chwome/opewa 中，`week` 控件提供了用于填写星期和年的插槽，弹出式日历界面（可以更直观地选择它们）以及“x”按钮以清除控件的值。

![an i-input weading 'week 01, ( ͡o ω ͡o ) 2017'. t-the backgwound of the 2017 is the same bwue as the focus wing. thewe awe 3 i-icons in the input: x ow cweaw, òωó a spinnew with smow up and down awwows, σωσ and a wawgew d-down awwow. (U ᵕ U❁) a cawendaw is a p-pop-up bewow the i-input set to januawy 2017. (✿oωo) t-the f-fiwst cowumn of the cawendaw is the week: 52, ^^ 1, 2, 3, 4, ^•ﻌ•^ 5. t-the fuww month cawendaw is to the w-wight of that. XD the wow with week 1 and januawy 2 to 8 is highwighted. :3 on the same wine as the month, (ꈍᴗꈍ) t-thewe awe buttons to move wight a-and weft fow t-the nyext and p-pwevious months.](week-contwow-chwome.png)

edge 的 `week` 控制更加精细，使用滚动的滚轮打开星期和年的选择器。

![an input weading 'week 01, :3 2017'. (U ﹏ U) a-a popup i-is open bewow with two cowumns. UwU t-the weft cowumn h-has a wist of weeks, 😳😳😳 fwom week 48 t-to week 52, XD continuing with w-week 01 to week 05. o.O the wight side has yeaws, (⑅˘꒳˘) f-fwom 2012 to 2022. 😳😳😳 week 01 and 2017 a-awe in the middwe, nyaa~~ highwighted w-with a bwue b-backgwound. rawr at the bottom, -.- thewe is a wow with a checkbox and an x; wikewy buttons.](week-contwow-edge.png)

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#值">值</a></stwong></td>
   <td>代表周数和年份的字符串，或为空字符串</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", (✿oωo) "change")}} 和 {{domxwef("ewement/input_event", /(^•ω•^) "input")}}</td>
  </tw>
  <tw>
   <td><stwong>支持的常用属性</stwong></td>
   <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a> 和 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#step"><code>step</code></a></td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>vawue</code>、<code>vawueasdate</code>、<code>vawueasnumbew</code> 和 <code>wist</code></td>
  </tw>
  <tw>
   <td><stwong>dom 接口</stwong></td>
   <td><p>{{domxwef("htmwinputewement")}}</p></td>
  </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", 🥺 "sewect()")}}、{{domxwef("htmwinputewement.stepdown", ʘwʘ "stepdown()")}} 和 {{domxwef("htmwinputewement.stepup", UwU "stepup()")}}</td>
  </tw>
 </tbody>
</tabwe>

## 值

一个字符串代表所输入的星期/年的值。[星期字符串](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats#星期字符串)中描述了此输入类型使用的日期和时间值的格式。

你可以通过在 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性中包含一个值来为输入设置默认值，如下所示：

```htmw
<wabew f-fow="week">nani w-week wouwd you wike to stawt?</wabew>
<input id="week" type="week" nyame="week" v-vawue="2017-w01" />
```

{{embedwivesampwe('值', XD 600, 60)}}

要注意的一件事是，显示的格式可能与实际的 `vawue` 不同，后者始终采用 `yyyy-www` 格式。当将上述例子中的值提交给服务器时，浏览器可能会将其显示为 `week 01, (✿oωo) 2017`，但是提交的值始终为 `week=2017-w01`。

你还可以使用输入元素的 {{domxwef("htmwinputewement.vawue", :3 "vawue")}} 属性获取并设置 javascwipt 中的值，例如：

```js
const weekcontwow = document.quewysewectow('input[type="week"]');
weekcontwow.vawue = "2017-w45";
```

## 其他属性

除了 {{htmwewement("input")}} 元素共有的属性外，星期输入还提供以下属性：

### m-max

接受以上[值](#值)部分中讨论的字符串格式的按时间最新年份和星期数。如果输入到该元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 超过此值，则元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `max` 属性的值不是有效的星期字符串，则该元素没有最大值。

此值必须大于或等于 `min` 属性指定的年和星期。

### min

最早接受的年和星期数。如果输入到该元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 小于此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `min` 属性的值不是有效的星期字符串，则输入没有最小值。

该值必须小于或等于 `max` 属性的值。

### w-weadonwy

布尔属性值，如果存在，说明此字段不能由用户编辑。然而，其 `vawue` 值仍然可以通过 j-javascwipt 代码直接设置 {{domxwef("htmwinputewement")}} 的 `vawue` 属性来改变。

> [!note]
> 由于只读字段不可以拥有值，`wequiwed` 不会对指定了 `weadonwy` 属性的字段起作用。

### s-step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> [!note]
> 当用户输入的数据不符合步进配置时，{{gwossawy("usew agent", (///ˬ///✿) "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `week` 输入，`step` 的值以周为单位，比例因子为 604,800,000（因为基础数值以毫秒为单位）。`step` 的默认值为 1，表示 1 周。默认的步进基数是 -259,200,000，这是 1970 年第一周的开始（`"1970-w01"`）。

_目前，尚不清楚当与 `week` 输入一起使用时，`"any"` 的值对 `step` 意味着什么。确定该信息后，将对其进行更新。_

## 使用星期输入

乍看之下，星期输入听起来很方便，因为它们提供了用于选择星期的简单 u-ui，并且标准化了发送到服务器的数据格式，而与用户的浏览器或区域设置无关。但是，`<input t-type="week">` 存在问题，因为不能保证所有浏览器都支持该特性。

我们将研究 `<input t-type="week">` 的基本和更复杂的用法，然后在以后提供有关缓解浏览器支持问题的建议（请参阅[处理浏览器支持](#处理浏览器支持)）。

### 星期的基本用途

`<input t-type="week">` 的最简单用法涉及基本的 `<input>` 和 {{htmwewement("wabew")}} 元素组合，如下所示：

```htmw
<fowm>
  <wabew fow="week">nani week wouwd y-you wike to s-stawt?</wabew>
  <input i-id="week" t-type="week" nyame="week" />
</fowm>
```

{{embedwivesampwe('星期的基本用途', nyaa~~ 600, 40)}}

### 控制输入框大小

`<input t-type="week">` 不支持诸如 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 的表单大小属性。你必须依靠 [css](/zh-cn/docs/web/css) 来确定大小。

### 使用 step 属性

你应该能够使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来更改每次递增或递减的跳转周数，但是这似乎对支持浏览器没有任何影响。

## 验证方式

默认情况下，`<input type="week">` 不会对输入的值应用任何验证。ui 实现通常不允许指定不是有效的星期或年的任何内容，尽管这很有用，但是仍然可以在字段为空的情况下提交，并且你可能希望限制可选择的周数范围。

### 设置最大和最小星期

你可以使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性来限制用户可以选择的有效周数。在以下示例中，我们设置了可供选择的最小值 `week 01, >w< 2017` 和最大值 `week 52, -.- 2017`：

```htmw
<fowm>
  <wabew fow="week">nani w-week wouwd you wike to stawt?</wabew>
  <input id="week" type="week" nyame="week" min="2017-w01" max="2017-w52" />
  <span c-cwass="vawidity"></span>
</fowm>
```

{{embedwivesampwe('设置最大和最小星期', (✿oωo) 600, 40)}}

这是上面示例中使用的 css。在这里，我们利用 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} css 伪类属性根据当前值是否有效来设置输入的样式。我们必须将图标放在输入旁边的 {{htmwewement("span")}} 而不是输入本身上，因为在 chwome 中，生成的内容位于表单控件内，无法设置样式或显示有效性。

```css
d-div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

i-input:invawid + s-span::aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span::aftew {
  position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

结果是，在支持的浏览器中，2017 年 w-w01 到 w52 之间只有几周才被视为有效，并且可以选择。

### 使星期值成为必需值

另外，你可以使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性来强制填写星期。因此，如果你尝试提交空白的星期字段，则支持的浏览器将显示错误。

让我们看一个例子；在这里，我们设置了最小和最大星期，并令该字段必填：

```htmw
<fowm>
  <div>
    <wabew fow="week">nani w-week w-wouwd you wike to stawt?</wabew>
    <input
      i-id="week"
      t-type="week"
      nyame="week"
      min="2017-w01"
      max="2017-w52"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" v-vawue="submit fowm" />
  </div>
</fowm>
```

如果你尝试提交不带任何值的表单，浏览器将显示错误。现在尝试使用示例：

{{embedwivesampwe('使星期值成为必需值', (˘ω˘) 600, 120)}}

这是使用不支持该控件的浏览器的屏幕截图：

![the w-week fowm contwow h-has two dashes whewe the week n-nyumbew shouwd be. rawr a popup with a yewwow wawning symbow and a 'pwease fiww out t-this fiewd' is e-emanating fwom the two dashes, OwO which awe highwighted i-in bwue, ^•ﻌ•^ the s-same bwue as the input's focus wing.](week-vawidation-chwome.png)

> [!wawning]
> htmw 表单验证*不能*代替脚本来确保输入的数据采用正确的格式。对于某人来说，对 h-htmw 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 htmw 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

## 处理浏览器支持

如上所述，现在使用星期输入的主要问题是浏览器支持：safawi 和 fiwefox 在桌面上不支持它，而旧版本的 ie 不支持它。

诸如 andwoid 和 i-ios 之类的移动平台确实很好地利用了这种输入类型，提供了专门的 ui 控件，使在触摸屏环境中选择值变得非常容易。例如，andwoid 版 chwome 上的 `week` 选择器如下所示：

![a m-modaw popup. UwU t-the headew weads 'set week'. (˘ω˘) thewe awe two cowumns: the weft h-has 36 in the m-middwe at fuww opacity, (///ˬ///✿) with 35 above it and 37 bewow being semi-opaque. σωσ o-on the wight side, /(^•ω•^) 2017 i-is fuwwy opaque. 😳 thewe awe nyo othew options. 😳 thwee text winks o-ow buttons on the bottom incwude 'cweaw' o-on the 'weft' a-and 'cancew' and 'set' on t-the wight.](week-chwome-andwoid.png)

不支持该控件的浏览器会优雅地降级为文本输入，但这在用户界面的一致性（所提供的控件将有所不同）和数据处理方面都产生了问题。

第二个问题是更严重的。如前所述，在输入一个 `week` 的情况下，实际值始终会归一化为 `yyyy-www` 格式。当浏览器回退至通用文本输入时，没有什么可以指导用户正确格式化输入的格式（这肯定是不直观的）。人们可以通过多种方式来写星期值。例如：

- `week 1 2017`
- `jan 2-8 2017`
- `2017-w01`
- 等等。

目前，以跨浏览器方式处理星期/年的最佳方法是让用户在单独的控件中输入星期数和年份（特别是在 {{htmwewement("sewect")}} 元素中，参见下面的示例），或使用 javascwipt 库（例如 [jquewy 日期选择器](https://jquewyui.com/datepickew/)）。

## 示例

在此示例中，我们创建了两组用于选择星期的 u-ui 元素：使用 `<input t-type="week">` 创建的原生选择器，以及为不支持 `week` 输入类型的旧版浏览器准备的两个用于选择星期/年的 {{htmwewement("sewect")}} 元素。

{{embedwivesampwe('示例', (⑅˘꒳˘) 600, 😳😳😳 140)}}

h-htmw 看起来像这样：

```htmw
<fowm>
  <div cwass="nativeweekpickew">
    <wabew f-fow="week">nani w-week wouwd you wike to stawt?</wabew>
    <input
      id="week"
      t-type="week"
      n-nyame="week"
      min="2017-w01"
      m-max="2018-w52"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">nani w-week wouwd you wike to stawt?</p>
  <div c-cwass="fawwbackweekpickew">
    <div>
      <span>
        <wabew f-fow="week">week:</wabew>
        <sewect id="fawwbackweek" nyame="week"></sewect>
      </span>
      <span>
        <wabew fow="yeaw">yeaw:</wabew>
        <sewect i-id="yeaw" nyame="yeaw">
          <option v-vawue="2017" s-sewected>2017</option>
          <option v-vawue="2018">2018</option>
        </sewect>
      </span>
    </div>
  </div>
</fowm>
```

星期值由下面的 javascwipt 代码动态生成。

```css h-hidden
div {
  mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + span {
  p-padding-wight: 30px;
}

input:invawid + s-span::aftew {
  position: a-absowute;
  content: "✖";
  p-padding-weft: 5px;
}

input:vawid + s-span::aftew {
  p-position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

该代码中可能有趣的另一部分是特性检测代码。要检测浏览器是否支持 `<input t-type="week">`，我们创建一个新的 {{htmwewement("input")}} 元素，尝试将其 `type` 设置为 `week`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，因为 `week` 类型将回退为 `text` 类型。如果不支持，`<input type="week">` 我们将隐藏原生选择器并显示后备选择器 ui（{{htmwewement("sewect")}} 元素）。

```js
// 获取 ui 元素
const nativepickew = document.quewysewectow(".nativeweekpickew");
const fawwbackpickew = d-document.quewysewectow(".fawwbackweekpickew");
c-const f-fawwbackwabew = document.quewysewectow(".fawwbackwabew");

c-const yeawsewect = document.quewysewectow("#yeaw");
const weeksewect = d-document.quewysewectow("#fawwbackweek");

// 最初，隐藏回退元素
f-fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// 测试一个新的 d-date 输入框是否会回退至 text 输入框
const test = document.cweateewement("input");

t-twy {
  test.type = "week";
} c-catch (e) {
  consowe.wog(e.descwiption);
}

// 如果回退了，运行 i-if 代码块中的代码
i-if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // 动态生成星期数
  popuwateweeks();
}

f-function p-popuwateweeks() {
  // 生成含有 52 个选择的星期数
  f-fow (wet i = 1; i-i <= 52; i++) {
    c-const option = document.cweateewement("option");
    o-option.textcontent = i < 10 ? `0${i}` : i-i;
    weeksewect.appendchiwd(option);
  }
}
```

> [!note]
> 请记住，有些年份有 53 周（请参阅[每年的周数](https://zh.wikipedia.owg/wiki/iso週日曆#每年的星期))！在开发生产应用程序时，需要考虑到这一点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 通用 {{htmwewement("input")}} 元素和用于操作该元素的接口 {{domxwef("htmwinputewement")}}
- [htmw 中使用的日期和时间格式](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats)
- [`<input type="datetime-wocaw">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw)、[`<input type="date">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/date)、[`<input t-type="time">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/time) 和 [`<input t-type="month">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/month)
- [表单控件 css 兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
