---
title: "Element: метод setAttribute()"
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 674ac8f0b0c639967d29951b5e6f3f65c656f164
---

{{APIRef("DOM")}}

Метод **`setAttribute()`** интерфейса {{domxref("Element")}} устанавливает значение атрибута для указанного элемента. Если атрибут уже существует, то его значение будет обновлено, а если нет, то будет добавлен атрибут с соответствующим именем и значением.

Для получения текущего значения атрибута используйте {{domxref("Element.getAttribute", "getAttribute()")}}, для удаления нужно вызвать {{domxref("Element.removeAttribute", "removeAttribute()")}}.

Если необходимо поработать с {{domxref("Attr", "атрибутами")}} узла (например, при клонировании другого элемента) перед его добавлением, можно использовать метод {{domxref("Element.setAttributeNode()", "setAttributeNode()")}}.

## Синтаксис

```js-nolint
setAttribute(name, value)
```

### Параметры

- `name`
  - : Строка, представляющая имя атрибута, для которого устанавливается значение. Имя атрибута автоматически преобразуется в нижний регистр если `setAttribute()` вызывается для HTML-элемента в HTML-документе.
- `value`
  - : Строка, содержащая значение для установки. Любое нестроковое значение автоматически преобразуется в строку.

Логические атрибуты считаются равными `true`, если они есть у элемента, вне зависимости от значения. Следует устанавливать в качестве значения для `value` пустую строку (`""`) или имя атрибута без пробелов в начале и конце. Смотрите [пример](#примеры) ниже для наглядной демонстрации.

Поскольку значение `value` преобразуется в строку, присвоение значения `null` не приводит к удалению атрибута или установке его значения в [`null`](/ru/docs/Web/JavaScript/Reference/Operators/null). Вместо этого произойдёт установка значения равного строке `"null"`. Для удаления атрибута необходимо вызвать {{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

### Исключения

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Возникает если значение [`name`](#name) не является корректным [именем XML](https://www.w3.org/TR/REC-xml/#dt-name) (например, начинается с цифры, дефиса или точки или содержит символы, отличные от буквенно-цифровых символов, символов подчеркивания, дефисов и точек).

## Примеры

В следующем примере `setAttribute()` используется для установки атрибута элемента {{HTMLElement("button")}}.

### HTML

```html
<button>Привет, мир!</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('Примеры', '300', '50') }}

Этот пример иллюстрирует два аспекта:

- Первый вызов `setAttribute()` изменяет значение атрибута `name` на "helloButton". Это можно увидеть с помощью инспектора кода в браузере ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties), [Edge](https://learn.microsoft.com/ru-ru/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac)).
- Используемое значение при установке логического атрибута не важно. Само наличие атрибута означает, что он равен `true`, а отсутствие — `false`. Таким образом, присваивая значению атрибута `disabled` пустую строку (`""`), мы переключаем `disabled` в `true`, что приводит к отключению кнопки. В качестве значения для логических атрибутов рекомендуется использовать пустую строку или имя самого атрибута.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
