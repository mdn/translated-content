---
title: Сборка Angular приложений и другие ресурсы
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
translation_of: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
tags:
  - Новички
  - Фреймворки
  - JavaScript
  - Изучение
  - client-side
  - Angular
  - Сборка
  - Ресурсы
---
{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

В финальной статье об Angular рассказывается, как создать полностью готовое приложение и предоставляются дополнительные ресурсы, которые помогут вам продолжить обучение

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые условия:</th>
      <td>
        Понимание основ <a href="/en-US/docs/Learn/HTML">HTML</a>, <a href="/en-US/docs/Learn/CSS">CSS</a>, и <a href="/en-US/docs/Learn/JavaScript">JavaScript</a>, знание <a href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">терминала/командной строки
      </td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>Изучить сборку Angular-приложения.</td>
    </tr>
  </tbody>
</table>

## Сборка законченного приложения

Теперь, когда вы закончили разработку своего приложения, вы можете запустить команду Angular CLI `build`.
Когда вы запускаете команду `build` в директории `todo`, ваше приложение компилируется в директорию с названием `dist/`.

В директории `todo`, выполните следующие команды:

```bash
ng  build --prod
```

CLI компилирует приложение и помещает результат в директорию `dist`.
Флаг `--prod` команды `ng build` избавляется от всего, что вам не нужно в продакшене.

## Развертывание вашего прилоежния

Для развертывания вашего приложения вы можете скопировать содержимое папки `dist/my-project-name` на ваш веб-сервер.
Поскольку это статичные файлы, вы можете разместить на любом веб-сервере способном обслуживать файлы, например:

- Node.js
- Java
- .NET

Вы можете использовать любой бэкэнд, например [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting), или [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website).

## Что дальше

На этом этапе вы создали базовое приложение, но ваше путешествие с Angular только начинается.
Вы можете узнать больше изучив документацию Angular, например:

- [Tour of Heroes](https://angular.io/tutorial): подробное руководство, в котором рассматриваются функции Angular, такие как использование сервисов, навигация и получение данных с сервера.
- Руководство по Angular-[компонентам](https://angular.io/guide/component-overview): серия статей по таким темам как жизненный цикл, взаимодействие компонентов и инкапсуляция представлений.
- Руководство по [формам](https://angular.io/guide/forms-overview): статьи, которые проведут вас через создание реактивных форм в Angular, проверку ввода и построения динамических форм.

## Резюме

На этом пока все. Надеемся, вам понравилось работать с Angular!

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## В это модуле

- [Введение в клиентские фреймворки](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Основные функции фреймворков](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Начало работы с React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Начало создания приложения списка дел с React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Компоненты React-приложения](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [Интерактивность React: события и состояние](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [Интерактивность React: редактирование, фильтрация, условная отрисовка](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Доступность в React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [Ресурсы по React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Начало работы с Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Структура Ember-приложения и компоненты](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Интерактивность Ember: события, классы и состояние](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Интерактивность Ember: функциональность подвала, условная отрисовка](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Маршрутизация в Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ресурсы по Ember и устранение неполадок](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Начало работы с Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Создание вашего первого компонента Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Отрисовка списка Vue-компонентов](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Добавление новой формы во Vue: события, методы, и модели](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Стилизация Vue-компонентов с CSS](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Использование вычисляемых свойств во Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Условная отрисовка во Vue: Редактирование существующих дел](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Управление фокусом во Vue с помощью refs](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Ресурсы по Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Начало работы со Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Начинаем приложение списка дел c использованием Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Динамическое поведение в Svelte: работа с переменными и пропсами](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Компоненты Svelte-приложения](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Продвинутый Svelte: реактивность, жизненный цикл, доступность](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Работа хранилищами в Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Поддержка TypeScript в Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Развёртывание и следующие шаги](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Начало работы с Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Начинаем приложение списка дел с использованием Angular](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Стилизация Angular-приложения](/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Создание компонента элемента (item component)](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Фильтрация списка дел](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Сборка Angular-приложений и другие ресурсы](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  