---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
tags:
  - Date
  - Internationalization
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---
<div>{{JSRef("Global_Objects", "Date")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <strong><code>toLocaleDateString()</code></strong> возвращает строку с языкозависимым представлением части с датой в этой дате. Новые аргументы <code>locales</code> и <code>options</code> позволяют приложениям определять язык, чьи соглашения по форматированию должны использоваться, а также менять поведение этого метода. В старых реализациях, игнорирующих аргументы <code>locales</code> и <code>options</code>, используемая локаль и форма возвращённой строки целиком зависит от реализации.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>dateObj</var>.toLocaleDateString([<var>locales</var> [, <var>options</var>]])</code></pre>

<h3 id="Parameters">Параметры</h3>

<p>Проверьте раздел <a href="#Browser_compatibility">Совместимость с браузерами</a>, чтобы увидеть, какие браузеры поддерживают аргументы <code>locales</code> и <code>options</code>, и <a href="#Example:_Checking_for_support_for_locales_and_options_arguments">Пример: проверка поддержки аргументов <code>locales</code> и <code>options</code></a> для определения этой возможности.</p>

<div>{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}</div>

<p>Значением по умолчанию для каждой компоненты даты-времени является {{jsxref("Global_Objects/undefined", "undefined")}}, однако, если все свойства <code>weekday</code>, <code>year</code>, <code>month</code> и <code>day</code> равны {{jsxref("Global_Objects/undefined", "undefined")}}, то их значения предполагаются равными <code>"numeric"</code>.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_toLocaleDateString">Пример: использование метода <code>toLocaleDateString()</code></h3>

<p>При базовом использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleDateString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleDateString());
// → "12/11/2012", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
</pre>

<h3 id="Example:_Checking_for_support_for_locales_and_options_arguments">Пример: проверка поддержки аргументов <code>locales</code> и <code>options</code></h3>

<p>Аргументы <code>locales</code> и <code>options</code> поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}:</p>

<pre class="brush: js">function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
</pre>

<h3 id="Example:_Using_locales">Пример: использование аргумента <code>locales</code></h3>

<p>Этот пример показывает некоторые локализованные форматы даты. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент <code>locales</code>:</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
console.log(date.toLocaleDateString('en-US'));
// → "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(date.toLocaleDateString('en-GB'));
// → "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(date.toLocaleDateString('ko-KR'));
// → "2012. 12. 20."

// В большинстве арабоговорящих стран используют настоящие арабские цифры
console.log(date.toLocaleDateString('ar-EG'));
// → "<span dir="rtl">٢٠‏/١٢‏/٢٠١٢</span>"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
// → "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleDateString(['ban', 'id']));
// → "20/12/2012"
</pre>

<h3 id="Example:_Using_options">Пример: использование аргумента <code>options</code></h3>

<p>Результат, предоставляемый методом <code>toLocaleDateString()</code>, может быть настроен с помощью аргумента <code>options</code>:</p>

<pre class="brush: js">var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleDateString('en-US', options));
// → "Thursday, December 20, 2012, GMT"
</pre>

<h2 id="Performance">Производительность</h2>

<p>При форматировании большого количества дат лучшим вариантом будет создание объекта {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} и использование функции, предоставляемой его свойством {{jsxref("DateTimeFormat.prototype.format", "format")}}.</p>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li>{{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleTimeString()")}}</li>
 <li>{{jsxref("Date.prototype.toString()")}}</li>
</ul>
