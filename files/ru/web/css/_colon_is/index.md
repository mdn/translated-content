---
title: ":is() (:matches(), :any())"
slug: Web/CSS/:is
---

{{CSSRef}}{{SeeCompatTable}}

> **Примечание:** `:matches()` был переименован в `:is()` в [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258).

**`:is()`** это функция [псевдокласс CSS](/ru/docs/Web/CSS) принимающая список селекторов как аргумент, и выбирает любой элемент, который может быть выбран одним из селекторов в этом списке. Это полезно при переписи огромных селекторов в более компактную форму.

Заметьте, что в данный момент браузеры поддерживают её функциональность как `:matches()`, или даже как более старый, префиксный псевдокласс — `:any()`, включая старые версии Chrome, Firefox, и Safari. `:any()` работает точно таким же образом как и `:matches()`/`:is()`, за исключением того, что `:any()` требует постановку префиксов и не поддерживает [комплексные селекторы](/ru/docs/Learn/CSS/Building_blocks/Селекторы).

```css
/* Выбирает какой-либо абзац в шапке, основной части или подвале, который зависал */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* Пример приведённый выше эквивалентен следующему */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}

/* Обратно-совместимая версия с:-*-any() и :matches()
   (Это невозможно сгруппировать селекторы в одно правило,
    так как присутствие одного неверного селектора аннулирует все правило.) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

## Синтаксис

{{CSSSyntax}}

## Примеры

### Кроссбраузерный пример

```html
<header>
  <p>Это мой параграф в шапке</p>
</header>

<main>
  <ul>
    <li>
      <p>Это первый</p>
      <p>пункт списка</p>
    </li>
    <li>
      <p>Это второй</p>
      <p>пункт списка</p>
    </li>
  </ul>
</main>

<footer>
  <p>Это мой параграф в подвале</p>
</footer>
```

```css
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
```

```js
let matchedItems;

try {
  matchedItems = document.querySelectorAll(":is(header, main, footer) p");
} catch (e) {
  try {
    matchedItems = document.querySelectorAll(
      ":matches(header, main, footer) p",
    );
  } catch (e) {
    try {
      matchedItems = document.querySelectorAll(
        ":-webkit-any(header, main, footer) p",
      );
    } catch (e) {
      try {
        matchedItems = document.querySelectorAll(
          ":-moz-any(header, main, footer) p",
        );
      } catch (e) {
        console.log(
          "Your browser doesn't support :is(), :matches(), or :any()",
        );
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener("click", function (e) {
    alert("This paragraph is inside a " + e.target.parentNode.nodeName);
  });
}
```

{{EmbedLiveSample("Кроссбраузерный_пример", "100%", 300)}}

### Упрощение списка селекторов

Псевдо-класс `:is()` может великолепно упрощать ваши CSS селекторы. К примеру, следующий CSS:

```css
/* 3-уровневые (или более) неупорядоченные списки используют свойство square */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

... можно заменить на:

```css
/* 3-уровневые (или более) неупорядоченные списки используют свойство square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

### Упрощение селекторов разделов

Псевдо-класс `:is()` особенно полезен при работе с [заголовками и разделами](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document) HTML5. C тех пор как {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, и {{HTMLElement("nav")}} обычно используют вместе, без `:is()`, стилизовать их, чтобы они соответствовали друг друг, может быть не просто.

К примеру, без `:is()`, стилизовать все {{HTMLElement("h1")}} элементы на разных уровнях может бы очень сложно:

```css
/* Уровень 0 */
h1 {
  font-size: 30px;
}
/* Уровень 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}
/* Уровень 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}
/* Уровень 3 */
/* ... даже не смей думать об этом! */
```

Используя `:is()`, как видно, это гораздо легче:

```css
/* Уровень 0 */
h1 {
  font-size: 30px;
}
/* Уровень 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Уровень 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Уровень 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### Как избежать аннулирования списка селекторов

В отличие от [списка селекторов](/ru/docs/Web/CSS/Selector_list), псевдокласс `:is()` не аннулируется, когда из селекторов, попавший туда не поддерживается браузером.

```css
:is(:valid, :unsupported) {
  ...
}
```

Будет по прежнему определяться правильно и соответствовать `:valid` даже в браузерах, которые не поддерживают `:unsupported`, в то время как:

```css
:valid, :unsupported {
  ...
}
```

Будет проигнорировано браузерами, которые не поддерживают `:unsupported` даже если они поддерживают `:valid`.

### Разница между :is() и :where()

Разница между этими двумя, в том что `:is()` учитывает спецификацию общего селектора (он принимает специфику своего самого конкретного аргумента), в то же время [`:where()`](/ru/docs/Web/CSS/:where) имеет значение спецификации равное 0. Это можно увидеть на [примере на странице документации `:where()`](/ru/docs/Web/CSS/:where#Examples).

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} - Like `:is()`, but with 0 [specificity](/ru/docs/Web/CSS/Specificity).
- [Список селекторов](/ru/docs/Web/CSS/Selector_list)
- [Веб компоненты](/ru/docs/Web/Web_Components)
