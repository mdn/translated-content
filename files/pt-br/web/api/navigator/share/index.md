---
title: Navigator.share()
slug: Web/API/Navigator/share
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

O método **`navigator.share()`** da API de compartilhamento da Web chama o mecanismo de compartilhamento nativo do dispositivo.

## Sintaxe

```
var sharePromise = navigator.share(data);
```

### Parâmetros

- `data`

  - : Um objeto que contém dados para compartilhar. Pelo menos um dos seguintes campos deve ser especificado. As opções disponíveis são:

    - `url`: Um {{domxref ("USVString")}} representando uma URL a ser compartilhada.
    - `text`: Um {{domxref ("USVString")}} representando texto a ser compartilhado.
    - `title`: Um {{domxref ("USVString")}} representando o título a ser compartilhado.

### Valor de retorno

Um {{domxref ("Promise")}} que será cumprido assim que um usuário concluir uma ação de compartilhamento (geralmente o usuário escolheu um aplicativo para compartilhar). Ele rejeitará imediatamente se o parâmetro de dados não estiver especificado corretamente e também rejeitará se o usuário cancelar o compartilhamento.

## Exemplos

Em nosso teste de [compartilhamento na Web](https://mdn.github.io/dom-examples/web-share/) ([consulte o código-fonte](https://github.com/mdn/dom-examples/blob/master/web-share/index.html)), há um botão que, quando clicado, invoca a API de compartilhamento na Web para compartilhar o URL da MDN. O JavaScript fica assim:

```js
const shareData = {
  title: "MDN",
  text: "Aprenda desenvolvimento web no MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Deve ser acionado algum tipo de "ativação do usuário"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    resultPara.textContent = "Error: " + e;
  }
  resultPara.textContent = "MDN compartilhado com sucesso!";
});
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref('navigator.canShare', 'navigator.canShare()')}}
