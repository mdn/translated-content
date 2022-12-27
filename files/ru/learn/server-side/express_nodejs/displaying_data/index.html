---
title: 'Учебник Express часть 5: Отображение данных библиотеки'
slug: Learn/Server-side/Express_Nodejs/Displaying_data
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}</div>

<p class="summary">Теперь мы готовы добавить страницы, на которых будут отображаться книги веб-сайта  <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">LocalLibrary</a> и другие данные. Страницы будут включать главную страницу, которая показывает сколько записей определённого типа мы имеем и отдельные страницы для детального просмотра записей. Попутно мы приобретём практический опыт в получении записей из баз данных и использовании шаблонов.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Предварительные знания:</th>
   <td>Завершите изучение предыдущих тем учебника (включая <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Учебник Express часть 4: Маршруты и контроллеры</a>).</td>
  </tr>
  <tr>
   <th scope="row">Цель:</th>
   <td>Понять, как использовать асинхронный модуль и язык шаблона Pug, и как получить данные из URL в наших функциях контроллера.</td>
  </tr>
 </tbody>
</table>

<h2 id="Обзор">Обзор</h2>

<p>В  предыдущих статьях учебника мы определили <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Mongoose модели</a>, которые можно использовать для взаимодействия с базой данных и создания некоторых исходных записей библиотеки. Затем мы <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/routes">создали все маршруты</a>, необходимые для веб-сайта LocalLibrary, но с "фиктивными"  функциями  контроллеров (это скелетные функции, которые просто возвращают сообщение "не реализовано " при доступе к странице).</p>

<p>Следующим шагом является обеспечение правильных реализаций для страниц, которые отображают информацию из библиотеки (мы рассмотрим реализацию страниц с формами для создания, обновления или удаления информации в последующих статьях). Это включает в себя обновление функций контроллера для извлечения записей с помощью наших моделей и определение шаблонов для отображения этой информации пользователям.</p>

<p>Мы начнём с обзорных / основных тем, объясняющих, как управлять асинхронными операциями в функциях контроллера и как писать шаблоны с помощью Pug. Затем мы предоставим реализации для каждой из наших основных страниц" только для чтения " с кратким объяснением любых специальных или новых функций, которые они используют.</p>

<p>В конце этой статьи вы должны иметь хорошее сквозное понимание того, как маршруты, асинхронные функции, представления и модели работают на практике.</p>

<h2 id="Отображение_данных_библиотеки_—_подразделы">Отображение данных библиотеки — подразделы</h2>

<p>Следующие подразделы проходят процесс добавления различных функций, необходимых для отображения необходимых страниц веб-сайта. Вы должны прочитать и проработать каждый из них по очереди, прежде чем перейти к следующему.</p>

<ol>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/flow_control_using_async">Асинхронное управление потоками с помощью async</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer">Пример шаблона</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template">Базовые шаблоны LocalLibrary</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page">Домашняя страница</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page">Страница списка книг</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page">Страница списка экземпляров книг</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment">Форматирование даты с момента использования</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page">Страница списка авторов и страница списка жанров</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page">Страница сведений о жанре</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page">Страница сведений о книге</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page">Страница информации об авторе</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge">Страница сведений об экземпляре книги и вызове</a></li>
</ol>

<h2 id="Итог">Итог</h2>

<p>Теперь мы создали все страницы "только для чтения " для нашего сайта: домашнюю страницу, которая отображает количество экземпляров каждой из наших моделей, а также список и подробные страницы для наших книг, экземпляров книг, авторов и жанров. По пути мы получили много фундаментальных знаний о контроллерах, управлении потоком при использовании асинхронных операций, создании представлений с помощью Pug, запросе базы данных с помощью наших моделей, как передавать информацию в шаблон из вашего представления, а также как создавать и расширять шаблоны. Те, кто выполнил вызов также узнали немного о дате обработки с помощью момента.</p>

<p>В нашей следующей статье мы будем опираться на наши знания, создавая HTML-формы и код обработки форм, чтобы начать изменять данные, хранящиеся на сайте.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="http://caolan.github.io/async/docs.html">Асинхронный модуль</a> (Асинхронные документация)</li>
 <li><a href="https://expressjs.com/en/guide/using-template-engines.html">Использование механизмов шаблонов с Express</a> (Express документация)</li>
 <li><a href="https://pugjs.org/api/getting-started.html">Pug</a> (Pug документация)</li>
 <li><a href="http://momentjs.com/docs/">Moment</a> (Moment документация)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">Setting up a Node (Express) development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Part 3: Using a Database (with Mongoose)</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Part 4: Routes and controllers</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/deployment">Express Tutorial Part 7: Deploying to production</a></li>
</ul>
