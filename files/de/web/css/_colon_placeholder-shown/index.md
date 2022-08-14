---
title: ':-moz-placeholder'
slug: Web/CSS/:placeholder-shown
tags:
  - CSS
  - CSS Pseudoklasse
  - CSS Referenz
  - Non-standard
  - Platzhalter
  - Selektoren
translation_of: Web/CSS/:placeholder-shown
translation_of_original: Web/CSS/:-moz-placeholder
original_slug: Web/CSS/:-moz-placeholder
---
> **Note:** **Hinweis:** Die :-moz-placeholder Pseudoklasse ist in Firefox 19 als veraltet markiert zugunsten des {{cssxref('::-moz-placeholder')}} Pseudoelements.

> **Note:** **Hinweis:**Die CSSWG hat beschlossen, `:placeholder-shown` einzuführen. Diese Funktionalität wird in Gecko irgendwann in der Zukunft wieder eingeführt, ohne Präfix und unter dem neuen Namen. {{bug("1069012")}}

{{deprecated_header}}{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-placeholder` [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Formularelement, das [Platzhaltertext](/de/docs/Web/Guide/HTML/Formulare_in_HTML#Das_placeholder_Attribut) anzeigt. Dies erlaubt Webentwicklern und Themedesignern die Darstellung von Platzhaltertext anzupassen, welche standardmäßig einer hellgrauen Farbe entspricht. Dies ist in manchen Fällen unvorteilhaft, beispielsweise wenn der Hintergrundfarbe von Formularfeldern eine ähnliche Farbe zugewiesen wird. Hier kann die Pseudoklasse verwendet werden, um die Textfarbe des Platzhalters zu ändern.

## Beispiel

Dieses Beispiel weist dem Platzhaltertext eine grüne Farbe zu.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Placeholder demo</title>
  <style type="text/css">
    input:-moz-placeholder {
      color: green;
    }
  </style>
</head>
<body>
  <input id="test" placeholder="Placeholder text!">
</body>
</html>
```

Ergibt:

{{EmbedLiveSample('Beispiel', '100%', 30)}}

## Überlauf

Oft werden Suchfelder oder andere Formularelemente auf mobilen Geräten verkürzt dargestellt. Leider passt u. U. der Platzhaltertext eines {{HTMLElement("input")}} Elements in die Länge des Elements, was einen abgeschnittenen Text zur Folge hat. Um diese Darstellung zu verhindern, kann die CSS Eigenschaft `text-overflow: ellipsis!` verwendet werden, um den Text mit einer Ellipse abzuschließen.

```css
input[placeholder] { text-overflow: ellipsis; }
::-moz-placeholder { text-overflow: ellipsis; } /* firefox 19+ */
input:-moz-placeholder { text-overflow: ellipsis; }
```

David Walsh hat dies in seinem Blog Eintrag ["Placeholders and Overflow"](http://davidwalsh.name/placeholder-overflow) beschrieben.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser Kompatibilität

{{Compat}}

\[1] Implementiert in {{bug("457801")}}.

## Siehe auch

- [Formulare in HTML5](/de/docs/Web/Guide/HTML/Formulare_in_HTML)
- {{HTMLElement("input")}}
- {{HTMLElement("textarea")}}
