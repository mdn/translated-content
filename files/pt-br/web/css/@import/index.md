---
title: "@import"
slug: Web/CSS/@import
---

{{CSSRef}}

## Sumário

A [Regra Atribuída (at-rule)](/pt-BR/docs/Web/CSS/CSS_syntax/At-rule) [CSS](/pt-BR/docs/Web/CSS) **`@import`** é usado para importar regras de estilo de outras folhas de estilo. Estas regras devem preceder todos os outros tipos de regras, exceto as regrasde [@charset](/pt-BR/docs/Web/CSS/@charset) ; uma vez que não é um [Declaração aninhada](/pt-BR/docs/Web/CSS/CSS_syntax/Syntax#nested_statements), `@import não pode ser usado dentro do` [grupo condicional de regras atribuídas (at-rules)](/pt-BR/docs/Web/CSS/CSS_syntax/At-rule#conditional_group_rules).

Assim como os agentes do usuário podem evitar a recuperação de recursos para os tipos de mídia incompatíveis, os autores podem especificar regras @import dependentes de mídia. Estas importações condicionais devem ter [media queries](/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries) separadas por vírgulas após a URI. Na ausência de qualquer consulta de mídia (media queries), a importação é incondicional. Especificando todos para o médio tem o mesmo efeito.

## Sintaxe

```
@import url;
@import url list-of-media-queries;
```

where:

- _url_
  - : É algo como {{cssxref("&lt;string&gt;")}} ou como {{cssxref("&lt;uri&gt;")}} representaando o local de onde o recurso será importado. A URL pode ser absoluta ou relativa. Perceba que a URL não precisa, necessariamente, ser um arquivo específico; ela pode especificar o nome do pacotee parcialmente, e o arquivo apropriado será escolhido automaticamente (exemplo: **chrome://communicator/skin/**). [Veja aqui](/pt-BR/docs/Mozilla/Tech/XUL/Tutorial/The_Chrome_URL) para mais informações.
- _list-of-media-queries_
  - : É uma lista separada por vírgulas de [consultas de mídia (media queries)](/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries) conidicionando a aplicação das regras de CSS definidas na URL relacionada. Se o navegador não suportar quaisquer consultas de mídia, ele não carregará o recurso relacionado.

## Sintaxe formal

{{csssyntax}}

## Exemplos

```css
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import "custom.css";
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url("landscape.css") screen and (orientation: landscape);
```

## Especificações

{{Specifications}}

## Browser compatibilidade

{{Compat}}
