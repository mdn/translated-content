---
title: ":optional"
slug: Web/CSS/:optional
---

{{ CSSRef }}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:optional`** representa qualquer elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, ou {{HTMLElement("textarea")}} que não contenha o atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required).

```css
/* Selects qualquer <input> opcional */
input:optional {
  border: 1px dashed black;
}
```

Esta pseudo-classe é utilizada para estilizar campos do formulário que não são requeridos para sumissão.

> **Nota:** A pseudo-classe {{cssxref(":required")}} seleciona campos do fumulário _requeridos_.

## Sintaxe

{{csssyntax}}

## Exemplos

Veja {{cssxref(":invalid")}} como exemplo.

## Referências de acessibilidade

Se um [formulário](/pt-BR/docs/Web/HTML/Element/form) contém {{htmlelement("input")}} opcionais, inputs requeridos devem ser indicados utilizando o atriuto [`required`](/pt-BR/docs/Web/HTML/Element/input#required). Isto garantirá que usuários que navegam com tecnologia de acessibilidade, como um leitor de tela, possam entender quais entradas devem ter o conteúdo validado para submeter o formulário com êxito.

Entradas requeridas devem ser indicadas visualmente, utilizando um tratamento que não seja apenas a cor para passar o significado. Usualmente, textos descritivos e/ou um ícone são utilizados.

- [MDN Understanding WCAG, Guideline 3.3 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.3_%E2%80%94_Input_Assistance_Help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)

## Especificações

| Specification                                                          | Status                        | Comment                                                 |
| ---------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', '#selector-optional', ':optional') }}       | {{ Spec2('HTML WHATWG') }}    | Sem mudança.                                            |
| {{ SpecName('HTML5 W3C', '#selector-optional', ':optional') }}         | {{ Spec2('HTML5 W3C') }}      | Define a semântica da validação e da restrição do HTML. |
| {{ SpecName('CSS4 Selectors', '#opt-pseudos', ':optional') }}          | {{ Spec2('CSS4 Selectors') }} | Sem mudança.                                            |
| {{ SpecName('CSS3 Basic UI', '#pseudo-required-value', ':optional') }} | {{ Spec2('CSS3 Basic UI') }}  | Define a pseudo-classe, mas não a semântica associada.  |

## Compatibilidade com navegadores

{{Compat("css.selectors.optional")}}

## Ver também

- Outra pseudo-classes de validação relacionadas: {{ cssxref(":required") }}, {{ cssxref(":invalid") }}, {{ cssxref(":valid") }}
- [Validação de dados de formulário](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
