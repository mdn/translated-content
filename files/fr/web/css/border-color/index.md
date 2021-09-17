---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/border-color
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>border-color</code></strong> est une <a href="/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies">propriété raccourcie</a> qui permet de définir la couleur de la bordure sur les quatre côtés de la boîte de bordure d'un élément.</p>

<div>{{EmbedInteractiveExample("pages/css/border-color.html")}}</div>

<p>Chaque côté peut être paramétré individuellement grâce aux propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} et {{cssxref("border-left-color")}} ou, si on utilise les propriétés logiques : {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}} et {{cssxref("border-inline-end-color")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* border-color : Une valeur        */
/* Une valeur pour les quatre côtés */
border-color: red;

/* border-color : Deux valeurs         */
/* Première valeur : côtés horizontaux */
/* Seconde valeur : côtés verticaux    */
border-color: red #f015ca;

/* border-color : Trois valeurs        */
/* Première valeur : côté haut         */
/* Deuxième valeur : côtés verticaux */
/* Troisième valeur : côté bas         */
border-color: red yellow green;

/* border-color : Quatre valeurs  */
/* Première valeur : côté haut    */
/* Deuxième valeur : côté droit   */
/* Troisième valeur : côté bas    */
/* Quatrième valeur : côté gauche */
border-color: red yellow green blue;

/* Valeurs globales */
border-color: inherit;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;color&gt;")}} qui indique la couleur qu'on souhaite appliquer sur un ou plusieurs côtés de la boîte de bordure.</dd>
 <dt><code>inherit</code></dt>
 <dd>Un mot-clé qui indique que les quatre valeurs sont héritées depuis la valeur calculée de la propriété pour l'élément parent.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#unevaleur {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#hauthoribas {
  border-color: red cyan gold;
}

#hdbg {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="unevaleur"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red;&lt;/code&gt; équivalent à&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="horzvert"&gt;
  &lt;p&gt;&lt;code&gt;border-color: gold red;&lt;/code&gt; équivalent à&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="hauthoribas"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan gold;&lt;/code&gt; équivalent à&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: cyan;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="hdbg"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan black gold;&lt;/code&gt; équivalent à&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: black;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: gold;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', 600, 300)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#logical-shorthand-keyword")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Ajout du mot-clé <code>logical</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Backgrounds", "#border-color", "border-color")}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Le mot-clé <code>transparent</code> a été retiré pour être ajouté au type {{cssxref("&lt;color&gt;")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "box.html#border-color-properties", "border-color")}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Cette propriété est désormais une propriété raccourcie.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#border-color", "border-color")}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.border-color")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés liées à la couleur de la bordure
  <ul>
   <li>{{cssxref("border")}},</li>
   <li>{{cssxref("border-top-color")}},</li>
   <li>{{cssxref("border-right-color")}},</li>
   <li>{{cssxref("border-bottom-color")}},</li>
   <li>{{cssxref("border-left-color")}},</li>
  </ul>
 </li>
 <li>Les autres propriétés raccourcies liées à la bordure :
  <ul>
   <li>{{cssxref("border-width")}},</li>
   <li>{{cssxref("border-style")}}.</li>
  </ul>
 </li>
 <li><a href="/fr/docs/Web/HTML/Applying_color">Appliquer des couleurs sur des éléments HTML grâce à CSS</a></li>
 <li>Le type de données {{cssxref("&lt;color&gt;")}}</li>
 <li>Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}.</li>
</ul>
