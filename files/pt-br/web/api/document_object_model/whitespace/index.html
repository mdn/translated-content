---
title: Whitespace no DOM
slug: Web/API/Document_Object_Model/Whitespace
tags:
  - DOM
  - Intermediário
translation_of: Web/API/Document_Object_Model/Whitespace
original_slug: DOM/Referencia_do_DOM/Whitespace_in_the_DOM
---
<h2 id="The_issue" name="The_issue">O problema</h2>

<p>A presença de espaço branco no <a href="/pt-BR/docs/DOM">DOM</a> pode dificultar a manipulação da árvore de conteúdo de formas imprevisíveis. No Mozilla, todo o espaço branco no conteúdo de texto do documento original é representado no DOM (isso não inclui <a href="/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace</a> entre tags). (Isso é necessário internamente para que o editor possa preservar a formatação de documentos e também que <code>white-space: pre</code> irá funcionar em <a href="/pt-BR/docs/CSS">CSS</a>). Isso significa que:</p>

<ul>
 <li>haverão alguns nós de texto que contêm somente <a href="/pt-BR/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace</a>, e</li>
 <li>alguns nós de texto terão <a href="/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace</a> no início ou no final.</li>
</ul>

<p>Em outras palavras, a árvore do DOM para o documento seguinte irá parecer como a imagem abaixo (usando "\n" para representar novas linhas):</p>

<pre class="brush: html">&lt;!-- Meu documento --&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Meu documento&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Cabeçalho&lt;/h1&gt;
  &lt;p&gt;
    Parágrafo
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><img src="https://mdn.mozillademos.org/files/854/whitespace_tree.png" style="height: 306px; width: 618px;"></p>

<p>Isto pode fazer as coisas um pouco difíceis para qualquer usuário do DOM que quer iterar através do conteúdo, excluindo o <a href="/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace</a>.</p>

<h2 id="Facilitando_as_coisas">Facilitando as coisas</h2>

<p>É possível formatar o código como mostrado abaixo para contornar o problema:</p>

<pre class="brush: html">&lt;!-- Impressão bonita convencional
     com espaços brancos (whitespaces) entre as tags:
 --&gt;
&lt;div&gt;
 &lt;ul&gt;
  &lt;li&gt;Posição 1&lt;/li&gt;
  &lt;li&gt;Posição 2&lt;/li&gt;
  &lt;li&gt;Posição 3&lt;/li&gt;
 &lt;/ul&gt;
&lt;/div&gt;

&lt;!-- Impressão bonita ajustada ao problema:
 --&gt;
&lt;div
 &gt;&lt;ul
  &gt;&lt;li&gt;Posição 1&lt;/li
  &gt;&lt;li&gt;Posição 2&lt;/li
  &gt;&lt;li&gt;Posição 3&lt;/li
 &gt;&lt;/ul
&gt;&lt;/div&gt;
</pre>

<p><br>
 O código Javascript abaixo define funções diversas que fazem a manipulação de <a href="/en-US/docs/Web/API/Document_Object_Model/Whitespace_in_the_DOM">whitespace </a>no DOM mais fácil.</p>

<pre class="brush: js">/**
 * Em todo, o whitespace é definido como um dos caracteres
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * Isto não usa o "\s" do Javascript porque inclui espaços
 * que não quebram (e alguns outros caracteres).
 */


/**
 * Determina se um conteúdo de texto do nó é inteiramente whitespace.
 *
 * @param nod  Um nó implementando a interface |CharacterData| (por exemplo:
 *             |Text|, |Comment|, ou nó |CDATASection|
 * @return     Verdadeiro se todo conteúdo de texto de |nod| é whitespace,
 *             de outra forma é falso.
 */
function is_all_ws( nod )
{
  // Usa as características do ECMA-262 Edition 3 String e RegExp
  return !(/[^\t\n\r ]/.test(nod.textContent));
}


/**
 * Determina se um nó deve ser ignorado pela função de iterador.
 *
 * @param nod  Um objeto implementando a interface DOM1 |Node|.
 * @return     verdadeiro se o nó é:
 *                1) Um nó |Text| que é todo whitespace
 *                2) Um nó |Comment|
 *             do contrário é falso.
 */

function is_ignorable( nod )
{
  return ( nod.nodeType == 8) || // Um nó de comentário
         ( (nod.nodeType == 3) &amp;&amp; is_all_ws(nod) ); // um nó de texto, todo whitespace
}

/**
 * Versão de |previousSibling| que pula nós que são inteiramente
 * whitespace ou comentários.  (Normalmente |previousSibling| é uma propriedade
 * de todos os nós do DOM que dá o nó irmão, o nó que é
 * um filho do mesmo parente, que ocorre imediatamente antes do
 * nó de referência.)
 *
 * @param sib  O nó de referência.
 * @return     Ou:
 *               1) O irmão mais próximo do |sib| que não é
 *                  ignorável de acordo com |is_ignorable|, ou
 *               2) nulo se tal nó não existe.
 */
function node_before( sib )
{
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Versão de |nextSibling| que pula nós que são inteiramente
 * whitespace ou comentários.
 *
 * @param sib  O nó de referência.
 * @return     Ou:
 *               1) O irmão mais próximo do |sib| que não é
 *                  ignorável de acordo com |is_ignorable|, ou
 *               2) nulo se tal nó não existe.
 */
function node_after( sib )
{
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * Versão de  |lastChild| que pula nós que são inteiramente
 * whitespace ou comentários.  (Normalmente |lastChild| é uma propriedade
 * de todos os nós do DOM que dá o último dos nós contidos
 * diretamente no nó de referência.)
 *
 * @param sib  O nó de referência.
 * @return     Ou:
 *               1) O último filho do |sib| que não é
 *                  ignorável de acordo com |is_ignorable|, ou
 *               2) nulo se tal nó não existe.
 */
function last_child( par )
{
  var res=par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * Versão de |firstChild| que pula nós que são inteiramente
 * whitespace ou comentários.
 *
 * @param sib  O nó de referência.
 * @return     Ou:
 *               1) O primeiro nó do |sib| que não é
 *                  ignorável de acordo com |is_ignorable|, ou
 *               2) nulo se tal nó não existe.
 */
function first_child( par )
{
  var res=par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * Versão de |data| que não inclui whitespace no início
 * e final e normaliza todos whitespaces para um espaço individual.  (Normalmente
 * |data| é uma propriedade de nós de texto que dá o texto do nó.)
 *
 * @param txt  O nó de texto do qual data deve ser retornado
 * @return     Uma string dando os conteúdos de um nó de texto com
 *             whitespace colapsado.
 */
function data_of( txt )
{
  var data = txt.textContent;
  // Usa características do ECMA-262 Edition 3 String e RegExp
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ")
    data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
</pre>

<h2 id="Example" name="Example">Exemplo</h2>

<p>O código seguinte demonstra o uso das funções acima. Ele itera através dos filhos de um elemento (dos quais filhos são todos os elementos) para encontrar aquele cujo o texto seja <code>"Este é o terceiro parágrafo"</code>, e então muda o atributo da classe e os conteúdos daquele parágrafo.</p>

<pre class="brush: js">var cur = first_child(document.getElementById("teste"));
while (cur)
{
  if (data_of(cur.firstChild) == "Este é o terceiro parágrafo.")
  {
      cur.className = "mágica";
      cur.firstChild.textContent = "Este é o parágrafo mágico";
  }
  cur = node_after(cur);
}
</pre>
