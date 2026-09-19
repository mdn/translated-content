---
title: Использование шаблонов и слотов
slug: Web/API/Web_components/Using_templates_and_slots
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{DefaultAPISidebar("Web Components")}}

Эта статья объясняет, как вы можете использовать элементы {{htmlelement("template")}} и {{htmlelement("slot")}}, чтобы создать гибкий шаблон, который затем можно использовать для наполнения shadow DOM веб-компонента.

## Правда о шаблонах

Когда вам приходится многократно переиспользовать одни и те же структуры разметки на веб-странице, имеет смысл использовать какой-то шаблон вместо того, чтобы повторять одну и ту же структуру снова и снова.
Раньше это тоже было возможно, но HTML-элемент {{htmlelement("template")}} значительно упрощает задачу.
Этот элемент и его содержимое не отрисовываются в DOM, но на них по-прежнему можно ссылаться из JavaScript.

Рассмотрим тривиальный быстрый пример:

```html
<template id="custom-paragraph">
  <p>My paragraph</p>
</template>
```

Он не появится на вашей странице, пока вы не получите на него ссылку в JavaScript и не добавите его в DOM, используя что-то вроде следующего:

```js
let template = document.getElementById("custom-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Хотя это и тривиально, вы уже можете начать понимать, чем это может быть полезно.

## Использование шаблонов с веб-компонентами

Шаблоны полезны и сами по себе, но с веб-компонентами они работают ещё лучше.
Давайте определим веб-компонент, использующий наш шаблон в качестве содержимого своего shadow DOM.
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

Ключевой момент, который здесь стоит отметить, — мы добавляем к теневому корню клон содержимого шаблона, созданный с помощью метода {{domxref("Document.importNode()")}}.

И поскольку мы добавляем его содержимое в shadow DOM, мы можем включить в шаблон некоторую информацию о стилях внутри элемента {{htmlelement("style")}}, которая затем инкапсулируется внутри пользовательского элемента.
Это не сработало бы, если бы мы просто добавили его в стандартный DOM.

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

Пока что всё хорошо, но элемент не очень гибкий.
Мы можем отобразить внутри него только один фрагмент текста, а значит, на данный момент он даже менее полезен, чем обычный параграф! Мы можем сделать так, чтобы в каждом экземпляре элемента можно было отображать разный текст удобным декларативным способом, используя элемент {{htmlelement("slot")}}.

Слоты идентифицируются по своему атрибуту `name` и позволяют вам определять в шаблоне заполнители (placeholders), которые можно заполнить любым фрагментом разметки, когда элемент используется в разметке.

Итак, если мы хотим добавить слот в наш тривиальный пример, мы могли бы обновить элемент-параграф нашего шаблона следующим образом:

```html
<p><slot name="my-text">My default text</slot></p>
```

Если содержимое слота не определено, когда элемент включается в разметку, или если браузер не поддерживает слоты, то `<my-paragraph>` просто содержит запасное содержимое «My default text».

Чтобы определить содержимое слота, мы включаем внутрь элемента `<my-paragraph>` HTML-структуру с атрибутом [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot), значение которого равно имени слота, который мы хотим заполнить. Как и прежде, это может быть что угодно, например:

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

Вот и всё для нашего тривиального примера.
Если вы хотите поиграть с ним подробнее, вы можете [найти его на GitHub](https://github.com/mdn/web-components-examples/tree/main/simple-template) (а также посмотреть [работающую версию](https://mdn.github.io/web-components-examples/simple-template/)).

Атрибут `name` должен быть уникальным в пределах одного теневого корня: если у вас есть два слота с одинаковым именем, все элементы с совпадающим атрибутом `slot` будут назначены первому слоту с этим именем. Но атрибут `slot` не обязан быть уникальным: один `<slot>` может быть заполнен несколькими элементами, у которых совпадает атрибут `slot`.

Атрибуты `name` и `slot` по умолчанию равны пустой строке, поэтому элементы без атрибута `slot` назначаются `<slot>` без атрибута `name` (безымянному слоту, или слоту по умолчанию). Вот пример:

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

Тогда вы можете использовать его так:

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

В предыдущем примере используется _именованное назначение слотов_ (named slot assignment): это означает, что именованные элементы {{htmlelement("slot")}} в шаблоне наполняются содержимым тех элементов пользовательского компонента (или, в более общем смысле, хост-элемента), у которых совпадают имена в их атрибутах [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot).
Это исходный механизм, используемый для назначения слотов, и он наиболее подходит для большинства сценариев использования.

_Ручное назначение слотов_ (manual slot assignment) — альтернативный подход, при котором элементы вручную назначаются слотам с помощью {{domxref("HTMLSlotElement.assign()")}}.

Ручное назначение полезно, когда вы хотите динамически выбирать содержимое для слотирования или когда вы хотите назначать слоты на основе какого-то другого атрибута элемента, такого как их `id`, не добавляя дублирующихся атрибутов `slot`.
Например, пользовательский элемент `<movie-picker>` мог бы использовать элемент `<select>` для фильтрации по жанру, слотируя при изменении только те элементы, у которых значение атрибута `data-genre` совпадает.

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

Именованное назначение слотов — поведение по умолчанию.
На пользовательских агентах, поддерживающих установку метода назначения слотов теневого корня, вы можете включить эту возможность при присоединении теневого корня.
Это делается программно с помощью параметра [`options.slotAssignment`](/ru/docs/Web/API/Element/attachShadow#slotassignment), передаваемого в {{domxref("Element.attachShadow()")}}, или декларативно, установив атрибут [`shadowrootslotassignment`](/ru/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) на элементе {{htmlelement("template")}}.

Следующий HTML показывает базовый пример того, как можно установить `shadowrootslotassignment` при декларативном создании теневого корня (с помощью `shadowrootmode`).

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

Чтобы завершить статью, давайте рассмотрим что-то чуть менее тривиальное.

Следующий набор фрагментов кода показывает, как использовать {{HTMLElement("slot")}} вместе с {{HTMLElement("template")}} и небольшим количеством JavaScript, чтобы:

- создать элемент **`<element-details>`** с [именованными слотами](/ru/docs/Web/HTML/Reference/Elements/slot#name) в его [теневом корне](/ru/docs/Web/API/ShadowRoot)
- спроектировать элемент **`<element-details>`** таким образом, чтобы при использовании в документах он отрисовывался за счёт композиции содержимого самого элемента с содержимым из его [теневого корня](/ru/docs/Web/API/ShadowRoot) — то есть части содержимого элемента используются для заполнения [именованных слотов](/ru/docs/Web/HTML/Reference/Elements/slot#name) в его [теневом корне](/ru/docs/Web/API/ShadowRoot)

Обратите внимание, что технически возможно использовать элемент {{HTMLElement("slot")}} без элемента {{HTMLElement("template")}} — например, внутри обычного элемента {{HTMLElement("div")}} — и всё равно пользоваться возможностями слота как заполнителя для содержимого Shadow DOM; более того, так можно избежать небольшого неудобства, связанного с необходимостью сначала обратиться к свойству `content` элемента template (и клонировать его).
Однако обычно практичнее добавлять слоты внутрь элемента {{HTMLElement("template")}}, поскольку вам вряд ли понадобится определять шаблон на основе уже отрисованного элемента.

Кроме того, даже если элемент ещё не отрисован, назначение контейнера как шаблона семантически более понятно при использовании {{HTMLElement("template")}}. К тому же в {{HTMLElement("template")}} можно напрямую добавлять такие элементы, как {{HTMLElement("td")}}, которые исчезли бы при добавлении в {{HTMLElement("div")}}.

> [!NOTE]
> Вы можете найти этот полный пример на [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (а также посмотреть [работающую версию](https://mdn.github.io/web-components-examples/element-details/)).

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

- У {{HTMLElement("template")}} есть элемент {{HTMLElement("style")}} с набором CSS-стилей, ограниченных (scoped) только тем фрагментом документа, который создаёт {{HTMLElement("template")}}. Эти стили ограничены таким образом, потому что этот фрагмент будет вставлен в элемент теневого корня.
- {{HTMLElement("template")}} использует {{HTMLElement("slot")}} и его атрибут [`name`](/ru/docs/Web/HTML/Reference/Elements/slot#name), чтобы создать три [именованных слота](/ru/docs/Web/HTML/Reference/Elements/slot#name):
  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- {{HTMLElement("template")}} оборачивает [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) в элемент {{HTMLElement("details")}}.

### Создание нового элемента \<element-details> из \<template>

Далее давайте создадим новый пользовательский элемент с именем **`<element-details>`** и используем {{DOMXref("Element.attachShadow")}}, чтобы присоединить к нему в качестве его [теневого корня](/ru/docs/Web/API/ShadowRoot) тот фрагмент документа, который мы создали с помощью нашего элемента {{HTMLElement("template")}} выше.
Здесь используется ровно тот же приём, что и в нашем более раннем тривиальном примере.

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

Относительно этого фрагмента обратите внимание на следующие моменты:

- Во фрагменте есть два экземпляра элементов **`<element-details>`**, оба используют атрибут [`slot`](/ru/docs/Web/HTML/Reference/Global_attributes/slot) для ссылки на [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"element-name"` и `"description"`, которые мы поместили в [теневой корень](/ru/docs/Web/API/ShadowRoot) `<element-details>`.
- Только первый из этих двух элементов **`<element-details>`** ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`. У второго элемента `<element-details>` нет никакой ссылки на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`.
- Первый элемент `<element-details>` ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` с помощью элемента {{HTMLElement("dl")}} с потомками {{HTMLElement("dt")}} и {{HTMLElement("dd")}}.

### Добавление финальных штрихов стиля

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

Наконец, давайте соберём все фрагменты вместе и посмотрим, как выглядит отрисованный результат.

{{EmbedLiveSample('Более сложный пример', '300','400')}}

Обратите внимание на следующие моменты в этом отрисованном результате:

- Хотя экземпляры элемента **`<element-details>`** в документе напрямую не используют элемент {{HTMLElement("details")}}, они отрисовываются с использованием {{HTMLElement("details")}}, потому что [теневой корень](/ru/docs/Web/API/ShadowRoot) заставляет их наполняться им.
- Внутри отрисованного вывода {{HTMLElement("details")}} содержимое элементов **`<element-details>`** заполняет [именованные слоты](/ru/docs/Web/HTML/Reference/Elements/slot#name) из [теневого корня](/ru/docs/Web/API/ShadowRoot). Другими словами, DOM-дерево элементов **`<element-details>`** _компонуется_ вместе с содержимым [теневого корня](/ru/docs/Web/API/ShadowRoot).
- Для обоих элементов **`<element-details>`** заголовок **Attributes** автоматически добавляется из [теневого корня](/ru/docs/Web/API/ShadowRoot) перед позицией [именованного слота](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"`.
- Поскольку у первого **`<element-details>`** есть элемент {{HTMLElement("dl")}}, явно ссылающийся на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из его [теневого корня](/ru/docs/Web/API/ShadowRoot), содержимое этого {{HTMLElement("dl")}} заменяет [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из [теневого корня](/ru/docs/Web/API/ShadowRoot).
- Поскольку второй **`<element-details>`** явно не ссылается на [именованный слот](/ru/docs/Web/HTML/Reference/Elements/slot#name) `"attributes"` из своего [теневого корня](/ru/docs/Web/API/ShadowRoot), его содержимое для этого [именованного слота](/ru/docs/Web/HTML/Reference/Elements/slot#name) заполняется содержимым по умолчанию из [теневого корня](/ru/docs/Web/API/ShadowRoot).
