---
title: 'Задание: DIY Django мини блог'
slug: Learn/Server-side/Django/django_assessment_blog
tags:
  - Аттестация
  - Бэкенд
  - Бэкенд программирование
  - Django
  - Изучение
  - Начинающий
  - блог
  - скриптовый кодинг
translation_of: Learn/Server-side/Django/django_assessment_blog
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}</div>

<p class="summary">В этом задании вы будете оценивать знания Django, которые вы приобрели в <a href="/en-US/docs/Learn/Server-side/Django">Django Web Framework (Python)</a>, чтобы создать очень простой блог.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Предпосылки:</th>
   <td>Перед этим заданием, вы должны были проработать все статьи этого модуля.</td>
  </tr>
  <tr>
   <th scope="row">Задача:</th>
   <td>Проверить понимание основ Django, включая конфигурации URL, модели, представления, формы и шаблоны.</td>
  </tr>
 </tbody>
</table>

<h2 id="Краткое_описание_проекта">Краткое описание проекта</h2>

<p>Страницы, которые должны отображаться, их URL-адреса и другие требования, перечислены ниже:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Page</th>
   <th scope="col">URL</th>
   <th scope="col">Requirements</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Home page</td>
   <td><code>/</code> and <code>/blog/</code></td>
   <td>Страница индекса, описывающая сайт.</td>
  </tr>
  <tr>
   <td>List of all blog posts</td>
   <td><code>/blog/blogs/</code></td>
   <td>
    <p>Список всех сообщений блога:</p>

    <ul>
     <li>Доступно для всех пользователей из боковой панели.</li>
     <li>Список отсортирован по дате публикации (от самого нового до самого старого).</li>
     <li>Список разбит на группы по 5 статьям.</li>
     <li>Элементы списка отображают название блога, дату публикации и автора.</li>
     <li>Названия сообщений блога связаны с страницами подробных сведений о блоге.</li>
     <li>Blogger (имена авторов) связаны с страницами подробных сведений о блоге.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>Blog author (blogger) detail page</td>
   <td><code>/blog/blogger/<em>&lt;author-id&gt;</em></code></td>
   <td>
    <p>Информация для указанного автора (по id) и список постов:</p>

    <ul>
     <li>Доступен для всех пользователей по ссылкам на автора в сообщениях в блогах и т. Д.</li>
     <li>Содержит некоторые биографические данные в blogger/author.</li>
     <li>Список отсортирован по дате добавления (от новых к старым).</li>
     <li>Не разбит на страницы.</li>
     <li>Элементы списка отображают только имя сообщения в блоге и дату публикации.</li>
     <li>Названия блога связаны со страницей блога.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>Blog post detail page</td>
   <td><code>/blog/<em>&lt;blog-id&gt;</em></code></td>
   <td>
    <p>Сведения о блоге.</p>

    <ul>
     <li>Доступно для всех пользователей из списков блога.</li>
     <li>Страница содержит сообщение в блоге: имя, автор, дата публикации и содержание.</li>
     <li>Комментарии к сообщению в блоге должны отображаться внизу.</li>
     <li>Комментарии должны быть отсортированы по порядку: от старых до самых последних.</li>
     <li>Содержит ссылку для добавления комментариев на конец для зарегистрированных пользователей (см. Страницу формы комментариев)</li>
     <li>В блогах и комментариях должен отображаться только обычный текст. Нет необходимости поддерживать какую-либо разметку HTML (например, ссылки, изображения, полужирный / курсив и т. Д.).</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>List of all bloggers</td>
   <td><code>/blog/bloggers/</code></td>
   <td>
    <p>Список блогеров в системе:</p>

    <ul>
     <li>Доступный для всех пользователей с боковой панели сайта</li>
     <li>Имя блогера связано с блогом автора страницы.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>Comment form page</td>
   <td><code>/blog/<em>&lt;blog-id&gt;</em>/create</code></td>
   <td>
    <p>Создать комментарий для публикации в блоге:</p>

    <ul>
     <li>Доступно только зарегистрированным пользователям (только) из ссылки внизу страницы с подробными сведениями блога.</li>
     <li>Отображает форму с описанием для ввода комментариев (дата публикации и блог недоступны для редактирования).</li>
     <li>После того, как комментарий будет опубликован, страница будет перенаправлена ​​на связанную страницу блога.</li>
     <li>Пользователи не могут редактировать или удалять свои сообщения.</li>
     <li>Вышедшие пользователи будут перенаправлены на страницу входа в систему, чтобы добавить комментарии. После входа в систему они будут перенаправлены на страницу блога, которую они хотели бы прокомментировать.</li>
     <li>Страницы комментариев должны содержать имя / ссылку на комментарий блога.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>User authentication pages</td>
   <td><code>/accounts/<em>&lt;standard urls&gt;</em></code></td>
   <td>
    <p>Стандартные страницы аутентификации Django для входа, выхода и установки пароля:</p>

    <ul>
     <li>Вход / выход должен быть доступен через ссылки боковой панели.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>Admin site</td>
   <td><code>/admin/<em>&lt;standard urls&gt;</em></code></td>
   <td>
    <p>Админ-сайт должен быть включён, чтобы разрешить создание / редактирование / удаление сообщений в блогах, авторов блога и комментариев блога (это механизм для создания блогеров в блогах):</p>

    <ul>
     <li>В админ панеле должен отображаться список комментариев в строке (внизу каждого сообщения в блоге).</li>
     <li>Имена комментариев в админке создаются усеканием описания комментария до 75 знаков</li>
     <li>Другие типы записей могут использовать базовую регистрацию.</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<p>Кроме того, вы должны написать некоторые базовые тесты для проверки:</p>

<ul>
 <li>Все поля модели имеют правильную метку и длину.</li>
 <li>Все модели имеют ожидаемое имя объекта (например,<code> __str__()</code>выдаёт ожидаемое значение).</li>
 <li>Модели имеют ожидаемый URL для отдельных записей в блогах и комментариях (например,<code>get_absolute_url()</code> возвращает ожидаемый URL-адрес).</li>
 <li>Страница BlogListView (страница на всех блогах) доступна в ожидаемом месте (например, /blog/blogs)</li>
 <li>Страница BlogListView (страница на всех блогах) доступна на ожидаемом именованном URL-адресе (например, 'blogs')</li>
 <li>Страница BlogListView (страница на всех блогах) использует ожидаемый шаблон (например, по умолчанию)</li>
 <li>BlogListView разбивает записи на 5 (по крайней мере, на первой странице)</li>
</ul>

<div class="note">
<p><strong>Примечание</strong>: Конечно, есть много других тестов, которые вы можете запустить. Используйте на своё усмотрение, но мы ожидаем, что вы сделаете хотя бы тесты выше.</p>
</div>

<p>В следующем разделе показаны <a href="#Screenshots">скриншоты</a> сайта, который выполняет перечисленные выше требования.</p>

<h2 id="Скриншоты">Скриншоты</h2>

<p>Следующий скриншот - пример того, что должна выводить готовая программа.</p>

<h3 id="Список_всех_сообщений_в_блоге">Список всех сообщений в блоге</h3>

<p>Это отображает список всех сообщений в блоге (доступны из ссылки "All blogs" на боковой панели). Что нужно отметить:</p>

<ul>
 <li>На боковой панели также списки вошедшего в систему пользователя.</li>
 <li>Индивидуальные блоги и блогеры доступны в виде ссылок на странице.</li>
 <li>Разбивка включена (в группах по 5)</li>
 <li>Показ от новых к старым.</li>
</ul>

<p><img alt="List of all blogs" src="https://mdn.mozillademos.org/files/14319/diyblog_allblogs.png" style="border-style: solid; border-width: 1px; display: block; height: 363px; margin: 0px auto; width: 986px;"></p>

<h3 id="Список_всех_блогеров">Список всех блогеров</h3>

<p> </p>

<p>Это ссылки на всех блогеров в "All bloggers" по ссылке, которая на боковой панели. В этом случае мы можем увидеть на боковой панели, что ни один пользователь не вошёл в систему.</p>

<p><img alt="List of all bloggers" src="https://mdn.mozillademos.org/files/14321/diyblog_blog_allbloggers.png" style="border-style: solid; border-width: 1px; display: block; height: 256px; margin: 0px auto; width: 493px;"></p>

<h3 id="Подробная_страница_блога">Подробная страница блога</h3>

<p>Это показывает подробную страницу для конкретного блога.</p>

<p><img alt="Blog detail with add comment link" src="https://mdn.mozillademos.org/files/14323/diyblog_blog_detail_add_comment.png" style="border-style: solid; border-width: 1px; display: block; height: 640px; margin: 0px auto; width: 986px;"></p>

<p>Обратите внимание, что комментарии имеют дату <em>и</em> время, и расположены в порядке от самых старых до новейших (противоположно порядку ведения блога). В конце у нас есть ссылка для доступа к форме, чтобы добавить новый комментарий. Если пользователь не вошёл в систему, мы бы увидели предложение войти в систему.</p>

<p><img alt="Comment link when not logged in" src="https://mdn.mozillademos.org/files/14325/diyblog_blog_detail_not_logged_in.png" style="border-style: solid; border-width: 1px; display: block; height: 129px; margin: 0px auto; width: 646px;"></p>

<h3 id="Добавить_форму_комментария">Добавить форму комментария</h3>

<p>Это форма добавления комментариев. Обратите внимание, что мы вошли в систему. Когда это удастся, мы должны вернуться к связанной странице блога.</p>

<p><img alt="Add comment form" src="https://mdn.mozillademos.org/files/14329/diyblog_comment_form.png" style="border-style: solid; border-width: 1px; display: block; height: 385px; margin: 0px auto; width: 778px;"></p>

<h3 id="Об_авторе">Об авторе</h3>

<p>Здесь отображается информация о блогере вместе со списком его блогов.</p>

<p><img alt="Blogger detail page" src="https://mdn.mozillademos.org/files/14327/diyblog_blogger_detail.png" style="border-style: solid; border-width: 1px; display: block; height: 379px; margin: 0px auto; width: 982px;"></p>

<h2 id="Завершающие_шаги">Завершающие шаги</h2>

<p>В следующих разделах описывается, что вам нужно делать.</p>

<ol>
 <li>Создайте скелет проекта и веб-приложение для сайта (как описано в  <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Django Tutorial Part 2: Creating a skeleton website</a>). Вы можете использовать «diyblog» для имени проекта и «blog» для имени приложения.</li>
 <li>Создавайте модели для записей в блогах, комментариев и любых других необходимых объектов.
  <ul>
   <li>Каждый комментарий будет иметь только один блог, но блог может иметь много комментариев.</li>
   <li>Посты в блоге и комментарии должны быть отсортированы по дате поста.</li>
   <li>Не каждый пользователь обязательно будет автором блога, хотя любой пользователь может быть комментатором.</li>
   <li>Блог автора также должен включать информацию о себе.</li>
  </ul>
 </li>
 <li>Запустите миграцию для новых моделей и создайте суперпользователя.</li>
 <li>Используйте админ панель, чтобы создать какой-нибудь пример блога и комментарии в блогах.</li>
 <li>Создайте представления, шаблоны, и URL-конфигурации для публикации блога и списка страниц блогера.</li>
 <li>Создайте представления, шаблоны, и URL-конфигурации для публикации блога и подробных страниц блогера.</li>
 <li>Создайте страницу с формой для добавления новых комментариев (не забудьте сделать это доступным только для зарегистрированных пользователей!)</li>
</ol>

<h2 id="Советы_и_подсказки">Советы и подсказки</h2>

<p>Этот проект очень похож на  <a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a> учебник. Вы сможете настроить скелет, поведение входа пользователя / выхода из системы, поддержку статических файлов, представлений, URL-адресов, форм, базовых шаблонов и конфигурации админ-панели, используя почти все те же подходы.</p>

<p>Некоторые общие рекомендации:</p>

<ol>
 <li>Индексная страница (index page) может быть реализована в качестве основной функции представления и шаблона (как и для locallibrary).</li>
 <li>Просмотр списка публикаций блога и блогеров, а также подробное представление для сообщений в блоге можно создать с помощью  <a href="/en-US/docs/Learn/Server-side/Django/Generic_views">generic list and detail views</a>.</li>
 <li>Список постов в блоге конкретного автора может быть создан с помощью общего списка Blog list view и фильтрация для объекта блога, соответствующего указанному автору.
  <ul>
   <li>Вам придётся реализовать  <code>get_queryset(self)</code> для фильтрации (как и в нашем классе библиотеки <code>LoanedBooksAllListView</code>) и получить информацию об авторе из URL-адреса.</li>
   <li>Вам также необходимо передать имя автора на страницу в контексте. Чтобы сделать это в представлении на основе классов, вам необходимо реализовать  <code>get_context_data()</code> (обсуждается ниже).</li>
  </ul>
 </li>
 <li>Форма <em>добавления комментариев</em> может быть создана с использованием функционального представления (и связанной модели и формы) или с использованием общего <code>CreateView</code>. Если вы используете <code>CreateView</code> (рекомендуется):
  <ul>
   <li>Вам также нужно будет передать имя блога на страницу комментариев в контексте (реализовать  <code>get_context_data()</code> как обсуждается ниже).</li>
   <li>Форма должна отображать только комментарий «описание» для записи пользователя (дата и связанная с ними запись в блоге не должны редактироваться). Поскольку они не будут в форме, ваш код должен будет установить автора комментария в <code> form_valid()</code> функцию, поэтому он может быть сохранён в модели (<a href="https://docs.djangoproject.com/en/2.0/topics/class-based-views/generic-editing/#models-and-request-user">as described here</a> — Django docs). В этой же функции мы устанавливаем связанный блог. Возможная реализация показана ниже (<code>pk</code> это идентификатор блога, переданный из URL / URL конфигурации ).
    <pre class="brush: python">    def form_valid(self, form):
        """
        Add author and associated blog to form data before setting it as valid (so it is saved to model)
        """
        #Add logged-in user as author of comment
        form.instance.author = self.request.user
        #Associate comment with blog based on passed id
        form.instance.blog=get_object_or_404(Blog, pk = self.kwargs['pk'])
        # Call super-class form validation behaviour
        return super(BlogCommentCreate, self).form_valid(form)
</pre>
   </li>
   <li> Для успешного перенаправления после проверки формы вам нужно будет указать URL-адрес;  это должен быть оригинальный блог. Для этого вам нужно будет переопределить  <code>get_success_url()</code> и «обратный» URL-адрес для исходного блога. Вы можете получить требуемый ID блога, используя <code>self.kwargs</code> атрибут, как показано в методе <code>form_valid()</code> выше.</li>
  </ul>
 </li>
</ol>

<p>Мы кратко говорили о передаче контекста шаблону в представлении на основе классов в теме  <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Generic_views#Overriding_methods_in_class-based_views">Django Tutorial Part 6: Generic list and detail views</a>. Для этого вам нужно переопределить <code>get_context_data()</code> (сначала получить существующий контекст, обновить его любыми дополнительными переменными, которые вы хотите передать шаблону, а затем вернуть обновлённый контекст). Например, фрагмент кода ниже показывает, как вы можете добавить объект blogger в контекст на основе его <code>BlogAuthor</code> id.</p>

<pre class="brush: python">class SomeView(generic.ListView):
    ...

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(SomeView, self).get_context_data(**kwargs)
        # Get the blogger object from the "pk" URL parameter and add it to the context
        context['blogger'] = get_object_or_404(BlogAuthor, pk = self.kwargs['pk'])
        return context
</pre>

<h2 id="Аттестация">Аттестация</h2>

<p>Оценка этого задания <a href="https://github.com/mdn/django-diy-blog/blob/master/MarkingGuide.md">доступна здесь на Github</a>. Эта оценка в основном основана на том, насколько хорошо ваше приложение соответствует требованиям, перечисленным выше, хотя есть некоторые части оценки, которые проверяют ваш код на использование соответствующих моделей и что вы написали хотя бы некоторый тестовый код. Когда вы закончите, вы можете проверить по нашему <a href="https://github.com/mdn/django-diy-blog">готовому примеру</a> который соответствует "высокой оценке проекта".</p>

<p>После того, как вы завершили этот модуль, вы также закончили весь контент MDN для изучения базового веб-сайта на сервере Django! Надеемся, вам понравится этот модуль и вы почувствуете, что у вас есть хорошее понимание основ!</p>

<p>{{PreviousMenu("Learn/Server-side/Django/web_application_security", "Learn/Server-side/Django")}}</p>

<p> </p>

<h2 id="В_этом_модуле">В этом модуле</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Introduction">Django introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/development_environment">Setting up a Django development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">Django Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">Django Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Models">Django Tutorial Part 3: Using models</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Admin_site">Django Tutorial Part 4: Django admin site</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Home_page">Django Tutorial Part 5: Creating our home page</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Generic_views">Django Tutorial Part 6: Generic list and detail views</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Sessions">Django Tutorial Part 7: Sessions framework</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Authentication">Django Tutorial Part 8: User authentication and permissions</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Forms">Django Tutorial Part 9: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Testing">Django Tutorial Part 10: Testing a Django web application</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/Deployment">Django Tutorial Part 11: Deploying Django to production</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/web_application_security">Django web application security</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Django/django_assessment_blog">DIY Django mini blog</a></li>
</ul>

<p> </p>
