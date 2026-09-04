---
title: "Document : méthode hasFocus()"
short-title: hasFocus()
slug: Web/API/Document/hasFocus
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

La méthode **`hasFocus()`** de l'interface {{DOMxRef("Document")}} retourne une valeur booléenne indiquant si le document ou un élément à l'intérieur du document a la sélection.
Cette méthode peut être utilisée pour déterminer si l'élément actif dans un document a la sélection.

> [!NOTE]
> Lors de l'affichage d'un document, un élément ayant la sélection est toujours [l'élément actif](/fr/docs/Web/API/Document/activeElement) dans le document, mais un élément actif n'a pas nécessairement la sélection.
> Par exemple, un élément actif dans une fenêtre contextuelle qui n'est pas au premier plan n'a pas la sélection.

## Syntaxe

```js-nolint
hasFocus()
```

### Paramètres

Aucun.

### Valeur retournée

`false` si l'élément actif dans le document n'a pas la sélection&nbsp;;
`true` si l'élément actif dans le document a la sélection.

## Exemples

### Vérifier si le document a la sélection

L'exemple suivant vérifie si le document a la sélection ou non.
Une fonction appelée `checkPageFocus()` met à jour un élément paragraphe selon le résultat de `document.hasFocus()`.
Ouvrir une nouvelle fenêtre fera perdre la sélection au document et revenir à la fenêtre d'origine lui rendra la sélection.

```html live-sample___has-focus
<p id="log">Vérification du résultat de la sélection affichée ici.</p>
<button id="newWindow">Ouvrir une nouvelle fenêtre</button>
```

```css hidden live-sample___has-focus
body {
  padding: 1rem;
  background: gray;
  text-align: center;
  font: 1.5rem sans-serif;
}
```

```js live-sample___has-focus
const body = document.querySelector("body");
const log = document.getElementById("log");

function checkDocumentFocus() {
  if (document.hasFocus()) {
    log.textContent = "Ce document a la sélection.";
    body.style.background = "white";
  } else {
    log.textContent = "Ce document n'a pas la sélection.";
    body.style.background = "gray";
  }
}

function openWindow() {
  window.open(
    "https://developer.mozilla.org/",
    "MDN",
    "width=640,height=320,left=150,top=150",
  );
}

document.getElementById("newWindow").addEventListener("click", openWindow);
setInterval(checkDocumentFocus, 300);
```

{{EmbedLiveSample('has-focus', , , , , , , 'allow-popups')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.activeElement")}}
- [Utiliser l'API Page Visibility](/fr/docs/Web/API/Page_Visibility_API)
