---
title: "HTML attribute: pattern"
slug: Web/HTML/Reference/Attributes/pattern
---

{{HTMLSidebar}}

Атрибут **`pattern`** определяет [регулярное выражение](/ru/docs/Web/JavaScript/Guide/Regular_expressions), которому должно соответствовать значение элемента формы. Если ненулевое значение не соответствует ограничениям, установленным в `pattern`, доступное только для чтения свойство {{domxref('ValidityState.patternMismatch','patternMismatch')}} объекта {{domxref('ValidityState')}} будет истинным.

Атрибут `pattern` является атрибутом для полей ввода с типом {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, и {{HTMLElement("input/search", "search")}}.

The `pattern` attribute, when specified, is a regular expression which the input's [`value`](/ru/docs/Web/HTML/Reference/Global_attributes#value) must match in order for the value to pass [constraint validation](/ru/docs/Web/HTML/Guides/Constraint_validation). It must be a valid JavaScript regular expression, as used by the {{jsxref("RegExp")}} type, and as documented in our [guide on regular expressions](/ru/docs/Web/JavaScript/Guide/Regular_expressions); the `'u'` flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.

If the specified pattern is not specified or is invalid, no regular expression is applied and this attribute is ignored.

> [!NOTE]
> Use the [`title`](/ru/docs/Web/HTML/Reference/Elements/input#title) attribute to specify text that most browsers will display as a tooltip to explain what the requirements are to match the pattern. You **must not** rely on the tooltip alone for an explanation. See below for more information on usability.

Some of the input types supporting the pattern attribute, notably the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} input types, have expected value syntaxes that must be matched. If the pattern attribute isn't present, and the value doesn't match the expected syntax for that value type, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.typeMismatch','typeMismatch')}} property will be true.

### Usability

When including a `pattern`, provide a description of the pattern in visible text near the control. Additionally, include a [`title`](/ru/docs/Web/HTML/Global_attributes/title) attribute which gives a description of the pattern. User agents may use the title contents during constraint validation to tell the user that the pattern is not matched. Some browsers show a tooltip with title contents, improving usability for sighted users. Additionally, assistive technology may read the title aloud when the control gains focus, but this should not be relied upon for accessibility.

### Constraint validation

If the input's value is not the empty string and the value does not match the entire regular expression, there is a from a {{domxref('ValidityState.patternMismatch','patternMismatch')}}.
The pattern's regular expression, when matched against the value, must have its start anchored to the start of the string and its end anchored to the end of the string, which is slightly different from JavaScript regular expressions: in the case of pattern attribute, we are matching against the entire value, not just any subset, as if a `^(?:` were implied at the start of the pattern and `)$` at the end.

## Examples

Given the following:

```html
<p>
  <label
    >Enter your phone number in the format (123)456-7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />)-
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Here we have 3 sections for a north American phone number with an implicit label encompassing all three components of the phone number, expecting 3-digits, 3-digits and 4-digits respectively, as defined by the [`pattern`](/ru/docs/Web/HTML/Reference/Attributes/pattern) attribute set on each.

If the values are too long or too short, or contain characters that aren't digits, the patternMismatch will be true. When `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-classes.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("example1", 300, 40)}}

Had we used [`minlength`](/ru/docs/Web/HTML/Attributes/minlength) and [`maxlength`](/ru/docs/Web/HTML/Attributes/maxlength) attributes instead, we may have seen {{domxref('validityState.tooLong')}} or {{domxref('validityState.tooShort')}} being true.

### Specifying a pattern

You can use the [`pattern`](/ru/docs/Web/HTML/Reference/Elements/input#pattern) attribute to specify a regular expression that the inputted value must match in order to be considered valid (see [Validating against a regular expression](/ru/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) for a simple crash course on using regular expressions to validate inputs).

The example below restricts the value to 4-8 characters and requires that it contain only lower-case letters.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 to 8 lowercase letters" />
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

This renders like so:

{{ EmbedLiveSample('Specifying_a_pattern', 600, 110) }}

### Accessibility Concerns

When a control has a `pattern` attribute, the `title` attribute, if used, must describe the pattern. Relying on the `title` attribute for the visual display of text content is generally discouraged as many user agents do not expose the attribute in an accessible manner. Some browsers show a tooltip when an element with a title is hovered, but that leaves out keyboard-only and touch-only users. This is one of the several reasons you must include information informing users how to fill out the the control to match the requirements.

While `title`s are used by some browsers to populate error messaging, because browsers sometimes also show the title as text on hover, it therefore shows in non-error situations, so be careful not to word titles as if an error has occurred.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Constraint validation](/ru/docs/Web/HTML/Guides/Constraint_validation)
- [Forms: Data form validation](/ru/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Regular Expressions](/ru/docs/Web/JavaScript/Guide/Regular_expressions)
