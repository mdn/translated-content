---
title: 'Document: dragstart event'
slug: conflicting/Web/API/HTMLElement/dragstart_event
translation_of: Web/API/Document/dragstart_event
original_slug: Web/API/Document/dragstart_event
---
<div>Событие dragstart вызывается, когда пользователь начинает перетаскивать выделенный элемент или текст.</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Отменяемое</th>
   <td>Да</td>
  </tr>
  <tr>
   <th scope="row">Действие по умолчанию</th>
   <td>Инициирование операции перетаскивания</td>
  </tr>
  <tr>
   <th scope="row">Интерфейс</th>
   <td>{{domxref("DragEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Свойство обработчика события</th>
   <td>{{domxref("GlobalEventHandlers/ondragstart", "ondragstart")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Примеры">Примеры</h2>



<p>See the <a href="/en-US/docs/Web/API/Document/drag_event">drag event</a> for example code or this <a href="http://jsfiddle.net/zfnj5rv4/" rel="noopener">JSFiddle demo</a>.</p>

<p>{{EmbedLiveSample('Примеры', '300', '200', '', 'Web/API/Document/drag_event')}}</p>



<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>



<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Other drag and drop events:
  <ul>
   <li>{{domxref("Document/drag_event", "drag")}}</li>
   <li>{{domxref("Document/dragend_event", "dragend")}}</li>
   <li>{{domxref("Document/dragover_event", "dragover")}}</li>
   <li>{{domxref("Document/dragenter_event", "dragenter")}}</li>
   <li>{{domxref("Document/dragleave_event", "dragleave")}}</li>
   <li>{{domxref("Document/dragexit_event", "dragexit")}}</li>
   <li>{{domxref("Document/drop_event", "drop")}}</li>
  </ul>
 </li>
 <li>This event on other targets:
  <ul>
   <li>{{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} event</li>
   <li>{{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragstart_event", "dragstart")}} event</li>
   <li>{{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} event</li>
  </ul>
 </li>
</ul>
