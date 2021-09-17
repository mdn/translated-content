---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-decoration-color
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-decoration-color</code></strong> définit la couleur utilisée pour dessiner les lignes décorant le texte (quel que soit le style définit {{cssxref("text-decoration-line")}}).</p>

<p>La propriété raccourcie {{cssxref("text-decoration")}} permet de paramétrer cette propriété et d'autres propriétés associées aux décorations.</p>

<div>{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}</div>

<div class="note">
<p><strong>Note :</strong> Lorsqu'on définit plusieurs décorations à la fois, il peut être plus pratique d'utiliser la propriété raccourcie {{cssxref("text-decoration")}}.</p>
</div>

<p>Il est préférable d'utiliser cette propriété pour colorer ces décorations plutôt que d'utiliser d'autres éléments HTML.</p>

<div class="note">
<p><strong>Note :</strong> CSS ne fournit pas de mécanisme spécifique pour définir une couleur par type de ligne. On peut toutefois y parvenir en imbriquant des éléments mis en forme différemment.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Couleurs */
/* Valeurs de type &lt;color&gt; */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgba(255, 128, 128, 0.5);
text-decoration-color: transparent;

/* Valeurs globales */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>La propriété <code>color</code> accepte différents mots-clés et valeurs numériques. Pour plus de détails, voir {{cssxref("&lt;color&gt;")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;Du texte avec un effet au survol&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  text-decoration: underline;
  text-decoration-color: red;
}

.exemple:hover {
  color: blue;
  text-decoration: line-through;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS3 Text Decoration', '#text-decoration-color-property', 'text-decoration-color')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>Définition initiale. La propriété {{cssxref("text-decoration")}} n'était pas une propriété raccourcie auparavant.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-decoration-color")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La propriété raccourcie {{cssxref("text-decoration")}} qui permet, entre autres, de paramétrer <code>text-decoration-color</code>.</li>
 <li>Le type de données {{cssxref("&lt;color&gt;")}}</li>
 <li>D'autres propriétés relatives aux couleurs : {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}</li>
 <li><a href="/fr/docs/Web/HTML/Applying_color">Appliquer des couleurs aux éléments HTML</a></li>
</ul>

<p> </p>
