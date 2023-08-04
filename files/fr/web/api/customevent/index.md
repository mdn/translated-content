---
title: CustomEvent
slug: Web/API/CustomEvent
---

{{APIRef("DOM")}}

L'interface **`CustomEvent`** représente un évènement initialisé par une application dans un but quelconque.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructeur

- [`CustomEvent()`](/fr/docs/Web/API/CustomEvent/CustomEvent)
  - : Crée un nouvel objet `CustomEvent`.

## Propriétés

_Cette interface hérite des propriétés de son parent, [`Event`](/fr/docs/Web/API/Event)._

- [`CustomEvent.detail`](/fr/docs/Web/API/CustomEvent/detail) {{readonlyinline}}
  - : Renvoie toutes les données passées lor de l'initialisation de l'évènement.

## Méthodes

_Cette interface hérite des propriétés de son parent, [`Event`](/fr/docs/Web/API/Event)._

- [`CustomEvent.initCustomEvent()`](/fr/docs/Web/API/CustomEvent/initCustomEvent) {{deprecated_inline}}
  - : Initialise un objet `CustomEvent`. Si l'évènement a déjà été diffusé, cette méthode n'a aucun effet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Window.postMessage()`](/fr/docs/Web/API/Window/postMessage)
- [Créer et déclencher des évènements](/fr/docs/Web/Events/Creating_and_triggering_events)
