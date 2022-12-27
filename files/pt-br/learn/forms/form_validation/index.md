---
title: Form data validation
slug: Learn/Forms/Form_validation
translation_of: Learn/Forms/Form_validation
original_slug: Web/Guide/HTML/Forms/Form_validation
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}

A validação de formulário nos ajuda a garantir que os usuários preencham os formulários no formato correto, garantindo que os dados enviados funcionem com êxito em nossos aplicativos. Este artigo apresentará conceitos e exemplos básicos sobre validação de formulário. Para mais informações adicionais, consulte o [Constraint validation guide](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation).

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento em informática, uma compreensão razoável de
        <a href="/en-US/docs/Learn/HTML">HTML</a>,
        <a href="/en-US/docs/Learn/CSS">CSS</a>, e
        <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender o que é validação de formulário, por que é importante e
        aplicação de várias técnicas para implementá-lo.
      </td>
    </tr>
  </tbody>
</table>

## O que é validação de formulário?

Vá a qualquer site popular com um formulário de registro, e perceberá que eles dão feedback quando você não insere seus dados no formato esperado. Você receberá mensagens como:

- "Sua senha precisa ter entre 8 e 30 caracteres e conter uma letra maiúscula, um símbolo e um número"
- "Por favor, digite seu número de telefone no formato xxx-xxxx" (ele impõe três números seguidos por um traço, seguido por quatro números)
- "Por favor insira um endereço de email válido" (se a sua entrada não estiver no formato "email\@email.com")
- "Este campo é obrigatório" (você não pode deixar este campo em branco)

Isso é chamado de validação de formulário - quando você insere dados, o aplicativo da Web faz a verificação para ver se os dados estão corretos. Se estiver correto, o aplicativo permite que os dados sejam enviados ao servidor e (geralmente) salvos em um banco de dados; se não, você receberá uma mensagem de erro explicando quais correções precisam ser feitas. A validação de formulários pode ser implementada de várias maneiras diferentes.

Queremos tornar o preenchimento de formulários da web o mais fácil possível. Então, por que insistimos em validar nossos formulários? Existem três razões principais:

- **Nos queremos que o dado correto e no formato correto** — nossa aplicação não irá trabalhar de forma correta se os dados dos nossos usuarios estivem armazenados em formato incorreto, ou quando esses dados são omitidos.
- **Quemos proteger os dados dos nossos usuários** — Forçarnosos usuários a fornecer senhas seguras facilita na proteção das informações da conta do usuário.
- **Queremos proteger nos mesmos** — Existem diversas maneiras de um usuário malicioso usar formulários desprotegidos para danificar nossa aplicação (veja [Website security](/pt-BR/docs/Learn/Server-side/First_steps/Website_security)).
  {{warning("Nunca confie nos dados passados do cliente para o servidor. Mesmo que seu formulário seja validado de maneira correta e previna a má formação de inputs no lado do cliente, um usuário malicioso ainda pode roubar o request da conexão.")}}

### Different types of form validation

There are two different types of form validation which you'll encounter on the web:

- **Client-side validation** is validation that occurs in the browser before the data has been submitted to the server. This is more user-friendly than server-side validation as it gives an instant response. This can be further subdivided:

  - **JavaScript** validation is coded using JavaScript. It is completely customizable.
  - **Built-in form validation** using HTML5 form validation features. This generally does not require JavaScript. Built-in form validation has better performance, but it is not as customizable as JavaScript.

- **Server-side validation** is validation which occurs on the server after the data has been submitted. Server-side code is used to validate the data before it is saved into the database. If the data fails authentication, a response is sent back to the client to tell the user what corrections to make. Server-side validation is not as user-friendly as client-side validation, as it does not provide errors until the entire form has been submitted. However, server-side validation is your application's last line of defence against incorrect or even malicious data. All popular [server-side frameworks](/pt-BR/docs/Learn/Server-side/First_steps/Web_frameworks) have features for **validating** and **sanitizing** data (making it safe).

In the real world, developers tend to use a combination of client-side and server-side validation.

## Using built-in form validation

One of the features of [HTML5](/pt-BR/docs/HTML/HTML5) is the ability to validate most user data without relying on scripts. This is done by using [validation attributes](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes) on form elements, which allow you to specify rules for a form input like whether a value needs to be filled in, the minimum and maximum length of the data, whether it needs to be a number, an email address, or something else, and a pattern that it must match. If the entered data follows all the specified rules, it is considered valid; if not, it is considered invalid.

When an element is valid:

- The element matches the {{cssxref(":valid")}} CSS pseudo-class; this will let you apply a specific style to valid elements.
- If the user tries to send the data, the browser will submit the form, provided there is nothing else stopping it from doing so (e.g., JavaScript).

When an element is invalid:

- The element matches the {{cssxref(":invalid")}} CSS pseudo-class; this will let you apply a specific style to invalid elements.
- If the user tries to send the data, the browser will block the form and display an error message.

### Validation constraints on input elements — starting simple

In this section, we'll look at some of the different HTML5 features that can be used to validate {{HTMLElement("input")}} elements.

Let's start with a simple example — an input that allows you to choose your favorite fruit out of a choice of banana or cherry. This involves a simple text {{HTMLElement("input")}} with a matching label, and a submit {{htmlelement("button")}}. You can find the source code on GitHub as [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html), and a live example below:

```html hidden
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like">
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Hidden_code", "100%", 50)}}

To begin with, make a copy of `fruit-start.html` in a new directory on your hard drive.

### The required attribute

The simplest HTML5 validation feature to use is the {{htmlattrxref("required", "input")}} attribute — if you want to make an input mandatory, you can mark the element using this attribute. When this attribute is set, the form won't submit (and will display an error message) when the input is empty (the input will also be considered invalid).

Add a `required` attribute to your input, as shown below:

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like" required>
  <button>Submit</button>
</form>
```

Also, take note of the CSS included in the example file:

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

This causes the input to have a bright red dashed border when it is invalid, and a more subtle black border when valid. Try out the new behaviour in the example below:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

### Validating against a regular expression

Another very common validation feature is the {{htmlattrxref("pattern","input")}} attribute, which expects a [Regular Expression](/pt-BR/docs/JavaScript/Guide/Regular_Expressions) as its value. A regular expression (regex) is a pattern that can be used to match character combinations in text strings, so they are ideal for form validation (as well as a variety of other uses in JavaScript).

Regexs are quite complex, and we do not intend to teach you them exhaustively in this article. Below are some examples to give you a basic idea of how they work:

- `a` — matches one character that is `a` (not `b`, not `aa`, etc.)
- `abc` — matches `a`, followed by `b`, followed by `c`.
- `a|b` — matches one character that is `a` or `b`.
- `abc|xyz` — matches exactly `abc` or exactly `xyz` (but not `abcxyz`, or `a` or `y`, etc).
- There are many more possibilities that we don't need to cover here.

Anyway, let's implement an example — update your HTML to add a `pattern` attribute, like so:

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i_like" required pattern="banana|cherry">
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

In this example, the {{HTMLElement("input")}} element accepts one of two possible values: the string "banana" or the string "cherry".

At this point, try changing the value inside the `pattern` attribute to equal some of the examples you saw earlier, and look at how that affects the values you can enter to make the input value valid. Try writing some of your own, and see how you get on! Try to make them fruit-related where possible, so your examples make sense!

> **Nota:** Some {{HTMLElement("input")}} element types do not need a {{htmlattrxref("pattern","input")}} attribute to be validated. Specifying the `email` type for example validates the inputted value against a regular expression matching a well-formed email address (or a comma-separated list of email addresses if it has the {{htmlattrxref("multiple","input")}} attribute). As a further example, fields with the `url` type automatically require a properly-formed URL.

> **Nota:** The {{HTMLElement("textarea")}} element does not support the {{htmlattrxref("pattern","input")}} attribute.

### Constraining the length of your entries

All text fields created by {{HTMLElement("input")}} or {{HTMLElement("textarea")}} can be constrained in size using the {{htmlattrxref("minlength","input")}} and {{htmlattrxref("maxlength","input")}} attributes. A field is invalid if its value is shorter than the {{htmlattrxref("minlength","input")}} value or longer than the {{htmlattrxref("maxlength","input")}} value. Browsers often don't let the user type a longer value than expected into text fields anyway, but it is useful to have this fine-grained control available.

For number fields (i.e. `<input type="number">`), the {{htmlattrxref("min","input")}} and {{htmlattrxref("max","input")}} attributes also provide a validation constraint. If the field's value is lower than the {{htmlattrxref("min","input")}} attribute or higher than the {{htmlattrxref("max","input")}} attribute, the field will be invalid.

Let's look at another example. Create a new copy of the [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html) file.

Now delete the contents of the `<body>` element, and replace it with the following:

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input type="text" id="choose" name="i_like" required minlength="6" maxlength="6">
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10">
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Here you'll see that we've given the `text` field a `minlength` and `maxlength` of 6 — the same length as banana and cherry. Entering less characters will show as invalid, and entering more is not possible in most browsers.
- We've also given the `number` field a `min` of 1 and a `max` of 10 — entered numbers outside this range will show as invalid, and you won't be able to use the increment/decrement arrows to move the value outside this range.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Here is the example running live:

{{EmbedLiveSample("Constraining_the_length_of_your_entries", "100%", 100)}}

> **Nota:** `<input type="number">` (and other types, like `range`) can also take a {{htmlattrxref("step", "input")}} attribute, which specifies what increment the value will go up or down by when the input controls are used (like the up and down number buttons).

### Full example

Here is a full example to show off usage of HTML's built-in validation features:

```html
<form>
  <p>
    <fieldset>
      <legend>Title<abbr title="This field is mandatory">*</abbr></legend>
      <input type="radio" required name="title" id="r1" value="Mr"><label for="r1">Mr.</label>
      <input type="radio" required name="title" id="r2" value="Ms"><label for="r2">Ms.</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">How old are you?</label>
    <!-- The pattern attribute can act as a fallback for browsers which
         don't implement the number input type but support the pattern attribute.
         Please note that browsers that support the pattern attribute will make it
         fail silently when used with a number field.
         Its usage here acts only as a fallback -->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory">*</abbr></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your e-mail?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

```css
body {
  font: 1em sans-serif;
  padding: 0;
  margin : 0;
}

form {
  max-width: 200px;
  margin: 0;
  padding: 0 5px;
}

p > label {
  display: block;
}

input[type=text],
input[type=email],
input[type=number],
textarea,
fieldset {
/* required to properly style form
   elements on WebKit based browsers */
  -webkit-appearance: none;

  width : 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

{{EmbedLiveSample("Full_example", "100%", 420)}}

See [Validation-related attributes](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes) for a complete list of attributes that can be used to constrain input values, and the input types that support them.

### Customized error messages

As seen in the examples above, each time the user tries to submit an invalid form, the browser displays an error message. The way this message is displayed depends on the browser.

These automated messages have two drawbacks:

- There is no standard way to change their look and feel with CSS.
- They depend on the browser locale, which means that you can have a page in one language but an error message displayed in another language.

| Browser                | Rendering                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| Firefox 17 (Windows 7) | ![Example of an error message with Firefox in French on an English page](/files/4329/error-firefox-win7.png) |
| Chrome 22 (Windows 7)  | ![Example of an error message with Chrome in French on an English page](/files/4327/error-chrome-win7.png)   |
| Opera 12.10 (Mac OSX)  | ![Example of an error message with Opera in French on an English page](/files/4331/error-opera-macos.png)    |

To customize the appearance and text of these messages, you must use JavaScript; there is no way to do it using just HTML and CSS.

HTML5 provides the [constraint validation API](/pt-BR/docs/Web/API/Constraint_validation) to check and customize the state of a form element. Among other things, it's possible to change the text of the error message. Let's see a quick example:

```html
<form>
  <label for="mail">I would like you to provide me an e-mail</label>
  <input type="email" id="mail" name="mail">
  <button>Submit</button>
</form>
```

In JavaScript, you call the [`setCustomValidity()`](</pt-BR/docs/HTML/HTML5/Constraint_validation#Constraint_API's_element.setCustomValidity()>) method:

```js
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});
```

{{EmbedLiveSample("Customized_error_messages", "100%", 80)}}

## Validating forms using JavaScript

If you want to take control over the look and feel of native error messages, or if you want to deal with browsers that do not support HTML's built-in form validation, you must use JavaScript.

### The constraint validation API

More and more browsers now support the constraint validation API, and it's becoming reliable. This API consists of a set of methods and properties available on specific form element interfaces:

- [HTMLButtonElement](/pt-BR/docs/Web/API/HTMLButtonElement)
- [HTMLFieldSetElement](/pt-BR/docs/Web/API/HTMLFieldSetElement)
- [HTMLInputElement](/pt-BR/docs/Web/API/HTMLInputElement)
- [HTMLOutputElement](/pt-BR/docs/Web/API/HTMLOutputElement)
- [HTMLSelectElement](/pt-BR/docs/Web/API/HTMLSelectElement)
- [HTMLTextAreaElement](/pt-BR/docs/Web/API/HTMLTextAreaElement)

#### Constraint validation API properties

| Property            | Description                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validationMessage` | A localized message describing the validation constraints that the control does not satisfy (if any), or the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or the element's value satisfies its constraints. |
| `validity`          | A {{domxref("ValidityState")}} object describing the validity state of the element. See that article for details of possible validity states.                                                                                                                |
| `willValidate`      | Returns `true` if the element will be validated when the form is submitted; `false` otherwise.                                                                                                                                                                       |

#### Constraint validation API methods

| Method                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkValidity()`                                                | Returns `true` if the element's value has no validity problems; `false` otherwise. If the element is invalid, this method also causes an {{event("invalid")}} event at the element.                                                                                                                                                                                                                                          |
| {{domxref("HTMLFormElement.reportValidity()")}} | Returns `true` if the element or its child controls satisfy validation constraints. When `false` is returned, cancelable {{event("invalid")}} events are fired for each invalid element and validation problems are reported to the user.                                                                                                                                                                                    |
| `setCustomValidity(message)`                                     | Adds a custom error message to the element; if you set a custom error message, the element is considered to be invalid, and the specified error is displayed. This lets you use JavaScript code to establish a validation failure other than those offered by the standard constraint validation API. The message is shown to the user when reporting the problem. If the argument is the empty string, the custom error is cleared. |

For legacy browsers, it's possible to use a [polyfill such as Hyperform](https://hyperform.js.org/) to compensate for the lack of support for the constraint validation API. Since you're already using JavaScript, using a polyfill isn't an added burden to your Web site or Web application's design or implementation.

#### Example using the constraint validation API

Let's see how to use this API to build custom error messages. First, the HTML:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail">
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

This simple form uses the {{htmlattrxref("novalidate","form")}} attribute to turn off the browser's automatic validation; this lets our script take control over validation. However, this doesn't disable support for the constraint validation API nor the application of the CSS pseudo-class {{cssxref(":valid")}}, {{cssxref(":invalid")}}, {{cssxref(":in-range")}} and {{cssxref(":out-of-range")}} classes. That means that even though the browser doesn't automatically check the validity of the form before sending its data, you can still do it yourself and style the form accordingly.

The [`aria-live`](/pt-BR/docs/Accessibility/ARIA/ARIA_Live_Regions) attribute makes sure that our custom error message will be presented to everyone, including those using assistive technologies such as screen readers.

##### CSS

This CSS styles our form and the error output to look more attractive.

```css
/* This is just to make the example nicer */
body {
  font: 1em sans-serif;
  padding: 0;
  margin : 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input[type=email]{
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid{
  border-color: #900;
  background-color: #FDD;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width  : 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

The following JavaScript code handles the custom error validation.

```js
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {

    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);
```

Here is the live result:

{{EmbedLiveSample("Example_using_the_constraint_validation_API", "100%", 130)}}

The constraint validation API gives you a powerful tool to handle form validation, letting you have enormous control over the user interface above and beyond what you can do just with HTML and CSS alone.

### Validating forms without a built-in API

Sometimes, such as with legacy browsers or [custom widgets](/pt-BR/docs/HTML/Forms/How_to_build_custom_form_widgets), you will not be able to (or will not want to) use the constraint validation API. In that case, you're still able to use JavaScript to validate your form. Validating a form is more a question of user interface than real data validation.

To validate a form, you have to ask yourself a few questions:

- What kind of validation should I perform?
  - : You need to determine how to validate your data: string operations, type conversion, regular expressions, etc. It's up to you. Just remember that form data is always text and is always provided to your script as strings.
- What should I do if the form does not validate?
  - : This is clearly a UI matter. You have to decide how the form will behave: Does the form send the data anyway? Should you highlight the fields which are in error? Should you display error messages?
- How can I help the user to correct invalid data?

  - : In order to reduce the user's frustration, it's very important to provide as much helpful information as possible in order to guide them in correcting their inputs. You should offer up-front suggestions so they know what's expected, as well as clear error messages. If you want to dig into form validation UI requirements, there are some useful articles you should read:

    - SmashingMagazine: [Form-Field Validation: The Errors-Only Approach](http://uxdesign.smashingmagazine.com/2012/06/27/form-field-validation-errors-only-approach/)
    - SmashingMagazine: [Web Form Validation: Best Practices and Tutorials](http://www.smashingmagazine.com/2009/07/07/web-form-validation-best-practices-and-tutorials/)
    - Six Revision: [Best Practices for Hints and Validation in Web Forms](http://sixrevisions.com/user-interface/best-practices-for-hints-and-validation-in-web-forms/)
    - A List Apart: [Inline Validation in Web Forms](http://www.alistapart.com/articles/inline-validation-in-web-forms/)

#### An example that doesn't use the constraint validation API

In order to illustrate this, let's rebuild the previous example so that it works with legacy browsers:

```html
<form>
  <p>
    <label for="mail">
        <span>Please enter an email address:</span>
        <input type="text" class="mail" id="mail" name="mail">
        <span class="error" aria-live="polite"></span>
    </label>
  <p>
  <!-- Some legacy browsers need to have the `type` attribute
       explicitly set to `submit` on the `button`element -->
  <button type="submit">Submit</button>
</form>
```

As you can see, the HTML is almost the same; we just removed the HTML validation features. Note that [ARIA](/pt-BR/docs/Accessibility/ARIA) is an independent specification that's not specifically related to HTML5.

##### CSS

Similarly, the CSS doesn't need to change very much; we just turn the {{cssxref(":invalid")}} CSS pseudo-class into a real class and avoid using the attribute selector that does not work on Internet Explorer 6.

```css
/* This is just to make the example nicer */
body {
  font: 1em sans-serif;
  padding: 0;
  margin : 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input.mail {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input.invalid{
  border-color: #900;
  background-color: #FDD;
}

input:focus.invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width  : 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

The big changes are in the JavaScript code, which needs to do much more of the heavy lifting.

```js
// There are fewer ways to pick a DOM node with legacy browsers
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');

// The following is a trick to reach the next sibling Element node in the DOM
// This is dangerous because you can easily build an infinite loop.
// In modern browsers, you should prefer using element.nextElementSibling
var error = email;
while ((error = error.nextSibling).nodeType != 1);

// As per the HTML5 Specification
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Many legacy browsers do not support the addEventListener method.
// Here is a simple way to handle this; it's far from the only one.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);

    // A callback that returns `false` stops the callback chain
    // and interrupts the execution of the event callback.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
addEvent(window, "load", function () {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  email.className = test ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
addEvent(email, "input", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = "invalid";
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";

    // Some legacy browsers do not support the event.preventDefault() method
    return false;
  } else {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});
```

The result looks like this:

{{EmbedLiveSample("An_example_that_doesn't_use_the_constraint_validation_API", "100%", 130)}}

As you can see, it's not that hard to build a validation system on your own. The difficult part is to make it generic enough to use it both cross-platform and on any form you might create. There are many libraries available to perform form validation; you shouldn't hesitate to use them. Here are a few examples:

- Standalone library

  - [Validate.js](http://rickharrison.github.com/validate.js/)

- jQuery plug-in:

  - [Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

#### Remote validation

In some cases, it can be useful to perform some remote validation. This kind of validation is necessary when the data entered by the user is tied to additional data stored on the server side of your application. One use case for this is registration forms, where you ask for a username. To avoid duplication, it's smarter to perform an AJAX request to check the availability of the username rather than asking the user to send the data, then send back the form with an error.

Performing such a validation requires taking a few precautions:

- It requires exposing an API and some data publicly; be sure it is not sensitive data.
- Network lag requires performing asynchronous validation. This requires some UI work in order to be sure that the user will not be blocked if the validation is not performed properly.

## Conclusion

Form validation does not require complex JavaScript, but it does require thinking carefully about the user. Always remember to help your user to correct the data they provide. To that end, be sure to:

- Display explicit error messages.
- Be permissive about the input format.
- Point out exactly where the error occurs (especially on large forms).

{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}

## In this module

- [Your first HTML form](/pt-BR/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [How to structure an HTML form](/pt-BR/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [The native form widgets](/pt-BR/docs/Learn/HTML/Forms/The_native_form_widgets)
- [Sending form data](/pt-BR/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
- [Form data validation](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
- [How to build custom form widgets](/pt-BR/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [Sending forms through JavaScript](/pt-BR/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [HTML forms in legacy browsers](/pt-BR/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Styling HTML forms](/pt-BR/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [Advanced styling for HTML forms](/pt-BR/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Property compatibility table for form widgets](/pt-BR/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
