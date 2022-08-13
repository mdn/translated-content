---
title: list-style-position
slug: Web/CSS/list-style-position
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/list-style-position
---
{{CSSRef}}

## Übersicht

Die `list-style-position` [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Position der Aufzählungszeichenbox innerhalb der Hauptblockbox an.

Es ist oft einfacher, die Kurzform Eigenschaft {{cssxref("list-style")}} zu verwenden.

{{cssinfo("list-style-position")}}

## Syntax

    Formale Syntax: {{csssyntax("list-style-position")}}

    list-style-position: inside
    list-style-position: outside

    list-style-position: inherit

### Werte

- `outside`
  - : Die Aufzählungszeichenbox liegt außerhalb der Hauptblockbox.
- `inside`
  - : Die Aufzählungszeichenbox ist die erste Inlinebox der Hauptblockbox, nach der der Inhalt des Elements steht.

## Beispiel

### HTML

```html
<ul class="one"> List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="two"> List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="three"> List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

### CSS

```css
.one {
  list-style:square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("https://mdn.mozillademos.org/files/11979/starsolid.gif");
  list-style-position: inherit;
}
```

### Result

{{EmbedLiveSample("Beispiel","200","420")}}

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Anmerkung                |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName('CSS3 Lists', '#list-style-position', 'list-style-position')}}                         | {{Spec2('CSS3 Lists')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'generate.html#propdef-list-style-position', 'list-style-position')}} | {{Spec2('CSS2.1')}}         | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.list-style-position")}}

## Siehe auch

- {{Cssxref("list-style")}}, {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}
