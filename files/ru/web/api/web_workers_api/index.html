---
title: Web Workers API
slug: Web/API/Web_Workers_API
tags:
  - API
  - NeedsTranslation
  - Service Workers
  - Shared Workers
  - TopicStub
  - Web Workers
  - Workers
translation_of: Web/API/Web_Workers_API
---
<p>{{DefaultAPISidebar("Web Workers API")}}</p>

<p class="summary"><strong>Web Workers</strong> это механизм, который позволяет скрипту выполняться в фоновом потоке, который отделен от основного потока веб-приложения. Преимущество заключается в том, ресурсоёмкие вычисления могут выполняться в отдельном потоке, позволяя запустить основной (обычно пользовательский) поток без блокировки и замедления.</p>

<h2 id="Концепции_и_использование_Web_воркеров">Концепции и использование Web воркеров</h2>

<p>Worker (работник, воркер)  - это объект созданный при помощи конструктора (например, {{domxref("Worker.Worker", "Worker()")}}), который запускает именованный файл JavaScript - этот файл содержит код, который будет запускаться в потоке воркера; воркеры запускаются в другом глобальном контексте отличном от текущего контекста {{domxref("window")}}. Этот контекст представлен объектом {{domxref("DedicatedWorkerGlobalScope")}} в случае специализированных воркеров (стандартные воркеры, которые используются одним скриптом, общие воркеры используют {{domxref("SharedWorkerGlobalScope")}}).</p>

<p>Вы можете запустить любой код, который вам нравится внутри потока воркера, за некоторыми исключениями. Например, вы не можете напрямую манипулировать DOM внутри воркера или использовать некоторые методы и свойства по умолчанию объекта {{domxref("window")}}. Но вы можете использовать большое количество свойств и методов, доступных в <code>window</code>, включая <a href="/en-US/docs/WebSockets">WebSockets</a>, и механизм хранения данных такой, как <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> или <a href="/en-US/docs/Web/API/Data_Store_API">Data Store API,</a> который доступен только в ОС Firefox. За дополнительной информацией смотрите <a href="/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers">Функции и классы доступные воркерам.</a></p>

<p>Данные отправляются между потоком воркера и основным потоком через систему сообщений - обе стороны отправляют свои сообщения с помощью метода <code>postMessage ()</code> и отвечают на сообщения через обработчик события <code>onmessage</code> (сообщение содержится в атрибуте данных события  {{event("Message")}}. Данные копируются, а не используются совместно.</p>

<p>Воркеры могут, в свою очередь, создавать новых воркеров, в этом случае они должны иметь одно и то же происхождение - родительскую страницу. Кроме того, воркеры могут использовать <a class="internal" href="/en-US/docs/Web/API/XMLHttpRequest"><code>XMLHttpRequest</code></a> для сетевого ввода-вывода, за исключением того, что атрибуты <code>responseXML</code> и <code>channel </code>на XMLHttpRequest всегда возвращают значение <code>null</code>.</p>

<p>В дополнение к специализированным существуют и другие виды воркеров:</p>

<ul>
 <li>Совместные воркеры - это воркеры, которые могут использоваться несколькими скриптами совместно, работающими в разных окнах, IFrames и т.д. в пределах одного домена, что и воркер. Они немного сложнее, чем специализированные воркеры - скрипты должны связываться через активный порт. Подробнее см. {{domxref("SharedWorker")}}.</li>
 <li><a href="/en-US/docs/Web/API/ServiceWorker_API">ServiceWorkers</a> по сути действуют как прокси-серверы, которые находятся между веб-приложениями, а также браузером и сетью (если доступны). Помимо прочего они предназначены для создания эффективного автономного взаимодействия, перехвата сетевых запросов и принятия соответствующих мер на основе доступности сети и обновления данных на сервере. Они также позволят доступ к push-уведомлениям и API-интерфейсам фоновой синхронизации.</li>
 <li>Воркеры в Chrome - это воркеры специального типа Firefox, которые вы можете использовать, если вы разрабатываете надстройки и хотите использовать воркеры в расширениях и иметь доступ к js-ctypes в вашем воркере. Смотрите также {{domxref("ChromeWorker")}}. </li>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API#Audio_Workers">Audio Workers</a>(аудио воркеры) обеспечивают возможность прямой обработки аудиозаписей в рамках веб-контекста воркера.</li>
</ul>

<div class="note">
<p><strong>Замечание</strong>: В соответствии с <a href="https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2">Web workers Spec</a>, события ошибок воркеров не должны "всплывать" (смотрите  {{bug(1188141)}}. Такое поведение было реализовано в Firefox 42.</p>
</div>

<h2 id="Интерфейсы_Web_воркера">Интерфейсы Web воркера</h2>

<dl>
 <dt>{{domxref("AbstractWorker")}}</dt>
 <dd>Абстрактные свойства и методы общие для всех типов воркеров (т.е. {{domxref("Worker")}} или {{domxref("SharedWorker")}}).</dd>
 <dt>{{domxref("Worker")}}</dt>
 <dd>Представляет поток исполнения воркера, позволяющий передавать сообщения текущему коду воркера.</dd>
 <dt>{{domxref("SharedWorker")}}</dt>
 <dd>Представляет конкретный вид воркера, к которому можно получить доступ из нескольких контекстов, будь то несколько окон, iframe или даже воркеров.</dd>
 <dt>{{domxref("WorkerGlobalScope")}}</dt>
 <dd>Represents the generic scope of any worker (doing the same job as {{domxref("Window")}} does for normal web content). Different types of worker have scope objects that inherit from this interface and add more specific features.</dd>
 <dt>{{domxref("DedicatedWorkerGlobalScope")}}</dt>
 <dd>Represents the scope of a dedicated worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.</dd>
 <dt>{{domxref("SharedWorkerGlobalScope")}}</dt>
 <dd>Represents the scope of a shared worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.</dd>
 <dt>{{domxref("WorkerNavigator")}}</dt>
 <dd>Представляет идентификатор и состояние пользовательского агента (клиента).</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<p>Мы создали пару простых демонстрационных программ чтобы показать основы использования:</p>

<ul>
 <li><a href="https://github.com/mdn/simple-web-worker">Базовый пример отдельного воркера</a> (<a href="http://mdn.github.io/simple-web-worker/">запускает отдельного воркера</a>).</li>
 <li><a href="https://github.com/mdn/simple-shared-worker">Базовый пример разделяемого воркера</a> (<a href="http://mdn.github.io/simple-shared-worker/">запускает разделяемого воркера</a>).</li>
</ul>

<p>Больше информации о том, как работают эти демонстрационные программы, вы можете найти в статье <a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Использование Web воркеров</a>.</p>

<h2 id="Спецификации">Спецификации</h2>

<table>
  <thead>
    <tr>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://html.spec.whatwg.org/multipage/workers.html#workers">HTML Living Standard # workers</a></td>
    </tr>
  </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/basic_usage">Использование Web воркеров</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker">Worker Interface</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker">Интерфейс SharedWorker</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers">Функции и классы доступные воркерам</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples">Продвинутые концепции и примеры</a></li>
 <li><a href="/en-US/docs/Web/API/ChromeWorker">ChromeWorker</a>: для использования воркеров в привелегированном/chrome коде</li>
</ul>
