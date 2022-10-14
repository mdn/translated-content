---
title: ValidityState
slug: Web/API/ValidityState
tags:
  - API
  - Forms
  - HTML DOM
  - HTML5
  - Interface
  - Validation
translation_of: Web/API/ValidityState
---
{{APIRef("HTML DOM")}} {{gecko_minversion_header("2.0")}}

A interface **`ValidityState`** representa os estados de validação que um elemento
pode conter de acordo com as propriedades de validação abaixo. Juntas, elas podem explicar porque um elemento é inválido (caso seja) ao ser validado.

## Propriedades

Para cada uma das propriedades Booleanas abaixo, caso retorne **`true`**, isso indica a razão específica porque a validação falhou, exceto no caso da propriedade _valid_, que retorna **`true`** no caso do elemento ser completamente válido e **`false`** caso contrário.

- {{domxref("ValidityState.badInput")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o usuário inseriu um valor que o navegador é incapaz de converter.
- {{domxref("ValidityState.customError")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o elemento possui uma mensagem de validação definida por `setCustomValidity()` para um valor não vázio.
- {{domxref("ValidityState.patternMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não combina com o padrão ({{htmlattrxref("pattern", "input")}}) especificado.
- {{domxref("ValidityState.rangeOverflow")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor é maior do que o máximo especificado pelo atributo {{htmlattrxref("max", "input")}}.
- {{domxref("ValidityState.rangeUnderflow")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor é menor do que o mínimo especificado pelo atributo {{htmlattrxref("min", "input")}}.
- {{domxref("ValidityState.stepMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não segue a regra definida pelo atributo {{htmlattrxref("step", "input")}}.
- {{domxref("ValidityState.tooLong")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor ultrapassa o especificado pelo atributo `maxlength` para {{domxref("HTMLInputElement")}} ou {{domxref("HTMLTextAreaElement")}}. _**OBS:** Isso nunca será `true` em navegadores como o Firefox, pois a inserção de valores não é permitida ao alcançar o valor definido em `maxlength`._
- {{domxref("ValidityState.tooShort")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não corresponde ao especificado no atributo `minlength` para {{domxref("HTMLInputElement")}} ou {{domxref("HTMLTextAreaElement")}}.
- {{domxref("ValidityState.typeMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não corresponde ao tipo de entrada definida. (Um exemplo é quando {{htmlattrxref("type", "input")}} é `email` ou `url`).
- {{domxref("ValidityState.valid")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o elemento é completamente válido.
- {{domxref("ValidityState.valueMissing")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando que o elemento tem o atributo {{htmlattrxref("required", "input")}}, mas não tem {{htmlattrxref("value", "input")}}.

## Especificações

| Especificação                                                                                                            | Status                           | Comentário                                                                        |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'forms.html#the-constraint-validation-api', 'ValidityState') }} | {{Spec2('HTML WHATWG')}} | Live Standard                                                                     |
| {{ SpecName('HTML5.1', '#the-constraint-validation-api', 'ValidityState') }}                     | {{Spec2('HTML5.1')}}     | No change from the previous snapshot {{SpecName('HTML5 W3C')}}.            |
| {{ SpecName('HTML5 W3C', 'forms.html#the-constraint-validation-api', 'ValidityState') }}     | {{Spec2('HTML5 W3C')}}     | First snapshot of {{SpecName('HTML WHATWG')}} containing this interface. |

## Compatibilidade com navegadores

{{Compat("api.ValidityState")}}

## Veja também

- [Constraint validation](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Forms: Data form validation](/pt-BR/docs/Web/Guide/HTML/Forms/Data_form_validation)
