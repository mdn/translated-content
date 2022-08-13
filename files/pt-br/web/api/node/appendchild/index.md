---
title: Node.appendChild
slug: Web/API/Node/appendChild
translation_of: Web/API/Node/appendChild
---
<div>{{ApiRef("DOM")}}</div>

<h2 id="Summary" name="Summary">Resumo</h2>

<p>Adiciona um nó ao final da lista de filhos de um nó pai especificado. Se o nó já existir no documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox">var filho = <em>elemento</em>.appendChild(<em>filho</em>);</pre>

<ul>
 <li><code>elemento</code> é o <a href="/pt-BR/docs/DOM/element" title="/en-US/docs/DOM/element">elemento</a> pai.</li>
 <li><code>filho</code> é o nó a ser adicionado como filho de <code>elemento</code>. Também é devolvido.</li>
</ul>

<h2 id="Descrição">Descrição</h2>

<p>O método <code>appendChild</code> devolve uma referência ao nó adicionado.</p>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush:js">// Cria um novo elemento de parágrafo e adiciona-o ao final do documento
var p = document.createElement("p");
document.body.appendChild(p);</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Se <code>filho</code> é uma referência a um nó existente no documento, <code>appendChild</code> vai movê-lo de sua posição atual para a nova posição (i.e, não é necessário remover o nó de seu pai atual antes de adicioná-lo a outro nó).</p>

<p>Isso também significa que um nó não pode estar em dois lugares do documento ao mesmo tempo. Assim, se o nó já tem um pai, ele é primeiro removido para, <em>só então</em>, ser adicionado na nova posição.</p>

<p>Você pode usar o método {{domxref("Node.cloneNode")}} para criar uma cópia do nó antes de adicioná-lo ao novo pai. (Note que cópias feitas com o método <code>cloneNode</code> <strong>não </strong>serão mantidas sincronizadas automaticamente)</p>

<p>Este método não permite mover nós entre documentos diferentes. Se você quiser adicionar um nó de um documento diferente (por exemplo para mostrar o resultado de uma requisição AJAX), você precisa primeiro usar o método {{domxref("document.importNode")}}.</p>

<p><code>appendChild()</code> é um dos métodos fundamentais da programação para a web usando o DOM. O método <code>appendChild()</code> insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente.</p>

<h2 id="Specification" name="Specification">Especificação</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-184E7107">DOM Level 3 Core: appendChild</a></li>
</ul>

<h2 id="See_also" name="See_also">Ver também</h2>

<ul>
 <li>{{domxref("Node.removeChild")}}</li>
 <li>{{domxref("Node.replaceChild")}}</li>
 <li>{{domxref("Node.insertBefore")}}</li>
 <li>{{domxref("Node.hasChildNodes")}}</li>
</ul>
