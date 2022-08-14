---
title: FormData()
slug: Web/API/FormData/FormData
translation_of: Web/API/FormData/FormData
---
{{APIRef("XMLHttpRequest")}}

Der **`FormData()`** Konstruktor erzeugt ein neues {{domxref("FormData")}}-Objekt.

> **Note:** **Anmerkung:** Dieses Feature is verfügbar auf [Web Workers](/de/docs/Web/API/Web_Workers_API).

## Syntax

```js
var formData = new FormData(form)
```

### Parameter

- `form `{{optional_inline}}
  - : Ein HTML {{HTMLElement("form")}}-Element — wenn angegeben, wird das neue {{domxref("FormData")}}-Objekt mit den aktuellen Schlüssel/Wert-Paaren des form's gefüllt, wobei "name" der Schlüssel und "value" der Wert. Mitgeschickte Dateien werden ebenfalls codiert.

## Example

So erzeugt man ein neues `FormData`-Objekt:

```js
var formData = new FormData(); // leer
```

Nun kann man ein Schlüssel/Wert-Paar hinzufügen mit {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
```

Oder man gibt das optionale `form` Argument an, um es direkt mit dessen Werten zu füllen:

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
<input type="submit" value="Submit!">
</form>
```

> **Note:** **Anmerkung**: Alle input-Elemente haben das 'name'-Attribut. Das ist notwendig um die Werte auszuwerten.

```js
var myForm = document.getElementById('myForm');
formData = new FormData(myForm);
```

## Spezifikationen

| Specification                                                                    | Status                               | Comment            |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('XMLHttpRequest','#dom-formdata','FormData()')}} | {{Spec2('XMLHttpRequest')}} | Initial definition |

## Browserkompatibilität

{{Compat}}

> **Note:** XHR in Android 4.0 sends empty content for FormData with blob.

### Gecko notes

Prior to Gecko 7.0 {{geckoRelease("7.0")}}, if you specified a {{domxref("Blob")}} as the data to append to the object, the filename reported in the "Content-Disposition" HTTP header was an empty string; this resulted in errors being reported by some servers. Starting in Gecko 7.0, the filename "blob" is sent.

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/de/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using FormData objects](/de/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects "DOM/XMLHttpRequest/FormData/Using_FormData_objects")
- {{HTMLElement("Form")}}
