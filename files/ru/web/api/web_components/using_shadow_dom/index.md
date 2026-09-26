---
title: Использование shadow DOM
slug: Web/API/Web_components/Using_shadow_DOM
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Web Components")}}

Важный аспект пользовательских элементов — инкапсуляция, ведь пользовательский элемент по определению представляет собой переиспользуемый кусок функциональности: его можно добавить на любую веб-страницу и ожидать, что он заработает. Поэтому важно, чтобы код, выполняющийся на странице, не мог случайно сломать пользовательский элемент, изменив его внутреннюю реализацию. Shadow DOM позволяет вам присоединить к элементу DOM-дерево, спрятав внутренности этого дерева от JavaScript и CSS, работающих на странице.

Эта статья описывает основы использования shadow DOM.

## Высокоуровневый обзор

В статье предполагается, что вы уже знакомы с понятием [DOM (Document Object Model)](/ru/docs/Web/API/Document_Object_Model) — древовидной структуры связанных узлов, представляющей различные элементы и строки текста, встречающиеся в размеченном документе (обычно это HTML-документ в случае веб-документов). Для примера рассмотрим следующий HTML-фрагмент:

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>DOM example</title>
  </head>
  <body>
    <section>
      <img src="dinosaur.png" alt="A red Tyrannosaurus Rex." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Этот фрагмент порождает следующую DOM-структуру (без текстовых узлов, состоящих только из пробельных символов):

```plain
- HTML
    - HEAD
        - META charset="utf-8"
        - TITLE
            - #text: DOM example
    - BODY
        - SECTION
            - IMG src="dinosaur.png" alt="A red Tyrannosaurus Rex."
            - P
                - #text: Here we will add a link to the
                - A href="https://www.mozilla.org/"
                    - #text: Mozilla homepage
```

_Shadow_ DOM позволяет присоединять скрытые DOM-деревья к элементам обычного DOM-дерева — такое shadow DOM-дерево начинается с теневого корня (shadow root), под которым вы можете присоединять любые элементы точно так же, как в обычном DOM.

![SVG-версия диаграммы, показывающая взаимодействие документа, теневого корня и теневого хоста.](shadowdom.svg)

Есть несколько терминов shadow DOM, о которых стоит знать:

- **Теневой хост (shadow host)**: обычный DOM-узел, к которому присоединён shadow DOM.
- **Теневое дерево (shadow tree)**: DOM-дерево внутри shadow DOM.
- **Теневая граница (shadow boundary)**: место, где заканчивается shadow DOM и начинается обычный DOM.
- **Теневой корень (shadow root)**: корневой узел теневого дерева.

Вы можете воздействовать на узлы shadow DOM ровно так же, как на обычные, не-теневые узлы — например добавлять потомков или устанавливать атрибуты, стилизовать отдельные узлы через `element.style.foo` или добавлять стили ко всему shadow DOM-дереву внутри элемента {{htmlelement("style")}}. Разница в том, что никакой код внутри shadow DOM не может повлиять на что-либо снаружи, что и обеспечивает удобную инкапсуляцию.

До того как shadow DOM стал доступен веб-разработчикам, браузеры уже использовали его для инкапсуляции внутренней структуры элемента. Вспомните, например, элемент {{htmlelement("video")}} с показанными стандартными элементами управления браузера. В DOM вы видите только элемент `<video>`, но внутри его shadow DOM он содержит набор кнопок и других элементов управления. Спецификация shadow DOM даёт вам возможность управлять shadow DOM ваших собственных пользовательских элементов.

### Наследование атрибутов

Теневое дерево и элементы {{ HTMLElement("slot") }} наследуют атрибуты [`dir`](/ru/docs/Web/HTML/Reference/Global_attributes/dir) и [`lang`](/ru/docs/Web/HTML/Reference/Global_attributes/lang) от своего теневого хоста.

## Создание shadow DOM

### Императивно, с помощью JavaScript

Следующая страница содержит два элемента: элемент {{htmlelement("div")}} с [`id`](/ru/docs/Web/HTML/Reference/Global_attributes/id), равным `"host"`, и элемент {{htmlelement("span")}} с некоторым текстом:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

Мы будем использовать элемент `"host"` как теневой хост. Мы вызываем {{domxref("Element.attachShadow()", "attachShadow()")}} на хосте, чтобы создать shadow DOM, а затем можем добавлять в shadow DOM узлы так же, как и в основной DOM. В этом примере мы добавляем единственный элемент `<span>`:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Результат выглядит так:

{{EmbedLiveSample("Императивно, с помощью JavaScript")}}

### Декларативно, с помощью HTML

Создание shadow DOM через JavaScript API может быть хорошим вариантом для приложений с рендерингом на стороне клиента. Для других приложений интерфейс, отрендеренный на стороне сервера, может обеспечить лучшую производительность и, как следствие, лучший пользовательский опыт. В таких случаях вы можете использовать элемент {{htmlelement("template")}}, чтобы декларативно определить shadow DOM. Ключом к такому поведению является {{glossary("enumerated", "перечисляемый")}} атрибут `shadowrootmode`, который может быть установлен в значение `open` или `closed` — те же значения, что и у опции `mode` метода {{domxref("Element.attachShadow()", "attachShadow()")}}.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>I'm in the shadow DOM</span>
  </template>
</div>
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/simple.html", "", "")}}

> [!NOTE]
> По умолчанию содержимое `<template>` не отображается. В данном случае, поскольку был указан `shadowrootmode="open"`, теневой корень отрисовывается. В поддерживающих браузерах видимое содержимое внутри этого теневого корня отображается.

После того как браузер разберёт HTML, он заменяет элемент {{htmlelement("template")}} его содержимым, обёрнутым в [теневой корень](/ru/docs/Glossary/Shadow_tree), присоединённый к родительскому элементу — в нашем примере это `<div id="host">`. Получившееся DOM-дерево выглядит так (элемента `<template>` в DOM-дереве нет):

```plain
- DIV id="host"
  - #shadow-root
    - SPAN
      - #text: I'm in the shadow DOM
```

Обратите внимание, что помимо `shadowrootmode` вы можете использовать такие атрибуты `<template>`, как `shadowrootclonable` и `shadowrootdelegatesfocus`, чтобы задать другие свойства сгенерированного теневого корня.

## Инкапсуляция от JavaScript

Пока что это может выглядеть не очень впечатляюще. Но давайте посмотрим, что произойдёт, если код, работающий на странице, попытается получить доступ к элементам внутри shadow DOM.

Эта страница такая же, как предыдущая, только мы добавили два элемента {{htmlelement("button")}}.

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase span elements</button>
<button id="reload" type="button">Reload</button>
```

Нажатие на кнопку «Uppercase span elements» находит все элементы `<span>` на странице и переводит их текст в верхний регистр.
Нажатие на кнопку «Reload» просто перезагружает страницу, чтобы можно было попробовать снова.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(document.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Если вы нажмёте «Uppercase span elements», то увидите, что {{domxref("Document.querySelectorAll()")}} не находит элементы в нашем shadow DOM: они фактически скрыты от JavaScript на странице:

{{EmbedLiveSample("Инкапсуляция от JavaScript")}}

## Element.shadowRoot и параметр «mode»

В примере выше мы передаём аргумент `{ mode: "open" }` в `attachShadow()`. Когда `mode` установлен в `"open"`, JavaScript на странице может получить доступ к внутренностям вашего shadow DOM через свойство {{domxref("Element.shadowRoot", "shadowRoot")}} теневого хоста.

В этом примере, как и ранее, HTML содержит теневой хост, элемент `<span>` в основном DOM-дереве и две кнопки:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
<br />

<button id="upper" type="button">Uppercase shadow DOM span elements</button>
<button id="reload" type="button">Reload</button>
```

На этот раз кнопка «Uppercase» использует `shadowRoot`, чтобы найти элементы `<span>` в DOM:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);

const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

На этот раз JavaScript, работающий на странице, может получить доступ к внутренностям shadow DOM:

{{EmbedLiveSample("Element.shadowRoot и параметр «mode»")}}

Аргумент `{mode: "open"}` даёт странице способ нарушить инкапсуляцию вашего shadow DOM. Если вы не хотите давать странице такую возможность, передайте вместо него `{mode: "closed"}`, и тогда `shadowRoot` вернёт `null`.

Однако не стоит рассматривать это как надёжный механизм безопасности, поскольку есть способы его обойти — например с помощью браузерных расширений, работающих на странице. Это скорее указание на то, что странице не следует обращаться к внутренностям вашего shadow DOM-дерева.

## Инкапсуляция от CSS

В этой версии страницы HTML такой же, как в исходном варианте:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

В JavaScript мы создаём shadow DOM:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

На этот раз у нас будет немного CSS, нацеленного на элементы `<span>` на странице:

```css
span {
  color: blue;
  border: 1px solid black;
}
```

CSS страницы не влияет на узлы внутри shadow DOM:

{{EmbedLiveSample("Инкапсуляция от CSS")}}

## Применение стилей внутри shadow DOM

В этом разделе мы рассмотрим два разных способа применения стилей внутри shadow DOM-дерева:

- [_Программно_](#собираемые_таблицы_стилей), создав объект {{domxref("CSSStyleSheet")}} и присоединив его к теневому корню.
- [_Декларативно_](#добавление_элементов_style_в_объявление_template), добавив элемент {{htmlelement("style")}} в объявление элемента {{htmlelement("template")}}.

В обоих случаях стили, определённые в shadow DOM-дереве, ограничены (scoped) этим деревом: так же как стили страницы не влияют на элементы в shadow DOM, стили shadow DOM не влияют на элементы в остальной части страницы.

### Собираемые таблицы стилей

Чтобы стилизовать элементы страницы в shadow DOM с помощью собираемых таблиц стилей (constructable stylesheets), мы можем:

1. Создать пустой объект {{domxref("CSSStyleSheet")}}
2. Задать его содержимое с помощью {{domxref("CSSStyleSheet.replace()")}} или {{domxref("CSSStyleSheet.replaceSync()")}}
3. Добавить его к теневому корню, присвоив свойству {{domxref("ShadowRoot.adoptedStyleSheets")}}

Правила, определённые в `CSSStyleSheet`, будут ограничены shadow DOM-деревом, а также любыми другими DOM-деревьями, которым мы его присвоили.

Вот, снова, HTML, содержащий наш хост и `<span>`:

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

На этот раз мы создадим shadow DOM и присвоим ему объект `CSSStyleSheet`:

```js
const sheet = new CSSStyleSheet();
sheet.replaceSync("span { color: red; border: 2px dotted black;}");

const host = document.querySelector("#host");

const shadow = host.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [sheet];

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";
shadow.appendChild(span);
```

Стили, определённые в shadow DOM-дереве, не применяются к остальной части страницы:

{{EmbedLiveSample("Собираемые таблицы стилей")}}

### Добавление элементов `<style>` в объявление `<template>`

Альтернатива созданию объектов `CSSStyleSheet` — включить элемент {{htmlelement("style")}} внутрь элемента {{htmlelement("template")}}, используемого для определения веб-компонента.

В этом случае HTML включает объявление `<template>`:

```html
<template id="my-element">
  <style>
    span {
      color: red;
      border: 2px dotted black;
    }
  </style>
  <span>I'm in the shadow DOM</span>
</template>

<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

В JavaScript мы создадим shadow DOM и добавим в него содержимое `<template>`:

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const template = document.getElementById("my-element");

shadow.appendChild(template.content);
```

И снова стили, определённые в `<template>`, применяются только внутри shadow DOM-дерева, а не в остальной части страницы:

{{EmbedLiveSample("Добавление элементов <style> в объявление <template>")}}

### Выбор между программным и декларативным подходами

Какой из этих вариантов использовать — зависит от вашего приложения и личных предпочтений.

Создание `CSSStyleSheet` и присвоение его теневому корню через `adoptedStyleSheets` позволяет создать одну таблицу стилей и разделять её между множеством DOM-деревьев. Например, библиотека компонентов могла бы создать единую таблицу стилей и затем использовать её совместно во всех пользовательских элементах, принадлежащих этой библиотеке. Браузер разберёт эту таблицу стилей один раз. Кроме того, вы можете вносить в таблицу стилей динамические изменения, и они распространятся на все компоненты, использующие эту таблицу.

Подход с присоединением элемента `<style>` хорош, если вы хотите действовать декларативно, у вас немного стилей и вам не нужно разделять стили между разными компонентами.

## Shadow DOM и пользовательские элементы

Без инкапсуляции, которую обеспечивает shadow DOM, [пользовательские элементы](/ru/docs/Web/API/Web_components/Using_custom_elements) были бы невероятно хрупкими. Странице было бы слишком легко случайно сломать поведение или вёрстку пользовательского элемента, запустив какой-нибудь JavaScript или CSS страницы. Как разработчик пользовательского элемента, вы бы никогда не знали, конфликтуют ли селекторы, применимые внутри вашего пользовательского элемента, с теми, что применяются на странице, решившей использовать ваш пользовательский элемент.

Пользовательские элементы реализуются как класс, который расширяет либо базовый {{domxref("HTMLElement")}}, либо встроенный HTML-элемент, такой как {{domxref("HTMLParagraphElement")}}. Обычно сам пользовательский элемент является теневым хостом, и элемент создаёт под этим корнем несколько элементов, обеспечивающих внутреннюю реализацию элемента.

Пример ниже создаёт пользовательский элемент `<filled-circle>`, который просто отрисовывает круг, залитый сплошным цветом.

```js
class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Создаём теневой корень
    // Сам пользовательский элемент является теневым хостом
    const shadow = this.attachShadow({ mode: "open" });

    // создаём внутреннюю реализацию
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
```

```html
<filled-circle color="blue"></filled-circle>
```

{{EmbedLiveSample("Shadow DOM и пользовательские элементы", 100, 160)}}

Больше примеров, иллюстрирующих различные аспекты реализации пользовательских элементов, смотрите в нашем [руководстве по пользовательским элементам](/ru/docs/Web/API/Web_components/Using_custom_elements).

## Смотрите также

- [Использование пользовательских элементов](/ru/docs/Web/API/Web_components/Using_custom_elements)
- [Использование шаблонов и слотов](/ru/docs/Web/API/Web_components/Using_templates_and_slots)
- {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{HTMLelement("template")}}
- Модуль [CSS scoping](/ru/docs/Web/CSS/Guides/Scoping)
- {{CSSXref(":host")}}
- {{cssxref(":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted", "::slotted()")}}
- Модуль [CSS shadow parts](/ru/docs/Web/CSS/Guides/Shadow_parts)
- {{CSSXref("::part")}}
