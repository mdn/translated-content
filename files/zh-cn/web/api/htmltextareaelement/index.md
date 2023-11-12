---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
---

{{APIRef("HTML DOM")}}

**`HTMLTextAreaElement`** 接口提供了特殊的属性和方法，用于控制 {{HTMLElement("textarea")}} 元素的布局和展示。

{{InheritanceDiagram(600,120)}}

## 属性

| `form` {{readonlyInline}}                                   | `object:` 返回一个父表单元素的引用。如果这个元素没有被包含在一个表单元素中，则这个值是页面中任意一个 {{HTMLElement("form")}} 元素的 [`id`](/zh-CN/docs/Web/HTML/Element/form#id) 属性或者 `null`。                                                                                                                                |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` {{readonlyInline}}                                   | `string:` 返回字符串 `textarea`。                                                                                                                                                                                                                                                                                                 |
| `value`                                                     | `string:` Returns / Sets the raw value contained in the control.                                                                                                                                                                                                                                                                  |
| `textLength` {{readonlyInline}}                             | `long:` Returns the codepoint length of the control's `value`. Same as `calling value.length`                                                                                                                                                                                                                                     |
| `defaultValue`                                              | `string:` Returns / Sets the control's default value, which behaves like the {{domxref("Node.textContent")}} property.                                                                                                                                                                                                            |
| `placeholder`                                               | `string:` 返回/设置元素[`placeholder`](/zh-CN/docs/Web/HTML/Element/textarea#placeholder) 属性，用于提示用户在组件中应该输入什么。                                                                                                                                                                                                |
| `rows`                                                      | `unsigned long:` Returns / Sets the element's [`rows`](/zh-CN/docs/Web/HTML/Element/textarea#rows) attribute, indicating the number of visible text lines for the control.                                                                                                                                                        |
| `cols`                                                      | `unsigned long:` Returns / Sets the element's [`cols`](/zh-CN/docs/Web/HTML/Element/textarea#cols) attribute, indicating the visible width of the text area.                                                                                                                                                                      |
| `autofocus`                                                 | `boolean:` Returns / Sets the element's [`autofocus`](/zh-CN/docs/Web/HTML/Element/textarea#autofocus) attribute, indicating that the control should have input focus when the page loads                                                                                                                                         |
| `name`                                                      | `string:` Returns / Sets the element's [`name`](/zh-CN/docs/Web/HTML/Element/textarea#name) attribute, containing the name of the control.                                                                                                                                                                                        |
| `disabled`                                                  | `boolean:` Returns / Sets the element's [`disabled`](/zh-CN/docs/Web/HTML/Element/textarea#disabled) attribute, indicating that the control is not available for interaction.                                                                                                                                                     |
| {{domxref("HTMLTextAreaElement.labels")}}{{ReadOnlyInline}} | {{domxref("NodeList")}}: Returns a list of label elements associated with this select element.                                                                                                                                                                                                                                    |
| `maxLength`                                                 | `long:` Returns / Sets the element's [`maxlength`](/zh-CN/docs/Web/HTML/Element/textarea#maxlength) attribute, indicating the maximum number of characters the user can enter. This constraint is evaluated only when the value changes.                                                                                          |
| `minLength`                                                 | `long:` Returns / Sets the element's [`minlength`](/zh-CN/docs/Web/HTML/Element/textarea#minlength) attribute, indicating the minimum number of characters the user can enter. This constraint is evaluated only when the value changes.                                                                                          |
| `accessKey`                                                 | `string:` Returns / Sets the element's [`accesskey`](/zh-CN/docs/Web/HTML/Element/textarea#accesskey) attribute.                                                                                                                                                                                                                  |
| `readOnly`                                                  | `boolean:` Returns / Sets the element's [`readonly`](/zh-CN/docs/Web/HTML/Element/textarea#readonly) attribute, indicating that the user cannot modify the value of the control.                                                                                                                                                  |
| `required`                                                  | `boolean:` Returns / Sets the element's [`required`](/zh-CN/docs/Web/HTML/Element/textarea#required) attribute, indicating that the user must specify a value before submitting the form.                                                                                                                                         |
| `tabIndex`                                                  | `long:` Returns / Sets the position of the element in the tabbing navigation order for the current document.                                                                                                                                                                                                                      |
| `selectionStart`                                            | `unsigned long:` Returns / Sets the index of the beginning of selected text. If no text is selected, contains the index of the character that follows the input cursor. On being set, the control behaves as if `setSelectionRange()` had been called with this as the first argument, and `selectionEnd` as the second argument. |
| `selectionEnd`                                              | `unsigned long:` Returns / Sets the index of the end of selected text. If no text is selected, contains the index of the character that follows the input cursor. On being set, the control behaves as if `setSelectionRange()` had been called with this as the second argument, and `selectionStart` as the first argument.     |
| `selectionDirection`                                        | `string:` Returns / Sets the direction in which selection occurred. This is `"forward"` if selection was performed in the start-to-end direction of the current locale, or `"backward"` for the opposite direction. This can also be `"none"` if the direction is unknown."                                                       |
| `validity` {{readonlyInline}}                               | `{{domxref("ValidityState")}} object:` Returns the validity states that this element is in.                                                                                                                                                                                                                                       |
| `willValidate` {{readonlyInline}}                           | `boolean:` Returns whether the element is a candidate for constraint validation. `false` if any conditions bar it from constraint validation, including its `readOnly` or `disabled` property is `true`.                                                                                                                          |
| `validationMessage` {{readonlyInline}}                      | `string:` Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.                                                    |
| `autocomplete` {{experimental_inline}}                      |                                                                                                                                                                                                                                                                                                                                   |
| `autocapitalize` {{experimental_inline}}                    | `string:` Returns / Sets the element's capitalization behavior for user input. Valid values are: `none`, `off`, `characters`, `words`, `sentences`.                                                                                                                                                                               |
| `inputMode` {{experimental_inline}}                         |                                                                                                                                                                                                                                                                                                                                   |
| `wrap`                                                      | `string:` Returns / Sets the [`wrap`](/zh-CN/docs/Web/HTML/Element/textarea#wrap) HTML attribute, indicating how the control wraps text.                                                                                                                                                                                          |

The two properties `tabIndex` and `accessKey` are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLTextAreaElement` in DOM Level 2 HTML and earlier specifications.

## 方法

| {{domxref("HTMLElement/blur", "blur()")}}                                | Removes focus from the control; keystrokes will subsequently go nowhere.                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxref("HTMLElement/focus", "focus()")}}                              | Gives focus to the control; keystrokes will subsequently go to this element.                                                                                                                                                                                                                                 |
| {{domxref("HTMLInputElement/select", "select()")}}                       | Selects the contents of the control.                                                                                                                                                                                                                                                                         |
| {{domxref("HTMLInputElement/setRangeText", "setRangeText()")}}           | Replaces a range of text in the element with new text.                                                                                                                                                                                                                                                       |
| {{domxref("HTMLInputElement/setSelectionRange", "setSelectionRange()")}} | Selects a range of text in the element (but does not focus it).                                                                                                                                                                                                                                              |
| `checkValidity()`                                                        | Returns `false` if the button is a candidate for constraint validation, and it does not satisfy its constraints. In this case, it also fires a cancelable `invalid` event at the control. It returns `true` if the control is not a candidate for constraint validation, or if it satisfies its constraints. |
| `reportValidity()`                                                       | This method reports the problems with the constraints on the element, if any, to the user. If there are problems, it fires a cancelable `invalid` event at the element, and returns `false`; if there are no problems, it returns `true`.                                                                    |
| `setCustomValidity(DOMstring)`                                           | Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.                                                                                                                                  |

The two methods `blur()` and `focus()` are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLTextAreaElement` in DOM Level 2 HTML and earlier specifications.

## 事件

Listen to these events using [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface:

- [`input` event](/zh-CN/docs/Web/API/HTMLElement/input_event)
  - : Fires when the `value` of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed.

## 示例

### Autogrowing textarea example

Make a textarea autogrow while typing:

JavaScript function:

```js
function autoGrow(oField) {
  if (oField.scrollHeight > oField.clientHeight) {
    oField.style.height = oField.scrollHeight + "px";
  }
}
```

CSS:

```css
textarea.noscrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

HTML:

```html
<form>
  <fieldset>
    <legend>Your comments</legend>
    <p><textarea class="noscrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Insert HTML tags example

Insert some HTML tags or _smiles_ or any custom text in a textarea.
JavaScript function:

```js
function insertMetachars(sStartTag, sEndTag) {
  var bDouble = arguments.length > 1,
    oMsgInput = document.myForm.myTxtArea,
    nSelStart = oMsgInput.selectionStart,
    nSelEnd = oMsgInput.selectionEnd,
    sOldText = oMsgInput.value;
  oMsgInput.value =
    sOldText.substring(0, nSelStart) +
    (bDouble
      ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag
      : sStartTag) +
    sOldText.substring(nSelEnd);
  oMsgInput.setSelectionRange(
    bDouble || nSelStart === nSelEnd ? nSelStart + sStartTag.length : nSelStart,
    (bDouble ? nSelEnd : nSelStart) + sStartTag.length,
  );
  oMsgInput.focus();
}
```

CSS to decorate the internal span to behave like a link:

```css
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: #0000ff;
}
```

HTML:

```html
<form name="myForm">
  <p>
    [&nbsp;<span
      class="intLink"
      onclick="insertMetachars('&lt;strong&gt;','&lt;\/strong&gt;');"
      ><strong>Bold</strong></span
    >
    |
    <span
      class="intLink"
      onclick="insertMetachars('&lt;em&gt;','&lt;\/em&gt;');"
      ><em>Italic</em></span
    >
    |
    <span
      class="intLink"
      onclick="var newURL=prompt('Enter the full URL for the link');if(newURL){insertMetachars('&lt;a href=\u0022'+newURL+'\u0022&gt;','&lt;\/a&gt;');}else{document.myForm.myTxtArea.focus();}"
      >URL</span
    >
    |
    <span
      class="intLink"
      onclick="insertMetachars('\n&lt;code&gt;\n','\n&lt;\/code&gt;\n');"
      >code</span
    >
    | <span class="intLink" onclick="insertMetachars(' :-)');">smile</span> |
    etc. etc.&nbsp;]
  </p>
  <p>
    <textarea name="myTxtArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. Sed consectetur eleifend felis vitae luctus. Praesent sagittis, est eget bibendum tincidunt, ligula diam tincidunt augue, a fermentum odio velit eget mi. Phasellus mattis, elit id fringilla semper, orci magna cursus ligula, non venenatis lacus augue sit amet dui. Pellentesque lacinia odio id nisi pulvinar commodo tempus at odio. Ut consectetur eros porttitor nunc mollis ultrices. Aenean porttitor, purus sollicitudin viverra auctor, neque erat blandit sapien, sit amet tincidunt massa mi ac nibh. Proin nibh sem, bibendum ut placerat nec, cursus et lacus. Phasellus vel augue turpis. Nunc eu mauris eu leo blandit mollis interdum eget lorem. </textarea
    >
  </p>
</form>
```

{{EmbedLiveSample('Insert_HTML_tags_example', 600, 300)}}

### Maximum length and number of lines example

Create a textarea with a maximum number of characters per line and a maximum number of lines:

First, create a function that takes the text field and a key event as input and determines if any of the limits have been reached. If the limit has not been reached, it will return the key.

```js
function checkRows(oField, oKeyEvent) {
  var nKey = (
      oKeyEvent ||
      /* old IE */ window.event || /* check is not supported! */ { keyCode: 38 }
    ).keyCode,
    // put here the maximum number of characters per line:
    nCols = 30,
    // put here the maximum number of lines:
    nRows = 5,
    nSelS = oField.selectionStart,
    nSelE = oField.selectionEnd,
    sVal = oField.value,
    nLen = sVal.length,
    nBackward = nSelS >= nCols ? nSelS - nCols : 0,
    nDeltaForw =
      sVal
        .substring(nBackward, nSelS)
        .search(new RegExp("\\n(?!.{0," + String(nCols - 2) + "}\\n)")) + 1,
    nRowStart = nBackward + nDeltaForw,
    aReturns = (
      sVal.substring(0, nSelS) + sVal.substring(nSelE, sVal.length)
    ).match(/\n/g),
    nRowEnd = nSelE + nRowStart + nCols - nSelS,
    sRow =
      sVal.substring(nRowStart, nSelS) +
      sVal.substring(nSelE, nRowEnd > nLen ? nLen : nRowEnd),
    bKeepCols =
      nKey === 13 ||
      nLen + 1 < nCols ||
      /\n/.test(sRow) ||
      ((nRowStart === 0 || nDeltaForw > 0 || nKey > 0) &&
        (sRow.length < nCols ||
          (nKey > 0 && (nLen === nRowEnd || sVal.charAt(nRowEnd) === "\n"))));

  return (
    (nKey !== 13 || (aReturns ? aReturns.length + 1 : 1) < nRows) &&
    ((nKey > 32 && nKey < 41) || bKeepCols)
  );
}
```

In the HTML we just need to hook our function to the `onkeypress` event and specify that our textarea does not accept pasting:

```html
<form>
  <p>
    Textarea with fixed number of characters per line:<br />
    <textarea
      cols="50"
      rows="10"
      onkeypress="return checkRows(this, event);"
      onpaste="return false;"></textarea>
  </p>
</form>
```

{{EmbedLiveSample('Maximum_length_and_number_of_lines_example', 600, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
