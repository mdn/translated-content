---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
tags:
  - API
  - DOM
  - Propriété
  - Reference
translation_of: Web/API/UIEvent/detail
---
{{APIRef("DOM Events")}}

**`UIEvent.detail`** est une propriété en lecture seule, qui, lorsqu'elle ne vaut pas zéro, donne le nombre de clics courant (ou suivant en fonction de l'événement).

Pour les événements {{event("click")}} ou {{event("dblclick")}}, `UIEvent.detail` donne le nombre de clics courant.

Pour les événements {{event("mousedown")}} ou {{event("mouseup")}}, `UIEvent.detail` donne le nombre de clics courant _plus_ un.

Pour tous les autres objets {{domxref("UIEvent")}}, `UIEvent.detail` vaut toujours zéro.

## Spécifications

| Spécification                                                                                | Statut                           | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM3 Events','#widl-UIEvent-detail','UIEvent.detail')}}     | {{Spec2('DOM3 Events')}} |                      |
| {{SpecName('DOM2 Events','#Events-UIEvent-detail','UIEvent.detail')}} | {{Spec2('DOM2 Events')}} | Première définition. |

## Compatibilité des navigateurs

{{Compat("api.UIEvent.detail")}}
