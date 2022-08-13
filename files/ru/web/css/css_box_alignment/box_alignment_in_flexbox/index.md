---
title: Выравнивание блоков в разметке Flexbox
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
tags:
  - CSS
  - flexbox
  - выравнивание блоков
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
---
<div>{{CSSRef}}</div>

<p><span class="tlid-translation translation" lang="ru"><span title="">Спецификация <a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Box_Alignment">Выравнивание Блоков</a> подробно описывает, как выравнивание работает при использовании различных способов разметки.</span> <span title="">На этой странице мы рассмотрим, как работает выравнивание блоков в контексте разметки flexbox.</span> <span title="">Поскольку эта страница предназначена для подробного описания вещей, относящихся к разметке flexbox и выравниванию блоков, её следует читать вместе с основной страницей <a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Box_Alignment">выравнивания блоков</a>, в которой подробно описываются общие характеристики выравнивания блоков при использовании разных методах разметки.</span></span></p>

<h2 id="Основной_пример">Основной пример</h2>

<p><span class="tlid-translation translation" lang="ru"><span title="">В этом примере три элемента flex выровнены по главной оси с помощью атрибута {{cssxref ("justify-content")}} и по поперечной оси с помощью атрибута {{cssxref ("align-items")}}.</span> <span title="">Первый элемент переопределяет значения <code>align-items</code>, устанавливая значение атрибута {{cssxref ("align-self")}} в  <code>center</code>.</span></span></p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}</p>

<h2 id="Оси_и_атрибут_flex-direction">Оси и атрибут flex-direction</h2>

<p><span class="tlid-translation translation" lang="ru"><span title="">Разметка flexbox следует согласно режиму чтения документа (<a href="https://developer.mozilla.org/ru/docs/Web/CSS/writing-mode">writing mode</a>), поэтому, если вы используете английский язык и устанавливаете атрибут {{cssxref ("justify-content")}} в значение <code>flex-end</code>,  то элементы будут выровнены по концу flex контейнера.</span> <span title="">Если вы работаете со значением атрибута {{cssxref ("flex-direction")}}, установленным в <code>row</code>, то выравнивание будет происходить в линейном направлении.</span></span></p>

<p><span class="tlid-translation translation" lang="ru"><span title="">Однако, работая с разметкой flexbox, вы можете изменить поведение главной оси, установив значение атрибута <code>flex-direction</code> в <code>column</code>.</span> <span title="">В этом случае, атрибут <code>justify-content</code> будет выравнивать элементы в направлении блока.</span> <span title="">Поэтому проще всего думать о главной и поперечной осях при работе с разметкой Flexbox следующим образом:</span></span></p>

<ul>
 <li>Главная ось = направление согласно атрибуту <code>flex-direction</code> = выравнивание через атрибут <code>justify-content</code></li>
 <li>Поперечная ось = проходит поперёк главной оси = выравнивание через атрибут <code>align-content</code>, <code>align-self</code>/<code>align-items</code></li>
</ul>

<h3 id="Выравнивание_по_Главной_Оси">Выравнивание по Главной Оси</h3>

<ul>
 <li>{{cssxref("justify-content")}}</li>
</ul>

<h3 id="Выравнивание_по_Поперечной_Оси">Выравнивание по Поперечной Оси</h3>

<ul>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-content")}}</li>
</ul>

<h3 id="Отсутствие_атрибута_justify-self_в_разметке_Flexbox">Отсутствие атрибута justify-self в разметке Flexbox</h3>

<p><span class="tlid-translation translation" lang="ru"><span title="">При использовании разметки flexbox, главная ось работает с нашим контентом как с группой.</span> <span title="">Количество места, необходимого для размещения элементов, рассчитывается, а оставшееся пространство становится доступным для заполнения.</span> <span title="">Атрибут <code>justify-content</code> контролирует использование оставшегося пространства.</span> <span title="">Если установить атрибут <code>justify-content</code> в значение <code>flex-end</code>, то дополнительное пространство заполнится перед элементами, если установить атрибут <code>justify-content</code> в значение <code>space-around</code>, то пространство заполнится с обеих сторон элемента в этом измерении и т. д.</span></span></p>

<p><span class="tlid-translation translation" lang="ru"><span title="">Это означает, что атрибут <code>justify-self</code> нет имеет смысла использовать в разметке flexbox, поскольку мы всегда имеем дело с перемещением всей группы элементов.</span></span></p>

<p><span class="tlid-translation translation" lang="ru"><span title="">Использовать атрибут <code>align-self</code> имеет смысл при работе с поперечной осью, так как потенциально есть дополнительное пространство во flex контейнере в этом измерении, один элемент которого может быть перемещён и в начало, и в конец.</span></span></p>

<h2 id="Выравнивание_и_свойство_margin_auto">Выравнивание и свойство margin: auto</h2>

<p><span class="tlid-translation translation" lang="ru"><span title="">В разметке flexbox присутствует конкретный вариант использования, в котором, возможно, понадобится атрибут <code>justify-self</code>. Например, когда будет необходимо разделить набор flex элементов для создания отдельного шаблона навигации.</span> <span title="">В таком случае, можно использовать атрибут <code>margin</code> со значением <code>auto</code>.</span> <span title="">Атрибут с таким значением будет занимать все доступное пространство в своём измерении.</span> <span title="">Так работает центрирование блока со свойством <code>margin:auto</code>.</span> <span title="">Установив значение атрибутов <code>margin-left</code> и <code>margin-right</code> в значение <code>auto</code>, обе стороны нашего блока попытаются занять все доступное пространство и, таким образом, заставят двигаться блок в центр.</span></span></p>

<p><span class="tlid-translation translation" lang="ru"><span title="">Установив значение атрибута{{cssxref ("margin")}} в <code>auto</code> для одного элемента в наборе с flex-элементами, выровненных с начала, можно создать разделённую навигацию.</span> <span title="">Это хорошо работает с разметкой flexbox и свойствами выравнивания.</span> <span title="">Как только для элемента со свойством <code>margin: auto</code> не остаётся свободного места, он станет вести себя также, как и все остальные flex элементы, и сократится в объёме, пытаясь уместиться в доступное пространство.</span></span></p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}</p>

<h2 id="Атрибуты_разрыва">Атрибуты разрыва</h2>

<ul>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<h3 id="Создание_разрыва_фиксированного_размера_между_элементами">Создание разрыва фиксированного размера между элементами</h3>

<p><span class="tlid-translation translation" lang="ru"><span title="">На главной оси атрибут <code>column-gap</code> будет создавать разрывы фиксированного размера между соседними элементами.</span><br>
 <br>
 <span title="">На поперечной оси атрибут <code>row-gap</code> создаёт разрыв между соседними flex линиями, поэтому необходимо также установить атрибут <code>flex-wrap</code> в значение <code>wrap</code>, чтобы применить эффект.</span></span></p>

<div class="note">
<p><span class="tlid-translation translation" lang="ru"><span title="">Примечание. Начиная с версии 63, Firefox является единственным браузером, в котором реализованы свойства разрыва в разметке Flexbox.</span></span></p>
</div>

<h2 id="Ссылки">Ссылки</h2>

<h3 id="CSS_Атрибуты">CSS Атрибуты</h3>

<div class="index">
<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("place-content")}}</li>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("place-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>
</div>

<h3 id="Глоссарий_терминов">Глоссарий терминов</h3>

<div class="index">
<ul>
 <li>{{Glossary("Cross axis")}}</li>
 <li>{{Glossary("Main axis")}}</li>
</ul>
</div>

<h2 id="Руководства">Руководства</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Выравнивание в разметке flexbox</a></li>
</ul>

<h2 id="Внешние_ресурсы">Внешние ресурсы</h2>

<ul>
 <li><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Шпаргалка по выравниваю блоков</a></li>
 <li><a href="https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/">CSS разметки Grid, Flexbox и выравнивание блоков</a></li>
 <li><a href="https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/">Размышления о частичной реализации выравнивания блоков</a></li>
</ul>
