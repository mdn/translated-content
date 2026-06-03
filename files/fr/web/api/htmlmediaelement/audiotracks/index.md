---
title: "HTMLMediaElement : propriété audioTracks"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`audioTracks`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un objet {{DOMxRef("AudioTrackList")}} répertoriant tous les objets {{DOMxRef("AudioTrack")}} représentant les pistes audio de l'élément multimédia.

L'élément multimédia peut être soit un élément HTML {{HTMLElement("audio")}} ou un élément {{HTMLElement("video")}}.

La liste renvoyée est _dynamique_&nbsp;; c'est-à-dire que lorsque des pistes sont ajoutées et supprimées de l'élément multimédia, le contenu de la liste change dynamiquement. Une fois que vous avez une référence à la liste, vous pouvez surveiller les modifications pour détecter l'ajout de nouvelles pistes audio ou la suppression de pistes existantes. Vous pouvez consulter les [gestionnaires d'évènements](/fr/docs/Web/API/AudioTrackList#évènements) associés à {{DOMxRef("AudioTrackList")}} pour en savoir plus sur les modifications apportées à la liste des pistes d'un élément multimédia.

## Valeur

Un objet {{DOMxRef("AudioTrackList")}} représente la liste des pistes audio incluses dans l'élément multimédia. La liste des pistes est accessible en notation matricielle ou en utilisant la méthode {{DOMxRef("AudioTrackList.getTrackById", "getTrackById()")}} de l'objet.

Chaque piste est représentée par un objet {{DOMxRef("AudioTrack")}} qui fournit des informations sur la piste.

## Exemples

Dans cet exemple, toutes les pistes audio d'un élément donné sont coupées.

### HTML

Le fragment HTML contient l'élément média en question.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

Le code JavaScript gère la mise en sourdine des pistes audio de l'élément vidéo.

```js
const video = document.getElementById("video");

for (const track of video.audioTracks) {
  track.enabled = false;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.audioTracks`
- Les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- Les interfaces {{DOMxRef("AudioTrack")}}, {{DOMxRef("AudioTrackList")}}
