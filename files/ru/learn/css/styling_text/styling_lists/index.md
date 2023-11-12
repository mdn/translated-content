---
title: Стилизация списков
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[Списки](/ru/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists), по-большому счету, ведут себя также как любой другой текст, но существуют некоторые специфичные настройки CSS, о которых вы должны знать. В этой статье они все описываются.

| Требования: | Базовая компьютерная грамотность, основы HTML (изучите [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), основы CSS (изучите [Введение в CSS](/ru/docs/Learn/CSS/First_steps)), [CSS основы по тексту и шрифтам.](/ru/docs/Learn/CSS/Styling_text/Fundamentals) |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Познакомиться с лучшими практиками и свойствами по стилизации списков.                                                                                                                                                                                                      |

## Пример простого списка

Для начала, давайте взглянем на пример простого списка. В данной статье мы рассмотрим ненумерованный, нумерованный и описательный списки — все они имеют аналогичные свойства стилизации, но некоторые имеют свои специальные свойства. Не стилизованный пример [доступен на Github](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) (проверьте также [источник кода](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html).)

HTML для нашего примера списка представлен ниже:

```html
<h2>Shopping (unordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

Если вы перейдёте к живому примеру прямо сейчас и изучите элемент списка используя [инструменты разработчика браузера](/ru/docs/Learn/Common_questions/What_are_browser_developer_tools), то вы заметите несколько стилей установленных по умолчанию:

- Элементы {{htmlelement("ul")}} и {{htmlelement("ol")}} имеют верхний и нижний {{cssxref("margin")}} по `16px` (`1em`) и {{cssxref("padding-left")}} `40px` (`2.5em`.)
- Объекты списка (элементы {{htmlelement("li")}}) не имеют заданных значений по умолчанию для интервалов.
- Элемент {{htmlelement("dl")}} имеет верхний и нижний {{cssxref("margin")}} по `16px` (`1em`), но padding не задан.
- Элементы {{htmlelement("dd")}} имеют {{cssxref("margin-left")}} `40px` (`2.5em`.)
- Элементы {{htmlelement("p")}} которые мы включили для ссылок (сноски) имеют верхний и нижний {{cssxref("margin")}} по `16px` (`1em`), точно так же, как и различные типы списков.

## Управление интервалами списков

При оформлении списков, вам необходимо настроить их стили так, чтоб они сохраняли то же вертикальное расстояние, что и окружающие их элементы (такие как параграфы и изображения; иногда называемые вертикальным ритмом) и то же расстояние по горизонтали как и между собой (посмотреть [законченный стилизированный пример](https://mdn.github.io/learning-area/css/styling-text/styling-lists/) на Github, а также [найти исходный код](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html).)

CSS, используемый для оформления текста и интервалов, выглядит следующим образом:

```css
/* Базовые стили */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Задаём стили для списка описаний */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: 1.5rem;
}
```

- Первое правило устанавливает шрифт сайта и основной размер шрифта 10px. Они наследуются всеми на этой странице.
- Правила 2 и 3 задают относительные размеры шрифтов заголовков, различных типов списков (их наследуют дочерние элементы списков) и параграфов. Это значит, что каждый параграф и список будут иметь одинаковый размер шрифта, а также верхний и нижний интервалы, помогая сохранить согласованность вертикального ритма.
- Правило 4 задаёт одинаковую высоту {{cssxref("line-height")}} в параграфах и пунктах списка — так, что параграфы и каждый отдельный пункт списка будут иметь те же интервалы между строками. Это также поможет сохранить согласованность вертикального ритма.
- Правила 5 и 6 применяются к списку описаний — мы задаём одинаковую высоту `line-height` между терминами и описаниями списке описаний как мы это делали с параграфами и пунктами списка. И снова, согласованность хорошая! Мы также делаем описание терминов жирным шрифтом, чтобы они визуально выделялись легче.

## Стили специфичные для списков

Теперь, рассмотрев общие методы интервалов для списков, давайте изучим некоторые специфичные спискам свойства. Существует три свойства, с которых вам надо начать знакомство, которые могут быть установлены для элементов {{htmlelement("ul")}} или {{htmlelement("ol")}}:

- {{cssxref("list-style-type")}}: задаёт тип маркеров для использования в списке, например, квадратные или круглые маркеры для неупорядоченного списка, или цифры, буквы или римские цифры для упорядоченного списка.
- {{cssxref("list-style-position")}}: управляет будет ли маркер появляется внутри пунктов списка или вне их перед началом каждого элемента.
- {{cssxref("list-style-image")}}: позволяет вам использовать пользовательские изображения в качестве маркеров, а не просто квадрат или круг.

### Стили маркеров

Как указано выше, свойство {{cssxref("list-style-type")}} позволяет вам устанавливать какой тип маркера использовать в качестве точек маркера. В нашем примере мы установили использование заглавных римских цифр в упорядоченном списке:

```css
ol {
  list-style-type: upper-roman;
}
```

Это даёт нам следующий вид:

![an ordered list with the bullet points set to appear outside the list item text.](outer-bullets.png)

Вы можете найти гораздо больше опций, заглянув на справочную страницу {{cssxref ("list-style-type")}}.

### Позиция маркера

Свойство {{cssxref("list-style-position")}} устанавливает будет ли появляться маркер внутри пунктов списка или снаружи перед началом каждого пункта. Значение по умолчанию — `outside`, которое заставляет маркеры находится снаружи пунктов списка, как видно выше.

Если вы установите значение на `inside`, то маркеры будут находиться внутри строк:

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![an ordered list with the bullet points set to appear inside the list item text.](inner-bullets.png)

### Использование пользовательского изображения как маркер

Свойство {{cssxref("list-style-image")}} позволяет вам использовать пользовательское изображение в качестве вашего маркера. Синтаксис довольно прост:

```css
ul {
  list-style-image: url(star.svg);
}
```

Однако это свойство немного ограничено с точки зрения управления позициями, размерами (и т.д.) маркеров. Вам лучше использовать семейство свойств {{cssxref ("background")}}, о которых вы узнаете намного больше в модуле [Styling boxes](/ru/docs/Learn/CSS/Building_blocks). А пока вот вам образец для дегустации!

В нашем законченном примере мы оформили неупорядоченный список следующим образом (поверх того, что вы уже видели выше):

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

Мы сделали следующее:

- Установили {{cssxref("padding-left")}} элемента {{htmlelement("ul")}} с `40px` по умолчанию на `20px`, затем установили то же самое количество в пунктах списка. Это для того, чтобы все пункты списка продолжали выравниваться с порядком пунктов списка и описаний списка описаний, но пункты списка имеют некоторый padding для фоновых изображений чтобы сидеть внутри. Если бы мы не сделали этого, то фоновые изображения накладывались бы с текстом пунктов списка, что выглядело бы неряшливо.
- Установили {{cssxref("list-style-type")}} на `none`, для того чтобы маркеры не появлялись по умолчанию. Мы собираемся использовать свойства {{cssxref("background")}} для управления маркерами.
- Вставили маркер в каждый пункт неупорядоченного списка. Соответствующие свойства, следующие:

  - {{cssxref("background-image")}}: Указывает путь к файлу изображения, который вы хотите использовать в качестве маркера.
  - {{cssxref("background-position")}}: Определяет где в фоне выбранного элемента появится изображение — в данном случае мы говорим `0 0`, что значит что маркер будет появляться в самом верху слева каждого пункта списка.
  - {{cssxref("background-size")}}: Задаёт размер фонового изображения. В идеале мы хотим, чтоб маркеры были того же размера что и пункты списка (или самую малость меньше или крупнее). Мы используем размер `1.6rem` (`16px`), что очень хорошо сочетается с отступом (padding) `20px`, который мы позволили разместить внутри маркера — 16px плюс 4px интервала между маркером и текстом пункта списка работают хорошо.
  - {{cssxref("background-repeat")}}: По умолчанию, фоновые изображения повторяются пока не заполнят доступное фоновое пространство. Мы хотим всего лишь одну копию вставленного изображения в каждом случае, поэтому мы установили значение `no-repeat`.

Это даёт нам следующий результат:

![an unordered list with the bullet points set as little star images](list_formatting.png)

### короткая запись list-style

Эти три свойства упомянутые выше могут все быть заданы, используя лишь одну короткую запись свойства, {{cssxref("list-style")}}. Например, следующий CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Может быть заменён этим:

```css
ul {
  list-style: square url(example.png) inside;
}
```

Значения могут быть перечислены в любом порядке, и вы можете использовать одно, два и все три (значения по умолчанию, использованные для свойств, которые не включены — `disc`, `none`, и `outside`). Если указаны и `type` и `image`, тип используется в качестве запасного варианта, если изображение по какой-либо причине не может быть загружено.

## Контроль счета списка

Иногда вам может понадобиться вести счёт в упорядоченном списке по-другому — например начинать с цифры отличной от 1, или считать в обратном порядке, или вести счёт с шагом больше 1. HTML и CSS имеют несколько инструментов которые помогут с этим.

### start

Атрибут [`start`](/ru/docs/Web/HTML/Element/ol#start) позволит вам начать счёт списка с цифры отличной от 1. Например:

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

что даст вам такой результат:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

Атрибут [`reversed`](/ru/docs/Web/HTML/Element/ol#reversed) начнёт отсчёт по убыванию вместо возрастания. Например:

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

что даст вам такой результат:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> **Примечание:** Если пунктов в списке в обратном списке больше, чем значение атрибута `start`, счёт продолжится до нуля и далее отрицательные значения.

### value

Атрибут [`value`](/ru/docs/Web/HTML/Element/ol#value) позволит вам установить специфичные цифровые значения к пунктам списка. Например:

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

что даст вам такой результат:

{{ EmbedLiveSample('value', '100%', 150) }}

> **Примечание:** Даже если вы используете нечисловой {{cssxref("list-style-type")}}, вам всё равно надо использовать эквивалентное цифровое значение в атрибуте `value`.

## Активное изучение: Стилизация вложенного списка

В этой сессии активного изучения, мы хотим, чтобы вы взяли всё что вы выучили выше и попробовали стилизовать вложенный список. Мы предоставили вам HTML и хотим, чтобы вы:

1. Задали неупорядоченному списку квадратные маркеры.
2. Задали пунктам неупорядоченного и упорядоченного списка 1,5 межстрочный интервал их размера шрифта.
3. Задали упорядоченному списку маркеры в виде строчных букв.
4. Не стесняйтесь играться с примерами списков столько сколько вам нравится, экспериментируя с типами маркеров, интервалами или со всем что вы найдёте.

Если вы допустите ошибку, вы всегда можете сделать сброс используя кнопку _Reset_. Если вы застрянете, нажмите кнопку _Show solution_ чтобы посмотреть возможный ответ.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "ul {\n  list-style-type: square;\n}\n\nul li, ol li {\n  line-height: 1.5;\n}\n\nol {\n  list-style-type: lower-alpha\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## Смотрите также

Счётчики CSS предоставляют расширенные инструменты для настройки счета и оформления списков, но они довольно сложные. Мы рекомендуем изучить это, если вы захотите размяться. Смотрите:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## Заключение

В плане стилизации списки сравнительно легко освоить, как только вы освоите несколько связанных базовых принципов и специфичные свойства. В следующей статье мы перейдём к методам стилизации ссылок.

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

## В этом модуле

- [Основы стилизации текста и шрифта](/ru/docs/Learn/CSS/Styling_text/Fundamentals)
- [Стилизация списков](/ru/docs/Learn/CSS/Styling_text/Styling_lists)
- [Стилизация ссылок](/ru/docs/Learn/CSS/Styling_text/Styling_links)
- [Веб-шрифты](/ru/docs/Learn/CSS/Styling_text/Web_fonts)
- [Вёрстка домашней страницы общественной школы](/ru/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)
