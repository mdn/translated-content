---
title: WindowOrWorkerGlobalScope
slug: orphaned/Web/API/WindowOrWorkerGlobalScope
---

{{ApiRef()}}

Миксин **`WindowOrWorkerGlobalScope`** описывает несколько функций, общих для интерфейсов {{domxref("Window")}} и {{domxref("WorkerGlobalScope")}} . Каждый из этих интерфейсов, конечно же, может добавить больше возможностей в дополнение к перечисленным ниже.

> **Примечание:** WindowOrWorkerGlobalScope - это миксин, а не интерфейс; на самом деле вы не можете создать объект типа WindowOrWorkerGlobalScope.

## Свойства

Эти свойства определены в миксине {{domxref("WindowOrWorkerGlobalScope")}} и реализованы с помощью {{domxref("Window")}} и {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Возвращает объект {{domxref("CacheStorage")}}, связанный с текущим контекстом. Данный объект включает в себя такие функциональные возможности, как хранение активов для использования в автономном режиме, а также генерацию пользовательских ответов на запросы.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Предоставляет механизм асинхронного доступа приложений к возможностям индексируемых баз данных; возвращает объект {{domxref("IDBFactory")}}.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Возвращает логический ключ, указывающий, является ли текущий контекст безопасным (true) или нет (false).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Возвращает происхождение глобального диапазона, сериализованного в виде строки.

## Методы

Эти свойства определены на смеси {{domxref("WindowOrWorkerGlobalScope")}} и реализованы с помощью {{domxref("Window")}} и {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Декодирует строку данных, которая была закодирована с использованием кодировки base-64.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Создаёт ASCII строку в кодировке base-64 из строки бинарных данных.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Отменяет набор для повторного выполнения, используя {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Отменяет набор отложенного исполнения, используя {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Принимает различные источники изображений и возвращает {{domxref(" Promise")}}, который преобразуется в {{domxref("ImageBitmap")}}. Опционально источник обрезается до прямоугольника пикселей, происходящих от (sx, sy) с шириной sw и высотой sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Запускает процесс извлечения ресурса из сети.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Планирует функцию, которая будет выполняться каждый раз по истечении заданного числа миллисекунд.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Планирует функцию для выполнения в заданное время.

## Specifications

| Specification                                                                                                                                                            | Status                               | Comment                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------- |
| {{SpecName("HTML WHATWG",'webappapis.html#windoworworkerglobalscope-mixin', '<code>WindowOrWorkerGlobalScope</code> mixin')}} | {{Spec2('HTML WHATWG')}}     | This is where the main mixin is defined.      |
| {{SpecName('Fetch','#fetch-method','fetch()')}}                                                                                                         | {{Spec2('Fetch')}}             | Definition of the `fetch()` method.           |
| {{SpecName('Service Workers', '#self-caches', 'caches')}}                                                                                             | {{Spec2('Service Workers')}} | Definition of the `caches` property.          |
| {{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}}                                                         | {{Spec2('IndexedDB 2')}}     | Definition of the `indexedDB` property.       |
| {{SpecName('Secure Contexts', '#dom-windoworworkerglobalscope-issecurecontext', 'isSecureContext')}}                                     | {{Spec2('Secure Contexts')}} | Definition of the `isSecureContext` property. |

## Browser compatibility

{{Compat("api.WindowOrWorkerGlobalScope")}}

## See also

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
