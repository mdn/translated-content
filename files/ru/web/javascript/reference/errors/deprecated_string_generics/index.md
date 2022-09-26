---
title: 'Warning: String.x is deprecated; use String.prototype.x instead'
slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
tags:
  - JavaScript
  - предупреждение
translation_of: Web/JavaScript/Reference/Errors/Deprecated_String_generics
---
<div>{{jsSidebar("Errors")}}</div>

<div>Поддержка строковых обобщённых методов прекращена с версии Firefox 68. Более старые версии предупреждают об использовании данных методов следующим образом:</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Warning: String.charAt            is deprecated; use String.prototype.charAt            instead
Warning: String.charCodeAt        is deprecated; use String.prototype.charCodeAt        instead
Warning: String.concat            is deprecated; use String.prototype.concat            instead
Warning: String.contains          is deprecated; use String.prototype.contains          instead
Warning: String.endsWith          is deprecated; use String.prototype.endsWith          instead
Warning: String.includes          is deprecated; use String.prototype.includes          instead
Warning: String.indexOf           is deprecated; use String.prototype.indexOf           instead
Warning: String.lastIndexOf       is deprecated; use String.prototype.lastIndexOf       instead
Warning: String.localeCompare     is deprecated; use String.prototype.localeCompare     instead
Warning: String.match             is deprecated; use String.prototype.match             instead
Warning: String.normalize         is deprecated; use String.prototype.normalize         instead
Warning: String.replace           is deprecated; use String.prototype.replace           instead
Warning: String.search            is deprecated; use String.prototype.search            instead
Warning: String.slice             is deprecated; use String.prototype.slice             instead
Warning: String.split             is deprecated; use String.prototype.split             instead
Warning: String.startsWith        is deprecated; use String.prototype.startsWith        instead
Warning: String.substr            is deprecated; use String.prototype.substr            instead
Warning: String.substring         is deprecated; use String.prototype.substring         instead
Warning: String.toLocaleLowerCase is deprecated; use String.prototype.toLocaleLowerCase instead
Warning: String.toLocaleUpperCase is deprecated; use String.prototype.toLocaleUpperCase instead
Warning: String.toLowerCase       is deprecated; use String.prototype.toLowerCase       instead
Warning: String.toUpperCase       is deprecated; use String.prototype.toUpperCase       instead
Warning: String.trim              is deprecated; use String.prototype.trim              instead
Warning: String.trimLeft          is deprecated; use String.prototype.trimLeft          instead
Warning: String.trimRight         is deprecated; use String.prototype.trimRight         instead
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>Предупреждение. Исполнение кода JavaScript не будет остановлено.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p>Нестандартные обобщённые методы {{jsxref("String")}} являются устаревшими, поддержка в Firefox прекращена, начиная с версии 68. Строковые обобщённые методы предоставляют возможность применять методы экземпляров <code>String</code> к любым объектам.</p>

<h2 id="Примеры">Примеры</h2>

<h3 id="Устаревший_синтаксис">Устаревший синтаксис</h3>

<pre class="brush: js example-bad">var num = 15;
String.replace(num, /5/, '2');</pre>

<h3 id="Стандартный_синтаксис">Стандартный синтаксис</h3>

<pre class="brush: js example-good">var num = 15;
String(num).replace(/5/, '2');
</pre>

<h2 id="Прослойка">Прослойка</h2>

<p>Ниже приведён код прослойки, с помощью которой можно добавить поддержку обобщённых методов String в другие браузеры:</p>

<pre class="brush: js">/*globals define*/
// Предполагаем, что все требуемые методы экземпляров String уже присутствуют
// (если нет, для них так же можно использовать полифилы)
(function() {
  'use strict';

  var i,
    // Мы могли построить массив методов следующим образом, однако метод
    //   getOwnPropertyNames() нельзя реализовать на JavaScript:
    // Object.getOwnPropertyNames(String).filter(function(methodName) {
    //   return typeof String[methodName] === 'function';
    // });
    methods = [
      'contains', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
      'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
      'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase', 'normalize',
      'toLocaleUpperCase', 'localeCompare', 'match', 'search', 'slice',
      'replace', 'split', 'substr', 'concat', 'localeCompare'
    ],
    methodCount = methods.length,
    assignStringGeneric = function(methodName) {
      var method = String.prototype[methodName];
      String[methodName] = function(arg1) {
        return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
      };
    };

  for (i = 0; i &lt; methodCount; i++) {
    assignStringGeneric(methods[i]);
  }
}());</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("String")}}</li>
</ul>
