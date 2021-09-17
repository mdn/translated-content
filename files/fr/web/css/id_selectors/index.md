---
title: Sélecteurs d'ID
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/ID_selectors
original_slug: Web/CSS/Sélecteurs_d_ID
---
<div>{{CSSRef("Selectors")}}</div>

<p>Un sélecteur d'identifiant (<em>ID selector</em>) permet, pour un document HTML, de cibler un élément grâce à la valeur de son attribut {{htmlattrxref("ID")}}. Il faut que la valeur soit exactement la même que celle du sélecteur pour que l'élément soit effectivement ciblé.</p>

<pre class="brush: css no-line-numbers">/* L'élément avec l'identifiant id="demo" */
#demo {
  border: red 2px solid;
}</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">#valeur_identifiant { <em>déclarations</em> }</pre>

<div class="note">
<p><strong>Note :</strong> Cela est équivalent à la notation suivante qui utilise un {{cssxref("Sélecteurs_d_attribut", "sélecteur d'attribut")}}:</p>

<pre class="syntaxbox">[id=valeur_identifiant] { <em>déclarations</em> }</pre>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#identifie {
  background-color: blue;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span id="identifie"&gt;Voici un span avec du texte.&lt;/span&gt;
&lt;span&gt;Et un autre (mais sans identifiant).&lt;/span&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 200, 50)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#id-as-selector", "ID selectors")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.id")}}</p>
