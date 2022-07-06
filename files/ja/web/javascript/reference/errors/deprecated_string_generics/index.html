---
title: 'Warning: String.x is deprecated; use String.prototype.x instead'
slug: Web/JavaScript/Reference/Errors/Deprecated_String_generics
tags:
  - JavaScript
  - Warning
  - エラー
  - 警告
translation_of: Web/JavaScript/Reference/Errors/Deprecated_String_generics
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の警告で、 Firefox 68 以前で使用されていた String ジェネリックに関するものです。 String ジェネリックは Firefox 68 から削除されました。</p>

<h2 id="Message" name="Message">メッセージ</h2>

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

<h2 id="Error_type">エラーの種類</h2>

<p>警告。 JavaScript の実行は中断されません。</p>

<h2 id="What_went_wrong" name="What_went_wrong">原因</h2>

<p>標準外のジェネリック {{jsxref("String")}} のメソッドは非推奨であり、 Firefox 68 で削除されました。 String ジェネリックは、 <code>String</code> インスタンスメソッドを <code>String</code> オブジェクトに提供し、 <code>String</code> の「メソッドを任意のオブジェクトに適用できるようにします。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Deprecated_syntax" name="Deprecated_syntax">非推奨の構文</h3>

<pre class="brush: js example-bad">var num = 15;
String.replace(num, /5/, '2');</pre>

<h3 id="Standard_syntax" name="Standard_syntax">標準の構文</h3>

<pre class="brush: js example-good">var num = 15;
String(num).replace(/5/, '2');
</pre>

<h2 id="Shim">Shim</h2>

<p>対応していないブラウザーで対応できるようにするための Shim です。</p>

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

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String")}}</li>
</ul>
