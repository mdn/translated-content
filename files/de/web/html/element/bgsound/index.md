---
title: <bgsound>
slug: Web/HTML/Element/bgsound
translation_of: Web/HTML/Element/bgsound
---
{{non-standard_header}}

## Zusammenfassung

Das HTML Hintergrund Sound-Element (\<bgsound>) ist ein Internet Explorer-Element, was ein Hintergrund-Sound mit einer Webseite verknüpft.

> **Note:** **Benutze dies nicht!:** Wenn du nur eine Audiodatei einbetten willst, solltest du {{HTMLElement("audio")}} benutzen.

## Attribute

- {{htmlattrdef("balance")}}
  - : Dieses Attribut definiert den Lautstärkeunterschied(zwischen -10,000 und +10,000)zwischen den beiden Lautsprechern.
- {{htmlattrdef("loop")}}
  - : Dieses Attribut gibt die Nummer der Anzahl an, wie oft ein Sound abgespielt werden soll. Du kannst entweder eine Nummer angeben oder "infinite" schreiben, damit der Sound unendlich angespielt wird.

- {{htmlattrdef("src")}}
  - : Dieses Attribut gibt die URL von dem Sound an, der gespielt werden soll. Die Datei muss eines dieser Formate haben: .wav, .au oder .mid.
- {{htmlattrdef("volume")}}
  - : Dieses attribut gibt an mit einer Nummer zwischen -10,000 and 0, die die Lautstärke angibt.

## Beispiel

```html
<bgsound src="sound1.mid">

<bgsound src="sound2.au" loop="infinite">
```

## Notes

Die gleiche Funktionalität kann erreicht werden in einigen Versionen von Netscape, wenn man den \<embed>-Tag benutzt, der dann einen Audio-Player auruft.

Du kannst \<bgsound> mit einem Selbstschließendem-Tag(Also so:`<bgsound />`) schreiben. Allerdings ist dies nicht Teil des Standarts, wenn ihr XHTML benutzt, wird es nicht valide sein.

## Browser-Kompatiblität

{{Compat}}

\[1] Bis zur Firefox-Version 22, selbst wenn es nicht unterstützt wird, hat Gecko es interpretiert wie {{domxref("HTMLSpanElement")}}. Dies wurde gefixt und nun wird es wie {{domxref("HTMLUnknownElement")}} interpretiert, wie es eigentlich sein sollte.

## Siehe auch

- Das {{htmlelement("audio")}}, was das Standart-Element ist bei eingebetteten Audio-Dokumenten.

{{HTMLRef}}
