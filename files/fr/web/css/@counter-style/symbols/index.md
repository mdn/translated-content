---
title: symbols
slug: Web/CSS/@counter-style/symbols
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/symbols
---
<div>{{CSSRef}}</div>

<p>Le descripteur <strong><code>symbols</code></strong>, rattaché à la règle @ {{cssxref("@counter-style")}}, est utilisé pour définir les symboles à utiliser pour construire les représentations du compteur. Un symbole peut être une chaîne de caractères, une image ou un identifiant.</p>

<pre class="brush: css no-line-numbers">symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url('premier.svg') url('deuxieme.svg') url('troisieme.svg');
symbols: indic-numbers;
</pre>

<p>Le descripteur <code>symbols</code> doit être défini lorsque la valeur du descripteur {{cssxref('system')}} vaut <code>cyclic</code>, <code>numeric</code>, <code>alphabetic</code>, <code>symbolic</code> ou <code>fixed</code>. Lorsque <code>system</code> vaut <code>additive</code>, ce sera le descripteur {{cssxref('additive-symbols')}} qui sera utilisé afin de définir les symboles.</p>

<ul>
</ul>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<ul>
 <li>Des chaînes de caractères ({{cssxref("&lt;string&gt;")}}) délimitées par des quotes simples ou doubles. La barre oblique inversée (\) peut être utilisée afin d'échapper les caractères spéciaux. Ainsi, on peut utiliser des caractères Unicode de cette façon <code>"\24B6"</code>.</li>
 <li>Des images ({{cssxref("&lt;image&gt;")}}) en utilisant la notation fonctionnelle <code>url(chemin-vers-image.png)</code>. <strong>Attention : cette fonctionnalité (l'utilisation d'image) est à risque en termes d'implémentation et de conservation dans les spécifications et n'est implémentée par aucun navigateur actuellement.</strong></li>
 <li>Des identifiants ({{cssxref("&lt;custom-ident&gt;")}})</li>
</ul>

<dl>
 <dt><code>&lt;symbol&gt;</code></dt>
 <dd>Représente le symbole à utiliser pour le système de comptage. La valeur du descripteur <code>symbols</code> peut être :</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@counter-style symbols-exemple {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.exemple {
  list-style: symbols-exemple;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="exemple"&gt;
  &lt;li&gt;Un&lt;/li&gt;
  &lt;li&gt;Deux&lt;/li&gt;
  &lt;li&gt;Trois&lt;/li&gt;
  &lt;li&gt;Quatre&lt;/li&gt;
  &lt;li&gt;Cinq&lt;/li&gt;
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
   <td>{{SpecName('CSS3 Counter Styles', '#counter-style-symbols', 'symbols')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.counter-style.symbols")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("@counter-style")}},</li>
 <li>{{cssxref("list-style")}},</li>
 <li>{{cssxref("list-style-image")}},</li>
 <li>{{cssxref("list-style-position")}},</li>
 <li>{{cssxref("symbols", "symbols()")}}, la notation fonctionnelle utilisée pour créer des styles de compteur anonymes,</li>
 <li>{{cssxref("url()", "url()")}}.</li>
</ul>
