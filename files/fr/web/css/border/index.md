---
title: border
slug: Web/CSS/border
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border
---
<div>{{CSSRef("CSS Borders")}}</div>

<p>La propriété CSS <strong><code>border</code></strong> est <a href="/fr/docs/Web/CSS/Propriétés_raccourcies">une propriété raccourcie</a> qui permet de définir les propriétés liées à la bordure. <code>border</code> peut être utilisée pour définir les valeurs de {{cssxref("border-width")}}, {{cssxref("border-style")}} et {{cssxref("border-color")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border.html")}}</div>

<p>Comme pour toutes les propriétés raccourcie, si une valeur est absente pour la propriété détaillée correspondante, cette dernière sera réinitialisée avec sa valeur initiale. On notera également que {{cssxref("border-image")}} ne peut pas être définie via cette propriété raccourcie mais elle sera quand même réinitialisée (sa valeur initiale est <code>none</code>). Ainsi, <code>border</code> peut être utilisée pour réinitialiser n'importe quelle propriété liée à la bordure définie plus haut dans la cascade.</p>

<div class="note">
<p><strong>Note :</strong> Bien que les propriétés raccourcies {{cssxref("border-width")}}, {{cssxref("border-style")}} et {{cssxref("border-color")}} acceptent jusqu'à quatre valeurs pour les différents côtés, cette propriété (<code>border</code>) n'accepte qu'une seule valeur pour chaque propriété détaillée. Le résultat obtenu sera donc homogène sur les quatre côtés.</p>
</div>

<h3 id="Différences_entre_les_bordures_et_les_contours_(outlines)">Différences entre les bordures et les contours (<em>outlines</em>)</h3>

<p>Les bordures et <a href="/fr/docs/Web/CSS/outline">contours</a> sont similaires mais quelques différences les distinguent :</p>

<ul>
 <li>Les contours n'occupent pas d'espace sur l'élément : ils sont dessinés en dehors du contenu de l'élément</li>
 <li>Selon la spécification, les contours ne sont pas nécessairement rectangulaires.</li>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* style */
border: solid;

/* largeur | style */
border: 2px dotted;

/* style | couleur */
border: outset #f33;

/* largeur | style | couleur */
border: medium dashed green;

/* Valeurs globales */
border: inherit;
border: initial;
border: unset;
</pre>

<p>La propriété <code>border</code> peut être définie grâce à une ou plusieurs valeurs <code><a href="#br-width">&lt;line-width&gt;</a></code>, <code><a href="#br-style">&lt;line-style&gt;</a></code> ou <code><a href="#color">&lt;color&gt;</a></code>.</p>

<div class="note">
<p><strong>Note :</strong> La bordure pourra être invisible si son style n'est pas défini. En effet, sa valeur par défaut est <code>none</code>.</p>
</div>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;line-width&gt;</code></dt>
 <dd>Voir {{cssxref("border-width")}} (la valeur par défaut est <code>medium</code>).</dd>
 <dt><code>&lt;line-style&gt;</code></dt>
 <dd>Voir {{cssxref("border-style")}} (la valeur par défaut est <code>none</code>).</dd>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Voir {{cssxref("border-color")}}. Une valeur de type {{cssxref("&lt;color&gt;")}} qui indique la couleur de la bordure. La valeur par défaut qui sera utilisée sera la valeur de la propriété {{cssxref("color")}} de l'élément (qui est la couleur du texte de l'élément, pas de son arrière-plan).</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.brd {
  border: 1px solid black;
}
style {
  border: 1px dashed black;
  display:block;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="brd"&gt;Oh des bordures&lt;/div&gt;
&lt;p&gt;
  N'hésitez pas à éditer le CSS qui suit pour voir
  l'effet des valeurs.
&lt;/p&gt;
&lt;style contenteditable&gt;
  .brd {
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

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
   <td>{{SpecName('CSS3 Backgrounds', '#the-border-shorthands', 'border')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>La prise en charge du mot-clé <code>transparent</code> est retirée car celui-ci est désormais intégré au type {{cssxref("&lt;color&gt;")}}. En pratique, cela n'a pas d'impact. Bien que {{cssxref("border-image")}} ne puisse être définie via <code>border</code>, cette dernière la réinitialise quand même avec sa valeur initiale (<code>none</code>).</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#border-shorthand-properties', 'border')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Le mot-clé <code>inherit</code> peut être utilisé et <code>transparent</code> est considéré comme une couleur valide.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#border', 'border')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("border-top-left-radius")}},</li>
 <li>{{cssxref("border-top-right-radius")}},</li>
 <li>{{cssxref("border-bottom-right-radius")}},</li>
 <li>{{cssxref("border-bottom-left-radius")}}</li>
</ul>
