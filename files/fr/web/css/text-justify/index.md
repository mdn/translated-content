---
title: text-justify
slug: Web/CSS/text-justify
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/text-justify
---
<div>{{CSSRef}}</div>

<p>la propriété CSS <strong><code>text-justify</code></strong> définit le type de justification à appliquer au texte justifié (par exemple avec {{cssxref("text-align")}}<code>: justify;</code>).</p>

<pre class="brush: css no-line-numbers">text-justify: none;
text-justify: auto;
text-justify: inter-word;
text-justify: inter-character;
text-justify: distribute;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>text-justify</code> peut être définie grâce à l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Le texte ne sera pas justifié— cela aura le même effet que de ne pas définir {{cssxref("text-align")}}, mais cela peut se révéler utile pour activer ou désactiver globalement la justification.</dd>
 <dt><code>auto</code></dt>
 <dd>
 <p>Le navigateur choisira la meilleure justification pour la situation, en se basant sur le rapport entre performance et qualité, mais également sur la valeur la plus appropriée par rapport à la langue (français, langues CJK, etc.). C'est la propriété par défaut, qui est appliquée lorsque <code>text-justify</code> n'est pas définie.</p>
 </dd>
 <dt><code>inter-word</code></dt>
 <dd>Le texte est justifié en ajustant les espaces entre les mots (en faisant varier {{cssxref("word-spacing")}}) ; cette propriété est appropriée pour les langues qui séparent les mots avec des espaces, comme le Français ou le Coréen.</dd>
 <dt><code>inter-character</code></dt>
 <dd>Le texte est justifié en ajustant les espaces entre les caractères (en faisant varier {{cssxref("letter-spacing")}}) ;  cette propritété est plus appropriée pour des langues comme le Japonais.</dd>
 <dt><code>distribute</code> {{deprecated_inline}}</dt>
 <dd>Même effet que <code>inter-character</code> ; cette valeur sert uniquement à de fins de compatibilité.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush: html">&lt;p class="none"&gt;&lt;code&gt;text-justify: none&lt;/code&gt; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.&lt;/p&gt;
&lt;p class="auto"&gt;&lt;code&gt;text-justify: auto&lt;/code&gt; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.&lt;/p&gt;
&lt;p class="dist"&gt;&lt;code&gt;text-justify: distribute&lt;/code&gt; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.&lt;/p&gt;
&lt;p class="word"&gt;&lt;code&gt;text-justify: inter-word&lt;/code&gt; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.&lt;/p&gt;
&lt;p class="char"&gt;&lt;code&gt;text-justify: inter-character&lt;/code&gt; — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui.&lt;/p&gt;</pre>

<pre class="brush: css">p {
  font-size: 1.5em;
  border: 1px solid black;
  padding: 10px;
  width: 95%;
  margin: 10px auto;
  text-align: justify;
}

.none {
  text-justify: none;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distribute;
}

.word {
  text-justify: inter-word;
}

.char {
  text-justify: inter-character;
}</pre>

<p>{{EmbedLiveSample("Exemples","100%",400)}}</p>

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
   <td>{{SpecName('CSS3 Text', '#text-justify-property', 'text-justify')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_avec_les_navigateurs">Compatibilité avec les navigateurs</h2>

<div>{{Compat("css.properties.text-justify")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("text-align")}}</li>
</ul>
