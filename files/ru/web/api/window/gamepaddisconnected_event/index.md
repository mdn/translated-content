---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
translation_of: Web/API/Window/gamepaddisconnected_event
---
<p>Событие <code>gampaddisconnected</code> вызывается, когда браузер обнаруживает, что геймпад был отключён.</p>

<h2 id="Основная_информация">Основная информация</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Спецификация</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event">Gamepad</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Интерфейс</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Всплывающее</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Отменяемое</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Цель</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Действие по умолчанию</dt>
 <dd style="margin: 0 0 0 120px;">Отсутствует</dd>
</dl>

<h2 id="Свойства">Свойства</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Свойство</th>
   <th scope="col">Тип</th>
   <th scope="col">Описание</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>Цель события (самый верхний элемент DOM дерева).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Тип события.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Является ли событие всплывающим.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Является ли событие отменяемым.</td>
  </tr>
  <tr>
   <td><code>gamepad</code> {{readonlyInline}}</td>
   <td>{{domxref("Gamepad")}}</td>
   <td>Единственный атрибут, предоставляющий доступ к данным геймпада для этого события.</td>
  </tr>
 </tbody>
</table>

<h2 id="Связанные_события">Связанные события</h2>

<ul>
 <li>{{event("gamepadconnected")}}</li>
</ul>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/API/Gamepad/Using_Gamepad_API">Using Gamepad API</a></li>
</ul>
