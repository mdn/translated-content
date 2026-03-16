---
title: "Window : évènement afterprint"
short-title: afterprint
slug: Web/API/Window/afterprint_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

L'évènement **`afterprint`** de l'interface {{DOMxRef("Window")}} est déclenché après que le document associé a commencé à s'imprimer ou que l'aperçu avant impression a été fermé.

Les évènements {{DOMxRef("Window.beforeprint_event", "beforeprint")}} et `afterprint` permettent aux pages de modifier leur contenu avant le début de l'impression (par exemple, pour supprimer une bannière) puis de rétablir ces modifications après la fin de l'impression. En général, il est préférable d'utiliser une règle CSS [`@media print`](/fr/docs/Web/CSS/Guides/Media_queries/Using#cibler_des_types_de_média), mais il peut être nécessaire d'utiliser ces évènements dans certains cas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("afterprint", (event) => { })

onafterprint = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
window.addEventListener("afterprint", (event) => {
  console.log("Après impression");
});
```

Utilisation de la propriété de gestionnaire d'évènements `onafterprint`&nbsp;:

```js
window.onafterprint = (event) => {
  console.log("Après impression");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Évènement associé&nbsp;: {{DOMxRef("Window/beforeprint_event", "beforeprint")}}
