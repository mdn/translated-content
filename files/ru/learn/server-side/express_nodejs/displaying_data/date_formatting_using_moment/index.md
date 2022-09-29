---
title: Форматирование даты при помощи moment
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
---
<p>По умолчанию отображение дат наших моделей некрасиво: <em>Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time)</em>. В этом разделе мы покажем, как можно обновить страницу списка <em>BookInstance List </em>из предыдущего раздела, чтобы представить поле <code>due_date</code>  в более удобном формате: December 6th, 2016. </p>

<p>Подход, который будет использован, состоит в  создании виртуального свойства в модели <code>BookInstance</code>,  которое будет возвращать отформатированную дату. Форматирование будет производиться с использованием <a class="external external-icon" href="https://www.npmjs.com/package/moment" rel="noopener">moment</a>, легковесной библиотеки JavaScript для разбора, проверки, изменения и форматирования дат.</p>

<div class="note">
<p><strong>Примечание:</strong> Можно применять <em>moment</em> для форматирования непосредственно в шаблонах Pug, а можно отформатировать строку в других местах. Использование виртуального свойства позволяет получить дату, отформатированную точно так же, как при помощи <code>due_date</code>. </p>
</div>

<h2 class="highlight-spanned" id="Установка_moment">Установка moment</h2>

<p>Ведите следующую команду в корне проекта:</p>

<pre class="brush: bash line-numbers  language-bash"><code class="language-bash">npm install moment</code></pre>

<h2 class="highlight-spanned" id="Создание_виртуального_свойства">Создание виртуального свойства</h2>

<ol>
 <li>Откройте файл <strong>./models/bookinstance.js</strong>.</li>
 <li>В начало файла введите строку для импортирования <em>moment</em>.
  <pre class="brush: js line-numbers  language-js"><code class="language-js">var moment = require('moment');</code></pre>
 </li>
</ol>

<p>Добавьте виртуальное свойство <code>due_back_formatted</code> сразу после свойства url.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});</code></pre>

<div class="note">
<p><strong>Примечание:</strong> Метод format method может вывести дату почти по любому образцу. Синтаксис для представления различных составляющих даты можно найти в документации ( <a class="external external-icon" href="http://momentjs.com/docs/#/displaying/" rel="noopener">moment documentation</a>).</p>
</div>

<h2 class="highlight-spanned" id="Обновляем_представление">Обновляем представление</h2>

<p>Откройте файл <strong>/views/bookinstance_list.pug</strong> и замените <code>due_back</code> на <code>due_back_formatted</code>.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">      if val.status!='Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )       </code></pre>

<p>Вот и все. Если вы перейдёте к  <em>All book-instances</em> в боковом меню, вы должны увидеть все даты  в привлекательном формате!</p>

<p> </p>

<h2 id="Далее">Далее</h2>

<ul>
 <li>Вернуться к <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Перейти к следующему подразделу части  5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page">Author list page and Genre list page challenge</a> (страница списка авторов и тест- страница списка жанров).</li>
</ul>

<p> </p>
