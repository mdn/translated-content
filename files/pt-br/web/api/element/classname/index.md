---
title: Element.className
slug: Web/API/Element/className
tags:
  - API
  - DOM
  - Gecko
  - Property
  - Reference
translation_of: Web/API/Element/className
---
{{APIRef("DOM")}}

## Sumário

**className** retorna e define o valor do atributo `class` do elemento especificado.

## Syntax

```
var cName = elementNodeReference.className;
elementNodeReference.className = cName;
```

- _cName_ sendo uma variável de texto (string) que represente uma única classe, ou múltiplas classes (separadas por um espaço) do elemento selecionado.

## Exemplo

```js
var element = document.getElementById("div1");

if (element.className === "fixed") {
  // verifica a partir de uma classe específica do elemento
  goNextElement();
}
```

## Notas

`O nome className` é utilizado para esta propriedade ao invés de `class` por conta de conflitos com a palavra-chave "class" em variáveis linguagens que são utilizadas para manipulação do [DOM](/pt-BR/docs/Web/API/Document_Object_Model).

## Especificações

| Specification                                                                                    | Status                           | Comment           |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{SpecName("DOM WHATWG", "#dom-element-classname", "element.className")}} | {{Spec2("DOM WHATWG")}} |                   |
| {{SpecName("DOM4", "#dom-element-classname", "element.className")}}         | {{Spec2("DOM4")}}         |                   |
| {{SpecName("DOM2 HTML", "html.html#ID-95362176", "element.className")}} | {{Spec2("DOM2 HTML")}}     | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.Element.className")}}

## Veja também

- {{domxref("element.classList")}}
