---
title: "<template>: элемент шаблона контента"
slug: Web/HTML/Element/template
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент шаблона контента **`<template>`** служит механизмом хранения фрагментов {{Glossary("HTML")}}, которые могут быть использованы позже при помощи JavaScript или немедленно сгенерированы в теневом DOM.

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `shadowrootmode`

  - : Создает [теневой корень](/ru/docs/Glossary/Shadow_tree) для родительского элемента.
    Это декларативная версия метода {{domxref("Element.attachShadow()")}} и принимает те же {{glossary("enumerated", "перечисляемые")}} значения.

    - `open`

      - : Открывает внутренний DOM теневого корня для JavaScript (рекомендуется для большинства случаев использования).

    - `closed`

      - : Скрывает внутренний DOM теневого корня от JavaScript.

    > [!NOTE]
    > HTML-парсер создает объект {{domxref("ShadowRoot")}} в DOM для первого `<template>` в узле с установленным этим атрибутом на допустимое значение.
    > Если атрибут не установлен или имеет недопустимое значение — или если `ShadowRoot` уже был создан декларативно в том же родительском узле — то создается {{domxref("HTMLTemplateElement")}}.
    > {{domxref("HTMLTemplateElement")}} не может быть позже преобразован в теневой корень после разбора, например, путем установки {{domxref("HTMLTemplateElement.shadowRootMode")}}.

    > [!NOTE]
    > Вы можете найти нестандартный атрибут `shadowroot` в старых руководствах и примерах, которые ранее поддерживались в Chrome 90-110. Этот атрибут был удален и заменен стандартным атрибутом `shadowrootmode`.

- `shadowrootclonable`

  - : Устанавливает значение свойства [`clonable`](/ru/docs/Web/API/ShadowRoot/clonable) для [`ShadowRoot`](/ru/docs/Web/API/ShadowRoot), созданного с использованием этого элемента, в `true`.
    Если установлен, клон теневого хоста (родительского элемента этого `<template>`), созданный с помощью {{domxref("Node.cloneNode()")}} или {{domxref("Document.importNode()")}}, будет включать теневой корень в копию.

- `shadowrootdelegatesfocus`

  - : Устанавливает значение свойства [`delegatesFocus`](/ru/docs/Web/API/ShadowRoot/delegatesFocus) для [`ShadowRoot`](/ru/docs/Web/API/ShadowRoot), созданного с использованием этого элемента, в `true`.
    Если установлен и выбран нефокусируемый элемент в теневом дереве, то фокус делегируется первому фокусируемому элементу в дереве.
    Значение по умолчанию - `false`.

- `shadowrootserializable` {{experimental_inline}}

  - : Устанавливает значение свойства [`serializable`](/ru/docs/Web/API/ShadowRoot/serializable) для [`ShadowRoot`](/ru/docs/Web/API/ShadowRoot), созданного с использованием этого элемента, в `true`.
    Если установлено, теневой корень может быть сериализован путем вызова методов {{DOMxRef('Element.getHTML()')}} или {{DOMxRef('ShadowRoot.getHTML()')}} с параметром `options.serializableShadowRoots`, установленным в `true`.
    Значение по умолчанию - `false`.

## Примечания по использованию

Существует два основных способа использования элемента `<template>`.

### Фрагмент документа шаблона

По умолчанию содержимое элемента не отображается.
Интерфейс {{domxref("HTMLTemplateElement")}} включает стандартное свойство {{domxref("HTMLTemplateElement.content", "content")}} (без эквивалентного атрибута содержимого/разметки). Это свойство `content` является только для чтения и содержит {{domxref("DocumentFragment")}}, который представляет поддерево DOM, заданное шаблоном.
Этот фрагмент можно клонировать с помощью метода {{domxref("Node.cloneNode", "cloneNode")}} и вставить в DOM.

Будьте осторожны при использовании свойства `content`, так как возвращаемый `DocumentFragment` может иметь неожиданные свойства.
Для получения более подробной информации см. раздел [Избегание ошибок DocumentFragment](#avoiding_documentfragment_pitfalls) ниже.

### Декларативный теневой DOM

Если элемент `<template>` содержит атрибут [`shadowrootmode`](#shadowrootmode) со значением `open` или `closed`, HTML-парсер немедленно создает теневой DOM. Элемент заменяется в DOM его содержимым, заключенным в {{domxref("ShadowRoot")}}, который присоединен к родительскому элементу.
Это декларативный эквивалент вызова {{domxref("Element.attachShadow()")}} для присоединения теневого корня к элементу.

Если элемент имеет другое значение для `shadowrootmode` или не имеет атрибута `shadowrootmode`, парсер создает {{domxref("HTMLTemplateElement")}}.
Аналогично, если есть несколько декларативных теневых корней, только первый будет заменен на {{domxref("ShadowRoot")}} — последующие экземпляры будут разобраны как объекты {{domxref("HTMLTemplateElement")}}.

## Примеры

### Генерация строк таблицы

Начнём с HTML.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- данные будут вставлены сюда -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Для начала у нас есть таблица, в которую мы собираемся вставить контент с помощью Javascript. За таблицей следует шаблон, который описывает структуру HTML-фрагмента — строку таблицы.

Теперь, когда таблица была создана, а шаблон определён, используем JavaScript, чтобы вставить строки в таблицу. Каждая строка будет строиться по шаблону.

```js
// Убеждаемся, что браузер поддерживает тег <template>,
// проверив наличие атрибута content у элемента template.
if ("content" in document.createElement("template")) {
  // Находим элемент tbody таблицы
  // и шаблон строки
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  // Клонируем новую строку и вставляем её в таблицу
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // Клонируем новую строку ещё раз и вставляем её в таблицу
  const clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);
} else {
  // Иной способ заполнить таблицу, потому что
  // HTML-элемент template не поддерживается.
}
```

Как результат имеем HTML-таблицу с двумя новыми строками, добавленными с помощью JavaScript:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Examples", 500, 120)}}

### Реализация декларативного теневого DOM

В этом примере скрытое предупреждение добавляется в начале разметки. Оно затем будет показано через JavaScript, если браузер не поддерживает атрибут `shadowrootmode`. Далее следуют два элемента {{HTMLElement("article")}}, каждый из которых содержит вложенные элементы {{HTMLElement("style")}} с различным поведением. Первый `<style>` глобален для всего документа. Второй имеет область видимости, ограниченную теневым корнем, созданным вместо элемента `<template>`, благодаря наличию атрибута `shadowrootmode`.

```html
<p hidden>
  ⛔ Ваш браузер еще не поддерживает атрибут <code>shadowrootmode</code>.
</p>
<article>
  <style>
    p {
      padding: 8px;
      background-color: wheat;
    }
  </style>
  <p>Я нахожусь в DOM.</p>
</article>
<article>
  <template shadowrootmode="open">
    <style>
      p {
        padding: 8px;
        background-color: plum;
      }
    </style>
    <p>Я нахожусь в теневом DOM.</p>
  </template>
</article>
```

```js
const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty("shadowRootMode");

document
  .querySelector("p[hidden]")
  .toggleAttribute("hidden", isShadowRootModeSupported);
```

{{EmbedGHLiveSample("dom-examples/shadow-dom/shadowrootmode/scoping.html", "", "120")}}

### Декларативный теневой DOM с делегированием фокуса

Этот пример демонстрирует, как `shadowrootdelegatesfocus` применяется к теневому корню, созданному декларативно, и как это влияет на фокус.

Сначала в `<div>` объявляется теневой корень с помощью элемента `<template>` с атрибутом `shadowrootmode`.
Это отображает и нефокусируемый `<div>`, содержащий текст, и фокусируемый элемент `<input>`.
Также используется CSS для стилизации элементов с [`:focus`](/ru/docs/Web/CSS/:focus) синим цветом и для обычной стилизации элемента-хоста.

```html
<div>
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Кликабельный текст в теневом DOM</div>
    <input type="text" placeholder="Инпут внутри теневого DOM" />
  </template>
</div>
```

Второй блок кода идентичен, за исключением того, что он устанавливает атрибут `shadowrootdelegatesfocus`, который делегирует фокус первому фокусируемому элементу в дереве, если выбран нефокусируемый элемент в дереве.

```html
<div>
  <template shadowrootmode="open" shadowrootdelegatesfocus>
    <style>
      :host {
        display: block;
        border: 1px dotted black;
        padding: 10px;
        margin: 10px;
      }
      :focus {
        outline: 2px solid blue;
      }
    </style>
    <div>Кликабельный текст в теневом DOM</div>
    <input type="text" placeholder="Ввод внутри теневого DOM" />
  </template>
</div>
```

Наконец, мы используем следующий CSS для применения границы желто-зеленого цвета к родительскому элементу `<div>`, когда он имеет фокус.

```css
div:focus {
  border: 2px solid red;
}
```

Результаты показаны ниже.
Когда HTML впервые отображается, элементы не имеют стилизации, как показано на первом изображении.
Для теневого корня, у которого не установлен `shadowrootdelegatesfocus`, вы можете нажать в любом месте, кроме `<input>`, и фокус не изменится (если выбрать элемент `<input>`, он будет выглядеть как на втором изображении).

![Скриншот кода без установленного фокуса](template_with_no_focus.png)

Для теневого корня с установленным `shadowrootdelegatesfocus`, нажатие на текст (который нефокусируем) выбирает элемент `<input>`, так как это первый фокусируемый элемент в дереве.
Это также фокусирует родительский элемент, как показано ниже.

![Скриншот кода с установленным фокусом](template_with_focus.png)

## Ловушка `DocumentFragment`

Когда значение {{domxref("DocumentFragment")}} передается, методы {{domxref("Node.appendChild")}} и подобные перемещают только _дочерние узлы_ этого значения в целевой узел. Поэтому обычно предпочтительнее привязывать обработчики событий к дочерним элементам `DocumentFragment`, а не к самому `DocumentFragment`.

Рассмотрим следующие HTML-разметку и JavaScript-код:

### HTML

```html
<div id="container"></div>

<template id="template">
  <div>Кликни на меня</div>
</template>
```

### JavaScript

```js
const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  event.target.append(" — Вы кликнули на этот div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.cloneNode(true);
secondClone.children[0].addEventListener("click", clickHandler);
container.appendChild(secondClone);
```

### Результат

Поскольку `firstClone` является `DocumentFragment`, только его дочерние элементы добавляются в `container` при вызове `appendChild`; обработчики событий `firstClone` не копируются. В отличие от этого, поскольку обработчик событий добавлен к первому _дочернему узлу_ `secondClone`, обработчик событий копируется при вызове `appendChild`, и клик по нему работает так, как ожидалось.

{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}

## Техническая

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories"
          >Категории контента</a
        >
      </th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#метаданные"
          >Метаданные</a
        >,
        <a href="/ru/docs/Web/HTML/Content_categories#основной_поток"
          >основной поток</a
        >,
        <a href="/ru/docs/Web/HTML/Content_categories#фразовый_контент"
          >фразовый контент</a
        >,
        <a
          href="/ru/docs/Web/HTML/Content_categories#элементы_поддержки_скриптов"
          >элементы поддержки скриптов</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимый контент</th>
      <td>Нет ограничений</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Отсутствует, открывающий и закрывающий теги обязательны.</td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        Любой элемент, принимающий
        <a href="/ru/docs/Web/HTML/Content_categories#метаданные"
          >метаданные</a
        >,
        <a href="/ru/docs/Web/HTML/Content_categories#фразовый_контент"
          >фразовый контент</a
        >, или
        <a
          href="/ru/docs/Web/HTML/Content_categories#элементы_поддержки_скриптов"
          >элементы поддержки скриптов</a
        >. Также разрешено как дочерний элемент элемента {{HTMLElement("colgroup")}}, у которого <em>нет</em> атрибута <a href="/ru/docs/Web/HTML/Element/colgroup#span"><code>span</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Нет соответствующей роли</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Роли не допускаются</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>{{domxref("HTMLTemplateElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-атрибуты [`part`](/ru/docs/Web/HTML/Global_attributes/part) и [`exportparts`](/ru/docs/Web/HTML/Global_attributes/exportparts)
- HTML-элемент {{HTMLElement("slot")}}
- CSS-псевдоклассы {{CSSXref(":host")}}, {{CSSXref(":host_function", ":host()")}} и {{CSSXref(":host-context", ":host-context()")}}
- CSS-псевдоэлементы {{CSSXref("::part")}} и {{CSSXref("::slotted")}}
- Интерфейс [`ShadowRoot`](/ru/docs/Web/API/ShadowRoot)
- [Использование шаблонов и слотов](/ru/docs/Web/API/Web_components/Using_templates_and_slots)
- Модуль [CSS scoping](/ru/docs/Web/CSS/CSS_scoping)
- [Декларативный теневой DOM (с использованием html)](/ru/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html) в _Using Shadow DOM_
- [Декларативный теневой DOM](https://web.dev/articles/declarative-shadow-dom) на web.dev (2023)
