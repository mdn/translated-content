---
title: onload
slug: Web/API/FileReader/load_event
tags:
  - Dateien
  - Lesen
translation_of: Web/API/FileReader/onload
original_slug: Web/API/FileReader/onload
---
Das onload Event wird ausgelöst, wenn der Inhalt von [readAsArrayBuffer](/de/docs/Web/API/FileReader/readAsArrayBuffer), [readAsBinaryString](/de/docs/Web/API/FileReader/readAsBinaryString), [readAsDataURL](/de/docs/Web/API/FileReader/readAsDataURL) or [readAsText](/de/docs/Web/API/FileReader/readAsText) verfügbar ist.

## Beispiel

```js
// Callback von einem <input type="file" onchange="onChange(event)">
function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // Hier wird der Text der Datei ausgegeben
    console.log(event.target.result)
  };

  reader.readAsText(file);
}
```
