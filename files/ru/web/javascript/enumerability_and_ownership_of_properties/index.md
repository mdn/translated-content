---
title: Enumerability and ownership of properties
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
---
<div>{{JsSidebar("More")}}</div>

<p>В языке JavaScript свойства объектов могут быть перечисляемыми или неперечисляемыми (встречается вариант перевода: счётные или несчётные). Если внутреннему флагу [[Enumerable]] свойства присвоить значение true, то данное свойство становится перечисляемым. Это происходит по умолчанию для свойств, созданных простым присваиванием или через инициализацию свойств (свойства, определённые через <a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a> получают по умолчанию значение флага [[Enumerable]] равным false). Перечисляемые свойства участвуют в итерации в цикле <a href="/ru/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a>, если только имя свойства не <a href="/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Символ</a>. Принадлежность свойства определяется тем, принадлежит ли оно непосредственно объекту или получено из цепочки прототипов. Также можно получить весь список свойств объекта. Ниже, в таблице, указаны возможные способы нахождения, получения и итерации свойств объектов. Некоторые из них нельзя использовать без дополнительного кода, примеры которого приведены после таблицы.</p>

<table>
 <caption>Перечисляемость и принадлежность свойств - встроенные методы определения, получения и итерации</caption>
 <tbody>
  <tr>
   <th>Назначение</th>
   <th>Свойства объекта</th>
   <th>Свойства объекта и его прототипов</th>
   <th>Свойства из цепочки прототипов</th>
  </tr>
  <tr>
   <td>Определение</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Перечисляемые</th>
       <th scope="col">Неперечисляемые</th>
       <th scope="col">Перечисляемые и Неперечисляемые</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code> и !<code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Недоступно без дополнительного кода</td>
   <td>Недоступно без дополнительного кода</td>
  </tr>
  <tr>
   <td>Получение</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Перечисляемые</th>
       <th scope="col">Неперечисляемые</th>
       <th scope="col">Перечисляемые и Неперечисляемые</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td>Получить <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code>, выбрать свойства, не удовлетворяющие <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Недоступно без дополнительного кода</td>
   <td>Недоступно без дополнительного кода</td>
  </tr>
  <tr>
   <td>Итерация</td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Перечисляемые</th>
       <th scope="col">Неперечисляемые</th>
       <th scope="col">Перечисляемые и Неперечисляемые</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Итерация по массиву <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></td>
       <td>Итерация по <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code>, с выбранными свойствами, не удовлетворяющими <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></td>
       <td>Итерация по <code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>
    <table>
     <thead>
      <tr>
       <th scope="col">Перечисляемые</th>
       <th scope="col">Неперечисляемые</th>
       <th scope="col">Перечисляемые и Неперечисляемые</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td><code><a href="/ru/docs/JavaScript/Reference/Statements/for...in" title="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></td>
       <td>Недоступно без дополнительного кода</td>
       <td>Недоступно без дополнительного кода</td>
      </tr>
     </tbody>
    </table>
   </td>
   <td>Недоступно без дополнительного кода</td>
  </tr>
 </tbody>
</table>

<h2 id="Доступ_к_свойствам_по_их_перечисляемостипринадлежности">Доступ к свойствам по их перечисляемости/принадлежности</h2>

<p>Хотим заметить, что данный алгоритм эффективен не для всех классов.</p>

<ul>
 <li>Определение свойства:    <code>SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) &gt; -1</code></li>
 <li>Итерация:   <code>SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});</code> (or use<code> filter()</code>, <code>map()</code>, etc.)</li>
</ul>

<pre class="brush: js">var SimplePropertyRetriever = {
    getOwnEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Или можно использовать for..in, отфильтрованный по hasOwnProperty или проще: return Object.keys(obj);
    },
    getOwnNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Или можно использовать: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Или можно использовать for..in
    },
    getOwnAndPrototypeNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable : function (obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable : function (obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable : function (obj, prop) {
        return true;
    },
    // По мотивам http://stackoverflow.com/a/8024294/271577
    _getPropertyNames : function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function (prop) {
                    if (props.indexOf(prop) === -1 &amp;&amp; includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};</pre>

<h2 id="Определимость_свойств">Определимость свойств</h2>

<table>
 <thead>
  <tr>
   <th scope="row"> </th>
   <th scope="col"><code>in</code></th>
   <th scope="col"><code>for..in</code></th>
   <th scope="col"><code>hasOwnProperty</code></th>
   <th scope="col"><code>propertyIsEnumerable</code></th>
   <th scope="col"><code>in Object.keys</code></th>
   <th scope="col"><code>in Object.getOwnPropertyNames</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th scope="row">Перечисляемые</th>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Неперечисляемые</th>
   <td>true</td>
   <td>false</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>true</td>
  </tr>
  <tr>
   <th scope="row">Унаследованные Перечисляемые</th>
   <td>true</td>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
  <tr>
   <th scope="row">Унаследованные Неперечисляемые</th>
   <td>true</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
   <td>false</td>
  </tr>
 </tbody>
</table>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><code><a href="/ru/docs/JavaScript/Reference/Operators/in" title="/en-US/docs/JavaScript/Reference/Operators/in">in</a></code></li>
 <li><code><a href="/ru/docs/JavaScript/Reference/Statements/for...in" title="/en-US/docs/JavaScript/Reference/Statements/for...in">for..in</a></code></li>
 <li><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty</a></code></li>
 <li><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable">propertyIsEnumerable</a></code></li>
 <li><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">getOwnPropertyNames</a></code></li>
 <li><code><a href="/ru/docs/JavaScript/Reference/Global_Objects/Object/keys" title="/en-US/docs/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a></code></li>
</ul>
