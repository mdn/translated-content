---
title: "Window : propriété event"
short-title: event
slug: Web/API/Window/event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("DOM")}}{{Deprecated_Header}}

La propriété en lecture seule {{DOMxRef("Window")}} **`event`** retourne un objet {{DOMxRef("Event")}} qui est actuellement traité par le code du site. En dehors du contexte d'un gestionnaire d'évènement, la valeur est toujours `undefined`.

Vous _devez_ éviter d'utiliser cette propriété dans du nouveau code, et utiliser à la place l'évènement ({{DOMxRef("Event")}}) passé dans la fonction du gestionnaire d'évènement. Cette propriété n'est pas universellement prise en charge et, même lorsqu'elle l'est, elle introduit une fragilité potentielle dans votre code.

> [!NOTE]
> Cette propriété peut être fragile, car il peut y avoir des situations où l'objet `Event` retourné n'est pas la valeur attendue. De plus, `Window.event` n'est pas précis pour les évènements déclenchés dans {{Glossary("shadow tree", "l'arbre d'ombre")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Event.srcElement")}}
