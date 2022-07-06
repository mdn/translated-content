---
title: UIEvent
slug: Web/API/UIEvent
tags:
  - API
  - DOM
  - Event
  - Evènement
  - Interface
  - Reference
  - UIEvent
translation_of: Web/API/UIEvent
---
{{APIRef("DOM Events")}}

L'interface **`UIEvent`** représente des évènements simples de l'interface utilisateur.

`UIEvent` dérive de {{domxref("Event")}}. Bien que la méthode {{domxref("UIEvent.initUIEvent()")}}  soit conservée pour la compatibilité ascendante, vous devez créer un objet `UIEvent` en utilisant le constructeur {{domxref("UIEvent.UIEvent", "UIEvent()")}}.

Plusieurs interfaces descendent directement ou indirectement de celle-ci : {{domxref("MouseEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}} et {{domxref("CompositionEvent")}}.

## Constructeurs

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Crée un objet `UIEvent`.

## Propriétés

_Cette interface hérite également des propriétés de son parent {{domxref("Event")}}._

- {{domxref("UIEvent.cancelBubble")}} {{Non-standard_inline}} {{Deprecated_inline}}
  - : {{jsxref("Boolean")}} _(booléen)_ indiquant si les conséquences de l'évènement ont été annulées ou non.

<!---->

- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : Retourne un `long` qui donne quelques détails sur l'évènement, dépendant du type d'évènement.
- {{domxref("UIEvent.isChar")}} {{deprecated_inline}} {{readonlyinline}}
  - : Retourne un {{jsxref("Boolean")}} indiquant si l'évènement a produit un caractère clé ou non.
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Retourne la coordonnée horizontale de l'évènement par rapport à la couche actuelle.
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Retourne la coordonnée verticale de l'évènement par rapport à la couche actuelle.
- {{domxref("UIEvent.pageX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Retourne la coordonnée horizontale de l'évènement par rapport à l'ensemble du document.
- {{domxref("UIEvent.pageY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Retourne la coordonnée verticale de l'évènement par rapport à l'ensemble du document.
- {{domxref("UIEvent.sourceCapabilities")}} {{non-standard_inline}} {{readonlyinline}}
  - : Retourne une instance de l'interface `InputDeviceCapabilities` qui fournit des informations sur le périphérique physique responsable de l'évènement.
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : Retourne un {{domxref("WindowProxy")}} qui contient la vue de la génération de l'évènement.
- {{domxref("UIEvent.which")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Retourne l'identifiant `keyCode` de la touche pressée, ou le code du caractère (`charCode`) pour une touche alphanumérique enfoncée.

## Méthodes

_Cette interface hérite également des méthodes de son parent, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : Initialise un objet `UIEvent`. Si l'évènement a déjà été envoyé, cette méthode ne fait rien.

## Spécifications

| Spécification                                                                    | Statut                                           | Commentaire                                                                                                                               |
| -------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('InputDeviceCapabilities')}}                             | {{Spec2('InputDeviceCapabilities')}} | Ajoute la propriété `sourceCapabilities`.                                                                                                 |
| {{SpecName('UI Events')}}                                                 | {{Spec2('UI Events')}}                     | Extension de DOM3.                                                                                                                        |
| {{SpecName('DOM3 Events', '#interface-UIEvent', 'UIEvent')}} | {{Spec2('DOM3 Events')}}                 | Ajoute le constructeur `UIEvent()`, déprécie la méthode `initUIEvent()` et change le type de `view` de `AbstractView` vers `WindowProxy`. |
| {{SpecName('DOM2 Events', '#Events-UIEvent', 'UIEvent')}}     | {{Spec2('DOM2 Events')}}                 | Définition initiale.                                                                                                                      |

## Compatibilité des navigateurs

{{Compat("api.UIEvent")}}

## Voir aussi

- [Introduction to events](/fr/docs/Learn/JavaScript/Building_blocks/Events)
- {{ domxref("Event") }}
