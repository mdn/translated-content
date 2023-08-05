---
title: ":valid"
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

| Specification                                                 | Status                      | Comment                                                 |
| ------------------------------------------------------------- | --------------------------- | ------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-valid', ':valid')}}      | {{Spec2('HTML WHATWG')}}    | Sem alterações.                                         |
| {{SpecName('HTML5 W3C', '#selector-valid', ':valid')}}        | {{Spec2('HTML5 W3C')}}      | Define a semântica do HTML e a validação de restrições. |
| {{SpecName('CSS4 Selectors', '#validity-pseudos', ':valid')}} | {{Spec2('CSS4 Selectors')}} | Definição inicial                                       |

## Compatibilidade com navegadores

{{Compat("css.selectors.valid")}}

## Veja também

- Outras pseudo-classe relacionada com validação: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}
- [Form data validation](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
