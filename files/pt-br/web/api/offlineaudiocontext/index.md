---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
---

{{APIRef("Web Audio API")}}A interface `OfflineAudioContext` é uma interface {{domxref("AudioContext")}} que representa um gráfico de processament de áudio construido a partir de conexões entre {{domxref("AudioNode")}}s. Em contraste com o padrão {{domxref("AudioContext")}}, um `OfflineAudioContext` não processa o áudio para o hardware do dispositivo; Em vez disso, ele gera, o mais rápido possível, e exibe o resultado para um {{domxref("AudioBuffer")}}.

{{InheritanceDiagram}}

## Construtor

- {{domxref("OfflineAudioContext.OfflineAudioContext()")}}
  - : Cria uma nova instância `OfflineAudioContext`.

## Propriedades

_Também herda propriedades da sua entidade paterna, {{domxref("BaseAudioContext")}}._

- {{domxref('OfflineAudioContext.length')}} {{readonlyinline}}
  - : Um número inteiro que representa o tamanho do buffer em quadros de amostra.

### Manipuladores de Eventos

- {{domxref("OfflineAudioContext.oncomplete")}}
  - : É uma chamada {{event("Event_handlers", "event handler")}} quando o processamento é encerrado, é quando o evento {{event("complete")}} - do tipo {{domxref("OfflineAudioCompletionEvent")}} - é gerado, após a versão baseada em eventos do {{domxref("OfflineAudioContext.startRendering()")}} é usada.

## Métodos

_Também herda métodos da interface paterna, {{domxref("BaseAudioContext")}}._

- {{domxref("OfflineAudioContext.resume()")}}
  - : Programa uma suspensão da progressão do tempo no contexto de áudio no horário especificado e retorna uma promessa.
- {{domxref("OfflineAudioContext.suspend()")}}
  - : Agende uma suspensão da progressão do tempo no contexto de áudio no horário especificado e retorna uma promessa.
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : Inicia a renderização do áudio, levando em consideração as conexões atuais e as mudanças programadas atuais. Esta página abrange a versão baseada em eventos e a versão baseada em promessas.

## Exemplo

Nesse exemplo, declaramos um ambos {{domxref("AudioContext")}} e um `OfflineAudioContext` objeto. Nós usamos o `AudioContext` para carregar uma faixa de áudio via XHR ({{domxref("AudioContext.decodeAudioData")}}), então o `OfflineAudioContext` para renderizar o áudio em um {{domxref("AudioBufferSourceNode")}} e reproduzir a trilha. Depois que o gráfico de áudio off-line estiver configurado, você deve renderizá-lo para {{domxref("AudioBuffer")}} usando {{domxref("OfflineAudioContext.startRendering")}}.

Quando a 'promise' `startRendering()` é resolvida, a renderização foi concluída e a saída `AudioBuffer` é retornada fora da 'promise.

Neste ponto, criamos outro contexto de áudio, criamos um {{domxref("AudioBufferSourceNode")}} dentro dele e configuramos o buffer para ser igual à promessa `AudioBuffer`. Isso é jogado como parte de um gráfico de áudio padrão simples.

> **Nota:** Para um exemplo de trabalho, veja nosso [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) Github repo (veja o [código fonte](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise) também.)

```js
// define o contexto de áudio online e offline

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// usa XHR para carregar uma faixa de áudio, e
// decodeAudioData para decodificar e OfflineAudioContext para renderizar

function getData() {
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function (buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx
        .startRendering()
        .then(function (renderedBuffer) {
          console.log("Rendering completed successfully");
          var audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();
          var song = audioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(audioCtx.destination);

          play.onclick = function () {
            song.start();
          };
        })
        .catch(function (err) {
          console.log("Rendering failed: " + err);
          // Nota: A promessa deve rejeitar quando o StartRendering é chamado uma segunda vez em um OfflineAudioContext
        });
    });
  };

  request.send();
}

// Run getData to start the process off

getData();
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando a API de áudio da Web](/pt-BR/docs/Web_Audio_API/Using_Web_Audio_API)
