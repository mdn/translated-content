---
title: :valid
slug: Web/CSS/:valid
---

{{CSSRef}}

A pseudo-classe CSS **`:valid`** representa qualquer {{HTMLElement("input")}} ou outro elemento do {{HTMLElement("form")}} cujo conteúdo foi validado com sucesso. Isso permite, facilmente, adicionar uma aparência que ajude o usuário a identificar os campos validados.

```css
/* Seleciona qualquer input válido */
input:valid {
  background-color: powderblue;
}
```

Essa pseudo-classe é útil para realçar os campos válidos para o usuário.

## Sintaxe

{{csssyntax}}

## Exemplos

Veja {{cssxref(":invalid")}} para um exemplo.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Outras pseudo-classe relacionada com validação: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Form data validation](/pt-BR/docs/Learn/Forms/Form_validation)
