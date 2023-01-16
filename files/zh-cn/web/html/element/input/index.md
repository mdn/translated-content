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
      <td>编辑邮箱地址的区域。类似 <code>text</code> 输入，但在支持的浏览器和带有动态键盘的设备上会有验证参数和相应的键盘。</td>
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

    根据规范，`hidden`、`password'、`checkbox`、`radio`、`file` 或任何按钮类型不支持 `list` 属性。

    根据浏览器的不同，用户可能会看到一个建议的自定义调色板、沿着一个范围的跳动标记、甚至是一个像选择一样打开但允许非列表值的输入。查看[浏览器兼容性表](/zh-CN/docs/Web/HTML/Element/datalist#浏览器兼容性)，了解其他输入类型。

    参见 {{htmlelement('datalist')}} 元素。

- `max`

  - : 对 `date`、`month`、`week`、`time`、`datetime-local`、`number` 和 `range` 输入类型有效，定义了允许值范围内的最大值。如果输入到元素中的 [`value`](#value) 超过此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `max` 属性的值不是数字，则元素没有最大值。

    有一种特殊情况：如果数据类型是周期性的（如日期或时间），`max` 的值可能低于 `min` 的值，这表明范围可以环绕；例如，这允许你指定一个从晚上 10 点到凌晨 4 点的时间范围。

- `maxlength`

  - : 对 `text`、`search`、`url`、`tel`、`email` 和 `password` 类型有效。它定义了用户可以输入到该字段中的最大字符数（以 UTF-16 码点为单位）。必须为大于等于 `0` 的整数。如果未指定 `maxlength` 或指定了无效的值，则该字段将没有最大值。这个值也必须大于等于 `minlength` 的值。

    如果文本框中的字符数大于 `maxlength` UTF-16 编码单元长度，则输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。默认情况下，浏览器将阻止用户输入超过 `maxlength` 属性所指定的值的字符。参见[客户端验证](#客户端验证)一节以了解更多信息。

- `min`

  - : 对 `date`、`month`、`week`、`time`、`datetime-local`、`number` 和 `range` 输入类型有效，定义了允许值范围内的最小值。如果输入到元素的 [`value`](#value) 小于此值，则该元素将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)。如果 `min` 指定的值不是数字，则输入没有最小值。

    该值必须小于或等于 `max` 属性的值。如果 `min` 属性存在但没有指定或无效，则不应用 `min` 值。如果 `min` 属性有效，并且非空值小于 `min` 属性所允许的最小值，约束验证将阻止表单提交。参见[客户端验证](#客户端验证)一节以获取更多信息。

    有一种特殊情况：如果数据类型是周期性的（如日期或时间），`min` 的值可能高于 `max` 的值，这表明范围可以环绕；例如，这允许你指定一个从晚上 10 点到凌晨 4 点的时间范围。

- `minlength`

  - : 对 `text`、`search`、`url`、`tel`、`email` 和 `password` 类型有效。它定义了用户可以输入到该字段中的最小字符数（以 UTF-16 码点为单位）。该值必须是小于等于 `maxlength` 指定的值的非负整数值。如果未指定 `minlength` 或指定了无效的值，则该字段将没有最小值。

    如果输入字段的文本长度小于 `minlength` UTF-16 代码单元的长度，输入将无法通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)，阻止表单提交。参见[客户端验证](#客户端验证)一节以了解更多信息。

- `multiple`

  - : 如果设置了布尔值 `multiple` 属性，意味着用户可以在电子邮件部件中输入逗号分隔的电子邮件地址，或者可以通过 `file` 输入选择多个文件。参见 {{HTMLElement("input/email", "email")}} 和 {{HTMLElement("input/file", "file")}} 输入类型。

- `name`

  - : 一个指定输入控件名称的字符串。当表单数据被提交时，这个名字会和控件的值一起提交。

    通常把 `name` 看作是一个必需的属性（即使它不是）。如果一个输入没有指定 `name`，或者 `name` 是空的，那么这个输入的值就不会和表单一起提交！禁用的控件、未选中的单选按钮、未选中的复选框和重置按钮也不会被发送。

    考虑这两个特殊情况：

    1. `_charset_`：如果被用作 {{HTMLElement("input/hidden", "hidden")}} 类型的 `<input>` 元素的名称，该输入的 `value` 会被{{Glossary("user agent","用户代理")}}自动设置为提交表单时使用的字符编码。
    2. `isindex`：由于历史原因，不允许使用 [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) 这个名字。

    [`name`](#name) 属性对单选按钮的行为完全不同。

    在一个同名的单选按钮组中，一次只能选中一个单选按钮。选择该组中的任何一个单选按钮会自动取消对同一组中当前被选中的单选按钮的选择。如果表单被提交，这一个被选中的单选按钮的值会和名称一起被发送。

    当标签进入一系列同名的单选按钮组时，如果有一个被选中，将聚焦该单选按钮。如果它们没有按源顺序分组，如果组中有一个被选中，当遇到组中的第一个时，标签进入组开始，跳过所有没有选中的。换句话说，如果有一个被选中，标签就会跳过该组中未被选中的单选按钮。如果没有勾选，当到达同名组中的第一个按钮时，就会聚焦该单选按钮组。

    一旦组中的一个单选按钮有了焦点，使用箭头键将浏览所有同名的单选按钮，即使这些单选按钮在源顺序中没有被分组。

    如果一个输入元素具有 `name`，该名称成为包含它的表单元素的 {{domxref("HTMLFormElement.elements")}} 属性。如果有两个 `name` 分别设置为 `guest` 和 `hat-size` 的输入元素，可以使用如下代码：

    ```js
    let form = document.querySelector("form");
    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    此段代码运行后，`guestName` 将成为 `guest` 字段的 {{domxref("HTMLInputElement")}}，`hatSize` 将成为 `hat-size` 字段的 {{domxref("HTMLInputElement")}}。

    > **警告：** 避免给表单元素一个与表单内置属性相对应的 `name`，因为这样你就会用这个对相应输入的引用来覆盖预定义的属性或方法。
- `pattern`

  - : 对 `text`、`search`、`url`、`tel`、`email` 和 `password` 类型有效。为了使 `value` 通过[约束验证](/zh-CN/docs/Web/Guide/HTML/Constraint_validation)，必须满足 `pattern` 属性给定的正则表达式。它必须是 {{jsxref("RegExp")}} 类型的有效 JavaScript 正则表达式，并且已在我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)中进行了说明；在编译正则表达式时指定了 `'u'` 标志，因此该模式被视为 Unicode 代码点的序列，而不是 ASCII。模式文本周围无需指定正斜杠。

    如果 `pattern` 属性存在，但是未指定模式或无效，则不应用任何正则表达式，并且将完全忽略此属性。如果模式属性是有效的，并且该非空值与模式不匹配，约束验证将阻止表单提交。

    > **备注：** 如果使用了 `pattern` 属性，要在附近告知用户所期望的输入格式。你可以包含 [`title`](#title) 属性来解释满足模式的需求说明，大多数浏览器将它们显示为工具提示（tooltip）。对于无障碍来说，视觉的解释是必要的，工具提示是一种改进点。
    参见[客户端验证](#客户端验证)一节以了解更多信息。

- `placeholder`

  - : 对 `text`、`search`、`url`、`tel`、`email`、`password` 和 `number` 有效。`placeholder` 属性可向用户提供有关该字段中需要什么样的信息的简短提示。它应该是一个单词或短语来说明预期的数据类型，而不是说明性消息。文本中*不得*包含回车符或换行符。例如，某个字段需要收集用户的姓氏，其标签为“First Name”，一个适合的占位文字可能是“如 Mustafa”。

    > **备注：** `placeholder` 属性在语义上不如其他解释表单的方式有用，而且会对你的内容造成意想不到的技术问题。参见[标签](#标签)以获得更多信息。
- `readonly`

  - : 一个布尔属性，如果存在，则表示该字段不能由用户编辑。`readonly` 属性支持 `text`、`search`、`url`、`tel`、`email`、`date`、`month`、`week`、`time`、`datetime-local`、`number` 和 `password` 输入类型。

    参见 [HTML 属性：`readonly`](/zh-CN/docs/Web/HTML/Attributes/readonly) 以了解更多信息。

- `required`

  - : `required` 是一个布尔属性，如果存在，则表示用户必须在提交表单之前指定一个非空值。`required` 属性支持 `text`、`search`、`url`、`tel`、`email`、`date`、`month`、`week`、`time`、`datetime-local`、`number`、`password`、`checkbox`、`radio` 和 `file` 输入类型。

    参见[客户端验证](#客户端验证)和 [HTML 属性：`required`](/zh-CN/docs/Web/HTML/Attributes/required)以了解更多信息。

- `size`

  - : 对 `email`、`password`、`tel`、`url` 和 `text` 有效。`size` 属性指示显示输入控件的多少。基本上创建了与设置 CSS [`width`](/zh-CN/docs/Web/CSS/width)属性相同的结果，但有一些特殊性，值的具体单位取决于输入类型。对于 `password` 和 `text`，它是字符数量（或 `em` 单位大小），默认值是 `20`。对于其他情况，是像素值（或 `px` 单位大小）。CSS `width` 的优先级会高于 `size` 属性。

- `src`

  - : 仅对 `image` 输入按钮有效。指定将要在提交按钮上显示的图像的 URL。参见 {{HTMLElement("input/image", "image")}} 输入类型。

- `step`

  - : 对 `date`、`month`、`week`、`time`、`datetime-local`、`number` 和 `range` 输入类型有效。[`step`](/zh-CN/docs/Web/HTML/Attributes/step) 属性指定了值必须满足的粒度。

    如果没有明确包含它：

    - `step` 对于类型为 `number` 和 `range` 的默认值为 1。
    - 每一种日期/事件输入类型有一个适合的默认 `step` 值，请查阅相关的页面以获取：[`date`](/zh-CN/docs/Web/HTML/Element/input/date#step)、[`datetime-local`](/zh-CN/docs/Web/HTML/Element/input/datetime-local#step)、[`month`](/zh-CN/docs/Web/HTML/Element/input/month#step)、[`time`](/zh-CN/docs/Web/HTML/Element/input/time#step) 和 [`week`](/zh-CN/docs/Web/HTML/Element/input/week#step)。

    值必须为一个正数（整数或小数）或特殊值 `any`（意味着不指定任何步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#min) 之外））。

    如果没有明确设置 `any`，`number`、日期/时间输入类型和 `range` 输入类型的有效值等于步进的基础——[`min`](#min)值和步进值的增量，如果指定的话，最高为[`max`](#max)值。

    例如，如果存在这样一个元素 `<input type="number" min="10" step="2">`，那么任何大于等于 `10` 的偶整数都是有效的。如果省略（`<input type="number">`），任何整数都有效，但浮点数（如 `4.2`）无效，因为 `step` 默认为`1`。为了使 `4.2` 有效，`step` 必须被设置为 `any`、0.1、0.2 或任何 `min` 值以 `.2` 结尾的数字，例如 `<input type="number" min="-5.2">`。

    > **备注：** 当用户输入的数据不符合步进配置时，该值在约束验证中被认为是无效的，将匹配 `:invalid` 伪类。
    参见[客户端验证](#客户端验证)以获取更多信息。

- `tabindex`

  - : 对所有元素有效的全局属性，包括所有的输入类型，是一个整数属性，表示该元素如果参与顺序键盘导航，是否可以接受输入焦点（可聚焦）。由于除了隐藏类型的输入外，所有的输入类型都是可聚焦的，这个属性不应该用在表单控件上，因为这样做需要管理文档中所有元素的聚焦顺序，如果设置错误，就有可能损害可用性和无障碍性。
- `title`

  - : 对所有元素有效的全局属性，包括所有的输入类型，包含一个代表与它所属的元素相关的咨询信息的文本。这样的信息通常以工具提示的形式呈现给用户（但不必要）。标题不应作为表单控件用途的主要解释。相反，可以使用 {{htmlelement('label')}} 元素，其 `for` 属性设置为表单控件的 [`id`](#id) 属性。参见下面的[标签](#标签)。

- `type`

  - : 一个字符串，指定要渲染的控件的类型。例如，要创建一个复选框，使用 `checkbox` 的值。如果省略（或指定一个未知值），则使用输入类型 `text`，创建一个纯文本输入字段。

    允许的值列在了上方的 [Input 类型](#input_类型)中。

- `value`

  - : 输入控件的值。当在 HTML 中指定时，这是初始值。从那时起，它可以在任何时候用 JavaScript 访问相应的 {{domxref("HTMLInputElement")}} 对象的 `value` 属性，用于改变或检索。`value` 属性总是可选的，不过对于 `checkbox'、`radio` 和 `hidden` 来说，应该被认为是必须的。

- `width`

  - : 仅对 `image` 输入按钮有效。`width` 是呈现在图片提交按钮上的图片宽度。参见 {{HTMLElement("input/image", "image")}} 输入类型。

### 非标准属性

以下非标准属性在某些浏览器中可以使用。一般地，除非无法实现你所需要的功能，否则不要使用它们。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>
        指定 autocorrect 状态的字符串，状态为 code>on</code> 或 <code>off</code>。<strong>仅 Safari 适用。</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        是否重复发送 {{domxref("HTMLInputElement/search_event", "search")}} 事件，以便在用户仍在编辑字段值时更新实时搜索结果。<strong>WebKit 和 Blink 适用（Safari、Chrome、Opera 等）。</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code></td>
      <td>
        <p>当用户在编辑字段时按下键盘的 <kbd>Enter</kbd> 或 <kbd>Return</kbd> 键时，所需要进行的动作的字符串表示，这用于决定虚拟键盘上那个键的合适的标签。</p>
        <p><strong>已弃用，请使用 <a href="/zh-CN/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> 替代。</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        设置范围滑块的呈现方向。<strong>仅 Firefox 适用。</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
       下拉菜单显示的最大查找结果数量。<strong>仅 Safari 适用。</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        一个布尔值，表示是否只允许用户选择一个目录（或多个目录，如果同时存在 <a href="#multiple"><code>multiple</code></a> 属性）。
      </td>
    </tr>
  </tbody>
</table>

- `autocorrect` {{non-standard_inline}}

  - : （仅 Safari 适用）。一个字符串，表示是否在用户编辑该字段时激活自动更正。允许的值为：

    - `on`
      - : 启用自动更正，如果配置了文字替换，则一同处理它们。
    - `off`
      - : 禁用自动更正和文字替换。

- `incremental` {{non-standard_inline}}

  - : 布尔属性 `incremental` 是 WebKit 和 Blink 的扩展（所以 Safari、Opera、Chrome 等都支持），如果存在的话，就会告诉{{Glossary("user agent","用户代理")}}将输入作为实时搜索处理。当用户编辑该字段的值时，用户代理将 {{domxref("HTMLInputElement/search_event", "search")}} 事件发送到代表搜索框的 {{domxref("HTMLInputElement")}} 对象。这使得你的代码能够在用户编辑搜索时实时更新搜索结果。

    如果没有指定 `incremental` 属性，则仅当用户明确发起搜索（如按下键盘上 <kbd>Enter</kbd> 或 <kbd>Return</kbd>）时，才会发送 {{domxref("HTMLInputElement/search_event", "search")}} 事件。

    `search` 事件是限速的，因此它的发送频率不会超过实施定义的间隔。

- `orient` {{non-standard_inline}}

  - : 类似于影响 {{htmlelement('progress')}} 和 {{htmlelement('meter')}} 元素的非标准 CSS 属性 -moz-orient，`orient` 属性定义范围滑块的方向。值包括 `horizontal`，代表范围滑块水平呈现；和 `vertical`，代表范围滑块垂直呈现。

- `results` {{non-standard_inline}}

  - : 只有 Safari 支持的 `results` 属性是一个数值，可以让你覆盖 {{HTMLElement("input")}} 元素原生提供的先前搜索查询下拉菜单中显示的最大条目数。

    该值必须是一个非负的十进制数字。如果没有提供，或者提供了一个无效的值，则使用浏览器的默认最大条目数。

- `webkitdirectory` {{non-standard_inline}}

  - : 布尔属性 `webkitdirectory` 如果存在，表示在文件选取界面中，只有目录可供用户选择。参见 {{domxref("HTMLInputElement.webkitdirectory")}} 以了解更多细节和例子。

    虽然最初只为基于 WebKit 的浏览器实现，但 `webkitdirectory` 也可以在 Microsoft Edge 以及 Firefox 50 和更高版本中使用。然而，尽管它有相对广泛的支持，它仍然不是标准的，除非你没有其他选择，否则不应该使用。

## 方法

以下方法由 DOM 中代表 `<input>` 元素的 {{domxref("HTMLInputElement")}} 接口提供。还有一些方法是由父接口 {{domxref("HTMLElement")}}、{{domxref("Element")}}、{{domxref("Node")}} 和 {{domxref("EventTarget")}} 提供的。

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : 如果元素的值通过了有效性检查，返回 `true`；否则，返回 `false` 并在该元素上触发 {{domxref("HTMLInputElement.invalid_event", "invalid")}} 事件。
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : 如果元素的值通过了有效性检查，返回 `true`；否则，返回 `false` 并在该元素上触发 {{domxref("HTMLInputElement.invalid_event", "invalid")}} 事件，如果事件没有取消，将问题报告给用户。
- {{domxref("HTMLInputElement.select", "select()")}}
  - : 如果 `<input>` 元素中的内容可选择，则选择其中的全部内容。对于没有可供选择的文字内容的元素（如可视化颜色选择器或日历日期输入），这个方法不做任何事情。
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : 如果输入元素的值不合法，设置显示的自定义信息。
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : 将输入元素中指定的字符范围的内容设置为一个给定的字符串。`selectMode` 参数可以控制现有内容如何被影响。
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : 在一个文本输入元素中选择指定的字符范围。对不以文本输入字段形式出现的输入没有任何作用。
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : 默认情况下，将一个数字输入的值减少 1，或减少指定的单位数量。
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : 默认情况下，将一个数字输入的值增加 1，或增加指定的单位数量。

## CSS

输入元素作为被替换的元素，有一些功能不适用于非表单元素。有一些 CSS 选择器可以根据表单控件的 UI 特征专门针对它们，也被称为 UI 伪类。输入元素也可以用属性选择器按类型定位。有一些属性也是特别有用的。

### UI 伪类

<table class="no-markdown">
  <caption>
  与<code>&#x3C;input></code>元素非常相关的标题：
  </caption>
  <thead>
    <tr>
      <th>伪类</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        任何当前启用的元素，可以被激活（选择、点击、输入等）或接受焦点；也有一个禁用状态，在这个状态下，它不能被激活或接受焦点。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        任何当前禁用的元素都有一个启用的状态，这意味着如果它没有被禁用，它可以被激活（选择、点击、输入等等）或接受焦点。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>不能被用户编辑的元素。</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>可以被用户编辑的元素。</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        当前显示<a href="#placeholder"><code>placeholder</code> 文字</a>的元素，包括有 <a href="#placeholder"><code>placeholder</code></a> 显示，尚未拥有值的 <code>&#x3C;input></code> 和 {{HTMLElement("textarea")}} 元素。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        在一组相关元素中属于默认的表单元素。匹配 {{HTMLElement("input/checkbox", "checkbox")}} 和 {{HTMLElement("input/radio", "radio")}} 在页面加载或渲染时被选中的输入类型。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        匹配当前被选中的 {{HTMLElement("input/checkbox", "checkbox")}} 和 {{HTMLElement("input/radio", "radio")}} 输入类型（以及当前被选中的 {{HTMLElement("select")}} 中的 {{HTMLElement("option")}}）。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        indeterminate 属性被 JavaScript 设置为真的 {{HTMLElement("input/checkbox", "checkbox")}} 元素，表单中所有具有相同名称值的单选按钮被取消选中的 {{HTMLElement("input/radio", "radio")} 元素，以及处于不确定状态的 {{HTMLElement("progress")}} 元素。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        可以应用约束验证的表单控件，并且当前是有效的。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        应用了约束条件验证的表单控件，并且当前是无效的。匹配一个表单控件，它的值与它的属性设置的约束条件不一致，如 <a href="#required"><code>required</code></a>、<a href="#pattern"><code>pattern</code></a>、<a href="#step"><code>step</code></a> 和 <a href="#max"><code>max</code></a>。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        一个非空的输入，其当前值在 <a href="#min"><code>min</code></a> 和 <a href="#max"><code>max</code></a> 属性以及 <a href="#step"><code>step</code> 指定的范围限制内。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        一个非空的输入，其当前值不在 <a href="#min"><code>min</code></a> 和 <a href="#max"><code>max</code></a> 属性以及 <a href="#step"><code>step</code> 指定的范围限制内。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        有 <a href="#required"><code>required</code></a> 属性设置的 <code>&#x3C;input></code>、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 元素。只匹配可以被 required 的元素，不匹配不能被 required 的元素。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        没有 <a href="#required"><code>required</code></a> 属性设置的 <code>&#x3C;input></code>、{{HTMLElement("select")}} 或 {{HTMLElement("textarea")}} 元素。只匹配可以被 required 的元素，不匹配不能被 required 的元素。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        没有值的 <code>&#x3C;input></code> 和 {{HTMLElement("textarea")}} 元素。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        与 <code>:invalid</code> 相似，但是在失焦的情况下激活。匹配无效的输入，但只在用户交互之后，例如关注该控件、离开该控件或试图提交包含无效控件的表单。
      </td>
    </tr>
  </tbody>
</table>

#### 伪类示例

我们可以根据复选框是否被选中来为复选框的标签添加样式。在这个例子中，我们对紧跟在复选输入之后的 {{cssxref('color')}} 和 {{cssxref('font-weight')}} 的 {{htmlelement('label')}} 进行样式设置。如果 `input` 没有选中，我们没有应用任何样式。

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

使用[属性选择器](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)，可以根据表单控件的 [`type`](#type) 来锁定不同类型的表单控件。CSS 属性选择器只需根据一个属性的存在或一个给定属性的值来匹配元素。

```css
/* 匹配密码输入 */
input[type="password"] {
}
/* 匹配合法值限制在一个范围内的表单控件 */
input[min][max] {
}
/* 匹配含有 pattern 属性的表单控件 */
input[pattern] {
}
```

### ::placeholder

默认情况下，占位符文本的外观是半透明或浅灰色。{{cssxref('::placeholder')}} 伪元素是输入的 [`placeholder` 文本](#placeholder)。可以使用有限的 CSS 属性子集为其赋予样式。

```css
::placeholder {
  color: blue;
}
```

只有适用于 {{cssxref("::first-line")}} 伪元素的 CSS 属性子集可以在选择器中使用 `::placeholder` 的规则。

### appearance

{{cssxref("appearance")}} 属性可以将（几乎）任何元素显示为基于操作系统主题的平台原生样式，也可以用 `none` 值去除任何平台原生样式。

你可以用 `div {appearance: radio;}` 使 `<div>` 看起来像一个单选按钮，或者用 `[type="radio"] {appearance: checkbox;}` 使一个单选看起来像一个复选框，但不要这样做。

设置 `appearance: none` 移除了平台原生的边框，但没有移除其功能。

### caret-color

一个专门针对文本输入相关元素的属性是 CSS {{cssxref("caret-color")}} 属性，它可以让你设置用于绘制文本输入光标的颜色：

#### HTML

```html
<label for="textInput">请注意红色光标：</label>
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

在某些情况下（通常涉及非文本输入和专门的界面），`<input>` 元素是一个[被替换的元素](/zh-CN/docs/Web/CSS/Replaced_element)。当它为替换元素时，该元素在其框架内的位置和大小可以使用 CSS {{cssxref("object-position")}} 和 {{cssxref("object-fit")}} 属性来调整。

### 赋予样式

关于在 HTML 中为元素添加颜色的更多信息，参见：

- [使用 CSS 为 HTML 元素添加颜色](/zh-CN/docs/Web/CSS/CSS_Colors/Applying_color)。

还可以参考：

- [为 HTML 表单赋予样式](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [HTML 表单高级样式化](/zh-CN/docs/Learn/Forms/Advanced_form_styling) 和
- [CSS 属性兼容性表格](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)。

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
        >。如果 <code
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
