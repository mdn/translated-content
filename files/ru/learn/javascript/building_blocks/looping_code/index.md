---
title: Зацикливание кода
slug: Learn/JavaScript/Building_blocks/Looping_code
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Языки программирования очень полезны для быстрой реализации повторяющихся задач. От базовых числовых операций до любой другой ситуации, когда у вас есть много похожих операций, которые нужно выполнить. В этой статье мы рассмотрим структуры циклов, доступные в JavaScript, которые можно использовать для этих целей.

| Требования: | Базовые значения компьютерной системы и базовое понимание HTML и CSS, [JavaScript первые шаги](/ru/docs/Learn/JavaScript/First_steps). |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:       | Понять как работают циклы в JavaScript.                                                                                                |

## Циклы в коде

Циклы являются важной концепцией в программировании. Их использование основано на повторении одного и того же, что в программировании называется **итерацией**.

Давайте рассмотрим работу фермера, который следит за тем, чтобы у него было достаточно еды, чтобы кормить всю свою семью в течении недели. Его работу можно представить в виде цикла:

![](loop_js-02-farm.png)

Цикл обычно составляет одну или несколько из следующих функций:

- **Счётчик**, который инициализируется с определённого значения — начальной точки цикла (На рисунке выше первый этап: "у меня нет еды (i have no food)")
- **Условие выхода** — критерий, при котором цикл останавливается, — обычно наступает, когда цикл достигает определённого значения. Это иллюстрируется выше словами "Достаточно ли у меня еды? (Do I have enough food?)". Предположим, фермеру нужно 10 порций еды, чтобы прокормить семью.
- **Итератор** постепенно увеличивает счётчик на некоторое значение на каждом шаге цикла, пока не достигнуто условия выхода. Мы явно не показали это в изображении, но если предположить что фермер собирает две порции еды в час, то после каждого часа, количество еды, которое у него имеется, увеличивается на две порции, и он проверяет достаточно ли у него еды сейчас. Если у него собралось 10 порций (условие выхода), он может остановить сбор и вернуться домой.

В [псевдокоде](/ru/docs/Glossary/Pseudocode) это будет выглядеть следующим образом:

```
loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // У нас достаточно еды, пора домой
  } else {
    food += 2; // Прошёл час, количество еды увеличилось на 2
    // переход на следующую итерацию цикла.
  }
}
```

Таким образом, необходимое количество еды устанавливается равным 10, а изначально фермер не имеет ни одной порции, т.е. начало равно 0. На каждой итерации цикла проверяем, соответствует ли собранное количество еды, с тем количеством, которое ему необходимо. Если это так, можно выйти из цикла, если нет, фермер собирает ещё 2 порции и снова переходит к проверке.

### Зачем это нужно?

Итак вы разобрались, как работают циклы. Но, вероятно, думаете: "Хорошо, но как это мне поможет писать код на JavaScript". Как мы писали ранее, **циклы постоянно повторяют одно и тоже действие**, что отлично подходит для **быстрого выполнения повторяющихся задач**.

Часто код будет немного отличаться на каждой последующей итерации цикла. Это означает, что вы можете выполнять задачи, которые похожи, но у них есть некоторые различия. Например, если вам нужно выполнить много вычислений, немного отличающихся на каждой итерации.

На следующем примере попробуем показать, почему циклы так полезны. Предположим мы хотели нарисовать 100 случайных кругов на элементе {{htmlelement("canvas")}}. Нажмите кнопку "Обновить", чтобы снова и снова запускать пример и увидеть, что круги рисуются случайным образом.

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Random canvas circles</title>
    <style>
      html {
        width: 100%;
        height: inherit;
        background: #ddd;
      }

      canvas {
        display: block;
      }

      body {
        margin: 0;
      }

      button {
        position: absolute;
        top: 5px;
        left: 5px;
      }
    </style>
  </head>
  <body>
    <button>Обновить</button>

    <canvas></canvas>

    <script>
      var btn = document.querySelector("button");
      var canvas = document.querySelector("canvas");
      var ctx = canvas.getContext("2d");

      var WIDTH = document.documentElement.clientWidth;
      var HEIGHT = document.documentElement.clientHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (var i = 0; i < 100; i++) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,0,0,0.5)";
          ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      btn.addEventListener("click", draw);
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 400) }}

Вам необязательно понимать все части кода, но давайте посмотрим на место, где рисуются 100 кругов.

```js
for (var i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- `random()`, описанная в коде, возвращает случайное число между `0` и `x-1`.
- `WIDTH` и `HEIGHT` — это высота и ширина окна браузера.

Вы должны понять основную идею: мы используем цикл для запуска 100 итераций этого кода, каждая из которых рисует круг в случайном месте в окне. Количество кода было бы одинаковым, если бы нам нужно было нарисовать 10, 100 или 1000 кругов, поменяется лишь одно число.

Если бы мы не использовали циклы, нам бы пришлось повторить следующий код, для отрисовки каждого круга:

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

Это множество лишнего кода очень усложнило бы поддержку кода в будущем, т.к. если бы вам захотелось что-то изменить, в каждой итерации цикла, пришлось бы изменять все части кода по отдельности. А ещё это усложняет поиск ошибок, т.к. если вдруг вы совершите логическую ошибку при описании одной из итераций, придётся потратить много времени на её поиски.

## Правила записи цикла

Рассмотрим некоторые конкретные конструкции циклов. Первый вариант, который вы будете использовать чаще всего, это цикл [for](/ru/docs/Web/JavaScript/Reference/Statements/for). Он имеет следующий синтаксис:

```
for (initializer; exit-condition; final-expression) {
  // код для выполнения
}
```

Тут имеем:

1. Ключевое слово [for](/ru/docs/Web/JavaScript/Reference/Statements/for), за которым следуют круглые скобки.
2. В круглых скобках у нас есть три части, разделённые точкой с запятой:

   1. **Инициализатор** — обычно это переменная численного типа, которая увеличивается каждую итерацию, чтобы посчитать количество шагов цикла. Её также называет **счётчиком**.
   2. **Условие выхода** — как упоминалось ранее, определяет, когда цикл должен остановиться. Обычно это выражение с оператором сравнения проверяющим, выполнено ли условие выхода.
   3. **Окончательное выражение** — вычисляется (или выполняется) каждый раз, когда цикл проходит полную итерацию. Обычно оно служит для увеличения (или уменьшения) переменной **счётчика**, чтобы приблизить её значение к условию выхода.

3. Фигурные скобки, содержащие блок кода. Этот код будет запускаться на каждой итерации цикла.

Посмотрим на пример, чтобы разобраться в этом более детально.

```js
var cats = ["Билл", "Макс", "Пикси", "Алиса", "Жасмин"];
var info = "Моих кошек зовут ";
var para = document.querySelector("p");

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ", ";
}

para.textContent = info;
```

Этот блок кода будет иметь следующий результат:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Пример цикла For</title>
    <style></style>
  </head>
  <body>
    <p></p>

    <script>
      var cats = ["Билл", "Макс", "Пикси", "Алиса", "Жасмин"];
      var info = "Моих кошек зовут: ";
      var para = document.querySelector("p");

      for (var i = 0; i < cats.length; i++) {
        info += cats[i] + ", ";
      }

      para.textContent = info;
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_2', '100%', 60) }}

> **Примечание:** вы можете найти этот [пример на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html) или [посмотреть онлайн](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html).

Здесь показан цикл, используемый для перебора элементов в массиве и выполнения определённых действий с каждым из них — очень распространённый шаблон в JavaScript
Подробнее:

1. Итератор, `i`, начинается с `0` (`var i = 0`).
2. Цикл запускается, пока значение итератора не будет больше длины массива кошек. Это важно - условие выхода показывает когда именно цикл должен работать, а когда нужно выйти из цикла. Поэтому в случае, пока `i < cats.lenght` по-прежнему возвращает `true`, цикл будет работать.
3. Внутри тела цикла мы соединяем текущий элемент цикла (`cats[i]` это `cats`\[независимо от того, чем `i` является в данный момент]) с запятой и пробелом. Итак:

   1. В начале, `i = 0`, поэтому `cats[0] + ', '` соединятся в ("Билл, ").
   2. На втором шаге, `i = 1`, поэтому `cats[1] + ', '` соединятся в ("Макс, ")
   3. И так далее. В конце каждого цикла `i` увеличится на 1 (`i++`) , и процесс будет начинаться заново.

4. Когда `i` достигнет величины `cats.length` цикл остановится и браузер перейдёт к следующему фрагменту кода после цикла.

> **Примечание:** Мы добавили условия выхода `i < cats.length`, а не `i <= cats.length`, потому что компьютеры считают с 0, а не с 1 — в начале `i = 0` и увеличивается до `i = 4` (индекс последнего элемента массива). `cats.length` возвращает 5, т.к. в массиве 5 элементов, но нам не нужно увеличивать до `i = 5`, т.к. `cats[5]` вернёт `undefined` (в массиве нет элемента с индексом 5). Таким образом мы хотим придти к результату на 1 меньше, поэтому `i < cats.length`, не одно и тоже что `i <= cats.length`.

> **Примечание:** Стандартной ошибкой с условием выхода является использование условия "равный" (`===`) ,а не "меньше или равно" (`<=`). Если нам нужно увеличить счётчик до `i = 5`, условие выхода должно быть `i <= cats.length`. Если мы установим `i === cats.length`, цикл не начнётся, т.к. `i` не равно `5` на самой первой итерации, поэтому цикл остановится сразу.

Остаётся одна небольшая проблема: выходная строка сформирована не совсем корректно:

> Моих кошек зовут Билл, Макс, Пикси, Алиса, Жасмин,

В идеале мы хотим изменить конкатенацию на последней итерации цикла так, чтобы у нас не было запятой в конце предложения. Для этого нужно добавить условное выражение внутрь цикла `for` для обработки этого особого случая:

```js
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += "и " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
}
```

> **Примечание:** вы можете найти этот [пример на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html) или [посмотреть онлайн](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html).

> **Предупреждение:** **Важно**: С циклом **for**, также как и с другими циклами, вы должны убедиться что инициализатор (счётчик) и окончательное выражение построены так, что они достигнут условия выхода. Если этого не произойдёт, то цикл будет продолжаться вечно. В итоге браузер или заставит его остановиться, или выдаст ошибку. Это называется **бесконечным циклом**.

## Выход из цикла с помощью break

Если вы хотите выйти из цикла до завершения всех итераций, вы можете использовать оператор [break](/ru/docs/Web/JavaScript/Reference/Statements/break) . Мы уже встречались с ним в предыдущей статье, когда рассматривали оператор [switch](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#Оператор_switch): когда происходит событие, соответствующее условию, прописанному ключевым словом `case` внутри оператора `switch`, условие break моментально выходит из конструкции `switch` и запускает следующий после неё код.

Тоже самое и с циклами — условие `break` моментально закончит цикл и заставит браузер запустить следующий после цикла код.

Предположим, в массиве данных мы хотим найти имена контактов и телефонные номера, а вернуть только номер, который мы нашли.
Начнём с разметки HTML: поле {{htmlelement("input")}} позволяет нам ввести имя для поиска, элемент (кнопка) {{htmlelement("button")}} для подтверждения поиска, и элемент {{htmlelement("p")}} для отображения результата:

```html
<label for="search">Поиск по имени: </label>
<input id="search" type="text" />
<button>Поиск</button>

<p></p>
```

Теперь в JavaScript:

```js
var contacts = [
  "Григорий:2232322",
  "Марина:3453456",
  "Василий:7654322",
  "Наталья:9998769",
  "Диана:9384975",
];
var para = document.querySelector("p");
var input = document.querySelector("input");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var searchName = input.value;
  input.value = "";
  input.focus();
  for (var i = 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(":");
    if (splitContact[0] === searchName) {
      para.textContent = splitContact[0] + ", тел.: " + splitContact[1] + ".";
      break;
    } else {
      para.textContent = "Контакт не найден.";
    }
  }
});
```

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple contact search example</title>
    <style></style>
  </head>
  <body>
    <label for="search">Найти имя контакта: </label>
    <input id="search" type="text" />
    <button>Поиск</button>

    <p></p>

    <script>
      var contacts = [
        "Григорий:2232322",
        "Марина:3453456",
        "Василий:7654322",
        "Наталья:9998769",
        "Диана:9384975",
      ];
      var para = document.querySelector("p");
      var input = document.querySelector("input");
      var btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        var searchName = input.value;
        input.value = "";
        input.focus();
        for (var i = 0; i < contacts.length; i++) {
          var splitContact = contacts[i].split(":");
          if (splitContact[0] === searchName) {
            para.textContent =
              splitContact[0] + ", тел.: " + splitContact[1] + ".";
            break;
          } else if (i === contacts.length - 1)
            para.textContent = "Контакт не найден.";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_3', '100%', 100) }}

1. Прежде всего у нас определены некоторые переменные: у нас есть массив с контактной информацией, каждый элемент которого это строка, содержащая в себе имя и номер телефона, которые разделены двоеточием.
2. Далее мы применяем обработчик события кнопки (`btn`), чтобы при её нажатии запускался код для поиска и отображения результатов.
3. Мы сохраняем значение, введённое в текстовое поле, в переменную `searchName`, затем очищаем введённый текст и снова фокусируемся на текстовом поле для нового поиска.
4. Теперь перейдём к интересующей нас части — к циклу `for`:

   1. Мы начали счётчик с `0`, запускаем цикл до тех пор, пока счётчик всё ещё меньше, чем contacts.length, а инкремент `i` увеличиваем на 1 после каждой итерации цикла.
   2. Внутри цикла мы сначала разделяем текущий контакт (`contacts[i]`) на символе двоеточия, и сохраняем полученные два значения в массиве с названием `splitContact`.
   3. Затем мы используем условный оператор, чтобы проверить, равно ли `splitContact[0]` (имя контакта) введённому `searchName`. Если это так, мы выводим строку в абзац, чтобы сообщить, каков номер контакта, и используем `break` для завершения цикла.

5. После [итерации](<https://ru.wikipedia.org/wiki/%D0%98%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)>) `(contacts.length-1)`, если имя контакта не совпадает с введённым именем в поисковом запросе, для текста абзаца устанавливается: «Контакт не найден.», и цикл продолжает повторяться.

> **Примечание:** Примечание: вы можете посмотреть исходный код на [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html) или запустить его (also [see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Пропуск итераций с продолжением

Оператор [continue](/ru/docs/Web/JavaScript/Reference/Statements/continue) работает аналогичным образом, как и `break`, но вместо полного выхода из цикла он переходит к следующей итерации цикла.

Рассмотрим другой пример, в котором в качестве вводных данных принимается число, а возвращаются только числа, которые являются квадратами целых чисел.

Код HTML в основном такой же, как и в предыдущем примере — простой ввод текста и абзац для вывода. JavaScript в основном такой же, хотя сам цикл немного другой:

```js
var num = input.value;

for (var i = 1; i <= num; i++) {
  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + " ";
}
```

Вывод:

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Генератор целочисленных квадратов</title>
    <style></style>
  </head>
  <body>
    <label for="number">Введите число: </label>
    <input id="number" type="text" />
    <button>Генерация целочисленных квадратов</button>

    <p>Результат:</p>

    <script>
      var para = document.querySelector("p");
      var input = document.querySelector("input");
      var btn = document.querySelector("button");

      btn.addEventListener("click", function () {
        var num = input.value;
        input.value = "";
        input.focus();
        para.textContent = "Вы ввели: " + num + ". Результат: ";
        for (var i = 1; i <= num; i++) {
          var sqRoot = Math.sqrt(i);
          if (Math.floor(sqRoot) !== sqRoot) {
            continue;
          }

          para.textContent += i + " ";
        }
      });
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_4', '100%', 100) }}

1. В этом случае на входе должно быть число (`num`). Циклу `for` присваивается счётчик, начинающийся с 1 (поскольку в данном случае нас не интересует 0), условие выхода, которое говорит, что цикл остановится, когда счётчик станет больше входного `num`, а итератор добавляет 1 к счётчику каждый раз.
2. Внутри цикла мы находим квадратный корень каждого числа с помощью [Math.sqrt(i)](/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), а затем проверяем, является ли квадратный корень целым числом, проверяя, совпадает ли он с самим собой, когда он был округлён до ближайшего целого числа (это то, что `Math.floor ()` делает с числом, которое передаёт).
3. Если квадратный корень и округлённый вниз квадратный корень не равны друг другу `(! ==)`, значит квадратный корень не является целым числом, поэтому нас он не интересует. В таком случае мы используем оператор `continue`, чтобы перейти к следующей итерации цикла без записи этого числа.
4. Если квадратный корень _является целым числом_, мы пропускаем блок `if` полностью, поэтому оператор `continue` не выполняется; вместо этого объединяется текущее значение `i` с пробелом в конце содержимого абзаца.

> **Примечание:** Вы также можете просмотреть полный исходный код на [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html) (так же смотри [этот код вживую](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## Циклы `while` и `do...while`

`for`— `не единственный тип цикла, доступный в JavaScript.` На самом деле существует множество других типов циклов. И хотя сейчас не обязательно знать их все, стоит взглянуть на структуру нескольких других, чтобы вы могли распознать те же функции, но в работе немного по-другому.

Рассмотрим цикл [while](/ru/docs/Web/JavaScript/Reference/Statements/while). Синтаксис этого цикла выглядит так:

```
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

Его действие очень похоже на цикл `for`, но переменная инициализатора устанавливается перед циклом, а заключительное выражение включается в цикл после запуска кода. Напомним, у цикла `for` эти два элемента заключены в круглых скобках. Здесь же после ключевого слова `while в круглых скобках заключено условие выхода из цикла.`

Здесь присутствуют те же три элемента и в том же порядке, что и в цикле `for`. Это важно, так как вам нужно определить инициализатор, прежде чем получится проверить, достиг ли цикл условия выхода.

Окончательное условие выполняется после выполнения кода внутри цикла (итерация завершена), и оно выполняется только в том случае, если условие выхода ещё не достигнуто.

Посмотрим ещё раз пример со списком кошек с кодом переписанным под использование цикла `while:`

```js
var i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
}
```

> **Примечание:**цикл все ещё работает так же, как и ожидалось - посмотрите, [как он работает на GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (также посмотрите [полный исходный код](https://github.com/ConstantineZz/javaScript/blob/master/while.html)).

Цикл** [do...while](/ru/docs/Web/JavaScript/Reference/Statements/do...while)** представляет собой вариацию структуры цикла `while`:

```
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

В этом случае инициализатор снова указывается прежде, чем цикл запускается. Ключевое слово `do` непосредственно предшествует фигурным скобкам, содержащим код для запуска и конечное выражение.

Различие состоит в том, что условие выхода идёт после всего остального, заключённое в скобки после ключевого слова `while`. В цикле `do...while` код внутри фигурных скобок всегда запускается один раз, прежде чем выполняется проверка, чтобы увидеть, должна ли она быть выполнена снова (в `while` и `for` проверка идёт первой, поэтому код может быть не выполнен).

Перепишем наш пример с кошками, чтобы использовать цикл `do...while`:

```js
var i = 0;

do {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
} while (i < cats.length);
```

> **Примечание:**И снова это работает так же, как и ожидалось - посмотрите, как он работает [на GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (также посмотрите полный [исходный код](https://github.com/ConstantineZz/javaScript/blob/master/do-while.html)).

> **Предупреждение:** **Замечание**: Применяя циклы `while` and `do...while` , как и все циклы, убедитесь, что инициализатор повторяется так, чтобы он в конце концов достиг условия выхода. Если это не так, цикл будет продолжаться вечно, и либо браузер заставит его остановиться, либо произойдёт сбой. Это называется _~~доктор Стрэндж и Дормамму~~_ **бесконечным циклом**.

## Практическое упражнение: запускаем обратный отсчёт!

В этом упражнении мы хотим, чтобы вы написали простой отсчёт времени запуска до поля вывода, от 10 до "Пуск!" В частности, мы хотим, чтобы вы:

- Цикл от 10 до 0. Мы предоставляем вам инициализатор: `var i = 10;`.
- Для каждой итерации создайте новый абзац и добавьте его к выходному элементу `<div>`, который мы выбрали, используя `var output = document.querySelector ('.output');`. В комментариях мы предоставили вам три строки кода, которые необходимо использовать где-то внутри цикла:

  - `var para = document.createElement('p');` — создать новый абзац.
  - `output.appendChild(para);` — добавляет абзац к выводу `<div>`.
  - `para.textContent =` — делает текст внутри абзаца равным значению, которое вы расположили справа, после знака равенства.

- Разные номера итераций требуют, чтобы в абзаце для каждой итерации помещался свой текст (вам понадобится условный оператор и несколько `para.textContent = lines`
  ):

  - Если число равно 10, выведите в абзаце «Обратный отсчёт 10».
  - Если число равно 0, выведите в абзаце «Пуск!»
  - Для любого другого числа выведите в абзаце только число.

- Не забудьте включить итератор! Однако в этом примере мы ведём обратный отсчёт после каждой итерации, а не вверх, поэтому вам **не** нужен `i ++`. Как выполнить итерацию вниз?

Если вы допустили ошибку, вы всегда можете сбросить пример с помощью кнопки «Сброс» (Reset). Если у вас совсем ничего не получается, нажмите «Show solution», чтобы увидеть решение.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
var output = document.querySelector('.output');
output.innerHTML = '';

// var i = 10;

// var para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
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
  "var output = document.querySelector('.output');\noutput.innerHTML = '';\n\nvar i = 10;\n\nwhile(i >= 0) {\n var para = document.createElement('p');\n if(i === 10) {\n para.textContent = 'Countdown ' + i;\n } else if(i === 0) {\n  para.textContent = 'Blast off!';\n } else {\n para.textContent = i;\n }\n\n output.appendChild(para);\n\n i--;\n}";
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

{{ EmbedLiveSample('Active_learning', '100%', 880, "", "", "hide-codepen-jsfiddle") }}

## Практическое упражнение: Заполнение списка гостей

Возьмите список имён, хранящихся в массиве, и поместите их в список гостей. Тут не всё так просто: мы не хотим приглашать Фила и Лолу, потому что они наглые и всё сожрут! У нас есть два списка. Один для тех, кого мы хотим пригласить, второй для тех, кого приглашать не нужно.

Для этого нужно сделать следующее:

- Напишите цикл, который будет повторяться от 0 до длины массива `people`.
  Вам нужно начать с инициализатора `var i = 0;` , но какое нужно использовать условие выхода?
- Во время каждой итерации цикла нужно проверять, соответствует ли текущий элемент массива именам "Фил" или "Лола", используя условный оператор:

  - Если это так, привяжите этот элемент массива в конец `textContent` абзаца `refused`, за которым следуют запятая и пробел.
  - Если это не так, привяжите этот элемент массива в конец `textContent` абзаца `admitted`, за которым следуют запятая и пробел.

Мы уже предоставили вам:

- `var i = 0;` — ваш инициализатор.
- `refused.textContent +=` — начало строки, которая объединит что-то до конца `refused.textContent`.
- `admitted.textContent +=` — начало строки, которая объединит что-то до конца `admitted.textContent`.

Дополнительный бонусный вопрос - после успешного выполнения вышеупомянутых задач у вас останется два списка имён, разделённых запятыми, но они будут составлены некорректно: в конце каждого списка будет запятая. Сможете ли вы составить эти списки так, чтобы в конце каждой строки вместо запятой была точка. За помощью можно обратиться к статье «[Полезные строковые методы](/ru/docs/Learn/JavaScript/Первые_шаги/Useful_string_methods)».

Если вы допустили ошибку, вы всегда можете сбросить пример с помощью кнопки «Сброс» (Reset). Если у вас совсем ничего не получается, нажмите «Показать решение», чтобы увидеть решение.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Пригласить:</p>
  <p class="refused">Не приглашать(!):</p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
var people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Пригласить: ';
refused.textContent = 'Не приглашать(!): '

// var i = 0;

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сброс" />
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
    solution.value = "Скрыть решение";
  } else {
    textarea.value = userEntry;
    solution.value = "Показать решение";
  }
  updateCode();
});

var jsSolution =
  "var people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];\n\nvar admitted = document.querySelector('.admitted');\nvar refused = document.querySelector('.refused');\n\nadmitted.textContent = 'Пригласить: ';\nrefused.textContent = 'Не приглашать(!): '\nvar i = 0;\n\ndo {\n if(people[i] === 'Фил' || people[i] === 'Лола') {\n refused.textContent += people[i] + ', ';\n } else {\n admitted.textContent += people[i] + ', ';\n }\n i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';";
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

{{ EmbedLiveSample('Active_learning_2', '100%', 680) }}

## Так какой тип цикла использовать?

В основном, используют `for`, `while` и `do...while` циклы, и они во многом взаимозаменяемы. Все они могут быть использованы для выполнения одних и тех же задач и какой из них вы будете использовать, во многом зависит от ваших личных предпочтений. Используйте тот, который вам проще всего запомнить или наиболее интуитивно понятен. Давайте вспомним каждый из них.

**`For`**:

```
for (initializer; exit-condition; final-expression) {
  // code to run
}
```

**`while`**:

```
initializer
while (exit-condition) {
  // code to run

  final-expression
}
```

**`do...while`**:

```
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
```

Для начала мы бы порекомендовали `for`, так как его проще запомнить: инициализатор, условие выхода и конечное выражение аккуратно заключено в скобки, поэтому их легко отследить, чтобы их не пропускать.

> **Примечание:** Существуют и другие типы и функции цикла, которые полезны в сложных или специализированных ситуациях и выходят за рамки данной статьи. Если вы хотите подробнее изучить тему циклов, прочитайте наше расширенное [руководство по циклам и итерациям](/ru/docs/Web/JavaScript/Guide/Циклы_и_итерации).

## Заключение

Эта статья раскрывает основные концепции и различные опции, доступные при циклическом кодировании в JavaScript. Теперь вам должно быть понятно, почему циклы являются хорошим механизмом для работы с повторяющимся кодом. Старайтесь использовать их в своих собственных примерах!

Если вы чего-то не поняли, пробуйте читать статью снова или [свяжитесь с нами](/ru/docs/Learn#Связаться_с_нами), мы поможем разобраться.

## Дополнительная информация

- [Циклы и итерации](/ru/docs/Web/JavaScript/Guide/Циклы_и_итерации)
- [for свойства и характеристики](/ru/docs/Web/JavaScript/Reference/Statements/for)
- [while](/ru/docs/Web/JavaScript/Reference/Statements/while) и [do...while](/ru/docs/Web/JavaScript/Reference/Statements/do...while) описание
- [break](/ru/docs/Web/JavaScript/Reference/Statements/break) и [continue](/ru/docs/Web/JavaScript/Reference/Statements/continue) описание
- [What's the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — статья о практическом применении циклов

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

## В этом модуле

- [Принятие решений в вашем коде — условные конструкции](/ru/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Зацикливание кода](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [Функции — Переиспользуемые блоки кода](/ru/docs/Learn/JavaScript/Building_blocks/Functions)
- [Создайте свою собственную функцию](/ru/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [Возвращаемое значение функции](/ru/docs/Learn/JavaScript/Building_blocks/Return_values)
- [Введение в события](/ru/docs/Learn/JavaScript/Building_blocks/События)
- [Создание галереи](/ru/docs/Learn/JavaScript/Building_blocks/Image_gallery)
