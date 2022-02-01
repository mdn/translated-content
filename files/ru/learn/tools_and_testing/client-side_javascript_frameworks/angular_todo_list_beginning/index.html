---
title: Начинаем приложение списка дел с использованием Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
tags:
  - Новички
  - Фреймворки
  - JavaScript
  - Изучение
  - client-side
  - Angular
  - Компоненты
  - Структура
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<p>Сейчас мы готовы приступить к созданию приложения списка дел с использованием Angular. Готовое приложение будет отображать список дел, позволять редактировать, удалять и добавлять элементы. В этой статье вы познакомитесь со структурой приложения и поработаете над базовым отображением списка дел. </p>

<table>
 <tbody>
  <tr>
    <th scope="row">Необходимые условия:</th>
    <td>Понимание основ <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>, и <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>, знание <a href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">терминала/командной строки</a>.
    </td>
  </tr>
   <th scope="row">Цель:</th>
   <td>Создать базовую структуру приложения, сделать так, чтобы оно отображало список дел, и понять фундаментальные концепции Angular: структуру компонентов, совместное использование данных между компонентами и использование циклов вывода данных. </td>
  </tr>
 </tbody>
</table>

<h2 id="the_to_do_application_structure">Структура приложения списка дел</h2>

<p>Как и в приложении без фреймворка, в Angular-приложении есть <code>index.html</code>.
Тэг <code>&lt;body&gt;</code> в <code>index.html</code>, содержит специальный Angular-элемент — <code>&lt;app-root&gt;</code> — для вставки вашего основного компонента, который включает в себя другие компоненты, которые вы создаете.
Обычно, вам не нужно работать с <code>index.html</code>, вместо этого сфокусируйтесь на работе со специальными элементами вашего приложения — компонентами.</p>

<h3 id="organize_your_application_with_components">Организация приложения с помощью компонентов</h3>

<p>Компоненты — это основной структурный элемент Angular-приложений. Приложение со списком дел состоит из двух компонентов — компонента-основы для вашего приложения и компонента для обработки элементов списка дел. </p>

<p>Каждый компонент состоит из класса TypeScript, HTML и CSS. TypeScript транспилируется в JavaScript — это означает, что ваше приложение в конечном итоге преобразуется в JavaScript, но вы можете использовать расширенные функции Typescript и оптимизированный синтаксис.</p>

<h3 id="dynamically_change_the_ui_with_ngif_and_ngfor">Динамическое изменение UI с помощью *ngIf и *ngFor</h3>

<p>В этом руководстве также рассматриваются две важные директивы Angular для динамического изменения структуры DOM. Директива похожа на команду, которую вы можете использовать в своем HTML, чтобы повлиять на изменения в вашем приложении.</p>

<p>Первая директива, рассматриваемая в этом руководстве — это Angular-итератор, <code>*ngFor</code>.
<code>*ngFor</code> дает возможность динамически создавать DOM-элементы на основе элементов массива.</p>

<p>Вторая директива, которую вы изучите в этом руководстве — это <code>*ngIf</code>.
Вы можете использовать <code>*ngIf</code> для добавления или удаления элементов из DOM в зависимости от условия.
Например, если пользователи хотят отредактировать элемент в списке дел, вы можете предоставить им средства для редактирования этого элемента.
Если они не хотят редактировать элемент, вы можете удалить элементы для редактирования. </p>

<h3 id="share_data_between_components">Обмен данными между компонентами</h3>

<p>В этом приложении вы работаете с обменом данными между компонентами. Чтобы добавить новый элемент в список дел, главный компонент должен отправить новый элемент второму компоненту. Этот второй компонент управляет элементами и заботится о редактировании, отметке выполненных и удалении элементов.</p>

<p>Обмен данными между Angular-компонентами происходит с помощью специальных декораторов, называемых <code>@Input()</code> и <code>@Output()</code>.
Эти декораторы указывают, что определенные свойства могут получать или отправлять данные. Использование <code>@Output()</code> означает, что вы вызываете событие в одном компоненте, чтобы оповестить другой компонент об изменении данных.</p>

<h2 id="define_item-">Определение элемента</h2>

<p>В директории <code>app</code>, создайте новый файл и назовите его <code>item.ts</code>, затем поместите туда следующее:</p>

<pre class="brush: js">export interface Item {
  description: string;
  done: boolean;
}</pre>

<p><code>Item</code> как <code>interface</code> описывает <code>item</code> как объект, чтобы приложение могло понимать, что такое <code>item</code> и как с ним взаимодействовать.
Для нашего списка дел,<code>item</code> это объект у которого есть описание (description) и он может быть выполнен (done).</p>

<h2 id="add_logic_to_appcomponent-">Добавление логики в AppComponent</h2>

<p>Теперь, когда выше приложение знает, что такое <code>item</code>, вы можете добавить несколько элементов в <code>app.component.ts</code>.
В <code>app.component.ts</code> замените содержимое на:</p>

<pre class="brush: js">
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

}</pre>

<p>Первая строка — это импорт JavaScript, который импортирует Angular .
<code>@Component()</code> декоратор описывает метаданные <code>AppComponent</code>.
Свойства метаданных по умолчанию следующие:</p>

<ul>
  <li><code>selector</code>: Сообщает имя селектора CSS, который используется в шаблоне для создания экземпляра этого компонента. Тут это <code>&#39;app-root&#39;</code>.
В <code>index.html</code> внутри тэга <code>body</code>, Angular CLI добавляет <code>&lt;app-root&gt;&lt;/app-root&gt;</code> когда генерирует приложение.
Вы можете использовать селекторы компонентов точно так же, добавляя их к другим HTML-шаблонам компонентов.</li>
  <li><code>templateUrl</code>: Задает HTML-файл, который нужно связать с этим компонентом. .
Тут это &#39;./app.component.html&#39;,</li>
  <li><code>styleUrls</code>: Предоставляет расположение и имя файла для стилей, которые применяются конкретно к этому компоненту. Тут это <code>&#39;./app.component.css&#39;</code>.</li>
</ul>

<p>Свойство <code>filter</code> имеет тип <code>union</code>, это значит, что <code>filter</code> может принимать значения: <code>all</code>, <code>active</code> или <code>done</code>.
С типом <code>union</code>, если вы опечатаетесь в значении, которое присваиваете свойству <code>filter</code>, TypeScript сообщит об этом, чтобы вы могли вовремя отловить ошибку.
В этом руководстве показано, как добавить фильтрацию на более позднем этапе, но вы также можете использовать фильтр, чтобы отобразить список всех элементов по умолчанию.</p>

<p>Массив <code>allItems</code> содержит текущие дела, в том числе и выполненные (<code>done</code>).
Первый элемент, <code>eat</code>, имеет значение свойства <code>done: true</code>.</p>

<p>Геттер, <code>get items()</code>, извлекает все элементы из массива <code>allItems</code> если <code>filter</code> имеет значение <code>all</code>.
Иначе, <code>get items()</code> возвращает завершенные (<code>done: true</code>) или незавершенные (<code>done: false</code>) элементы в зависимости от того, как пользователь фильтрует представление.
Геттер так же устанавливает <code>items</code> как имя массива, которое вы будете использовать в следующем блоке.</p>

<h2 id="add_html_to_the_appcomponent_template">Добавление HTML-шаблона для AppComponent</h2>

<p>Чтобы увидеть список элементов в браузере, замените содержимое <code>app.component.html</code> на следующий HTML:</p>

<pre class="brush: html">&lt;div class="main"&gt;
  &lt;h1&gt;My To Do List&lt;/h1&gt;
  &lt;h2&gt;What would you like to do today?&lt;/h2&gt;

  &lt;ul&gt;
    &lt;li *ngFor="let item of items"&gt;\{{item.description}}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>

<p>Тэг <code>&lt;li&gt;</code> содержит <code>*ngFor</code> — встроенную директива Angular, которая перебирает элементы в массиве <code>items</code>.
Для каждого элемента, <code>*ngFor</code> создает новый тэг <code>&lt;li&gt;</code>.
Двойные фигурные скобки, которые содержат <code>item.description</code> сообщают Angular, что нужно заполнить каждый тэг <code>&lt;li&gt;</code> текстом из item&#39;s description.</p>

<p>В браузере вы должны увидеть список элементов:</p>

<pre>
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
</pre>

<h2 id="add_items_to_the_list">Добавление элементов в список</h2>

<p>С список дел нужно добавлять элементы.</p>

<p>Добавьте в <code>app.component.ts</code>, следующий метод класса:</p>

<pre class="brush: js">addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}</pre>

<p>Метод <code>addItem()</code> принимает элемент, который предоставляет пользователь, и добавляет его в массив, когда пользователь нажимает кнопку  <strong>Add</strong>.<code>addItem()</code> использует метод массива <code>unshift()</code> чтобы добавить новый элемент в начало массива и, соответственно, начало списка.
Вы можете использовать метод <code>push()</code>, который добавит новый элемент в конец массива и, соответственно, конец списка.</p>

<p>Для того, чтобы использовать метод <code>addItem()</code>, отредактируйте HTML в шаблоне <code>AppComponent</code>.</p>

<p>В <code>app.component.html</code>, замените <code>&lt;h2&gt;</code> на следующее:</p>

<pre class="brush: js">&lt;label for="addItemInput"&gt;What would you like to do today?&lt;/label&gt;

&lt;input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput"
/&gt;

&lt;button class="btn-primary" (click)="addItem(newItem.value)"&gt;Add&lt;/button&gt;</pre>

<p>Когда пользователь вводит новый элемент в <code>&lt;input&gt;</code> и нажимает <strong>Enter</strong>, метод <code>addItem()</code> добавляет значение в массив <code>items</code>.
Нажатие <strong>Enter</strong> так же сбрасывает значение в <code>&lt;input&gt;</code> на пустую строку.
В качестве альтернативы пользователь может щелкнуть на кнопке <strong>Add</strong>, которая так же вызовет метод <code>addItem()</code>.</p>


<h2 id="summary">Резюме</h2>

<p>Сейчас у вас должен быть список дел, отображаемый в вашем браузере. Это большой прогресс! Конечно, нам предстоит еще многое сделать. В следующей статье мы рассмотрим добавление стилей в наше приложение.</p>

<div>{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}</div>

<h2 id="In_this_module">В это модуле</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction">Введение в клиентские фреймворки</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features">Основные функции фреймворков</a></li>
 <li>React
  <ul>
   <li><a href="/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">Начало работы с React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning">Начало создания приложения списка дел с React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components">Компоненты React приложения</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state">Интерактивность React: события и состояние</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering">Интерактивность React: редактирование, фильтрация, условная отрисовка</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility">Доступность в React</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">Ресурсы по React</a></li>
  </ul>
 </li>
 <li>Ember
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started">Начало работы с Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization">Структура Ember приложения и компоненты</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state">Интерактивность Ember: события, классы и состояние</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer">Интерактивность Ember: функциональность подвала, условная отрисовка</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing">Маршрутизация в Ember</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources">Ресурсы по Ember и устранение неполадок</a></li>
  </ul>
 </li>
 <li>Vue
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started">Начало работы с Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component">Создание вашего первого компонента Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists">Отрисовка списка Vue компонентов</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models">Добавление новой формы во Vue: события, методы, и модели</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling">Стилизация Vue компонентов с CSS</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties">Использование вычисляемых свойств во Vue</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering">Условная отрисовка во Vue: Редактирование существующих дел</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management">Управление фокусом во Vue с помощью refs</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources">Ресурсы по Vue</a></li>
  </ul>
 </li>
 <li>Svelte
  <ul>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started">Начало работы со Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning">Начинаем приложение списка дел c использованием Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props">Динамическое поведение в Svelte: работа с переменными и пропсами</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components">Компоненты Svelte приложения</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility">Продвинутый Svelte: реактивность, жизненный цикл, доступность</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores">Работа хранилищами в Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript">Поддержка TypeScript в Svelte</a></li>
   <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next">Развертывание и следующие шаги</a></li>
  </ul>
 </li>
 <li>Angular
   <ul>
    <li><a href="/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started">Начало работы с Angular</a></li>
    <li><a href="/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning">Начинаем приложение списка дел с использованием Angular</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling">Стилизация Angular приложения</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component">Создание компонента элемента (item component)</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering">Фильтрация списка дел</a></li>
    <li><a href="/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building">Сборка Angular приложений и другие ресурсы</a></li>
   </ul>
 </li>
</ul>
