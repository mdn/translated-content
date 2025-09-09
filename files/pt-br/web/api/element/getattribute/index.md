---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---

{{APIRef("DOM")}}

## Resumo

`getAttribute()` retorna o valor de um argumento específico do elemento. Se o atributo não existir, o valor retornado será `null` ou `""` (string vazia). Veja [Notas](#notas) para mais detalhes.

## Sintaxe

```
var atributo = element.getAttribute(nomeDoAtributo);
```

onde

- `atributo` é uma string contendo o valor do `nomeDoAtributo`.
- `nomeDoAtributo` é o nome do atributo cujo deseja se obter o valor.

## Exemplo

```js
var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");

alert(align); // mostra o valor do atributo "align" do elemento com id="div1"
```

## Notas

Quando for utilizado para um elemento HTML num DOM sinalizado como documento HTML, `getAttribute()` troca de caixa alta para caixa baixa (maiúscula para minúscula) seu argumento antes de prosseguir.

Essencialmente todos navegadores (Firefox, Internet Explorer, versões recentes do Opera, Safari, Konqueror, e iCab, por exemplo) retornam `null` quando o atributo especificado não existe no elemento em questão, seguindo que [o esboço atual de especificações DOM](https://dom.spec.whatwg.org/#dom-element-getattribute) diz. A velha especificação do DOM 3 Core, por sua vez, diz que correto é retornar uma _string vazia_ e algumas implementações de DOM se comportam dessa forma. Por exemplo, a implementação do getAttribute no XUL (Gecko) segue as especificações do DOM 3 Core e retorna uma string vazia. Consequentemente, deve-se usar {{domxref("Element.hasAttribute()")}} para checar a existência do atributo antes de utilizar o `getAttribute()`caso exista a possibilidade do argumento inexistir.

## Compatibilidade com navegadores

{{Compat}}

## Especificação

- [DOM Level 2 Core: getAttribute](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (introduzido em [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))
- [HTML 5: APIs nos documentos HTML](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
