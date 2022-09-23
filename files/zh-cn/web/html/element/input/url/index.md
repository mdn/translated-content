---
title: <input type="url">
slug: Web/HTML/Element/Input/url
---

{{HTMLRef}}

{{HTMLElement("input")}} 元素有一个 **`url`** 来让用户输入 URL{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

The input value is automatically validated to ensure that it's either empty or a properly-formatted URL before the form can be submitted. The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are automatically applied as appropriate to visually denote whether the current value of the field is a valid URL or not.

On browsers that don't support inputs of type `url`, a `url` input falls back to being a standard {{HTMLElement("input/text", "text")}} input.

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">Value</a></strong></td>
   <td>A {{domxref("DOMString")}} representing a URL, or empty</td>
  </tr>
  <tr>
   <td><strong>Events</strong></td>
   <td>{{event("change")}} and {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Supported Common Attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("maxlength", "input")}}, {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}} and {{htmlattrxref("size", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>list</code>, <code>value</code>, <code>selectionEnd</code>, <code>selectionDirection</code></td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}} and {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.</td>
  </tr>
 </tbody>
</table>

## Value

The {{HTMLElement("input")}} element's {{htmlattrxref("value", "input")}} attribute contains a {{domxref("DOMString")}} which is automatically validated as conforming to URL syntax. More specifically, there are two possible value formats that will pass validation:

1. An empty string ("") indicating that the user did not enter a value or that the value was removed.
2. A single properly-formed absolute URL. This doesn't necessarily mean the URL address exists, but it is at least formatted correctly. In simple terms, this means `urlscheme://restofurl`.

See [Validation](#validation) for details on how URLs are validated to ensure that they're formatted properly.

## Additional attributes

In addition to the attributes that operate on all {{HTMLElement("input")}} elements regardless of their type, `url` inputs support the following attributes:

| Attribute                     | Description                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`list`](#list)               | The id of the \<datalist> element that contains the optional pre-defined autocomplete options                                        |
| [`maxlength`](#maxlength)     | The maximum number of characters the input should accept                                                                            |
| [`minlength`](#minlength)     | The minimum number of characters long the input can be and still be considered valid                                                |
| [`pattern`](#pattern)         | A regular expression the input's contents must match in order to be valid                                                           |
| [`placeholder`](#placeholder) | An exemplar value to display in the input field whenever it is empty                                                                |
| [`readonly`](#readonly)       | A Boolean attribute indicating whether or not the contents of the input should be read-only                                         |
| [`size`](#size)               | A number indicating how many characters wide the input field should be                                                              |
| [`spellcheck`](#spellcheck)   | Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used |

{{page("/en-US/docs/Web/HTML/Element/input/text", "list", 0, 1, 2)}}

### maxlength

The maximum number of characters (as UTF-16 code units) the user can enter into the `url` input. This must be an integer value 0 or higher. If no `maxlength` is specified, or an invalid value is specified, the `url` input has no maximum length. This value must also be greater than or equal to the value of `minlength`.

The input will fail [constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation) if the length of the text value of the field is greater than `maxlength` UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.

### minlength

The minimum number of characters (as UTF-16 code units) the user can enter into the `url` input. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the `url` input has no minimum length.

The input will fail [constraint validation](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation) if the length of the text entered into the field is fewer than `minlength` UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.

### pattern

{{page("/en-US/docs/Web/HTML/Element/input/text", "pattern-include")}}

See the section [Pattern validation](#pattern_validation) for details and an example.

{{page("/en-US/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/en-US/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/en-US/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

{{page("/en-US/docs/Web/HTML/Element/input/text", "spellcheck", 0, 1, 2)}}

## Non-standard attributes

The following non-standard attributes are also available on some browsers. As a general rule, you should avoid using them unless it can't be helped.

| Attribute                         | Description                                                                                                                                                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`autocorrect`](#autocorrect)     | A string indicating whether or not autocorrect is `on` or `off`. **Safari only.**                                                                                                                                                                                       |
| [`mozactionhint`](#mozactionhint) | A string indicating the type of action that will be taken when the user presses the <kbd>Enter</kbd> or <kbd>Return</kbd> key while editing the field; this is used to determine an appropriate label for that key on a virtual keyboard. **Firefox for Android only.** |

{{page("/en-US/docs/Web/HTML/Element/input/text", "autocorrect", 0, 1, 2)}}

{{page("/en-US/docs/Web/HTML/Element/input/text", "mozactionhint", 0, 1, 2)}}

## Using URL inputs

When you create a URL input with the proper `type` value, `url`, you get automatic validation that the entered text is at least in the correct form to potentially be a legitimate URL. This can help avoid cases in which the user mis-types their web site's address, or provides an invalid one.

It's important, however, to note that this is not enough to ensure that the specified text is a URL which actually exists, corresponds to the user of the site, or is acceptable in any other way. It simply ensures that the value of the field is properly formatted to be a URL.

> **备注：** It's also crucial to remember that a user can tinker with your HTML behind the scenes, so your site _must not_ use this validation for any security purposes. You _must_ verify the URL on the server-side of any transaction in which the provided text may have any security implications of any kind.

### A simple URL input

Currently, all browsers which implement this element implement it as a standard text input field with basic validation features. In its most basic form, a URL input can be implemented like this:

```html
<input id="myURL" name="myURL" type="url">
```

{{ EmbedLiveSample('A_simple_URL_input', 600, 40) }}

Notice that it's considered valid when empty and when a single validly-formatted URL address is entered, but is otherwise not considered valid. By adding the {{htmlattrxref("required", "input")}} attribute, only properly-formed URLs are allowed; the input is no longer considered valid when empty.

There is nothing magical going on here. Submitting this form would cause the following data to be sent to the server: `myURL=http%3A%2F%2Fwww.example.com`. Note how characters are escaped as necessary.

### Placeholders

Sometimes it's helpful to offer an in-context hint as to what form the input data should take. This can be especially important if the page design doesn't offer descriptive labels for each {{HTMLElement("input")}}. This is where **placeholders** come in. A placeholder is a value that demonstrates the form the `value` should take by presenting an example of a valid value, which is displayed inside the edit box when the element's `value` is "". Once data is entered into the box, the placeholder disappears; if the box is emptied, the placeholder reappears.

Here, we have a `url` input with the placeholder `http://www.example.com`. Note how the placeholder disappears and reappears as you manipulate the contents of the edit field.

```html
<input id="myURL" name="myURL" type="url"
       placeholder="http://www.example.com">
```

{{ EmbedLiveSample('Placeholders', 600, 40) }}

### Controlling the input size

You can control not only the physical length of the input box, but also the minimum and maximum lengths allowed for the input text itself.

#### Physical input element size

The physical size of the input box can be controlled using the {{htmlattrxref("size", "input")}} attribute. With it, you can specify the number of characters the input box can display at a time. In this example, for instance, the `url` edit box is 30 characters wide:

```html
<input id="myURL" name="myURL" type="url"
       size="30">
```

{{ EmbedLiveSample('Physical_input_element_size', 600, 40) }}

#### Element value length

The `size` is separate from the length limitation on the entered URL itself. You can specify a minimum length, in characters, for the entered URL using the {{htmlattrxref("minlength", "input")}} attribute; similarly, use {{htmlattrxref("maxlength", "input")}} to set the maximum length of the entered URL. If `maxLength` exceeds `size`, the input box's contents will scroll as needed to show the current selection or insertion point as the content is manipulated.

The example below creates a 30-character wide URL address entry box, requiring that the contents be no shorter than 10 characters and no longer than 80 characters.

```html
<input id="myURL" name="myURL" type="url"
       size="30" minlength="10" maxlength="80">
```

{{EmbedLiveSample("Element_value_length", 600, 40) }}

> **备注：** These attributes also affect validation; a value shorter or longer than the specified minimum/maximum lengths will be classified as invalid; in addition most browsers will simply refuse to let the user enter a value longer than the specified maximum length.

### Providing default options

As always, you can provide a default value for a `url` input box by setting its {{htmlattrxref("value", "input")}} attribute:

```html
<input id="myURL" name="myURL" type="url"
       value="http://www.example.com">
```

{{EmbedLiveSample("Default_value", 600, 40)}}

#### Offering suggested values

Taking it a step farther, you can provide a list of default options from which the user can select by specifying the {{htmlattrxref("list", "input")}} attribute. This doesn't limit the user to those options, but does allow them to select commonly-used URLs more quickly. This also offers hints to {{htmlattrxref("autocomplete", "input")}}. The `list` attribute specifies the ID of a {{HTMLElement("datalist")}}, which in turn contains one {{HTMLElement("option")}} element per suggested value; each `option`'s `value` is the corresponding suggested value for the URL entry box.

```html
<input id="myURL" name="myURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/">
  <option value="http://www.google.com/">
  <option value="http://www.microsoft.com/">
  <option value="https://www.mozilla.org/">
  <option value="http://w3.org/">
</datalist>
```

{{EmbedLiveSample("Offering_suggested_values", 600, 40)}}

With the {{HTMLElement("datalist")}} element and its {{HTMLElement("option")}}s in place, the browser will offer the specified values as potential values for the URL; this is typically presented as a popup or drop-down menu containing the suggestions. While the specific user experience may vary from one browser to another, typically clicking in the edit box presents a drop-down of the suggested URLs. Then, as the user types, the list is adjusted to show only matching values. Each typed character narrows down the list until the user makes a selection or types a custom value.

#### Using labels for suggested values

You can opt to include the {{htmlattrxref("label", "option")}} attribute on one or all of your `<option>` elements to provide textual labels. Some browsers may display only the labels, while others may display both the label and the URL.

```html
<input id="myURL" name="myURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs">
  <option value="http://www.google.com/" label="Google">
  <option value="http://www.microsoft.com/" label="Microsoft">
  <option value="https://www.mozilla.org/" label="Mozilla">
  <option value="http://w3.org/" label="W3C">
</datalist>
```

{{EmbedLiveSample("Using_labels_for_suggested_values", 600, 40)}}

## Validation

There are two levels of content validation available for `url` inputs. First, there's the standard level of validation offered to all {{HTMLElement("input")}}s, which automatically ensures that the contents meet the requirements to be a valid URL. But there's also the option to add additional filtering to ensure that your own specialized needs are met, if you have any.

> **警告：** HTML form validation is _not_ a substitute for scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to simply bypass your HTML entirely and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data (or data which is too large, is of the wrong type, and so forth) is entered into your database.

### Basic validation

Browsers that support the `url` input type automatically provide validation to ensure that only text that matches the standard format for URLs is entered into the input box.

The syntax of a URL is fairly intricate. It's defined by WHATWG's [URL Living Standard](https://url.spec.whatwg.org/) and is described for newcomers in our article [What is a URL?](/zh-CN/docs/Learn/Common_questions/What_is_a_URL)

### Making a URL required

As mentioned earlier, to make a URL entry required before the form can be submitted (you can't leave the field blank), you just need to include the {{htmlattrxref("required", "input")}} attribute on the input.

```html
<form>
  <input id="myURL" name="myURL" type="url" required>
  <button>Submit</button>
</form>
```

{{EmbedLiveSample("Making_a_URL_required", 600, 40)}}

Try submitting the above form with no value entered to see what happens.

### Pattern validation

If you need the entered URL to be restricted further than just "any string that looks like a URL," you can use the {{htmlattrxref("pattern", "input")}} attribute to specify a {{Glossary("regular expression")}} the value must match for the value to be valid.

For example, let's say you're building a support page for employees of Myco, Inc. which will let them contact their IT department for help if one of their pages has a problem. In our simplified form, the user needs to enter the URL of the page that has a problem, and a message describing what is wrong. But we want the URL to only successfully validate if the entered URL is in a Myco domain.

Since inputs of type `url` validate against both the standard URL validation _and_ the specified {{htmlattrxref("pattern", "input")}}, you can implement this easily. Let's see how:

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
  }

  input[type="number"] {
    width: 100px;
  }

  input + span {
    padding-right: 30px;
  }

  input:invalid+span:after {
    position: absolute; content: '✖';
    padding-left: 5px;
  }

  input:valid+span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
  }
```

```html
<form>
  <div>
    <label for="myURL">Enter the problem website address:</label>
    <input id="myURL" name="myURL" type="url"
           required pattern=".*\.myco\..*"
           title="The URL must be in a Myco domain">
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">What is the problem?</label>
    <input id="myComment" name="myComment" type="text"
           required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample("Pattern_validation", 700, 150)}}

First of all, the {{htmlattrxref("required", "input")}} attribute is specified, making it mandatory that a valid email address be provided.

Second, in the `url` input we set `pattern` to `".*\.myco\..*"`. This simple regular expression requests a string that has any number of characters, followed by a dot, followed by "myco", followed by a dot, followed by any number of characters. And because the browser runs both the standard URL filter _and_ our custom pattern against the specified text, we wind up with a validation which says "make sure this is a valid URL, and also in a Myco domain."

This isn't perfect, but it is good enough for this simple demo's requirements.

It's advisable to use the {{htmlattrxref("title")}} attribute along with `pattern`. If you do, the `title` _must_ describe the pattern; it should explain what format the data should take on, rather than any other information. That's because the `title` may be displayed or spoken as part of a validation error message. For example, the browser might present the message "The entered text doesn't match the required pattern." followed by your specified `title`. If your `title` is something like "URL", the result would be the message "The entered text doesn't match the required pattern. URL", which is not a good user experience.

That's why, instead, we specify the string "The URL must be in a myco domain". By doing that, the resulting full error message might be something like "The entered text doesn't match the required pattern. The URL should be in a myco domain."

> **备注：** If you run into trouble while writing your validation regular expressions and they're not working properly, check your browser's console; there may be helpful error messages there to aid you in solving the problem.

## Examples

There's not much else to say about `url` type inputs; check the [Pattern validation](#pattern_validation) and [Using URL inputs](#using_url_inputs) sections for numerous examples.

You can also find our [pattern validation example on GitHub](https://github.com/mdn/learning-area/blob/master/html/forms/url-example/index.html) (see it [running live also](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/zh-CN/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/zh-CN/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email)
- [Compatibility of CSS properties](/zh-CN/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
