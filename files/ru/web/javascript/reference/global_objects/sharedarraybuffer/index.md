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

Разделяемая память и таймеры высокого разрешения были [отключены в начале 2018 года](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/) из-за атаки [Spectre](<https://ru.wikipedia.org/wiki/Spectre_(%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C)>). В 2020 году был стандартизирован новый, безопасный подход, чтобы включить разделяемую память обратно.

Основное требование — ваш документ должен находиться в [безопасном контексте](/ru/docs/Web/Security/Secure_Contexts).

Для документов верхнего уровня нужно установить два заголовка, чтобы изолировать ваш сайт от других источников:

- [`Cross-Origin-Opener-Policy`](/ru/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) со значением `same-origin`` (защищает ваш источник от атаки)
- [`Cross-Origin-Embedder-Policy`](/ru/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) со значением `require-corp` или `credentialless` (защищает жертв от вашего источника)

Чтобы проверить, что изоляция от других источников прошла успешно, протестируйте свойство [`crossOriginIsolated`](/ru/docs/Web/API/Window/crossOriginIsolated), доступное для контекстов окна и воркера:

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Guide/Typed_arrays) guide
- [Web Workers](/ru/docs/Web/API/Web_Workers_API)
- [Shared Memory – a brief tutorial](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) in the TC39 ecmascript-sharedmem proposal
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) on hacks.mozilla.org (2016)
- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) by the Chrome team (2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- [`crossOriginIsolated`](/ru/docs/Web/API/Window/crossOriginIsolated)
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) on developer.chrome.com (2021)
