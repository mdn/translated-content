---
title: meter
slug: Web/HTML/Element/meter
---

## Sumário

O elemento HTML _meter_ (`<meter>`) pode representar um valor escalar dentro de um intervalo conhecido ou um valor fracionário.

> **Note:** A não ser que o atributo **value** esteja entre 0 e 1(inclusive), o atributo **min** e o atributo **max** devem definir o intervalo de modo que o valor do atributo **value** esteja dentro dele.

## Contexto de uso

| [Content categories](/pt-BR/HTML/Content_categories) | [flow content](/pt-BR/HTML/Content_categories#flow_content), [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content), [Labelable](/pt-BR/HTML/Content_categories#form-labelable) [Form-associated content](/pt-BR/HTML/Content_categories#form-associated) |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conteúdo permitido                                   | [Phrasing content](/pt-BR/HTML/Content_categories#Phrasing_content), mas nenhum elemento `meter` descendente.                                                                                                                                                          |
| Tag omission                                         | Nenhuma, ambas as tags iniciais e finais são obrigatórias.                                                                                                                                                                                                             |
| Elementos pais permitidos                            | Qualquer elemento que aceite phrasing content.                                                                                                                                                                                                                         |
| Documento normativo                                  | [HTML5, section 4.10.8](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-meter-element)                                                                                                                                         |

## Atributos

Como todos os elementos HTML, esse elemento suporta [attributes](/pt-BR/HTML/Global_attributes).

- {{ htmlattrdef("value") }}
  - : O valor numérico atual. Ele deve estar entre os valores mínimos e máximo (o atributo **min** e o atributo **max**) se eles estiverem especificados. Se não especificado ou mal formatado, o valor é 0. Se especificado, mas fora do intervalo dado pelos atributos **min** e **max**, o valor é igual ao extremo do intervalo mais próximo.
- {{ htmlattrdef("min") }}
  - : O limite numérico mínimo do intervalo medido. Deve ser menor que o valor máximo (o atributo **max**), se especificado. Se não especificado, o valor mínimo é 0.
- {{ htmlattrdef("max") }}
  - : O limite numérico máximo do intervalo medido. Deve ser maior que o valor mínimo (o atributo **min**), se especificado. Se não especificado, o valor máximo é 1.
- {{ htmlattrdef("low") }}
  - : O limite numérico máximo da parte inferior do intervalo medido. Deve ser maior que o valor mínimo (o atibuto **min**), e também ser menor que o valor alto e o valor máximo (os atributos **high** e **max**, respectivamente), se estiver especificado. Se não especificado, ou se for menor que o valor mínimo, o valor de **low** é igual ao valor mínimo.
- {{ htmlattrdef("high") }}
  - : O limite numérico mínimo da parte superior do intervalo medido. Deve ser menor que o valor máximo (o atibuto **max**), e também ser maior que o valor baixo e o valor mínimo (os atributos **low** e **min**, respectivamente), se estiver especificado. Se não especificado, ou se for maior que o valor máximo, o valor de **high** é igual ao valor máximo.
- {{ htmlattrdef("optimum") }}
  - : Esse atributo indica o valor numérico ótimo. Deve estar dentro do intervalo (definido pelos atributos **min** e **max**). Quando com os atributos **low** e **high**, ele indica a região do intervalo qu é considerada preferível. Por exemplo, se estiver entre os atributos **min** e **low**, então a parte inferior do intervalo é considerada como ótima.
- {{ htmlattrdef("form") }}
  - : Esse atributo associa o elemento com um elemento `form` que é dono de um elemento `meter`. Por exemplo, um elemento `meter` pode estar mostrando um intervalo correspondente a um elemento `input` do **type**(tipo) _number_. Esse atributo só é utilizado se o elemento `meter` está sendo utilizado como um elemento associado a um formulário; mesmo assim, ele pode se romitido se o elemento for um descendente de um elemento `form`.

## Exemplos

### Exemplo simples

```html
<p>
  Aqueça o forno para <meter min="200" max="500" value="350">350 graus</meter>.
</p>
```

No Google Chrome, o medidor aparece como:

![meter1.png](/@api/deki/files/4940/=meter1.png)

### Exemplos de intervalos com High e Low

Note que nesse exemplo o atributo **min** foi omitido; isso é permitido, pois ele irá ser, por padrão, 0.

```html
<p>
  Ele recebeu <meter low="69" high="80" max="100" value="84">B</meter> no exame.
</p>
```

No Google Chrome, o medidor aparece como:

![meter2.png](/@api/deki/files/4941/=meter2.png)

## Compatibilidade com navegadores

{{Compat("html.elements.meter")}}

## Veja também

- {{ HTMLElement("progress") }}
