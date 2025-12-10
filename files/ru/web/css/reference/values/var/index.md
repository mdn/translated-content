---
title: var()
slug: Web/CSS/Reference/Values/var
original_slug: Web/CSS/var
---

{{CSSRef}}

[Функция](/ru/docs/Web/CSS/CSS_Functions) [CSS](/ru/docs/Web/CSS) **`var()`** используется для вставки значения [кастомного свойства](/ru/docs/Web/CSS/Reference/Properties/--*) (также известного как "CSS-переменная") в другое свойство.

{{InteractiveExample("CSS Demo: var()")}}

```css interactive-example-choice
border-color: var(--color-a);
```

```css interactive-example-choice
border-color: var(--color-b);
```

```css interactive-example-choice
border-color: var(--color-c);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    Three color options have been set on the :root use these to change the
    border color.
  </div>
</section>
```

```css interactive-example
:root {
  --color-a: pink;
  --color-b: green;
  --color-c: rebeccapurple;
}

#example-element {
  border: 10px solid #000;
  padding: 10px;
}
```

Функцию `var()` нельзя использовать в именах свойств, селекторах или где-либо ещё, кроме как в качестве значений для свойств.

## Синтаксис

Функции в качестве первого аргумента обязательно нужно передать имя кастомного свойства, значение которого нужно получить. Необязательный второй аргумент функции используется в качестве резервного значения. Если кастомное свойство, указанное в первом аргументе, оказалось недоступным, функция вернёт второе значение.

{{csssyntax}}

> [!NOTE]
> Синтаксис резервного значения, как и синтаксис кастомного свойств, допускает использование запятых. Например, `var(--foo, red, blue)` задаёт резервное значение `red, blue`; таким образом всё, что находится между первой запятой и закрывающей скобкой, считается резервным значением.

### Значения

- `<custom-property-name>`
  - : Имя кастомного свойства, начинающиеся с двух дефисов. Кастомные свойства предназначены исключительно для разработчиков и пользователей; CSS никак не влияет на них.
- `<declaration-value>`
  - : Резервное значение кастомного свойства. Используется в случае, если кастомное свойство не определено или не может быть использовано в текущем контексте. Резервное значение может содержать любой символ, кроме некоторых спецсимволов, вроде символа новой строки, непарных закрывающих скобок (т.е. `)`, `]`, или `}`), точку с запятой или восклицательный знак.

## Примеры

### Использование кастомного свойства, определенного внутри :root

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### Кастомные свойства с резервным значением, когда свойство не было установлено

```css
/* Резервное значение */
/* Стили для элементов компонента: */
.component .header {
  color: var(
    --header-color,
    blue
  ); /* header-color не существует, поэтому используется blue */
}

.component .text {
  color: var(--text-color, black);
}

/* Стили для самого компонента: */
.component {
  --text-color: #080;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("env()","env(…)")}} – доступные только для чтения переменные среды, контролируемые браузером
- [Использование CSS-переменных](/ru/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
