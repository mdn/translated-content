---
title: Создание компонента элемента (item component)
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Компоненты представляют способ для организации вашего приложения. В этой статье описывается создание компонента для обработки отдельных элементов в списке и добавление функций проверки, редактирования и удаления.

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые условия:</th>
      <td>
        Понимание основ <a href="/ru/docs/Learn/HTML">HTML</a>, <a href="/ru/docs/Learn/CSS">CSS</a> и <a href="/ru/docs/Learn/JavaScript">JavaScript</a> знание <a href="/ru/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">терминала/командной строки
      </td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>
        Изучить больше информации о компонентах, включая обработку событий, чтобы реализовать функции проверки, редактирования и удаления.</td>
    </tr>
  </tbody>
</table>

## Создание нового компонента

Создайте компонент с именем `item` с помощью следующих команд в командной строке:

```bash
ng generate component item
```

Команда `ng generate component` создаст компонент и папку с указаным именем.
Имя папки и компонента будет `item`.
Вы можете найти дирректорию `item` внутри папки `app`.

Как и в случае с `AppComponent`, `ItemComponent` состоит из следующих файлов:

- `item.component.html` для HTML
- `item.component.ts` для логики
- `item.component.css` для стилей

Можно увидеть ссылку на файлы HTML и CSS в метаданных декоратора `@Component()` в `item.component.ts`.

```js
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
```

## Добавьте HTML для ItemComponent

С помощью компонента `ItemComponent` можно будет отмечать элементы списка как выполненные, редактировать или удалять их.

Добавьте разметку для управления элементами, заменив содержимое `item.component.html` следующим кодом:

```html
<div class="item">
  <input
    [id]="item.description"
    type="checkbox"
    (change)="item.done = !item.done"
    [checked]="item.done" />
  <label [for]="item.description">\{{item.description}}</label>

  <div class="btn-wrapper" *ngIf="!editable">
    <button class="btn" (click)="editable = !editable">Edit</button>
    <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
  </div>

  <!-- Этот блок отображается, если пользователь кликнул на кнопку Edit -->
  <div *ngIf="editable">
    <input
      class="sm-text-input"
      placeholder="edit item"
      [value]="item.description"
      #editedItem
      (keyup.enter)="saveItem(editedItem.value)" />

    <div class="btn-wrapper">
      <button class="btn" (click)="editable = !editable">Cancel</button>
      <button class="btn btn-save" (click)="saveItem(editedItem.value)">
        Save
      </button>
    </div>
  </div>
</div>
```

Чекбокс позволяет пользователям отмечать элементы как выполненные.
Двойные фигурные скобки, `\{{}}`, в `<input>` и `<label>` означают Angular-интерполяцию.
Angular использует `\{{item.description}}` для получения описания текущего `item` из массива `items`.
В следующем разделе подробно объясняется, как компоненты обмениваются данными.

Следующие две кнопки для редактирования и удаления текущего элемента находятся внутри `<div>`.
К этому `<div>` применена `*ngIf` — это встроенная Angular-директива, которую вы можете использовать для динамического изменения структуры DOM.

В данном случае `*ngIf` означает, что если `editable` равен `false`, то `<div>` будет присутствовать в DOM. Если `editable` равен `true`, Angular удалит этот `<div>` из DOM.

```html
<div class="btn-wrapper" *ngIf="!editable">
  <button class="btn" (click)="editable = !editable">Edit</button>
  <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
</div>
```

Когда пользователь кликает на кнопку **Edit**, `editable` становится true, что удаляет `<div>` и его дочерние элементы из DOM.
Если вместо клика по кнопке **Edit**, пользователь кликает по кнопке **Delete**, `ItemComponent` вызывает событие, которое уведомляет `AppComponent` об удалении.

Директива `*ngIf` так же применяется к следующему `<div>`.
В этом случае, если `editable` равен `true`, Angular вставляет `<div>` и его дочерние элементы `<input>` и `<button>` в DOM.

```html
<!-- Этот блок отображается, если пользователь кликнул на кнопку Edit -->
<div *ngIf="editable">
  <input
    class="sm-text-input"
    placeholder="edit item"
    [value]="item.description"
    #editedItem
    (keyup.enter)="saveItem(editedItem.value)" />

  <div class="btn-wrapper">
    <button class="btn" (click)="editable = !editable">Cancel</button>
    <button class="btn btn-save" (click)="saveItem(editedItem.value)">
      Save
    </button>
  </div>
</div>
```

С помощью `[value]="item.description"`, значение `<input>` будет привязано к `description` текущего элемента.
Эта привязка делает значение `description` значением `<input>`.
Поэтому если в `description` находится текст `eat`, то он будет автоматически отображён в `<input>`.
Таким образом, когда пользователь начнёт редактировать элемент, в `<input>` уже будет находится текст `eat`.

Переменная шаблона `#editedItem` в `<input>` означает, что Angular хранит все, что пользователь печатает в этом `<input>` в переменной `editedItem`.
Событие `keyup` вызывает метод `saveItem()` и передаёт туда значение из `editedItem`, если пользователь нажмёт Enter вместо кнопки **Save**.

Когда пользователь нажимает кнопку **Cancel**, `editable` переключается на `false`, что удаляет поле для ввода и кнопки для редактирования из DOM.
Когда в `editable` находится значение `false`, Angular вставляет `<div>` вместе с кнопками **Edit** и **Delete** обратно в DOM.

Нажатие на кнопку **Save** вызывает метод `saveItem()`.
Метод `saveItem()` берёт значение из переменной `#editedItem` `<input>` и изменяет описание элемента `description` на строку `editedItem.value`.

## Подготовка AppComponent

В следующем разделе вы добавите код, который свяжет `AppComponent` и `ItemComponent`.
Сначала настройте AppComponent, добавив в `app.component.ts`:

```js
remove(item) {
  this.allItems.splice(this.allItems.indexOf(item), 1);
}
```

Метод `remove()` использует JavaScript-метод `Array.splice()` для удаления одного элемента, начиная с индекса, который возвращает метод `indexOf`.
Чтобы узнать больше о методе `splice()`, посмотрите статью на MDN [`Array.prototype.splice()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

## Добавление логики в ItemComponent

Чтобы использовать `ItemComponent` вы должны добавить к нему логику и способы ввода/вывода данных.

В `item.component.ts` отредактируйте JavaScript-импорты так:

```js
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "../item";
```

`Input`, `Output`, и `EventEmitter` позволяют `ItemComponent` использовать данные совместно с `AppComponent`.
Импортируя `Item`, `ItemComponent` может понять, что такое `item`.

В `item.component.ts`, замените сгенерированный класс `ItemComponent` следующим:

```js
export class ItemComponent {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
```

Свойство `editable` помогает переключать раздел шаблона, где пользователь может редактировать элемент.
`editable` это свойство, которое находится в директиве `*ngIf`: `*ngIf="editable"`.
Когда вы используете свойство в шаблоне, вы так же должны объявить его в классе.

`@Input()`, `@Output()`, и `EventEmitter` облегчают связь между вашими двумя компонентами.
`@Input()` служит дверью, через которую данные входят в компонент, а `@Output()` служит дверью для выхода данных.
`@Output()` должен быть типа `EventEmitter`, чтобы компонент мог вызвать событие, когда данные готовы для отправки в другой компонент.

Используйте `@Input()`, чтобы указать, что значение свойства может поступать извне.
Используйте `@Output()` в сочетании с `EventEmitter`, чтобы указать, что свойство может отправить значение в другой компонент.

Метод `saveItem()` принимает в качестве аргумента `description`.
`description` это текст, который пользователь вводит в HTML-тэг `<input>` во время редактирования элемента списка.
`description` это та же строка из `<input>`, полученная через переменную шаблона `#editedItem`.

Если пользователь не вводит значение, но нажимает **Save**, `saveItem()` ничего не возвращает и не обновляет `description`.
Если бы выражения `if` не было, пользователь бы нажимал **Save** с пустым `<input>`, и `description` становился бы пустой строкой.

Если пользователь вводит текст и нажимает сохранить, `saveItem()` устанавливает `editable` в false, что заставляет `*ngIf` в шаблоне удалить форму редактирования и отобразить кнопки **Edit** и **Delete** снова.

Несмотря на то что приложение уже должно компилироваться, вам нужно использовать `ItemComponent` в `AppComponent`, чтобы вы могли увидеть новые функции в браузере.

## Использование ItemComponent в AppComponent

Включение одного компонента в другой в контексте родительско-дочерних отношений даёт вам гибкость в использовании компонентов.

`AppComponent` служит оболочкой для включения других компонентов.

Чтобы использовать `ItemComponent` в `AppComponent`, вставьте селектор `ItemComponent` в шаблон `AppComponent`.
В Angular селектор компонента указывается в метаданных декоратора `@Component()`.
В этом примере селектор это `app-item`:

```js
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
```

Чтобы использовать селектор `ItemComponent` в `AppComponent`, добавьте элемент `<app-item>`, что соответствует селектору, добавленному в класс компонента, в `app.component.html`.
Замените текущий неупорядоченный список в `app.component.html` обновлённой версией:

```html
<h2>
  \{{items.length}}
  <span *ngIf="items.length === 1; else elseBlock">item</span>
  <ng-template #elseBlock>items</ng-template>
</h2>

<ul>
  <li *ngFor="let item of items">
    <app-item (remove)="remove(item)" [item]="item"></app-item>
  </li>
</ul>
```

Двойные фигурные скобки, `\{{}}`, в `<h2>` интерполируют длину массива `items` и отображает её.

`<span>` в `<h2>` использует `*ngIf` и `else` чтобы определить, должен ли `<h2>` отображать строку "item" или "items".
Если в списке всего один элемент, `<span>` будет содержать строку "item".
В противном случае, если длина массива `items` будет отличаться от `1`, то вместо `<span>` отобразится шаблон `<ng-template>`, который мы назвали `elseBlock` с помощью синтаксиса `#elseBlock`.
Angular позволяет использовать `<ng-template>`, если вы не хотите, чтобы контент отображался по умолчанию.
В нашем случае, когда длина массива `items` не `1`, `*ngIf` отображает `elseBlock` а не `<span>`.

`<li>` использует Angular-директиву для повторения,`*ngFor`, чтобы перебрать все элементы массива `items`.
В Angular `*ngFor` это что-то вроде `*ngIf` - ещё одна директива, которая помогает изменять структуру DOM с помощью меньшего количества кода.
Для каждого элемента `item`, Angular повторяет `<li>` и всё, что в нём находится, включая `<app-item>`.
Это означает, что для каждого элемента в массиве Angular создаёт новый экземпляр `<app-item>`.
Для любого количества элементов в массиве Angular создаёт множество элементов `<li>`.

Вы можете использовать `*ngFor` для других элементов, таких как `<div>`, `<span>` или `<p>` и д.р.

В `AppComponent` есть метод `remove()` для удаления элемента, связанного со свойством `remove` в `ItemComponent`.
Свойство `item` в квадратных скобках `[]` связывает значение `item` между `AppComponent` и `ItemComponent`.

Теперь вы можете редактировать и удалять элементы списка.
Когда вы добавляете или удаляете элементы, количество элементов так же должно изменятся.
Чтобы сделать список более удобным, добавьте немного стилей в `ItemComponent`.

## Добавление стилей в ItemComponent

Вы можете использовать стили, чтобы изменить внешний вид компонента.
Следующий CSS добавляет базовые стили, flexbox для кнопок и стилизованные чекбоксы.

Вставьте следующе стили в `item.component.css`.

```css
.item {
  padding: 0.5rem 0 0.75rem 0;
  text-align: left;
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  /* flexbox стили для кнопок меню */
  flex-basis: 49%;
}

.btn-save {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.btn-save:hover {
  background-color: #444242;
}

.btn-save:focus {
  background-color: #fff;
  color: #000;
}

.checkbox-wrapper {
  margin: 0.5rem 0;
}

.btn-warn {
  background-color: #b90000;
  color: #fff;
  border-color: #9a0000;
}

.btn-warn:hover {
  background-color: #9a0000;
}

.btn-warn:active {
  background-color: #e30000;
  border-color: #000;
}

.sm-text-input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #555;
  display: block;
  box-sizing: border-box;
  font-size: 1rem;
  margin: 1rem 0;
}

/* Пользовательские чекбоксы
Адаптировано из https://css-tricks.com/the-checkbox-hack/#custom-designed-radio-buttons-and-checkboxes */

/* Основа для стилизации лэйбла */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}

/* чекбокс */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
}

/* галочка для чекбокса */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "\2713\0020";
  position: absolute;
  top: 0.15em;
  left: 0.22em;
  font-size: 1.3em;
  line-height: 0.8;
  color: #0d8dee;
  transition: all 0.2s;
  font-family: "Lucida Sans Unicode", "Arial Unicode MS", Arial;
}
/* изменение галочки чекбокса */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}

/* доступность */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted blue;
}
```

## Резюме

Теперь у вас должен быть стилизованный Angular-компонент приложения списка дел, позволяющий добавлять, редактировать и удалять элементы.
Следующий шаг — добавление фильтрации, чтобы можно было просматривать элементы соответствующие определённым критериям.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
