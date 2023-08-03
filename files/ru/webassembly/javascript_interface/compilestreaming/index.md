---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
---

{{WebAssemblySidebar}}

Функция **`WebAssembly.compileStreaming()`** компилирует {{jsxref("WebAssembly.Module")}} непосредственно из потокового исходника. Эта функция полезна, если необходимо скомпилировать модуль до того, как его можно создать (в противном случае следует использовать функцию {{jsxref("WebAssembly.instantiateStreaming()")}}.

## Синтаксис

```
Promise<WebAssembly.Module> WebAssembly.compileStreaming(source);
```

### Parameters

- _source_
  - : Промис, или {{domxref("Response")}}, который будет выполнен с одним, представляющим основной источник модулем `.wasm`, который вы хотите передать и скомпилировать.

### Возвращаемое значение

Промис (`Promise`), который разрешает объект {{jsxref("WebAssembly.Module")}}, представляющий скомпилированный модуль.

### Исключения

- Если `bufferSource` не является [typed array](/ru/docs/Web/JavaScript/Typed_arrays), генерируется {{jsxref("TypeError")}}.
- Если компиляция не удалась, промис отклоняется с помощью {{jsxref("WebAssembly.CompileError")}}.

## Примеры

Следующий пример (см. Нашу демонстрацию [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) на GitHub и [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) напрямую передаёт модуль .wasm из исходника, затем компилирует его в объект {{jsxref("WebAssembly.Module")}}.
Поскольку функция `compileStreaming()` принимает промис для объекта {{domxref("Response")}}, вы можете напрямую передать ему вызов {{domxref("WindowOrWorkerGlobalScope.fetch()")}}, и он передаст ответ в выполняемую функцию.

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Затем создаётся полученный экземпляр модуля с помощью {{jsxref("WebAssembly.instantiate()")}} и вызывается экспортированная функция.

## Характеристики

| Спецификация                                                                                | Статус                             | Коммент                             |
| ------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------------- |
| {{SpecName('WebAssembly Embedding', '#webassemblycompilestreaming', 'compileStreaming()')}} | {{Spec2('WebAssembly Embedding')}} | Первоначальное определение проекта. |

## Совместимость с браузером

{{Compat}}

## Смотрите также

- [WebAssembly](/ru/docs/WebAssembly) обзорная страница
- [WebAssembly концепции](/ru/docs/WebAssembly/Concepts)
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Using_the_JavaScript_API)
