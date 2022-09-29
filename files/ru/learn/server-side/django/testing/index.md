---
title: 'Руководство часть 10: Тестирование приложений Django'
slug: Learn/Server-side/Django/Testing
tags:
  - TDD
  - django
  - Для начинающих
  - Разработка через тесты
  - Руководство
  - Сервер
  - Тестирование в django
  - сторона сервера
  - тестирование
  - юнит-тесты
translation_of: Learn/Server-side/Django/Testing
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}</div>

<p class="summary">Сайты, в процессе развития и разработки, становится все сложнее тестировать вручную. Кроме такого тестирования, сложными становятся внутренние взаимодействия между компонентами - внесение небольшого изменения в одной части приложения влияет на другие. При этом, чтобы все продолжало работать нужно вносить все больше и больше изменений и, желательно так, чтобы не добавлялись новые ошибки. Одним из способов который позволяет смягчить последствия добавления изменений, является внедрение в разработку автоматического тестирования - оно должно просто и надёжно запускаться каждый раз, когда вы вносите изменения в свой код. Данное руководство рассматривает вопросы автоматизации<em> юнит-тестирования</em> вашего сайта при помощи фреймворка Django для тестов.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Требования:</th>
   <td>Изучить все предыдущие темы руководства, включая <a href="/en-US/docs/Learn/Server-side/Django/Forms">Руководство Django Часть 9: Работа с формами</a>.</td>
  </tr>
  <tr>
   <th scope="row">Цель:</th>
   <td>Понимать как создавать юнит тесты для сайта на основе Django.</td>
  </tr>
 </tbody>
</table>

<h2 id="Обзор">Обзор</h2>

<p><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website">LocalLibrary</a> в настоящий момент содержит страницы для показа списков всех книг, авторов, подробной информации о книгах <code>Book</code> и авторах <code>Author</code>, а также страницу для обновления информации об экземпляре книги <code>BookInstance</code> и, кроме того, страницы для создания, обновления и удаления записей модели <code>Author</code> (и модели <code>Book</code>, в том случае, если вы выполнили домашнее задание в руководстве <a href="/en-US/docs/Learn/Server-side/Django/Forms">работа с формами</a>). Даже в случае небольшого сайта, ручной переход на каждую страницу и <em>беглая</em> проверка того, что все работает как следует, может занять несколько минут. В процессе внесения изменений и роста сайта требуемое время для проведения проверок будет только возрастать. Если бы мы продолжили в том же духе, то в какой-то момент на проведение тестов мы тратили бы больше времени, чем на написание кода и внесение изменений.</p>

<p>Автоматические тесты могут серьёзно помочь нам справиться с этой проблемой! Очевидными преимуществами в таком случае являются значительно меньшие временные затраты на проведение тестов, их подробное выполнение, а кроме того, тесты имеют постоянную функциональность, или последовательность действий  (человек никогда не сможет тестировать так надёжно!). В связи с быстротой их выполнения автоматические тесты можно выполнять более часто, а если они провалятся, то укажут на соответствующее место (где что-то пошло не так как ожидалось).</p>

<p>Кроме того, автоматические тесты могут действовать как первый "настоящий пользователь" вашего кода, заставляя вас строго следить за объявлениями и документированием поведения вашего сайта. Тесты часто являются основой для создания примеров вашего кода и документации. По этим причинам иногда некоторые процессы разработки программного обеспечения начинаются с определения тестов и их реализации, а уже после этого следует написание кода который должен иметь соответствующее поведение (так называемая разработка <a href="https://en.wikipedia.org/wiki/Test-driven_development">на основе тестов</a> и <a href="https://en.wikipedia.org/wiki/Behavior-driven_development">на основе поведения</a>).</p>

<p>Данное руководство показывает процесс создания автоматических тестов в Django при помощи добавления их к разработке сайта <em>LocalLibrary</em>.</p>

<h3 id="Типы_тестирования">Типы тестирования</h3>

<p>Существует несколько типов, уровней, классификаций тестов и тестовых приёмов. Наиболее важными автоматическими тестами являются:</p>

<dl>
 <dt>Юнит-тесты</dt>
 <dd>Проверяют функциональное поведение для отдельных компонентов, часто классов и функций.</dd>
 <dt><strong>Регрессионное тестирование</strong></dt>
 <dd>Тесты которые воспроизводят исторические ошибки (баги). Каждый тест вначале запускается для проверки того, что баг был исправлен, а затем перезапускается для того, чтобы убедиться, что он не был внесён снова с появлением новых изменений в коде.</dd>
 <dt>Интеграционные тесты</dt>
 <dd>Проверка совместной работы групп компонентов. Данные тесты отвечают за совместную работу между компонентами, не обращая внимания на внутренние процессы в компонентах. Они проводятся как для простых групп компонентов, так и для целых веб-сайтов.</dd>
</dl>

<div class="note">
<p><strong>Примечание:  </strong>К другим типам тестов относятся методы чёрного ящика, белого ящика, ручные, автоматические, канареечные (canary), дымные (smoke), соответствия (conformance), принятия (acceptance), функциональные (functional),  системные (system), эффективности (performance), загрузочные (load) и стресс-тесты (stress tests).</p>
</div>

<h3 id="Что_Django_предоставляет_для_тестирования">Что Django предоставляет для тестирования?</h3>

<p>Тестирование сайта это сложная задача, потому что она состоит их нескольких логических слоёв – от  HTTP-запроса и запроса к моделям, до валидации формы и их обработки, а кроме того, рендеринга шаблонов страниц.</p>

<p>Django предоставляет фреймворк для создания тестов, построенного на основе иерархии классов, которые, в свою очередь, зависят от стандартной библиотеки Python  <code><a href="https://docs.python.org/3/library/unittest.html#module-unittest" title="(in Python v3.5)">unittest</a></code>. Несмотря на название, данный фреймворк подходит и для юнит-, и для интеграционного тестирования. Фреймворк Django добавляет методы API и инструменты, которые помогают тестировать как веб так и, специфическое для Django, поведение. Это позволяет вам имитировать URL-запросы, добавление тестовых данных, а также проводить проверку выходных данных ваших приложений. Кроме того, Django предоставляет API (<a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#liveservertestcase">LiveServerTestCase</a>) и инструменты <a href="https://docs.djangoproject.com/en/1.10/topics/testing/advanced/#other-testing-frameworks">для применения различных фреймворков тестирования</a>, например вы можете подключить популярный фреймворк <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment">Selenium</a> для имитации поведения пользователя в реальном браузере.</p>

<p>Для написания теста вы должны наследоваться от любого из классов тестирования Django (или <em>юниттеста</em>)  (<a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#simpletestcase">SimpleTestCase</a>, <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#transactiontestcase">TransactionTestCase</a>, <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase">TestCase</a>, <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#liveservertestcase">LiveServerTestCase</a>), а затем реализовать отдельные методы проверки кода (тесты это функции-"утверждения", которые проверяют, что результатом выражения являются значения <code>True</code> или <code>False</code>, или что два значения равны и так далее). Когда вы запускаете тест, фреймворк выполняет соответствующие тестовые методы в вашем классе-наследнике. Методы тестирования запускаются независимо друг от друга, начиная с метода настроек и/или завершаясь методом разрушения (tear-down), определённом в классе, как показано ниже.</p>

<pre class="brush: python">class YourTestClass(TestCase):

    def setUp(self):
        # Установки запускаются перед каждым тестом
        pass

    def tearDown(self):
        # Очистка после каждого метода
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
</pre>

<p>Самый подходящий базовый класс для большинства тестов это <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase">django.test.TestCase</a>.  Этот класс создаёт чистую базу данных перед запуском своих методов, а также запускает каждую функцию тестирования в его собственной транзакции. У данного класса также имеется тестовый <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.Client" title="django.test.Client">Клиент</a>, который вы можете использовать для имитации взаимодействия пользователя с кодом на уровне отображения. В следующих разделах мы сконцентрируемся на юнит-тестах, которые будут созданы на основе класса <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase">TestCase</a>.</p>

<div class="note">
<p><strong>Примечание:</strong> Класс <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase">django.test.TestCase</a> очень удобен, но он может приводить к замедленной работе в некоторых случаях (не для каждого теста необходимо настраивать базу данных, или имитировать взаимодействие с отображением). Когда вы познакомитесь с работой данного класса, то сможете заменить некоторые из ваших тестов на более простые классы тестирования.</p>
</div>

<h3 id="Что_вы_должны_тестировать">Что вы должны тестировать?</h3>

<p>Вы должны тестировать все аспекты, касающиеся вашего кода, но не библиотеки, или функциональность, предоставляемые Python, или Django.</p>

<p>Например, рассмотрим модель <code>Author</code>, определённую ниже. Вам не нужно проверять тот факт, что <code>first_name</code> и <code>last_name</code> были сохранены в базу данных как <code>CharField</code>, потому что за это отвечает непосредственно Django (хотя конечно, на практике  в течение разработки вы косвенно будете проверять данную функциональность). Тоже касается и, например, проверки того, что поле <code>date_of_birth</code> является датой, поскольку это тоже часть реализации Django.</p>

<p>Вы должны проверить текст для меток (<em>First name, Last_name, Date of birth, Died</em>), и размер поля, выделенного для текста (<em>100 символов</em>), потому что они являются частью вашей разработки и чем-то, что может сломаться/измениться в будущем.</p>

<pre class="brush: python">class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)</pre>

<p>Подобным же образом вы должны убедиться, что методы <code style="font-style: normal; font-weight: normal;">get_absolute_url()</code> и <code style="font-style: normal; font-weight: normal;">__str__()</code> ведут себя как требуется, потому что они являются частью вашей бизнес логики. В случае функции <code style="font-style: normal; font-weight: normal;">get_absolute_url()</code> вы можете быть уверены, что функция из Django <code>reverse()</code> была реализована правильно и, следовательно, вы тестируете только то, чтобы соответствующий вызов в отображении был правильно определён.</p>

<div class="note">
<p><strong>Примечание:</strong> Проницательные читатели могут заметить, что мы можем некоторым образом ограничить дату рождения и смерти какими-то граничными значениями и выполнять проверку, чтобы дата смерти шла после рождения. В Django данное ограничение может быть добавлено к вашим классам форм (хотя вы и можете определить валидаторы для этих полей, они будут проявлять себя только на уровне форм, а не уровне модели).</p>
</div>

<p>Ну что же, усвоив данную информацию, давайте перейдём к процессу определения и запуска тестов.</p>

<h2 id="Обзор_структуры_тестов">Обзор структуры тестов</h2>

<p>Перед тем как мы перейдём к тому "что тестировать", давайте кратко взглянем на моменты <em>где</em> и <em>как</em> определяются тесты.</p>

<p>Django использует юнит-тестовый модуль - <a href="https://docs.python.org/3/library/unittest.html#unittest-test-discovery" title="(in Python v3.5)">встроенный "обнаружитель" тестов</a>, который находит тесты в текущей рабочей директории, в любом файле с шаблонным именем<strong> test*.py</strong>. Предоставляя соответствующие имена файлов, вы можете работать с любой структурой которая вас устраивает. Мы рекомендуем создать пакет для вашего тестирующего кода и, следовательно, отделить файлы моделей, отображений, форм и любые другие, от кода который будет использоваться для тестов. Например:</p>

<pre>catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
</pre>

<p>В проекте <em>LocalLibrary</em> создайте файловую структуру, указанную выше. Файл <strong>__init__.py</strong> должен быть пустым (так мы говорим Питону, что данная директория является пакетом). Вы можете создать три тестовых файла при помощи копирования и переименования файла-образца <strong>/catalog/tests.py</strong>.</p>

<div class="note">
<p><strong>Примечание:</strong> Скелет тестового файла <strong>/catalog/tests.py</strong> был создан автоматически когда мы выполняли <a href="/en-US/docs/Learn/Server-side/Django/skeleton_website">построение скелета сайта Django</a>. Является абсолютно "легальным" действием - поместить все ваши тесты в данный файл, тем не менее, если вы проводите тесты "правильно", то вы очень быстро придёте к очень большому и неуправляемому файлу тестирования.</p>

<p>Можете удалить данный файл, поскольку больше он нам не понадобится.</p>
</div>

<p>Откройте <strong>/catalog/tests/test_models.py</strong>. Файл должен импортировать <code>django.test.TestCase</code>, как показано ниже:</p>

<pre class="brush: python">from django.test import TestCase

# Поместите ваш код тестов здесь
</pre>

<p>Вы часто будете добавлять соответствующий тестовый класс для каждой модели/отображения/формы с отдельными методами проверки каждой отдельной функциональности. В каких-то случаях вы захотите иметь отдельный класс для тестирования какого-то особого варианта работы, или функциональности, с отдельными функциями тестирования, которые будут проверять элемент/элементы данного варианта (например, мы можем создать отдельный класс тестирования для проверки того, что поле валидно, - функции данного класса будут проверять каждый неверный вариант использования). Опять же, структура файлов и пакетов полностью зависит от вас и будет лучше если вы будете её придерживаться.</p>

<p>Добавьте тестовый класс, показанный ниже, в нижнюю часть файла. Данный класс демонстрирует как создать класс тестирования при помощи наследования от <code>TestCase</code>.</p>

<pre class="brush: python">class YourTestClass(TestCase):

    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)</pre>

<p>Этот класс определяет два метода которые вы можете использовать для дотестовой настройки (например, создание какой-либо модели, или других объектов, которые вам понадобятся):</p>

<ul>
 <li><code>setUpTestData()</code> вызывается каждый раз перед запуском теста на уровне настройки всего класса. Вы должны использовать данный метод для создания объектов, которые не будут модифицироваться/изменяться в каком-либо из тестовых методов.</li>
 <li><code>setUp()</code> вызывается перед каждой тестовой функцией для настройки объектов, которые могут изменяться во время тестов (каждая функция тестирования будет получать "свежую" версию данных объектов).</li>
</ul>

<div class="note">
<p><strong>Примечание</strong>. Классы тестирования также содержат метод <code>tearDown()</code>, который мы пока не используем. Этот метод не особенно полезен для тестирования баз данных, поскольку базовый класс <code>TestCase</code> автоматически разрывает соединения с ними.</p>
</div>

<p>Далее идут несколько методов, которые используют функции <code>Assert</code>, проверяющие условия "истинно" (true), "ложно" (false) или равенство (<code>AssertTrue</code>, <code>AssertFalse</code>, <code>AssertEqual</code>). Если условия не выполняются как ожидалось, то это приводит к провалу теста и выводу соответствующего сообщения об ошибке на консоль.</p>

<p>Функции проверки утверждений <code>AssertTrue</code>, <code>AssertFalse</code>, <code>AssertEqual</code> реализованы в <strong>unittest</strong>.  В данном фреймворке существуют и другие подобные функции, а кроме того, <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#assertions">специфические для Django функции</a> проверки, например, перехода из/к отображению (<code>assertRedirects</code>), проверки использования какого-то конкретного шаблона (<code>assertTemplateUsed</code>) и так далее.</p>

<div class="note">
<p>В обычной ситуации у вас нет необходимости вызывать функции <strong>print()</strong> из методов теста, как во фрагменте выше. Мы поступили так только для того, чтобы вы в консоле увидели порядок вызова тестовых функций класса.</p>
</div>

<h2 id="Как_запускать_тесты">Как запускать тесты</h2>

<p>Простейшим способом запуска всех тестов является применение следующей команды:</p>

<pre class="brush: bash">python3 manage.py test</pre>

<p>Таким образом мы найдём в текущей директории все файлы с именем <strong>test*.py</strong> и запустим все тесты (у нас имеются несколько файлов для тестирования, но на данный момент, только <strong>/catalog/tests/test_models.py</strong> содержит какие-либо тесты). По умолчанию, тесты сообщат что-нибудь, только в случае провала.</p>

<p>Запустите тесты из корневой папки сайта <em>LocalLibrary</em>. Вы должны увидеть вывод, который похож на следующий.</p>

<pre class="brush: bash">&gt;python manage.py test

Creating test database for alias 'default'...
<strong>setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to setup clean data.
Method: test_false_is_false.
.setUp: Run once for every test method to setup clean data.
Method: test_false_is_true.
.setUp: Run once for every test method to setup clean data.
Method: test_one_plus_one_equals_two.</strong>
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...</pre>

<p>Как видите, один тест провалился и мы можем точно увидеть в какой именно функции это произошло и почему (так и было задумано, поскольку <code>False</code> не равен <code>True</code>!).</p>

<div class="note">
<p><strong>Совет: </strong> Самая важная вещь, которую нужно извлечь из тестового выхода выше, заключается в том, что это гораздо более ценно, если вы используете описательные/информативные имена для ваших объектов и методов.</p>
</div>

<p>Текст выделенный жирным, обычно не должен появляться в тестовом выводе (это результат работы функций <code>print()</code> в наших тестах). Он показывает, что вызов метода  <code>setUpTestData()</code> происходит один раз для всего класса в целом, а вызовы<code>setUp()</code> осуществляются перед каждым методом.</p>

<p>Следующий раздел показывает как запускать отдельные тесты и как контролировать процесс вывода информации.</p>

<h3 id="Ещё_больше_тестовой_информации">Ещё больше тестовой информации</h3>

<p>Если вы желаете получать больше информации о тестах вы должны изменить значение параметра <em>verbosity</em>. Например, для вывода списка успешных и неуспешных тестов (и всю информацию о том, как прошла настройка базы данных) вы можете установить значение verbosity равным "2":</p>

<pre class="brush: bash">python3 manage.py test --verbosity 2</pre>

<p>Доступными значениями для verbosity являются  0, 1 (значение по умолчанию), 2 и 3.</p>

<h3 id="Запуск_определённых_тестов">Запуск определённых тестов</h3>

<p>Если вы хотите запустить подмножество тестов, тогда вам надо указать полный путь к вашему пакету, модулю/подмодулю, классу наследнику<code>TestCase</code>, или методу:</p>

<pre class="brush: bash">python3 manage.py test catalog.tests   # Run the specified module
python3 manage.py test catalog.tests.test_models  # Run the specified module
python3 manage.py test catalog.tests.test_models.YourTestClass # Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two  # Run the specified method
</pre>

<h2 id="Тестирование_LocalLibrary">Тестирование LocalLibrary</h2>

<p>Теперь, когда мы знаем как запустить наши тесты и что именно мы должны тестировать, давайте рассмотрим некоторые практические примеры.</p>

<div class="note">
<p><strong>Примечание: </strong>Мы не будем расписывать все тесты, а просто покажем вам пример того, как они должны работать и что ещё вы можете с ними сделать.</p>
</div>

<h3 id="Модели">Модели</h3>

<p>Как было отмечено ранее, мы должны тестировать все то, что является частью нашего кода, а не библиотеки/код, которые уже были протестированы командами разработчиков Django, или Python.</p>

<p>Рассмотрим модель <code>Author</code>. Мы должны провести тесты текстовых меток всех полей, поскольку, даже несмотря на то, что не все они определены, у нас есть проект, в котором сказано, что все их значения должны быть заданы. Если мы не проведём их тестирование, тогда мы не будем знать, что данные метки действительно содержат необходимые значения. Мы уверены в том, что Django создаст поле заданной длины, таким образом наши тесты будут проверять нужный нам размер поля, а заодно и его содержимое.</p>

<pre class="brush: python">class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)</pre>

<p>Откройте файл <strong>/catalog/tests/test_models.py</strong> и замените все его содержимое кодом, приведённом во фрагменте для тестирования модели <code>Author</code> (фрагмент представлен ниже).</p>

<p>В первой строке мы импортируем класс <code>TestCase</code>, а затем наследуемся от него, создавая класс с описательным именем (<code>AuthorModelTest</code>), оно поможет нам идентифицировать места провалов в тестах во время вывода информации на консоль. Затем мы создаём метод <code>setUpTestData()</code>, в котором создаём объект автора, который мы будем использовать в тестах, но нигде не будем изменять.</p>

<pre class="brush: python">from django.test import TestCase

# Create your tests here.

from catalog.models import Author

class AuthorModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label,'first name')

    def test_date_of_death_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEquals(field_label,'died')

    def test_first_name_max_length(self):
        author=Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEquals(max_length,100)

    def test_object_name_is_last_name_comma_first_name(self):
        author=Author.objects.get(id=1)
        expected_object_name = '%s, %s' % (author.last_name, author.first_name)
        self.assertEquals(expected_object_name,str(author))

    def test_get_absolute_url(self):
        author=Author.objects.get(id=1)
        #This will also fail if the urlconf is not defined.
        self.assertEquals(author.get_absolute_url(),'/catalog/author/1')</pre>

<p>Тесты полей проверяют значения текстовых меток (<code>verbose_name</code>), включая их ожидаемую длину. Все методы имеют описательные имена, а их логика придерживается одной и той же структуры:</p>

<pre class="brush: python"># Получение объекта для тестирования
author=Author.objects.get(id=1)

# Получение метаданных поля для получения необходимых значений
field_label = author._meta.get_field('first_name').verbose_name

# Сравнить значение с ожидаемым результатом
self.assertEquals(field_label,'first name')  </pre>

<p>Интересно отметить следующее:</p>

<ul>
 <li>Мы не можем получить поле <code>verbose_name</code> напрямую через <code>author.first_name.verbose_name</code>, потому что <code>author.first_name</code> является <em>строкой</em>. Вместо этого, нам надо использовать атрибут <code>_meta</code> объекта автора для получения того экземпляра поля, который будет использоваться для получения дополнительной информации.</li>
 <li>Мы выбрали метод <code>assertEquals(field_label,'first name')</code> вместо  <code>assertTrue(field_label == 'first name')</code>, потому что, в случае провала теста, в выводе будет указано какое именно значение содержит метка и это немного облегчит нам задачу по отладке кода.</li>
</ul>

<div class="note">
<p><strong>Примечание:</strong> Тесты для текстовых меток <code>last_name</code> и <code>date_of_birth</code>, а также тест длины поля <code>last_name</code> были опущены. Добавьте свою версию этих тестов,  соблюдая соглашение об именовании и следуя структуре логики, представленной выше.</p>
</div>

<p>Кроме того, нам надо провести тесты наших собственных методов. Они просто проверяют, что имена объектов имеют следующие значения "Last Name, First Name" и что URL-адрес, по которому мы получаем экземпляр <code>Author</code>, такой как ожидается.</p>

<pre class="brush: python">def test_object_name_is_last_name_comma_first_name(self):
    author=Author.objects.get(id=1)
    expected_object_name = '%s, %s' % (author.last_name, author.first_name)
    self.assertEquals(expected_object_name,str(author))

def test_get_absolute_url(self):
    author=Author.objects.get(id=1)
    #This will also fail if the urlconf is not defined.
    self.assertEquals(author.get_absolute_url(),'/catalog/author/1')</pre>

<p>Теперь запустите тесты. Если вы создали модель Author, в соответствии с разделом о моделях данного руководства, то весьма вероятно, что вы получите сообщение об ошибке для метки <code>date_of_death</code>, как показано ниже. Тест провалился потому что, в соответствии с соглашением Django, первый символ имени метки должен быть в верхнем регистре (Django делает это автоматически).</p>

<pre class="brush: bash">======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEquals(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^</pre>

<p>Это несущественный баг, но он демонстрирует нам то, что написание тестов может более тщательно проверить все неточности, которые вы можете сделать.</p>

<div class="note">
<p><strong>Примечание: </strong>Измените значение метки для поля date_of_death (/catalog/models.py) на "died" и перезапустите тесты.</p>
</div>

<p>Тот же подход применяется к тестированию других моделей. Самостоятельно создайте свои собственные тесты для оставшихся моделей.</p>

<h3 id="Формы">Формы</h3>

<p>Смысл проведения тестов для форм тот же, что и для моделей; надо проверить весь собственный код и другие особенности проекта, но не то, что касается фреймворка, или сторонних библиотек.</p>

<p>В основном это означает, что вы должны протестировать то, что формы имеют соответствующие поля и что они показываются с соответствующими метками и вспомогательными текстами. Вам не надо проверять то, что Django правильно осуществляет валидацию полей (если только вы не создали своё собственное поле и валидацию) — то есть вам не надо проверять что, например, поле ввода электронного адреса принимает только электронного адреса. Но вы должны протестировать каждую дополнительную валидацию, которую вы добавляете для полей и любые сообщения, который ваш код генерирует в случае ошибок.</p>

<p>Рассмотрим форму для обновления книг. Она имеет только одно поле обновления даты, которое будет иметь текстовую метку и вспомогательный текст, который вам надо проверить.</p>

<pre class="brush: python">class RenewBookForm(forms.Form):
    """
    Форма обновления книг для библиотекарей
    """
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        #Проверка, что дата не в прошлом.
        if data &lt; datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))
        #Если дата в "далёком" будущем (+4 недели)
        if data &gt; datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Всегда надо возвращать очищенные данные.
        return data</pre>

<p>Откройте файл <strong>/catalog/tests/test_forms.py</strong> и замените весь существующий в нем код, следующим кодом теста для формы <code>RenewBookForm</code>. Мы начали его с импорта нашей формы и некоторых библиотек Python и Django, которые помогут нам провести тесты. Затем, тем же способом как мы делали для моделей, объявляем тестовый класс нашей формы, то есть применяя описательное имя класс наследника <code>TestCase</code>.</p>

<pre class="brush: python">from django.test import TestCase

# Создайте ваши тесты здесь

import datetime
from django.utils import timezone
from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):

    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label == None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text,'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.now() + datetime.timedelta(weeks=4)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertTrue(form.is_valid())
</pre>

<p>Первые две функции проверяют текст который должны содержать поля <code>label</code> и <code>help_text</code>. Доступ к полю мы получаем при помощи словаря (то есть, <code>form.fields['renewal_date']</code>). Отметим, что мы должны проверять содержит ли метка значение <code>None</code>, иначе в поле текста метки вы увидите "<code>None</code>".</p>

<p>Оставшиеся функции проверяют валидность дат, то есть их нахождение внутри определённого интервала, а также невалидность для значений, которые находятся вне заданного интервала. Для получения исходного значения мы использовали функцию получения текущей даты (<code>datetime.date.today()</code>), а также функцию <code>datetime.timedelta()</code> (которая принимает определённое число дней, или недель). Затем мы просто создали форму, передавая ей наши данные и проверяя её на валидность.</p>

<div class="note">
<p><strong>Примечание:</strong> В данном примере мы не использовали ни базу данных, ни тестовый клиент. Рассмотрите модификацию этих тестов при помощи класса <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.SimpleTestCase">SimpleTestCase</a>.</p>

<p>Нам также надо бы проверять возникновение ошибок, которые появляются если форма не валидна. Но, обычно, это относится к процессу вывода информации, таким образом, мы позаботимся об этом в следующем разделе.</p>
</div>

<p>На этом с формами можно закончить; у нас имеются и другие тесты, но они были созданы обобщёнными классами отображения для редактирования! Запустите тесты и убедитесь, что наш код все ещё им соответствует!</p>

<h3 id="Отображения">Отображения</h3>

<p>Для проверки поведения отображения мы используем тестовый клиент Django <a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.Client">Client</a>. Данный класс действует как упрощённый веб-браузер который мы применяем для имитации  <code>GET</code> и <code>POST</code> запросов и проверки ответов. Про ответы мы можем узнать почти все, начиная с низкоуровневого HTTP (итоговые заголовки и коды статусов) и вплоть до применяемых шаблонов, которые используются для HTML-рендера, а также контекста, который передаётся в соответствующий  шаблон. Кроме того, мы можем отследить последовательность перенаправлений (если имеются), проверить URL-адреса и коды статусов на каждом шаге. Все это позволит нам проверить, что каждое отображение выполняет то, что ожидается.</p>

<p>Давайте начнём с одного из простейших отображений которое возвращает список всех авторов. Вы можете его увидеть по URL-адресу <strong>/catalog/authors/</strong> (данный URL-адрес можно найти в разделе приложения catalog,  в файле настроек urls.py по имени  'authors').</p>

<pre class="brush: python">class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
</pre>

<p>Поскольку это обобщённое отображение списка, то почти все за нас делает Django. Если вы доверяете Django, то единственной вещью, которую вам нужно протестировать, является переход к данному отображению по указанному URL-адресу. Таким образом, если вы применяете методику TDD (test-driven development, разработка через тесты), то начните проект с написания тестов, которые будут проверять, что данное отображение выводит всех авторов и, к тому же, например, блоками по 10.</p>

<p>Откройте файл <strong>/catalog/tests/test_views.py</strong> замените все его содержимое на следующий код теста для класса <code>AuthorListView</code>. Как и ранее, мы импортируем нашу модель и некоторые полезные классы. В методе <code>setUpTestData()</code> мы задаём число объектов класса <code>Author</code> которые мы тестируем при постраничном выводе.</p>

<pre class="brush: python">from django.test import TestCase

# Create your tests here.

from catalog.models import Author
from django.urls import reverse

class AuthorListViewTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Create 13 authors for pagination tests
        number_of_authors = 13
        for author_num in range(number_of_authors):
            Author.objects.create(first_name='Christian %s' % author_num, last_name = 'Surname %s' % author_num,)

    def test_view_url_exists_at_desired_location(self):
        resp = self.client.get('/catalog/authors/')
        self.assertEqual(resp.status_code, 200)

    def test_view_url_accessible_by_name(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)

    def test_view_uses_correct_template(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)

        self.assertTemplateUsed(resp, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('is_paginated' in resp.context)
        self.assertTrue(resp.context['is_paginated'] == True)
        self.assertTrue( len(resp.context['author_list']) == 10)

    def test_lists_all_authors(self):
        #Get second page and confirm it has (exactly) remaining 3 items
        resp = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('is_paginated' in resp.context)
        self.assertTrue(resp.context['is_paginated'] == True)
        self.assertTrue( len(resp.context['author_list']) == 3)</pre>

<p>Все тесты используют клиент (принадлежащего классу <code>TestCase</code>, от которого мы наследовались) для имитации <code>GET</code>-запроса и получения ответа (<code>resp</code>). Первая версия проверяет заданный URL-адрес (заметьте, - просто определённый путь без указания домена), в то время как второй генерирует URL-адрес при помощи его имени, указанного в настройках.</p>

<pre class="brush: python">resp = self.client.get('/catalog/authors/')
resp = self.client.get(reverse('authors'))
</pre>

<p>Когда мы получаем ответ, то мы извлекаем код статуса, используемый шаблон, "включён" ли постраничный вывод, количество элементов в подмножестве (на странице) и общее число элементов.</p>

<p>Наиболее интересной переменной является <code>resp.context</code>, которая является объектом контекста, который передаётся шаблону из отображения. Он (объект контекста) очень полезен для тестов, поскольку позволяет нам убедиться, что наш шаблон получает все данные которые ему необходимы. Другими словами мы можем проверить, что мы используем правильный шаблон с данными, которые проделывают долгий путь проверок чтобы соответствовать данному шаблону.</p>

<h4 id="Отображения_и_регистрация_пользователей">Отображения и регистрация пользователей</h4>

<p>В некоторых случаях вам нужно провести тесты отображений к которым имеют доступ только зарегистрированные пользователи. Например, <code>LoanedBooksByUserListView</code> очень похоже на наше предыдущее отображение, но доступно только для залогинившихся пользователей и показывает только те записи (<code>BookInstance)</code>, которые соответствуют текущему пользователю, имеют статус 'on loan' (книга взята домой), а также забронированы.</p>

<pre class="brush: python">from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """
    Обобщённый класс отображения списка взятых книг текущим пользователем
    """
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')</pre>

<p>Добавьте тестовый код следующего фрагмента в <strong>/catalog/tests/test_views.py</strong>. В нем, для создания нескольких аккаунтов и  объектов <code>BookInstance</code> которые будут использоваться в дальнейших тестах, мы используем метод <code>SetUp()</code> (вместе с соответствующими книгами и другими записями). Половина книг бронируется  тестовыми пользователями, но в начале для них всех мы устанавливаем статус "доступно". Использование метода <code>SetUp()</code> предпочтительнее чем <code>setUpTestData()</code>, поскольку в дальнейшем мы будем модифицировать некоторые объекты.</p>

<div class="note">
<p><strong>Примечание:</strong> Метод <code>setUp()</code> создаёт книгу с заданным языком <code>Language</code>, но <em>ваш</em> код может не включать в себя модель <code>Language</code>, поскольку это было <em>домашним заданием</em>. В таком случае просто закомментируйте соответствующие строки. Поступите также и в следующем разделе, посвящённом <code>RenewBookInstancesViewTest.</code></p>
</div>

<pre class="brush: python">import datetime
from django.utils import timezone

from catalog.models import BookInstance, Book, Genre, Language
from django.contrib.auth.models import User # Необходимо для представления User как borrower

class LoanedBookInstancesByUserListViewTest(TestCase):

    def setUp(self):
        # Создание двух пользователей
        test_user1 = User.objects.create_user(username='testuser1', password='12345')
        test_user1.save()
        test_user2 = User.objects.create_user(username='testuser2', password='12345')
        test_user2.save()

        # Создание книги
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(title='Book Title', summary = 'My book summary', isbn='ABCDEFG', author=test_author, language=test_language)
        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Присвоение типов many-to-many напрямую недопустимо
        test_book.save()

        # Создание 30 объектов BookInstance
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date= timezone.now() + datetime.timedelta(days=book_copy%5)
            if book_copy % 2:
                the_borrower=test_user1
            else:
                the_borrower=test_user2
            status='m'
            BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=the_borrower, status=status)

    def test_redirect_if_not_logged_in(self):
        resp = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(resp, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        # Проверка что пользователь залогинился
        self.assertEqual(str(resp.context['user']), 'testuser1')
        # Проверка ответа на запрос
        self.assertEqual(resp.status_code, 200)

        # Проверка того, что мы используем правильный шаблон
        self.assertTemplateUsed(resp, 'catalog/bookinstance_list_borrowed_user.html')
</pre>

<p>Если пользователь не залогирован то, чтобы убедиться в том что отображение перейдёт на страницу входа (логирования), мы используем метод <code>assertRedirects</code>, что продемонстрировано в методе <code>test_redirect_if_not_logged_in()</code>. Затем мы осуществляем вход для пользователя и проверяем что полученный статус <code>status_code</code> равен 200 (успешно). </p>

<p>Остальные тесты проверяют, соответственно, что наше отображение показывает только те книги которые взяты текущим пользователем. Скопируйте код, показанный ниже, в нижнюю часть предыдущего класса.</p>

<pre class="brush: python">    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        #Проверка, что пользователь залогинился
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Check that we got a response "success"
        self.assertEqual(resp.status_code, 200)

        #Проверка, что изначально у нас нет книг в списке
        self.assertTrue('bookinstance_list' in resp.context)
        self.assertEqual( len(resp.context['bookinstance_list']),0)

        #Теперь все книги "взяты на прокат"
        get_ten_books = BookInstance.objects.all()[:10]

        for copy in get_ten_books:
            copy.status='o'
            copy.save()

        #Проверка, что все забронированные книги в списке
        resp = self.client.get(reverse('my-borrowed'))
        #Проверка, что пользователь залогинился
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Проверка успешности ответа
        self.assertEqual(resp.status_code, 200)

        self.assertTrue('bookinstance_list' in resp.context)

        #Подтверждение, что все книги принадлежат testuser1 и взяты "на прокат"
        for bookitem in resp.context['bookinstance_list']:
            self.assertEqual(resp.context['user'], bookitem.borrower)
            self.assertEqual('o', bookitem.status)

    def test_pages_ordered_by_due_date(self):

        #Изменение статуса на "в прокате"
        for copy in BookInstance.objects.all():
            copy.status='o'
            copy.save()

        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        #Пользователь залогинился
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Check that we got a response "success"
        self.assertEqual(resp.status_code, 200)

        #Подтверждение, что из всего списка показывается только 10 экземпляров
        self.assertEqual( len(resp.context['bookinstance_list']),10)

        last_date=0
        for copy in resp.context['bookinstance_list']:
            if last_date==0:
                last_date=copy.due_back
            else:
                self.assertTrue(last_date &lt;= copy.due_back)</pre>

<p>Если хотите, то вы, безусловно, можете добавить тесты проверяющие постраничный вывод!</p>

<h4 id="Тестирование_форм_и_отображений">Тестирование форм и отображений</h4>

<p>Процесс тестирования отображений с формами немного более сложен, чем в представленных ранее случаях, поскольку вам надо протестировать большее количество кода: начальное состояние показа формы, показ формы и её данных в случае ошибок, а также показ формы в случае успеха. Хорошей новостью является то, что мы применяем клиент для тестирования практически тем же способом, как мы делали это в случае отображений, которые отвечают только за вывод информации.</p>

<p>В качестве демонстрации давайте напишем некоторые тесты для отображения, которые отвечают за обновление книг(<code>renew_book_librarian()</code>):</p>

<pre class="brush: python">from .forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """
    Функция отображения обновления экземпляра BookInstance библиотекарем
    """
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # Если это POST-запрос, тогда обработать данные формы
    if request.method == 'POST':

        # Создать объект формы и заполнить её данными из запроса (связывание/биндинг):
        form = RenewBookForm(request.POST)

        # Проверка валидности формы:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # переход по URL-адресу:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # Если это GET-запрос (или что-то ещё), то создаём форму по умолчанию
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})</pre>

<p>Нам надо проверить что к данному отображению имеют доступ только те пользователи, которые имеют разрешение типа <code>can_mark_returned</code>, а кроме того, что пользователи перенаправляются на страницу ошибки HTTP 404  если они пытаются обновить экземпляр книги  <code>BookInstance</code>, который не существует. Мы должны проверить что начальное значение формы соответствует дате через 3 недели в будущем, а также то, что если форма прошла валидацию, то мы переходим на страницу отображения книг "all-borrowed" (забронированных). Для тестов, отвечающих за проверку "провалов", мы также должны удостовериться что они отправляют соответствующие сообщения об ошибках.</p>

<p>В нижнюю часть файла <strong>/catalog/tests/test_views.py</strong> добавьте класс тестирования (показан во фрагменте, ниже). Он создаёт двух пользователей и два экземпляра книги, но только один пользователь получает необходимый доступ к соответствующему отображению. Код, который "присваивает" соответствующий доступ, выделен в коде жирным:</p>

<pre class="brush: python">from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):

    def setUp(self):
        #Создание пользователя
        test_user1 = User.objects.create_user(username='testuser1', password='12345')
        test_user1.save()

        test_user2 = User.objects.create_user(username='testuser2', password='12345')
        test_user2.save()
<strong>        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()</strong>

        #Создание книги
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(title='Book Title', summary = 'My book summary', isbn='ABCDEFG', author=test_author, language=test_language,)
        #Создание жанра Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre=genre_objects_for_book
        test_book.save()

        #Создание объекта BookInstance для для пользователя test_user1
        return_date= datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1=BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=test_user1, status='o')

        #Создание объекта BookInstance для для пользователя test_user2
        return_date= datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2=BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=test_user2, status='o')</pre>

<p>В нижнюю часть класса тестирования добавьте следующие методы (из следующего фрагмента). Они проверяют, что только пользователь с соответствующим доступом (<em>testuser2</em>) имеет доступ к отображению. Мы проверяем все случаи: когда пользователь не залогинился, когда залогинился, но не имеет соответствующего доступа, когда имеет доступ, но не является заёмщиком книги (тест должен быть успешным), а также, что произойдёт если попытаться получить доступ к книге <code>BookInstance</code> которой не существует. Кроме того, мы проверяем то, что используется правильный (необходимый) шаблон.</p>

<pre class="brush: python">    def test_redirect_if_not_logged_in(self):
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        #Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual( resp.status_code,302)
        self.assertTrue( resp.url.startswith('/accounts/login/') )

    def test_redirect_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )

        #Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual( resp.status_code,302)
        self.assertTrue( resp.url.startswith('/accounts/login/') )

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance2.pk,}) )

        #Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual( resp.status_code,200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )

        #Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual( resp.status_code,200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        import uuid
        test_uid = uuid.uuid4() #unlikely UID to match our bookinstance!
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid,}) )
        self.assertEqual( resp.status_code,404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        self.assertEqual( resp.status_code,200)

        #Check we used correct template
        self.assertTemplateUsed(resp, 'catalog/book_renew_librarian.html')
</pre>

<p>Добавьте ещё один тестовый метод, показанный ниже. Он проверяет что начальная дата равна трём неделям в будущем. Заметьте, что мы имеем возможность получить доступ к начальному значению из поля формы (выделено жирным).</p>

<pre class="brush: python">    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        self.assertEqual( resp.status_code,200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(<strong>resp.context['form'].initial['renewal_date']</strong>, date_3_weeks_in_future )
</pre>

<p>Следующий тест (тоже добавьте его в свой класс) проверяет что отображение, в случае успеха, перенаправляет пользователя к списку всех забронированных книг. Здесь мы показываем как при помощи клиента вы можете создать и передать данные в <code>POST</code>-запросе. Данный запрос передаётся вторым аргументом в пост-функцию и представляет из себя словарь пар ключ/значение.</p>

<pre class="brush: python">    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='12345')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        resp = <strong>self.client.<em>post</em>(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future} )</strong>
        self.assertRedirects(resp, reverse('all-borrowed') )
</pre>

<div class="warning">
<p>Вместо перехода к отображению <em>all-borrowed</em>, добавленного в качестве <em>домашнего задания</em>, вы можете перенаправить пользователя на домашнюю страницу '/'. В таком случае, исправьте две последние строки тестового кода на код, показанный ниже. Присваивание <code>follow=True</code>, в запросе, гарантирует что запрос вернёт окончательный URL-адрес пункта назначения (следовательно проверяется <code>/catalog/</code>, а не <code>/</code>).</p>

<pre class="brush: python"> resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future},<strong>follow=True</strong> )
 <strong>self.assertRedirects(resp, '/catalog/')</strong></pre>
</div>

<p>Скопируйте две последние функции в класс, представленные ниже. Они тоже проверяют  <code>POST</code>-запросы, но для случая неверных дат. Мы используем функцию <code>assertFormError()</code>, чтобы проверить сообщения об ошибках.</p>

<pre class="brush: python">    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='12345')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':date_in_past} )
        self.assertEqual( resp.status_code,200)
        <strong>self.assertFormError(resp, 'form', 'renewal_date', 'Invalid date - renewal in past')</strong>

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='12345')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':invalid_date_in_future} )
        self.assertEqual( resp.status_code,200)
        <strong>self.assertFormError(resp, 'form', 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')</strong>
</pre>

<p>Такие же способы тестирования могут применяться для проверок других отображений.</p>

<h3 id="Шаблоны">Шаблоны</h3>

<p>Django предоставляет API для тестирования, которое проверяет что функции отображения вызывают правильные шаблоны, а также позволяют убедиться, что им передаётся соответствующая информация. Кроме того, в Django имеется возможность использовать сторонние API для проверок того, что ваш HTML показывает то, что надо.</p>

<h2 id="Другие_рекомендованные_инструменты_для_тестирования">Другие рекомендованные инструменты для тестирования</h2>

<p>Django фреймворк для тестирования помогает вам создавать эффективные юнит- и интеграционные тесты — мы рассмотрели только небольшую часть того, что может делать фреймворк <strong>unittest</strong> и совсем не упоминали дополнения Django (например, посмотрите на модуль <a href="https://docs.python.org/3.5/library/unittest.mock-examples.html">unittest.mock</a>, который подключает сторонние библиотеки тестирования).</p>

<p>Из всего множества сторонних инструментов тестирования, мы кратко опишем возможности двух:</p>

<ul>
 <li><a href="http://coverage.readthedocs.io/en/latest/">Coverage</a>: Это инструмент Python, который формирует отчёты о том, какое количество кода выполняется во время проведения тестов. Это полезно для уточнения степени "покрытия" кода тестами.</li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment">Selenium</a> это фреймворк проведения автоматического тестирования в настоящем браузере. Он позволяет вам имитировать взаимодействие пользователя с вашим сайтом (что является следующим шагом в проведении интеграционных тестов).</li>
</ul>

<h2 id="Домашняя_работы">Домашняя работы</h2>

<p>Существуют другие модели и отображения, которые мы могли бы протестировать. В качестве простого упражнения, попробуйте создать тестовый вариант для отображения <code>AuthorCreate</code>.</p>

<pre class="brush: python">class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = '__all__'
    initial={'date_of_death':'12/10/2016',}
    permission_required = 'catalog.can_mark_returned'</pre>

<p>Помните, - вам надо проверить все, что касается вашего кода, или структуры. Это включает в себя: кто имеет доступ к отображению, начальную дату, применяемый шаблон, а также перенаправление из отображения в случае успеха.</p>

<h2 id="Итоги">Итоги</h2>

<p>Написание тестов не является ни весельем, ни развлечением и, соответственно, при создании сайтов часто остаётся напоследок (или вообще не используется). Но тем не менее, они являются действенным механизмом, который позволяет вам убедиться, что ваш код в находится безопасности, даже если в него добавляются какие-либо изменения. Кроме того, тесты повышают эффективность поддержки вашего кода.</p>

<p>В данном руководстве мы продемонстрировали вам принципы написания тестов для ваших моделей, форм и отображений. Мы кратко перечислили что именно необходимо тестировать, что обычно сложно выявить в самом начале разработки. Существует много аспектов которые необходимо изучить, но даже с тем что мы уже узнали, вы имеете возможность создавать эффективные юнит-тесты для значительного улучшения процесса разработки.</p>

<p>Следующая и последняя часть руководства покажет вам как запустить ваш чудесный (и полностью протестированный!) веб-сайт Django.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://docs.djangoproject.com/en/1.10/topics/testing/overview/">Написание и запуск тестов</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/1.10/intro/tutorial05/">Написание вашего первого приложения Django, часть 5 &gt; Введение в автоматическое тестирование</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/1.10/topics/testing/tools/">Инструменты для тестирования</a> (Django docs)</li>
 <li><a href="https://docs.djangoproject.com/en/1.10/topics/testing/advanced/">Продвинутое тестирование</a> (Django docs)</li>
 <li><a href="http://toastdriven.com/blog/2011/apr/10/guide-to-testing-in-django/">Путеводитель по тестированию в Django</a> (Toast Driven Blog, 2011)</li>
 <li><a href="http://test-driven-django-development.readthedocs.io/en/latest/index.html">Мастерская: Разработка через тесты с Django (TDD)</a> (San Diego Python, 2014)</li>
 <li><a href="https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/">Тестирование в Django (Часть 1) - Лучшие практики и Примеры </a>(RealPython, 2013)</li>
</ul>

<p>{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}</p>
