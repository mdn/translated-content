---
title: Window.alert
slug: Web/API/Window/alert
---

{{ APIRef }}

O método **`Window.alert()`** mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK.

## Sintaxe

```
window.alert(message);
```

- `message` é uma string opcional com o texto que você quer exibir na caixa de diálogo, ou, ainda, um objeto a ser convertido em string e exibido.

## Exemplo

```js
window.alert("Hello world!");
```

resulta em:

![Image:AlertHelloWorld.png](/files/130/AlertHelloWorld.png)

## Notas

A caixa de diálogo de aviso deve ser utilizada para mensagens que não requeiram nenhuma resposta da parte do usuário, a não ser o reconhecimento da mensagem.

The following text is shared between this article, DOM:window\.prompt and DOM:window\.confirmCaixas de diálogo são janelas modais - elas evitam que o usuário acesse o resto da interface do programa sem ter fechado a caixa de diálogo. Por essa razão, você não deve utilizar excessivamente nenhuma função que crie caixas de diálogo (ou janelas modais).

Usuários do Chrome (por exemplo, em extensões) devem utilizar os métodos da interface `nsIPromptService` como alternativa.

O argumento agora é opcional conforme exigido na especificação.

## Especificação

Especificado no HTML5.

## Ver também

- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
- Para o [Mozilla Chrome](/pt-BR/docs/Glossary/Chrome), veja `nsIPromptService.alert()` e `nsIPromptService.alertCheck()`
