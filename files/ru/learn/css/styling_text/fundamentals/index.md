---
title: Основы оформления текста и шрифта
slug: Learn/CSS/Styling_text/Fundamentals
l10n:
  sourceCommit: 721a334af54dd04cbd005bb91edc2c8ce2ad4744
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

В этой статье начнётся ваш путь к овладению навыком оформления текста с помощью {{glossary("CSS")}}. Мы подробно рассмотрим все основные CSS-свойства текста и шрифта, при помощи которых вы сможете изменять насыщенность, начертание, семейство шрифта, тип выравнивания текста и многое другое, а также изучим сокращённую запись свойств шрифта. Кроме того, мы поймём, как устанавливать межстрочный и межбуквенный интервалы.

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые знания:</th>
      <td>Основы HTML (изучите <a href="/ru/docs/Learn/HTML/Introduction_to_HTML">Введение в HTML</a>), основы CSS (изучите <a href="/ru/docs/Learn/CSS/First_steps">Введение в CSS</a>).</td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>
        Изучить основные свойства и техники оформления текста на веб-страницах.</td>
    </tr>
  </tbody>
</table>

## Что включает в себя оформление текста при помощи CSS?

Текст выкладывается внутри [области содержимого](/ru/docs/Learn/CSS/Building_blocks/The_box_model#Составляющие_элемента) элемента, начиная с левого верхнего угла (или с правого верхнего, если используется язык RTL) и заканчивая концом строки, достигнув которого текст начинает заполнять следующую строку. Это повторяется до тех пор, пока весь текст не будет помещён в элемент. Текст ведёт себя как множество строчных элементов, размещённых на соседних строках и не переходящих на следующую строку, не достигнув конца строки (или пока вы принудительно не разорвёте строку с помощью элемента {{htmlelement("br")}}).

> **Примечание:** Приведённый выше абзац вызывает у вас вопросы? Вернитесь и просмотрите нашу статью [Блочная модель](/ru/docs/Learn/CSS/Building_blocks/The_box_model), чтобы повторить теорию блочной модели, прежде чем продолжить.

Свойства CSS, используемые для оформления текста, обычно делятся на две категории, которые мы отдельно рассмотрим в этой статье:

- **Стили шрифта**: Свойства, влияющие на шрифт, применяемый к тексту, например, какое семейство шрифтов используется, является ли шрифт полужирным, курсивным, какого он размера и т. д.

- **Стили компоновки текста**: Свойства, влияющие на интервалы и другие параметры компоновки текста. Используя их, вы можете, например, увеличить или уменьшить пространство между строками и буквами, изменить тип выравнивания текста в блоке.

> **Примечание:** Имейте в виду, что текст внутри элемента рассматривается как один единый объект. Вы не сможете выбирать и оформлять части текста, пока не обернёте их в соответствующий HTML-элемент (например, {{htmlelement("span")}} или {{htmlelement("strong")}}). Также вы можете использовать специфичный для текста псевдоэлемент, такой как [::first-letter](/ru/docs/Web/CSS/::first-letter) (выбирает первую букву), [::first-line](/ru/docs/Web/CSS/::first-line) (выбирает первую строку), или [::selection](/ru/docs/Web/CSS/::selection) (выбирает текст, выделенный в данный момент курсором).

## Шрифты

Давайте сразу перейдём к рассмотрению свойств для оформления шрифтов. В этом примере мы применим некоторые свойства CSS к образцу HTML, который выглядит следующим образом:

```html
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

Вы можете посмотреть [завершённый пример на GitHub](https://mdn.github.io/learning-area/css/styling-text/fundamentals/) (смотрите также [исходный код](https://github.com/mdn/learning-area/blob/main/css/styling-text/fundamentals/index.html)).

### Цвет

Свойство {{cssxref("color")}} устанавливает цвет переднего плана содержимого элемента, которое обычно является текстом, но может также включать в себя некоторые другие вещи, такие как линия над текстом или линия подчёркивания, определяемая свойством {{cssxref("text-decoration")}}.

`color` принимает любое [значение цвета CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#colors), например:

```css
p {
  color: red;
}
```

Это изменит цвет абзацев по умолчанию (чёрный) на красный:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Цвет', '100%', 230) }}

### Семейства шрифтов

Чтобы установить другой шрифт, вам нужно использовать свойство {{cssxref("font-family")}} — оно определяет шрифт (или список шрифтов), который браузер применит к элементам. Браузер применит [шрифт по умолчанию](#шрифты_по_умолчанию), если на устройстве, с которого просматривается веб-сайт, нет шрифта, который вы указали в CSS. Простой пример:

```css
p {
  font-family: Arial;
}
```

Этот CSS-код применит шрифт Arial (который есть на любом компьютере) ко всем абзацам.

#### Веб-безопасные шрифты

Говоря о доступности шрифтов, есть определённое количество шрифтов, которые обычно доступны на всех системах, поэтому вы можете использовать их без особого беспокойства. Они называются **веб-безопасными шрифтами**.

В большинстве случаев мы, веб-разработчики, хотим иметь точный контроль над шрифтами, которые отображают текстовый контент. Проблема заключается в том, чтобы узнать, какой шрифт доступен на компьютере, который используется для просмотра наших веб-страниц. Нет способа узнать это в абсолютно каждом случае, однако веб-безопасные шрифты доступны на большинстве ОС (Windows, macOS, распространённые дистрибутивы Linux, Android, iOS).

Актуальный список веб-безопасных шрифтов будет меняться с развитием операционных систем, но, по крайней мере сейчас, разумно считать эти шрифты безопасными (Microsoft распространила многие из них своей инициативой _[Core fonts for the Web](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ в конце 90-х и начале 2000-х годов):

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Название</th>
      <th scope="col">Тип</th>
      <th scope="col">Примечания</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arial</td>
      <td>Без засечек</td>
      <td>
        Часто шрифт <em>Helvetica</em> добавляется как предпочтительная альтернатива шрифту <em>Arial</em> — это считается хорошей практикой. Хотя шрифты почти идентичны, считается, что <em>Helvetica</em> имеет более красивую форму, несмотря на то, что <em>Arial</em> более распространён.
    </tr>
    <tr>
      <td>Courier New</td>
      <td>Моноширинный</td>
      <td>
        Некоторые системы имеют альтернативную (возможно, более старую) версию <em>Courier New</em> под названием <em>Courier</em>. Принято использовать оба шрифта, из которых предпочтительным является <em>Courier New</em>.
      </td>
    </tr>
    <tr>
      <td>Georgia</td>
      <td>С засечками</td>
      <td></td>
    </tr>
    <tr>
      <td>Times New Roman</td>
      <td>С засечками</td>
      <td>
        Некоторые системы имеют альтернативную (возможно, более старую) версию <em>Times New Roman</em> под названием <em>Times</em>. Принято использовать оба шрифта, из которых предпочтительным является <em>Times New Roman</em>.
      </td>
    </tr>
    <tr>
      <td>Trebuchet MS</td>
      <td>Без засечек</td>
      <td>
        Используйте с осторожностью — на мобильных ОС шрифт не обладает широкой доступностью.
      </td>
    </tr>
    <tr>
      <td>Verdana</td>
      <td>Без засечек</td>
      <td></td>
    </tr>
  </tbody>
</table>

> **Примечание:** Среди различных ресурсов, на сайте [cssfontstack.com](http://www.cssfontstack.com/) вы можете найти список безопасных шрифтов, доступных на Windows и macOS, который может помочь вам решить, какие шрифты будут безопасными для вашего использования.

> **Примечание:** Существует способ, при помощи которого вы можете загружать свой собственный шрифт вместе со страницей, что позволяет вам настроить использование шрифтов по своему усмотрению: **веб-шрифты**. Это немного сложнее и будет позже рассмотрено в [отдельной статье](/ru/docs/Learn/CSS/Styling_text/Web_fonts) этого модуля.

#### Шрифты по умолчанию

CSS определяет 5 обобщённых названий шрифтов: `serif`, `sans-serif`, `monospace`, `cursive` и `fantasy`. Они очень обобщённые, и конкретный шрифт, который будет использован, может отличаться в разных ОС и браузерах. Эти значения определяют _наихудший сценарий_, при котором браузер попытается использовать уместно выглядящий шрифт. `serif`, `sans-serif` и `monospace` ведут себя вполне предсказуемо, и их использование должно привести к приемлемому результату. С другой стороны, `cursive` и `fantasy` менее предсказуемы; их рекомендуется использовать с большой осторожностью и тестировать в процессе разработки.

Эти пять значений определены следующим образом:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Значение</th>
      <th scope="col">Определение</th>
      <th scope="col">Пример</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>serif</code></td>
      <td>
        Шрифты с засечками (завитками и другими мелкими деталями, которые вы могли видеть на концах штрихов в некоторых шрифтах).
      </td>
      <td id="serif-example">
        <pre class="brush: html hidden">Мой большой красный слон</pre>
        <pre class="brush: css hidden">
body {
  font-family: serif;
}</pre>
        {{EmbedLiveSample("serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>sans-serif</code></td>
      <td>Шрифты без засечек.</td>
      <td id="sans-serif-example">
        <pre class="brush: html hidden">Мой большой красный слон</pre>
        <pre class="brush: css hidden">
body {
  font-family: sans-serif;
}</pre>
        {{EmbedLiveSample("sans-serif-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>monospace</code></td>
      <td>
        Шрифты, в которых все символы имеют одинаковую ширину, обычно используются в листингах кода.
      </td>
      <td id="monospace-example">
        <pre class="brush: html hidden">Мой большой красный слон</pre>
        <pre class="brush: css hidden">
body {
  font-family: monospace;
}</pre>
        {{EmbedLiveSample("monospace-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>cursive</code></td>
      <td>
      Шрифты, имитирующие письмо от руки. Они имеют плавные, соединённые штрихи.
      </td>
      <td id="cursive-example">
        <pre class="brush: html hidden">Мой большой красный слон</pre>
        <pre class="brush: css hidden">
body {
  font-family: cursive;
}</pre>
        {{EmbedLiveSample("cursive-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td><code>fantasy</code></td>
      <td>Декоративные шрифты.</td>
      <td id="fantasy-example">
        <pre class="brush: html hidden">Мой большой красный слон</pre>
        <pre class="brush: css hidden">
body {
  font-family: fantasy;
}</pre>
        {{EmbedLiveSample("fantasy-example", 100, 60)}}
      </td>
    </tr>
  </tbody>
</table>

#### Стеки шрифтов

Поскольку вы не можете гарантировать доступность шрифтов на ваших страницах (даже веб-шрифт _может_ не работать по некоторым причинам), вы можете использовать **стек шрифтов**, чтобы браузер мог выбрать один шрифт из списка нескольких. Просто укажите в значении свойства `font-family` несколько шрифтов через запятую:

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

В таком случае браузер проверит, есть ли на устройстве первый шрифт из списка. Если он доступен, браузер применит его к выбранным элементам, в противном случае он перейдёт к следующему шрифту и т. д.

В конец стека рекомендуется добавить подходящее обобщённое имя шрифта, чтобы в случае, если ни один из перечисленных вами шрифтов не будет доступен, браузер мог применить хотя бы что-то уместное. Уточним этот момент: к абзацам применяется шрифт с засечками, используемый браузером по умолчанию, если нет другого варианта — обычно это Times New Roman — это неподходящий шрифт, если вы хотите использовать шрифт без засечек!

> **Примечание:** Несмотря на то, что вы можете указывать без кавычек имена семейств шрифтов, содержащие пробел (например, `Trebuchet MS`), во избежание ошибок экранирования рекомендуется заключать в кавычки имена семейств шрифтов, в которых есть пробелы, цифры или знаки препинания, отличные от дефисов.

> **Предупреждение:** Любое имя семейства шрифтов, которое может быть ошибочно интерпретировано как обобщённое имя семейства или ключевое слово CSS, должно быть указано в кавычках. Хотя имена шрифтов могут быть указаны как {{cssxref("custom-ident")}} или {{cssxref("string")}}, если имя семейства шрифтов совпадает с универсальным значением свойства CSS (например, `initial` или `inherit`) или с обобщённым именем шрифта (например, `sans-serif` или `fantasy`), оно должно быть указано как строка в кавычках. В противном случае имя семейства шрифтов будет интерпретировано как обобщённое имя или как эквивалентное ключевое слово CSS. При использовании в качестве ключевых слов обобщённые имена шрифтов — `serif`, `sans-serif`, `monospace`, `cursive` и `fantasy` — и глобальные ключевые слова CSS НЕ ДОЛЖНЫ быть записаны в кавычках, поскольку строки не интерпретируются как ключевые слова CSS.

#### Пример использования свойства font-family

Давайте применим шрифт без засечек к абзацам из нашего предыдущего примера:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

Это даст нам следующий результат:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Пример_использования_свойства_font-family', '100%', 220) }}

### Размер шрифта

В одной из статей предыдущего модуля ([Значения свойств CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units)) мы рассматривали единицы длины и размера. Размер шрифта, определяемый свойством {{cssxref("font-size")}}, может быть выражен в большинстве этих единиц (и других, например, в [процентах](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#percentages)). Чаще всего используются следующие единицы:

- `px` (пиксели): Размер в пикселях, количество которых определяет высоту текста. Это абсолютная единица — это значит, что окончательное вычисленное значение будет почти всегда одинаково.
- `em`: 1 `em` равен размеру шрифта родительского элемента (точнее, ширине заглавной буквы M, расположенной внутри родительского элемента). Использование `em` может быть сложным, если у вас много вложенных элементов с разными размерами шрифта, но это выполнимо, как вы увидите ниже. Зачем беспокоиться? Когда вы привыкнете к использованию `em`, эта единица станет для вас естественной. Вы можете использовать `em` для изменения размера чего угодно, не только текста. При помощи `em` вы можете устанавливать размеры по всему сайту, что упростит его обслуживание.
- `rem`: Эта единица работает подобно единице `em`; отличие в том, что 1 `rem` равен размеру шрифта корневого элемента (т. е. {{htmlelement("html")}}), а не родительского. Это существенно упрощает ваши математические вычисления для определения размеров шрифтов.

`font-size` наследуется от родительского элемента. Всё начинается с корневого элемента всего документа — {{htmlelement("html")}}. Его `font-size` по умолчанию во всех браузерах — `16px`. Любой абзац (или другой элемент, для которого браузер не установил другой размер шрифта) внутри корневого элемента будет иметь окончательный размер, равный `16px`. Другие элементы могут иметь другие размеры шрифта по умолчанию. К примеру, размер по умолчанию для элементов {{htmlelement("Heading_Elements", "h1")}} составляет `2em`, поэтому их окончательный размер будет равен `32px`.

Всё становится сложнее, когда вы начинаете изменять размер шрифта вложенных элементов. Например, если на вашей странице есть элемент {{htmlelement("article")}}, к которому вы применили свойство `font-size` со значением 1.5 `em` (что в итоге составит 24 `px`), а затем захотели, чтобы абзацы внутри `<article>` имели размер шрифта, равный 20 `px`, какое `em`-значение вам нужно использовать?

```html
<!-- Основное значение font-size для документа составляет 16px -->
<article>
  <!-- Если font-size элемента <article> составляет 1.5em -->
  <p>Мой абзац</p>
  <!-- Как получить font-size, равный 20px? -->
</article>
```

Вам нужно установить значение, равное 20/24 или 0.83333333 `em`. Необходимые математические вычисления могут быть сложными, поэтому вам следует подходить к оформлению с осторожностью. Чтобы всё не усложнять, по возможности лучше использовать `rem`, а также избегать установки свойства `font-size` для элементов-контейнеров там, где это возможно.

### Насыщенность шрифта, курсив, трансформация текста и декоративные линии

В CSS есть четыре свойства для изменения визуального веса/акцента текста:

- {{cssxref("font-style")}}: Включает и выключает курсивное начертание. Доступные значения следующие (вы будете редко использовать это свойство, если только не захотите отключить курсивное начертание по некоторым причинам):

  - `normal`: Применяет обычное начертание (отключает курсив).
  - `italic`: Применяет курсивную версию шрифта, если она доступна; если нет, имитирует курсив при помощи наклона обычной версии.
  - `oblique`: Имитирует курсивное начертание, наклоняя обычную версию шрифта.

- {{cssxref("font-weight")}}: Устанавливает насыщенность шрифта. Доступно множество значений, если доступно много вариантов шрифта (таких как _-light_, _-normal_, _-bold_, _-extrabold_, _-black_ и т. д.), но на самом деле вы редко будете использовать какие-либо из них, за исключением `normal` и `bold`:

  - `normal`, `bold`: Обычное и полужирное начертания.
  - `lighter`, `bolder`: Эти значения устанавливают насыщенность на один шаг больше или меньше, чем у родительского элемента.
  - `100` – `900`: Числовые значения, которые при необходимости обеспечивают более тонкую регулировку насыщенности, чем приведённые выше ключевые слова.

- {{cssxref("text-transform")}}: Трансформирует (преобразовывает) шрифт. Доступные значения включают в себя:

  - `none`: Отменяет любые преобразования.
  - `uppercase`: Преобразовывает весь текст в верхний регистр.
  - `lowercase`: Преобразовывает весь текст в нижний регистр.
  - `capitalize`: Преобразовывает все слова так, чтобы первая буква была заглавной.
  - `full-width`: Все символы записываются в квадрат фиксированной ширины. Это похоже на моноширинный шрифт и позволяет выравнивать, например, латинские символы вместе с глифами азиатских языков (например, китайского, японского, корейского).

- {{cssxref("text-decoration")}}: Добавляет к шрифту декоративные линии или отключает их (в основном вы будете использовать это свойство для отключения включённого по умолчанию подчёркивания у ссылок). Доступные значения:

  - `none`: Отключает все уже имеющиеся декоративные линии.
  - `underline`: Подчёркивает текст.
  - `overline`: Добавляет линию над текстом.
  - `line-through`: Зачёркивает текст.

Стоит отметить, что {{cssxref("text-decoration")}} может принимать несколько значений одновременно, что позволяет вам добавлять сразу несколько декоративных линий, например, `text-decoration: underline overline`. Обратите внимание, что {{cssxref("text-decoration")}} — это сокращённое свойство для {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} и {{cssxref("text-decoration-color")}}. Вы можете комбинировать значения этих свойств для получения интересных эффектов, например: `text-decoration: line-through red wavy`.

Давайте добавим пару этих свойств в наш пример:

Наш новый результат выглядит так:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Насыщенность_шрифта_курсив_трансформация_текста_и_декоративные_линии', '100%', 260) }}

### Добавление теней к тексту

Вы можете добавить тени к тексту при помощи свойства {{cssxref("text-shadow")}}. Это свойство принимает до четырёх значений, как показано в примере ниже:

```css
text-shadow: 4px 4px 5px red;
```

Эти четыре значения обозначают следующее:

1. Смещение тени по горизонтали относительно текста — принимает большинство [единиц длины и размера CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size), чаще всего используется `px`; положительные значения сдвигают тень вправо, а отрицательные — влево. Это значение обязательно должно быть указано.
2. Смещение тени по вертикали относительно текста. Работает так же, как и смещение по горизонтали, за исключением того, что оно сдвигает тень вверх/вниз, а не влево/вправо. Это значение обязательно должно быть указано.
3. Радиус размытия: чем больше значение, тем больше рассеивание тени. Значение по умолчанию (используется, если радиус размытия не указан) — 0, что означает отсутствие размытия. Принимает большинство [единиц длины и размера CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size).
4. Цвет тени, который может быть записан при помощи любого [цвета CSS](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#colors). Значение по умолчанию (используется, если цвет тени не указан) — [`currentcolor`](/ru/docs/Web/CSS/color_value#currentcolor_keyword), т. е. цвет, взятый из свойства [`color`](/ru/docs/Web/CSS/color) элемента.

#### Несколько теней

Вы можете добавить к тексту несколько теней, указав их через запятую, например:

```css
h1 {
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
}
```

Мы получим такой результат, если применим этот CSS-код к элементу {{htmlelement("Heading_Elements", "h1")}} в нашем примере:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Несколько_теней', '100%', 260) }}

> **Примечание:** Вы можете найти больше интересных примеров со свойством `text-shadow` в статье Sitepoint [Moonlighting with CSS text-shadow](https://www.sitepoint.com/moonlighting-css-text-shadow/).

## Компоновка текста

Изучив основные свойства шрифта, давайте рассмотрим свойства, при помощи которых мы можем влиять на компоновку текста.

### Выравнивание текста

Свойство {{cssxref("text-align")}} используется для управления выравниванием текста внутри области содержимого. Доступные значения перечислены ниже. Они работают практически так же, как функция выравнивания в обычном текстовом процессоре:

- `left`: Выравнивает текст по левому краю.
- `right`: Выравнивает текст по правому краю.
- `center`: Выравнивает текст по центру.
- `justify`: Растягивает текст, изменяя расстояние между словами так, чтобы ширина строк была одинаковой. Используйте это значение осторожно — результат может выглядеть ужасно, особенно если применить такой тип выравнивания к абзацу, в котором много длинных слов. Если вы хотите использовать это значение, подумайте, что можно использовать вместе с ним, например, {{cssxref("hyphens")}} для переноса некоторых длинных слов.

Мы придём к такому результату, если применим `text-align: center;` к {{htmlelement("Heading_Elements", "h1")}} в нашем примере:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Выравнивание_текста', '100%', 260) }}

### Высота строки

Свойство {{cssxref("line-height")}} задаёт высоту каждой строки текста. Оно может принимать большинство [единиц длины и размера](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size), а также значение без единицы, которое выступает в качестве множителя и обычно считается наилучшим вариантом. При использовании значения без единицы высота строки будет равна размеру шрифта ({{cssxref("font-size")}}), умноженному на значение в `line-height`. Обычно основной текст лучше выглядит и легче читается, если строки расположены на некотором расстоянии друг от друга. Рекомендуемая высота строки — 1.5 – 2 (двойной интервал). При помощи следующего CSS-кода мы можем установить высоту строки в 1.6 раза больше высоты шрифта:

```css
p {
  line-height: 1.6;
}
```

Применим это к элементам {{htmlelement("p")}} в нашем примере:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
```

{{ EmbedLiveSample('Высота_строки', '100%', 300) }}

### Расстояние между буквами и словами

Свойства {{cssxref("letter-spacing")}} и {{cssxref("word-spacing")}} позволяют вам установить интервалы между буквами и словами в тексте. Вы не будете использовать их очень часто, но иногда они могут помочь вам придать особый внешний вид или улучшить разборчивость слишком плотного шрифта. Принимают большинство [единиц длины и размера](/ru/docs/Learn/CSS/Building_blocks/Values_and_units#length_and_size).

Для демонстрации работы этих свойств мы применим межсловный и межбуквенный интервалы к первой строке каждого элемента {{htmlelement("p")}}:

```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

Теперь наш HTML отображается следующим образом:

```html hidden
<h1>Tommy the cat</h1>

<p>Well I remember it as though it were a meal ago…</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 5rem;
  text-transform: capitalize;
  text-shadow:
    1px 1px 1px red,
    2px 2px 1px red;
  text-align: center;
  letter-spacing: 2px;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.6;
  letter-spacing: 1px;
}
```

{{ EmbedLiveSample('Расстояние_между_буквами_и_словами', '100%', 330) }}

### Другие свойства, на которые следует обратить внимание

Вышеупомянутые свойства дают вам представление о том, как начать оформлять текст на веб-странице, но кроме них есть ещё множество свойств, которые вы можете использовать. Мы здесь лишь хотели рассказать вам о наиболее важных из них. Когда вы освоите свойства, изложенные выше, вам также следует изучить следующее:

Стили шрифта:

- {{cssxref("font-variant")}}: Переключает между обычным шрифтом и шрифтом, в котором строчные буквы отображаются как уменьшенные заглавные.
- {{cssxref("font-kerning")}}: Включает и выключает кернинг шрифта.
- {{cssxref("font-feature-settings")}}: Включает и выключает различные функции шрифтов [OpenType](https://en.wikipedia.org/wiki/OpenType).
- {{cssxref("font-variant-alternates")}}: Управляет использованием альтернативных глифов для заданного шрифта.
- {{cssxref("font-variant-caps")}}: Управляет использованием альтернативных заглавных символов.
- {{cssxref("font-variant-east-asian")}}: Управляет использованием альтернативных глифов для восточноазиатских письменностей, таких как японская и китайская.
- {{cssxref("font-variant-ligatures")}}: Определяет, какие лигатуры и контекстные формы будут использованы в тексте.
- {{cssxref("font-variant-numeric")}}: Управляет использованием альтернативных глифов для чисел, дробей и порядковых числительных.
- {{cssxref("font-variant-position")}}: Управляет использованием альтернативных уменьшенных глифов, которые располагаются как надстрочные или подстрочные.
- {{cssxref("font-size-adjust")}}: Настраивает визуальный размер шрифта независимо от его фактического размера.
- {{cssxref("font-stretch")}}: Переключает между возможными альтернативными растянутыми версиями заданного шрифта.
- {{cssxref("text-underline-position")}}: Указывает положение линий подчёркивания, заданных при помощи свойства `text-decoration-line` со значением `underline`.
- {{cssxref("text-rendering")}}: С помощью этого свойства вы можете попробовать выполнить некоторую оптимизацию рендеринга текста.

Стили компоновки текста:

- {{cssxref("text-indent")}}: Указывает, сколько пустого пространства по горизонтали должно быть перед началом первой строки текста.
- {{cssxref("text-overflow")}}: Определяет, как пользователям будет сообщаться о контенте, выходящем за пределы блока и не отображаемом из-за этого.
- {{cssxref("white-space")}}: Определяет, как будут обрабатываться пробельные символы и связанные с ними разрывы строк внутри элемента.
- {{cssxref("word-break")}}: Указывает, может ли браузер разрывать строки внутри слов.
- {{cssxref("direction")}}: Определяет направление текста. (Оно зависит от языка, и обычно его лучше устанавливать с помощью HTML, поскольку направление текста связано с текстовым контентом.)
- {{cssxref("hyphens")}}: Включает и выключает расстановку переносов для поддерживаемых языков.
- {{cssxref("line-break")}}: Ослабляет или усиливает перенос строк для азиатских языков.
- {{cssxref("text-align-last")}}: Определяет, как выравнивается последняя строка блока или строка, стоящая прямо перед принудительным разрывом строки.
- {{cssxref("text-orientation")}}: Определяет ориентацию текста в строке.
- {{cssxref("overflow-wrap")}}: Указывает, может ли браузер разрывать строки внутри слов для предотвращения переполнения.
- {{cssxref("writing-mode")}}: Определяет, как строки текста будут располагаться: горизонтально или вертикально, а также направление, в котором будут располагаться последующие строки (направление «потока» строк).

## Сокращённое свойство `font`

С помощью сокращённого свойства {{cssxref("font")}} можно применить к шрифту сразу множество свойств. Они записываются в следующем порядке: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} и {{cssxref("font-family")}}.

Среди этих свойств обязательными являются только `font-size` и `font-family`.

Между свойствами {{cssxref("font-size")}} и {{cssxref("line-height")}} должна стоять косая черта.

Полный пример использования свойства:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Активное изучение: Играем с оформлением текста

Конкретных упражнений на этом учебном занятии нет. Мы просто предлагаем вам поэкспериментировать с некоторыми свойствами шрифта и компоновки текста. Посмотрите сами, что у вас получится! Вы можете использовать локальные файлы HTML и CSS или писать свой код в «живом» редактируемом примере ниже.

Если вы допустили ошибку, вы всегда можете сбросить «живой» пример с помощью кнопки _Сброс_.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>Код HTML</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>Немного текста для ваших экспериментов</p>
  </textarea>

  <h2>Код CSS</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
p {

}
</textarea
  >

  <h2>Результат</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Сброс"
      style="margin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
let htmlCode = htmlInput.value;
let cssCode = cssInput.value;
const output = document.querySelector(".output");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
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

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Активное_изучение_играем_с_оформлением_текста', 700, 800) }}

## Заключение

Мы надеемся, что вам понравилось играть с текстом в этой статье! Следующая статья даст вам все необходимые знания об [оформлении HTML-списков](/ru/docs/Learn/CSS/Styling_text/Styling_lists).

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
