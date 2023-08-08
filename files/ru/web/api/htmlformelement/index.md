---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
---

{{APIRef("HTML DOM")}}

The **`HTMLFormElement`** interface provides methods to create and modify {{HTMLElement("form")}} elements; it inherits from properties and methods of the {{domxref("HTMLElement")}} interface.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.acceptCharset")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`accept-charset`](/ru/docs/Web/HTML/Element/form#accept-charset) HTML attribute, containing a list of character encodings that the server accepts.
- {{domxref("HTMLFormElement.action")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`action`](/ru/docs/Web/HTML/Element/form#action) HTML attribute, containing the URI of a program that processes the information submitted by the form.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`autocomplete`](/ru/docs/Web/HTML/Element/form#autocomplete) HTML attribute, containing a string that indicates whether the controls in this form can have their values automatically populated by the browser.
- {{domxref("HTMLFormElement.elements")}} {{readonlyinline}}
  - : Returns a live {{domxref("HTMLFormControlsCollection")}} containing all the form controls belonging to this form element.
- {{domxref("HTMLFormElement.encoding")}}
  - : Is a synonym for `enctype`.
- {{domxref("HTMLFormElement.enctype")}}
  - : Is a {{domxref("DOMString")}} reflects the [`enctype`](/ru/docs/Web/HTML/Element/form#enctype) HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set.
- {{domxref("HTMLFormElement.length")}} {{readonlyinline}}
  - : Returns a `long` that represents the number of controls in the form.
- {{domxref("HTMLFormElement.method")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`method`](/ru/docs/Web/HTML/Element/form#method) HTML attribute, indicating the HTTP method used to submit the form. Only specified values can be set.
- {{domxref("HTMLFormElement.name")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`name`](/ru/docs/Web/HTML/Element/form#name) HTML attribute, containing the name of the form.
- {{domxref("HTMLFormElement.noValidate")}}
  - : Is a {{jsxref("Boolean")}} that reflects the [`novalidate`](/ru/docs/Web/HTML/Element/form#novalidate) HTML attribute, indicating that the form should not be validated.
- {{domxref("HTMLFormElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`target`](/ru/docs/Web/HTML/Element/form#target) HTML attribute, indicating where to display the results received from submitting the form.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.checkValidity()")}}
  - : Returns a {{jsxref("Boolean")}} that is `true` if the element's child controls are subject to constraint validation and satify those contraints, or `false` if some controls do not satisfy their constraints. Fires an event named {{event("invalid")}} at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to `false`.
- {{domxref("HTMLFormElement.item()")}}
  - : Gets the item in the `elements` collection at the specified index, or null if there is no item at that index. You can also specify the index in array-style brackets or parentheses after the form object name, without calling this method explicitly.
- {{domxref("HTMLFormElement.namedItem()")}}
  - : Gets the item or list of items in `elements` collection whose `name` or `id` match the specified name, or null if no items match. You can also specify the name in array-style brackets or parentheses after the form object name, without calling this method explicitly.
- {{domxref("HTMLFormElement.submit()")}}
  - : Submits the form to the server.
- {{domxref("HTMLFormElement.reset()")}}
  - : Resets the forms to its initial state.

<!---->

- {{domxref("HTMLFormElement.reportValidity()")}}
  - : Returns `true` if the element's child controls satisfy their validation constraints. When `false` is returned, cancelable [`invalid`](/ru/docs/Web/Events/invalid) events are fired for each invalid child and validation problems are reported to the user.

## Examples

The following example shows how to create a new form element, modify its attributes and submit it.

```js
// Create a form
var f = document.createElement("form");

// Add it to the document body
document.body.appendChild(f);

// Add action and method attributes
f.action = "/cgi-bin/some.cgi";
f.method = "POST";

// Call the form's submit method
f.submit();
```

In addition, the following complete HTML document shows how to extract information from a form element and to set some of its attributes.

```html
<title>Form example</title>
<script type="text/javascript">
  function getFormInfo() {
    var info;

    // Get a reference using the forms collection
    var f = document.forms["formA"];
    info =
      "f.elements: " +
      f.elements +
      "\n" +
      "f.length: " +
      f.length +
      "\n" +
      "f.name: " +
      f.name +
      "\n" +
      "f.acceptCharset: " +
      f.acceptCharset +
      "\n" +
      "f.action: " +
      f.action +
      "\n" +
      "f.enctype: " +
      f.enctype +
      "\n" +
      "f.encoding: " +
      f.encoding +
      "\n" +
      "f.method: " +
      f.method +
      "\n" +
      "f.target: " +
      f.target;
    document.forms["formA"].elements["tex"].value = info;
  }

  // A reference to the form is passed from the
  // button's onclick attribute using 'this.form'
  function setFormInfo(f) {
    f.method = "GET";
    f.action = "/cgi-bin/evil_executable.cgi";
    f.name = "totally_new";
  }
</script>

<h1>Form example</h1>

<form name="formA" id="formA" action="/cgi-bin/test" method="POST">
  <p>
    Click "Info" to see information about the form. Click set to change
    settings, then info again to see their effect
  </p>
  <p>
    <input type="button" value="info" onclick="getFormInfo();" />
    <input type="button" value="set" onclick="setFormInfo(this.form);" />
    <input type="reset" value="reset" />
    <br />
    <textarea id="tex" style="height:15em; width:20em"> </textarea>
  </p>
</form>
```

The following example shows how to submit a form in a [popup window](/ru/docs/DOM/window.open).

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MDN Example</title>
    <script type="text/javascript">
      function popupSend(oFormElement) {
        if (
          oFormElement.method &&
          oFormElement.method.toLowerCase() !== "get"
        ) {
          alert("This script supports the GET method only.");
          return;
        }
        var oField,
          sFieldType,
          nFile,
          sSearch = "";
        for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
          oField = oFormElement.elements[nItem];
          if (!oField.hasAttribute("name")) {
            continue;
          }
          sFieldType =
            oField.nodeName.toUpperCase() === "INPUT"
              ? oField.getAttribute("type").toUpperCase()
              : "TEXT";
          if (sFieldType === "FILE") {
            for (
              nFile = 0;
              nFile < oField.files.length;
              sSearch +=
                "&" +
                escape(oField.name) +
                "=" +
                escape(oField.files[nFile++].name)
            );
          } else if (
            (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
            oField.checked
          ) {
            sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
          }
        }
        open(
          oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")),
          "submit-" + (oFormElement.name || Math.floor(Math.random() * 1e6)),
          "resizable=yes,scrollbars=yes,status=yes",
        );
      }
    </script>
  </head>

  <body>
    <form
      name="yourForm"
      action="test.php"
      method="get"
      onsubmit="popupSend(this); return false;">
      <p>
        First name: <input type="text" name="firstname" /><br />
        Last name: <input type="text" name="lastname" /><br />
        Password: <input type="password" name="pwd" /><br />
        <input type="radio" name="sex" value="male" /> Male
        <input type="radio" name="sex" value="female" /> Female
      </p>
      <p>
        <input type="checkbox" name="vehicle" value="Bike" />I have a bike<br />
        <input type="checkbox" name="vehicle" value="Car" />I have a car
      </p>
      <p><input type="submit" value="Submit" /></p>
    </form>
  </body>
</html>
```

### Submitting forms and uploading files using `XMLHttpRequest`

If you want to know how to serialize and submit a form using the [`XMLHttpRequest`](/ru/docs/DOM/XMLHttpRequest) API, please read [this paragraph](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("form") }}.
