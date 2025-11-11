---
title: Background Fetch API
slug: Web/API/Background_Fetch_API
---

{{DefaultAPISidebar("Background Fetch API")}} {{SeeCompatTable}}

A **Background Fetch API** fornece um método para gerenciar downloads que podem demandar um tempo significativo como filmes, arquivos de áudio e software.

## Conceitos e uso

Quando uma aplicação web exige que o usuário faça downloads de arquivos grandes, geralmente cria-se um problema pois o usuário precisa ficar conectado o tempo todo para que o download termine. Se o usuário perde a conexão, fecha a tab ou sai da página o download para.

A {{domxref("Background Synchronization API")}} fornece uma maneira para os service workers adiarem o processamento até que um usuário esteja conectado; De toda forma, essa API não pode ser usada para tarefas que podem demorar, como fazer o download de um arquivo grande. A Background sync exige que o service worker esteja ativo até que o fetch seja completado, e para preservar bateria ou para prevenir que tasks indesejadas aconteçam em background o browser irá em algum momento parar a execução da tarefa.

A Background Fetch API resolve esse problema. Ela cria uma maneira do desenvolverdor web pedir ao browser que o mesmo faça chamadas em background, por exemplo quando o usuário clica em um botão para fazer o download de um arquivo de vídeo. O browser irá fazer o download de uma maneira visível ao usuário, mostrando o progresso do download e expondo ao usuário uma maneira de cancelar o mesmo. Quando o download termina, o browser irá abrir o service worker e nesse momento a aplicação pode fazer algo com o resultado se necessário.

A Background Fetch API permitirá que a chamada aconteça mesmo se o usuário inicie o processo estando desconectado. Uma vez que o usuário se conecta novamente o download irá iniciar. Se o usuário volta a ficar desconectado, o processo irá pausar até que a conexão volte.

## Interfaces

- {{domxref("BackgroundFetchManager")}}
  - : Um map onde as chaves são background fetch IDS e os valores são {{domxref("BackgroundFetchRegistration")}} objetos.
- {{domxref("BackgroundFetchRegistration")}}
  - : Representa a Background Fetch.
- {{domxref("BackgroundFetchRecord")}}
  - : Representa uma fetch request e responde isolada.
- {{domxref("BackgroundFetchEvent")}}
  - : O tipo de evento passo para `onbackgroundfetchabort` e `onbackgroundfetchclick`.
- {{domxref("BackgroundFetchUpdateUIEvent")}}
  - : O tipo de evento passado para `onbackgroundfetchsuccess` e `onbackgroundfetchfail`.

## Exemplos

Antes de usar Background Fetch, verifique o suporte do navegador.

```js
if (!("BackgroundFetchManager" in self)) {
  // executar um fallback para o download.
}
```

Para usar a Background Fetch é necessário que um service worker esteja registrado. Então podemos chamar
`backgroundFetch.fetch()` para executar o fetch. Essa chamada retorna uma promise que resolve com uma {{domxref("BackgroundFetchRegistration")}}.

A background fetch pode baixar vários arquivos. No nosso exemplo buscamos um MP3 e um JPEG. Isso permite que um pacote de arquivos que o usuário vê como um item (por exemplo, um podcast e uma arte) sejam baixados juntos.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episódio 5: Coisas interessantes.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

Você pode ver uma aplicação demo que implementa a Background fetch [aqui](https://glitch.com/edit/#!/bgfetch-http203?path=public%2Fclient.js%3A191%3A45).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Introdução a Background Fetch](https://developer.chrome.com/blog/background-fetch/)
- [Background Fetch - HTTP 203](https://www.youtube.com/watch?v=cElAoxhQz6w)
