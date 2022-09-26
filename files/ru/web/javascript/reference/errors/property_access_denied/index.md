---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
tags:
  - Error
  - Errors
  - JavaScript
  - Security
translation_of: Web/JavaScript/Reference/Errors/Property_access_denied
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">Error: Permission denied to access property "x"
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("Error")}}.</p>

<h2 id="Что_пошло_не_так">Что пошло не так?</h2>

<p><span class="seoSummary">Была попытка получить доступ к объекту, на который у вас нет разрешения. Вероятно, это элемент {{HTMLElement("iframe")}}, для которого вы нарушили <a href="/en-US/docs/Web/Security/Same-origin_policy">правило ограничения домена</a>.</span></p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"&gt;&lt;/iframe&gt;
    &lt;script&gt;
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{HTMLElement("iframe")}}</li>
 <li><a href="/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a></li>
</ul>
