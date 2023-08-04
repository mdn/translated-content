---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest")}}

A interface **`FormData`** fornece uma maneira fácil de construir um conjunto de pares chave/valor representando campos de um elemento `form` e seus valores, os quais podem ser facilmente enviados utilizado o método [`send()`](</pt-BR/docs/DOM/XMLHttpRequest#send()> "XMLHttpRequest#send()") do XMLHttpRequest. Essa interface utiliza o mesmo formato que um `form` utilizaria se o tipo de codificação estivesse configurado como "multipart/form-data".

Um objeto `FormData` pode ser usado diretamente em uma estrutura {{jsxref("Statements/for...of", "for...of")}} em vez de {{domxref('FormData.entries()', 'entries()')}}: `for (var p of myFormData)` é o mesmo que `for (var p of myFormData.entries())`.

> **Nota:** Esse recurso está disponível em [https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API](/pt-BR/docs/Web/API/Web_Workers_API)

## Construtor

- {{domxref("FormData.FormData","FormData()")}}
  - : Cria um novo objeto `FormData`.

## Métodos

- {{domxref("FormData.append")}}
  - : Acrescenta um novo valor em uma chave existente dentro de um objeto `FormData`, ou adiciona a chave se ela ainda não existir.
- {{domxref("FormData.delete")}}
  - : Apaga um par chave/valor de um objeto `FormData`.
- {{domxref("FormData.get")}}
  - : Retorna o primeiro valor associado com uma dada chave de dentro de um objeto `FormData`.
- {{domxref("FormData.getAll")}}
  - : Retorna uma matriz de todos os valores associados a uma determinada chave de dentro de um `FormData`.
- {{domxref("FormData.has")}}
  - : Retorna um valor boleano indicando se um objeto `FormData` contém um certo par chave/valor.
- {{domxref("FormData.set")}}
  - : Define um novo valor para uma chave existente dentro de um objeto `FormData`, ou adiciona a chave/valor se ele ainda não existir.

> **Nota:** Para ser claro, a diferença entre {{domxref("FormData.set()")}} e {{domxref("FormData.append()")}} é que, se a chave especificada não existir, {{domxref("FormData.set()")}} irá substituir o valor existente por um novo, enquanto {{domxref("FormData.append()")}} irá acrescentar um novo valor no final dos valores existentes. Veja as suas páginas dedicadas para código de exemplo.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("XMLHTTPRequest")}}
- [Usando XMLHttpRequest](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Usando objetos FormData](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
