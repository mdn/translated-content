---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}
Este tipo representa um atributo de elemento DOM como um objeto. Na maioria dos métodos DOM, você provavelmente irá retornar diretamente o atributo como uma string (e.g., {{domxref("Element.getAttribute()")}}, mas certas funções (e.g., {{domxref("Element.getAttributeNode()")}}) ou meios de iteração retornam tipos `Attr`.

{{InheritanceDiagram}}

> [!WARNING]
> Começando no Gecko 7.0, os que serão removidos mostram mensagens de aviso no console. Você deve revisar seu código de acordo. Veja [métodos e propriedades descontinuadas](#propriedades_e_métodos_descontinuados) para uma lista completa.

## Propriedades

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}

  - : O nome do Atributo.

- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : Uma {{domxref("DOMString")}} representando o namespace URI do atributo, ou `null` se não há namespace
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : Uma {{domxref("DOMString")}} representando a parte local do nome qualificado do atributo.
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : Uma {{domxref("DOMString")}} representando o prefixo do namespace do atributo ou `null` se nenhum prefixo foi especificado.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}
  - : O elemento que possui o atributo.

> [!NOTE]
> DOM Level 4 removeu esta propriedade. Foi suposto que como você recebe um objeto `Attr` de um {{domxref("Element")}}, você já deve saber qual é o elemento associado.
> Como isto não é sempre verdadeiro em casos como objetos `Attr` sendo retornados pelo {{domxref("Document.evaluate")}}, o DOM Living Standard reintroduziu a propriedade.
>
> Gecko mostra uma mensagem de descontinuação começando no Gecko 7.0. Esta mensagem foi removida novamente no Gecko 49.0.

## Propriedades e métodos descontinuados

As seguintes propriedades e métodos foram descontinuados. Quando disponíveis, são substituidas adequadamente.

- `attributes`
  - : Esta propriedade agora sempre retorna `NULL`.
- `childNodes`
  - : Esta propriedade agora sempre retorna `NULL`.
- `firstChild`
  - : Esta propriedade agora sempre retorna `NULL`.
- `lastChild`
  - : Esta propriedade agora sempre retorna `NULL`.
- `nextSibling`
  - : Esta propriedade agora sempre retorna `NULL`.
- `nodeName`
  - : Use {{domxref("Attr.name")}} no lugar.
- `nodeType`
  - : Esta propriedade agora sempre retorna 2 (`ATTRIBUTE_NODE`).
- `nodeValue`
  - : Use {{domxref("Attr.value")}} no lugar.
- `ownerDocument`
  - : Provavelmente você nunca utilizou isto, então você não se importa que isso vai desaparecer.
- `ownerElement`
  - : Desde que você obtenha o objeto `Attr` de um {{domxref("Element")}}, você já conhece os elementos associados.
- `parentNode`
  - : Esta propriedade agora sempre retorna `NULL`.
- `previousSibling`
  - : Esta propriedade agora sempre retorna `NULL`.
- `specified`
  - : Esta propriedade agora sempre retorna `true`.
- `textContent`
  - : Use {{domxref("Attr.value")}} no lugar.

Os seguintes métodos foram reprovados:

- `appendChild()`
  - : Modifique o valor de {{domxref("Attr.value")}} no lugar.
- `cloneNode()`
  - : Provavelmente você nunca utilizou isto, então você não se importa que isso vai desaparecer.
- `createAttribute()`
  - : Use {{domxref("Element.setAttribute()")}} no lugar.
- `createAttributeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} no lugar.
- `getAttributeNode()`
  - : Use {{domxref("Element.getAttribute()")}} no lugar.
- `getAttributeNodeNS()`
  - : Use {{domxref("Element.getAttributeNS()")}} no lugar.
- `hasAttributes()`
  - : Este método agora sempre retorna false.
- `hasChildNodes()`
  - : Este método agora sempre retorna false.
- `insertBefore()`
  - : Modifique o valor de {{domxref("Attr.value")}} no lugar.
- `isEqualNode()`
  - : Provavelmente você nunca utilizou isto, então você não se importa que isso vai desaparecer.
- `normalize()`
  - : Provavelmente você nunca utilizou isto, então você não se importa que isso vai desaparecer.
- `removeAttributeNode()`
  - : Use {{domxref("Element.removeAttribute()")}} no lugar.
- `removeChild()`
  - : Modifique o valor de {{domxref("Attr.value")}} no lugar.
- `replaceChild()`
  - : Modifique o valor de {{domxref("Attr.value")}} no lugar.
- `setAttributeNode()`
  - : Use {{domxref("Element.setAttribute()")}} no lugar.
- `setAttributeNodeNS()`
  - : Use {{domxref("Element.setAttributeNS()")}} no lugar.

## Especificações

- [Document Object Model Core level 3: Interface Attr](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-637646024)
- [Document Object Model 4: Interface Attr](https://www.w3.org/TR/dom/#interface-attr)
