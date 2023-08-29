---
title: padding-left
slug: Web/CSS/padding-left
---

{{ CSSRef() }}

## Resumo

`A propriedade CSS padding-left` é um elemento que define o espaço de preenchimento obrigatório no lado esquerdo de um elemento. [padding area](/pt-BR/CSS/box_model#padding) é o espaço entre o conteúdo do elemento e a borda. Um valor negativo não é permitido.

{{cssinfo}}

## Syntax

```
Syntax formal: {{csssyntax("padding-left")}}
```

```
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;
padding-left: 10%

padding-left: inherit
```

### Valores

- `<length>`
  - : Especifica uma largura fixa positiva. Consulte {{cssxref("&lt;length&gt;")}} para obter detalhes.
- `<percentage>`
  - : Um percentual em relação a largura do bloco.

## Exemplos

```css
.content {
  padding-left: 5%;
}
.sidebox {
  padding-left: 10px;
}
```

## Especificações

| Especificação                                                           | Status                          | Comentário                             |
| ----------------------------------------------------------------------- | ------------------------------- | -------------------------------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding-left') }}              | {{ Spec2('CSS3 Box') }}         | Nenhuma mudança.                       |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'padding-left') }}   | {{ Spec2('CSS3 Transitions') }} | Define `padding-left` como animatable. |
| {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-left') }} | {{ Spec2('CSS2.1') }}           | Nenhuma mudança.                       |
| {{ Specname('CSS1', '#padding-left', 'padding-left') }}                 | {{ Spec2('CSS1') }}             | Definição inicial.                     |

## Compatibilidade do Navegador

{{Compat("css.properties.padding-left")}}
