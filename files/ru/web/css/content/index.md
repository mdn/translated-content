---
title: content
slug: Web/CSS/content
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`content`** заменяет элемент сгенерированным значением. Объекты, добавленные с помощью свойства `content` являются _анонимными_ property are _anonymous [замещаемыми элементами](/ru/docs/Web/CSS/Replaced_element)._

```css
/* Ключевые слова, которые нельзя комбинировать с другими значениями */
content: normal;
content: none;

/* значение <url>  */
content: url("http://www.example.com/test.png");

/* значение <image>  */
content: linear-gradient(#e66465, #9198e5);

/* указанные ниже значения могут быть применены только к сгенерированному контенту с использованием ::before и ::after */

/* значение <string>  */
content: "prefix";

/* значения <counter> */
content: counter(chapter_counter);
content: counters(section_counter, ".");

/* значение attr() связано со значением атрибута HTML */
content: attr(value string);

/* языко- и позиция-зависимые ключевые слова */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* несколько значений могут использоваться вместе */
content: open-quote chapter_counter;

/* глобальные значения */
content: inherit;
content: initial;
content: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Псевдоэлемент не генерируется.
- `normal`
  - : Вычисляется `none` для псевдоэлементов `::before` и`::after`.
- {{cssxref("&lt;string&gt;")}}
  - : Любое количество текстовых символов. Нелатинские символы должны быть закодированы с использованием их escape-последовательности Unicode: например, `\000A9` представляет собой символ авторского права.
- {{cssxref("&lt;url&gt;")}}
  - : URL-адрес, указывающий на внешний ресурс (к примеру, изображение). Если ресурс не может быть отображён, он игнорируется или отображается значение по умолчанию.
- {{cssxref("&lt;image&gt;")}}
  - : {{cssxref("&lt;image&gt;")}}, указанный типом данных {{cssxref("&lt;url&gt;")}} или {{cssxref("&lt;gradient&gt;")}}, или частью веб-страницы, определяемой функцией {{cssxref("element", "element()")}}, указывающей содержимое для обозначения.
- {{cssxref("&lt;counter&gt;")}}
  - : Значение [CSS счётчика](/ru/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters), как правило число. Его можно отобразить с помощью функций {{cssxref("counter()")}} или{{cssxref("counters()")}}.Функция `counter()` имеет две формы записи: 'counter(_имя_)' или 'counter(_имя_, _стиль_)'. Сгенерированный текст - это значение самого вложенного счётчика с заданным именем в области видимости данного элемента. Он отформатирован в указанном стиле (по умолчанию `decimal`).Функция `counters()` также имеет две формы записи: 'counters(_name_, _string_)' или 'counters(_name_, _string_, _style_)'. Сгенерированный текст - это значение всех счётчиков с заданным именем в области видимости данного элемента, от крайнего к вложенному. разделённых указанной строкой. Счётчики отображаются в указанном стиле (по умолчанию `decimal`).
- `attr(x)`
  - : Значение атрибута `x` элемента в виде строки. Если атрибут `x` отсутствует, вернётся пустая строка. Чувствительность к регистру в названии атрибута зависит от языка документа.
- `open-quote` | `close-quote`
  - : Эти значения заменяются соответствующей строкой из свойства {{cssxref("quotes")}}.
- `no-open-quote` | `no-close-quote`
  - : Не вводит никакого содержимого, но увеличивает (уменьшает) уровень вложенности для кавычек.

### Синтаксис

{{csssyntax}}

## Примеры

### Заголовки и двойные кавычки

В этом примере вставляются кавычки вокруг кавычек а добавляет слово "Глава" перед заголовками.

#### HTML

```html
<h1>5</h1>
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet"
    >I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.</q
  >
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>

<h1>6</h1>
<p>
  According to the Mozilla Manifesto,
  <q cite="http://www.mozilla.org/en-US/about/manifesto/"
    >Individuals must have the ability to shape the Internet and their own
    experiences on the Internet.</q
  >
  Therefore, we can infer that contributing to the open web can protect our own
  individual experiences on it.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before {
  content: "Chapter "; /* Пробел в конце создаёт разделение
                            между добавленным контентом
                           и остальным контентом*/
}
```

#### Результат

{{EmbedLiveSample('Заголовки_и_двойные_кавычки', '100%', 200)}}

### Изображение в сочетании с текстом

В этом примере вставляется изображение перед ссылкой. Если изображение не найдено, вставляет текст.

#### HTML

```html
<a href="http://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### Результат

{{EmbedLiveSample('Изображение_в_сочетании_с_текстом', '100%', 60)}}

### Целевые классы

В этом примере вставляется дополнительный текст после указанных элементов списка.

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* Начальный пробел создаёт разделение
                        между добавленным контентом
                        и остальным контентом */
  color: red;
}
```

#### Результат

{{EmbedLiveSample('Целевые_классы', '100%', 160)}}

### Атрибуты изображений и элементов

В этом примере вставляется изображение перед каждой ссылкой и добавляет `id` атрибут после.

#### HTML

```html
<ul>
  <li><a id="moz" href="http://www.mozilla.org/"> Mozilla Home Page</a></li>
  <li>
    <a id="mdn" href="https://developer.mozilla.org/">
      Mozilla Developer Network</a
    >
  </li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### Результат

{{EmbedLiveSample('Атрибуты_изображений_и_элементов', '100%', 160)}}

### Замена элемента

В этом примере содержимое элемента заменяется изображением. Вы можете заменить содержимое элемента либо значением \<url> или изменить значение \<image> . Содержимое, добавленное с помощью ::before или ::after не будет сгенерировано, поскольку содержимое элемента будет заменено.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

#replaced::after {
  /* не будет отображаться, если замена элемента поддерживается */
  content: " (" attr(id) ")";
}
```

#### Результат

{{EmbedLiveSample('Замена_элемента', '100%', 160)}}

## Проблемы доступности

Сгенерированный CSS контент не включён в [DOM](/ru/docs/Web/API/Document_Object_Model/Introduction). Из-за этого он не будет представлен в [accessibility tree](/ru/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) и некоторые комбинации вспомогательных технологий/браузеров не будут его объявлять. Если контент содержит информацию, которая имеет решающее значение для понимания цели страницы, лучше включить её в основной документ.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Explanation of WCAG, Guideline 1.3 – MDN](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("quotes")}}
