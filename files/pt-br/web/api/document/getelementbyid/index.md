---
title: document.getElementById()
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

## Sumário

Retorna a referência do elemento através do seu ID.

## Sintaxe

```
var elemento = document.getElementById(id);
```

onde

- `elemento` é uma referência a um objeto {{domxref("Element")}}, ou null se um elemento com o ID especificado não estiver contido neste documento.
- `id` é uma string que diferência maiúsculas e minúsculas representando o ID único do elemento sendo procurado.

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <title>Exemplo getElementById</title>
    <script>
      function mudarCor(novaCor) {
        var elemento = document.getElementById("para1");
        elemento.style.color = novaCor;
      }
    </script>
  </head>
  <body>
    <p id="para1">Algum texto de exemplo</p>
    <button onclick="mudarCor('blue');">Azul</button>
    <button onclick="mudarCor('red');">Vermelho</button>
  </body>
</html>
```

## Notas

Os novatos devem notar que a caixa de 'Id' no nome deste método _deve_ estar correta para o código da função - 'getElementByID _não funciona_, por mais natural que possa parecer.

Se não existe um elemento com o id fornecido, esta função retorna `null`. Note que o parâmetro ID diferência maiúsculas e minúsculas. Assim document.getElementById("Main") retornará `null` ao invés do elemento `<div id="main">`, devido a "M" e "m" serem diferentes para o objetivo deste método.

**Elementos que não estão no documento** não são procurados por `getElementById`. Quando criar um elemento e atribuir um ID ao mesmo, você deve inserir o elemento na árvore do documento com [`insertBefore`](/pt-BR/docs/DOM/Node.insertBefore) ou método similar antes que você possa acessá-lo com `getElementById`:

```js
var elemento = document.createElement("div");
elemento.id = "testqq";
var el = document.getElementById("testqq"); // el será null!
```

**Documentos não-HTML.** A implementação do DOM deve ter informações que diz quais atributos são do tipo ID. Atributos com o nome "id" não são do tipo ID a menos que assim sejam definidos nos documentos DTD. O atributo `id` é definido para ser um tipo ID em casos comuns de [XHTML](/pt-BR/docs/XHTML), [XUL](/pt-BR/docs/XUL), e outros. Implementações que não reconhecem se os atributos são do tipo ID, ou não são esperados retornam `null`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- referências de [document](/pt-BR/docs/DOM/document) para outros métodos e propriedades podem ser usados para obter referências para elementos no documento.
- [xml:id](/pt-BR/docs/xml/xml:id) - tem um método utilitário que permite que obtenha 'xml:id' em documentos XML
