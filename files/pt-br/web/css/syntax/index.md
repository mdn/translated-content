---
title: Sintaxe
slug: Web/CSS/Syntax
translation_of: Web/CSS/Syntax
original_slug: Web/CSS/sintaxe
---
<p>O Objetivo básico da linguagem de folhas de estilo em cascata (<a href="/en/CSS" title="CSS">CSS</a>) é permitir que um motor do navegador pinte elementos na página com características específicas como cores, posições, ou decorações. A sintaxe <em>CSS </em>reflete estes objetivos e seus blocos de contrução básicos são:</p>

<ul>
 <li>A <strong>propriedade</strong> é um identificador que possui um nome legível, que define o que será considerado ou editado;</li>
 <li>O <strong>valor</strong> descreve como o recurso será tratado pelo motor. Cada propriedade possui um conjunto de valores válidos, definida por uma gramática formal, bem como um significado semântico, implementado para o motor do navegador.</li>
</ul>

<h2 id="Declarações_do_CSS">Declarações do CSS</h2>

<p>A definição de propriedades CSS para um valor específico é a função principal da linguagem CSS. A propriedade e valor são chamados de <strong>declaração</strong>, e qualquer motor do CSS calcula quais declarações serão aplicadas para todos um único elemento da página em ordem <span id="result_box" lang="pt"><span class="hps">adequadamente</span><span>, a fim de</span> exibí-lo<span class="hps"> </span><span class="hps">com o estilo</span> correto<span class="hps">.</span></span></p>

<p>Tanto as propriedades como os valores são case-sensitive no CSS. Os pares se separam por dois pontos, '<code>:</code>' (<code>U+003A COLON</code>), e espaços em branco antes, entre e depois de propriedades e valores, porém os espaços dentro da declaração são ignorados.</p>

<p><img alt="css syntax - declaration.png" class="default internal" src="/@api/deki/files/6164/=css_syntax_-_declaration.png" style="border: 1px solid black; padding: 1em;"></p>

<p>Existem mais de <a href="https://developer.mozilla.org/en/CSS/CSS_Reference" title="en/CSS/CSS_Reference">100 propriedades diferentes</a> no CSS e um número quase infinito de diferentes valores. Nem todos os pares de propriedades e valores são permitidos em cada propriedade define o que são valores válidos. Quando um valor não é válido para uma determinada propriedade, a declaração é considerada inválida e é totalmente ignorada pelo motor do CSS.</p>

<h2 id="Blocos_de_declaração_CSS">Blocos de declaração CSS</h2>

<p>Declarações são agrupadas em <strong>blocos</strong>, que estão delimitados na estrutura com uma chave de abertura, '<code>{</code>' (<code>U+007B LEFT CURLY BRACKET</code>), e fechadas com outra, '<code>}</code>' (<code>U+007D RIGHT CURLY BRACKET</code>). Os blocos as vezes podem estar aninhados, a abertura e fechamento de chaves no bloco CSS deve ser realizada.</p>

<p><img alt="css syntax - block.png" class="default internal" src="/@api/deki/files/6165/=css_syntax_-_block.png" style="border: 1px solid black; padding: 1em;"></p>

<p>Esses blocos são chamados de <strong>blocos de declaração</strong> e as declarações dentro deles são separadas por, '<code>;</code>' (<code>U+003B SEMICOLON</code>). Um bloco de declaração pode não conter nenhuma declaração. Espaços em branco em volta das declarações não são consideradas. Não é necessário que a última declaração possua ponto e vírgula, apesar de ser considerada uma boa prática pois previne o esquecimento de acrescê-la quando for necessário aumentar o bloco.</p>

<p><img alt="css syntax - declarations block.png" class="default internal" src="/@api/deki/files/6166/=css_syntax_-_declarations_block.png" style="border: 1px solid black; padding: 1em;"></p>

<div class="note">O conteúdo de um bloco de declaração, que é uma lista separada por pontos e vírgulas, sem as chaves, pode ser posto dentro da tag HTML <a href="/en/HTML/Global_attributes#attr-style" title="https://developer.mozilla.org/en/HTML/Global_attributes#attr-style"><code>style</code></a>.</div>

<h2 id="Regras_CSS">Regras CSS</h2>

<p>Se as folhas de estilo pudessem apenas aplicar uma declaração para cada elemento de uma página da web, eles seriam bem limitados. O principal objetivo é aplicar diferentes declarações a diferentes partes do documento.</p>

<p>O CSS associa as condições com os blocos de declaração. Cada bloco (válido) é precedido por um ou mais seletores, separados por vírgula, que são condições selecionando alguns elementos da página. O grupo de seletores é chamado de regra.<img alt="css syntax - ruleset.png" class="default internal" src="/@api/deki/files/6167/=css_syntax_-_ruleset.png" style="border: 1px solid black; padding: 1em;"></p>

<p>Um elemento pode ser modificado por diversos seletores, e por isso por diversas regras que potencialmente podem conter diversas propriedades, com diferentes valores, o CSS padrão define aquele que possui a precedência e que será aplicado: esse é o tal algoritmo em <a href="/pt-BR/docs/Web/CSS/Getting_Started/Cascading_and_inheritance">cascata</a>.</p>

<div class="note">É importante perceber que quando uma regra é caracterizada por um grupo de seletores que são algum tipo de atalho com cada um sendo um simples seletor isso não se aplica a validade da regra por si só.<br>
<br>
Isso leva a uma importante consequência: se apenas um dos seletores for inválido, como usar uma pseudo-classe ou pseudo-elemento desconhecido, todo o <em>seletor</em> é inválido e por isso toda a regra é ignorada (invalidada também).</div>

<h2 id="CSS_statements">CSS statements</h2>

<p>Rulesets are the main building blocks of a style sheet, which often consists of only a big list of them. But there is other information that a Web author wants to convey in the style sheet, like the character set, other external style sheets to import, font face or list counter descriptions and many more. It will use other and specific kinds of statements to do that.</p>

<p>A <strong>statement</strong> is a building block that begins with any non-space characters and ends at the first closing brace or semi-colon (outside a string, non-escaped and not included into another {}, () or [] pair).</p>

<p><img alt="css syntax - statements Venn diag.png" class="default internal" src="/@api/deki/files/6168/=css_syntax_-_statements_Venn_diag.png" style="padding: 1em;"></p>

<p>There are different kinds of statements:</p>

<ul>
 <li><strong>Rulesets</strong> (or <em>rules</em>) that, as seen, associate a collection of CSS declarations to a condition described by a selector.</li>
 <li><strong>At-rules</strong> that start with an at sign, '<code>@</code>' (<code>U+0040 COMMERCIAL AT</code>), followed by an identifier and then continuing up the end of the statement, that is up to the next semi-colon (;) outside of a block, or the end of the next block. Each type of <a href="/en/CSS/At-rule" title="At-rule">at-rules</a>, defined by the identifier, may have its own internal syntax, and semantics of course. They are used to convey meta-data information (like {{ cssxref("@charset") }} or {{ cssxref("@import") }}), conditional information (like {{ cssxref("@media") }} or {{ cssxref("@document") }}), or descriptive information (like {{ cssxref("@font-face") }}).</li>
</ul>

<p>Any statement which isn't a rule or an at-rule is invalid and ignored.</p>

<p><a name="nested_statements">There is another group of statements, the <strong>nested statements</strong>, these are statements that can be used in a specific subset of at-rules, the <em>conditional group rules</em>. These statements only apply if a specific condition is matched: the <code>@media</code> at-rule content is applied only if the device on which runs the browser matches the expressed condition; the <code>@document</code> at-rule content is applied only if the current page matches some conditions, and so on. In CSS1 and CSS2.1, only <em>rulesets</em> could be used inside a conditional group rules. That was very restrictive and this restriction was lifted in </a><a href="/en/CSS/CSS3#Conditionals" title="en/CSS/CSS3#Conditionals"><em>CSS Conditionals Level 3</em></a>. Now, though it still is experimental and not support by every browser, a conditional group rules can contain a wider range of content, rulesets but also some, but not all, at-rules.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ CSS_key_concepts()}}</li>
</ul>
