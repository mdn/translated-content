---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS Eigenschaft
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Veraltet
translation_of: Web/CSS/clip
---
{{CSSRef}}{{deprecated_header}}

## Übersicht

Die `clip` CSS Eigenschaft definiert, welcher Teil eines Elements sichtbar ist. Sie gilt nur für Elemente mit {{cssxref("position","position:absolute")}}.

> **Warnung:** Diese Eigenschaft ist veraltet. Es sollte stattdessen {{cssxref("clip-path")}} verwendet werden.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwert */
clip: auto;

/* <shape> Werte */
clip: rect(1px 10em 3rem 2ch);
clip: rect(1px, 10em, 3rem, 2ch);

/* Globale Werte */
clip: inherit;
clip: initial;
clip: unset;
```

### Werte

- `<shape>`

  - : Ein rechteckiger {{cssxref("&lt;shape&gt;")}} Wert der Form `rect(<top>, <right>, <bottom>, <left>)` oder `rect(<top> <right> <bottom> <left>)` wobei `<top>` und `<bottom>` Versätze von der _Innenseite des oberen Randes_ der Box angeben und `<right>` und `<left>` Versätze von der _Innenseite des linken Randes_ der Box — d. h. die Ausmaße der Innenabstandsbox.

    `<top>`, `<right>`, `<bottom>` und `<left>` können entweder einen {{cssxref("&lt;length&gt;")}} Wert haben oder `auto`. Falls der Wert irgendeiner Seite `auto` ist, wird das Element an der _Innenseite des Randes_ dieser Seite abgeschnitten.

- `auto`
  - : Das Element wird nicht abgeschnitten (Standardwert). Zu beachten ist, dass sich dies von `rect(auto, auto, auto, auto)` unterscheidet, welches das Element an den Innenseiten der Ränder des Elements abschneidet.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
.dotted-border {
   border: dotted;
   position: relative;
   width: 536px;
   height: 350px;
}

#top-left, #middle, #bottom-right {
   position: absolute;
   top: 0px;
}

#top-left {
   left: 360px;
   clip: rect(0px, 175px, 113px, 0px);
}


#middle {
   left: 280px;
   clip: rect(119px, 255px, 229px, 80px);
   /* Standardsyntax, nicht unterstützt von Internet Explorer 4-7 */
}

#bottom-right {
   left: 200px;
   clip: rect(235px 335px 345px 160px);
   /* Nicht-standardisierte Syntax, jedoch von allen gängigen Browsern unterstützt */
}
```

```html
<p class="dotted-border">
   <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Originalgrafik" />
   <img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Grafik, die oben links abgeschnitten ist">
   <img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Grafik, die zur Mitte hin abgeschnitten ist">
   <img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Grafik, die unten rechts abgeschnitten ist">
</p>
```

{{EmbedLiveSample('Beispiele', '689px', '410px')}}

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                                                                                              |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS Masks', '#clip-property', 'clip')}}             | {{Spec2('CSS Masks')}}             | Markiert die `clip` Eigenschaft als veraltet, schlägt {{cssxref("clip-path")}} als Ersatz vor. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'clip')}} | {{Spec2('CSS3 Transitions')}} | Definiert `clip` als animierbar.                                                                       |
| {{SpecName('CSS2.1', 'visufx.html#clipping', 'clip')}}         | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition                                                                               |

## Browser Kompatibilität

{{Compat("css.properties.clip")}}

## Siehe auch

- Verwandte CSS Eigenschaften: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow")}}, {{Cssxref("display")}}, {{Cssxref("position")}}
