---
title: "Document : méthode createTextNode()"
short-title: createTextNode()
slug: Web/API/Document/createTextNode
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`createTextNode()`** de l'interface {{DOMxRef("Document")}} crée un nouveau nœud {{DOMxRef("Text")}}. Cette méthode peut être utilisée pour échapper les caractères HTML.

## Syntaxe

```js-nolint
createTextNode(data)
```

### Paramètres

- `data`
  - : Une chaîne de caractères contenant les données à placer dans le nœud de texte.

### Valeur de retour

Un nœud {{DOMxRef("Text")}}.

## Exemples

```html
<button>OUI&nbsp;!</button>
<button>NON&nbsp;!</button>
<button>NOUS POUVONS&nbsp;!</button>

<hr />

<p id="p1">La première ligne du paragraphe.</p>
```

```js
function addTextNode(text) {
  const nouveauTexte = document.createTextNode(text);
  const p1 = document.getElementById("p1");

  p1.appendChild(nouveauTexte);
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    addTextNode(`${event.target.textContent} `);
  });
});
```

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
