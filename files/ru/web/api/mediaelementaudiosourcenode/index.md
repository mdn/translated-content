---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
---

{{APIRef("Web Audio API")}}

Интерфейс `MediaElementAudioSourceNode` представляет собой аудио узел {{domxref("AudioNode")}}, созданный из HTML5 {{ htmlelement("audio") }} или {{ htmlelement("video") }} элемента. Он является источником звука.

`MediaElementSourceNode` не имеет входов, а только один выход, и может быть создан методом {{domxref("AudioContext.createMediaElementSource")}}. Количество каналов в выходном сигнале равно числу каналов аудио, на которое ссылается {{domxref("HTMLMediaElement")}} используемый для создания узла, или 1, если {{domxref("HTMLMediaElement")}} не имеет аудио.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Количество входов</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Количество выходов</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Количество каналов</th>
      <td>
        зависит от содержимого медиа элемента
        {{domxref("HTMLMediaElement")}}, переданному методу
        {{domxref("AudioContext.createMediaElementSource")}} при
        создании узла.
      </td>
    </tr>
  </tbody>
</table>

## Свойства

_Наследует свойства родителя,_ _{{domxref("AudioNode")}}_.

## Методы

_Наследует методы родителя,_ _{{domxref("AudioNode")}}_.

## Пример

{{page("/ru/docs/Web/API/AudioContext.createMediaElementSource","Example")}}

## Спецификация

{{Specifications}}

## Поддержка в браузерах

{{Compat}}

## Смотрите также

- [Using the Web Audio API](/ru/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
