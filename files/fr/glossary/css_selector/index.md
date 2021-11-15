---
title: Sélecteur CSS
slug: Glossary/CSS_Selector
tags:
  - CSS
  - Glossaire
  - HTML
  - Programmation
  - Sélecteur
  - Sélecteur CSS
translation_of: Glossary/CSS_Selector
original_slug: Glossaire/Sélecteur_CSS
---
<p>Un <strong>sélecteur CSS </strong> est la partie de la règle CSS qui désigne les éléments d'un document concernés par la règle. Les éléments correspondants auront le style spécifié par la règle qui leur est appliqué.</p>

<h2>Exemple</h2>
<p>Considérez ce code CSS :</p>

<pre class="brush: css">p {
  color: green;
}

div.warning {
  width: 100%;
  border: 2px solid yellow;
  color: white;
  background-color: darkred;
  padding:  0.8em 0.8em 0.6em;
}

#customized {
  font: 16px Lucida Grande, Arial, Helvetica, sans-serif;
}</pre>

<p>Les sélecteurs sont ici <code>"p"</code> (qui applique la couleur verte au texte de tout élément {{HTMLElement ("p")}}), <code>"div.warning"</code> (qui fait que tout élément {{HTMLElement ("div")}} appartenant à la {{Glossary ("Class", "classe CSS")}} <code>"warning"</code> ressemble à une boîte d'avertissement) et <code>"#customized"</code>, qui définit la police de base de l'élément avec l'ID <code>"customized"</code> à 16 -pixel Lucida Grande ou l'une des polices de secours.</p>

<p>Nous pouvons ensuite appliquer ce CSS à du HTML, tel que :</p>

<pre class="brush: html">&lt;p&gt;This is happy text.&lt;/p&gt;

&lt;div class="warning"&gt;
  Be careful! There are wizards present, and they are quick to anger!
&lt;/div&gt;

&lt;div id="customized"&gt;
  &lt;p&gt;This is happy text.&lt;/p&gt;

  &lt;div class="warning"&gt;
    Be careful! There are wizards present, and they are quick to anger!
  &lt;/div&gt;
&lt;/div&gt;</pre>

<p>Le contenu de la page résultant ressemble à ceci:</p>

<p>{{EmbedLiveSample("Exemple", 640, 210)}}</p>

<h2 id="Pour_approfondir">Pour approfondir</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li><a href="/fr/Apprendre/CSS/Introduction_%C3%A0_CSS/Les_s%C3%A9lecteurs">Apprendre sur les sélecteurs CSS</a> dans notre introduction à CSS.</li>
 <li>Sélecteurs de base
  <ul>
   <li><a href="/fr/docs/Web/CSS/S%C3%A9lecteurs_de_type">Sélecteurs de type</a><code> elementname</code></li>
   <li><a href="/fr/docs/Web/CSS/Sélecteurs_de_classe">Sélecteurs de classe</a> <code>.classname</code></li>
   <li><a href="/fr/docs/Web/CSS/Reference/Sélecteurs_d'ID">Sélecteurs d'ID</a> <code>#idname</code></li>
   <li><a href="/fr/docs/Web/CSS/Sélecteurs_universels">Sélecteurs universels</a><code> * ns|* *|*</code></li>
   <li><a href="/fr/docs/Web/CSS/Reference/Sélecteurs_d'attribut">Sélecteurs d'attribut</a><code> [attr=value]</code></li>
   <li><code><a href="/fr/docs/Web/CSS/Pseudo-classes">Sélecteurs d'état</a></code> <code>a:active, a:visited</code></li>
  </ul>
 </li>
 <li>Combinaisons
  <ul>
   <li><a href="/fr/docs/Web/CSS/Adjacent_sibling_selectors">Sélecteurs de frère adjacent</a> <code>A + B</code></li>
   <li><a href="/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux">Sélecteurs de voisins généraux</a> <code>A ~ B</code></li>
   <li><a href="/fr/docs/Web/CSS/Sélecteurs_enfant">Sélecteurs d'enfant</a> <code>A &gt; B</code></li>
   <li><a href="/fr/docs/Web/CSS/Sélecteurs_descendant">Sélecteurs descendants</a> <code>A B</code></li>
  </ul>
 </li>
 <li><a href="/fr/docs/Web/CSS/Pseudo-éléments">Pseudo-éléments</a></li>
 <li><a href="/fr/docs/Web/CSS/Pseudo-classes">Pseudo-classes</a></li>
</ul>

<h3 id="Référence_technique">Référence technique</h3>

<p>{{SpecName("CSS3 Selectors")}}</p>
