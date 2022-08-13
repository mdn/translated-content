---
title: Тестирование медиавыражений программно
slug: Web/CSS/Media_Queries/Testing_media_queries
tags:
  - Выражения
  - медиавыражения
translation_of: Web/CSS/Media_Queries/Testing_media_queries
original_slug: Web/CSS/Media_Queries/Тестирование_медиа_запросы
---
<div>{{cssref}}</div>

<p> {{Glossary("DOM")}} предоставляет возможности, позволяющие тестировать результат  <a href="/en-US/docs/Web/CSS/Media_Queries">медиавыражений</a> программно, с помощью интерфейса {{domxref("MediaQueryList") }}, его методов и свойств. Однажды, создав объект {{domxref("MediaQueryList") }} вы можете проверить результат выражения или получать уведомление, при изменении результата.</p>

<h2 id="Создание_списка_медиавыражений">Создание списка медиавыражений</h2>

<p>Прежде, чем вы сможете оценить результаты медиавыражений, вам необходимо создать объект {{domxref("MediaQueryList") }}, отражающий выражение. Для этого используется метод {{domxref("window.matchMedia") }}.</p>

<p>Например, настройка списка выражений, который определяет, находится ли устройство в альбомной или книжной ориентации:</p>

<pre class="brush: js">var mediaQueryList = window.matchMedia("(orientation: portrait)");
</pre>

<h2 id="Проверка_результата_выражения">Проверка результата выражения</h2>

<p>После того, как вы создали свой список медиавыражений, вы можете проверить результат выражения, посмотрев на значение его свойства <code>matches</code>:</p>

<pre class="brush: js">if (mediaQueryList.matches) {
  /* Окно просмотра в настоящее время находится в книжной ориентации */
} else {
  /* Окно просмотра в настоящее время находится в альбомной ориентации */
}
</pre>

<h2 id="Получение_уведомлений_о_выражениях">Получение уведомлений о выражениях</h2>

<p>Если вам необходимо постоянно следить за изменениями в результате выражения, эффективнее зарегистрировать <a href="/en-US/docs/Web/API/EventTarget/addEventListener">обработчик</a>, чем вытаскивать результат выражений.  Для этого вызовите метод <code>addListener()</code> объекта {{domxref("MediaQueryList") }} с функцией колбэка, которая вызывается при изменении статуса медиавыражения (например, тест медиавыражения переходит от <code>true</code> к <code>false</code>):</p>

<pre class="brush: js">var mediaQueryList = window.matchMedia("(orientation: portrait)"); // Создание списка выражений.
function handleOrientationChange(mql) { ... } // Определение колбэк-функции для обработчика событий.
mediaQueryList.addListener(handleOrientationChange); // Добавление колбэк-функции в качестве обработчика к списку выражений.

handleOrientationChange(mediaQueryList); // Запуск обработчика изменений, один раз.
</pre>

<p>Этот код создаёт список медиавыражений для тестирование ориентации, а затем добавляет к нему обработчик событий. После добавления обработчика, мы, также, непосредственно вызываем обработчик. Это заставляет нашего обработчика выполнять настройки, основываясь на текущей ориентации устройства; в противном случае, наш код может предполагать, что устройство находится в книжной ориентации при запуске, даже если оно фактически находится в альбомном положении.</p>

<p>Функция <code>handleOrientationChange()</code> будет следить за результатом выражения и обрабатывать все, что нам нужно сделать при изменении ориентации:</p>

<pre class="brush: js">function handleOrientationChange(evt) {
  if (evt.matches) {
    /* Окно просмотра в настоящее время находится в книжной ориентации */
  } else {
    /* Окно просмотра в настоящее время находится в альбомной ориентации */
  }
}
</pre>

<p>Выше, мы определяем параметры как <code>evt</code> — event объект. Это имеет значение, поскольку <a href="/en-US/docs/Web/API/MediaQueryList#Browser_compatibility">новые реализации <code>MediaQueryList</code></a> обрабатывают события стандартным способом. Они больше не используют нестандартный механизм  {{domxref("MediaQueryListListener")}} , а используют стандартную настройку обработчика событий, передавая <a href="/en-US/docs/Web/API/Event">объект event</a>  {{domxref("MediaQueryListEvent")}} как аргумент колбэк-функции.</p>

<p>Этот event объект также включает свойства {{domxref("MediaQueryListEvent.media","media")}} и {{domxref("MediaQueryListEvent.matches","matches")}}, поэтому вы можете запросить эти свойства <code>MediaQueryList</code> путём прямого доступа к нему или доступа к event объекту.</p>

<h2 id="Уведомление_о_завершении_выражения">Уведомление о завершении выражения</h2>

<p>Для прекращения уведомлений об изменении значения вашего медиавыражения вызовите метод <code>removeListener()</code> для {{domxref("MediaQueryList") }}, передав ему имя, ранее определённой функции:</p>

<pre class="brush: js">mediaQueryList.removeListener(handleOrientationChange);
</pre>

<h2 id="Поддержка_браузеров">Поддержка браузеров</h2>

<h3 id="MediaQueryList_interface"><code>MediaQueryList</code> interface</h3>



<p>{{Compat("api.MediaQueryList")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/CSS/Media_queries">Media queries</a></li>
 <li>{{domxref("window.matchMedia()") }}</li>
 <li>{{domxref("MediaQueryList") }}</li>
 <li>{{domxref("MediaQueryListEvent") }}</li>
</ul>
