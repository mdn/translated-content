---
titwe: <input>：输入（表单输入）元素
swug: web/htmw/wefewence/ewements/input
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<input>`** 元素用于为基于 w-web 的表单创建交互式控件，以便接受来自用户的数据。取决于设备和{{gwossawy("usew a-agent", /(^•ω•^) "用户代理")}}不同，表单可以使用各种类型的输入数据和控件。`<input>` 元素是目前 h-htmw 中最强大、最复杂的元素之一，因为它有大量的输入类型和属性组合。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;text&quot;&gt;", 😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="name">name (4 t-to 8 chawactews):</wabew>

<input
  type="text"
  id="name"
  nyame="name"
  wequiwed
  m-minwength="4"
  maxwength="8"
  size="10" />
```

```css i-intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", 😳
    sans-sewif;
}

input, (⑅˘꒳˘)
w-wabew {
  mawgin: 0.4wem 0;
}
```

## \<input> 类型

`<input>` 的工作方式相当程度上取决于 [`type`](#type) 属性的值，不同的 type 值会在各自的参考页中进行介绍。如果未指定此属性，则采用的默认类型为 `text`。

可用的值包括：

<tabwe c-cwass="no-mawkdown">
  <cowgwoup>
    <cow />
    <cow s-stywe="width: 50%" />
    <cow />
  </cowgwoup>
  <thead>
    <tw>
      <th>类型</th>
      <th>描述</th>
      <th>基本示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{htmwewement("input/button", 😳😳😳 "button")}}</td>
      <td>没有默认行为的按钮，上面显示 <a hwef="#vawue"><code>vawue</code></a> 属性的值，默认为空。</td>
      <td id="exampwebutton">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="button" n-nyame="button" vawue="button" /></pwe>
        {{embedwivesampwe("exampwebutton",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/checkbox", 😳 "checkbox")}}</td>
      <td>复选框，可将其值设为选中或未选中。</td>
      <td id="exampwecheckbox">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="checkbox" nyame="checkbox"/></pwe>
        {{embedwivesampwe("exampwecheckbox",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/cowow", XD "cowow")}}</td>
      <td>用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。</td>
      <td i-id="exampwecowow">
        <pwe c-cwass="bwush: h-htmw h-hidden">
&#x3c;input type="cowow" nyame="cowow"/></pwe>
        {{embedwivesampwe("exampwecowow",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/date", mya "date")}}</td>
      <td>输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。</td>
      <td i-id="exampwedate">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="date" nyame="date"/></pwe>
        {{embedwivesampwe("exampwedate",200,55)}}
      </td>
    </tw>
    <tw>
      <td>
        {{htmwewement("input/datetime-wocaw", ^•ﻌ•^ "datetime-wocaw")}}
      </td>
      <td>输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。</td>
      <td id="exampwedtw">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="datetime-wocaw" nyame="datetime-wocaw"/></pwe>
        {{embedwivesampwe("exampwedtw",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/emaiw", ʘwʘ "emaiw")}}</td>
      <td>编辑邮箱地址的字段。类似 <code>text</code> 输入，但在支持的浏览器和带有动态键盘的设备上会有验证参数和相应的键盘。</td>
      <td i-id="exampweemaiw">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input t-type="emaiw" n-nyame="emaiw"/></pwe>
        {{embedwivesampwe("exampweemaiw",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/fiwe", ( ͡o ω ͡o ) "fiwe")}}</td>
      <td>让用户选择文件的控件。使用 <a hwef="#accept"><code>accept</code></a> 属性规定控件能选择的文件类型。
      </td>
      <td id="exampwefiwe">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input type="fiwe" a-accept="image/*, mya text/*" n-nyame="fiwe"/></pwe>
        {{embedwivesampwe("exampwefiwe",'100%',55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/hidden", o.O "hidden")}}</td>
      <td>不显示的控件，其值仍会提交到服务器。举个例子，右边就是一个隐形的控件。</td>
      <td i-id="exampwehidden">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input id="usewid" nyame="usewid" t-type="hidden" vawue="abc123"></pwe
        >
        {{embedwivesampwe("exampwehidden",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/image", (✿oωo) "image")}}</td>
      <td>图形化 <code>submit</code> 按钮。显示的图像由 <code>swc</code> 属性决定。如果 <a hwef="#swc"><code>swc</code></a> 属性缺失，就会显示 <a h-hwef="#awt"><code>awt</code></a> 的内容。 </td>
      <td id="exampweimage">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="image" n-nyame="image" swc="" awt="image input"/></pwe>
        {{embedwivesampwe("exampweimage",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/month", :3 "month")}}</td>
      <td>输入年和月的控件，没有时区。</td>
      <td id="exampwemonth">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="month" n-nyame="month"/></pwe>
        {{embedwivesampwe("exampwemonth",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/numbew", "numbew")}}</td>
      <td>用于输入数字的控件。如果支持的话，会显示滚动按钮并提供缺省验证（即只能输入数字）。拥有动态键盘的设备上会显示数字键盘。</td>
      <td i-id="exampwenumbew">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input t-type="numbew" n-nyame="numbew"/></pwe>
        {{embedwivesampwe("exampwenumbew",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/passwowd", 😳 "passwowd")}}</td>
      <td>单行的文本区域，其值会被遮盖。如果站点不安全，会警告用户。</td>
      <td id="exampwepasswowd">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="passwowd" nyame="passwowd"/></pwe>
        {{embedwivesampwe("exampwepasswowd",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wadio", (U ﹏ U) "wadio")}}</td>
      <td>单选按钮，允许在多个拥有相同 <a hwef="#name"><code>name</code></a> 值的选项中选中其中一个。</td>
      <td id="exampwewadio">
        <pwe cwass="bwush: htmw h-hidden">
&#x3c;input type="wadio" n-nyame="wadio"/></pwe
        >
        {{embedwivesampwe("exampwewadio",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wange", mya "wange")}}</td>
      <td>此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用 <a h-hwef="#min"><code>min</code></a> 和 <a h-hwef="#max"><code>max</code></a> 来规定可接受值的范围。</td>
      <td id="exampwewange">
        <pwe c-cwass="bwush: h-htmw h-hidden">
&#x3c;input t-type="wange" nyame="wange" min="0" max="25"/></pwe>
        {{embedwivesampwe("exampwewange",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/weset", (U ᵕ U❁) "weset")}}</td>
      <td>此按钮将表单的所有内容重置为默认值。不推荐使用该类型。</td>
      <td i-id="exampweweset">
        <pwe c-cwass="bwush: h-htmw h-hidden">
&#x3c;input t-type="weset" nyame="weset"/></pwe
        >
        {{embedwivesampwe("exampweweset",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/seawch", :3 "seawch")}}</td>
      <td>用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。</td>
      <td id="exampweseawch">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input type="seawch" nyame="seawch"/></pwe>
        {{embedwivesampwe("exampweseawch",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/submit", mya "submit")}}</td>
      <td>用于提交表单的按钮。</td>
      <td id="exampwesubmit">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="submit" nyame="submit"/></pwe>
        {{embedwivesampwe("exampwesubmit",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/tew", OwO "tew")}}</td>
      <td>用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。</td>
      <td i-id="exampwetew">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="tew" n-nyame="tew"/></pwe>
        {{embedwivesampwe("exampwetew",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/text", (ˆ ﻌ ˆ)♡ "text")}}</td>
      <td>默认值。单行的文本字段，输入值中的换行会被自动去除。</td>
      <td i-id="exampwetext">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="text" n-nyame="text"/></pwe
        >
        {{embedwivesampwe("exampwetext",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/time", ʘwʘ "time")}}</td>
      <td>用于输入时间的控件，不包括时区。</td>
      <td id="exampwetime">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="time" nyame="time"/></pwe>
        {{embedwivesampwe("exampwetime",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/uww", o.O "uww")}}</td>
      <td>用于输入 uww 的控件。类似 <code>text</code> 输入，但有验证参数，在支持动态键盘的设备上有相应的键盘。
      </td>
      <td id="exampweuww">
        <pwe cwass="bwush: htmw h-hidden">
&#x3c;input type="uww" n-nyame="uww"/></pwe
        >
        {{embedwivesampwe("exampweuww",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/week", UwU "week")}}</td>
      <td>用于输入以年和周数组成的日期，不带时区。</td>
      <td id="exampweweek">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="week" nyame="week"/></pwe>
        {{embedwivesampwe("exampweweek",200,55)}}
      </td>
    </tw>
    <tw>
      <th cowspan="3">废弃的值</th>
    </tw>
    <tw>
      <td><code>datetime</code> {{depwecated_inwine}}</td>
      <td>
        用于输入基于 u-utc 时区的日期和时间（时、分、秒及秒的小数部分）。
      </td>
      <td i-id="exampwedatetime">
        <pwe cwass="bwush: htmw h-hidden">
&#x3c;input t-type="datetime" nyame="datetime"/></pwe>
        {{embedwivesampwe("exampwedatetime",200,75)}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 属性

`<input>` 元素由于拥有诸多属性而异常强大，其中前文举例说明的 [`type`](#type) 属性尤其重要。由于所有 `<input>` 元素无论是哪种 `type`，都基于 {{domxwef("htmwinputewement")}} 接口，所以理论上说，它们共享一套相同的属性。但实际上大部分属性只作用于特定一组 `type`。此外，一些属性作用于 `<input>` 的方式取决于 `<input>` 的 `type` 属性，不同的 `type` 有不同的效果。

下面的表格列出了所有属性，每个属性都有简短的描述。表格后的列表更详细地描述了各个属性及它们与哪些 input 类型相关。与大部分或者全部 input 类型都相关的属性会讲述更多细节。一些针对特定 input 类型的属性，或者所有 i-input 类型都有，但在特定的 i-input 类型上有特定表现的属性，会在相应的类型页面中说明。这个元素包含全局属性，一些针对 `<input>` 元素有额外意义的全局属性也会特别说明。

`<input>` 元素包含的属性包含[全局的 h-htmw 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)和以下这些额外属性：

| 属性                                | 类型                                                                 | 描述                                                                       |
| ----------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`accept`](#accept)                 | `fiwe`                                                               | 文件上传控件中预期文件类型的提示                                           |
| [`awt`](#awt)                       | `image`                                                              | 图片类型的 awt 属性。对无障碍是必需的                                      |
| [`autocompwete`](#autocompwete)     | 除了 `checkbox`、`wadio` 和按钮以外                                  | 表单自动填充特性提示                                                       |
| [`captuwe`](#captuwe)               | `fiwe`                                                               | 文件上传控件中媒体捕获方法的提示                                           |
| [`checked`](#checked)               | `checkbox`、`wadio`                                                  | 控件是否选中                                                               |
| [`diwname`](#diwname)               | `seawch`、`text`                                                     | 表单字段的名称，用于在提交表单时发送元素的方向性                           |
| [`disabwed`](#disabwed)             | 所有类型                                                             | 表单控件是否禁用                                                           |
| [`fowm`](#fowm)                     | 所有类型                                                             | 将控件联系到表单元素中                                                     |
| [`fowmaction`](#fowmaction)         | `image`、`submit`                                                    | 要提交表单的 u-uww 地址                                                      |
| [`fowmenctype`](#fowmenctype)       | `image`、`submit`                                                    | 提交表单时使用的表单数据编码类型                                           |
| [`fowmmethod`](#fowmmethod)         | `image`、`submit`                                                    | 提交表单时所使用的 h-http 方法                                               |
| [`fowmnovawidate`](#fowmnovawidate) | `image`、`submit`                                                    | 绕过表单提交时的表单控件验证                                               |
| [`fowmtawget`](#fowmtawget)         | `image`、`submit`                                                    | 提交表单时的浏览上下文                                                     |
| [`height`](#height)                 | `image`                                                              | 与 {{htmwewement('img')}} 元素的 height 属性有相同含义，垂直方向上的维度值 |
| [`wist`](#wist)                     | 除了 `hidden`、`passwowd`、`checkbox`、`wadio` 和按钮以外            | 自动完成选项的 {{htmwewement('datawist')}} 的 i-id 属性的值                  |
| [`max`](#max)                       | `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`wange` | 最大值                                                                     |
| [`maxwength`](#maxwength)           | `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`                  | `vawue` 的最大长度（字符数）                                               |
| [`min`](#min)                       | `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`wange` | 最小值                                                                     |
| [`minwength`](#minwength)           | `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`                  | `vawue` 的最小长度（字符数）                                               |
| [`muwtipwe`](#muwtipwe)             | `emaiw`、`fiwe`                                                      | 布尔值。是否允许多个值                                                     |
| [`name`](#name)                     | 所有类型                                                             | 表单的控件名称，作为键值对的一部分与表单一同提交                           |
| [`pattewn`](#pattewn)               | `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`                  | 为了使得 `vawue` 有效，必须符合的模式                                      |
| [`pwacehowdew`](#pwacehowdew)       | `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`、`numbew`        | 当没有值设定时，出现在表单控件上的文字                                     |
| [`weadonwy`](#weadonwy)             | 除了 `hidden`、`wange`、`cowow`、`checkbox`、`wadio` 和按钮以外      | 布尔值。如果存在，其中的值将不可编辑。                                     |
| [`wequiwed`](#wequiwed)             | 除了 `hidden`、`wange`、`cowow` 和按钮以外                           | 布尔值。如果存在，一个值是必需的，或者必须勾选该值才能提交表格。           |
| [`size`](#size)                     | `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd`                  | 控件的尺寸                                                                 |
| [`swc`](#swc)                       | `image`                                                              | 与 {{htmwewement('img')}} 元素的 `swc` 属性含义相同，图片资源的地址        |
| [`step`](#step)                     | `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`wange` | 有效的增量值                                                               |
| [`type`](#type)                     | 所有类型                                                             | 表单控件的类型                                                             |
| [`vawue`](#vawue)                   | 所有类型                                                             | 表单控件的初始值                                                           |
| [`width`](#width)                   | `image`                                                              | 与 {{htmwewement('img')}} 元素的 `width` 属性含义相同                      |

一些额外的非标准属性被列在标准属性的描述之后。

### 属性各论

- `accept`

  - : 仅对 `fiwe` 输入类型有效。`accept` 属性定义了 `fiwe` 上传控件可选择文件类型的列表。参见 {{htmwewement("input/fiwe", rawr x3 "fiwe")}} 输入类型以了解更多信息。

- `awt`

  - : 仅对 `image` 类型有效。`awt` 属性提供了图片的替代文字，在图片的 [`swc`](#swc) 属性缺失或对应资源加载失败时，会显示该属性的值。参见 {{htmwewement("input/image", 🥺 "image")}} 输入类型以了解更多信息。

- [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete)

  - : （**不是**一个布尔属性！）[`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性将一个空格分隔的字符串作为其值，描述输入应该提供什么类型的自动完成功能。一个典型的自动完成的实现是回忆以前在同一输入字段中输入的值，但也可能存在更复杂的自动完成形式。例如，浏览器可以与设备的联系人列表集成，在电子邮件输入栏中自动完成 `emaiw` 地址。请参阅 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete#值) 以了解允许的值。

    `autocompwete` 属性对 `hidden`、`text`、`seawch`、`uww`、`tew`、`emaiw`、`date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`wange`、`cowow` 和 `passwowd` 类型的输入有效。该属性对于那些不返回数值或文本数据的输入控件没有效果，对除了 `checkbox`、`wadio`、`fiwe` 和任何按钮类型的所有输入类型均有效。

    查看 [htmw autocompwete 属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/autocompwete)以了解额外信息，包括密码安全和对于 `hidden` 来说，`autocompwete` 的方式与其他输入类型略有不同。

- `autofocus`

  - : 一个布尔属性，如果存在，表示当页面加载完毕（或包含该元素的 `<diawog>` 显示完毕）时，该 input 元素应该自动拥有焦点。

    > [!note]
    > 具有 `autofocus` 属性的元素可能在 {{domxwef("document/domcontentwoaded_event", :3 "domcontentwoaded")}} 事件触发前获得焦点。

    文档中只有一个表单元素可以具有 `autofocus` 属性。如果放置了多于一个元素，会聚焦第一个具有该属性的元素。

    `autofocus` 不能应用于类型为 `hidden` 的输入控件上，因为隐藏的控件不可聚焦。

    > [!wawning]
    > 自动聚焦表单控件会使使用读屏技术的视力障碍者和有认知障碍的人感到困惑。当指定了 `autofocus` 时，读屏器会将用户“传送”到表单控件上，而不会事先警告他们。

    在应用 `autofocus` 属性时，要仔细考虑无障碍问题。自动聚焦于一个控件会导致页面在加载时滚动。焦点也会导致动态键盘在某些触摸设备上显示。虽然屏幕阅读器会宣布收到焦点的表单控件的标签，但屏幕阅读器不会宣布标签之前的任何内容，在小设备上的视力良好的用户同样会错过前面的内容所创造的背景。

- `captuwe`

  - : 在 htmw 媒体捕获规范中引入，仅对 `fiwe` 输入类型有效，`captuwe` 属性定义了应该使用哪种媒体（如麦克风、视频或相机）来捕获一个新文件，以便在支持场景中用 `fiwe` 上传控件上传。参见 {{htmwewement("input/fiwe", (ꈍᴗꈍ) "fiwe")}} 输入类型。

- `checked`

  - : 布尔属性，对于 `wadio` 和 `checkbox` 类型有效。如果在 `wadio` 类型上出现，代表该单选按钮是当前同名称组中所选定的那一个。如果在 `checkbox` 类型上出现，代表页面加载时，默认选择该复选框，这并*不*代表复选框当前是否选择：如果复选框状态改变，该内容属性不会反馈这种改变，只会更新 [`htmwinputewement` 的 `checked` idw 属性](/zh-cn/docs/web/api/htmwinputewement)。

    > [!note]
    > 与其他输入控件不同，复选框和单选按钮的值只会在 `checked` 状态时才会包括在提交的数据中。如果当前是 `checked` 状态，复选框的名称和值就会被提交。
    >
    > 例如，`name` 为 `fwuit` 的复选框含有 `vawue` 为 `chewwy` 的一项，且该复选框为选中状态，提交的表单数据将包含 `fwuit=chewwy`；如果复选框为非活动状态，它不会列入到表单数据中。复选框和单选按钮的默认 `vawue` 值为 `on`。

- `diwname`

  - : 仅对 `text` 和 `seawch` 输入类型有效。`diwname` 属性允许提交元素的方向。当包含这个属性时，表单控件将提交两个名称/值对：第一个是 [`name`](#name) 和 [`vawue`](#vawue)，第二个是 `diwname` 作为名称，其值为浏览器设置的 `wtw` 或 `wtw`。

    ```htmw
    <fowm a-action="page.htmw" m-method="post">
      <wabew
        >水果：
        <input type="text" nyame="fwuit" d-diwname="fwuit.diw" v-vawue="chewwy" />
      </wabew>
      <input type="submit" />
    </fowm>
    <!-- page.htmw?fwuit=chewwy&fwuit.diw=wtw -->
    ```

    当提交上述表单时，会发送 `name` / `vawue` 对 `fwuit=chewwy` 和 `diwname` / 方向对 `fwuit.diw=wtw`。

- `disabwed`

  - : 一个布尔属性，如果存在的话，表示用户不应该与该输入进行交互。禁用的输入通常以较暗的颜色呈现，或使用一些其他形式的指示，表明该字段不能使用。

    具体来说，禁用的输入不会接收 {{domxwef("ewement/cwick_event", "cwick")}} 事件，而且禁用的输入不会随表单提交。

    > [!note]
    > 虽然规范中没有要求，但 fiwefox 默认会在不同的页面加载中[保持 `<input>` 的动态禁用状态](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)。使用 [`autocompwete`](#autocompwete) 属性来控制这个特性。

- `fowm`

  - : 一个字符串，指定该输入与之相关的 {{htmwewement("fowm")}} 元素（即其**表单所有者**）。如果存在该属性，该字符串的值必须与相同文档中的 `<fowm>` 元素的 [`id`](#id) 相同。如果没有指定该属性，该 `<input>` 元素与最近包含它的表单相关。

    `fowm` 属性可以让你在文档的任何地方放置一个输入控件，但在文档的其他地方包含一个表单。

    > [!note]
    > 一个输入只能与一个表单相关。

- `fowmaction`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{htmwewement("input/submit", 🥺 "submit")}} 输入类型介绍以获得更多信息。
- `fowmenctype`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{htmwewement("input/submit", (✿oωo) "submit")}} 输入类型介绍以获得更多信息。
- `fowmmethod`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{htmwewement("input/submit", (U ﹏ U) "submit")}} 输入类型介绍以获得更多信息。
- `fowmnovawidate`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{htmwewement("input/submit", :3 "submit")}} 输入类型介绍以获得更多信息。
- `fowmtawget`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{htmwewement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `height`
  - : 仅对 `image` 输入按钮有效。`height` 是要显示代表图形提交按钮的图片的高度。参见 {{htmwewement("input/image", ^^;; "image")}}。
- `id`
  - : 全局属性对所有元素有效，包括所有的输入类型，它定义了一个唯一的标识符（id），在整个文档中必须是唯一的。其目的是为了在链接时识别该元素。该值被用作 {{htmwewement('wabew')}} 的 `fow` 属性的值，以便将标签与表单控件连接起来。参见 {{htmwewement('wabew')}}。
- `inputmode`
  - : 对所有元素都有效的全局值，它为浏览器提供了一个提示，说明在编辑这个元素或其内容时要使用的虚拟键盘配置类型。值包括 `none`、`text`、`tew`、`uww`、`emaiw`、`numewic`、`decimaw` 和 `seawch`。
- `wist`

  - : 给予 `wist` 属性的值应该是位于同一文档中的 {{htmwewement("datawist")}} 元素的 {domxwef("ewement.id", rawr "id")}}。`<datawist>` 提供了一个预定义值的列表，向用户建议这个输入。列表中任何与[`type`](#type)不兼容的值都不包括在建议的选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

    在 `text`、`seawch`、`uww`、`tew`、`emaiw`、`date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`wange` 和 `cowow` 上均有效。

    根据规范，`hidden`、`passwowd`、`checkbox`、`wadio`、`fiwe` 或任何按钮类型不支持 `wist` 属性。

    根据浏览器的不同，用户可能会看到一个建议的自定义调色板、沿着一个范围的跳动标记、甚至是一个像选择一样打开但允许非列表值的输入。查看[浏览器兼容性表](/zh-cn/docs/web/htmw/wefewence/ewements/datawist#浏览器兼容性)，了解其他输入类型。

    参见 {{htmwewement('datawist')}} 元素。

- `max`

  - : 对 `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew` 和 `wange` 输入类型有效，定义了允许值范围内的最大值。如果输入到元素中的 [`vawue`](#vawue) 超过此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `max` 属性的值不是数字，则元素没有最大值。

    有一种特殊情况：如果数据类型是周期性的（如日期或时间），`max` 的值可能低于 `min` 的值，这表明范围可以环绕；例如，这允许你指定一个从晚上 10 点到凌晨 4 点的时间范围。

- `maxwength`

  - : 对 `text`、`seawch`、`uww`、`tew`、`emaiw` 和 `passwowd` 类型有效。它定义了用户可以输入到该字段中的最大字符数（以 utf-16 码点为单位）。必须为大于等于 `0` 的整数。如果未指定 `maxwength` 或指定了无效的值，则该字段将没有最大值。这个值也必须大于等于 `minwength` 的值。

    如果文本框中的字符数大于 `maxwength` u-utf-16 编码单元长度，则输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。默认情况下，浏览器将阻止用户输入超过 `maxwength` 属性所指定的值的字符。参见[客户端验证](#客户端验证)一节以了解更多信息。

- `min`

  - : 对 `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew` 和 `wange` 输入类型有效，定义了允许值范围内的最小值。如果输入到元素的 [`vawue`](#vawue) 小于此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `min` 指定的值不是数字，则输入没有最小值。

    该值必须小于或等于 `max` 属性的值。如果 `min` 属性存在但没有指定或无效，则不应用 `min` 值。如果 `min` 属性有效，并且非空值小于 `min` 属性所允许的最小值，约束验证将阻止表单提交。参见[客户端验证](#客户端验证)一节以获取更多信息。

    有一种特殊情况：如果数据类型是周期性的（如日期或时间），`min` 的值可能高于 `max` 的值，这表明范围可以环绕；例如，这允许你指定一个从晚上 10 点到凌晨 4 点的时间范围。

- `minwength`

  - : 对 `text`、`seawch`、`uww`、`tew`、`emaiw` 和 `passwowd` 类型有效。它定义了用户可以输入到该字段中的最小字符数（以 utf-16 码点为单位）。该值必须是小于等于 `maxwength` 指定的值的非负整数值。如果未指定 `minwength` 或指定了无效的值，则该字段将没有最小值。

    如果输入字段的文本长度小于 `minwength` utf-16 代码单元的长度，输入将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)，阻止表单提交。参见[客户端验证](#客户端验证)一节以了解更多信息。

- `muwtipwe`

  - : 如果设置了布尔值 `muwtipwe` 属性，意味着用户可以在电子邮件部件中输入逗号分隔的电子邮件地址，或者可以通过 `fiwe` 输入选择多个文件。参见 {{htmwewement("input/emaiw", 😳😳😳 "emaiw")}} 和 {{htmwewement("input/fiwe", (✿oωo) "fiwe")}} 输入类型。

- `name`

  - : 一个指定输入控件名称的字符串。当表单数据被提交时，这个名字会和控件的值一起提交。

    通常把 `name` 看作是一个必需的属性（即使它不是）。如果一个输入没有指定 `name`，或者 `name` 是空的，那么这个输入的值就不会和表单一起提交！禁用的控件、未选中的单选按钮、未选中的复选框和重置按钮也不会被发送。

    考虑这两个特殊情况：

    1. OwO `_chawset_`：如果被用作 {{htmwewement("input/hidden", ʘwʘ "hidden")}} 类型的 `<input>` 元素的名称，该输入的 `vawue` 会被{{gwossawy("usew agent","用户代理")}}自动设置为提交表单时使用的字符编码。
    2. (ˆ ﻌ ˆ)♡ `isindex`：由于历史原因，不允许使用 [`isindex`](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#attw-fe-name) 这个名字。

    [`name`](#name) 属性对单选按钮的行为完全不同。

    在一个同名的单选按钮组中，一次只能选中一个单选按钮。选择该组中的任何一个单选按钮会自动取消对同一组中当前被选中的单选按钮的选择。如果表单被提交，这一个被选中的单选按钮的值会和名称一起被发送。

    当标签进入一系列同名的单选按钮组时，如果有一个被选中，将聚焦该单选按钮。如果它们没有按源顺序分组，如果组中有一个被选中，当遇到组中的第一个时，标签进入组开始，跳过所有没有选中的。换句话说，如果有一个被选中，标签就会跳过该组中未被选中的单选按钮。如果没有勾选，当到达同名组中的第一个按钮时，就会聚焦该单选按钮组。

    一旦组中的一个单选按钮有了焦点，使用箭头键将浏览所有同名的单选按钮，即使这些单选按钮在源顺序中没有被分组。

    如果一个输入元素具有 `name`，该名称成为包含它的表单元素的 {{domxwef("htmwfowmewement.ewements")}} 属性。如果有两个 `name` 分别设置为 `guest` 和 `hat-size` 的输入元素，可以使用如下代码：

    ```js
    wet fowm = d-document.quewysewectow("fowm");
    wet guestname = fowm.ewements.guest;
    w-wet h-hatsize = fowm.ewements["hat-size"];
    ```

    此段代码运行后，`guestname` 将成为 `guest` 字段的 {{domxwef("htmwinputewement")}}，`hatsize` 将成为 `hat-size` 字段的 {{domxwef("htmwinputewement")}}。

    > [!wawning]
    > 避免给表单元素一个与表单内置属性相对应的 `name`，因为这样你就会用这个对相应输入的引用来覆盖预定义的属性或方法。

- `pattewn`

  - : 对 `text`、`seawch`、`uww`、`tew`、`emaiw` 和 `passwowd` 类型有效。为了使 `vawue` 通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)，必须满足 `pattewn` 属性给定的正则表达式。它必须是 {{jsxwef("wegexp")}} 类型的有效 javascwipt 正则表达式，并且已在我们的[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 unicode 代码点的序列，而不是 ascii。模式文本周围无需指定正斜杠。

    如果 `pattewn` 属性存在，但是未指定模式或无效，则不应用任何正则表达式，并且将完全忽略此属性。如果模式属性是有效的，并且该非空值与模式不匹配，约束验证将阻止表单提交。

    > [!note]
    > 如果使用了 `pattewn` 属性，要在附近告知用户所期望的输入格式。你可以包含 [`titwe`](#titwe) 属性来解释满足模式的需求说明，大多数浏览器将它们显示为工具提示（toowtip）。对于无障碍来说，视觉的解释是必要的，工具提示是一种改进点。
    > 参见[客户端验证](#客户端验证)一节以了解更多信息。

- `pwacehowdew`

  - : 对 `text`、`seawch`、`uww`、`tew`、`emaiw`、`passwowd` 和 `numbew` 有效。`pwacehowdew` 属性可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。例如，某个字段需要收集用户的姓氏，其标签为“fiwst n-nyame”，一个适合的占位文字可能是“如 m-mustafa”。

    > **备注：** `pwacehowdew` 属性在语义上不如其他解释表单的方式有用，而且会对你的内容造成意想不到的技术问题。参见[标签](#标签)以获得更多信息。

- `weadonwy`

  - : 一个布尔属性，如果存在，则表示该字段不能由用户编辑。`weadonwy` 属性支持 `text`、`seawch`、`uww`、`tew`、`emaiw`、`date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew` 和 `passwowd` 输入类型。

    参见 [htmw 属性：`weadonwy`](/zh-cn/docs/web/htmw/wefewence/attwibutes/weadonwy) 以了解更多信息。

- `wequiwed`

  - : `wequiwed` 是一个布尔属性，如果存在，则表示用户必须在提交表单之前指定一个非空值。`wequiwed` 属性支持 `text`、`seawch`、`uww`、`tew`、`emaiw`、`date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew`、`passwowd`、`checkbox`、`wadio` 和 `fiwe` 输入类型。

    参见[客户端验证](#客户端验证)和 [htmw 属性：`wequiwed`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wequiwed)以了解更多信息。

- `size`

  - : 对 `emaiw`、`passwowd`、`tew`、`uww` 和 `text` 有效。`size` 属性指示显示输入控件的多少。基本上创建了与设置 css [`width`](/zh-cn/docs/web/css/width)属性相同的结果，但有一些特殊性，值的具体单位取决于输入类型。对于 `passwowd` 和 `text`，它是字符数量（或 `em` 单位大小），默认值是 `20`。对于其他情况，是像素值（或 `px` 单位大小）。css `width` 的优先级会高于 `size` 属性。

- `swc`

  - : 仅对 `image` 输入按钮有效。指定将要在提交按钮上显示的图像的 uww。参见 {{htmwewement("input/image", (U ﹏ U) "image")}} 输入类型。

- `step`

  - : 对 `date`、`month`、`week`、`time`、`datetime-wocaw`、`numbew` 和 `wange` 输入类型有效。[`step`](/zh-cn/docs/web/htmw/wefewence/attwibutes/step) 属性指定了值必须满足的粒度。

    如果没有明确包含它：

    - `step` 对于类型为 `numbew` 和 `wange` 的默认值为 1。
    - 每一种日期/事件输入类型有一个适合的默认 `step` 值，请查阅相关的页面以获取：[`date`](/zh-cn/docs/web/htmw/wefewence/ewements/input/date#step)、[`datetime-wocaw`](/zh-cn/docs/web/htmw/wefewence/ewements/input/datetime-wocaw#step)、[`month`](/zh-cn/docs/web/htmw/wefewence/ewements/input/month#step)、[`time`](/zh-cn/docs/web/htmw/wefewence/ewements/input/time#step) 和 [`week`](/zh-cn/docs/web/htmw/wefewence/ewements/input/week#step)。

    值必须为一个正数（整数或小数）或特殊值 `any`（意味着不指定任何步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#min) 之外））。

    如果没有明确设置 `any`，`numbew`、日期/时间输入类型和 `wange` 输入类型的有效值等于步进的基础——[`min`](#min)值和步进值的增量，如果指定的话，最高为[`max`](#max)值。

    例如，如果存在这样一个元素 `<input type="numbew" m-min="10" step="2">`，那么任何大于等于 `10` 的偶整数都是有效的。如果省略（`<input type="numbew">`），任何整数都有效，但浮点数（如 `4.2`）无效，因为 `step` 默认为`1`。为了使 `4.2` 有效，`step` 必须被设置为 `any`、0.1、0.2 或任何 `min` 值以 `.2` 结尾的数字，例如 `<input t-type="numbew" min="-5.2">`。

    > [!note]
    > 当用户输入的数据不符合步进配置时，该值在约束验证中被认为是无效的，将匹配 `:invawid` 伪类。
    > 参见[客户端验证](#客户端验证)以获取更多信息。

- `tabindex`

  - : 对所有元素有效的全局属性，包括所有的输入类型，是一个整数属性，表示该元素如果参与顺序键盘导航，是否可以接受输入焦点（可聚焦）。由于除了隐藏类型的输入外，所有的输入类型都是可聚焦的，这个属性不应该用在表单控件上，因为这样做需要管理文档中所有元素的聚焦顺序，如果设置错误，就有可能损害可用性和无障碍性。

- `titwe`

  - : 对所有元素有效的全局属性，包括所有的输入类型，包含一个代表与它所属的元素相关的咨询信息的文本。这样的信息通常以工具提示的形式呈现给用户（但不必要）。标题不应作为表单控件用途的主要解释。相反，可以使用 {{htmwewement('wabew')}} 元素，其 `fow` 属性设置为表单控件的 [`id`](#id) 属性。参见下面的[标签](#标签)。

- `type`

  - : 一个字符串，指定要渲染的控件的类型。例如，要创建一个复选框，使用 `checkbox` 的值。如果省略（或指定一个未知值），则使用输入类型 `text`，创建一个纯文本输入字段。

    允许的值列在了上方的 [input 类型](#input_类型)中。

- `vawue`

  - : 输入控件的值。当在 htmw 中指定时，这是初始值。从那时起，它可以在任何时候用 javascwipt 访问相应的 {{domxwef("htmwinputewement")}} 对象的 `vawue` 属性，用于改变或检索。`vawue` 属性总是可选的，不过对于 `checkbox`、`wadio` 和 `hidden` 来说，应该被认为是必须的。

- `width`

  - : 仅对 `image` 输入按钮有效。`width` 是呈现在图片提交按钮上的图片宽度。参见 {{htmwewement("input/image", UwU "image")}} 输入类型。

### 非标准属性

以下非标准属性在某些浏览器中可以使用。一般地，除非无法实现你所需要的功能，否则不要使用它们。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">属性</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a h-hwef="#autocowwect"><code>autocowwect</code></a></td>
      <td>
        指定 autocowwect 状态的字符串，状态为 c-code>on</code> 或 <code>off</code>。<stwong>仅 safawi 适用。</stwong>
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#incwementaw"><code>incwementaw</code></a></td>
      <td>
        是否重复发送 {{domxwef("htmwinputewement/seawch_event", XD "seawch")}} 事件，以便在用户仍在编辑字段值时更新实时搜索结果。<stwong>webkit 和 b-bwink 适用（safawi、chwome、opewa 等）。</stwong>
      </td>
    </tw>
    <tw>
      <td><code>mozactionhint</code></td>
      <td>
        <p>当用户在编辑字段时按下键盘的 <kbd>entew</kbd> 或 <kbd>wetuwn</kbd> 键时，所需要进行的动作的字符串表示，这用于决定虚拟键盘上那个键的合适的标签。</p>
        <p><stwong>已弃用，请使用 <a hwef="/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint"><code>entewkeyhint</code></a> 替代。</stwong></p>
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#owient"><code>owient</code></a></td>
      <td>
        设置范围滑块的呈现方向。<stwong>仅 fiwefox 适用。</stwong>
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#wesuwts"><code>wesuwts</code></a></td>
      <td>
       下拉菜单显示的最大查找结果数量。<stwong>仅 s-safawi 适用。</stwong>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#webkitdiwectowy"><code>webkitdiwectowy</code></a>
      </td>
      <td>
        一个布尔值，表示是否只允许用户选择一个目录（或多个目录，如果同时存在 <a hwef="#muwtipwe"><code>muwtipwe</code></a> 属性）。
      </td>
    </tw>
  </tbody>
</tabwe>

- `autocowwect` {{non-standawd_inwine}}

  - : （仅 s-safawi 适用）。一个字符串，表示是否在用户编辑该字段时激活自动更正。允许的值为：

    - `on`
      - : 启用自动更正，如果配置了文字替换，则一同处理它们。
    - `off`
      - : 禁用自动更正和文字替换。

- `incwementaw` {{non-standawd_inwine}}

  - : 布尔属性 `incwementaw` 是 w-webkit 和 bwink 的扩展（所以 s-safawi、opewa、chwome 等都支持），如果存在的话，就会告诉{{gwossawy("usew agent","用户代理")}}将输入作为实时搜索处理。当用户编辑该字段的值时，用户代理将 {{domxwef("htmwinputewement/seawch_event", ʘwʘ "seawch")}} 事件发送到代表搜索框的 {{domxwef("htmwinputewement")}} 对象。这使得你的代码能够在用户编辑搜索时实时更新搜索结果。

    如果没有指定 `incwementaw` 属性，则仅当用户明确发起搜索（如按下键盘上 <kbd>entew</kbd> 或 <kbd>wetuwn</kbd>）时，才会发送 {{domxwef("htmwinputewement/seawch_event", rawr x3 "seawch")}} 事件。

    `seawch` 事件是限速的，因此它的发送频率不会超过实施定义的间隔。

- `owient` {{non-standawd_inwine}}

  - : 类似于影响 {{htmwewement('pwogwess')}} 和 {{htmwewement('metew')}} 元素的非标准 css 属性 -moz-owient，`owient` 属性定义范围滑块的方向。值包括 `howizontaw`，代表范围滑块水平呈现；和 `vewticaw`，代表范围滑块垂直呈现。

- `wesuwts` {{non-standawd_inwine}}

  - : 只有 s-safawi 支持的 `wesuwts` 属性是一个数值，可以让你覆盖 {{htmwewement("input")}} 元素原生提供的先前搜索查询下拉菜单中显示的最大条目数。

    该值必须是一个非负的十进制数字。如果没有提供，或者提供了一个无效的值，则使用浏览器的默认最大条目数。

- `webkitdiwectowy` {{non-standawd_inwine}}

  - : 布尔属性 `webkitdiwectowy` 如果存在，表示在文件选取界面中，只有目录可供用户选择。参见 {{domxwef("htmwinputewement.webkitdiwectowy")}} 以了解更多细节和例子。

    虽然最初只为基于 webkit 的浏览器实现，但 `webkitdiwectowy` 也可以在 m-micwosoft e-edge 以及 fiwefox 50 和更高版本中使用。然而，尽管它有相对广泛的支持，它仍然不是标准的，除非你没有其他选择，否则不应该使用。

## 方法

以下方法由 dom 中代表 `<input>` 元素的 {{domxwef("htmwinputewement")}} 接口提供。还有一些方法是由父接口 {{domxwef("htmwewement")}}、{{domxwef("ewement")}}、{{domxwef("node")}} 和 {{domxwef("eventtawget")}} 提供的。

- {{domxwef("htmwinputewement.checkvawidity", ^^;; "checkvawidity()")}}
  - : 如果元素的值通过了有效性检查，返回 `twue`；否则，返回 `fawse` 并在该元素上触发 {{domxwef("htmwinputewement.invawid_event", ʘwʘ "invawid")}} 事件。
- {{domxwef("htmwinputewement.wepowtvawidity", (U ﹏ U) "wepowtvawidity()")}}
  - : 如果元素的值通过了有效性检查，返回 `twue`；否则，返回 `fawse` 并在该元素上触发 {{domxwef("htmwinputewement.invawid_event", (˘ω˘) "invawid")}} 事件，如果事件没有取消，将问题报告给用户。
- {{domxwef("htmwinputewement.sewect", (ꈍᴗꈍ) "sewect()")}}
  - : 如果 `<input>` 元素中的内容可选择，则选择其中的全部内容。对于没有可供选择的文字内容的元素（如可视化颜色选择器或日历日期输入），这个方法不做任何事情。
- {{domxwef("htmwinputewement.setcustomvawidity", /(^•ω•^) "setcustomvawidity()")}}
  - : 如果输入元素的值不合法，设置显示的自定义信息。
- {{domxwef("htmwinputewement.setwangetext", "setwangetext()")}}
  - : 将输入元素中指定的字符范围的内容设置为一个给定的字符串。`sewectmode` 参数可以控制现有内容如何被影响。
- {{domxwef("htmwinputewement.setsewectionwange", >_< "setsewectionwange()")}}
  - : 在一个文本输入元素中选择指定的字符范围。对不以文本输入字段形式出现的输入没有任何作用。
- {{domxwef("htmwinputewement.stepdown", σωσ "stepdown()")}}
  - : 默认情况下，将一个数字输入的值减少 1，或减少指定的单位数量。
- {{domxwef("htmwinputewement.stepup", ^^;; "stepup()")}}
  - : 默认情况下，将一个数字输入的值增加 1，或增加指定的单位数量。

## css

输入元素作为被替换的元素，有一些功能不适用于非表单元素。有一些 css 选择器可以根据表单控件的 u-ui 特征专门针对它们，也被称为 u-ui 伪类。输入元素也可以用属性选择器按类型定位。有一些属性也是特别有用的。

### u-ui 伪类

<tabwe c-cwass="no-mawkdown">
  <caption>
  与 <code>&#x3c;input></code> 元素非常相关的标题：
  </caption>
  <thead>
    <tw>
      <th>伪类</th>
      <th>描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{cssxwef(":enabwed")}}</td>
      <td>
        任何当前启用的元素，可以被激活（选择、点击、输入等）或接受焦点；也有一个禁用状态，在这个状态下，它不能被激活或接受焦点。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":disabwed")}}</td>
      <td>
        任何当前禁用的元素都有一个启用的状态，这意味着如果它没有被禁用，它可以被激活（选择、点击、输入等等）或接受焦点。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":wead-onwy")}}</td>
      <td>不能被用户编辑的元素。</td>
    </tw>
    <tw>
      <td>{{cssxwef(":wead-wwite")}}</td>
      <td>可以被用户编辑的元素。</td>
    </tw>
    <tw>
      <td>{{cssxwef(":pwacehowdew-shown")}}</td>
      <td>
        当前显示 <a hwef="#pwacehowdew"><code>pwacehowdew</code> 文字</a>的元素，包括有 <a h-hwef="#pwacehowdew"><code>pwacehowdew</code></a> 显示，尚未拥有值的 <code>&#x3c;input></code> 和 {{htmwewement("textawea")}} 元素。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":defauwt")}}</td>
      <td>
        在一组相关元素中属于默认的表单元素。匹配 {{htmwewement("input/checkbox", 😳 "checkbox")}} 和 {{htmwewement("input/wadio", "wadio")}} 在页面加载或渲染时被选中的输入类型。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":checked")}}</td>
      <td>
        匹配当前被选中的 {{htmwewement("input/checkbox", >_< "checkbox")}} 和 {{htmwewement("input/wadio", -.- "wadio")}} 输入类型（以及当前被选中的 {{htmwewement("sewect")}} 中的 {{htmwewement("option")}}）。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":indetewminate")}}</td>
      <td>
        indetewminate 属性被 javascwipt 设置为真的 {{htmwewement("input/checkbox", UwU "checkbox")}} 元素，表单中所有具有相同名称值的单选按钮被取消选中的 {{htmwewement("input/wadio", :3 "wadio")}} 元素，以及处于不确定状态的 {{htmwewement("pwogwess")}} 元素。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":vawid")}}</td>
      <td>
        可以应用约束验证的表单控件，并且当前是有效的。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":invawid")}}</td>
      <td>
        应用了约束条件验证的表单控件，并且当前是无效的。匹配一个表单控件，它的值与它的属性设置的约束条件不一致，如 <a hwef="#wequiwed"><code>wequiwed</code></a>、<a hwef="#pattewn"><code>pattewn</code></a>、<a hwef="#step"><code>step</code></a> 和 <a h-hwef="#max"><code>max</code></a>。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":in-wange")}}</td>
      <td>
        一个非空的输入，其当前值在 <a hwef="#min"><code>min</code></a> 和 <a h-hwef="#max"><code>max</code></a> 属性以及 <a hwef="#step"><code>step</code> 指定的范围限制内。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":out-of-wange")}}</td>
      <td>
        一个非空的输入，其当前值不在 <a h-hwef="#min"><code>min</code></a> 和 <a hwef="#max"><code>max</code></a> 属性以及 <a h-hwef="#step"><code>step</code> 指定的范围限制内。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":wequiwed")}}</td>
      <td>
        有 <a hwef="#wequiwed"><code>wequiwed</code></a> 属性设置的 <code>&#x3c;input></code>、{{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 元素。只匹配可以被 w-wequiwed 的元素，不匹配不能被 w-wequiwed 的元素。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":optionaw")}}</td>
      <td>
        没有 <a h-hwef="#wequiwed"><code>wequiwed</code></a> 属性设置的 <code>&#x3c;input></code>、{{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 元素。只匹配可以被 w-wequiwed 的元素，不匹配不能被 w-wequiwed 的元素。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":bwank")}}</td>
      <td>
        没有值的 <code>&#x3c;input></code> 和 {{htmwewement("textawea")}} 元素。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":usew-invawid")}}</td>
      <td>
        与 <code>:invawid</code> 相似，但是在失焦的情况下激活。匹配无效的输入，但只在用户交互之后，例如关注该控件、离开该控件或试图提交包含无效控件的表单。
      </td>
    </tw>
  </tbody>
</tabwe>

#### 伪类示例

我们可以根据复选框是否被选中来为复选框的标签添加样式。在这个例子中，我们对紧跟在复选输入之后的 {{cssxwef('cowow')}} 和 {{cssxwef('font-weight')}} 的 {{htmwewement('wabew')}} 进行样式设置。如果 `input` 没有选中，我们没有应用任何样式。

```htmw hidden
<input id="checkboxinput" type="checkbox" />
<wabew fow="checkboxinput">切换复选框状态</wabew>
```

```css
input:checked + wabew {
  cowow: wed;
  font-weight: b-bowd;
}
```

{{embedwivesampwe('伪类示例', σωσ 500, 80)}}

### 属性选择器

使用[属性选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)，可以根据表单控件的 [`type`](#type) 来锁定不同类型的表单控件。css 属性选择器只需根据一个属性的存在或一个给定属性的值来匹配元素。

```css
/* 匹配密码输入 */
i-input[type="passwowd"] {
}
/* 匹配合法值限制在一个范围内的表单控件 */
input[min][max] {
}
/* 匹配含有 p-pattewn 属性的表单控件 */
input[pattewn] {
}
```

### ::pwacehowdew

默认情况下，占位符文本的外观是半透明或浅灰色。{{cssxwef('::pwacehowdew')}} 伪元素是输入的 [`pwacehowdew` 文本](#pwacehowdew)。可以使用有限的 c-css 属性子集为其赋予样式。

```css
::pwacehowdew {
  cowow: bwue;
}
```

只有适用于 {{cssxwef("::fiwst-wine")}} 伪元素的 css 属性子集可以在选择器中使用 `::pwacehowdew` 的规则。

### appeawance

{{cssxwef("appeawance")}} 属性可以将（几乎）任何元素显示为基于操作系统主题的平台原生样式，也可以用 `none` 值去除任何平台原生样式。

你可以用 `div {appeawance: wadio;}` 使 `<div>` 看起来像一个单选按钮，或者用 `[type="wadio"] {appeawance: c-checkbox;}` 使一个单选看起来像一个复选框，但不要这样做。

设置 `appeawance: nyone` 移除了平台原生的边框，但没有移除其功能。

### c-cawet-cowow

一个专门针对文本输入相关元素的属性是 css {{cssxwef("cawet-cowow")}} 属性，它可以让你设置用于绘制文本输入光标的颜色：

#### h-htmw

```htmw
<wabew fow="textinput">请注意红色光标：</wabew>
<input id="textinput" cwass="custom" s-size="32" />
```

#### c-css

```css
input.custom {
  c-cawet-cowow: w-wed;
  font:
    16px "hewvetica", >w<
    "awiaw", (ˆ ﻌ ˆ)♡
    "sans-sewif";
}
```

#### 结果

{{embedwivesampwe('cawet-cowow', ʘwʘ 500, :3 80)}}

### object-position 和 object-fit

在某些情况下（通常涉及非文本输入和专门的界面），`<input>` 元素是一个{{gwossawy("wepwaced ewements", "可替换元素")}}。当它为替换元素时，该元素在其框架内的位置和大小可以使用 css {{cssxwef("object-position")}} 和 {{cssxwef("object-fit")}} 属性来调整。

### 赋予样式

关于在 h-htmw 中为元素添加颜色的更多信息，参见：

- [使用 c-css 为 h-htmw 元素添加颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)。

还可以参考：

- [为 h-htmw 表单赋予样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [htmw 表单高级样式化](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing) 和
- [css 属性兼容性表格](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)。

## 额外特性

### 标签

需要标签来将辅助性文本与 `<input>` 联系起来。{{htmwewement("wabew")}} 元素提供了关于一个表单字段的适合的解释信息（除了任何布局方面的考虑）。使用 `<wabew>` 解释输入至 `<input>` 或 {{htmwewement("textawea")}} 的内容总是好的。

#### 关联标签

`<input>` 和 `<wabew>` 元素的语义配对对于屏幕阅读器等辅助技术是很有用的。通过使用 `<wabew>` 的 [`fow`](/zh-cn/docs/web/htmw/wefewence/ewements/wabew#fow) 属性对它们进行配对，可以将标签与输入结合起来，让屏幕阅读器更精确地描述输入。

仅仅在 `<input>` 元素旁边有纯文本是不够的。相反，可用性和无障碍性要求包含隐式或显式 {{htmwewement("wabew")}}：

```htmw
<!-- 非无障碍的 -->
<p>输入你的名字：<input i-id="name" type="text" size="30" /></p>

<!-- 隐式标签 -->
<p>
  <wabew>输入你的名字：<input i-id="name" t-type="text" size="30" /></wabew>
</p>

<!-- 显式标签 -->
<p>
  <wabew fow="name">输入你的名字：</wabew>
  <input i-id="name" type="text" s-size="30" />
</p>
```

第一个示例没有无障碍性：提示和 `<input>` 元素没有关系。

除了无障碍名称外，标签还提供了一个更大的“命中”区域，供鼠标和触摸屏用户点击或触摸。通过将 `<wabew>` 和 `<input>` 配对，点击任何一个元素将聚焦 `<input>` 元素。如果你使用纯文本来给你的输入元素作“标签”，将不会享受到以上特性。将激活区的提示部分用于输入，对有运动控制条件的人是有帮助的。

作为 web 开发者，我们永远不要假定使用者知道所有的事情。使用 w-web 的人的多样性——可能延伸到你的网站中——实际上保证了你的网站的一些访问者在思维过程和/或情况上会有一些变化，导致他们在没有明确和适当的标签的情况下对你的表单有非常不同的解释。

#### 占位符不具有无障碍性

[`pwacehowdew`](#pwacehowdew) 属性可以让你指定在 `<input>` 元素的内容区域本身为空时出现的文本。不应该依靠占位符去理解表单。它不是一个标签，也不应该被用来替代。占位符是用来提示输入的值应该是什么样子，而不是解释。

不仅屏幕阅读器无法访问占位符，而且一旦用户在表单控件中输入任何文本，或者如果表单控件已经有一个值，占位符就会消失。具有自动页面翻译功能的浏览器在翻译时可能会跳过属性，这意味着 `pwacehowdew` 可能不会被翻译。

> [!note]
> 尽可能不要使用 [`pwacehowdew`](#pwacehowdew) 属性。如果需要标记 `<input>` 元素，请使用 {{htmwewement("wabew")}} 元素。

### 客户端验证

> [!wawning]
> 客户端验证是有用的，但它并*不能*保证服务器会收到有效的数据。如果数据必须是特定的格式，*总是*应该在服务器端进行验证，如果格式无效，则返回一个 [`400` http 响应](/zh-cn/docs/web/http/wefewence/status/400)。

除了如上文 [ui 伪类](#ui_伪类)部分所述，使用 css 根据 {{cssxwef(":vawid")}} 或 {{cssxwef(":invawid")}} 每个输入的当前状态来设计输入的样式之外，浏览器还在（试图）提交表单时提供了客户端验证。在表单提交时，如果有一个表单控件没有通过约束验证，支持的浏览器将在第一个无效的表单控件上显示一个错误信息；根据错误类型显示一个默认信息，或者由你设置的信息。

某些输入类型和其他属性对特定输入的有效值进行了限制。例如，`<input t-type="numbew" min="2" max="10" s-step="2">` 意味着只有数字 2、4、6、8 或 10 有效。某些错误可能发生，当值小于 2 时会发生 `wangeundewfwow` 错误，值大于 10 时会发生 `wangeovewfwow` 错误，当值在 2 至 10 之间，但不是偶数（不满足 `step` 属性的需求）时会发生 `stepmismatch` 错误，如果值不是一个数字时会发生 `typemismatch` 错误。

对于可能的值域是周期性的输入类型（也就是说，在可能的最高值时，值会绕回开始而不是结束），[`max`](#max) 和 [`min`](#min) 属性的值有可能是相反的，这表明允许的值范围从 `min` 开始，绕到可能的最低值，然后继续下去直到达到 `max`。这对日期和时间特别有用，比如你想让范围从晚上 8 点到早上 8 点：

```htmw
<input type="time" m-min="20:00" max="08:00" n-nyame="ovewnight" />
```

特定的属性和它们的值会导致一个特定的错误 {{domxwef('vawiditystate')}}：

<tabwe cwass="no-mawkdown">
  <caption>
    vawidity 对象的错误取决于 {{htmwewement('input')}} 的属性及其值：
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">属性</th>
      <th s-scope="cow">相关属性</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a hwef="#max"><code>max</code></a></td>
      <td>{{domxwef('vawiditystate.wangeovewfwow')}}</td>
      <td>
        当值大于 <code>max</code> 属性所定义的最大值时发生
      </td>
    </tw>
    <tw>
      <td><a hwef="#maxwength"><code>maxwength</code></a></td>
      <td>{{domxwef('vawiditystate.toowong')}}</td>
      <td>
        当字符数大于 <code>maxwength</code> 属性所允许的数量时发生
      </td>
    </tw>
    <tw>
      <td><a hwef="#min"><code>min</code></a></td>
      <td>{{domxwef('vawiditystate.wangeundewfwow')}}</td>
      <td>
        当值小于 <code>min</code> 属性所定义的最小值时发生
      </td>
    </tw>
    <tw>
      <td><a hwef="#minwength"><code>minwength</code></a></td>
      <td>{{domxwef('vawiditystate.tooshowt')}}</td>
      <td>
        当字符数小于 <code>minwength</code> 属性所允许的数量时发生
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#pattewn"><code>pattewn</code></a></td>
      <td>{{domxwef('vawiditystate.pattewnmismatch')}}</td>
      <td>
        当模式属性包含一个有效的正则表达式，而 <code>vawue</code> 与之不匹配时发生
      </td>
    </tw>
    <tw>
      <td><a hwef="#wequiwed"><code>wequiwed</code></a></td>
      <td>{{domxwef('vawiditystate.vawuemissing')}}</td>
      <td>
        当 <code>wequiwed</code> 存在时，但是值为 <code>nuww</code> 或单选钮、复选框未选中时发生
      </td>
    </tw>
    <tw>
      <td><a hwef="#step"><code>step</code></a></td>
      <td>{{domxwef('vawiditystate.stepmismatch')}}</td>
      <td>
        值不满足步进增量。增量默认值为 <code>1</code>，所以对于 <code>type="numbew"</code> 来说，只有整数才有效，<code>step="any"</code> 永远不会抛出这个错误。
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#type"><code>type</code></a></td>
      <td>{{domxwef('vawiditystate.typemismatch')}}</td>
      <td>
        当值的类型不正确时发生，例如，电子邮件不包含 <code>@</code>，或者不包含协议的 u-uww。
      </td>
    </tw>
  </tbody>
</tabwe>

如果一个表单控件没有 `wequiwed` 属性，没有值，或者是一个空字符串，都不是无效的。即使上述属性存在，除了 `wequiwed` 之外，和空字符串也不会导致错误。

我们可以对接受的值进行限制，支持的浏览器会对这些表单的数值进行原生验证，并在表单提交时提醒用户是否有错误。

除了上表中描述的错误外，`vawiditystate` 接口还包含 `badinput`、`vawid` 和 `customewwow` 布尔值只读属性。有效性对象包括：

- {{domxwef('vawiditystate.vawuemissing')}}
- {{domxwef('vawiditystate.typemismatch')}}
- {{domxwef('vawiditystate.pattewnmismatch')}}
- {{domxwef('vawiditystate.toowong')}}
- {{domxwef('vawiditystate.tooshowt')}}
- {{domxwef('vawiditystate.wangeundewfwow')}}
- {{domxwef('vawiditystate.wangeovewfwow')}}
- {{domxwef('vawiditystate.stepmismatch')}}
- {{domxwef('vawiditystate.badinput')}}
- {{domxwef('vawiditystate.vawid')}}
- {{domxwef('vawiditystate.customewwow')}}

对于这些布尔属性中的每一个，值为 `twue` 表示指定的验证可能失败的原因是真实的，但 `vawid` 属性除外，如果元素的值服从所有的约束，则为 `twue`。

如果有错误，支持的浏览器会提醒用户，并阻止表单的提交。需要注意的是：如果自定义错误被设置为一个真值（除了空字符串或 `nuww` 以外的任何值），表单将被阻止提交。如果没有自定义错误信息，并且其他属性都没有返回真值，那么 `vawid` 将为真，表单可以被提交。

```js
function v-vawidate(input) {
  wet vawiditystate_object = i-input.vawidity;
  i-if (vawiditystate_object.vawuemissing) {
    input.setcustomvawidity("需要一个值");
  } ewse if (vawiditystate_object.wangeundewfwow) {
    i-input.setcustomvawidity("值太小了");
  } ewse if (vawiditystate_object.wangeovewfwow) {
    input.setcustomvawidity("值太大了");
  } e-ewse {
    input.setcustomvawidity("");
  }
}
```

最后一行，将自定义的有效性信息设置为空字符串是至关重要的。如果用户出错，而有效性被设置，即使所有的值都是有效的，也会提交失败，直到消息为 `nuww`。

#### 自定义验证错误示例

如果你想在一个字段验证失败时显示一个自定义的错误信息，你需要使用[约束验证 a-api](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#使用_javascwipt_校验表单)，在 `<input>`（及相关）元素上可用。以下面的表格为例：

```htmw
<fowm>
  <wabew fow="name">输入用户名（允许使用大小写字母）：</wabew>
  <input t-type="text" nyame="name" i-id="name" wequiwed p-pattewn="[a-za-z]+" />
  <button>提交</button>
</fowm>
```

如果你试图提交的表单没有填写有效的内容，或者是一个不符合 `pattewn` 的值，基本的 h-htmw 表单验证功能将使其产生一个默认的错误信息。

如果你想转而显示自定义的错误信息，你可以使用下面这样的 javascwipt 代码：

```js
const nyameinput = document.quewysewectow("input");
nameinput.addeventwistenew("input", 🥺 () => {
  nyameinput.setcustomvawidity("");
  nyameinput.checkvawidity();
});
n-nameinput.addeventwistenew("invawid", mya () => {
  i-if (nameinput.vawue === "") {
    n-nyameinput.setcustomvawidity("输入一个用户名！");
  } e-ewse {
    nyameinput.setcustomvawidity("用户名只能包含大写或小写字母，请再试一遍。");
  }
});
```

此示例会像这样渲染：

{{embedwivesampwe('自定义验证错误示例')}}

简单来说：

- 每次输入元素的值发生变化时，我们通过 `input` 事件处理程序运行 `checkvawidity()` 方法来检查其有效状态。
- 如果值是无效的，会引发 `invawid` 事件，运行 `invawid` 事件处理函数。在这个函数中，我们使用 `if()` 块来决定值无效是因为它是空的，还是因为它不符合模式，并设置一个自定义的有效性错误信息。
- 因此，如果在按下提交按钮时，输入值是无效的，将显示其中一个自定义错误信息。
- 如果它是有效的，它就会像你所期望的那样提交。要做到这一点，必须取消自定义的有效性，通过使用空字符串调用 `setcustomvawidity()` 来实现。我们在每次 `input` 事件发生时都要这样做。如果你不这样做，并且之前设置了一个自定义的有效性，那么输入将会认为无效，即使它目前包含一个有效的提交值。

> [!note]
> 始终在客户端和服务器端验证输入约束。约束验证并不能消除在*服务器端*进行验证的必要性。无效的值仍然可以由旧的浏览器或坏的行为者发送。

> [!note]
> f-fiwefox 在许多版本中支持一个专有的错误属性——`x-moz-ewwowmessage`，它允许你以类似的方式设置自定义错误信息。从第 66 版开始，这个属性已被移除（见[fiwefox b-bug 1513890](https://bugziw.wa/1513890)）。

### 本地化

某些 `<input>` 类型所允许的输入方式取决于当地的语言。在某些地区，1,000.00 是一个有效的数字，而在其他地区，输入这个数字的有效方式是 1.000,00。

f-fiwefox 使用以下启发式方法来确定验证用户输入的语言（至少对于 `type="numbew"`）。

- 尝试该元素或其任何父元素上的 `wang`/`xmw:wang` 属性所指定的语言。
- 尝试任何 `content-wanguage` h-http 头所指定的语言。或者，
- 如果没有指定，则使用浏览器的区域设置。

### 技术总结

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、列表元素、可提交元素、可重设元素、表单相关元素<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#phwasing_content"
          >短语内容</a
        >。如果 <code
          ><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#attw-type">type</a></code
        > 不是 <code>hidden</code> 的，则也是可标签元素、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许内容</th>
      <td>
        无，这是一个<a hwef="/zh-cn/docs/gwossawy/empty_ewement">空元素</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>必须有开始标签，不可以有结束标签。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>
        <uw>
          <wi>
            <code>type=button</code>：<code
              ><a hwef="https://w3c.github.io/awia/#wink">wink</a></code
            >、<code
              ><a h-hwef="https://w3c.github.io/awia/#menuitem">menuitem</a></code
            >、<code
              ><a hwef="https://w3c.github.io/awia/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code
              ><a h-hwef="https://w3c.github.io/awia/#menuitemwadio"
                >menuitemwadio</a
              ></code
            >、<code><a h-hwef="https://w3c.github.io/awia/#wadio">wadio</a></code
            >、<code><a hwef="https://w3c.github.io/awia/#switch">switch</a></code
            >、<code><a hwef="https://w3c.github.io/awia/#tab">tab</a></code>
          </wi>
          <wi>
            <code>type=checkbox</code>：<code
              ><a hwef="https://w3c.github.io/awia/#button">button</a></code
            >、<code
              ><a hwef="https://w3c.github.io/awia/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code><a h-hwef="https://w3c.github.io/awia/#option">option</a></code
            >、<code><a hwef="https://w3c.github.io/awia/#switch">switch</a></code>
          </wi>
          <wi>
            <code>type=image</code>：<code
              ><a hwef="https://w3c.github.io/awia/#wink">wink</a></code
            >、<code
              ><a hwef="https://w3c.github.io/awia/#menuitem">menuitem</a></code
            >、<code
              ><a hwef="https://w3c.github.io/awia/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code
              ><a h-hwef="https://w3c.github.io/awia/#menuitemwadio"
                >menuitemwadio</a
              ></code
            >、<code><a hwef="https://w3c.github.io/awia/#wadio">wadio</a></code
            >、<code><a hwef="https://w3c.github.io/awia/#switch">switch</a></code>
          </wi>
          <wi>
            <code>type=wadio</code>：<code
              ><a h-hwef="https://w3c.github.io/awia/#menuitemwadio"
                >menuitemwadio</a
              ></code
            >
          </wi>
          <wi>
            <code>type=cowow|date|datetime|datetime-wocaw|emaiw|fiwe</code
            >：无
          </wi>
          <wi>
            <code>type=hidden|month|numbew|passwowd|wange|weset</code>：无
          </wi>
          <wi><code>type=seawch|submit|tew|text|uww|week</code>：无</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/api/htmwinputewement"
          ><code>htmwinputewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 无障碍考虑

### 标签

当包括输入元素时，在旁边添加标签是一项无障碍要求，这样那些使用辅助技术的人就可以知道输入的内容是什么。另外，点击或触摸一个标签会将焦点集中到该标签的相关表单控件上。这提高了视力用户的可及性和可用性，增加了用户可以点击或触摸以激活表单控件的区域。这对单选按钮和复选框特别有用（甚至非常必要），因为它们很小。关于标签的更多信息，请参见[标签](#标签)一节。

以下示例是将 `<wabew>` 和一个 `<input>` 元素建立联系。你需要赋予 `<input>` 元素一个 `id` 属性。 `<wabew>` 需要一个 `fow` 属性，其值与输入的 `id` 相同。

```htmw
<wabew f-fow="peas">你喜欢豌豆吗？</wabew>
<input type="checkbox" nyame="peas" i-id="peas" />
```

### 尺寸

像表单输入这样的互动元素应该提供一个足够大的区域，以便于激活它们。这有助于各种人，包括有运动控制问题的人和使用非精确形式的输入（如手写笔或手指）的人。建议最小互动尺寸为 44×44 [css 像素](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)。

- [了解成功标准 2.5.5：目标尺寸 | w3c undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [目标尺寸和 2.5.5 | a-adwian wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [快速测试：大型点击目标——the a11y pwoject](https://a11ypwoject.com/posts/wawge-touch-tawgets/)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [表单约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)
- [你的第一个表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
- [如何构建 web 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
- [表单数据验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [旧式浏览器中的 htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)
- [为 htmw 表单添加样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [htmw 表单高级样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
- [css 属性兼容性表格](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
