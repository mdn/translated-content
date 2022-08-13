---
title: white-space
slug: Web/CSS/white-space
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/white-space
---
{{CSSRef}}

Die CSS Eigenschaft **`white-space`** wird benutzt, um Leerzeichen innerhalb eines Elementes zu handhaben.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

> **Hinweis:** Um Wörter umzubrechen, verwenden Sie stattdessen {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, oder {{CSSxRef("hyphens")}}.

## Syntax

```css
/* Schlüsselwortwerte */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* Globale Werte */
white-space: inherit;
white-space: initial;
white-space: unset;
```

Die Eigenschaft `white-space` wird als ein einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `normal`
  - : Aufeinanderfolgende Leerzeichen fallen zusammen. Zeilenumbruch-Zeichen im Quellcode werden als andere Leerzeichen gehandhabt. Bricht Zeilen notwendigen Stellen um und füllt die Zeile.
- `nowrap`
  - : Wie `normal`, aber unterdrückt Zeilenumbrüche im Text.
- `pre`
  - : Aufeinanderfolgende Leerzeichen bleiben erhalten, Zeilen werden nur an Zeilenumbruch-Zeichen im Quellcode und an {{HTMLElement("br")}}-Elementen gebrochen.
- `pre-wrap`
  - : Aufeinanderfolgende Zwischenraumzeichen bleiben erhalten. Zeilen werden an Zeilenumbruch-Zeichen, an {{HTMLElement("br")}} und an notwendigen Stellen um die Zeile zu füllen umgebrochen.
- `pre-line`
  - : Aufeinanderfolgende Zwischenraumzeichen fallen zusammen. Zeilen werden an Zeilenumbruch-Zeichen, an {{HTMLElement("br")}} und an notwendigen Stellen um die Zeile zu füllen umgebrochen.
- `break-spaces`
  - : Das Verhalten ist bis auf eine Ausnahme identisch mit `pre-line`:\* Jede Sequenz von erhaltenen Zwischenraumzeichen nimmt immer Platz ein, auch am Ende der Zeile.
    - Nach jedem enthaltenen Zwischenraumzeichen besteht die Möglichkeit eines Zeilenumbruchs, auch zwischen Zwischenraumzeichen.
    - Solche beibehaltenen Leerräume nehmen Platz in Anspruch und beeinflussen somit die intrinsischen Größen der Box (Min-Inhaltsgröße und Max-Inhaltsgröße).

Die folgende Tabelle fasst das Verhalten der verschiedenen `white-space` Zwischenraumzeichen zusammen:

|               | Neue Zeilen      | Leerzeichen und Tabulatoren | Textumbruch  | Zeilenende-Raum |
| ------------- | ---------------- | --------------------------- | ------------ | --------------- |
| `normal`      | Fallen zusammen  | Fallen zusammen             | Umbruch      | Entfernt        |
| `nowrap`      | Fallen zusammen  | Fallen zusammen             | Kein Umbruch | Entfernt        |
| `pre`         | Bleiben erhalten | Bleiben erhalten            | Kein Umbruch | Entfernt        |
| `pre-wrap`    | Bleiben erhalten | Bleiben erhalten            | Umbruch      | hängend         |
| `pre-line`    | Bleiben erhalten | Fallen zusammen             | Umbruch      | Entfernt        |
| `break-space` | Bleiben erhalten | Bleiben erhalten            | Umbruch      | Umbruch         |

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

```css
code {
  white-space: pre;
}
```

### Zeilenumbrüche innerhalb von \<pre> Elementen

```css
pre {
  word-wrap: break-word;      /* IE 5.5-7 */
  white-space: pre-wrap;      /* Modern browsers */
}
```

### In Aktion

#### HTML

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select> }
</div>
<div id="results" class="box">
  <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  height: 400px;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
var select  = document.querySelector("#css-code select");
var results = document.querySelector("#results p");
select.addEventListener("change", function(e) {
  results.setAttribute("style", "white-space: "+e.target.value);
})
```

```html
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

#### Ergebnis

{{EmbedLiveSample("In_action", "100%", 500)}}

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar                                                                                          |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text', '#white-space', 'white-space')}}             | {{Spec2('CSS3 Text')}} | Präzisiert den Umbruch-Algorithmus. Äußerlich bewirkt der `white-space` eine kompakte Eigenschaft. |
| {{SpecName('CSS2.1', 'text.html#white-space-prop', 'white-space')}} | {{Spec2('CSS2.1')}}     | Ursprüngliche Definition                                                                           |

## Browser Kompatibilität

{{Compat("css.properties.white-space")}}

## Siehe auch

- Eigenschaften, die definieren, wie Wörter umgebrochen werden: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
