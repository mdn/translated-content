---
title: >-
  TypeError: setting getter-only property "x"(установка свойства только для
  геттера "x")
slug: Web/JavaScript/Reference/Errors/Getter_only
translation_of: Web/JavaScript/Reference/Errors/Getter_only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщения">Сообщения</h2>

<pre class="syntaxbox">TypeError: назначение свойств только для чтения не допускается в строгом режиме (Edge)
TypeError: установка свойства только для геттера "x" (Firefox)
TypeError: не удаётся установить свойство "prop" из #&lt;Object&gt;, который имеет только геттер (Chrome)

</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}} только в строгом режиме.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Предпринята попытка задать новое значение свойству, для которого указан только геттер. . Пока это молча будет проигнорировано в non-strict режиме, оно бросит {{jsxref("TypeError")}} в <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>.</p>

<h2 id="Примеры">Примеры</h2>

<p>В приведённом ниже примере показано, как установить getter для свойства. Он не задаёт сеттер, так TypeError выдаётся при попытке установить свойство температуры до 30. Дополнительные сведения см. Также в {{jsxref("Object.defineProperty()")}} странице.</p>

<pre class="brush: js example-bad">"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"</pre>

<p>Чтобы устранить эту ошибку, необходимо либо удалить строку 16, в которой предпринята попытка задать свойство temperature, либо реализовать для неё сеттер, например, как показано ниже:</p>

<pre class="brush: js example-good">"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineProperties()")}}</li>
</ul>
