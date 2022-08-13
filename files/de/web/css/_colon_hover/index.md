---
title: ':hover'
slug: Web/CSS/:hover
tags:
  - CSS
  - CSS Pseudoklasse
  - Layout
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/:hover
---
{{ CSSRef() }}

## Übersicht

Die `:hover` CSS [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird verwendet, wenn der Nutzer einen Link auswählt, auch ohne ihn zu aktivieren. Dieser Stil kann von weiteren Link-abhängigen Pseudoklassen überschrieben werden: {{ cssxref(":link") }}, {{ cssxref(":visited") }} und {{ cssxref(":active") }}. Um nur entsprechende Links auszuwählen, ist es wichtig die `:hover` Regel nach den `:link` und `:visited` Regeln, aber vor der `:active` Regel zu erwähnen, wie beschrieben in der _LVHA-Reihenfolge_: `:link` — `:visited` — `:hover` — `:active`.

Die `:hover` Pseudoklasse kann auf alle [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements "Pseudo-classes") angewendet werden. {{experimental_inline}}

Webbrowser (User-Agents) wie Firefox, Internet Explorer, Safari, Opera oder Chrome, wenden den zugehörigen Stil an, wenn der Cursor (Mauszeiger) über ein Element fährt.

> **Hinweis:** Auf Touchscreens ist `:hover` problematisch oder unmöglich. Abhängig vom Browser, tritt die `:hover` Pseudoklasse niemals, nur für einen kurzen Moment nach dem Berühren in Kraft oder bleibt aktiviert, auch wenn der Nutzer das Element nicht mehr berührt, bis er ein anderes Element berührt. Weil Touchscreen-Geräte oft gleich sind, ist es wichtig für Webentwickler, keinen Inhalt zu haben, der nur über die `:hover` Pseudoklasse aufrufbar ist, da es für Nutzer von solchen Geräten schwierig oder unmöglich ist, diesen Inhalt aufzurufen.

## Beispiele

```css
:link:hover { outline: dotted red; }

.foo:hover { background: gold; }
```

### Dropdown Menü

Mit der `:hover` Pseudoklasse kann man komplexe Algorithmen in CSS erstellen. Dies ist eine verbreitete Methode, die genutzt wird, um beispielsweise Dropdown Menüs nur mit CSS (ohne [JavaScript](/de/docs/Web/JavaScript "en/JavaScript")) zu erstellen. Die Idee dieser Methode ist das Erstellen einer Regel, wie die Folgende:

```css
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Sie kann auf folgende HTML Struktur angewendet werden:

```html
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Menü</a>
      <ul>
        <li>
          <a href="example.html">Link</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Untermenü</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Untermenü</a>
              <ul>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
            <li><a href="example.html">Link</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

Sieh dir unser [CSS-basiertes Dropdown Menü Beispiel](/@api/deki/files/6238/=css_dropdown_menu.html "css_dropdown_menu.html") für eine mögliche Lösung an.

### Galerie mit Vollbild-Bildern und Vorschauen

Man kann die `:hover` Pseudoklasse nutzen, um eine Bildergalerie mit Vollbild-Bildern, welche nur angezeigt werden, wenn der Nutzer mit der Maus über die Vorschau fährt, zu erstellen. Sieh dir dafür [diese Demo](/@api/deki/files/6247/=css-gallery.zip "css-gallery.zip")an.

> **Hinweis:** Für einen analogen Effekt, der jedoch auf der {{ cssxref(":checked") }} Pseudoklasse basiert (angewendet auf Auswahlfelder), sieh dir [diese Demo](/@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip")an, übernommen von der {{ cssxref(":checked") }} Seite.

## Spezifikationen

| Spezifikation                                                                                                        | Status                                   | Anmerkung                                       |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------- |
| {{ SpecName('CSS4 Selectors', '#hover', ':hover') }}                                                 | {{ Spec2('CSS4 Selectors') }} | Kann auf jedes Pseudoelement angewendet werden. |
| {{ SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover') }} | {{ Spec2('CSS3 Selectors') }} | Keine wesentlichen Veränderungen                |
| {{ SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover') }}                 | {{ Spec2('CSS2.1') }}             | Ursprüngliche Definition                        |

## Browser Kompatibilität

{{Compat("css.selectors.hover")}}

Siehe auch:

- [Chromium bug #370155: Don't make `:hover` sticky on tap on sites that set a mobile viewport](https://code.google.com/p/chromium/issues/detail?id=370155)
- [Chromium bug #306581: Immediately show hover and active states on touch when page isn't scrollable.](https://code.google.com/p/chromium/issues/detail?id=306581)
