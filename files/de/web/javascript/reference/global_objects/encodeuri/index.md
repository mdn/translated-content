---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
---
{{jsSidebar("Objects")}}

Die **`encodeURI()`** Funktion kodiert ein Uniform Resource Identifier (Abk. URI, englisch für einheitlicher Bezeichner für Ressurcen), indem sie jedes Vorkommen von speziellen Zeichen durch die jeweilige UTF-8 Zeichenkette ersetzt, die das Zeichen repräsentiert.

## Syntax

    encodeURI(URI)

### Parameter

- `URI`
  - : Ein vollständiger Uniform Resource Identifier.

### Return value

Ein neuer String, kodiert als Uniform Resource Identifier (URI).

## Beschreibung

Die Funktion geht davon aus, dass die URI eine richtige URI ist, sodass sie keine Zeichen kodiert die spezielle Bedeutungen haben.

`encodeURI` ersetzt alle Zeichen **außer** die folgenden mit ihrer zugehörigen UTF-8 Escape-Sequenz:

| Typ                     | Beinhaltet                                                   |
| ----------------------- | ------------------------------------------------------------ |
| Zurückgehaltene Zeichen | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$`                      |
| Unescapte               | alphanumerische Zeichen, `-` `_` `.` `!` `~` `*` `'` `(` `)` |
| Zeichen für Nummern     | `#`                                                          |

Beachten Sie, dass die `encodeURI` Funktion keine richtigen HTTP GET und POST Requests erzeugen kann, wie für XMLHTTPRequests benötigt, da "&", "+", und "=" nicht kodiert werden. Diese werden in GET und POST als spezielle Zeichen behandelt. Für solche Verwendungen steht die {{jsxref("encodeURIComponent")}} Funktion zur Verfügung.

Beachten Sie auch, dass ein {{jsxref("URIError")}} erzeugt wird, sobald versucht wird, ein [surrogate](https://de.wikipedia.org/wiki/UTF-16#Kodierung), welches nicht zu einem high-low Paar gehört, zu kodieren.

```js
// high-low paar ok
console.log(encodeURI('\uD800\uDFFF'));

// einzelnes high surrogate erzeugt ein "URIError: malformed URI sequence"
console.log(encodeURI('\uD800'));

// einzelnes low surrogate erzeugt ein "URIError: malformed URI sequence"
console.log(encodeURI('\uDFFF'));
```

Wenn Sie den neueren [RFC3986](http://tools.ietf.org/html/rfc3986) Standart für URLs benutzen möchten, der eckige Klammern beachtet (für IPv6) und Teile die zur URL gehören könnten (wie der Host) nicht kodiert, könnte der kleine Code-Auszug helfen:

```js
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar           |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES3')}}                                                     | {{Spec2('ES3')}}         | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.1.3.3', 'encodeURI')}}         | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-encodeuri-uri', 'encodeURI')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}} | {{Spec2('ESDraft')}} |                     |

## Browser kompatibilität

{{Compat}}

## See also

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
