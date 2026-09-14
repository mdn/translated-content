---
title: "HTMLMediaElement : méthode addTextTrack()"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

La méthode **`addTextTrack()`** de l'interface {{DOMxRef("HTMLMediaElement")}} crée un nouvel objet {{DOMxRef("TextTrack")}} et l'ajoute à l'élément média. Elle déclenche un évènement {{DOMxRef("TextTrackList/addtrack_event", "addtrack")}} sur la propriété {{DOMxRef("HTMLMediaElement/textTracks", "textTracks")}} de cet élément média. Cette méthode ne peut pas être utilisée sur une interface {{DOMxRef("TextTrackList")}}, uniquement sur un {{DOMxRef("HTMLMediaElement")}}.

## Syntaxe

```js-nolint
addTextTrack(kind)
addTextTrack(kind, label)
addTextTrack(kind, label, language)
```

### Paramètres

- `kind`
  - : Une chaîne de caractères représentant la propriété {{DOMxRef("TextTrack.kind")}} (`subtitles`, `captions`, `descriptions`, `chapters` ou `metadata`).
- `label`
  - : Une chaîne de caractères représentant la propriété {{DOMxRef("TextTrack.label")}}.
- `language`
  - : Une chaîne de caractères représentant la propriété {{DOMxRef("TextTrack.language")}}.

### Valeur de retour

Le nouvel objet {{DOMxRef("TextTrack")}} créé.

### Exceptions

Aucune.

## Exemples

Cet exemple ajoute un nouvel objet {{DOMxRef("TextTrack")}} avec la propriété `kind` définie sur `"subtitles"`, et ajoute un nouvel objet {{DOMxRef("VTTCue")}} à celui-ci.

```js
const video = document.querySelector("video");
const nouvellePiste = video.addTextTrack("subtitles");
nouvellePiste.addCue(new VTTCue(3, 6, "Bonjour le monde !"));
console.log(nouvellePiste.cues[0].text);
// "Bonjour le monde !"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("TextTrack")}}
- [L'API WebVTT](/fr/docs/Web/API/WebVTT_API)
- [Technologies multimédias Web](/fr/docs/Web/Media)
- Apprendre&nbsp;: [Contenu vidéo et audio](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Utiliser l'API Web Audio](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
