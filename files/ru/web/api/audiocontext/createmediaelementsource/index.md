---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
---

{{ APIRef("Web Audio API") }}

Метод `createMediaElementSource()` интерфейса {{ domxref("AudioContext") }} используется для создания объекта {{ domxref("MediaElementAudioSourceNode") }} из существующих HTML-элементов {{htmlelement("audio")}} или {{htmlelement("video")}} для дальнейших манипуляций со звуком и его воспроизведения.

Узнать больше о созданном таким образом аудио узле можно на справочной странице {{ domxref("MediaElementAudioSourceNode") }}.

## Синтаксис

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
```

### Параметры

- `myMediaElement`
  - : Объект {{domxref("HTMLMediaElement")}}, который вы хотите использовать в качестве исходного звука.

### Возвращаемые значения

Объект {{domxref("MediaElementAudioSourceNode")}}.

## Пример

Простой пример создания аудио узла из элемента {{htmlelement("audio") }} используя `createMediaElementSource()`, и управления усилением звука через {{ domxref("GainNode") }} перед подачей в {{ domxref("AudioDestinationNode") }} для воспроизведения. При движении мыши вызывается функция `updatePage()`, вычисляющая текущее усиление как отношение Y позиции курсора к общей высоте окна. Таким образом вы можете увеличивать/уменьшать громкость звучания аудио движениями мыши вверх/вниз.

> **Примечание:** вы можете также посмотреть [демонстрацию](http://mdn.github.io/media-source-buffer/) или [исходники](https://github.com/mdn/media-source-buffer).

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector("audio");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// Создаём MediaElementAudioSourceNode
// На основе HTMLMediaElement
var source = audioCtx.createMediaElementSource(myAudio);

// Создаём узел контроля громкости (усиления)
var gainNode = audioCtx.createGain();

// Переменные, содержащие Y координату курсора мыши
// и высоту окна
var CurY;
var HEIGHT = window.innerHeight;

// Обновляем Y координату курсора при движении мышью
// и вычисляем новый коэффициент усиления

document.onmousemove = updatePage;

function updatePage(e) {
  CurY = window.Event
    ? e.pageY
    : event.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  gainNode.gain.value = CurY / HEIGHT;
}

// Последний шаг - построение графа
// Подсоединяем AudioBufferSourceNode к gainNode
// а gainNode, в свою очередь, к конечному узлу вывода
// Теперь мы можем слушать музыку управляя громкостью воспроизведения движением курсора мыши :)
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> **Примечание:** Вызов `createMediaElementSource()` перенаправит выходной поток аудиоданных из {{domxref("HTMLMediaElement")}} в обрабатывающий граф AudioContext. Управление воспроизведением медиа все ещё будет осуществляться через API медиа элемента или его панель управления.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)
