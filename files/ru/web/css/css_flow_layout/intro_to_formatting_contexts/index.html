---
title: Введение в контексты форматирования
slug: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
translation_of: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
original_slug: Web/CSS/CSS_Flow_Layout/Введение_в_контексты_форматирования
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">В этой статье представлена концепция контекстов форматирования (formatting context). Существует несколько типов контекстов форматирования, например, блочный контекст форматирования (block formatting context, BFC), строчный контекст форматирования (inline formatting context), флексовый контекст форматирования (flex formatting context). В статье даны основы того, как они себя ведут, и как вы можете использовать это поведение.</span></p>

<p>Всё на странице является частью <strong>контекста форматирования</strong> (formatting context), который представляет собой область, в которой происходит раскладка контента по определённым правилам. <strong>Блочный контекст форматирования</strong> (block formatting context, BFC) делает раскладку своих дочерних элементов в соответствии с правилами блочной раскладки, <strong>флексовый контекст форматирования</strong> (flex formatting context) раскладывает свои дочерние элементы как {{Glossary("flex item", "флекс-элементы")}} и т.д. Каждый контекст форматирования использует свои правила раскладки.</p>

<h2 id="Блочные_контексты_форматирования">Блочные контексты форматирования</h2>

<p>Самый внешний элемент в документе, который использует правила блочной раскладки, устанавливает первый или <strong>начальный блочный контекст форматирования</strong> (initial block formatting context). Это означает, что все элементы внутри элемента <code>&lt;html&gt;</code> раскладываются в соответствии с нормальным потоком, следуя правилам блочной и строчной раскладки. Элементы, участвующие в <abbr title="Блочный контекст форматирования">БКФ</abbr>, используют правила, описанные в модели бокса (CSS Box Model), которая определяет, как поля (margins), границы (borders) и отступы (paddings) элемента взаимодействуют с другими блоками в том же контексте.</p>

<h3 id="Создание_нового_блочного_контекста_форматирования">Создание нового блочного контекста форматирования</h3>

<p>Элемент {{HTMLElement("html")}} не единственный, кто может создавать блочный контекст форматирования. Любой элемент, который по умолчанию представляет собой блок, также создаёт блочный контекст форматирования для своих потомков. Кроме того, существуют свойства CSS, которые могут заставить элемент создавать БКФ, даже если он не делает этого по умолчанию. Это может быть полезным поскольку новый БКФ будет вести себя во многом как внешний документа, в том смысле, что он создаёт новую мини-раскладку в основной раскладке. БКФ содержит все внутри себя, {{cssxref("float")}} and {{cssxref("clear")}} применяются только к элементам, которые находится в том же контексте форматирования, также как и поля (margings) схлопываются только между элементами одного и того же контекста форматирования.</p>

<p>Кроме корневого элемента ({{HTMLElement("html")}}) новый БКФ создаётся в следующих случаях:</p>

<ul>
 <li>плавающие элементы ({{cssxref("float", "float: left", "#left")}} или {{cssxref("float", "float: right", "#right")}});</li>
 <li>абсолютно позиционированные элементы ({{cssxref("position", "position: absolute", "#absolute")}}, {{cssxref("position", "position: fixed", "#fixed")}} или {{cssxref("position", "position: sticky", "#sticky")}});</li>
 <li>элементы с {{cssxref("display", "display: inline-block", "#inline-block")}};</li>
 <li>ячейки табицы или элементы с <code>display: table-cell</code>, включая анонимные ячейки таблицы, которые создаются, когда используются свойства <code>display: table-*</code>;</li>
 <li>заголовки таблицы или элементы с <code>display: table-caption</code>;</li>
 <li>блочные элементы, когда значение свойства overflow отлично от <code>visible</code>;</li>
 <li>элементы с <code>display: flow-root</code> или <code>display: flow-root list-item</code>;</li>
 <li>элементы с {{cssxref("contain", "contain: layout", "#layout")}}, <code>content</code>, или <code>strict</code></li>
 <li>{{Glossary("flex item", "флекс-элементы")}};</li>
 <li>грид-элементы;</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">контейнеры мультиколонок</a>;</li>
 <li>элементы с {{cssxref("column-span")}} в значении <code>all</code>.</li>
</ul>



<p>Let's have a look at a couple of these in order to see the effect creating a new <abbr title="Block Formatting Context">BFC</abbr>.</p>

<p>In the example below, we have a floated element inside a <code>&lt;div&gt;</code> with a border applied. The content of that <code>div</code> has floated alongside the floated element. As the content of the float is taller than the content alongside it, the border of the div now runs through the float. As explained in the <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow">guide to in-flow and out of flow elements</a>, the float has been taken out of flow so the background and border of the div only contain the content and not the float.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}</p>

<p>Creating a new <abbr title="Block Formatting Context">BFC</abbr> would contain the float. A typical way to do this in the past has been to set <code>overflow: auto</code> or set other values than the initial value of <code>overflow: visible</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}</p>

<p>Setting  <code>overflow: auto</code> created a new <abbr title="Block Formatting Context">BFC</abbr> containing the float. Our <code>div</code> now becomes a mini-layout inside our layout. Any child element will be contained inside it.</p>

<p>The problem with using <code>overflow</code> to create a new <abbr title="Block Formatting Context">BFC</abbr> is that the <code>overflow</code> property is meant for telling the browser how you wish to deal with overflowing content. There are some occasions in which you will find you get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC. In addition, it is potentially not very readable for a future developer, as it may not be obvious why you used overflow for this purpose. If you do this, it would be a good idea to comment the code to explain.</p>

<h3 id="Explicitly_creating_a_BFC_using_display_flow-root">Explicitly creating a BFC using display: flow-root</h3>

<p>Using <code>display: flow-root</code> (or <code>display: flow-root list-item)</code> on the containing block will create a new <abbr title="Block Formatting Context">BFC</abbr> without any other potentially problematic side-effects.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}</p>

<p>With <code>display: flow-root</code> on the {{HTMLElement("div")}}, everything inside that container participates in the block formatting context of that container, and floats will not poke out of the bottom of the element.</p>

<p>The name of the <code>flow-root</code> keyword refers to the fact that you're creating something that serves, in essence, like a new root element (like {{HTMLElement("html")}} does), given how the new context is created and its flow layout functions.</p>

<h2 id="Inline_formatting_contexts">Inline formatting contexts</h2>

<p>Inline formatting contexts exist inside other formatting contexts and can be thought of as the context of a paragraph. The paragraph creates an inline formatting context inside which such things as {{HTMLElement("strong")}}, {{HTMLElement("a")}}, or {{HTMLElement("span")}} elements are used on text.</p>

<p>The box model does not fully apply to items participating in an inline formatting context. In a horizontal writing mode line, horizontal padding, borders and margin will be applied to the element and push the text away left and right. However, margins above and below the element will not be applied. Vertical padding and borders will be applied but may  overlap content above and below as, in the inline formatting context, the line boxes will not be pushed apart by padding and borders.</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}</p>

<h2 id="Other_formatting_contexts">Other formatting contexts</h2>

<p>This guide covers flow layout and is therefore not referring to other possible formatting contexts. As such, it is useful to understand that creating any kind of formatting context will change the way elements inside that formatting context behave. This behavior is always described in the specification and also here on MDN.</p>

<h2 id="Summary">Summary</h2>

<p>In this guide, we have looked in more detail at the block and Inline formatting contexts and the important subject of creating a block formatting context (<abbr title="Block Formatting Context">BFC</abbr>). In the next guide, we will find out <a href="/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes">how normal flow interacts with different writing modes</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/CSS/Block_formatting_context">Block formatting context</a></li>
 <li><a href="/en-US/docs/Web/CSS/Visual_formatting_model">Visual Formatting Model</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Model">CSS Box Model</a></li>
</ul>
