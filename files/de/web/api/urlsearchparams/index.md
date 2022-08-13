---
title: URLSearchParams
slug: Web/API/URLSearchParams
tags:
  - API
  - Experimentell
  - Interface
  - Referenz
  - URL API
translation_of: Web/API/URLSearchParams
---
{{ApiRef("URL API")}}

Das **`URLSearchParams`** Interface definiert Hilfsmethoden um mit dem Query-String einer URL zu arbeiten.

Ein Objekt, welches `URLSearchParams` implementiert, kann auch direkt in einem {{jsxref("Statements/for...of", "for...of")}} Konstrukt genutzt werden, anstatt {{domxref('URLSearchParams.entries()', 'entries()')}}: `for (var p of mySearchParams)` ist äquivalent zu `for (var p of mySearchParams.entries())`.

## Konstruktor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Konstruktor erzeugt ein `URLSearchParams` Objekt von einem Query-String.

## Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

## Methoden

_Dieses Interface erbt keine Methoden._

- {{domxref("URLSearchParams.append()")}}
  - : Hängt ein Schlüssel/Wert - Paar an den Query-String.
- {{domxref("URLSearchParams.delete()")}}
  - : Löscht einen Schlüssel und den zugehörigen Wert aus dem Query-String.
- {{domxref("URLSearchParams.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} über alle Schlüssel/Wert - Paare im Query-String.
- {{domxref("URLSearchParams.get()")}}
  - : Gibt den ersten Wert, der im Query-String mit einem Schlüssel assoziiert ist.
- {{domxref("URLSearchParams.getAll()")}}
  - : Gibt alle Werte, die im Query-String mit einem Schlüssel assoziiert sind.
- {{domxref("URLSearchParams.has()")}}
  - : Gibt einen {{jsxref("Boolean")}}, der anzeigt ob ein Schlüssel im Query-String vorkommt.
- {{domxref("URLSearchParams.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} über alle Schlüssel im Query-String.
- {{domxref("URLSearchParams.set()")}}
  - : Setzt den Wert eines Schlüssels. Wenn der Schlüssel mehrfach im Query-String vorkommt, werden die Restlichen gelöscht.
- {{domxref("URLSearchParams.sort()")}}
  - : Sortiert alle Schlüssel/Wert Paare, nach dem Schlüssel.
- {{domxref("URLSearchParams.toString()")}}
  - : Gibt den Query-String, in der passenden Form um in einer URL einzusetzen.
- {{domxref("URLSearchParams.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} über alle Werte im Query-String.

## Beispiel

```js
var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);

//Iteriert über die Suchparameter
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

## Spezifikationen

| Spezifikation                                                                | Status               | Kommentar           |
| ---------------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('URL', '#urlsearchparams', "URLSearchParams")}} | {{Spec2('URL')}} | Initial definition. |

## Browser Kompatibilität

{{Compat}}

## Verweise

- Andere URL-bezogene Interfaces: {{domxref("URL")}}, {{domxref("URLUtils")}}.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
