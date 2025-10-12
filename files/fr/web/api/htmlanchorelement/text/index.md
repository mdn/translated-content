---
title: "HTMLAnchorElement : propriété text"
short-title: text
slug: Web/API/HTMLAnchorElement/text
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{ApiRef("HTML DOM")}}

La propriété **`text`** de l'interface {{domxref("HTMLAnchorElement")}} représente le texte à l'intérieur de l'élément.
Cette propriété représente la même information que {{domxref("Node.textContent")}}.

## Valeur

Une chaîne de caractères.

## Exemple

```html
<a id="exampleLink" href="https://exemple.fr">Lien d'exemple</a>
<p class="text"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".text");
pTag.textContent = `Propriété text : ${anchorElement.text}`;
```

### Résultat

{{EmbedLiveSample("Example",100,100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLScriptElement.text")}}
- La propriété {{domxref("HTMLOptionElement.text")}}
