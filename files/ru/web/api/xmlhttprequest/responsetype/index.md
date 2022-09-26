---
title: XMLHttpRequest.responseType
slug: Web/API/XMLHttpRequest/responseType
translation_of: Web/API/XMLHttpRequest/responseType
---
<p>{{APIRef('XMLHttpRequest')}}</p>

<p><strong><code>XMLHttpRequest.responseType</code></strong> Свойство является перечислимым значением, которое возвращает тип ответа. Он также позволяет автору изменять тип ответа. Если значение не задано, будет использовано значение по умолчанию <strong><code>text</code></strong>. Установка значения responseType в «document» игнорируется, если выполняется в  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker">рабочей</a> среде. При настройке <code>responseType</code> на определённое значение автор должен убедиться, что сервер действительно отправляет ответ, совместимый с этим форматом. Если сервер возвращает данные, которые не совместимы с установленным <code>responseType</code>, значение <code>response</code> будет <code>null</code>. Кроме того, установка <code>responseType</code> для синхронных запросов вызовет исключение <code>InvalidAccessError</code>.</p>

<p>Поддерживаемые значения <code>responseType</code>:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">Value</td>
   <td class="header">Data type of <code>response</code> property</td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td>{{domxref("DOMString")}} (this is the default value)</td>
  </tr>
  <tr>
   <td><code>"arraybuffer"</code></td>
   <td>{{domxref("ArrayBuffer")}}</td>
  </tr>
  <tr>
   <td><code>"blob"</code></td>
   <td>{{domxref("Blob")}}</td>
  </tr>
  <tr>
   <td><code>"document"</code></td>
   <td>{{domxref("Document")}}</td>
  </tr>
  <tr>
   <td><code>"json"</code></td>
   <td><a href="/en-US/docs/Glossary/JSON"><code>JSON</code></a></td>
  </tr>
  <tr>
   <td><code>"text"</code></td>
   <td>{{domxref("DOMString")}}</td>
  </tr>
  <tr>
   <td><code>"moz-chunked-arraybuffer"</code> {{non-standard_inline}}</td>
   <td>
    <p>Похоже на <code>"arraybuffer"</code>, но потоковое. Это означает, что значение в <code>response</code> доступно только при отправке <code>"progress"</code> события и содержит только данные, полученные с момента последнего <code>"progress"</code> события.</p>

    <p>При <code>response</code> обращении во время события <code>"progress"</code> он содержит строку с данными. В противном случае он возвращается <code>null</code>.</p>

    <p>Этот режим работает только в Firefox.. {{gecko_minversion_inline("9.0")}}</p>
   </td>
  </tr>
  <tr>
   <td>"ms-stream"{{non-standard_inline}}</td>
   <td>Указывает, что ответ является частью потоковой загрузки. Он поддерживается только для запросов на загрузку. Этот режим доступен только в Internet Explorer.</td>
  </tr>
 </tbody>
</table>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>

<p>{{Compat}}</p>
