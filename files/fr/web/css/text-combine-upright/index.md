---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/text-combine-upright
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-combine-upright</code></strong> définit comment intégrer une combinaison de plusieurs caractères dans l'espace normalement alloué à un seul caractère. Si la combinaison obtenue est plus large qu'<code>1em</code>, l'agent utilisateur devra compresser le contenu afin qu'il tienne sur <code>1em</code>. La combinaison est ensuite manipulée comme un seul glyphe pour la disposition et pour la décoration. Enfin, cette propriété n'a d'effet que sur les modes d'écriture verticaux.</p>

<p>Cela permet d'obtenir un effet appelé tate-chū-yoko (縦中横) en japonais ou 直書橫向 en chinois.</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
text-combine-upright: none;
text-combine-upright: all;

/* Valeurs pour les chiffres */
/* 2 chiffres qui se suivent prendront la place
   d'un caractère dans du texte vertical */
text-combine-upright: digits;
/* Compresse jusqu'à 4 chiffres consécutifs afin
   qu'ils occupent l'espace d'un caractère dans
   du texte vertical */
text-combine-upright: digits 4;

/* Valeurs globales */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Aucun traitement particulier n'est appliqué.</dd>
 <dt><code>all</code></dt>
 <dd>L'agent utilisateur tente de compresser tous les caractères consécutifs dans une même boîte afin qu'ils occupent l'espace d'un seul caractère sur l'axe vertical de la boîte.</dd>
 <dt><code>digits &lt;n&gt;?</code></dt>
 <dd>L'agent utilisateur tente d'afficher une suite de chiffres ASCII (U+0030–U+0039) avec au plus n caractères afin que cette suite occupe l'espace d'un seul caractère sur l'axe vertical de la boîte. La valeur par défaut (lorsque l'entier n'est pas indiqué) vaut 2. Les entiers en dehors de l'intervalle <code>[2;4]</code> sont considérés comme invalides.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_avec_digits">Exemple avec <code>digits</code></h3>

<p>Utiliser <code>digit</code><code>s</code> nécessite moins de règles et déclarations mais n'est pas encore largement pris en charge par les navigateurs.</p>

<pre class="brush: html">&lt;p lang="ja" class="exempleText"&gt;平成20年4月16日に&lt;/p&gt;
</pre>

<pre class="brush: css">.exempleText {
  writing-mode: vertical-lr;
  text-combine-upright: digits 2;
  font: 36px serif;
}</pre>

<p>{{EmbedLiveSample("Exemple_avec_digits", 100, 350, "https://mdn.mozillademos.org/files/12127/tate-chu-yoko.png")}}</p>

<h3 id="Exemple_avec_all">Exemple avec <code>all</code></h3>

<p>Pour utiliser <code>all</code>, on devra baliser chaque fragment de texte horizontal mais cette valeur est actuellement mieux prise en charge que <code>digits</code>.</p>

<pre class="brush: html">&lt;p lang="zh-Hant"&gt;民國&lt;span class="num"&gt;105&lt;/span
&gt;年&lt;span class="num"&gt;4&lt;/span
&gt;月&lt;span class="num"&gt;29&lt;/span&gt;日&lt;/p&gt;
</pre>

<pre class="brush: css">html { writing-mode: vertical-rl; font: 24px serif }
.num { text-combine-upright: all }
</pre>

<p>{{EmbedLiveSample("Exemple_avec_all", 250, 300, "https://mdn.mozillademos.org/files/13096/text-combine-upright-all.png")}}</p>

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
   <td>{{SpecName("CSS3 Writing Modes", "#propdef-text-combine-upright", "text-combine-upright")}}</td>
   <td>{{Spec2("CSS3 Writing Modes")}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS4 Writing Modes", "#propdef-text-combine-upright", "text-combine-upright")}}</td>
   <td>{{Spec2("CSS4 Writing Modes")}}</td>
   <td>Ajout de la valeur <code>digits</code>.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-combine-upright")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("writing-mode")}},</li>
 <li>{{cssxref("text-orientation")}}</li>
</ul>
