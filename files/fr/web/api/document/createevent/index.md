---
title: "Document : méthode createEvent()"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{Deprecated_Header}}

> [!WARNING]
> De nombreuses méthodes utilisées avec `createEvent`, tels que `initCustomEvent`, sont obsolètes. Utilisez le [constructeur d'évènement](/fr/docs/Web/API/CustomEvent) à la place.

La méthode **`createEvent()`** de l'interface {{DOMxRef("Document")}} crée un [évènement](/fr/docs/Web/API/Event) du type défini. L'objet retourné doit être initialisé avant d'être passé à {{DOMxRef("EventTarget.dispatchEvent")}}.

## Syntaxe

```js-nolint
createEvent(type)
```

### Paramètres

- `type`
  - : Une chaîne de caractères qui représente le type d'évènement à créer. Les types d'évènements possibles incluent `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"` et `"HTMLEvents"`. Voir la section [Notes](#notes) pour plus de détails.

### Valeur de retour

Un objet {{DOMxRef("Event")}}.

## Exemples

```js
// Crée l'évènement.
const event = document.createEvent("Event");

// Définit que le nom de l'évènement est 'build'.
event.initEvent("build", true, true);

// Écoute l'évènement.
elem.addEventListener("build", (e) => {
  // e.target correspond à elem
});

// L'élément cible peut être n'importe quel Element ou autre EventTarget.
elem.dispatchEvent(event);
```

### Notes

Les chaînes de type d'évènement appropriées pour passer à `createEvent()` sont répertoriées dans la [norme DOM — voir le tableau à l'étape 2 <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#dom-document-createevent). Gardez à l'esprit que la plupart des objets d'évènement ont maintenant des constructeurs, qui sont la méthode recommandée pour créer des occurrences d'objet d'évènement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Créer et déclencher des évènements](/fr/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
