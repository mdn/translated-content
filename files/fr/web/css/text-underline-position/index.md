---
title: text-underline-position
slug: Web/CSS/text-underline-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-underline-position
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-underline-position</code></strong> définit la position du soulignement utilisé lorsque la propriété {{cssxref("text-decoration")}} prend la valeur <code>underline</code>.</p>

<pre class="brush:css  no-line-numbers">/* Avec un mot-clé */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* Avec plusieurs mots-clés */
text-underline-position: under left;
text-underline-position: right under;

/* Valeurs globales */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: unset;
</pre>

<p>Cette propriété est héritée sur les différents éléments et n'est pas réinitialisée avec la propriété raccourcie {{cssxref("text-decoration")}}, ce qui permet de la définir simplement pour l'ensemble du document.</p>

<pre class="brush: css">:root {
  /* Une meilleure règle par défaut pour un document */
  /* avec de nombreuses formules chimiques */
  text-underline-position: under;
}
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Ce mot-clé permet à l'agent utilisateur d'utiliser un algorithme pour choisir entre <code>under</code> et <code>alphabetic</code>.</dd>
 <dt><code>under</code></dt>
 <dd>Ce mot-clé force la ligne à se situer sous la ligne de base, à une position où elle ne traversera pas de <a href="https://fr.wikipedia.org/wiki/Jambage">jambage</a>. Cela est notamment utile lorsqu'on veut souligner de façon lisible des formules chimiques ou mathématiques (qui utilisent fréquemment des indices).</dd>
 <dt><code>left</code></dt>
 <dd>In vertical writing-modes, this keyword forces the line to be placed on the <em>left</em> of the characters. In horizontal writing-modes, it is a synonym of <code>under.</code></dd>
 <dt><code>right</code></dt>
 <dd>Pour les modes d'écritures verticaux, ce mot-clé force la ligne à être placée à droite des caractères. Pour les modes d'écritures horizontaux, ce mot-clé est synonyme de <code>under.</code></dd>
 <dt><code>auto-pos</code>{{non-standard_inline}}</dt>
 <dd>Ce mot-clé est synonyme de <code>auto</code> et c'est ce dernier qui doit être utilisé à la place.</dd>
 <dt><code>above</code>{{non-standard_inline}}</dt>
 <dd>Ce mot-clé force la ligne à être dessinée au dessus du texte. Lorsqu'on écrit avec un script d'Asie orientale, la valeur <code>auto</code> aura un effet semblable.</dd>
 <dt><code>below</code>{{non-standard_inline}}</dt>
 <dd>Ce mot-clé force la ligne à être dessinée sous le texte. Lorsqu'on utilise un texte alphabétique, la valeur <code>auto</code> aura un effet semblable.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="chimique"&gt;
  C&lt;sub&gt;6&lt;/sub&gt;H&lt;sub&gt;12&lt;/sub&gt;O&lt;sub&gt;6&lt;/sub&gt;
&lt;/p&gt;
&lt;p class="defaut"&gt;
  Et là avec des &lt;sub&gt;indices&lt;/sub&gt;
  et du jambage
&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.chimique {
  text-decoration: underline;
  text-underline-position: under;
}

.defaut {
  text-decoration: underline;
  text-underline-position: auto;
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
   <td>{{SpecName('CSS3 Text Decoration', '#text-underline-position-property', 'text-underline-position')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-underline-position")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("text-decoration")}}</li>
 <li>{{cssxref("text-decoration-line")}}</li>
 <li>{{cssxref("text-decoration-style")}}</li>
 <li>{{cssxref("text-decoration-color")}}</li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ie/ms531176%28v=vs.85%29.aspx">La documentation sur les valeurs non-standard utilisées par Microsoft</a></li>
</ul>
