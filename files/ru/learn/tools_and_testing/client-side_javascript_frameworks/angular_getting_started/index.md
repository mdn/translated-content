---
title: Начало работы с Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Пришло время взглянуть на фреймворк от Google — Angular, еще один популярный вариант, с которым вы часто будете сталкиваться. В этой статье мы рассмотрим, что Angular может предложить, установим необходимые компоненты, запустим пример приложения, и разберём базовую архитектуру Angular.

| Необходимые условия: | Понимание основ [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), и [JavaScript](/ru/docs/Learn/JavaScript), знание [терминала/командной строки](/ru/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line). |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Настроить локальную среду разработки Angular, создать стартовое приложение, и понять основные принципы работы.                                                                                                                         |

## Что такое Angular?

Angular — это платформа для разработки, написанная на [TypeScript](https://www.typescriptlang.org/). Как платформа Angular включает:

- Основанный на компонентах фреймворк для создания масштабируемых веб-приложений
- Набор хорошо интегрированных библиотек, охватывающих широкий спектр функций: маршрутизация, управление формами, клиент-серверное взаимодействие и т.д.
- Набор инструментов разработчика, которые помогут вам разрабатывать, собирать, тестировать и обновлять ваш код

Когда вы создаете приложение с помощью Angular, вы пользуетесь преимуществами платформы, которая может масштабироваться от проекта, который разрабатывает один человек, до приложений корпоративного уровня. Angular разработан, чтобы максимально упростить обновление, поэтому вы можете использовать последние разработки с минимумом усилий. А самое замечательное то, что экосистема Angular состоит из огромного сообщества, включающего более чем 1.7 миллиона разработчиков, авторов библиотек и создателей контента.

Прежде, чем приступить к изучению платформы Angular, сначала стоит познакомиться с Angular CLI. Angular CLI - это быстрый, простой и рекомендуемый способ разработки Angular-приложений. Angular CLI облегчает выполнение ряда задач. Вот некоторые из них:

| [`ng build`](https://angular.io/cli/build)       | Компилирует Angular-приложение в выходной каталог.                          |
| ------------------------------------------------ | --------------------------------------------------------------------------- |
| [`ng serve`](https://angular.io/cli/serve)       | Собирает и запускает ваше приложение, пересобирая его при изменении файлов. |
| [`ng generate`](https://angular.io/cli/generate) | Генерирует или изменяет файлы на основе схематиков                          |
| [`ng test`](https://angular.io/cli/test)         | Запускает модульные тесты для заданного проекта.                            |
| [`ng e2e`](https://angular.io/cli/e2e)           | Собирает и запускает Angular-приложение, запуская затем сквозные тесты.     |

Скоро вы сами убедитесь, что Angular CLI является полезным инструментом для создания ваших приложений.

## Что вы создадите

Эта серия руководств проведёт вас через создание приложения со списком дел (to-do list). С помощью этого приложения вы узнаете, как использовать Angular для управления, редактирования, добавления, удаления и фильтрации элементов.

## Необходимые условия

Чтобы установить Angular в вашей локальной системе, вам понадобится следующее:

- **Node.js**

  Angular требует [текущую, последнюю LTS, или поддерживаемую LTS](https://nodejs.org/about/releases) версию Node.js. Для получения информации о конкретных требованиях к версии смотрите ключ `engines` в [package.json](https://unpkg.com/@angular/cli/package.json) файле.

  Для получения дополнительной информации о установке Node.js смотрите [nodejs.org](https://nodejs.org).
  Если вы не знаете какая версия Node.js установлена в вашей системе, запустите `node -v` в терминале.

- **пакетный менеджер npm**

  Angular, Angular CLI, Angular приложения зависят от [npm пакетов](https://docs.npmjs.com/getting-started/what-is-npm) которые обеспечивают множество функций.
  Для загрузки и установки npm пакетов, вам необходим пакетный менеджер npm.
  Это руководство использует [npm](https://docs.npmjs.com/cli/install) через интерфейс командной строки, который устанавливается с `Node.js` по умолчанию.
  Для того, чтобы узнать какая версия npm установлена, запустите `npm -v` в терминале.

## Настройка приложения

Вы можете использовать Angular CLI, запуская команды в терминале для генерации, сборки, тестирования, и развертывания приложений на Angular.
Для установки Angular CLI, запустите следующие команды в терминале:

```js
npm install -g @angular/cli
```

Команды Angular CLI начинаются с `ng`, за которым следует то, что вы хотите CLI сделал.
В рабочей директории (например, Desktop) выполните команду `ng new`, чтобы создать новое приложение под названием `todo`:

```js
ng new todo --routing=false --style=css
```

В текущей директории команда `ng new` создаст необходимое для работы маленькое Angular-приложение.
Дополнительные флаги, `--routing` и `--style`, определяют, как обрабатывать навигацию и стили в приложении.
В этом руководстве эти функции будут описаны позже.

Если вам будет предложено применить строгую проверку типов, вы можете ответить "yes".

Перейдите в ваш новый проект с помощью команды `cd`:

```js
cd todo
```

Запустите ваше приложение `todo`, выполнив команду `ng serve`:

```js
ng serve
```

Когда CLI спросить про аналитику, ответьте `no`.

В браузере перейдите на <http://localhost:4200/>, и вы увидите ваше новое приложение.
Если измените любой из исходных файлов, приложение автоматически перезагрузится.

Пока выполняется `ng serve`, запускать другие команды можно в новой вкладке или окне терминала.
Если вы захотите остановить работу приложения, нажмите `Ctrl+c` в терминале, где оно было запущено.

## Знакомство с вашим Angular приложением

Исходные файлы, на которых будет сосредоточено внимание в этом руководстве находится в `src/app`.
Файлы, генерируемые CLI автоматически, на которые стоит обратить внимание:

1. `app.module.ts`: определяет файлы, которые использует приложение.
   Этот файл действует как центральный узел для других файлов в вашем приложении.
2. `app.component.ts`: Определяет класс, который содержит логику основной страницы приложения.
3. `app.component.html`: Содержит HTML для `AppComponent`. Содержимое этого файла также называется шаблоном.
   Шаблон определяет представление или то, что вы видите в браузере.
4. `app.component.css`: Содержит стили для `AppComponent`. Этот файл используется, когда вам нужно стилизовать определённый компонент, а не всё приложение.

Компонент Angular состоит из трех основных частей: шаблон, стили, и класс.
Например, `app.component.ts`, `app.component.html`, и `app.component.css` вместе составляют `AppComponent`.
Эта структура разделяет логику, представление и стили, чтобы приложение было более масштабируемым и удобным в обслуживании.

Таким образом, с самого начала вы используете лучшие приёмы разработки.

Angular CLI также генерирует файл для тестирования компонента `app.component.spec.ts`, но в это руководство не входит тестирование, поэтому вы можете игнорировать этот файл.

Каждый раз, когда вы генерируете компонент, CLI создает эти четыре файла в каталоге с указанным вами именем.

## Структура Angular приложения

Angular построен на TypeScript.
TypeScript — это надмножество JavaScript, т.е. любой правильный JavaScript-код будет работать в TypeScript.
TypeScript предлагает типизацию и более лаконичный синтаксис, чем простой JavaScript, который дает вам инструмент для создание более удобного в сопровождении кода и минимизации ошибок.

Компоненты — это строительные блоки Angular-приложений.
Компоненты включают TypeScript-класс, который имеет декоратор `@Component()`, HTML-шаблон и стили.

### Класс

Класс — это место, где вы помещаете любую логику, которая нужна вашему компоненту.
Этот код должен включать функции, обработчики событий, свойства, и ссылки на сервисы.
Класс находится в файле с таким именем, как `feature.component.ts`, где `feature` это название вашего компонента.
Итак, у вас могут быть файлы с такими именами как `header.component.ts`, `signup.component.ts`, или `feed.component.ts`.
Вы создаете компонент с декоратором `@Component()`, включающий метаданные, которые сообщают Angular расположение HTML- и CSS-файлов.
Типичный компонент выглядит так:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  // следующие метаданные определяют расположение других частей компонента
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // ваш код будет тут
}
```

Компонент называется `ItemComponent`, и имеет селектор `app-item`.
Вы можете использовать этот селектор как и обычные HTML-теги, помещая его в другие шаблоны.
Когда селектор находится в компоненте, браузер отображает шаблон этого компонента.
Это руководство поможет вам создать два компонента и использовать один в другом.

Компонентная модель Angular предлагает надежную инкапсуляцию и интуитивно понятную структуру приложения.
Компоненты также упрощают модульное тестирование вашего приложения и могут улучшить общую читаемость кода.

### HTML-шаблоны

У каждого компонента есть HTML-шаблон, в котором определяется то, что этот компонент будет отображать.
Шаблон можно задать либо строкой, либо как путь к файлу.

Для ссылки на внешний HTML-файл, используется свойство `templateUrl`:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

Чтобы указать напрямую HTML-код, используется свойство `template` с обратными кавычками:

```js
@Component({
  selector: "app-root",
  template: `<h1>Hi!</h1>`,
})
export class AppComponent {}
```

Angular расширяет HTML дополнительным синтаксисом, который позволяет вставлять динамические данные в компонент.
Angular автоматически обновляет DOM, когда состояние компонента изменяется.
Например, этот синтаксис можно применить для вставки динамического текста, как показано в следующем примере.

```html
<h1>\{{ title }}</h1>
```

Двойные фигурные скобки говорят Angular, что содержимое внутри них нужно интерполировать.
Значение для `title` берется из класса компонента:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}
```

Когда приложение загружает компонент и его шаблон, браузер видит следующее:

```html
<h1>To do application</h1>
```

### Стили

Компонент может наследовать общие стили приложения из файла `styles.css` или переопределять их собственными стилями.
Вы можете писать стили для конкретных компонентов прямо в декораторе `@Component()` или указывая путь к CSS-файлу.

Чтобы включить стили непосредственного в декоратор компонента, используется свойство `styles`:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Обычно компонент использует стили определяемые в отельном файле, указанном в свойстве `styleUrls`:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

С помощью стилей для конкретных компонентов вы можете организовывать свой CSS так, чтобы его было легко поддерживать и переносить.

## Резюме

Это ваше первое знакомство с Angular. На этом этапе всё должно быть настроено и готово к созданию Angular-приложения, а у вас быть базовое представление о том, как работает Angular. В следующей статье мы углубим эти знания и начнем создавать структуру вашего приложения списка дел.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
