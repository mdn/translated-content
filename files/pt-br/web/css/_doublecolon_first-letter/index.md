---
title: '::first-letter (:first-letter)'
slug: 'Web/CSS/::first-letter'
translation_of: 'Web/CSS/::first-letter'
---
<p>{{ CSSRef() }}</p>

<h2 id="Sumário">Sumário</h2>

<p>O <code>::first-letter</code> <a href="/en/CSS" title="CSS">CSS</a> <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-elementos" title="Pseudo-elements">pseudo-elemento</a> que seleciona a primeira letra da primeira linha de um bloco, se nçao for procedido por qual outro conteúdo (como imagens ou tableas embutidas/inline table) na mesma linha.</p>

<p>A primeira letra de um elemento não é necessariamente uma identificação trivial:</p>

<ul>
 <li>Pontuação, que é qualquer caractere definido em Unicode de abertura (Ps), de fechamento (Pe), aspa inicial (Pi), aspa final (Pf) e outras pontuações (Po), precedendo ou imediatamente após a primeira letra também é correspondida por esse pseudo-elemento.</li>
 <li>Da mesma forma, alguns idiomas têm dígitos que são sempre escritos em maiúsculas, como o IJ em holandês. Nesses casos raros, as duas letras do dígrafo devem corresponder ao pseudo-elemento :: first-letter. (Isso é pouco suportado pelos navegadores, verifique <a href="#Compatibilidade_de_Navegadores">a tabela de compatibilidade</a>).</li>
 <li>Finalmente, uma combinação do pseudoelemento {{cssxref (":: before")}} e a propriedade {{cssxref ("content")}} podem injetar algum texto no início do elemento. Nesse caso, <code>::first-letter </code>corresponderá à primeira letra deste conteúdo gerado.</li>
</ul>

<p>Uma primeira linha tem apenas significado em uma caixa de contêiner de bloco; portanto, o pseudo-elemento <code>::first-letter</code> apenas afeta os elementos com um valor de {{cssxref ("display")}} de <code>block</code>, <code>inline-block</code>, <code>table-cell</code>, <code>list-item</code> ou <code>table-caption</code>. Em todos os outros casos, <code>::first-letter</code> não tem efeito.</p>

<p>Somente um pequeno subconjunto de todas as propriedades CSS pode ser usado dentro de um bloco de declaração de um conjunto de regras CSS que contém um seletor usando o pseudoelemento <code>::first-letter</code>:</p>

<ul>
 <li>Todas as propriedades de fonts : {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}.</li>
 <li>Todas as propriededas de background : {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}.</li>
 <li>Todas as propriedades de margem: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}.</li>
 <li>Todas as propriedades de "padding" (preenchimento): {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}.</li>
 <li>Todas as bordas: the taquigraficas {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}, e as propriedades manuscritas.</li>
 <li>A propriedade {{ cssxref("color") }}.</li>
 <li>As propriedades CSS: {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (somente se <code>float</code> for <code>none</code>).</li>
</ul>

<p>Como toda essa lista será estendida no futuro, é recomendado que você não use qualquer propriedade dentro da declaração do bloco, afim de manter o CSS a qualquer prova.</p>

<div class="note">
<p>No CSS 2, os pseudoelementos eram prefixados com um caractere de dois pontos (<code>:</code>). Como as pseudo-classes também estavam seguindo a mesma convenção, elas eram indistinguíveis. Para resolver isso, o CSS 2.1 mudou a convenção para pseudoelementos. Agora, um pseudoelemento é prefixado com dois caracteres de dois pontos (<code>::</code>) e uma pseudo-classe ainda é prefixado com um único dois pontos (<code>:</code>).</p>

<p>Exemplo de <strong>pseudoclasse</strong>:<br>
 <code>.classedoelemento<strong>:</strong>hover { ... }</code></p>

<p>Exemplo de <strong>pesudoelemento:</strong><br>
 <code>.classedoelemento<strong>::</strong>first-letter { ... }</code></p>

<p>Como vários navegadores já implementaram a versão CSS 2 em uma versão de lançamento, todos os navegadores que suportam a sintaxe de dois pontos também suportam a antiga sintaxe de dois pontos. </p>

<div class="blockIndicator warning">
<p>Mas isso pode mudar, portanto use SEMPRE <code>::</code> para pseudolementos</p>

<p>...a não se que você <strong>precise muito</strong> que seu código seja compatível com Internet Explore 8, então use um carectere de dois pontos.</p>
</div>
</div>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush: css">/* Fazendo odas as letras dos paragrados maior e vermelha */

p::first-letter {  /* Use :first-letter if você precise muito de compatibilidade com IE 8 */
  color: red;
  font-size: 130%;
}
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Status</th>
   <th scope="col">Comentários</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS4 Pseudo-Elements', '#first-letter-pseudo', '::first-letter')}}</td>
   <td>{{ Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>Propriedades permitidas generalizadas para tipografia, decoração de texto e propriedades de layout embutido, {{ cssxref("opacity") }} e {{ cssxref("box-shadow") }}.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow with ::first-letter')}}</td>
   <td>{{ Spec2('CSS3 Text Decoration')}}</td>
   <td>Permitido uso de {{cssxref("text-shadow")}} com <code>::first-letter</code>.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#first-letter', '::first-letter') }}</td>
   <td>{{ Spec2('CSS3 Selectors') }}</td>
   <td>Comportamento definido entre maiúsculas e minúsculas, como nos itens da lista, ou com comportamento específico do idioma (como o dígrafo holandês <code>IJ</code>). A sintaxe de dois dois-pontos para pseudo-elementos foi introduzida.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'selector.html#first-letter', '::first-letter') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>Sem mudanças significativas, apesar que CSS nível 2 continuar aceitando apenas um dois-pontos.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS1', '#the-first-letter-pseudo-element', '::first-letter') }}</td>
   <td>{{ Spec2('CSS1') }}</td>
   <td>Definição inicial de um dois-pontos.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</a></h2>

{{Compat("css.selectors.first-letter")}}

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>O peseudo-elemento {{cssxref("::first-line")}} .</li>
</ul>
