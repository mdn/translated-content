---
title: suffix
slug: Web/CSS/@counter-style/suffix
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/suffix
---
<div>{{CSSRef}}</div>

<p>Le descripteur <code><strong>suffix</strong></code>, utilisé avec la règle @ {{cssxref("@counter-style")}}, afin de définir un symbole qui pourra être utilisé comme suffixe pour la représentation du marqueur. Le symbole en question pourra être une chaîne de caractères, une image ou un identifiant CSS. La valeur par défaut de ce descripteur sera <code>"\2E\20"</code> (un point « . » suivi par un espace).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Une valeur de type &lt;symbol&gt; */
suffix: "";
suffix: ") ";
</pre>

<h3 id="Valeur">Valeur</h3>

<dl>
 <dt><code>&lt;symbol&gt;</code></dt>
 <dd>Un symbole qui sera ajouté comme suffixe à la représentation du marqueur. Cette valeur peut être une valeur de type {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}} ou {{cssxref("&lt;custom-ident&gt;")}}.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.exemple {
  list-style: options;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="exemple"&gt;
  &lt;li&gt;Un&lt;/li&gt;
  &lt;li&gt;Deux&lt;/li&gt;
  &lt;li&gt;Trois&lt;/li&gt;
  &lt;li&gt;Autre&lt;/li&gt;
&lt;/ul&gt;</pre>

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
   <td>{{SpecName('CSS3 Counter Styles', '#descdef-counter-style-suffix', 'suffix')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.counter-style.suffix")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("list-style")}},</li>
 <li>{{cssxref("list-style-image")}},</li>
 <li>{{cssxref("list-style-position")}},</li>
 <li>{{cssxref("symbols", "symbols()")}}, la notation fonctionnelle utilisée pour créer des styles de compteur anonymes.</li>
</ul>
