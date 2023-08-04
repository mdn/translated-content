---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
---

{{APIRef("DOM Events")}}

**`UIEvent.detail`** est une propriété en lecture seule, qui, lorsqu'elle ne vaut pas zéro, donne le nombre de clics courant (ou suivant en fonction de l'événement).

Pour les événements [`click`](/fr/docs/Web/API/Element/click_event) ou [`dblclick`](/fr/docs/Web/API/Element/dblclick_event), `UIEvent.detail` donne le nombre de clics courant.

Pour les événements [`mousedown`](/fr/docs/Web/API/Element/mousedown_event) ou [`mouseup`](/fr/docs/Web/API/Element/mouseup_event), `UIEvent.detail` donne le nombre de clics courant _plus_ un.

Pour tous les autres objets {{domxref("UIEvent")}}, `UIEvent.detail` vaut toujours zéro.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
