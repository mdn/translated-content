---
title: Usando Objetos FormData
slug: Web/API/FormData/Using_FormData_Objects
---

Los objetos `FormData` le permiten compilar un conjunto de pares clave/valor para enviar mediante `XMLHttpRequest`. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados. Los datos transmitidos estarán en el mismo formato que usa el método `submit()` del formulario para enviar los datos si el tipo de codificación del formulario se establece en "multipart/form-data".

## Creación de un objeto FormData desde cero

Usted mismo puede construir un objeto `FormData` instanciándolo y después añadiendo campos a la instancia usando su método [`append()`](</en/DOM/XMLHttpRequest/FormData#append()> "en/XMLHttpRequest/FormData#append()") , tal y como se muestra:

```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

// HTML file input user's choice...
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object...
var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
var blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **Nota:** Los campos "userfile" y "webmasterfile" contienen ambos un archivo. El número asignado al campo "accountnum" es inmediatamente convertido a string por el método [`FormData.append()`](</en/DOM/XMLHttpRequest/FormData#append()> "en/XMLHttpRequest/FormData#append()") (el valor del campo puede ser un {{ domxref("Blob") }}, {{ domxref("File") }}, o una cadena de texto; **si el valor no es ni un Blob, ni un File, será convertido a un string**).

Este ejemplo construye una instancia de `FormData` que almacenará los valores de los campos "username", "accountnum", "userfile" y "webmasterfile", entonces usará el método [`send()`](</en/DOM/XMLHttpRequest#send()> "en/XMLHttpRequest#send()") de `XMLHttpRequest` para enviar los datos del formulario. El campo "webmasterfile" es un [`Blob`](/en/DOM/Blob). Un objeto [`Blob`](/en/DOM/Blob) representa un objeto de tipo similar a un fichero que es inalterable y que almacenará datos en formato raw. Los Blobs representan datos que no necesariamente tendrán un formato Javascript nativo. La interfaz {{ domxref("File") }} está basada en [`Blob`](/en/DOM/Blob), y hereda su funcionalidad y la amplía para dar soporte a archivos que estén en el sistema del usuario. Para construir un [`Blob`](/en/DOM/Blob), puede invocar [`al constructor del objeto Blob`](/en/DOM/Blob#Constructor).

## Recuperando un objeto FormData de un formulario HTML

Para construir un objeto `FormData` que contenga los datos de un {{ HTMLElement("form") }} existente, especifique ese elemento form cuando cree el objeto `FormData`:

```js
var formData = new FormData(someFormElement);
```

Por ejemplo:

```js
var formElement = document.getElementById("myFormElement");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

También puede añadir datos adicionales al objeto `FormData` antes de enviarlo. Así:

```js
var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

Esto le permite aumentar los datos del formulario antes de enviarlos para incluir información adicional que no necesariamente debiera ser editable por el usuario en el formulario.

## Enviando archivos usando objetos FormData

También puede enviar archivos usando `FormData`. Simplemente incluye un elemento {{ HTMLElement("input") }} de tipo {{ domxref("File") }}:

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
<div id="output"></div>
```

Luego puede enviarlo usando código como el siguiente:

```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener(
  "submit",
  function (ev) {
    var oOutput = document.getElementById("output"),
      oData = new FormData(document.forms.namedItem("fileinfo"));

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "stash.php", true);
    oReq.onload = function (oEvent) {
      if (oReq.status == 200) {
        oOutput.innerHTML = "Uploaded!";
      } else {
        oOutput.innerHTML =
          "Error " + oReq.status + " occurred uploading your file.<br />";
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  },
  false,
);
```

> **Nota:** el método especificado en el formulario será usado por encima del método utilizado en en la llamada a open().

También puede añadir un {{ domxref("File") }} o un {{ domxref("Blob") }} directamente al objeto {{ domxref("XMLHttpRequest/FormData", "FormData") }} de la siguiente manera:

```js
data.append("myfile", myBlob, "filename.txt");
```

Cuando se usa el método `append` es posible usar, de manera opcional, un tercer parámetro para pasarle un nombre de fichero dentro de la cabecera `Content-Disposition` que será enviada al servidor. Cuando no se especifica (o el parámetro no es soportado), el nombre "blob" es el que será utilizado.

Además, puede usar FormData con jQuery si asigna las opciones correctas:

```js
var fd = new FormData(document.getElementById("fileinfo"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false, // tell jQuery not to process the data
  contentType: false, // tell jQuery not to set contentType
});
```

## Envío de formularios y carga de archivos vía AJAX sin objetos `FormData`

Si quiere saber cómo serializar y enviar vía [AJAX](/es/docs/AJAX) un formulario _sin_ utilizar objetos FormData, por favor leer [este párrafo](/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files) .

## Vea también

- [Usando XMLHttpRequest](/es/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [`HTMLFormElement`](/es/docs/DOM/HTMLFormElement)
- [`Blob`](/es/docs/DOM/Blob)
- [Typed Arrays](/es/docs/JavaScript/Typed_arrays)
