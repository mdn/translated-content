---
title: Принятие решений в вашем коде — условные конструкции
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

Во многих языках программирования код должен иметь возможность принимать решения на основе введённых пользователем данных. Например, в игре, если у пользователя осталось 0 жизней, то игра завершается. В приложении о погоде утром отображается восход солнца, а вечером звезды и луна. В этой статье мы рассмотрим как в JavaScript работают так называемые "условия".

| Необходимое условие: | Базовая компьютерная грамотность, базовое понимание HTML и CSS, [JavaScript first steps](/ru/docs/Learn/JavaScript/First_steps). |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Цель:                | Понять принципы использования операторов условий в JavaScript.                                                                   |

## Выбор одного условия!

Люди (и животные) принимают какие-либо решения всю жизнь, от малозначимых ("стоит ли мне съесть одну печеньку или две?") до жизнеопределяющих ("стоит ли мне остаться дома и работать на ферме отца или переехать в другую страну и изучать астрофизику?")

Операторы условия в JavaScript позволяют нам указать разного рода действия в зависимости от выбранного пользователем или системой ответа (например одна печенька или две) и связать его с действием (результатом), например, результатом "съесть одну печеньку" будет "все ещё буду чувствовать себя голодным", а результатом "съесть две печеньки" будет "буду чувствовать себя сытым, но мама меня поругает за то, что я съел все сладости".

![](cookie-choice-small.png)

## Оператор if ... else

Давайте глянем на наиболее распространённый тип условного оператора, который вы будете использовать в JavaScript — [`if ... else`](/ru/docs/Web/JavaScript/Reference/Statements/if...else) [оператор](/ru/docs/Web/JavaScript/Reference/Statements/if...else).

### Базовый if ... else синтаксис

Базовый `if...else` синтаксис выглядит как {{glossary("pseudocode")}}:

```
if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}
```

Что мы имеем:

1. Ключевое слово `if` расположено перед круглыми скобками.
2. Условие для проверки (condition), расположено внутри круглых скобок (например "это значение больше другого значения?", или "это значение существует?"). Это условие использует операторы сравнения ([comparison operators](/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators)), которые мы изучим позже, и возвратит нам `true` или `false`.
3. Внутри скобок { } расположен код, который будет выполняться только в том случае, если условие (condition) верно (`true)`.
4. Ключевое слово `else (иначе)`.
5. Ещё скобки { }, код внутри которых выполнится, только если условие не верно (не `true)`.

Этот код довольно читабелен — он говорит "**if (если)** **condition (условие)** возвращает `true (истина)`, запусти код A, **else (иначе)** запусти B"

Стоит заметить, что `else` и второй блок скобок { } не обязателен — следующий код так же будет работать:

```
if (condition) {
  код, который должен выполнить, если условие истина
}

какой-то другой код
```

Тем не менее, следует быть осторожным — в случае, если код внутри вторых скобок { } не контролируется условием, то этот код будет выполняться **всегда**. Это не плохо, просто вы должны помнить об этом, чаще вы хотите запустить один кусок кода _или_ другой, но не оба.

И, наконец, иногда вы можете встретить код `if...else` без фигурных скобок в сокращённой форме:

```
if (condition) code to run if condition is true
else run some other code instead
```

Это абсолютно рабочий код, но он менее читаем, лучше использовать фигурные скобки, новые строки и отступы.

### Реальный пример

Чтобы лучше понять синтаксис, давайте рассмотрим реальный пример. Представьте, что мать или отец попросили помочь с работой по дому своего ребёнка. Родитель может сказать: "Если ты поможешь мне с покупками, то я дам тебе дополнительные деньги на карманные расходы, которые ты сможешь потратить на игрушку, какую захочешь". В JavaScript, мы можем представить это так:

```js
var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

В этом коде, как показано, всегда будет `shoppingDone` равный `false`, что означает разочарование для нашего бедного ребёнка. Мы должны предоставить механизм для родителя, чтобы установить для переменной `shoppingDone` значение `true` , если ребёнок помог с покупками.

> **Примечание:** вы можете увидеть больше в [полной версии этого примера на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html) (также посмотреть как он [работает вживую](http://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

В предыдущем примере предоставлено два выбора, или результата — но что, если мы хотим больше, чем два?

Существует способ привязать дополнительные варианты/результаты к вашему `if...else` — использовать `else if`. Для каждого дополнительного выбора требуется дополнительный блок, который нужно расположить между `if() { ... }` и `else { ... }` — проверьте следующий более сложный пример, который может быть частью простого приложения прогноза погоды:

```html
<label for="weather">Выберите тип погоды сегодня: </label>
<select id="weather">
  <option value="">--Сделайте выбор--</option>
  <option value="sunny">Солнечно</option>
  <option value="rainy">Дождливо</option>
  <option value="snowing">Снежно</option>
  <option value="overcast">Облачно</option>
</select>

<p></p>
```

```js
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.";
  } else if (choice === "rainy") {
    para.textContent =
      "Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.";
  } else if (choice === "snowing") {
    para.textContent =
      "Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
  } else if (choice === "overcast") {
    para.textContent =
      "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100) }}

1. Здесь у нас есть элемент HTML {{htmlelement("select")}} который позволяет нам выбирать разные варианты погоды и простой абзац.
2. В JavaScript мы создаём ссылки на элементы {{htmlelement("select")}} и {{htmlelement("p")}} и добавляем обработчик события элемента `<select>`, чтобы при его изменении значения запускалась функция `setWeather()`.
3. Когда функция будет запущена, первоначально мы определим значение переменной `choice`, которая равна выбранному значению в элементе `<select>`. Затем мы используем условный оператор для отображения текста внутри абзаца в зависимости от того, какое значение у переменной `choice`. Обратите внимание, как все условия проверяются в `else if() {...}` блоках, за исключением первого, который использует `if() {...}` блок.
4. Последний выбор, внутри `else {...}` блока, в основном является «последним средством» — код внутри него будет запущен, если ни одно из условий не будет `true`. В этом случае он служит для удаления текста из абзаца, если ничего не выбрано, например, если пользователь решает повторно выбрать опцию "--Сделайте выбор--" которая указана в начале.

> **Примечание:** вы можете [найти этот пример на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html) (также [увидеть как он работает](http://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html))

### Примечание об операторах сравнения

Операторы сравнения используют для проверки условий внутри наших условных операторов. Сначала мы посмотрели на операторы сравнения в нашей статье [Базовая математика в JavaScript — цифры и операторы](/ru/docs/Learn/JavaScript/Первые_шаги/Math#Comparison_operators) . Наш выбор это:

- `===` и `!==` — проверяет одно значение идентично или не идентично другому.
- `<` и `>` — проверяет одно значение меньше или больше, чем другое.
- `<=` и `>=` — проверяет одно значение меньше или равно, либо больше или равно другому.

> **Примечание:** Просмотрите материал по предыдущей ссылке, если вы хотите освежить свою память.

Мы хотели бы особо обратить внимание на проверку булевых значений (`true`/`false`), и общий шаблон, который вы будете встречать снова и снова. Любое значение, которое не есть `false`, `undefined`, `null`, `0`, `NaN`, или пустая строка (`''`) фактически возвращает `true` при тестировании как условного оператора. Поэтому вы можете просто использовать имя собственной переменной, чтобы проверить, равна ли она `true`, или существует (т. е. переменная не равна undefined). Например:

```js
var cheese = "Cheddar";

if (cheese) {
  console.log("Ура! Есть сыр для приготовления бутерброда.");
} else {
  console.log("Сегодня нет сыра для бутерброда.");
}
```

И, возвращаясь к нашему предыдущему примеру о ребёнке, выполняющем поручение своего родителя, вы можете это записать так:

```js
var shoppingDone = false;

if (shoppingDone) {
  // не нужно явно указывать '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

### Вложенность if ... else

Вполне нормально использовать один условный оператор `if...else` внутри другого — вложить их. Например, мы могли бы обновить наше приложение прогноза погоды, чтобы показать ещё один набор вариантов в зависимости от температуры:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent =
      "Сейчас " +
      temperature +
      " градусов по фаренгейту — хорошо и солнечно. Идите на пляж, или в парк, и купите мороженое.";
  } else if (temperature >= 86) {
    para.textContent =
      "Сейчас " +
      temperature +
      " градусов по фаренгейту — Жара! Если вы хотите выйти на улицу, обязательно используйте солнцезащитный крем.";
  }
}
```

Несмотря на то, что весь код работает вместе, каждый условный оператор `if...else` работает полностью отдельно от другого.

### Логические операторы: И, ИЛИ и НЕ

Если вы хотите проверить несколько условий без записи вложенных `if...else` условий, [логические операторы](/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators) помогут вам. При использовании в условиях, первые два оператора делают следующее:

- `&&` — И; позволяет объединить два или более выражения так, что каждое из них отдельно должно иметь значение `true` , чтобы в итоге общее выражение имело значение `true`.
- `||` — ИЛИ; позволяет объединить два или более выражения так, что одно или несколько из них должно иметь значение `true` , чтобы в итоге общее выражение имело значение `true`.

Чтобы дать вам пример оператора И, предыдущий фрагмент кода можно переписать так:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent =
    "Сейчас " +
    temperature +
    " градусов по фаренгейту — хорошо и солнечно. Идите на пляж, или в парк, и купите мороженое.";
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent =
    "Сейчас " +
    temperature +
    " градусов по фаренгейту — Жара! Если вы хотите выйти на улицу, обязательно используйте солнцезащитный крем.";
}
```

Так, для примера, первый блок кода выполнится только в том случае, если `choice === 'sunny'` _и_`temperature < 86` вернут значение `true`.

Давайте посмотрим на быстрый пример оператора ИЛИ:

```js
if (iceCreamVanOutside || houseStatus === "в огне") {
  //если подъехал фургон с мороженым или дом горит
  console.log("Вы должны быстро покинуть дом.");
} else {
  console.log("Вероятно, можно в нем оставаться.");
}
```

Последний тип логического оператора НЕ, выраженный `!` оператором, можно использовать для отрицания выражения. Давайте объединим его с ИЛИ в приведённом выше примере:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Вероятно, можно в нем оставаться.");
} else {
  console.log("Вы должны быстро покинуть дом.");
}
```

В этом фрагменте, если условие ИЛИ возвращает `true`, оператор НЕ будет отрицать это и выражение вернёт `false`.

Можно сочетать любое количество логических операторов, в любой последовательности и в любой комбинации. В следующем примере код в блоке будет выполняться только в том случае, если оба условия с ИЛИ возвращают true, а следовательно, и оператор И возвращает true:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // код выполняется
}
```

Распространённой ошибкой при использовании логического оператора ИЛИ в условном выражении является указание переменной, значение которой нужно проверить со списком возможных значений этой переменной, разделённых операторами `||` (ИЛИ). Например.

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // выполнить код
}
```

В данном примере условие в `if(...)` всегда будет оцениваться как true, поскольку 7 (или любое другое ненулевое значение) всегда будет оцениваться как true. Фактически, это условие гласит «если х равен 5, или 7 является true». Но нам требуется совсем не это. Чтобы достичь нужной цели, придётся выполнять полноценную проверку после каждого оператора ИЛИ:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // выполнить код
}
```

## Оператор switch

Выражения `if...else` отлично справляются с добавлением условного кода, однако они не лишены недостатков. Они хорошо подходят для ситуации, когда имеется всего пара вариантов развития событий, каждый из которых имеет блок с приемлемым количеством кода, а также в случаях, когда условие является довольно сложным и включает несколько логических операторов. Если же нам требуется всего лишь задать переменную для определённого выбранного значения или напечатать конкретную фразу при определённом условии, изученный нами синтаксис может оказаться довольно громоздким, особенно если имеется большое количество вариантов выбора.

В этом случае нам поможет [оператор `switch`](/ru/docs/Web/JavaScript/Reference/Statements/switch) – он принимает одно единственное выражение или значение, а затем просматривает ряд вариантов, пока не найдут вариант, соответствующий этому значению, после чего выполняет код, назначенный этому варианту. Вот пример использования этого оператора:

```
switch (выражение) {
  case choice1:
    выполнить этот код
    break;

  case choice2:
    выполнить этот код, а не предыдущий
    break;

  // вариантов может быть любое количество

  default:
    а вообще-то, выполнить только этот код
}
```

Что мы имеем:

1. Ключевое слово `switch`, за которым следует пара круглых скобок.
2. В скобках приводится выражение или значение.
3. Ключевое слово `case`, за которым следует вариант выбора (именно он проверяется на соответствие выражению или значению) и двоеточие.
4. Код, который будет выполняться, если вариант совпадает с выражением.
5. Оператор `break`, за которым следует точка с запятой. Если вариант совпал с выражением или значением, браузер закончит выполнять блок кода, дойдя до оператора `break`, и перейдёт к выполнению кода, расположенного после оператора switch.
6. Вариантов выбора (пункты 3–5) может быть любое количество.
7. Ключевое слово `default` используется точно также, как любой другой вариант выбора (пункты 3–5) за тем исключением, что после `default` нет других вариантов выбора, поэтому инструкция `break` не требуется, никакого кода дальше нет. Это вариант выбора по умолчанию, выбираемый, если ни один из других вариантов не совпал с выражением.

> **Примечание:** Вариант выбора `default` может быть пропущен, если выражение гарантированно совпадёт с одним из вариантов выбора. В противном случае вариант `default` необходим.

### Пример оператора switch

Давайте рассмотрим реальный пример — перепишем наше приложение прогноза погоды с использованием оператора switch:

```html
<label for="weather">Выберите тип погоды сегодня: </label>
<select id="weather">
  <option value="">--Сделайте выбор--</option>
  <option value="sunny">Солнечно</option>
  <option value="rainy">Дождливо</option>
  <option value="snowing">Снежно</option>
  <option value="overcast">Облачно</option>
</select>

<p></p>
```

```js
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.";
      break;
    case "rainy":
      para.textContent =
        "На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго";
      break;
    case "snowing":
      para.textContent =
        "Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.";
      break;
    case "overcast":
      para.textContent =
        "Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('Пример_оператора_switch', '100%', 100) }}

> **Примечание:** вы можете [найти этот пример на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html) (также увидеть [как он работает](http://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html).)

## Тернарный оператор

Это последний теоретический раздел данной статьи и мы перейдём к практическим упражнениям. [Тернарный или условный оператор](/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) имеет простой синтаксис: он проверяет условие и возвращает одно значение или выражение, если условие является `true`, и другое значение/выражение, если условие является `false`. Часто это очень удобная альтернатива блоку `if...else`, позволяющая затрачивать меньшие усилия на написание кода, когда имеется всего лишь два варианта, выбираемых на основе условия `true`/`false`. Общая схема оператора:

```
( условие) ? выполнить этот код : выполнить этот код вместо первого
```

Приведём простой пример:

```js
var greeting = isBirthday
  ? "С днём рождения, г-н Кузнецов! Хорошо вам повеселиться!"
  : "Доброе утро, г-н Кузнецов.";
```

У нас есть переменная `isBirthday` , если она `true`, мы отправляем посетителю поздравление с днём рождения; если нет – выдаём стандартное приветствие.

### Пример тернарного оператора

При использовании тернарного оператора не обязательно ограничиваться лишь значениями переменной, можно выполнять функции или строки кода; все, что угодно. В следующем примере показано простое средство выбора темы, задающее внешний вид веб-сайта с помощью тернарного оператора.

```html
<label for="theme">Выберите тему: </label>
<select id="theme">
  <option value="white">Белая</option>
  <option value="black">Чёрная</option>
</select>

<h1>Это мой веб-сайт</h1>
```

```js
var select = document.querySelector("select");
var html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === "black"
    ? update("black", "white")
    : update("white", "black");
};
```

{{ EmbedLiveSample('Пример_тернарного_оператора', '100%', 300) }}

Мы используем элемент {{htmlelement('select')}} для выбора темы (чёрная или белая), а также простой {{htmlelement('h1')}} для отображения заголовка веб-сайта. Кроме того, у нас есть функция `update()`, принимающая в качестве параметров (входных данных) два цвета. В качестве фона используется первый переданный цвет, а в качестве цвета текста – второй переданный цвет.

Наконец, у нас есть обработчик событий [onchange](/ru/docs/Web/API/GlobalEventHandlers/onchange) , использующийся для запуска функции, содержащей тернарный оператор. Сначала она проверяет условие — `select.value === 'black'`. Если возвращается `true`, мы запускаем функцию `update()` с параметрами чёрного и белого, в результате чего получаем чёрный цвет фона и белый цвет текста. Если возвращается `false`, мы запускаем функцию `update()` с параметрами белого и чёрного, в результате чего цвета веб-сайта меняются на противоположные.

> **Примечание:** вы можете [найти этот пример на GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html) (также увидеть [как он работает](http://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html).)

## Практическое упражнение: простой календарь

В данном примере вы поможете нам закончить простое приложение календаря. Код включает:

- Элемент {{htmlelement("select")}}, позволяющий пользователю выбирать разные месяцы.
- Обработчик событий `onchange` для обнаружения изменения значения, выбранного в меню `<select>`.
- Функция `createCalendar()` , рисующая календарь и отображающая правильный месяц в элементе {{htmlelement("h1")}}.

Вы должны написать условную конструкцию в функции обработчика `onchange` , сразу после комментария `// ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ`. Конструкция должна:

1. Проверить выбранный месяц (хранящийся в переменной `choice`. Это будет значение элемента `<select>` после изменения значения, например, "Январь".)
2. Задать переменную, скажем, `days`, равную количеству дней в выбранном месяце. Для этого нужно будет проверить количество дней в каждом месяце. Високосный год можно не учитывать.

Советы:

- Советуем использовать логический оператор OR для группировки нескольких месяцев в рамках одного условия; многие месяцы имеют одинаковое количество дней.
- Подумайте, какое количество дней в месяце встречается чаще всего и используйте его в качестве варианта по умолчанию.

Если допустили ошибку, используйте кнопку «Сброс», чтобы вернуться к исходному виду примера. Если у вас совсем ничего не получается, нажмите «Показать решение».

> **Примечание:** В HTML коде внутри `<select>` названия месяцев `value=""` введены на русском языке. Соответственно ссылки на них из вашего скрипта так же на русском. Не забываем про синтаксис. (прим. - [ConstantineZz](/ru/profiles/ConstantineZz))

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Выберите месяц: </label>
  <select id="month">
    <option value="Январь">Январь</option>
    <option value="Февраль">Февраль</option>
    <option value="Март">Март</option>
    <option value="Апрель">Апрель</option>
    <option value="Май">Май</option>
    <option value="Июнь">Июнь</option>
    <option value="Июль">Июль</option>
    <option value="Август">Август</option>
    <option value="Сентябрь">Сентябрь</option>
    <option value="Октябрь">Октябрь</option>
    <option value="Ноябрь">Ноябрь</option>
    <option value="Декабрь">Декабрь</option>
  </select>
  <h1></h1>
  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
   }
}

createCalendar(31,'Январь');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сброс" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```css hidden
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}

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
  "var select = document.querySelector('select');\nvar list = document.querySelector('ul');\nvar h1 = document.querySelector('h1');\n\nselect.onchange = function() {\n var choice = select.value;\n var days = 31;\n if(choice === 'Февраль') {\n days = 28;\n } else if(choice === 'Апрель' || choice === 'Июнь' || choice === 'Сентябрь'|| choice === 'Ноябрь') {\n days = 30;\n }\n\n createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n list.innerHTML = '';\n h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n var listItem = document.createElement('li');\n listItem.textContent = i;\n list.appendChild(listItem);\n }\n }\n\ncreateCalendar(31,'Январь');";
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

{{ EmbedLiveSample('Playable_code', '100%', 1110) }}

## Практическое упражнение: расширяем выбор цветов

В данном примере вы будете использовать пример тернарного оператора, который мы рассматривали ранее, и превратите тернарный оператор в инструкцию switch, что позволит увеличить количество вариантов выбора для простого веб-сайта. Посмотрите на {{htmlelement("select")}} — на этот раз он включает не два, а целых пять вариантов тем. Нужно добавить инструкцию switch сразу под комментарием `// ДОБАВЬТЕ ИНСТРУКЦИЮ SWITCH`:

- Она должна принимать переменную `choice` в качестве входного выражения.
- Каждый элемент case должен содержать вариант выбора, соответствующий одному из доступных для выбора значений: белая, чёрная, лиловая, жёлтая или психоделическая тема.
- В блоке каждого элемента case необходимо вызывать функцию `update()`, которой передаётся два цвета: первый – это цвет фона, а второй – цвет текста. Помните, что значения цветов – это строковые значения, поэтому их нужно заключать в кавычки.

Если допустили ошибку, используйте кнопку «Сброс», чтобы вернуться к исходному виду примера. Если у вас совсем ничего не получается, нажмите «Показать решение».

```html hidden
<div class="output" style="height: 300px;">
  <label for="theme">Выберите тему: </label>
  <select id="theme">
    <option value="white">Белая</option>
    <option value="black">Чёрная</option>
    <option value="purple">Лиловая</option>
    <option value="yellow">Жёлтая</option>
    <option value="psychedelic">Психоделическая</option>
  </select>

  <h1>Это мой веб-сайт</h1>
</div>

<hr />

<textarea id="code" class="playable-code" style="height: 450px;">
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ДОБАВЬТЕ ИНСТРУКЦИЮ SWITCH
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Сброс" />
  <input id="solution" type="button" value="Показать решение" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

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
  "var select = document.querySelector('select');\nvar html = document.querySelector('.output');\n\nselect.onchange = function() {\n  var choice = select.value;\n\n  switch(choice) {\n    case 'black':\n      update('black','white');\n      break;\n    case 'white':\n      update('white','black');\n      break;\n    case 'purple':\n      update('purple','white');\n      break;\n    case 'yellow':\n      update('yellow','darkgray');\n      break;\n    case 'psychedelic':\n      update('lime','purple');\n      break;\n  }\n}\n\nfunction update(bgColor, textColor) {\n  html.style.backgroundColor = bgColor;\n  html.style.color = textColor;\n}";
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

{{ EmbedLiveSample('Playable_code_2', '100%', 650) }}

## Заключение

Это все, что вам нужно знать на данный момент об условных логических структурах! Уверены, вы хорошо разобрались в теоретическом материале и с лёгкостью справились с предложенными упражнениями. Если же что-то осталось для вас непонятным, перечитайте статью ещё раз или [свяжитесь с нами](/en-US/Learn#Contact_us).

## Смотрите также

- [Comparison operators](/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators)
- [Conditional statements in detail](/ru/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
- [if...else reference](/ru/docs/Web/JavaScript/Reference/Statements/if...else)
- [Conditional (ternary) operator reference](/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
