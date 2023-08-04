---
title: "Tutorial e exemplo: Teclado de Sintetizador Simples"
slug: Web/API/Web_Audio_API/Simple_synth
---

{{DefaultAPISidebar("Web Audio API")}}

Este artigo apresenta o código e uma demonstração funcional de um teclado que você pode tocar usando seu mouse. O teclado lhe permite alternar entre formas de onda padrões e customizadas. Esse exemplo utiliza das seguintes interfaces de Web API: {{domxref("AudioContext")}}, {{domxref("OscillatorNode")}}, {{domxref("PeriodicWave")}}, e {{domxref("GainNode")}}.

Já que {{domxref("OscillatorNode")}} é baseado no {{domxref("AudioScheduledSourceNode")}}, isso até certo ponto também é um exemplo pra isto.

## O Teclado Visual

### HTML

Existem três componentes primários para o display do nosso teclado virtual. O primeito do qual é o teclado musical em si. Nós extraimos em um par de elementos {{HTMLElement("div")}} aninhados para permitir a rolagem horizontal caso as teclas não encaixem na tela.

#### O Teclado

Primeiro, criamos o espaço no qual construiremos o teclado. Estaremos construindo o teclado programaticamente, considerando que ao fazer desse jeito teremos a flexibilidade de configurar cada tecla conforme determinamos as informações apropriadas para tecla correspondente. No nosso caso, pegamos a frequência de cada tecla através de uma tabela, mas poderia ser calculado de forma algoritmica também.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

O {{HTMLElement("div")}} nomeado de `"container"` é a barra de rolagem que permite o teclado ser rolado horizontalmente se for largo demais para o espaço disponivel. As teclas em si serão inseridas no bloco de classe `"keyboard"`.

#### A barra de opções

Abaixo do teclado, colocaremos alguns controles para configurar o camada. Por enquanto, teremos dois controles: Um para controlar o volume e outro para selecionar a forma de onda periodica usada ao gerar as notas.

##### O controle de volume

Primeiro criamos o `<div>` para conter a barra de opções, para ser personalizado conforme preciso. Então estabelecemos uma caixa que será apresentada no lado esquerdo da barra e colocar um rotulo e um elemento {{HTMLElement("input")}} do tipo `"range"`. O elemento range será tipicamente apresentado como o controle da barra de rolagem ; configuramos ele para permitir qualquer valor entre 0.0 e 1.0 em cada posição.

```html
<div class="settingsBar">
  <div class="left">
    <span>Volume: </span>
    <input
      type="range"
      min="0.0"
      max="1.0"
      step="0.01"
      value="0.5"
      list="volumes"
      name="volume" />
    <datalist id="volumes">
      <option value="0.0" label="Mute"></option>
      <option value="1.0" label="100%"></option>
    </datalist>
  </div>
</div>
```

Especificamos um valor padrão de 0.5, e provemos um elemento {{HTMLElement("datalist")}} no qual é conectado ao range usando o atributo [`name`](/pt-BR/docs/Web/HTML/Global_attributes#name) para achar uma lista de opções cujo ID encaixa; nesse caso, o conjunto de informações é nomeado de `"volume"`. isso nos permite prover um conjunto de valores comuns e strings especiais que o browser pode de forma opcional escolher mostrar de alguma maneira; e então atribuimos nomes aos valores 0.0 ("Mute") e 1.0 ("100%").

##### A seleção de forma de onda

E no lado da barra de configurações, colocamos um rótulo e um elemento {{HTMLElement("select")}} nomeado de `"waveform"` cujas opções correspondem as formas de onda disponiveis.

```html
  <div class="right">
    <span>Current waveform: </span>
    <select name="waveform">
      <option value="sine">Sine</option>
      <option value="square" selected>Square</option>
      <option value="sawtooth">Sawtooth</option>
      <option value="triangle">Triangle</option>
      <option value="custom">Custom</option>
    </select>
  </div>
</div>
```

```css hidden
.container {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 660px;
  height: 110px;
  white-space: nowrap;
  margin: 10px;
}

.keyboard {
  width: auto;
  padding: 0;
  margin: 0;
}

.key {
  cursor: pointer;
  font:
    16px "Open Sans",
    "Lucida Grande",
    "Arial",
    sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  width: 20px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px darkgray;
  display: inline-block;
  position: relative;
  margin-right: 3px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.key div {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  pointer-events: none;
}

.key div sub {
  font-size: 10px;
  pointer-events: none;
}

.key:hover {
  background-color: #eef;
}

.key:active {
  background-color: #000;
  color: #fff;
}

.octave {
  display: inline-block;
  padding: 0 6px 0 0;
}

.settingsBar {
  padding-top: 8px;
  font:
    14px "Open Sans",
    "Lucida Grande",
    "Arial",
    sans-serif;
  position: relative;
  vertical-align: middle;
  width: 100%;
  height: 30px;
}

.left {
  width: 50%;
  position: absolute;
  left: 0;
  display: table-cell;
  vertical-align: middle;
}

.left span,
.left input {
  vertical-align: middle;
}

.right {
  width: 50%;
  position: absolute;
  right: 0;
  display: table-cell;
  vertical-align: middle;
}

.right span {
  vertical-align: middle;
}

.right input {
  vertical-align: baseline;
}
```

### JavaScript

O código em JavaScript começa inicializando algumas váriaveis.

```js
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let oscList = [];
let masterGainNode = null;
```

1. `audioContext` é colocado para referenciar o objeto global {{domxref("AudioContext")}} (ou `webkitAudioContext` se necessário).
2. `oscillators` está colocado para conter uma lista de todos os osciladores atualmente tocando. Ele começa nulo, afinal não há nenhum oscilador tocando ainda.
3. `masterGainNode` é colocado como nulo; durante o processo de setup, ele será configurado para contar um {{domxref("GainNode")}} no quall todos os osciladores irão se conectar para permitir o volume geral a ser controlado por apenas uma barra de rolagem.

```js
let keyboard = document.querySelector(".keyboard");
let wavePicker = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");
```

Referencias aos elementos que precisaremos acessar são obtidas através dp:

- `keyboard` que é o elemento que irá alojar as teclas.
- `wavePicker` é o elemento {{HTMLElement("select")}} usado para seleção da forma de onda das notas.
- `volumeControl` É o elemento {{HTMLElement("input")}} (do tipo `"range"`) usado para controlar o volume geral.

```js
let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Enfim, variaveis globais que serão usadas quando as formas de onda são criadas:

- `noteFreq` será uma matriz de matrizes; cada matriz representa uma oitava, cada uma possuindo um valor nota daquela oitava. O valor de cada é a frequência, em Hertz, do tom da nota.
- `customWaveform` será arrumado como um {{domxref("PeriodicWave")}} descrevendo a forma de onda quando o usuário selecionar "Custom" na seleção de forma de onda.
- `sineTerms` e `cosineTerms` será utilizado para guardar a informação para gerar a forma de onda; cada um irá conter uma matriz que será gerada caso o usuário escolha "Custom".

### Criando a tabela de notas

A função `createNoteTable()` constrói a matriz `noteFreq` para conter uma matriz de objetos representando cada oitava. Cada oitava, possui uma propriedade para cada nota nessa oitava; O nome dessa propriedade é o nome da nota (utilizando da notação em inglês, como "C" para representar "dó"), e o valor é a frequência, em Hertz, daquela nota.

```js
function createNoteTable() {
  let noteFreq = [];
  for (let i=0; i< 9; i++) {
    noteFreq[i] = [];
  }

  noteFreq[0]["A"] = 27.500000000000000;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  noteFreq[1]["C"] = 32.703195662574829;
  noteFreq[1]["C#"] = 34.647828872109012;
  noteFreq[1]["D"] = 36.708095989675945;
  noteFreq[1]["D#"] = 38.890872965260113;
  noteFreq[1]["E"] = 41.203444614108741;
  noteFreq[1]["F"] = 43.653528929125485;
  noteFreq[1]["F#"] = 46.249302838954299;
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.000000000000000;
  noteFreq[1]["A#"] = 58.270470189761239;
  noteFreq[1]["B"] = 61.735412657015513;
```

... várias oitavas não mostradas para manter breve ...

```js hidden
noteFreq[2]["C"] = 65.406391325149658;
noteFreq[2]["C#"] = 69.295657744218024;
noteFreq[2]["D"] = 73.41619197935189;
noteFreq[2]["D#"] = 77.781745930520227;
noteFreq[2]["E"] = 82.406889228217482;
noteFreq[2]["F"] = 87.307057858250971;
noteFreq[2]["F#"] = 92.498605677908599;
noteFreq[2]["G"] = 97.998858995437323;
noteFreq[2]["G#"] = 103.826174394986284;
noteFreq[2]["A"] = 110.0;
noteFreq[2]["A#"] = 116.540940379522479;
noteFreq[2]["B"] = 123.470825314031027;

noteFreq[3]["C"] = 130.812782650299317;
noteFreq[3]["C#"] = 138.591315488436048;
noteFreq[3]["D"] = 146.83238395870378;
noteFreq[3]["D#"] = 155.563491861040455;
noteFreq[3]["E"] = 164.813778456434964;
noteFreq[3]["F"] = 174.614115716501942;
noteFreq[3]["F#"] = 184.997211355817199;
noteFreq[3]["G"] = 195.997717990874647;
noteFreq[3]["G#"] = 207.652348789972569;
noteFreq[3]["A"] = 220.0;
noteFreq[3]["A#"] = 233.081880759044958;
noteFreq[3]["B"] = 246.941650628062055;

noteFreq[4]["C"] = 261.625565300598634;
noteFreq[4]["C#"] = 277.182630976872096;
noteFreq[4]["D"] = 293.66476791740756;
noteFreq[4]["D#"] = 311.12698372208091;
noteFreq[4]["E"] = 329.627556912869929;
noteFreq[4]["F"] = 349.228231433003884;
noteFreq[4]["F#"] = 369.994422711634398;
noteFreq[4]["G"] = 391.995435981749294;
noteFreq[4]["G#"] = 415.304697579945138;
noteFreq[4]["A"] = 440.0;
noteFreq[4]["A#"] = 466.163761518089916;
noteFreq[4]["B"] = 493.883301256124111;

noteFreq[5]["C"] = 523.251130601197269;
noteFreq[5]["C#"] = 554.365261953744192;
noteFreq[5]["D"] = 587.32953583481512;
noteFreq[5]["D#"] = 622.253967444161821;
noteFreq[5]["E"] = 659.255113825739859;
noteFreq[5]["F"] = 698.456462866007768;
noteFreq[5]["F#"] = 739.988845423268797;
noteFreq[5]["G"] = 783.990871963498588;
noteFreq[5]["G#"] = 830.609395159890277;
noteFreq[5]["A"] = 880.0;
noteFreq[5]["A#"] = 932.327523036179832;
noteFreq[5]["B"] = 987.766602512248223;

noteFreq[6]["C"] = 1046.502261202394538;
noteFreq[6]["C#"] = 1108.730523907488384;
noteFreq[6]["D"] = 1174.659071669630241;
noteFreq[6]["D#"] = 1244.507934888323642;
noteFreq[6]["E"] = 1318.510227651479718;
noteFreq[6]["F"] = 1396.912925732015537;
noteFreq[6]["F#"] = 1479.977690846537595;
noteFreq[6]["G"] = 1567.981743926997176;
noteFreq[6]["G#"] = 1661.218790319780554;
noteFreq[6]["A"] = 1760.0;
noteFreq[6]["A#"] = 1864.655046072359665;
noteFreq[6]["B"] = 1975.533205024496447;
```

```js
  noteFreq[7]["C"] = 2093.004522404789077;
  noteFreq[7]["C#"] = 2217.461047814976769;
  noteFreq[7]["D"] = 2349.318143339260482;
  noteFreq[7]["D#"] = 2489.015869776647285;
  noteFreq[7]["E"] = 2637.020455302959437;
  noteFreq[7]["F"] = 2793.825851464031075;
  noteFreq[7]["F#"] = 2959.955381693075191;
  noteFreq[7]["G"] = 3135.963487853994352;
  noteFreq[7]["G#"] = 3322.437580639561108;
  noteFreq[7]["A"] = 3520.000000000000000;
  noteFreq[7]["A#"] = 3729.310092144719331;
  noteFreq[7]["B"] = 3951.066410048992894;

  noteFreq[8]["C"] = 4186.009044809578154;
  return noteFreq;
}
```

O resultado é uma matriz, `noteFreq`, com um objeto para cada oitava. Cada objeto de oitava tem propriedades nomeadas nela onde a propriedade é o nome da nota com a notação em inglês (Como "C" para representar "dó") e o valor da propriedade é a frequência da nota em Hertz.. o objeto resultando se parece com isso:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Octave</th>
      <td colspan="8" rowspan="1">Notes</td>
      <td rowspan="1"></td>
      <td rowspan="1"></td>
      <td rowspan="1"></td>
      <td rowspan="1"></td>
    </tr>
    <tr>
      <th scope="row">0</th>
      <td>"A" ⇒ 27.5</td>
      <td>"A#" ⇒ 29.14</td>
      <td>"B" ⇒ 30.87</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>"C" ⇒ 32.70</td>
      <td>"C#" ⇒ 34.65</td>
      <td>"D" ⇒ 36.71</td>
      <td>"D#" ⇒ 38.89</td>
      <td>"E" ⇒ 41.20</td>
      <td>"F" ⇒ 43.65</td>
      <td>"F#" ⇒ 46.25</td>
      <td>"G" ⇒ 49</td>
      <td>"G#" ⇒ 51.9</td>
      <td>"A" ⇒ 55</td>
      <td>"A#" ⇒ 58.27</td>
      <td>"B" ⇒ 61.74</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="12" rowspan="1" style="text-align: center">. . .</td>
    </tr>
  </tbody>
</table>

Com esta tabela no lugar, podemos descobrir a frequência para uma dada nota em uma oitava particular relativamente fácil. Se queremos a frequência pra nota G# na primeira oitava, nós simplesmente usamos `noteFreq[1]["G#"]` e conseguimos o valor 51.9 como resultado.

> **Nota:** Os valores na tabela de exemplo acima foram arredondados para duas casas decimais.

```js hidden
if (!Object.entries) {
  Object.entries = function entries(O) {
    return reduce(
      keys(O),
      (e, k) =>
        concat(
          e,
          typeof k === "string" && isEnumerable(O, k) ? [[k, O[k]]] : [],
        ),
      [],
    );
  };
}
```

### Construindo o teclado

A função `setup()` é responsavel por construir o teclado e preparar a aplicação para tocar a música.

```js
function setup() {
  noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume, false);

  masterGainNode = audioContext.createGain();
  masterGainNode.connect(audioContext.destination);
  masterGainNode.gain.value = volumeControl.value;

  // Create the keys; skip any that are sharp or flat; for
  // our purposes we don't need them. Each octave is inserted
  // into a <div> of class "octave".

  noteFreq.forEach(function (keys, idx) {
    let keyList = Object.entries(keys);
    let octaveElem = document.createElement("div");
    octaveElem.className = "octave";

    keyList.forEach(function (key) {
      if (key[0].length == 1) {
        octaveElem.appendChild(createKey(key[0], idx, key[1]));
      }
    });

    keyboard.appendChild(octaveElem);
  });

  document
    .querySelector("div[data-note='B'][data-octave='5']")
    .scrollIntoView(false);

  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

  for (i = 0; i < 9; i++) {
    oscList[i] = {};
  }
}

setup();
```

1. A tabela que mapeia o nome e oitavas das notas para suas respectivas frequências é criado ao chamar `createNoteTable()`.
2. Um manipulador de eventos é estabelecido ao chamar nosso velho amigo {{domxref("EventTarget.addEventListener", "addEventListener()")}} para cuidar dos eventos do {{event("change")}} no controle de ganho geral. Isso vai simplesmente atualizar o módulo de ganho de volume para o novo valor.
3. Em seguida, nós replicamos cada oitava na tabela de frequências das notas. Para cada oitava, usamos {{jsxref("Object.entries()")}} para conseguir uma lista de notas daquela oitava.
4. Criar um {{HTMLElement("div")}} para contar as notas daquela oitava (para ter um pouco de espaço entre as oitavas), e mudar o nome de classe para "octave".
5. Para cada tecla na oitava, checamos para ver se o nome daquela nota há mais de um caractere. Nós pulamos essas, pois estamos deixando notas sustenidas de fora deste exemplo. Do contrário, chamamos `createKey()`, especificando uma string, oitava, e frequência. O elemento retornado é anexado na elemento da oitava criada no passo 4.
6. Quando o elemento da oitava é construido, é então anexada ao teclado.
7. Uma vez que o teclado foi construido, nós rolamos para nota "B" na quinta oitava; isso tem o efeito de garantir que o C médio é visivel junto das notas ao redor.
8. Então uma forma de onda customizada é construida usando {{domxref("AudioContext.createPeriodicWave()")}}. Essa forma de onda será usada toda vez que o usuário selecionar "Custom" da seleção de formas de onda.
9. Enfim, a lista de osciladores é iniciada para garantir que está pronta para receber informação identificando quais osciladores estão associados com que teclas.

#### Criando uma tecla

A função `createKey()` é chamada toda vez que queremos que uma tecla seja apresentada no nosso teclado virtual. Ela cria elementos da tecla e seu rótulo, adiciona informação dos atributos ao elemento para uso posterior, e coloca modificadores de eventos para os eventos que nos importam.

```js
function createKey(note, octave, freq) {
  let keyElement = document.createElement("div");
  let labelElement = document.createElement("div");

  keyElement.className = "key";
  keyElement.dataset["octave"] = octave;
  keyElement.dataset["note"] = note;
  keyElement.dataset["frequency"] = freq;

  labelElement.innerHTML = note + "<sub>" + octave + "</sub>";
  keyElement.appendChild(labelElement);

  keyElement.addEventListener("mousedown", notePressed, false);
  keyElement.addEventListener("mouseup", noteReleased, false);
  keyElement.addEventListener("mouseover", notePressed, false);
  keyElement.addEventListener("mouseleave", noteReleased, false);

  return keyElement;
}
```

Após criar os elementos representando as teclas e seus rótulos, nós configuramos o elemento das teclas ao configurar sua classe para "key" (Que estabelece a aparência). Então adicionamos atributos [`data-*`](/pt-BR/docs/Web/HTML/Global_attributes#data-*) que contém a string da oitava da nota (attribute `data-octave`), representando a nota a ser tocada (attribute `data-note`), e frequência (attribute `data-frequency`) em Hertz. Isso irá nos permitir facilmente pegar informação conforme necessário ao cuidar de eventos.

### Fazendo música

#### Tocando um tom

O trabalho da função `playTone()` é tocar um tom em uma dada frequência. Isso será usado pelo modificador para eventos acionados nas teclas do teclado, para que toquem as notas apropriadas.

```js
function playTone(freq) {
  let osc = audioContext.createOscillator();
  osc.connect(masterGainNode);

  let type = wavePicker.options[wavePicker.selectedIndex].value;

  if (type == "custom") {
    osc.setPeriodicWave(customWaveform);
  } else {
    osc.type = type;
  }

  osc.frequency.value = freq;
  osc.start();

  return osc;
}
```

O `playTone()` começa criando um novo {{domxref("OscillatorNode")}} ao chamar o método {{domxref("AudioContext.createOscillator()")}}. Então conectamos ele para o módulo de ganha geral ao chamar o novo método de osciladores {{domxref("OscillatorNode.connect()")}} method;, Que determina ao oscilador onde ele irá mandar seu output. Ao fazer isso, mudar o valor do ganho do módulo de ganho geral irá mudar o volume de todos os toms gerados.

Então conseguimos o tipo de forma de onda para usar ao checar o valor do controle de seleção de formas de onda na barra de opções. Se o usuário estiver colocado como `"custom"`, chamamos {{domxref("OscillatorNode.setPeriodicWave()")}} para configurar os osciladores para usar nossa forma de onda customizada. Fazer isso automáticamente coloca o {{domxref("OscillatorNode.type", "type")}} do oscilador como `custom`. Se qualquer outro tipo de forma de onda é selecionado na seleção de formas de ondas, nós simplesmente colocamos os tipos de osciladores no valor da seleção, esse valor será um entre `sine`, `square`, `triangle`, e `sawtooth`.

A frequência do oscilador é colocada no valor especificado no paramêtro `freq` ao colocar o valor dos objetos {{domxref("Oscillator.frequency")}} {{domxref("AudioParam")}} . Então, enfim, o oscilador é iniciado e começa a produzir sons ao chamar o método {{domxref("AudioScheduledSourceNode.start()")}} .

#### Tocando um tom

Quando o evento {{event("mousedown")}} ou {{domxref("mouseover")}} ocorre em uma tecla, queremos que toque a nota correspondente. A função `notePressed()` é usada como o modificador de eventos para esses eventos.

```js
function notePressed(event) {
  if (event.buttons & 1) {
    let dataset = event.target.dataset;

    if (!dataset["pressed"]) {
      let octave = +dataset["octave"];
      oscList[octave][dataset["note"]] = playTone(dataset["frequency"]);
      dataset["pressed"] = "yes";
    }
  }
}
```

Começamos checando se o botão esquerdo do mouse é pressionado, por dois motivos. Primeiro, queremos que apenas o botão esquerdo acione as notas. Segundo, e mais importante, estamos usando isso para cuidar do {{event("mouseover")}} para casos onde o usuário arrasta de tecla a tecla, e só queremos tocar uma nota se o mouse estiver pressionado quando entrar no elemento.

Se o botão do mouse estiver de fato sendo pressionado, recebemos o atributo de tecla pressionada [`dataset`](/pt-BR/docs/Web/HTML/Global_attributes#dataset) ; isso torna fácil o acesso das informações de atributo customizadas no elemento. Procuramos por um atributo `data-pressed` ; caso não haja um(o que indica que a nota não está tocando ainda), chamamos `playTone()` para começar a tocar a nota, passando no valor dos elementos do atributo `data-frequency`. O valor retornado do oscilador é guardado no `oscList` para refêrencia futura, e `data-pressed` é colocado como `yes` para indicar que a nota está tocando para que não iniciemos novamente na próxima vez que isso for chamado.

#### Parando um tom

A função `noteReleased()` é o modificador de eventos chamado quando o usuário solta o botão do mouse ou move o mouse para fora da tecla que ele está tocando.

```js
function noteReleased(event) {
  let dataset = event.target.dataset;

  if (dataset && dataset["pressed"]) {
    let octave = +dataset["octave"];
    oscList[octave][dataset["note"]].stop();
    delete oscList[octave][dataset["note"]];
    delete dataset["pressed"];
  }
}
```

`noteReleased()` usa os atributos customizados `data-octave` and `data-note` para procurar os osciladores das teclas, e então chama o método de oscilador {{domxref("AudioScheduledSourceNode.stop", "stop()")}} para parar de tocar a nota. Finalmente, a entrada `oscList` para nota é limpa e o atributo `data-pressed` é removido do elemento da tecla (como identificado pelo {{domxref("event.target")}}), para indicar que a nota não está tocando no momento.

#### Mudando o volume geral

A barra de rolagem do volume na barra de opções dá uma simples interface para mudar o valor do ganho no módulo de ganho geral, então mudando o volume de todas as notas sendo tocadas. O metódo `changeVolume()` é o modificador do evento {{event("change")}} na barra de rolagem.

```js
function changeVolume(event) {
  masterGainNode.gain.value = volumeControl.value;
}
```

Isso simplesmente coloca o valor do módulo de ganho geral `gain` {{domxref("AudioParam")}} para o novo valor na barra de rolagem.

### Resultado

Coloque tudo junto, o resultado é um simples e funcional teclado virtual que funciona com o clique:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Veja também

- [Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API)
- {{domxref("OscillatorNode")}}
- {{domxref("GainNode")}}
- {{domxref("AudioContext")}}
