---
title: font-family
slug: Web/CSS/font-family
---

{{CSSRef}}

CSS-свойство **`font-family`** определяет приоритетный список из одного или нескольких названий семейства шрифтов и/или общее имя шрифта для выбранного элемента.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Значения разделены запятыми, чтобы указать, что они являются альтернативами. Браузер выберет из списка первый шрифт, который установлен или может быть скачан используя правило {{cssxref("@font-face")}} .

Часто удобно использовать сокращённое свойство {{cssxref("font")}}, чтобы задать `font-size` и другие свойства, которые относятся к шрифту.

Вы всегда должны добавлять по крайней мере одно имя общего семейства шрифтов, так как нет гарантии, что какой-либо из указанных шрифтов будет доступен. Это позволит браузеру выбрать подходящий запасной шрифт, когда возникнет необходимость.

Свойство `font-family` определяет список шрифтов в приоритете от высшего к низшему. Процесс выбора шрифта не останавливается после первого шрифта, найденного в системе пользователя. Скорее, выбор шрифта выполняется _по одному символу за раз_, поэтому если в доступном шрифте нет глифы для нужного символа, пробуются следующие по списку шрифты. (Однако, это не работает в Internet Explorer 6 и ранее.) Когда шрифт доступен только в некоторых {{cssxref('font-style','стилях')}}, {{cssxref('font-variant','видах')}} или {{cssxref('font-size','размерах')}}, эти свойства могут так же влиять на выбор шрифта.

## Синтаксис

```css
/* Имя шрифта и общие семейства шрифтов */
font-family:
  Gill Sans Extrabold,
  sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* Только общие семейства */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* Глобальные значения */
font-family: inherit;
font-family: initial;
font-family: unset;
```

Свойство `font-family` получает список из одного или более семейства шрифтов, разделённые запятыми. Каждое семейство шрифтов определяется как [`<family-name>`](#family-name) или [`<generic-name>`](#generic-name).

В приведённом ниже примере перечислены два семейства шрифтов, первое [`<family-name>`](#family-name), а второе как `<generic-name>`:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

### Значения

- `<family-name>`
  - : Имя семейства шрифтов. К примеру, "Times" и "Helvetica" это семейства шрифтов. Названия семейства шрифтов, которые содержат пробелы, должны быть взяты в кавычки.
- `<generic-name>`
  - : Общие семейства шрифтов используются как резервный механизм для сохранения некоторого авторского стиля в момент, когда ни один из желаемых шрифтов недоступен. Общие семейства шрифтов являются ключевыми словами и **не** должны браться в кавычки. Общее семейство шрифтов должно определяться последним в списке семейств шрифтов. Определены следующие ключевые слова:
    - `serif`
      - : Глифы имеют завершающие штрихи, расширяющиеся или сужающиеся концы, или имеют фактически зазубренные окончания.
        Например, "Lucida Bright", "Lucida Fax", Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif.
    - `sans-serif`
      - : Глифы имеют гладкие окончания.
        Например, "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L", sans-serif.
    - `monospace`
      - : Все глифы имеют одинаковую фиксированную ширину.
        Например, "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace.
    - `cursive`
      - : Глифы в курсивных шрифтах обычно имеют либо соединительные штрихи, либо другие рукописные характеристики, отличные от наклонных (italic) шрифтов. Глифы частично или полностью связаны, и результат больше напоминает рукописное перо или кисть, чем печатные буквы. Например, "Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery", cursive.
    - `fantasy`
      - : Фэнтезийные шрифты - это прежде всего декоративные шрифты, которые содержат игривое представление персонажей. Например, Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.
    - `system-ui`
      - : Глифы, взятые из дефолтного шрифта пользовательского интерфейса на данной платформе. Поскольку типографские традиции широко варьируются по всему миру, это общее семейство предназначено для гарнитур, которые не отображаются точно в других общих семействах.
    - `math`
      - : Это семейство предназначено для особых стилистических задач представления математики: верхний индекс и нижний индекс, скобки, которые пересекают несколько строк, вложенные выражения и двойные глифы с различными значениями.
    - `emoji`
      - : Шрифты, специально предназначенные для отображения эмодзи.
    - `fangsong`
      - : Особый стиль китайских иероглифов, который является чем-то средним между стилем с засечками Song и курсивным стилем Кай. Этот стиль часто используется для правительственных документов.

### Валидные имена семейства шрифтов

Имена семейств шрифтов должны быть указаны либо в виде строк в кавычках, либо в виде последовательности одного или нескольких идентификаторов без кавычек. Если имя семейства шрифтов содержит цифры или знаки пунктуации, такое имя должно быть заключено в кавычки.

Например, следующие объявления являются валидными:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

Следующие объявления являются **не валидными**:

```css example-bad
font-family:
  Goudy Bookletter 1911,
  sans-serif;
font-family: Red/Black, sans-serif;
font-family:
  "Lucida" Grande,
  sans-serif;
font-family: Ahem!, sans-serif;
font-family:
  test @foo,
  sans-serif;
font-family: #POUND, sans-serif;
font-family:
  Hawaii 5-0,
  sans-serif;
```

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Некоторые общие семейства шрифтов

```css
.serif {
  font-family:
    Times,
    Times New Roman,
    Georgia,
    serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family:
    Lucida Console,
    Courier,
    monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">This is an example of a serif font.</div>

<div class="sansserif">This is an example of a sans-serif font.</div>

<div class="monospace">This is an example of a monospace font.</div>

<div class="cursive">This is an example of a cursive font.</div>

<div class="fantasy">This is an example of a fantasy font.</div>

<div class="math">This is an example of a math font.</div>

<div class="emoji">This is an example of an emoji font.</div>

<div class="fangsong">This is an example of a fangsong font.</div>
```

{{ EmbedLiveSample('Некоторые_общие_семейства_шрифтов','600','120') }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

\[1] `system-ui` в данный момент не реализовано, смотри {{bug(1226042)}}.

\[2] `system-ui` реализовано в Safari ([wkbug.com/151493](https://bugs.webkit.org/show_bug.cgi?id=151493)), возможно будет выпущено в ближайшем времени.

\[3] префиксный алиас `-apple-system` поддерживается в Safari, начиная с OS X 10.11 и iOS 9, а также в Firefox 43 на macOS ({{bug(1201318)}}).
