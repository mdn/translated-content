---
title: Использование пользовательских элементов
slug: Web/API/Web_components/Using_custom_elements
---

{{DefaultAPISidebar("Web Components")}}

Одна из ключевых особенностей стандарта Веб-компонент это возможность создавать пользовательские элементы на HTML-странице, инкапсулирующие функциональность, вместо того чтобы создавать длинную, вложенную группу элементов, которые бы вместе реализовывали нужную пользовательскую фичу. Эта статья является вводной по использованию пользовательских HTML-компонент.

> **Примечание:** Пользовательские элементы поддерживаются по умолчанию в Firefox, Chrome и Opera. Safari пока поддерживает только автономные пользовательские компоненты, Edge также работает над реализацией.

## Высокоуровневый обзор

Контроллером пользовательских элементов веб-документа является объект {{domxref("CustomElementRegistry")}} — этот элемент позволяет регистрировать пользовательские элементы на веб-странице, возвращает информацию о зарегистрированных элементах и т.п.

Чтобы зарегистрировать пользовательский элемент на странице, используйте метод {{domxref("CustomElementRegistry.define()")}} method. Он принимает аргументы:

- {{domxref("DOMString")}} - имя элемента. Обратите внимание, что в именах пользовательских элементах [должен содержаться дефис](https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name); они не могут состоять только из одного слова.
- Объект типа [class](/ru/docs/Web/JavaScript/Reference/Classes), определяющий поведение элемента.
- Опционально объект options, имеющий свойство `extends`, соответствующее встроенному элементу, от которого наследует объект.

К примеру, мы можем определить пользовательский элемент [word-count element](https://mdn.github.io/web-components-examples/word-count-web-component/):

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

Этот элемент называется `word-count`, объект соответствующего класса называется `WordCount`, и он наследует элементу {{htmlelement("p")}}.

Объект класса пользовательского элемента определяется с помощью синтаксиса классов ES 2015. Например, `WordCount` имеют следующую структуру:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Всегда первым делом вызывайте super() в конструкторе
    super();

    // Далее пишется функциональность элемента

    ...
  }
}
```

Это простой пример, но его можно дополнить. Можно определить специальные lifecycle callbacks, которые будут вызваны в определённые моменты жизненного цикла элемента. Например, `connectedCallback` будет вызван, когда пользовательский элемент оказывается впервые встроен в DOM, а `attributeChangedCallback` вызывается, когда пользовательскому элементу добавляют, удаляют или изменяют какой-то атрибут.

Подробнее об этом в секции [Using the lifecycle callbacks](#using_the_lifecycle_callbacks) ниже.

Есть два типа пользовательских элементов:

- **Автономные пользовательские элементы** независимы — они не наследуют встроенным HTML-элементам. Их используют на странице просто как обычный HTML-элемент. Например, `<popup-info>` или `document.createElement("popup-info")`.
- **Модифицированные встроенные элементы** наследуют базовым HTML-элементам. Чтобы создать один из них, вы определяете элемент, от которого они унаследованы (как в примерах выше), и используете их как обычный базовый элемент, но с добавлением атрибута/свойства с именем пользовательского элемента [`is`](/ru/docs/Web/HTML/Global_attributes#is). Например `<p is="word-count">`, или `document.createElement("p", { is: "word-count" })`.

## Разбор простых примеров

А сейчас давайте разберём ещё несколько простых примеров, иллюстрирующих подробности создания пользовательских элементов.

### Автономные пользовательские элементы

Рассмотрим пример автономного пользовательского элемента — [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (см. [работающий пример](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)). Он содержит изображение и строку, и встраивает изображение в страницу. Когда на изображение наводят фокус, компонент показывает всплывающую подсказку с текстом.

Прежде всего файл JavaScript определяет класс `PopUpInfo`, наследующий от {{domxref("HTMLElement")}}. Автономные пользовательские элементы почти всегда наследуют `HTMLElement`.

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Всегда первым делом вызывайте super() в конструкторе
    super();

    // далее следует функциональность элемента

    ...
  }
}
```

В этом фрагменте кода содержится определение конструктора {{jsxref("Classes.constructor","constructor")}} класса, которое всегда начинается с вызова [`super()`](/ru/docs/Web/JavaScript/Reference/Operators/super) чтобы отработала цепочка прототипного наследования.

Внутри конструктора мы определяем всю функциональность, которую получит элемент при создании его объекта. В данном случае мы добавляем shadow root к пользовательскому элементу, производим манипуляции с DOM, чтобы создать определённую структуру shadow DOM внутри элемента — которая затем присоединяется к shadow root — и наконец добавляем CSS к shadow root, чтобы задать его стиль.

```js
// Создание shadow root
var shadow = this.attachShadow({ mode: "open" });

// Создание spans
var wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
var icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
var info = document.createElement("span");
info.setAttribute("class", "info");

// Берём содержимое атрибута и добавляем его в span
var text = this.getAttribute("text");
info.textContent = text;

// Вставляем иконку
var imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
var img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);

// Создаём CSS для shadow dom
var style = document.createElement("style");

style.textContent =
  ".wrapper {" +
  // CSS truncated for brevity

  // добавляем созданные элементы к shadow dom

  shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

Наконец, регистрируем пользовательский элемент в `CustomElementRegistry` с помощью метода `define()`, который упоминался ранее — в качестве параметров мы передаём ему имя элемента и имя класса, который содержит его функциональность:

```js
customElements.define("popup-info", PopUpInfo);
```

Теперь он доступен для использования на нашей странице. В HTML мы используем его так:

```html
<popup-info
  img="img/alt.png"
  text="Код валидации вашей карты (CVC)
  это дополнительная мера безопасности — это последние 3 или 4 цифры
  на обороте вашей карты."></popup-info>
```

> **Примечание:** вы можете прочитать [полный исходный код на JavaScript](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js) здесь.

### Модифицированные встроенные элементы

Теперь давайте взглянем на другой пример модифицированного пользовательского элемента — [раскрывающийся список](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) ([см. действующий пример](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). Он превращает любой ненумерованный список в раскрывающееся/складывающееся меню.

Первым делом определим класс элемента наподобие того, как это делалось выше:

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Всегда первым делом вызываем super() в конструкторе
    super();

    // ниже следует функциональность элемента

    ...
  }
}
```

Здесь мы не будем во всех подробностях описывать функциональность элемента, вы можете понять как он работает, посмотрев исходный код. Единственное принципиальное различие с предыдущим примером состоит в том, что мы используем интерфейс {{domxref("HTMLUListElement")}}, а не {{domxref("HTMLElement")}}. Так что у него есть все характеристики элемента {{htmlelement("ul")}}, плюс дополнительная функциональность, которую определили мы. Это и отличает модифицированный встроенный элемент от автономного пользовательского элемента.

Далее мы регистрируем этот элемент с помощью метода `define()` как в прошлом примере, только на сей раз мы добавляем объект options, который определяет, какому встроенному элементу наследует данный:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

Встроенный элемент используется на веб-странице немного по-другому:

```html
<ul is="expanding-list">
  ...
</ul>
```

Вы задаёте элемент `<ul>` как обычно, но указываете имя модифицированного элемента в атрибуте `is`.

> **Примечание:** Полный [исходный код на JavaScript](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js) доступен здесь.

## Использование lifecycle callbacks

Вы можете определить несколько разных колбэков в конструкторе пользовательских элементов, которые сработают на разных этапах жизненного цикла элемента:

- `connectedCallback`: Срабатывает, когда пользовательский элемент впервые добавляется в DOM.
- `disconnectedCallback`: Срабатывает, когда пользовательский элемент удаляется из DOM.
- `adoptedCallback`: Срабатывает, когда пользовательский элемент перемещён в новый документ.
- `attributeChangedCallback`: Срабатывает, когда пользовательскому элементу добавляют, удаляют или изменяют атрибут.

Посмотрим на них в действии. Код ниже взят из примера [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) ([см. его в действии](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)). Это тривиальный пример, создающий на странице цветной квадрат. Вот как выглядит код пользовательского элемента:

```html
<custom-square l="100" c="red"></custom-square>
```

Конструктор класса очень простой — мы просто добавляем shadow DOM к элементу, а затем добавляем пустые элементы {{htmlelement("div")}} и {{htmlelement("style")}} к shadow root:

```js
var shadow = this.attachShadow({ mode: "open" });

var div = document.createElement("div");
var style = document.createElement("style");
shadow.appendChild(style);
shadow.appendChild(div);
```

Наиболее важная функция в этом примере `updateStyle()` — она принимает элемент, находит его shadow root, находит его элемент `<style>`, и добавляет {{cssxref("width")}}, {{cssxref("height")}}, и {{cssxref("background-color")}} к стилям.

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeName === "STYLE") {
      childNodes[i].textContent =
        "div {" +
        " width: " +
        elem.getAttribute("l") +
        "px;" +
        " height: " +
        elem.getAttribute("l") +
        "px;" +
        " background-color: " +
        elem.getAttribute("c");
    }
  }
}
```

Сами изменения стилей обрабатываются колбэками жизненного цикла, находящимися внутри конструктора. `connectedCallback()` срабатывает, когда элемент встраивается в DOM — здесь мы запускаем функцию `updateStyle()` которая обеспечивает, чтобы квадрат имел стиль, описанный в его атрибутах:

```js
connectedCallback() {
  console.log('Пользовательский элемент квадрат добавлен на страницу.');
  updateStyle(this);
}
```

колбэки `disconnectedCallback()` и `adoptedCallback()` логируют простые сообщения на консоль, которые уведомляют нас, что элемент удалён из DOM или перемещён на другую страницу:

```js
disconnectedCallback() {
  console.log('Пользовательский элемент квадрат удален.');
}

adoptedCallback() {
  console.log('Пользовательский элемент квадрат перемещён на другую страницу.');
}
```

Колбэк `attributeChangedCallback()` запускается когда один из атрибутов элемента меняется. Как видно из его свойств, можно воздействовать на индивидуальные атрибуты, глядя на их имена, и новые и старые значения атрибутов. В данном случае, однако, мы просто снова запускаем функцию `updateStyle()` чтобы убедиться, что атрибуты квадрата получили новые значения:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Атрибуты пользовательского элемента квадрат изменились.');
  updateStyle(this);
}
```

Обратите внимание, что нужно наблюдать за атрибутами, чтобы запустить колбэк `attributeChangedCallback()` когда они изменятся. Это делается через вызов геттера `observedAttributes()` в конструкторе, который содержит оператор `return` возвращающий массив с именами атрибутов, которые вы хотите наблюдать:

```js
static get observedAttributes() {return ['w', 'l']; }
```

В нашем случае он расположен в начале конструктора.

> **Примечание:** Смотрите [полный исходный код на JavaScript](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js) здесь.
