---
title: "Document : évènement prerenderingchange"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Speculation Rules API")}}{{SeeCompatTable}}

L'évènement **`prerenderingchange`** est déclenché sur un document pré-rendu lorsqu'il est activé (c'est-à-dire lorsque l'utilisateur·ice consulte la page).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("prerenderingchange", (event) => { })

onprerenderingchange = (event) => { }
```

## Type de l'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

### Empêcher l'exécution de code pendant le pré-rendu

Cet exemple montre comment différer du code qui s'exécuterait normalement pendant le pré-rendu, jusqu'après l'activation de la page.
C'est utile pour différer le code d'analyse, qui n'est pertinent que lorsque la page est effectivement consultée.

Le code vérifie si le pré-rendu est en cours via {{DOMxRef("Document.prerendering")}} et, le cas échéant, ajoute un gestionnaire d'évènement pour exécuter une fonction d'initialisation analytique une fois la page activée.
Sur une page qui n'est pas en pré-rendu, le code d'analyse s'exécute immédiatement.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Notez que ce type de code ne doit pas être utilisé pour mesurer la fréquence d'activation d'un pré-rendu, car le code peut s'exécuter après que la page pré-rendue a déjà été activée.

> [!NOTE]
> Voir la page d'accueil de l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) et en particulier la section [Conditions de chargement spéculatif non sûr](/fr/docs/Web/API/Speculation_Rules_API#conditions_de_chargement_spéculatif_non_sûr) pour plus d'informations sur les types d'activités que vous pourriez vouloir différer jusqu'à la fin du pré-rendu.

### Mesurer les activations de pré-rendu

Ce code montre comment mesurer la fréquence d'activation d'un pré-rendu.
Il utilise l'évènement `prerenderingchange` pour suivre les activations, et {{DOMxRef("Performance.getEntriesByType()")}} pour suivre les activations de navigation.

```js
if (document.prerendering) {
  document.addEventListener(
    "prerenderingchange",
    () => {
      console.log("Pré-rendu activé après l'exécution de ce script");
    },
    { once: true },
  );
} else if (performance.getEntriesByType("navigation")[0]?.activationStart > 0) {
  console.log("Pré-rendu activé avant l'exécution de ce script");
} else {
  console.log("Ce chargement de page ne s'est pas fait via un pré-rendu");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- La propriété {{DOMxRef("Document.prerendering", "prerendering")}}
- La propriété {{DOMxRef("PerformanceNavigationTiming.activationStart")}}
