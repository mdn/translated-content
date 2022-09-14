---
title: X.prototype.y called on incompatible type
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
translation_of: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
---
<div>{{jsSidebar("Errors")}}</div>

<div> </div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: 'this' не является  Set объектом (EdgE)
TypeError: Function.prototype.toString вызывается несовместимый объект (Firefox)
TypeError: Function.prototype.bind вызывается несовместимая цель (Firefox)
TypeError: Метод Set.prototype.add called вызывается несовместимый приёмник undefined (Chrome)
TypeError: Bind должен вызываться для функции(Chrome)
</pre>

<h2 id="Тип_ошибки">Тип ошибки </h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>При возникновении этой ошибки вызывается функция (для данного объекта) с типом this, не соответствующим типу, ожидаемому функцией.</p>

<p>Эта проблема может возникнуть при использовании {{jsxref("Function.prototype.call()")}} ил {{jsxref("Function.prototype.apply()")}} методы и предоставление аргумента this, который не имеет ожидаемого типа.</p>

<p>Эта проблема также может возникнуть при предоставлении функции (хранящейся в объекте) в качестве аргумента другой функции. В этом случае объект не будет целью this функции. Чтобы обойти эту проблему, необходимо либо предоставить лямбда-код, который выполняет вызов, либо использовать{{jsxref("Function.prototype.bind()")}} функция для принудительной передачи аргумента this ожидаемому объекту.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Неправильные">Неправильные</h3>

<pre class="brush: js example-bad">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.

</pre>

<h3 id="Правильные">Правильные</h3>

<pre class="brush: js example-good">var mySet = new Set;
['bar', 'baz'].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

var myFun = function () {
  console.log(this);
};
['bar', 'baz'].forEach(x =&gt; myFun.bind(x));
// This works using the "bind" function. It creates a lambda forwarding the argument.

</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
