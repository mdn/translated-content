---
title: WebAssembly
slug: WebAssembly
---

{{WebAssemblySidebar}}

WebAssembly – это новый открытый формат байт-кода, исполняемого современными браузерами. Он позволяет переносить код, написанный на таких языках как C, C++, C#, Rust, в низкоуровневые ассемблерные инструкции и использовать его в сети. Формат имеет компактные размеры, высокую производительность, близкую к нативной, и может одновременно работать с JavaScript.

## В двух словах

WebAssembly оказывает огромное влияние на веб-платформу — он предоставляет способ исполнения кода, написанного на различных языках, в сети, со скоростью близкой к нативной, чего ранее невозможно было достичь.

WebAssembly разработан для дополнения JavaScript – используя WebAssembly JavaScript API вы можете загружать модули WebAssembly в приложения JavaScript и обеспечивать взаимодействие между ними, используя общие функции. Такой подход позволяет вам получить производительность и мощность WebAssembly, а также выразительность и гибкость JavaScript в ваших приложениях, даже если вы не знаете как писать код WebAssembly, а используете готовые модули.

И что ещё лучше, так это то, что WebAssembly разрабатывается как веб-стандарт [W3C WebAssembly Working Group](https://www.w3.org/wasm/) и [Community Group](https://www.w3.org/community/webassembly/) при активном участии основных производителей браузеров.

## Руководства

- [Основы WebAssembly](/ru/docs/WebAssembly/Concepts)
  - : Прежде всего, начните с чтения общего описания WebAssembly - что это такое, чем это может быть полезно, почему он подходит для веб-платформы и как его использовать.
- [Компиляция кода C/C++ в WebAssembly](/ru/docs/WebAssembly/C_to_wasm)
  - : После того как вы написали код на C / C ++, вы можете скомпилировать его в .wasm, например, с помощью инструмента [Emscripten](https://emscripten.org/). Давайте посмотрим, как это работает.
- [Компиляция существующего кода C в WebAssembly](/ru/docs/WebAssembly/existing_C_to_wasm)
  - : Главное, что позволяет WebAssembly, это использование огромного множества разнообразных и проверенных временем библиотек, написанных на языке C, в сети.
- [Компиляция Rust в WebAssembly](/ru/docs/WebAssembly/Rust_to_wasm)
  - : Если у вас есть уже написанный код на Rust, вы можете скомпилировать его в WebAssembly. Из этого руководства вы узнаете всё, что вам нужно знать, чтобы скомпилировать проект на Rust в wasm и использовать его в существующем веб-приложении.
- [Загрузка и запуск кода WebAssembly](/ru/docs/WebAssembly/Loading_and_running)
  - : После того, как у вас появился .wasm, эта статья расскажет, как из него получить, скомпилировать и создать экземпляр модуля, совмещая [WebAssembly JavaScript API](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) c [Fetch](/ru/docs/Web/API/Fetch_API) или [XHR](/ru/docs/Web/API/XMLHttpRequest) API.
- [Использование WebAssembly JavaScript API](/ru/docs/WebAssembly/Using_the_JavaScript_API)
  - : После того, как вы загрузили модуль .wasm, вы захотите его использовать. В этой статье мы покажем вам, как использовать WebAssembly через WebAssembly JavaScript API.
- [Экспортируемые функции WebAssembly](/ru/docs/WebAssembly/Exported_functions)
  - : Экспортируемые функции WebAssembly — это функции нативного модуля, доступные в JavaScript, которые позволяют вызывать код WebAssembly из JavaScript. В этой статье описывается, что они из себя представляют.
- [Описание текстового формата WebAssembly](/ru/docs/WebAssembly/Understanding_the_text_format)
  - : Эта статья описывает текстовый формат WebAssembly. Это низкоуровневое текстовое представления модулей .wasm используемое в инструментах разработчика во время отладки.
- [Перевод из текстового формата WebAssembly в wasm](/ru/docs/WebAssembly/Text_format_to_wasm)
  - : Эта статья содержит руководство по переводу модулей WebAssembly, написанных в текстовом формате, в двоичный файл .wasm.

## Ссылки на API

- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : Этот объект является пространством имён для всех функций, связанных с WebAssembly.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : Объект `WebAssembly.Module` содержит не контролируемый WebAssembly код, который уже скомпилирован браузером и может эффективно использоваться совместно с [Workers](/ru/docs/Web/API/Worker/postMessage) и иметь несколько экземпляров.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : Объект `WebAssembly.Instance` это контролируемый, исполняемый экземпляр `Module`. `Instance` содержит все [экспортированные функции WebAssembly](/ru/docs/WebAssembly/Exported_functions), которые позволяют вызывать код WebAssembly из JavaScript.
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : Функция `WebAssembly.instantiateStreaming()` является основной для компиляции и создания экземпляра кода WebAssembly, возвращающая одновременно `Module` и `Instance`.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : `WebAssembly.Memory` это изменяемый {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} содержащий в себе данные не имеющие типа к которым обращается `Instance`.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : `WebAssembly.Table` объект является изменяемым типизированным массивом значений, таких как ссылки на функции, которые доступны `Instance`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Создаёт новый WebAssembly `CompileError` объект.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Создаёт новый WebAssembly `LinkError` объект.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Создаёт новый WebAssembly `RuntimeError` объект.

## Примеры

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Больше примеров вы можете найти в нашем репозитории [webassembly-examples](https://github.com/mdn/webassembly-examples/).

## Спецификация

| Specification                  | Status                      | Comment                                         |
| ------------------------------ | --------------------------- | ----------------------------------------------- |
| {{SpecName('WebAssembly JS')}} | {{Spec2('WebAssembly JS')}} | Initial draft definition of the JavaScript API. |

## Совместимость с браузерами

{{Compat("javascript.builtins.WebAssembly")}}

## Смотрите также

- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [webassembly.org](http://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Large-Allocation HTTP header](/ru/docs/Web/HTTP/Headers/Large-Allocation)
- [Emscripting a C Library to Wasm](https://developers.google.com/web/updates/2018/03/emscripting-a-c-library)
