---
title: File
slug: Web/API/File
tags:
  - API
  - DOM
  - Files
translation_of: Web/API/File
---
{{APIRef }}

Das**`File`** Interface stellt Informationen über Dateien bereit und erlaubt den Zugriff auf deren Inhalt.

`File` werden generell von einem {{domxref("FileList")}} Objekt als das Ergebnis einer Benutzerauswahl von Dateien über ein `{{ HTMLElement("input") }}` Element, von einem [`DataTransfer`](/de/docs/DragDrop/DataTransfer "DragDrop/DataTransfer") Objekt eines Drag-and-Drop-Vorgangs, oder von der `mozGetAsFile()` API eines {{ domxref("HTMLCanvasElement") }} zurückgegeben. In Gecko ist es von privilegiertem Code aus möglich, den Konstruktor direkt mit einem String Pfad oder einem `nsIFile` aufzurufen. Siehe [Using the DOM File API in chrome code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code "Using the DOM File API in chrome code") für weitere Details.

Die Dateireferenz kann nach der Formularübermittlung gespeichert werden, während der Benutzer über keine Internetverbindung verfügt. Somit können die Daten empfangen und hochgeladen werden, sobald die Internetverbindung wiederhergestellt ist.

## Properties

_Das`File` Interface erbt ebenso von dem {{domxref("Blob")}} Interface._

- {{domxref("File.lastModifiedDate")}} {{readonlyinline}} {{gecko_minversion_inline("15.0")}}
  - : Das [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) der letzten Veränderung der Datei, referenziert durch das `File` Objekt.
- {{domxref("File.name")}} {{readonlyinline}} {{gecko_minversion_inline("1.9.2")}}
  - : Der Name der Datei, referenziert durch das `File` Objekt.
- {{domxref("File.fileName")}} {{non-standard_inline}} {{readonlyinline}} {{obsolete_inline("7.0")}}
  - : Der Name der Datei, referenziert durch das `File` Objekt.
- {{domxref("File.fileSize")}} {{non-standard_inline}} {{readonlyinline}} {{obsolete_inline("7.0")}}
  - : Die Größe der Datei in Bytes.

## Methods

_The `File` interface also inherits methods from the {{domxref("Blob")}} interface._

- {{domxref("File.getAsBinary()")}} {{non-standard_inline}} {{obsolete_inline("7.0")}}
  - : Returns a string containing the file's data in raw binary format.
- {{domxref("File.getAsDataURL()")}} {{non-standard_inline}} {{obsolete_inline("7.0")}}
  - : A string containing the file's data encoded as a `data:` URL.
- {{domxref("File.getAsText()","File.getAsText(string encoding)")}} {{non-standard_inline}} {{obsolete_inline("7.0")}}
  - : Returns the file's contents as a string in which the file's data is interpreted as text using a given encoding.

## Specifications

| Specification                    | Status                       | Comment             |
| -------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Initial definition. |

## Browser compatibility

{{Compat}}

### Implementation notes

#### Gecko notes

- In Gecko, you can use this API from chrome code. See [Using the DOM File API in chrome code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code "Using the DOM File API in chrome code") for details.
- Starting in Gecko 6.0 {{geckoRelease("6.0")}}, privileged code (such as extensions) can pass an `nsIFile` object to the DOM `File` constructor to specify the file to reference.
- Starting in Gecko 8.0 {{geckoRelease("8.0")}}, you can use `new File` to create `File` objects from XPCOM component code instead of having to instantiate the `nsIDOMFile` object directly. The constructor takes, in contrast to Blob, as second argument the filename. The filename can be any String.

      File File(
        Array parts,
        String filename,
        BlobPropertyBag properties
      );

## Chrome Code - Scope Availability

To use from chrome code, JSM and Bootstrap scope, you have to import it like this:

```js
Cu.importGlobalProperties(['File']);
```

`URL` is available in Worker scopes.

## See also

- [Using files from web applications](/de/docs/Using_files_from_web_applications "Using files from web applications")
- [Using the DOM File API in chrome code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code "Extensions/Using the DOM File API in chrome code")
- {{domxref("FileReader")}}
- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)
