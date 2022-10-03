---
title: <input>：输入（表单输入）元素
slug: Web/HTML/Element/Input
---

{{HTMLRef}}

**HTML `<input>` 元素**用于为基于 Web 的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件，具体取决于设备和{{Glossary("user agent", "用户代理")}}。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/HTML/Content_categories">内容分类</a>
      </th>
      <td>
        流式元素；短语元素；交互元素（若 type 属性不处于隐藏
        <code>hidden</code
        >状态）；表单相关内容、可列举的元素、可标签的元素、可提交的元素、可重置的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        无，这是一个{{Glossary("empty element","空元素")}}。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td><p>必须有开始标签但不必有结束标签。</p></td>
    </tr>
    <tr>
      <th scope="row">允许的祖先元素</th>
      <td>任何元素都可以包含语句型元素。</td>
    </tr>
    <tr>
      <th scope="row">允许的无障碍网络应用</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>：{{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}},
            {{ARIARole("tab")}}
          </li>
          <li>
            <code>type=checkbox</code>：{{ARIARole("button")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("option")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=image</code>：{{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=radio</code>：{{ARIARole("menuitemradio")}}
          </li>
          <li>
            <code>type=color|date|datetime|datetime-local|email|file</code
            >：None
          </li>
          <li>
            <code>type=hidden|month|number|password|range|research</code>：None
          </li>
          <li><code>type=search|submit|tel|text|url|week</code>：None</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## `<input>` types

`<input>` 的工作方式相当程度上取决于 {{htmlattrxref("type", "input")}} 属性的值，不同的 type 值会在各自的参考页中进行介绍。如果未指定此属性，则采用的默认类型为 `text`。

可用的值包括：

<table class="standard-table">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
      <th>描述</th>
      <th>基础例子</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        没有默认行为的按钮，上面显示
        <a href="#attr-value">value</a> 属性的值，默认为空。
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" />
    </pre
        >
        {{EmbedLiveSample("examplebutton",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>复选框，可设为选中或未选中。</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/>
    </pre
        >
        {{EmbedLiveSample("examplecheckbox",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>用于指定颜色的控件；在支持的浏览器中，激活时会打开取色器。</td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/>
    </pre
        >
        {{EmbedLiveSample("examplecolor",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        输入日期的控件（年、月、日，不包括时间）。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/>
    </pre
        >
        {{EmbedLiveSample("exampledate",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        输入日期和时间的控件，不包括时区。在支持的浏览器激活时打开日期选择器或年月日的数字滚轮。
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/>
    </pre
        >
        {{EmbedLiveSample("exampledtl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        编辑邮箱地址的区域。类似
        <code>text</code>
        输入，但在支持的浏览器和带有动态键盘的设备上会有确认参数和相应的键盘。
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/>
    </pre
        >
        {{EmbedLiveSample("exampleemail",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        让用户选择文件的控件。使用
        <a href="#attr-accept">accept</a> 属性规定控件能选择的文件类型。
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/>
    </pre
        >
        {{EmbedLiveSample("examplefile",'100%',55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        不显示的控件，其值仍会提交到服务器。举个例子，右边就是一个隐形的控件。
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        带图像的 <code>submit</code> 按钮。显示的图像由
        <code>src</code> 属性规定。如果 <a href="#attr-src">src</a> 缺失，<a
          href="#attr-alt"
          >alt</a
        >
        属性就会显示。
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/>
    </pre
        >
        {{EmbedLiveSample("exampleimage",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>输入年和月的控件，没有时区。</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/>
    </pre
        >
        {{EmbedLiveSample("examplemonth",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        用于输入数字的控件。如果支持的话，会显示滚动按钮并提供缺省验证（即只能输入数字）。拥有动态键盘的设备上会显示数字键盘。
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/>
    </pre
        >
        {{EmbedLiveSample("examplenumber",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>单行的文本区域，其值会被遮盖。如果站点不安全，会警告用户。</td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/>
    </pre
        >
        {{EmbedLiveSample("examplepassword",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        单选按钮，允许在多个拥有相同
        <a href="#attr-name">name</a> 值的选项中选中其中一个。
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/>
    </pre
        >
        {{EmbedLiveSample("exampleradio",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        此控件用于输入不需要精确的数字。控件是一个范围组件，默认值为正中间的值。同时使用
        <a href="#attr-min">min</a> 和
        <a href="#attr-max">max</a> 来规定值的范围。
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/>
    </pre
        >
        {{EmbedLiveSample("examplerange",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>此按钮将表单的所有内容重置为默认值。不推荐。</td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/>
    </pre
        >
        {{EmbedLiveSample("examplereset",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        用于搜索字符串的单行文字区域。输入文本中的换行会被自动去除。在支持的浏览器中可能有一个删除按钮，用于清除整个区域。拥有动态键盘的设备上的回车图标会变成搜索图标。
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/>
    </pre
        >
        {{EmbedLiveSample("examplesearch",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>用于提交表单的按钮。</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/>
    </pre
        >
        {{EmbedLiveSample("examplesubmit",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>用于输入电话号码的控件。拥有动态键盘的设备上会显示电话数字键盘。</td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/>
    </pre
        >
        {{EmbedLiveSample("exampletel",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>默认值。单行的文本区域，输入中的换行会被自动去除。</td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/>
    </pre
        >
        {{EmbedLiveSample("exampletext",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>用于输入时间的控件，不包括时区。</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/>
    </pre
        >
        {{EmbedLiveSample("exampletime",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        <p>
          用于输入 URL 的控件。类似
          <code>text</code>
          输入，但有验证参数，在支持动态键盘的设备上有相应的键盘。
        </p>
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/>
    </pre
        >
        {{EmbedLiveSample("exampleurl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>用于输入以年和周数组成的日期，不带时区。</td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/>
    </pre
        >
        {{EmbedLiveSample("exampleweek",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <th colspan="3">废弃的值</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/datetime", "datetime")}}</td>
      <td>
        {{deprecated_inline}} 用于输入基于 UTC
        时区的日期和时间（时、分、秒及秒的小数部分）。
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/>
    </pre
        >
        {{EmbedLiveSample("exampledatetime",200,75,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

## 属性

`<input>` 元素由于拥有诸多属性而异常强大，其中前文举例说明的 {{htmlattrxref("type", "input")}} 属性尤其重要。由于所有 `<input>` 元素，无论是哪种 `type`，都基于 {{domxref("HTMLInputElement")}} 接口，所以理论上说，它们共享一套相同的属性。但实际上大部分属性只作用于特定一组 `type`。此外，一些属性作用于 `<input>` 的方式取决于 `<input>` 的 `type` 属性，不同的 `type` 有不同的效果。

下面的表格列出了所有属性，每个属性都有简短的描述。表格后的列表更详细地描述了各个属性及它们与哪些 `<input>` `type` 相关。与大部分或者全部 `<input>` `type` 都相关的属性会讲述更多细节。一些针对特定 `<input>` `type` 的属性，或者所有 `<input>` `type` 都有，但在特定的 `<input>` `type` 上有特定表现的属性，会在相应的 `type` 页面中说明。这个元素包含全局属性，一些针对 `<input>` 元素有额外意义的全局属性也会特别说明。

一些额外的非标准属性会在标准属性后面列出。

### 属性各论

- {{ htmlattrdef("accept") }}
  - : 如果该元素的 **type** 属性的值是 `file`，则该属性表明了服务器端可接受的文件类型；否则它将被忽略。该属性的值必须为一个逗号分割的列表，包含了多个唯一的内容类型声明：

    - 以 STOP 字符 (U+002E) 开始的文件扩展名。（例如：".jpg,.png,.doc"）
    - 一个有效的 MIME 类型，但没有扩展名
    - `audio/*` 表示音频文件
    - `video/*` 表示视频文件
    - `image/*` 表示图片文件
- {{ htmlattrdef("accesskey") }} {{Deprecated_Inline}}
  - : 用户按下后可以获得此控件焦点的单个字符。这是 HTML5 全局属性。
- {{ htmlattrdef("autocomplete") }}
  - : 这个属性表示这个控件的值是否可被浏览器自动填充。如果 **type** 属性的值是 hidden、checkbox、radio、file，或为按钮类型（button、submit、reset、image），则本属性被忽略。可用的值是：

    - `off`：用户必须手动填值，或者该页面提供了自己的自动补全方法。浏览器不对此字段自动填充。
    - `on`：浏览器可以根据用户先前的填表情况对此字段自动填值。
    - `name`：完整的姓名
    - `honorific-prefix`：Prefix or title (e.g. "Mr.", "Ms.", "Dr.", "Mlle")
    - `given-name`：名
    - `additional-name`
    - `family-name`：姓
    - `honorific-suffix`：Suffix (e.g. "Jr.", "B.Sc.", "MBASW", "II")
    - `nickname`
    - `email`
    - `username`
    - `new-password`：新密码（如创建帐号或更改密码时使用）
    - `current-password`
    - `organization-title`：Job title (e.g. "Software Engineer", "Senior Vice President", "Deputy Managing Director")
    - `organization`
    - `street-address`
    - `address-line1`、`address-line2`、`address-line3`、`address-level4`、`address-level3`、`address-level2`、`address-level1`
    - `country`
    - `country-name`
    - `postal-code`
    - `cc-name`：Full name as given on the payment instrument
    - `cc-given-name`
    - `cc-additional-name`
    - `cc-family-name`
    - `cc-number`：Code identifying the payment instrument (e.g. the credit card number)
    - `cc-exp`：Expiration date of the payment instrument
    - `cc-exp-month`
    - `cc-exp-year`
    - `cc-csc`：Security code for the payment instrument
    - `cc-type`：Type of payment instrument (e.g. Visa)
    - `transaction-currency`
    - `transaction-amount`
    - `language`：Preferred language; Valid BCP 47 language tag
    - `bday`
    - `bday-day`
    - `bday-month`
    - `bday-year`
    - `sex`：Gender identity (e.g. Female, Fa'afafine); Free-form text, no newlines
    - `tel`
    - `url`：Home page or other Web page corresponding to the company, person, address, or contact information in the other fields associated with this field
    - `photo`：Photograph, icon, or other image corresponding to the company, person, address, or contact information in the other fields associated with this field
    - 参考 [WHATWG 标准](https://html.spec.whatwg.org/multipage/forms.html#autofill) 获取更多详细内容。如果 `<input>` 元素上没有 **autocomplete** 属性，浏览器可使用包含该 input 元素的表单（`<form>`）或通过 input 的 **form** 属性指定的表单的 **autocomplete** 属性值。更多信息请参见 {{ HTMLElement("form") }} 的 `autocomplete` 属性。与其他浏览器不同，**autocomplete** 还控制着 Firefox 浏览器对 \<input> 持久化动态禁用状态和（如果适用）跨页面加载的动态检查。持久化特性默认是开启的。设置 **autocomplete** 的值为 **off** 可以关闭该特性。即使 autocomplete 属性通常不应用于 \<input> 的 type，它也可以工作。具体可以查看 {{bug(654072)}}。
- {{ htmlattrdef("autofocus") }}
  - : 这个布尔属性允许您指定的表单控件在页面加载时具有焦点（自动获得焦点），除非用户将其覆盖，例如通过键入不同的控件。文档中只有一个表单元素可以具有 autofocus 属性，它是一个布尔值。如果 type 属性设置为隐藏则不能应用（即您不能自动获得焦点的属性设置为隐藏的控件）。
- {{htmlattrdef("capture")}}
  - : Introduced in the HTML Media Capture specification and valid for the `file` input type only, the `capture` attribute defines which media—microphone, video, or camera—should be used to capture a new file for upload with `file` upload control in supporting scenarios. See the {{HTMLElement("input/file", "file")}} input type.
- {{ htmlattrdef("checked") }}
  - : 如果该元素的 **type** 属性的值为 radio 或者 checkbox，则该布尔属性的存在与否表明了该控件是否是默认选择状态。If present on a `checkbox` type, it indicates that the checkbox is checked by default (when the page loads). It does _not_ indicate whether this checkbox is currently checked: if the checkbox’s state is changed, this content attribute does not reflect the change. (Only the [`HTMLInputElement`’s `checked` IDL attribute](/zh-CN/docs/Web/API/HTMLInputElement) is updated.)

    > **备注：** Unlike other input controls, a checkboxes and radio buttons value are only included in the submitted data if they are currently `checked`. If they are, the name and the value(s) of the checked controls are submitted.For example, if a checkbox whose `name` is `fruit` has a `value` of `cherry`, and the checkbox is checked, the form data submitted will include `fruit=cherry`. If the checkbox isn't active, it isn't listed in the form data at all. The default `value` for checkboxes and radio buttons is `on`.
- {{htmlattrdef("dirname")}}
  - : Valid for `text` and `search` input types only, the `dirname` attribute enables the submission of the directionality of the element. When included, the form control will submit with two name/value pairs: the first being the [name](#attr-name) and [value](#attr-value), the second being the value of the `dirname` as the name with the value of `ltr` or `rtl` being set by the browser.

    ```html
    <form action="page.html" method="post">
      <label>Fruit: <input type="text" name="fruit" dirname="fruit.dir" value="cherry"></label>
      <input type="submit"/>
    </form>
    <!-- page.html?fruit=cherry&fruit.dir=ltr -->
    ```

    When the form above is submitted, the input cause both the `name` / `value` pair of `fruit=cherry` and the `dirname` / direction pair of `fruit.dir=ltr` to be sent.

- {{ htmlattrdef("disabled") }}
  - : 这个布尔属性表示此表单控件不可用。特别是在禁用的控件中， `click` 事件 [将不会被分发](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#enabling-and-disabling-form-controls) 。并且，禁用的控件的值在提交表单时也不会被提交。如果 **type** 属性为 hidden，此属性将被忽略。

> **备注：** Although not required by the specification, Firefox will by default [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the {{htmlattrxref("autocomplete","input")}} attribute to control this feature.

- {{ htmlattrdef("form") }}
  - : A string specifying the {{HTMLElement("form")}} element with which the input is associated (that is, its **form owner**). This string's value, if present, must match the {{htmlattrxref("id")}} of a `<form>` element in the same document. If this attribute isn't specified, the `<input>` element is associated with the nearest containing form, if any.The `form` attribute lets you place an input anywhere in the document but have it included with a form elsewhere in the document.Note: An input can only be associated with one form.
- {{htmlattrdef('formaction')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formenctype')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formmethod')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formnovalidate')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formtarget')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{ htmlattrdef("height") }}
  - : 如果 **type** 属性的值是 image，这个属性定义了按钮图片的高度。
- {{htmlattrdef("id")}}
  - : Global attribute valid for all elements, including all the input types, it defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking. The value is used as the value of the {{htmlelement('label')}}'s `for` attribute to link the label with the form control. See the [the label element](#labels) below.
- {{htmlattrdef("inputmode")}}
  - : Global value valid for all elements, it provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Values include none
    `text`, `tel`, `url`, `email`, `numeric`, `decimal`, and `search`.
- {{htmlattrdef("list")}}
  - : The values of the list attribute is the {{domxref("Element.id", "id")}} of a {{HTMLElement("datalist")}} element located in the same document. The `<datalist>` provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the {{htmlattrxref("type", "input")}} are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.

```html
<datalist id="colorsxx">
  <option>#ff0000</option>
  <option>#ee0000</option>
  <option>#dd0000</option>
  <option>#cc0000</option>
  <option>#bb0000</option>
</datalist>
<datalist id="numbersxx">
  <option>0</option>
  <option>2</option>
  <option>4</option>
  <option>8</option>
  <option>16</option>
  <option>32</option>
  <option>64</option>
</datalist>
<datalist id="fruitsxx">
  <option>cherry</option>
  <option>banana</option>
  <option>mango</option>
  <option>orange</option>
  <option>blueberry</option>
</datalist>
<datalist id="urlsxx">
  <option>https://developer.mozilla.org</option>
  <option>https://caniuse.com/</option>
  <option>https://mozilla.com</option>
  <option>https://mdn.github.io</option>
  <option>https://www.youtube.com/user/firefoxchannel</option>
</datalist>

<p>
  <label for="textx">Text</label>
  <input type="text" list="fruitsxx" id="textx"/>
</p>
<p>
  <label for="colorx">Color</label>
  <input type="color" list="colorsxx" id="colorx"/>
</p>
<p>
  <label for="rangex">Range</label>
  <input type="range" min="0" max="64" list="numbersxx" id="rangex"/>
</p>
<p>
  <label for="numberx">Number</label>
  <input type="number" min="0" max="64" list="numbersxx" id="numberx"/>
</p>
<p>
  <label for="urlx">URL</label>
  <input type="url" list="urlsxx" id="urlx"/>
</p>
```

{{EmbedLiveSample("datalist",400,275,"","", "nobutton")}}

It is valid on `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, and `color`.

Per the specifications, the `list` attribute is not supported by the `hidden`, `password`, `checkbox`, `radio`, `file`, or any of the button types.

Depending on the browser, the user may see a custom color palette suggested, tic marks along a range, or even a input that opens like a select but allows for non-listed values. Check out the [browser compatibility table](/zh-CN/docs/Web/HTML/Element/datalist#Browser_compatibility) for the other input types.

See the {{htmlelement('datalist')}} element.

- {{ htmlattrdef("max") }}
  - : 此项目的最大（数字或日期时间）值，且不得小于其最小值（**min** 属性值）。
- {{ htmlattrdef("maxlength") }}
  - : 如果 **type** 的值是 text、email、search、password、tel 或 url，那么这个属性指明了用户最多可以输入的字符个数（按照 Unicode 编码方式计数）；对于其他类型的输入框，该属性被忽略。它可以大于 **size** 属性的值。如果不指定这个属性，那么用户可以输入任意多的字符。如果指定为一个负值，那么元素表现出默认行为，即用户可以输入任意多的字符。本属性的约束规则，仅在元素的 value 属性发生变化时才会执行。译者注：ie10+
- {{ htmlattrdef("min") }}
  - : 此项目的最小（数字或日期时间）值，且不得大于其最大值（**max** 属性值）。
- {{htmlattrdef("minlength")}}
  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the minimum number of characters (as UTF-16 code units) the user can enter into the entry field. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length.The input will fail [constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation) if the length of the text entered into the field is fewer than `minlength` UTF-16 code units long, preventing form submission. See [Client-side validation](#client-side_validation) for more information.
- {{ htmlattrdef("multiple") }}
  - : 这个 **Boolean** 属性指明了用户能否输入多个值，仅在 **type** 属性为 email 或 file 时生效，否则将被忽略。
- {{ htmlattrdef("name") }}
  - : 控件的名称，与表单数据一起提交。
- {{ htmlattrdef("pattern") }}
  - : 检查控件值的正则表达式。pattern 必须匹配整个值，而不仅仅是某些子集。使用 title 属性来描述帮助用户的模式。仅在 **type** 属性的值为 text、search、tel、url 或 email 时生效，否则将被忽略。译者注：ie10+
- {{ htmlattrdef("placeholder") }}
  - : 提示用户输入框的作用。用于提示的占位符文本不能包含回车或换行。仅在 **type** 属性为 text、search、tel、url 或 email 时生效，否则将被忽略。

    > **备注：** 请不要用 `placeholder` 属性替换 {{ HTMLElement("label") }} 元素。他们的作用不同：{{ HTMLElement("label") }} 属性描述表单元素的角色; 也就是说，它展示预期的信息，而 `placeholder` 属性是提示用户内容的输入格式。某些情况下 `placeholder` 属性对用户不可见，所以当没有它时也需要保证 form 能被理解。
- {{ htmlattrdef("readonly") }}
  - : 这个布尔属性用于指明用户无法修改控件的值。如果控件的 **type** 属性为 hidden、range、color、checkbox、radio、file，此属性将被忽略。
- {{ htmlattrdef("required") }}
  - : 这个属性指定用户在提交表单之前必须为该元素填充值。当 type 属性是 hidden、image 或者按钮类型（submit、reset、button）时不可使用。 {{ cssxref(":optional") }} 和 {{ cssxref(":required") }} CSS 伪元素的样式将可以被该字段应用作外观。
- {{ htmlattrdef("selectionDirection") }}
  - : The direction in which selection occurred. This is "forward" if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or "backward" if the selection was made in the opposite direction. This can be "none" if the selection direction is unknown.
- {{ htmlattrdef("size") }}
  - : 控件的初始大小。以像素为单位。但当 **type** 属性为 text 或 password 时，它表示输入的字符的长度。从 HTML5 开始，此属性仅在 **type** 属性为 text、search、tel、url、email 或 password 时生效，否则将被忽略。此外，它的值必须大于 0。如果未指定大小，则使用默认值 20。HTML5 概述 "用户代理应该确保至少大部分字符是可见的"，但是不同的字符的用不同的字体表示可能会导致宽度不同。在某些浏览器中，一串带有 x 的字符即使定义了到 x 的大小也将显示不完整。
- {{ htmlattrdef("spellcheck") }}
  - : 将此属性的值设置为 `true` 表示元素需要检查其拼写和语法。值为 `default` 表示该元素将根据默认行为进行操作，可能基于父元素自己的 `spellcheck` 值。值为 `false` 表示不应该检查元素
- {{ htmlattrdef("src") }}
  - : 如果 **type** 属性的值是 image，这个属性指定了按钮图片的路径; 否则将被忽视。
- {{ htmlattrdef("step") }}
  - : 使用 **min** 和 **max** 属性来限制可以设置数字或日期时间值的增量。它可以是任意字符串或是正浮点数。如果此属性未设置为任何，则控件仅接受大于最小步长值的倍数的值。
- {{ htmlattrdef("tabindex") }}
  - : 元素在当前文档的 Tab 导航顺序中的位置。
- {{htmlattrdef('title')}}
  - : Global attribute valid for all elements, including all input types, containing a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip. The title should NOT be used as the primary explanation of the purpose of the form control. Instead, use the {{htmlelement('label')}} element with a `for` attribute set to the form control's {{htmlattrdef('id')}} attribute. See [Labels](#labels) below.
- {{ htmlattrdef("type") }}
  - : 要呈现的控件类型。有关各个类型的信息，请参阅 [Form \<input> types](#input_types)，其中包含指向每个类型的更多信息的链接。
- {{ htmlattrdef("usemap") }} {{Deprecated_Inline}}
  - : 作为图像映射的 {{ HTMLElement("map") }} 元素的名称。
- {{ htmlattrdef("value") }}
  - : 控件的初始值。此属性是可选的，除非 **type** 属性是 `radio` 或 `checkbox`。注意，当重新加载页面时，如果在重新加载之前更改了值，[Gecko 和 IE 将忽略 HTML 源代码中指定的值](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186)。
- {{ htmlattrdef("width") }}
  - : 如果 **type** 属性的值是 image，这个属性定义了按钮图片的宽度。

### 非标准 `<input>` 属性

- {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

  - : This is a non-standard attribute supported by Safari that is used to control whether autocorrection should be enabled when the user is entering/editing the text value of the `<input>`. Possible attribute values are:

    - `on`：Enable autocorrection.
    - `off`：Disable autocorrection.[`autocorrect` documentation](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocorrect) in the Safari HTML Reference.

- {{ htmlattrdef("mozactionhint") }} {{ non-standard_inline() }}
  - : Specifies an "action hint" used to determine how to label the enter key on mobile devices with virtual keyboards. Supported values are `go`, `done`, `next`, `search`, and `send`; these automatically get mapped to the appropriate string (and are case-insensitive).
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}
  - : This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:

    - `none`：Completely disables automatic capitalization
    - `sentences`：Automatically capitalize the first letter of sentences.
    - `words`：Automatically capitalize the first letter of words.
    - `characters`：Automatically capitalize all characters.
    - `on`：{{deprecated_inline()}} Deprecated since iOS 5.
    - `off`：{{deprecated_inline()}} Deprecated since iOS 5.[`autocapitalize` documentation in the Safari HTML Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocapitalize)
- {{htmlattrdef("incremental")}} {{non-standard_inline}}
  - : This is a nonstandard attribute supported by WebKit (Safari) and Blink (Chrome) that only applies when the **type** is `search`. If the attribute is present, regardless of what its value is, the `<input>` fires [`search`](/zh-CN/docs/Web/Events/search) events as the user edits the text value. The event is only fired after an implementation-defined timeout has elapsed since the most recent keystroke, and new keystrokes reset the timeout. In other words, the event firing is debounced. If the attribute is absent, the [`search`](/zh-CN/docs/Web/Events/search) event is only fired when the user explicitly initiates a search (e.g. by pressing the Enter key while within field). [`incremental` documentation in the Safari HTML Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-incremental)
- {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}
  - : Specifies an "action hint" used to determine how to label the enter key on mobile devices with virtual keyboards. Supported values are `go`, `done`, `next`, `search`, and `send`. These automatically get mapped to the appropriate string and are case-insensitive.
- {{htmlattrdef("results")}} {{non-standard_inline}}
  - : This is a nonstandard attribute supported by Safari that only applies when the **type** is `search`. It is used to control the maximum number of entries that should be displayed in the `<input>`'s native dropdown list of past search queries. Its value should be a nonnegative decimal integer.
- {{htmlattrdef("webkitdirectory")}} {{non-standard_inline}}
  - : This Boolean attribute indicates if the selector used when the **type** attribute is `file`has to allow for the selection of directories only.
- {{htmlattrdef("x-moz-errormessage")}} {{non-standard_inline}}
  - : This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate.

## Methods

The following methods are provided by the [`HTMLInputElement`](/zh-CN/docs/Web/API/HTMLInputElement) interface which represents `<input>` elements in the DOM. Also available are those methods specified by the parent interfaces, [`HTMLElement`](/zh-CN/docs/Web/API/HTMLElement), [`Element`](/zh-CN/docs/Web/API/Element), [`Node`](/zh-CN/docs/Web/API/Node), and [`EventTarget`](/zh-CN/docs/Web/API/EventTarget).

- [`checkValidity()`](/zh-CN/docs/Web/API/HTMLInputElement/checkValidity)
  - : Immediately runs the validity check on the element, triggering the document to fire the [`invalid`](/zh-CN/docs/Web/API/HTMLInputElement/invalid_event) event at the element if the value isn't valid.
- [`reportValidity()`](/zh-CN/docs/Web/API/HTMLFormElement/reportValidity)
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false`.
- [`select()`](/zh-CN/docs/Web/API/HTMLInputElement/select)
  - : Selects the entire content of the `<input>` element, if the element's content is selectable. For elements with no selectable text content (such as a visual color picker or calendar date input), this method does nothing.
- [`setCustomValidity()`](/zh-CN/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Sets a custom message to display if the input element's value isn't valid.
- [`setRangeText()`](/zh-CN/docs/Web/API/HTMLInputElement/setRangeText)
  - : Sets the contents of the specified range of characters in the input element to a given string. A `selectMode` parameter is available to allow controlling how the existing content is affected.
- [`setSelectionRange()`](/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Selects the specified range of characters within a textual input element. Does nothing for inputs which aren't presented as text input fields.
- [`stepDown()`](/zh-CN/docs/Web/API/HTMLInputElement/stepDown)
  - : Decrements the value of a numeric input by one, by default, or by the specified number of units.
- [`stepUp()`](/zh-CN/docs/Web/API/HTMLInputElement/stepUp)
  - : Increments the value of a numeric input by one or by the specified number of units.

## CSS

Inputs, being replaced elements, have a few features not applicable to non form elements. There are CSS selectors that can specification target form controls based on their UI features, also known as UI pseudo-classes. The input element can also be targeted by type with attribute selectors. There are some properties that are especially useful as well.

### UI pseudo-classes

| Pseudo-class                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`:enabled`](/zh-CN/docs/Web/CSS/:enabled)                     | Any currently enabled element that can be activated (selected, clicked on, typed into, etc.) or accept focus and also has a disabled state, in which it can't be activated or accept focus.                                                                                                                                                                                                     |
| [`:disabled`](/zh-CN/docs/Web/CSS/:disabled)                   | Any currently disabled element that has an enabled state, meaing it otherwise could be activated (selected, clicked on, typed into, etc.) or accept focus were it not disabled.                                                                                                                                                                                                                 |
| [`:read-only`](/zh-CN/docs/Web/CSS/:read-only)                 | Element not editable by the user                                                                                                                                                                                                                                                                                                                                                                |
| [`:read-write`](/zh-CN/docs/Web/CSS/:read-write)               | Element that is editable by the user.                                                                                                                                                                                                                                                                                                                                                           |
| [`:placeholder-shown`](/zh-CN/docs/Web/CSS/:placeholder-shown) | Element that is currently displaying [placeholder text](/zh-CN/docs/Web/HTML/Element/input#attr-placeholder), including input elements with the [placeholder](#htmlattrdefplaceholder) attribute present that has, as of yet, no value.                                                                                                                                                         |
| [`:default`](/zh-CN/docs/Web/CSS/:default)                     | Form elements that are the default in a group of related elements. Matches [checkbox](/zh-CN/docs/Web/HTML/Element/input/checkbox) and [radio](/zh-CN/docs/Web/HTML/Element/input/radio) input types that were checked on page load or render.                                                                                                                                                  |
| [`:checked`](/zh-CN/docs/Web/CSS/:checked)                     | Matches [checkbox](/zh-CN/docs/Web/HTML/Element/input/checkbox) and [radio](/zh-CN/docs/Web/HTML/Element/input/radio) input types that are currently checked (and the ([`<option>`](/zh-CN/docs/Web/HTML/Element/option) in a [`<select>`](/zh-CN/docs/Web/HTML/Element/select) that is currently selected).                                                                                    |
| [`:indeterminate`](/zh-CN/docs/Web/CSS/:indeterminate)         | [checkbox](/zh-CN/docs/Web/HTML/Element/input/checkbox) elements whose indeterminate property is set to true by JavaScript, [radio](/zh-CN/docs/Web/HTML/Element/input/radio) elements, when all radio buttons with the same name value in the form are unchecked, and [`<progress>`](/zh-CN/docs/Web/HTML/Element/progress) elements in an indeterminate state                                 |
| [`:valid`](/zh-CN/docs/Web/CSS/:valid)                         | Form controls that can have constraint validation applied and are currently valid.                                                                                                                                                                                                                                                                                                              |
| [`:invalid`](/zh-CN/docs/Web/CSS/:invalid)                     | Form controls that have constraint validation applied and are currently not valid. Matches a form control whose value doesn't match the constraints set on it by it's attributes, such as [required](#htmlattrdefrequired), [pattern](#htmlattrdefpattern) , [step](#htmlattrdefstep) and [max](#htmlattrdefmax).                                                                               |
| [`:in-range`](/zh-CN/docs/Web/CSS/:in-range)                   | A non-empty input whose current value is within the range limits specified by the [min](#htmlattrdefmin) and [max](#htmlattrdefmax) attributes and the [step](#htmlattrdefstep) .                                                                                                                                                                                                               |
| [`:out-of-range`](/zh-CN/docs/Web/CSS/:out-of-range)           | A non-empty input whose current value is NOT within the range limits specified by the [min](#htmlattrdefmin) and [max](#htmlattrdefmax) attributes or does not adher to the [step](#htmlattrdefstep) constraint.                                                                                                                                                                                |
| [`:placeholder-shown`](/zh-CN/docs/Web/CSS/:placeholder-shown) | An [`<input>`](/zh-CN/docs/Web/HTML/Element/input) or [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) element that is currently displaying placeholder text.                                                                                                                                                                                                                              |
| [`:required`](/zh-CN/docs/Web/CSS/:required)                   | [`<input>`](/zh-CN/docs/Web/HTML/Element/input), [`<select>`](/zh-CN/docs/Web/HTML/Element/select), or [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) element that has the [`required`](/zh-CN/docs/Web/HTML/Element/input#attr-required) attribute set on it. Only matches elements that can be required. The attribute included on a non-requirable element will not make for a match. |
| [`:optional`](/zh-CN/docs/Web/CSS/:optional)                   | [`<input>`](/zh-CN/docs/Web/HTML/Element/input), [`<select>`](/zh-CN/docs/Web/HTML/Element/select), or [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) element that does NOT have the [`required`](/zh-CN/docs/Web/HTML/Element/input#attr-required) attribute set on it. Does not match elements that can't be required.                                                                 |
| [`:blank`](/zh-CN/docs/Web/CSS/:blank)                         | [`<input>`](/zh-CN/docs/Web/HTML/Element/input) and [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea) elements that currently have no value.                                                                                                                                                                                                                                                |
| [`:user-invalid`](/zh-CN/docs/Web/CSS/:user-invalid)           | Similar to `:invalid`, but is activated on blur. Matches invalid input but only after the user interaction, such as by focusing on the control, leaving the control, or attempting to submit the form containing the invalid control.                                                                                                                                                           |

#### Examples

We can style a checkbox label based on whether the checkbox is checked or not. In this example, we are styling the [`color`](/zh-CN/docs/Web/CSS/color) and [`font-weight`](/zh-CN/docs/Web/CSS/font-weight) of the [`<label>`](/zh-CN/docs/Web/HTML/Element/label) that comes immediately after a checked input. We haven't applied any styles if the `input` is not checked.

```html hidden
<input id="checkboxInput" type="checkbox">
<label for="checkboxInput">Toggle the checkbox on and off</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

### Attribute selectors

It is possible to target different types of form controls based on their [type](#htmlattrdeftype) using [attribute selectors](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). CSS attribute selectors match elements based on either just the presence of a attribute or the value of a given attribute.

```css
/* matches a password input */
input[type="password"] {}

/* matches a form control whose valid values are limited to a range of values*/
input[min][max] {}

/* matches a form control with with a pattern attribute */
 input[pattern] {}
```

### ::placeholder

By default, the appearance of placeholder text is a translucent or light gray. The [`::placeholder`](/zh-CN/docs/Web/CSS/::placeholder) pseudo-element is the input's [placeholder text](/zh-CN/docs/Web/HTML/Forms_in_HTML#The_placeholder_attribute). It can be styled with a limited subset of CSS properties.

```css
::placeholder {
  color: blue;
}
```

Only the subset of CSS properties that apply to the [`::first-line`](/zh-CN/docs/Web/CSS/::first-line) pseudo-element can be used in a rule using `::placeholder` in its selector.

### [`appearance`](/zh-CN/docs/Web/CSS/appearance)

The [`appearance`](/zh-CN/docs/Web/CSS/appearance) property enables the displaying of (almost) any element as a platform-native style based on the operating system's theme as well as the removal of any platform-native styling with the `none` value.

You could make a `<div>` look like a radio button with `div {appearance: radio;}` or a radio look like a checkbox with `[type="checkbox] {appearance: checkbox;}`, but don't.

Setting `appearance: none` removes platform native borders, but not functionality.

### [`caret-color`](/zh-CN/docs/Web/CSS/caret-color)

A property specific to text entry-related elements is the CSS [`caret-color`](/zh-CN/docs/Web/CSS/caret-color) property, which lets you set the color used to draw the text input caret:

#### HTML

```html
<label for="textInput">Note the red caret:</label>
<input id="textInput" class="custom" size="32">
```

#### CSS

```css
input.custom {
  caret-color: red;
  font: 16px "Helvetica", "Arial", "sans-serif"
}
```

#### Result

### [`object-position`](/zh-CN/docs/Web/CSS/object-position) and [`object-fit`](/zh-CN/docs/Web/CSS/object-fit)

In certain cases (typically involving non-textual inputs and specialized interfaces), the `<input>` element is a [replaced element](/zh-CN/docs/Web/CSS/Replaced_element). When it is, the position and size of the element's size and positioning within its frame can be adjusted using the CSS [`object-position`](/zh-CN/docs/Web/CSS/object-position) and [`object-fit`](/zh-CN/docs/Web/CSS/object-fit) properties

### Styling

For more information about adding color to elements in HTML, see:

- [Applying color to HTML elements using CSS](/zh-CN/docs/Web/HTML/Applying_color).

Also see:

- [Styling HTML forms,](/zh-CN/docs/Learn/HTML/Forms/Styling_HTML_forms) [advanced styling for HTML forms](/zh-CN/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms), and
- the [compatibility table of CSS properties](/zh-CN/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets).

## Additional Features

### Labels

Labels are needed to associate assistive text with an `<input>`. The [`<label>`](/zh-CN/docs/Web/HTML/Element/label) element provides explanatory information about a form field that is _always_ appropriate (aside from any layout concerns you have). It's never a bad idea to use a `<label>` to explain what should be entered into an `<input>` or [`<textarea>`](/zh-CN/docs/Web/HTML/Element/textarea).

#### Associated labels

The semantic pairing of `<input>` and `<label>` elements is useful for assistive technologies such as screen readers. By pairing them using the `<label>`'s [`for`](/zh-CN/docs/Web/HTML/Element/label#attr-for) attribute, you bond the label to the input in a way that lets screen readers describe inputs to users more precisely.

It does not suffice to have plain text adjacent to the `<input>` element,. Rather, usability and accessibility requires the inclusion of either implicit or explicit [`<label>`](/zh-CN/docs/Web/HTML/Element/label):

```html
<!-- inaccessible -->
<p>Enter your name: <input id="name" type="text" size="30"></p>

<!-- implicit label -->
<p><label>Enter your name: <input id="name" type="text" size="30"></label></p>

<!-- explicit label -->
<p><label for="name">Enter your name: </label><input id="name" type="text" size="30"></p>
```

The first example is inaccessible: no relationship exists between the prompt and the `<input>` element.

In addition to an accessible name, the label provides a larger 'hit' area for mouse and touch screen users to click on or touch. By pairing a `<label>` with an `<input>`, clicking on either one will focus the `<input>`. If you use plain text to "label" your input, this won't happen. Having the prompt part of the activation area for the input is helpful for people with motor control conditions.

As web developers, it's important that we never assume that people will know all the things that we know. The diversity of people using the web—and by extension your web site—practically guarantees that some of your site's visitors will have some variation in thought processes and/or circumstances that leads them to interpret your forms very differently from you without clear and properly-presented labels.

#### Placeholders are not accessible

The [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#attr-placeholder) attribute lets you specify a text that appears within the `<input>` element's content area itself when empty. The placeholder should never be required in order to understand your forms. It is not a label, and should not be used as a substitute, because it isn't. The placeholder is used to show an example input, not an explanation or prompt. Not only is the placeholder not accessible to screen readers, but once the user enters any text into the form control, or if the form control already has a value, there is no placeholder. Browsers with automatic page translation features may skip over attributes when translating, meaning the `placeholder` may not get translated.

> **备注：** Don't use the [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#attr-placeholder) attribute if you can avoid it. If you need to label an `<input>` element, use the [`<label>`](/zh-CN/docs/Web/HTML/Element/label) element

### Client-side validation

In addition to using CSS to style inputs based on the [`:valid`](/zh-CN/docs/Web/CSS/:valid) or [`:invalid`](/zh-CN/docs/Web/CSS/:invalid) UI states based on the current state of each input, as noted in the [UI pseudo-classes](#UI_pseudo-classes) section above, the browser provides for client-side validation on (attempted) form submission. On form submission, if their is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

Some input types and other attributes place limits on what values are valid for a given input. For example, `<input type="number" min="2" max="10" step="2">` means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a `rangeUnderflow` error if the value is less than 2, `rangeOverflow` if greater than 10, `stepMismatch` if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the `step` attribute), or `typeMismatch` if the value is not a number.

Specific attributes and their values can lead to specific error [`ValidityState`](/zh-CN/docs/Web/API/ValidityState)

| Attribute                          | Relevent property                                                                    | Description                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [max](#htmlattrdefmax)             | [`validityState.rangeOverflow`](/zh-CN/docs/Web/API/ValidityState/rangeOverflow)     | Occurs when the value is greater than the maximum value as defined by the `max` attribute                                                                                              |
| [maxlength](#htmlattrdefmaxlength) | [`validityState.tooLong`](/zh-CN/docs/Web/API/ValidityState/tooLong)                 | Occurs when the number of characters is greater than the number allowed by the `maxlength` property                                                                                    |
| [min](#htmlattrdefmin)             | [`validityState.rangeUnderflow`](/zh-CN/docs/Web/API/ValidityState/rangeUnderflow)   | Occurs when the value is less than the minimum value as defined by the `min` attribute                                                                                                 |
| [minlength](#htmlattrdefminlength) | [`validityState.tooShort`](/zh-CN/docs/Web/API/ValidityState/tooShort)               | Occurs when the number of characters is less than the number required by the `minlength` property                                                                                      |
| [pattern](#htmlattrdefpattern)     | [`validityState.patternMismatch`](/zh-CN/docs/Web/API/ValidityState/patternMismatch) | Occurs when a pattern attribute is included with a valid regular expression and the `value` does not match it.                                                                         |
| [required](#htmlattrdefrequired)   | [`validityState.valueMissing`](/zh-CN/docs/Web/API/ValidityState/valueMissing)       | Occurs when the `required` attribute is present but the value is `null` or radio or checkbox is not checked.                                                                           |
| [step](#htmlattrdefstep)           | [`validityState.stepMismatch`](/zh-CN/docs/Web/API/ValidityState/stepMismatch)       | The value doesn't match the step increment. Increment default is `1`, so only integers are valid on `type="number"` is step is not included. `step="any"` will never throw this error. |
| [type](#htmlattrdeftyoe)           | [`validityState.typeMismatch`](/zh-CN/docs/Web/API/ValidityState/typeMismatch)       | Occurs when the value is not of the correct type, for example a email does not contain an `@` or a url doesn't contain a protocol.                                                     |

If a form control doesn't have the required attribute, no value, or an empty string, is not invalid. Even if the above attributes are present, with the exception of `'required'`, and empty string will not lead to an error.

We can set limits on what values we accept, and supporting browsers will natively validate these form values and alert the user if there is a mistake when the form is submitted.

In addition to the errors described in the table above, the `validityState` interface contains the `badInput`, `valid`, and `customError` boolean readonly properties. The validity object includes:

- [`validityState.valueMissing`](/zh-CN/docs/Web/API/ValidityState/valueMissing)
- [`validityState.typeMismatch`](/zh-CN/docs/Web/API/ValidityState/typeMismatch)
- [`validityState.patternMismatch`](/zh-CN/docs/Web/API/ValidityState/patternMismatch)
- [`validityState.tooLong`](/zh-CN/docs/Web/API/ValidityState/tooLong)
- [`validityState.tooShort`](/zh-CN/docs/Web/API/ValidityState/tooShort)
- [`validityState.rangeUnderflow`](/zh-CN/docs/Web/API/ValidityState/rangeUnderflow)
- [`validityState.rangeOverflow`](/zh-CN/docs/Web/API/ValidityState/rangeOverflow)
- [`validityState.stepMismatch`](/zh-CN/docs/Web/API/ValidityState/stepMismatch)
- [`validityState.badInput`](/zh-CN/docs/Web/API/ValidityState/badInput)
- [`validityState.valid`](/zh-CN/docs/Web/API/ValidityState/valid)
- [`validityState.customError`](/zh-CN/docs/Web/API/ValidityState/customError)

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the `valid` property, which is `true` if the element's value obeys all constraints.

If there is an error, supporting browsers will both alert the user and prevent the form from being submitted. A word of caution: if a custom error is set to a truthy value (anything other than the empty string or `null`), the form will be be prevented from being submitted. If there is no custom error message, and none of the other properties return true, `valid` will be true, and the form can be submitted.

```js
function validate(input) {
  let validityState_object = input.validity;
  if(validityState_object.valueMissing) {
     input.setCustomValidity('A value is required');
  } else if (input.rangeUnderflow) {
    input.setCustomValidity('Your value is too low');
  } else if (input.rangeOverflow) {
    input.setCustomValidity('Your value is too high');
  } else {
    input.setCustomValidity('');
  }
}
```

The last line, setting the custom validity message to the error string is vital. If the user makes an error, and the validity is set, it will fail to submit, even if all of the values are valid, until the message is `null`.

#### Example

If you want to present a custom error message when a field fails to validate, you need to use the [Constraint validation features](/zh-CN/docs/Web/API/Constraint_validation#Constraint_validation_interfaces) available on `<input>` (and related) elements. Take the following form:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

The basic HTML form validation features will cause this to produce a default error message if you try to submit the form with either no valid filled in, or a value that does not match the `pattern`.

If you wanted to instead display custom error messages, you could use JavaScript like the following:

```js
const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});
```

The example renders like so:

In brief:

- We check the valid state of the input element every time its value is changed by running the `checkValidity()` method via the `input` event handler.
- If the value is invalid, an `invalid` event is raised, and the `invalid` event handler function is run. Inside this function we work out whether the value is invalid because it is empty, or because it doesn't match the pattern, using an `if()` block, and set a custom validity error message.
- As a result, if the input value is invalid when the submit button is pressed, one of the custom error messages will be shown.
- If it is valid, it will submit as you'd expect. For this to happen, the custom validity has to be cancelled, by invoking `setCustomValidity()` with an empty string value. We therefore do this every time the `input` event is raised. If you don't do this, and a custom validity was previously set, the input will register as invalid, even if it current contains a valid value on submission.

> **备注：** Always validate input constraints both client side and server side. Constraint validation doesn't remove the need for validation on the _server side_. Invalid values can still be sent by older browsers or by bad actors.

> **备注：** ：Firefox supported a proprietary error attribute — `x-moz-errormessage` — for many versions, which allowed you set custom error messages in a similar way. This has been removed as of version 66 (see [bug 1513890](https://bugzilla.mozilla.org/show_bug.cgi?id=1513890)).

### Localization

The allowed inputs for certain `<input>` types depend on the locale. In some locales, 1,000.00 is a valid number, while in other locales the valid way to enter this number is 1.000,00.

Firefox uses the following heuristics to determine the locale to validate the user's input (at least for `type="number"`):

- Try the language specified by a `lang`/`xml:lang` attribute on the element or any of its parents.
- Try the language specified by any `Content-Language` HTTP header. Or,
- If none specified, use the browser's locale.

### Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >, listed, submittable, resettable, form-associated element,
        <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >. If the
        <code
          ><a href="/zh-CN/docs/Web/HTML/Element/input#attr-type">type</a></code
        >
        is not <code>hidden</code>, then labelable element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        None, it is an
        <a href="/zh-CN/docs/Glossary/empty_element">empty element</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>：<code
              ><a href="https://w3c.github.io/aria/#link">link</a></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitemradio"
                >menuitemradio</a
              ></code
            >, <code><a href="https://w3c.github.io/aria/#radio">radio</a></code
            >,
            <code><a href="https://w3c.github.io/aria/#switch">switch</a></code
            >, <code><a href="https://w3c.github.io/aria/#tab">tab</a></code>
          </li>
          <li>
            <code>type=checkbox</code>：<code
              ><a href="https://w3c.github.io/aria/#button">button</a></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >,
            <code><a href="https://w3c.github.io/aria/#option">option</a></code
            >,
            <code><a href="https://w3c.github.io/aria/#switch">switch</a></code>
          </li>
          <li>
            <code>type=image</code>：<code
              ><a href="https://w3c.github.io/aria/#link">link</a></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitem">menuitem</a></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitemcheckbox"
                >menuitemcheckbox</a
              ></code
            >,
            <code
              ><a href="https://w3c.github.io/aria/#menuitemradio"
                >menuitemradio</a
              ></code
            >, <code><a href="https://w3c.github.io/aria/#radio">radio</a></code
            >,
            <code><a href="https://w3c.github.io/aria/#switch">switch</a></code>
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
            >：None
          </li>
          <li>
            <code>type=hidden|month|number|password|range|reset</code>：None
          </li>
          <li><code>type=search|submit|tel|text|url|week</code>：None</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        <a href="/zh-CN/docs/Web/API/HTMLInputElement"
          ><code>HTMLInputElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Accessibility concerns

### Labels

When including inputs, it is an accessibilty requirement to add labels along side. This is needed so those who use assistive technologies can tell what the input is for. Also, clicking or touching a label gives focus to the label's associated form control. This improves the accessibility and usability for sighted users, increases the area a user can click or touch to activate the form control. this is especially useful (and even needed) for radio buttons and checkboxes, which are tiny. For more information about labels in general see [Labels](#Labels) .

The following is an example of how to associate the `<label>` with an `<input>` element in the above style. You need to give the `<input>` an `id` attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.

```plain
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas">
```

### Size

Interactive elements such as form input should provide an area large enough that it is easy to activate them. This helps a variety of people, including people with motor control issues and people using non-precise forms of input such as a stylus or fingers. A minimum interactive size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://a11yproject.com/posts/large-touch-targets/)

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## 参见

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)
- The CSS {{cssxref("caret-color")}} property
- In certain cases (typically involving non-textual inputs and specialized interfaces), the `<input>` element is a [replaced element](/zh-CN/docs/Web/CSS/Replaced_element). When it is, the position and size of the elemnt's size and positioning within its frame can be adjusted using the CSS {{cssxref("object-position")}} and {{cssxref("object-fit")}} properties
