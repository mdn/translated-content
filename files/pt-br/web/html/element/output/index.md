---
title: Output
slug: Web/HTML/Element/output
---

## Sumário

O elemento de saída (\<output>) é um elemento no qual um site ou aplicativo pode injetar os resultados de um cálculo ou o resultado de uma ação do usuário.

| Categorias de conteúdo | [Flow content](/pt-BR/docs/HTML/Content_categories#flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#phrasing_content), [listed](/pt-BR/docs/HTML/Content_categories#form_listed), [labelable](/pt-BR/docs/HTML/Content_categories#form_labelable), [resettable](/pt-BR/docs/HTML/Content_categories#form_resettable) [form-associated element](/pt-BR/docs/HTML/Content_categories#form-associated_content). |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conteúdo permitido     | [Phrasing content](/pt-BR/docs/HTML/Content_categories#phrasing_content).                                                                                                                                                                                                                                                                                                                                                         |
| Omissão de tag         | Precisa ter ambas as tags de início e fim.                                                                                                                                                                                                                                                                                                                                                                                        |
| Documento normativo    | [HTML5, section 4.10.15](https://www.w3.org/TR/html5/the-button-element.html#the-output-element)                                                                                                                                                                                                                                                                                                                                  |

## Atributos

Como qualquer elemento HTML, este elemento suporta os [global attributes](/pt-BR/docs/HTML/Global_attributes).

- `for`
  - : Uma lista de IDs de outros elementos, indicando que estes elementos contribuiram com valores de entrada (input) para o cálculo (ou outros afetados).
- `form`
  - : O elemento form ao qual este elemento está associado (seu "proprietário do formulário"). O valor do atributo deve ser um ID de um elemento form no mesmo documento. Se este atributo não está especificado, o elemento output deve ser descendente de um elemento form. Este atributo permite que você coloque elementos output em qualquer lugar em um documento, não apenas como descendentes de seus elementos form.
- `name`
  - : O nome do elemento.

## Interface DOM

O elemento implementa a interface [HTMLOutputElement](/pt-BR/docs/DOM/HTMLOutputElement) .

## Exemplo

```
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
0<input type="range" name="b" value="50" />100 +<input type="number" name="a" value="10" /> =
<output name="result"></output>
</form>
```

## Compatibilidade

{{Compat}}

## Veja também

Outros elementos relacionados ao form: {{ HTMLElement("form") }}, {{ HTMLElement("input") }}, {{ HTMLElement("button") }}, {{ HTMLElement("datalist") }}, {{ HTMLElement("legend") }}, {{ HTMLElement("label") }}, {{ HTMLElement("select") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("progress") }} and {{ HTMLElement("meter") }}.

{{ HTMLSidebar }}
