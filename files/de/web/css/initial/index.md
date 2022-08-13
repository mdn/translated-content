---
title: initial
slug: Web/CSS/initial
translation_of: Web/CSS/initial
---
{{CSSRef}}

## Übersicht

Der Wert `initial` repräsentiert einen vom Browser vorgegebenen Standardwert. Der Wert ist in jeder CSS Eigenschaft verfügbar, hat aber verschiedene Auswirkungen.

Siehe [Standardwert](/de/docs/Web/CSS/initial_value).

## Beispiel

```css
 /* give headers a green border */
 h2 { border: medium solid green }

 /* but make those in the sidebar use the value of the "color" property */
 #sidebar h2 { border-color: initial; }
```

```css
 <p style="color:red">
    this text is red
       <em style="color:initial">
          this text is in the initial color (e.g. black)
       </em>
    this is red again
 </p>
```

## Spezifikation

| Spezifikation                                                                      | Status                           | Anmerkung          |
| ---------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| [CSS Values and Units Level 3](http://www.w3.org/TR/css3-values/#keywords)         | {{Spec2('CSS3 Values')}} | Wert hinzugefügt   |
| [CSS Cascade And Inheritance Level 3](http://www.w3.org/TR/css3-cascade/#initial0) | {{Spec2('CSS3 Cascade')}} | Definiert den Wert |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- [initial value](/de/docs/Web/CSS/initial_value), {{cssxref("inherit")}}
