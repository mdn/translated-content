---
title: EventTarget
slug: Web/API/EventTarget
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

`EventTarget` est une interface DOM implémentée par des objets qui peuvent recevoir des évènements et peuvent avoir des écouteurs pour eux.
En d'autres termes, toute cible d'évènements implémente les méthodes associées à cette interface.

{{DOMxRef("Element")}}, {{DOMxRef("Document")}} et {{DOMxRef("Window")}} sont les cibles d'évènements les plus fréquentes, mais d'autres objets peuvent également être des cibles d'évènements. Par exemple {{DOMxRef("XMLHttpRequest")}}, {{DOMxRef("AudioNode")}}, {{DOMxRef("AudioContext")}} et autres.

De nombreuses cibles d'évènements (y compris des éléments, des documents et des fenêtres) supporte également la définition de [gestionnaires d'évènements](/fr/docs/Web/API/Document_Object_Model/Events) par les propriétés et attributs `onevent`.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("EventTarget.EventTarget()", "EventTarget()")}}
  - : Crée une nouvelle instance d'objet `EventTarget`.

## Méthodes

- {{DOMxRef("EventTarget.addEventListener()")}}
  - : Enregistre un gestionnaire d'évènements d'un type d'évènement spécifique sur `EventTarget`.
- {{DOMxRef("EventTarget.removeEventListener()")}}
  - : Supprime un écouteur d'évènement de `EventTarget`.
- {{DOMxRef("EventTarget.dispatchEvent()")}}
  - : Envoie un évènement à cet `EventTarget`.
- {{DOMxRef("EventTarget.when()")}} {{Experimental_Inline}}
  - : Retourne un objet {{DOMxRef("Observable")}} représentant un flux d'évènements déclenchés sur la cible d'évènements sur laquelle il est appelé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence d'évènement](/fr/docs/Web/API/Document_Object_Model/Events) - les évènements disponibles sur la plateforme.
- [Guide du·de la développeur·euse d'évènements](/fr/docs/Web/API/Document_Object_Model/Events)
- L'interface {{DOMxRef("Event")}}
