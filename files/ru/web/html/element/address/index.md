---
title: <address>
slug: Web/HTML/Element/address
tags:
  - HTML
  - HTML секции
  - HTML справочник
  - Веб
  - Элемент
translation_of: Web/HTML/Element/address
---
<p id="Summary">{{HTMLRef}}</p>

<p><strong>HTML- тег <code>&lt;address&gt;</code>  </strong>задаёт контактные данные для ближайшего родительского {{HTMLElement("article")}} или {{HTMLElement("body")}} ; В последнем случае применяется ко всему документу, визуально выделяется курсивом.</p>

<div class="note">
<p><strong>Примечание:</strong></p>

<ul>
 <li>Для представления адреса, который не является контактной информацией, воспользуйтесь {{HTMLElement("p")}} элементом.</li>
 <li>Данный тег не должен содержать любой другой информации, кроме контактной. (пример: дата публикации - относится к {{HTMLElement("time")}} тегу ).</li>
 <li>Обычно тег <span style="font-family: courier new;">&lt;address&gt;</span> размещается внутри тега {{HTMLElement("footer")}} текущего блока, если есть хотя бы один.</li>
</ul>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/HTML/Content_categories" title="HTML/Content_categories">Категории контента</a></th>
   <td><a href="https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Content_categories#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA" title="HTML/Content categories#Flow content">Основной поток</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Разрешённый контент</th>
   <td><a href="https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Content_categories#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BE%D1%82%D0%BE%D0%BA" title="HTML/Content categories#Flow content">Основной поток</a>, но без вложенного элемента <span style="font-family: courier new;">&lt;address&gt;</span>, без элементов заголовка ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), без секционного контента ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}) и без {{HTMLElement("header")}} или {{HTMLElement("footer")}} элементов.</td>
  </tr>
  <tr>
   <th scope="row">Опускание тегов</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Разрешённые родительские элементы</th>
   <td>Любой элемент, который принимает <a href="/en-US/docs/HTML/Content_categories#Flow_content" title="HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM интерфейс</th>
   <td>{{domxref("HTMLElement")}} Prior to Gecko 2.0 (Firefox 4), Gecko implemented this element using the {{domxref("HTMLSpanElement")}} interface</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Атрибуты</h2>

<p><span style="line-height: 21px;">Этот элемент включает в себя </span><a href="https://developer.mozilla.org/ru/docs/Web/HTML/%D0%9E%D0%B1%D1%89%D0%B8%D0%B5_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B" style="line-height: 21px;" title="HTML/Global attributes">глобальные атрибуты</a><span style="line-height: 21px;">.</span></p>

<h2 id="Пример">Пример</h2>

<pre class="brush: html">  &lt;address&gt;
    You can contact author at &lt;a href="http://www.somedomain.com/contact"&gt;www.somedomain.com&lt;/a&gt;.&lt;br&gt;
    If you see any bugs, please &lt;a href="mailto:webmaster@somedomain.com"&gt;contact webmaster&lt;/a&gt;.&lt;br&gt;
    You may also want to visit us:&lt;br&gt;
    Mozilla Foundation&lt;br&gt;
    1981 Landings Drive&lt;br&gt;
    Building K&lt;br&gt;
    Mountain View, CA 94043-0801&lt;br&gt;
    USA
  &lt;/address&gt;
</pre>

<p>Результат:</p>

<p><img alt="Image:HTML-address.png" src="/@api/deki/files/238/=HTML-address.png"></p>

<p>Помимо элемента {{HTMLElement("address")}}, с такими же стандартными стилями как и он текст отображают {{HTMLElement("i")}} или {{HTMLElement("em")}} элементы, более правильно использовать его, когда имеете дело с контактной информацией, так как он передаёт дополнительную семантическую информацию.</p>

<h2 id="Specifications">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_в_браузерах">Совместимость в браузерах</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>Другие элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};</li>
 <li><a href="/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document">Разделы и структура документа HTML5</a>.</li>
</ul>
