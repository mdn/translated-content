---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
---

{{ APIRef("HTML DOM") }}

**`HTMLInputElement`** 介面提供了特殊的屬性及方法以操作 `input` 元素的顯示與佈局。

{{InheritanceDiagram(600,120)}}

## 屬性

| `form` {{readonlyInline}} | _`{{domxref("HTMLFormElement")}} object:`_ Returns a reference to the parent form element.                                                                                                                                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formAction`              | _`string`:_ Returns / Sets the element's [`formaction`](/zh-TW/docs/Web/HTML/Element/input#formaction) attribute, containing the URI of a program that processes information submitted by the element. This overrides the [`action`](/zh-TW/docs/Web/HTML/Element/form#action) attribute of the parent form.                              |
| `formEncType`             | _`string`:_ Returns / Sets the element's [`formenctype`](/zh-TW/docs/Web/HTML/Element/input#formenctype) attribute, containing the type of content that is used to submit the form to the server. This overrides the [`enctype`](/zh-TW/docs/Web/HTML/Element/form#enctype) attribute of the parent form.                                 |
| `formMethod`              | _`string`:_ Returns / Sets the element's [`formmethod`](/zh-TW/docs/Web/HTML/Element/input#formmethod) attribute, containing the HTTP method that the browser uses to submit the form. This overrides the [`method`](/zh-TW/docs/Web/HTML/Element/form#method) attribute of the parent form.                                              |
| `formNoValidate`          | _`boolean`:_ Returns / Sets the element's [`formnovalidate`](/zh-TW/docs/Web/HTML/Element/input#formnovalidate) attribute, indicating that the form is not to be validated when it is submitted. This overrides the [`novalidate`](/zh-TW/docs/Web/HTML/Element/form#novalidate) attribute of the parent form.                            |
| `formTarget`              | _`string`:_ Returns / Sets the element's [`formtarget`](/zh-TW/docs/Web/HTML/Element/input#formtarget) attribute, containing a name or keyword indicating where to display the response that is received after submitting the form. This overrides the [`target`](/zh-TW/docs/Web/HTML/Element/form#target) attribute of the parent form. |

| `name`                                 | _`string`:_ Returns / Sets the element's [`name`](/zh-TW/docs/Web/HTML/Element/input#name) attribute, containing a name that identifies the element when submitting the form.                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                 | `string:` Returns / Sets the element's [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute, indicating the type of control to display. See [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute of {{ HTMLElement("input") }} for possible values.                                                                                                                                                                                                                                                                                                                 |
| `disabled`                             | _`boolean`:_ Returns / Sets the element's [`disabled`](/zh-TW/docs/Web/HTML/Element/input#disabled) attribute, indicating that the control is not available for interaction. The input values will not be submitted with the form. See also [`readonly`](/zh-TW/docs/Web/HTML/Element/input#readonly)                                                                                                                                                                                                                                                                             |
| `autofocus`                            | `boolean:` Returns / Sets the element's [`autofocus`](/zh-TW/docs/Web/HTML/Element/input#autofocus) attribute, which specifies that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the [`autofocus`](/zh-TW/docs/Web/HTML/Element/input#autofocus) attribute. It cannot be applied if the [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute is set to `hidden` (that is, you cannot automatically set focus to a hidden control). |
| `required`                             | _`boolean`:_ Returns / Sets the element's [`required`](/zh-TW/docs/Web/HTML/Element/input#required) attribute, indicating that the user must fill in a value before submitting a form.                                                                                                                                                                                                                                                                                                                                                                                            |
| `value`                                | `string:` Returns / Sets the current value of the control.**Note:** If the user enters a value different from the value expected, this may return an empty string.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `validity` {{readonlyInline}}          | `{{domxref("ValidityState")}} object:` Returns the validity state that this element is in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `validationMessage` {{readonlyInline}} | `string:` Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ([`willvalidate`](/zh-TW/docs/Web/HTML/Element/input#willvalidate) is false), or it satisfies its constraints.                                                                                                                                                                                                                                                   |
| `willValidate` {{readonlyInline}}      | _`{{jsxref("Boolean")}}:`_ Indicates whether the element is a candidate for constraint validation. It is false if any conditions bar it from constraint validation.                                                                                                                                                                                                                                                                                                                                                                                                               |

| `checked`        | `boolean:`Returns / Sets the current state of the element when [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `checkbox` or `radio`. |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultChecked` | _`boolean:`_ Returns / Sets the default state of a radio button or checkbox as originally specified in HTML that created this object.      |
| `indeterminate`  | `boolean:` indicates that the checkbox is neither on nor off.                                                                              |

| `alt`    | _`string`:_ Returns / Sets the element's [`alt`](/zh-TW/docs/Web/HTML/Element/input#alt) attribute, containing alternative text to use when [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `image.`                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `height` | _`string`:_ Returns / Sets the element's [`height`](/zh-TW/docs/Web/HTML/Element/input#height) attribute, which defines the height of the image displayed for the button, if the value of [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `image`.                                                |
| `src`    | `string:` Returns / Sets the element's [`src`](/zh-TW/docs/Web/HTML/Element/input#src) attribute, which specifies a URI for the location of an image to display on the graphical submit button, if the value of [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `image`; otherwise it is ignored. |
| `width`  | `string:` Returns / Sets the document's [`width`](/zh-TW/docs/Web/HTML/Element/input#width) attribute, which defines the width of the image displayed for the button, if the value of [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `image`.                                                    |

| `accept`                                                                                   | _`string`:_ Returns / Sets the element's [`accept`](/zh-TW/docs/Web/HTML/Element/input#accept) attribute, containing comma-separated list of file types accepted by the server when [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `file`. |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `allowdirs` {{non-standard_inline}}                                                        | boolean: Part of the non-standard Directory Upload API; indicates whether or not to allow directories and files both to be selected in the file list. Implemented only in Firefox and is hidden behind a preference.                             |
| {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}} {{Non-standard_inline}} | boolean: Returns the [`webkitdirectory`](/zh-TW/docs/Web/HTML/Element/input#webkitdirectory) attribute; if true, the file system picker interface only accepts directories instead of files.                                                     |
| {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{Non-standard_inline}}     | Array of {{domxref("FileSystemEntry")}} objects describing the currently-selected files or directories.                                                                                                                                          |

| `autocomplete`       | _`string`:_ Returns / Sets the element's [`autocomplete`](/zh-TW/docs/Web/HTML/Element/input#autocomplete) attribute, indicating whether the value of the control can be automatically completed by the browser. Ignored if the value of the [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute is `hidden`, `checkbox`, `radio`, `file`, or a button type (`button`, `submit`, `reset`, `image`). Possible values are: "on": the browser can autocomplete the value using previously stored value "off": the user must explicity enter a value |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxLength`          | _`long`:_ Returns / Sets the element's [`maxlength`](/zh-TW/docs/Web/HTML/Element/input#maxlength) attribute, containing the **maximum length of characters** (in Unicode code points) that the value can have. (If you set this to a negative number, an exception will be thrown.)                                                                                                                                                                                                                                                                     |
| `size`               | _`unsigned long`:_ Returns / Sets the element's [`size`](/zh-TW/docs/Web/HTML/Element/input#size) attribute, containing **size of the control**. This value is in pixels unless the value of [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is `text` or `password`, in which case, it is an integer number of characters. Applies only when [`type`](/zh-TW/docs/Web/HTML/Element/input#type) is set to `text`, `search`, `tel`, `url`, `email`, or `password`; otherwise it is ignored.                                                             |
| `pattern`            | _`string`:_ Returns / Sets the element's [`pattern`](/zh-TW/docs/Web/HTML/Element/input#pattern) attribute, containing a **regular expression** that the control's value is checked against. Use the [`title`](/zh-TW/docs/Web/HTML/Element/input#title) attribute to describe the pattern to help the user. This attribute applies when the value of the [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.                                                             |
| `placeholder`        | _`string`:_ Returns / Sets the element's [`placeholder`](/zh-TW/docs/Web/HTML/Element/input#placeholder) attribute, containing a hint to the user of what can be entered in the control. The placeholder text must not contain carriage returns or line-feeds. This attribute applies when the value of the [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute is `text`, `search`, `tel`, `url` or `email`; otherwise it is ignored.                                                                                                           |
| `readOnly`           | _`boolean`:_ Returns / Sets the element's [`readonly`](/zh-TW/docs/Web/HTML/Element/input#readonly) attribute, indicating that the user cannot modify the value of the control. This is ignored if the value of the [`type`](/zh-TW/docs/Web/HTML/Element/input#type) attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type.                                                                                                                                                                                            |
| `min`                | _`string`:_ Returns / Sets the element's [`min`](/zh-TW/docs/Web/HTML/Element/input#min) attribute, containing the minimum (numeric or date-time) value for this item, which must not be greater than its maximum ([`max`](/zh-TW/docs/Web/HTML/Element/input#max) attribute) value.                                                                                                                                                                                                                                                                     |
| `max`                | _`string`:_ Returns / Sets the element's [`max`](/zh-TW/docs/Web/HTML/Element/input#max) attribute, containing the maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** attribute) value.                                                                                                                                                                                                                                                                                                                |
| `selectionStart`     | _`unsigned long`:_ Returns / Sets the beginning index of the selected text. When nothing is selected, this returns the position of the text input cursor (caret) inside of the {{HTMLElement("input")}} element.                                                                                                                                                                                                                                                                                                                                         |
| `selectionEnd`       | _`unsigned long`:_ Returns / Sets the end index of the selected text. When there's no selection, this returns the offset of the character immediately following the current text input cursor position.                                                                                                                                                                                                                                                                                                                                                  |
| `selectionDirection` | _`string`:_ Returns / Sets the direction in which selection occurred. Possible values are: `"forward"` if selection was performed in the start-to-end direction of the current locale, `"backward"` for the opposite direction, `"none"` if the direction is unknown."                                                                                                                                                                                                                                                                                   |

<table>
  <caption>
    Properties not yet categorized
  </caption>
  <tbody>
    <tr>
      <td><code>defaultValue</code></td>
      <td>
        <em><code>string:</code></em> Returns / Sets the default value as
        originally specified in the HTML that created this object.
      </td>
    </tr>
    <tr>
      <td><code>dirName</code></td>
      <td>
        <em><code>string:</code></em> Returns / Sets the directionality of the
        element.
      </td>
    </tr>
    <tr>
      <td><code>accessKey</code></td>
      <td>
        <em><code>string</code>: </em>Returns a string containing a single
        character that switches input focus to the control when pressed.
      </td>
    </tr>
    <tr>
      <td><code>list</code> {{readonlyInline}}</td>
      <td>
        <em><code>{{domxref("HTMLElement")}} object:</code></em>
        Returns the element pointed by the
        [`list`](/zh-TW/docs/Web/HTML/Element/input#list) attribute. The property
        may be <code>null</code> if no HTML element found in the same tree.
      </td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>
        <em><code>boolean</code>:</em> Returns / Sets the element's
        [`multiple`](/zh-TW/docs/Web/HTML/Element/input#multiple) attribute,
        indicating whether more than one value is possible (e.g., multiple
        files).
      </td>
    </tr>
    <tr>
      <td><code>files</code> {{readonlyInline}}</td>
      <td>
        <em><code>{{domxref("FileList")}} array:</code></em> Returns
        the list of selected files.
      </td>
    </tr>
    <tr>
      <td><code>labels</code> {{readonlyInline}}</td>
      <td>
        <code><em>{{domxref("NodeList")}} array:</em></code> Returns a
        list of {{ HTMLElement("label") }} elements that are labels
        for this element.
      </td>
    </tr>
    <tr>
      <td><code>step</code></td>
      <td>
        <code><em>string:</em></code> Returns / Sets the element's
        [`step`](/zh-TW/docs/Web/HTML/Element/input#step) attribute, which works
        with<strong> </strong>[`min`](/zh-TW/docs/Web/HTML/Element/input#min) and
        [`max`](/zh-TW/docs/Web/HTML/Element/input#max) to limit the increments at
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
        <code>double</code>: Returns the value of the element, interpreted as
        one of the following, in order:
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
        <code><em>string:</em></code> defines the capitalization behavior for
        user input. Valid values are <code>none</code>, <code>off</code>,
        <code>characters</code>, <code>words</code>, or <code>sentences</code>.
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.align")}} {{Deprecated_Inline}}
  - : `string:` represents the alignment of the element. _Use CSS instead._
- {{domxref("HTMLInputElement.useMap")}} {{Deprecated_Inline}}
  - : `string:` represents a client-side image map.

## 方法

| `focus()`                                                                       | Focus on the input element; keystrokes will subsequently go to this element.                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blur()`                                                                        | Removes focus from input; keystrokes will subsequently go nowhere.                                                                                                                                                                                                                                                                                                                        |
| [`select()`](/zh-TW/docs/Web/API/HTMLInputElement/select)                       | Selects the input text in the element, and focuses it so the user can subsequently replace the whole entry.                                                                                                                                                                                                                                                                               |
| [`click()`](/zh-TW/docs/Web/API/HTMLInputElement/click)                         | Simulates a click on the element.                                                                                                                                                                                                                                                                                                                                                         |
| [`setSelectionRange()`](/zh-TW/docs/Web/API/HTMLInputElement/setSelectionRange) | Selects a range of text in the element (but does not focus it). The optional selectionDirection parameter may be "forward" or "backward" to establish the direction in which selection was set, or "none" if the direction is unknown or not relevant. The default is "none". Specifying a selectionDirection parameter sets the value of the selectionDirection property.                |
| `setRangeText()`                                                                | Selects a range of text in the element (but does not focus it). The optional selectionDirection parameter may be "forward" or "backward" to establish the direction in which selection was set, or "none" if the direction is unknown or not relevant. The default is "none". Specifying a selectionDirection parameter sets the value of the selectionDirection property.                |
| `setCustomValidity()`                                                           | Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.                                                                                                                                                                                                               |
| `checkValidity()`                                                               | Returns a {{jsxref("Boolean")}} that is `false` if the element is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires an [`invalid`](/zh-TW/docs/Web/API/HTMLInputElement/invalid_event) event at the element. It returns `true` if the element is not a candidate for constraint validation, or if it satisfies its constraints. |

- {{domxref("HTMLInputElement.stepDown()")}}
  - : Decrements the [`value`](/zh-TW/docs/Web/HTML/Element/input#value) by ([`step`](/zh-TW/docs/Web/HTML/Element/input#step) n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception: if the method is not applicable to for the current [`type`](/zh-TW/docs/Web/HTML/Element/input#type) value,
    - if the element has no [`step`](/zh-TW/docs/Web/HTML/Element/input#step) value,
    - if the [`value`](/zh-TW/docs/Web/HTML/Element/input#value) cannot be converted to a number,
    - if the resulting value is above the [`max`](/zh-TW/docs/Web/HTML/Element/input#max) or below the [`min`](/zh-TW/docs/Web/HTML/Element/input#min).
- {{domxref("HTMLInputElement.stepUp()")}}
  - : Increments the [`value`](/zh-TW/docs/Web/HTML/Element/input#value) by ([`step`](/zh-TW/docs/Web/HTML/Element/input#step) n), where n defaults to 1 if not specified. Throws an INVALID_STATE_ERR exception: if the method is not applicable to for the current [`type`](/zh-TW/docs/Web/HTML/Element/input#type) value.,
    - if the element has no [`step`](/zh-TW/docs/Web/HTML/Element/input#step) value,
    - if the [`value`](/zh-TW/docs/Web/HTML/Element/input#value) cannot be converted to a number,
    - if the resulting value is above the [`max`](/zh-TW/docs/Web/HTML/Element/input#max) or below the [`min`](/zh-TW/docs/Web/HTML/Element/input#min).
- {{domxref("HTMLInputElement.mozSetFileArray()")}}{{non-standard_inline}}
  - : Sets the files selected on the input to the given array of {{domxref("File")}} objects. This is an alternative to `mozSetFileNameArray()` which can be used in frame scripts: a chrome script can [open files as File objects](/zh-TW/docs/Extensions/Using_the_DOM_File_API_in_chrome_code) and send them via [message manager](/zh-TW/Firefox/Multiprocess_Firefox/The_message_manager).
- {{domxref("HTMLInputElement.mozGetFileNameArray()")}}
  - : Returns an array of all the file names from the input.
- {{domxref("HTMLInputElement.mozSetFileNameArray()")}}
  - : Sets the filenames for the files selected on the input. Not for use in [frame scripts](/zh-TW/Firefox/Multiprocess_Firefox/Limitations_of_frame_scripts), because it accesses the file system.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- HTML element implementing this interface: {{ HTMLElement("input") }}.
