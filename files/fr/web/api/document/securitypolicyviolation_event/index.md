---
title: "Document : évènement securitypolicyviolation"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Reporting API")}}

L'évènement **`securitypolicyviolation`** de l'interface {{DOMxRef("Document")}} est déclenché lorsqu'une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) est enfreinte.

L'évènement est déclenché sur le document lorsqu'il y a une violation de la politique CSP du document (et peut également se propager à partir d'éléments du document).

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) vers l'objet {{DOMxRef("Window")}} et est [composé](/fr/docs/Web/API/Event/composed).

> [!NOTE]
> Vous devriez généralement ajouter le gestionnaire pour cet évènement à un objet de niveau supérieur (c'est-à-dire {{DOMxRef("Window")}} ou {{DOMxRef("Document")}}).
> Bien que les éléments HTML puissent techniquement être la cible de l'évènement `securitypolicyviolation`, en réalité cet évènement ne se déclenche pas sur eux — par exemple, une source `<img>` bloquée déclenche directement cet évènement sur `document` en tant que cible, au lieu de se propager à partir de l'élément `<img>`.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("SecurityPolicyViolationEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Exemples

Le code ci-dessous montre comment vous pouvez ajouter une fonction de gestionnaire d'évènements en utilisant la propriété de gestionnaire d'évènements `onsecuritypolicyviolation` ou `addEventListener()` sur le `Document`.

```js
document.onsecuritypolicyviolation = (e) => {
  // Gérer l'évènement SecurityPolicyViolationEvent e ici
};

document.addEventListener("securitypolicyviolation", (e) => {
  // Gérer l'évènement SecurityPolicyViolationEvent e ici
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/securitypolicyviolation_event", "securitypolicyviolation")}} de l'interface {{DOMxRef("Element")}}
- L'évènement {{DOMxRef("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} de l'interface {{DOMxRef("WorkerGlobalScope")}}
- [HTTP&nbsp;: politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP)
