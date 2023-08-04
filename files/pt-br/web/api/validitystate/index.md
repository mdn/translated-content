---
title: ValidityState
slug: Web/API/ValidityState
---

{{APIRef("HTML DOM")}}

A interface **`ValidityState`** representa os estados de validação que um elemento
pode conter de acordo com as propriedades de validação abaixo. Juntas, elas podem explicar porque um elemento é inválido (caso seja) ao ser validado.

## Propriedades

Para cada uma das propriedades Booleanas abaixo, caso retorne **`true`**, isso indica a razão específica porque a validação falhou, exceto no caso da propriedade _valid_, que retorna **`true`** no caso do elemento ser completamente válido e **`false`** caso contrário.

- {{domxref("ValidityState.badInput")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o usuário inseriu um valor que o navegador é incapaz de converter.
- {{domxref("ValidityState.customError")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o elemento possui uma mensagem de validação definida por `setCustomValidity()` para um valor não vázio.
- {{domxref("ValidityState.patternMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não combina com o padrão ([`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern)) especificado.
- {{domxref("ValidityState.rangeOverflow")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor é maior do que o máximo especificado pelo atributo [`max`](/pt-BR/docs/Web/HTML/Element/input#max).
- {{domxref("ValidityState.rangeUnderflow")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor é menor do que o mínimo especificado pelo atributo [`min`](/pt-BR/docs/Web/HTML/Element/input#min).
- {{domxref("ValidityState.stepMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não segue a regra definida pelo atributo [`step`](/pt-BR/docs/Web/HTML/Element/input#step).
- {{domxref("ValidityState.tooLong")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor ultrapassa o especificado pelo atributo `maxlength` para {{domxref("HTMLInputElement")}} ou {{domxref("HTMLTextAreaElement")}}. _**OBS:** Isso nunca será `true` em navegadores como o Firefox, pois a inserção de valores não é permitida ao alcançar o valor definido em `maxlength`._
- {{domxref("ValidityState.tooShort")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não corresponde ao especificado no atributo `minlength` para {{domxref("HTMLInputElement")}} ou {{domxref("HTMLTextAreaElement")}}.
- {{domxref("ValidityState.typeMismatch")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o valor não corresponde ao tipo de entrada definida. (Um exemplo é quando [`type`](/pt-BR/docs/Web/HTML/Element/input#type) é `email` ou `url`).
- {{domxref("ValidityState.valid")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando se o elemento é completamente válido.
- {{domxref("ValidityState.valueMissing")}} {{ReadOnlyInline}}
  - : É um {{jsxref("Boolean")}} informando que o elemento tem o atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required), mas não tem [`value`](/pt-BR/docs/Web/HTML/Element/input#value).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Constraint validation](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Forms: Data form validation](/pt-BR/docs/Web/Guide/HTML/Forms/Data_form_validation)
