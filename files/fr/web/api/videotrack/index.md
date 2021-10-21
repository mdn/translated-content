---
title: VideoTrack
slug: Web/API/VideoTrack
tags:
  - HTML
  - HTML DOM
  - Interface
  - Media
  - Reference
  - TopicStub
  - Video
  - VideoTrack
  - track
translation_of: Web/API/VideoTrack
---
{{APIRef("HTML DOM")}}

L'interface {{domxref("VideoTrack")}} représente une seule piste vidéo d'un élément {{HTMLElement("video")}}. L'utilisation la plus courante à un objet `VideoTrack` est de basculer sa propriété {{domxref("VideoTrack.selected", "selected")}} afin d'en faire la piste vidéo active pour l'élément {{HTMLElement("video")}}.

## Propriétés

- {{domxref("VideoTrack.selected", "selected")}}
  - : Une valeur booléenne qui contrôle si la piste vidéo est active ou non. Seule une seule piste vidéo peut être active à un moment donné, donc la définition de cette propriété sur `true` pour une piste pendant qu'une autre piste est active rendra cette autre piste inactive.
- {{domxref("VideoTrack.id", "id")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMString")}} qui identifie de manière unique la piste dans le média. Cet identifiant peut être utilisé pour localiser une piste spécifique dans une liste de pistes vidéo en appelant {{domxref("VideoTrackList.getTrackById()")}}. L'identifiant peut également être utilisé comme partie fragment de l'URL si le support prend en charge la recherche par fragment de support conformément à la [spécification UR de fragments de média](https://www.w3.org/TR/media-frags/).
- {{domxref("VideoTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMString")}} spécifiant la catégorie dans laquelle appartient la piste. Par exemple, la piste vidéo principale aurait un `type` `"principale"`.
- {{domxref("VideoTrack.label", "label")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMString")}} fournissant une étiquette lisible par l'homme pour la piste. Par exemple, une piste dont le `type` est `"signe"` peut avoir l'`étiquette` `"Une interprétation en langue des signes"`. Cette chaîne est vide si aucune étiquette n'est fournie.
- {{domxref("VideoTrack.language", "language")}} {{ReadOnlyInline}}
  - : Un {{domxref("DOMString")}} spécifiant la langue principale de la piste vidéo, ou une chaîne vide si elle est inconnue. La langue est spécifié en tant que code de langue BCP 47 ({{RFC(5646)}}), tel que `"en-US"` ou `"pt-BR"`.
- {{domxref("VideoTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : Le {{domxref("SourceBuffer")}} qui a créé la piste. Renvoie null si la piste n'a pas été créée par un {{domxref("SourceBuffer")}} ou le {{domxref("SourceBuffer")}} a été supprimé de l'attribut {{domxref("MediaSource.sourceBuffers")}} de sa source média parent.

## Notes d'utilisation

Pour obtenir un `VideoTrack` pour un élément multimédia donné, utilisez la propriété {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}}, qui renvoie un objet {{domxref("VideoTrackList")}} à partir duquel vous pouvez obtenir les pistes individuelles contenues dans le média:

```js
var el = document.querySelector("video");
var tracks = el.videoTracks;
```

Vous pouvez ensuite accéder aux pistes individuelles du média en utilisant soit la syntaxe de tableau, soit des fonctions telles que {{jsxref("Array.forEach", "forEach()")}}.

Ce premier exemple obtient la première piste vidéo sur le média:

```js
var firstTrack = tracks[0];
```

L'exemple suivant parcourt toutes les pistes vidéo du média, activant la première piste vidéo qui est dans la langue préférée de l'utilisateur (tirée d'une variable `userLanguage`).

```js
for (var i = 0; i < tracks.length; i++) {
  if (tracks[i].language === userLanguage) {
    tracks[i].selected = true;
    break;
  }
});
```

Le {{domxref("VideoTrack.language", "language")}} est au format standard ({{RFC(5646)}}). Pour l'anglais américain, ce serait `"en-US"`, par exemple.

## Spécifications

| Spécification                                                                | Statut                           | Commentaire |
| ---------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#videotrack', 'VideoTrack')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.VideoTrack")}}
