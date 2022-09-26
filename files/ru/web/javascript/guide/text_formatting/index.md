---
title: Форматирование текста
slug: Web/JavaScript/Guide/Text_formatting
tags:
  - JavaScript
  - Руководство
translation_of: Web/JavaScript/Guide/Text_formatting
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>

<p class="summary">В этой главе приводится порядок работы со строками и текстом в JavaScript.</p>

<h2 id="Строки">Строки</h2>

<p>Строки используются для представления текстовых данных. Каждая строка - это набор "элементов", а каждый элемент - 16 битное беззнаковое целое значение. Элементы имеют определённые позиции. Так первый элемент имеет индекс 0, следующий - 1, и так далее. Длина строки - это количество элементов в ней. Вы можете создать строки, используя строковые литералы или объекты класса String.</p>

<h3 id="Строковые_литералы">Строковые литералы</h3>

<p>Вы можете создавать простые строки, используя либо одинарные, либо двойные кавычки:</p>

<pre class="brush: js">'foo'
"bar"</pre>

<p>Начиная со стандарта ES6 (ES-2015) для простых и сложных строк можно использовать обратные косые кавычки, а также, вставлять значения:</p>

<pre>const name = "Alex";
const str =
  `Привет, ${name},
   как дела?`;

console.log(str);
// Привет, Alex,
// как дела?
</pre>

<p>Подробнее про использование обратных косых кавычек (` `), <a href="/ru/docs/Web/JavaScript/Guide/Text_formatting#Многострочные_шаблонные_строки">читайте ниже</a>.</p>

<p>Строки с более богатым содержимым можно создать с помощью ESC-последовательностей(комбинация символов, обычно используемая для задания неотображаемых символов и символов, имеющих специальное значение):</p>

<h4 id="Шестнадцатеричные_экранированные_последовательности">Шестнадцатеричные экранированные последовательности</h4>

<p>Число после \x трактуется как <a href="https://en.wikipedia.org/wiki/Hexadecimal">шестнадцатеричное.</a></p>

<pre class="brush: js">'\xA9' // "©"
</pre>

<h4 id="Unicode_экранированные_последовательности">Unicode экранированные последовательности</h4>

<p>Экранированные последовательности Unicode требуют по меньшей мере 4 символа после <code>\u</code>.</p>

<pre class="brush: js">'\u00A9' // "©"</pre>

<h4 id="Экранирование_элементов_кода_Unicode">Экранирование элементов кода Unicode</h4>

<p>Нововведение ECMAScript 6, которое позволяет экранировать каждый Unicode символ, используя шестнадцатеричные значения (вплоть до <code>0x10FFFF</code>). С простым экранированием Unicode обычно требуется писать связанные друг с другом части по - отдельности для получения того же результата.</p>

<p>Смотрите также {{jsxref("String.fromCodePoint()")}} или {{jsxref("String.prototype.codePointAt()")}}.</p>

<pre class="brush: js">'\u{2F804}'

// То же самое с простым Unicode
'\uD87E\uDC04'</pre>

<h3 id="Объекты_String">Объекты String</h3>

<p>Объект <code>{{jsxref("String")}}</code> - это обёртка вокруг примитивного строкового типа данных.</p>

<pre class="brush: js">var s = new String("foo"); // Создание объекта
console.log(s); // Отобразится: { '0': 'f', '1': 'o', '2': 'o'}
typeof s; // Вернёт 'object'
</pre>

<p>Вы можете вызвать любой метод объекта класса <code>String</code> на строковом литерале - JavaScript сам преобразует строковый литерал во временный объект <code>String</code>, вызовет требуемый метод и затем уничтожит этот временный объект. Со строковыми литералами вы также можете использовать и <code>String.length</code> свойство.</p>

<p>Следует использовать строковые литералы до тех пор, пока вам действительно не обойтись без <code>String</code> объекта, потому что, порой, объект String может вести себя неожиданно (не так, как строковый литерал). Например:</p>

<pre class="brush: js">var s1 = "2 + 2"; // Создание строкового литерала
var s2 = new String("2 + 2"); // Создание String объекта
eval(s1); // Вернёт 4
eval(s2); // Вернёт строку "2 + 2"</pre>

<p>Объект <code>String</code> имеет свойство <code>length</code>, которое обозначает количество символов в строке. Например, в следующем коде x получит значение 13 потому, что "Hello, World!" содержит 13 символов, каждый из которых представлен одним кодом UTF-16. Вы можете обратиться к каждому коду с помощью квадратных скобок. Вы не можете изменять отдельные символы строки, т.к. строки это массива-подобные неизменяемые объекты:</p>

<pre class="brush: js">var mystring = "Hello, World!";
var x = mystring.length;
mystring[0] = 'L'; // Ничего не произойдёт, т.к. строки неизменяемые
mystring[0]; // Вернёт: "H"
</pre>

<p>Объект <code>String</code> имеет множество методов, в том числе и те, которые возвращают преобразованную исходную строку (методы <code>substring</code>, <code>toUpperCase</code> и другие).</p>

<p>В таблице ниже представлены методы String объекта.</p>

<table class="standard-table">
 <caption>
 <h4 id="Методы_String">Методы <code>String</code></h4>
 </caption>
 <thead>
  <tr>
   <th scope="col">Метод</th>
   <th scope="col">Описание</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}}</td>
   <td>Возвращает символ или символьный код в указанной позиции в строке.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}</td>
   <td>Возвращает первую (indexOf) или последнюю (lastIndexOf) позицию указанной подстроки в строке. Если данная подстрока не найдена, то возвращает -1.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}</td>
   <td>Проверяет, начинается/кончается/содержит ли строка указанную подстроку.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.concat", "concat")}}</td>
   <td>Объединяет две строки и возвращает результат в качестве новой строки.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}</td>
   <td>Создаёт строку из указанной последовательности Unicode значений. Это метод класса String, а не отдельного экземпляра этого класса.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.split", "split")}}</td>
   <td>Разбивает строку на подстроки, результат возвращает в виде массива строк.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.slice", "slice")}}</td>
   <td>Извлекает часть строки и возвращает её в качестве новой строки.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}</td>
   <td>
    <p>Возвращает указанную часть строки по начальному и конечному индексам, либо по начальному индексу и длине.</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.match", "match")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}}</td>
   <td>Работа с регулярными выражениями.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}</td>
   <td>
    <p>Возвращает строку полностью в нижнем (toLowerCase) или верхнем (toUpperCase) регистре.</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.normalize", "normalize")}}</td>
   <td>Возвращает нормализованную Unicode форму строки - значения объекта String, на котором вызывается.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.repeat", "repeat")}}</td>
   <td>
    <p>Возвращает строку, которая представляет собой повторение исходной строки указанное количество раз.</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.trim", "trim")}}</td>
   <td>
    <p>Убирает пробелы в начале и в конце строки, результат возвращается в качестве новой строки.</p>
   </td>
  </tr>
 </tbody>
</table>

<h3 id="Многострочные_шаблонные_строки">Многострочные шаблонные строки</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/template_strings">Шаблонные строки</a> представляют собой строковые литералы, которые могут содержать внутри себя встроенные выражения. С ними вы можете использовать многострочные строковые литералы и интерполяцию строк.</p>

<p>Такого типа строки заключаются в пару обратных штрихов (` `) (<a class="external external-icon" href="https://en.wikipedia.org/wiki/Grave_accent">grave accent</a>) вместо двойных или одинарных кавычек. Шаблонные строки могут содержать заполнители, которые выделяются знаком доллара и фигурными скобками (<code>${выражение}</code>).</p>

<h4 id="Многострочная_запись">Многострочная запись</h4>

<p>Каждая новая горизонтальная линия символов, вставленная в исходный код, является частью шаблонной строки. Используя обычные строки, вам бы потребовалось использовать следующий синтаксис для многострочной записи:</p>

<pre class="brush: js">console.log("string text line 1\n\
string text line 2");
// "string text line 1
// string text line 2"</pre>

<p>Того же результата можно добиться и другим способом (используя синтаксис шаблонных строк):</p>

<pre class="brush: js">console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"</pre>

<h4 id="Встроенные_выражения">Встроенные выражения</h4>

<p>Для того, чтобы добавить выражения внутрь обычных строк, вы бы использовали следующий синтаксис:</p>

<pre class="brush: js">var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."</pre>

<p>Теперь же, используя шаблонные строки, вы можете сделать это так:</p>

<pre class="brush: js">var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."</pre>

<p>Для более подробной информации смотри  <a href="/en-US/docs/Web/JavaScript/Reference/template_strings">Шаблонные строки</a> в <a href="/en-US/docs/Web/JavaScript/Reference">справочнике по JavaScript</a>.</p>

<h2 id="Интернационализация">Интернационализация</h2>

<p>Объект {{jsxref("Intl")}} представляет собой пространство имён для ECMAScript API по интернационализации, которое обеспечивает чувствительное к языку сравнение строк, форматирование чисел, времени и даты. Конструкторы для объектов {{jsxref("Collator")}}, {{jsxref("NumberFormat")}} и {{jsxref("DateTimeFormat")}} являются свойствами <code>объекта Intl</code>.</p>

<h3 id="Форматирование_времени_и_даты">Форматирование времени и даты</h3>

<p>Объект {{jsxref("DateTimeFormat")}} полезен для форматирования времени и даты. В примере ниже дата форматируется так, как это принято в США (результат отличен для разных временных зон).</p>

<pre class="brush: js">var msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
</pre>

<h3 id="Форматирование_чисел">Форматирование чисел</h3>

<p>Объект {{jsxref("NumberFormat")}} полезен при форматировании чисел, например, валют.</p>

<pre class="brush: js">var gasPrice = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
</pre>

<h3 id="Сравнение">Сравнение</h3>

<p>Объект {{jsxref("Collator")}} полезен для сравнения и сортировки строк.</p>

<p>Например, в Германии есть два различных порядка сортировки строк в зависимости от документа: телефонная книга или словарь.<em> </em>Сортировка по типу телефонной книги подчёркивает звуки.</p>

<pre class="brush: js">var names = ["Hochberg", "Hönigswald", "Holzman"];

var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"
</pre>

<p>Примером по сортировке для словаря слов на немецком языке служит следующий код:</p>

<pre class="brush: js">var germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// logs "Hochberg, Holzman, Hönigswald"
</pre>

<p>Для более подробной информации об {{jsxref("Intl")}} API смотри  <a href="https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/">Introducing the JavaScript Internationalization API</a>.</p>

<h2 id="Регулярные_выражения">Регулярные выражения</h2>

<p>Регулярные выражения - это шаблоны, которые используются для описания некоторого множества строк . Это очень мощный и в некоторый степени непростой механизм, и поэтому ему посвящена отдельная глава. Узнать больше о регулярных выражениях можно здесь:</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Регулярные выражения JavaScript</a> в руководстве по JavaScript.</li>
 <li>{{jsxref("RegExp")}} ссылка в документации.</li>
</ul>

<div>{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>
