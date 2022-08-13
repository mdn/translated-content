---
title: AudioTrack
slug: Web/API/AudioTrack
translation_of: Web/API/AudioTrack
---
{{APIRef("HTML DOM")}}

Das **`AudioTrack`** Interface stellt einen einzelnen Audiotrack aus einem der HTML-Medienelemente {{HTMLElement("audio")}} oder {{HTMLElement("video")}} dar. Die häufigste Verwendung für ein `AudioTrack` Objekt ist das (De-)Aktivieren seiner Eigenschaft {{domxref("AudioTrack.enabled", "enabled")}} um den Track stummzuschalten.

## Eigenschaften

- {{domxref("AudioTrack.enabled", "enabled")}}
  - : Ein Boolescher Wert, der kontrolliert ob der Sound für den Audiotrack aktiviert ist. Steht dieser Wert auf `false`, ist der Ton stummgeschaltet.
- {{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}
  - : Eine {{domxref("DOMString")}}, die den Track eindeutig innerhalb des Mediums identifiziert. Diese ID kann genutzt werden, um einen bestimmten Track auf einer Audio-Track-Liste durch Aufruf von {{domxref("AudioTrackList.getTrackById()")}} zu finden. Die ID kann auch als Fragment der URL genutzt werden, wenn das Medium die Suche per Medienfragment laut [Media Fragments URI-Spezifikation](https://www.w3.org/TR/media-frags/) unterstützt.
- {{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMString")}}, das bestimmt zu welcher Kategorie ein Track gehört. Der Haupt-Audiotrack hätte bspw. als `kind` die Eigenschaft `"main"`.
- {{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMString")}}, das ein visuelles Label für den Track anzeigt. Z.B. hätte ein Audiokommentar-Track für einen Film als `label` `"Kommentar mit Regisseur Max Mustermann und den Schauspielern XYZ und ZYX."` Dieser String bleibt leer, wenn kein Label angegeben wurde.
- {{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} specifying the audio track's primary language, or an empty string if unknown. The language is specified as a BCP 47 ({{RFC(5646)}}) language code, such as `"en-US"` or `"pt-BR"`.
- {{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : The {{domxref("SourceBuffer")}} that created the track. Returns null if the track was not created by a {{domxref("SourceBuffer")}} or the {{domxref("SourceBuffer")}} has been removed from the {{domxref("MediaSource.sourceBuffers")}} attribute of its parent media source.

## Usage notes

To get an `AudioTrack` for a given media element, use the element's {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} property, which returns an {{domxref("AudioTrackList")}} object from which you can get the individual tracks contained in the media:

```js
var el = document.querySelector("video");
var tracks = el.audioTracks;
```

You can then access the media's individual tracks using either array syntax or functions such as {{jsxref("Array.forEach", "forEach()")}}.

This first example gets the first audio track on the media:

```js
var firstTrack = tracks[0];
```

The next example scans through all of the media's audio tracks, enabling any that are in the user's preferred language (taken from a variable `userLanguage`) and disabling any others.

```js
tracks.forEach(function(track) {
  if (track.language === userLanguage) {
    track.enabled = true;
  } else {
    track.enabled = false;
  }
});
```

The {{domxref("AudioTrack.language", "language")}} is in standard ({{RFC(5646)}}) format. For US English, this would be `"en-US"`, for example.

## Example

{{page("/en-US/docs/Web/API/AudioTrack/label", "Example")}}

## Specifications

| Specification                                                                                            | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'media.html#audiotrack', 'AudioTrack')}}                 | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#audiotrack', 'AudioTrack')}} | {{Spec2('HTML5 W3C')}}     |         |

## Browser compatibility

{{Compat("api.AudioTrack")}}
