---
title: <track>
slug: Web/HTML/Element/track
---

{{HTMLSidebar}}

O **elemento HTML `<track>` **é usado como filho dos elementos de mídia{{HTMLElement("audio")}} e {{HTMLElement("video")}}. Ele permite que você especifique faixas de texto temporizadas (ou dados baseados em tempo), por exemplo, para lidar automaticamente com legendas. As faixas são formatadas em [WebVTT format](/pt-BR/docs/Web/API/Web_Video_Text_Tracks_Format) (arquivos `.vtt`) — Web Video Text Tracks or [Timed Text Markup Language (TTML).](https://w3c.github.io/ttml2/index.html)

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categorias de conteúdo</th>
      <td>Nenhuma</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>Nenhum, é um {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>
        Como é um elemento vazio, a tag inicial deve estar presente e a tag
        final não deve estar presente.
      </td>
    </tr>
    <tr>
      <th scope="row">Permite Parentes</th>
      <td>
        Um elemento de mídia, antes de qualquer
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >conteúdo de fluxo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Funções ARIA permitidas</th>
      <td>Nenhum</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("default")}}
  - : This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.
- {{htmlattrdef("kind")}}

  - : How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.) The following keywords are allowed:

    - `subtitles`

      - Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.
      - Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.

    - `captions`

      - Closed captions provide a transcription and possibly a translation of audio.
      - It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
      - Suitable for users who are deaf or when the sound is muted.

    - `descriptions`

      - Textual description of the video content.
      - Suitable for users who are blind or where the video cannot be seen.

    - `chapters`

      - Chapter titles are intended to be used when the user is navigating the media resource.

    - `metadata`

      - Tracks used by scripts. Not visible to the user.

- {{htmlattrdef("label")}}
  - : A user-readable title of the text track which is used by the browser when listing available text tracks.
- {{htmlattrdef("src")}}
  - : Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the {{HTMLElement("audio")}} or {{HTMLElement("video")}} parent element of the `track` element has a [`crossorigin`](/pt-BR/docs/Web/HTML/CORS_settings_attributes) attribute.
- {{htmlattrdef("srclang")}}
  - : Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to `subtitles`, then `srclang` must be defined.

## Usage notes

The type of data that `track` adds to the media is set in the `kind` attribute, which can take values of `subtitles`, `captions`, `descriptions`, `chapters` or `metadata`. The element points to a source file containing timed text that the browser exposes when the user requests additional data.

A `media` element cannot have more than one `track` with the same `kind`, `srclang`, and `label`.

## Examples

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  ...
</video>
```

## Specifications

| Specification                                                                           | Status                   | Comment            |
| --------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG','embedded-content.html#the-track-element','track element')}}   | {{Spec2('HTML WHATWG')}} |                    |
| {{SpecName("HTML5 W3C", "embedded-content-0.html#the-track-element", "track element")}} | {{Spec2("HTML5 W3C")}}   | Initial definition |

## Compatibilidade com navegadores

{{Compat("html.elements.track")}}

## See also

- [WebVTT text track format](/pt-BR/docs/HTML/WebVTT)
