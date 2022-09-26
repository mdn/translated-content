---
title: HTMLFormElement
slug: Web/API/HTMLFormElement
---

{{APIRef("HTML DOM")}}

**`HTMLFormElement`** 介面提供了建立及修改 {{HTMLElement("form")}} 元素的方法。
**document.forms** - returns an array of HTMLFormElement objects referencing all forms on the page.
**document.forms\[index]** - returns an HTMLFormElement object referencing the form at the specified index.
**document.forms\['id']** - returns an HTMLFormElement object referencing the form with the specified id.
**document.forms\['name']** - returns an HTMLFormElement object referencing the form with the specified name.

{{InheritanceDiagram(600,120)}}

## 屬性

_This interface also inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.elements")}}{{ReadOnlyInline}}
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
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("enctype", "form") }} HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set. The two methods are synonyms.
- {{domxref("HTMLFormElement.acceptCharset")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("accept-charset", "form") }} HTML attribute, representing the character encoding that the server accepts.
- {{domxref("HTMLFormElement.autocomplete")}}
  - : A {{domxref("DOMString")}} reflecting the value of the form's {{ htmlattrxref("autocomplete", "form") }} HTML attribute, indicating whether the controls in this form can have their values automatically populated by the browser.
- {{domxref("HTMLFormElement.noValidate")}}
  - : A {{jsxref("Boolean")}} reflecting the value of the form's {{ htmlattrxref("novalidate", "form") }} HTML attribute, indicating whether the form should not be validated.

## 方法

_This interface also inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFormElement.submit()")}}
  - : Submits the form to the server.
- {{domxref("HTMLFormElement.reset()")}}
  - : Resets the form to its initial state.
- {{domxref("HTMLFormElement.checkValidity()")}}
  - : Returns `true` if the element's child controls are subject to constraint validation and satisfy those contraints; returns `false` if some controls do not satisfy their constraints. Fires an event named {{event("invalid")}} at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to `false`.
- {{domxref("HTMLFormElement.reportValidity()")}}
  - : Returns `true` if the element's child controls satisfy their validation constraints. When `false` is returned, cancelable {{Event("invalid")}} events are fired for each invalid child and validation problems are reported to the user.
- {{domxref("HTMLFormElement.requestAutocomplete()")}}
  - : Triggers a native browser interface to assist the user in completing the fields which have an [autofill field name](https://html.spec.whatwg.org/#autofill-field-name) value that is not `off` or `on`. The form will receive an event once the user has finished with the interface, the event will either be {{event("autocomplete")}} when the fields have been filled or {{event("autocompleteerror")}} when there was a problem.

## 範例

Create a new form element, modify its attributes and submit it:

```js
var f = document.createElement("form");// Create a form
document.body.appendChild(f);          // Add it to the document body
f.action = "/cgi-bin/some.cgi";        // Add action and method attributes
f.method = "POST"
f.submit();                            // Call the form's submit method
```

Extract information from a form element and set some of its attributes:

```html
<form name="formA" id="formA" action="/cgi-bin/test" method="POST">
 <p>Click "Info" for form details; "Set" to change settings.</p>
 <p>
  <input type="button" value="info" onclick="getFormInfo();">
  <input type="button" value="set"  onclick="setFormInfo(this.form);">
  <input type="reset" value="reset"><br>
  <textarea id="tex" style="height:15em; width:20em"></textarea>
 </p>
</form>

<script type="text/javascript">
  function getFormInfo(){
    var info;
    var f = document.forms["formA"]; //Get a reference to the form via id.
    info = "elements: " + f.elements     + "\n"
         + "length: "   + f.length       + "\n"
         + "name: "     + f.name         + "\n"
         + "charset: "  + f.acceptCharset+ "\n"
         + "action: "   + f.action       + "\n"
         + "enctype: "  + f.enctype      + "\n"
         + "encoding: " + f.encoding     + "\n"
         + "method: "   + f.method       + "\n"
         + "target: "   + f.target;
    document.forms["formA"].elements['tex'].value = info;
  }
  function setFormInfo(f){ //Argument is a reference to the form.
    f.method = "GET";
    f.action = "/cgi-bin/evil_executable.cgi";
    f.name   = "totally_new";
  }
</script>
```

Submit a form in a [popup window](/zh-TW/docs/Web/API/Window/open):

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
function popupSend (oFormElement) {
  if (oFormElement.method && oFormElement.method.toLowerCase() !== "get") {
    console.error("This script supports the GET method only.");
    return;
  }
  var oField, sFieldType, nFile, sSearch = "";
  for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
    oField = oFormElement.elements[nItem];
    if (!oField.hasAttribute("name")) { continue; }
    sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
    if (sFieldType === "FILE") {
      for (nFile = 0; nFile < oField.files.length; sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
    } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
      sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
    }
  }
  open(oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), "submit-" + (oFormElement.name || Math.floor(Math.random() * 1e6)), "resizable=yes,scrollbars=yes,status=yes");
}
</script>

</head>

<body>

<form name="yourForm" action="test.php" method="get" onsubmit="popupSend(this); return false;">
  <p>First name: <input type="text" name="firstname" /><br />
  Last name: <input type="text" name="lastname" /><br />
  Password: <input type="password" name="pwd" /><br />
  <input type="radio" name="sex" value="male" /> Male <input type="radio" name="sex" value="female" /> Female</p>
  <p><input type="checkbox" name="vehicle" value="Bike" />I have a bike<br />
  <input type="checkbox" name="vehicle" value="Car" />I have a car</p>
  <p><input type="submit" value="Submit" /></p>
</form>

</body>
</html>
```

### 使用 `XMLHttpRequest` 提交表單及上傳檔案

If you want to know how to serialize and submit a form using the {{domxref("XMLHttpRequest")}} API, please read [this paragraph](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- The HTML element implementing this interface: {{ HTMLElement("form") }}.
