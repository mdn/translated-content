---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
tags:
  - API
  - Error
  - Property
  - Reference
  - XMLHttpRequest
  - XMLHttpRequest Status
  - result
  - status
translation_of: Web/API/XMLHttpRequest/status
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p>Доступное только для чтения свойство <code><strong>XMLHttpRequest.status</strong></code>, возвращает числовой <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">код состояния</a> HTTP ответа <code>XMLHttpRequest</code>.</p>

<p>До завершения запроса значение <code>status</code> равно 0. Браузеры также сообщают о состоянии 0 в случае ошибок <code>XMLHttpRequest</code>.</p>

<h2 id="Пример">Пример</h2>

<pre class="brush: js">var xhr = new XMLHttpRequest;
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_браузера">Совместимость браузера</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Список <a href="/en-US/docs/Web/HTTP/Response_codes">HTTP response codes</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
