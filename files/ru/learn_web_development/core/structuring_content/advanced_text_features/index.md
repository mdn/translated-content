---
title: Продвинутое форматирование текста
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

В HTML для форматирования текста есть много других элементов, не рассмотренных в статье [Основы редактирования текста в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals). Элементы, описанные в этой статье, не так часто используются, но всё же полезны для понимания (и это всё ещё будет не полный список элементов). Здесь вы узнаете о цитатах, списках описаний, компьютерном коде и другом виде текстовых элементов, подстрочном и надстрочном тексте, контактной информации и других типах текста.

<table>
  <tbody>
    <tr>
      <th scope="row">Необходимые знания:</th>
      <td>
        Базовое знакомство с HTML, раскрытое в <a href="/ru/docs/Learn/HTML/Introduction_to_HTML/Getting_started">Начало работы с HTML</a>. Форматирование текста с помощью HTML, описанное в статье <a href="/ru/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">Основы редактирования текста в HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Цель:</th>
      <td>
        Научиться использовать менее известные HTML-элементы для продвинутой семантической разметки текста.
      </td>
    </tr>
  </tbody>
</table>

## Списки описаний

В основах работы с текстом в HTML мы рассмотрели, как [разметить основные типы списков](/ru/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists), но мы не упомянули о третьем типе списков, с которым вы иногда сталкиваетесь, — списке описаний. Назначение этих списков состоит в том, чтобы разметить набор элементов и их описаний, таких как термины и определения или вопросы и ответы. Давайте рассмотрим пример набора терминов и определений:

```plain
Солилоквий
Драматическая речь, в которой персонаж разговаривает сам с собой, передавая свои ощущения и мысли публике (но не другим персонажам).
Монолог
Драматическая речь, в которой персонаж передаёт свои мысли публике и некоторым персонажам.
Ремарка
В драме: речь персонажа, при которой делается замечание с юмористическим или драматическим эффектом; чаще всего это чувства, мысли или предпосылки к чему-либо.
```

В списках описаний используется своя обёртка — {{htmlelement("dl")}} (от _description list_); кроме того, каждый термин обёрнут в элемент {{htmlelement("dt")}} (_description term_ — термин для описания) и каждое определение обёрнуто в элемент {{htmlelement("dd")}} (_description definition_ — содержимое описания).

### Пример списка описаний

Закончим разметку нашего примера:

```html
<dl>
  <dt>Солилоквий</dt>
  <dd>
    Драматическая речь, в которой персонаж разговаривает сам с собой, передавая
    свои ощущения и мысли публике (но не другим персонажам).
  </dd>
  <dt>Монолог</dt>
  <dd>
    Драматическая речь, в которой персонаж передаёт свои мысли публике и
    некоторым персонажам.
  </dd>
  <dt>Ремарка</dt>
  <dd>
    В драме: речь персонажа, при которой делается замечание с юмористическим или
    драматическим эффектом; чаще всего это чувства, мысли или предпосылки к
    чему-либо.
  </dd>
</dl>
```

В стилях браузера по умолчанию будут отображаться списки описания с некоторыми отступами от терминов.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### Несколько описаний одного термина

Разрешено добавлять несколько описаний для одного термина, например:

```html
<dl>
  <dt>Ремарка</dt>
  <dd>
    В драме: речь персонажа, при которой делается замечание с юмористическим или
    драматическим эффектом; чаще всего это чувства, мысли или предпосылки к
    чему-либо.
  </dd>
  <dd>
    В письменной речи: часть текста, которая связана с текущей темой, но не
    является основным содержимым, поэтому представляется рядом (часто в рамке
    сбоку).
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### Активное обучение: разметка набора определений

Пришло время попробовать свои силы в использовании списков описания: добавьте элементы в исходный текст в поле _Ввод_, чтобы он отображался как список описания в поле _Вывод_. Вы можете попробовать использовать свои собственные термины и описания, если хотите.

Если вы ошиблись, то всегда можете начать снова, воспользовавшись кнопкой _Сбросить_. Если упражнение вызывает у вас затруднения, то нажмите кнопку _Показать решение_, чтобы увидеть правильный ответ.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Бекон
Скрепляет мир вокруг.
Яйца
Скрепляют пироги вокруг.
Кофе
Напиток, пробуждающий мир.
Светло-коричневого цвета.
</textarea>

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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<dl>\n <dt>Бекон</dt>\n <dd>Скрепляет мир вокруг.</dd>\n <dt>Яйца</dt>\n <dd>Скрепляют пироги вокруг.</dd>\n <dt>Кофе</dt>\n <dd>Напиток, пробуждающий мир.</dd>\n <dd>Светло-коричневого цвета.</dd>\n</dl>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Marking_up_a_set_of_definitions', 700, 350) }}

## Цитаты

В HTML также есть возможность форматирования цитат, блочных или строчных.

### Блочные цитаты

Если часть содержимого уровня блока (будь то абзац, несколько абзацев, список и т.д.) цитируется из другого источника, вы должны обернуть её внутри элемента {{htmlelement("blockquote")}}, чтобы обозначить это, и указать URL-адрес, указывающий на источник цитаты, внутри атрибута [`cite`](/ru/docs/Web/HTML/Element/blockquote#cite). Например, следующая разметка берётся из страницы элемента MDN **`<blockquote>`**:

```html
<p>
  <strong>HTML-элемент <code>&lt;blockquote&gt;</code></strong> (от англ.
  <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в нём
  текст является развёрнутой цитатой.
</p>
```

Чтобы превратить её в блочную цитату, мы просто делаем следующее:

```html
<p>Сверху обычный абзац, а ниже цитата:</p>
<blockquote
  cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML-элемент <code>&lt;blockquote&gt;</code></strong> (от англ.
    <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в
    нём текст является развёрнутой цитатой.
  </p>
</blockquote>
```

Стиль браузера по умолчанию будет отображать это как абзац с отступом, чтобы показать, что это цитата.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Строчные цитаты

Строчные цитаты работают точно так же, за исключением того, что они используют элемент {{htmlelement("q")}}. Например, следующий кусочек разметки содержит цитату из страницы MDN об элементе `<q>` :

```html
<p>
  Элемент цитирования <code>&lt;q&gt;</code> предназначен
  <q cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/q">
    для коротких цитат, не требующих прерывания абзаца
  </q>
  .
</p>
```

Стиль браузера по умолчанию будет отображать это как обычный текст, заключённый в кавычки для обозначения цитаты, например:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Цитирование

Содержимое атрибута [`cite`](/ru/docs/Web/HTML/Element/blockquote#cite) выглядит полезным, но, к сожалению, браузерам, программам чтения с экрана и т.д. оно на самом деле мало чем помогает. Невозможно заставить браузер отображать содержимое атрибута `cite` без написания собственного решения с использованием JavaScript или CSS. Если вы хотите, чтобы источник цитирования был доступен на странице, то необходимо добавить ссылку.

Элемент {{htmlelement("cite")}} может содержать имя используемого источника, напрмер, название книги. Нет причин, по которым вы не могли бы связать текст внутри `<cite>` с источником цитаты:

```html
<p>
  Как указано в статье о
  <a href="/ru/docs/Web/HTML/Element/blockquote">
    <cite>блочных цитатах</cite>
  </a>
  :
</p>

<blockquote cite="/ru/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML-элемент <code>&lt;blockquote&gt;</code></strong> (от англ.
    <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в
    нем текст является развёрнутой цитатой.
  </p>
</blockquote>

<p>
  Элемент цитирования <code>&lt;q&gt;</code>
  <q cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/q">
    предназначен для коротких цитат, не требующих прерывания абзаца
  </q>
  (<a href="/ru/docs/Web/HTML/Element/q"> <cite>Строчные цитаты</cite> </a>).
</p>
```

По умолчанию цитаты отображаются курсивом.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Активное обучение: кто это сказал?

Время для другого примера активного обучения! В этом примере необходимо совершить следующие действия:

1. Преобразовать средний абзац в блочную цитату, которая включает атрибут `cite`.
2. Превратить часть третьего абзаца в строчную цитату, которая включает атрибут `cite`.
3. Обернуть название каждого источника в элемент `<cite>` и сделать ссылкой.

Источники цитирования, которые потребуются:

- `http://www.brainyquote.com/quotes/authors/c/confucius` — цитаты Конфуция,
- `http://example.com/affirmationsforpositivethinking` — «The Need To Eliminate Negative Self Talk».

Если вы ошиблись, то всегда можете начать снова, воспользовавшись кнопкой _Сбросить_. Если упражнение вызывает у вас затруднения, то нажмите кнопку _Показать решение_, чтобы увидеть правильный ответ.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Добро пожаловать на страницу мотивации! Конфуций однажды сказал:</p>
<p>Не важно, с какой скоростью ты движешься к своей цели, — главное не останавливаться.</p>
<p>Мне также нравится концепция позитивного мышления и необходимости избавления от негативного внутреннего разговора (как сказано в статье Affirmations for Positive Thinking).</p>
</textarea>

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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  '<p>Добро пожаловать на страницу мотивации! Как сказал <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Конфуций</cite></a>:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>Не важно, с какой скоростью ты движешься к своей цели, — главное не останавливаться.</p>\n</blockquote>\n\n<p>Мне также нравится концепция позитивного мышления и <q cite="http://example.com/affirmationsforpositivethinking">необходимости избавления от негативного внутреннего разговора</q> (как сказано в статье <a href="http://example.com/affirmationsforpositivethinking"><cite>Affirmations for Positive Thinking</cite></a>).</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Скрыть решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
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

{{ EmbedLiveSample('Active_learning_Who_said_that', 700, 450) }}

## Аббревиатуры

Другой довольно часто встречающийся элемент — это {{htmlelement("abbr")}}, используемый для обёртывания аббревиатур или акронимов. Он обеспечивает расшифровку сокращения (с помощью атрибута [`title`](/ru/docs/Web/HTML/Global_attributes#title)).

### Пример аббревиатур

Рассмотрим несколько примеров:

```html
<p>
  Мы используем <abbr>HTML</abbr> (Hypertext Markup Language) для
  структурирования веб-документов.
</p>

<p>
  Я думаю, <abbr title="Уважаемый">ув.</abbr> мистер Грин сделал это на кухне с
  бензопилой.
</p>
```

Они будут выглядеть примерно так:

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> В ранних версиях HTML также была поддержка элемента {{htmlelement("acronym")}}, который был удалён в пользу `<abbr>`, который теперь следует использовать для обозначения акронимов и аббревиатур.

### Активное обучение: обозначение аббревиатуры

В рамках этого простого упражнения мы хотели бы, чтобы вы просто указали аббревиатуру. Вы можете использовать наш образец ниже или заменить его на свой собственный.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>Безусловно, Роскосмос занимается классными вещами.</p>
</textarea>

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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<p>Безусловно, <abbr>Роскосмос</abbr> (Государственная корпорация по космической деятельности) занимается классными вещами.</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Показать решение";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Показать решение") {
    textarea.value = solutionEntry;
    solution.value = "Скрыть решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
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

{{ EmbedLiveSample('Active_learning_marking_up_an_abbreviation', 700, 300) }}

## Разметка контактных данных

В HTML есть элемент для разметки контактных данных — {{htmlelement("address")}}. В него необходимо оборачивать контактные данные, например:

```html
<address>Иван Петров, город Москва, Россия</address>
```

Можно использовать более сложную разметку и разные виды контактной информации, например:

```html
<address>
  <p>
    Иван Петров<br />
    город Москва<br />
    Россия
  </p>

  <ul>
    <li>Телефон: +7 (987) 654 3210</li>
    <li>Электронная почта: ivan.petrov@example.com</li>
  </ul>
</address>
```

Следующий пример также будет правильным, если указанная в ссылке страница содержит контактную информацию.

```html
<address>
  Документ создан <a href="../authors/ivan-petrov/">Иваном Петровым</a>.
</address>
```

> [!NOTE]
> Элемент {{htmlelement("address")}} следует использовать только для представления контактной информации, связанной с ближайшим элементом {{htmlelement("article")}} или {{htmlelement("body")}}. Например, можно использовать его в подвале сайта для размещения общей контактной информации или внутри статьи для указания контактных данных её автора.

## Надстрочный и подстрочный индексы

При разметке дат, химических формул и математических выражений могут потребоваться надстрочные или подстрочные индексы. Для этого существуют элементы {{htmlelement("sup")}} и {{htmlelement("sub")}}. Приведём пример:

```html
<p>Я родился 25<sup>го</sup> мая 2001 года.</p>
<p>
  Химическая формула кофеина:
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>Если x<sup>2</sup> равно 9, x должен равняться 3 или -3.</p>
```

Результат этого кода выглядит следующим образом:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Представление компьютерного кода

Существует несколько элементов для маркировки компьютерного кода с использованием HTML:

- {{htmlelement("code")}}: Для общей разметки компьютерного кода.
- {{htmlelement("pre")}}: Для сохранения пробелов. При обычной отображении страницы браузеры игнорируют отступы и последовательности пробельных символов, а если обернуть текст в теги `<pre></pre>`, то пробелы будут отображаться идентично тому, как он выглядят в редакторе.
- {{htmlelement("var")}}: Для обозначения имён переменных.
- {{htmlelement("kbd")}}: Для обозначения ввода с клавиатуры и других типов ввода информации в компьютер.
- {{htmlelement("samp")}}: Для обозначения вывода компьютерной программы.

Давайте рассмотрим несколько примеров. Полный файл примера: [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html). Можно скачать его и открыть в браузере. А здесь приведём часть примера:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Клик по абзацу!');
}</code></pre>

<p>
  Не следует использовать HTML-элементы только для изменения внешнего вида
  текста, такие как <code>&lt;font&gt;</code> и <code>&lt;center&gt;</code>.
</p>

<p>
  В представленном выше примере JavaScript-кода, <var>para</var> представляет
  элемент абзаца.
</p>

<p>
  Выбрать весь текст можно с помощью комбинации клавиш
  <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Приведённый выше код будет выглядеть так:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Разметка времени и даты

HTML также предоставляет элемент {{htmlelement("time")}} для разметки времени и дат в машиночитаемом формате. Например:

```html
<time datetime="2016-01-20">20 января 2016 года</time>
```

Почему это полезно? Существует много разных способов, которыми люди записывают даты. Вышеуказанная дата может быть записана как:

<!-- markdownlint-disable MD033 -->

- 20 января 2016
- 20-ое января 2016
- Янв 20 2016
- 20/01/16
- 01/20/16
- 20-ое число следующего месяца
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- и так далее

<!-- markdownlint-enable MD033 -->

Но эти разные формы не могут быть легко распознаны компьютерами. Например, если необходимо автоматически считать со страницы даты всех событий и вставить их в календарь. Элемент {{htmlelement("time")}} позволяет связывать однозначное машиночитаемое время/дату с удобным для человека написанием.

В приведённом выше базовом примере приведена простая машиночитаемая дата, но есть много других возможных вариантов, например:

```html
<!-- Стандартная дата -->
<time datetime="2016-01-20">20 января 2016</time>

<!-- Только год и месяц -->
<time datetime="2016-01">январь 2016</time>

<!-- Только месяц и день -->
<time datetime="01-20">20 января</time>

<!-- Только время: часы и минуты -->
<time datetime="19:30">19:30</time>

<!-- Можно отобразить секунды и миллисекунды -->
<time datetime="19:30:01.856">19:30:01.856</time>

<!-- Дата и время -->
<time datetime="2016-01-20T19:30">20 января 2016, 19:30</time>

<!-- Дата и время со смещением по часовому поясу -->
<time datetime="2016-01-20T19:30+01:00">
  20 января 2016, 19:30 — это 20:30 во Франции.
</time>

<!-- Указание номера недели -->
<time datetime="2016-W04">Четвёртая неделя 2016-го года</time>
```

## Проверьте свои навыки!

Вы достигли конца этой статьи, но помните ли вы наиболее важную информацию? Для проверки своих знаний можно использовать набор заданий «[Test your skills: Advanced HTML text](/ru/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text)».

## Заключение

На этом мы завершаем наше изучение семантики текста HTML. Имейте в виду, что в этом курсе мы рассмотрели не все существующие текстовые элементы HTML. Мы хотели показать основные элементы, а также некоторые из наиболее распространённых из них, которые вы встретите в реальной жизни или, по крайней мере, которые могут показаться вам интересными. Чтобы найти гораздо больше HTML-элементов, вы можете взглянуть на наш [справочник элементов HTML](/ru/docs/Web/HTML/Element). В следующей статье мы рассмотрим элементы HTML, которые вы будете использовать для [структурирования HTML-документа](/ru/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
