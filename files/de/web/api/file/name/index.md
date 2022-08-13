---
title: File.name
slug: Web/API/File/name
tags:
  - DOM
  - Files
translation_of: Web/API/File/name
---
{{APIRef("File API")}}

Gibt den Namen der File zurück. Aus Sicherheitsgründen wird der Pfad der Datei nicht mit zurückgegeben.

## Syntax

    var name = instanceOfFile.name

## Value

Ein string, der den Namen der File ohne Pfad beinhaltet, bspw. "My Resume.rtf".

## Beispiel

```js
// fileInput is a HTMLInputElement:
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (simliar to NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert("Filename " + files[i].name);
}
```

## Spezifikationen

| Specification                                                    | Status                       | Comment             |
| ---------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('File API', '#file-attrs', 'name')}} | {{Spec2('File API')}} | Initial definition. |

## Browser compatibility

{{Compat}}

## Siehe auch

- {{domxref("File")}}
