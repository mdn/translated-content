---
title: Фильтрация списка дел
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Теперь перейдем к добавлению функционала позволяющего пользователям фильтровать свои задачи, чтобы они могли просматривать активные, завершенные или все элементы.

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые условия:</th>
      <td>
        Понимание основ <a href="/ru/docs/Learn/HTML">HTML</a>, <a href="/ru/docs/Learn/CSS">CSS</a>, и <a href="/ru/docs/Learn/JavaScript">JavaScript</a>, знание <a href="/ru/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">терминала/командной строки
      </td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>Добавить функционал фильтрации к вашему приложению.</td>
    </tr>
  </tbody>
</table>

## Код фильтрации

Фильтрация элементов основана на свойстве `filter`, которое вы ранее добавили в `app.component.ts`:

```js
filter: 'all' | 'active' | 'done' = 'all';
```

Значение фильтра по умолчанию — `all`, но так же может быть `active` или `done`.

## Добавление элементов управления фильтром

В `app.component.html`, добавьте следующий html перед кнопкой **Add** но над разделом, в котором перечислены элементы.
В следующем снипете существующие секции в вашем HTML отмечены комментарии поэтому вы точно можете видеть где разместить кнопки.

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

<!-- Кнопки, которые меняют отображение элементов на все, только активные или только выполненные -->
<div class="btn-wrapper">
  <button
    class="btn btn-menu"
    [class.active]="filter == 'all'"
    (click)="filter = 'all'">
    All
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'active'"
    (click)="filter = 'active'">
    To Do
  </button>

  <button
    class="btn btn-menu"
    [class.active]="filter == 'done'"
    (click)="filter = 'done'">
    Done
  </button>
</div>

<!-- <h2>\{{items.length}} item(s)</h2>
        <ul>... -->
```

Нажатие на кнопки изменяет значение `filter`, что определяет отображаемые элементы `items`, а так же стили, применяемые к активной кнопке.

- Если пользователь нажимает кнопку **All**, то отображаются все элементы.
- Если пользователь нажимает кнопку **To do**, только элементы со значением свойства `done` равным `false` отображаются.
- Если пользователь нажимает кнопку **Done**, только элементы со значением свойства `done` равным `true` отображаются.

Привязка атрибута class, которая происходит с использованием квадратных скобок `[]`, управляет цветом текста кнопок.
Привязка `[class.active]`, применяет класс `active` когда значение `filter` совпадает с выражением.
Например, когда пользователь нажимает кнопку **Done**, которая устанавливает значение `filter` в `done`, выражение привязки класса `filter == 'done'` возвращает `true`.
Когда значение `filter` равно `done`, Angular применяет класс `active` к кнопке **Done**, что делает цвет текста зеленым.
Как только пользователь нажимает одну из других кнопок, значение `filter` больше не `done`, поэтому цвет текста больше не зеленый.

## Резюме

Это было быстро! Поскольку у вас уже был частично реализован код фильтрации в `app.component.ts`, все что вам нужно было сделать — это отредактировать шаблон, чтобы добавить элементы управления для фильтрации. В следующей и последней статье рассматривается, как создать полностью готовое Angular-приложение и предоставляются дополнительные ресурсы для продолжения учебного пути.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## В это модуле

- [Введение в клиентские фреймворки](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Основные функции фреймворков](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Начало работы с React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Начало создания приложения списка дел с React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Компоненты React-приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [Интерактивность React: события и состояние](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [Интерактивность React: редактирование, фильтрация, условная отрисовка](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Доступность в React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [Ресурсы по React](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Начало работы с Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Структура Ember-приложения и компоненты](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Интерактивность Ember: события, классы и состояние](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Интерактивность Ember: функциональность подвала, условная отрисовка](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Маршрутизация в Ember](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ресурсы по Ember и устранение неполадок](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Начало работы с Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Создание вашего первого компонента Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Отрисовка списка Vue-компонентов](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Добавление новой формы во Vue: события, методы, и модели](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Стилизация Vue-компонентов с CSS](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Использование вычисляемых свойств во Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Условная отрисовка во Vue: Редактирование существующих дел](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Управление фокусом во Vue с помощью refs](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Ресурсы по Vue](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Начало работы со Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Начинаем приложение списка дел c использованием Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Динамическое поведение в Svelte: работа с переменными и пропсами](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Компоненты Svelte-приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Продвинутый Svelte: реактивность, жизненный цикл, доступность](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Работа хранилищами в Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Поддержка TypeScript в Svelte](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Развёртывание и следующие шаги](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Начало работы с Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Начинаем приложение списка дел с использованием Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Стилизация Angular-приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Создание компонента элемента (item component)](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Фильтрация списка дел](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Сборка Angular-приложений и другие ресурсы](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
