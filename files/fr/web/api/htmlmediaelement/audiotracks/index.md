---
title: HTMLMediaElement.audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
---

{{APIRef("HTML DOM")}}

La propriété **`audioTracks`** est une propriété en lecture seule rattachée à l'interface [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) qui renvoie un objet [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList) répertoriant tous les objets [`AudioTrack`](/fr/docs/Web/API/AudioTrack) représentant les pistes audio de l'élément multimédia.

L'élément multimédia peut être soit un élément [`<audio>`](/fr/docs/Web/HTML/Element/audio) ou un élément [`<video>`](/fr/docs/Web/HTML/Element/video).

La liste renvoyée est dynamique&nbsp;; c'est-à-dire que lorsque des pistes sont ajoutées et supprimées de l'élément multimédia, le contenu de la liste change dynamiquement. Une fois que vous avez une référence à la liste, vous pouvez surveiller les modifications pour détecter l'ajout de nouvelles pistes audio ou la suppression de pistes existantes. Vous pouvez consulter les [gestionnaires d'évènements](/fr/docs/Web/API/AudioTrackList#évènements) associés à [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList) pour en savoir plus sur les modifications apportées à la liste des pistes d'un élément multimédia.

## Syntaxe

```js
let audioTracks = mediaElement.audioTracks;
```

### Valeur

Un objet [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList) représente la liste des pistes audio incluses dans l'élément multimédia. La liste des pistes est accessible en notation matricielle ou en utilisant la méthode [`getTrackById()`](/fr/docs/Web/API/AudioTrackList/getTrackById) de l'objet.

Chaque piste est représentée par un objet [`AudioTrack`](/fr/docs/Web/API/AudioTrack) qui fournit des informations sur la piste.

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
let video = document.getElementById("video");

for (let i = 0; i < video.audioTracks.length; i += 1) {
  video.audioTracks[i].enabled = false;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement).
- [`<audio>`](/fr/docs/Web/HTML/Element/audio) et [`<video>`](/fr/docs/Web/HTML/Element/video)
- [`AudioTrack`](/fr/docs/Web/API/AudioTrack) et [`AudioTrackList`](/fr/docs/Web/API/AudioTrackList)
