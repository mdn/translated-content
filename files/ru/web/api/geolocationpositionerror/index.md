---
title: PositionError
slug: Web/API/GeolocationPositionError
translation_of: Web/API/GeolocationPositionError
---
<div>{{securecontext_header}}{{APIRef("Geolocation API")}}</div>

<p>Интерфейс <strong>PositionError</strong> представляет причину ошибки, возникающую при использовании устройства геолокации.</p>

<h2 id="Свойства">Свойства</h2>

<p><em>Интерфейс <strong>PositionError</strong> не наследует никаких свойств.</em></p>

<dl>
 <dt>{{domxref("PositionError.code")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Возвращает <em>unsigned short,</em> представляющий код ошибки. Возможны следующие значения:
 <table class="standard-table">
  <tbody>
   <tr>
    <th scope="col">Значение</th>
    <th scope="col">Связанная константа</th>
    <th scope="col">Описание</th>
   </tr>
   <tr>
    <td><code>1</code></td>
    <td><code>PERMISSION_DENIED</code></td>
    <td>Не удалось получить информацию о геолокации, поскольку у страницы не было разрешения на это.</td>
   </tr>
   <tr>
    <td><code>2</code></td>
    <td><code>POSITION_UNAVAILABLE</code></td>
    <td>Не удалось получить геолокацию, поскольку по крайней мере один внутренний источник позиции вернул внутреннюю ошибку.</td>
   </tr>
   <tr>
    <td><code>3</code></td>
    <td><code>TIMEOUT</code></td>
    <td>Время, разрешённое для получения геолокации, определяется {{domxref ("PositionOptions.timeout")}} информация была достигнута до получения информации.</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt>{{domxref("PositionError.message")}} {{readonlyInline}} {{securecontext_inline}}</dt>
 <dd>Returns a human-readable {{domxref("DOMString")}} describing the details of the error. Specifications note that this is primarily intended for debugging use and not to be shown directly in a user interface.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em><em>The <code>PositionError</code> interface <em>neither implements nor inherits any method.</em></em></em></p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Geolocation', '#position_error_interface', 'PositionError')}}</td>
   <td>{{Spec2('Geolocation')}}</td>
   <td>Initial specification.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebAPI/Using_geolocation">Using geolocation</a></li>
 <li>The {{domxref("Geolocation")}} interface that use it.</li>
</ul>
