---
title: Window.history
slug: Web/API/Window/history
---

{{ APIRef }}

A propriedade só de leitura **Window\.history** retorna uma referência ao objeto History, que fornece uma interface para manipular o histórico de sessão do navegador (páginas visitadas na guia ou quadro em que a página atual é carregada).

Consulte [Manipulação do histórico do navegador](/pt-BR/DOM/Manipulating_the_browser_history) para obter exemplos e detalhes. Em particular, esse artigo explica os recursos de segurança dos métodos pushState () e replaceState () que você deve conhecer antes de usá-los.

## Syntax

```
var historyObj = window.history;
```

## Example

```js
History.back(); // equivalente ao clique no botão Voltar
History.go(-1); // equivalente a history.back ();
```

## Notas

Para páginas de nível superior, você pode ver a lista de páginas no histórico da sessão, acessível através do objeto Histórico, nos menus suspensos do navegador ao lado dos botões para trás e para frente.

Por motivos de segurança, o objeto Histórico não permite que o código não privilegiado acesse os URLs de outras páginas no histórico da sessão, mas permite que ele navegue pelo histórico da sessão.

Não há nenhuma maneira de limpar o histórico da sessão ou desabilitar a navegação para trás / para frente do código não privilegiado. A solução disponível mais próxima é o método [location.replace ()](/pt-BR/DOM/window.location#replace), que substitui o item atual do histórico da sessão pelo URL fornecido.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
