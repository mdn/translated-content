---
title: background-clip
slug: Web/CSS/background-clip
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-clip
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>background-clip</code></strong> définit la façon dont l'arrière-plan d'un élément (que ce soit l'image ou la couleur) s'étend sous la boîte de bordure, la boîte de remplissage (<em>padding</em>) ou la boîte de contenu.</p>

<div>{{EmbedInteractiveExample("pages/css/background-clip.html")}}</div>

<p>Si aucune image ({{cssxref("background-image")}}) ni couleur ({{cssxref("background-color")}}) d'arrière-plan n'est définie, cette propriété aura uniquement un effet visuel lorsque la bordure possède des régions transparentes (via {{cssxref("border-style")}} ou {{cssxref("border-image")}}). Dans les autres cas, la bordure recouvrira la zone où se situera la différence .</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs utilisant un mot-clé */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Valeurs globales */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>border-box</code></dt>
 <dd>L'arrière-plan s'étend jusqu'à la limite externe de la bordure. L'arrière-plan sera situé sous la bordure en termes d'ordre z.</dd>
 <dt><code>padding-box</code></dt>
 <dd>Aucun arrière-plan n'est dessiné dans la boîte de bordure. L'arrière-plan s'étend jusqu'à la limite de la boîte de remplissage (<em>padding</em>).</dd>
 <dt><code>content-box</code></dt>
 <dd>L'arrière-plan est limité (rogné) à la boîte de contenu.</dd>
 <dt><code>text</code> {{experimental_inline}}</dt>
 <dd>L'arrière-plan est limité (rogné) au texte en premier plan.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
 border: 10px navy;
 border-style: dotted double;
 margin: 1em;
 padding: 2em;
 background: #F8D575;
 font: 900 1.2em sans-serif;
 text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}

.padding-box {
  background-clip: padding-box;
}

.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgba(0,0,0,.2);
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="border-box"&gt;
  L'arrière-plan s'étend sous la bordure.
&lt;/p&gt;
&lt;p class="padding-box"&gt;
  L'arrière-plan s'étend jusqu'avant la
  bordure.
&lt;/p&gt;
&lt;p class="content-box"&gt;
  L'arrière-plan s'arrête à la boîte de
  contenu.
&lt;/p&gt;
&lt;p class="text"&gt;
  L'arrière-plan se limite au texte au
  premier-plan.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', 600, 580)}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#the-background-clip', 'background-clip')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Backgrounds', '#background-clip', 'background-clip')}}</td>
   <td>{{Spec2('CSS4 Backgrounds')}}</td>
   <td>Ajout de la valeur <code>text</code>.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.background-clip")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("clip-path")}}</li>
 <li>Les propriétés relatives à l'arrière-plan :
  <ul>
   <li>{{cssxref("background")}}</li>
   <li>{{cssxref("background-color")}}</li>
   <li>{{cssxref("background-image")}}</li>
   <li>{{cssxref("background-origin")}}</li>
  </ul>
 </li>
 <li><a href="/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte">Le modèle de boîtes CSS</a></li>
</ul>
