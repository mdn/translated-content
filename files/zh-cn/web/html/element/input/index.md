---
title: <input>：输入（表单输入）元素
slug: Web/HTML/Element/Input
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<input>`** 元素用于为基于 Web 的表单创建交互式控件，以便接受来自用户的数据。取决于设备和{{Glossary("user agent", "用户代理")}}不同，表单可以使用各种类型的输入数据和控件小部件。`<input>` 元素是目前是 HTML 中最强大、最复杂的元素之一，因为它有大量的输入类型和属性组合。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> 类型

`<input>` 的工作方式相当程度上取决于 [`type`](#type) 属性的值，不同的 type 值会在各自的参考页中进行介绍。如果未指定此属性，则采用的默认类型为 `text`。

可用的值包括：

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>类型</th>
      <th>描述</th>
      <th>基本示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>没有默认行为的按钮，上面显示 <a href="#value"><code>value</code></a> 属性的值，默认为空。</td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>复选框，可将其值设为选中或未选中。</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。</td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。</td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>	编辑邮箱地址的区域。类似 <code>text</code> 输入，但在支持的浏览器和带有动态键盘的设备上会有验证参数和相应的键盘。</td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>让用户选择文件的控件。使用 <a href="#accept"><code>accept</code></a> 属性规定控件能选择的文件类型。
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>不显示的控件，其值仍会提交到服务器。举个例子，右边就是一个隐形的控件。</td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>图形化 <code>submit</code> 按钮。显示的图像由 <code>src</code> 属性决定。如果 <a href="#src"><code>src</code></a> 属性缺失，就会显示 <a href="#alt"><code>alt</code></a> 的内容。 </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>输入年和月的控件，没有时区。</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>用于输入数字的控件。如果支持的话，会显示滚动按钮并提供缺省验证（即只能输入数字）。拥有动态键盘的设备上会显示数字键盘。</td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>单行的文本区域，其值会被遮盖。如果站点不安全，会警告用户。</td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>单选按钮，允许在多个拥有相同 <a href="#name"><code>name</code></a> 值的选项中选中其中一个。</td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用 <a href="#min"><code>min</code></a> 和 <a href="#max"><code>max</code></a> 来规定可接受值的范围。</td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>此按钮将表单的所有内容重置为默认值。不推荐使用该类型。</td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。</td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>用于提交表单的按钮。</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。</td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>默认值。单行的文本字段，输入值中的换行会被自动去除。</td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>用于输入时间的控件，不包括时区。</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>用于输入 URL 的控件。类似 <code>text</code> 输入，但有验证参数，在支持动态键盘的设备上有相应的键盘。
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>用于输入以年和周数组成的日期，不带时区。</td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">废弃的值</th>
    </tr>
    <tr>
      <td><code>datetime</code></td>
      <td>
        {{deprecated_inline}}用于输入基于 UTC 时区的日期和时间（时、分、秒及秒的小数部分）。
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75)}}
      </td>
    </tr>
  </tbody>
</table>

## 属性

`<input>` 元素由于拥有诸多属性而异常强大，其中前文举例说明的 [`type`](#type) 属性尤其重要。由于所有 `<input>` 元素无论是哪种 `type`，都基于 {{domxref("HTMLInputElement")}} 接口，所以理论上说，它们共享一套相同的属性。但实际上大部分属性只作用于特定一组 `type`。此外，一些属性作用于 `<input>` 的方式取决于 `<input>` 的 `type` 属性，不同的 `type` 有不同的效果。

下面的表格列出了所有属性，每个属性都有简短的描述。表格后的列表更详细地描述了各个属性及它们与哪些 input 类型相关。与大部分或者全部 input 类型都相关的属性会讲述更多细节。一些针对特定 input 类型的属性，或者所有 input 类型都有，但在特定的 input 类型上有特定表现的属性，会在相应的类型页面中说明。这个元素包含全局属性，一些针对 `<input>` 元素有额外意义的全局属性也会特别说明。

`<input>` 元素包含的属性包含[全局的 HTML 属性](/zh-CN/docs/Web/HTML/Global_attributes)和以下这些额外属性：

| 属性                                | 类型                                                                 | 描述                                                                       |
| ----------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`accept`](#accept)                 | `file`                                                               | 文件上传控件中预期文件类型的提示                                           |
| [`alt`](#alt)                       | `image`                                                              | 图片类型的 alt 属性。对无障碍是必需的                                      |
| [`autocomplete`](#autocomplete)     | 除了 `checkbox`、`radio` 和按钮以外                                  | 表单自动填充特性提示                                                       |
| [`capture`](#capture)               | `file`                                                               | 文件上传控件中媒体捕获方法的提示                                           |
| [`checked`](#checked)               | `checkbox`、`radio`                                                  | 控件是否选中                                                               |
| [`dirname`](#dirname)               | `search`、`text`                                                     | 表单字段的名称，用于在提交表单时发送元素的方向性                           |
| [`disabled`](#disabled)             | 所有类型                                                             | 表单控件是否禁用                                                           |
| [`form`](#form)                     | 所有类型                                                             | 将控件联系到表单元素中                                                     |
| [`formaction`](#formaction)         | `image`、`submit`                                                    | 要提交表单的 URL 地址                                                      |
| [`formenctype`](#formenctype)       | `image`、`submit`                                                    | 提交表单时使用的表单数据编码类型                                           |
| [`formmethod`](#formmethod)         | `image`、`submit`                                                    | 提交表单时所使用的 HTTP 方法                                               |
| [`formnovalidate`](#formnovalidate) | `image`、`submit`                                                    | 绕过表单提交时的表单控件验证                                               |
| [`formtarget`](#formtarget)         | `image`、`submit`                                                    | 提交表单时的浏览上下文                                                     |
| [`height`](#height)                 | `image`                                                              | 与 {{htmlelement('img')}} 元素的 height 属性有相同含义，垂直方向上的维度值 |
| [`list`](#list)                     | 除了 `hidden`、`password`、`checkbox`、`radio` 和按钮以外            | 自动完成选项的 {{htmlelement('datalist')}} 的 id 属性的值                  |
| [`max`](#max)                       | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 最大值                                                                     |
| [`maxlength`](#maxlength)           | `text`、`search`、`url`、`tel`、`email`、`password`                  | `value` 的最大长度（字符数）                                               |
| [`min`](#min)                       | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 最小值                                                                     |
| [`minlength`](#minlength)           | `text`、`search`、`url`、`tel`、`email`、`password`                  | `value` 的最小长度（字符数）                                               |
| [`multiple`](#multiple)             | `email`、`file`                                                      | 布尔值。是否允许多个值                                                     |
| [`name`](#name)                     | 所有类型                                                             | 表单的控件名称，作为键值对的一部分与表单一同提交                           |
| [`pattern`](#pattern)               | `text`、`search`、`url`、`tel`、`email`、`password`                  | 为了使得 `value` 有效，必须符合的模式                                      |
| [`placeholder`](#placeholder)       | `text`、`search`、`url`、`tel`、`email`、`password`、`number`        | 当没有值设定时，出现在表单控件上的文字                                     |
| [`readonly`](#readonly)             | 除了 `hidden`、`range`、`color`、`checkbox`、`radio` 和按钮以外      | 布尔值。如果存在，其中的值将不可编辑。                                     |
| [`required`](#required)             | 除了 `hidden`、`range`、`color` 和按钮以外                           | 布尔值。如果存在，一个值是必需的，或者必须勾选该值才能提交表格。           |
| [`size`](#size)                     | `text`、`search`、`url`、`tel`、`email`、`password`                  | 控件的尺寸                                                                 |
| [`src`](#src)                       | `image`                                                              | 与 {{htmlelement('img')}} 元素的 `src` 属性含义相同，图片资源的地址        |
| [`step`](#step)                     | `date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` | 有效的增量值                                                               |
| [`type`](#type)                     | 所有类型                                                             | 表单控件的类型                                                             |
| [`value`](#value)                   | 所有类型                                                             | 表单控件的初始值                                                           |
| [`width`](#width)                   | `image`                                                              | 与 {{htmlelement('img')}} 元素的 `width` 属性含义相同                      |


一些额外的非标准属性被列在标准属性的描述之后。

### 属性各论

- `accept`

  - : 仅对 `file` 输入类型有效。`accept` 属性定义了 `file` 上传控件可选择文件类型的列表。参见 {{HTMLElement("input/file", "file")}} 输入类型以了解更多信息。
    
- `alt`

  - : 仅对 `image` 类型有效。`alt` 属性提供了图片的替代文字，在图片的 [`src`](#src) 属性缺失或对应资源加载失败时，会显示该属性的值。参见 {{HTMLElement("input/image", "image")}} 输入类型以了解更多信息。


- [`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete)

  - : （**不是**一个布尔属性！）[`autocomplete`](/zh-CN/docs/Web/HTML/Attributes/autocomplete) 属性将一个空格分隔的字符串作为其值，描述输入应该提供什么类型的自动完成功能。一个典型的自动完成的实现是回忆以前在同一输入字段中输入的值，但也可能存在更复杂的自动完成形式。例如，浏览器可以与设备的联系人列表集成，在电子邮件输入栏中自动完成 `email` 地址。请参阅{{SectionOnPage("/zh-CN/docs/Web/HTML/Attributes/autocomplete", "值")}}了解允许的值。
  
    `autocomplete` 属性对 `hidden`、`text`、`search`、`url`、`tel`、`email`、`date`、`month`、`week`、`time`、`datetime-local`、`number`、`range`、`color` 和 `password` 类型的输入有效。该属性对于那些不返回数值或文本数据的输入控件没有效果，对除了 `checkbox`、`radio`、`file` 和任何按钮类型的所有输入类型均有效。
    
    查看 [HTML autocomplete 属性](/zh-CN/docs/Web/HTML/Attributes/autocomplete)以了解额外信息，包括密码安全和对于 `hidden` 来说，`autocomplete` 的方式与其他输入类型略有不同。
 
- `autofocus`
  
  - : 这个布尔属性允许指定的表单控件在页面加载时具有焦点（自动获得焦点），除非用户将其覆盖，例如通过键入不同的控件。

    > **备注：** 具有 `autofocus` 属性的元素可能在 {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}} 事件触发前获得焦点。

    文档中只有一个表单元素可以具有 `autofocus` 属性。如果放置了多于一个元素，会聚焦第一个具有该属性的元素。

    `autofocus` 不能应用于类型为 `hidden` 的输入控件上，因为隐藏的控件不可聚焦。

    > **警告：** 自动聚焦表单控件会使使用读屏技术的视力障碍者和有认知障碍的人感到困惑。当指定了 `autofocus` 时，读屏器会将用户“传送”到表单控件上，而不会事先警告他们。

    在应用 `autofocus` 属性时，要仔细考虑无障碍问题。自动聚焦于一个控件会导致页面在加载时滚动。焦点也会导致动态键盘在某些触摸设备上显示。虽然屏幕阅读器会宣布收到焦点的表单控件的标签，但屏幕阅读器不会宣布标签之前的任何内容，在小设备上的视力良好的用户同样会错过前面的内容所创造的背景。

- `capture`
  
  - : 在 HTML 媒体捕获规范中引入，仅对 `file` 输入类型有效，`capture` 属性定义了应该使用哪种媒体（如麦克风、视频或相机）来捕获一个新文件，以便在支持场景中用 `file` 上传控件上传。参见 {{HTMLElement("input/file", "file")}} 输入类型。

- `checked`

  - : 布尔属性，对于 `radio` 和 `checkbox` 类型有效。如果在 `radio` 类型上出现，代表该单选按钮是当前同名称组中所选定的那一个。如果在 `checkbox` 类型上出现，代表页面加载时，默认选择该复选框，这并*不*代表复选框当前是否选择：如果复选框状态改变，该内容属性不会反馈这种改变，只会更新 [`HTMLInputElement` 的 `checked` IDL 属性](/zh-CN/docs/Web/API/HTMLInputElement)。

    > **备注：** 与其他输入控件不同，复选框和单选按钮的值只会在 `checked` 状态时才会包括在提交的数据中。如果当前是 `checked` 状态，复选框的名称和值就会被提交。
    >
    > 例如，`name` 为 `fruit` 的复选框含有 `value` 为 `cherry` 的一项，且该复选框为选中状态，提交的表单数据将包含 `fruit=cherry`；如果复选框为非活动状态，它不会列入到表单数据中。复选框和单选按钮的默认 `value` 值为 `on`。

- {{htmlattrdef("dirname")}}

  - : 仅对 `text` 和 `search` 输入类型有效。`dirname` 属性允许提交元素的方向。当包含这个属性时，表单控件将提交两个名称/值对：第一个是 [`name`](#name) 和 [`value`](#value)，第二个是 `dirname` 作为名称，其值为浏览器设置的 `ltr` 或 `rtl`。

    ```html
    <form action="page.html" method="post">
      <label
        >水果：
        <input type="text" name="fruit" dirname="fruit.dir" value="cherry" />
      </label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cherry&fruit.dir=ltr -->
    ```

    当提交上述表单时，会发送 `name` / `value` 对 `fruit=cherry` 和 `dirname` / 方向对 `fruit.dir=ltr`。

- `disabled`

  - : 一个布尔属性，如果存在的话，表示用户不应该与该输入进行交互。禁用的输入通常以较暗的颜色呈现，或使用一些其他形式的指示，表明该字段不能使用。

    具体来说，禁用的输入不会接收 {{domxref("Element/click_event", "click")}} 事件，而且禁用的输入不会随表单提交。

    > **备注：** 虽然规范中没有要求，但 Firefox 默认会在不同的页面加载中[保持 `<input>` 的动态禁用状态](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。使用 [`autocomplete`](#autocomplete) 属性来控制这个特性。

- `form`

  - : 一个字符串，指定该输入与之相关的 {{HTMLElement("form")}} 元素（即其**表单所有者**）。如果存在该属性，该字符串的值必须与相同文档中的 `<form>` 元素的 [`id`](#id) 相同。如果没有指定该属性，该 `<input>` 元素与最近包含它的表单相关。

    `form` 属性可以让你在文档的任何地方放置一个输入控件，但在文档的其他地方包含一个表单。

    > **备注：** 一个输入只能与一个表单相关。

- `formaction`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{HTMLElement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `formenctype`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{HTMLElement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `formmethod`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{HTMLElement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `formnovalidate`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{HTMLElement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `formtarget`
  - : 仅对 `image` 和 `submit` 输入类型有效。参见 {{HTMLElement("input/submit", "submit")}} 输入类型介绍以获得更多信息。
- `height`
  - : 仅对 `image` 输入按钮有效。`height` 是要显示代表图形提交按钮的图片的高度。参见 {{HTMLElement("input/image", "image")}}。
- `id`
  - : 全局属性对所有元素有效，包括所有的输入类型，它定义了一个唯一的标识符（ID），在整个文档中必须是唯一的。其目的是为了在链接时识别该元素。该值被用作 {{htmlelement('label')}} 的 `for` 属性的值，以便将标签与表单控件连接起来。参见 {{htmlelement('label')}}。
- `inputmode`
  - : 对所有元素都有效的全局值，它为浏览器提供了一个提示，说明在编辑这个元素或其内容时要使用的虚拟键盘配置类型。值包括 `none`、`text`、`tel`、`url`、`email`、`numeric`、`decimal` 和 `search`。
- `list`

  - : 给予 `list` 属性的值应该是位于同一文档中的 {{HTMLElement("datalist")}} 元素的 {domxref("Element.id", "id")}}。`<datalist>` 提供了一个预定义值的列表，向用户建议这个输入。列表中任何与[`type`](#type)不兼容的值都不包括在建议的选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

    在 `text`、`search`、`url`、`tel`、`email`、`date`、`month`、`week`、`time`、`datetime-local`、`number`、`range` 和 `color` 上均有效。

    根据规范，`hidden'、`password'、`checkbox'、`radio'、`file` 或任何按钮类型不支持 `list` 属性。

    根据浏览器的不同，用户可能会看到一个建议的自定义调色板、沿着一个范围的跳动标记、甚至是一个像选择一样打开但允许非列表值的输入。查看[浏览器兼容性表](/zh-CN/docs/Web/HTML/Element/datalist#浏览器兼容性)，了解其他输入类型。

    参见 {{htmlelement('datalist')}} 元素。

- `max`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the greatest value in the range of permitted values. If the [`value`](#value) entered into the element exceeds this, the element fails [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation). If the value of the `max` attribute isn't a number, then the element has no maximum value.

    There is a special case: if the data type is periodic (such as for dates or times), the value of `max` may be lower than the value of `min`, which indicates that the range may wrap around; for example, this allows you to specify a time range from 10 PM to 4 AM.

- `maxlength`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the maximum number of characters (as UTF-16 code units) the user can enter into the field. This must be an integer value `0` or higher. If no `maxlength` is specified, or an invalid value is specified, the field has no maximum length. This value must also be greater than or equal to the value of `minlength`.

    The input will fail [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation) if the length of the text entered into the field is greater than `maxlength` UTF-16 code units long. By default, browsers prevent users from entering more characters than allowed by the `maxlength` attribute. See [Client-side validation](#client-side_validation) for more information.

- `min`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the most negative value in the range of permitted values. If the [`value`](#value) entered into the element is less than this, the element fails [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation). If the value of the `min` attribute isn't a number, then the element has no minimum value.

    This value must be less than or equal to the value of the `max` attribute. If the `min` attribute is present but is not specified or is invalid, no `min` value is applied. If the `min` attribute is valid and a non-empty value is less than the minimum allowed by the `min` attribute, constraint validation will prevent form submission. See [Client-side validation](#client-side_validation) for more information.

    There is a special case: if the data type is periodic (such as for dates or times), the value of `max` may be lower than the value of `min`, which indicates that the range may wrap around; for example, this allows you to specify a time range from 10 PM to 4 AM.

- `minlength`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the minimum number of characters (as UTF-16 code units) the user can enter into the entry field. This must be a non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length.

    The input will fail [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation) if the length of the text entered into the field is fewer than `minlength` UTF-16 code units long, preventing form submission. See [Client-side validation](#client-side_validation) for more information.

- `multiple`

  - : The Boolean `multiple` attribute, if set, means the user can enter comma separated email addresses in the email widget or can choose more than one file with the `file` input. See the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/file", "file")}} input type.

- `name`

  - : A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

    Consider the `name` a required attribute (even though it's not). If an input has no `name` specified, or `name` is empty, the input's value is not submitted with the form! (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.)

    There are two special cases:

    1. `_charset_` : If used as the name of an `<input>` element of type {{HTMLElement("input/hidden", "hidden")}}, the input's `value` is automatically set by the {{Glossary("user agent")}} to the character encoding being used to submit the form.
    2. `isindex`: For historical reasons, the name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) is not allowed.

    The [`name`](#name) attribute creates a unique behavior for radio buttons.

    Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselects any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted,

    When tabbing into a series of same-named group of radio buttons, if one is checked, that one will receive focus. If they aren't grouped together in source order, if one of the group is checked, tabbing into the group starts when the first one in the group is encountered, skipping all those that aren't checked. In other words, if one is checked, tabbing skips the unchecked radio buttons in the group. If none are checked, the radio button group receives focus when the first button in the same name group is reached.

    Once one of the radio buttons in a group has focus, using the arrow keys will navigate through all the radio buttons of the same name, even if the radio buttons are not grouped together in the source order.

    When an input element is given a `name`, that name becomes a property of the owning form element's {{domxref("HTMLFormElement.elements")}} property. If you have an input whose `name` is set to `guest` and another whose `name` is `hat-size`, the following code can be used:

    ```js
    let form = document.querySelector("form");
    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    When this code has run, `guestName` will be the {{domxref("HTMLInputElement")}} for the `guest` field, and `hatSize` the object for the `hat-size` field.

    > **Warning:** Avoid giving form elements a `name` that corresponds to a built-in property of the form, since you would then override the predefined property or method with this reference to the corresponding input.
- `pattern`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, the `pattern` attribute defines a regular expression that the input's [`value`](#value) must match in order for the value to pass [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation). It must be a valid JavaScript regular expression, as used by the {{jsxref("RegExp")}} type, and as documented in our [guide on regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions); the `'u'` flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.

    If the `pattern` attribute is present but is not specified or is invalid, no regular expression is applied and this attribute is ignored completely. If the pattern attribute is valid and a non-empty value does not match the pattern, constraint validation will prevent form submission.

    > **Note:** If using the `pattern` attribute, inform the user about the expected format by including explanatory text nearby. You can also include a [`title`](#title) attribute to explain what the requirements are to match the pattern; most browsers will display this title as a tooltip. The visible explanation is required for accessibility. The tooltip is an enhancement.
    See [Client-side validation](#client-side_validation) for more information.

- `placeholder`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, `password`, and `number`, the `placeholder` attribute provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that provides a hint as to the expected type of data, rather than an explanation or prompt. The text _must not_ include carriage returns or line feeds. So for example if a field is expected to capture a user's first name, and its label is "First Name", a suitable placeholder might be "e.g. Mustafa".

    > **Note:** The `placeholder` attribute is not as semantically useful as other ways to explain your form, and can cause unexpected technical issues with your content. See [Labels](#labels) for more information.
- `readonly`

  - : A Boolean attribute which, if present, indicates that the user should not be able to edit the value of the input. The `readonly` attribute is supported by the `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `password` input types.

    See the [HTML attribute: `readonly`](/en-US/docs/Web/HTML/Attributes/readonly) for more information.

- `required`

  - : `required` is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted. The `required` attribute is supported by `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, and `file` inputs.

    See [Client-side validation](#client-side_validation) and the [HTML attribute: `required`](/en-US/docs/Web/HTML/Attributes/required) for more information.

- `size`

  - : Valid for `email`, `password`, `tel`, `url`, and `text`, the `size` attribute specifies how much of the input is shown. Basically creates same result as setting CSS [`width`](/en-US/docs/Web/CSS/width) property with a few specialities. The actual unit of the value depends on the input type. For `password` and `text`, it is a number of characters (or `em` units) with a default value of `20`, and for others, it is pixels (or `px` units). CSS `width` takes precedence over the `size` attribute.

- `src`

  - : Valid for the `image` input button only, the `src` is string specifying the URL of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.

- `step`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, the [`step`](/en-US/docs/Web/HTML/Attributes/step) attribute is a number that specifies the granularity that the value must adhere to.

    If not explicitly included:

    - `step` defaults to 1 for `number` and `range`.
    - Each date/time input type has a default `step` value appropriate for the type; see the individual input pages: [`date`](/en-US/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/en-US/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/en-US/docs/Web/HTML/Element/input/month#step), [`time`](/en-US/docs/Web/HTML/Element/input/time#step), and [`week`](/en-US/docs/Web/HTML/Element/input/week#step).

    The value must be a positive number—integer or float—or the special value `any`, which means no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)).

    If `any` is not explicitly set, valid values for the `number`, date/time input types, and `range` input types are equal to the basis for stepping — the [`min`](#min) value and increments of the step value, up to the [`max`](#max) value, if specified.

    For example, if you have `<input type="number" min="10" step="2">`, then any even integer, `10` or greater, is valid. If omitted, `<input type="number">`, any integer is valid, but floats (like `4.2`) are not valid, because `step` defaults to `1`. For `4.2` to be valid, `step` would have had to be set to `any`, 0.1, 0.2, or any the `min` value would have had to be a number ending in `.2`, such as `<input type="number" min="-5.2">`

    > **Note:** When the data entered by the user doesn't adhere to the stepping configuration, the value is considered invalid in constraint validation and will match the `:invalid` pseudoclass.
    See [Client-side validation](#client-side_validation) for more information.

- `tabindex`

  - : Global attribute valid for all elements, including all the input types, an integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation. As all input types except for input of type hidden are focusable, this attribute should not be used on form controls, because doing so would require the management of the focus order for all elements within the document with the risk of harming usability and accessibility if done incorrectly.

- `title`

  - : Global attribute valid for all elements, including all input types, containing a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip. The title should NOT be used as the primary explanation of the purpose of the form control. Instead, use the {{htmlelement('label')}} element with a `for` attribute set to the form control's [`id`](#id) attribute. See [Labels](#labels) below.

- `type`

  - : A string specifying the type of control to render. For example, to create a checkbox, a value of `checkbox` is used. If omitted (or an unknown value is specified), the input type `text` is used, creating a plaintext input field.

    Permitted values are listed in [Input types](#input_types) above.

- `value`

  - : The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective {{domxref("HTMLInputElement")}} object's `value` property. The `value` attribute is always optional, though should be considered mandatory for `checkbox`, `radio`, and `hidden`.

- `width`

  - : Valid for the `image` input button only, the `width` is the width of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.

### 非标准属性

以下非标准属性在某些浏览器中可以使用。一般地，除非无法实现你所需要的功能，否则不要使用它们。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>
        A string indicating whether autocorrect is <code>on</code> or <code>off</code>. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Whether or not to send repeated {{domxref("HTMLInputElement/search_event", "search")}}
        events to allow updating live search results while the user is still editing the value of the field.
        <strong>WebKit and Blink only (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code></td>
      <td>
        <p>A string indicating the type of action that will be taken when the user
        presses the <kbd>Enter</kbd> or <kbd>Return</kbd> key while editing the
        field; this is used to determine an appropriate label for that key on a
        virtual keyboard.</p>
        <p><strong>Deprecated: use <a href="/en-US/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> instead.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Sets the orientation of the range slider. <strong>Firefox only</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        The maximum number of items that should be displayed in the drop-down list of previous search queries. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        A Boolean indicating whether to only allow the user to choose a directory (or directories, if <a href="#multiple"><code>multiple</code></a> is also present)
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : (Safari only). A string which indicates whether to activate automatic correction while the user is editing this field. Permitted values are:

    - `on`
      - : Enable automatic correction of typos, as well as processing of text substitutions if any are configured.
    - `off`
      - : Disable automatic correction and text substitutions.

- `incremental` {{non-standard_inline}}

  - : The Boolean attribute `incremental` is a WebKit and Blink extension (so supported by Safari, Opera, Chrome, etc.) which, if present, tells the {{Glossary("user agent")}} to process the input as a live search. As the user edits the value of the field, the user agent sends {{domxref("HTMLInputElement/search_event", "search")}} events to the {{domxref("HTMLInputElement")}} object representing the search box. This allows your code to update the search results in real time as the user edits the search.

    If `incremental` is not specified, the {{domxref("HTMLInputElement/search_event", "search")}} event is only sent when the user explicitly initiates a search (such as by pressing the <kbd>Enter</kbd> or <kbd>Return</kbd> key while editing the field).

    The `search` event is rate-limited so that it is not sent more frequently than an implementation-defined interval.

- `orient` {{non-standard_inline}}

  - : Similar to the -moz-orient non-standard CSS property impacting the {{htmlelement('progress')}} and {{htmlelement('meter')}} elements, the `orient` attribute defines the orientation of the range slider. Values include `horizontal`, meaning the range is rendered horizontally, and `vertical`, where the range is rendered vertically.

- `results` {{non-standard_inline}}

  - : The `results` attribute—supported only by Safari—is a numeric value that lets you override the maximum number of entries to be displayed in the {{HTMLElement("input")}} element's natively-provided drop-down menu of previous search queries.

    The value must be a non-negative decimal number. If not provided, or an invalid value is given, the browser's default maximum number of entries is used.

- `webkitdirectory` {{non-standard_inline}}

  - : The Boolean `webkitdirectory` attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See {{domxref("HTMLInputElement.webkitdirectory")}} for additional details and examples.

    Though originally implemented only for WebKit-based browsers, `webkitdirectory` is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative.

## 方法

The following methods are provided by the {{domxref("HTMLInputElement")}} interface which represents `<input>` elements in the DOM. Also available are those methods specified by the parent interfaces, {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}.

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false` and fires an {{domxref("HTMLInputElement.invalid_event", "invalid")}} event at the element.
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false`, fires an {{domxref("HTMLInputElement.invalid_event", "invalid")}} event at the element, and (if the event isn't canceled) reports the problem to the user.
- {{domxref("HTMLInputElement.select", "select()")}}
  - : Selects the entire content of the `<input>` element, if the element's content is selectable. For elements with no selectable text content (such as a visual color picker or calendar date input), this method does nothing.
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : Sets a custom message to display if the input element's value isn't valid.
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : Sets the contents of the specified range of characters in the input element to a given string. A `selectMode` parameter is available to allow controlling how the existing content is affected.
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : Selects the specified range of characters within a textual input element. Does nothing for inputs which aren't presented as text input fields.
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : Decrements the value of a numeric input by one, by default, or by the specified number of units.
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : Increments the value of a numeric input by one or by the specified number of units.

## CSS

Inputs, being replaced elements, have a few features not applicable to non form elements. There are CSS selectors that can specifically target form controls based on their UI features, also known as UI pseudo-classes. The input element can also be targeted by type with attribute selectors. There are some properties that are especially useful as well.

### UI pseudo-classes

<table class="no-markdown">
  <caption>
    Captions super relevant to the
    <code>&#x3C;input></code>
    element:
  </caption>
  <thead>
    <tr>
      <th>Pseudo-class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        Any currently enabled element that can be activated (selected, clicked
        on, typed into, etc.) or accept focus and also has a disabled state, in
        which it can't be activated or accept focus.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Any currently disabled element that has an enabled state, meaning it
        otherwise could be activated (selected, clicked on, typed into, etc.) or
        accept focus were it not disabled.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element not editable by the user</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element that is editable by the user.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element that is currently displaying <a href="#placeholder"><code>placeholder</code> text</a>,
        including <code>&#x3C;input></code> and {{HTMLElement("textarea")}} elements with the <a href="#placeholder"><code>placeholder</code></a> attribute present that has, as yet, no value.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Form elements that are the default in a group of related elements.
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        were checked on page load or render.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        are currently checked (and the ({{HTMLElement("option")}} in a
        {{HTMLElement("select")}} that is currently selected).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} elements
        whose indeterminate property is set to true by JavaScript,
        {{HTMLElement("input/radio", "radio")}} elements, when all
        radio buttons with the same name value in the form are unchecked, and
        {{HTMLElement("progress")}} elements in an indeterminate state
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Form controls that can have constraint validation applied and are
        currently valid.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Form controls that have constraint validation applied and are currently
        not valid. Matches a form control whose value doesn't match the
        constraints set on it by its attributes, such as
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> and <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        A non-empty input whose current value is within the range limits
        specified by the <a href="#min"><code>min</code></a> and <a href="#max"><code>max</code></a> attributes and the <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        A non-empty input whose current value is NOT within the range limits
        specified by the <a href="#min"><code>min</code></a>
        and <a href="#max"><code>max</code></a> attributes or
        does not adhere to the <a href="#step"><code>step</code></a> constraint.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element that has the <a href="#required"><code>required</code></a> attribute set on it.
        Only matches elements that can be required.
        The attribute included on a non-requirable element will not make for a match.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, or
        {{HTMLElement("textarea")}} element that does NOT have the <a href="#required"><code>required</code></a> attribute set on it.
        Does not match elements that can't be required.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> and {{HTMLElement("textarea")}} elements that currently have no value.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Similar to <code>:invalid</code>, but is activated on blur. Matches
        invalid input but only after the user interaction, such as by focusing
        on the control, leaving the control, or attempting to submit the form
        containing the invalid control.
      </td>
    </tr>
  </tbody>
</table>

#### 伪类示例

We can style a checkbox label based on whether the checkbox is checked or not. In this example, we are styling the {{cssxref('color')}} and {{cssxref('font-weight')}} of the {{htmlelement('label')}} that comes immediately after a checked input. We haven't applied any styles if the `input` is not checked.

```html hidden
<input id="checkboxInput" type="checkbox" />
<label for="checkboxInput">切换复选框状态</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('伪类示例', 500, 80)}}

### 属性选择器

It is possible to target different types of form controls based on their [`type`](#type) using [attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). CSS attribute selectors match elements based on either just the presence of an attribute or the value of a given attribute.

```css
/* matches a password input */
input[type="password"] {
}
/* matches a form control whose valid values are limited to a range of values*/
input[min][max] {
}
/* matches a form control with a pattern attribute */
input[pattern] {
}
```

### ::placeholder

By default, the appearance of placeholder text is a translucent or light gray. The {{cssxref('::placeholder')}} pseudo-element is the input's [`placeholder` text](#placeholder). It can be styled with a limited subset of CSS properties.

```css
::placeholder {
  color: blue;
}
```

Only the subset of CSS properties that apply to the {{cssxref("::first-line")}} pseudo-element can be used in a rule using `::placeholder` in its selector.

### appearance

The {{cssxref("appearance")}} property enables the displaying of (almost) any element as a platform-native style based on the operating system's theme as well as the removal of any platform-native styling with the `none` value.

You could make a `<div>` look like a radio button with `div {appearance: radio;}` or a radio look like a checkbox with `[type="radio"] {appearance: checkbox;}`, but don't.

Setting `appearance: none` removes platform native borders, but not functionality.

### caret-color

A property specific to text entry-related elements is the CSS {{cssxref("caret-color")}} property, which lets you set the color used to draw the text input caret:

#### HTML

```html
<label for="textInput">Note the red caret:</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font: 16px "Helvetica", "Arial", "sans-serif";
}
```

#### 结果

{{EmbedLiveSample('caret-color', 500, 80)}}

### object-position and object-fit

In certain cases (typically involving non-textual inputs and specialized interfaces), the `<input>` element is a [replaced element](/en-US/docs/Web/CSS/Replaced_element). When it is, the position and size of the element's size and positioning within its frame can be adjusted using the CSS {{cssxref("object-position")}} and {{cssxref("object-fit")}} properties

### Styling

For more information about adding color to elements in HTML, see:

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color).

Also see:

- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling) and
- the [compatibility table of CSS properties](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## 额外特性

### 标签

Labels are needed to associate assistive text with an `<input>`. The {{HTMLElement("label")}} element provides explanatory information about a form field that is _always_ appropriate (aside from any layout concerns you have). It's never a bad idea to use a `<label>` to explain what should be entered into an `<input>` or {{HTMLElement("textarea")}}.

#### 关联标签

The semantic pairing of `<input>` and `<label>` elements is useful for assistive technologies such as screen readers. By pairing them using the `<label>`'s [`for`](/en-US/docs/Web/HTML/Element/label#for) attribute, you bond the label to the input in a way that lets screen readers describe inputs to users more precisely.

It does not suffice to have plain text adjacent to the `<input>` element. Rather, usability and accessibility requires the inclusion of either implicit or explicit {{HTMLElement("label")}}:

```html
<!-- inaccessible -->
<p>Enter your name: <input id="name" type="text" size="30" /></p>

<!-- implicit label -->
<p>
  <label>Enter your name: <input id="name" type="text" size="30" /></label>
</p>

<!-- explicit label -->
<p>
  <label for="name">Enter your name: </label>
  <input id="name" type="text" size="30" />
</p>
```

The first example is inaccessible: no relationship exists between the prompt and the `<input>` element.

In addition to an accessible name, the label provides a larger 'hit' area for mouse and touch screen users to click on or touch. By pairing a `<label>` with an `<input>`, clicking on either one will focus the `<input>`. If you use plain text to "label" your input, this won't happen. Having the prompt part of the activation area for the input is helpful for people with motor control conditions.

As web developers, it's important that we never assume that people will know all the things that we know. The diversity of people using the web—and by extension your website—practically guarantees that some of your site's visitors will have some variation in thought processes and/or circumstances that leads them to interpret your forms very differently from you without clear and properly-presented labels.

#### 占位符不具有无障碍性

The [`placeholder`](#placeholder) attribute lets you specify text that appears within the `<input>` element's content area itself when it is empty. The placeholder should never be required to understand your forms. It is not a label, and should not be used as a substitute, because it isn't. The placeholder is used to provide a hint as to what an inputted value should look like, not an explanation or prompt.

Not only is the placeholder not accessible to screen readers, but once the user enters any text into the form control, or if the form control already has a value, the placeholder disappears. Browsers with automatic page translation features may skip over attributes when translating, meaning the `placeholder` may not get translated.

> **备注：** Don't use the [`placeholder`](#placeholder) attribute if you can avoid it. If you need to label an `<input>` element, use the {{HTMLElement("label")}} element.

### 客户端验证

> **Warning:** Client-side validation is useful, but it does _not_ guarantee that the server will receive valid data. If the data must be in a specific format, _always_ verify it also on the server-side, and return a [`400` HTTP response](/en-US/docs/Web/HTTP/Status/400) if the format is invalid.
In addition to using CSS to style inputs based on the {{cssxref(":valid")}} or {{cssxref(":invalid")}} UI states based on the current state of each input, as noted in the [UI pseudo-classes](#ui_pseudo-classes) section above, the browser provides for client-side validation on (attempted) form submission. On form submission, if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

Some input types and other attributes place limits on what values are valid for a given input. For example, `<input type="number" min="2" max="10" step="2">` means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a `rangeUnderflow` error if the value is less than 2, `rangeOverflow` if greater than 10, `stepMismatch` if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the `step` attribute), or `typeMismatch` if the value is not a number.

For the input types whose domain of possible values is periodic (that is, at the highest possible value, the values wrap back around to the beginning rather than ending), it's possible for the values of the [`max`](#max) and [`min`](#min) properties to be reversed, which indicates that the range of permitted values starts at `min`, wraps around to the lowest possible value, then continues on until `max` is reached. This is particularly useful for dates and times, such as when you want to allow the range to be from 8 PM to 8 AM:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Specific attributes and their values can lead to a specific error {{domxref('ValidityState')}}:

<table class="no-markdown">
  <caption>
    Validity object errors depend on the {{htmlelement('input')}}
    attributes and their values:
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Relevant property</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>{{domxref('validityState.rangeOverflow')}}</td>
      <td>
        Occurs when the value is greater than the maximum value as defined by
        the <code>max</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>{{domxref('validityState.tooLong')}}</td>
      <td>
        Occurs when the number of characters is greater than the number allowed by the <code>maxlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>{{domxref('validityState.rangeUnderflow')}}</td>
      <td>
        Occurs when the value is less than the minimum value as defined by the <code>min</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>{{domxref('validityState.tooShort')}}</td>
      <td>
        Occurs when the number of characters is less than the number required by the <code>minlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>{{domxref('validityState.patternMismatch')}}</td>
      <td>
        Occurs when a pattern attribute is included with a valid regular expression and the <code>value</code> does not match it.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>{{domxref('validityState.valueMissing')}}</td>
      <td>
        Occurs when the <code>required</code> attribute is present but the value is <code>null</code> or radio or checkbox is not checked.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>{{domxref('validityState.stepMismatch')}}</td>
      <td>
        The value doesn't match the step increment. Increment default is <code>1</code>, so only integers are valid on<code> type="number"</code>
        is step is not included. <code>step="any"</code> will never throw this error.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>{{domxref('validityState.typeMismatch')}}</td>
      <td>
        Occurs when the value is not of the correct type, for example an email does not contain an <code>@</code> or a url doesn't contain a protocol.
      </td>
    </tr>
  </tbody>
</table>

If a form control doesn't have the `required` attribute, no value, or an empty string, is not invalid. Even if the above attributes are present, with the exception of `required`, and empty string will not lead to an error.

We can set limits on what values we accept, and supporting browsers will natively validate these form values and alert the user if there is a mistake when the form is submitted.

In addition to the errors described in the table above, the `validityState` interface contains the `badInput`, `valid`, and `customError` boolean readonly properties. The validity object includes:

- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.badInput')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the `valid` property, which is `true` if the element's value obeys all constraints.

If there is an error, supporting browsers will both alert the user and prevent the form from being submitted. A word of caution: if a custom error is set to a truthy value (anything other than the empty string or `null`), the form will be prevented from being submitted. If there is no custom error message, and none of the other properties return true, `valid` will be true, and the form can be submitted.

```js
function validate(input) {
  let validityState_object = input.validity;
  if (validityState_object.valueMissing) {
    input.setCustomValidity("A value is required");
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity("Your value is too low");
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity("Your value is too high");
  } else {
    input.setCustomValidity("");
  }
}
```

The last line, setting the custom validity message to the empty string is vital. If the user makes an error, and the validity is set, it will fail to submit, even if all the values are valid, until the message is `null`.

#### 自定义验证错误示例

If you want to present a custom error message when a field fails to validate, you need to use the [Constraint Validation API](/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) available on `<input>` (and related) elements. Take the following form:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

The basic HTML form validation features will cause this to produce a default error message if you try to submit the form with either no valid filled in, or a value that does not match the `pattern`.

If you wanted to instead display custom error messages, you could use JavaScript like the following:

```js
const nameInput = document.querySelector("input");
nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});
nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("Enter your username!");
  } else {
    nameInput.setCustomValidity(
      "Usernames can only contain upper and lowercase letters. Try again!"
    );
  }
});
```

The example renders like so:

{{EmbedLiveSample('自定义验证错误示例')}}

In brief:

- We check the valid state of the input element every time its value is changed by running the `checkValidity()` method via the `input` event handler.
- If the value is invalid, an `invalid` event is raised, and the `invalid` event handler function is run. Inside this function we work out whether the value is invalid because it is empty, or because it doesn't match the pattern, using an `if ()` block, and set a custom validity error message.
- As a result, if the input value is invalid when the submit button is pressed, one of the custom error messages will be shown.
- If it is valid, it will submit as you'd expect. For this to happen, the custom validity has to be cancelled, by invoking `setCustomValidity()` with an empty string value. We therefore do this every time the `input` event is raised. If you don't do this, and a custom validity was previously set, the input will register as invalid, even if it currently contains a valid value on submission.

> **Note:** Always validate input constraints both client side and server side. Constraint validation doesn't remove the need for validation on the _server side_. Invalid values can still be sent by older browsers or by bad actors.
> **Note:** Firefox supported a proprietary error attribute — `x-moz-errormessage` — for many versions, which allowed you set custom error messages in a similar way. This has been removed as of version 66 (see {{bug(1513890)}}).

### 本地化

The allowed inputs for certain `<input>` types depend on the locale. In some locales, 1,000.00 is a valid number, while in other locales the valid way to enter this number is 1.000,00.

Firefox uses the following heuristics to determine the locale to validate the user's input (at least for `type="number"`):

- Try the language specified by a `lang`/`xml:lang` attribute on the element or any of its parents.
- Try the language specified by any `Content-Language` HTTP header. Or,
- If none specified, use the browser's locale.

### 技术总结

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、列表元素、可提交元素、可重设元素、表单相关元素<a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content"
          >短语内容</a
        >。如果 
        <code
          ><a href="/zh-CN/docs/Web/HTML/Element/input#attr-type">type</a></code
        > 不是 <code>hidden</code> 的，则也是可标签元素、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许内容</th>
      <td>
        无，这是一个<a href="/zh-CN/docs/Glossary/empty_element">空元素</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>必须有开始标签，不可以有结束标签。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>：<code
              ><a href="https://w3c.github.io/aria/#link">link</a></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitemradio"
                >menuitemradio</a
              ></code
            >、<code><a href="https://w3c.github.io/aria/#radio">radio</a></code
            >、<code><a href="https://w3c.github.io/aria/#switch">switch</a></code
            >、<code><a href="https://w3c.github.io/aria/#tab">tab</a></code>
          </li>
          <li>
            <code>type=checkbox</code>：<code
              ><a href="https://w3c.github.io/aria/#button">button</a></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code><a href="https://w3c.github.io/aria/#option">option</a></code
            >、<code><a href="https://w3c.github.io/aria/#switch">switch</a></code>
          </li>
          <li>
            <code>type=image</code>：<code
              ><a href="https://w3c.github.io/aria/#link">link</a></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >、<code
              ><a href="https://w3c.github.io/aria/#menuitemradio"
                >menuitemradio</a
              ></code
            >、<code><a href="https://w3c.github.io/aria/#radio">radio</a></code
            >、<code><a href="https://w3c.github.io/aria/#switch">switch</a></code>
          </li>
          <li>
            <code>type=radio</code>：<code
              ><a href="https://w3c.github.io/aria/#menuitemradio"
                >menuitemradio</a
              ></code
            >
          </li>
          <li>
            <code>type=color|date|datetime|datetime-local|email|file</code
            >：无
          </li>
          <li>
            <code>type=hidden|month|number|password|range|reset</code>：无
          </li>
          <li><code>type=search|submit|tel|text|url|week</code>：无</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>
        <a href="/zh-CN/docs/Web/API/HTMLInputElement"
          ><code>HTMLInputElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## 无障碍考虑

### 标签

When including inputs, it is an accessibilty requirement to add labels along side. This is needed so those who use assistive technologies can tell what the input is for. Also, clicking or touching a label gives focus to the label's associated form control. This improves the accessibility and usability for sighted users, increases the area a user can click or touch to activate the form control. this is especially useful (and even needed) for radio buttons and checkboxes, which are tiny. For more information about labels in general see [Labels](#Labels) .

The following is an example of how to associate the `<label>` with an `<input>` element in the above style. You need to give the `<input>` an `id` attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas">
```

### 尺寸

Interactive elements such as form input should provide an area large enough that it is easy to activate them. This helps a variety of people, including people with motor control issues and people using non-precise forms of input such as a stylus or fingers. A minimum interactive size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://a11yproject.com/posts/large-touch-targets/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [表单约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [你的第一个表单](/zh-CN/docs/Learn/Forms/Your_first_form)
- [如何构建 Web 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)
- [原生表单控件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)
- [发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [表单数据验证](/zh-CN/docs/Learn/Forms/Form_validation)
- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [旧式浏览器中的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [为 HTML 表单添加样式](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [HTML 表单高级样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [CSS 属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
