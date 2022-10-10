---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement`** 接口提供了特定的属性和方法（继承自常规的{{domxref("HTMLElement", "HTML 元素")}}接口）用于管理输入元素的布局和外观。

{{InheritanceDiagram(600,120)}}

## 属性

| `form` {{readonlyInline}} | _`{{domxref("HTMLFormElement")}} object:`_ 返回一个父表单元素的引用。                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formAction`                    | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("formaction", "input") }} 属性，包含处理元素提交信息程序的 URI. 这会重写父表单的 {{ htmlattrxref("action", "form") }} 属性。                           |
| `formEncType`                   | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("formenctype", "input") }} 属性，包含将表单提交到服务器的内容类型。这会重写父表单的 {{ htmlattrxref("enctype", "form") }} 属性。                         |
| `formMethod`                    | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("formmethod", "input") }} 属性，包含浏览器用于提交表单的 HTTP 方法。这会重写父表单的 {{ htmlattrxref("method", "form") }} 属性。                       |
| `formNoValidate`                | _`boolean`:_ **返回/ 设置** 元素的 {{ htmlattrxref("formnovalidate", "input") }} 属性，表示在表单提交时不对其进行验证。这会重写父表单的 {{ htmlattrxref("novalidate", "form") }} 属性。                  |
| `formTarget`                    | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("formtarget", "input") }} 属性，包含一个名称或关键字，表示在提交表单后接收响应的显示位置。这会重写父表单的 {{ htmlattrxref("target", "form") }} 属性。 |

| `name`                                       | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("name", "input") }} 属性，包含其名称。                                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                       | `string:` **返回/ 设置** 元素的 {{ htmlattrxref("type", "input") }} 属性，包含其显示类型。查看 {{ HTMLElement("input") }} 的 {{ htmlattrxref("type", "input") }} 属性可用值。                                                                                                                                                                                    |
| `disabled`                                   | _`boolean`:_ **返回/ 设置** 元素的 {{ htmlattrxref("disabled", "input") }} 属性，表示是否禁用 {{ HTMLElement("input") }}. 该元素的值将不会被提交。也可以查看 {{ htmlattrxref("readOnly", "input") }}                                                                                                                                                            |
| `autofocus`                                  | `boolean:` **返回/ 设置** 元素的 {{ htmlattrxref("autofocus", "input") }} 属性，指定的 {{ HTMLElement("input") }} 在页面加载时应当具有输入焦点，例如通过键入不同的控件。在文档中只有一个表单元素可以拥有 {{htmlattrxref("autofocus","input")}} 属性。如果 {{htmlattrxref("type","input")}} 属性被设置为 `hidden` 则无效 (即不可为隐藏控件设置自动焦点). |
| `required`                                   | _`boolean`:_ **返回/ 设置** 元素的 {{ htmlattrxref("required", "input") }} 属性，表示用户必填项。                                                                                                                                                                                                                                                                                       |
| `value`                                      | `string:` **返回/ 设置** 当前控件的值。**提示：** 如果用户输入与预期不同，可能会返回空。                                                                                                                                                                                                                                                                                                               |
| `validity` {{readonlyInline}}          | `{{domxref("ValidityState")}} object:` Returns the validity state that this element is in.                                                                                                                                                                                                                                                                                                  |
| `validationMessage` {{readonlyInline}} | `string:` **Returns** a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ({{htmlattrxref("willValidate","input")}} is false), or it satisfies its constraints.                                                                              |
| `willValidate` {{readonlyInline}}      | _`{{jsxref("Boolean")}}:`_ **Indicates** whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.                                                                                                                                                                                                                      |

| `checked`        | `boolean:` **返回/ 设置** 当前选中状态，当控件{{htmlattrxref("type","input")}} 是 `checkbox` 或 `radio` 时。                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultChecked` | _`boolean:`_ **返回/ 设置** the default state of a radio button or checkbox as originally specified in HTML that created this object.                                                                                         |
| `indeterminate`  | `boolean:` **indicates** that the checkbox is neither on nor off. Changes the appearance to resemble a third state. Does not affect the value of the **checked** 属性，and clicking the checkbox will set the value to false. |

| `alt`    | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("alt", "input") }} 属性，包含 alternative text to use when {{htmlattrxref("type","input")}} is `image.`                                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height` | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("height", "input") }} 属性，which defines the height of the image displayed for the button, if the value of {{htmlattrxref("type","input")}} is `image`.                                                  |
| `src`    | `string:` **返回/ 设置** 元素的 {{ htmlattrxref("src", "input") }} 属性，which specifies a URI for the location of an image to display on the graphical submit button, if the value of {{htmlattrxref("type","input")}} is `image`; otherwise it is ignored. |
| `width`  | `string:` **返回/ 设置** the document's {{ htmlattrxref("width", "input") }} 属性，which defines the width of the image displayed for the button, if the value of {{htmlattrxref("type","input")}} is `image`.                                             |

| `accept`                                                                                                                  | _`string`:_ **Returns / Sets** 元素的 {{ htmlattrxref("accept", "input") }} 属性，包含 comma-separated list of file types accepted by the server when {{htmlattrxref("type","input")}} is `file`. |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `allowdirs` {{non-standard_inline}}                                                                              | boolean: Part of the non-standard Directory Upload API; **indicates** whether or not to allow directories and files both to be selected in the file list. Implemented only in Firefox and is hidden behind a preference. |
| `files`                                                                                                                   | **Returns/accepts** a {{domxref("FileList")}} object, which contains a list of {{domxref("File")}} objects representing the files selected for upload.                                                     |
| {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} {{Non-standard_inline}} | boolean: **Returns** the {{htmlattrxref("webkitdirectory", "input")}} 属性; if true, the file system picker interface only accepts directories instead of files.                                         |
| {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{Non-standard_inline}}     | Array of {{domxref("FileSystemEntry")}} objects **describing** the currently-selected files or directories.                                                                                                    |

| `autocomplete`       | _`string`:_ **返回/ 设置** 元素的 {{htmlattrxref("autocomplete", "input")}} 属性，indicating whether the value of the control can be automatically completed by the browser. Ignored if the value of the {{htmlattrxref("type","input")}} 属性 is `hidden`, `checkbox`, `radio`, `file`, or a button type (`button`, `submit`, `reset`, `image`). Possible values are: "on": the browser can autocomplete the value using previously stored value "off": the user must explicity enter a value |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxLength`          | _`long`:_ **返回/ 设置** 元素的 {{ htmlattrxref("maxlength", "input") }} 属性，包含 the **maximum length of characters** (in Unicode code points) that the value can have. (If you set this to a negative number, an exception will be thrown.)                                                                                                                                                                                                                                                   |
| `size`               | _`unsigned long`:_ **返回/ 设置** 元素的 {{ htmlattrxref("size", "input") }} 属性，包含 **size of the control**. This value is in pixels unless the value of {{htmlattrxref("type","input")}} is `text` or `password`, in which case, it is an integer number of characters. Applies only when {{htmlattrxref("type","input")}} is set to `text`, `search`, `tel`, `url`, `email`, or `password`; otherwise it is ignored.                                                   |
| `pattern`            | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("pattern", "input") }} 属性，包含 a **regular expression** that the control's value is checked against. Use the {{htmlattrxref("title","input")}} 属性 to describe the pattern to help the user. This 属性 applies when the value of the {{htmlattrxref("type","input")}} 属性 is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.                                                                      |
| `placeholder`        | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("placeholder", "input") }} 属性，包含 a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This 属性 applies when the value of the {{htmlattrxref("type","input")}} 属性 is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.                                                                                                                    |
| `readOnly`           | _`boolean`:_ **返回/ 设置** 元素的 {{ htmlattrxref("readonly", "input") }} 属性，indicating that the user cannot modify the value of the control. This is ignored if the value of the {{htmlattrxref("type","input")}} 属性 is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.                                                                                                                                                                                        |
| `min`                | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("min", "input") }} 属性，包含 the minimum (numeric or date-time) value for this item, which must not be greater than its maximum ({{htmlattrxref("max","input")}} 属性) value.                                                                                                                                                                                                                                                                       |
| `max`                | _`string`:_ **返回/ 设置** 元素的 {{ htmlattrxref("max", "input") }} 属性，包含 the maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** 属性) value.                                                                                                                                                                                                                                                                                                           |
| `selectionStart`     | _`unsigned long`:_ **返回/ 设置** the beginning index of the selected text. When nothing is selected, this returns the position of the text input cursor (caret) inside of the {{HTMLElement("input")}} element.                                                                                                                                                                                                                                                                                                  |
| `selectionEnd`       | _`unsigned long`:_ **返回/ 设置** the end index of the selected text. When there's no selection, this returns the offset of the character immediately following the current text input cursor position.                                                                                                                                                                                                                                                                                                                   |
| `selectionDirection` | _`string`:_ **返回/ 设置** the direction in which selection occurred. Possible values are: `"forward"` if selection was performed in the start-to-end direction of the current locale, `"backward"` for the opposite direction, `"none"` if the direction is unknown."                                                                                                                                                                                                                                                    |

<table>
  <caption>
    未分类的属性
  </caption>
  <tbody>
    <tr>
      <td><code>defaultValue</code></td>
      <td>
        <em><code>string:</code></em> <strong>返回/ 设置</strong> the default
        value as originally specified in the HTML that created this object.
      </td>
    </tr>
    <tr>
      <td><code>dirName</code></td>
      <td>
        <em><code>string:</code></em> <strong>返回/ 设置 </strong>the
        directionality of the element.
      </td>
    </tr>
    <tr>
      <td><code>accessKey</code></td>
      <td>
        <em><code>string</code>: <strong>返回</strong></em> a string 包含 a
        single character that switches input focus to the control when pressed.
      </td>
    </tr>
    <tr>
      <td><code>list</code> {{readonlyInline}}</td>
      <td>
        <em><code>{{domxref("HTMLElement")}} object:</code></em>
        <strong>返回</strong> the element pointed by the
        {{ htmlattrxref("list", "input") }} 属性。The property may
        be <code>null</code> if no HTML element found in the same tree.
      </td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>
        <em><code>boolean</code>:</em> <strong>返回/ 设置</strong> 元素的
        {{ htmlattrxref("multiple", "input") }} 属性，indicating
        whether more than one value is possible (e.g., multiple files).
      </td>
    </tr>
    <tr>
      <td><code>files</code></td>
      <td>
        <em><code>{{domxref("FileList")}} array:</code></em>
        <strong>返回</strong>the list of selected files.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement.labels")}}
        {{readonlyInline}}
      </td>
      <td>
        <code><em>{{domxref("NodeList")}} array:</em></code>
        <strong>返回</strong>a list of {{ HTMLElement("label") }}
        elements that are labels for this element.
      </td>
    </tr>
    <tr>
      <td><code>step</code></td>
      <td>
        <code><em>string:</em></code> <strong>返回/ 设置</strong> 元素的
        {{ htmlattrxref("step", "input") }} 属性，which works
        with<strong> </strong>{{htmlattrxref("min","input")}} and
        {{htmlattrxref("max","input")}} to limit the increments at
        which a numeric or date-time value can be set. It can be the string
        <code>any</code> or a positive floating point number. If this is not set
        to <code>any</code>, the control accepts only values at multiples of the
        step value greater than the minimum.
      </td>
    </tr>
    <tr>
      <td><code>valueAsDate</code></td>
      <td>
        <code><em>{{jsxref("Date")}} object:</em></code> Returns / Sets
        the value of the element, interpreted as a date, or <code>null</code> if
        conversion is not possible.
      </td>
    </tr>
    <tr>
      <td><code>valueAsNumber</code></td>
      <td>
        <code>double</code>: <strong>返回</strong>the value of the element,
        interpreted as one of the following, in order:
        <ul>
          <li>a time value</li>
          <li>a number</li>
          <li>NaN if conversion is impossible</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>autocapitalize</code> {{experimental_inline}}</td>
      <td>
        <code><em>string:</em></code> <strong>定义</strong> the capitalization
        behavior for user input. Valid values are <code>none</code>,
        <code>off</code>, <code>characters</code>, <code>words</code>, or
        <code>sentences</code>.
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.align")}} {{Deprecated_Inline}}
  - : `string:` **represents** the alignment of the element. _Use CSS instead._
- {{domxref("HTMLInputElement.useMap")}} {{Deprecated_Inline}}
  - : `string:` **represents** a client-side image map.

## 方法

<table>
  <tbody>
    <tr>
      <td><code>focus()</code></td>
      <td>
        Focus on the input element; keystrokes will subsequently go to this
        element.
      </td>
    </tr>
    <tr>
      <td><code>blur()</code></td>
      <td>
        Removes focus from input; keystrokes will subsequently go nowhere.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select"
            >select()</a
          ></code
        >
      </td>
      <td>
        Selects the input text in the element, and focuses it so the user can
        subsequently replace the whole entry.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/click"
            >click()</a
          ></code
        >
      </td>
      <td>Simulates a click on the element.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange"
            >setSelectionRange()</a
          ></code
        >
      </td>
      <td>
        Selects a range of text in the element (but does not focus it). The
        optional selectionDirection parameter may be "forward" or "backward" to
        establish the direction in which selection was set, or "none" if the
        direction is unknown or not relevant. The default is "none". Specifying
        a selectionDirection parameter sets the value of the selectionDirection
        property.
      </td>
    </tr>
    <tr>
      <td><code>setRangeText()</code></td>
      <td>
        <p>
          Replaces a range of text with the new text. If the
          <var>start</var> and <var>end</var> arguments are not provided, the
          range is assumed to be the selection.The final argument determines how
          the selection should be set after the text has been replaced. The
          possible values are:
        </p>
        <dl>
          <dt>"<code>select</code>"</dt>
          <dd>Selects the newly inserted text.</dd>
          <dt>"<code>start</code>"</dt>
          <dd>Moves the selection to just before the inserted text.</dd>
          <dt>"<code>end</code>"</dt>
          <dd>Moves the selection to just after the selected text.</dd>
          <dt>"<code>preserve</code>"</dt>
          <dd>Attempts to preserve the selection. This is the default.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td><code>setCustomValidity()</code></td>
      <td>
        Sets a custom validity message for the element. If this message is not
        the empty string, then the element is suffering from a custom validity
        error, and does not validate.
      </td>
    </tr>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>
        Returns a {{jsxref("Boolean")}} that is <code>false</code> if the
        element is a candidate for constraint validation, and it does not
        satisfy its constraints. In this case, it also fires an
        {{event("invalid")}} event at the element. It returns
        <code>true</code> if the element is not a candidate for constraint
        validation, or if it satisfies its constraints.
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.stepDown()")}}

  - : Decrements the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

- {{domxref("HTMLInputElement.stepUp()")}}

  - : Increments the {{htmlattrxref("value","input")}} by ({{htmlattrxref("step","input")}} \* n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception:

    - if the method is not applicable to for the current {{htmlattrxref("type","input")}} value.,
    - if the element has no {{htmlattrxref("step","input")}} value,
    - if the {{htmlattrxref("value","input")}} cannot be converted to a number,
    - if the resulting value is above the {{htmlattrxref("max","input")}} or below the {{htmlattrxref("min","input")}}.

- {{domxref("HTMLInputElement.mozSetFileArray()")}}{{non-standard_inline}}
  - : Sets the files selected on the input to the given array of {{domxref("File")}} objects. This is an alternative to `mozSetFileNameArray()` which can be used in frame scripts: a chrome script can [open files as File objects](/zh-CN/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) and send them via [message manager](/zh-CN/Firefox/Multiprocess_Firefox/The_message_manager).
- {{domxref("HTMLInputElement.mozGetFileNameArray()")}}{{non-standard_inline}}
  - : Returns an array of all the file names from the input.
- {{domxref("HTMLInputElement.mozSetFileNameArray()")}}{{non-standard_inline}}
  - : Sets the filenames for the files selected on the input. Not for use in [frame scripts](/zh-CN/Firefox/Multiprocess_Firefox/Limitations_of_frame_scripts), because it accesses the file system.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML element implementing this interface: {{ HTMLElement("input") }}.
