---
title: Использование шаблонов и слотов
slug: Web/API/Web_components/Using_templates_and_slots
page-type: guide
---

{{DefaultAPISidebar("Web Components")}}

В этой статье рассказывается, как с помощью элементов {{htmlelement("template")}} и {{htmlelement("slot")}} создать гибкий шаблон, который затем можно использовать для наполнения теневого DOM веб-компонента.

## Правда о шаблонах

Когда на веб-странице приходится многократно повторять одни и те же структуры разметки, имеет смысл использовать какой-нибудь шаблон вместо того, чтобы снова и снова повторять одну и ту же структуру.
Это было возможно и раньше, но HTML-элемент {{htmlelement("template")}} значительно упрощает задачу.
Этот элемент и его содержимое не отображаются в DOM, но на него по-прежнему можно ссылаться из JavaScript.

Рассмотрим простой короткий пример:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Он не появится на странице до тех пор, пока вы не получите ссылку на него с помощью JavaScript, а затем не добавите его в DOM, используя, например, следующий код:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Хоть пример и тривиальный, уже сейчас можно понять, чем это может быть полезно.

## Использование шаблонов с веб-компонентами

Шаблоны полезны сами по себе, но ещё лучше они работают в связке с веб-компонентами.
Давайте определим веб-компонент, который использует наш шаблон в качестве содержимого своего теневого DOM.
Назовём его тоже `<my-paragraph>`:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("custom-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(document.importNode(templateContent, true));
    }
  },
);
```

Здесь важно отметить, что мы добавляем в теневой корень клон содержимого шаблона, созданный с помощью метода {{domxref("Document.importNode()")}}.

А поскольку мы добавляем его содержимое в теневой DOM, мы можем включить в шаблон информацию о стилях внутри элемента {{htmlelement("style")}}, которая затем будет инкапсулирована внутри пользовательского элемента.
Это не сработало бы, если бы мы просто добавили его в обычный DOM.

Например, так:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>
```

Теперь мы можем использовать его, просто добавив в наш HTML-документ:

```html
<my-paragraph></my-paragraph>
```

## Добавление гибкости с помощью слотов

Пока всё хорошо, но элемент не очень гибкий.
Мы можем отобразить внутри него только один фрагмент текста, а значит, на данный момент он даже менее полезен, чем обычный абзац! Мы можем сделать так, чтобы в каждом экземпляре элемента отображался разный текст, причём удобным декларативным способом, — с помощью элемента {{htmlelement("slot")}}.

Слоты идентифицируются по своему атрибуту `name` и позволяют определять в шаблоне заполнители-«места», которые можно заполнить любым фрагментом разметки при использовании элемента в разметке.

Так, если мы хотим добавить слот в наш простой пример, мы могли бы обновить элемент-абзац нашего шаблона следующим образом:

```html
<p><slot name="my-text">My default text</slot></p>
```

Если содержимое слота не определено при включении элемента в разметку, или если браузер не поддерживает слоты, то `<my-paragraph>` просто содержит запасное содержимое «My default text».

Чтобы задать содержимое слота, мы помещаем HTML-структуру внутрь элемента `<my-paragraph>` с атрибутом [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot), значение которого равно имени слота, который мы хотим заполнить. Как и прежде, это может быть что угодно, например:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

или

```html
<my-paragraph>
  <ul slot="my-text">
    <li>Let's have some different text!</li>
    <li>In a list!</li>
  </ul>
</my-paragraph>
```

> [!NOTE]
> Узлы, которые можно вставлять в слоты, называются _слотируемыми_ (_Slottable_); когда узел вставлен в слот, говорят, что он _слотирован_ (_slotted_).

Вот и всё для нашего простого примера.
Если хотите поэкспериментировать с ним ещё, вы можете [найти его на GitHub](https://github.com/mdn/web-components-examples/tree/main/simple-template) (а также посмотреть [работающую версию](https://mdn.github.io/web-components-examples/simple-template/)).

Атрибут `name` должен быть уникальным в пределах теневого корня: если у вас два слота с одинаковым именем, то все элементы с соответствующим атрибутом `slot` будут назначены первому слоту с этим именем. Но атрибут `slot` не обязан быть уникальным: `<slot>` может быть заполнен несколькими элементами, у которых есть соответствующий атрибут `slot`.

Атрибуты `name` и `slot` по умолчанию равны пустой строке, поэтому элементы без атрибута `slot` назначаются тому `<slot>`, у которого нет атрибута `name` (безымянному слоту, или слоту по умолчанию). Вот пример:

```html
<template id="custom-paragraph">
  <style>
    p {
      color: white;
      background-color: #666666;
      padding: 5px;
    }
  </style>
  <p>
    <slot name="my-text">My default text</slot>
    <slot></slot>
  </p>
</template>
```

Тогда его можно использовать так:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
  <span>This will go into the unnamed slot</span>
  <span>This will also go into the unnamed slot</span>
</my-paragraph>
```

В этом примере:

- Содержимое с `slot="my-text"` попадает в именованный слот.
- Всё остальное содержимое автоматически попадает в безымянный слот.

## Именованное и ручное назначение слотов

В предыдущем примере используется _именованное назначение слотов_, при котором именованные элементы {{htmlelement("slot")}} в шаблоне заполняются содержимым элементов пользовательского компонента (или, в общем случае, хост-элемента), у которых имена в атрибуте [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot) совпадают.
Это исходный механизм назначения слотов, и он наиболее подходит для большинства случаев.

_Ручное назначение слотов_ — это альтернативный подход, при котором элементы вручную назначаются слотам с помощью {{domxref("HTMLSlotElement.assign()")}}.

Ручное назначение полезно, когда вы хотите динамически выбирать содержимое для слотирования или назначать слоты на основе какого-либо другого атрибута элемента, например его `id`, не добавляя при этом дублирующие атрибуты `slot`.
Например, пользовательский элемент `<movie-picker>` может использовать элемент `<select>` для фильтрации по жанру, слотируя при изменении только те элементы, у которых значение атрибута `data-genre` совпадает.

```html
<movie-picker>
  <label
    >Genre:
    <select>
      <option>Comedy</option>
      <option>Drama</option>
      <option>Action</option>
      <option>Romance</option>
    </select>
  </label>
  <div data-genre="comedy romance"><h2>Hungover on Valentine's Day</h2></div>
  <div data-genre="drama romance"><h2>Us Two, plus Three</h2></div>
  <div data-genre="action drama"><h2>The Hitman 2: Can't die twice</h2></div>
  <div data-genre="action comedy">
    <h2>Tinkerbell, the last action hero</h2>
  </div>
</movie-picker>
```

Именованное назначение слотов является поведением по умолчанию.
В браузерах, которые поддерживают установку способа назначения слотов теневого корня, вы можете включить эту возможность при подключении теневого корня.
Это делается программно с помощью параметра [`options.slotAssignment`](/ru/docs/Web/API/Element/attachShadow#slotassignment), передаваемого в {{domxref("Element.attachShadow()")}}, либо декларативно — установкой атрибута [`shadowrootslotassignment`](/ru/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) на элементе {{htmlelement("template")}}.

Следующий HTML показывает базовый пример того, как можно задать `shadowrootslotassignment` при декларативном создании теневого корня (с помощью `shadowrootmode`).

```html
<article id="host">
  <template shadowrootmode="open" shadowrootslotassignment="manual">
    <h2 class="header">
      <slot id="titleSlot"></slot>
    </h2>
  </template>

  <span>Text for the title slot</span>
</article>
```

Код для ручного назначения текста из `<span>` слоту `<slot>` может выглядеть так:

```js
const host = document.querySelector("#host");
const shadow = host.shadowRoot;
const slot = shadow.querySelector("slot");
const titleText = host.querySelector("span");

slot.assign(titleText);
```

## Более сложный пример

В завершение статьи давайте рассмотрим что-нибудь менее тривиальное.

Следующий набор фрагментов кода показывает, как использовать {{HTMLElement("slot")}} вместе с {{HTMLElement("template")}} и небольшим количеством JavaScript, чтобы:

- создать элемент **`<element-details>`** с [именованными слотами](/ru/docs/Web/HTML/Reference/Elements/slot#name) в его [теневом корне](/ru/docs/Web/API/ShadowRoot);
- спроектировать элемент **`<element-details>`** так, чтобы при использовании в документах он отображался за счёт композиции содержимого самого элемента с содержимым его [теневого корня](/ru/docs/Web/API/ShadowRoot) — то есть части содержимого элемента используются для заполнения [именованных слотов](/ru/docs/Web/HTML/Reference/Elements/slot#name) в его [теневом корне](/ru/docs/Web/API/ShadowRoot).

Отметим, что технически возможно использовать элемент {{HTMLElement("slot")}} без элемента {{HTMLElement("template")}}, например внутри обычного элемента {{HTMLElement("div")}}, и по-прежнему пользоваться возможностями {{HTMLElement("slot")}} как заполнителя для содержимого теневого DOM; при этом можно избежать небольшого неудобства — необходимости сперва обратиться к свойству `content` элемента шаблона (и клонировать его).
Однако, как правило, практичнее добавлять слоты внутрь элемента {{HTMLElement("template")}}, поскольку вам вряд ли понадобится определять шаблон на основе уже отрендеренного элемента.

Кроме того, даже если элемент ещё не отрендерен, назначение контейнера как шаблона более семантически понятно при использовании {{HTMLElement("template")}}. Вдобавок в {{HTMLElement("template")}} можно напрямую добавлять такие элементы, как {{HTMLElement("td")}}, которые исчезли бы при добавлении в {{HTMLElement("div")}}.

> [!NOTE]
> Полный вариант этого примера можно найти в [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (а также посмотреть [работающую версию](https://mdn.github.io/web-components-examples/element-details/)).

### Создание шаблона с несколькими слотами

Прежде всего мы используем элемент {{HTMLElement("slot")}} внутри элемента {{HTMLElement("template")}}, чтобы создать новый [фрагмент документа](/ru/docs/Web/API/DocumentFragment) «element-details-template», содержащий несколько [именованных слотов](/ru/docs/Web/HTML/Reference/Elements/slot#name):

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", "Helvetica", "Arial";
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
        >
        <span class="desc"
          ><slot name="description">NEED DESCRIPTION</slot></span
        >
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

У этого элемента {{HTMLElement("template")}} есть несколько особенностей:

- В {{HTMLElement("template")}} есть элемент {{HTMLElement("style")}} с набором CSS-стилей, область действия которых ограничена только фрагментом документа, создаваемым {{HTMLElement("template")}}. Область действия этих стилей ограничена таким образом, потому что этот фрагмент будет вставлен в элемент теневого корня.
- {{HTMLElement("template")}} использует {{HTMLElement("slot")}} и его атрибут [`name`](/ru/docs/Web/HTML/Reference/Elements/slot#name), чтобы создать три [именованных слота](/ru/docs/Web/HTML/Reference/Elements/slot#name):
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- {{HTMLElement("template")}} оборачивает [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) в элемент {{HTMLElement("details")}}.

### Создание нового элемента \<element-details> из \<template>

Далее давайте создадим новый пользовательский элемент с именем **`<element-details>`** и с помощью {{DOMXref("Element.attachShadow")}} прикрепим к нему в качестве [теневого корня](/ru/docs/Web/API/ShadowRoot) тот фрагмент документа, который мы создали с помощью элемента {{HTMLElement("template")}} выше.
Здесь используется точно такой же приём, как и в нашем предыдущем простом примере.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(document.importNode(template, true));
    }
  },
);
```

### Использование пользовательского элемента \<element-details> с именованными слотами

Теперь давайте возьмём этот элемент **`<element-details>`** и действительно используем его в нашем документе:

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >A placeholder inside a web component that users can fill with their own
    markup, with the effect of composing different DOM trees together.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >A mechanism for holding client- side content that is not to be rendered
    when a page is loaded but may subsequently be instantiated during runtime
    using JavaScript.</span
  >
</element-details>
```

По поводу этого фрагмента обратите внимание на следующие моменты:

- В этом фрагменте есть два экземпляра элементов **`<element-details>`**, которые оба используют атрибут [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot), чтобы сослаться на [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` и `"description"`, помещённые нами в [теневой корень](/ru/docs/Web/API/ShadowRoot) `<element-details>`.
- Только первый из этих двух элементов **`<element-details>`** ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`. У второго элемента `<element-details>` нет никакой ссылки на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`.
- Первый элемент `<element-details>` ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` с помощью элемента {{HTMLElement("dl")}} с дочерними элементами {{HTMLElement("dt")}} и {{HTMLElement("dd")}}.

### Добавление последнего штриха стилей

В качестве завершающего штриха мы добавим ещё немного CSS для элементов {{HTMLElement("dl")}}, {{HTMLElement("dt")}} и {{HTMLElement("dd")}} в нашем документе:

```css
dl {
  margin-left: 6px;
}
dt {
  color: #217ac0;
  font-family: "Consolas", "Liberation Mono", "Courier New";
  font-size: 110%;
  font-weight: bold;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### Результат

Наконец, давайте соберём все фрагменты вместе и посмотрим, как выглядит отрендеренный результат.

{{EmbedLiveSample('Более_сложный_пример', '300','400')}}

Обратите внимание на следующие моменты, касающиеся этого отрендеренного результата:

- Хотя экземпляры элемента **`<element-details>`** в документе не используют напрямую элемент {{HTMLElement("details")}}, они отображаются с помощью {{HTMLElement("details")}}, потому что [теневой корень](/ru/docs/Web/API/ShadowRoot) наполняет их этим элементом.
- Внутри отрендеренного вывода {{HTMLElement("details")}} содержимое элементов **`<element-details>`** заполняет [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) из [теневого корня](/ru/docs/Web/API/ShadowRoot). Другими словами, DOM-дерево элементов **`<element-details>`** _композируется_ вместе с содержимым [теневого корня](/ru/docs/Web/API/ShadowRoot).
- Для обоих элементов **`<element-details>`** заголовок **Attributes** автоматически добавляется из [теневого корня](/ru/docs/Web/API/ShadowRoot) перед позицией [именованного слота](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`.
- Поскольку у первого элемента **`<element-details>`** есть элемент {{HTMLElement("dl")}}, который явно ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из своего [теневого корня](/ru/docs/Web/API/ShadowRoot), содержимое этого {{HTMLElement("dl")}} заменяет [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из [теневого корня](/ru/docs/Web/API/ShadowRoot).
- Поскольку второй элемент **`<element-details>`** явно не ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из своего [теневого корня](/ru/docs/Web/API/ShadowRoot), его содержимое для этого [именованного слота](/ru/docs/Web/HTML/Reference/Elements/slot#name) заполняется содержимым по умолчанию из [теневого корня](/ru/docs/Web/API/ShadowRoot).
