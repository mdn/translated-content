---
title: "HTMLAnchorElement : propriété hreflang"
short-title: hreflang
slug: Web/API/HTMLAnchorElement/hreflang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ApiRef("HTML DOM")}}

La propriété **`hreflang`** de l'interface {{domxref("HTMLAnchorElement")}} est une chaîne de caractères correspondant à la langue de la ressource liée.

Elle reflète l'attribut `hreflang` de l'élément {{HTMLElement("a")}} et vaut la chaîne vide (`""`) si aucun attribut `hreflang` n'est présent.

Les navigateurs web et les moteurs de recherche peuvent utiliser cette information pour mieux comprendre la langue du contenu lié, mais ils n'y sont pas obligés. La valeur fournie pour l'attribut `hreflang` doit respecter le format {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}}. Sinon, elle est ignorée.

Après avoir récupéré la ressource liée, les navigateurs ne se fient pas uniquement à l'attribut `hreflang`. Ils utilisent plutôt les informations de langue associées directement à la ressource (par exemple via les en-têtes HTTP) pour déterminer sa langue.

## Valeur

Une chaîne de caractères contenant une étiquette de langue, ou la chaîne vide (`""`) si aucun attribut `hreflang` n'est présent.

## Exemple

```html
<a id="exampleLink" href="https://example.com" hreflang="en-IN"
  >Lien d'exemple</a
>
<p class="hreflang"></p>
```

```css
#exampleLink {
  font-size: 1.5rem;
}
```

```js
const anchorElement = document.getElementById("exampleLink");
const pTag = document.querySelector(".hreflang");
console.log(anchorElement.hreflang); // retourne : "en-IN"
pTag.textContent = anchorElement.hreflang;
```

## Résultat

{{EmbedLiveSample("Example",100,100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLLinkElement.hreflang")}}
