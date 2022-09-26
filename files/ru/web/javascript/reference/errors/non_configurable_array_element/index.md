---
title: >-
  TypeError: can't delete non-configurable array element(Тип ошибки:не удаётся
  удалить настраиваемый элемент массива)
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
translation_of: Web/JavaScript/Reference/Errors/Non_configurable_array_element
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">TypeError: не удаётся удалить не настраиваемый элемент массива (Firefox)
TypeError: не удаётся удалить свойство '2' из [массива объектов] (Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p> </p>

<p>Была сделана попытка сократить длину массива, но один из элементов массива не изменяется. При укорочении массив, элементы за новую длину массива будут удалены, не в этой ситуации.</p>

<p>Настраиваемый атрибут определяет, можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи).</p>

<p>Обычно свойства объекта, созданного инициализатором массива, настраиваются. Однако, например, при использовании {{jsxref("Object.defineProperty()")}}, свойство не настраивается по умолчанию.</p>

<p> </p>

<h2 id="Examples">Examples</h2>

<h3 id="Не_настраиваемые_свойства_созданные_Object.defineProperty">Не настраиваемые свойства, созданные <code>Object.defineProperty</code></h3>

<p>The {{jsxref("Object.defineProperty()")}} создаёт не настраиваемые свойства по умолчанию, если они не указаны как настраиваемые.</p>

<pre class="brush: js example-bad">var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: не удаётся удалить не настраиваемый элемент массива
</pre>

<p>Вам нужно будет установить элементы как конфигурируемые, если вы собираетесь сократить массив.</p>

<pre class="brush: js example-good">var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
</pre>

<h3 id="Seal-ed_Arrays_(Герметичные_Массивы)"><code>Seal</code>-ed Arrays (Герметичные Массивы)</h3>

<p>The {{jsxref("Object.seal()")}} функция помечает все существующие элементы как не настраиваемые.</p>

<pre class="brush: js example-bad">var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>Вам или нужно извлечь {{jsxref("Object.seal()")}} позвоните или сделайте копию. В случае копирования сокращение копии массива не изменяет длину исходного массива.</p>

<pre class="brush: js example-good">var arr = [1,2,3];
Object.seal(arr);

// Скопируйте исходный массив, чтобы сократить копию
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures#Properties">[[Configurable]]</a></li>
 <li>{{jsxref("Array.length")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
</ul>
