---
title: "HTMLMediaElement : propriété videoTracks"
short-title: videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`videoTracks`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un objet {{DOMxRef("VideoTrackList")}} répertoriant tous les objets {{DOMxRef("VideoTrack")}} représentant les pistes vidéo de l'élément multimédia.

La liste retournée est _dynamique_&nbsp;; c'est-à-dire que, à mesure que des pistes sont ajoutées ou supprimées de l'élément multimédia, le contenu de la liste change dynamiquement. Une fois que vous avez une référence à la liste, vous pouvez la surveiller pour détecter quand de nouvelles pistes vidéo sont ajoutées ou lorsque des pistes existantes sont supprimées. Voir [les évènements de `VideoTrackList`](/fr/docs/Web/API/VideoTrackList#évènements) pour en savoir plus sur la surveillance des modifications de la liste des pistes d'un élément multimédia.

## Valeur

Un objet {{DOMxRef("VideoTrackList")}} représentant la liste des pistes vidéo incluses dans l'élément multimédia. La liste des pistes peut être consultée en utilisant la notation par tableau, ou en utilisant la méthode {{DOMxRef("VideoTrackList.getTrackById", "getTrackById()")}} de l'objet.

Chaque piste est représentée par un objet {{DOMxRef("VideoTrack")}} qui fournit des informations sur la piste.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.videoTracks`
- L'élément HTML {{HTMLElement("video")}}
- Les interfaces {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}
