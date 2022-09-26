---
title: loadstart
slug: Web/API/XMLHttpRequest/loadstart_event
translation_of: Web/API/XMLHttpRequest/loadstart_event
original_slug: Web/Events/loadstart
---
<p>Событие <code>loadstart</code> происходит, когда начинается загрузка.</p>

<h2 id="Общая_информация">Общая информация</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Спецификация</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/progress-events/">Progress</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Интерфейс</dt>
 <dd style="margin: 0 0 0 120px;">ProgressEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Распространяется</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Отменяемое</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Цель</dt>
 <dd style="margin: 0 0 0 120px;">Element</dd>
 <dt style="float: left; text-align: right; width: 120px;">Действие по умолчанию</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
</dl>

<h2 id="Свойства">Свойства</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>lengthComputable </code>{{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Specifies whether or not the total size of the transfer is known. Read only.</td>
  </tr>
  <tr>
   <td><code>loaded</code> {{readonlyInline}}</td>
   <td>unsigned long (long)</td>
   <td>The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only.</td>
  </tr>
  <tr>
   <td><code>total</code> {{readonlyInline}}</td>
   <td>unsigned long (long)</td>
   <td>The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.</td>
  </tr>
 </tbody>
</table>

<h2 id="Связанные_свойства">Связанные свойства</h2>

<ul>
 <li>{{event("loadstart")}}</li>
 <li>{{event("progress")}}</li>
 <li>{{event("error")}}</li>
 <li>{{event("abort")}}</li>
 <li>{{event("load")}}</li>
 <li>{{event("loadend")}}</li>
</ul>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress">Отслеживание состояния загрузки</a></li>
</ul>
