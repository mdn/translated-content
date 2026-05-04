---
title: "HTMLMediaElement : propriété textTracks"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
l10n:
  sourceCommit: 202a07cba14516ebf29c303a4cd17c52f40b8bbf
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`textTracks`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un objet {{DOMxRef("TextTrackList")}} répertoriant tous les objets {{DOMxRef("TextTrack")}} représentant les pistes textuelles de l'élément multimédia, dans le même ordre que dans la liste des pistes textuelles.

Vous pouvez détecter lorsque des pistes sont ajoutées ou supprimées d'un élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}} en utilisant les événements `addtrack` et `removetrack`. Cependant, ces événements ne sont pas envoyés directement à l'élément multimédia lui-même. Ils sont envoyés à l'objet de liste de pistes de l'élément {{DOMxRef("HTMLMediaElement")}} correspondant au type de piste ajouté à l'élément.

La liste retournée est _dynamique_&nbsp;; c'est-à-dire que, lorsque des pistes sont ajoutées ou supprimées de l'élément multimédia, le contenu de la liste change dynamiquement. Une fois que vous avez une référence à la liste, vous pouvez la surveiller pour détecter quand de nouvelles pistes textuelles sont ajoutées ou lorsque des pistes existantes sont supprimées.

Voir [les évènements de `TextTrackList`](/fr/docs/Web/API/TextTrackList#évènements) pour en savoir plus sur la surveillance des modifications de la liste des pistes d'un élément multimédia.

## Valeur

Un objet {{DOMxRef("TextTrackList")}} représentant la liste des pistes textuelles incluses dans l'élément multimédia. La liste des pistes peut être consultée en utilisant `textTracks[n]` pour obtenir la n-ième piste textuelle de la liste des pistes de l'objet, ou en utilisant la méthode {{DOMxRef("TextTrackList/getTrackById", "textTracks.getTrackById()")}}.

Chaque piste est représentée par un objet {{DOMxRef("TextTrack")}} qui fournit des informations sur la piste.

## Exemples

Nous commençons avec une {{HTMLElement("video")}} qui contient plusieurs enfants {{HTMLElement("track")}}&nbsp;:

```html
<video controls>
  <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-en.vtt"
    srclang="en"
    label="English" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-de.vtt"
    srclang="de"
    label="Deutsch" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-es.vtt"
    srclang="es"
    label="Español" />
</video>
```

La propriété `HTMLMediaElement.textTracks` retourne un objet `TextTrackList` que nous pouvons parcourir. Ici, nous définissons les trois pistes pour qu'elles s'affichent simultanément.

```js
const tracks = document.querySelector("video").textTracks;

for (const track of tracks) {
  track.mode = "showing";
}
```

{{EmbedLiveSample("Exemples", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.textTracks`
- Les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- Les interfaces {{DOMxRef("AudioTrack")}}, {{DOMxRef("AudioTrackList")}}
- Les interfaces {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}
- Les évènements de `AudioTrackList`&nbsp;: {{DOMxRef("AudioTrackList/addtrack_event", "addtrack")}}, {{DOMxRef("AudioTrackList/change_event", "change")}}, {{DOMxRef("AudioTrackList/removetrack_event", "removetrack")}}
- Les évènements de `VideoTrackList`&nbsp;: {{DOMxRef("VideoTrackList/addtrack_event", "addtrack")}}, {{DOMxRef("VideoTrackList/change_event", "change")}}, {{DOMxRef("VideoTrackList/removetrack_event", "removetrack")}}
