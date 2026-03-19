---
title: "Window : évènement languagechange"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

L'évènement **`languagechange`** de l'interface {{DOMxRef("Window")}} est déclenché sur l'objet d'étendue globale lorsque la langue préférée de l'utilisateur change.

## Syntax

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("languagechange", (event) => { })

onlanguagechange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété du gestionnaire d'évènements `onlanguagechange` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

Vous pouvez utiliser l'événement `languagechange` dans une méthode {{DOMxRef("EventTarget/addEventListener", "addEventListener")}}&nbsp;:

```js
window.addEventListener("languagechange", function () {
  console.log("Évènement languagechange détecté !");
});
```

Ou utilisez la propriété du gestionnaire d'évènements `onlanguagechange`&nbsp;:

```js
window.onlanguagechange = function (event) {
  console.log("Évènement languagechange détecté !");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Navigator.language")}}
- La propriété {{DOMxRef("Navigator.languages")}}
- L'interface {{DOMxRef("Navigator")}}
