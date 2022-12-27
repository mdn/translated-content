---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
translation_of: Web/API/HTMLSelectElement/checkValidity
---
{{ APIRef("HTML DOM") }}

O **`HTMLSelectElement.checkValidity()`** método verifica se o elemento possui restrições e se as satisfaz. Se o elemento falhar suas restrições, o navegador dispara um evento {{event("invalid")}} no elemento e, em seguida, retorna `false`.

## Sintaxe

```js
var resultado = selectElt.checkValidity();
```

## Especificações

| Especificação                                                                                                                        | Status                           | Comentário                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-cva-checkvalidity', 'HTMLSelectElement.checkValidity()')}}             | {{Spec2('HTML WHATWG')}} | No change since the latest snapshot, {{SpecName('HTML5 W3C')}}. |
| {{SpecName('HTML5 W3C', 'forms.html#dom-cva-checkvalidity', 'HTMLSelectElement.checkValidity()')}} | {{Spec2('HTML5 W3C')}}     | Initial definition, snapshot of {{SpecName('HTML WHATWG')}}   |

## Browser compatibilidade

{{Compat("api.HTMLSelectElement.checkValidity")}}

## Veja também

- [Form validation.](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation)
