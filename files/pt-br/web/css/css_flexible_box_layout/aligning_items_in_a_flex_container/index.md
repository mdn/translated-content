---
title: Aligning Items in a Flex Container
slug: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
---
<p>{{CSSRef}}</p>

<p class="summary">Uma das razões pela qual flexbox rapidamente despertou interesse dos desenvolvedores web é que ela trouxe capacidade de alinhamento apropriada para web pela primeira vez. Tem capacidade de alinhamento vertical apropriada, e assim finalmente podemos de modo fácil centralizar uma caixa. Neste guia, veremos detalhadamente como as propriedades de alinhamento e justificação funcionam no Flexbox.</p>

<p>Para centralizar nossa caixa nós usamos a propriedade <code>align-items</code> para alinhar nosso item no eixo transversal, que neste caso é o eixo do bloco indo verticalmente. Nós usamos <code>justify-content</code> para alinhar o item no eixo principal, que neste caso é o eixo indo horizontalmente.</p>

<p><img alt="A containing element with another box centered inside it." src="https://mdn.mozillademos.org/files/15627/align1.png" style="display: block; height: 357px; margin: 0px auto; width: 616px;"></p>

<p>Você pode dar uma olhada no código deste exemplo abaixo. Altere o tamanho do container ou elemento aninhado e o elemento aninhado sempre permanece centralizado.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}</p>

<h2 id="Propriedades_que_controlam_o_alinhamento">Propriedades que controlam o alinhamento</h2>

<p>As propriedades que nós veremos neste guia são as seguintes.</p>

<ul>
 <li>{{cssxref("justify-content")}} — controla o alinhamento de todos os itens no eixo principal.</li>
 <li>{{cssxref("align-items")}} — controla o alinhamento de todos os itens no eixo transversal.</li>
 <li>{{cssxref("align-self")}} — controla o alinhamento individual de um item no eixo transversal.</li>
 <li>{{cssxref("align-content")}} — descrito na especificação como “packing flex lines”; controla o espaço entre as linhas no eixo transversal.</li>
</ul>

<p>Nós também descobriremos como margens automáticas podem ser utilizadas para o alinhamento no flexbox.</p>

<div class="note">
<p><strong>Note</strong>: The alignment properties in Flexbox have been placed into their own specification — <a href="https://www.w3.org/TR/css-align-3/">CSS Box Alignment Level 3</a>. It is expected that this spec will ultimately supersede the properties as defined in Flexbox Level One.</p>
</div>

<h2 id="The_Cross_Axis">The Cross Axis</h2>

<p>As propriedades <code>align-items</code> e <code>align-self</code> controlam o alinhamento dos nossos itens no eixo transversal, em colunas se <code>flex-direction</code> é <code>row</code> e entre linhas se <code>flex-direction</code> é <code>column</code>.</p>

<p>Nós estamos usando o alinhamento transversal na maioria dos exemplos. Se adicionarmos <code>display: flex</code> para um contêiner, todos os itens filhos se tornam itens flexíveis organizados em uma linha. Todos irão se esticar para serem tão altos quanto o item mais alto, pois este item define a altura dos itens no eixo transversal. Se o seu contêiner possui uma altura definida, então os itens se estenderão para esta altura, independemente da quantidade de conteúdo que está dentro deste item.</p>

<p><img alt="Three items, one with additional text causing it to be taller than the others." src="https://mdn.mozillademos.org/files/15628/align2.png" style="display: block; height: 131px; margin: 0px auto; width: 509px;"></p>

<p><img alt="Three items stretched to 200 pixels tall" src="https://mdn.mozillademos.org/files/15629/align3.png" style="display: block; height: 207px; margin: 0px auto; width: 637px;"></p>

<p>A razão pela qual os itens passam a ter a mesma altura é que o valor inicial do <code>align-items</code>, a propriedade que controla o alinhamento do eixo transversal, está definida como <code>stretch</code>.</p>

<p>Nós podemos usar outros valores para controlar como os itens se alinham:</p>

<ul>
 <li><code>align-items: flex-start</code></li>
 <li><code>align-items: flex-end</code></li>
 <li><code>align-items: center</code></li>
 <li><code>align-items: stretch</code></li>
 <li><code>align-items: baseline</code></li>
</ul>

<p>No exemplo abaixo, o valor do <code>align-items</code> está definido como <code>stretch</code>. Tente outros valores e veja como todos os itens se alinham no contêiner.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-items.html", '100%', 520)}} </p>

<h3 id="Alinhando_um_item_com_align-self">Alinhando um item com <code>align-self</code></h3>

<p>A propriedade <code>align-items</code> adiciona a propriedade <code>align-self</code> em todos os itens flex como um grupo. Ou seja, você pode explicitamente declarar a propriedade <code>align-self</code> para impactar um único item. A propriedade <code>align-self</code> aceita todos os mesmo valores que <code>align-items</code> mais o valor <code>auto</code>, que irá resetar o valor que está configurado no container flex.</p>

<p>Neste próximo exemplo, o container flex possui <code>align-items: flex-start</code>, que implica em todos os itens estarem alinhados ao início do eixo transversal. Foquei no primeiro item usando o seletor <code>first-child</code> e configurei este item para <code>align-self: stretch</code>; outro item foi selecionado usando a classe <code>selected</code> e <code>align-self: center</code>. Você pode mudar o valor do <code>align-items</code> ou mudar o valor do <code>align-self</code> para focar em itens individuais para ver como funciona.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self.html", '100%', 650)}}</p>

<h3 id="Changing_the_main_axis">Changing the main axis</h3>

<p>So far we have looked at the behaviour when our <code>flex-direction</code> is <code>row</code>, and while working in a language written top to bottom. This means that the main axis runs along the row horizontally, and our cross axis alignment moves the items up and down.</p>

<p><img alt="Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the vertical axis." src="https://mdn.mozillademos.org/files/15630/align4.png" style="display: block; height: 204px; margin: 0px auto; width: 671px;"></p>

<p>If we change our <code>flex-direction</code> to column, <code>align-items</code> and <code>align-self</code> will align the items to the left and right.</p>

<p><img alt="Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the horizontal axis." src="https://mdn.mozillademos.org/files/15631/align5.png" style="display: block; height: 239px; margin: 0px auto; width: 687px;"></p>

<p>You can try this out in the example below, which has a flex container with <code>flex-direction: column</code> yet otherwise is exactly the same as the previous example.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-self-column.html", '100%', 730)}} </p>

<h2 id="Aligning_content_on_the_cross_axis_—_the_align-content_property">Aligning content on the cross axis — the align-content property</h2>

<p>So far we have been aligning the items, or an individual item inside the area defined by the flex-container. If you have a wrapped multiple-line flex container then you might also want to use the <code>align-content</code> property to control the distribution of space between the rows. In the specification this is described as <a href="https://drafts.csswg.org/css-flexbox/#align-content-property">packing flex lines</a>.</p>

<p>For <code>align-content</code> to work you need more height in your flex container than is required to display the items. It then works on all the items as a set, and dictates what happens with that free space, and the alignment of the entire set of items within it.</p>

<p>The <code>align-content</code> property takes the following values:</p>

<ul>
 <li><code>align-content: flex-start</code></li>
 <li><code>align-content: flex-end</code></li>
 <li><code>align-content: center</code></li>
 <li><code>align-content: space-between</code></li>
 <li><code>align-content: space-around</code></li>
 <li><code>align-content: stretch</code></li>
 <li><code>align-content: space-evenly</code> (not defined in the Flexbox specification)</li>
</ul>

<p>In the live example below, the flex container has a height of 400 pixels, which is more than needed to display our items. The value of <code>align-content</code> is <code>space-between</code>, which means that the available space is shared out <em>between</em> the flex lines, which are placed flush with the start and end of the container on the cross axis.</p>

<p>Try out the other values to see how the <code>align-content</code> property works.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content.html", '100%', 850)}} </p>

<p>Once again we can switch our <code>flex-direction</code> to <code>column</code> in order to see how this property behaves when we are working by column. As before, we need enough space in the cross axis to have some free space after displaying all of the items.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/align-content-column.html", '100%', 860)}} </p>

<div class="note">
<p><strong>Note</strong>: the value <code>space-evenly</code> is not defined in the flexbox specification and is a later addition to the Box Alignment specification. Browser support for this value is not as good as that of the values defined in the flexbox spec.</p>
</div>

<p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">documentation for <code>justify-content</code> on MDN</a> for more details on all of these values and browser support.</p>

<h2 id="Aligning_content_on_the_main_axis">Aligning content on the main axis</h2>

<p>Now that we have seen how alignment works on the cross axis, we can take a look at the main axis. Here we only have one property available to us — <code>justify-content</code>. This is because we are only dealing with items as a group on the main axis. With <code>justify-content</code> we control what happens with available space, should there be more space than is needed to display the items.</p>

<p>In our initial example with <code>display: flex</code> on the container, the items display as a row and all line up at the start of the container. This is due to the initial value of <code>justify-content</code> being <code>flex-start</code>. Any available space is placed at the end of the items.</p>

<p><img alt="Three items, each 100 pixels wide in a 500 pixel container. The available space is at the end of the items." src="https://mdn.mozillademos.org/files/15632/align6.png" style="display: block; height: 198px; margin: 0px auto; width: 528px;"></p>

<p>The <code>justify-content</code> property accepts the same values as <code>align-content</code>.</p>

<ul>
 <li><code>justify-content: flex-start</code></li>
 <li><code>justify-content: flex-end</code></li>
 <li><code>justify-content: center</code></li>
 <li><code>justify-content: space-between</code></li>
 <li><code>justify-content: space-around</code></li>
 <li><code>justify-content: stretch</code></li>
 <li><code>justify-content: space-evenly</code> (not defined in the Flexbox specification)</li>
</ul>

<p>In the example below, the value of <code>justify-content</code> is <code>space-between</code>. The available space after displaying the items is distributed between the items. The left and right item line up flush with the start and end.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content.html", '100%', 480)}} </p>

<p>If the main axis is in the block direction because <code>flex-direction</code> is set to <code>column</code>, then <code>justify-content</code> will distribute space between items in that dimension as long as there is space in the flex container to distribute.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-column.html", '100%', 880)}} </p>

<h3 id="Alignment_and_Writing_Modes">Alignment and Writing Modes</h3>

<p>Remember that with all of these alignment methods, the values of <code>flex-start</code> and <code>flex-end</code> are writing mode-aware. If the value of <code>justify-content</code> is <code>start</code> and the writing mode is left-to-right as in English, the items will line up starting at the left side of the container.</p>

<p><img alt="Three items lined up on the left" src="https://mdn.mozillademos.org/files/15638/Basics5.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>However if the writing mode is right-to-left as in Arabic, the items will line up starting at the right side of the container.</p>

<p><img alt="Three items lined up from the right" src="https://mdn.mozillademos.org/files/15639/Basics6.png" style="display: block; height: 152px; margin: 0px auto; width: 634px;"></p>

<p>The live example below has the <code>direction</code> property set to <code>rtl</code> to force a right-to-left flow for our items. You can remove this, or change the values of <code>justify-content</code> to see how flexbox behaves when the start of the inline direction is on the right.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-writing-mode.html", '100%', 440)}} </p>

<h2 id="Alignment_and_flex-direction">Alignment and flex-direction</h2>

<p>The start line will also change if you change the <code>flex-direction</code> property — for example using <code>row-reverse</code> instead of <code>row</code>.</p>

<p>In this next example I have items laid out with <code>flex-direction: row-reverse</code> and <code>justify-content: flex-end</code>. In a left to right language the items all line up on the left. Try changing <code>flex-direction: row-reverse</code> to <code>flex-direction: row</code>. You will see that the items now move to the right hand side.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/justify-content-reverse.html", '100%', 440)}} </p>

<p>While this may all seem a little confusing, the rule to remember is that unless you do something to change it, flex items lay themselves out in the direction that words are laid out in the language of your document along the inline, row axis. <code>flex-start</code> will be where the start of a sentence of text would begin.</p>

<p><img alt="Diagram showing start on the left and end on the right." src="https://mdn.mozillademos.org/files/15634/align8.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p>You can switch them to display in the block direction for the language of your document by selecting <code>flex-direction: column</code>. Then <code>flex-start</code> will then be where the top of your first paragraph of text would start.</p>

<p><img alt="Diagram showing start at the top and end at the bottom." src="https://mdn.mozillademos.org/files/15636/align10.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<p>If you change flex-direction to one of the reverse values, then they will lay themselves out from the end axis and in the reverse order to the way words are written in the language of your document. <code>flex-start</code> will then change to the end of that axis — so to the location where your lines would wrap if working in rows, or at the end of your last paragraph of text in the block direction.</p>

<p><img alt="Diagram showing start on the right and end on the left." src="https://mdn.mozillademos.org/files/15635/align9.png" style="display: block; height: 152px; margin: 0px auto; width: 631px;"></p>

<p><img alt="Diagram showing end at the top and start at the bottom" src="https://mdn.mozillademos.org/files/15637/align11.png" style="display: block; height: 273px; margin: 0px auto; width: 709px;"></p>

<h2 id="Using_auto_margins_for_main_axis_alignment">Using auto margins for main axis alignment</h2>

<p>We don’t have a <code>justify-items</code> or <code>justify-self</code> property available to us on the main axis as our items are treated as a group on that axis. However it is possible to do some individual alignment in order to separate an item or a group of items from others by using auto margins along with flexbox.</p>

<p>A common pattern is a navigation bar where some key items are aligned to the right, with the main group on the left. You might think that this should be a use case for a <code>justify-self</code> property, however consider the image below. I have three items on one side and two on the other. If I were able to use <code>justify-self</code> on item <em>d</em>, it would also change the alignment of item <em>e</em> that follows, which may or may not be my intention.</p>

<p><img alt="Five items, in two groups. Three on the left and two on the right." src="https://mdn.mozillademos.org/files/15633/align7.png" style="display: block; height: 84px; margin: 0px auto; width: 645px;"></p>

<p>Instead we can target item 4 and separate it from the first three items by giving it a <code>margin-left</code> value of <code>auto</code>. Auto margins will take up all of the space that they can in their axis — it is how centering a block with margin auto left and right works. Each side tries to take as much space as it can, and so the block is pushed into the middle.</p>

<p>In this live example, I have flex items arranged simply into a row with the basic flex values, and the class <code>push</code> has <code>margin-left: auto</code>. You can try removing this, or adding the class to another item to see how it works.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/auto-margins.html", '100%', 470)}} </p>

<h2 id="Future_alignment_features_for_Flexbox">Future alignment features for Flexbox</h2>

<p>At the beginning of this article I explained that the alignment properties currently contained in the Level 1 flexbox specification are also included in Box Alignment Level 3, which may well extend these properties and values in the future. We have already seen one place where this has happened, with the introduction of the <code>space-evenly</code> value for <code>align-content</code> and <code>justify-content</code> properties.</p>

<p>The Box Alignment module also includes other methods of creating space between items, such as the <code>column-gap</code> and <code>row-gap</code> feature as seen in <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a>. The inclusion of these properties in Box Alignment means that in future we should be able to use <code>column-gap</code> and <code>row-gap</code> in flex layouts too, and in Firefox 63 you will find the first browser implementation of the gap properties in flex layout.</p>

<p>My suggestion when exploring flexbox alignment in depth is to do so alongside looking at alignment in Grid Layout. Both specifications use the alignment properties as detailed in the Box Alignment specification. You can see how these properties behave when working with a grid in the MDN article <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box Alignment in Grid Layout</a>, and I have also compared how alignment works in these specifications in my <a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box Alignment Cheatsheet</a>.</p>

<h2 id="See_Also">See Also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">Box Alignment in Flexbox</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout">Box Alignment in Grid Layout</a></li>
</ul>
