---
title: "HTMLMediaElement : méthode load()"
short-title: load()
slug: Web/API/HTMLMediaElement/load
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`load()`** de l'interface {{DOMxRef("HTMLMediaElement")}} réinitialise l'élément multimédia à son état initial et commence le processus de sélection d'une source multimédia et de chargement du média en préparation de la lecture depuis le début.

La quantité de données multimédias préchargées est déterminée par la valeur de l'attribut [`preload`](/fr/docs/Web/HTML/Reference/Elements/video#preload) de l'élément.

Cette méthode est généralement utile uniquement lorsque vous avez apporté des modifications dynamiques à l'ensemble des sources disponibles pour l'élément multimédia, soit en modifiant l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/video#src) de l'élément, soit en ajoutant ou en supprimant des éléments {{HTMLElement("source")}} imbriqués dans l'élément multimédia lui-même. `load()` réinitialisera l'élément et rescannera les sources disponibles, permettant ainsi aux modifications de prendre effet.

## Syntaxe

```js-nolint
load()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Notes d'utilisation

Appeler `load()` interrompt toutes les opérations en cours impliquant cet élément multimédia, puis commence le processus de sélection et de chargement d'une ressource multimédia appropriée en fonction des options définies dans l'élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}} et son attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/video#src) ou ses éléments enfants {{HTMLElement("source")}}. Cela est décrit plus en détail dans la page [vidéo et audio HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#utiliser_plusieurs_formats_de_source_pour_améliorer_la_compatibilité).

Le processus d'interruption de toutes les activités en cours entraînera la résolution ou le rejet de toutes les promesses ({{JSxRef("Promise")}}) en attente retournées par {{DOMxRef("HTMLMediaElement.play", "play()")}}, en fonction de leur état avant le début du chargement du nouveau média. Les promesses de lecture en attente sont annulées avec une erreur {{DOMxRef("DOMException")}} `"AbortError"`.

Des évènements appropriés seront envoyés à l'élément multimédia lui-même au fur et à mesure que le processus de chargement progresse&nbsp;:

- Si l'élément est déjà en train de charger un média, ce processus de chargement est annulé et l'évènement **{{DOMxRef("HTMLMediaElement/abort_event", "abort")}}** est envoyé.
- Si l'élément a déjà été initialisé avec un média, l'évènement **{{DOMxRef("HTMLMediaElement/emptied_event", "emptied")}}** est envoyé.
- Si la réinitialisation de la position de lecture au début du média modifie réellement la position de lecture (c'est-à-dire qu'elle n'était pas déjà au début), un évènement **{{DOMxRef("HTMLMediaElement/timeupdate_event", "timeupdate")}}** est envoyé.
- Une fois que le média a été sélectionné et que le chargement est prêt à commencer, l'évènement **{{DOMxRef("HTMLMediaElement/loadstart_event", "loadstart")}}** est envoyé.
- À partir de ce moment, les évènements sont envoyés comme pour tout chargement de média.

## Exemples

Cet exemple trouve un élément HTML {{HTMLElement("video")}} dans le document et le réinitialise en appelant `load()`.

```js
const mediaElem = document.querySelector("video");
mediaElem.load();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
