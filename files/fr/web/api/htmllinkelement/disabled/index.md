---
title: "HTMLLinkElement : propriété disabled"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La propriété **`disabled`** de l'interface {{DOMxRef("HTMLLinkElement")}} est une valeur booléenne qui indique si le lien est désactivé. Elle n'a d'effet que sur les liens de feuille de style (propriété `rel` définie à `stylesheet`).

Si l'attribut `disabled` est défini dans le HTML lors du chargement, la feuille de style ne est pas chargée au chargement de la page. Elle ne est chargée que lorsque la propriété `disabled` est définie à `false` ou supprimée. Définir la propriété `disabled` en JavaScript provoque la suppression de la feuille de style de la liste {{DOMxRef("Document.styleSheets")}} du document.

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

- La propriété {{DOMxRef("HTMLScriptElement.integrity")}}
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
