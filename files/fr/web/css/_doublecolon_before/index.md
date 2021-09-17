---
title: '::before (:before)'
slug: 'Web/CSS/::before'
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: 'Web/CSS/::before'
---
<div>{{CSSRef}}</div>

<p><strong><code>::before</code></strong> crée un <a href="/fr/docs/Web/CSS/Pseudo-éléments">pseudo-élément</a> qui sera le premier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS {{cssxref("content")}}. Par défaut, l'élément créé est de type en-ligne (<em>inline</em>).</p>

<pre class="brush:css no-line-numbers">/* On ajoute un coeur avant les liens */
a::before {
  content: "♥";
}
</pre>

<div class="note">
<p><strong>Note :</strong> Les pseudo-éléments générés par <code>::before</code> et <code>::after</code> sont contenus dans la boîte de mise en forme de l'élément. Aussi, <code>::before</code> et <code>::after</code> ne s'appliquent pas <a href="/fr/docs/Web/CSS/Élément_remplacé">aux éléments remplacés</a> tels que {{HTMLElement("img")}} ou {{HTMLElement("br")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<p>La notation <code>::before</code> a été introduite par CSS 3 pour différencier les <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classes</a> et les <a href="/fr/docs/Web/CSS/Pseudo-éléments">pseudo-éléments</a>. Les navigateurs acceptent aussi la notation <code>:before </code>introduite par CSS 2.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Ajouter_des_guillemets">Ajouter des guillemets</h3>

<p>Un exemple simple utilisant les pseudo-éléments pour ajouter des guillemets. Ici nous avons <code>::before</code> et {{cssxref("::after")}} pour effectuer l'insertion.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;q&gt;Quelques guillemets&lt;/q&gt;, dit-il, &lt;q&gt;sont mieux que pas du tout&lt;/q&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">q::before {
  content: "«";
  color: blue;
}
q::after {
  content: '»';
  color: red;
}</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('Ajouter_des_guillemets', '500', '50', '')}}</p>

<h3 id="Exemple_décoratif">Exemple décoratif</h3>

<p>Il est possible de mettre du style à du texte ou des images, dans la propriété {{cssxref("content")}} , quasiment de n'importe quelle manière.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;span class="ribbon"&gt;Observez où est placée la boite orange.&lt;/span&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.ribbon {
  background-color: #5BC8F7;
}

.ribbon::before {
  content: "Regardez cette boite orange.";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample('Exemple_décoratif', 450, 60)}}</p>

<h3 id="Liste_de_choses_à_faire">Liste de choses à faire</h3>

<p>Dans cet exemple, nous allons créer une simple liste de choses à faire en utilisant les pseudo-éléments. Cette méthode peut être utilisée pour ajouter une petite touche à l'interface utilisateur et améliorer l'expérience utilisateur.</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Acheter du lait&lt;/li&gt;
  &lt;li&gt;Promener le chien&lt;/li&gt;
  &lt;li&gt;Faire de l'exercice&lt;/li&gt;
  &lt;li&gt;Coder&lt;/li&gt;
  &lt;li&gt;Jouer de la musique&lt;/li&gt;
  &lt;li&gt;Se reposer&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">li {
  list-style-type: none;
  position: relative;
  margin: 1px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #CCFF99;
}

li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
</pre>

<h4 id="Résultat_3">Résultat</h4>

<p>{{EmbedLiveSample('Liste_de_choses_à_faire', '400', '300', '')}}</p>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#selectordef-before', '::before')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>Pas de modification significative depuis la spécification précédente.</td>
  </tr>
  <tr>
   <td>{{Specname("CSS3 Transitions", "#animatable-properties", "")}}</td>
   <td>{{Spec2("CSS3 Transitions")}}</td>
   <td>Les transitions peuvent être appliquées sur les propriétés de ce pseudo-élément.</td>
  </tr>
  <tr>
   <td>{{Specname("CSS3 Animations", "", "")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td>Les animations peuvent être appliquées sur les propriétés de ce pseudo-élément.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#gen-content', '::before')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Introduction de la syntaxe avec les deux deux-points.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'generate.html#before-after-content', '::before')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale avec une seule fois le caractère deux-points.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.before")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("::after")}}</li>
 <li>{{cssxref("content")}}</li>
</ul>
