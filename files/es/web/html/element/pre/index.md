---
title: <pre>
slug: Web/HTML/Element/pre
translation_of: Web/HTML/Element/pre
original_slug: Web/HTML/Elemento/pre
---
## Sumario

El **Elemento** **HTML \<pre>** (o _Texto HTML Preformateado_) representa texto preformateado. El texto en este elemento típicamente se muestra en una fuente fija, no proporcional, exactamente como es mostrado en el archivo. Los espacios dentro de este elemento también son mostrados como están escritos.

- _[Content categories](/es/docs/HTML/Content_categories)_ {{todo}}[Flow content](/es/docs/HTML/Content_categories#Flowing_content), palpable content.
- _Permitted content_ [Phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [flow content](/es/docs/HTML/Content_categories#flow_content).
- _DOM interface_ {{domxref("HTMLPreElement")}}

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/HTML/Global_attributes).

## Ejemplos

```html
<!-- Un poco de codigo CSS -->
<pre>
body{
  color:  red;
}
a   {
  color:green;
}
</pre>
```

### Resultado

```
body{
  color:  red;
}
a   {
  color:green;
}
```

## Especificaciones

| Epecificación                                                                                                    | Estado                           | Comentarios |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-pre-element', '&lt;pre&gt;')}} | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'the-pre-element.html#the-pre-element', '&lt;pre&gt;')}}     | {{Spec2('HTML5 W3C')}}     |             |
| {{SpecName('HTML4.01', 'text.html#h-9.3.4', '&lt;dl&gt;')}}                                 | {{Spec2('HTML4.01')}}     |             |

## Compatibilidad con exploradores

{{Compat("html.elements.pre")}}

## Véase también

- CSS: {{ Cssxref('white-space') }}, {{ Cssxref('word-break') }}
