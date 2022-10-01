---
title: SVG шрифты
slug: Web/SVG/Tutorial/SVG_fonts
translation_of: Web/SVG/Tutorial/SVG_fonts
---
<p>{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}</p>

<p>Когда был написан стандарт SVG, поддержка веб-шрифтов ещё не была широко распространена в браузерах. Поскольку доступ к правильному файлу шрифта имеет решающее значение для правильного отображения текста, в SVG была добавлена технология описания шрифтов. Она не совместима с другими форматами, такими как PostScript или OTF, это лишь простое средство вложения информации о глифах в SVG при визуализации.<br>
  </p>

<p class="note"><strong>SVG-шрифты корректно поддерживаются только в Safari.</strong><br>
 Эта возможность не была реализована в Internet Explorer, она также была удалена из Chrome 38 (и Opera 25),  разработчики Mozilla отложили её реализацию на неопределённое время, чтобы сосредоточиться на WOFF. Другие инструменты, такие как плагин Adobe SVG Viewer, Batik и частично Inkscape поддерживают встраиваемые шрифты SVG.</p>

<p>Элемент {{ SVGElement("font") }} используется для определения SVG-шрифта.</p>

<h2 id="Установка_шрифта">Установка шрифта</h2>

<p> </p>

<p>Есть некоторые нюансы, необходимые для вставки шрифта в SVG. Давайте рассмотрим пример объявления (указанный<a href="http://www.w3.org/TR/SVG/fonts.html#FontElement"> в спецификации</a>), и объясним детали.<br>
  </p>

<pre>&lt;font id="Font1" horiz-adv-x="1000"&gt;
  &lt;font-face font-family="Super Sans" font-weight="bold" font-style="normal"
      units-per-em="1000" cap-height="600" x-height="400"
      ascent="700" descent="300"
      alphabetic="0" mathematical="350" ideographic="400" hanging="500"&gt;
    &lt;font-face-src&gt;
      &lt;font-face-name name="Super Sans Bold"/&gt;
    &lt;/font-face-src&gt;
  &lt;/font-face&gt;
  &lt;missing-glyph&gt;&lt;path d="M0,0h200v200h-200z"/&gt;&lt;/missing-glyph&gt;
  &lt;glyph unicode="!" horiz-adv-x="300"&gt;&lt;!-- Outline of exclam. pt. glyph --&gt;&lt;/glyph&gt;
  &lt;glyph unicode="@"&gt;&lt;!-- Outline of @ glyph --&gt;&lt;/glyph&gt;
  &lt;!-- more glyphs --&gt;
&lt;/font&gt;
</pre>

<p>Начнём с элемента {{ SVGElement("font") }}. Он имеет атрибут <code>id</code>, который позволяет ему ссылаться через URI (см. ниже). Атрибут <code>horiz-adv-x</code> определяет, насколько широкий символ в среднем по сравнению с путями для отдельных глифов. Обычно подходит значение 1000. Существует несколько сопутствующих атрибутов, которые помогают определить ограничительные рамки. </p>

<p>Элемент {{ SVGElement("font-face") }} является в SVG эквивалентом объявления шрифта с помощью CSS-свойства <a href="https://developer.mozilla.org/en/CSS/@font-face">@font-face</a>. Он определяет основные свойства финального шрифта, такие как вес, стиль и т. д. В приведённом выше примере, первое и самое важное свойство, которое должно быть определено - это <code>font-family</code>, на значение которого затем можно ссылаться в свойствах CSS и SVG. Атрибуты <code>font-weight</code> и <code>font-style</code> имеют ту же цель, что и соответствующие свойства CSS. Все последующие атрибуты - это команды рендеринга для механизма компоновки шрифтов, задающие, к примеру, какая средняя высота символов направленных вверх или вниз <a href="http://en.wikipedia.org/wiki/Ascender_%28typography%29">выносных элементов</a>.</p>

<p>Дочерний элемент {{ SVGElement("font-face-src") }} соответствует свойству <code>src</code> для атрибута <code>@font-face</code> в CSS. Вы можете указать внешние источники для определения шрифтов с помощью элементов {{ SVGElement("font-face-name") }} и {{ SVGElement("font-face-uri") }}. В приведённом выше примере указано, что если у рендерера имеется локальный доступный шрифт с именем «Super Sans Bold», он должен использовать его.</p>

<p>Следующий элемент за {{ SVGElement("font-face-src") }} - это {{ SVGElement("missing-glyph") }}. Он определяет, что должно отображаться, если символ в шрифте не был найден и если нет запасного варианта. Он также показывает, как создаются глифы: добавлением в него любого графического контента SVG. В нем вы можете использовать буквально любые элементы SVG, даже {{ SVGElement("filter") }}, {{ SVGElement("a") }} или {{ SVGElement("script") }}. Однако для простых глифов вы можете просто добавить атрибут <code>d</code> - он определяет форму для глифа точно так же, как работают стандартные пути SVG.</p>

<p>Сами глифы затем определяются элементами {{ SVGElement("glyph") }}. Наиболее важным атрибутом является <code>unicode</code>. Он определяет код кодировки unicode, представленный этим символом. Если вы указываете атрибут {{htmlattrxref("lang")}} на глифе, вы можете дополнительно ограничить его определёнными языками (представленными <code>xml:lang</code>). Вы можете использовать произвольный SVG для определения глифа, и это позволит вам создать замечательные эффекты.<br>
 <br>
 Есть ещё два элемента, которые могут быть определены внутри шрифта: {{ SVGElement("hkern") }} и {{ SVGElement("vkern") }}. Каждый из них содержит ссылки не менее чем на два символа (атрибуты <code>u1</code> и <code>u2</code>) и атрибут <code>k</code>, который определяет, на сколько должно быть уменьшено расстояние между этими символами. Ниже показан пример инструкции размещения символов «A» и «V» на стандартном расстоянии.</p>

<pre>&lt;hkern u1="A" u2="V" k="20" /&gt;
</pre>

<h2 id="Ссылка_на_шрифт">Ссылка на шрифт</h2>

<p>После того как вы описали шрифт, как показано выше, вы можете просто применить атрибут <code>font-family</code> для использования шрифта в тексте SVG: </p>

<pre>&lt;font&gt;
  &lt;font-face font-family="Super Sans" /&gt;
  &lt;!-- and so on --&gt;
&lt;/font&gt;

&lt;text font-family="Super Sans"&gt;My text uses Super Sans&lt;/text&gt;
</pre>

<p>Тем не менее, вы можете объединить несколько методов для того чтобы определить как и где использовать шрифт.</p>

<h3 id="Опция_использование_CSS_font-face">Опция: использование CSS @font-face</h3>

<p>Вы можете использовать свойство <code>@font-face</code> для ссылки на внешние шрифты:</p>

<pre>&lt;font id="Super_Sans"&gt;
  &lt;!-- and so on --&gt;
&lt;/font&gt;

&lt;style type="text/css"&gt;
@font-face {
  font-family: "Super Sans";
  src: url(#Super_Sans);
}
&lt;/style&gt;

&lt;text font-family="Super Sans"&gt;My text uses Super Sans&lt;/text&gt;</pre>

<h3 id="Опция_ссылка_на_внешний_шрифт">Опция: ссылка на внешний шрифт</h3>

<p>Элемент <code>font-face-uri</code> позволяет ссылаться на внешний шрифт, следовательно, его можно использовать в нескольких местах:</p>

<pre>&lt;font&gt;
  &lt;font-face font-family="Super Sans"&gt;
    &lt;font-face-src&gt;
      &lt;font-face-uri xlink:href="fonts.svg#Super_Sans" /&gt;
    &lt;/font-face-src&gt;
  &lt;/font-face&gt;
&lt;/font&gt;
</pre>

<p>{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}</p>
