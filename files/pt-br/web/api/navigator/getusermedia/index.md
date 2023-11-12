---
title: navigator.getUserMedia
slug: Web/API/Navigator/getUserMedia
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

O método Navigator.getUserMedia() atualmente esta _deprecated_ (obsoleto), ele é responsável por pedir a permissão do usuário para usar até 1 dispositivo de entrada de vídeo (como câmera, ou tela compartilhada) e até 1 dispositivo de entrada de áudio (como o microfone) como fonte para o stream de mídia (pode ser representado por uma instância `MediaStream`).

Se o usuário der permissão, a MediaStream (o _track_ do video e/ou audio) , é entregue ao _callback_ de sucesso, se a permissão é negada, pode ser que não haja dispositivo compatível ou alguma condição de erro aconteceu, retornando o _callback_ de erro com uma instância do objeto {{domxref("MediaStreamError")}} , com a descrição do erro que aconteceu, se o usuário não fizer nenhuma escolha, nenhum _callback_ é retornado.

## Sintaxe

```
navigator.getUserMedia ( permissoes, callbackSucesso, callbackErro );
```

**Exemplo**

Este é um exemplo de uso da função getUserMedia() com prefixos específicos dos navegadores.

```js
navigator.getMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

navigator.getMedia(
  // permissoes
  {
    video: true,
    audio: true,
  },

  // callbackSucesso
  function (localMediaStream) {
    var video = document.querySelector("video");
    video.src = window.URL.createObjectURL(localMediaStream);
    video.onloadedmetadata = function (e) {
      // Faz algo com o vídeo aqui.
    };
  },

  // callbackErro
  function (err) {
    console.log("O seguinte erro ocorreu: " + err);
  },
);
```

## Parâmetros

| parâmetro       | Obrigatório/ Opcional | Descrição                                                                                |
| --------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| permissoes      | Obrigatório           | Os tipos de mídia habilitados no objeto LocalMediaStream enviado para a callbackSucesso. |
| callbackSucesso | Obrigatório           | A função da aplicação a ser invocada para receber o objeto LocalMediaStream.             |
| callbackErro    | Opcional              | A função a ser invocada na aplicação se a chamada a getUserMedia falhar.                 |

### permissoes

O parâmetro permissoes é um objeto MediaStreamConstraints com dois membros do tipo Boolean: `video` e `audio`. Estes membros descrevem os tipos de mídia habilitados no objeto [LocalMediaStream](/pt-BR/docs/WebRTC/MediaStream_API#LocalMediaStream). Pelo menos um destes membros deve ser especificado para que o argumento seja validado. Se um membro especificado não for suportado pelo navegador, a função getUserMedia invocará a callbackErro com o erro NOT_SUPPORTED_ERROR. Se o navegador não puder encontrar nenhuma fonte de mídia com o tipo especificado, a função getUserMedia invocará a callbackErro com o erro MANDATORY_UNSATISFIED_ERR.

Se o valor de um membro não estiver especificado no objeto, o valor padrão deste membro será falso. Veja como configurar o objeto permissoes para obter tanto áudio como vídeo:

```
{ video: true, audio: true }
```

### callbackSucesso

A função getUserMedia invocará a função especificada em callbackSucesso com o objeto [LocalMediaStream](/pt-BR/docs/WebRTC/MediaStream_API#LocalMediaStream) que contém a fonte de mídia. Você pode associar este objeto com o elemento apropriado e trabalhar com ele, como mostrado no exemplo a seguir:

```js
function(localMediaStream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(localMediaStream);
   video.onloadedmetadata = function(e) {
      // Faz algo com o vídeo aqui.
   };
}
```

### callbackErro

A função getUserMedia invocará a função especificada em callbackErro com um argumento `code`. Os códigos de erro são descritos abaixo:

| Erro                        | Descrição                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------- |
| PERMISSION_DENIED           | O usuário não permitiu acesso a um dispositivo de mídia necessário para essa operação. |
| NOT_SUPPORTED_ERROR         | Uma mídia especificada não é suportada pelo navegador.                                 |
| MANDATORY_UNSATISFIED_ERROR | Nenhuma fonte de mídia do tipo especificado foi encontrada.                            |

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [WebRTC](/pt-BR/docs/WebRTC) - a página introdutória a API
- [MediaStream API](/pt-BR/docs/WebRTC/MediaStream_API) - a API para objetos de fonte de mídia
- [Taking webcam photos](/pt-BR/docs/WebRTC/taking_webcam_photos) - um tutorial sobre como usar a getUserMedia()
