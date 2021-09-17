---
title: speak-as
slug: Web/CSS/@counter-style/speak-as
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/speak-as
---
<div>{{CSSRef}}</div>

<p>Le descripteur <strong><code>speak-as</code></strong>, rattaché à la règle @ {{cssxref("@counter-style")}}, permet d'indiquer la représentation sonore du compteur qui doit être utilisée par l'agent utilisateur si nécessaire. Ainsi, on peut utiliser ce descripteur pour que le compteur soit énoncé comme un nombre ou avec un signal audio particulier.</p>

<p>Ce descripteur pourra prendre les valeurs <code>auto</code>, <code>bullets</code>, <code>numbers</code>, <code>words</code>, <code>spell-out</code> ou alors pourra pointer vers un autre style de compteur avec le nom de ce style.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css">/* Valeurs avec un mot-clé */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* Nom d'un autre style @counter-style */
speak-as: &lt;counter-style-name&gt;;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Dans ce cas, la valeur réelle de <code>speak-as</code> sera définie selon la valeur utilisée pour le descripteur {{cssxref("system")}} :
 <ul>
  <li>Si <code>system</code> vaut <code>alphabetic</code>, <code>speak-as</code> sera alors synonyme de <code>spell-out</code>.</li>
  <li>Si <code>system</code> vaut <code>cyclic</code>, <code>speak-as</code> sera alors synonyme de <code>bullets</code>.</li>
  <li>Si <code>system</code> vaut <code>extends</code>, la valeur de <code><em>speak-as</em></code> sera la même que celle correspondante à <code>auto</code> dans le style étendu.</li>
  <li>Dans les autres cas, le comportement de <code>numbers</code> sera utilisé.</li>
 </ul>
 </dd>
 <dt><code>bullets</code></dt>
 <dd>Un morceau ou un signal sonore utilisé par l'agent utilisateur et qui représente la façon d'énoncer une liste non-ordonnée.</dd>
 <dt><code>numbers</code></dt>
 <dd>La valeur numérique du compteur sera énoncée dans la langue du document.</dd>
 <dt><code>words</code></dt>
 <dd>L'agent utilisateur génèrera une représentation normale du compteur et la lira comme un mot, dans la langue du document.</dd>
 <dt><code>spell-out</code></dt>
 <dd>L'agent utilisateur génèrera une représentation normale du compteur et l'énoncera en l'épelant. Si l'agent utilisateur ne sait pas comment prononcer une valeur du compteur, il la prononcera comme avec la valeur <code>numbers</code>.</dd>
 <dt><code>&lt;counter-style-name&gt;</code></dt>
 <dd>Si la valeur du descripteur est le nom d'un autre style de compteur, ce sera la valeur de <code>speak-as</code> de ce style qui sera utilisée. Si la style visé n'existe pas, cette valeur sera alors synonyme de <code>auto</code>.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@counter-style speak-as-exemple {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}


.exemple {
  list-style: speak-as-exemple;
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

<h2 id="Accessibilité">Accessibilité</h2>

<p>La prise en charge de cette fonctionnalité par les outils d'assistance est actuellement très restreinte. Veillez à ne pas reposer sur cette propriété si vous souhaitez transmettre des informations majeures quant au but de la page.</p>

<ul>
 <li><a href="https://css-tricks.com/lets-talk-speech-css/">Let's Talk About Speech CSS, CSS Tricks</a></li>
</ul>

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
   <td>{{SpecName('CSS3 Counter Styles', '#counter-style-speak-as', 'speak-as')}}</td>
   <td>{{Spec2('CSS3 Counter Styles')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.counter-style.speak-as")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("list-style")}},</li>
 <li>{{cssxref("list-style-image")}},</li>
 <li>{{cssxref("list-style-position")}},</li>
 <li>{{cssxref("symbols", "symbols()")}} : la notation fonctionnelle qui permet de créer des styles de compteur anonymes.</li>
</ul>
