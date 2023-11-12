---
title: Window.prompt()
slug: Web/API/Window/prompt
---

{{ApiRef("Window")}}O Window\.prompt() exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.

## Sintaxe

```
resultado = window.prompt(texto, valor);
```

- `resultado` é uma cadeia de caracteres contendo o texto digitado pelo usuário, ou um valor nulo.
- `texto` é uma cadeia de caracteres para exibir ao usuário. Este parâmetro é opcional e pode ser omitido se não há nada para mostrar na janela de prompt.
- `valor` é uma cadeia de caracteres contendo o valor padrão exibido na caixa de entrada de texto. É um parâmetro opcional. Note que no Internet Explorer 7 e 8, se você não fornecer este parâmetro, a cadeia de caracteres "undefined" é o valor padrão.

## Exemplo

```js
var signo = prompt("Qual é o seu signo?");

if (signo.toLowerCase() == "escorpião") {
  alert("Legal! Eu sou de Escorpião também!");
}

// há muitas formas de se usar o recurso prompt
var sign = window.prompt(); // abrir uma janela de promtpt em branco
var sign = prompt(); //  abrir uma janela de promtpt em branco
var sign = window.prompt("Você está se sentindo com sorte"); // abrir uma janela com o texto "Você está se sentindo com sorte"
var sign = window.prompt("Você está se sentindo com sorte", "certamente"); // abrir uma janela com o texto "Você está se sentindo com sorte" e com o valor padrão "certamente"
```

Quando o usuário pressiona o botão OK, o texto digitado no campo de texto é retornado. Se o usuário pressionar OK sem ter digitado qualquer texto, uma cadeia de caracteres vazia é retornada. Se o usuário pressionar o botão Cancelar, esta função retornará `null`.

{{todo("external image!")}} O prompt acima aparece da seguinte forma (no Chrome do Windows 7):

![](https://lh4.googleusercontent.com/-uDx7r8y4tV8/UKv_PjG163I/AAAAAAAAHd0/Arwk0l4cpq0/s362/Prompt_Chrome_Windows7.png)

## Notas

Uma caixa de diálogo prompt contém uma caixa de texto de linha única, um botão Cancelar, e um botão OK, e retorna o (possivelmente vazio) texto que o usuário digitou naquela caixa de texto.

The following text is shared between this article, DOM:window\.confirm and DOM:window\.alertAs caixas de diálogo são janelas modais; eles impedem o usuário de acessar o resto da interface do programa até que a caixa de diálogo seja fechada. Por esta razão, você não deve abusar de qualquer função que crie uma caixa de diálogo (ou janela modal).

Por favor, note que o resultado é uma cadeia de caracteres. Isso significa que você deve, algumas vezes, converter o valor dado pelo usuário. Por exemplo, se a resposta deve ser um número, você deve converter o valor para `Number:` var aNumber = Number(window\.prompt("Digite um número", ""));

Os códigos do [Mozilla Chrome](/pt-BR/docs/Chrome) (e.g. Firefox extensions) ao invés disso, devem usar os métodos da interface `nsIPromptService`.

No Safari, se o usuário clicar em Cancelar, a função retornará uma cadeia de caracteres vazia. Portanto, ele não diferenciará o cancelamento do usuário de uma cadeia de caracteres vazia na caixa de texto.

Esta função não tem efeito na versão Modern UI/Metro do Internet Explorer para Windows 8. Ele não exibe o prompt para o usuário, e sempre retornará `undefined`. Não está claro se é um erro ou um comportamento intencional. Versões desktop do IE implementam esta função.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
