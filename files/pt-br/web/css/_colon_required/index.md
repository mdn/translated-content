---
title: ":required"
slug: Web/CSS/:required
---

{{ CSSRef }}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:required`** representa qualquer {{HTMLElement("input")}}, {{HTMLElement("select")}}, ou {{HTMLElement("textarea")}} contendo o atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required).

```css
/* Seleciona qualquer <input> requerido */
input:required {
  border: 1px dashed red;
}
```

Esta pseudo-classe é utilizada para destacar campos que devem ter dados válidos antes do formulário ser submetido.

> **Nota:** A pseudo-classe {{cssxref(":optional")}} seleciona campos do formulário que são _opcionais_.

## Sintaxe

{{csssyntax}}

## Exemplos

Veja {{cssxref(":invalid")}} como exemplo.

## Preocupações com acessibilidade

Elementos {{htmlelement("input")}} obrigatórios devem ter o atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required) atribuídos. Isso garante que pessoas que navegam com auxílio de recursos de acessibilidade, como o leitor de tela, possam entender quais campos precisam ter conteúdos válidos para garantir a submissão dos dados .

Se o formulário também possui campos [opcionais](/pt-BR/docs/Web/CSS/:optional), entradas requeridas devem ser indicadas visualmente usando um tratamento que não seja apenas a cor para passar o significado. Usualmente, textos descritivos e/ou um ícone são utilizados.

- [MDN Understanding WCAG, Guideline 3.3 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Especificações

| Especificação                                                          | Status                        | Comentário                                             |
| ---------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------ |
| {{ SpecName('HTML WHATWG', '#selector-required', ':required') }}       | {{ Spec2('HTML WHATWG') }}    | Sem mudança.                                           |
| {{ SpecName('HTML5 W3C', '#selector-required', ':required') }}         | {{ Spec2('HTML5 W3C') }}      | Define a semântica de validação e de restrição HTML.   |
| {{ SpecName('CSS4 Selectors', '#opt-pseudos', ':required') }}          | {{ Spec2('CSS4 Selectors') }} | Sem mudança.                                           |
| {{ SpecName('CSS3 Basic UI', '#pseudo-required-value', ':required') }} | {{ Spec2('CSS3 Basic UI') }}  | Define a pseudo-classe, mas não a semântica associada. |

## Compatibilidade com navegadores

{{Compat("css.selectors.required")}}

## Veja também

- Outras pseudo-classe relacionadas a validação: {{ cssxref(":optional") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validação de dados de formulário](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
