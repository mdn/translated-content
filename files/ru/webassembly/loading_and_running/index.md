---
title: Загрузка и запуск кода WebAssembly
slug: WebAssembly/Loading_and_running
---

{{WebAssemblySidebar}}

Чтобы использовать WebAssembly в JavaScript, сначала нужно загрузить модуль в память перед компиляцией/созданием экземпляра. Эта статья содержит справочную информацию о различных механизмах, которые можно использовать для получения байт-кода WebAssembly, а также о том, как скомпилировать/создать экземпляр, а затем запустить его.

## Какие есть варианты?

WebAssembly ещё не интегрирована с `<script type='module'>` или ES2015 оператором `import`, поэтому не существует пути, позволяющего использовать модули загрузки браузера для использования импорта.

Старые методы {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} требуют создания {{domxref("ArrayBuffer")}}, содержащего двоичный файл модуля WebAssembly после загрузки необработанных байтов, а затем скомпилировать/создать его экземпляр. Это аналог `new Function(string)`, за исключением того, что мы заменяем строку символов (исходный код JavaScript) буфером байтов массива (исходный код WebAssembly).

Более новые методы {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} намного эффективнее - они выполняют свои действия непосредственно с необработанным потоком байтов, поступающих из сети, избавление от необходимости шага {{domxref("ArrayBuffer")}}.

Итак, как мы можем получить эти байты в буфер массива и скомпилировать? Следующие разделы объясняют.

## Используя Fetch

[Fetch](/ru/docs/Web/API/Fetch_API) - это удобный современный API для извлечения сетевых ресурсов.

Самый быстрый и эффективный способ получить модуль wasm - использовать более новый метод {{jsxref("WebAssembly.instantiateStreaming()")}}, который может принять вызов `fetch()` в качестве первого аргумента и будет обрабатывать загрузку, компиляцию и создание экземпляра модуля за один шаг, получая доступ к необработанному байтовому коду при его потоковой передаче с сервера:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

Если бы мы использовали более старый метод {{jsxref("WebAssembly.instantiate()")}}, который не работает в прямом потоке, нам потребовался бы дополнительный шаг преобразования преобразованного байт-кода в {{domxref("ArrayBuffer")}}, вот так:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Помимо перегрузок instantiate()

Функция {{jsxref("WebAssembly.instantiate()")}} имеет две формы перегрузки - та, что показана выше, принимает байт-код для компиляции в качестве аргумента и возвращает `Promise`, которое разрешается для объекта, содержащего оба объекта скомпилированного модуля, и экземпляр этого. Объект выглядит так:

```js
{
  module: Module; // The newly compiled WebAssembly.Module object,
  instance: Instance; // A new WebAssembly.Instance of the module object
}
```

> **Примечание:** Обычно мы заботимся только об экземпляре, но полезно иметь модуль на тот случай, если мы хотим его кешировать, поделиться им с другим работником или окном через [`postMessage()`](/ru/docs/Web/API/MessagePort/postMessage), или просто создать больше экземпляров.

> **Примечание:** Вторая форма перегрузки принимает в качестве аргумента объект {{jsxref("WebAssembly.Module")}} и возвращает `Promise`, непосредственно содержащее объект экземпляра, в качестве результата. См. [Второй пример перегрузки](/ru/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example).

### Выполнение вашего кода WebAssembly

Когда у вас есть экземпляр WebAssembly, доступный в вашем JavaScript, вы можете начать использовать его возможности, которые были экспортированы через свойство {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}}. Ваш код может выглядеть примерно так:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Call an exported function:
    obj.instance.exports.exported_func();

    // or access the buffer contents of an exported memory:
    var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // or access the elements of an exported table:
    var table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> **Примечание:** Для получения дополнительной информации о том, как работает экспорт из модуля WebAssembly, ознакомьтесь с разделами [Использование JavaScript API WebAssembly](/ru/docs/WebAssembly/Using_the_JavaScript_API), и [Понимание текстового формата WebAssembly](/ru/docs/WebAssembly/Understanding_the_text_format).

## Используя XMLHttpRequest

[`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) несколько старше, чем Fetch, но всё же может успешно использоваться для получения типизированного массива. Опять же, если предположить, что наш модуль называется `simple.wasm`:

1. Создайте новый экземпляр {{domxref("XMLHttpRequest()")}} и используйте его метод {{domxref("XMLHttpRequest.open","open()")}} для открытия запроса, задав для метода запроса значение `GET` и указав путь к файлу, который мы хотим получить.
2. Ключевой частью этого является установка типа ответа `'arraybuffer'` с помощью свойства {{domxref("XMLHttpRequest.responseType","responseType")}}.
3. Затем отправьте запрос с помощью {{domxref("XMLHttpRequest.send()")}}.
4. Затем мы используем обработчик событий {{domxref("XMLHttpRequest.onload", "onload")}} для вызова функции после завершения загрузки ответа - в этой функции мы получаем буфер массива из {{domxref("XMLHttpRequest.response", "response")}} и затем передайте это в наш метод {{jsxref("WebAssembly.instantiate()")}}, как мы это делали с Fetch.

Финальный код выглядит так:

```js
request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = function () {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **Примечание:** вы можете увидеть пример этого в действии в [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
