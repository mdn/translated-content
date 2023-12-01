---
title: Использование CSS разметки для многих колонок
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
---

{{CSSRef("CSS Multi-columns")}}

**CSS разметка для многих колонок** расширяет _способ блочной разметки,_ чтобы позволить лёгкое описание нескольких колонок текста. Людям сложно читать текст, если строки слишком длинные; это занимает слишком много времени для глаз, чтобы перемещать взгляд с конца одной на начало следующей строки, и они забывают на какой строке находились. Поэтому, чтобы использовать большие дисплеи по максимуму, авторам следует ограничить ширину колонок текст расположенных бок о бок, как в газетах.

К несчастью, это невозможно сделать с CSS и HTML без принудительного разбиения колонки в фиксированных позициях, или строго ограничить допустимую разметку в тексте, или использовать экстраординарный скрипт. Это ограничение снимается с помощью добавления новых CSS-свойств, чтобы расширить традиционный блочный способ разметки.

## Использование колонок

### Количество колонок и ширина

Два свойства CSS контролируют появятся ли колонки и как много их будет: {{ Cssxref("column-count") }} and {{ Cssxref("column-width") }}.

`Свойство column-count` устанавливает количество колонок определённым числом. Пример,

```html
<div style="column-count:2;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

отобразит содержимое в двух колонках (если вы используете многоколоночно совместимый браузер):

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

`Свойство column-width` устанавливает минимальную желаемую ширину колонки. Если `column-count` также не установлено, тогда браузер автоматически сделает столько колонок, сколько нужно, чтобы заполнить доступную ширину.

```html
<div style="column-width:20em;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

становится:

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

Подробные детали описаны в [CSS3 спецификации](http://www.w3.org/TR/css3-multicol/).

В многоколончатом блоке, содержимое автоматически перетекает из одной колонки в следующую, как это необходимо. Вся HTML, CSS и DOM функциональность поддерживается внутри колонок, как например редактирование и печать.

### `К`краткая запись columns

В большинстве случаев веб-разработчики используют одно из двух свойств CSS: {{ cssxref("column-count") }} или {{ cssxref("column-width") }}. Так как значения для этих свойств не пересекаются, то часто удобно использовать короткую запись {{ cssxref("columns") }}. Пример:

CSS объявление `column-width:12em` может быть заменено:

```html
<div style="columns:12em">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

CSS объявление `column-count:4` может быть заменено:

```html
<div style="columns:4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

Два CSS объявления `column-width:8em` и `column-count:12` могут быть заменены:

```html
<div style="columns:12 8em">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

### Выравнивание высоты

CSS3-спецификация колонок требует, чтобы высота колонки была выровнена, т.е. браузер автоматически устанавливает максимальную высоту колонки, для того, чтобы высота содержимого в каждой из них была приблизительно одинаковая. Firefox так и делает.

Однако, в некоторых ситуациях полезно установить максимальную высоту колонок явно, тогда расположение содержимого, начиная с первой колонки и последующих созданных, как необходимо, возможно, перекроют правую границу. Поэтому, если высота ограничена, с помощью CSS {{ cssxref("height") }} или {{ cssxref("max-height") }} свойств на многоколончатом блоке, каждой колонке разрешено расти до этой высоты, но не более, пока не добавится новая колонка. Этот режим также более эффективен для разметки.

### Промежутки между колонками

Существует промежуток между колонками. По умолчанию рекомендовано значение `1em`. Это значение можно изменить, применяя свойство {{ Cssxref("column-gap") }} на многоколончатом блоке:

```html
<div style="column-width:20em; column-gap:2em;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## Постепенное ухудшение

Свойства колонки будут просто проигнорированы браузерами, которые не поддерживают многоколончатый режим. Поэтому соответственно легче создать разметку, которая отобразит содержимое в одной колонке и будет использовать несколько колонок в тех браузерах, которые поддерживают многоколончатый режим.

Обратите внимание, что не все браузеры поддерживают эти свойства без префикса. Чтобы использовать эти свойства в большинстве современных браузеров, каждое свойство должно быть написано трижды: одно с префиксом `-moz` , одно с префиксом `-webkit` и третье без префикса.

## Заключение

CSS3 колонки - примитивная разметка, которая поможет Веб-разработчикам лучше воспользоваться реальным участком экрана. Разработчики с воображением могут найти много способов для их использования, особенно с автоматическим выравниванием высоты.

## Смотрите также

- [http://weblogs.mozillazine.org/roc/a...18_for_we.html](http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)
