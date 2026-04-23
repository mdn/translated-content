---
title: "HTMLLinkElement : propriété rel"
short-title: rel
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`rel`** de l'interface {{domxref("HTMLLinkElement")}} reflète l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel). C'est une chaîne de caractères contenant une liste de types de liens séparés par des espaces, indiquant la relation entre la ressource représentée par l'élément HTML {{HTMLElement("link")}} et le document courant.

L'utilisation la plus courante de cet attribut est de spécifier un lien vers une feuille de style externe&nbsp;:
la propriété est définie sur `stylesheet` et l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/link#href) est défini sur l'URL d'une feuille de style externe pour mettre en forme la page.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log(link);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété équivalente les éléments HTML {{HTMLElement("a")}} et {{HTMLElement("area")}}&nbsp;:
  - {{domxref("HTMLAnchorElement.rel")}}
  - {{domxref("HTMLAreaElement.rel")}}
- La même liste mais sous forme de jetons&nbsp;: {{domxref("HTMLLinkElement.relList")}}
