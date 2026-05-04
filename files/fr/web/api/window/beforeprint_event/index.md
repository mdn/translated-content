---
title: "Window : évènement beforeprint"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

L'évènement **`beforeprint`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque le document associé est sur le point d'être imprimé ou prévisualisé pour l'impression.

Les évènements {{DOMxRef("Window.afterprint_event", "afterprint")}} et `beforeprint` permettent aux pages de modifier leur contenu avant le début de l'impression (par exemple, pour supprimer une bannière) puis de rétablir ces modifications après l'impression. En général, il est préférable d'utiliser une règle CSS [`@media print`](/fr/docs/Web/CSS/Guides/Media_queries/Using#cibler_des_types_de_média), mais il peut être nécessaire d'utiliser ces évènements dans certains cas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("beforeprint", (event) => { })

onbeforeprint = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
window.addEventListener("beforeprint", (event) => {
  console.log("Avant impression");
});
```

Utilisation de la propriété de gestionnaire d'évènement `onbeforeprint`&nbsp;:

```js
window.onbeforeprint = (event) => {
  console.log("Avant impression");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window/afterprint_event", "afterprint")}}
