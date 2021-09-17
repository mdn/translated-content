---
title: <display-listitem>
slug: Web/CSS/display-listitem
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/display-listitem
---
<div>{{CSSRef}}</div>

<p>Le mot-clé <code>list-item</code> permet à un élément de générer un pseudo-élément <code>::marker</code>  dont le contenu  est défini par les propriétés {{cssxref("list-style")}} (pour afficher une puce par exemple) avec une boîte principale du type indiquée pour organiser le contenu de l'élément.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une valeur <code>list-item</code> indiquera à l'élément de se comporter comme un élément d'une liste. Cette valeur peut être utilisée avec les propriétés {{CSSxRef("list-style-type")}} et {{CSSxRef("list-style-position")}}.</p>

<div class="note">
<p><strong>Note :</strong> Pour les navigateurs qui prennent en charge la syntaxe avec deux valeurs, si aucune valeur pour le mode intérieur n'est indiquée, sa valeur par défaut sera <code>flow</code>. Si aucune valeur n'est fournie pour le mode extérieur, la boîte principale aura un mode extérieur <code>block</code>.</p>
</div>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{CSSSyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.fausse-liste {
  display: list-item;
  list-style-position: inside;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="fausse-liste"&gt;Je vais m'afficher comme un élément de liste&lt;/div&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", "100%", 150)}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Prise_en_charge_de_list-item">Prise en charge de <code>list-item</code></h3>

<p>{{Compat("css.properties.display.list-item", 10)}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{CSSxRef("display")}}
  <ul>
   <li>{{CSSxRef("&lt;display-outside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-inside&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-internal&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-box&gt;")}}</li>
   <li>{{CSSxRef("&lt;display-legacy&gt;")}}</li>
  </ul>
 </li>
</ul>
