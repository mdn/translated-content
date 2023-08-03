---
title: Основы редактирования текста в HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Одна из основных задач HTML — придавать тексту структуру и смысл, {{glossary("семантику")}}, так, чтобы браузер смог отобразить текст корректно. Эта статья покажет, как можно использовать {{glossary("HTML")}}, чтобы упорядочить текст на странице путём добавления заголовков и абзацев, выделения слов, создания списков и многое другое.

| Предварительные требования: | Базовое знакомство с HTML , описанное в [Начало работы с HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B). |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:                     | Изучить базовые способы разметки текста путём добавлением на страницу структуры и значения — создать абзацы, заголовки, списки, акценты и цитаты..                                                                          |

## Основы: Заголовки и абзацы / параграфы

Большинство структурированных текстов состоят из параграфов и заголовков, независимо от того, читаете ли вы рассказ, или газету, или учебник, журнал и т.д.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

Упорядоченный контент делает чтение более лёгким и приятным.

В HTML каждый абзац заключён в элемент {{htmlelement("p")}}, подобно:

```html
<p>Я параграф, да, это я.</p>
```

Каждый заголовок заключён в элемент заголовка {{htmlelement("h1")}}:

```html
<h1>Я заголовок истории.</h1>
```

Имеется шесть элементов заголовка: {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}} и {{htmlelement("h6")}}. Каждый элемент представляет разный уровень контента в документе; `<h1>` представляет главный заголовок, `<h2>` представляет подзаголовки, `<h3>` представляет под-подзаголовки и так далее.

### Создание иерархической структуры

Например, в рассказе `<h1>` будет представлять заглавие рассказа, `<h2>` обозначит название каждой главы, `<h3>` будет обозначать подзаголовки в каждой главе и так далее.

```html
<h1>Сокрушительная скука</h1>

<p>Крис Миллс</p>

<h2>Глава 1: Тёмная ночь</h2>

<p>Это была тёмная ночь. Где-то кричала сова. Дождь обрушился на ...</p>

<h2>Глава 2: Вечное молчание</h2>

<p>Наш главный герой ничего не мог, когда шёпот из тёмной фигуры ...</p>

<h3>Призрак говорит</h3>

<p>
  Прошло ещё несколько часов, когда внезапно призрак выпрямился и воскликнул:
  «Пожалуйста, помилуй мою душу!»
</p>
```

Всё это действительно зависит от вас — что именно будут представлять собой элементы, пока существует иерархия. Вам просто нужно иметь в виду несколько хороших правил при создании таких структур.

- Предпочтительнее использовать `<h1>` только один раз на странице — это заголовок самого верхнего уровня, и все остальные заголовки располагаются ниже его в иерархии.
- Убедитесь, что вы используете заголовки в правильном порядке в иерархии. Не используйте `<h3>` для создания подзаголовков при одновременном использовании `<h2>` для представления под-подзаголовков — это не имеет смысла и приведёт к странным результатам.
- Из шести доступных уровней заголовка вы должны стремиться использовать не более трёх на странице, если только вы не чувствуете, что это необходимо. Документы с большим количеством уровней (то есть с глубокой иерархией) становятся громоздкими и трудными для навигации. В таких случаях рекомендуется распределять контент по нескольким страницам, если это возможно.

### Зачем нам необходима структура?

Чтобы ответить на этот вопрос, давайте посмотрим на [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) — отправную точку нашего примера для этой статьи (хороший рецепт хумуса). Вы должны сохранить копию этого файла на своём локальном компьютере, так как вам понадобится это для упражнений позже. Сейчас тело этого документа содержит несколько фрагментов контента — они не отмечены каким-либо образом, но они разделены разрывами строк (был нажат Enter / Return для перехода на следующую строку).

Однако, когда вы откроете документ в своём браузере, вы увидите, что текст выглядит как один большой кусок!

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](screen_shot_2017-03-29_at_09.20.35.png)

Это связано с тем, что нет элементов для создания структуры контента, поэтому браузер не знает, где здесь заголовок и где абзац. Более того:

- Пользователи, просматривающие веб-страницу, быстро сканируют её в поиске подходящего контента, часто просто просматривая только заголовки (мы обычно [тратим очень мало времени на веб-странице](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)). Если они не смогут увидеть ничего полезного в течение нескольких секунд, они, скорее всего, расстроятся и отправятся куда-нибудь ещё.
- Поисковые системы, индексирующие вашу страницу, считают содержание заголовков важными ключевыми словами для влияния на ранжирование поиска страницы. Без заголовков ваша страница будет плохо работать с точки зрения {{glossary("SEO")}} (Search Engine Optimization — поисковая оптимизация).
- Сильно слабовидящие люди часто не читают веб-страницы — они слушают их вместо этого. Это делается с помощью программного обеспечения, называемого [программой чтения с экрана](http://en.wikipedia.org/wiki/Screen_reader). Это программное обеспечение предоставляет способы быстрого доступа к данному текстовому контенту. Среди различных используемых методов они предоставляют схему документа, считывая заголовки, позволяя своим пользователям быстро находить нужную им информацию. Если заголовки недоступны, они будут вынуждены слушать весь документ вслух.
- Чтобы стилизовать контент с помощью {{glossary ("CSS")}} или сделать его интересным с помощью {{glossary ("JavaScript")}}, вам нужно, чтобы элементы обёртывали соответствующий контент, чтобы CSS и JavaScript смогли эффективно работать.

Поэтому нужно дать структурную разметку нашему контенту.

### Активное изучение: создание структуры для нашего контента

Давайте рассмотрим это на живом примере. В приведённом ниже примере добавьте элементы в исходный текст в поле «Редактируемый код», чтобы он отображался как заголовок и два абзаца в поле «Результат».

Если вы допустили ошибку, вы всегда можете сбросить её с помощью кнопки _Сбросить_. Если вы застряли, нажмите кнопку _Показать решение_, чтобы увидеть ответ.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Моя мини-история
Я полицейский, и моё имя Триш.
Мои ноги сделаны из картона, и мой муж — рыба.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сбросить" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.input,
.output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Спрятать решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Моя мини-история</h1>\n<p>Я полицейский, и моё имя Триш.</p>\n<p>Мои ноги сделаны из картона, и мой муж — рыба.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

textarea.onkeyup = function () {
  if (solution.value === "Показать решение") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

### Почему мы нуждаемся в семантике?

Семантика проявляется всюду вокруг нас — мы полагаемся на опыт, который рассказывает нам, какова функция бытовых предметов; когда мы что-то видим, мы знаем, какова его функция. Так, например, мы ожидаем, что красный свет на светофоре означает «стоп», а зелёный свет означает «идти». Жизнь станет очень сложной, если применяется неправильная семантика (какие-либо страны используют красный цвет для обозначения «идти»? Надеюсь, что нет.)

В подобном ключе нам нужно убедиться, что мы используем правильные элементы, придавая нашему контенту правильное значение, функцию или внешний вид. В этом контексте элемент {{htmlelement ("h1")}} также является семантическим элементом, который даёт тексту, который он обёртывает, роль (или значение) «заголовка верхнего уровня на вашей странице».

```html
<h1>Это заголовок верхнего уровня</h1>
```

По умолчанию браузер придаст ему большой размер шрифта, чтобы он выглядел как заголовок (хотя вы можете стилизовать его как угодно, используя CSS). Что ещё более важно, его семантическое значение будет использоваться несколькими способами, например, поисковыми системами и программами чтения с экрана (как упоминалось выше).

С другой стороны, вы можете сделать любой элемент похожим на заголовок верхнего уровня. Рассмотрим следующее:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >Это заголовок верхнего уровня?</span
>
```

Это элемент {{htmlelement ("span")}}. У него нет семантики. Вы используете его, когда хотите применить к контенту CSS (или сделать что-то с ним с помощью JavaScript), не придавая ему никакого дополнительного значения (об этом вы узнаете позже). Мы применили CSS, чтобы он выглядел как заголовок верхнего уровня, но поскольку он не имеет семантического значения, он не получит никаких дополнительных преимуществ, описанных выше. Рекомендуется использовать соответствующий элемент HTML на практике.

## Списки

Теперь обратим наше внимание на списки. Списки есть везде вокруг нас — от вашего списка покупок до списка направлений, которым вы подсознательно следуете, чтобы каждый день добраться домой, и списка инструкций, которые вы выполняете в этом руководстве! Списки используются всюду в Интернете, и мы рассмотрим три разных типа списков.

### Неупорядоченные

Неупорядоченные списки используются для элементов, для которых порядок не имеет значения, — возьмём, к примеру, список покупок:

```
молоко
яйца
хлеб
хумус
```

Каждый неупорядоченный список начинается с элемента {{htmlelement ("ul")}} (_unordered list_) — он обёртывает все элементы списка: молоко, яйца, хлеб, хумус.

Последний шаг состоит в том, чтобы обернуть каждый элемент списка в элемент {{htmlelement ("li")}} (элемент списка):

```html
<ul>
  <li>молоко</li>
  <li>яйца</li>
  <li>хлеб</li>
  <li>хумус</li>
</ul>
```

### Активное изучение: разметка неупорядоченного списка

Попробуйте отредактировать образец ниже, чтобы создать свой собственный неупорядоченный список HTML.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
молоко
яйца
хлеб
хумус</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сбросить" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.input,
.output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Спрятать решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var htmlSolution =
  "<ul>\n<li>молоко</li>\n<li>яйца</li>\n<li>хлеб</li>\n<li>хумус</li>\n</ul>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

textarea.onkeyup = function () {
  if (solution.value === "Показать решение") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', 700, 400) }}

### Упорядоченные

Упорядоченные списки — это списки, в которых порядок элементов имеет значение, — возьмём в качестве примера маршрут следования:

```
Двигайтесь до конца дороги
Поверните направо
Езжайте прямо через первые два перекрёстка с круговым движением
Поверните налево на третьем перекрёстке
Школа справа от вас, 300 метров вверх по дороге
```

Структура разметки такая же, как для неупорядоченных списков, за исключением того, что вы должны обернуть элементы списка в элемент {{htmlelement ("ol")}} (ordered list), а не \<ul>:

```html
<ol>
  <li>Двигайтесь до конца дороги</li>
  <li>Поверните направо</li>
  <li>Езжайте прямо через первые два перекрёстка с круговым движением</li>
  <li>Поверните налево на третьем перекрёстке</li>
  <li>Школа справа от вас, в 300 метрах вверх по дороге</li>
</ol>
```

### Активное изучение: разметка упорядоченного списка

Попробуйте отредактировать образец ниже, чтобы создать свой собственный упорядоченный список HTML.

```html hidden
<h2>Результат</h2>
<div class="output" style="min-height: 50px;"></div>
<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Двигайтесь до конца дороги
Поверните направо
Езжайте прямо через первые два перекрёстка с круговым движением
Поверните налево на третьем перекрёстке
Школа справа от вас, 300 метров вверх по дороге</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сбросить" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.input,
.output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Спрятать решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var htmlSolution =
  "<ol>\n<li>Двигайтесь до конца дороги</li>\n<li>Поверните направо</li>\n<li>Езжайте прямо через первые два перекрёстка с круговым движением</li>\n<li>Поверните налево на третьем перекрёстке</li>\n<li>Школа справа от вас, 300 метров вверх по дороге</li>\n</ol>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

textarea.onkeyup = function () {
  if (solution.value === "Показать решение>") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_3', 700, 500) }}

### Активное изучение: разметка собственной страницы рецептов

Итак, в этот момент в статье у вас есть вся необходимая информация, чтобы разметить наш пример страницы рецепта. Вы можете либо сохранить локальную копию исходного файла [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) и выполнить в нём работу, либо сделать это в приведённом ниже примере. Делать это локально, вероятно, будет лучше, так как тогда вы сможете сохранить работу, которую вы делаете, тогда как если вы её добавите в редактируемый пример, она будет потеряна при следующем открытии страницы. У обоих способов есть плюсы и минусы.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Рецепт быстрого приготовления хумуса.

  Хумус — быстро, вкусно, — и ничего лишнего. Этот рецепт был составлен из других рецептов, которые мне попадались в течение многих лет.

  Хумус — это вкусная густая паста, широко используемая в Греческих и Ближневосточных блюдах. Очень вкусно есть его с салатами, мясом на гриле и питой.

  Ингредиенты

  1 банка (400г) турецкого гороха (или бараньего гороха)
  175г тахини
  6 вяленых томатов
  Половинка красного перца
  Щепотка кайенского перца
  1 зубчик чеснока
  Чуть-чуть оливкового масла

  Рецепт

  Очистите чеснок от кожуры и крупно нарежьте.
  Удалите стебель и семена у перца; крупно нарежьте перец.
  Добавьте все ингредиенты в пищевой комбайн.
  Измельчите все ингредиенты до состояния пасты.
  Если вы хотите "грубый" хумус, измельчайте пару минут.
  Если вам нужен гладкий хумус, измельчайте дольше.

  По вкусу вы также можете добавить в небольших количествах лимон с кориандром, перец чили, лайм с чипотле, хариссу с мятой или же шпинат с брынзой. Попробуйте и решите, что подойдёт вам.

  Хранение

  Храните хумус в запечатанном контейнере в холодильнике. Хумус хранится примерно неделю после приготовления. Если он начнёт пениться, выкидывайте его.

  Хумус можно хранить в морозильном отделении 2–3 месяца.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сбросить" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

body {
  margin: 10px;
  background: #f5f9fa;
}

.input,
.output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Спрятать решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var htmlSolution =
  '<h1>Рецепт быстрого приготовления хумуса.</h1>\n\n<p>Хумус — быстро, вкусно, — и ничего лишнего. Этот рецепт был составлен из других рецептов, которые мне попадались в течение многих лет.</p>\n\n<p>Хумус — это вкусная густая паста, широко используемая в Греческих и Ближневосточных блюдах. Очень вкусно есть его с салатами, мясом на гриле и питой.</p>\n\n<h2>Ингредиенты</h2>\n\n<ul>\n<li>1 банка (400г) турецкого гороха (или бараньего гороха)</li>\n<li>175г тахани</li>\n<li>6 вяленых томатов</li>\n<li>Половинка красного перца</li>\n<li>Щепотка кайенского перца</li>\n<li>1 зубчик чеснока</li>\n<li>Чуть-чуть оливкового масла</li>\n</ul>\n\n<h2>Рецепт</h2>\n\n<ol>\n<li>Очистите чеснок от кожуры и крупно нарежьте.</li>\n<li>Удалите стебель и семена у перца; крупно нарежьте.</li>\n<li>Добавьте все ингредиенты в пищевой комбайн.</li>\n<li>Измельчите все ингредиенты до состояния пасты.</li>\n<li>Если вы хотите "грубый" хумус, измельчайте пару минут.</li>\n<li>Если вам нужен гладкий хумус, измельчайте дольше.</li>\n</ol>\n\n<p>По вкусу можете добавить в небольших количествах лимон и кориандский перец, лайм и чипотле, хариссу и мяту или шпинат и брынзу. Попробуйте и решите, что подходит вам.</p>\n\n<h2>Хранение</h2>\n\n<p>Храните хумус в запечатанном контейнере в холодильнике. Хумус хранится примерно неделю после приготовления. Если он начнёт пениться, выкидывайте его.</p>\n\n<p>Хумус можно хранить в морозильном отделении 2–3 месяца.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

textarea.onkeyup = function () {
  if (solution.value === "Показать решение") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_4', 700, 500) }}

Если вы застряли, вы всегда можете нажать кнопку _Показать решение_ или проверить наш пример [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) в нашем реестре github.

### Вложенные списки

Вполне нормально вложить один список в другой. Возможно, вы захотите, чтобы один список располагался внутри другого. Давайте возьмём второй список из нашего примера рецепта:

```html
<ol>
  <li>Очистите чеснок от кожуры и крупно нарежьте.</li>
  <li>Удалите стебель и семена у перца; крупно нарежьте перец.</li>
  <li>Добавьте все ингредиенты в пищевой комбайн.</li>
  <li>Измельчите все ингредиенты до состояния пасты.</li>
  <li>Если вы хотите "грубый" хумус, измельчайте пару минут.</li>
  <li>Если вам нужен гладкий хумус, измельчайте дольше.</li>
</ol>
```

Поскольку последние две строки очень тесно связаны с тем, что было до них (они читаются как вспомогательные инструкции или варианты, которые подходят под этой маркой), может иметь смысл вложить их в свой собственный неупорядоченный список и поместить этот список внутри текущего. Это будет выглядеть так:

```html
<ol>
  <li>Очистите чеснок от кожуры и крупно нарежьте.</li>
  <li>Удалите стебель и семена у перца; крупно нарежьте перец.</li>
  <li>Добавьте все ингредиенты в пищевой комбайн.</li>
  <li>
    Измельчите все ингредиенты до состояния пасты.
    <ul>
      <li>Если вы хотите "грубый" хумус, измельчайте пару минут.</li>
      <li>Если вам нужен гладкий хумус, измельчайте дольше.</li>
    </ul>
  </li>
</ol>
```

Попробуйте вернуться к предыдущему примеру активного обучения и обновить второй список.

## Акцент и важность

В обиходе мы часто подчёркиваем определённые слова, чтобы изменить смысл предложения и мы часто хотим отметить некоторые слова как важные или разные в некотором роде. HTML предоставляет различные семантические элементы, позволяющие нам добавлять текстовые материалы с такими эффектами, и в этом разделе мы рассмотрим несколько наиболее распространённых.

### Акцент

Когда мы хотим добавить акцент в разговорный язык, мы подчёркиваем определённые слова, тонко изменяя смысл того, что мы говорим. Точно так же на письменном языке мы склонны подчёркивать слова, выделяя их _курсивом_. Например, следующие два предложения имеют разные значения.

Я рад, что ты не опоздал.

Я _рад_, что ты не _опоздал_.

В первом предложении звучит искреннее облегчение, что человек не опоздал. Во втором, напротив, звучит сарказм или пассивная агрессия: так выражена досада от того, что человек немного опоздал.

В таких случаях в HTML используется элемент {{htmlelement ("em")}} (выделение). Кроме того, чтобы сделать документ более интересным для чтения, они распознаются программами, считывающими с экрана, и произносятся другим тоном. Браузеры стилизуют это по умолчанию курсивом, но вы можете не использовать этот тег, чтобы получить курсив. Для выделения курсивом вы можете использовать элемент {{htmlelement ("span")}} и CSS, или, возможно, элемент {{htmlelement ("i")}} (смотрите ниже).

```html
<p>Я <em>рад</em>, что ты не <em>опоздал</em>.</p>
```

### Важное значение

Чтобы подчеркнуть важные слова, мы склонны подчёркивать их в устной речи и **выделять жирным** на письменном языке. Например:

Эта жидкость **очень токсична**.

Я рассчитываю на вас. **Не опаздывай**!

В таких случаях в HTML используется элемент {{htmlelement ("strong")}} (важное значение). Помимо того, что документ становится более полезным, они распознаются программами, считывающими с экрана, и говорят другим тоном. Браузеры стилизуют это как полужирный текст по умолчанию, но вы можете не использовать этот тег, чтобы получить жирный шрифт. Для получения жирного шрифта вы можете использовать элемент {{htmlelement ("span")}} и CSS, или, возможно, элемент {{htmlelement ("b")}} (смотрите ниже).

```html
<p>Эта жидкость <strong>очень токсична</strong>.</p>

<p>Я рассчитываю на тебя. <strong>Не </strong>опаздывай!</p>
```

При желании вы можете вложить важные и акцентированные слова друг в друга:

```html
<p>
  Эта жидкость <strong>очень токсична</strong> — если ты выпьешь её,
  <strong>то можешь <em>умереть</em></strong
  >.
</p>
```

### Активное изучение: Давайте будем важны!

В этом разделе активного обучения мы предоставили редактируемый пример. Внутри него мы хотели бы, чтобы вы попытались добавить акцент и большую важность для слов, которые, по вашему мнению, им нужны, просто для того, чтобы попрактиковаться.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Важное объявление</h1>
<p>9 января 2010 года, в воскресенье,
банда вандалов была обнаружена за кражей нескольких
садовых гномов из торгового центра в центре Милуоки. На них были
надеты зелёные спортивные костюмы и глупые шляпы, и,
по-видимому, они были в нетрезвом состоянии. Если у кого-то
есть какая-либо информация об этом инциденте, пожалуйста,
позвоните в полицию немедленно.</p></textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сбросить" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Спрятать решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Важное объявление</h1>\n<p><strong>9 января 2010 года, в воскресенье</strong>, банда <em>вандалов</em> была обнаружена за кражей <strong><em>нескольких</em> садовых гномов</strong> торговом центре в центре <strong>Милуоки</strong>. На них были надеты <em>зелёные спортивные костюмы</em> и <em>глупые шляпы</em>, и, по-видимому, они были в нетрезвом состоянии. Если у кого-то есть <strong>какая-либо</strong> информация об этом инциденте, пожалуйста, позвоните в полицию <strong>немедленно</strong>.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Показать решение") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_5', 700, 500) }}

### Курсив, жирный шрифт, подчеркивание

Элементы, которые мы обсуждали до сих пор, имеют чёткую привязку к семантике. Ситуация с {{htmlelement ("b")}}, {{htmlelement ("i")}} и {{htmlelement ("u")}} несколько сложнее. Они появились в эпоху, когда CSS поддерживался плохо или вообще не поддерживался, чтобы люди могли писать **жирный** текст, _курсив_ или **подчёркнутый** текст. Такие элементы, которые влияют только на внешний вид, а не на семантику, известны как элементы представления и больше не должны использоваться, поскольку, как мы видели ранее, семантика очень важна для доступности людям с ограниченными возможностями, SEO и так далее.

HTML5 переопределил \<b>, \<i> и \<u> с новыми, несколько запутанными, семантическими ролями.

Вот хорошее правило: предпочтительней использовать \<b>, \<i> или \<u> для передачи значения, традиционно передаваемого жирным шрифтом, курсивом или подчёркиванием, при условии, что нет более подходящего элемента. Тем не менее, всегда важно сохранить менталитет доступности. Концепция курсива не очень помогает людям, использующим устройства для чтения с экрана, или людям, использующим систему письма, отличную от латинского алфавита.

- {{HTMLElement ('i')}} используется для передачи значения, традиционно передаваемого курсивом: иностранные слова, таксономические обозначения, технические термины, мысли ...
- {{HTMLElement ('b')}} используется для передачи значения, традиционно передаваемого жирным шрифтом: ключевые слова, названия продуктов, предложения ...
- {{HTMLElement ('u')}} используется для передачи значения, традиционно передаваемого подчёркиванием: имя собственное, орфографическая ошибка ...

> **Примечание:** Предупреждение о подчёркивании: **люди сильно ассоциируют подчёркивание с гиперссылками**. Поэтому в Интернете лучше всего подчеркнуть только ссылки. Используйте элемент \<u>, когда он семантически подходит, но подумайте о том, чтобы использовать CSS для изменения подчёркивания по умолчанию для чего-то более подходящего в Интернете. Пример ниже иллюстрирует, как это можно сделать.

```html
<!-- Научные наименования -->
<p>
  Колибри обыкновенный (<i>архилоус обыкновенный</i>) — наиболее часто
  встречающийся вид колибри в северо-восточной Америке.
</p>

<!-- Иностранные слова -->
<p>
  Случился прилив иностранных слов, таких как <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> и <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- Явно неправильное произношение или написание -->
<p>Когда-нибудь я узнаю, как <u>гаварить</u> без ошибок.</p>

<!-- Выделение ключевых слов в инструкциях -->
<ol>
  <li><b>Отрежьте</b> два ломтика хлеба.</li>
  <li><b>Добавьте</b> кусочек помидора и лист латука между ломтями хлеба.</li>
</ol>
```

## Заключение

Вот и всё! Эта статья должна была дать вам хорошее представление о том, как начать разметку текста в HTML, и познакомить вас с некоторыми из наиболее важных элементов в этой области. В этой области есть намного больше семантических элементов, и мы рассмотрим их в нашей статье «Больше семантических элементов» позже в курсе. В следующей статье мы подробно рассмотрим, как [создавать гиперссылки](/ru/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), возможно, самый важный элемент в Интернете.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

## В этом модуле

- [Начало работы с HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
- [Что такое заголовок? Метаданные в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/The_head_metadata_in_HTML)
- [Основы редактирования текста в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals)
- [Создание гиперссылок](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA)
- [Углублённое форматирование текста](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Advanced_text_formatting)
- [Структура документа и веб-сайта](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%B0)
- [Отладка HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Debugging_HTML)
- [Разметка письма](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Marking_up_a_letter)
- [Структурируем страницу](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Structuring_a_page_of_content)
