---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
---

{{DefaultAPISidebar("Page Visibility API")}}

A **API de visibilidade de página** deixa você saber quando uma página da web está visível ou em foco. Com a navegação em abas, existem razões para que quaisquer páginas da web que estejam sendo executadas em segundo plano e não visíveis para o usuário. Quando o usuário minimiza a página ou muda para outra aba, a API envia um evento {{event("visibilitychange")}} informando o estado de visibilidade da página. Você pode detectar o evento e realizar algumas ações ou modificar o seu comportamento. Por exemplo, se a sua aplicação web estiver reproduzindo um video, ela pode pausar durante o momento que o usuário estiver olhando para outra aba, e reproduz novamente quando o usuário retorna para a aba. O usuário não perde nenhuma parte do video e pode continuar assistindo.

### Benefícios

A API é particularmente util para economizar recursos dando aos desenvolvedores a oportunidade de não realizar tarefas desnecessárias quando a página não está visível.

### Casos de uso

Alguns exemplos:

- Um site tem um carrossel de imagens que não devem avançar para o próximo slide a não ser que o usuário esteja visualizando a página.
- Uma aplicação mostrando um painel de informações não quer fazer requizições de atualizações ao servidor quando a página não estiver visível.
- Uma página quer detectar quando está sendo prerenderizada para poder contar o número de visualizações de forma mais precisa.

Desenvolvedores têm historicamente usado alternativas de se detectar isto. Por exemplo, registrando um handler onblur/onfocus na janela te ajuda a saber quando a sua página não é a ativa, mas isto não te diz se a sua página não está visível para o usuário. Já a API de Visibilidade de Página faz isto. (Quando comparada com a técnica de registrar handlers de onblur/onfocus na janela, uma diferencia chave é que a página _não_ fica escondida quando outra janela é ativada e a janela do navegador perde o foco. A página só fica escondida quando o usuário troca para uma aba diferente ou minimiza a janela do navegador.)

## Exemplo

Veja [exemplo em caso real](http://daniemon.com/tech/webapps/page-visibility/) (video com som).

O exemplo, que pausa o video quando você troca para outra aba e volta a reproduzir quando você retorna, foi criado com o seguinte código:

```js
// Configura o nome da propriedade hidden e o evento de mudança para visibilidade
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  // Suporte para Opera 12.10 e Firefox 18 em diante
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("videoElement");

// Se a página está escondida, pausa o video;
// Se a página está visível, reproduz o video
function handleVisibilityChange() {
  if (document[hidden]) {
    videoElement.pause();
  } else {
    videoElement.play();
  }
}

// Alerta se o navegador não suporta addEventListener ou a API de visibilidade da página
if (
  typeof document.addEventListener === "undefined" ||
  typeof document[hidden] === "undefined"
) {
  alert(
    "This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.",
  );
} else {
  // Manipula o evento de mudança da visibilidade da página
  document.addEventListener(visibilityChange, handleVisibilityChange, false);

  // Reverte para o favicon existente para o site quando a página é fechada;
  // caso contrário, o favicon continua como paused.png
  window.addEventListener(
    "unload",
    function () {
      favicon.change("/favicon.ico");
    },
    false,
  );

  // Quando o video é pausado, configura o favicon.
  // Isso mostra a imagem paused.png
  videoElement.addEventListener(
    "pause",
    function () {
      favicon.change("images/paused.png");
    },
    false,
  );

  // Quando o video é reproduzido, configura o favicon.
  videoElement.addEventListener(
    "play",
    function () {
      favicon.change("images/playing.png");
    },
    false,
  );

  // Configura o título da aba com o tempo atual do video
  videoElement.addEventListener(
    "timeupdate",
    function () {
      document.title = Math.floor(videoElement.currentTime) + " segundo(s)";
    },
    false,
  );
}
```

## Visão geral das propriedades

### `document.hidden` Somented leitura

Retorna `true` se a página está escondida para o usuário, caso contrário, retorna `false`.

### `document.visibilityState` Somente leitura

É a `cadeia de caracteres que denota a visibilidade do documento`. Possíveis valores:

- `visible` : o conteúdo da página pode estar parcialmente visível. Na prática, isso significa que a página é a aba ativa de uma janela não minimizada.
- `hidden` : o conteúdo da página não está visível para o usuário. Na prática, isso significa que o documento está em uma aba inativa, em uma janela minimizada, ou o sistema operacional está com a tela travada.
- `prerender` : o conteúdo da página está sendo prerenderizado e não está visível para o usuário(considerado como escondida para motivos de `document.hidden`). O documento pode começar neste estado, mas nunca mudar dele para algum outro. Nota: a compatibilidade com navegadores é opcional.
- `unloaded` : a página está sendo removida da memória(a aba ou janela está sendo fechada). Nota: a compatibilidade com navegadores é opcional

```js
//startSimulation e pauseSimulation definidas em outro lugar
function handleVisibilityChange() {
  if (document.hidden) {
    pauseSimulation();
  } else {
    startSimulation();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
```

## Nota

Os estados de visibilidade de {{HTMLElement("iframe")}} são os mesmos do documento pai. Esconder o iframe com propriedades CSS não ativa os eventos de visibilidade nem muda o estado do documento do conteúdo.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Descrição da [API de Visibilidade de Página](http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx) do IEBlog.
- Descrição da [API de visibilidade de Página](http://code.google.com/chrome/whitepapers/pagevisibility.html) do Google
