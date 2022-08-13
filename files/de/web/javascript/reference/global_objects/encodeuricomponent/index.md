---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---
{{jsSidebar("Objects")}}

Die Methode **`encodeURIComponent()`** kodiert eine Komponente des Uniform Resource Identifier (URI) indem jedes Vorkommen bestimmter Zeichen durch ein, zwei, drei oder vier Escape-Sequenzen ersetzt werden, die der UTF8-Kodierung des Zeichens entsprechen. Vier Escape-Sequenzen werden nur bei Zeichen bestehend aus zwei "Surrogate"-Zeichen verwendet.

## Syntax

    encodeURIComponent(str);

### Parameter

- `str`
  - : String. Eine URI-Komponente.

## Beschreibung

`encodeURIComponent` kodiert alle Zeichen außer den Folgenden: alphabetische, dezimale Ziffern, `- _ . ! ~ * ' ( )`

Beachte, dass {{jsxref("URIError")}} beim Versuch geworfen wird, ein Surrogate-Zeichen zu kodieren, das nicht Teil eines High-Low-Paares ist, z.B.:

```js
// Zulässiges High-Low-Paar
console.log(encodeURIComponent('\uD800\uDFFF'));

// alleinstehendes High-Surrogate-Zeichen wirft "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uD800'));

// alleinstehendes Low-Surrogate-Zeichen wirft "URIError: malformed URI sequence"
console.log(encodeURIComponent('\uDFFF'));
```

Um unerwartete Anfragen an den Server zu vermeiden, sollte `encodeURIComponent` für jeden benutzerdefinierten Parameter, der als Teil der URI übergeben wird, verwendet werden. Z.B. könnte ein Benutzer in einem variablen Kommentar "`Thyme &time=again`" schreiben. Ohne Verwendung von `encodeURIComponent` erhältst Du `comment=Thyme%20&time=again`. Beachte, dass das Kaufmännische Und (Ampersand) und das Gleich-Zeichen ein neues Schlüssel-Wert-Paar bedeuten. Das bedeutet, dass statt dem POST-Schlüssel "`Thyme &time=again`" zwei POST-Schlüssel verwendet werden, der eine mit dem Wert "`Thyme`", der andere (`time`) mit `again`.

Bei [`application/x-www-form-urlencoded`](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm) werden Leerzeichen mit '+' ersetzt, so dass es u.U. erwünscht ist, nach der Ersetzung durch `encodeURIComponent` eine weitere Ersetzung von "%20" mit "+" durchzuführen.

Um streng konform mit [RFC 3986](http://tools.ietf.org/html/rfc3986) zu sein (welches !, ', (, ) und \* reserviert), obwohl diese Zeichen keine formalisierten Trennzeichen sind, kann das Folgende sicher verwendet werden:

```js
function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
```

## Beispiele

Das folgende Beispiel stellt die spezielle Kodierung sicher, die in UTF-8-kodierten Parameterwerten der Server-Antwort-Headern `Content-Disposition` und `Link` benötigt wird (z.B. UTF-8-kodierte Dateinamen):

```js
var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(fileName);

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"


function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // Beachte, dass obwohl RFC3986 "!" reserviert, es nicht kodiert
        // werden muss, weil RFC5987 es nicht reserviert.
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // Die folgenden Zeichen müssen nicht nach RFC5987 kodiert werden,
            // daher können wir bessere Lesbarkeit übers Netzwerk sicherstellen:
            // |`^
            replace(/%(?:7C|60|5E)/g, unescape);
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                   | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------------ |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}     | Ursprüngliche Definition |
| {{SpecName('ES5.1', '#sec-15.1.3.4', 'encodeURIComponent')}}                             | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}} | {{Spec2('ES6')}}     |                          |

## Browser Kompatibilität

{{Compat}}

## Weitere Infos

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
