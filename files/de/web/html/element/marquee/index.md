---
title: <marquee>
slug: Web/HTML/Element/marquee
tags:
  - Element
  - HTML
  - Referenz
  - Veraltet
  - Web
  - marquee
translation_of: Web/HTML/Element/marquee
---
{{HTMLRef}}{{obsolete_header}}

Das HTML Element \<marquee> wird dazu benutzt um ein scrollendes Textfeld einzufügen. Sie können mithilfe der Attribute kontrollieren, was passiert, wenn der Text das Ende des Textfeldes erreicht.

> **Warning:** Das `<marquee>` Element ist **veraltet** und muss bzw. soll nicht mehr verwendet werden. Obwohl manche Browser es immernoch unterstützen, ist es nicht erforderlich. Es wird davon abgeraten, dieses Tag zu benutzen, da es das schlimmste ist, was Sie ihren Besuchern antun können.

## Attribute

- {{htmlattrdef("behavior")}}
  - : Bestimmt, wie sich der Text innerhalb des marquee-tags bewegt. Mögliche Optionen send "scroll", "slide" und "alternate". Der Standardwert ist "scroll" und wird automatisch benutzt, falls kein Wert definiert wird.
- {{htmlattrdef("bgcolor")}}
  - : Bestimmt die Hintergrundfarbe mittels einer der Standardfarben, dem RGB- bzw. dem Hexadezimalwert.
- {{htmlattrdef("direction")}}
  - : Legt die Bewegungsrichtung innerhalb des marquee-tags fest. Mögliche Optionen sind "left", "right", "up" und "down". Der Standardwert ist "left" und wird automatisch benutzt, falls kein Wert definiert wird.
- {{htmlattrdef("height")}}
  - : Definiert die Höhe in Pixel- oder Prozentwerten.
- {{htmlattrdef("hspace")}}
  - : Definiert den horizontalen Außenabstand.
- {{htmlattrdef("loop")}}
  - : Definiert, wie oft die Aktion (scroll, slide, alternate) ausgeführt wird. Der Standardwert ist -1, was bedeutet, dass der Inhalt des Marquee-tags in Dauerschleife dargestellt wird.
- {{htmlattrdef("scrollamount")}}
  - : Definiert den Wert eines Intervalls in Pixel. Der Standardwert beträgt 6.
- {{htmlattrdef("scrolldelay")}}
  - : Definiert den Intervall zwischen jeder Bewegung in Millisekunden. Der Standardwert ist 85. **Merke:** Jeder Wert, der kleiner als 60 ist, wird ignoriert und der Wert 60 wird stattdessen verwendet, außer "truespeed" ist definiert.
- {{htmlattrdef("truespeed")}}
  - : Standardmäßig werden scrolldelays, die kleiner als 60 sind ignoriert. Wenn "truespeed" verwendet wird, ist dies jedoch nicht der Fall.
- {{htmlattrdef("vspace")}}
  - : Definiert den vertikalen Außenabstand in Pixel- oder Prozentwerten.
- {{htmlattrdef("width")}}
  - : Definiert die Breite in Pixel- oder Prozentwerten.

## Event-Handler

- {{htmlattrdef("onbounce")}}
  - : Startet, wenn der Text das Ende des zuvor definierten Marquee-tags erreicht hat. Diese Option ist jedoch nur verfügbar, wenn das Attribut "alternate" als "behavior" verwendet wird.
- {{htmlattrdef("onfinish")}}
  - : Startet, wenn das Attribut "loop" abgeschlossen ist. Diese Option ist jedoch nur verfügbar, wenn für das Attribut "loop" ein größerer Wert als 0 gewählt wurde.
- {{htmlattrdef("onstart")}}
  - : Startet gleichzeitig mit dem Marquee-tag.

## Methoden

- start
  - : Startet das Marquee-tag.
- stop
  - : Stoppt das Marquee-tag.

## Beispiele

```html
<marquee>Dieser Text bewegt sich von rechts nach links</marquee>

<marquee direction="up">Dieser Text bewegt sich von unten nach oben</marquee>

<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
  <marquee behavior="alternate">
    Dieser Text prallt am Rand ab.
  </marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Erklärung                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'obsolete.html#the-marquee-element-2', '&lt;marquee&gt;')}} | {{Spec2('HTML WHATWG')}} | Wird veraltet zugunsten von CSS dargestellt, jedoch muss die erwartete "behavior" für die umgekehrte Kompatibilität festgelegt werden. |
| {{SpecName('HTML5 W3C', 'obsolete.html#the-marquee-element-0', '&lt;marquee&gt;')}} | {{Spec2('HTML5 W3C')}}     | Wird veraltet zugunsten von CSS dargestellt, jedoch muss die erwartete "behavior" für die umgekehrte Kompatibilität festgelegt werden. |

## Browser Kompatibiltät

{{Compat}}
