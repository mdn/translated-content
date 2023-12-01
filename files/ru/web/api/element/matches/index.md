---
title: Element.matches()
slug: Web/API/Element/matches
---

{{ APIRef("DOM") }}

## Описание

Метод **`Element.matches()`** вернёт `true` или false, в зависимости от того, соответствует ли элемент указанному css-селектору.

> **Предупреждение:** В некоторых браузерах данный метод имеет нестандартное название - `matchesSelector()`.

## Синтаксис

```
var result = element.matches(selectorString)
```

- `Результат выполнения - true или false.`
- **`selectorString`** - строка, содержащая любой css-селектор, к примеру: **"div"**, **"\*"**, **"#id"** и прочие.

## Пример

```html
<div id="one">Первый подопытный</div>
<div class="someClass" id="two">Второй подопытный</div>

<script type="text/javascript">
  var coll = document.querySelectorAll("div");
  for (var i = 0, len = coll.length; i < len; i++) {
    if (coll[i].matches(".someClass")) {
      alert(coll[i].id + ": Я выжил!");
    } else {
      coll[i].remove();
    }
  }
</script>
```

Вызов alert сработает только для второго элемента div, которому присвоен класс "someClass".

## Исключения

- `SYNTAX_ERR`
  - : Указанный css-селектор не является допустимым _("/=22=1", "&@\*#", "%%''23" и т.п приведут к ошибке)._

## Полифил

Полифил будет работать только в браузерах, поддерживающих метод document.queryselectorAll.

```js
(function (e) {
  var matches =
    e.matches ||
    e.matchesSelector ||
    e.webkitMatchesSelector ||
    e.mozMatchesSelector ||
    e.msMatchesSelector ||
    e.oMatchesSelector;
  !matches
    ? (e.matches = e.matchesSelector =
        function matches(selector) {
          var matches = document.querySelectorAll(selector);
          var th = this;
          return Array.prototype.some.call(matches, function (e) {
            return e === th;
          });
        })
    : (e.matches = e.matchesSelector = matches);
})(Element.prototype);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
