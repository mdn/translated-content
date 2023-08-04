---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
---

{{APIRef("DOM")}}

Метод **`replace()`** интерфейса {{domxref("DOMTokenList")}} заменяет существующий класс на новый класс. Если первый не существует, то `replace()` сразу же возвращает `false`, без добавления нового класса в список классов.

## Синтаксис

```
tokenList.replace(oldToken, newToken);
```

### Параметры

- `oldToken`
  - : {{domxref("DOMString")}} - класс, который вы хотите заменить.
- `newToken`
  - : {{domxref("DOMString")}} класс, которым вы хотите заменить класс `oldToken`.

### Возвращает значение

Boolean, которое будет `true`, если `oldToken` был успешно заменён, или `false` в противном случае.

> **Примечание:** В старых браузерах `replace()` возвращает void.

## Примеры

В следующем примере мы получаем список классов, установленных в элементе {{htmlelement("span")}} как `DOMTokenList`, используя {{domxref("Element.classList")}}. Затем мы заменяем класс в списке и записываем список в {{domxref("Node.textContent")}}, принадлежащий `<span>`.

В HTML:

```html
<span class="a b c"></span>
```

В JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;

let result = classes.replace("c", "z");
console.log(result);

if (result) {
  span.textContent = classes;
} else {
  span.textContent = "token not replaced successfully";
}
```

Результат выглядит так:

{{ EmbedLiveSample('Примеры', '100%', 60) }}

## Полифил

Следующий полифил добавит метод replace в класс `DOMTokenList`. Следующий код будет работать только с **IE10-11**. Чтобы использовать с более ранними версиями IE, обратитесь к полифилу по {{domxref("element.classList#Polyfill")}}

```js
DOMTokenList.prototype.replace = function (a, b) {
  if (this.contains(a)) {
    this.add(b);
    this.remove(a);
    return true;
  }
  return false;
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
