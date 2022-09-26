---
title: Разбираемся с ориентацией экрана
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
tags:
  - Ориентация экрана
  - Положение экрана
  - Руководство
translation_of: Web/API/CSS_Object_Model/Managing_screen_orientation
original_slug: Web/API/CSS_Object_Model/ориентация_экрана
---
<p>{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}</p>

<p>Ориентация экрана не идентична <a href="/en-US/docs/WebAPI/Detecting_device_orientation">ориентации устройства</a>.
Даже если устройство не способно определить своё положение в пространстве — экран может всегда. А когда устройство знает свою ориентацию, хорошо бы иметь возможность управлять ориентацией экрана для
сохранения или адаптации интерфейса веб-приложения.</p>

<p>Управление ориентацией экрана доступно в CSS и JavaScript.
Например, <a href="/ru/docs/Web/CSS/Media_Queries/Using_media_queries">использование медиавыражений</a> позволяет контенту адаптироваться с помощью CSS в зависимости от того, в каком режиме просмотра находится браузер: альбомный (горизонтальный, когда ширина экрана больше высоты) или портретный (вертикальный, высота экрана больше ширины).</p>

<p>Для определения положения экрана и его блокировки можно воспользоваться <i>JavaScript Screen orientation API</i>.</p>

<h2 id="Настройка_раскладки_содержимого_по_ориентации_экрана">Настройка раскладки содержимого по ориентации экрана</h2>

<p>Допустим вы хотите связать отображение содержимого с ориентацией экрана. Например, добавить панель, растягивающуюся по наибольшему направлению дисплея устройства. Это довольно просто реализовать с помощью медиавыражений.</p>

<p>Пример. Имеется HTML страница:</p>

<pre class="brush: html">&lt;ul id="toolbar"&gt;
  &lt;li&gt;A&lt;/li&gt;
  &lt;li&gt;B&lt;/li&gt;
  &lt;li&gt;C&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut interdum tristique dapibus. Nullam quis malesuada est.&lt;/p&gt;
</pre>

<p>Соответствующий CSS:</p>

<pre class="brush: css">/* Сначала зададим простые стили */

html, body {
  width : 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font   : 1em sans-serif;
  margin : 0;
  padding: .5em;
}

ul {
  list-style: none;

  font   : 1em monospace;
  margin : 0;
  padding: .5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin : 0;
  padding: 0.5em;
  background: white;
}
</pre>

<p>Теперь разберёмся с поведением страницы в различных случаях ориентации.</p>

<pre class="brush: css">/* Для портретного режима отправим панель на верхнюю часть области отображения */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* Для альбомного режима пускай панель отображается слева */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: .5em;
  }
}
</pre>

<p>Результат:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Портретный режим просмотра</th>
   <th scope="col">Альбомный режим просмотра</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <div style="max-width: 220px;">{{ EmbedLiveSample('Настройка_раскладки_содержимого_по_ориентации_экрана', 180, 350) }}</div>
   </td>
   <td>
    <div style="max-width: 390px;">{{ EmbedLiveSample('Настройка_раскладки_содержимого_по_ориентации_экрана', 350, 180) }}</div>
   </td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Примечание:</strong> Медиавыражение по ориентации ссылается на окно браузера (соотношение его размеров), а не на ориентацию устройства.</p>
</div>

<h2 id="Блокировка_ориентации_экрана">Блокировка ориентации экрана</h2>

<div class="warning">
<p><strong>Предупреждение:</strong> Этот API вводится в экспериментальном режиме и доступен в <a href="/ru/docs/Archive/B2G_OS" title="Firefox OS">Firefox OS</a> и <a href="/ru/docs/Mozilla/Firefox_для_Android" title="Firefox for Android">Firefox для Android</a> с приставкой <code>moz</code>, а также для Internet Explorer на Windows 8.1 и выше с приставкой <code>ms</code>.</p>
</div>

<p>Некоторые устройства (в основном мобильные) могут изменять ориентацию экрана в соответствии с ориентацией самого устройства для удобства восприятия информации пользователем.
Это хорошо подходит для текста, но на некоторое содержимое такое поведение может оказать негативное воздействие. Например, это трагичная ситуация для игры, разработанной под определённую ориентацию.</p>

<p>Урегулировать вопрос, связанный с изменением положения экрана, поможет интерфейс Screen Orientation API.</p>

<h3 id="Отслеживание_изменения_ориентации">Отслеживание изменения ориентации</h3>

<p>Событие {{event("orientationchange")}} возникает каждый раз, когда устройство изменяет ориентацию экрана и самого себя, и может быть отслежено свойством {{domxref("Screen.orientation")}}.</p>

<pre class="brush: js">screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
</pre>

<h3 id="Запрещаем_поворот_экрана">Запрещаем поворот экрана</h3>

<p>Любое веб-приложение может заблокировать положение экрана. Методом {{domxref("Screen.lockOrientation()")}} положение блокируется. Разблокирование осуществляется методом {{domxref("Screen.unlockOrientation()")}}.</p>

<p>Метод {{domxref("Screen.lockOrientation()")}} принимает одну или несколько строк для определения типа блокировки: <code>portrait-primary</code>, <code>portrait-secondary</code>, <code>landscape-primary</code>, <code>landscape-secondary</code>, <code>portrait</code>, <code>landscape</code>. Подробнее: {{domxref("Screen.lockOrientation")}}.</p>

<pre class="brush: js">screen.lockOrientation('landscape');</pre>

<div class="note">
<p><strong>Примечание:</strong> Положение экрана зависит от конкретной настройки приложения. Если в приложении A экран блокируется на альбомную ориентацию (<code>landscape</code>), а приложение B блокирует экран на портретный режим (<code>portrait</code>),
то переход из приложения A в приложение B (или наоборот) не вызовет событие изменения ориентации экрана {{event("orientationchange")}}, т. к. оба приложения сохраняют заданную ориентацию.</p>

<p>В то же время, событие {{event("orientationchange")}} может возникнуть в момент блокировки ориентации, если для удовлетворения заданному параметру блокировки изменяется положение экрана.</p>
</div>

<h2 id="Firefox_OS_и_Android_блокирование_ориентации_через_манифест">Firefox OS и Android: блокирование ориентации через манифест</h2>

<p>Для Firefox OS и Firefox Android (скоро заработает и в десктопном Firefox) существует более специфичный способ: в файле манифеста вашего приложения можно указать <a href="/en-US/Apps/Build/Manifest#orientation">ориентацию</a>:</p>

<pre class="brush: json">"orientation": "portrait"</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{domxref("Screen.orientation")}}</li>
 <li>{{domxref("Screen.lockOrientation()")}}</li>
 <li>{{domxref("Screen.unlockOrientation()")}}</li>
 <li>{{domxref("Screen.onorientationchange")}}</li>
 <li><a href="/en-US/docs/CSS/Media_queries#orientation" title="en-US/CSS/Media queries#orientation">The orientation media query</a></li>
 <li><a class="external" href="http://hacks.mozilla.org/2009/06/media-queries/">A short introduction to media queries in Firefox 3.5</a></li>
</ul>
