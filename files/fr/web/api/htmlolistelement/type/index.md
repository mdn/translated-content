---
title: "HTMLOListElement : propriété type"
short-title: type
slug: Web/API/HTMLOListElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

La propriété **`type`** de l'interface {{domxref("HTMLOListElement")}} indique le type de marqueur à utiliser pour l'affichage d'une liste ordonnée.

Elle reflète l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/ol#type) de l'élément HTML {{HTMLElement("ol")}}.

> [!NOTE]
> Le `type` peut être défini en CSS avec la propriété {{CSSxRef("list-style-type")}}. Cette propriété CSS propose de nombreuses valeurs supplémentaires.

## Valeur

Une chaîne de caractères représentant le type.

Les valeurs possibles sont listées dans la section [types de marqueurs](/fr/docs/Web/HTML/Reference/Elements/ol#type) de l'attribut.

## Exemples

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
// Si type n'est pas défini, retourne une chaîne vide
console.log(olElement.type); // Affiche : ""
olElement.type = "i"; // Utilise le type chiffres romains
console.log(olElement.type); // Affiche : "i"
```

### Résultat

{{EmbedLiveSample("Examples", 400, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
