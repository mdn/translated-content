---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---

{{JSRef}}

Объект **`SharedArrayBuffer`** подобен ArrayBuffer, то есть это буфер фиксированной длины, использующийся для хранения любых бинарных данных. Главное отличие `SharedArrayBuffer` от `ArrayBuffer` заключается в том, что он используется для создания разделяемой области памяти. В отличие от `ArrayBuffer` `SharedArrayBuffer` не может быть откреплён от соответствующей ему области памяти.

## Описание

### Выделение и совместное использование памяти

Для совместного использования памяти с помощью объекта {{jsxref("SharedArrayBuffer")}} между одним агентом в кластере и другим (агентом может быть как основная программа страницы сайта, так и один из её веб-воркеров) используются [`postMessage`](/ru/docs/Web/API/Worker/postMessage) и [алгоритм структурированного клонирования](/ru/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Алгоритм структурированного клонирования принимает `SharedArrayBuffers` и `TypedArrays`, отображённый в `SharedArrayBuffers`. В обоих случаях объект `SharedArrayBuffer` передаётся получателю, что приводит к появлению нового приватного объекта SharedArrayBuffer внутри агента-получателя (так же как для {{jsxref("ArrayBuffer")}}). Оба объекта `SharedArrayBuffer` ссылаются на один и тот же блок общих данных, и побочный эффект, изменяющий блок данных в одном из агентов, в итоге проявится в другом агенте.

```js
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Обновление и синхронизация разделяемой памяти с помощью атомарных операций

Разделяемую память можно создавать и изменять одновременно в воркерах или основном потоке. В зависимости от системы (ЦПУ, ОС, браузера), распространение изменений по всем контекстам может занять некоторое время. Для синхронизации необходимы {{jsxref("Атомарные", "атомарные", "", 1)}} операции .

### API, принимающие объекты `SharedArrayBuffer`

- [`WebGLRenderingContext.bufferData()`](/ru/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/ru/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/ru/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### Требования безопасности

Разделяемая память и таймеры высокого разрешения были [отключены в начале 2018 года](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) из-за атаки [Spectre](<https://ru.wikipedia.org/wiki/Spectre_(%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C)>). В 2020 году был стандартизирован новый, безопасный подход, чтобы включить разделяемую память обратно. При следовании следующим мерам безопасности `postMessage() не будет выкидывать исключение для SharedArrayBuffer, и разделяемая память будет доступна в разных потоках.`

`Основное требование — ваш документ должен находиться в безопасном контексте

Для документов верхнего уровня нужно устновить два заголовка, чтобы изолировать ваш сайт от других источников (cross-origin):

Cross-Origin-Opener-Policy со значением same-origin (защищает ваш источник от атаки)Cross-Origin-Embedder-Policy со значением require-corp (защищает жертв от вашего источника)Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp

Чтобы проверить, что изоляция от других источников прошла успешно, протестируйте свойство crossOriginIsolated, доступное для контекстов окна и воркера:

if (crossOriginIsolated) {
// Начни работу с SharedArrayBuffer
} else {
// Сделай что-то другое
}

Ознакомьтесь с планируемыми изменениями разделяемой памяти, которые начинают внедряться в браузерах (например, в Firefox 79).

Всегда используйте оператор new для создания SharedArrayBuffer

Конструкторы SharedArrayBuffer необходимо вызывать с помощью оператора {{jsxref("Operators/new", "new")}}. Вызов конструктора SharedArrayBuffer как функции без указания new вызовет ошибку {{jsxref("TypeError")}}.

var sab = SharedArrayBuffer(1024);
// TypeError: вызов встроенного конструктора SharedArrayBuffer
// без new запрещеноvar sab = new SharedArrayBuffer(1024);КонструкторSharedArrayBuffer()Создаёт новый объект SharedArrayBuffer.Свойства{{jsxref("SharedArrayBuffer.prototype.byteLength")}}Размер буферного массива в байтах. Задаётся при создании массива и не может быть изменён. Только для чтения.Методы{{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}Возвращает новый SharedArrayBuffer, чьё содержимое — копия байтов изначального SharedArrayBuffer с begin (начала) включительно до end (конца), но не включая его. Если параметры begin или end отрицательны, метод обращается к индексу массива, начиная с конца, а не с начала.ПримерыСоздание нового SharedArrayBuffervar sab = new SharedArrayBuffer(1024);Нарезание SharedArrayBuffersab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }Использование в буфере WebGLconst canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);Спецификации{{Specifications}}Поддержка браузерами

{{Compat}}

Смотрите также{{jsxref("Atomics")}}{{jsxref("ArrayBuffer")}}Типизированные массивы JavaScriptВеб-воркерыparlib-simple — простая библиотека, предоставляющая синхронизацию и абстракции для распределённых работ.Разделяемая память — краткая инструкция

Немного о новых примитивах JavaScript для параллелизации работ – Mozilla Hacks`
