---
title: NavigatorID.product
slug: orphaned/Web/API/NavigatorID/product
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Свойство **`NavigatorID.product`** возвращает имя продукта текущего браузера.

> **Примечание:** Не полагайтесь на это свойство для получения настоящего имени продукта. Все браузеры возвращает "Gecko" в качестве значения этого свойства.

## Синтаксис

```
productName = window.navigator.product
```

### Значение

{{domxref("DOMString")}}.

## Пример

```html
<script>
function prod() {
  dt = document.getElementById("d");
  dt.innerHTML = window.navigator.product;
}
</script>

<button onclick="prod();">product</button>
<div id="d"> </div>
<!-- вернёт "Gecko" -->
```

## Примечание

В браузерах на основе Gecko `product` соответствует части полной строки агента пользователя которая идёт первой после платформы. В пользовательском агенте Netscape 6.1, к примеру, `product` это "Gecko" а полная строка пользовательского агента будет: `Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1`

В браузере на основе WebKit `product` вернёт "`Gecko`", хотя часть полной строки пользовательского агента непосредственно после после платформы на самом деле следующая: `(KHTML, like Gecko)`.

## Спецификации

| Спецификация                                                                                         | Статус                           | Комментарий          |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', '#dom-navigator-product', 'NavigatorID.product')}} | {{Spec2('HTML WHATWG')}} | Действующее описание |

## Доступность в браузере

{{Compat("api.NavigatorID.product")}}

## Смотрите также

- {{domxref("NavigatorID.appCodeName")}}
