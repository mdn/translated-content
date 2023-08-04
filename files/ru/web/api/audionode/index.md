---
title: AudioNode
slug: Web/API/AudioNode
---

{{ APIRef("Web Audio API") }}
**AudioNode** это общий интерфейс для описания модулей обработки аудио таких как источники звука (например HTML элементы {{HTMLElement("audio")}} или {{HTMLElement("video")}}), генераторы звука (например {{domxref("OscillatorNode")}} и т.п.), приёмники звука для модулей производящих обработку звука (например {{domxref("BiquadFilterNode")}} или {{domxref("ConvolverNode")}}), или регуляторы громкости (например {{domxref("GainNode")}}).

![AudioNodes participating in an AudioContext create a audio routing graph.](webaudiobasics.png)

`AudioNode` имеет входы и выходы, каждый с заданным количеством _каналов_. `AudioNode` без входов в с одним или несколькими выходами называются _источниками_ (_source node_). Результаты обработки передаются от одного AudioNode к другому, при этом каждый узел считывает только свой вход, производит обработку и представляет результат на свой выход, или просто пропускает аудио через себя (например {{domxref("AnalyserNode")}} где результат представляется отдельно).

Разные узлы могут быть связаны в _граф обработки_. Граф помещается в {{domxref("AudioContext")}}. Один `AudioNode` может принадлежать только одному {{domxref("AudioContext")}}. В общем, узлы наследуют свойства и методы AudioNode, но они могут также и определять собственный функционал.Смотрите описания конкретных узлов на страницах этих узлов перечисленных на главной странице [Web Audio API](/ru/docs/Web/API/Web_Audio_API).

> **Примечание:** An `AudioNode` can be target of events, therefore it implements the {{domxref("EventTarget")}} interface.

## Свойства

- {{domxref("AudioNode.context")}} {{readonlyInline}}

  - : Возвращает связанный {{domxref("AudioContext")}}, это объект, представляющий граф, в котором находится данный узел.

- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}

  - : Возвращает количество входов узла. Узлы определённые как источники имеют `numberOfInputs` равное 0.

- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}

  - : Возвращает количество выходов узла. Узлы назначения — такие как {{ domxref("AudioDestinationNode") }} — имеют количество выходов равное 0.

- {{domxref("AudioNode.channelCount")}}

  - : Это целое число, используемое для определения того, сколько каналов используются для [up-mixing and down-mixing](/ru/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) с любыми входами узла. Его использование точнее определяется значением {{domxref("AudioNode.channelCountMode")}}.

- {{domxref("AudioNode.channelCountMode")}}
  - : Это перечисление описывающее путь согласования каналов между входом и выходом.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Это перечисление описывающее каналы.Эта интерпретация описывает как будет происходить [up-mixing and down-mixing](/ru/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing).
    Возможные значения `"speakers"` or `"discrete"`.

## Методы

_Так же реализует методы из интерфейса {{domxref("EventTarget")}}._

- {{domxref("AudioNode.connect(AudioNode)")}}
  - : Позволяет нам подключить один выход данного узла на один вход другого узла.
- {{domxref("AudioNode.connect(AudioParam)")}}
  - : Позволяет нам подключить один выход данного узла на параметрический вход другого.
- {{domxref("AudioNode.disconnect()")}}
  - : Позволяет нам отключить текущий узел от другого, уже подключённого узла.

## Примеры

Этот простой фрагмент кода показывает создание некоторых аудио узлов, и как можно использовать свойства и методы AudioNode. Вы можете найти примеры такого использования на любом из примеров, на странице [Web Audio API](/ru/docs/Web/API/Web_Audio_API) (например [Violent Theremin](https://github.com/mdn/violent-theremin).)

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Using the Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
