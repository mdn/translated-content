---
title: Angrenzende Geschwisterselektoren
slug: Web/CSS/Adjacent_sibling_combinator
tags:
  - CSS
  - CSS Referenz
  - NeedsMobileBrowserCompatibility
  - Selectors
  - Selektoren
translation_of: Web/CSS/Adjacent_sibling_combinator
original_slug: Web/CSS/Angrenzende_Geschwisterselektoren
---
{{CSSRef("Selectors")}}

Dies wird Nachbar- oder Nächstes-Geschwister-Element-Selektor genannt. Er selektiert nur das angegebene Element, das dem zuvor angegebenen Element direkt folgt.

## Syntax

    vorheriges_Element + Zielelement { Stileigenschaften }

## Beispiel

```css
li:first-of-type + li {
  color: red;
}
```

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

{{EmbedLiveSample('Beispiel', 200, 100)}}

Ein weiterer Anwendungsfall ist das Stylen von "Beschriftungs-spans" der darauffolgenden {{HTMLElement("img")}} Elemente:

```css
img + span.caption {
  font-style: italic;
}
```

matcht die folgenden {{HTMLElement("span")}} Elemente:

```html
<img src="photo1.jpg"><span class="caption">The first photo</span>
<img src="photo2.jpg"><span class="caption">The second photo</span>
```

## Spezifikationen

| Specification                                                                                                                | Status                               | Comment                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors', '#adjacent-sibling-combinators', 'next-sibling combinator')}}     | {{Spec2('CSS4 Selectors')}} |                          |
| {{SpecName('CSS3 Selectors', '#adjacent-sibling-combinators', 'Adjacent sibling combinator')}} | {{Spec2('CSS3 Selectors')}} |                          |
| {{SpecName('CSS2.1', 'selector.html#adjacent-selectors', 'Adjacent sibling selectors')}}         | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.selectors.adjacent_sibling")}}

\[1] Internet Explorer 7 aktualisiert den Style nicht korrekt, wenn ein Element dynamisch vor einem Element platziert wurde, das auf den Selektor gepasst hat. Wenn in Internet Explorer 8 ein Element durch Klick auf einen Link dynamisch eingefügt wird, wird der `:first-child`-Stil nicht angewandt bis der Link den Fokus verliert.

## Siehe auch

- [Allgemeine Geschwisterselektoren](/de/docs/Web/CSS/Allgemeine_Geschwisterselektoren)
