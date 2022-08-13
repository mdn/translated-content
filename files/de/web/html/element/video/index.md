---
title: <video>
slug: Web/HTML/Element/video
tags:
  - Element
  - HTML
  - HTML eingebetteter Inhalt
  - HTML5
  - Medien
  - Multimedia
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/HTML/Element/video
---
{{HTMLRef}}

## Übersicht

Das **HTML `<video>` Element** wird verwendet, um Videos einzubetten. Es kann verschiedene Quellen für Videos enthalten, die im `src` Attribut oder im {{HTMLElement("source")}} Element repräsentiert werden. Der Webbrowser wählt dann die für ihn passende Quelle aus.

Eine Liste der unterstützten Formate ist unter [Unterstützte Formate der `<audio>` und `<video>` Elemente](/de/docs/Media_formats_supported_by_the_audio_and_video_elements "Media formats supported by the audio and video elements") zu finden.

## Anwendungscontext

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories) | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content), Formulierung, eingebetteter Inhalt. Wenn es ein {{htmlattrxref("controls", "video")}} Attribut hat: interaktiver Inhalt und konkreter Inhalt.                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                          | Wenn das Element ein {{htmlattrxref("src", "video")}} Attribut hat: kein oder mehrere {{HTMLElement("track")}} Elemente, gefolgt von transparentem Inhalt, der keine Medienelemente des Typs {{HTMLElement("audio")}} oder {{HTMLElement("video")}} enthält. Sonst: kein oder mehrere {{HTMLElement("source")}} Elemente, gefolgt von keinem oder mehreren {{HTMLElement("track")}} Elementen, gefolgt von transparentem Inhalt, der keine Medienelemente des Typs {{HTMLElement("audio")}} oder {{HTMLElement("video")}} enthält. |
| Tag Wegfall                                               | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Erlaubte Elternelemente                                   | Jedes Element, das eingebetteten Inhalt akzeptiert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| DOM interface                                             | {{domxref("HTMLVideoElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Attribute

Wie jedes andere HTML Element unterstützt diese Element die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("autoplay")}}
  - : Ein Boolean Attribut; wenn es gesetzt ist, beginnt das Video automatisch abzuspielen sobald es nicht mehr stoppen muss um weitere Daten zu laden.
- {{htmlattrdef("autobuffer")}} {{Non-standard_inline}} {{obsolete_inline}}
  - : Ein Boolean Attribut; wenn es gesetzt ist, beginnt das Video automatisch mit dem Buffering, sogar wenn die automatische Wiedergabe nicht aktiv ist. Diese Attribut sollte verwendet werden, wenn angenommen werden kann, dass der Benutzer das Video abspielen wird (zum Beispiel wenn der Benutzer die Seite aufruft, um das Video abzuspielen und nicht weil es auf der Seite anderen Inhalt gibt und auch ein eingebettetes Video). Das Video wird solange gepuffert, bis der Mediencache voll ist.

  > **Note:** **Implementierungshinweis:** obwohl es ein Teil der frühen Entwürfe der HTML5 Spezifikation ist, wurde das `autobuffer` Attribut aus späteren Veröffentlichungen entfernt. Es wurde aus Gecko 2.0 und anderen Webbrowsern entfernt, wobei es von manchen gar nicht erst implementiert wurde. Die Spezifikation definiert ein neues Attribut `preload` mit einer anderen Syntax, um das `autobuffer` Attribut zu ersetzen. {{bug(548523)}}
- {{htmlattrdef("buffered")}}
  - : Ein Attribut, das aus dem die bereits gepufferten Zeitspannen des Mediums gelesen werden können. Dieses Attribut enthält ein {{domxref("TimeRanges")}} Objekt.
- {{htmlattrdef("controls")}}
  - : Wenn dieses Attribut gesetzt ist, blendet Gecko Steuerelemente für die Wiedergabe ein. Darunter befinden sich Lautstärke, Spulen und pausieren/fortsetzen der Wiedergabe.
- {{htmlattrdef("crossorigin")}}
  - : Dieses aufgezählte Attribut gibt an, ob das Laden des dazugehörigen Bildes mit CORS erfolgen muss. [CORS-enabled Ressourcen](/de/docs/CORS_Enabled_Image "CORS_Enabled_Image") können im {{HTMLElement("canvas")}} Element _ohne Qualitätsabfall_ verwendet werden. Die erlaubten Werte sind:_ anonymous
    _ : Ein cross-origin Request (z. B. mit `Origin:` HTTP Header) wird ausgeführt aber es werden keine Credentials gesendet (z. B. kein Cookie, kein X.509 Zertifikat und keine HTTP Basic authentication werden gesendet). Wenn der Server keine Credentials an die origin site gibt (wenn der `Access-Control-Allow-Origin:` HTTP Header nicht gesetzt ist), wird das Bild _schlecht_ und die Verwendung ist eingeschränkt.
    - use-credentials
      - : Ein cross-origin Request (i.e. with `Origin:` HTTP header) wird ausgeführt und Credentials werden gesendet (z.B. ein Cookie, ein Zertifikat und eine HTTP Basic authentication wird ausgeführt). Wenn der Server keine Credentials an die origin site gibt (über den `Access-Control-Allow-Credentials:` HTTP Header), wird das Bild _schlecht_ sein und die Verwendung eingeschränkt.Wenn dieses Attribute nicht verwendet wir, wird die Ressource ohne einen CORS Request geladen (z. B. ohne den `Origin:` HTTP Header zu senden), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. Bei einem ungültigen Wert wird das Verhalten von **anonymous** übernommen. Weitere Informationen sind unter [CORS settings attributes](/de/docs/HTML/CORS_settings_attributes "CORS settings attributes") zu finden.
- {{htmlattrdef("height")}}
  - : Die Höhe des Wiedergabebereichs in CSS Pixel.
- {{htmlattrdef("loop")}}
  - : Ein Boolean-Attribut; wenn es gesetzt ist, wird das Video nach dem Ende zurück an den Anfang gespult
- {{htmlattrdef("muted")}}
  - : Ein Boolean-Attribut das eine Standardeinstellung für den Ton im Video angibt. Wenn es gesetzt ist, ist der Ton initial auf stumm geschaltet. Der Standardwert ist false. Das bedeutet, dass der Ton mit dem Video abgespielt wird
- {{htmlattrdef("played")}}
  - : Ein {{domxref("TimeRanges")}} Objekt das die abgespielten Abschnitte des Videos angibt.
- {{htmlattrdef("preload")}}
  - : Dieses aufgezählte Attribute ist ein Hinweis vom Autor darüber, wie laut ihm die möglichst beste User Experience erreicht werden kann. Es kann einen der folgenden Werte enthalten:\* none: der Autor meint, dass der Benutzer das Video nicht anfragen wird, oder dass der Server seinen Datenverkehr minimieren will; das Video sollte nicht gecached werden
    - metadata: der Autor meint, dass das Laden der Metadaten (z.B. Länge) vertretbar ist, auch wenn der Benutzer das Video nicht anfragen wird
    - auto: die Bedürfnisse des Benutzers haben Priorität; bei Bedarf kann das gesamte Video heruntergeladen werden, auch wenn es der Benutzer womöglich nicht vollständig ansieht
    - ein _leerer String_: ein Synonym für den Wert autoWenn diese Attribut nicht gesetzt ist, wird der Standardwert vom Webbrowser verwendet. Jeder Webbrowser kann seinen eigenen Standardwert auswählen, obwohl die Spezifikation den Wert metadata empfiehlt.

  > **Note:** **Verwendungshinweise:\*** Das `autoplay`-Attribut hat Vorrang gegenüber diesem Attribute, denn wenn das Video automatisch abgespielt werden soll, muss der Webbrowser es laden. Das Setzen der Attribute `autoplay` und `preload` wird von der Spezifikation erlaubt.
      >
      > - Der Webbrowser wird von der Spezifikation nicht gezwungen den Wert zu befolgen. Es ist ein reiner Hinweis.
      >
- {{htmlattrdef("poster")}}
  - : Die URL eines Vorschaubildes, das dargestellt wird bis der Benutzer das Video abspielt oder spult. Wenn diese Attribut nicht angegeben wird, wird nichts dargestellt bis der erste Frame des Videos verfügbar ist. Der erste Frame wird dann als Vorschaubild dargestellt.
- {{htmlattrdef("src")}}
  - : Die URL des Videos, das eingebettet werden soll. Diese Attribut ist optional. Stattdessen kann das {{HTMLElement("source")}}-Element innerhalb des video-Blocks für die Angabe des einzubettenden Videos verwendet werden.
- {{htmlattrdef("width")}}
  - : Die Breite des Wiedergabebereichs in CSS Pixel.

## Events

Das `<video>`-Element kann verschiedene [Events](/de/docs/Web/Guide/Events/Media_events) auslösen.

## Beispiele

```html
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Sorry, your browser doesn't support embedded videos,
  but don't worry, you can <a href="videofile.ogg">download it</a>
  and watch it with your favorite video player!
</video>

<!-- Video with subtitles -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska">
</video>
```

Das erste Beispiel spielt ein Video ab, sobald genügend Frames geladen worden sind, damit es keine Unterbrechungen beim Abspielen gibt. Das Bild "posterimage.jpg" wird dargestellt, bis das Video abgespielt wird.

Das zweite Beispiel erlaubt dem Benutzer die Auswahl eines Untertitels.

## Serverunterstützung

Wenn der MIME Type für das Video auf dem Server nicht korrekt konfiguriert ist, wird das Video nicht angezeigt oder eine graue Box mit einem X, falls JavaScript aktiviert ist.

Wenn die Videos als Ogg Theora bereitgestellt werden sollen, kann beim Apache Web Server die Dateiendung der Videos (".ogm", ".ogv", oder ".ogg" sind die gängigsten) zum MIME Type "video/ogg" über die "mime.types" Datei in "/etc/apache" oder über die "AddType" Konfigurationsdirektive in httpd.conf abgegeben werden.

    AddType video/ogg .ogm
    AddType video/ogg .ogv
    AddType video/ogg .ogg

Wenn die Videos als WebM bereitgestellt werden sollen, kann beim Apache Web Server die Dateiendung der Videos (".webm" ist die gängigste) zum MIME Type "video/webm" über die "mime.types" Datei in "/etc/apache" oder über die "AddType" Konfigurationsdirektive in httpd.conf abgegeben werden.

    AddType video/webm .webm

Ihr Web Host bietet möglicherweise eine einfache Schnittstellun zur Konfiguration der MIME Typen, bis es ein globales Update gibt.

## DOM Interface

Dieses Element implementiert das [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement "DOM/HTMLVideoElementInterface") Interface.

## Webbrowserkompatibilität

{{Compat}}

## Siehe auch

- [Media formats supported by the audio and video elements](/de/docs/Media_formats_supported_by_the_audio_and_video_elements "Media formats supported by the audio and video elements")
- {{htmlelement("audio")}}
- [Using HTML5 audio and video](/de/docs/Using_HTML5_audio_and_video "Using audio and video in Firefox")
- [Manipulating video using canvas](/de/docs/Manipulating_video_using_canvas "Manipulating video using canvas")
- [`nsIDOMHTMLMediaElement`](/de/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement "NsIDOMHTMLMediaElement")
- [TinyVid](http://tinyvid.tv/) - Beispiele zur Verwendung von ogg Dateien in HTML5.
- [The `video` element](http://www.whatwg.org/specs/web-apps/current-work/#video) (HTML5 Spezifikation)
- [Configuring servers for Ogg media](/de/docs/Configuring_servers_for_Ogg_media "Configuring servers for Ogg media")
- [The state of HTML5 video](http://www.jwplayer.com/html5/)
