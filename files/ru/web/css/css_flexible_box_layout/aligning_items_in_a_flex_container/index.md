---
title: Выравнивание элементов во Flex контейнере
slug: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Выравнивание_элементов_в_Flex_контейнере
---
<p>{{CSSRef}}</p>

<p class="summary">Одной из причин быстрого роста популярности flexbox среди веб-разработчиков было то, что впервые были предоставлены адекватные возможности выравнивания. Он предоставил адекватное вертикальное выравнивание, и стало возможным, наконец, легко поместить элемент в центр по вертикали. В этом руководстве детально рассматривается, как выравнивание и распределение работают во Flexbox.</p>

<p>Для центрирования элемента по перекрёстной оси (в данном случае - вертикальной) используется свойство <code>align-items</code>. Для центрирования элемента по главной оси (в данном случае - горизонтально), используется свойство <code>justify-content</code>.</p>

<p><img alt="A containing element with another box centered inside it." src="https://mdn.mozillademos.org/files/15627/align1.png" style="display: block; height: 357px; margin: 0px auto; width: 616px;"></p>



<p>На примере ниже можно изменить размер контейнера или вложенного элемента, но элемент всегда останется по центру.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}</p>

<h2 id="Свойства_управления_выравниванием">Свойства управления выравниванием</h2>

<p>В этом руководстве рассматриваются следующие свойства:</p>

<ul>
 <li>{{cssxref("justify-content")}} — управляет выравниванием элементов по главной оси.</li>
 <li>{{cssxref("align-items")}} — управляет выравниванием элементов по перекрёстной оси.</li>
 <li>{{cssxref("align-self")}} — управляет выравниванием конкретного flex элемента по перекрёстной оси.</li>
 <li>{{cssxref("align-content")}} — описывается в спецификации как “упаковка flex строк”; управляет промежутками между flex строками по перекрёстной оси.</li>
</ul>

<p>Также будет рассмотрены авто-отступы для выравнивания элементов во flexbox.</p>

<div class="note">
<p><strong>Замечание</strong>: Свойства выравнивания во Flexbox помещены в отдельную спецификацию — <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment Level 3</a>. Ожидается, что данная спецификация в конце концов заменит свойства, определённые во Flexbox Level One.</p>
</div>

<h2 id="Перекрёстная_ось">Перекрёстная ось</h2>

<p>Свойства <code>align-items</code> и <code>align-self</code> управляют выравниванием flex элементов по перекрёстной оси: вертикальной для <code>flex-direction</code> установленным в <code>row,</code> и горизонтальной для <code>flex-direction</code> установленным в <code>column</code>.</p>

<p>Рассмотрим выравнивание по перекрёстной оси на простейшем примере. Если установить <code>display: flex</code> у контейнера, все дочерние элементы становятся flex элементами, выстроенными в ряд. Все они по вертикали примут размер самого высокого элемента, который станет определяющим вертикального размера. Если у flex контейнера задана высота, то все элементы растянутся до высоты контейнера, независимо от размера содержимого.</p>

<p><img alt="Three items, one with additional text causing it to be taller than the others." src="https://mdn.mozillademos.org/files/15628/align2.png" style="display: block; height: 131px; margin: 0px auto; width: 509px;"></p>

<p><img alt="Three items stretched to 200 pixels tall" src="https://mdn.mozillademos.org/files/15629/align3.png" style="display: block; height: 207px; margin: 0px auto; width: 637px;"></p>

<p>Все элементы становятся одной высоты, т.к. по умолчанию свойство <code>align-items</code> имеет значение <code>stretch</code>.</p>

<p>Другие возможные значения свойства:</p>

<ul>
 <li><code>align-items: flex-start</code></li>
 <li><code>align-items: flex-end</code></li>
 <li><code>align-items: center</code></li>
 <li><code>align-items: stretch</code></li>
 <li><code>align-items: baseline</code></li>
</ul>

<p>В примере ниже значение свойств <code>align-items</code> установлено в <code>stretch</code>. Попробуйте другие значения для понимания их действия.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}} </p>

<h3 id="Выравнивание_одного_элемента_при_помощи_align-self">Выравнивание одного элемента при помощи <code>align-self</code></h3>

<p>Свойство <code>align-items </code>устанавливает <code>align-self</code> для всех flex элементов как для группы. Это означает, что можно явно указать значение <code>align-self</code> для конкретного элемента. Свойство <code>align-self</code> может принимать все те же значения, что и свойство <code>align-items, </code>а так же значение <code>auto</code>, которое сбросит значение, установленное в flex контейнере.</p>

<p>В следующем примере, у flex контейнера установлено <code>align-items: flex-start</code>, означающее, что все элементы будут выравнены по началу перекрёстной оси. У первого элемента с помощью <code>first-child</code> селектора установлено <code>align-items: stretch</code>; у следующего элемента с классом <code>selected</code> установлено <code>align-self: </code><code>center</code>. Можно изменять значение <code>align-items</code> на контейнере или <code>align-self</code> на элементе для изучения их работы.8н</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}} </p>

<h3 id="Изменение_основной_оси">Изменение основной оси</h3>

<p>До сего момента мы изучали поведение при <code>flex-direction</code> установленном в <code>row</code>, в языке, использующем написание сверху вниз. Это означает, что основная ось идёт горизонтально, а выравнивание по перекрёстной оси сдвигает элементы вверх или вниз.</p>

<p><img alt="Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the vertical axis." src="https://mdn.mozillademos.org/files/15630/align4.png" style="display: block; height: 204px; margin: 0px auto; width: 671px;"></p>

<p>Если изменить <code>flex-direction</code> на column, <code>align-items</code> и <code>align-self</code> будут сдвигать элементы влево или вправо.</p>

<p><img alt="Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the horizontal axis." src="https://mdn.mozillademos.org/files/15631/align5.png" style="display: block; height: 239px; margin: 0px auto; width: 687px;"></p>

<p>Можно попробовать пример ниже, где установлено <code>flex-direction: column</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}} </p>

<h2 id="Выравнивание_содержимого_по_перекрёстной_оси_—_свойство_align-content">Выравнивание содержимого по перекрёстной оси — свойство align-content</h2>

<p>До сих пор мы выравнивали элементы внутри flex-контейнера. Если содержимое вашего flex контейнера переносится на несколько строк, используйте свойство <code>align-content</code> для управления свободным пространством между строками. В спецификации это описано как <a href="https://drafts.csswg.org/css-flexbox/#align-content-property">упаковка flex-строк</a>.</p>

<p>Чтобы свойство <code>align-content</code> работало, необходимо, чтобы в flex-контейнере было больше места, что требуется для отображения всего содержимого. Оно применяется ко всем элементам как группе, и управляет распределением свободного места и положением всей группы элементов внутри контейнера.</p>

<p>Свойство <code>align-content</code> принимает следующие значения:</p>

<ul>
 <li><code>align-content: flex-start</code></li>
 <li><code>align-content: flex-end</code></li>
 <li><code>align-content: center</code></li>
 <li><code>align-content: space-between</code></li>
 <li><code>align-content: space-around</code></li>
 <li><code>align-content: stretch</code></li>
 <li><code>align-content: space-evenly</code> (не описано в спецификации Flexbox)</li>
</ul>

<p>В примере ниже flex контейнер имеет высоту 400 пикселей - больше, чем необходимо для отображения всех элементов. Значение <code>align-content</code> установлено в <code>space-between</code>, означающее, что свободное пространство разделено <em>между</em> строками, расположенными вплотную к началу и концу контейнера по перекрёстной оси.</p>

<p>Попробуйте другие значения <code>align-content</code> для понимания принципа их работы.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}} </p>

<p>Также можно сменить значение <code>flex-direction</code> на <code>column</code> и увидеть, как наше свойство работает в режиме колонок. Как и ранее, что увидеть работу свойства, у контейнера должно быть больше свободного места, чем требуется содержимому.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}} </p>

<div class="note">
<p><strong>Замечание</strong>: значение <code>space-evenly</code> не определено в спецификации flexbox и добавлено позже в спецификацию Box Alignment. Поддержка браузерами этого значение не так широка, как значений определённым в спецификации flexbox.</p>
</div>

<p>В <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">документации по <code>justify-content</code> на MDN</a> приведено больше деталей о всех значениях и поддержке браузерами.</p>

<h2 id="Выравнивание_содержимого_по_главной_оси">Выравнивание содержимого по главной оси</h2>

<p>Теперь, когда мы увидели, как работает выравнивание по перекрёстной оси, можно посмотреть на главную ось. Здесь нам доступно только одно свойство — <code>justify-content</code>. Это обусловлено тем, что с элементами на  главной оси мы работаем только как с группой. Используя свойство <code>justify-content</code>, мы контролируем, что происходит со свободным пространством на главной оси, и требуется ли нам больше пространства, чем нужно для отображения наших элементов.</p>

<p>В нашем первом примере с использованием свойства <code>display: flex</code>, применённым к контейнеру, элементы отображаются как строка и выстраиваются в начале блока. Это обусловлено тем, что свойство <code>justify-content</code> имеет начальное значение <code>flex-start</code>. Все свободное место располагается в конце контейнера.</p>

<p><img alt="Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items." src="https://mdn.mozillademos.org/files/15632/align6.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>Свойство <code>justify-content</code> может принимать те же самые значения, что и <code>align-content</code>.</p>

<ul>
 <li><code>justify-content: flex-start</code></li>
 <li><code>justify-content: flex-end</code></li>
 <li><code>justify-content: center</code></li>
 <li><code>justify-content: space-between</code></li>
 <li><code>justify-content: space-around</code></li>
 <li><code>justify-content: stretch</code></li>
 <li><code>justify-content: space-evenly</code> (не определено в спецификации Flexbox)</li>
</ul>

<p>В примере ниже, свойству <code>justify-content</code> задано значение <code>space-between</code>. Все доступное пространство распределяется между элементами после их позиционирования в контейнере. Первый и последний элементы занимают положения в начале и в конце контейнера соответственно.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}}</p>

<p>Если свойство <code>flex-direction</code> имеет значение <code>column</code>, то свойство <code>justify-content</code> распределит доступное пространство в контейнере между элементами.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}} </p>

<h3 id="Выравнивание_и_режим_записи">Выравнивание и режим записи</h3>

<p>Необходимо помнить, что при использовании свойств <code>flex-start</code> и<code>flex-end</code> элементы позиционируются в режиме записи. Если свойству <code>justify-content</code> задано значение <code>start</code> и стоит режим записи left-to-right (слева-направо), как в английском, то элементы выравниваются, начиная с левой стороны контейнера.</p>

<p><img alt="Three items lined up on the left" src="https://mdn.mozillademos.org/files/15638/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>Однако, если задан режим записи right-to-left (справа-налево), как в арабском языке, то элементы будут выстраиваться с правой стороны контейнера.</p>

<p><img alt="Three items lined up from the right" src="https://mdn.mozillademos.org/files/15639/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>В примере ниже свойству <code>property</code> задано значение <code>rtl</code>, которое изменяет порядок наших элементов. Вы можете удалить это свойство или изменить значение свойства <code>justify-content</code>, чтобы увидеть, как работает flexbox, когда отображение элементов начинается справа.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}} </p>

<h2 id="Выравнивание_и_гибкое-направление">Выравнивание и гибкое-направление</h2>

<p>Начальное положение элементов поменяется, если вы измените значение свойства <code>flex-direction</code> — например установите <code>row-reverse</code> вместо <code>row</code>.</p>

<p>В следующем примере заданы следующие свойства: <code>flex-direction: row-reverse</code> и <code>justify-content: flex-end</code>. В языках с параметром записи <code>ltr</code> все элементы будут отображаться с левой стороны. Попробуйте изменить свойство <code>flex-direction: row-reverse</code> на <code>flex-direction: row</code>. Вы увидите, что теперь элементы отображаются реверсивно.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}} </p>

<p>Может показаться немного запутанным, но главное правило, которое необходимо запомнить – до тех пор, пока вы не измените свойство <code>flex-direction</code>, элементы контейнера выстраиваются в режиме записи вашего языка (<code>ltr</code> или <code>rtl</code>). </p>

<p><img alt="Diagram showing start on the left and end on the right." src="https://mdn.mozillademos.org/files/15634/align8.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>Вы можете сделать отображение элементов контейнера блочным, задав свойству <code>flex-direction</code> значение  <code>column</code>. Свойство <code>flex-start</code> будет отображать элементы в столбец сверху вниз. Таким образом, первый элемент будет первым параграфом.</p>

<p><img alt="Diagram showing start at the top and end at the bottom." src="https://mdn.mozillademos.org/files/15636/align10.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<p>Если вы зададите свойству <code>flex-direction</code> реверсивное значение, то элементы будут позиционироваться в обратном порядке. Так, свойство <code>flex-start</code> будет брать начало в конце контейнера. Первый элемент будет находится в конце строки, если задано строчное отображение элементов или в конце параграфа, если задано блочное отображение.   </p>

<p><img alt="Diagram showing start on the right and end on the left." src="https://mdn.mozillademos.org/files/15635/align9.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p><img alt="Diagram showing end at the top and start at the bottom" src="https://mdn.mozillademos.org/files/15637/align11.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<h2 id="Использование_авто_отступов_для_выравнивания_по_главной_оси">Использование авто отступов для выравнивания по главной оси</h2>

<p>Так как элементы, расположенные на главной оси, обрабатываются как группа, свойства <code>justify-items</code> или <code>justify-self</code> становятся недоступными. Тем не менее, существует способ отделить конкретный элемент или группу элементов от остальных, используя внешний отступ <code>margin</code> со значением <code>auto</code>. </p>

<p>Распространённый пример — панель навигации, в которой отдельные важные элементы выровнены по правому краю, а основная группа элементов — по левому.</p>

<p>На первый взгляд может показаться, что этот пример использования свойства <code>justify-self</code>. Однако, рассмотрим следующий ниже пример. Имеется три элемента с одной стороны и два — с другой. Если бы мы могли использовать <code>justify-self</code> на элементе <em>d</em>, это также изменило бы выравнивание следующего элемента — <em>e</em>, что может противоречить первоначальному замыслу.</p>

<p><img alt="Five items, in two groups. Three on the left and two on the right." src="https://mdn.mozillademos.org/files/15633/align7.png" style="display: block; height: 84px; margin: 0px auto; width: 645px;"></p>

<p>Вместо этого мы можем выбрать четвёртый элемент (<em>d</em>) и отделить его от первых трёх, задав ему значение <code>auto</code> для <code>margin-left</code>. Авто-margin заполнит всё доступное свободное место по своей оси. Тем же образом работает <code>margin-right</code>. Оба свойства со значениями <code>auto</code> отцентрируют блок, так как каждый из отступов будет пытаться занять максимум пространства.</p>

<p>В интерактивном примере ниже у нас имеется простой ряд из флекс-элементов и класс <code>push</code> с заданным <code>margin-left: auto</code>. Вы можете, например, попробовать удалить это значение или добавить класс другому элементу, чтобы увидеть, как работает этот метод. </p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}} </p>

<h2 id="Будущие_функции_выравнивания_для_Flexbox">Будущие функции выравнивания для Flexbox</h2>

<p>В начале этой статьи объясняется, что свойства выравнивания, которые в настоящее время содержатся в спецификации Flexbox Level 1, также включены в спецификацию Box Alignment Level 3, которая в дальнейшем может расширить эти свойства и значения. Мы уже видели, как это произошло с введением значения <code>space-evenly</code> для свойств <code>align-content</code> и <code>justify-content</code>.</p>

<p>Выравнивание во Flexbox также включает в себя другие методы создания пространства между элементами, такие как <code>column-gap</code> and <code>row-gap</code>, как показано в макете <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a>. Включение этих свойств в Box Alignment означает, что в будущем мы также сможем использовать <code>column-gap</code> и <code>row-gap</code> во Flexbox разметке. Это означает, что вам не нужно будет использовать отступы, чтобы создать пространство между элементами.</p>

<p>Моё предложение заключается в том, чтобы при изучении выравнивания во Flexbox, делать это параллельно с выравниванием в Grid Layout. В обеих спецификациях используются свойства выравнивания, подобные Flexbox. Вы можете видеть, как эти свойства ведут себя при работе с сеткой в статье <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box Alignment in Grid Layout</a>, а также рассмотреть как выравнивание работает в этих спецификациях в статье <a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box Alignment Cheatsheet</a>.</p>

<p>Смотрите Также</p>

<ul>
 <li>Выравнивание Коробки</li>
 <li>Выравнивание Коробки в Flexbox (Гибкая Коробка)</li>
 <li>Выравнивание Коробки в Grid Layout (Макет Сетки)</li>
</ul>
