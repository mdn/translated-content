---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - Mot-clé
  - Reference
  - Web
translation_of: Web/CSS/unset
---
<div>{{CSSRef}}</div>

<p>Le mot-clé <strong><code>unset</code></strong> correspond à la combinaison des mots-clés {{cssxref("initial")}} et {{cssxref("inherit")}}. Comme les autres mots-clés globaux à tout CSS, il peut être utilisé pour n'importe quelle propriété CSS, y compris la propriété raccourcie {{cssxref("all")}}. Ce mot-clé <em>réinitialise</em> la propriété afin que sa valeur soit la valeur héritée depuis l'élément parent ou soit la valeur initiale (s'il n'y a pas d'héritage). Autrement dit, s'il y a de l'héritage, ce mot-clé se comporte comme <code>inherit</code>, sinon, il se comporte comme <code>initial</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Avec_color">Avec <code>color</code></h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  color: red;
}

#sidebar p {
  color: unset;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text is red&lt;/p&gt;
&lt;div id="sidebar"&gt;
  &lt;p&gt;This text has the default color&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('Avec_color', '100%', '120')}}</p>

<h3 id="Avec_border">Avec <code>border</code></h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.truc p {
  border-color: unset;
}</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;Ce texte a une bordure rouge.&lt;/p&gt;
&lt;div class="toto"&gt;
  &lt;p&gt;Ce texte a une bordure rouge&lt;/p&gt;
&lt;/div&gt;
&lt;div class="truc"&gt;
  &lt;p&gt;Ce texte a une bordure noire (la valeur initiale, non héritée)&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample('Avec_border','100%','200')}}</p>

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
   <td>{{SpecName('CSS4 Cascade', '#inherit-initial', 'unset')}}</td>
   <td>{{Spec2('CSS4 Cascade')}}</td>
   <td>Aucun changement depuis Level 3</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Cascade', '#inherit-initial', 'unset')}}</td>
   <td>{{Spec2('CSS3 Cascade')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.global_keywords.unset")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les valeurs globales qui peuvent s'appliquer pour toutes les propriétés CSS :
  <ul>
   <li>{{cssxref("initial")}},</li>
   <li>{{cssxref("inherit")}},</li>
   <li>{{cssxref("unset")}},</li>
   <li>{{cssxref("revert")}}.</li>
  </ul>
 </li>
 <li>La propriété {{cssxref("all")}} est une propriété raccourcie qui permet de réinitialiser l'ensemble des propriétés avec leurs valeurs initiales, héritées, annulées ou indéfinies.</li>
</ul>
