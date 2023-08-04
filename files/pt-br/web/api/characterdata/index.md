---
title: CharacterData
slug: Web/API/CharacterData
---

{{APIRef("DOM")}}

A interface abstrata **CharacterData** representa um objeto {{domxref("Node")}} que contém caracteres. Esta é uma interface abstrata, o que significa que não há nenhum objeto do tipo `CharacterData`: ela é implementada por outras interfaces, como {{domxref("Text")}}, {{domxref("Comment")}} ou {{domxref("ProcessingInstruction")}}, que não são abstratas.

{{InheritanceDiagram}}

## Propriedades

_Herda propriedades de seu pai, {{domxref("Node")}}, e implementa as interfaces {{domxref("ChildNode")}} e {{domxref("NonDocumentTypeChildNode")}}._

- {{domxref("CharacterData.data")}}
  - : É um {{domxref("DOMString")}} representando os dados textuais contidos neste objeto.
- {{domxref("CharacterData.length")}} {{readonlyInline}}
  - : Retorna um `unsigned long` representando o tamanho da string contida em `CharacterData.data`.
- {{domxref("NonDocumentTypeChildNode.nextElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately following the specified one in its parent's children list, or `null` if the specified element is the last one in the list.
- {{domxref("NonDocumentTypeChildNode.previousElementSibling")}} {{readonlyInline}}
  - : Returns the {{domxref("Element")}} immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

## Methods

_Inherits methods from its parent, {{domxref("Node")}}, and implements the {{domxref("ChildNode")}} and {{domxref("NonDocumentTypeChildNode")}}_ interface.

- {{domxref("CharacterData.appendData()")}}
  - : Appends the given {{domxref("DOMString")}} to the `CharacterData.data` string; when this method returns, `data` contains the concatenated {{domxref("DOMString")}}.
- {{domxref("CharacterData.deleteData()")}}
  - : Removes the specified amount of characters, starting at the specified offset, from the `CharacterData.data` string; when this method returns, `data` contains the shortened {{domxref("DOMString")}}.
- {{domxref("CharacterData.insertData()")}}
  - : Inserts the specified characters, at the specified offset, in the `CharacterData.data` string; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("ChildNode.remove()")}} {{experimental_inline}}
  - : Removes the object from its parent children list.
- {{domxref("CharacterData.replaceData()")}}
  - : Replaces the specified amount of characters, starting at the specified offset, with the specified {{domxref("DOMString")}}; when this method returns, `data` contains the modified {{domxref("DOMString")}}.
- {{domxref("CharacterData.substringData()")}}
  - : Returns a {{domxref("DOMString")}} containing the part of `CharacterData.data` of the specified length and starting at the specified offset.

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [The DOM interfaces index](/pt-BR/docs/DOM/DOM_Reference).
