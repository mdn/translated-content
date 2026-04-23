---
title: "HTMLLinkElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: 7c68e9bbf680784817e6415336c7dde5ae96360a
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{domxref("HTMLLinkElement")}} est une valeur booléenne qui indique si le lien est désactivé. Elle n'a d'effet que sur les liens de feuille de style (propriété `rel` définie à `stylesheet`).

Si l'attribut `disabled` est spécifié dans le HTML lors du chargement, la feuille de style ne sera pas chargée au chargement de la page. Elle ne sera chargée que lorsque la propriété `disabled` sera définie à `false` ou supprimée. Définir la propriété `disabled` en JavaScript provoque la suppression de la feuille de style de la liste {{domxref("Document.styleSheets")}} du document.

Elle reflète l'attribut `disabled` de l'élément HTML {{HTMLElement("link")}}.

## Valeur

Un booléen.

## Exemples

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  disabled
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.disabled); // Affiche : true

// Définir la propriété disabled à false pour activer la feuille de style
el.disabled = false;
console.log(el.disabled); // Affiche : false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{domxref("HTMLScriptElement.integrity")}}
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
