---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
  - Référence(2)
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---
<div>{{JSRef("Global_Objects", "Object")}}</div>

<h2 id="Summary">Сводка</h2>

<p>Метод <code><strong>hasOwnProperty()</strong></code> возвращает логическое значение, указывающее, содержит ли объект указанное свойство.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><code><var>obj</var>.hasOwnProperty(<var>prop</var>)</code></pre>

<h3 id="Parameters">Параметры</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Имя проверяемого свойства.</dd>
</dl>

<h2 id="Description">Описание</h2>

<p>Каждый объект, произошедший от {{jsxref("Global_Objects/Object", "Object")}}, наследует метод <code>hasOwnProperty</code>. Этот метод может использоваться для определения того, содержит ли объект указанное свойство в качестве собственного свойства объекта; в отличие от оператора {{jsxref("Operators/in", "in")}}, этот метод не проверяет существование свойств в цепочке прототипов объекта.</p>

<h2 id="Examples">Примеры</h2>

<h3 id="Example:_Using_hasOwnProperty_to_test_for_a_property.27s_existence">Пример: использование <code>hasOwnProperty</code> для проверки существования свойства</h3>

<p>В следующем примере определяется, содержит ли объект <code>o</code> свойство с именем <code>prop</code>:</p>

<pre class="brush: js">o = new Object();
o.prop = 'существует';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // вернёт true
changeO();
o.hasOwnProperty('prop');   // вернёт false
</pre>

<h3 id="Example:_Direct_versus_inherited_properties">Пример: собственные и унаследованные свойства</h3>

<p>Следующий пример показывает разницу между собственными свойствами и свойствами, унаследованными через цепочку прототипов:</p>

<pre class="brush: js">o = new Object();
o.prop = 'существует';
o.hasOwnProperty('prop');             // вернёт true
o.hasOwnProperty('toString');         // вернёт false
o.hasOwnProperty('hasOwnProperty');   // вернёт false
</pre>

<h3 id="Example:_Itarate_over_properties_not_considering_inherited_properties">Пример: обход свойств объекта</h3>

<p>Следующий пример показывает, как итерироваться по свойствам объекта с пропуском унаследованных свойств. Обратите внимание, что цикл {{jsxref("Statements/for...in", "for...in")}} уже проходит только по перечисляемым элементам, так что не надо на основании отсутствия не перечисляемых свойств, показываемых в цикле, считать, что метод <code>hasOwnProperty</code> сам ограничивает свойства только перечисляемыми элементами (как это делает метод {{jsxref("Object.getOwnPropertyNames()")}}).</p>

<pre class="brush: js">var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    alert('это точно туман (' + name + '). Значение: ' + buz[name]);
  }
  else {
    alert(name); // toString или что-то ещё
  }
}
</pre>

<h3 id="Example:_hasOwnProperty_as_a_property">Пример: <code>hasOwnProperty</code> как свойство</h3>

<p>JavaScript не защищает имя свойства <code>hasOwnProperty</code>; таким образом, вполне может существовать объект с таким свойством, поэтому для получения правильного результата нужно использовать <em>внешний</em> метод <code>hasOwnProperty</code>:</p>

<pre class="brush: js">var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Тут драконы'
};

foo.hasOwnProperty('bar'); // всегда возвращает false

// Используем метод hasOwnProperty другого объекта и вызываем его с передачей foo в качестве this
({}).hasOwnProperty.call(foo, 'bar'); // true

// Также для этих целей можно использовать свойство hasOwnProperty из прототипа Object
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
</pre>

<p>Обратите внимание, что в последнем случае новые объекты не создаются.</p>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Совместимость с браузерами</h2>

<div>
<p>{{Compat}}</p>
</div>

<h2 id="See_also">Смотрите также</h2>

<ul>
 <li><a href="/ru/docs/Enumerability_and_ownership_of_properties">Перечисляемость и собственность свойств</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Statements/for...in", "for...in")}}</li>
 <li>{{jsxref("Operators/in", "in")}}</li>
 <li><a href="/ru/docs/Web/JavaScript/Guide/Inheritance_Revisited">Руководство по JavaScript: повторное наследование</a></li>
</ul>
