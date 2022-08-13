---
title: <html>
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - Web
  - Веб
  - Справка
  - Элемент
  - корневой элемент HTML
translation_of: Web/HTML/Element/html
---
<p>{{HTMLRef}}</p>

<p><span class="seoSummary"><strong>HTML-элемент <code>&lt;html&gt;</code></strong> представляет собой корень (элемент верхнего уровня) HTML-документа, поэтому его так же называют корневым элементом. Все другие элементы должны быть потомками этого элемента (должны находиться внутри него).</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ru/docs/Web/Guide/HTML/Content_categories">Категории контента</a></th>
   <td>Отсутствуют.</td>
  </tr>
  <tr>
   <th scope="row">Разрешённое содержимое</th>
   <td>Один элемент {{HTMLElement("head")}}, за которым следует один элемент {{HTMLElement("body")}}.</td>
  </tr>
  <tr>
   <th scope="row">Пропуск тега</th>
   <td>Открывающий тег может быть пропущен, если первое, что находится внутри элемента <code>&lt;html&gt;</code>, не является комментарием.<br>
    В {{glossary("HTML5")}} закрывающий тег может быть пропущен. В старых версиях HTML, если сразу за элементом <code>&lt;html&gt;</code> следует комментарий (при наличии элемента {{HTMLElement("body")}}), то закрывающий тег пропускать нельзя.</td>
  </tr>
  <tr>
   <th scope="row">Разрешённые родительские элементы</th>
   <td>Отсутствуют. Это корневой элемент документа.</td>
  </tr>
  <tr>
   <th scope="row">Разрешённые роли ARIA</th>
   <td>Отсутствуют.</td>
  </tr>
  <tr>
   <th scope="row">DOM-интерфейс</th>
   <td>{{domxref("HTMLHtmlElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Атрибуты">Атрибуты</h2>

<p>К этому элементу применимы <a href="/ru/docs/Web/HTML/Общие_атрибуты">глобальные атрибуты</a>.</p>

<dl>
 <dt>{{htmlattrdef("manifest")}} {{obsolete_inline}}</dt>
 <dd>Определяет {{glossary("URI")}} файла манифеста, указывающего ресурсы, которые должны быть сохранены в локальном кеше. Смотрите <a href="/en-US/docs/Web/HTML/Using_the_application_cache">Использование кеша приложений</a>.</dd>
 <dt>{{htmlattrdef("version")}} {{obsolete_inline}}</dt>
 <dd>Определяет версию HTML DTD (Document Type Definition, больше известное как {{glossary("Doctype")}}), которая управляет текущим документом. Этот атрибут не нужен, потому что он является избыточным, так как есть информация, указываемая в объявлении типа документа.</dd>
 <dt>{{htmlattrdef("xmlns")}}</dt>
 <dd>Определяет {{glossary("Namespace", "пространство имён")}} {{glossary("XHTML", "XHTML-документа")}}. Значение по умолчанию <code>"http://www.w3.org/1999/xhtml"</code>. Это требуется при {{glossary("parse", "парсинге")}} документов с помощью {{glossary("parser", "парсера")}} {{glossary("XML")}} и необязательно для документов <code>text/html</code>.</dd>
</dl>

<h2 id="Пример">Пример</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;...&lt;/head&gt;
  &lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Проблемы_доступности">Проблемы доступности</h2>

<p>Добавление атрибута {{htmlattrxref("lang")}} с допустимым (валидным) идентификатором языка (определены в документе IETF <a class="external" href="https://www.ietf.org/rfc/bcp/bcp47.txt">BCP47</a>) в элемент <code>&lt;html&gt;</code> поможет технологии чтения с экрана правильно определить язык. Идентификатор языка должен описывать язык, который используется большей частью содержимого страницы. Без него программы чтения с экрана, как правило, по умолчанию используют язык операционной системы, который может может стать причиной неправильного произношения.</p>

<p>Добавление валидного атрибута <code>lang</code> в элемент <code>&lt;html&gt;</code> также гарантирует, что важные метаданные, содержащиеся в элементе {{HTMLElement("head")}}, например заголовок страницы {{HTMLElement("title")}}, также будут объявлены правильно.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.1_%E2%80%94_Readable_Make_text_content_readable_and_understandable">MDN Understanding WCAG, Guideline 3.1 explanations</a></li>
 <li><a class="external" href="https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html">Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Поддержка_браузерами">Поддержка браузерами</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Элемент верхнего уровня MathML: {{MathMLElement("math")}}</li>
 <li>Элемент верхнего уровня SVG: {{SVGElement("svg")}}</li>
</ul>
