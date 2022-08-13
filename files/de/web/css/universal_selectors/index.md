---
title: Universalselektoren
slug: Web/CSS/Universal_selectors
tags:
  - Anfänger
  - CSS
  - CSS Referenz
  - Selektoren
translation_of: Web/CSS/Universal_selectors
---
{{CSSRef("Selectors")}}

## Übersicht

Ein Sternchen (`*`) ist der Universalselektor für CSS. Es matcht ein einzelnes Element eines beliebigen Typs. Das Weglassen des Sternchens bei einfachen Selektoren hat denselben Effekt. Zum Beispiel sind `*.warning` und `.warning` gleich.

In CSS 3 kann das Sternchen in Kombination mit Namensräumen verwendet werden:

- `ns|*` - matcht alle Elemente im Namensraum ns
- `*|*` - matcht alle Elemente
- `|*` - matcht alle Elemente ohne einen angegebenen Namensraum

## Beispiel

```css
* [lang^=en] {
  color: green;
}

* .warning {
  color: red;
}

* #maincontent {
  border: 1px solid blue;
}
```

```html
<p class="warning">
  <span lang="en-us">Ein grüner &lt;span&gt;</span> in einem roten Absatz.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">Ein roter &lt;span&gt;</span> in einem grünen Absatz.
</p>
```

{{EmbedLiveSample('Beispiel', 250, 100)}}

## Spezifikationen

| Spezifikation                                                                                            | Status                               | Kommentar                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#the-universal-selector', 'Universalselektor')}} | {{Spec2('CSS4 Selectors')}} | Keine Änderung                                                                                                                                |
| {{SpecName('CSS3 Selectors', '#universal-selector', 'Universalselektor')}}     | {{Spec2('CSS3 Selectors')}} | Definiert das Verhalten in Bezug auf Namensräume weist darauf hin, dass das Weglassen des Selektors innerhalb von Pseudoelementen erlaubt ist |
| {{SpecName('CSS2.1', 'selector.html#universal-selector', 'Universalselektor')}} | {{Spec2('CSS2.1')}}             | Ursprüngliche Definition                                                                                                                      |

## Browser Kompatibilität

{{Compat("css.selectors.universal")}}
