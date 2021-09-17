---
title: object-position
slug: Web/CSS/object-position
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/object-position
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>object-position</code></strong> détermine l'alignement d'un <a href="/fr/docs/Web/CSS/%C3%89l%C3%A9ment_remplac%C3%A9">élément remplacé</a> au sein de sa boîte. Les zones de la boîtes qui ne sont pas recouvertes par le contenu de l'élément remplacé montreront l'arrière-plan de l'élément.</p>

<div>{{EmbedInteractiveExample("pages/css/object-position.html")}}</div>

<div class="note">
<p><strong>Note :</strong> Il est possible d'ajuster la taille de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété {{cssxref("object-fit")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css  no-line-numbers">/* Valeurs de positionnement */
/* Type &lt;position&gt;           */
object-position: center top;
object-position: 100px 50px;

/* Valeurs globales */
object-position: inherit;
object-position: initial;
object-position: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;position&gt;</code></dt>
 <dd>Une valeur de type {{cssxref("&lt;position&gt;")}}, c'est-à-dire une à quatre valeurs permettant de définir une position en deux dimensions par rapport aux limites de la boîte dans laquelle est placé l'élément. On peut donner des décalages absolus ou relatifs. On notera que la position peut être définie en dehors de la boîte de l'élément.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;img id="object-position-1" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/&gt;
&lt;img id="object-position-2" src="https://mdn.mozillademos.org/files/12668/MDN.svg" alt="MDN Logo"/&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">img {
   width: 300px;
   height: 250px;
   border: 1px solid black;
   background-color: silver;
   margin-right: 1em;
   object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%','300px')}}</p>

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
   <td>{{SpecName('CSS3 Images', '#the-object-position', 'object-position')}}</td>
   <td>{{Spec2('CSS3 Images')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.object-position")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les autres propriétés CSS liées aux images :
  <ul>
   <li>{{cssxref("object-fit")}}</li>
   <li>{{cssxref("image-orientation")}}</li>
   <li>{{cssxref("image-rendering")}}</li>
   <li>{{cssxref("image-resolution")}}</li>
  </ul>
 </li>
</ul>
