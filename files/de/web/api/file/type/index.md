---
title: File.type
slug: Web/API/File/type
translation_of: Web/API/File/type
original_slug: Web/API/File/Typ
---
{{APIRef("File API")}}

Gibt den Internet Media Typ ([MIME](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) einer Datei zurück, welche durch ein {{domxref("File")}} Objekt dargestellt wird.

## Syntax

```js
var name = file.type;
```

## Wert

Eine Zeichenkette, welche den Internet Media Typ (MIME) enthält und den Typ der Datei angibt, zum Beispiel "image/png" für ein PNG Bild

## Beispiel

```html
<input type="file" multiple onchange="showType(this)">
```

```js
function showType(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var name = files[i].name;
    var type = files[i].type;
    alert("Filename: " + name + " , Type: " + type);
  }
}
```

**Hinweis:** Basierend auf der aktuellen Implementierung, lesen Browser nicht wirklich den Bytestrom einer Datei, um ihren Medientyp zu bestimmen. Es wird aufgrund der Dateiendung angenommen; eine PNG-Bilddatei, die in .txt umbenannt wird, würde "_text/plain_" und nicht "_image/png_" ergeben. Darüber hinaus ist `file.type` im Allgemeinen nur für gängige Dateitypen wie Bilder, HTML-Dokumente, Audio und Video zuverlässig. Seltene Dateierweiterungen würden eine leere Zeichenkette zurückgeben. Die Client-Konfiguration (z.B. die Windows-Registrierung) kann auch bei gängigen Typen zu unerwarteten Werten führen. **Entwicklern wird empfohlen, sich nicht auf diese Eigenschaft als einziges Validierungsschema zu verlassen.**

## Spezifikation

| Spezifikation                                                | Status                       | Kommentar            |
| ------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('File API', '#dfn-type', 'type')}} | {{Spec2('File API')}} | Initiale Definition. |

## Browser-Kompatibilität

{{Compat("api.File.type")}}

## Siehe auch

- [Using files from web applications](/de/docs/Web/API/File/Using_files_from_web_applications)
- Blog Post: [Be skeptical of client-reported MIME types](https://textslashplain.com/2018/07/26/be-skeptical-of-client-reported-mime-content-types/)
