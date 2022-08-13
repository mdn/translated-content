---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
translation_of: Web/CSS/scroll-behavior
---
{{ CSSRef }}
Die **`scroll-behavior`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert das Scroll-Verhalten einer Scroll-Box, wenn ein Scroll-Event durch eine Navigation oder durch CSSOM APIs ausgelöst wird.{{cssinfo}}{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}Beachte, dass andere Scroll-Verhalten, wie etwa solche durch den Nutzer ausgelöste, nicht durch diese Eigenschaft beeinflusst werden. Wenn diese Eigenschaft für das Wurzel-Element spezifiziert wird, beeinflusst es stattdessen den Viewport. Wird diese Eigenschaft für das `body`-Element spezifiziert, wird es _nicht_ an den Viewport weitergegeben.User Agents dürfen diese Eigenschaft ignorieren.

---

## Syntax

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

Sämltiche anderen Arten des Scrollens, beispielsweise durch den User, sind von dieser Eigenschaft nicht betroffen.
Wenn diese Eigenschaft auf ein Root-Element angewendet, betrifft sie stattdessen den gesamten Viewport.
Wird die Eigenschaft dem `body` zugeordnet, wrikt sie sich hingegen _nicht_ auf den Viewport aus.

Ein User Agent kann diese Eigenschaft auch ignorieren.

{{cssinfo}}

## Syntax

Die Eigenschaft `scroll-behavior` kann dabei folgende Werte annehmen:

### Werte

- `auto`
  - : Die scrolling Box scrollt sofort.
- `smooth`
  - : Die scrolling Box scrollt mit einem flüssigen/smoothen Verhalten.
    Der User Agent definiert dabei sowohl die Geschwindigkeit als auch die dafür benötigte Dauer. Der User Agent sollte dabei nach Möglichkeit den Platform-Konventionen folgen.

### Formelle Syntax

{{csssyntax}}

## Beispiel

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav, scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### Ergebnis

{{ EmbedLiveSample("Example", "100%", 250) }}

## Spezifikationen

| Spezifikation                                                                                    | Status                           | Kommentar             |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------- |
| {{SpecName('CSSOM View', "#propdef-scroll-behavior", 'scroll-behavior')}} | {{Spec2('CSSOM View')}} | Initial specification |

## Browser compatibility

{{Compat("css.properties.scroll-behavior")}}
