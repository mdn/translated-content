---
title: Введение
slug: Web/API/Document_Object_Model/Introduction
tags:
  - DOM
translation_of: Web/API/Document_Object_Model/Introduction
original_slug: DOM/DOM_Reference/Введение
---
<div>
<p>Этот раздел представляет краткое знакомство с Объектной Моделью Документа (DOM) - что такое DOM, каким образом предоставляются структуры HTML и XML документов, и как взаимодействовать с ними. Данный раздел содержит справочную информацию и примеры.</p>

<h2 id="Что_такое_Объектная_Модель_Документа_DOM">Что такое Объектная Модель Документа (DOM)?</h2>

<p>Объектная Модель Документа (DOM) – это программный интерфейс (API) для HTML и XML документов. DOM предоставляет структурированное представление документа и определяет то, как эта структура может быть доступна из программ, которые могут изменять содержимое, стиль и структуру документа. Представление DOM состоит из структурированной группы узлов и объектов, которые имеют свойства и методы. По существу, DOM соединяет веб-страницу с языками описания сценариев либо языками программирования.<br>
 <br>
 Веб-страница – это документ. Документ может быть представлен как в окне браузера, так и в самом HTML-коде. В любом случае, это один и тот же документ. DOM предоставляет другой способ представления, хранения и управления этого документа. DOM полностью поддерживает объектно-ориентированное представление веб-страницы, делая возможным её изменение при помощи языка описания сценариев наподобие JavaScript.<br>
 <br>
 Стандарты <a class="external external-icon" href="http://www.w3.org/DOM/">W3C DOM</a> и <a class="external external-icon" href="https://dom.spec.whatwg.org/">WHATWG DOM </a>формируют основы DOM, реализованные в большинстве современных браузеров. Многие браузеры предлагают расширения за пределами данного стандарта, поэтому необходимо проверять работоспособность тех или иных возможностей DOM для каждого конкретного браузера.</p>

<p>Например: стандарт DOM описывает, что метод <code>getElementsByTagName </code>в коде, указанном ниже, должен возвращать список всех элементов &lt;p&gt; в документе.</p>

<pre class="brush: js">paragraphs = document.getElementsByTagName("P");
// paragraphs[0] это первый &lt;p&gt; элемент
// paragraphs[1] это второй &lt;p&gt; элемент и т.д.
alert(paragraphs[0].nodeName);</pre>

<p>Все свойства, методы и события, доступные для управления и создания новых страниц, организованы в виде объектов. Например, объект <code>document</code>, который представляет сам документ, объект <code>table</code>, который реализует специальный интерфейс DOM<code style="font-style: normal; line-height: 1.5;"> HTMLTableElement,</code> необходимый для доступа к HTML-таблицам, и так далее. Данная документация даёт справку об объектах DOM, реализованных Gecko-подобных браузерах.</p>

<h2 id="DOM_и_JavaScript">DOM и JavaScript</h2>

<p>Небольшой пример выше, как почти все примеры в этой справке – это JavaScript. То есть пример <em>написан </em>на JavaScript, но при этом <em>используется </em>DOM для доступа к документу и его элементам. DOM не является языком программирования, но без него JavaScript не имел бы никакой модели или представления о веб-странице, HTML-документе, XML-документе и их элементах. Каждый элемент в документе - весь документ в целом, заголовок, таблицы внутри документа, заголовки таблицы, текст внутри ячеек таблицы - это части объектной документной модели для этого документа, поэтому все они могут быть доступны и могут изменяться с помощью DOM и скриптового языка наподобие JavaScript.</p>

<p>Вначале JavaScript и DOM были тесно связаны, но впоследствии они развились в различные сущности. Содержимое страницы хранится в DOM и может быть доступно и изменяться с использованием JavaScript, поэтому мы можем записать это в виде приблизительного равенства:</p>

<p>API (веб либо XML страница) = DOM + JS (язык описания скриптов)</p>

<p>DOM спроектирован таким образом, чтобы быть независимым от любого конкретного языка программирования, обеспечивая структурное представление документа согласно единому и последовательному API. Хотя мы всецело сфокусированы на JavaScript в этой справочной документации, реализация DOM может быть построена для любого языка, как в следующем примере на Python:</p>
</div>

<pre class="brush: python"># Пример DOM на языке Python
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # Свойство объекта документа DOM;
p_list = doc.getElementsByTagName("para");</pre>

<p>Для подробной информации о том, какие технологии участвуют в написании JavaScript для веб, смотрите обзорную статью <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview" style="line-height: 1.5;">JavaScript technologies overview.</a></p>

<h2 id="Каким_образом_доступен_DOM">Каким образом доступен DOM? </h2>

<p>Вы не должны делать ничего особенного для работы с DOM. Различные браузеры имеют различную реализацию DOM, эти реализации показывают различную степень соответствия с действительным стандартом DOM (это тема, которую мы пытались не затрагивать в данной документации), но каждый браузер использует свой DOM, чтобы сделать веб страницы доступными для взаимодействия с языками сценариев.</p>

<p>При создании сценария с использованием элемента &lt;script&gt;, либо включая в веб страницу инструкцию для загрузки скрипта, вы можете немедленно приступить к использованию программного интерфейса (API), используя элементы <code><a href="https://developer.mozilla.org/en-US/docs/DOM/document">document</a> </code>или <code><a href="https://developer.mozilla.org/en-US/docs/DOM/window">window</a></code> для взаимодействия с самим документом, либо для получения потомков этого документа, т.е. различных элементов на странице. Ваше программирование DOM может быть чем-то простым, например, вывод сообщения с использованием функции <code><a href="https://developer.mozilla.org/en-US/docs/DOM/window.alert">alert()</a></code> объекта <code><a href="https://developer.mozilla.org/en-US/docs/DOM/window">window</a></code>, или использовать более сложные методы DOM, которые создают новое содержимое, как показано в следующем примере:</p>

<pre class="brush:html">&lt;body onload="window.alert('добро пожаловать на мою домашнюю страницу!');"&gt;
</pre>

<p>В следующем примере внутри элемента <code>&lt;script&gt;</code> определён код JavaScript, данный код устанавливает функцию при загрузке документа (когда весь DOM доступен для использования). Эта функция создаёт новый элемент H1, добавляет текст в данный элемент, а затем добавляет H1 в дерево документа:</p>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;
    &lt;script&gt;
    // запуск данной функции при загрузке документа
       window.onload = function() {
    // создание нескольких элементов
    // в пустой HTML странице
       heading = document.createElement("h1");
       heading_text = document.createTextNode("Big Head!");
       heading.appendChild(heading_text);
       document.body.appendChild(heading);
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Важные_типы_данных">Важные типы данных</h2>

<p>Данный раздел предназначен для краткого описания различных типов и объектов в простой и доступной манере. Существует некоторое количество различных типов данных, которые используются в API, на которые вы должны обратить внимание. Для простоты, синтаксис примеров в данном разделе обычно ссылается на узлы как на <code>element</code>s, на массивы узлов как на <code>nodeList</code>s ( либо просто <code>element</code>s ) и на атрибуты узла, просто как на <code>attribute</code>s.</p>

<p>Ниже таблица с кратким описанием этих типов данных.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td>document</td>
   <td>Когда член возвращает объект типа document (например, свойство элемента ownerDocument возвращает документ к которому он относится), этот объект document является собственным корневым объектом. В DOM document Reference разделе описан объект document.<br>
    element   </td>
  </tr>
  <tr>
   <td>element</td>
   <td>обозначает элемент или узел типа element, возвращаемый членом DOM API. Вместо того, чтобы говорить, что метод document.createElement() возвращает ссылку на node, мы просто скажем, что этот элемент возвращает element, который просто был создан в DOM. Объекты element реализуют DOM element интерфейс и также более общий Node интерфейс. Оба интерфейса включены в эту справку.<br>
    nodeList</td>
  </tr>
  <tr>
   <td>NodeList</td>
   <td>
    <p>массив элементов, как тот, что возвращается методом Document.getElementsByTagName(). Конкретные элементы в массиве доступны по индексу двумя способами:</p>

    <ul>
     <li>    list.item(1)</li>
     <li>    list[1]</li>
    </ul>

    <p>Эти способы эквивалентны. В первом способе item() - единственный метод объекта NodeList. Последний использует обычный синтаксис массивов, чтобы получить второе значение в списке.</p>
   </td>
  </tr>
  <tr>
   <td>attribute</td>
   <td>Когда attribute возвращается членом API (например, метод createAttribute()) - это будет ссылка на объект, который предоставляет специальный (хоть и небольшой) интерфейс для атрибутов. Атрибуты - это узлы в DOM, как и элементы, хотя вы можете редко использовать их в таком виде.</td>
  </tr>
  <tr>
   <td>namedNodeMap</td>
   <td>namedNodeMap подобна массиву, но элементы доступны по имени или индексу. Доступ по индексу - это лишь для удобства перечисления, т.к. элементы не имеют определённого порядка в списке. Этот тип данных имеет метод item() для этих целей и вы можете также добавлять и удалять элементы из namedNodeMap</td>
  </tr>
 </tbody>
</table>



<h2 id="DOM-интерфейсы_DOM_interfaces">DOM-интерфейсы (DOM interfaces)</h2>



<p>Это руководство об объектах и реальных вещах, которые вы можете использовать для управления DOM-иерархией. Есть много моментов, где понимание того, как это работает, может удивлять. Например, объект, представляющий <code>HTML form</code> элемент, берёт своё свойство <code><strong>name </strong></code>из интерфейса <code>HTMLFormElement, </code>а свойство <code><strong>className - </strong></code>из интерфейса <code>HTMLElement. </code>В обоих случаях свойство, которое вы хотите, находится в этом объекте формы.</p>

<p>Кроме того, отношение между объектами и интерфейсами, которые они реализуют в DOM может быть удивительным и этот раздел пытается рассказать немного о существующих интерфейсах в DOM и о том, как они могут быть доступны.</p>

<h3 id="Интерфейсы_и_объекты_Interfaces_and_objects">Интерфейсы и объекты (Interfaces and objects)</h3>

<p>Многие объекты реализуют действия из нескольких интерфейсов. Объект таблицы, например, реализует специальный <a href="https://developer.mozilla.org/en-US/docs/DOM/HTMLTableElement/ru/docs/">HTML Table Element Interface</a>, который включает такие методы как <code>createCaption</code> и <code>insertRow</code>. Но так как это таблица - это ещё и HTML-элемент, <code>table</code> реализует интерфейс <code>Element</code>, описанный в разделе <a href="https://developer.mozilla.org/en-US/docs/DOM/element/ru/docs/">DOM <code>element</code> Reference</a>. Наконец, так как HTML-элемент (в смысле DOM) - это узел (<code>node)</code> в дереве, которое составляет объектную модель для HTML- или XML-страницы, табличный элемент также реализует более общий интерфейс <code>Node</code>, из которого происходит <code>Element</code>.</p>

<p>Когда вы получаете ссылку на объект <code>table</code>, как в следующем примере, вы обычно используете все три интерфейса этого объекта, вероятно, даже не зная этого.</p>

<pre class="brush: js">var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i &lt; tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    table.border = "1";
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";</pre>

<h3 id="Основные_интерфейсы_в_DOM_Core_interfaces_in_the_DOM">Основные интерфейсы в DOM (Core interfaces in the DOM)</h3>

<p>Этот раздел перечисляет несколько самых распространённых интерфейсов в DOM. Идея не в том чтобы описать, что делают эти методы API, но в том чтобы дать вам несколько мыслей насчёт видов методов и свойств, которые вы будете часто видеть, используя DOM. Эти распространённые части API использованы в большинстве примеров раздела <a href="https://developer.mozilla.org/en-US/docs/Gecko_DOM_Reference/Examples">DOM Examples</a> в конце этой справки.</p>

<p><code>Document, window</code> - это объекты, чьи интерфейсы вы, как правило, очень часто используете в программировании DOM. Говоря простыми словами, объект <code>window</code> представляет что-то вроде браузера, а объект <code>document</code> - корень самого документа. <code>Element</code> наследуется от общего интерфейса <code>Node</code>, и эти интерфейсы вместе предоставляют много методов и свойств, которые можно применять у отдельных элементов. Эти элементы также могут иметь отдельные интерфейсы для работы с типами данных, которые эти элементы содержат, как в примере с объектом <code>table</code> в предыдущем случае.</p>

<p>Ниже представлен краткий список распространённых членов API, используемых в программировании веб- и XML-страниц с использованием DOM:</p>

<ul>
 <li><code><a href="/ru/docs/Web/API/Document/getElementById">document.getElementById</a>(id)</code></li>
 <li><code><a href="/ru/docs/Web/API/Document/getElementsByTagName">document.getElementsByTagName</a>(name)</code></li>
 <li><code><a href="/ru/docs/DOM/document.createElement">document.createElement</a>(name)</code></li>
 <li><code>parentNode.<a href="/ru/docs/Web/API/Node/appendChild">appendChild</a>(node)</code></li>
 <li><code>element.<a href="/ru/docs/Web/API/Element/innerHTML">innerHTML</a></code></li>
 <li><code>element.<a href="/ru/docs/Web/API/HTMLElement/style">style</a>.left</code></li>
 <li><code>element.<a href="/ru/docs/Web/API/Element/setAttribute">setAttribute</a></code></li>
 <li><code>element.<a href="/ru/docs/Web/API/Element/getAttribute">getAttribute</a></code></li>
 <li><code>element.<a href="/ru/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code></li>
 <li><code><a href="/en-US/docs/DOM/window.content">window.content</a></code></li>
 <li><code><a href="/en-US/docs/DOM/window.onload">window.onload</a></code></li>
 <li><code><a href="/en-US/docs/DOM/window.dump">window.dump</a></code></li>
 <li><code><a href="/ru/docs/Web/API/Window/scrollTo">window.scrollTo</a></code></li>
</ul>

<h2 id="Тестирование_DOM_API">Тестирование DOM API</h2>

<p>Этот документ содержит примеры для каждого интерфейса, который вы можете использовать в своей разработке. В некоторых случаях примеры - полноценные веб-страницы с доступом к DOM в элементе <code>&lt;script&gt;,</code> также перечислены элементы, необходимые чтобы запустить скрипт в форме, и HTML-элементы, над которыми будут производиться операции DOM. Когда встречается такой случай, можно просто копировать и вставить пример в новый HTML-документ, сохранить и запустить его в браузере.</p>

<p>Есть случаи, однако, где примеры более лаконичные. Чтобы запустить примеры, которые лишь демонстрируют основы взаимодействия интерфейсов с HTML-элементами, вы можете подготовить тестовую страницу, в которую будете помещать функции внутрь скриптов. Следующая очень простая веб-страница содержит элемент <code>&lt;script&gt;</code> в заголовке, в который вы можете поместить функции, чтобы протестировать интерфейс. Страница содержит несколько элементов с атрибутами, которые можно возвращать, устанавливать или, другими словами, манипулировать и содержит пользовательский интерфейс, необходимый, чтобы вызывать нужные функции из браузера.</p>

<p>Вы можете использовать эту тестовую страницу или похожую для проверки интерфейсов DOM, которые вас интересуют и просмотра того, как они работают в браузерах. Вы можете обновить содержимое функции <code>test()</code> при необходимости, создать больше кнопок или добавить элементы при необходимости.</p>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;DOM Tests&lt;/title&gt;
    &lt;script type="application/javascript"&gt;
    function setBodyAttr(attr, value){
      if (document.body) eval('document.body.'+attr+'="'+value+'"');
      else notSupported();
    }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div style="margin: .5in; height: 400;"&gt;
      &lt;p&gt;&lt;b&gt;&lt;tt&gt;text&lt;/tt&gt;&lt;/b&gt;&lt;/p&gt;
      &lt;form&gt;
        &lt;select onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);"&gt;
          &lt;option value="black"&gt;black
          &lt;option value="darkblue"&gt;darkblue
        &lt;/select&gt;
        &lt;p&gt;&lt;b&gt;&lt;tt&gt;bgColor&lt;/tt&gt;&lt;/b&gt;&lt;/p&gt;
        &lt;select onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);"&gt;
          &lt;option value="white"&gt;white
          &lt;option value="lightgrey"&gt;gray
        &lt;/select&gt;
        &lt;p&gt;&lt;b&gt;&lt;tt&gt;link&lt;/tt&gt;&lt;/b&gt;&lt;/p&gt;
        &lt;select onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);"&gt;
          &lt;option value="blue"&gt;blue
          &lt;option value="green"&gt;green
        &lt;/select&gt;  &lt;small&gt;
        &lt;a href="http://www.brownhen.com/dom_api_top.html" id="sample"&gt;
        (sample link)&lt;/a&gt;&lt;/small&gt;&lt;br&gt;
      &lt;/form&gt;
      &lt;form&gt;
        &lt;input type="button" value="version" onclick="ver()" /&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Чтобы протестировать много интерфейсов на одной странице, набор свойств, которые изменяют цвета веб-страницы, можно создать похожую веб-страницу с целой "консолью" кнопок, текстовых полей и других элементов. Следующий скриншот даёт идею, как интерфейсы могут быть сгруппированы вместе для тестирования</p>

<p><img alt="" src="https://developer.mozilla.org/@api/deki/files/173/=DOM_Ref_Introduction_to_the_DOM.gif" style="height: 375px; width: 199px;"></p>

<p>В этом примере выпадающее меню динамически обновляет доступные из DOM части веб-страницы (например, фоновый цвет, цвет ссылок и цвет текста). Однако при разработке тестовых страниц, тестирование интерфейсов, как вы об этом прочитали, важная часть изучения эффективной работы с DOM.</p>

<h2 id="Другие_статьи">Другие статьи</h2>

<ul>
 <li><a href="/ru/docs/DOM/DOM_Reference">DOM Reference</a></li>
 <li><a href="/ru/docs/DOM/DOM_Reference/Введение">Введение в DOM</a></li>
 <li><a href="/ru/docs/DOM/DOM_Reference/Events">События и DOM (Events and the DOM)</a></li>
 <li><a href="/en-US/docs/Web/API/Document_Object_Model/Examples">Примеры (Examples)</a></li>
</ul>
