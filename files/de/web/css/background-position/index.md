---
title: background-position
slug: Web/CSS/background-position
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/background-position
---
{{ CSSRef() }}

### Übersicht:

Die `background-position` Eigenschaft bestimmt die Position des Hintergrundbildes

> **Note:** Ab Gecko 1.9.2 (Firefox 3.6) können mehrere Hintergrundpositionen, durch Kommata getrennt, definiert werden.
> Vorherige Versionen unterstützen nur einen Wert.

- Standardwert: `0% 0%`
- Anwendbar auf: Alle Elemente
- Vererbbar: Nein
- Prozentwerte: Beziehen sich auf den Positionierungsbereich (z.B. Größe eines `<div>`) minus der Bildgröße
- Medium: visuell
- berechneter Wert: für \<Länge> der absolute Wert; sonst eine Prozentzahl

### Syntax

    background-position:  <Hintergrundposition>[, <Hintergrundposition>]*

    <Hintergrundposition>:
      [ [ <Prozentzahl> | <Länge> | left | center | right ] ]
      [ [ <Prozentzahl> | <Länge> | top | center | bottom ] ]?
    |
      [ center | [ left | right ] [ <Prozentzahl> | <Länge> ]? ] || [ center | [ top | bottom ] [ <Prozentzahl> | <Länge> ]? ] ]
    |
      inherit

### Werte

Möglich sind ein oder zwei Werte. Negative [\<Prozentzahlen>](/de/CSS/Einheiten#Prozent "de/CSS/Einheiten#Prozent") und [\<Längen>](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") sind erlaubt.
Wenn nur ein Wert angegeben wird, ist der zweite automatisch `center`.
Der erste Wert gibt die horizontale, der zweite die vertikale Position an (Es sei denn, mindestens ein Wert ist ein Schlüsselwort).

- \<Prozentwert>
  - : Mit einem Wert von `0% 0%` (gleichbedeutend zu `0 0`) wird das Bild an der oberen linken Ecke ausgerichtet.
    Mit einem Wert von `100% 100%` wird das Bild an der unteren rechten Ecke ausgerichtet.
    Mit einem Wert von `50% 50%` wird das Bild horizontal und vertikal zentriert.
    Die absoluten Werte werden aus der Größe des Postionierungsbereichs minus der Bildgröße berechnet (Siehe [Berechnung der Prozentwerte](#Berechnung_der_Prozentwerte)).
- \<Länge>
  - : Verschiebung vom Ursprung (obere linke Ecke)
- left
  - : Gleichbedeutend für `0%` für die horizontale Postion
- center
  - : Gleichbedeutend für `50%` für die horizontale Position, wenn diese nicht festgelegt ist, sonst gleichbedeutend für `50%` für die vertikale Postion.
- right
  - : Gleichbedeutend für `100%` für die horizontale Postion
- top
  - : Gleichbedeutend für `0%` für die vertikale Postion
- bottom
  - : Gleichbedeutend für `100%` für die vertikale Postion
- inherit
  - : Der Wert des Elternelements wird geerbt.

### Beispiele

#### Berechnung der Prozentwerte

    .beispielNull {
      width: 320px;                   /* 50% der Bereichsbreite = 160px  */
      height: 320px;                  /* 50% Bereichshöhe = 160px  */

      background-image: url(32x32.jpg)/* 50% der Bildbreite/Bildhöhe = 16px  */

      background-position: 50% 50%;   /* 160px-16px = 144px */
                                      /* 50% 50% entspricht also: 144px 144px /*
    }

#### Positionen für einzelne Hintergrundbilder

    .beispielEins {
      background-image: url("logo.png");
      background-position: top;
    }

    .beispielZwei {
      background-image: url("logo.png");
      background-position: 25% 75%;
    }

    .beispielDrei {
      background: url("logo.png") 2cm bottom;
    }

    .beispielVier {
      background-image: url("logo.png");
      background-position: center 10%;
    }

    .beispielFuenf {
      background: url("logo.png") 3em 50%;
    }

#### Positionen für mehrere Hintergrundbilder {{ gecko_minversion_inline("1.9.2") }}

    .beispielSechs {
      background-image: url("img1.png"), url("img2.png");
      background-position: 0px 0px, center;
    }

### Browser Kompatibilität

| Browser           | ab Version | mehrere Hintergrundbilder |
| ----------------- | ---------- | ------------------------- |
| Internet Explorer | 4.0        | ---                       |
| Firefox (Gecko)   | 1.0 (1.0)  | 3.6 (1.9.2)               |
| Opera             | 3.5        | 10.5                      |
| Safari (WebKit)   | 1.0 (85)   | 1.3 (312)                 |

### Spezifikation

- [CSS 3 Background and Borders #background-position](http://www.w3.org/TR/css3-background/#background-position)
- [CSS 2.1 Colors and Backgrounds #background-position](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)

### Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment"), [`background-clip`](/de/CSS/background-clip "de/CSS/background-clip"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-image`](/de/CSS/background-image "de/CSS/background-image"), [`background-origin`](/de/CSS/background-origin "de/CSS/background-origin"), [`background-repeat`](/de/CSS/background-repeat "de/CSS/background-repeat"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")

{{ languages( { "en": "en/CSS/background-position", "fr": "fr/CSS/background-position", "pl": "pl/CSS/background-position", "es": "es/CSS/background-position" } ) }}
