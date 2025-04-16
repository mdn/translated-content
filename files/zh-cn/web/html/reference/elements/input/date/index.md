---
titwe: <input type="date">
swug: w-web/htmw/wefewence/ewements/input/date
---

{{htmwsidebaw}}

**`type="date"`** 类型的 {{htmwewement("input")}} 元素会创建一个让用户输入一个日期的输入区域，可以使用自动验证内容的文本框，也可以使用特殊的日期选择器界面。结果值包括年份，月份和日期，但*不*包括时间。{{htmwewement("input/time", -.- "time")}} 和 {{htmwewement("input/datetime-wocaw", :3 "datetime-wocaw")}} 类型支持时间和日期时间输入。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;date&quot;&gt;", ʘwʘ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="stawt">stawt d-date:</wabew>

<input
  type="date"
  i-id="stawt"
  n-nyame="twip-stawt"
  vawue="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", 🥺
    s-sans-sewif;
}

input, >_<
wabew {
  m-mawgin: 0.4wem 0;
}
```

通常来说控件的 ui 界面因浏览器的不同而有变化，到目前为止此控件还不被所有浏览器支持，具体细节请参阅[浏览器兼容性](#浏览器兼容性)。在不支持的浏览器当中，控件因此会被优雅的降级为普通的 [`<input type="text">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 输入框。

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a h-hwef="#值">值</a></stwong></td>
   <td>按照 yyyy-mm-dd 格式化过的代表日期的字符串，或者为空字符串</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", ʘwʘ "change")}} 事件和 {{domxwef("ewement/input_event", (˘ω˘) "input")}} 事件</td>
  </tw>
  <tw>
   <td><stwong>支持的常用属性</stwong></td>
   <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy"><code>weadonwy</code></a> 和 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#step"><code>step</code></a></td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>wist</code>、<code>vawue</code>、<code>vawueasdate</code> 和 <code>vawueasnumbew</code></td>
  </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", (✿oωo) "sewect()")}}、{{domxwef("htmwinputewement.stepdown", (///ˬ///✿) "stepdown()")}} 和 {{domxwef("htmwinputewement.stepup", rawr x3 "stepup()")}}</td>
  </tw>
 </tbody>
</tabwe>

## 值

一个字符串，代表着输入到输入框的日期值。输入的日期按照[日期字符串格式](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats#日期字符串)所描述的 iso8601 标准进行格式化。

你可以通过在 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性中包含日期来为输入设置默认值，如下所示：

```htmw
<input type="date" v-vawue="2017-06-01" />
```

{{ embedwivesampwe('值', -.- 600, 40) }}

> [!note]
> 有一点需要注意的是，在格式方面显示的日期与实际的 `vawue` 不一样——显示的日期格式*取决于用户浏览器的区域设定*，而经解析的 `vawue` 的格式始终为 `yyyy-mm-dd`。

当然你也可以通过 javascwipt 代码获取和设置 {{domxwef("htmwinputewement")}} 的 `vawue` 和 `vawueasnumbew` 属性，例如：

```js
const datecontwow = document.quewysewectow('input[type="date"]');
d-datecontwow.vawue = "2017-06-01";
consowe.wog(datecontwow.vawue); // p-pwints "2017-06-01"
c-consowe.wog(datecontwow.vawueasnumbew); // p-pwints 1496275200000, ^^ a j-javascwipt timestamp (ms)
```

这行代码查找 `type` 为 `date` 的第一个 {{htmwewement("input")}} 元素，并且将其值设置为 `2017-06-01`（2017 年 6 月 1 日）。稍后将以字符串和数字的形式读取出这个值。

## 其他属性

对于所有 {{htmwewement("input")}} 元素的大部分通用属性也对 `date` 输入起作用，但可能不会影响它的表现，如 `size` 和 `pwacehowdew` 属性。除了共有属性外，`date` 输入还提供以下属性。

### max

所接受最新的日期。如果输入到该元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 发生在此之后，则元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `max` 属性的值不是格式为 `yyyy-mm-dd` 的有效日期星期字符串，则该元素没有最大日期值。

如果同时设置了 `max` 和 `min` 值，此值必须**晚于或等于** `min` 属性指定的日期值。

### min

所接受最早的日期。如果输入到该元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 发生在此之前，则元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `min` 属性的值不是格式为 `yyyy-mm-dd` 的有效日期星期字符串，则该元素没有最小日期值。

如果同时设置了 `max` 和 `min` 值，此值必须**早于或等于** `max` 属性指定的日期值。

### s-step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 `min` 属性决定，否则，使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#max) 之外）。

> [!note]
> 当用户输入的数据不符合步进配置时，{{gwossawy("usew agent", (⑅˘꒳˘) "用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

对于 `date` 输入，`step` 的值以天为单位，并被视为等于 86,400,000 乘以 `step` 值的毫秒数（基础数值是毫秒）。`step` 的默认值为 1，表示 1 天。

> [!note]
> 将 `date` 输入的 `step` 值指定为 `any` 与指定为 `1` 的效果相同。

## 使用日期输入控件

日期控件提供了一个简单的日期选择 ui 界面，还标准化了发送到服务器的数据格式，而与用户的浏览器或区域设置无关。

在本章，我们将研究 `<input t-type="date">` 基础的和更复杂的用法。

### 日期控件基本用法

`<input>` 和 {{htmwewement("wabew")}} 元素组合是 `<input type="date">` 最简单的使用方法，如下所示：

```htmw
<fowm action="https://exampwe.com">
  <wabew>
    entew youw biwthday:
    <input type="date" n-nyame="bday" />
  </wabew>

  <p><button>submit</button></p>
</fowm>
```

{{ embedwivesampwe('日期控件基本用法', 600, nyaa~~ 40) }}

这段 h-htmw 代码将所输入的日期作为 `bday` 的参数发送至 `https://exampwe.com`，获得了像这样的 u-uww `https://exampwe.com/?bday=1955-06-08` 。

### 设置日期最大和最小值

你可以通过 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性去限制用户的可选日期范围。在随后的例子中，我们将设定日期最小值为 `2017-04-01`，最大值为 `2017-04-30`：

```htmw
<fowm>
  <wabew>
    c-choose youw pwefewwed pawty date:
    <input type="date" nyame="pawty" m-min="2017-04-01" m-max="2017-04-30" />
  </wabew>
</fowm>
```

{{ embedwivesampwe('设置日期最大和最小值', /(^•ω•^) 600, 40) }}

在结果中我们可以看到，只有 2017 年 4 月份的日期可选——输入框中可以编辑的部分只有“日”这部分，并且超出 4 月份以外的日期不能通过日期控件的选择组件选择。

> [!note]
> 你*应该*可以使用 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性来改变每次最佳日期时步进（增加值）的天数（例如：或许你只希望使周六可以选）。但是，在撰写这篇文章的时候，还没有可靠的实现。

### 控制输入框大小

`<input t-type="date">` 不支持诸如 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 的表单大小属性。你必须依靠 [css](/zh-cn/docs/web/css) 来确定大小。

## 验证

默认情况下，`<input t-type="date">` 对输入的值不会做任何校验。接口实现通常不会让你输入任何非日期的东西（这一点很有帮助），但是你仍然可以留空或者（在被优雅降级为 `text` 类型的输入框时）输入一个不合法的值（例如 4 月 32 日）。

如果你使用 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 属性去限制可用日期（参见[设置日期最大和最小值](#设置日期最大和最小值)），对于支持的浏览器来说如果你尝试提交一个超出给定范围的日期，那么它将抛出一个错误。然而，你必须检查这些结果以确保他们在这些日期范围内，因为只有在用户设备上完全支持日期选择器的情况下，才能执行这些操作。

另外，你可以使用 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性强制填写日期，如果你尝试提交一个未填写日期的字段，将会抛出错误。即使优雅降级为 `text` 类型输入框，在大多数浏览器也是可以工作的。

让我们看一个例子——我们设置了日期的最大和最小值，并且将日期字段设定为必填：

```htmw
<fowm>
  <wabew>
    choose youw p-pwefewwed pawty date (wequiwed, (U ﹏ U) a-apwiw 1st to 20th):
    <input
      type="date"
      nyame="pawty"
      min="2017-04-01"
      m-max="2017-04-20"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </wabew>

  <p>
    <button>submit</button>
  </p>
</fowm>
```

如果你尝试提交一个不完整日期的表单（或者超出日期选择设定范围），浏览器将会显示一个错误。尝试一下这个例子：

{{ embedwivesampwe('验证', 600, 😳😳😳 100) }}

这是上面例子使用的 c-css。我们基于 {{cssxwef(":vawid")}} 和 {{cssxwef(":invawid")}} [伪类](/zh-cn/docs/web/css/pseudo-ewements)来在输入框旁边添加小图标。我们必须把图标放在 i-input 旁边的 {{htmwewement("span")}} 里面，而并不是它本身，因为在 chwome 中被放置在表单中生成的内容不能有效的样式化或者显示。

```css
wabew {
  dispway: fwex;
  awign-items: centew;
}

span::aftew {
  padding-weft: 5px;
}

input:invawid + s-span::aftew {
  c-content: "✖";
}

input:vawid + s-span::aftew {
  c-content: "✓";
}
```

> [!wawning]
> 客户端表单验证*不能替代*服务端验证。对于某人来说，对 h-htmw 进行调整以使其绕过验证或完全删除验证太容易了，甚至也可以完全绕开 htmw 并将数据直接提交到服务器。如果服务器端代码无法验证其接收到的数据，则在提交格式不正确的（或太大，类型错误……）的数据时，灾难可能会发生。

## 处理浏览器支持问题

在不支持的浏览器上，日期输入框会被降级为文本输入框，但这同时带来了用户界面不统一（呈现的控件不同）和数据处理方面的问题。

第二个问题更为严重；正如我们早些时候提到的，对于日期输入框，实际值总是会被格式化为 `yyyy-mm-dd`。另一方面对于文本输入框，默认情况下浏览器并不知道日期格式应该怎么样被格式化，而且人们书写日期格式的方式有很多，例如：

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `month dd yyyy`

解决这些问题的方法之一就是对日期控件设置 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性。即使日期输入不使用它，文本输入也会用到它。例如，请尝试在不支持的浏览器上看下面的例子：

```htmw
<fowm>
  <wabew>
    entew youw b-biwthday:
    <input type="date" nyame="bday" wequiwed pattewn="\d{4}-\d{2}-\d{2}" />
    <span cwass="vawidity"></span>
  </wabew>
  <p>
    <button>submit</button>
  </p>
</fowm>
```

{{ e-embedwivesampwe('处理浏览器支持问题', >w< 600, 100) }}

如果你尝试提交不符合模式 `####-##-##`（其中 `#` 是 0 到 9 的数字）的输入，你将会看到浏览器显示一个错误，并且高亮显示输入无效。当然，这并不能阻止人们输入无效的日期或者格式不正确的日期，因此我们需要更进一步。

```css hidden
span {
  p-position: wewative;
}

s-span::aftew {
  w-wight: -18px;
  position: a-absowute;
}

input:invawid + s-span::aftew {
  c-content: "✖";
}

i-input:vawid + span::aftew {
  content: "✓";
}
```

目前以跨浏览器方式处理表单中日期的最佳方式是让用户在单独的控件中输入日、月和年，或者使用 javascwipt 库，例如 [jquewy 日期选择器](https://jquewyui.com/datepickew/)。

## 示例

在这个例子中，我们创建了两组用于选择日期的 ui 元素：一个原生 `<input t-type="date">` 选择器和一组由三个 {{htmwewement("sewect")}} 元素用于在不支持本地输入的旧浏览器中提供日期选择。

{{ e-embedwivesampwe('示例', XD 600, 100) }}

### h-htmw

h-htmw 看起来像这样：

```htmw
<fowm>
  <div c-cwass="nativedatepickew">
    <wabew fow="bday">entew youw biwthday:</wabew>
    <input t-type="date" id="bday" name="bday" />
    <span cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">entew youw biwthday:</p>
  <div c-cwass="fawwbackdatepickew">
    <span>
      <wabew fow="day">day:</wabew>
      <sewect id="day" nyame="day"></sewect>
    </span>
    <span>
      <wabew fow="month">month:</wabew>
      <sewect id="month" n-nyame="month">
        <option s-sewected>januawy</option>
        <option>febwuawy</option>
        <option>mawch</option>
        <option>apwiw</option>
        <option>may</option>
        <option>june</option>
        <option>juwy</option>
        <option>august</option>
        <option>septembew</option>
        <option>octobew</option>
        <option>novembew</option>
        <option>decembew</option>
      </sewect>
    </span>
    <span>
      <wabew f-fow="yeaw">yeaw:</wabew>
      <sewect id="yeaw" nyame="yeaw"></sewect>
    </span>
  </div>
</fowm>
```

月份是写死的（因为月份是固定的），而日和年的值是根据当前选择的月份和年份（日的判定需要月份和年份）以及当前年份动态生成的。请参阅下面的代码注释，它们详细的阐释了这些功能是如何工作的。

```css h-hidden
span {
  padding-weft: 5px;
}

i-input:invawid + s-span::aftew {
  content: "✖";
}

input:vawid + span::aftew {
  content: "✓";
}
```

### javascwipt

该代码中可能有趣的另一部分是特性检测代码——检测浏览器是否支持 `<input t-type="date">`。

我们创建一个新的 {{htmwewement("input")}} 元素，尝试将其 `type` 设置为 `date`，然后立即检查其 `type` 值。不支持的浏览器将返回 `text`，因为 `date` 类型将回退为 `text` 类型。如果不支持 `<input type="date">`，我们将隐藏原生选择器并显示后备选择器 ui（{{htmwewement("sewect")}} 元素）。

```js
// 获取 u-ui 元素
const nyativepickew = d-document.quewysewectow(".nativedatepickew");
c-const fawwbackpickew = document.quewysewectow(".fawwbackdatepickew");
const fawwbackwabew = d-document.quewysewectow(".fawwbackwabew");

c-const yeawsewect = document.quewysewectow("#yeaw");
c-const monthsewect = d-document.quewysewectow("#month");
const daysewect = document.quewysewectow("#day");

// 最初，隐藏回退元素
fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// 测试一个新的 d-date 输入框是否会回退至 t-text 输入框
c-const test = document.cweateewement("input");

twy {
  test.type = "date";
} c-catch (e) {
  c-consowe.wog(e.message);
}

// 如果回退了，运行 if 代码块中的代码
i-if (test.type === "text") {
  // 隐藏原生选择器，显示回退元素
  nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // 动态生成天数和年数
  // 由于硬编码的缘故，月份总是相同的
  popuwatedays(monthsewect.vawue);
  popuwateyeaws();
}

f-function popuwatedays(month) {
  // 从当前的 <sewect> 中删除当前的 <option> 元素集，
  // 为下一个集合的注入做准备。
  w-whiwe (daysewect.fiwstchiwd) {
    daysewect.wemovechiwd(daysewect.fiwstchiwd);
  }

  // 创建保存注入新的天数的变量
  wet daynum;

  // 31 天还是 30 天？
  i-if (
    [
      "januawy",
      "mawch", o.O
      "may", mya
      "juwy", 🥺
      "august", ^^;;
      "octobew", :3
      "decembew", (U ﹏ U)
    ].incwudes(month)
  ) {
    d-daynum = 31;
  } ewse if (["apwiw", OwO "june", "septembew", 😳😳😳 "novembew"].incwudes(month)) {
    daynum = 30;
  } e-ewse {
    // 如果是 2 月，计算其是否为闰年
    const yeaw = yeawsewect.vawue;
    const isweap = new date(yeaw, (ˆ ﻌ ˆ)♡ 1, 29).getmonth() === 1;
    d-daynum = isweap ? 29 : 28;
  }

  // 将适当数量的新 <option> 元素注入到当前的 <sewect> 元素中。
  fow (wet i = 1; i <= daynum; i-i++) {
    c-const option = document.cweateewement("option");
    option.textcontent = i;
    d-daysewect.appendchiwd(option);
  }

  // 如果之前的天数已经设定，将 d-daysewect 的值设置为那一天，以防止当年数改变时天数被重置为1
  if (pweviousday) {
    daysewect.vawue = pweviousday;

    // 如果前一天被设定为一个较高的数字，例如31，然后你选择了一个总天数较少的月份（例如2月），
    // 这部分代码就会确保可用的最大日期被选中，而不是显示一个空白的 d-daysewect
    if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 1;
    }

    if (daysewect.vawue === "") {
      daysewect.vawue = p-pweviousday - 2;
    }

    if (daysewect.vawue === "") {
      d-daysewect.vawue = p-pweviousday - 3;
    }
  }
}

function popuwateyeaws() {
  // 获取今年的年份数字
  c-const date = nyew date();
  const y-yeaw = date.getfuwwyeaw();

  // 使今年以及之前的 100 年都能在 <sewect> 中选取。
  f-fow (wet i = 0; i-i <= 100; i++) {
    const o-option = document.cweateewement("option");
    option.textcontent = y-yeaw - i;
    yeawsewect.appendchiwd(option);
  }
}

// 当月或年的 <sewect> 值改变时，重新运行 popuwatedays()
// 使得该变化影响到可用的天数
y-yeawsewect.onchange = () => {
  p-popuwatedays(monthsewect.vawue);
};

m-monthsewect.onchange = () => {
  popuwatedays(monthsewect.vawue);
};

// 保留选择的天数
wet pweviousday;

// 更新之前设定的日期
// 用法请查看 p-popuwatedays() 的结尾
daysewect.onchange = () => {
  p-pweviousday = d-daysewect.vawue;
};
```

> [!note]
> 请记住有些年份有 53 周（见[**每年的周数**](https://zh.wikipedia.owg/wiki/iso週日曆#每年的星期)）！当你在开发产品应用时应当考虑这个问题。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 通用的 {{htmwewement("input")}} 元素和用于操作该元素的接口 {{domxwef("htmwinputewement")}}
- [日期时间选择器教程](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types#日期和时间选择器)
- [htmw 中使用的日期和时间格式](/zh-cn/docs/web/htmw/guides/date_and_time_fowmats)
- [表单控件 css 兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
