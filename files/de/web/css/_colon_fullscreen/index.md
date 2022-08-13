---
title: ':fullscreen'
slug: Web/CSS/:fullscreen
tags:
  - CSS
  - CSS Mozilla Erweiterungen
  - CSS Pseudoklasse
  - Experimentell
  - Layout
  - NeedsLiveSample
  - Referenz
  - Vollbild
  - Web
translation_of: Web/CSS/:fullscreen
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) `:fullscreen `betrifft jedes Element, welches sich im [Vollbildmodus](/de/docs/Web/Guide/API/DOM/Verwendung_des_Vollbildmodus) befindet. Sie selektiert nicht nur das Toplevelelement, sondern den ganzen Stapel an Elementen.

> **Note:** Das W3C empfiehlt das zusammengeschriebene `:fullscreen`, d. h. ohne Bindestrich, jedoch haben sowohl Gecko als auch Webkit eine Präfixversion mit Bindestrich implementiert : `:-webkit-full-screen` und `:-moz-full-screen`. Microsoft Edge und Internet Explorer verwenden die Syntaxen `:fullscreen` und `:-ms-fullscreen`.

## Beispiele

```css
*:fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

```css
h1:fullscreen {
  border: 1px solid #f00;
}
```

```css
p:fullscreen {
  font-size: 200%;
}
```

## Spezifikationen

| Spezifikation                                                                                | Status                           | Anmerkung                |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('Fullscreen', '#:fullscreen-pseudo-class', ':fullscreen')}} | {{Spec2('Fullscreen')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.fullscreen")}}

## Siehe auch

- [Vollbildmodus](/de/docs/Web/Guide/API/DOM/Verwendung_des_Vollbildmodus)
- {{domxref("element.mozRequestFullScreen()")}}
- {{domxref("document.mozCancelFullScreen()")}}
- {{domxref("document.mozFullScreen")}}
- {{domxref("document.mozFullScreenElement")}}
- {{domxref("document.mozFullScreenEnabled")}}
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
- {{cssxref(":-moz-full-screen-ancestor")}}
