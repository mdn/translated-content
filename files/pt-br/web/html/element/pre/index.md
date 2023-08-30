---
title: <pre>
slug: Web/HTML/Element/pre
---

## Resumo

_HTML texto preformatado_ (**\<pre>**) é a tag utilizada para representar texto pré-formatado. Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. Espaços em branco são mantidos no texto da mesma forma em que este foi digitado.

_[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), palpable content.

- _Conteúdo permitido_ [Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Elementos pai permitidos_ Any element that accepts [flow content](/pt-BR/docs/HTML/Content_categories#flow_content).
- _interface DOM_ {{domxref("HTMLPreElement")}}

## Atributos

Esse elemento apenas inclui atributos globais.

This element only includes the [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("cols")}} {{non-standard_inline}}
  - : Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](/pt-BR/docs/Web/HTML/Element/pre#width). To achieve such an effect, use CSS styling instead.
- {{htmlattrdef("width")}}
  - : Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS styling instead.
- {{htmlattrdef("wrap")}} {{non-standard_inline}}
  - : Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS styling instead.

## Exemplos

```html
<!-- Um exemplo de código css -->
<pre>
body {
  color:red;
}
</pre>
```

### Resultado

```
body {
  color:red;
}
```

## Especificações

| Especificação                                                                       | Status                   | Comentário                                                  |
| ----------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-pre-element', '&lt;pre&gt;')}} | {{Spec2('HTML WHATWG')}} | Nenhuma mudança significante na {{SpecName("HTML WHATWG")}} |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-pre-element', '&lt;pre&gt;')}}   | {{Spec2('HTML5 W3C')}}   | Nenhuma mudança significante na {{SpecName("HTML4.01")}}    |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.4', '&lt;dl&gt;')}}                  | {{Spec2('HTML4.01')}}    | `Atributto cols` obsoleto                                   |

## Compatibilidade de navegador

{{Compat("html.elements.pre")}}

## Veja mais

- CSS: {{ Cssxref('white-space') }}, {{ Cssxref('word-break') }}

{{ HTMLSidebar }}
