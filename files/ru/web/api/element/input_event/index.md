---
title: GlobalEventHandlers.oninput
slug: Web/API/Element/input_event
---

{{APIRef}}

Обработчик события [`input`](/ru/docs/Web/API/Element/input_event) в окне. Событие ввода возникает при изменении значения элемента {{HTMLElement ("input")}}.

Это событие пузырится. Если он поддерживается в окне, он поддерживается и в {{HTMLElement ("input")}}.

## Example

```html
<script>
  window.addEventListener(
    "input",
    function (e) {
      console.log("input event detected! coming from this element:", e.target);
    },
    false,
  );
</script>

<input placeholder="type here and see console." />
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [An HTML5 Browser maze, oninput support](https://blog.danielfriesen.name/2010/02/16/html5-browser-maze-oninput-support/)
- [Fixing oninput in IE Using html5Widgets](https://www.useragentman.com/blog/2011/05/12/fixing-oninput-in-ie9-using-html5widgets/) includes polyfill for IE6-8
- Mathias Bynens suggests [binding to both input and keydown](https://mathiasbynens.be/notes/oninput)
- [oninput event | dottoro](http://help.dottoro.com/ljhxklln.php) has notes about bugginess in IE9
- [Bug 312094 - Add support for \<select oninput>](https://bugzilla.mozilla.org/show_bug.cgi?id=312094)
