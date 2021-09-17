---
title: symbols()
slug: Web/CSS/symbols()
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/symbols()
---
<div>{{CSSRef}}</div>

<p>La fonction <strong><code>symbols()</code></strong> permet de définir des styles pour les compteurs en ligne, directement comme valeur de la propriété CSS. À la différence des styles définis avec {{cssxref("@counter-style")}}, ces styles sont anonymes. La fonction <code>symbols()</code> ne possède pas toute la flexibilité offerte par la règle @ {{cssxref("@counter-style")}} mais peut s'avérer utile dans des cas où le style nécessaire n'est utilisé qu'une seule fois et où il n'est pas nécessaire d'utiliser toutes les options fournies par {{cssxref("@counter-style")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">symbols() = symbols( &lt;symbols-type&gt;? [ &lt;string&gt; | &lt;image&gt; ]+ );</pre>

<p><code>&lt;symbols-type&gt;</code> est l'un des mots-clés suivants :</p>

<ul>
 <li><code>cyclic</code> : le système utilisera les différentes valeurs les unes à la suite des autres, de façon cyclique.</li>
 <li><code>numeric</code> : le système interprètera les valeurs fournies comme une suite numérique composant un système de numération.</li>
 <li><code>alphabetic</code> : le système interprètera les valeurs fournies comme les chiffres d'un système de numération alphabétique (par exemple : A, B, C, AA, AB, AC, etc.) sans zéro.</li>
 <li><code>symbolic</code> : le système parcourt les différentes valeurs fournies et en affiche une de plus à chaque cycle.</li>
 <li><code>fixed</code> : le système affiche chaque symbole une fois puis poursuit avec les chiffres arabes.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;Un&lt;/li&gt;
  &lt;li&gt;Deux&lt;/li&gt;
  &lt;li&gt;Trois&lt;/li&gt;
  &lt;li&gt;Quatre&lt;/li&gt;
  &lt;li&gt;Cinq&lt;/li&gt;
&lt;/ol&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">ol {
  list-style: symbols(alphabetic "*" "\2020" "\2021");
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100%")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Counter Styles', '#symbols-function', 'symbols()')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("@counter-style")}}</li>
 <li>{{cssxref("list-style-type")}} et la propriété raccourcie correspondante : {{cssxref("list-style")}}.</li>
</ul>
