---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
translation_of: Web/API/DOMTokenList/add
---
{{APIRef("DOM")}}

Die **`add()`** Methode des {{domxref("DOMTokenList")}} Interfaces, fügt ein _token_ der Liste an.

## Syntax

    tokenList.add(token1[, token2[, ...]]);

### Parameter

- token
  - : Ein {{domxref("DOMString")}} ,welches das _token_ repräsentiert, welches an die Liste angefügt werden soll.

### Rückgabewert

`undefined`

## Beispiele

Im folgenden Beispiel erhalten wir die Liste der Klassen eines {{htmlelement("span")}} Elementes als `DOMTokenList` , mit Hilfe von {{domxref("Element.classList")}}. Wir fügen der Liste dann ein neues _token_ an und schreiben die Liste als inhalt in das `<span>.`

Das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
var span = document.querySelector("span");
var classes = span.classList;
classes.add("d");
span.textContent = classes;
```

Die Ausgabe:

{{ EmbedLiveSample('Examples', '100%', 60) }}

Man kann auch mehrere _tokens_ auf einmal hinzufügen:

```js
span.classList.add("d", "e", "f");
```

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar          |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-add','add()')}} | {{Spec2('DOM WHATWG')}} | Initial definition |

## Browser Kompatibilität

{{Compat("api.DOMTokenList.add")}}
