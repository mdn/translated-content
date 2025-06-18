---
title: <pre>
slug: Web/HTML/Element/pre
---

## Resumo

_HTML texto preformatado_ (**\<pre>**) é a tag utilizada para representar texto pré-formatado. Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. Espaços em branco são mantidos no texto da mesma forma em que este foi digitado.

_[Content categories](/pt-BR/docs/Web/HTML/Content_categories)_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content), palpable content.

- _Conteúdo permitido_ [Phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _Tag omission_ Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Elementos pai permitidos_ Any element that accepts [flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content).
- _interface DOM_ {{domxref("HTMLPreElement")}}

## Atributos

Esse elemento apenas inclui atributos globais.

This element only includes the [global attributes](/pt-BR/docs/Web/HTML/Global_attributes).

- `cols` {{non-standard_inline}}
  - : Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](#width). To achieve such an effect, use CSS styling instead.
- `width`
  - : Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS styling instead.
- `wrap` {{non-standard_inline}}
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

{{Specifications}}

## Compatibilidade de navegador

{{Compat}}

## Veja mais

- CSS: {{ Cssxref('white-space') }}, {{ Cssxref('word-break') }}

{{ HTMLSidebar }}
