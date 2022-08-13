---
title: Выравнивание полей CSS
slug: Web/CSS/CSS_Box_Alignment
translation_of: Web/CSS/CSS_Box_Alignment
---
<div>{{CSSRef}}</div>

<p class="summary">Модуль CSS Box Alignment определяет CSS-функции, которые относятся к выравниванию ящиков в различных моделях макета CSS: макет блока, макет таблицы, гибкая макет и макет сетки. Модуль нацелен на создание согласованного метода выравнивания по всем CSS. В этом документе описываются общие понятия, содержащиеся в спецификации.</p>

<div class="note">
<p><strong>Примечание</strong>: Документация для каждого метода макета будет подробно описана, как там применяется шкала выравнивания.</p>
</div>

<h2 id="Старые_методы_выравнивания">Старые методы выравнивания</h2>

<p>У CSS традиционно были очень ограниченные возможности выравнивания. Мы могли выровнять текст, используя {{cssxref("text-align")}}, центральные блоки, используя auto {{cssxref("margin")}}s, а в макетах таблицы или встроенного блока, используя {{cssxref("vertical-align")}} свойство. Выравнивание текста теперь покрывается модулями <a href="https://www.w3.org/TR/css-inline-3/">Inline Layout</a> и <a href="https://www.w3.org/TR/css-text-3/">CSS Text</a>, и впервые в Box Alignment мы имеем полные возможности горизонтального и вертикального выравнивания.</p>

<p>Если вы изначально узнали <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>, вы можете считать эти свойства частью спецификации Flexbox и некоторые из свойств действительно перечислены в Level 1 Flexbox. Однако в спецификации отмечается, что спецификация Box Alignment должна рассматриваться, поскольку она может добавить дополнительные возможности по сравнению с тем, что в настоящее время находится в Flexbox.</p>

<h2 id="Основные_примеры">Основные примеры</h2>

<p>Следующие примеры демонстрируют, как некоторые из Box Alignment Properties применяются в <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">Grid</a> and <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>.</p>

<h3 id="Пример_выравнивания_раскладки_сетки_CSS">Пример выравнивания раскладки сетки CSS</h3>

<p>В этом примере с использованием Grid Layout, в контейнере сетки есть дополнительное пространство после прокладки фиксированных дорожек ширины на основной оси. Это пространство распределяется с помощью {{cssxref("justify-content")}}. На блочной (поперечной) оси выравнивание элементов внутри их областей сетки контролируется с помощью {{cssxref("align-items")}}. Первый элемент переопределяет значение элементов выравнивания, заданное в группе, путём установки {{cssxref("align-self")}} в центр.</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}</p>

<h3 id="Пример_выравнивания_Flexbox">Пример выравнивания Flexbox</h3>

<p>В этом примере три элемента гибкости выровнены по главной оси с использованием <code>justify-content</code> и на поперечной оси с использованием <code>align-items</code>. Первый элемент переопределяет <code>align-items</code>, заданные в группе <code>align-self</code> по <code>center</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}</p>

<h2 id="Ключевые_понятия_и_терминология">Ключевые понятия и терминология</h2>

<p>Спецификация описывает некоторую терминологию выравнивания, чтобы упростить обсуждение этих свойств выравнивания вне их реализации в рамках конкретного метода компоновки. Существуют также некоторые ключевые концепции, которые являются общими для всех методов макета.</p>

<h3 id="Связь_с_режимами_записи">Связь с режимами записи</h3>

<p>Выравнивание связано с режимами записи, когда мы выравниваем элемент, который мы не рассматриваем, если мы сопоставляем его с физическими размерами сверху, справа, снизу и слева. Вместо этого мы описываем выравнивание с точки зрения начала и конца конкретного измерения, с которым мы работаем. Это гарантирует, что выравнивание работает так же, как в режиме записи, который имеет документ.</p>

<h3 id="Два_измерения_выравнивания">Два измерения выравнивания</h3>

<p>При использовании свойств выравнивания ячеек вы выровняете содержимое по одной из двух осей - inline (или main) оси и block (или cross) оси. Внутренняя ось - это ось, по которой используются слова в потоке предложения в режиме записи - для английского языка, например, встроенная ось горизонтальна. Ось блока - это ось, вдоль которой выложены блоки, такие как элементы абзаца, и проходит по оси Inline.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15952/two-axes.png"><img alt="" src="https://mdn.mozillademos.org/files/15952/two-axes.png" style="height: 260px; width: 480px;"></p>

<p>При выравнивании элементов на встроенной оси вы будете использовать свойства, начинающиеся с <code>justify-</code>:</p>

<ul>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("justify-content")}}</li>
</ul>

<p>При выравнивании элементов на оси блока вы будете использовать свойства, которые начинаются с <code>align-</code>:</p>

<ul>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("align-content")}}</li>
</ul>

<p>Flexbox добавляет дополнительное усложнение в том, что указанное выше верно, когда {{cssxref("flex-direction")}} установлено в <code>row</code>. Свойства меняются местами, когда flexbox установлен в <code>column</code>. Поэтому при работе с flexbox легче думать о главной и поперечной оси, а не о линии и блоке. Свойства <code>justify-</code> всегда используются для выравнивания по главной оси, <code>align-</code> на поперечной оси.</p>

<h3 id="The_alignment_subject">The alignment subject</h3>

<p><strong>Объект выравнивания</strong> - это то, что выровнено. Для <code>justify-self</code>, или <code>align-self</code>, или при настройке этих значений как группы с <code>justify-items</code> или <code>align-items</code> это будет поле элемента, в котором используется это свойство. Свойства <code>justify-content</code> и <code>align-content</code> различаются для каждого метода макета.</p>

<h3 id="The_alignment_container">The alignment container</h3>

<p><strong>Контейнер выравнивания</strong> - это поле, в котором объект выравнивается внутри. Обычно это будет блок, содержащий объект выравнивания. Контейнер выравнивания может содержать один или несколько объектов выравнивания.</p>

<p>На приведённом ниже рисунке показан контейнер выравнивания с двумя объектами выравнивания внутри.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15953/align-container-subjects.png" style="height: 170px; width: 248px;"></p>

<h3 id="Fallback_alignment">Fallback alignment</h3>

<p>Если вы установите выравнивание, которое не может быть выполнено, тогда <strong>возвратное выравнивания</strong> вступит в игру и обработает доступное пространство. Это резервное выравнивание указывается отдельно для каждого метода макета и подробно описано на странице для этого метода.</p>

<h2 id="Типы_выравнивания">Типы выравнивания</h2>

<p>Существует три различных типа выравнивания, которые специфицируют детали; они используют значения ключевых слов.</p>

<ul>
 <li><strong>Positional alignment</strong> (выравнивание положения): указание положения объекта выравнивания относительно его контейнера выравнивания.</li>
 <li><strong>Baseline alignment</strong> (исходное выравнивание): эти ключевые слова определяют выравнивание как взаимосвязь между базовыми линиями нескольких объектов выравнивания в контексте выравнивания.</li>
 <li><strong>Distributed alignment</strong> (распределённое выравнивание): эти ключевые слова определяют выравнивание как распределение пространства между объектами выравнивания.</li>
</ul>

<h3 id="Значения_ключевых_слов_позиционирования">Значения ключевых слов позиционирования</h3>

<p>Следующие значения определены для позиционного выравнивания и могут использоваться в качестве значений для выравнивания содержимого с <code>justify-content</code> и <code>align-content</code>, а также для самовыравнивания с <code>justify-self</code> и <code>align-self</code>.</p>

<ul>
 <li><code>center</code></li>
 <li><code>start</code></li>
 <li><code>end</code></li>
 <li><code>self-start</code></li>
 <li><code>self-end</code></li>
 <li><code>flex-start</code> for Flexbox only</li>
 <li><code>flex-end</code> for Flexbox only</li>
 <li><code>left</code></li>
 <li><code>right</code></li>
</ul>

<p>Помимо физических значений <code>left</code> и <code>right</code>, которые относятся к физическим атрибутам экрана, все остальные значения являются логическими значениями и относятся к режиму записи содержимого.</p>

<p>Например, при работе в CSS Grid Layout, если вы работаете на русском языке и устанавливаете для него значение <code>justify-content</code> <code>start</code>, это приведёт к перемещению элементов в встроенном измерении в начало, которое будет левым, поскольку предложения на русском начинаются слева. Если вы использовали арабский язык, право на левый язык, то одно и то же значение <code>start</code> приведёт к тому, что элементы перемещаются вправо, так как предложения на арабском языке начинаются с правой стороны страницы.</p>

<p>Оба этих примера имеют <code>justify-content: start</code>, однако местоположение начала изменяется в соответствии с режимом записи.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15956/writing-mode-start.png" style="height: 101px; width: 478px;"></p>

<h3 id="Исходное_выравнивание">Исходное выравнивание</h3>

<p>Ключевые слова выравнивания базовой линии используются для выравнивания базовых линий ящиков по группе субъектов выравнивания. Они могут использоваться в качестве значений для выравнивания контента с помощью <code>justify-content</code> и <code>align-content</code>, а также для самовыравнивания с <code>justify-self</code> и <code>align-self</code>.</p>

<ul>
 <li><code>baseline</code></li>
 <li><code>first baseline</code></li>
 <li><code>last baseline</code></li>
</ul>

<p>Исходное выравнивание содержимого - указание значения выравнивания базовой линии для <code>justify-content</code> или <code>align-content</code> - работает в методах макета, которые содержат элементы в строках. Объекты выравнивания выравниваются по базовой линии друг к другу, добавляя в них поля.</p>

<p>Исходная линия выравнивания сдвигает поля для выравнивания по базовой линии путём добавления поля за пределами полей. Self alignment - это использование <code>justify-self</code> или <code>align-self</code> или при настройке этих значений в виде группы с <code>justify-items</code> и <code>align-items</code>.</p>

<h3 id="Distributed_alignment">Distributed alignment</h3>

<p><strong>Ключевые слова распределённого выравнивания</strong> используются с параметрами <code>align-content</code> и <code>justify-content</code>. Эти ключевые слова определяют, что происходит с каким-либо дополнительным пространством после отображения объекта. Значения следующие:</p>

<ul>
 <li><code>stretch</code></li>
 <li><code>space-between</code></li>
 <li><code>space-around</code></li>
 <li><code>space-evenly</code></li>
</ul>

<p>Например, элементы Flex Layout сначала выровнены с использованием <code>flex-start.</code> Работая в горизонтальном верхнем и нижнем режимах записи, таком как русский, с <code>flex-direction</code> в виде <code>row</code> элементы начинаются в крайнем левом углу и любое свободное место после отображения элементов помещается после элементов.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15954/justify-content-start.png" style="height: 100px; width: 559px;"></p>

<p>Если вы устанавливаете <code>justify-content: space-between</code> в контейнере flex, доступное пространство теперь разделяется и помещается между элементами.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15955/justify-content-space-between.png" style="height: 100px; width: 559px;"></p>

<p>Для того, чтобы эти ключевые слова вступили в силу, должно быть доступно пространство в измерении, для которого вы хотите выровнять элементы. Без места, нечего распространять.</p>

<h2 id="Выравнивание_переполнения">Выравнивание переполнения</h2>

<p><code>safe</code> и <code>unsafe</code> ключевые слова помогают определить поведение, когда объект выравнивания больше, чем контейнер выравнивания. Ключевое слово <code>safe</code> будет выравниваться для <code>start</code> в случае заданного выравнивания, вызывающего переполнение, целью которого является избежать «потери данных», когда часть элемента находится за пределами границ контейнера выравнивания и не может быть прокручена до.</p>

<p>Если вы укажете <code>unsafe</code>, выравнивание будет выполнено, даже если это приведёт к такой потере данных.</p>

<h2 id="Пробелы_между_boxes">Пробелы между boxes</h2>

<p>Спецификация выравнивания коробки также включает свойства <code>gap</code>, <code>row-gap</code> и <code>column-gap</code> . Эти свойства позволяют установить постоянный разрыв между элементами в строке или столбце в любом методе макета, который имеет элементы, расположенные таким образом.</p>

<p>Свойство <code>gap</code> является сокращением для <code>row-gap</code> и <code>column-gap</code>, что позволяет сразу установить эти свойства:</p>

<ul>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<p>В приведённом ниже примере макет сетки использует сокращённую <code>gap</code>, чтобы установить разрыв <code>10px</code> между дорожками строк и <code>2em</code> разрыв между дорожками столбцов.</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 500)}}</p>

<p>В этом примере я использую свойство {{cssxref("grid-gap")}} в дополнение к {{cssxref("gap")}}. Первоначальные свойства зазора были предварительно префиксными <code>grid-</code> в спецификации Grid Layout, а некоторые браузеры поддерживают только эти префиксные версии.</p>

<ul>
 <li>{{cssxref("grid-row-gap")}}</li>
 <li>{{cssxref("grid-column-gap")}}</li>
 <li>{{cssxref("grid-gap")}}</li>
</ul>

<p>Префиксные версии будут поддерживаться как псевдоним неподписанных, однако вы всегда можете удвоить так, как это было бы с префиксами поставщика, добавив свойство <code>grid-gap</code>, а затем свойство <code>gap</code> с теми же значениями.</p>

<p>Кроме того, имейте в виду, что другие вещи могут увеличить визуальный промежуток, отображаемый, например, используя ключевые слова распределения пространства или добавляя поля к элементам.</p>

<h2 id="Страницы_детализирующие_индивидуальные_свойства_выравнивания">Страницы, детализирующие индивидуальные свойства выравнивания</h2>

<p>Поскольку свойства выравнивания полей CSS реализованы по-разному в зависимости от спецификации, с которой они взаимодействуют, обратитесь к следующим страницам для каждого типа макета для получения подробных сведений о том, как использовать с ним свойства выравнивания:</p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">Box alignment in Flexbox</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout">Box alignment in CSS Grid Layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Multi-column_Layout">Box alignment in multiple-column layout</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables">Box alignment for block, absolutely positioned and table layout</a></li>
</ul>

<h2 id="Справка">Справка</h2>

<h3 id="CSS_Properties">CSS Properties</h3>

<div class="index">
<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("place-content")}}</li>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("place-items")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("place-self")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>
</div>

<h3 id="Glossary_Entries">Glossary Entries</h3>

<div class="index">
<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis">Cross axis</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis">Main axis</a></li>
 <li><a href="/en-US/docs/Glossary/Alignment_Container">Alignment container</a></li>
 <li><a href="/en-US/docs/Glossary/Alignment_Subject">Alignment subject</a></li>
 <li><a href="/en-US/docs/Glossary/Fallback_Alignment">Fallback alignment</a></li>
</ul>
</div>

<h2 id="Guides">Guides</h2>

<ul>
 <li>CSS Flexbox guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic concepts of Flexbox</a></em></li>
 <li>CSS Flexbox guide: <em><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Aligning items in a flex container</a></em></li>
 <li>CSS Grid guide: <em><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in CSS Grid layouts</a></em></li>
</ul>

<h2 id="External_Resources">External Resources</h2>

<ul>
 <li><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box alignment cheatsheet</a></li>
 <li><a href="https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/">CSS Grid, Flexbox and Box alignment</a></li>
 <li><a href="https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/">Thoughts on partial implementations of Box alignment</a></li>
</ul>
