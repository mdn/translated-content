---
title: Основные понятия Flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
---
<div>{{CSSRef}}</div>

<p class="summary"><strong>CSS модуль раскладки Flexible Box</strong>, обычно называемый флексбокс или flexbox или просто flex (флекс), был разработан как модель одномерного-направленного макета и как один из методов распределения пространства между элементами в интерфейсе, с мощными возможностями выравнивания. В этой статье даётся краткое описание основных функций flexbox, которые мы рассмотрим более подробно в остальных руководствах.</p>

<p>Когда мы описываем flexbox как одномерно-направленный, мы  имеем в виду, что flexbox имеет дело с макетом в одной плоскости за раз – либо в виде строки, либо в виде столбца. Как альтернативу можно упомянуть двумерную модель CSS Grid Layout, которая управляет и столбцами и строками одновременно.</p>

<h2 id="Flexbox_две_оси">Flexbox: две оси</h2>

<p>При работе с flexbox нужно мыслить с точки зрения двух осей – главной оси и побочной оси. Главная ось определяется свойством {{cssxref ("flex-direction")}}, а побочная ось проходит перпендикулярно ей. Все, что мы делаем с flexbox, относится к этим осям, поэтому стоит с самого начала понять, как они работают.</p>

<h3 id="Главная_ось">Главная ось</h3>

<p>Главная ось определяется свойством <code>flex-direction</code>, которая может принимать одно из следующих значений:</p>

<ul>
 <li><code>row</code></li>
 <li><code>row-reverse</code></li>
 <li><code>column</code></li>
 <li><code>column-reverse</code></li>
</ul>

<p>Если вы выберете <code>row</code> или <code>row-reverse</code>, ваша главная ось будет проходить в горизонтальном направлении <strong>(inline direction)</strong>.</p>

<p><img alt="If flex-direction is set to row the main axis runs along the row in the inline direction." src="https://mdn.mozillademos.org/files/15614/Basics1.png" style="display: block; height: 152px; margin: 0px auto; width: 522px;"></p>

<p>Если вы выберете <code>column</code> или <code>column-reverse</code>, ваша главная ось будет проходить в вертикальном направлении <strong>(block direction)</strong>.</p>

<p><img alt="If flex-direction is set to column the main axis runs in the block direction." src="https://mdn.mozillademos.org/files/15615/Basics2.png" style="display: block; height: 227px; margin: 0px auto; width: 709px;"></p>

<h3 id="Побочная_ось">Побочная ось</h3>

<p>Побочная ось проходит перпендикулярно главной оси, поэтому, если свойство <code>flex-direction</code> (главная ось) задано как <code>row</code> или <code>row-reverse</code>, побочная ось будет проходить в вертикальном направлении.</p>

<p><img alt="If flex-direction is set to row then the cross axis runs in the block direction." src="https://mdn.mozillademos.org/files/15616/Basics3.png" style="display: block; height: 125px; margin: 0px auto; width: 666px;"></p>

<p>Если свойство <code>flex-direction</code> задано как <code>column</code> или <code>column-reverse</code>, побочная ось будет проходить в горизонтальном направлении.</p>

<p><img alt="If flex-direction is set to column then the cross axis runs in the inline direction." src="https://mdn.mozillademos.org/files/15617/Basics4.png" style="display: block; height: 244px; margin: 0px auto; width: 523px;"></p>

<p>Понимание того, с какой осью вы работаете (главная или побочная) очень важно для дальнейшего изучения Flexbox.</p>

<h2 id="Начало_и_конец_строки">Начало и конец строки</h2>

<p>Важно понимать, что flexbox не делает никаких предположений о режиме написания документа. Раньше CSS был сильно ориентирован на горизонтальный режим и режим письма слева направо. Современные методы вёрстки охватывают полный диапазон режимов письма, и поэтому мы больше не предполагаем, что строка текста будет начинаться в верхнем левом углу документа и будет проходить по направлению к правой стороне, а новые строки будут появляться одна под другой.</p>

<p>Вы можете прочитать больше о взаимосвязи между flexbox и спецификацией Writing Modes в следующей статье, однако следующее описание должно помочь объяснить, почему мы не говорим о левом, правом, верхнем и нижнем направлениях наших flex-элементов.</p>

<p>Если свойству <code>flex-direction</code> задано значение <code>row</code> и вы работаете с английским языком, то начало главной оси будет слева, а конец главной оси – справа.</p>

<p><img alt="Working in English the start edge is on the left." src="https://mdn.mozillademos.org/files/15618/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>Если бы вы работаете с арабским языком, то начало главной оси будет справа, а конец главной оси – слева.</p>

<p><img alt="The start edge in a RTL language is on the right." src="https://mdn.mozillademos.org/files/15619/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>В обоих случаях начало побочной оси находится вверху flex контейнера, а конец – внизу, поскольку оба языка имеют режим горизонтальной записи.</p>

<p>Спустя некоторое время становится естественным думать о начале и конце оси, а не о левом и правом краях. Это будет полезно для вас при работе с другими методами, такими как CSS Grid Layout, которые следуют тем же шаблонам.</p>

<h2 id="Flex_контейнер">Flex контейнер</h2>

<p>Область документа, использующая flexbox, называется flex контейнером. Чтобы создать flex контейнер, мы задаём значение <code>flex</code> или <code>inline-flex</code> для свойства {{cssxref ("display")}} контейнера. Как только мы делаем это, прямые потомки этого контейнера становятся flex элементами. Как и для всех свойств в CSS, некоторые начальные значения уже определены, поэтому при создании flex-контейнера все содержащиеся в нем flex-элементы будут вести себя следующим образом.</p>

<ul>
 <li>Элементы отображаются в ряд (свойство <code>flex-direction</code> по умолчанию имеет значение <code>row</code>).</li>
 <li>Позиционирование элементов начинается от начала главной оси.</li>
 <li>Элементы не растягиваются по основной оси, но могут сжиматься.</li>
 <li>Элементы будут растягиваться, чтобы заполнить размер побочной оси.</li>
 <li>Свойству {{cssxref("flex-basis")}} задано значение <code>auto</code>.</li>
 <li>Свойству {{cssxref("flex-wrap")}} задано значение <code>nowrap</code>.</li>
</ul>

<p>Результатом этого является то, что все ваши элементы будут выстроены в ряд, используя размер содержимого в качестве их размера на главной оси. Если в контейнере больше элементов, чем можно уместить, они не будут обёрнуты и контейнер будет переполнен. Если некоторые элементы выше других, все элементы будут вытянуты вдоль побочной оси, чтобы заполнить ось в полный размер.</p>

<p>Вы можете увидеть принцип работы в живом примере ниже. Попробуйте отредактировать или добавить дополнительные элементы, чтобы проверить поведение flexbox.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}} </p>

<h3 id="Изменение_flex-direction">Изменение flex-direction</h3>

<p>Добавление свойства {{cssxref ("flex-direction")}} в контейнер позволяет нам изменять направление, в котором отображаются наши элементы flex. Установка <code>flex-direction: row-reverse</code> сохранит порядок отображения элементов вдоль строки, однако начало и конец строки поменяются местами.</p>

<p>Если изменить значение свойства <code>flex-direction</code> на <code>column</code>, главная ось изменится, и наши элементы будут отображаются в столбец. При установке параметра <code>column-reverse</code>, начало и конец столбца поменяются местами.</p>

<p>В приведённом ниже примере значение свойства <code>flex-direction</code> установлено как <code>row-reverse</code>. Попробуйте другие значения — <code>row</code>, <code>column</code> и<code>column-reverse</code>, чтобы посмотреть как изменятся элементы контейнера.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}</p>

<h2 id="Многострочный_флекс-контейнер_с_flex-wrap">Многострочный флекс-контейнер с flex-wrap</h2>

<p>Несмотря на то, что флекс-бокс - это однонаправленная модель, есть возможность завернуть наши флекс-элементы в несколько строк. При этом вы должны рассматривать каждую строку как новый флекс контейнер. Распределение пространства будет происходить на этой конкретной линии, не привязываясь к соседним линиям.</p>

<p>Чтобы включить такое поведение, добавьте параметр {{cssxref("flex-wrap")}} со значением <code>wrap</code>. Теперь, как только ваши элементы будут слишком большими для того, чтобы влезать на одну строчку, они будут переноситься на новые строки. Живой пример ниже содержит широкие элементы, у которых общая ширина больше, чем размер контейнера. Так как параметр <code>flex-wrap</code> установлен в значение <code>wrap</code>, элементы переносятся. Если вы установите значение <code>nowrap</code>, то есть в начальное значение, то элементы ужмутся так, чтобы все элементы поместились на одной строке, потому что у них установлено значение, позволяющее им ужиматься при необходимости. Если им запретить ужиматься, или если они не смогут ужаться достаточно сильно, то при установленном значении <code>nowrap</code> будет происходить переполнение контейнера.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}</p>

<p>Более подробно эту тема разбирается в статье <a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">Разбираемся с обёртыванием Flex элементов</a>.</p>

<h2 id="Краткая_запись_направления_и_многострочности_flex-flow">Краткая запись направления и многострочности: flex-flow</h2>

<p>Вы можете указать два свойства <code>flex-direction</code> и <code>flex-wrap</code> в одном {{cssxref("flex-flow")}}. Первое значение свойства определяет <code>flex-direction</code>, второе <code>flex-wrap</code>.</p>

<p>В приведённом ниже примере вы можете изменить первое значение на одно из доступных для <code>flex-direction</code> - <code>row</code>, <code>row-reverse</code>, <code>column</code> or <code>column-reverse</code>, а второе на <code>wrap</code> или <code>nowrap</code>, чтобы посмотреть как изменятся элементы контейнера.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}</p>

<h2 id="Свойства_применяемые_к_флекс-элементам">Свойства, применяемые к флекс-элементам</h2>

<p>Управлять поведением флекс-элементов более детально мы можем с помощью их собственных свойств:</p>

<ul>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
</ul>

<p>В этом обзоре мы лишь кратко рассмотрим эти свойства. Чтобы получить более глубокое понимание обратитесь к руководству <a href="/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%BE%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D0%B2%D0%B4%D0%BE%D0%BB%D1%8C_%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BE%D1%81%D0%B8">Управление соотношением элементов вдоль главной оси</a>.</p>

<p>Чтобы понять как работают эти свойства, прежде нам необходимо разобраться с концепцией <strong>доступного пространства</strong>. Изменяя значения этих флекс свойств, мы влияем на то, как доступное пространство распределяется между нашими элементами. Эта концепция так же важна для выравнивания элементов.</p>

<p>Если наш контейнер шириной 500 пикселей содержит три элемента шириной 100 пикселей каждый, для их размещения нам потребуется пространство шириной в 300 пикселей. Остаётся 200 пикселей свободного пространства. Если мы не изменим исходные значения этих свойств, флексбокс разместит это пространство за последним элементом.</p>

<p><img alt="This flex container has available space after laying out the items." src="https://mdn.mozillademos.org/files/15620/Basics7.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>Если вместо этого мы хотим чтобы элементы росли и заполняли собой свободное пространство, нам нужно указать способ распределения оставшегося пространства между элементами. Это как раз то для чего предназначены <code>flex</code> свойства.</p>

<h3 id="Свойство_flex-basis">Свойство <code>flex-basis</code></h3>

<p>Свойство <code>flex-basis</code> определяет размер доступного пространства элемента. Начальное значение этого свойства - <code>auto </code>- в этом случае браузер проверяет, имеют ли элементы размер. В приведённом выше примере все элементы имеют ширину 100px, и этот размер читается браузером как <code>flex-basis</code>.<br>
 Если элементы не имеют размера, то для размера <code>flex-basis</code> используется размер контента. Вот почему, когда мы просто объявляем <code>display: flex</code> на родительском элементе для создания flex-элементов, все элементы перемещаются в ряд и занимают столько места, сколько им нужно для отображения их содержимого.</p>

<h3 id="Свойство_flex-grow">Свойство <code>flex-grow</code></h3>

<p>With the <code>flex-grow</code> property set to a positive integer, flex items can grow along the main axis from their <code>flex-basis</code>. This will cause the item to stretch and take up any available space on that axis, or a proportion of the available space if other items are allowed to grow too.</p>

<p>If we gave all of our items in the example above a <code>flex-grow</code> value of 1 then the available space in the flex container would be equally shared between our items and they would stretch to fill the container on the main axis.</p>

<p>The flex-grow property can be used to distribute space in proportion. If we give our first item a <code>flex-grow</code> value of 2 and the other items a value of 1, 2 parts will be given to the first item (100px out of 200px in the case of the example above), 1 part each the other two (50px each out of the 200px total).</p>

<h3 id="Свойство_flex-shrink">Свойство <code>flex-shrink</code></h3>

<p>Where the <code>flex-grow</code> property deals with adding space in the main axis, the <code>flex-shrink</code> property controls how it is taken away. If we do not have enough space in the container to lay out our items and <code>flex-shrink</code> is set to a positive integer the item can become smaller than the <code>flex-basis</code>. As with <code>flex-grow</code> different values can be assigned in order to cause one item to shrink faster than others — an item with a higher value set for <code>flex-shrink</code> will shrink faster than its siblings that have lower values.</p>

<p>The minimum size of the item will be taken into account while working out the actual amount of shrinkage that will happen, which means that flex-shrink has the potential to appear less consistent than flex-grow in behavior. We’ll therefore take a more detailed look at how this algorithm works in the article Controlling Ratios of items along the main axis.</p>

<div class="note">
<p>Note that these values for <code>flex-grow</code> and <code>flex-shrink</code> are proportions. Typically if we had all of our items set to flex: <code>1 1 200px</code> and then wanted one item to grow at twice the rate, we would set that item to flex: <code>2 1 200px</code>. However you could use flex: <code>10 1 200px</code> and flex: <code>20 1 200px</code> if you wanted.</p>
</div>

<h3 id="Краткая_запись_значений_флекс_свойств">Краткая запись значений флекс свойств</h3>

<p>You will very rarely see the <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties used individually; instead they are combined into the {{cssxref("flex")}} shorthand. The <code>flex</code> shorthand allows you to set the three values in this order — <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>.</p>

<p>The live example below allows you to test out the different values of the flex shorthand; remember that the first value is <code>flex-grow</code>. Giving this a positive value means the item can grow. The second is <code>flex-shrink</code> — with a positive value the items can shrink, but only if their total values overflow the main axis. The final value is <code>flex-basis</code>; this is the value the items are using as their base value to grow and shrink from.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}</p>

<p>There are also some predefined shorthand values which cover most of the use cases. You will often see these used in tutorials, and in many cases these are all you will need to use. The predefined values are as follows:</p>

<ul>
 <li><code>flex: initial</code></li>
 <li><code>flex: auto</code></li>
 <li><code>flex: none</code></li>
 <li><code>flex: &lt;positive-number&gt;</code></li>
</ul>

<p>Setting <code>flex: initial</code> resets the item to the initial values of Flexbox. This is the same as <code>flex: 0 1 auto</code>. In this case the value of <code>flex-grow</code> is 0, so items will not grow larger than their <code>flex-basis</code> size. The value of <code>flex-shrink</code> is 1, so items can shrink if they need to rather than overflowing. The value of <code>flex-basis</code> is <code>auto</code>. Items will either use any size set on the item in the main dimension, or they will get their size from the content size.</p>

<p>Using <code>flex: auto</code> is the same as using <code>flex: 1 1 auto</code>; everything is as with <code>flex:initial</code> but in this case the items can grow and fill the container as well as shrink if required.</p>

<p>Using <code>flex: none</code> will create fully inflexible flex items. It is as if you wrote <code>flex: 0 0 auto</code>. The items cannot grow or shrink but will be laid out using flexbox with a <code>flex-basis</code> of <code>auto</code>.</p>

<p>The shorthand you often see in tutorials is <code>flex: 1</code> or <code>flex: 2</code> and so on. This is as if you used <code>flex: 1 1 0</code>. The items can grow and shrink from a <code>flex-basis</code> of 0.</p>

<p>Try these shorthand values in the live example below.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}</p>

<h2 id="Alignment_justification_and_distribution_of_free_space_between_items">Alignment, justification and distribution of free space between items</h2>

<p>A key feature of flexbox is the ability to align and justify items on the main- and cross-axes, and to distribute space between flex items.</p>

<h3 id="align-items"><code>align-items</code></h3>

<p>The {{cssxref("align-items")}} property will align the items on the cross axis.</p>

<p>The initial value for this property is <code>stretch</code> and this is why flex items stretch to the height of the tallest one by default. They are in fact stretching to fill the flex container — the tallest item is defining the height of that.</p>

<p>You could instead set <code>align-items</code> to <code>flex-start</code> in order to make the items line up at the start of the flex container, <code>flex-end</code> to align them to the end, or <code>center</code> to align them in the centre. Try this in the live example — I have given the flex container a height in order that you can see how the items can be moved around inside the container. See what happens if you set the value of align-items to:</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}</p>

<h3 id="justify-content"><code>justify-content</code></h3>

<p>The {{cssxref("justify-content")}} property is used to align the items on the main axis, the direction in which <code>flex-direction</code> has set the flow. The initial value is <code>flex-start</code> which will line the items up at the start edge of the container, but you could also set the value to <code>flex-end</code> to line them up at the end, or <code>center</code> to line them up in the centre.</p>

<p>You can also use the value <code>space-between</code> to take all the spare space after the items have been laid out, and share it out evenly between the items so there will be an equal amount of space between each item. To cause an equal amount of space on the right and left of each item use the value <code>space-around</code>. With <code>space-around</code>, items have a half-size space on either end. Or, to cause items to have equal space around them use the value <code>space-evenly</code>. With <code>space-evenly</code>, items have a full-size space on either end.</p>

<p>Try the following values of <code>justify-content</code> in the live example:</p>

<ul>
 <li><code>flex-start</code></li>
 <li><code>flex-end</code></li>
 <li><code>center</code></li>
 <li><code>space-around</code></li>
 <li><code>space-between</code></li>
 <li><code>space-evenly</code></li>
</ul>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}</p>

<p>In the article <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning Items in a Flex Container</a> we will explore these properties in more depth, in order to have a better understanding of how they work. These simple examples however will be useful in the majority of use cases.</p>

<h2 id="Next_steps">Next steps</h2>

<p>After reading this article you should have an understanding of the basic features of Flexbox. In the next article we will look at <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">how this specification relates to other parts of CSS</a>.</p>
