---
title: "HTMLMediaElement : propriété preservesPitch"
short-title: preservesPitch
slug: Web/API/HTMLMediaElement/preservesPitch
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

La propriété **`preservesPitch`** de l'interface {{DOMxRef("HTMLMediaElement")}} détermine si le navigateur doit ou non ajuster la hauteur du son pour compenser les modifications de la vitesse de lecture effectuées en définissant {{DOMxRef("HTMLMediaElement.playbackRate")}}.

## Valeur

Une valeur booléenne, par défaut `true`.

## Exemples

### Définir la propriété `preservesPitch`

Dans cet exemple, nous avons un élément HTML {{HTMLElement("audio")}}, un contrôle de plage qui ajuste la vitesse de lecture, et une case à cocher qui définit `preservesPitch`.

Essayez de lire l'audio, puis d'ajuster la vitesse de lecture, puis d'activer et de désactiver la case à cocher.

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>

<div>
  <label for="rate">Ajuster la vitesse de lecture&nbsp;:</label>
  <input id="rate" type="range" min="0.25" max="3" step="0.05" value="1" />
</div>

<div>
  <label for="pitch">Conserver la hauteur&nbsp;:</label>
  <input type="checkbox" id="pitch" name="pitch" checked />
</div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const audio = document.querySelector("audio");
document.getElementById("rate").addEventListener("change", (e) => {
  audio.playbackRate = e.target.value;
});
document.getElementById("pitch").addEventListener("change", (e) => {
  audio.preservesPitch = e.target.checked;
});
```

{{EmbedLiveSample("Définir la propriété `preservesPitch`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLMediaElement.playbackRate")}}
- [Explication de la propriété `playbackRate` dans Web Audio](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained)
