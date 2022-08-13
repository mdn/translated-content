---
title: <frame>
slug: Web/HTML/Element/Frame
translation_of: Web/HTML/Element/frame
---
{{HTMLRef}}{{Deprecated_header}}

`<frame>` ist ein HTML Element dass einen bestimmten Bereich definiert, indem ein anderes HTML Dokument angezeigt werden kann. Ein Frame sollte innerhalb eines {{HTMLElement("frameset")}}s verwendet werden.

Es wird davon abgeraten das `<frame>` Element zu verwenden, da es Nachteile wie Performance-Probleme hat und nicht von Screen Readern unterstützt wird. Anstatt des `<frame>` Elements sollte man einen {{HTMLElement("iframe")}} bevorzugen.

## Attribute

Wie alle HTML Elemente, unterstütz dieses Element die [globalen Attribute](/de/docs/HTML/Global_attributes).

- {{htmlattrdef("src")}}
  - : Dieses Attribut gibt an welches Dokument im Frame angezeigt wird.
- {{htmlattrdef("name")}}
  - : Dieses Attribut wird für die Kennzeichnung von Frames verwendet. Ohne die Angabe einer Kennzeichnung öffnet sich ein Link in dem Frame, in dem er sich befindet – dem übergeordneten Frame. Für mehr Informationen siehe das {{htmlattrxref("target","a")}} Attribut.
- {{htmlattrdef("noresize")}}
  - : Dieses Attribut verhindert das Anpassen der Größe des Frames durch Benutzer.
- {{htmlattrdef("scrolling")}}
  - : Dieses Attribut gibt an ob eine Scrollbar angezeigt werden solle. Wenn das Attribut nicht gesetzt ist, fügt der Browser eine Scrollbar hinzu, wenn sie benötigt wird. Es gibt zwei Optionen: `yes` zeigt die Scrollbar an, auch wenn sie nicht notwendig ist und `no` bei der keine Scrollbar angezeigt wird auch _wenn_ sie benötigt werden würde.
- {{htmlattrdef("marginheight")}}
  - : Dieses Attribut gibt die Höhe des margin zwischen Frames an.
- {{htmlattrdef("marginwidth")}}
  - : Dieses Attribut gibt die Breite des margin zwischen Frames an.
- {{htmlattrdef("frameborder")}}
  - : Dieses Attribut gibt die Möglichkeit einen Rahmen für das Frame zu definieren.

## Beispiel

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
</frameset>
```

## Browser Kompatibilität

{{Compat("html.elements.frame")}}

## Siehe auch

- {{HTMLElement("frameset")}}
- {{HTMLElement("iframe")}}
