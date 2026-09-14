---
title: "Document : propriété timeline"
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Animations")}}

La propriété en lecture seule `timeline` de l'interface {{DOMxRef("Document")}} représente la chronologie par défaut du document actuel. Cette chronologie est une instance spéciale de {{DOMxRef("DocumentTimeline")}}.

Cette chronologie est unique à chaque `document` et persiste pendant toute la durée de vie du `document`, y compris lors des appels à {{DOMxRef("Document.open()")}}.

Cette chronologie exprime le temps en millisecondes depuis {{DOMxRef("Performance.timeOrigin")}}.
Avant l'origine du temps, la chronologie est inactive et sa valeur {{DOMxRef("AnimationTimeline.currentTime", "currentTime")}} vaut `null`.

> [!NOTE]
> Une chronologie de document associée à un document non actif (un {{DOMxRef("Document")}} non associé à une fenêtre ({{DOMxRef("Window")}}), {{HTMLElement("iframe")}}, ou {{HTMLElement("frame")}}) est également considérée comme inactive.

## Valeur

Un objet {{DOMxRef("DocumentTimeline")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- L'interface {{DOMxRef("AnimationTimeline")}}
- La propriété {{DOMxRef("AnimationTimeline.currentTime")}}
- L'interface {{DOMxRef("DocumentTimeline")}}
