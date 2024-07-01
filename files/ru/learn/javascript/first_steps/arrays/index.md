---
title: Массивы
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Первые_шаги/Useful_string_methods", "Learn/JavaScript/Первые_шаги/Создатель_глупых_историй", "Learn/JavaScript/Первые_шаги")}}

В финальной статье этого раздела, мы познакомимся с массивами — лаконичным способом хранения списка элементов под одним именем. Мы поймём, чем они полезны, затем узнаем, как создать массив, получить, добавить и удалить элементы, хранящиеся в массиве.

| Необходимые навыки: | Базовая компьютерная грамотность, базовое понимание HTML и CSS, понимание о том, что такое JavaScript. |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| Цель:               | Понять, что такое массивы и как использовать их в JavaScript.                                          |

## Что такое массив?

Массивы обычно описываются как «объекты, подобные спискам»; они представляют собой в основном отдельные объекты, которые содержат несколько значений, хранящихся в списке. Объекты массива могут храниться в переменных и обрабатываться во многом так же, как и любой другой тип значения, причём разница заключается в том, что мы можем получить доступ к каждому значению внутри списка отдельно и делать супер полезные и эффективные вещи со списком, а также делать то же самое для каждого из значений. Представим, что у нас есть список продуктов и их цены, хранящиеся в массиве, и мы хотим их просмотреть и распечатать на счёте-фактуре, общая сумма всех цен и распечатка общей цены внизу.

Если бы у нас не было массивов, мы должны были бы хранить каждый элемент в отдельной переменной, а затем вызывать код, выполняющий печать и добавляющий отдельно каждый элемент. Написание такого кода займёт намного больше времени, сам код будет менее эффективным и подверженным ошибкам. Если бы у нас было 10 элементов для добавления в счёт-фактуру, это ещё куда ни шло, но как насчёт 100 предметов? Или 1000? Мы вернёмся к этому примеру позже в статье.

Как и в предыдущих статьях, давайте узнаем о реальных основах работы с массивами, введя некоторые примеры в [консоль разработчика](/ru/docs/Learn/Common_questions/What_are_browser_developer_tools).

### Создание массива

Массивы создаются из квадратных скобок , которые содержат список элементов, разделённых запятыми.

1. Допустим, мы бы хотели хранить список покупок в массиве — мы бы сделали что-то вроде этого. Введите следующие строчки в вашу консоль:

   ```js
   var shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping;
   ```

2. В данном случае, каждый элемент в массиве — это строка , но имейте в виду, что вы можете хранить любой элемент в массиве — строку, число, объект, другую переменную, даже другой массив. Вы также можете перемешивать типы элементов — они не должны все быть числами, строками, и так далее. Попробуйте это:

   ```js
   var sequence = [1, 1, 2, 3, 5, 8, 13];
   var random = ["tree", 795, [0, 1, 2]];
   ```

3. Попробуйте сами создать несколько массивов, перед тем как двигаться дальше.

### Получение и изменение элементов массива

Вы можете после этого получать доступ к отдельным элементам в массиве, используя квадратные скобки, таким же способом каким вы [получаете доступ к буквам в строке](/en-US/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character).

1. Введите следующее в вашу консоль:

   ```js
   shopping[0];
   // возвращает "bread"
   ```

2. Вы также можете изменять элемент в массиве, просто дав отдельному элементу массива новое значение. Попробуйте это:

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping теперь возвратит [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > **Примечание:** Мы уже упоминали это прежде, но просто как напоминание — компьютеры начинают считать с нуля!

3. Заметьте, что массив внутри массива называется многомерным массивом. Вы можете получить доступ к элементу внутри массива, который сам находится внутри другого массива, объединив два набора квадратных скобок. Например, для доступа к одному из элементов внутри массива, который является третьим элементом внутри массива `random` (см. предыдущую секцию данной статьи), мы могли бы сделать что-то вроде этого:

   ```js
   random[2][2];
   ```

4. Попробуйте внести некоторые дополнительные изменения в свои примеры массивов, прежде чем двигаться дальше.

### Нахождение длины массива

Вы можете найти длину массива (количество элементов в нём) точно таким же способом, как вы находите длину строки (в символах) — используя свойство {{jsxref("Array.prototype.length","length")}}. Попробуйте следующее:

```js
sequence.length;
// должно возвратить 7
```

Это свойство имеет и другие применения, но чаще всего используется, чтобы сказать, что цикл продолжается, пока он не зациклится на всех элементах массива. Так, например:

```js
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

В будущих статьях вы узнаете о циклах, но вкратце этот код говорит:

1. Начать цикл с номера позиции 0 в массиве.
2. Остановить цикл на номере элемента, равном длине массива. Это будет работать для массива любой длины, но в этом случае он остановит цикл на элементе номер 7 (это хорошо, поскольку последний элемент, который мы хотим, чтобы цикл был закрыт, равен 6).
3. Для каждого элемента вернуть его значение в консоли браузера с помощью [`console.log()`](/ru/docs/Web/API/Console/log).

## Некоторые полезные методы массивов

В этом разделе мы рассмотрим некоторые полезные методы, связанные с массивом, которые позволяют нам разбивать строки на элементы массива и наоборот, а также добавлять новые элементы в массивы.

### Преобразование между строками и массивами

Часто у вас могут быть некоторые необработанные данные, содержащиеся в большой длинной строке, и вы можете захотеть разделить полезные пункты до более удобной и полезной формы, а затем сделать что-то для них, например отобразить их в таблице данных. Для этого мы можем использовать метод {{jsxref ("String.prototype.split ()", "split ()")}}. В его простейшей форме он принимает единственный параметр, символ, который вы хотите отделить в строке, и возвращает подстроки между разделителем как элементы в массиве.

> **Примечание:** Хорошо, технически это строковый метод, не метод массива, но мы поместили его в массивы, так как он хорошо подходит для них.

1. Поиграем с этим, посмотрим как это работает. Сначала, создадим строку в вашей консоли:

   ```js
   var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Теперь разделим ee посредством запятой:

   ```js
   var myArray = myData.split(",");
   myArray;
   ```

3. Наконец, попробуйте найти длину вашего нового массива и извлечь из него некоторые элементы:

   ```js
   myArray.length;
   myArray[0]; // первый элемент в массиве
   myArray[1]; // второй элемент в массиве
   myArray[myArray.length - 1]; // последний элемент в массиве
   ```

4. Вы можете сделать обратное используя метод{{jsxref("Array.prototype.join()","join()")}} . Попробуйте следующее:

   ```js
   var myNewString = myArray.join(",");
   myNewString;
   ```

5. Другой способ преобразования массива в строку - использовать метод {{jsxref("Array.prototype.toString()","toString()")}}. `toString()`, возможно, проще,чем `join()` поскольку он не принимает параметр, но это ограничивает его. С `join()` вы можете указать разные разделители (попробуйте выполнить шаг 4 с другим символом, кроме запятой).

   ```js
   var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); //Rocket,Flash,Bella,Slugger
   ```

### Добавление и удаление элементов массива

Мы ещё не рассмотрели добавление и удаление элементов массива - давайте посмотрим на это сейчас. Мы будем использовать массив `myArray` , с которым мы столкнулись в предыдущем разделе. Если вы ещё не прошли этот раздел, сначала создайте массив в консоли:

```js
var myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
```

Прежде всего, чтобы добавить или удалить элемент с конца массива, мы можем использовать {{jsxref("Array.prototype.push()","push()")}} и {{jsxref("Array.prototype.pop()","pop()")}} соответственно.

1. Давайте сначала используем метод `push()` — заметьте, что вам нужно указать один или более элементов, которые вы хотите добавить в конец своего массива. Попробуйте это:

   ```js
   myArray.push("Cardiff");
   myArray;
   myArray.push("Bradford", "Brighton");
   myArray;
   ```

2. При завершении вызова метода возвращается новая длина массива. Если бы вы хотели сохранить новую длину массива в переменной, вы бы могли сделать что-то вроде этого:

   ```js
   var newLength = myArray.push("Bristol");
   myArray;
   newLength;
   ```

3. Удаление последнего элемента массива можно совершить с помощью вызова метода `pop()`. Попробуйте это:

   ```js
   myArray.pop();
   ```

4. Когда вызов метода завершается, возвращается удалённый элемент. Вы бы могли также сделать такое:

   ```js
   var removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} и {{jsxref("Array.prototype.shift()","shift()")}} работают точно таким же способом, за исключением того что они работают в начале массива, а не в конце.

1. Сначала, попробуем метод `unshift()`:

   ```js
   myArray.unshift("Edinburgh");
   myArray;
   ```

2. Теперь `shift()`; попробуйте эти!

   ```js
   var removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## Практика: Печать продуктов!

Вернёмся к описанному выше примеру - распечатываем названия продуктов и цен на счёт-фактуру, затем суммируем цены и печатаем их внизу. В приведённом ниже редактируемом примере есть комментарии, содержащие числа - каждая из этих отметок является местом, где вы должны добавить что-то в код. Они заключаются в следующем:

1. Ниже комментария `// number 1` имеется ряд строк, каждая из которых содержит название продукта и цену, разделённые двоеточием. Нужно превратить их в массив и сохранить его под названием `products`.
2. На строке с комментарием `// number 2` начинается цикл for. В строке цикла имеется `i <= 0`, что является условием , которое заставляет цикл for выполняться только один раз, так как это значение i сообщает циклу: «останавливаться, когда `i` меньше или равен 0», при этом `i` начинается с 0. Нужно заменить `i <= 0` условным тестом, который останавливает цикл, когда `i` перестаёт быть меньше длины массива `products` .
3. Под комментарием `// number 3` мы хотим, чтобы вы написали строку кода, которая разбивает текущий элемент массива (`name:price`) на два отдельных элемента: один содержит только имя, а другой - содержащее только цену. Если не знаете, как это сделать, ещё раз просмотрите статью [Полезные строковые методы](/ru/docs/Learn/JavaScript/Первые_шаги/Useful_string_methods), а лучше, посмотрите раздел [Преобразование между строками и массивами](#преобразование_между_строками_и_массивами) этой статьи.
4. В рамках приведённой выше строки нужно преобразовать цену из строки в число. Если не помните, как это сделать, ознакомьтесь со статьёй [строки в JavaScript](/ru/docs/Learn/JavaScript/Первые_шаги/Строки).
5. В верхней части кода есть переменная с именем `total` , которая содержит значение `0`. Внутри цикла (под комментарием `// number 4`) нужно добавить строку, которая добавляет текущую цену товара к этой сумме на каждой итерации цикла, так чтобы в конце кода была выведена корректная сумма в счёт-фактуре. Для этого вам может понадобится [оператор присваивания](/ru/docs/Learn/JavaScript/Первые_шаги/Math#Операторы_присваивания).
6. Под комментарием `// number 5` нужно изменить строку так, чтобы переменная `itemText` была равна "current item name — $current item price", например "Shoes — $23.99" для каждого случая, чтобы корректная информация для каждого элемента была напечатана в счёте-фактуре. Здесь обычная конкатенация строк, которая должна быть вам знакома.

```html hidden
<!-- Не выделяйте тут ничего, не копируйте, не всавляйте!
     Еле починил -->

<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
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
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n 'Socks:5.99',\n 'T-shirt:14.99',\n 'Trousers:31.99',\n 'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(':');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + ' — $' + price;\n\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";
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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
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
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Playable_code', '100%', 730, "", "", "hide-codepen-jsfiddle") }}

## Практика: Топ 5 поисковых запросов

Хорошим тоном, является использование методов массива, таких как {{jsxref ("Array.prototype.push ()", "push ()")}} и {{jsxref ("Array.prototype.pop ()", "pop ()") }} - это когда вы ведёте запись активных элементов в веб-приложении. Например, в анимированной сцене может быть массив объектов, представляющих текущую отображаемую фоновую графику и вам может потребоваться только 50 одновременных отображений по причинам производительности или беспорядка. Когда новые объекты создаются и добавляются в массив, более старые могут быть удалены из массива для поддержания нужного числа.

В этом примере мы собираемся показать гораздо более простое использование - ниже мы даём вам поддельный поисковый сайт с полем поиска. Идея заключается в том, что когда в поле поиска вводятся запросы, в списке отображаются 5 предыдущих поисковых запросов. Когда число терминов превышает 5, последний член начинает удаляться каждый раз, когда новый член добавляется в начало, поэтому всегда отображаются 5 предыдущих терминов.

> **Примечание:** В реальном приложении для поиска вы, вероятно, сможете щёлкнуть предыдущие условия поиска, чтобы вернуться к предыдущим поисковым запросам и отобразите фактические результаты поиска! На данный момент мы просто сохраняем его.

Чтобы завершить приложение, вам необходимо:

1. Добавьте строку под комментарием `// number 1`, которая добавляет текущее значение, введённое в ввод поиска, к началу массива. Его можно получить с помощью `searchInput.value`.
2. Добавьте строку под комментарием `// number 2`, которая удаляет значение, находящееся в конце массива.

```html hidden
<!-- Здесь тоже ничего не выделяйте, не копируйте, не всавляйте!
  Еле починил -->

<h2>Live output</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nvar searchInput = document.querySelector('.output input');\nvar searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== '') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = '';\n\n for(var i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = '';\n searchInput.focus();\n }\n}";
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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', '100%', 700, "", "", "hide-codepen-jsfiddle") }}

## Заключение

Прочитав эту статью, мы уверены, что вы согласитесь, что массивы кажутся довольно полезными; вы увидите, что они появляются повсюду в JavaScript, часто в сочетании с циклами, чтобы делать то же самое для каждого элемента массива. Мы научим вас всем полезным основам, которые нужно знать о циклах в следующем модуле, но пока вы должны себе похлопать и воспользоваться заслуженным перерывом; вы проработали все статьи в этом модуле!

Осталось только выполнить тестовую задачу, которая проверит ваше понимание статей, которые вы прочли до этого момента. Удачи!

## Посмотрите также

- [Indexed collections](/ru/docs/Web/JavaScript/Guide/Indexed_collections) — an advanced level guide to arrays and their cousins, typed arrays.
- {{jsxref("Array")}} — the `Array` object reference page — for a detailed reference guide to the features discussed in this page, and many more.

{{PreviousMenuNext("Learn/JavaScript/Первые_шаги/Useful_string_methods", "Learn/JavaScript/Первые_шаги/Создатель_глуых_историй", "Learn/JavaScript/Первые_шаги")}}

## В этом разделе

- [Что такое JavaScript?](/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/ru/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/ru/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/ru/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/ru/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/ru/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Массивы](/ru/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/ru/docs/Learn/JavaScript/First_steps/Silly_story_generator)
