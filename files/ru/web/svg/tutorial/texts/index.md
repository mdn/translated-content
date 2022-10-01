---
title: Текст
slug: Web/SVG/Tutorial/Texts
translation_of: Web/SVG/Tutorial/Texts
---
<div>{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}</div>

<p> </p>

<p>Говоря о тексте в SVG мы должны различать две отдельные темы. Первая это добавление и отображение текста в изображении, а вторая - SVG шрифты. Последняя будет описана в следующем разделе этого туториала, а пока мы полностью сфокусируемся на первой части: добавление текста в SVG изображение.</p>

<h2 id="Основы">Основы</h2>

<p>В <a href="ru/docs/Web/SVG/Tutorial/Getting_Started">getting started</a> мы уже видели, что элемент <code>text</code> может использоваться для размещения произвольного текста в SVG документах:</p>

<pre class="brush:xml">&lt;text x="10" y="10"&gt;Hello World!&lt;/text&gt;
</pre>

<p>Атрибуты <code>x</code> и <code>y</code> задают расположение текста на экране. Атрибут <code>text-anchor</code>, который может иметь значение start, middle, end или inherit, определяет в каком направлении выравнивать текст относительно заданной точки. <br>
 <br>
 Как и для фигур, тексту можно задать цвет с помощью атрибута <code>fill</code> и обводку, используя атрибут <code>stroke</code>. Оба могут быть использованы с <code>gradient</code> и <code>pattern</code> элементами, что делает простое изменение цвета текста в SVG очень мощным по сравнению с CSS 2.1.</p>

<h2 id="Настройка_свойств_шрифта">Настройка свойств шрифта</h2>

<p>Шрифт, в котором отображается текст очень важен. SVG предлагает набор атрибутов (многие из которых похожи на их CSS аналоги), позволяющий настроить шрифт.  Каждое из следующих свойств может быть установлено как атрибут или с помощью CSS декларации: <code>font-family</code>, <code>font-style</code>, <code>font-weight</code>, <code>font-variant</code>, <code>font-stretch</code>, <code>font-size</code>, <code>font-size-adjust</code>, <code>kerning</code>, <code>letter-spacing</code>, <code>word-spacing</code> и <code>text-decoration</code>.</p>

<h2 id="Другие_текстовые_элементы">Другие текстовые элементы</h2>

<h3 id="tspan">tspan</h3>

<p>Этот элемент используется для выделения частей длинного текста. Он должен быть вложенным в <code>text</code> элемент или в другой <code>tspan</code> элемент. Примером является выделение одного слова в предложении красным цветом. </p>

<pre class="brush:xml">&lt;text&gt;
  &lt;tspan font-weight="bold" fill="red"&gt;This is bold and red&lt;/tspan&gt;
&lt;/text&gt;
</pre>

<p>Элемент <code>tspan</code> имеет следующие атрибуты:<br>
 <br>
 <strong>x</strong><br>
 Задаёт новую координату по Х (аналогично абсолютному позиционированию в CSS) для вложенного текста. Что перезаписывает, установленную по умолчанию позицию. Атрибут может также содержать набор чисел, которые поочерёдно применяются к каждому символу <code>tspan</code>.</p>

<p><strong>dx</strong><br>
 Задаёт смещение по горизонтали <code>dx</code> относительно текущей позиции. Здесь вы также можете задавать набор значений, которые последовательно применяются к каждому символу, устанавливая смещение относительно предыдущего.</p>

<p>Аналогично, для вертикального перемещения текста имеются <strong>y</strong> и <strong>dy</strong> атрибуты.<br>
 <br>
 <strong>rotate</strong><br>
 Поворачивает символ на заданный угол. Атрибуту можно задавать набор чисел, которые поочерёдно применяются к символам. Если количество чисел в наборе меньше чем количество букв, то угол для всех оставшихся символов будет равен последнему значению в наборе.<br>
 <br>
 <strong>textLength</strong><br>
 Атрибут строго задаёт длину строки. Он предназначен для того, чтобы механизм рендеринга мог точно настраивать позиции глифов, когда измеренная длина текста не соответствует той, что указана в атрибуте.</p>

<h3 id="tref">tref</h3>

<p>Элемент <code>tref</code> позволяет ссылаться на уже существующий текст, эффективно копируя его на своё место. Вы можете использовать атрибут <code>xlink:href</code> чтобы указать на  элемент, текст которого должен быть скопирован. Затем вы можете изменить его стили и внешний вид независимо от источника. </p>

<pre class="brush:xml">&lt;text id="example"&gt;This is an example text.&lt;/text&gt;

&lt;text&gt;
    &lt;tref xlink:href="#example" /&gt;
&lt;/text&gt;
</pre>

<h3 id="textPath">textPath</h3>

<p>Этот атрибут извлекает <code>path</code>, используя свой атрибут xlink:href и выравнивает вложенный текст по этому пути.</p>

<pre class="brush:xml">&lt;path id="my_path" d="M 20,20 C 40,40 80,40 100,20" fill="transparent" /&gt;
&lt;text&gt;
  &lt;textPath xlink:href="#my_path"&gt;This text follows a curve.&lt;/textPath&gt;
&lt;/text&gt;</pre>

<div>{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}</div>
