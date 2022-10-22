---
title: Список экземпляров книг
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
translation_of: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
---
<p>Далее мы реализуем список всех имеющихся в библиотеке копий книги (<code>BookInstance</code>) . Эта страница должна включать название книги из <code>Book</code>,  с которой связаны экземпляры <code>BookInstance</code> (linked to its detail page), а также дополнительную информацию, имеющуюся в модели <code>BookInstance</code>, включая статус, издание, и уникальный идентификатор каждой копии. Уникальное значение идентификатора копии должно быть связано со страницей детальной информации <code>BookInstance</code>.</p>

<h2 class="highlight-spanned" id="Контроллер">Контроллер</h2>

<p>Функция контроллера списка <code>BookInstance</code> требуется для получения списка всех экземпляров некоторой книги, для получения информации, связанной с книгой, и для передачи полученного списка в шаблон для отображения.</p>

<p>Откройте файл <strong>/controllers/bookinstanceController.js</strong>. Найдите экспортируемый метод <code>bookinstance_list()</code> контроллера и замените его следующим кодом (изменённый код выделен жирным).</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {

  <strong>BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });</strong>

};</code></pre>

<p>Чтобы вернуть все объекты <code>BookInstance,</code> метод использует функцию <code>find()</code> модели. Далее в цепочке вызывается метод <code>populate()</code> с аргументом - полем <code>book,</code> что приводит к замене идентификатора id, хранящегося для каждого экземпляра <code>BookInstance</code> полным документом <code>Book</code>.</p>

<p>При удаче, колбэк-функция, переданная запросу, заполняет шаблон <strong>bookinstance_list</strong>(.pug), передав переменные <code>title</code> и <code>bookinstance_list</code>.</p>

<h2 class="highlight-spanned" id="Представление">Представление</h2>

<p>Создайте файл  <strong>/views/bookinstance_list.pug</strong> и скопируйте в него текст, приведённый ниже.</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">extends layout

block content
  h1= title

  ul
    each val in bookinstance_list
      li
        a(href=val.url) #{val.book.title} : #{val.imprint} -
        if val.status=='Available'
          span.text-success #{val.status}
        else if val.status=='Maintenance'
          span.text-danger #{val.status}
        else
          span.text-warning #{val.status}
        if val.status!='Available'
          span  (Due: #{val.due_back} )

    else
      li There are no book copies in this library.</code></pre>

<p>This view is much the same as all the others. It extends the layout, replacing the <em>content</em> block, displays the <code>title</code> passed in from the controller, and iterates through all the book copies in <code>bookinstance_list</code>. For each copy we display its status (colour coded) and if the book is not available, its expected return date. One new feature is introduced—we can use dot notation after a tag to assign a class. So <code>span.text-success</code> will be compiled to <code>&lt;span class="text-success"&gt;</code> (and might also be written in Pug as <code>span(class="text-success")</code>.</p>

<h2 class="highlight-spanned" id="What_does_it_look_like">What does it look like?</h2>

<p>Run the application, open your browser to <a class="external external-icon" href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>, then select the <em>All book-instances </em>link. If everything is set up correctly, your site should look something like the following screenshot.</p>

<p><img alt="BookInstance List Page - Express Local Library site" src="https://mdn.mozillademos.org/files/14474/LocalLibary_Express_BookInstance_List.png" style="border-style: solid; border-width: 1px; display: block; height: 322px; margin: 0px auto; width: 1200px;"></p>

<h2 id="Next_steps">Next steps</h2>

<ul>
 <li>Return to <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a>.</li>
 <li>Proceed to the next subarticle of part 5: <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment">Date formatting using moment</a>.</li>
</ul>
