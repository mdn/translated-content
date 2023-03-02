---
title: <input>
slug: Web/HTML/Element/input
---

{{HTMLSidebar}}

The **HTML `<input>` element** is used to create interactive controls for web-based forms in order to accept data from the user.

## Live example

To get an idea of how different the various `<input>` types look, try editing the value of the `type` attributes in the following editable live example; you'll see the output update as you type. In each case, the initial value (`text`) produces a basic text input, but you can try other values such as `number`, `color`, `checkbox`, `radio`, `date`, `file`, `month`, `password`, `range`, or `time`.

{{EmbedGHLiveSample("learning-area/html/forms/editable-input-example/editable_input.html", '100%', 230)}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/zh-TW/docs/HTML/Content_categories#Flow_content"
          >Flow content</a
        >, listed, submittable, resettable, form-associated element,
        <a href="/zh-TW/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >. If the {{htmlattrxref("type", "input")}} is not
        <code>hidden</code>, then labellable element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/zh-TW/docs/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=color|date|datetime|datetime-local|email|file</code>:
            None
          </li>
          <li>
            <code>type=hidden|month|number|password|range|research</code>: None
          </li>
          <li><code>type=search|submit|tel|text|url|week</code>: None</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Form `<input>` types

How an `<input>` works varies considerably depending on the value of its `type` attribute, hence the different types are covered in their own separate reference pages. If this attributes is not specified, the default type adopted type is `text`.

The available types are as follows:

- [`button`](/zh-TW/docs/Web/HTML/Element/input/button): A push button with no default behavior.
- [`checkbox`](/zh-TW/docs/Web/HTML/Element/input/checkbox): A check box allowing single values to be selected/deselected.
- [`color`](/zh-TW/docs/Web/HTML/Element/input/color): A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text ([more info](<https://www.w3.org/TR/html5/forms.html#color-state-(type=color)>)).
- [`date`](/zh-TW/docs/Web/HTML/Element/input/date): A control for entering a date (year, month, and day, with no time).
- [`datetime-local`](/zh-TW/docs/Web/HTML/Element/input/datetime-local): A control for entering a date and time, with no time zone.
- [`email`](/zh-TW/docs/Web/HTML/Element/input/email): A field for editing an e-mail address.
- [`file`](/zh-TW/docs/Web/HTML/Element/input/file): A control that lets the user select a file. Use the **accept** attribute to define the types of files that the control can select.
- [`hidden`](/zh-TW/docs/Web/HTML/Element/input/hidden): A control that is not displayed but whose value is submitted to the server.
- [`image`](/zh-TW/docs/Web/HTML/Element/input/image): A graphical submit button. You must use the **src** attribute to define the source of the image and the **alt** attribute to define alternative text. You can use the **height** and **width** attributes to define the size of the image in pixels.
- [`month`](/zh-TW/docs/Web/HTML/Element/input/month): A control for entering a month and year, with no time zone.
- [`number`](/zh-TW/docs/Web/HTML/Element/input/number): A control for entering a number.
- [`password`](/zh-TW/docs/Web/HTML/Element/input/password): A single-line text field whose value is obscured. Use the **maxlength** attribute to specify the maximum length of the value that can be entered.

  > **備註：** Any forms involving sensitive information like passwords (e.g. login forms) should be served over HTTPS; Firefox now implements multiple mechanisms to warn against insecure login forms — see [Insecure passwords](/zh-TW/docs/Web/Security/Insecure_passwords). Other browsers are also implementing similar mechanisms.

- [`radio`](/zh-TW/docs/Web/HTML/Element/input/radio): A radio button, allowing a single value to be selected out of multiple choices.
- [`range`](/zh-TW/docs/Web/HTML/Element/input/range): A control for entering a number whose exact value is not important.
- [`reset`](/zh-TW/docs/Web/HTML/Element/input/reset): A button that resets the contents of the form to default values.
- [`search`](/zh-TW/docs/Web/HTML/Element/input/search): A single-line text field for entering search strings. Line-breaks are automatically removed from the input value.
- [`submit`](/zh-TW/docs/Web/HTML/Element/input/submit): A button that submits the form.
- [`tel`](/zh-TW/docs/Web/HTML/Element/input/tel): A control for entering a telephone number. Line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as **pattern** and **maxlength** to restrict values entered in the control. The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied as appropriate.
- [`text`](/zh-TW/docs/Web/HTML/Element/input/text): A single-line text field. Line-breaks are automatically removed from the input value.
- [`time`](/zh-TW/docs/Web/HTML/Element/input/time): A control for entering a time value with no time zone.
- [`url`](/zh-TW/docs/Web/HTML/Element/input/url): A field for editing a URL. The input value is validated to contain either the empty string or a valid absolute URL before submitting. You can use attributes such as **pattern** and **maxlength** to restrict values entered in the control. The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied as appropriate.
- [`week`](/zh-TW/docs/Web/HTML/Element/input/week): A control for entering a date consisting of a week-year number and a week number with no time zone.

Some input types are now obsolete:

- [`datetime`](/zh-TW/docs/Web/HTML/Element/input/datetime): {{deprecated_inline}} A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone. **This feature has been [removed from WHATWG HTML.](https://github.com/whatwg/html/issues/336)**

## Attributes

### Global `<input>` attributes

This section lists the attributes available to all form `<input>` types. Non-global attributes — and global attributes that behave differently when specified on different `<input>` types — are listed on those types' individual pages.

> **備註：** This includes the [global HTML attributes](/zh-TW/docs/Web/HTML/Global_attributes).

- `type`
  - : The type of control to render. See [Form \<input> types](#form_input_types) for the individual types, with links to more information about each.
- `accept`
  - : If the value of the **type** attribute is `file`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers: A file extension starting with the STOP character (U+002E). (e.g. .jpg, .png, .doc).
    - A valid MIME type with no extensions.
    - `audio/*` representing sound files.
    - `video/*` representing video files.
    - `image/*` representing image files.
- `accesskey` {{Deprecated_Inline}}
  - : A single-character that the user can press to switch input focus to the control. This attribute is global in HTML5.
- `autocomplete`

  - : This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are: `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method. The browser does not automatically complete the entry.

    - `on`: The browser is allowed to automatically complete the value based on values that the user has entered during previous uses, however `on` does not provide any further information about what kind of data the user might be expected to enter.
    - `name`: Full name.
    - `honorific-prefix`: Prefix or title (e.g. "Mr.", "Ms.", "Dr.", "Mlle").
    - `given-name`: First name.
    - `additional-name`: Middle name.
    - `family-name`: Last name.
    - `honorific-suffix`: Suffix (e.g. "Jr.", "B.Sc.", "MBASW", "II").
    - `nickname`
    - `email`
    - `username`
    - `new-password`: A new password (e.g. when creating an account or changing a password).
    - `current-password`
    - `organization-title`: Job title (e.g. "Software Engineer", "Senior Vice President", "Deputy Managing Director").
    - `organization`
    - `street-address`
    - `address-line1`, `address-line2`, `address-line3`, `address-level4`, `address-level3`, `address-level2`, `address-level1`
    - `country`
    - `country-name`
    - `postal-code`
    - `cc-name`: Full name as given on the payment instrument.
    - `cc-given-name`
    - `cc-additional-name`
    - `cc-family-name`
    - `cc-number`: Code identifying the payment instrument (e.g. the credit card number).
    - `cc-exp:` Expiration date of the payment instrument.
    - `cc-exp-month`
    - `cc-exp-year`
    - `cc-csc`: Security code for the payment instrument.
    - `cc-type`: Type of payment instrument (e.g. Visa).
    - `transaction-currency`
    - `transaction-amount`
    - `language`: Preferred language; a valid [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
    - `bday`: birthday
    - `bday-day`
    - `bday-month`
    - `bday-year`
    - `sex`: Gender identity (e.g. Female, Fa'afafine), free-form text, no newlines.
    - `tel`: full telephone number, including country code

      - additional `tel` variants: `tel-country-code`, `tel-national`, `tel-area-code`, `tel-local`, `tel-local-prefix`, `tel-local-suffix`, `tel-extension`

    - `url`: Home page or other Web page corresponding to the company, person, address, or contact information in the other fields associated with this field.
    - `photo`: Photograph, icon, or other image corresponding to the company, person, address, or contact information in the other fields associated with this field.See the [WHATWG Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) for more detailed information.If the **autocomplete** attribute is not specified on an input element then the browser uses the **autocomplete** attribute value of the `<input>` element's form owner. The form owner is either the `form` element that this `<input>` element is a descendant of or the form element whose **id** is specified by the **form** attribute of the input element. For more information, see the {{htmlattrxref("autocomplete", "form")}} attribute in {{HTMLElement("form")}}.The **autocomplete** attribute also controls whether Firefox will, unlike other browsers, [persist the dynamic disabled state and (if applicable) dynamic checkedness](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. The persistence feature is enabled by default. Setting the value of the **autocomplete** attribute to `off` disables this feature. This works even when the **autocomplete** attribute would normally not apply to the `<input>` by virtue of its **type**. See [Firefox bug 654072](https://bugzil.la/654072).For most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+), setting the **autocomplete** attribute will _not_ prevent a browser's password manager from asking the user if they want to store login (username and password) fields and, if they agree, from autofilling the login the next time the user visits the page. See [the autocomplete attribute and login fields](/zh-TW/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).

- `autofocus`
  - : This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it (e.g. by typing in a different control). Only one form element in a document can have the **autofocus** attribute, which is a Boolean. It cannot be applied if the **type** attribute is set to `hidden` (that is, you cannot automatically set focus to a hidden control). Note that the focusing of the control may occur before the firing of the [`DOMContentLoaded` event.](/zh-TW/docs/Web/Events/DOMContentLoaded)
- `capture`
  - : When the value of the **type** attribute is `file`, the presence of this Boolean attribute indicates that capture of media directly from the device's environment using a [media capture mechanism](https://www.w3.org/TR/html-media-capture/#dfn-media-capture-mechanism) is preferred.
- `checked`
  - : When the value of the **type** attribute is `radio` or `checkbox`, the presence of this Boolean attribute indicates that the control is selected by default, otherwise it is ignored.Unlike other browsers, Firefox will by default [persist the dynamic checked state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the {{htmlattrxref("autocomplete","input")}} attribute to control this feature.
- `disabled`
  - : This Boolean attribute indicates that the form control is not available for interaction. In particular, the `click` event [will not be dispatched](https://html.spec.whatwg.org/multipage/forms.html#enabling-and-disabling-form-controls:-the-disabled-attribute) on disabled controls. Also, a disabled control's value isn't submitted with the form.Unlike other browsers, Firefox will by default [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the {{htmlattrxref("autocomplete","input")}} attribute to control this feature.
- `form`
  - : The form element that the input element is associated with (its _form owner_). The value of the attribute must be an **id** of a {{HTMLElement("form")}} element in the same document. If this attribute is not specified, this `<input>` element must be a descendant of a {{HTMLElement("form")}} element. This attribute enables you to place `<input>` elements anywhere within a document, not just as descendants of their form elements. An input can only be associated with one form.
- `formaction`
  - : The URI of a program that processes the information submitted by the input element, if it is a submit button or image. If specified, it overrides the {{htmlattrxref("action","form")}} attribute of the element's form owner.
- `formenctype`
  - : If the input element is a submit button or image, this attribute specifies the type of content that is used to submit the form to the server. Possible values are: `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an `<input>` element with the {{htmlattrxref("type","input")}} attribute set to `file`.
    - `text/plain`If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the element's form owner.
- `formmethod`
  - : If the input element is a submit button or image, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are: `post`: The data from the form is included in the body of the form and is sent to the server.
    - `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the element's form owner.
- `formnovalidate`
  - : If the input element is a submit button or image, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the element's form owner.
- `formtarget`
  - : If the input element is a submit button or image, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (e.g. tab, window, or inline frame). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the elements's form owner. The following keywords have special meanings: `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (i.e. the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
- `height`
  - : If the value of the **type** attribute is `image`, this attribute defines the height of the image displayed for the button.
- `inputmode`
  - : A hint to the browser for which keyboard to display. This attribute applies when the value of the **type** attribute is text, password, email, or url. Possible values are: `verbatim`: Alphanumeric, non-prose content such as usernames and passwords.
    - `latin`: Latin-script input in the user's preferred language with typing aids such as text prediction enabled. For human-to-computer communication such as search boxes.
    - `latin-name`: As _latin_, but for human names.
    - `latin-prose`: As _latin_, but with more aggressive typing aids. For human-to-human communication such as instant messaging or email.
    - `full-width-latin`: As _latin-prose_, but for the user's secondary languages.
    - `kana`: Kana or romaji input, typically hiragana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `katakana`: Katakana input, using full-width characters, with support for converting to kanji. Intended for Japanese text input.
    - `numeric`: Numeric input, including keys for the digits 0 to 9, the user's preferred thousands separator character, and the character for indicating negative numbers. Intended for numeric codes (e.g. credit card numbers). For actual numbers, prefer using \<input type="number">
    - `tel`: Telephone input, including asterisk and pound key. Use \<input type="tel"> if possible instead.
    - `email`: Email input. Use \<input type="email"> if possible instead.
    - `url`: URL input. Use \<input type="url"> if possible instead.
- `list`
  - : Identifies a list of pre-defined options to suggest to the user. The value must be the **id** of a {{HTMLElement("datalist")}} element in the same document. The browser displays only options that are valid values for this input element. This attribute is ignored when the **type** attribute's value is `hidden`, `checkbox`, `radio`, `file`, or a button type.
- `max`
  - : The maximum (numeric or date-time) value for this item, which must not be less than its minimum (**min** attribute) value.
- `maxlength`
  - : If the value of the **type** attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters (in UTF-16 code units) that the user can enter. For other control types, it is ignored. It can exceed the value of the **size** attribute. If it is not specified, the user can enter an unlimited number of characters. Specifying a negative number results in the default behavior (i.e. the user can enter an unlimited number of characters). The constraint is evaluated only when the value of the attribute has been changed.
- `min`
  - : The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (**max** attribute) value.
- `minlength`
  - : If the value of the **type** attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters (in Unicode code points) that the user can enter. For other control types, it is ignored.
- `multiple`
  - : This Boolean attribute indicates whether the user can enter more than one value. This attribute applies when the **type** attribute is set to `email` or `file`, otherwise it is ignored.
- `name`
  - : The name of the control, which is submitted with the form data.
- `pattern`
  - : A regular expression that the control's value is checked against. The pattern must match the entire value, not just some subset. Use the **title** attribute to describe the pattern to help the user. This attribute applies when the value of the **type** attribute is `text`, `search`, `tel`, `url`, `email`, or `password`, otherwise it is ignored. The regular expression language is the same as JavaScript {{jsxref("RegExp")}} algorithm, with the `'u'` parameter that makes it treat the pattern as a sequence of unicode code points. The pattern is not surrounded by forward slashes.
- `placeholder`
  - : A hint to the user of what can be entered in the control . The placeholder text must not contain carriage returns or line-feeds.

    > **備註：** Do not use the `placeholder` attribute instead of a {{HTMLElement("label")}} element, their purposes are different. The {{HTMLElement("label")}} attribute describes the role of the form element (i.e. it indicates what kind of information is expected), and the `placeholder` attribute is a hint about the format that the content should take. There are cases in which the `placeholder` attribute is never displayed to the user, so the form must be understandable without it.
- `readonly`
  - : This attribute indicates that the user cannot modify the value of the control. The value of the attribute is irrelevant. If you need read-write access to the input value, _do not_ add the "**readonly**" attribute. It is ignored if the value of the **type** attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, or a button type (such as `button` or `submit`).
- `required`
  - : This attribute specifies that the user must fill in a value before submitting a form. It cannot be used when the **type** attribute is `hidden`, `image`, or a button type (`submit`, `reset`, or `button`). The {{cssxref(":optional")}} and {{cssxref(":required")}} CSS pseudo-classes will be applied to the field as appropriate.
- `selectionDirection`
  - : The direction in which selection occurred. This is `"forward"` if the selection was made from left-to-right in an LTR locale or right-to-left in an RTL locale, or `"backward"` if the selection was made in the opposite direction. On platforms on which it's possible this value isn't known, the value can be `"none"`; for example, on macOS, the default direction is `"none"`, then as the user begins to modify the selection using the keyboard, this will change to reflect the direction in which the selection is expanding.
- `selectionEnd`
  - : The offset into the element's text content of the last selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
- `selectionStart`
  - : The offset into the element's text content of the first selected character. If there's no selection, this value indicates the offset to the character following the current text input cursor position (that is, the position the next character typed would occupy).
- `size`
  - : The initial size of the control. This value is in pixels unless the value of the **type** attribute is `text` or `password`, in which case it is an integer number of characters. Starting in HTML5, this attribute applies only when the **type** attribute is set to `text`, `search`, `tel`, `url`, `email`, or `password`, otherwise it is ignored. In addition, the size must be greater than zero. If you do not specify a size, a default value of 20 is used. HTML5 simply states "the user agent should ensure that at least that many characters are visible", but different characters can have different widths in certain fonts. In some browsers, a certain string with _x_ characters will not be entirely visible even if size is defined to at least _x_.
- `spellcheck`
  - : Setting the value of this attribute to `true` indicates that the element needs to have its spelling and grammar checked. The value `default` indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value. The value `false` indicates that the element should not be checked.
- `src`
  - : If the value of the **type** attribute is `image`, this attribute specifies a URI for the location of an image to display on the graphical submit button, otherwise it is ignored.
- `step`
  - : Works with the **min** and **max** attributes to limit the increments at which a numeric or date-time value can be set. It can be the string `any` or a positive floating point number. If this attribute is not set to `any`, the control accepts only values at multiples of the step value greater than the minimum.
- `tabindex`
  - : The position of the element in the tabbing navigation order for the current document.
- `usemap` {{Deprecated_Inline}}
  - : The name of a {{HTMLElement("map")}} element to be used as an image map.
- `value`
  - : The initial value of the control. This attribute is optional except when the value of the **type** attribute is `radio` or `checkbox`.
    Note that when reloading the page, Gecko and IE [will ignore the value specified in the HTML source](https://bugzilla.mozilla.org/show_bug.cgi?id=46845#c186), if the value was changed before the reload.
- `width`
  - : If the value of the **type** attribute is `image`, this attribute defines the width of the image displayed for the button.

### Non-standard `<input>` attributes

- `autocapitalize` {{non-standard_inline}}
  - : This is a nonstandard attribute used [by Chrome](https://developers.google.com/web/updates/2015/04/autocapitalize) and iOS Safari Mobile, which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are: `none`: Completely disables automatic capitalisation.
    - `sentences`: Automatically capitalise the first letter of sentences.
    - `words`: Automatically capitalise the first letter of words.
    - `characters`: Automatically capitalise all characters.
    - `on`: {{deprecated_inline}} Deprecated since iOS 5.
    - `off`: {{deprecated_inline}} Deprecated since iOS 5.[`autocapitalize` documentation](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocapitalize) in the Safari HTML Reference.
- `autocorrect` {{non-standard_inline}}
  - : This is a non-standard attribute supported by Safari that is used to control whether autocorrection should be enabled when the user is entering/editing the text value of the `<input>`. Possible attribute values are: `on`: Enable autocorrection.
    - `off`: Disable autocorrection.[`autocorrect` documentation](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-autocorrect) in the Safari HTML Reference.
- `incremental` {{non-standard_inline}}
  - : This is a nonstandard attribute supported by WebKit (Safari) and Blink (Chrome) that only applies when the **type** is `search`. If the attribute is present, regardless of what its value is, the `<input>` fires [`search`](/zh-TW/docs/Web/Events/search) events as the user edits the text value. The event is only fired after an implementation-defined timeout has elapsed since the most recent keystroke, and new keystrokes reset the timeout. In other words, the event firing is debounced. If the attribute is absent, the [`search`](/zh-TW/docs/Web/Events/search) event is only fired when the user explicitly initiates a search (e.g. by pressing the Enter key while within field). [`incremental` documentation in the Safari HTML Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/Attributes.html#//apple_ref/doc/uid/TP40008058-incremental)
- `mozactionhint` {{non-standard_inline}}
  - : Specifies an "action hint" used to determine how to label the enter key on mobile devices with virtual keyboards. Supported values are `go`, `done`, `next`, `search`, and `send`. These automatically get mapped to the appropriate string and are case-insensitive.
- `results` {{non-standard_inline}}
  - : This is a nonstandard attribute supported by Safari that only applies when the **type** is `search`. It is used to control the maximum number of entries that should be displayed in the `<input>`'s native dropdown list of past search queries. Its value should be a nonnegative decimal integer.
- `webkitdirectory` {{non-standard_inline}}
  - : This Boolean attribute indicates if the selector used when the **type** attribute is `file` has to allow for the selection of directories only.
- `x-moz-errormessage` {{non-standard_inline}}
  - : This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate.

## Examples

You can find multiple examples of `<input>` element usage on the pages covering each individual type — see [Form \<input> types](#form_input_types), and also see the [Live example](#live_example) at the top of the article.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Notes

### File inputs

1. Starting in Gecko 2.0, calling the `click()` method on an `<input>` element of type `file` opens the file picker and lets the user select files. See [Using files from web applications](/zh-TW/docs/Using_files_from_web_applications) for an example and more details.
2. You cannot set the value of a file picker from a script — doing something like the following has no effect:

    ```js
    var e = getElementById("someFileInputElement");
    e.value = "foo";
    ```

3. When a file is chosen using an `<input type="file">`, the real path to the source file is not shown in the input's `value` attribute for obvious security reasons. Instead, the filename is shown, with `C:\fakepath\` appended to the beginning of it. There are some historical reasons for this quirk, but it is supported across all modern browsers, and in fact is [defined in the spec](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

### Error messages

If you want Firefox to present a custom error message when a field fails to validate, you can use the `x-moz-errormessage` attribute to do so:

```html
<input type="email"
 x-moz-errormessage="Please specify a valid email address.">
```

Note, however, that this is not standard and will not have an effect on other browsers.

### Localization

The allowed inputs for certain \<input> types depend on the locale. In some locales, 1,000.00 is a valid number, while in other locales the valid way to enter this number is 1.000,00.

Firefox uses the following heuristics to determine the locale to validate the user's input (at least for `type="number"`):

- Try the language specified by a `lang`/`xml:lang` attribute on the element or any of its parents.
- Try the language specified by any Content-Language HTTP header or
- If none specified, use the browser's locale.

## 參見

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
- [Cross-browser HTML5 placeholder text](http://webdesignerwall.com/tutorials/cross-browser-html5-placeholder-text)
