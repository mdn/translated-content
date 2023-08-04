---
title: AudioContext
slug: Web/API/AudioContext
---

{{APIRef("Web Audio API")}}

A interface `AudioContext` representa um grafo de processamento de áudio construído a partir de nós de áudio conectados, cada um representado por um {{domxref("AudioNode")}} Um contexto de áudio controla a criação dos nós que contém e a execução do processamento de áudio, ou decodificação. Você precisa criar um AudioContext antes de fazer qualquer outra coisa, pois tudo acontece dentro de um contexto.

Um `AudioContext`pode ser um alvo de eventos, portanto, ele implementa a interface {{domxref("EventTarget")}}.

## Construtor

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : Cria e retorna um novo objeto `AudioContext`.

## Propriedades

- {{domxref("AudioContext.currentTime")}} {{readonlyInline}}
  - : Retorna um double representando um tempo cada vez maior de hardware em segundos usados para agendamento. Começa em `0`.
- {{domxref("AudioContext.destination")}} {{readonlyInline}}
  - : Retorna um {{domxref("AudioDestinationNode")}} representando o destino final de todo o áudio no contexto. Pode ser pensado como o dispositivo de renderização de áudio.
- {{domxref("AudioContext.listener")}} {{readonlyInline}}
  - : Retorna o objeto {{domxref("AudioListener")}}, usado para especialização 3D
- {{domxref("AudioContext.sampleRate")}} {{readonlyInline}}
  - : Retorna um float representando a taxa de amostragem (em amostras por segundo) usado por todos os nós neste contexto. A taxa de amostragem de um {{domxref("AudioContext")}} não pode ser alterada.
- {{domxref("AudioContext.state")}} {{readonlyInline}}
  - : Retorna o estado atual do `AudioContext`.
- {{domxref("AudioContext.mozAudioChannelType")}} {{ non-standard_inline() }} {{readonlyInline}}
  - : Usado para retornar o canal de áudio que o som toca em um {{domxref("AudioContext")}} irá tocar em um dispositivo do Firefox OS.

### Manipuladores de eventos

- {{domxref("AudioContext.onstatechange")}}

  - : Um manipulador de evento que é executado quando um evento do tipo {{event("statechange")}} dispara.

    Isso ocorre quando o estado `AudioContext` muda, devido ao chamado de um dos métodos de mudança de estado ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, or {{domxref("AudioContext.close")}}).

## Métodos

_Também implementa métodos a partir da interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioContext.close()")}}
  - : Fecha o contexto de áudio, liberando todos os recursos de áudio do sistema que ele usa.
- {{domxref("AudioContext.createBuffer()")}}
  - : Cria um novo, objeto {{ domxref("AudioBuffer") }} vázio, que pode ser preenchido por dados e reproduzido através de um {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioContext.createBufferSource()")}}
  - : Cria um {{domxref("AudioBufferSourceNode")}}, que pode ser usado para reproduzir e manipular dados de audio contidos dentro de um objeto {{ domxref("AudioBuffer") }}. {{ domxref("AudioBuffer") }} são criados usando {{domxref("AudioContext.createBuffer")}} ou retornado por {{domxref("AudioContext.decodeAudioData")}} quando decodifica com sucesso uma faixa de áudio.
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : Cria um {{domxref("MediaElementAudioSourceNode")}} associado com um {{domxref("HTMLMediaElement")}}. Isso pode ser usado para reproduzir e manipular o audio This can be used to play and manipulate audio dos elementos {{HTMLElement("video")}} ou {{HTMLElement("audio")}}.
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : Cria um {{domxref("MediaStreamAudioSourceNode")}} associado com um {{domxref("MediaStream")}} um fluxo (stream) de áudio que pode vir do microfone local do computador ou de outras fontes.
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : Cria um {{domxref("MediaStreamAudioDestinationNode")}} associado com um {{domxref("MediaStream")}} representando um fluxo (stream) de audio que pode ser armazenado em um arquivo local ou enviados para outro computador.
- {{domxref("AudioContext.createScriptProcessor()")}}
  - : Cria um a {{domxref("ScriptProcessorNode")}}, que pode ser usado para processamento de áudio direto via JavaScript.
- {{domxref("AudioContext.createStereoPanner()")}}
  - : Cria um {{domxref("StereoPannerNode")}}, que pode ser usado para aplicar uma panorâmica estéreo para uma fonte de áudio.
- {{domxref("AudioContext.createAnalyser()")}}
  - : Creates an {{domxref("AnalyserNode")}}, which can be used to expose audio time and frequency data and for example to create data visualisations.
- {{domxref("AudioContext.createBiquadFilter()")}}
  - : Cria um {{domxref ("BiquadFilterNode")}}, que representa um filtro de segunda ordem configurável como vários tipos de filtros comuns diferentes: high-pass, low-pass, band-pass, etc.
- {{domxref("AudioContext.createChannelMerger()")}}
  - : Cria um {{domxref ("ChannelMergerNode")}}, que é usado para combinar canais de múltiplos fluxos de áudio em um único fluxo de áudio.
- {{domxref("AudioContext.createChannelSplitter()")}}
  - : Cria um {{domxref ("ChannelSplitterNode")}}, que é usado para acessar os canais individuais de um fluxo de áudio e processá-los separadamente.
- {{domxref("AudioContext.createConvolver()")}}
  - : Cria um {{domxref ("ConvolverNode")}}, que pode ser usado para aplicar efeitos de convolução ao seu gráfico de áudio, por exemplo, um efeito de reverberação.
- {{domxref("AudioContext.createDelay()")}}
  - : Cria um {{domxref ("DelayNode")}}, que é usado para atrasar o sinal de áudio recebido por uma certa quantia. Este nó também é útil para criar loops de feedback em um gráfico de API de Web Audio.
- {{domxref("AudioContext.createDynamicsCompressor()")}}
  - : Cria um {{domxref("DynamicsCompressorNode")}}, que pode ser usada para aplicar compressão acústica para um sínal de áudio.
- {{domxref("AudioContext.createGain()")}}
  - : Cria um {{domxref ("GainNode")}}, que pode ser usado para controlar o volume total do gráfico de áudio.
- {{domxref("AudioContext.createIIRFilter()")}}
  - : Cria um {{domxref ("IIRFilterNode")}}, que representa um filtro de segunda ordem configurável como vários tipos de filtros comuns diferentes.
- {{domxref("AudioContext.createOscillator()")}}
  - : Cria um {{domxref ("OscillatorNode")}}, uma fonte que representa uma forma de onda periódica. Isso basicamente gera um tom.
- {{domxref("AudioContext.createPanner()")}}
  - : Cria um {{domxref ("PannerNode")}}, que é usado para spatializar um fluxo de áudio recebido no espaço 3D.
- {{domxref("AudioContext.createPeriodicWave()")}}
  - : Cria um {{domxref ("PeriodicWave")}}, usado para definir uma forma de onda periódica que pode ser usada para determinar a saída de um {{domxref ("OscillatorNode")}}.
- {{domxref("AudioContext.createWaveShaper()")}}
  - : Cria um {{domxref ("WaveShaperNode")}}, que é usado para implementar efeitos de distorção não-lineares.
- {{domxref("AudioContext.createAudioWorker()")}}
  - : Cria um {{domxref ("AudioWorkerNode")}}, que pode interagir com um segmento de trabalho da Web para gerar, processar ou analisar o áudio diretamente. Isso foi adicionado à especificação em 29 de agosto de 2014, e ainda não foi implementado em nenhum navegador.
- {{domxref("AudioContext.decodeAudioData()")}}
  - : Decodifica assincronamente dados de arquivos de áudio contidos em {{domxref("ArrayBuffer")}}. Nesse caso, o ArrayBuffer geralmente é carregado a partir de um atributo de `resposta` {{domxref("XMLHttpRequest")}}'s definir o `responseType` para `arraybuffer`. Esse método funciona apenas em arquivos completos, não fragmentos de arquivos de áudio.
- {{domxref("AudioContext.resume()")}}
  - : Retoma a progressão do tempo em um contexto de áudio que anteriormente foi suspenso.
- {{domxref("AudioContext.suspend()")}}
  - : Suspende a progressão do tempo no contexto de áudio, interrompendo temporariamente o acesso ao hardware de áudio e reduzindo o uso da CPU / bateria no processo.

## Métodos obsoletos

- {{domxref("AudioContext.createJavaScriptNode()")}}
  - : Cria um {{domxref("JavaScriptNode")}}, usado para para processamento de áudio direto via JavaScript. Este método é obsoleto e foi substituído por {{domxref("AudioContext.createScriptProcessor()")}}.
- {{domxref("AudioContext.createWaveTable()")}}
  - : Cria um {{domxref ("WaveTableNode")}}, usado para definir uma forma de onda periódica. Este método é obsoleto e foi substituído por {{domxref ("AudioContext.createPeriodicWave ()")}}.

## Exemplos

Declaração básica de contexto de áudio:

```js
var audioCtx = new AudioContext();
```

Cruzar a variante do navegador:

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
// etc.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando a Web Audio API](/pt-BR/docs/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}
