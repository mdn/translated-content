---
title: Using FormData Objects
slug: Web/API/FormData/Using_FormData_Objects
---

The [`FormData`](/zh-TW/docs/Web/API/FormData) object lets you compile a set of key/value pairs to send using [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest). It is primarily intended for use in sending form data, but can be used independently from forms in order to transmit keyed data. The transmitted data is in the same format that the form's {{domxref("HTMLFormElement.submit","submit()")}} method would use to send the data if the form's encoding type were set to `multipart/form-data`.

## Creating a FormData object from scratch

You can build a `FormData` object yourself, instantiating it then appending fields to it by calling its {{domxref("FormData.append","append()")}} method, like this:

```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

// HTML file input, chosen by user
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object
var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **備註：** The fields "userfile" and "webmasterfile" both contain a file. The number assigned to the field "accountnum" is immediately converted into a string by the [`FormData.append()`](</en/DOM/XMLHttpRequest/FormData#append()>) method (the field's value can be a {{ domxref("Blob") }}, {{ domxref("File") }}, or a string: **if the value is neither a Blob nor a File, the value is converted to a string**).

This example builds a `FormData` instance containing values for fields named "username", "accountnum", "userfile" and "webmasterfile", then uses the `XMLHttpRequest` method [`send()`](</en/DOM/XMLHttpRequest#send()>) to send the form's data. The field "webmasterfile" is a {{domxref("Blob")}}. A `Blob` object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The {{ domxref("File") }} interface is based on `Blob`, inheriting blob functionality and expanding it to support files on the user's system. In order to build a `Blob` you can invoke the {{domxref("Blob.Blob","Blob() constructor")}}.

## Retrieving a FormData object from an HTML form

To construct a `FormData` object that contains the data from an existing {{ HTMLElement("form") }}, specify that form element when creating the `FormData` object:

```js
var formData = new FormData(someFormElement);
```

For example:

```js
var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

You can also append additional data to the `FormData` object between retrieving it from a form and sending it, like this:

```js
var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

This lets you augment the form's data before sending it along, to include additional information that's not necessarily user-editable.

## 使用 FormData 物件傳送檔案

You can also send files using `FormData`. Simply include an {{ HTMLElement("input") }} element of type `file` in your {{htmlelement("form")}}:

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Your email address:</label>
  <input
    type="email"
    autocomplete="on"
    autofocus
    name="userid"
    placeholder="email"
    required
    size="32"
    maxlength="64" /><br />
  <label>Custom file label:</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>File to stash:</label>
  <input type="file" name="file" required />
  <input type="submit" value="Stash the file!" />
</form>
<div></div>
```

Then you can send it using code like the following:

```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener(
  "submit",
  function (ev) {
    var oOutput = document.querySelector("div"),
      oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "stash.php", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
      } else {
        oOutput.innerHTML =
          "Error " +
          oReq.status +
          " occurred when trying to upload your file.<br />";
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  },
  false,
);
```

> **備註：** If you pass in a reference to the form the method specified in the form will be used over the method specified in the open() call.

You can also append a {{ domxref("File") }} or {{ domxref("Blob") }} directly to the {{ domxref("FormData") }} object, like this:

```js
data.append("myfile", myBlob, "filename.txt");
```

When using the {{domxref("FormData.append","append()")}} method it is possible to use the third optional parameter to pass a filename inside the `Content-Disposition` header that is sent to the server. When no filename is specified (or the parameter isn't supported), the name "blob" is used.

You can also use `FormData` with jQuery if you set the right options:

```js
var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false, // tell jQuery not to process the data
  contentType: false, // tell jQuery not to set contentType
});
```

## Submitting forms and uploading files via AJAX _without_ `FormData` objects

If you want to know how to serialize and submit a form via [AJAX](/zh-TW/docs/AJAX) _without_ using FormData objects, please read [this paragraph](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files).

## 參見

- [Using XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [Typed Arrays](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)
