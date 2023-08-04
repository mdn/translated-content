---
title: API Web Áudio
slug: Web/API/Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

A API de áudio da Web fornece um sistema poderoso e versátil para controlar o áudio na Web, permitindo que os desenvolvedores escolham fontes de áudio, adicionem efeitos ao áudio, criem visualizações de áudio, apliquem efeitos espaciais (como panorâmica) e muito mais.

## Conceitos e uso de áudio da Web

A API de áudio da Web envolve a manipulação de operações de áudio dentro de um **contexto de áudio** e foi projetada para permitir o **roteamento modular**. As operações básicas de áudio são realizadas com **nós de áudio**, que são vinculados para formar um **gráfico de roteamento de áudio**. Várias fontes — com diferentes tipos de layout de canal — são suportadas mesmo dentro de um único contexto. Este design modular oferece flexibilidade para criar funções de áudio complexas com efeitos dinâmicos.

Os nós de áudio são ligados em cadeias e teias simples por suas entradas e saídas. Eles geralmente começam com uma ou mais fontes. As fontes fornecem matrizes de intensidades sonoras (amostras) em fatias de tempo muito pequenas, geralmente dezenas de milhares delas por segundo. Estes podem ser calculados matematicamente (como {{domxref("OscillatorNode")}}), ou podem ser gravações de arquivos de som/vídeo (como {{domxref("AudioBufferSourceNode")}} e {{domxref("MediaElementAudioSourceNode ")}}) e fluxos de áudio ({{domxref("MediaStreamAudioSourceNode")}}). Na verdade, os arquivos de som são apenas gravações das próprias intensidades sonoras, que vêm de microfones ou instrumentos elétricos e são misturadas em uma única e complicada onda.

As saídas desses nós podem ser vinculadas às entradas de outros, que misturam ou modificam esses fluxos de amostras de som em diferentes fluxos. Uma modificação comum é multiplicar as amostras por um valor para torná-las mais altas ou mais baixas (como é o caso de {{domxref("GainNode")}}). Uma vez que o som tenha sido suficientemente processado para o efeito pretendido, ele pode ser vinculado à entrada de um destino ({{domxref("BaseAudioContext.destination")}}), que envia o som para os alto-falantes ou fones de ouvido. Esta última conexão só é necessária se o usuário tiver que ouvir o áudio.

Um fluxo de trabalho simples e típico para áudio da web seria algo assim:

1. Criar contexto de áudio
2. Dentro do contexto, crie fontes — como `<áudio>`, oscilador, fluxo
3. Crie nós de efeitos, como reverb, filtro biquad, panner, compressor
4. Escolha o destino final do áudio, por exemplo, os alto-falantes do sistema
5. Conecte as fontes aos efeitos e os efeitos ao destino.

![Um diagrama de caixa simples com uma caixa externa denominada Contexto de áudio e três caixas internas denominadas Fontes, Efeitos e Destino. As três caixas internas têm setas entre elas apontando da esquerda para a direita, indicando o fluxo de informações de áudio.](audio-context_.png)

O tempo é controlado com alta precisão e baixa latência, permitindo que os desenvolvedores escrevam código que responda com precisão a eventos e seja capaz de direcionar amostras específicas, mesmo em uma alta taxa de amostragem. Assim, aplicações como baterias eletrônicas e sequenciadores estão bem ao alcance.

A API de áudio da Web também nos permite controlar como o áudio é _espacializado_. Utilizando um sistema baseado em um _modelo de ouvinte-fonte_, permite o controle do _modelo panorâmico_ e trata da _atenuação induzida por distância_ induzida por uma fonte em movimento (ou ouvinte em movimento).

> **Observação:** você pode ler sobre a teoria da API de áudio da Web com muito mais detalhes em nosso artigo [Conceitos básicos por trás da API de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) .

## Público-alvo da API de áudio da Web

A API de áudio da Web pode parecer intimidante para aqueles que não estão familiarizados com termos de áudio ou música e, como incorpora uma grande quantidade de funcionalidades, pode ser difícil começar se você for um desenvolvedor.

Ele pode ser usado para incorporar áudio em seu site ou aplicativo, [fornecendo uma atmosfera como futurelibrary.no](https://www.futurelibrary.no/) ou [feedback auditivo em formulários](https://css-tricks.com/form-validation-web-audio/). No entanto, também pode ser usado para criar instrumentos interativos _avançados_. Com isso em mente, é adequado tanto para desenvolvedores quanto para músicos.

Temos um [tutorial introdutório simples](/pt-BR/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) para aqueles que estão familiarizados com programação, mas precisam de uma boa introdução a alguns dos termos e estrutura da API.

Há também um artigo [Conceitos básicos por trás da API de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API), para ajudá-lo a entender como o áudio digital funciona, especificamente no domínio da API. Isso também inclui uma boa introdução a alguns dos conceitos sobre os quais a API é construída.

Aprender a codificar é como jogar cartas - você aprende as regras, depois joga, depois volta e aprende as regras novamente, depois joga novamente. Portanto, se parte da teoria não se encaixar bem após o primeiro tutorial e artigo, há um [tutorial avançado](/pt-BR/docs/Web/API/Web_Audio_API/Advanced_techniques) que estende o primeiro para ajudá-lo a praticar o que você aprendeu e aplicar algumas técnicas mais avançadas para construir um sequenciador de passos.

Também temos outros tutoriais e material de referência abrangente disponível que abrange todos os recursos da API. Veja a barra lateral nesta página para saber mais.

Se você está mais familiarizado com o lado musical das coisas, está familiarizado com os conceitos de teoria musical, quer começar a construir instrumentos, então você pode ir em frente e começar a construir coisas com o tutorial avançado e outros como um guia (o tutorial linkado acima cobre agendando notas, criando osciladores e envelopes sob medida, bem como um LFO entre outras coisas.)

Se você não estiver familiarizado com o básico de programação, você pode querer consultar alguns tutoriais JavaScript para iniciantes e depois voltar aqui - veja nosso [módulo de aprendizado JavaScript para iniciantes](/pt-BR/docs/Learn/JavaScript) para um ótimo lugar para começar.

## Interfaces da API de áudio da Web

A API de áudio da Web tem várias interfaces e eventos associados, que dividimos em nove categorias de funcionalidade.

### Definição geral do gráfico de áudio

Contêineres e definições gerais que moldam gráficos de áudio no uso da API de áudio da Web.

- {{domxref("AudioContext")}}
  - : A interface **`AudioContext`** representa um gráfico de processamento de áudio construído a partir de módulos de áudio ligados entre si, cada um representado por um {{domxref("AudioNode")}}. Um contexto de áudio controla a criação dos nós que ele contém e a execução do processamento ou decodificação de áudio. Você precisa criar um `AudioContext` antes de fazer qualquer outra coisa, pois tudo acontece dentro de um contexto.
- {{domxref("AudioNode")}}
  - : A interface **`AudioNode`** representa um módulo de processamento de áudio como uma _fonte de áudio_ (por exemplo, um elemento HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}), _audio destino_, _módulo de processamento intermediário_ (por exemplo, um filtro como {{domxref("BiquadFilterNode")}} ou _controle de volume_ como {{domxref("GainNode")}}).
- {{domxref("AudioParam")}}
  - : A interface **`AudioParam`** representa um parâmetro relacionado ao áudio, como um de um {{domxref("AudioNode")}}. Ele pode ser definido para um valor específico ou uma alteração no valor e pode ser programado para ocorrer em um horário específico e seguindo um padrão específico.
- {{domxref("AudioParamMap")}}
  - : Fornece uma interface tipo mapa para um grupo de interfaces {{domxref("AudioParam")}}, o que significa que fornece os métodos `forEach()`, `get()`, `has()`, `keys ()` e `values()`, bem como uma propriedade `size`.
- {{domxref("BaseAudioContext")}}
  - : A interface **`BaseAudioContext`** atua como uma definição básica para gráficos de processamento de áudio online e offline, conforme representado por {{domxref("AudioContext")}} e {{domxref("OfflineAudioContext")}} respectivamente . Você não usaria `BaseAudioContext` diretamente — você usaria seus recursos por meio de uma dessas duas interfaces herdadas.
- O evento {{domxref("AudioScheduledSourceNode/ended_event", "ended")}}
  - : O evento `ended` é acionado quando a reprodução é interrompida porque o fim da mídia foi atingido.

### Definindo fontes de áudio

Interfaces que definem fontes de áudio para uso na API de áudio da Web.

- {{domxref("AudioScheduledSourceNode")}}
  - : O **`AudioScheduledSourceNode`** é uma interface pai para vários tipos de interfaces de nó de fonte de áudio. É um {{domxref("AudioNode")}}.
- {{domxref("OscillatorNode")}}
  - : A interface **`OscillatorNode`** representa uma forma de onda periódica, como uma onda senoidal ou triangular. É um módulo de processamento de áudio {{domxref("AudioNode")}} que faz com que uma determinada _frequência_ de onda seja criada.
- {{domxref("AudioBuffer")}}
  - : A interface **`AudioBuffer`** representa um pequeno recurso de áudio que reside na memória, criado a partir de um arquivo de áudio usando o método {{ domxref("BaseAudioContext.decodeAudioData") }} ou criado com dados brutos usando {{ domxref ("BaseAudioContext.createBuffer") }}. Uma vez decodificado neste formato, o áudio pode ser colocado em um {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("AudioBufferSourceNode")}}
  - : A interface **`AudioBufferSourceNode`** representa uma fonte de áudio que consiste em dados de áudio na memória, armazenados em um {{domxref("AudioBuffer")}}. É um {{domxref("AudioNode")}} que atua como uma fonte de áudio.
- {{domxref("MediaElementAudioSourceNode")}}
  - : A interface **`MediaElementAudioSourceNode`** representa uma fonte de áudio que consiste em um elemento HTML {{ htmlelement("audio") }} ou {{ htmlelement("video") }}. É um {{domxref("AudioNode")}} que atua como uma fonte de áudio.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : A interface **`MediaStreamAudioSourceNode`** representa uma fonte de áudio que consiste em um {{domxref("MediaStream")}} (como uma webcam, microfone ou um fluxo sendo enviado de um computador remoto). Se várias faixas de áudio estiverem presentes no fluxo, a faixa cujo {{domxref("MediaStreamTrack.id", "id")}} vem primeiro lexicograficamente (em ordem alfabética) é usada. É um {{domxref("AudioNode")}} que atua como uma fonte de áudio.
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : Um aceno de cabeça e do tipo {{domxref("MediaStreamTrackAudioSourceNode")}} representa uma fonte de áudio cujos dados vêm de um {{domxref("MediaStreamTrack")}}. Ao criar o nó usando o método {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} para criar o nó, você especifica qual faixa usar. Isso fornece mais controle do que `MediaStreamAudioSourceNode`.

### Definindo filtros de efeitos de áudio

Interfaces para definir os efeitos que você deseja aplicar às suas fontes de áudio.

- {{domxref("BiquadFilterNode")}}
  - : A interface **`BiquadFilterNode`** representa um filtro simples de baixa ordem. É um {{domxref("AudioNode")}} que pode representar diferentes tipos de filtros, dispositivos de controle de tom ou equalizadores gráficos. Um `BiquadFilterNode` sempre tem exatamente uma entrada e uma saída.
- {{domxref("ConvolverNode")}}
  - : A interface **`ConvolverNode`** é um {{domxref("AudioNode")}} que executa uma Convolução Linear em um determinado {{domxref("AudioBuffer")}} e é frequentemente usado para obter um reverb efeito.
- {{domxref("DelayNode")}}
  - : A interface **`DelayNode`** representa uma [linha de atraso](https://en.wikipedia.org/wiki/Digital_delay_line); um módulo de processamento de áudio {{domxref("AudioNode")}} que causa um atraso entre a chegada de um dado de entrada e sua propagação para a saída.
- {{domxref("DynamicsCompressorNode")}}
  - : A interface **`DynamicsCompressorNode`** fornece um efeito de compressão, que reduz o volume das partes mais altas do sinal para ajudar a evitar cortes e distorções que podem ocorrer quando vários sons são reproduzidos e multiplexados ao mesmo tempo.
- {{domxref("GainNode")}}
  - : A interface **`GainNode`** representa uma mudança no volume. É um módulo de processamento de áudio {{domxref("AudioNode")}} que faz com que um determinado _gain_ seja aplicado aos dados de entrada antes de sua propagação para a saída.
- {{domxref("WaveShaperNode")}}
  - : A interface **`WaveShaperNode`** representa um distorção não linear. É um {{domxref("AudioNode")}} que usa uma curva para aplicar uma distorção de forma de onda ao sinal. Além dos efeitos de distorção óbvios, é frequentemente usado para adicionar uma sensação de calor ao sinal.
- {{domxref("PeriodicWave")}}
  - : Descreve uma forma de onda periódica que pode ser usada para moldar a saída de um {{ domxref("OscillatorNode") }}.
- {{domxref("IIRFilterNode")}}
  - : Implementa um filtro geral de [resposta ao impulso infinito](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR); este tipo de filtro pode ser usado para implementar dispositivos de controle de tom e equalizadores gráficos também.

### Definindo destinos de áudio

Assim que você terminar de processar seu áudio, essas interfaces definem onde ele deve ser emitido.

- {{domxref("AudioDestinationNode")}}
  - : A interface **`AudioDestinationNode`** representa o destino final de uma fonte de áudio em um determinado contexto — geralmente os alto-falantes do seu dispositivo.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : A interface **`MediaStreamAudioDestinationNode`** representa um destino de áudio que consiste em um [WebRTC](/pt-BR/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} com um único `AudioMediaStreamTrack`, que pode ser usado de maneira semelhante a um {{domxref("MediaStream")}} obtido de {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}. É um {{domxref("AudioNode")}} que atua como destino de áudio.

### Análise e visualização de dados

Se você deseja extrair tempo, frequência e outros dados do seu áudio, o `AnalyserNode` é o que você precisa.

- {{domxref("AnalyserNode")}}
  - : A interface **`AnalyserNode`** representa um nó capaz de fornecer informações de análise de frequência e domínio de tempo em tempo real, para fins de análise e visualização de dados.

### Dividindo e mesclando canais de áudio

Para dividir e mesclar canais de áudio, você usará essas interfaces.

- {{domxref("ChannelSplitterNode")}}
  - : A interface **`ChannelSplitterNode`** separa os diferentes canais de uma fonte de áudio em um conjunto de saídas _mono_.
- {{domxref("ChannelMergerNode")}}
  - : A interface **`ChannelMergerNode`** reúne diferentes entradas mono em uma única saída. Cada entrada será usada para preencher um canal da saída.

### Espacialização de áudio

Essas interfaces permitem adicionar efeitos panorâmicos de espacialização de áudio às suas fontes de áudio.

- {{domxref("AudioListener")}}
  - : A interface **`AudioListener`** representa a posição e orientação da única pessoa que está ouvindo a cena de áudio usada na espacialização de áudio.
- {{domxref("PannerNode")}}
  - : A interface **`PannerNode`** representa a posição e o comportamento de um sinal de fonte de áudio no espaço 3D, permitindo criar efeitos de panorâmica complexos.
- {{domxref("StereoPannerNode")}}
  - : A interface **`StereoPannerNode`** representa um simples nó panorâmico estéreo que pode ser usado para deslocar um fluxo de áudio para a esquerda ou para a direita.

### Processamento de áudio em JavaScript

Usando worklets de áudio, você pode definir nós de áudio personalizados escritos em JavaScript ou [WebAssembly](/pt-BR/docs/WebAssembly). Worklets de áudio implementam a interface {{domxref("Worklet")}}, uma versão leve da interface {{domxref("Worker")}}.

- {{domxref("AudioWorklet")}}
  - : A interface `AudioWorklet` está disponível através do objeto {{domxref("AudioContext")}} do objeto {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} e permite adicionar módulos ao worklet de áudio a ser executado fora do thread principal.
- {{domxref("AudioWorkletNode")}}
  - : A interface `AudioWorkletNode` representa um {{domxref("AudioNode")}} que está embutido em um gráfico de áudio e pode passar mensagens para o `AudioWorkletProcessor` correspondente.
- {{domxref("AudioWorkletProcessor")}}
  - : A interface `AudioWorkletProcessor` representa o código de processamento de áudio executado em um `AudioWorkletGlobalScope` que gera, processa ou analisa o áudio diretamente e pode passar mensagens para o `AudioWorkletNode` correspondente.
- {{domxref("AudioWorkletGlobalScope")}}
  - : A interface `AudioWorkletGlobalScope` é um objeto derivado de `WorkletGlobalScope` que representa um contexto de trabalho no qual um script de processamento de áudio é executado; ele foi projetado para permitir a geração, processamento e análise de dados de áudio diretamente usando JavaScript em um encadeamento de worklet em vez de no encadeamento principal.

#### Obsoleto: nós do processador de script

Antes da definição dos worklets de áudio, a API de áudio da Web usava o `ScriptProcessorNode` para processamento de áudio baseado em JavaScript. Como o código é executado no thread principal, eles têm um desempenho ruim. O `ScriptProcessorNode` é mantido por motivos históricos, mas está marcado como obsoleto.

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : A interface **`ScriptProcessorNode`** permite a geração, processamento ou análise de áudio usando JavaScript. É um módulo de processamento de áudio {{domxref("AudioNode")}} que está vinculado a dois buffers, um contendo a entrada atual e outro contendo a saída. Um evento, implementando a interface {{domxref("AudioProcessingEvent")}}, é enviado ao objeto toda vez que o buffer de entrada contém novos dados, e o manipulador de eventos termina quando preenche o buffer de saída com dados.
- {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} (evento) {{deprecated_inline}}
  - : O evento `audioprocess` é acionado quando um buffer de entrada de uma API de áudio da Web {{domxref("ScriptProcessorNode")}} está pronto para ser processado.
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : O `AudioProcessingEvent` representa eventos que ocorrem quando um buffer de entrada {{domxref("ScriptProcessorNode")}} está pronto para ser processado.

### Processamento de áudio off-line/de fundo

É possível processar/renderizar um gráfico de áudio muito rapidamente em segundo plano — renderizando-o para um {{domxref("AudioBuffer")}} em vez de para os alto-falantes do dispositivo — com o seguinte.

- {{domxref("OfflineAudioContext")}}
  - : A interface **`OfflineAudioContext`** é uma interface {{domxref("AudioContext")}} que representa um gráfico de processamento de áudio construído a partir de {{domxref("AudioNode")}}s vinculados. Em contraste com um `AudioContext` padrão, um `OfflineAudioContext` realmente não renderiza o áudio, mas o gera, _tão rápido quanto possível_, em um buffer.
- {{domxref("OfflineAudioContext/complete_event", "complete")}} (evento)
  - : O evento `complete` é acionado quando a renderização de um {{domxref("OfflineAudioContext")}} é encerrada.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : O `OfflineAudioCompletionEvent` representa eventos que ocorrem quando o processamento de um {{domxref("OfflineAudioContext")}} é encerrado. O evento {{domxref("OfflineAudioContext/complete_event", "complete")}} usa essa interface.

## Guias e tutoriais

{{LandingPageListSubpages}}

## Exemplos

Você pode encontrar vários exemplos em nosso [repositório webaudio-example](https://github.com/mdn/webaudio-examples/) no GitHub.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

### AudioContext

{{Compat}}

## Veja também

### Tutoriais/guias

- [Conceitos básicos por trás da API de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Usando a API de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Técnicas avançadas: criação de som, sequenciamento, temporização, agendamento](/pt-BR/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [Guia de reprodução automática para APIs de mídia e áudio da Web](/pt-BR/docs/Web/Media/Autoplay_guide)
- [Usando filtros IIR](/pt-BR/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Visualizações com API de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Noções básicas de espacialização de áudio da Web](/pt-BR/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Controlando vários parâmetros com ConstantSourceNode](/pt-BR/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Misturando áudio posicional e WebGL (2012)](https://web.dev/webaudio-positional-audio/)
- [Desenvolvendo o áudio do jogo com a API de áudio da Web (2012)](https://auth.web.dev/webaudio-games/)
- [Migrando código webkitAudioContext para padrões baseados em AudioContext](/pt-BR/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext)

### Bibliotecas

- [Tones](https://github.com/bit101/tones): uma biblioteca simples para tocar tons/notas específicos usando a API de áudio da Web.
- [Tone.js](https://tonejs.github.io/): um framework para criar música interativa no navegador.
- [howler.js](https://github.com/goldfire/howler.js/): uma biblioteca de áudio JS que tem como padrão [Web Audio API](https://webaudio.github.io/web-audio-api/) e retorna para [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element), além de fornecer outros recursos úteis.
- [Mooog](https://github.com/mattlima/mooog): encadeamento de AudioNodes no estilo jQuery, envios/retornos no estilo do mixer e muito mais.
- [XSound](https://xsound.jp/): Biblioteca Web Audio API para Sintetizador, Efeitos, Visualização, Gravação, etc.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): aplicativo da Web do laboratório de linguagem de vídeo HTML usando a API de áudio da Web para gravar e combinar vídeo e áudio de diferentes fontes em um único arquivo ([fonte no GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Simplifica a visualização de áudio na web ([guide](https://ptsjs.org/guide/sound-0800))

### Tópicos relacionados

- [Tecnologias de mídia da Web](/pt-BR/docs/Web/Media)
- [Guia para tipos e formatos de mídia na web](/pt-BR/docs/Web/Media/Formats)
