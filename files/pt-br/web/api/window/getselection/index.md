---
title: Window.getSelection()
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

## Resumo

Retorna um objeto {{domxref("Selection")}} representando a parte do texto selecionada pelo usuário ou a posição atual do cursor.

## Syntax

```
selection = window.getSelection();
```

- `selection` é um objeto {{domxref("Selection")}}. Quando convertido para string, seja adicionando uma string vazia (" ") ou usando {{jsxref("String.toString()")}}, esse objeto retorna o texto selecionado.

## Example

```js
function foo() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // do stuff with the range
}
```

## Nota

### Representação do objeto Selection em String

No JavaScript, quando um objeto é passado para uma função que espera uma string (como {{ Domxref("window.alert()") }} ou {{ Domxref("document.write()") }}), o método {{jsxref("Object.toString", "toString()")}} do objeto é chamado e o valor retornado é passado para a função. Isso pode fazer com que o objeto pareça ser uma string quando usado com outras funções quando na verdade é um objeto com propriedades e métodos.

No exemplo acima, `selObj.toString()` é chamado automaticamente quando é passado para {{domxref("window.alert()")}}. Contudo, tentar usar propriedades ou métodos do objeto JavaScript [String](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) como [`length`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length) ou `substr diretamente no objeto` {{domxref("Selection")}} resultará em erro se o objeto não possuir essa propriedade ou método e pode retornar valores inesperados mesmo se os tiver. Para usar um objecto `Selection` como uma string, faça a chamada do seu método `toString()` diretamente:

```js
var selectedText = selObj.toString();
```

- `selObj` é um objeto `Selection`.
- `selectedText` é uma string (Selected text).

### Objectos Relacionados

É útil também notar que você pode chamar {{domxref("Document.getSelection()")}}, que funciona de forma idêntica.

Inputs HTML provêm APIs mais simples para se trabalhar com seleções (veja {{domxref("HTMLInputElement.setSelectionRange()")}}).

Note a diferença entre _selection_ e _focus_. {{domxref("Document.activeElement")}} retorna o elemento com foco.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
- {{domxref("Document.activeElement")}}, {{domxref("HTMLElement.focus()")}}, and {{domxref("HTMLElement.blur()")}}
