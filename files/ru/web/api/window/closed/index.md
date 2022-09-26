---
title: Window.closed
slug: Web/API/Window/closed
translation_of: Web/API/Window/closed
---
<div>{{APIRef}}</div>

<h2 id="Общая_информация">Общая информация</h2>

<p>Данное свойство только для чтения указывает, открыто ли целевое  окно или нет.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox"><var>isClosed</var> = <var>windowRef</var>.closed;
</pre>

<dl>
 <dt><code>isClosed</code></dt>
 <dd>Переменная логического типа. Возможные значения:
 <ul>
  <li><code>true</code>: Окно было закрыто.</li>
  <li><code>false</code>: Окно открыто.</li>
 </ul>
 </dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<h3 id="Изменение_URL_окна_браузера_со_всплывающего_окна">Изменение URL окна браузера со всплывающего окна</h3>

<p>Следующий пример демонстрирует, как всплывающее окно может изменять URL окна, которое его открыло. Перед тем, как изменить URL, оно проверяет, имеет ли текущее окно свойство <a href="https://developer.mozilla.org/en-US/docs/DOM/window.opener">window.opener</a> и не закрыто ли оно:</p>

<pre class="brush:js">// проверяет, если <a href="https://developer.mozilla.org/en-US/docs/DOM/window.opener">window.opener</a> существует и не закрыт
if (window.opener &amp;&amp; !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}</pre>

<p>Заметьте, что всплывающие окна имеют доступ только к окнам, которые их открыли.</p>

<h3 id="Обновление_ранее_открытого_всплывающего_окна">Обновление ранее открытого всплывающего окна</h3>

<p>В данном примере функция <code>refreshPopupWindow()</code> вызывает метод <code>reload</code> у объекта локации всплывающего окна для обновления его данных. Если всплывающее окно ещё не было открыто или пользователь его закрыл, открывает новое окно.</p>

<pre class="brush:js">var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow &amp;&amp; !popupWindow.closed) {
    // popupWindow открыто, обновите его
    popupWindow.location.reload(true);
  } else {
    // открывает новое всплывающее окно
    popupWindow = window.open("popup.html","dataWindow");
  }
}
</pre>

<h2 id="Спецификация">Спецификация</h2>

<p>HTML5</p>
