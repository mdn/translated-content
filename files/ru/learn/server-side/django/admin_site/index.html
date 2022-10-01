---
title: 'Руководство Django часть 4: административная панель Django'
slug: Learn/Server-side/Django/Admin_site
translation_of: Learn/Server-side/Django/Admin_site
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}</div>

<p class="summary">Теперь, когда модели для сайта <a href="https://developer.mozilla.org/ru-RU/docs/Learn/Server-side/Django/Tutorial_local_library_website">местной библиотеки</a> созданы, добавим некоторые "настоящие" данные о книгах, используя административную панель Django Admin. Для начала мы покажем, как зарегистрировать в ней модели, потом как войти и создать какие-нибудь данные. В конце статьи мы покажем некоторые способы дальнейшего улучшения вида админ-панели.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Предусловия:</th>
   <td>Сначала завершите: <a href="/ru-RU/docs/Learn/Server-side/Django/Models">Руководство часть 3: </a>использование моделей.</td>
  </tr>
  <tr>
   <th scope="row">Цель:</th>
   <td>
    <p>Уяснить преимущества и ограничения админ-панели Django, научиться использовать её для создания записей для наших моделей.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Обзор">Обзор</h2>

<p><em>Приложение</em> Django admin может использовать ваши модели для автоматического создания части сайта, предназначенной для создания, просмотра, обновления и удаления записей. Это может сэкономить вам много времени в процессе разработки, упрощая тестирование ваших моделей на предмет <em>правильности</em> данных. Оно также может быть полезным для управления данными на стадии публикации, в зависимости от типа веб-сайта. Проект Django рекомендует это приложение только для управления внутренними данными (т.е.для использования администраторами, либо людьми внутри вашей организации), так как модельно-ориентированный подход не обязательно является наилучшим интерфейсом для всех пользователей и раскрывает много лишних подробностей о моделях.</p>

<p>Все необходимые настройки, которые необходимо включить  в admin приложение вашего веб-сайта, были сделаны автоматически, когда вы <a href="/ru-RU/docs/Learn/Server-side/Django/skeleton_website">создали каркас проекта</a> ( информацию о необходимых актуальных зависимостях смотрите здесь -  <a href="https://docs.djangoproject.com/en/1.10/ref/contrib/admin/">Django docs</a>) . В результате все, что необходимо сделать для того, чтобы добавить модели в приложение admin, это <em>зарегистрировать</em> их. В конце этой статьи мы представим краткую демонстрацию того, каким образом  можно дополнительно настроить админ-панель для лучшего отображения данные наших моделей.</p>

<p>После регистрации моделей мы покажем как создать нового суперпользователя , войти на сайт от его имени и создать книги, авторов, экземпляры книг и жанры. Это будет полезным для тестирования представлений и шаблонов, которые мы начнём создавать в следующей части руководства.</p>

<h2 id="Регистрация_моделей">Регистрация моделей </h2>

<p>Вначале откройте файл <strong>admin.py </strong>в папке приложения (<strong>/locallibrary/catalog/admin.py</strong>). Пока он выглядит так (заметьте, что он уже содержит импорт  <code>django.contrib.admin)</code>:</p>

<pre class="brush: python">from django.contrib import admin

# Register your models here.
</pre>

<p>Зарегистрируйте модели путём вставки следующего текста в нижнюю часть этого файла. Этот код просто импортирует модели и затем вызывает  <code>admin.site.register</code> для регистрации каждой из них.</p>

<pre class="brush: python">from .models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
</pre>

<div class="note"><strong>Примечание</strong>: Если вы приняли участие в создании модели для представления естественного языка книги (<a href="/ru-RU/docs/Learn/Server-side/Django/Models">см. обучающую статью о моделях</a>), импортируйте и зарегистрируйте её тоже!</div>

<p>Это самый простой способ регистрации модели или моделей. Админ-панель имеет множество настроек. Мы рассмотрим другие способы регистрации ваших моделей ниже.</p>

<h2 id="Создание_суперпользователя">Создание суперпользователя</h2>

<p>Для того, чтобы войти в админ-панель, нам необходимо иметь учётную запись пользователя со статусом <em>Staff (сотрудники). </em>Для просмотра и создания записей, пользователю также понадобится разрешение для управления всеми нашими объектами. Вы можете создать учётную запись  "superuser", которая даёт полный доступ к сайту и все необходимые разрешения, используя <strong>manage.py</strong>.</p>

<p>Для создания суперпользователя вызовите следующую команду из той же папки, где расположен <strong>manage.py</strong>. Вас попросят ввести имя пользователя, адрес электронной почты и надёжный пароль. </p>

<pre class="brush: bash">python3 manage.py createsuperuser
</pre>

<p>После выполнения этой команды новый суперпользователь будет добавлен в базу данных. Теперь перезапустите сервер, чтобы можно было протестировать вход на сайт:</p>

<pre class="brush: bash">python3 manage.py runserver

</pre>

<h2 id="Вход_в_админ-панель_и_её_использование">Вход в админ-панель и её использование</h2>

<p>Для входа в админ-панель откройте ссылку<em> /admin</em> (например  <a href="http://127.0.0.1:8000/admin/">http://127.0.0.1:8000/admin</a>) и введите логин и пароль вашего нового суперпользователя  (вас перенаправят на login-страницу и потом обратно на /admin после ввода всех деталей).</p>

<p>В этой части сайта отображаются все наши модели, сгруппированные по установленному приложению. Вы можете кликнуть на названии модели, чтобы получить список всех связанных записей, далее можете кликнуть на этих записях, для их редактирования . Также можно непосредственно кликнуть на ссылку <strong>Add</strong>, расположенную рядом с каждой моделью, чтобы начать создание записи этого типа. </p>

<p><img alt="Admin Site - Home page" src="https://mdn.mozillademos.org/files/13975/admin_home.png" style="display: block; height: 634px; margin: 0px auto; width: 998px;"></p>

<p>Кликните на ссылке <strong>Add</strong> справа от <em>Books</em>, чтобы создать новую книгу (появится диалоговое окно как на картинке внизу). Заметьте, что заголовок каждого поля - это тип используемого виджета, и    <code>help_text</code> (если есть) совпадает со значением, которое вы указали в модели. </p>

<p>Введите значение для полей. Вы можете создавать новых авторов или жанры, нажимая на значок "+ ", расположенный рядом с соответствующим полем (или выберите существующее значение из списков, если вы уже создали их). Когда вы закончили, нажмите на <strong>SAVE,</strong>  <strong>Save and add another</strong>, или <strong>Save and continue editing,</strong> чтобы сохранить записи.</p>

<p><img alt="Admin Site - Book Add" src="https://mdn.mozillademos.org/files/13979/admin_book_add.png" style="border-style: solid; border-width: 1px; display: block; height: 780px; margin: 0px auto; width: 841px;"></p>

<div class="note">
<p><strong>Примечание</strong>: А сейчас, хотелось бы, чтобы вы добавили несколько книг, авторов и жанров (например,  Фэнтези) в ваше приложение. Удостоверьтесь, что каждый автор и жанр включает пару различных книг (позже, когда мы реализуем представления "list" и "detail", это сделает их более интересными).</p>
</div>

<p>После того, когда книги добавлены, для перехода на главную страницу админ-панели кликните на ссылке <strong>Home </strong>в верхней части страницы. Потом кликните на ссылке <strong>Books</strong> для отображения текущего списка книг (или на одной из других ссылок, чтобы увидеть список соответствующей модели). После добавления нескольких книг список может выглядеть наподобие скриншота ниже.  Отображается название каждой из книг. Его возвращает метод <code>__str__() </code>в модели Book, созданной в предыдущей статье.</p>

<p><img alt="Admin Site - List of book objects" src="https://mdn.mozillademos.org/files/13935/admin_book_list.png" style="border-style: solid; border-width: 1px; display: block; height: 407px; margin: 0px auto; width: 1000px;"></p>

<p>Для удаления книги из этого списка выберите чекбокс рядом с ней и действие <em>delete...</em>  из выпадающего списка <em>Action</em>, а затем нажмите кнопку <strong>Go</strong>. Также можно добавить новую книгу, нажав на кнопку <strong>ADD BOOK</strong>. </p>

<p>Вы можете редактировать книгу, кликнув по ссылке с её названием. Страница редактирования книги, приведённая ниже, практически идентична странице добавления новой книги. Основные отличия - это заголовок страницы (<em>Change book</em>) и наличие кнопок <strong>Delete</strong>, <strong>HISTORY</strong> и <strong>VIEW ON SITE.  </strong>Последняя присутствует, так как мы определили метод <code>get_absolute_url() </code>в нашей модели.</p>

<p><img alt="Admin Site - Book Edit" src="https://mdn.mozillademos.org/files/13977/admin_book_modify.png" style="border-style: solid; border-width: 1px; display: block; height: 780px; margin: 0px auto; width: 841px;"></p>

<p>Теперь перейдите назад на страницу <strong>Home </strong>(используя ссылку <em>Home</em> в навигационной цепочке вверху страницы) и просмотрите списки <strong>Author</strong> и <strong>Genre</strong>. В них уже должно быть несколько элементов, созданных при добавлении новых книг. Если хотите, добавьте ещё.</p>

<p>Однако у вас не будет ни одного экземпляра книги, потому что они не создаются из модели <code>Book </code>(хотя можно создать книгу из модели <code>BookInstance</code> — такова природа поля <code>ForeignKey</code>). Для отображения страницы <em>Add book instance </em>(см. рисунок ниже)<em> </em>вернитесь на страницу <em>Home</em>  и нажмите кнопку <strong>Add</strong>. Обратите внимание на длинный уникальный Id для идентификации конкретного экземпляра книги в библиотеке.</p>

<p><img alt="Admin Site - BookInstance Add" src="https://mdn.mozillademos.org/files/13981/admin_bookinstance_add.png" style="border-style: solid; border-width: 1px; display: block; height: 514px; margin: 0px auto; width: 863px;"></p>

<p>Создайте несколько экземпляров для каждой из ваших книг. Установите статус <em>Available (доступен) </em>для некоторых экземпляров и <em>On loan (выдан)</em> для остальных. Если статус экземпляра <strong>not</strong> <em>Available (недоступен)</em>, то также установите дату возврата (<em>Due back)</em>.</p>

<p>Вот и все! Вы изучили как запустить и использовать админ-панель. Также были созданы записи для <code>Book</code>, <code>BookInstance</code>, <code>Genre</code> и <code>Author</code>, которые можно будет использовать после создания наших собственных представлений и шаблонов.</p>

<h2 id="Продвинутая_конфигурация">"Продвинутая" конфигурация</h2>

<p>Django выполняет неплохую работу по созданию базовой админ-панели используя информацию из зарегистрированных моделей:</p>

<ul>
 <li>каждая модель имеет список записей, каждая из которых идентифицируется строкой, создаваемой методом <code>__str__()</code> модели, и связана с представлением для её редактирования. По умолчанию, в верхней части этого представления находится меню действий, которое может быть использовано для удаления нескольких записей за раз</li>
 <li>Формы для редактирования и добавления записей содержат все поля модели, которые расположены вертикально в порядке их объявления в модели.  </li>
</ul>

<p>Можно настроить интерфейс пользователя для упрощения его использования. Некоторые доступные настройки:</p>

<ul>
 <li>List views:
  <ul>
   <li>добавление дополнительных отображаемых полей или информации для каждой записи. </li>
   <li>добавление фильтров для отбора записей по разным критериям (например, статус выдачи книги).</li>
   <li>добавление дополнительных вариантов выбора в меню действий и места расположения этого меню на форме.</li>
  </ul>
 </li>
 <li>Detail views
  <ul>
   <li>выбор отображаемых полей, их порядка, группирования и т.д. </li>
   <li>добавление связанных полей к записи  (например, возможности добавления и редактирования записей книг при создании записи автора).</li>
  </ul>
 </li>
</ul>

<p>В этом разделе рассмотрим некоторые изменения для совершенствования интерфейса пользователя нашей местной библиотеки, а именно: добавление дополнительной информации в списки моделей <code>Book</code> и <code>Author</code> ,  а также улучшение расположения элементов соответствующих представлений редактирования. Пользовательский интерфейс моделей <code>Language</code> and <code>Genre</code> изменять не будем, так как это не даст заметного улучшения, поскольку он содержит только по одному полю!</p>

<p>Полное руководство по всем возможным вариантам настройки админ-панели можно найти в <a href="https://docs.djangoproject.com/en/1.10/ref/contrib/admin/">The Django Admin site</a> (документация Django).</p>

<h3 id="Регистрация_класса_ModelAdmin">Регистрация класса ModelAdmin</h3>

<p>Для изменения отображения модели в пользовательском интерфейсе админ-панели, необходимо определить класс <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#modeladmin-objects">ModelAdmin</a>  (он описывает расположение элементов интерфейса, где Model - наименование модели) и зарегистрировать его для использования с этой моделью.</p>

<p>Давайте начнём с модели Author. Откройте файл <strong>admin.py</strong> в каталоге приложения (<strong>/locallibrary/catalog/admin.py</strong>). Закомментируйте исходную регистрацию (используя префикс #) этой модели:</p>

<pre class="brush: js"># admin.site.register(Author)</pre>

<p>Теперь добавьте новый класс <code>AuthorAdmin</code> и зарегистрируйте его как показано ниже:</p>

<pre class="brush: python"># Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
</pre>

<p>Сейчас мы добавим классы <code>ModelAdmin</code> для моделей <code>Book </code> <code>BookInstance</code>. Нам снова нужно закомментировать исходную регистрацию:</p>

<pre class="brush: js">#admin.site.register(Book)
#admin.site.register(BookInstance)</pre>

<p>В этот раз для создания и регистрации новых моделей используем декоратор  <code>@register</code> (он делает то же самое, что и метод <code>admin.site.register()</code>):</p>

<pre class="brush: python"># Register the Admin classes for Book using the decorator

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator

@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
</pre>

<p>Пока что все наши admin-классы пустые (см. "<code>pass"</code>), поэтому ничего не изменится ! Добавим код для задания особенностей интерфейса моделей.</p>

<h3 id="Настройка_отображения_списков">Настройка отображения списков</h3>

<p>Сейчас приложение <em>LocalLibrary</em> отображает всех авторов, используя имя объекта, возвращаемое методом <code>__str__()</code> модели. Это приемлемо, когда есть только несколько авторов, но, если их количество значительно, возможны дубликаты. Чтобы различить их или просто отобразить более интересную информацию о каждом авторе, можно использовать <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display">list_display</a> (для добавления дополнительных полей). </p>

<p>Замените класс <code>AuthorAdmin</code> кодом, приведённым ниже. Названия полей, которые будут отображаться в списке, перечислены в кортеже list_display в требуемом порядке  (это те же имена, что и в исходной модели).</p>

<pre class="brush: python">class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
</pre>

<p>Перезапустите сайт и перейдите к списку авторов. Указанные поля должны отображаться следующим образом:</p>

<p><img alt="Admin Site - Improved Author List" src="https://mdn.mozillademos.org/files/14023/admin_improved_author_list.png" style="border-style: solid; border-width: 1px; display: block; height: 302px; margin: 0px auto; width: 941px;"></p>

<p>Для нашей модели <code>Book</code> добавим отображение полей <code>author</code> и <code>genre</code>. Поле <code>author</code>  - это  внешний ключ (<code>ForeignKey</code> ) связи один к одному, поэтому оно будет представлено значением <code>__str()__</code>  для связанной записи. Замените класс <code>BookAdmin</code> на версию, приведённую ниже.</p>

<pre class="brush: python">class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
</pre>

<p>К сожалению, мы не можем напрямую поместить поле genre в <code>list_display</code>, так как оно является  <code>ManyToManyField</code> (Django не позволяет это из-за большой "стоимости" доступа к базе данных). Вместо этого мы определим функцию <code>display_genre</code> для получения строкового представления информации (вызов этой функции есть в <code>list_display</code>,  её определение см. ниже).</p>

<div class="note">
<p><strong>Примечание</strong>: Получение здесь значения поля <code>genre</code> возможно не самая хорошая идея вследствие "стоимости" операции базы данных. Мы показываем это, потому что вызов функций в ваших моделях может быть очень полезен по другим причинам, например, для добавления ссылки  <em>Delete </em>рядом с каждым пунктом списка.</p>
</div>

<p>Добавьте следующий код в вашу модель <code>Book</code> (<strong>models.py</strong>). В нем создаётся строка из первых трёх значений поля <code>genre</code> (если они существуют) и <code>short_description</code>,  которое может быть использовано в админ-панели.</p>

<pre class="brush: python">    def display_genre(self):
        """
        Creates a string for the Genre. This is required to display genre in Admin.
        """
        return ', '.join([ genre.name for genre in self.genre.all()[:3] ])
    display_genre.short_description = 'Genre'
</pre>

<p>После сохранения модели и обновления админ-панели, перезапустите её и перейдите на страницу списка <em>Books</em>. Вы должны увидеть список книг, наподобие приведённого ниже:</p>

<p><img alt="Admin Site - Improved Book List" src="https://mdn.mozillademos.org/files/14025/admin_improved_book_list.png" style="border-style: solid; border-width: 1px; display: block; height: 337px; margin: 0px auto; width: 947px;"></p>

<p>Модель <code>Genre</code> (и модель <code>Language</code>, если вы её определили) имеет единственное поле. Поэтому нет необходимости создания для них дополнительных моделей с целью отображения дополнительных полей.</p>

<div class="note">
<p><strong>Примечание</strong>: целесообразно, чтобы в списке модели <code>BookInstance</code> отображались хотя бы статус и ожидаемая дата возврата. Мы добавили это в качестве "испытания" в конце этой статьи!</p>
</div>

<h3 id="Добавление_фильтров_списка">Добавление фильтров списка</h3>

<p>Если в вашем списке есть множество элементов, может быть полезной возможность фильтрации отображаемых пунктов. Это выполняется путём перечисления их в атрибуте <code>list_filter</code>. Замените класс <code style="font-style: normal; font-weight: normal;">BookInstanceAdmin</code> на следующий:</p>

<pre class="brush: python">class BookInstanceAdmin(admin.ModelAdmin):
<strong>    list_filter = ('status', 'due_back')</strong>
</pre>

<p>Представление списка теперь будет содержать панель фильтрации справа. Обратите внимание, как выбирать даты и статус для фильтрации:</p>

<p><img alt="Admin Site - BookInstance List Filters" src="https://mdn.mozillademos.org/files/14037/admin_improved_bookinstance_list_filters.png" style="height: 528px; width: 960px;"></p>

<h3 id="Формирование_макета_с_подробным_представлением">Формирование макета с подробным представлением</h3>

<p>По умолчанию в представлениях деталей отображаются все поля по вертикали в порядке их объявления в модели. Вы можете изменить порядок декларации, какие поля отображаются (или исключены), используются ли разделы для организации информации, отображаются ли поля горизонтально или вертикально, и даже какие виджеты редактирования используются в админ-формах.</p>

<div class="note">
<p><strong>Примечание:</strong> Модели LocalLibrary относительно просты, поэтому нам не нужно менять макет, но мы всё равно внесём некоторые изменения, просто чтобы показать вам, как это сделать.</p>
</div>

<h4 id="Управление_отображаемыми_и_вложенными_полями">Управление отображаемыми и вложенными полями</h4>

<p>Обновите ваш AuthorAdmin класс, чтобы добавить строку полей, как показано ниже (выделено полужирным шрифтом):</p>

<pre class="brush: python">class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
<strong>    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]</strong>
</pre>

<p>Атрибут полей перечисляет только те поля, которые должны отображаться в форме, по порядку. Поля отображаются по вертикали по умолчанию, но будут отображаться горизонтально, если вы дополнительно группируете их в кортеже (как показано в полях «date» выше).</p>

<p>Перезагрузите приложение и перейдите к подробному представлению автора - он должен теперь отображаться, как показано ниже:</p>

<p><img alt="Admin Site - Improved Author Detail" src="https://mdn.mozillademos.org/files/14027/admin_improved_author_detail.png" style="border-style: solid; border-width: 1px; display: block; height: 282px; margin: 0px auto; width: 928px;"></p>

<div class="note">
<p><strong>Примечание</strong>: Так же, вы можете использовать <code>exclude</code> атрибут для объявления списка атрибутов, которые будут исключены из формы (все остальные атрибуты в модели, будут отображаться). </p>
</div>

<h4 id="Разделение_на_секцииВыделение_подробного_представления">Разделение на секции/Выделение подробного представления</h4>

<p>Вы можете добавлять "разделы" (sections) для группировки связанной информации в модели в форме детализации, используя атрибут <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets">fieldsets</a> .</p>

<p>В модели <code>BookInstance</code> мы имеем информацию соответствия конкретной книги (т.е. <code>name</code>, <code>imprint</code>, and <code>id</code>) и датой когда она вновь станет доступной (<code>status</code>, <code>due_back</code>). Мы можем добавить их  в разные секции, добавив текст жирным шрифтом в наш <code>BookInstanceAdmin</code> класс. </p>

<pre class="brush: python">@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

<strong>    fieldsets = (
        (None, {
            'fields': ('book','imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )</strong></pre>

<p>Каждая секция имеет свой заголовок (или <code>None</code>, если заголовок не нужен) и ассоциированный кортеж полей в словаре - формат сложный для описания, но относительно простой для понимания, если вы посмотрите на фрагмент кода, представленный выше.</p>

<p>Перезапустите сайт и перейдите к списку экземпляров; форма должна отображаться следующим образом:</p>

<p><img alt="Admin Site - Improved BookInstance Detail with sections" src="https://mdn.mozillademos.org/files/14029/admin_improved_bookinstance_detail_sections.png" style="border-style: solid; border-width: 1px; display: block; height: 580px; margin: 0px auto; width: 947px;"></p>

<h3 id="Встроенное_редактирование_связанных_записей">Встроенное редактирование связанных записей</h3>

<p>Иногда бывает полезно иметь возможность добавлять связанные записи одновременно. Например, имеет смысл иметь как информацию о книге, так и информацию о конкретных копиях, которые вы получили на той же странице подробностей. К примеру, вполне логично получить и информацию о книге, и информацию о конкретных копиях, зайдя на страницу детализации.</p>

<p>Вы можете это сделать, объявив <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines">inlines</a>, и указав тип <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline">TabularInline</a> (горизонтальное расположение) или  <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.StackedInline">StackedInline</a> (вертикальное расположение, так же как и в модели по умолчанию). Вы можете добавить  <code>BookInstance</code> информацию в подробное описание  <code>Book</code> , добавив строки, представленные ниже и располагающиеся рядом с  <code>BookAdmin</code>: </p>

<pre class="brush: python"><strong>class BooksInstanceInline(admin.TabularInline):
    model = BookInstance</strong>

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
<strong>    inlines = [BooksInstanceInline]</strong>
</pre>

<p>Попробуйте перезапустить приложение, а затем взгляните на представление книги — внизу вы должны увидеть экземпляры книги, относящиеся к этой книге:</p>

<p><img alt="Admin Site - Book with Inlines" src="https://mdn.mozillademos.org/files/14033/admin_improved_book_detail_inlines.png" style="border-style: solid; border-width: 1px; display: block; height: 889px; margin: 0px auto; width: 937px;"></p>

<p>В этом случае, всё, что мы сделали - объявили наш встроенный класс tablular, который просто добавляет все поля из <em>встроенной</em> модели. Вы можете указать все виды дополнительной информации для макета, включая отображаемые поля, их порядок, независимо от того, являются ли они только для чтения или нет, и т. д. (См. <a href="https://docs.djangoproject.com/en/dev/ref/contrib/admin/#django.contrib.admin.TabularInline">TabularInline</a> для получения дополнительной информации). </p>

<div class="note">
<p><strong>Примечание</strong>: В этой функции есть некоторые неприятные ограничения! На скриншоте выше у нас есть три существующих экземпляра книги, за которыми следуют три поля для новых экземпляров книги (которые очень похожи!). Было бы лучше НЕ иметь лишних экземпляров книг по умолчанию и просто добавить их с помощью ссылки <strong>Add another Book instance</strong> или иметь возможность просто перечислять <code>BookInstance</code>s как нечитаемые здесь ссылки. Первый вариант можно сделать, установив <code>extra</code> атрибут в 0 в модели <code>BookInstanceInline</code>, попробуйте сами.</p>
</div>

<h2 id="Проверьте_себя">Проверьте себя</h2>

<p>Мы многое изучили в этом разделе и теперь настало время вам самостоятельно попробовать несколько вещей:</p>

<ol>
 <li>Для представления списка <code>BookInstance</code> , добавьте код  для отображения книги, статуса, даты возврата, и id (вместо значения по умолчанию возвращаемого  <code>__str__()</code> ).</li>
 <li>Добавьте встроенный список перечня <code>Book</code> в представление списка <code>Author</code> , используя тот же самый подход, который мы применили для <code>Book</code>/<code>BookInstance</code>.</li>
</ol>

<ul>
</ul>

<h2 id="Заключение">Заключение</h2>

<p>Вот и всё! Теперь вы узнали, как настроить сайт администрирования как в самой простой, так и в улучшенной форме, о создании суперпользователя и о том, как перемещаться по сайту администратора, просматривать, удалять и обновлять записи. По пути вы создали множество книг, экземпляров, жанров и авторов, которые мы сможем перечислить и отобразить, как только мы создадим собственный вид и шаблоны.</p>

<h2 id="Дополнительные_материалы">Дополнительные материалы</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/1.10/intro/tutorial02/#introducing-the-django-admin">Writing your first Django app, part 2: Introducing the Django Admin</a>  (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/1.10/ref/contrib/admin/">The Django Admin site</a> (Django Docs)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}</p>
