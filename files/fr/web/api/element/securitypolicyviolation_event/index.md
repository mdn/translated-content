---
title: "Element : évènement securitypolicyviolation"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Reporting API")}}

L'évènement **`securitypolicyviolation`** est déclenché lorsqu'une [Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) est violée.

L'évènement est déclenché sur l'élément lorsqu'une violation de la politique CSP se produit.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) jusqu'à l'objet {{DOMxRef("Window")}} et est [composé](/fr/docs/Web/API/Event/composed).

> [!NOTE]
> Vous devez généralement ajouter le gestionnaire pour cet évènement à un objet de niveau supérieur (c'est-à-dire {{DOMxRef("Window")}} ou {{DOMxRef("Document")}}).
> Bien que les éléments HTML puissent techniquement être la cible de l'évènement `securitypolicyviolation`, en réalité cet évènement ne se déclenche pas sur eux — par exemple, une source `<img>` bloquée déclenche directement cet évènement sur `document` en tant que cible, au lieu de remonter depuis l'élément `<img>`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("SecurityPolicyViolationEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Exemples

### Écouter l'évènement `securitypolicyviolation` sur `Window`

Le code ci-dessous montre comment vous pouvez ajouter une fonction gestionnaire d'évènement en utilisant la propriété gestionnaire d'évènement global `onsecuritypolicyviolation` ou `addEventListener()` sur le `Window` de niveau supérieur (vous pouvez utiliser exactement la même approche sur `Document`).

```js
window.onsecuritypolicyviolation = (e) => {
  // Gérer l'évènement SecurityPolicyViolationEvent e ici
};

window.addEventListener("securitypolicyviolation", (e) => {
  // Gérer l'évènement SecurityPolicyViolationEvent e ici
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document/securitypolicyviolation_event", "securitypolicyviolation")}} de l'interface {{DOMxRef("Document")}}
- L'évènement {{DOMxRef("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} de l'interface {{DOMxRef("WorkerGlobalScope")}}
- [HTTP > Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP)
