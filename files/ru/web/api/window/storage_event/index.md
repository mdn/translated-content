---
title: storage
slug: Web/API/Window/storage_event
translation_of: Web/API/Window/storage_event
---
<p>Событие <code>storage </code>сигнализирует,  что данные в объектах <code>localStorage</code> или <code>sessionStorage были </code>изменены.  Подробнее см. <a href="/en-US/docs/Web/API/Web_Storage_API">Web Storage API</a>.</p>

<h2 id="Общая_информация">Общая информация</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specification</dt>
 <dd style="margin: 0 0 0 120px;"><em><a class="external" href="http://www.w3.org/TR/webstorage/#the-storage-event">Web Storage</a></em></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("StorageEvent")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">Нет</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
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
   <td><code>key</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>The key being changed.</td>
  </tr>
  <tr>
   <td><code>oldValue</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>The old value of the key being changed.</td>
  </tr>
  <tr>
   <td><code>newValue</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>The new value of the key being changed.</td>
  </tr>
  <tr>
   <td><code>url</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}} (string)</td>
   <td>The address of the document whose key changed.</td>
  </tr>
  <tr>
   <td><code>storageArea</code> {{readonlyInline}}</td>
   <td>{{domxref("Storage")}}</td>
   <td>The Storage object that was affected.</td>
  </tr>
 </tbody>
</table>
