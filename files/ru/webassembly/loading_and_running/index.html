---
title: Загрузка и запуск кода WebAssembly
slug: WebAssembly/Loading_and_running
tags:
  - Fetch
  - JavaScript
  - WebAssembly
  - XMLHttpRequest
  - bytecode
translation_of: WebAssembly/Loading_and_running
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">Чтобы использовать WebAssembly в JavaScript, сначала нужно загрузить модуль в память перед компиляцией/созданием экземпляра. Эта статья содержит справочную информацию о различных механизмах, которые можно использовать для получения байт-кода WebAssembly, а также о том, как скомпилировать/создать экземпляр, а затем запустить его.</p>

<h2 id="Какие_есть_варианты">Какие есть варианты?</h2>

<p>WebAssembly ещё не интегрирована с  <code>&lt;script type='module'&gt;</code> или ES2015 оператором <code>import</code>, поэтому не существует пути, позволяющего использовать модули загрузки браузера для использования импорта.</p>

<p>Старые методы {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} требуют создания {{domxref("ArrayBuffer")}}, содержащего двоичный файл модуля WebAssembly после загрузки необработанных байтов, а затем скомпилировать/создать его экземпляр. Это аналог <code>new Function(string)</code>, за исключением того, что мы заменяем строку символов (исходный код JavaScript) буфером байтов массива (исходный код WebAssembly).</p>

<p>Более новые методы {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} намного эффективнее - они выполняют свои действия непосредственно с необработанным потоком байтов, поступающих из сети, избавление от необходимости шага {{domxref("ArrayBuffer")}}.</p>

<p>Итак, как мы можем получить эти байты в буфер массива и скомпилировать? Следующие разделы объясняют.</p>

<h2 id="Используя_Fetch">Используя Fetch</h2>

<p><a href="/en-US/docs/Web/API/Fetch_API">Fetch</a> - это удобный современный API для извлечения сетевых ресурсов.</p>

<p>Самый быстрый и эффективный способ получить модуль wasm - использовать более новый метод {{jsxref("WebAssembly.instantiateStreaming()")}}, который может принять вызов <code>fetch()</code> в качестве первого аргумента и будет обрабатывать загрузку, компиляцию и создание экземпляра модуля за один шаг, получая доступ к необработанному байтовому коду при его потоковой передаче с сервера:</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(results =&gt; {
  // Do something with the results!
});</pre>

<p>Если бы мы использовали более старый метод {{jsxref("WebAssembly.instantiate()")}}, который не работает в прямом потоке, нам потребовался бы дополнительный шаг преобразования преобразованного байт-кода в {{domxref("ArrayBuffer")}}, вот так:</p>

<pre class="brush: js">fetch('module.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(results =&gt; {
  // Do something with the results!
});</pre>

<p> </p>

<h3 id="Помимо_перегрузок_instantiate()">Помимо перегрузок instantiate()</h3>

<p>Функция {{jsxref("WebAssembly.instantiate()")}} имеет две формы перегрузки - та, что показана выше, принимает байт-код для компиляции в качестве аргумента и возвращает <code>Promise</code>, которое разрешается для объекта, содержащего оба объекта скомпилированного модуля, и экземпляр этого. Объект выглядит так:</p>

<pre class="brush: js">{
  module : Module // The newly compiled WebAssembly.Module object,
  instance : Instance // A new WebAssembly.Instance of the module object
}</pre>

<div class="note">
<p><strong>Примечание</strong>: Обычно мы заботимся только об экземпляре, но полезно иметь модуль на тот случай, если мы хотим его кешировать, поделиться им с другим работником или окном через <code><a href="/en-US/docs/Web/API/MessagePort/postMessage">postMessage()</a></code>, или просто создать больше экземпляров.</p>
</div>

<div class="note">
<p><strong>Примечание</strong>: Вторая форма перегрузки принимает в качестве аргумента объект {{jsxref("WebAssembly.Module")}} и возвращает <code>Promise</code>, непосредственно содержащее объект экземпляра, в качестве результата. См. <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example">Второй пример перегрузки</a>.</p>
</div>

<h3 id="Выполнение_вашего_кода_WebAssembly">Выполнение вашего кода WebAssembly</h3>

<p>Когда у вас есть экземпляр WebAssembly, доступный в вашем JavaScript, вы можете начать использовать его возможности, которые были экспортированы через свойство {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}}. Ваш код может выглядеть примерно так:</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
.then(obj =&gt; {
  // Call an exported function:
  obj.instance.exports.exported_func();

  // or access the buffer contents of an exported memory:
  var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

  // or access the elements of an exported table:
  var table = obj.instance.exports.table;
  console.log(table.get(0)());
})</pre>

<div class="note">
<p><strong>Примечание</strong>: Для получения дополнительной информации о том, как работает экспорт из модуля WebAssembly, ознакомьтесь с разделами <a href="/en-US/docs/WebAssembly/Using_the_JavaScript_API">Использование JavaScript API WebAssembly</a>, и <a href="/en-US/docs/WebAssembly/Understanding_the_text_format">Понимание текстового формата WebAssembly</a>.</p>
</div>

<h2 id="Используя_XMLHttpRequest">Используя XMLHttpRequest</h2>

<p><code><a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> несколько старше, чем Fetch, но всё же может успешно использоваться для получения типизированного массива. Опять же, если предположить, что наш модуль называется <code>simple.wasm</code>:</p>

<ol>
 <li>Создайте новый экземпляр {{domxref("XMLHttpRequest()")}} и используйте его метод {{domxref("XMLHttpRequest.open","open()")}} для открытия запроса, задав для метода запроса значение  <code>GET</code> и указав путь к файлу, который мы хотим получить.</li>
 <li>Ключевой частью этого является установка типа ответа  <code>'arraybuffer'</code> с помощью свойства {{domxref("XMLHttpRequest.responseType","responseType")}}.</li>
 <li>Затем отправьте запрос с помощью {{domxref("XMLHttpRequest.send()")}}.</li>
 <li>Затем мы используем обработчик событий {{domxref("XMLHttpRequest.onload", "onload")}} для вызова функции после завершения загрузки ответа - в этой функции мы получаем буфер массива из {{domxref("XMLHttpRequest.response", "response")}} и затем передайте это в наш метод {{jsxref("WebAssembly.instantiate()")}}, как мы это делали с Fetch.</li>
</ol>

<p>Финальный код выглядит так:</p>

<pre class="brush: js">request = new XMLHttpRequest();
request.open('GET', 'simple.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then(results =&gt; {
    results.instance.exports.exported_func();
  });
};</pre>

<div class="note">
<p><strong>Примечание</strong>: вы можете увидеть пример этого в действии в <a href="https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html">xhr-wasm.html</a>.</p>
</div>
