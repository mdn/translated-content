---
title: "HTMLAnchorElement : propriété type"
short-title: type
slug: Web/API/HTMLAnchorElement/type
l10n:
  sourceCommit: 10346c8cf5dfe6e030bd1cdc32f04461afaa8c64
---

{{ApiRef("HTML DOM")}}

La propriété **`type`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères qui indique le type MIME de la ressource liée.

Elle reflète l'attribut `type` de l'élément HTML {{HTMLElement("a")}}.

## Valeur

Une chaîne de caractères.

## Exemple

```html
<a id="exampleLink" href="https://exemple.fr" type="text/html"
  >Lien d'exemple</a
>
<p class="type"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".type");
console.log(anchorElement.type); // Affiche : "text/html"
pTag.textContent = anchorElement.type;
```

{{EmbedLiveSample("Example",100,100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLLinkElement.type")}}
- La propriété {{domxref("HTMLSourceElement.type")}}
- La propriété {{domxref("HTMLEmbedElement.type")}}
