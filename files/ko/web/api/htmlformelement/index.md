---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
---

{{APIRef("HTML DOM")}}

The **{{domxref("HTMLFormElement")}}** interface represents a {{HTMLElement("form")}} element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.

{{InheritanceDiagram(600,120)}}

## Properties

_This interface also inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.elements")}} {{ReadOnlyInline}}
  - : A {{domxref("HTMLFormControlsCollection")}} holding all form controls belonging to this form element.
- {{domxref("HTMLFormElement.length")}}{{ReadOnlyInline}}
  - : A `long` reflecting the number of controls in the form.
- {{domxref("HTMLFormElement.name")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("name", "form") }} HTML attribute, containing the name of the form.
- {{domxref("HTMLFormElement.method")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("method", "form") }} HTML attribute, indicating the HTTP method used to submit the form. Only specified values can be set.
- {{domxref("HTMLFormElement.target")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("target", "form") }} HTML attribute, indicating where to display the results received from submitting the form.
- {{domxref("HTMLFormElement.action")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("action", "form") }} HTML attribute, containing the URI of a program that processes the information submitted by the form.
- {{domxref("HTMLFormElement.encoding")}} or {{domxref("HTMLFormElement.enctype")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("enctype", "form") }} HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set. The two properties are synonyms.
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("accept-charset", "form") }} HTML attribute, representing the character encoding that the server accepts.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("autocomplete", "form") }} HTML attribute, indicating whether the controls in this form can have their values automatically populated by the browser.
- {{domxref("HTMLFormElement.noValidate")}}
  - : A {{jsxref("Boolean")}} reflecting the value of the form's {{ htmlattrxref("novalidate", "form") }} HTML attribute, indicating whether the form should not be validated.

Named inputs are added to their owner form instance as properties, and can overwrite native properties if they share the same name (eg a form with an input named `action` will have its `action` property return that input instead of the form's {{ htmlattrxref("action", "form") }} HTML attribute).

## Methods

_This interface also inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.checkValidity", "checkValidity()")}}
  - : Returns `true` if the element's child controls are subject to [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation) and satisfy those contraints; returns `false` if some controls do not satisfy their constraints. Fires an event named {{event("invalid")}} at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to `false`.
- {{domxref("HTMLFormElement.reportValidity", "reportValidity()")}}
  - : Returns `true` if the element's child controls satisfy their [validation constraints](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation). When `false` is returned, cancelable {{Event("invalid")}} events are fired for each invalid child and validation problems are reported to the user.
- {{domxref("HTMLFormElement.requestSubmit", "requestSubmit()")}}
  - : Requests that the form be submitted using the specified submit button and its corresponding configuration.
- {{domxref("HTMLFormElement.reset", "reset()")}}
  - : Resets the form to its initial state.
- {{domxref("HTMLFormElement.submit", "submit()")}}
  - : Submits the form to the server.

### Deprecated methods

- {{domxref("HTMLFormElement.requestAutocomplete()")}} {{deprecated_inline}}
  - : Triggers a native browser interface to assist the user in completing the fields which have an [autofill field name](https://html.spec.whatwg.org/#autofill-field-name) value that is not `off` or `on`. The form will receive an event once the user has finished with the interface, the event will either be {{event("autocomplete")}} when the fields have been filled or {{event("autocompleteerror")}} when there was a problem.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`formdata`](/en-US/docs/Web/API/HTMLFormElement/formdata_event)
  - : The `formdata` event fires after the entry list representing the form's data is constructed.
    Also available via the [`onformdata`](/en-US/docs/Web/API/GlobalEventHandlers/onformdata) property.
- [`reset`](/en-US/docs/Web/API/HTMLFormElement/reset_event)
  - : The `reset` event fires when a form is reset.
    Also available via the [`onreset`](/en-US/docs/Web/API/GlobalEventHandlers/onreset) property.
- [`submit`](/en-US/docs/Web/API/HTMLFormElement/submit_event)
  - : The `submit` event fires when a form is submitted.
    Also available via the [`onsubmit`](/en-US/docs/Web/API/GlobalEventHandlers/onsubmit) property.

## Usage notes

### Obtaining a form element object

To obtain an `HTMLFormElement` object, you can use a [CSS selector](/ko/docs/Web/CSS/CSS_Selectors) with {{domxref("ParentNode.querySelector", "querySelector()")}}, or you can get a list of all of the forms in the document using its {{domxref("Document.forms", "forms")}} property.

{{domxref("Document.forms")}} returns an array of `HTMLFormElement` objects listing each of the forms on the page. You can then use any of the following syntaxes to get an individual form:

- `document.forms[index]`
  - : Returns the form at the specified `index` into the array of forms.
- `document.forms[id]`
  - : Returns the form whose ID is `id`.
- `document.forms[name]`
  - : Returns the form whose {{domxref("Element.name", "name")}} attribute's value is `name`.

### Accessing the form's elements

You can access the list of the form's data-containing elements by examining the form's {{domxref("HTMLFormElement.elements", "elements")}} property. This returns an {{domxref("HTMLFormControlsCollection")}} listing all of the form's user data entry elements, both those which are descendants of the `<form>` and those which are made members of the form using their `form` attributes.

You can also get the form's element by using its `name` attribute as a key of the `form`, but using `elements` is a better approach — it contains only the form's elements, and it cannot be mixed with other attributes of the `form`.

### Elements that are considered form controls

The elements which are included by `HTMLFormElement.elements` and `HTMLFormElement.length` are:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (with the exception that any whose {{htmlattrxref("type", "input")}} is `"image"` are omitted for historical reasons)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

No other elements are included in the list returned by `elements`, which makes it an excellent way to get at the elements most important when processing forms.

## Examples

Creating a new form element, modifying its attributes, then submitting it:

```js
var f = document.createElement("form");// Create a form
document.body.appendChild(f);          // Add it to the document body
f.action = "/cgi-bin/some.cgi";        // Add action and method attributes
f.method = "POST";
f.submit();                            // Call the form's submit method
```

Extract information from a form element and set some of its attributes:

```html
<form name="formA" action="/cgi-bin/test" method="post">
 <p>Press "Info" for form details, or "Set" to change those details.</p>
 <p>
  <button type="button" onclick="getFormInfo();">Info</button>
  <button type="button" onclick="setFormInfo(this.form);">Set</button>
  <button type="reset">Reset</button>
 </p>

 <textarea id="form-info" rows="15" cols="20"></textarea>
</form>

<script>
  function getFormInfo(){
    // Get a reference to the form via its name
    var f = document.forms["formA"];
    // The form properties we're interested in
    var properties = [ 'elements', 'length', 'name', 'charset', 'action', 'acceptCharset', 'action', 'enctype', 'method', 'target' ];
    // Iterate over the properties, turning them into a string that we can display to the user
    var info = properties.map(function(property) { return property + ": " + f[property] }).join("\n");

    // Set the form's <textarea> to display the form's properties
    document.forms["formA"].elements['form-info'].value = info; // document.forms["formA"]['form-info'].value would also work
  }

  function setFormInfo(f){ // Argument should be a form element reference.
    f.action = "a-different-url.cgi";
    f.name   = "a-different-name";
  }
</script>
```

Submit a form into a new window:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Example new-window form submission</title>
</head>
<body>

<form action="test.php" target="_blank">
  <p><label>First name: <input type="text" name="firstname"></label></p>
  <p><label>Last name: <input type="text" name="lastname"></label></p>
  <p><label><input type="password" name="pwd"></label></p>

  <fieldset>
   <legend>Pet preference</legend>
    <p><label><input type="radio" name="pet" value="cat"> Cat</label></p>
    <p><label><input type="radio" name="pet" value="dog"> Dog</label></p>
  </fieldset>

  <fieldset>
    <legend>Owned vehicles</legend>

    <p><label><input type="checkbox" name="vehicle" value="Bike">I have a bike</label></p>
    <p><label><input type="checkbox" name="vehicle" value="Car">I have a car</label></p>
  </fieldset>

  <p><button>Submit</button></p>
</form>

</body>
</html>
```

### Submitting forms and uploading files using `XMLHttpRequest`

If you want to know how to serialize and submit a form using the {{domxref("XMLHttpRequest")}} API, please read [this paragraph](/ko/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("form") }}.
