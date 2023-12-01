---
title: Продвинутое форматирование текста
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

В HTML для форматирования текста есть много других элементов, не рассмотренных в статье [Основы редактирования текста в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals). Элементы, описанные в этой статье, не так часто используются, но всё же полезны для понимания (и это всё ещё будет не полный список элементов). Здесь вы узнаете о цитатах, списках описания, компьютерном коде и другом виде текстовых элементов, подстрочном и надстрочном тексте, контактной информации и других типах текста.

| Предварительные требования: | Базовое знакомство с HTML, раскрытое в [Начало работы с HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B). Форматирование текста с помощью HTML, описанное в статье [Основы редактирования текста в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals). |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:                     | Научиться использовать менее известные HTML-элементы для продвинутой семантической разметки текста.                                                                                                                                                                                                                                                                                                                                 |

## Списки описания

В основах HTML-текста мы рассмотрели, как [пометить привычные типы списков](HTML_text_fundamentals#Lists) в HTML, но мы не упоминали о третьем типе списка, с которым вы иногда сталкиваетесь, — списке описания. Цель этих списков состоит в том, чтобы пометить набор элементов и их связанных описаний, таких как термины и определения или вопросы и ответы.

Давайте рассмотрим пример набора терминов и определений:

```
Солилоквий
Драматическая речь, в которой персонаж разговаривает сам с собой, передавая свои ощущения и мысли публике (но не другим персонажам).
Монолог
Драматическая речь, в которой персонаж передаёт свои мысли публике и некоторым персонажам.
Ремарка
В драме: речь персонажа, при которой делается замечание с юмористическим или драматическим эффектом; чаще всего это чувства, мысли или предпосылки к чему-либо.
```

В списках описания используется иная оболочка, чем в других типах списков — {{htmlelement ("dl")}} (от _description list_); кроме того, каждый термин завёрнут в элемент {{htmlelement ("dt")}} (_description term_ — термин для описания) и каждое определение завёрнуто в элемент {{htmlelement ("dd")}} (_description definition_ — описание определения).

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

В стилях браузера по умолчанию будут отображаться списки описания с некоторыми отступами от терминов. Стили, определённые на MDN, довольно близки к этому соглашению, но также вносят некоторые изменения:

- Солилоквий
  - : Драматическая речь, в которой персонаж разговаривает сам с собой, передавая свои ощущения и мысли публике (но не другим персонажам).
- Монолог
  - : Драматическая речь, в которой персонаж передаёт свои мысли публике и некоторым персонажам.
- Ремарка
  - : В драме: речь персонажа, при которой делается замечание с юмористическим или драматическим эффектом; чаще всего это чувства, мысли или предпосылки к чему-либо.

Заметьте, что разрешено давать одному элементу несколько описаний:

- Ремарка

  - : В драме: речь персонажа, при которой делается замечание с юмористическим или драматическим эффектом; чаще всего это чувства, мысли или предпосылки к чему-либо.

    В письменности: отметка, примечание (_устар._).

### Активное обучение: разметка набора определений

Пришло время попробовать свои силы в списках описания: добавьте элементы в исходный текст в поле Ввод, чтобы он отображался как список описания в поле _Вывод_. Вы можете попробовать использовать свои собственные термины и описания, если хотите.

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
Рычаг, движущий планетами.
Светло-коричневого цвета.</textarea
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
  "<dl>\n <dt>Бекон</dt>\n <dd>Скрепляет мир вокруг.</dd>\n <dt>Яйца</dt>\n <dd>Скрепляют пироги вокруг.</dd>\n <dt>Кофе</dt>\n <dd>Рычаг, движущий планетами.</dd>\n <dd>Светло-коричневого цвета.</dd>\n</dl>";
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

{{ EmbedLiveSample('Playable_code', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Цитаты

HTML также имеет функции, доступные для маркировки цитат; какой элемент вы используете, зависит от того, маркируете ли вы блочную или строчную цитату.

### Блочные цитаты

Если часть содержимого уровня блока (будь то абзац, несколько абзацев, список и т. д.) цитируется из другого источника, вы должны обернуть её внутри элемента {{htmlelement ("blockquote")}}, чтобы обозначить это, и указать URL-адрес, указывающий на источник цитаты, внутри атрибута [`cite`](/ru/docs/Web/HTML/Element/blockquote#cite).

Например, следующая разметка берётся из страницы элемента MDN **`<blockquote>`**:

```html
<p>
  <strong>HTML-элемент<code>&lt;blockquote&gt;</code></strong> (от англ.
  <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в нём
  текст является развёрнутой цитатой.
</p>
```

Чтобы превратить её в блочную цитату, мы просто делаем следующее:

```html
<blockquote
  cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML-элемент<code>&lt;blockquote&gt;</code></strong> (от англ.
    <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в
    нём текст является развёрнутой цитатой.
  </p>
</blockquote>
```

Стиль браузера по умолчанию будет отображать это как абзац с отступом, как индикатор того, что это цитата; абзац над цитатой призван продемонстрировать это. MDN делает это, но также добавляет некоторый дополнительный стиль:

> **HTML-элемент \<blockquote>** (от англ. _Block Quotation_) указывает на то, что заключённый в нём текст является развёрнутой цитатой.

### Строчные цитаты

Строчные цитаты работают точно так же, за исключением того, что они используют элемент {{htmlelement ("q")}}. Например, следующий кусочек разметки содержит цитату из страницы `<q>` MDN:

```html
<p>
  Элемент цитирования — <code>&lt;q&gt;</code> —
  <q cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/q"
    >предназначен для коротких цитат, не требующих прерывания абзаца</q
  >.
</p>
```

Стиль браузера по умолчанию будет отображать это как обычный текст, заключённый в кавычки для обозначения цитаты, например:

Элемент цитирования — `<q>` — "предназначен для коротких цитат, не требующих прерывания абзаца".

### Цитирование

Содержание атрибута [`cite`](/ru/docs/Web/HTML/Element/blockquote#cite) выглядит полезным, но, к сожалению, браузерам, программам чтения с экрана и т. д. оно на самом деле мало чем помогает. Невозможно заставить браузер отображать содержимое атрибута `cite` без написания собственного решения с использованием JavaScript или CSS. Если вы хотите, чтобы источник цитирования был доступен на странице, лучший способ его разметки - поместить элемент {{htmlelement ("cite")}} рядом с элементом цитаты (или внутри него). Это действительно будет означать то, что имя источника цитаты — то есть имя книги или имя человека, которое произвело цитату, — будет включено в текст. Нет причин, по которым вы не могли бы связать текст внутри `<cite>` с источником цитаты:

```html
<p>
  Как указано в статье о
  <a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote">
    <cite>блочных цитатах</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML-элемент<code>&lt;blockquote&gt;</code></strong> (от англ.
    <em>HTML Block Quotation Element</em>) указывает на то, что заключённый в
    нем текст является развёрнутой цитатой.
  </p>
</blockquote>

<p>
  Элемент цитирования — <code>&lt;q&gt;</code> —
  <q cite="https://developer.mozilla.org/ru/docs/Web/HTML/Element/q"
    >предназначен для коротких цитат, не требующих прерывания абзаца</q
  >. --
  <a href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/q">
    <cite>Строчные цитаты</cite></a
  >.
</p>
```

По умолчанию цитаты стилизованы курсивом. Этот код можно увидеть в нашем примере [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html)

### Активное обучение: кто это сказал?

Время для другого примера активного обучения! В этом примере мы хотели бы, чтобы вы совершили следующие действия:

1. Преобразуйте средний абзац в блочную цитату (`<blockquote>`), который включает атрибут `cite`.
2. Заверните часть третьего абзаца в строчную цитату, которая включает атрибут `cite`.
3. Включите элемент `<cite>` для каждой ссылки.

Источники цитирования, которые вам потребуются:

- <http://www.brainyquote.com/quotes/authors/c/confucius> — HTML-страница с цитатами Конфуция
- <https://www.affirmationsforpositivethinking> — HTML-страница _The Need To Eliminate Negative Self Talk_.

Если вы ошиблись, то всегда можете начать снова, воспользовавшись кнопкой _Сбросить_. Если упражнение вызывает у вас затруднения, то нажмите кнопку _Показать решение_, чтобы увидеть правильный ответ.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Здравствуйте и добро пожаловать на мою страницу мотивации! Конфуций как-то сказал:</p>
<p>Не важно, с какой скоростью ты движешься к своей цели, — главное не останавливаться.</p>
<p>Мне также нравится концепция позитивного мышления, и я считаю, каждый ощущает Необходимость избавления от негативного внутреннего разговора (как сказано в зарубежной статье Affirmations for Positive Thinking.)</p>
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
  '<p>Здравствуйте и добро пожаловать на мою страницу мотивации! <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Конфуций</cite></a> как-то сказал:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>Не важно, с какой скоростью ты движешься к своей цели, — главное не останавливаться.</p>\n</blockquote>\n\n<p>Мне также нравится концепция позитивного мышления, и я считаю, каждый ощущает <q cite="http://www.affirmationsforpositivethinking.com/index.htm">Необходимость избавления от негативного внутреннего разговора</q> (как сказано в зарубежной статье <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
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

{{ EmbedLiveSample('Playable_code_2', 700, 450, "", "", "hide-codepen-jsfiddle") }}

## Аббревиатуры

Другой довольно часто встречающийся элемент, который вы будете часто встречать в Интернете, — это {{htmlelement ("abbr")}}, используемый для обёртывания аббревиатур или акронимов и обеспечивающий полную расшифровку сокращения (с помощью атрибута [`title`](/ru/docs/Web/HTML/Global_attributes#title).)

Давайте рассмотрим несколько примеров:

```
<p>Мы используем <abbr title="Hypertext Markup Language">HTML</abbr> для структурирования наших веб-документов.</p>

<p>Я думаю, <abbr title="Почтенный">Почт.</abbr> Грин сделал это на кухне с бензопилой.</p>
```

Они будут выглядеть примерно так (расшифровка появится в подсказке при наведении курсора мыши на сокращение):

Мы используем HTML для структурирования наших веб-документов.

Я думаю, Почт. Грин сделал это на кухне с бензопилой.

> **Примечание:** Существует ещё один элемент {{htmlelement ("acronym")}}, который в основном делает то же самое, что и `<abbr>`, но предназначен специально для акронимов (тип аббревиатур). Это, однако, было излишним, — он не поддерживается в браузерах на том же уровне, что `<abbr>`, и имеет такую же функциональность, поэтому считается бессмысленным иметь оба. Просто используйте `<abbr>`.

### Активное обучение: выделение аббревиатуры

В рамках этого простого упражнения мы хотели бы, чтобы вы просто указали аббревиатуру. Вы можете использовать наш образец ниже или заменить его на свой собственный.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>Безусловно, NASA занимается классными вещами.</p>
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
  '<p>Безусловно, <abbr title="National Aeronautics and Space Administration">NASA</abbr> занимается классными вещами.</p>';
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

{{ EmbedLiveSample('Playable_code_3', 700, 300, "", "", "hide-codepen-jsfiddle") }}

## Разметка контактных данных

HTML имеет элемент для разметки контактных данных — {{htmlelement ("address")}}. Он просто обёртывает ваши контактные данные, например:

```html
<address>
  <p>Крис Миллс, Манчестер, Жестокий Север, РФ</p>
</address>
```

Однако следует помнить, что элемент {{htmlelement ("address")}} предназначен для разметки контактных данных человека, который написал HTML-документ, а не _любого_ адреса. Таким образом, написанное выше было бы корректным только в том случае, если бы Крис написал документ, на котором появляется разметка. Обратите внимание, что следующее также подойдёт:

```html
<address>
  <p>Автор страницы — <a href="../authors/chris-mills/">Крис Миллс</a>.</p>
</address>
```

## Верхний и нижний индекс

Иногда вам понадобится использовать надстрочный или подстрочный индекс при разметке таких вещей, как даты, химические формулы и математические уравнения, чтобы они имели правильное представление. Элементы {{htmlelement ("sup")}} и {{htmlelement ("sub")}} созданы для таких ситуаций.

Приведём пример:

```html
<p>Я просыпаюсь в 6<sup>35</sup> часов утра.</p>
<p>
  Химическая формула кофеина:
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>Если x<sup>2</sup> равно 9, x должен равняться 3 или -3.</p>
```

Результат этого кода выглядит следующим образом:

Я просыпаюсь в 635 часов утра.

Химическая формула кофеина: C8H10N4O2.

Если x2 равно 9, x должен равняться 3 или -3.

## Представление компьютерного кода

Существует несколько элементов для маркировки компьютерного кода с использованием HTML:

- {{htmlelement("code")}}: Для разметки общих частей компьютерного кода.
- {{htmlelement("pre")}}: Для сохранения пробелов (как правило, кодовых блоков) — если вы используете отступы или лишние пробелы внутри вашего текста, браузеры будут игнорировать его, и вы не увидите его на вашей отображаемой странице; если вы поместите текст в теги `<pre></pre>`, то ваши пробелы будут отображаться идентично тому, как вы видите текст в редакторе.
- {{htmlelement("var")}}: Для конкретной маркировки имён переменных.
- {{htmlelement("kbd")}}: Для маркировки ввода с клавиатуры (и других типов).
- {{htmlelement("samp")}}: Для маркировки вывода компьютерной программы.

Давайте рассмотрим несколько примеров. Вы должны попробовать поиграть с ними (захватите копию нашего файла [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html)):

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Вышеприведённый код будет выглядеть так:

{{ EmbedLiveSample('Representing_computer_code','100%',300, "", "", "hide-codepen-jsfiddle") }}

## Разметка времени и даты

HTML также содержит элемент {{htmlelement ("time")}} для отметки времени и дат в машиночитаемом формате. Например:

```html
<time datetime="2020-01-20">20 Января 2020</time>
```

Почему это полезно? Ну, есть много разных способов, которыми люди записывают даты. Вышеуказанная дата может быть записана как:

- 20 Января 2020
- 20-ое Января 2020
- Янв 20 2020
- 20/01/20
- 01/20/20
- 20e Janvier 2020
- 2020 年 1 月 20 日
- и другое...

Но эти разные формы не могут быть легко распознаны компьютерами — что, если вы хотите автоматически захватить даты всех событий на странице и вставить их в календарь? Элемент {{htmlelement ("time")}} позволяет прикрепить к этой цели однозначное машиночитаемое время / дату.

В приведённом выше базовом примере приведена простая машиносчитываемая дата, но есть много других возможных вариантов, например:

```html
<!-- Стандартная дата -->
<time datetime="2020-01-20">20 Января 2020</time>
<!-- Только год и месяц -->
<time datetime="2020-01">Январь 2020</time>
<!-- Только месяц и день -->
<time datetime="01-20">20 Января</time>
<!-- Только время, часы и минуты -->
<time datetime="19:30">19:30</time>
<!-- Также вы можете отобразить секунды и миллисекунды! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Дата и время -->
<time datetime="2020-01-20T19:30">7.30pm, 20 Января 2020</time>
<!-- Дата и время со смещением по часовому поясу -->
<time datetime="2020-01-20T19:30+01:00"
  >7.30pm, 20 Января 2020, — это 8.30pm во Франции.</time
>
<!-- Вызов номера недели -->
<time datetime="2020-W04">Четвёртая неделя 2020</time>
```

## Заключение

На этом мы подошли к концу нашего изучения семантики текста HTML. Имейте в виду, что то, что вы видели во время этого курса, не является исчерпывающим списком текстовых элементов HTML. Мы попытались охватить основные из них, с которыми вы, скорее всего, столкнётесь в практической деятельности или, по крайней мере, сочтёте их интересными. Чтобы найти больше элементов HTML, вы можете взглянуть на нашу ссылку на [Элемент](/ru/docs/Web/HTML/Element). В следующей статье мы рассмотрим элементы HTML, которые вы будете использовать для структурирования различных частей HTML-документа.

{{PreviousMenuNext ("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

## В этом модуле

- [Начало работы с HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
- [Что такое заголовок? Метаданные в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/The_head_metadata_in_HTML)
- [Основы редактирования текста в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/HTML_text_fundamentals)
- [Создание гиперссылок](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA)
- [Продвинутое форматирование текста](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Advanced_text_formatting)
- [Структура документа и веб-сайта](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0_%D0%B8_%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B9%D1%82%D0%B0)
- [Отладка HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Debugging_HTML)
- [Разметка письма](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Marking_up_a_letter)
- [Структурируем страницу](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/Structuring_a_page_of_content)
