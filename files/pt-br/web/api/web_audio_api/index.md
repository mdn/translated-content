---
title: API Web Áudio
slug: Web/API/Web_Audio_API
tags:
  - Web Audio API
  - api de áudio
  - áudio api
  - áudio web
translation_of: Web/API/Web_Audio_API
original_slug: Web/API/API_Web_Audio
---
A API de áudio da web disponibiliza um poderoso e versátil sistema de controle de áudio para a Web, permitindo aos desenvolvedores escolher arquivos de áudio, adicionar efeitos a estes arquivos, criar reprodutores de áudio, aplicar _spatial effects_ (como _panning_) e muito mais.

## Web audio: conceitos e uso

A API de Web audio envolve manipulação de operações com áudio dentro de um **contexto de áudio**, e foi desenvolvida para permitir o **roteamento** **modular**. Operações básicas de áudio são feitas com **_audio nodes_ (nós de áudio**), que são ligados para formar **gráficos de** **roteamento** **de áudio**. Várias fontes - com diferentes tipos de _layout_ de canal - são suportados mesmo em um único contexto. Este _design_ modular permite flexibilidade para criar funções de áudio complexas com efeitos dinâmicos.

_Audio nodes_ são ligados pelas suas entradas e saídas, formando uma cadeia que começa com uma ou mais fontes, passa por um ou mais _nodes_ e então acaba em um destino (embora você não tenha que fornecer um destino, por exemplo, se você quiser apenas visualizar alguns dados de áudio). Um fluxo de trabalho simples, com Web áudio, seria algo parecido com isso:

1. Crie um contexto de áudio
2. Dentro do contexto, crie fontes de áudio — como `<audio>`, oscilador, _stream_
3. Crie efeitos de áudio, como _reverb_, _biquad filter_, _panner_, _compressor_
4. Escolha o destino final de áudio, por exemplo os auto-falantes de seu sistema
5. Conecte as fontes de áudio com os efeitos, e os efeitos com o destino.

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrow between them pointing from left to right, indicating the flow of audio information.](https://mdn.mozillademos.org/files/7893/web-audio-api-flowchart.png)

O sincronismo é controlado com alta precisão e baixa latência, permitindo aos desenvolvedores escrever códigos que respondam com precisão a eventos e capazes de gerar exemplos específicos, mesmo com uma alta taxa de amostragem. Dessa forma, aplicações como baterias eletrônicas e seqüenciadores estarão facilmente ao alcance dos desenvolvedores.

A API de Web Audio também permite o controle de como o áudio será ordenado. Usando um sistema baseado em um modelo de _source-listener_, a API permite controlar os painéis de _modelo_ para serem usados e tratados com atenuação de distância induzida ou _doppler shift_ induzido por uma fonte em movimento (ou um ouvinte em movimento).

> **Nota:** Você pode ver mais detalhes sobre a teoria da API de Web Audio em nosso artigo [Basic concepts behind Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

## Web Audio: Interfaces da API

A API de Web Audio possui um total de 28 interfaces e eventos associados, que nós dividimos e categorizamos em 9 funcionalidades.

### Definições gerais de grafos de áudio (audio graph)

Definições gerais que moldam os grafos de áudio no uso da API de Web Audio.

- {{domxref("AudioContext")}}
  - : A interface **`AudioContext`** representa um grafo de processamento de áudio construído a partir de módulos de áudio ligados entre si, cada um representado por um {{domxref("AudioNode")}}. Um contexto de áudio (audio context) controla a criação dos*nós* que ele contém e a execução do processamento de áudio, ou a decodificação. Como tudo acontece dentro de um contexto, você deve criar um **`AudioContext`** antes de fazer qualquer outra coisa.
- {{domxref("AudioNode")}}
  - : A interface **`AudioNode`** representa um módulo de processamento de áudio como uma fonte de áudio (por exemplo, um HTML {{HTMLElement("áudio")}} ou um elemento {{HTMLElement("vídeo")}}), destino de áudio, módulo de processamento intermediário (por exemplo, um filtro como {{domxref("BiquadFilterNode")}}, ou controle de volume, como {{domxref("GainNode")}}).
- {{domxref("AudioParam")}}
  - : A interface **`AudioParam`** representa um parâmetro relacionado ao áudio, como um parâmetro de um {{domxref("AudioNode")}}. Ele pode ser configurado com um valor específico ou uma mudança de valor, e pode ser programado para "acontecer" em um momento específico e seguindo um padrão específico.
- {{event("ended_(Web_Audio)", "ended")}} (event)
  - : O evento `ended` é disparado quando a reprodução parou porque o fim da mídia foi atingido.

### Definindo fontes de áudio

Interfaces que definem fontes de áudio para uso na API de Web Audio.

- {{domxref("OscillatorNode")}}
  - : A interface **`OscillatorNode`** representa uma onda senoidal. Esta interface é um módulo de processamento de áudio que gera uma onda senoidal com determinada frequência.
- {{domxref("AudioBuffer")}}
  - : A interface **`AudioBuffer`** representa uma pequena porção de áudio armazenada na memória, criada a partir de um arquivo de áudio usando o método {{ domxref("AudioContext.decodeAudioData()") }}, ou criado com os dados brutos usando o método {{ domxref("AudioContext.createBuffer()") }}. Uma vez decodificado neste formato o áudio pode ser colocada em um {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioBufferSourceNode")}}
  - : A interface AudioBufferSourceNode representa uma fonte de áudio que consiste em dados de áudio na memória, armazenados em um {{domxref ("AudioBuffer")}}. É um {{domxref ("AudioNode")}} que atua como uma fonte de áudio.
- {{domxref("MediaElementAudioSourceNode")}}
  - : A interface **`MediaElementAudioSourceNode`** representa uma fonte de audio consiste de um HTML5 {{ htmlelement("audio") }} ou {{ htmlelement("video") }} elemento. É uma {{domxref("AudioNode")}} que atua como uma fonte de áudio.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : The **`MediaStreamAudioSourceNode`** interface represents an audio source consisting of a [WebRTC](/pt-BR/docs/WebRTC) {{domxref("MediaStream")}} (such as a webcam or microphone.) It is an {{domxref("AudioNode")}} that acts as an audio source.

### Definindo filtros de efeitos de áudio

Interfaces para definição de efeitos que você deseja aplicar em suas fontes de áudio.

- {{domxref("BiquadFilterNode")}}
  - : The **`BiquadFilterNode`** interface represents a simple low-order filter. It is an {{domxref("AudioNode")}} that can represent different kinds of filters, tone control devices or graphic equalizers. A `BiquadFilterNode` always has exactly one input and one output.
- {{domxref("ConvolverNode")}}
  - : The **`ConvolverNode`** interface is an {{domxref("AudioNode")}} that performs a Linear Convolution on a given AudioBuffer, often used to achieve a reverb effect.
- {{domxref("DelayNode")}}
  - : The **`DelayNode`** interface represents a [delay-line](http://en.wikipedia.org/wiki/Digital_delay_line); an {{domxref("AudioNode")}} audio-processing module that causes a delay between the arrival of an input data and its propagation to the output.
- {{domxref("DynamicsCompressorNode")}}
  - : The **`DynamicsCompressorNode`** interface provides a compression effect, which lowers the volume of the loudest parts of the signal in order to help prevent clipping and distortion that can occur when multiple sounds are played and multiplexed together at once.
- {{domxref("GainNode")}}
  - : The **`GainNode`** interface represents a change in volume. It is an {{domxref("AudioNode")}} audio-processing module that causes a given _gain_ to be applied to the input data before its propagation to the output.
- {{domxref("WaveShaperNode")}}
  - : The **`WaveShaperNode`** interface represents a non-linear distorter. It is an {{domxref("AudioNode")}} that use a curve to apply a waveshaping distortion to the signal. Beside obvious distortion effects, it is often used to add a warm feeling to the signal.
- {{domxref("PeriodicWave")}}
  - : Used to define a periodic waveform that can be used to shape the output of an {{ domxref("OscillatorNode") }}.

### Definindo destinos de áudio

Uma vez que você tenha feito o processamento do seu áudio, estas interfaces definirão aonde será a saída do áudio.

- {{domxref("AudioDestinationNode")}}
  - : The **`AudioDestinationNode`** interface represents the end destination of an audio source in a given context — usually the speakers of your device.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : The **`MediaElementAudioSourceNode`** interface represents an audio destination consisting of a [WebRTC](/pt-BR/docs/WebRTC) {{domxref("MediaStream")}} with a single `AudioMediaStreamTrack`, which can be used in a similar way to a MediaStream obtained from {{ domxref("Navigator.getUserMedia") }}. It is an {{domxref("AudioNode")}} that acts as an audio destination.

### Análise dos dados e visualização

Se você deseja extrair tempo, frequencia e outras informações do seu áudio, o `AnalyserNode` é o que você necessita.

- {{domxref("AnalyserNode")}}
  - : The **`AnalyserNode`** interface represents a node able to provide real-time frequency and time-domain analysis information, for the purposes of data analysis and visualization.

### Dividindo e mesclando canais de áudio

Para dividir e mesclar canais de áudio, você utilizará essas interfaces.

- {{domxref("ChannelSplitterNode")}}
  - : The **`ChannelSplitterNode`** interface separates the different channels of an audio source out into a set of _mono_ outputs.
- {{domxref("ChannelMergerNode")}}
  - : The **`ChannelMergerNode`** interface reunites different mono inputs into a single outputs. Each input will be used to fill a channel of the output.

### Audio spatialization

These interfaces allow you to add audio spatialization panning effects to your audio sources.

- {{domxref("AudioListener")}}
  - : The **`AudioListener`** interface represents the position and orientation of the unique person listening to the audio scene used in audio spatialization.
- {{domxref("PannerNode")}}
  - : The **`PannerNode`** interface represents the behavior of a signal in space. It is an {{domxref("AudioNode")}} audio-processing module describing its position with right-hand Cartesian coordinates, its movement using a velocity vector and its directionality using a directionality cone.

### Processamento de áudio por JavaScript

Se você quiser usar um _script_ externo para processar sua fonte de áudio, Node e eventos abaixo tornarão isto possível.

- {{domxref("ScriptProcessorNode")}}
  - : The **`ScriptProcessorNode`** interface allows the generation, processing, or analyzing of audio using JavaScript. It is an {{domxref("AudioNode")}} audio-processing module that is linked to two buffers, one containing the current input, one containing the output. An event, implementing the {{domxref("AudioProcessingEvent")}} interface, is sent to the object each time the input buffer contains new data, and the event handler terminates when it has filled the output buffer with data.
- {{event("audioprocess")}} (event)
  - : The `audioprocess` event is fired when an input buffer of a Web Audio API {{domxref("ScriptProcessorNode")}} is ready to be processed.
- {{domxref("AudioProcessingEvent")}}
  - : The [Web Audio API](/pt-BR/docs/Web_Audio_API) `AudioProcessingEvent` represents events that occur when a {{domxref("ScriptProcessorNode")}} input buffer is ready to be processed.

### Áudio _offline_

Manipular áudio _offline_ é possível com estas interfaces.

- {{domxref("OfflineAudioContext")}}
  - : The **`OfflineAudioContext`** interface is an {{domxref("AudioContext")}} interface representing an audio-processing graph built from linked together {{domxref("AudioNode")}}s. In contrast with a standard `AudioContext`, an `OfflineAudioContext` doesn't really render the audio but rather generates it, _as fast as it can_, in a buffer.
- {{event("complete")}} (event)
  - : The `complete` event is fired when the rendering of an {{domxref("OfflineAudioContext")}} is terminated.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : The `OfflineAudioCompletionEvent` represents events that occur when the processing of an {{domxref("OfflineAudioContext")}} is terminated. The {{event("complete")}} event implements this interface.

## Interfaces obsoletas

As interfaces a seguir foram definidas em versões antigas das especificações da API de Web Audio, mas agora elas estão obsoletas e serão substituidas por outras interfaces.

- {{domxref("JavaScriptNode")}}
  - : Used for direct audio processing via JavaScript. This interface is obsolete, and has been replaced by {{domxref("ScriptProcessorNode")}}.
- {{domxref("WaveTableNode")}}
  - : Used to define a periodic waveform. This interface is obsolete, and has been replaced by {{domxref("PeriodicWave")}}.

## Exemplo

Este exemplo mostra uma grande variedade de funções da API de Web Audio que podem ser utilizadas. Você pode ver este código em ação na demo [Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) (também verificar o [código-fonte completo no Github](https://github.com/mdn/voice-change-o-matic)) - esta é uma demonstração de um modificador de voz de brinquedo experimental; aconselhamos manter seus alto-falantes baixo ao utilizá-lo, pelo menos para começar!

As linhas API de Web Audio estão destacadas; se você quiser encontrar mais informações sobre os diferentes métodos, faça uma busca através das páginas de referência.

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context
// Webkit/blink browsers need prefix, Safari won't work without window.

var voiceSelect = document.getElementById("voice"); // select box for selecting voice effect options
var visualSelect = document.getElementById("visual"); // select box for selecting audio visualization options
var mute = document.querySelector('.mute'); // mute button
var drawVisual; // requestAnimationFrame

var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();

function makeDistortionCurve(amount) { // function to make curve shape for distortion/wave shaper node to use
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

navigator.getUserMedia (
  // constraints - only audio needed for this app
  {
    audio: true
  },

  // Success callback
  function(stream) {
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination); // connecting the different audio graph nodes together

    visualize(stream);
    voiceChange();

  },

  // Error callback
  function(err) {
    console.log('The following gUM error occured: ' + err);
  }
);

function visualize(stream) {
  WIDTH = canvas.width;
  HEIGHT = canvas.height;

  var visualSetting = visualSelect.value;
  console.log(visualSetting);

  if(visualSetting == "sinewave") {
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount; // half the FFT value
    var dataArray = new Uint8Array(bufferLength); // create an array to store the data

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    function draw() {

      drawVisual = requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray); // get waveform data and put it into the array created above

      canvasCtx.fillStyle = 'rgb(200, 200, 200)'; // draw wave with canvas
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();

      var sliceWidth = WIDTH * 1.0 / bufferLength;
      var x = 0;

      for(var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT/2;

        if(i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height/2);
      canvasCtx.stroke();
    };

    draw();

  } else if(visualSetting == "off") {
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  }

}

function voiceChange() {
  distortion.curve = new Float32Array;
  biquadFilter.gain.value = 0; // reset the effects each time the voiceChange function is run

  var voiceSetting = voiceSelect.value;
  console.log(voiceSetting);

  if(voiceSetting == "distortion") {
    distortion.curve = makeDistortionCurve(400); // apply distortion to sound using waveshaper node
  } else if(voiceSetting == "biquad") {
    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.value = 1000;
    biquadFilter.gain.value = 25; // apply lowshelf filter to sounds using biquad
  } else if(voiceSetting == "off") {
    console.log("Voice settings turned off"); // do nothing, as off option was chosen
  }

}

// event listeners to change visualize and voice settings

visualSelect.onchange = function() {
  window.cancelAnimationFrame(drawVisual);
  visualize(stream);
}

voiceSelect.onchange = function() {
  voiceChange();
}

mute.onclick = voiceMute;

function voiceMute() { // toggle to mute and unmute sound
  if(mute.id == "") {
    gainNode.gain.value = 0; // gain set to 0 to mute sound
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.gain.value = 1; // gain set to 1 to unmute sound
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
```

## Especificações

| Especificação                            | Status                               | Comentário |
| ---------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Web Audio API')}} | {{Spec2('Web Audio API')}} |            |

## Compatibilidade com navegadores

{{Compat("api.AudioContext")}}

## Veja também

- [Using the Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Visualizations with Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Voice-change-O-matic example](http://mdn.github.io/voice-change-o-matic/)
- [Violent Theremin example](http://mdn.github.io/violent-theremin/)
- [Web audio spatialisation basics](/pt-BR/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Mixing Positional Audio and WebGL](http://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](http://www.html5rocks.com/tutorials/webaudio/games/)
- [Porting webkitAudioContext code to standards based AudioContext](/pt-BR/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)
- [Tones](https://github.com/bit101/tones): a simple library for playing specific tones/notes using the Web Audio API.

### Quicklinks

1. **Guides**

    1. [Basic concepts behind Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
    2. [Using the Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
    3. [Visualizations with Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
    4. [Web audio spatialisation basics](/pt-BR/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
    5. [Porting webkitAudioContext code to standards based AudioContext](/pt-BR/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)

2. **Examples**

    1. [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)
    2. [Violent Theremin](http://mdn.github.io/violent-theremin/)

3. **Interfaces**

    1. {{domxref("AnalyserNode")}}
    2. {{domxref("AudioBuffer")}}
    3. {{domxref("AudioBufferSourceNode")}}
    4. {{domxref("AudioContext")}}
    5. {{domxref("AudioDestinationNode")}}
    6. {{domxref("AudioListener")}}
    7. {{domxref("AudioNode")}}
    8. {{domxref("AudioParam")}}
    9. {{event("audioprocess")}} (event)
    10. {{domxref("AudioProcessingEvent")}}
    11. {{domxref("BiquadFilterNode")}}
    12. {{domxref("ChannelMergerNode")}}
    13. {{domxref("ChannelSplitterNode")}}
    14. {{event("complete")}} (event)
    15. {{domxref("ConvolverNode")}}
    16. {{domxref("DelayNode")}}
    17. {{domxref("DynamicsCompressorNode")}}
    18. {{event("ended_(Web_Audio)", "ended")}} (event)
    19. {{domxref("GainNode")}}
    20. {{domxref("MediaElementAudioSourceNode")}}
    21. {{domxref("MediaStreamAudioDestinationNode")}}
    22. {{domxref("MediaStreamAudioSourceNode")}}
    23. {{domxref("OfflineAudioCompletionEvent")}}
    24. {{domxref("OfflineAudioContext")}}
    25. {{domxref("OscillatorNode")}}
    26. {{domxref("PannerNode")}}
    27. {{domxref("PeriodicWaveNode")}}
    28. {{domxref("ScriptProcessorNode")}}
    29. {{domxref("WaveShaperNode")}}
