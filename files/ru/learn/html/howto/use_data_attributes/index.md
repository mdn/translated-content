---
title: Использование data-* атрибутов
slug: Learn/HTML/Howto/Use_data_attributes
tags:
  - Guide
  - HTML
translation_of: Learn/HTML/Howto/Use_data_attributes
original_slug: Web/Guide/HTML/Using_data_attributes
---
<p><a href="/ru/docs/Web/Guide/HTML/HTML5">HTML5</a> спроектирован с возможностью расширения данных ассоциированных с каким-либо элементом, но в то же время не обязательно имеющих определённое значение. <a href="/ru/docs/Web/HTML/Global_attributes#data-*"><code>data-*</code> атрибуты</a> позволяют хранить дополнительную информацию в стандартных элементах HTML, без хаков вроде нестандартных атрибутов, лишних DOM-свойств или {{domxref("Node.setUserData()")}}.</p>

<h2 id="Синтаксис_HTML">Синтаксис HTML</h2>

<p>Синтаксис прост — любой атрибут, чьё имя начинается с <code>data-</code>, является <code>data-*</code> атрибутом. Предположим у нас имеется статья и мы хотим сохранить дополнительную информацию без визуального представления. Для этого можно использовать <code>data</code>-атрибуты:</p>

<pre class="brush: html">&lt;article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"&gt;
...
&lt;/article&gt;</pre>

<h2 id="Доступ_в_JavaScript">Доступ в JavaScript</h2>

<p>Чтение <code>data-</code>атрибутов в <a href="/ru/docs/Web/JavaScript">JavaScript</a> осуществляется также просто. Для этого можно использовать метод {{domxref("Element.getAttribute", "getAttribute()")}} с параметром, равным полному имени атрибута. Но есть и более простой способ, используя объект {{domxref("HTMLElement.dataset", "dataset")}}.</p>

<p>Чтобы получить <code>data</code>-атрибут можно взять свойство объекта <code>dataset</code> с именем, равным части имени атрибута после <code>data-</code> (обратите внимание, что дефисы в имени преобразуются в camelCase).</p>

<pre><code>var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"</code></pre>

<p>Каждое свойство является строкой и может быть прочитано и записано. В приведённом выше примере выполнение кода <code>article.dataset.columns = 5</code> приведёт к тому, что новое значение атрибута станет равным <code>"5"</code>.</p>

<h2 id="Доступ_в_CSS">Доступ в CSS</h2>

<p>Заметим, что <code>data</code>-атрибуты являются обычными HTML-атрибутами, к которым можно получить доступ в <a href="/ru/docs/Web/CSS">CSS</a>. Например, чтобы показать родительские данные о статье можно использовать <a href="/ru/docs/Web/CSS/content">генерируемый контент</a> и CSS функцию {{cssxref("attr")}}:</p>

<pre class="brush: css">article::before {
  content: attr(data-parent);
}</pre>

<p>Также можно использовать <a href="/ru/docs/Web/CSS/Attribute_selectors">селекторы атрибутов </a>в CSS для изменения стилей в соответствии с данным:</p>

<pre class="brush: css">article[data-columns='3']{
  width: 400px;
}
article[data-columns='4']{
  width: 600px;
}</pre>

<p>Увидеть как это работает можно <a href="https://jsbin.com/ujiday/2/edit">в примере на JSBin</a>.</p>

<p><code>Data</code>-атрибуты также могут использоваться для хранения информации, которая постоянно изменяется, например, счёт в игре. Используя CSS селекторы и возможности JavaScript можно создавать некоторые изящные эффекты, без необходимости писать свои функции отображения. Посмотрите <a href="https://www.youtube.com/watch?v=On_WyUB1gOk">скринкаст</a> чтобы увидеть больше примеров использующих сгенерированный контент и переходы на CSS. <a href="https://jsbin.com/atawaz/3/edit">Пример кода из скринкаста можно также посмотреть на JSBin</a>.</p>

<h2 id="Проблемы">Проблемы</h2>

<p>Не храните данные, которые должны быть видимы и доступны в <code>data</code>-атрибутах. Дело в том, что вспомогательная техника (assistive technology) может не получить к ним доступ. В дополнение, поисковые роботы не индексируют данные, содержащиеся в <code>data</code>-атрибутах.</p>

<p>Печально, что всё простое и полезное в этой жизни не достаётся бесплатно. Internet Explorer 11+ поддерживает этот стандарт, но все более ранние версии <a href="https://caniuse.com/#feat=dataset">не поддерживают <code>dataset</code></a>. Для поддержки IE 10 и более ранних версий получение доступа к <code>data</code>-атрибутам необходимо осуществлять через {{domxref("Element.getAttribute", "getAttribute()")}}. Также, <a href="https://jsperf.com/data-dataset">производительность чтения <code>data-</code>атрибутов</a> по сравнению с хранением этих данных в хранилище данных JS значительно хуже. Использование <code>dataset</code> ещё медленнее, чем чтение данных с <code>getAttribute()</code>.</p>

<p>Тем не менее, для пользовательских метаданных, связанных с элементами, <code>data-</code>атрибуты являются отличным решением.</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>This article is adapted from <a href="https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/">Using data attributes in JavaScript and CSS on hacks.mozilla.org</a>.</li>
 <li><a href="https://www.sitepoint.com/use-html5-data-attributes/">How to use HTML5 data attributes</a> (Sitepoint)</li>
</ul>
