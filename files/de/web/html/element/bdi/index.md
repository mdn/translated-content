---
title: <bdi>
slug: Web/HTML/Element/bdi
translation_of: Web/HTML/Element/bdi
---
Das **HTML `<bdi>` Element** (engl. für _bidirectional isolation_) isoliert einen Textauszug der in einer anderen Richtung erscheinen soll, als der Text der ihn umgibt.

Dieses Element ist nützlich, wenn Text in einen Text eingebunden werden soll, z. B. von einer Datenbank, aber die Schreibrichtung anders sein kann, als der bestehende Text.

| [Inhaltskategorien](/de/docs/HTML/Content_categories) | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content), gestaltender Inhalt, eindeutiger Inhalt. |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Erlaubter Inhalt                                      | Ausdrucksinhalt.                                                                                             |
| Tag Wegfall                                           | keiner                                                                                                       |
| Erlaubte Elternelemente                               | Irgend ein Element, das den Ausdrucksinhalt akzeptiert.                                                      |
| Erlaubte ARIA-Rollen                                  | Beliebig                                                                                                     |
| DOM interface                                         | {{domxref("HTMLElement")}}                                                                         |

## Attribute

Wie alle anderen HTML Elemente hat dieses Element globale Attribute mit einer leicht anderen Bedeutung: das **dir** Attribut wird nicht geerbt. Wenn es nicht gesetzt wurde, ist der Standardwert `auto`. Das lässt den Browser an Hand des Inhalts entscheiden, welche Richtung er für den Text innerhalb des `<bdi>` Element setzt.

## Gebrauchshinweise

Obwohl der gleiche visuelle Effekt mit der CSS Regel {{cssxref("unicodes-bidi")}}`: isolate` auf einem {{HTMLElement("span")}} oder einem anderen textformatierenden Element erziehlt werden kann, wird die semantische Bedeutung nur mit dem `<bdi>` Element übermittelt. Zumal es Browsern erlaubt ist, CSS-Styling zu ignorieren. In einem solchen Fall würde der Text unter dem genannten Element richtig angezeigt, die Methode mit CSS würde hingegen Müll erzeugen.

## Beispiel

```html
<p dir="ltr">Das arabische Wort <bdi>ARABISCHER_PLATZHALTER</bdi>
wird automatisch von rechts nach links geschrieben.</p>
```

### Ergebnis

Das arabische Wort RETLAHZTALP_REHCSIBARA wird automatisch von rechts nach links geschrieben..

## Spezifikationen

| Specifikation                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-bdi-element', '&lt;bdi&gt;')}}             | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-bdi-element', '&lt;bdi&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Ähnliches HTML Element: bdo
- Ähnliche HTML Eigenschaften: direction, unicode-bidi

HTMLRef
