---
title: 'Warning: String.x is deprecated; use String.prototype.x instead'
slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
tags:
  - JavaScript
  - 警告
translation_of: Web/JavaScript/Reference/Errors/Deprecated_String_generics
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="错误提示">错误提示</h2>

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

<h2 id="错误类型">错误类型</h2>

<p>警告。JavaScript 引擎不会停止运行。</p>

<h2 id="哪里出错了？">哪里出错了？</h2>

<p>非标准的泛型  {{jsxref("String")}} 方法已经被废弃，将来会被移除（这些方法仅在 Firefox 浏览器中得到实现）。String 泛型在 String 对象上提供了一系列的 String 实例方法，使得这些 String 方法可以应用于任何类型的对象。</p>

<p>Firefox {{bug(1222552)}} 对 String 泛型方法的移除进行了追踪。</p>

<h2 id="示例">示例</h2>

<h3 id="废弃的语法">废弃的语法</h3>

<pre class="brush: js example-bad">var num = 15;
String.replace(num, /5/, '2');</pre>

<h3 id="标准语法">标准语法</h3>

<pre class="brush: js example-good">var num = 15;
String(num).replace(/5/, '2');
</pre>

<h2 id="垫片">垫片</h2>

<p>以下是一个垫片脚本来为不支持 String 泛型方法浏览器提供支持：</p>

<pre class="brush: js">/*globals define*/
// Assumes all supplied String instance methods already present
// (one may use shims for these if not available)
(function() {
  'use strict';

  var i,
    // We could also build the array of methods with the following, but the
    //   getOwnPropertyNames() method is non-shimable:
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

<h2 id="相关内容">相关内容</h2>

<ul>
 <li>{{jsxref("String")}}</li>
 <li>{{jsxref("Global_Objects/Array", "Generics", "#Array_generic_methods", 1)}} 同样存在于 {{jsxref("Array")}} 的方法中（也同样被废弃了）。</li>
</ul>
