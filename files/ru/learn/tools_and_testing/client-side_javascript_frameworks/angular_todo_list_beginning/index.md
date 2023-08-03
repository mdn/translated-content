---
title: Начинаем приложение списка дел с использованием Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Сейчас мы готовы приступить к созданию приложения списка дел с использованием Angular. Готовое приложение будет отображать список дел, позволять редактировать, удалять и добавлять элементы. В этой статье вы познакомитесь со структурой приложения и поработаете над базовым отображением списка дел.

| Необходимые условия: | Понимание основ [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), и [JavaScript](/ru/docs/Learn/JavaScript), знание [терминала/командной строки](/ru/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Создать базовую структуру приложения, сделать так, чтобы оно отображало список дел, и понять фундаментальные концепции Angular: структуру компонентов, совместное использование данных между компонентами и использование циклов вывода данных. |

## Структура приложения списка дел

Как и в приложении без фреймворка, в Angular-приложении есть `index.html`.
Тэг `<body>` в `index.html`, содержит специальный Angular-элемент — `<app-root>` — для вставки вашего основного компонента, который включает в себя другие компоненты, которые вы создаете.
Обычно, вам не нужно работать с `index.html`, вместо этого сфокусируйтесь на работе со специальными элементами вашего приложения — компонентами.

### Организация приложения с помощью компонентов

Компоненты — это основной структурный элемент Angular-приложений. Приложение со списком дел состоит из двух компонентов — компонента-основы для вашего приложения и компонента для обработки элементов списка дел.

Каждый компонент состоит из класса TypeScript, HTML и CSS. TypeScript транспилируется в JavaScript — это означает, что ваше приложение в конечном итоге преобразуется в JavaScript, но вы можете использовать расширенные функции Typescript и оптимизированный синтаксис.

### Динамическое изменение UI с помощью \*ngIf и \*ngFor

В этом руководстве также рассматриваются две важные директивы Angular для динамического изменения структуры DOM. Директива похожа на команду, которую вы можете использовать в своем HTML, чтобы повлиять на изменения в вашем приложении.

Первая директива, рассматриваемая в этом руководстве — это Angular-итератор, `*ngFor`.
`*ngFor` дает возможность динамически создавать DOM-элементы на основе элементов массива.

Вторая директива, которую вы изучите в этом руководстве — это `*ngIf`.
Вы можете использовать `*ngIf` для добавления или удаления элементов из DOM в зависимости от условия.
Например, если пользователи хотят отредактировать элемент в списке дел, вы можете предоставить им средства для редактирования этого элемента.
Если они не хотят редактировать элемент, вы можете удалить элементы для редактирования.

### Обмен данными между компонентами

В этом приложении вы работаете с обменом данными между компонентами. Чтобы добавить новый элемент в список дел, главный компонент должен отправить новый элемент второму компоненту. Этот второй компонент управляет элементами и заботится о редактировании, отметке выполненных и удалении элементов.

Обмен данными между Angular-компонентами происходит с помощью специальных декораторов, называемых `@Input()` и `@Output()`.
Эти декораторы указывают, что определенные свойства могут получать или отправлять данные. Использование `@Output()` означает, что вы вызываете событие в одном компоненте, чтобы оповестить другой компонент об изменении данных.

## Определение элемента

В директории `app`, создайте новый файл и назовите его `item.ts`, затем поместите туда следующее:

```js
export interface Item {
  description: string;
  done: boolean;
}
```

`Item` как `interface` описывает `item` как объект, чтобы приложение могло понимать, что такое `item` и как с ним взаимодействовать.
Для нашего списка дел, `item` это объект у которого есть описание (description) и он может быть выполнен (done).

## Добавление логики в AppComponent

Теперь, когда выше приложение знает, что такое `item`, вы можете добавить несколько элементов в `app.component.ts`.
В `app.component.ts` замените содержимое на:

```js
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

}
```

Первая строка — это импорт JavaScript, который импортирует Angular .
`@Component()` декоратор описывает метаданные `AppComponent`.
Свойства метаданных по умолчанию следующие:

- `selector`: Сообщает имя селектора CSS, который используется в шаблоне для создания экземпляра этого компонента. Тут это `'app-root'`.
  В `index.html` внутри тэга `body`, Angular CLI добавляет `<app-root></app-root>` когда генерирует приложение.
  Вы можете использовать селекторы компонентов точно так же, добавляя их к другим HTML-шаблонам компонентов.
- `templateUrl`: Задает HTML-файл, который нужно связать с этим компонентом. .
  Тут это './app.component.html',
- `styleUrls`: Предоставляет расположение и имя файла для стилей, которые применяются конкретно к этому компоненту. Тут это `'./app.component.css'`.

Свойство `filter` имеет тип `union`, это значит, что `filter` может принимать значения: `all`, `active` или `done`.
С типом `union`, если вы опечатаетесь в значении, которое присваиваете свойству `filter`, TypeScript сообщит об этом, чтобы вы могли вовремя отловить ошибку.
В этом руководстве показано, как добавить фильтрацию на более позднем этапе, но вы также можете использовать фильтр, чтобы отобразить список всех элементов по умолчанию.

Массив `allItems` содержит текущие дела, в том числе и выполненные (`done`).
Первый элемент, `eat`, имеет значение свойства `done: true`.

Геттер, `get items()`, извлекает все элементы из массива `allItems` если `filter` имеет значение `all`.
Иначе, `get items()` возвращает завершенные (`done: true`) или незавершенные (`done: false`) элементы в зависимости от того, как пользователь фильтрует представление.
Геттер так же устанавливает `items` как имя массива, которое вы будете использовать в следующем блоке.

## Добавление HTML-шаблона для AppComponent

Чтобы увидеть список элементов в браузере, замените содержимое `app.component.html` на следующий HTML:

```html
<div class="main">
  <h1>My To Do List</h1>
  <h2>What would you like to do today?</h2>

  <ul>
    <li *ngFor="let item of items">\{{item.description}}</li>
  </ul>
</div>
```

Тэг `<li>` содержит `*ngFor` — встроенную директива Angular, которая перебирает элементы в массиве `items`.
Для каждого элемента, `*ngFor` создает новый тэг `<li>`.
Двойные фигурные скобки, которые содержат `item.description` сообщают Angular, что нужно заполнить каждый тэг `<li>` текстом из item's description.

В браузере вы должны увидеть список элементов:

```
My To Do List
What would you like to do today?

* eat
* sleep
* play
* laugh
```

## Добавление элементов в список

С список дел нужно добавлять элементы.

Добавьте в `app.component.ts`, следующий метод класса:

```js
addItem(description: string) {
  this.allItems.unshift({
    description,
    done: false
  });
}
```

Метод `addItem()` принимает элемент, который предоставляет пользователь, и добавляет его в массив, когда пользователь нажимает кнопку **Add**. `addItem()` использует метод массива `unshift()` чтобы добавить новый элемент в начало массива и, соответственно, начало списка.
Вы можете использовать метод `push()`, который добавит новый элемент в конец массива и, соответственно, конец списка.

Для того, чтобы использовать метод `addItem()`, отредактируйте HTML в шаблоне `AppComponent`.

В `app.component.html`, замените `<h2>` на следующее:

```js
<label for="addItemInput">What would you like to do today?</label>

<input
  #newItem
  placeholder="add an item"
  (keyup.enter)="addItem(newItem.value); newItem.value = ''"
  class="lg-text-input"
  id="addItemInput"
/>

<button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
```

Когда пользователь вводит новый элемент в `<input>` и нажимает **Enter**, метод `addItem()` добавляет значение в массив `items`.
Нажатие **Enter** так же сбрасывает значение в `<input>` на пустую строку.
В качестве альтернативы пользователь может щелкнуть на кнопке **Add**, которая так же вызовет метод `addItem()`.

## Резюме

Сейчас у вас должен быть список дел, отображаемый в вашем браузере. Это большой прогресс! Конечно, нам предстоит еще многое сделать. В следующей статье мы рассмотрим добавление стилей в наше приложение.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## В это модуле

- [Введение в клиентские фреймворки](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Основные функции фреймворков](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Начало работы с React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Начало создания приложения списка дел с React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Компоненты React приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [Интерактивность React: события и состояние](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [Интерактивность React: редактирование, фильтрация, условная отрисовка](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Доступность в React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [Ресурсы по React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Начало работы с Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Структура Ember приложения и компоненты](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Интерактивность Ember: события, классы и состояние](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Интерактивность Ember: функциональность подвала, условная отрисовка](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Маршрутизация в Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ресурсы по Ember и устранение неполадок](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Начало работы с Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Создание вашего первого компонента Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Отрисовка списка Vue компонентов](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Добавление новой формы во Vue: события, методы, и модели](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Стилизация Vue компонентов с CSS](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Использование вычисляемых свойств во Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Условная отрисовка во Vue: Редактирование существующих дел](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Управление фокусом во Vue с помощью refs](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Ресурсы по Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Начало работы со Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Начинаем приложение списка дел c использованием Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Динамическое поведение в Svelte: работа с переменными и пропсами](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Компоненты Svelte приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Продвинутый Svelte: реактивность, жизненный цикл, доступность](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Работа хранилищами в Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Поддержка TypeScript в Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Развертывание и следующие шаги](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Начало работы с Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Начинаем приложение списка дел с использованием Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Стилизация Angular приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Создание компонента элемента (item component)](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Фильтрация списка дел](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Сборка Angular приложений и другие ресурсы](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
