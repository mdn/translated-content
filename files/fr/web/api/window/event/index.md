---
title: Window.event
slug: Web/API/Window/event
---

{{APIRef("DOM")}}

L'événement de propriété {{domxref("Window")}} en lecture seule renvoie le {{domxref("Event")}} qui est actuellement géré par le code du site. En dehors du contexte d'un gestionnaire d'événements, la valeur est toujours `undefined`.

Vous devez éviter d'utiliser cette propriété dans un nouveau code et utiliser à la place le {{domxref ("Event")}} transmis à la fonction de gestionnaire d'événements. Cette propriété n'est pas prise en charge universellement et même lorsqu'elle est prise en charge, elle introduit une fragilité potentielle dans votre code.

> **Note :** Cette propriété peut être fragile, dans la mesure où il peut y avoir des situations dans lesquelles `l'événement` renvoyé n'est pas la valeur attendue. De plus, `Window.event` n'est pas précis pour les événements distribués dans {{Glossary("shadow tree", "shadow trees")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Event.srcElement")}}
