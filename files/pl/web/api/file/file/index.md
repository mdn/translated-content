---
title: File.File()
slug: Web/API/File/File
tags:
  - API
translation_of: Web/API/File/File
---
{{APIRef("File")}}

Konstruktor **`File()`** tworzy nową instancję obiektu {{domxref("File")}}.

## Składnia

    File(bity, nazwa [, opcje]);

### Parameters

- _bity_
  - : {{jsxref("Array")}} (Tablica) obiektów {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}} lub {{domxref("DOMString")}} — albo miks takich obiektów. Zawartość pliku jest zakodowana w UTF-8.
- _nazwa_
  - : Obiekt {domxref("USVString")}} reprezentujący nazwę pliku albo ścieżkę do niego.
- *opcje* {{optional_inline}}
  - : Obiekt opcji, który zawiera opcjonalne atrybuty pliku. Dostępne są następujące możliwości:\* `type`: (typ) - Obiekt {{domxref("DOMString")}} reprezentujący typ MIME zawartości pliku. Domyślnie `"".`
    - `lastModified`: (ostatnio modyfikowany) Liczba reprezentująca liczbę milisekund pomiędzy Unix time epoch i datą ostatniej modyfikacji pliku. Domyślnie - wartość {{jsxref("Date.now()")}}.

## Przykład

```js
var plik = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```

## Specyfikacje

| Specification                    | Status                       | Komentarz            |
| -------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Podstawowa definicja |

## Kompatybilność między przeglądarkami

{{Compat("api.File.File")}}

## Zobacz także

- {{domxref("FileReader")}}
- {{domxref("Blob")}}
