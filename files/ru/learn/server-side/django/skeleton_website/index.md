---
title: 'Руководство по Django часть 2: создание скелета'
slug: Learn/Server-side/Django/skeleton_website
tags:
  - django
  - Введение
  - Для новичков
  - Программирование
  - Руководство
  - Статья
translation_of: Learn/Server-side/Django/skeleton_website
---
<div>{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}</div>

<p class="summary">Это вторая статья из нашего <a href="/ru/docs/Learn/Server-side/Django/Tutorial_local_library_website">руководства по Django</a>, которая показывает, как можно создать "скелет" сайта, как фундамент, на котором можно строить всё остальное: настройки, ссылки, модели, контроллеры и представления.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Необходимо:</th>
   <td>
    <p><a href="/ru/docs/Learn/Server-side/Django/development_environment">Настройка окружения</a>. Прочитать первую статью <a href="/ru/docs/Learn/Server-side/Django/Tutorial_local_library_website">руководства по Django</a>.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">Цель:</th>
   <td>Научиться использовать инструменты Django для создания новых веб-сайтов.</td>
  </tr>
 </tbody>
</table>

<h2 id="Обзор">Обзор</h2>

<p>Эта статья показывает, как можно создать "скелет"(прототип) сайта, который затем можно расширить при помощи различных настроек, url адресов, моделей, представлений, и шаблонов (эти темы будут объясняться в последующих статьях).</p>

<p>Алгоритм следующий:</p>

<ol>
 <li>Использовать <code style="font-style: normal; font-weight: normal; line-height: 1.5;">django-admin</code> для создания папки проекта, шаблонов остальных файлов, и скрипта для управления проектом (<strong style="line-height: 1.5;">manage.py</strong>).</li>
 <li>Использовать <strong style="line-height: 1.5;">manage.py</strong><em> </em>для создания одного или нескольких <em>приложений</em>.
  <div class="note">
  <p><strong>Примечание: </strong>Сайт может состоять из одной или нескольких различных частей, например: основная часть, блог, вики, раздел загрузок, и так далее. Философия Django подталкивает разработчиков создавать эти части, как разные <strong>приложения</strong>, которые, если понадобится, могут быть использованы повторно в других проектах. </p>
  </div>
 </li>
 <li>Зарегистрировать в настройках эти приложения, чтобы использовать их в проекте. </li>
 <li>Настроить маршруты url адресов для каждого из приложений.</li>
</ol>

<p>Для <a href="/ru/docs/Learn/Server-side/Django/Tutorial_local_library_website">Сайта местной библиотеки</a> папка сайта и проекта будет называться <em>locallibrary</em>, и у нас будет одно приложение с названием <em>catalog</em>. Верхняя структура проекта будет следующей:</p>

<pre class="brush: bash"><em>locallibrary/         # Папка сайта</em>
    <strong>manage.py         </strong># Скрипт для управления проектов (создан manage.py)
    <em>locallibrary/     # Папка сайта/проекта </em>(создана manage.py)
    <em>catalog/          # Папка приложения </em>(также создана manage.py)
</pre>

<p>Следующие разделы статьи разложат по полочкам этапы создания "скелета", и покажут вам, как можно проверить сделанные изменения. В конце статьи мы обсудим некоторые другие настройки сайта, которые можно назначить на этом этапе.</p>

<h2 id="Создание_проекта">Создание проекта</h2>

<p>Для начала откройте командную строку/терминал, перейдите в ту папку, куда вы хотите поместить проект Django(лучше в папке профиля пользователя C:\Users\user_name, при запуске командной строки используется именно эта директория), и создайте папку для вашего нового сайта (в данном случае: <em>locallibrary</em>). Затем войдите в эту папку, используя команду cd:</p>

<pre class="brush: bash">mkdir locallibrary
cd locallibrary</pre>

<p>Создайте новую папку, используя команду <code>django-admin startproject</code> как в примере ниже, и затем зайдите в созданную папку.</p>

<pre class="brush: bash">  django-admin startproject locallibrary .
cd locallibrary</pre>

<p>Команда <code>django-admin</code> создаст файловую структуру, как в примере ниже:</p>

<pre class="brush: bash"><em>locallibrary/</em>
    <strong>manage.py</strong>
    <em>locallibrary/</em>
        settings.py
        urls.py
        wsgi.py</pre>

<p>Подпапка проекта <em>locallibrary</em> это ключевая директория нашего проекта: </p>

<ul>
 <li><strong>settings.py</strong> содержит в себе все настройки проекта. Здесь мы регистрируем приложения, задаём размещение <em>статичных</em> файлов, настройки базы данных и так далее.  </li>
 <li><strong>urls.py</strong> задаёт ассоциации url адресов с представлениями. Несмотря на то, что этот файл может содержать <em>все</em> настройки url, обычно его делят на части, по одной на приложение, как будет показано далее. </li>
 <li><strong style="line-height: 1.5;">wsgi.py</strong> используется для налаживания связи между вашим Django приложением и веб-сервером. Вы можете воспринимать его, как утилиту.</li>
</ul>

<p>Скрипт <strong>manage.py</strong> используется для создания приложений, работы с базами данных и для запуска отладочного сервера. </p>

<h2 id="Создание_приложения_Каталог">Создание приложения Каталог</h2>

<p>Выполнив предыдущие шаги, запустите следующую команду для создания приложения <em>catalog</em>, который будет размещён внутри папки locallibrary (команду необходимо выполнять из папки, в которой находится <strong>manage.py</strong>):</p>

<pre class="brush: bash">python3 manage.py startapp catalog</pre>

<div class="note">
<p><strong>Примечание</strong>: приведённая выше команда справедлива для GNU Linux/Mac OS. На Windows команда должна иметь вид: <code>py -3 manage.py startapp catalog</code></p>

<p>Если вы работаете под Windows, заменяйте команду <code>python3</code> на <code>py -3</code> в этой и следующих статьях.</p>
</div>

<p>Эта команда создаст новую папку и наполнит её файлами различных частей приложения (выделенные <strong>полужирным </strong>ниже). Большинство файлов названы, исходя из их назначения (например контроллеры(views) должны находится во <strong>views.py</strong>, модели в <strong>models.py</strong>, тесты в <strong>tests.py</strong>, настройки административной части в <strong>admin.py</strong>, регистрация приложения в <strong>apps.py</strong>) и уже содержат некоторый шаблонный код для работы с вышеназванными объектами.</p>

<p>Обновлённая директория должна выглядеть следующим образом:</p>

<pre class="brush: bash"><em>locallibrary/</em>
    manage.py
    <em>locallibrary/
</em><strong>    <em>catalog/</em>
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        <em>migrations/</em></strong>
</pre>

<p>Кроме перечисленных выше файлов были созданы:</p>

<ul>
 <li>Папка <em>migrations</em> используется, чтобы хранить"миграции" — файлы, которые позволяют вам автоматически обновлять базу данных по мере изменения моделей. </li>
 <li><strong>__init__.py</strong> — пустой файл для того, чтобы Django и Python распознавали папку как <a href="https://docs.python.org/3/tutorial/modules.html#packages">Python модуль </a>и позволяет нам использовать его объекты внутри других частей проекта.</li>
</ul>

<div class="note">
<p><strong>Примечание</strong>: Заметили, что некоторых файлов не хватает? В то время, как там нашли себе место файлы для контроллеров(views) и моделей(models), файлов для настройки url соотносителя, шаблонов, и статичных файлов создано не было. Далее мы покажем, как их создать (они не обязательны для каждого сайта, но нужны в данном примере).</p>
</div>

<h2 id="Регистрация_папки_с_приложением">Регистрация папки с приложением</h2>

<p>После создания приложения, нам нужно зарегистрировать его в проекте, чтобы различные утилиты затрагивали его своим действием (например при добавлении моделей в базу данных). Приложения регистрируются добавлением их названий в список <code>INSTALLED_APPS</code> в настройках проекта(который, как мы помним, называется <strong>settings.py</strong>). </p>

<p>Откройте файл <strong>locallibrary/locallibrary/settings.py</strong> и найдите в нём список <code>INSTALLED_APPS</code> . Затем добавьте новую строку в конец списка, как показано <strong>полужирным </strong>ниже.</p>

<pre class="brush: bash">INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
<strong>    'catalog.apps.CatalogConfig', </strong>
]</pre>

<p>Новая строка указывает на файл конфигурации приложения (<code>CatalogConfig</code>), который был создан в <strong>/locallibrary/catalog/apps.py</strong> , когда вы создали приложение.</p>

<div class="note">
<p><strong>Примечание</strong>: Легко заметить, что в <code>INSTALLED_APPS</code> уже подключено большое количество приложений (и объектов <code>MIDDLEWARE</code>, ниже в файле конфигурации). Они добавляют поддержку <a href="/ru/docs/Learn/Server-side/Django/Admin_site">админ-панели Django</a> и, как следствие, огромное количество функциональности (включая сессии, аутентификацию и прочее).</p>
</div>

<h2 id="Настройка_базы_данных">Настройка базы данных</h2>

<p>На этом шаге обычно указывают базу данных для будущего проекта — имеет смысл использовать для разработки и размещённого в Сети одну и ту же базу данных, по возможности, чтобы исключить различия в поведении.  Про различные варианты вы можете прочитать в документации Django в разделе <a href="https://docs.djangoproject.com/en/1.10/ref/settings/#databases">Базы данных</a>. </p>

<p>Мы будем использовать базу данных SQLite для этого проекта, потому что не предполагаем большое количество одновременных запросов на неё, а ещё потому, что для её настройки совсем не надо ничего делать! Вы можете видеть, что база данных уже настроена в <strong>settings.py</strong> (подробная информация указана ниже):</p>

<pre class="brush: python">DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
</pre>

<p>Так как мы используем SQLite, то нам не нужно ничего делать.</p>

<p>Давайте продолжим!</p>

<h2 id="Другие_настройки_проекта">Другие настройки проекта</h2>

<p>Файл <strong>settings.py</strong> так же применяется и для некоторых других настроек, но на данном шаге имеет смысл поменять разве что <a href="https://docs.djangoproject.com/en/1.10/ref/settings/#std:setting-TIME_ZONE">TIME_ZONE</a> — это значение должно быть представлено строкой, указанной в <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">списке часовых поясов tz </a>(колонка TZ в таблице, в строке временной зоны, которая вам нужна). Измените <code>TIME_ZONE</code> на одну из строк из таблицы, которая отвечает вашему часовому поясу. Например:</p>

<pre class="brush: python">TIME_ZONE = 'Europe/Moscow'</pre>

<p>В файле присутствует две настройки, которые не нужно менять сейчас, но о назначении которых следует знать:</p>

<ul>
 <li><code>SECRET_KEY</code>. Это секретный ключ, который используется Django для поддержки безопасности сайта. Если вы раскроете этот ключ в процессе разработки кому-либо, то необходимо будет его сменить (возможно считать его с какого-либо файла на сервере или переменной окружения) когда будете размещать проект на сервер. </li>
 <li><code>DEBUG</code>. Включает подробные сообщения об ошибках, вместо стандартных HTTP статусов ответов. Должно быть изменено на <code>False</code> на сервере, так как эта информация очень много расскажет взломщикам. </li>
</ul>

<h2 id="Подключение_URL-адреса">Подключение URL-адреса</h2>

<p>При создании сайта, был создан файл сопоставления URL (<strong>urls.py</strong>) в корне проекта. Хотя можно использовать его для обработки всех URL адресов, более целесообразно подключать отдельные файлы сопоставлений для каждого приложения.</p>

<p>Откройте <strong>locallibrary/locallibrary/urls.py</strong> и обратите внимание на закомментированный текст, который объясняет суть происходящего. </p>

<pre class="brush: python">"""
locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
<code>from django.urls import path</code>
from django.contrib import admin


urlpatterns = [
    <code>path('admin/', admin.site.urls),</code>
]
</pre>

<p>URL соотношения хранятся в переменной <code>urlpatterns</code>, которая является списком функций <code>path()</code>. Каждая <code>path()</code> функция или ассоциирует шаблон URL<em> </em>с контроллером(views) или же его с другим таким списком (во втором случае, первый URL становится "базовым" для других, которые определяются в дочернем списке). Список <code>urlpatterns</code> инициализирует список функции, которая, например, соотносит <em>admin/</em> с модулем <code>admin.site.urls</code> , который содержит собственный файл-соотноситель.</p>

<p>Добавьте строчки, приведённые ниже в низ файла <strong>urls.py</strong> , чтобы добавить новый элемент в список <code>urlpatterns</code>. Этот элемент содержит <code>url()</code> который направляет запросы с URL <code>catalog/</code> к модулю  <code>catalog.urls</code> (файл с относительным путём <strong>/catalog/urls.py</strong>).</p>

<pre class="brush: python"># Используйте include() чтобы добавлять URL из каталога приложения
<code>from django.urls import include
from django.urls import path</code>
urlpatterns += [
    <code> path('catalog/', include('catalog.urls')),</code>
]
</pre>

<p>Теперь давайте перенаправим корневой URL нашего сайта (например <code>127.0.0.1:8000</code>) на URL <code>127.0.0.1:8000/catalog/</code>; это единственное приложение, которое мы собираемся использовать, поэтому это вполне разумно. Чтобы это использовать, нам понадобится специальная функция (<code>RedirectView</code>), которая принимает первым параметром новый относительный URL на который следует перенаправлять (<code>/catalog/</code>) когда указанный в функции <code>url()</code> адрес  соотносится с адресом запроса (корневой URL, в данном случае).</p>

<p>Добавьте следующие строчки, тоже в конец файла:</p>

<pre class="brush: python"># Добавьте URL соотношения, чтобы перенаправить запросы с корневого URL, на URL приложения
from django.views.generic import RedirectView
urlpatterns += [
    <code>path('', RedirectView.as_view(url='/catalog/', permanent=True)),</code>
]</pre>

<p>Django не размещает <em>статические</em> файлы(CSS, JavaScript, и изображения) по умолчанию, но это было бы крайне полезно на этапе разработки нашего сайта. В самом конце нашего URL соотносителя, можно включить размещение статических файлов. </p>

<p>Добавьте последнюю часть в конец файла:</p>

<pre><code># Используйте static() чтобы добавить соотношения для статических файлов
# Только на период разработки
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)</code>
</pre>

<div class="note">
<p><strong>Примечание</strong>: Существуют различные способы дополнения списка <code>urlpatterns</code> (в примере мы просто добавляли объект, используя оператор <code>+=</code> чтобы чётко разделить изначальный и дописанный код). Вместо этого, мы могли бы добавить соотношения внутрь определения переменной:</p>

<pre>urlpatterns = [   path('admin/', admin.site.urls),
path('catalog/', include('catalog.urls')),path('',
RedirectView.as_view(url='/catalog/', permanent=True)), ] +
<code>static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)</code></pre>

<p>Кроме того, мы добавили import вниз файла (<code>from django.urls import include</code>) ,чтобы видеть, что мы добавили, но обычно все инструкции import добавляются в верхнюю часть файла.</p>
</div>

<p>Напоследок, создайте файл <strong>urls.py</strong> внутри папки <strong>catalog</strong>, и добавьте следующий код, чтобы определить (пустой) <code>urlpatterns</code>. Сюда мы будем добавлять наши URL соотношения, по мере разработки сайта. </p>

<pre class="brush: python">from django.urls import path
from . import views


urlpatterns = [

]
</pre>

<h2 id="Тестирование_работы_скелета">Тестирование работы скелета</h2>

<p>На этом, мы создали прототип сайта. Пока сайт ничего не умеет делать, но стоит запустить его, чтобы убедиться, что мы ничего не сломали. </p>

<p>До этого, нам предстоит впервые запустить <em> миграцию базы данных</em>. Это обновит нашу базу данных и добавит туда необходимые модели (и уберёт некоторые предупреждения, которые были бы показаны при попытке запуска).</p>

<h3 id="Запуск_миграций_базы_данных">Запуск миграций базы данных</h3>

<p>Django использует Объектный Соотноситель Связей (ORM) чтобы соотносить определения моделей в Django приложении со структурами данных, которые используются базой данных. Когда мы меняем наши модели, Django отслеживает изменения и может создать файлы миграций (в папке <strong>/locallibrary/catalog/migrations/</strong>) чтобы применить соответствующие структуры данных к базе, чтобы та соответствовала модели.</p>

<p>При создании сайта, Django автоматически добавил несколько моделей, чтобы мы могли их использовать в админ-панели (о которой мы поговорим позже). Выполните следующие команды, чтобы создать нужные таблицы в базе данных, соответствующие этим моделям (убедитесь, что вы находитесь в папке с<strong> manage.py</strong>):</p>

<pre class="brush: bash">python3 manage.py makemigrations
python3 manage.py migrate
</pre>

<div class="warning">
<p><strong>Предупреждение</strong>: Необходимо выполнять команды выше каждый раз, когда вы меняете модели таким образом, что структура таблицы изменится(включая добавления и удаления как отдельных полей, так и целых моделей).</p>
</div>

<p><code>Команда makemigrations</code> <em>создаёт</em> (но не применяет) миграции для всех приложений, которые установлены в ваш проект (вы так же можете указать в конце имя конкретного приложения, чтобы создать миграции только для него). Это даёт вам возможность проверить код перед тем, как их применить — когда вы станете хорошо разбираться в Django, то сможете даже менять их!</p>

<p>Команда <code>migrate</code> применяет созданные миграции к базе (Django отслеживает, какие миграции были созданы для данной базы).</p>

<div class="note">
<p><strong>Примечание</strong>: Посмотрите раздел <a href="https://docs.djangoproject.com/en/2.2/topics/migrations/">Миграции</a> в документации Django чтобы получить информацию о менее распространённых командах для управления миграциями.</p>
</div>

<h3 id="Запуск_сайта">Запуск сайта</h3>

<p>Во время разработки, вы можете проверить свой сайт, разместив его на <em>встроенном отладочном сервере</em>, и просмотрев его в своём браузере. </p>

<div class="note">
<p><strong>Примечание</strong>: Отладочный веб-сервер не настолько функционален и производителен, для постоянного размещения , но это самый простой способ запустить свой сайт на Django и проверить его на наличие ошибок. По умолчанию, он разместит сайт на вашем компьютере (<code>http://127.0.0.1:8000/)</code>, но вы так же можете указать различные компьютеры в вашей сети для этой цели. Для получения большего количества информации загляните в раздел <a href="https://docs.djangoproject.com/en/2.2/ref/django-admin/">django-admin и manage.py: отладочный сервер</a> документации Django.</p>
</div>

<p>Запустите веб-сервер, используя команду <em>runserver</em> (в той же папке, что и <strong>manage.py</strong>):</p>

<pre class="brush: bash">python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 September 22, 2016 - 16:11:26
 Django version 1.10, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
</pre>

<p>Когда сервер запустится, вы сможете посетить сайт по адресу <code>http://127.0.0.1:8000/</code> в вашем веб-браузере. Вы должны увидеть страницу с ошибкой, навроде этой:</p>

<p><img alt="Django debug page for a 404 not found error" src="https://mdn.mozillademos.org/files/14009/django_404_debug_page.png" style="display: block; height: 545px; margin: 0px auto; width: 871px;"></p>

<p>Не волнуйтесь! Эта страница должна появиться и сообщить нам, что мы ещё не настроили ни одной страницы в модуле <code>catalogs.urls</code> (на который мы были перенаправлены запросили корневой URL сайта). </p>

<div class="note">
<p><strong>Примечание</strong>: Показанная выше страница открывает нам одно из замечательных свойств Django — автоматические отчёты об ошибках. На экране с ошибкой отображается множество полезной информации, когда страница не найдена, или ошибка была вызвана кодом. В данном случае, мы видим, что запрошенный URL  не соответствует ни одному шаблону (из указанных). Подобные отчёты будут выключены при DEBUG=False (когда мы разместим приложение в Сеть), в этом случае будет показана менее информативная, но более дружелюбная к пользователю страница(которую вам надо будет создать - прим. переводчика).</p>
</div>

<p>На данном этапе, мы поняли, что Django работает должным образом! </p>

<div class="note">
<p><strong>Примечание</strong>: вам следует перезапускать миграцию и заново тестировать сайт, после того как вы делаете важные изменения. Поверьте, это не займёт много времени!</p>
</div>

<h2 id="Домашнее_задание">Домашнее задание</h2>

<p>Папка <strong>catalog/</strong> содержит файлы контроллеров(views), моделей(models), и других частей приложения. Просмотрите эти файлы. </p>

<p>Как было написано выше, URL соотноситель для админ-панели был подключён в файле <strong>urls.py</strong>. Войдите в административную часть и посмотрите, что произойдёт (вы можете найти URL из соотношения выше).</p>

<ul>
</ul>

<h2 id="Подводя_итоги">Подводя итоги</h2>

<p>Теперь вы создали полноценный скелет веб-приложения, который теперь вы можете расширить url соотносителями, контроллерами(views) и моделями(models).</p>

<p>Теперь скелет <a href="/ru/docs/Learn/Server-side/Django/Tutorial_local_library_website">Сайта местной библиотеки</a> сделан и запущен, теперь самое время начать писать код, который научит сайт делать то, что он должен делать. </p>

<h2 id="Также_посмотрите_эти_статьи">Также посмотрите эти статьи</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/2.2/intro/tutorial01/">Пишем своё первое приложение на Django - часть 1</a>  (документация Django)</li>
 <li><a href="https://docs.djangoproject.com/en/2.2/ref/applications/">Приложения</a> (документация Django). содержит информацию о настройке приложений.</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}</p>
