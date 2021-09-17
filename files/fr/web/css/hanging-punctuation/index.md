---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/hanging-punctuation
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>hanging-punctuation</code></strong> indique si un signe de ponctuation se situant au début ou à la fin d'une ligne de texte doit rester sur cette ligne, quitte à sortir de la boîte qui représente la ligne.</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: force-end;
hanging-punctuation: allow-end;

/* Valeurs avec deux mots-clés */
hanging-punctuation: first force-end;
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last force-end;
hanging-punctuation: last allow-end;

/* Valeurs avec trois mots-clés */
hanging-punctuation: first force-end last;
hanging-punctuation: first allow-end last;

/* Valeurs globales */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Cette propriété peut être définie grâce à une, deux ou trois valeurs :</p>

<ul>
 <li>Avec une valeur : on utilisera l'un des mots-clés de la liste ci-après</li>
 <li>Avec deux valeurs :
  <ul>
   <li>le mot-clé <code>first</code> avec un des mots-clés parmi : <code>last</code>, <code>allow-end</code> ou <code>force-end</code></li>
   <li>ou le mot-clé <code>last</code> avec un des mots-clés parmi : <code>last</code>, <code>allow-end</code> ou <code>force-end</code></li>
  </ul>
 </li>
 <li>Avec trois valeurs :
  <ul>
   <li><code>first</code>, <code>allow-end</code> et <code>last</code></li>
   <li>ou <code>first</code>, <code>force-end</code> et <code>last</code></li>
  </ul>
 </li>
</ul>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Aucun caractère ne reste suspendu sur la ligne.</dd>
 <dt><code>first</code></dt>
 <dd>Une parenthèse ou des guillemets ouvrants au début de la première ligne d'un texte restent sur la ligne.</dd>
 <dt><code>last</code></dt>
 <dd>Une parenthèse ou des guillemets fermants à la fin de la dernière ligne d'un texte restent sur la ligne.</dd>
 <dt><code>force-end</code></dt>
 <dd>Un point ou une virgule en fin de ligne restera sur cette ligne.</dd>
 <dt><code>allow-end</code></dt>
 <dd>Un point ou une virgule en fin de ligne restera sur cette ligne si la justification du texte ne laisse pas l'espace nécessaire.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
   Lorem ipsum dolor sit amet, consectetur
   adipiscing elit. Curabitur dignissim nunc
   mauris, et sollicitudin est scelerisque
   sed. Praesent laoreet tortor massa, sit
   amet vulputate nulla pharetra ut. Proin
   ornare commodo sodales. Class aptent
   taciti sociosqu ad litora torquent per
   conubia nostra, per inceptos himenaeos.
&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  hanging-punctuation: first;
  margin: .5rem;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemple')}}</p>

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
   <td>{{SpecName('CSS3 Text', '#hanging-punctuation-property', 'hanging-punctuation')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.hanging-punctuation")}}</p>
