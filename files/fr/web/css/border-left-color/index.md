---
title: border-left-color
slug: Web/CSS/border-left-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-left-color
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>border-left-color</code></strong> permet de définir la couleur utilisée pour la bordure gauche d'un élément.</p>

<p>Pour avoir une formulation plus concise, on pourra utiliser les propriétés raccourcies {{cssxref("border-color")}} et/ou {{cssxref("border-left")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border-left-color.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs de type &lt;color&gt; */
border-left-color: red;
border-left-color: rgb(255, 128, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: #ffbb00;
border-left-color: currentColor;
border-left-color: transparent;

/* Valeurs globales */
border-left-color: inherit;
border-left-color: initial;
border-left-color: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt>&lt;<code>color&gt;</code></dt>
 <dd>Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui décrit la couleur utilisée pour la bordure du côté gauche.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.maboite {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}

.texterouge {
  color: red;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="maboite"&gt;
  &lt;p&gt;Une boîte avec une bordure autour.
     Notez le côté de la boîte qui est
     &lt;span class="texterouge"&gt;rouge&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Backgrounds', '#the-border-color', 'border-color')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Pas de modification significative, la valeur <code>transparent</code> a été supprimée car elle fait désormais partie du type {{cssxref("&lt;color&gt;")}} qui a été étendu.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#border-color-properties', 'border-left-color')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-left-color")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés raccourcies liées aux bordures
  <ul>
   <li>{{cssxref("border")}},</li>
   <li>{{cssxref("border-left")}},</li>
   <li>{{cssxref("border-color")}}.</li>
  </ul>
 </li>
 <li>Les propriétés de couleur pour les autres bordures :
  <ul>
   <li>{{cssxref("border-top-color")}},</li>
   <li>{{cssxref("border-bottom-color")}},</li>
   <li>{{cssxref("border-right-color")}}.</li>
  </ul>
 </li>
 <li>Les autres propriétés liées à la bordure gauche :
  <ul>
   <li>{{cssxref("border-left-style")}},</li>
   <li>{{cssxref("border-left-width")}}.</li>
  </ul>
 </li>
</ul>
