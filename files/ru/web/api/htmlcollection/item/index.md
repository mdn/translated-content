---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
tags:
  - API
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/HTMLCollection/item
---
<p>{{APIRef("HTML DOM")}}</p>

<p><code>HTMLCollection.item() получает элемент с заданым индексом</code>.</p>

<h3 id="Аргументы">Аргументы</h3>

<dl>
 <dt>index</dt>
 <dd>Позиция возвращаемого документа. В объекте HTMLCollection элементы находятся в том же порядке, в каком они расположены в документе. </dd>
</dl>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Элемент соответствующий конкретной, заданной позиции или null, если index меньше нуля или больше, чем index последнего элемента.</p>

<h2 id="Описание">Описание</h2>

<p>Метод item() возвращает номерной элемент из HTMLCollection. В JavaScript легче работать с HTMLCollection, как с массивом, используя квадратные скобки.</p>

<h2 id="Пример">Пример</h2>

<pre class="brush: js">var c = document.images;  // Это HTMLCollection
var img0 = c.item(0);     // Вы можете использовать метод item( ) для доступа к элементу
var img1 = c[1];          // Однако, использование квадратных скобок намного проще и более распространено
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{domxref("NodeList.item()")}}</li>
</ul>
