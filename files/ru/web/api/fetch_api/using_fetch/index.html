---
title: Использование Fetch
slug: Web/API/Fetch_API/Using_Fetch
translation_of: Web/API/Fetch_API/Using_Fetch
---
<p><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a> предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод {{domxref("GlobalFetch.fetch","fetch()")}}, который позволяет легко и логично получать ресурсы по сети асинхронно.</p>

<p>Подобная функциональность ранее достигалась с помощью {{domxref("XMLHttpRequest")}}. Fetch представляет собой лучшую альтернативу, которая может быть легко использована другими технологиями, такими как {{domxref("ServiceWorker_API", "Service Workers")}}. Fetch также обеспечивает единое логическое место для определения других связанных с HTTP понятий, такие как CORS и расширения для HTTP.</p>

<p>Обратите внимание, <code>fetch</code> спецификация отличается от <code>jQuery.ajax()</code> в основном в двух пунктах:</p>

<ul>
 <li>Promise возвращаемый вызовом <code>fetch()</code> <strong>не перейдёт в состояние "отклонено" из-за ответа HTTP, который считается ошибкой</strong>, даже если ответ HTTP 404 или 500.  Вместо этого, он будет выполнен нормально (с значением false в статусе <code>ok</code> ) и будет отклонён только при сбое сети или если что-то помешало запросу выполниться.</li>
 <li>По умолчанию, <code>fetch</code> <strong>не будет отправлять или получать cookie файлы </strong>с сервера, в результате чего запросы будут осуществляться без проверки подлинности, что приведёт к неаутентифицированным запросам, если сайт полагается на проверку пользовательской сессии (для отправки cookie файлов в аргументе <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters">init options</a> должно быть задано значение свойства <em>credentials</em> отличное от значения по умолчанию <code>omit</code>).</li>
</ul>

<div class="note">
<p>25 августа 2017 г. в спецификации изменилось значение по умолчанию свойства <em>credentials</em> на <code>same-origin</code>. Firefox применяет это изменение с версии 61.0b13.</p>
</div>

<p>Базовый запрос на получение данных действительно прост в настройке. Взгляните на следующий код:</p>

<pre>fetch('http://example.com/movies.json')
  .then((response) =&gt; {
    return response.json();
  })
  .then((data) =&gt; {
    console.log(data);
  });</pre>

<p>Здесь мы забираем JSON файл по сети и выводим его содержимое в консоль. Самый простой способ использования <code>fetch()</code> заключается в вызове этой функии с одним аргументом — строкой, содержащей путь к ресурсу, который вы хотите получить — которая возвращает promise, содержащее ответ (объект {{domxref("Response")}}).</p>

<p>Конечно, это просто HTTP-ответ, а не фактический JSON. Чтобы извлечь содержимое тела JSON из ответа, мы используем {{domxref("Body.json","json()")}} метод  (определён миксином {{domxref("Body")}}, который реализован в объектах {{domxref("Request")}} и {{domxref("Response")}}.)</p>

<div class="note">
<p><strong>Примечание</strong>: Миксин Body имеет подобные методы для извлечения других типов контента; см. раздел <a href="#тело">Тело</a>.</p>
</div>

<p>Fetch-запросы контролируются посредством директивы <code>connect-src</code> (<a href="/en-US/docs/Security/CSP/CSP_policy_directives">Content Security Policy</a>), а не директивой извлекаемых ресурсов.</p>

<h3 id="Установка_параметров_запроса">Установка параметров запроса</h3>

<p>Метод <code>fetch()</code> может принимать второй параметр - объект <code>init</code>, который позволяет вам контролировать различные настройки:</p>

<pre class="brush: js">// Пример отправки POST запроса:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) =&gt; {
    console.log(data); // JSON data parsed by `response.json()` call
  });</pre>

<p>С подробным описанием функции и полным списком параметров вы можете ознакомиться на странице {{domxref("GlobalFetch.fetch","fetch()")}}.</p>

<h3 id="Отправка_запроса_с_учётными_данными">Отправка запроса с учётными данными</h3>

<p>Чтобы браузеры могли отправлять запрос с учётными данными (даже для cross-origin запросов), добавьте <code>credentials: 'include'</code> в объект <code>init</code>, передаваемый вами в метод <code>fetch()</code>:</p>

<pre class="brush: js"><code>fetch('https://example.com', {
  credentials: 'include'
})</pre>

<p>Если вы хотите отправлять запрос с учётными данными только если URL принадлежит одному источнику (origin) что и вызывающий его скрипт, добавьте <code>credentials: 'same-origin'</code>.</p>

<pre><code>// Вызывающий скрипт принадлежит источнику 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
})</pre>

<p>Напротив, чтобы быть уверенным, что учётные данные не передаются с запросом, используйте <code>credentials: 'omit'</code>:</p>

<pre class="brush: js"><code>fetch('https://example.com', {
  credentials: 'omit'
})</pre>

<h3 id="Отправка_данных_в_формате_JSON">Отправка данных в формате JSON</h3>

<p>При помощи {{domxref("GlobalFetch.fetch","fetch()")}} можно отправлять POST-запросы в формате JSON.</p>

<pre class="brush: js">const url = 'https://example.com/profile';
const data = { username: 'example' };

try {
  const response = await fetch(url, {
    method: 'POST', // или 'PUT'
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('Успех:', JSON.stringify(json));
} catch (error) {
  console.error('Ошибка:', error);
}</pre>

<h3 id="Загрузка_файла_на_сервер">Загрузка файла на сервер</h3>

<p>На сервер можно загрузить файл, используя комбинацию HTML-элемента <code>&lt;input type="file" /&gt;</code>, {{domxref("FormData.FormData","FormData()")}} и {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}}.</p>

<pre class="brush: js">const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

try {
  const response = await fetch('https://example.com/profile/avatar', {
    method: 'PUT',
    body: formData
  });
  const result = await response.json();
  console.log('Успех:', JSON.stringify(result));
} catch (error) {
  console.error('Ошибка:', error);
}</pre>

<h3 id="Загрузка_нескольких_файлов_на_сервер">Загрузка нескольких файлов на сервер</h3>

<p>На сервер можно загрузить несколько файлов, используя комбинацию HTML-элемента <code>&lt;input type="file" multiple /&gt;</code>, {{domxref("FormData.FormData","FormData()")}} и {{domxref("WindowOrWorkerGlobalScope/fetch","fetch()")}}.</p>

<pre class="brush: js">const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'Мой отпуск в Вегасе');
for (let i = 0; i &lt; photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

try {
  const response = await fetch('https://example.com/posts', {
    method: 'POST',
    body: formData
  });
  const result = await response.json();
  console.log('Успех:', JSON.stringify(result));
} catch (error) {
  console.error('Ошибка:', error);
}</pre>

<h3 id="Обработка_текстового_файла_построчно">Обработка текстового файла построчно</h3>

<p>Фрагменты данных, получаемые из ответа, не разбиваются на строки автоматически (по крайней мере с достаточной точностью) и представляют собой не строки, а объекты {{jsxref("Uint8Array","Uint8Array")}}. Если вы хотите загрузить текстовый файл и обрабатывать его по мере загрузки построчно, то на вас самих ложится груз ответственности за обработку всех упомянутых моментов. Как пример, далее представлен один из способов подобной обработки с помощью создания построчного итератора (для простоты приняты следующие допущения: текст приходит в кодировке UTF-8 и ошибки получения не обрабатываются).</p>

<pre class="brush: js">async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  let response = await fetch(fileURL);
  let reader = response.body.getReader();
  let {value: chunk, done: readerDone} = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({value: chunk, done: readerDone} = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex &lt; chunk.length) {
    //последняя строка не имеет символа перевода строки в конце
    yield chunk.substr(startIndex);
  }
}

for await (let line of makeTextFileLineIterator(urlOfFile)) {
  processLine(line);
}</pre>

<h3 id="Проверка_успешности_запроса">Проверка успешности запроса</h3>

<p>В методе {{domxref("GlobalFetch.fetch","fetch()")}} promise будет отклонён (reject) с {{jsxref("TypeError")}}, когда случится ошибка сети или не будет сконфигурирован CORS на стороне запрашиваемого сервера, хотя обычно это означает проблемы доступа или аналогичные — для примера, 404 не является сетевой ошибкой. Для достоверной проверки успешности <code>fetch()</code> будет включать проверку того, что promise успешен (resolved), затем проверку того, что  значение свойства {{domxref("Response.ok")}} является true. Код будет выглядеть примерно так:</p>

<pre class="brush: js">try {
  const response = await fetch('flowers.jpg');
  if (!response.ok) {
    throw new Error('Ответ сети был не ok.');
  }
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
} catch (error) {
  console.log('Возникла проблема с вашим fetch запросом: ', error.message);
}</pre>

<h3 id="Составление_своего_объекта_запроса">Составление своего объекта запроса</h3>

<p>Вместо передачи пути ресурса, который вы хотите запросить вызовом <code>fetch()</code>, вы можете создать объект запроса, используя конструктор {{domxref("Request.Request","Request()")}}, и передать его в <code>fetch()</code> аргументом:</p>

<pre class="brush: js">const myHeaders = new Headers();

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

const myRequest = new Request('flowers.jpg', myInit);
const response = await fetch(myRequest);
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;</pre>

<p>Конструктор <code>Request()</code> принимает точно такие же параметры, как и метод <code>fetch()</code>. Вы даже можете передать существующий объект запроса для создания его копии:</p>

<pre class="brush: js">const anotherRequest = new Request(myRequest, myInit);</pre>

<p>Довольно удобно, когда тела запроса и ответа используются единожды (прим.пер.: <em>"are one use only"</em>). Создание копии как показано позволяет вам использовать запрос/ответ повторно, при изменении опций <code>init</code>, при желании. Копия должна быть сделана до прочтения тела, а чтение тела в копии также пометит его прочитанным в исходном запросе.</p>

<div class="note">
<p><strong>Примечание</strong>: Также есть метод {{domxref("Request.clone","clone()")}}, создающий копии. Оба метода создания копии прекратят работу с ошибкой если тело оригинального запроса или ответа уже было прочитано, но чтение тела клонированного ответа или запроса не приведёт к маркировке оригинального.</p>
</div>

<h2 id="Заголовки">Заголовки</h2>

<p>Интерфейс {{domxref("Headers")}} позволяет вам создать ваш собственный объект заголовков через конструктор {{domxref("Headers.Headers","Headers()")}}. Объект заголовков - простая мультикарта имён-значений:</p>

<pre class="brush: js">const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');</pre>

<p>То же может быть достигнуто путём передачи массива массивов или литерального объекта конструктору:</p>

<pre class="brush: js">const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});</pre>

<p>Содержимое может быть запрошено и извлечено:</p>

<pre class="brush: js">console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]</pre>

<p>Некоторые из этих операций могут быть использованы только в {{domxref("ServiceWorker_API","ServiceWorkers")}}, но они предоставляют более удобный API для манипуляции заголовками.</p>

<p>Все методы Headers выбрасывают <code>TypeError</code>, если имя используемого заголовка не является валидным именем HTTP Header. Операции мутации выбросят <code>TypeError</code> если есть защита от мутации (смотрите ниже) (прим.пер.: <em>"if there is an immutable guard"</em>). В противном случае они прерываются молча. Например:</p>

<pre class="brush: js">const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Не могу притвориться банком!');
}</pre>

<p>Хорошим вариантом использования заголовков  является проверка корректности типа контента перед его обработкой. Например:</p>

<pre class="brush: js">try {
  const response = await fetch(myRequest);
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new TypeError("Ой, мы не получили JSON!");
  }
  const json = await response.json();
  /* Дальнейшая обработка JSON */
} catch (error) {
  console.log(error);
}</pre>

<h3 id="Защита">Защита</h3>

<p>С тех пор как заголовки могут передаваться в запросе, приниматься в ответе и имеют различные ограничения в отношении того, какая информация может и должна быть изменена, заголовки имеют свойство guard. Это не распространяется на Web, но влияет на то, какие операции мутации доступны для объекта заголовков.</p>

<p>Возможные значения:</p>

<ul>
 <li><code>none</code>: по умолчанию.</li>
 <li><code>request</code>: защита объекта заголовков, полученного по запросу ({{domxref("Request.headers")}}).</li>
 <li><code>request-no-cors</code>: защита объекта заголовков, полученного по запросу созданного с {{domxref("Request.mode")}} <code>no-cors</code>.</li>
 <li><code>response</code>: защита Headers полученных от ответа ({{domxref("Response.headers")}}).</li>
 <li><code>immutable</code>: в основном, используется в ServiceWorkers; делает объект заголовков read-only.</li>
</ul>

<div class="note">
<p><strong>Примечание</strong>: вы не можете добавить или установить <code>request</code> защищаемые Headers’ заголовок <code>Content-Length</code>. Аналогично, вставка <code>Set-Cookie</code> в заголовок ответа недопустимо: ServiceWorkers не допускают установки cookies через синтезированные ответы.</p>
</div>

<h2 id="Объекты_ответа">Объекты ответа</h2>

<p>Как вы видели выше, экземпляр {{domxref("Response")}} будет возвращён когда <code>fetch()</code> промис будет исполнен.</p>

<p>Свойства объекта-ответа которые чаще всего используются:</p>

<ul>
 <li>{{domxref("Response.status")}} — Целочисленное (по умолчанию 200) содержит код статуса ответа.</li>
 <li>{{domxref("Response.statusText")}} — Строка (по умолчанию"OK"), которая соответствует HTTP коду статуса.</li>
 <li>{{domxref("Response.ok")}} — как сказано ранее, это короткое свойство для упрощения проверки на то что статус ответа находится где-то между 200-299 включительно. Это свойство типа {{domxref("Boolean")}}.</li>
</ul>

<p>Они так же могут быть созданы с помощью JavaScript, но реальная польза от этого есть только при использовании  {{domxref("ServiceWorker_API", "сервис-воркеров")}}, когда вы предоставляете собственный ответ на запрос с помощью метода {{domxref("FetchEvent.respondWith","respondWith()")}}:</p>

<pre class="brush: js">const myBody = new Blob();

addEventListener('fetch', function(event) {
  // ServiceWorker перехватывает fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});</pre>

<p>Конструктор {{domxref("Response.Response","Response()")}} принимает два необязательных аргумента — тело для ответа и объект init (аналогичный тому, который принимает {{domxref("Request.Request","Request()")}})</p>

<ul>
</ul>

<div class="note">
<p><strong>Примечание</strong>: Метод {{domxref("Response.error","error()")}} просто возвращает ответ об ошибке. Аналогично, {{domxref("Response.redirect","redirect()")}} возвращает ответ, приводящий к перенаправлению на указанный URL. Они также относятся только к Service Workers.</p>
</div>

<h2 id="Тело">Тело</h2>

<p>Запрос и ответ могут содержать данные тела. Тело является экземпляром любого из следующих типов:</p>

<ul>
 <li>{{domxref("ArrayBuffer")}}</li>
 <li>{{domxref("ArrayBufferView")}} (Uint8Array и подобные)</li>
 <li>{{domxref("Blob")}}/File</li>
 <li>string</li>
 <li>{{domxref("URLSearchParams")}}</li>
 <li>{{domxref("FormData")}}</li>
</ul>

<p>{{domxref("Body")}} примесь определяет следующие методы для извлечения тела (реализованы как для {{domxref("Request")}} так и для {{domxref("Response")}}). Все они возвращают promise, который в конечном итоге исполняется и выводит содержимое.</p>

<ul>
 <li>{{domxref("Body.arrayBuffer","arrayBuffer()")}}</li>
 <li>{{domxref("Body.blob","blob()")}}</li>
 <li>{{domxref("Body.json","json()")}}</li>
 <li>{{domxref("Body.text","text()")}}</li>
 <li>{{domxref("Body.formData","formData()")}}</li>
</ul>

<p>Это делает использование нетекстовых данных более лёгким, чем при XMR.</p>

<p>В запросе можно установить параметры для отправки тела запроса:</p>

<pre class="brush: js">const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});</pre>

<p>Параметры request и response (and by extension the <code>fetch()</code> function), по возможности возвращают корректные типы данных. Параметр request также автоматически установит <code>Content-Type</code> в заголовок, если он не был установлен из словаря.</p>

<h2 id="Функция_обнаружения">Функция обнаружения</h2>

<p>Поддержка Fetch API может быть обнаружена путём проверки наличия {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} или {{domxref("GlobalFetch.fetch","fetch()")}} в области видимости {{domxref("Window")}} или {{domxref("Worker")}}. Для примера:</p>

<pre class="brush: js">if (self.fetch) {
    // запустить мой fetch запрос здесь
} else {
    // Сделать что-то с XMLHttpRequest?
}</pre>

<h2 id="Полифил">Полифил</h2>

<p>Для того, чтобы использовать Fetch в неподдерживаемых браузерах, существует  <a href="https://github.com/github/fetch">Fetch Polyfill</a> , который воссоздаёт функциональность для не поддерживающих браузеров.</p>

<h2 id="Спецификации">Спецификации</h2>

<table>
  <thead>
    <tr>
      <th>Specification</th>
      <th>Status</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Fetch')}}</td>
      <td>{{Spec2('Fetch')}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

<h2 id="Совместимость_браузера">Совместимость браузера</h2>

<p>{{Compat("api.fetch")}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/Access_control_CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
 <li><a href="https://github.com/github/fetch">Fetch polyfill</a></li>
 <li><a href="https://github.com/mdn/fetch-examples/">Fetch examples on Github</a></li>
</ul>
