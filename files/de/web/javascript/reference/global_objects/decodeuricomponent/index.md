---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
---
{{jsSidebar("Objects")}}

Die Funktion `decodeURIComponent() dekodiert eine URI-Komponente die zuvor durch `{{jsxref("encodeURIComponent")}} (oder einer ähnlichen Funktion) kodiert wurden.

## Syntax

    decodeURIComponent(encodedURI)

### Parameters

- `encodedURI`
  - : Die kodierte Komponente einer URI.

### Rückgabewert

Ein neuer String der die decodierte Version der übergebenen URI-Komponente repräsentiert.

## Beschreibung

Ersetzt jede Escape-Sequenz der übergebenen kodierten Komponente durch ihre entsprechenden Zeichen.

## Beispiele

### Dekodieren einer kyrillischen URL-Komponente

```js
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('ES3')}}                                                                                                     | {{Spec2('ES3')}}         | Anfangs-Definition |
| {{SpecName('ES5.1', '#sec-15.1.3.2', 'decodeURIComponent')}}                                             | {{Spec2('ES5.1')}}     |                    |
| {{SpecName('ES6', '#sec-decodeuricomponent-encodeduricomponent', 'decodeURIComponent')}}         | {{Spec2('ES6')}}         |                    |
| {{SpecName('ESDraft', '#sec-decodeuricomponent-encodeduricomponent', 'decodeURIComponent')}} | {{Spec2('ESDraft')}} |                    |

## Browser-Kompatibilität

{{Compat}}

## Siehe

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
