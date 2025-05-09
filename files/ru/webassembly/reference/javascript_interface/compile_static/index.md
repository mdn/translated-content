---
title: WebAssembly.compile()
slug: WebAssembly/Reference/JavaScript_interface/compile_static
---

{{WebAssemblySidebar}}

Функция **`WebAssembly.compile()`** компилирует {{jsxref("WebAssembly.Module")}} из двоичного кода WebAssembly. Эта функция полезна, если необходимо компилировать модуль до того, как его можно создать (в противном случае следует использовать функцию {{jsxref("WebAssembly.instantiate()")}}.

## Синтаксис

```
Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);
```

### Параметры

- _bufferSource_
  - : Типизированный массив [typed array](/ru/docs/Web/JavaScript/Guide/Typed_arrays) или [ArrayBuffer](/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), содержащий двоичный код модуля `.wasm`, который вы хотите скомпилировать.

### Возвращаемое значение

Промис (`Promise`), который разрешает объект {{jsxref("WebAssembly.Module")}}, представляющий скомпилированный модуль.

### Исключения

- Если `bufferSource` не является [typed array](/ru/docs/Web/JavaScript/Guide/Typed_arrays), генерируется {{jsxref("TypeError")}}.
- Если компиляция не удалась, промис отклоняется с помощью {{jsxref("WebAssembly.CompileError")}}.

## Примеры

В следующем примере выполняется компиляция загруженного `simple.wasm` байт-кода с использованием функции `compile()`, а затем отправляется его [worker](/ru/docs/Web/API/Web_Workers_API)-работнику, использующему [postMessage()](/ru/docs/Web/API/Worker/postMessage).

```js
var worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> Вероятно, вы захотите использовать [`WebAssembly.compileStreaming()`](/ru/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) в большинстве случаев, поскольку он более эффективен, чем `compile()`.

## Характеристики

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebAssembly](/ru/docs/WebAssembly) обзорная страница
- [WebAssembly концепции](/ru/docs/WebAssembly/Guides/Concepts)
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Guides/Using_the_JavaScript_API)
