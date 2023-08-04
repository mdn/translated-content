---
title: Полезные методы для строк
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/JavaScript/Первые_шаги/Строки", "Learn/JavaScript/Первые_шаги/Arrays", "Learn/JavaScript/Первые_шаги")}}

Мы рассмотрели базовые понятия, касающиеся строк. Давайте пойдём дальше и рассмотрим, какие полезные операции мы можем выполнять со строками, используя встроенные функции, такие как поиск длины текстовой строки, объединение и разделение строк, замена одного символа из строки другим и многое другое.

| **Необходимые знания:** | Базовая компьютерная грамотность, базовое понимание HTML и CSS, понимание того, что такое JavaScript.                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Задача:**             | Понять, что строки являются объектами, и изучить, как использовать некоторые из основных методов, доступных для этих объектов для управления строками. |

## Строки как объекты

Почти всё в JavaScript является объектами. Когда вы создаёте строку, например:

```
let string = 'This is my string';
```

ваша переменная становится строковым объектом, и, как результат, ей доступно множество свойств и методов. Можете убедиться в этом, перейдя на страницу {{jsxref ("String")}} и просмотрев на ней список свойств и методов!

**Только не волнуйтесь!** Большинство из них вам не нужно знать сейчас на ранней стадии вашего обучения. Но некоторые из них вы, возможно, будете использовать довольно часто. Их мы и рассмотрим.

Введем несколько примеров в [консоль разработчика](/ru/docs/Learn/Common_questions/What_are_browser_developer_tools).

### Поиск длины строки

Это легко — вы просто используете свойство {{jsxref ("String.prototype.length", "length")}}. Попробуйте ввести следующие строки:

```
let browserType = 'mozilla';
browserType.length;
```

Результатом должно быть число 7, потому что слово «mozilla» состоит из 7 символов. Это свойство можно применить, например, если вы захотите найти длины серии имён, чтобы их можно было отображать по порядку длины или сообщить пользователю, что имя пользователя, которое он ввёл в поле формы, слишком длинное, если оно превышает определённую длину.

### Получение определённого строкового символа

Вы можете вернуть любой символ внутри строки, используя **обозначение в квадратных скобках.** Это означает, что вы добавляете квадратные скобки (\[ ]) в конце вашего имени переменной. В квадратных скобках вы указываете номер символа, который хотите вернуть. Например, чтобы получить первую букву, нужно написать:

```
browserType[0];
```

Компьютеры считают от 0, а не 1! Чтобы получить последний символ _любой_ строки, мы могли бы использовать следующую строку, объединив эту технику с свойством `length`:

```
 browserType[browserType.length-1];
```

Длина слова «mozilla» равна 7, но, поскольку счёт начинается с 0, позиция последнего символа равна 6, поэтому нам нужна `length-1`. Такой способ можно использовать, чтобы найти первую букву ряда строк и упорядочить их по алфавиту.

### Поиск подстроки внутри строки и её извлечение

1. Иногда вам может понадобиться выяснить, присутствует ли меньшая строка внутри большей (обычно мы говорим, что внутри строки есть подстрока). Это можно сделать с помощью метода {{jsxref ("String.prototype.indexOf ()", "indexOf ()")}}, который принимает одну {{glossary ("parameter")}} - подстроку, которую вы хотите найти. Введите:

   ```
   browserType.indexOf('zilla');
   ```

   Это даёт нам результат 2, потому что подстрока «zilla» начинается в позиции 2 ("m" — 0, "o" — 1, "z" — 2) внутри «mozilla». Такой код можно использовать для фильтрации строк. Например, если есть список веб-адресов и вы хотите распечатать только те, которые содержат «mozilla».

2. Это можно сделать по-другому, что, возможно, ещё более эффективно. Введите следующее:

   ```
   browserType.indexOf('vanilla');
   ```

   Это должно дать вам результат -1. Такое значение возвращается, когда подстрока, в данном случае «vanilla», не найдена в основной строке.

   Вы можете использовать это, чтобы найти все экземпляры строк, которые не содержат подстроку «mozilla» (для обратного эффекта, используйте оператор отрицания):

   ```
   if(browserType.indexOf('mozilla') === -1) {
     // сделать что-то, если 'mozilla'
     // не является частью этой строки
   }

   if(browserType.indexOf('mozilla') !== -1) {
     // сделать что-то, если 'mozilla'
     // является частью этой строки
   }
   ```

3. Когда вы знаете, где подстрока начинается внутри строки, и вы знаете, на каком символе вы хотите её завершить, можно использовать {{jsxref ("String.prototype.slice ()", "slice ()")}} для извлечения. Попробуйте следующее:

   ```
   browserType.slice(0,3);
   ```

   Это возвращает «moz». Первым параметром является позиция символа, с которого начинается извлечение, а второй параметр — позиция последнего символа, перед которым нужно отсечь строку*.* Таким образом, срез происходит с первой позиции, вплоть до последней позиции, но не включая её *(*помним, что _счёт идёт с 0, а не с 1)_. Также можно сказать, что второй параметр равен длине возвращаемой строки.

4. Кроме того, если вы знаете, что хотите извлечь все остальные символы в строке после определённого символа, вам не нужно включать второй параметр. Достаточно включить только положение символа, с которого вы хотите начать извлечение оставшихся символов в строке. Введите:

   ```
   browserType.slice(2);
   ```

   Этот код возвращает «zilla» — это потому, что позиция символа 2 — это буква z, и поскольку вы не указали второй параметр, возвращаемая подстрока состояла из всех остальных символов в строке.

> **Примечание:** второй параметр `slice()` не обязателен: если вы его не включите в код, обрезание закончится на конце оригинальной строки. Есть и другие варианты; изучите страницу {{jsxref ("String.prototype.slice ()", "slice ()")}}, чтобы узнать, что ещё вы можете узнать.

### Изменение регистра

Строковые методы {{jsxref ("String.prototype.toLowerCase ()", "toLowerCase ()")}} и {{jsxref ("String.prototype.toUpperCase ()", "toUpperCase ()")}} преобразовывают все символы в строке в нижний или верхний регистр соответственно. Этот способ можно применить, если вы хотите нормализовать все введённые пользователем данные перед их сохранением в базе данных.

Попробуем ввести следующие строки, чтобы узнать, что происходит:

```
var radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
```

### Обновление частей строки

Вы можете заменить одну подстроку внутри строки на другую подстроку, используя метод {{jsxref ("String.prototype.replace ()", "replace ()")}}. Этот метод работает очень просто на базовом уровне, но у него есть некоторые продвинутые свойства, но мы пока не будем вдаваться в детали.

Он принимает два параметра — строку, которую вы хотите заменить, и строку, которую вы хотите вставить вместо заменяемой. Попробуйте этот пример:

```
browserType.replace('moz','van');
```

Обратите внимание, что для фактического получения обновлённого значения, отражённого в переменной browserType в реальной программе, вам нужно будет установить значение переменной в результате операции; он не просто обновляет значение подстроки автоматически. Таким образом, вы должны были бы написать это: `browserType = browserType.replace('moz','van');`

## Активные примеры обучения

В этом разделе мы дадим вам попробовать набить руку и вместе напишем код строковой манипуляции. В каждом упражнении ниже у нас есть массив строк и цикл, который обрабатывает каждое значение в массиве и отображает его в маркированном списке. Вам не нужно понимать массивы или циклы прямо сейчас — это будет объяснено в будущих статьях. Все, что вам нужно сделать в каждом случае, — написать код, который выводит строки в том формате, в котором мы предлагаем.

В каждом примере есть кнопка _Сбросить_, которую вы можете использовать для сброса кода, если вы допустили ошибку и не можете заставить его работать снова, а кнопку _Показать решение_ вы можете нажать, чтобы увидеть потенциальный ответ, если вы действительно застрянете на решении.

### Фильтрация приветственных сообщений

В первом упражнении мы начнём с простого: у нас есть множество сообщений поздравительных открыток, но мы хотим отсортировать их, чтобы перечислять только рождественские сообщения. Мы хотим, чтобы вы заполнили условный тест внутри структуры if( ... ), чтобы проверить каждую строку и отобразить её в списке, только если это рождественское сообщение.

1. Сначала подумайте о том, как вы можете проверить, является ли сообщение в каждом случае рождественским сообщением. Какая строка присутствует во всех этих сообщениях и какой метод вы можете использовать для проверки?
2. Затем вам нужно будет написать условный тест _операнд1 оператор операнд2_. Соответствует ли результат слева результату справа? Или в этом случае вызов метода слева возвращает результат справа?
3. Подсказка. В этом случае, вероятно, полезнее проверить, не является ли часть строки не равной (!==) определённому результату.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['С днём рождения!',
                 'С Рождеством, любовь моя',
                 'Счастливого Рождества всей твоей семье',
                 'Ты — та, кто нужен мне на Рождество',
                 'Поправляйся скорее'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Ваше решение должно быть в фигурных скобках
  // ниже: вы должны что-то добавить
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
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

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['С днём рождения!',\n 'С Рождеством, любовь моя',\n 'Счастливого Рождества всей твоей семье',\n 'Ты — та, кто нужен мне на Рождество',\n 'Поправляйся скорее'];\n\nfor(var i = 0; i < greetings.length; i++) {\n var input = greetings[i];\n if(greetings[i].indexOf('Рождеств') !== -1) {\n var result = input;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n }\n}";
var solutionEntry = jsSolution;

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

{{ EmbedLiveSample('Playable_code', '100%', 590, "", "", "hide-codepen-jsfiddle") }}

### Исправление регистра (_размера букв в тексте—прим. пер._)

В этом упражнении у нас есть названия городов в Великобритании, но написанных разным регистром. Мы хотим, чтобы вы изменили их так, чтобы они были в нижнем регистре, за исключением первой буквы. Хороший способ сделать это:

1. Преобразуйте всю строку, содержащуюся в переменной input, в нижний регистр и сохраните её в новой переменной.
2. Возьмите первую букву строки в этой новой переменной и сохраните её в другой переменной.
3. Используя эту последнюю переменную в качестве подстроки, замените первую букву строчной строки первой буквой строчной строки, изменённой на верхний регистр. Сохраните результат этой процедуры замены в другой новой переменной.
4. Измените значение переменной `result` на равную конечному результату (не `input`).

> **Примечание:** Подсказка — параметры строковых методов не обязательно должны быть строковыми литералами; они также могут быть переменными или даже переменными с вызываемым ими методом.

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // пишите код ниже

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
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

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['лонДон', 'МанЧЕСТёр', 'БиРминГЕМ', 'лиВЕРпуЛЬ'];\n\nfor(var i = 0; i < cities.length; i++) {\n var input = cities[i];\n var lower = input.toLowerCase();\n var firstLetter = lower.slice(0,1);\n var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n var result = capitalized;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n\n}";
var solutionEntry = jsSolution;

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

{{ EmbedLiveSample('Playable_code_2', '100%', 550, "", "", "hide-codepen-jsfiddle") }}

### Создание новых строк из старых частей

В этом последнем упражнении массив содержит кучу строк, содержащих информацию о железнодорожных станциях на севере Англии. Строки представляют собой элементы данных, которые содержат трёхбуквенный код станции, за которым следуют некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. Например:

```
MAN675847583748sjt567654;Manchester Piccadilly
```

Мы хотим извлечь код станции и имя и поместить их в строку со следующей структурой:

```
MAN: Manchester Piccadilly
```

Мы бы рекомендовали реализовать это следующим образом:

1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
2. Найдите номер символьного номера точки с запятой.
3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
4. Объедините две новые переменные и строковый литерал, чтобы сделать финальную строку.
5. Измените значение переменной `result` равной конечной строке (не `input`).

```html hidden
<h2>Результат</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Редактируемый код</h2>
<p class="a11y-label">
  Нажмите Esc, чтобы выйти из поля ввода (Tab вставляет символ табуляции).
</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // пишите ваш код ниже

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
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
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
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

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n 'GNF576746573fhdg4737dh4;Greenfield',\n 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n 'SYB4f65hf75f736463;Stalybridge',\n 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n var input = stations[i];\n var code = input.slice(0,3);\n var semiC = input.indexOf(';');\n var name = input.slice(semiC + 1);\n var result = code + ': ' + name;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n}";
var solutionEntry = jsSolution;

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

{{ EmbedLiveSample('Playable_code_3', '100%', 585, "", "", "hide-codepen-jsfiddle") }}

## Заключение

Нельзя не согласиться с тем, что способность обрабатывать слова и предложения в программировании очень важна — особенно в JavaScript, поскольку веб-сайты — все связаны с людьми. Эта статья дала вам основы, которые вам нужно знать о манипуляции строками на данный момент. Это пойдёт вам на пользу, когда вы займётесь более сложными темами в будущем. Далее мы рассмотрим последний важный тип данных, на который нам нужно сосредоточиться в краткосрочной перспективе — массивы.

{{PreviousMenuNext("Learn/JavaScript/Первые_шаги/Строки", "Learn/JavaScript/Первые_шаги/Arrays", "Learn/JavaScript/Первые_шаги")}}

## В этом модуле

- [Что такое JavaScript?](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/What_is_JavaScript)
- [Знакомство с JavaScript](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/A_first_splash)
- [Устранение ошибок в JavaScript](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/%D0%A7%D1%82%D0%BE_%D0%BF%D0%BE%D1%88%D0%BB%D0%BE_%D0%BD%D0%B5_%D1%82%D0%B0%D0%BA)
- [Переменные — место хранения необходимой информации](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/Variables)
- [Базовая математика в JavaScript](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/Math)
- [Работа с текстом — строки в JavaScript](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/%D0%A1%D1%82%D1%80%D0%BE%D0%BA%D0%B8)
- [Полезные методы для строк](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/Useful_string_methods)
- [Массивы](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/Arrays)
- [Генератор глупых историй](/ru/docs/Learn/JavaScript/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B3%D0%B8/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D0%B5%D0%BB%D1%8C_%D0%B3%D0%BB%D1%83%D1%8B%D1%85_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B9)
