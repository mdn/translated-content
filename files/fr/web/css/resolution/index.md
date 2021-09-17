---
title: <resolution>
slug: Web/CSS/resolution
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/resolution
---
<div>{{CSSRef}}</div>

<p>Le type de donnée CSS <strong><code>&lt;resolution&gt;</code></strong>, utilisé dans les <em><a href="/fr/docs/Web/CSS/Media_Queries">media queries</a></em>, décrit la densité de pixels d'un appareil d'affichage, c'est-à-dire sa résolution.</p>

<p>Les dimensions font référence aux unités CSS (un pixel CSS, un centimètre CSS, etc.) et non aux dimensions physiques.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une valeur de ce type sera composée d'un nombre (une valeur de type {{cssxref("&lt;number&gt;")}}) immédiatement suivi d'une unité de résolution (<code>dpi</code>, <code>dpcm</code>, …). Comme pour les autres dimensions CSS, il n'y a aucun espace entre la valeur numérique et l'unité.</p>

<p>Bien que toutes les unités représentent la même chose pour la valeur <code>0</code>, l'unité ne peut être omise dans ce cas puisque ce n'est pas une donnée de type {{cssxref("&lt;length&gt;")}} : <code>0</code> est invalide et ne représente pas <code>0dpi</code>, <code>0dpcm</code>, ni <code>0dppx</code>.</p>

<h3 id="Unités">Unités</h3>

<dl>
 <dt><code>dpi</code></dt>
 <dd>Cette unité représente le nombre de <a href="https://fr.wikipedia.org/wiki/Point_par_pouce">points par pouce</a>. Un écran compte habituellement 72 ou 96 ppi (dpi), tandis qu'un document imprimé en compte généralement un nombre beaucoup plus élevé. Puisque 1 pouce équivaut à 2,54 cm, <code>1 dpi ≈ 0,39 dpcm</code>.</dd>
 <dt><code>dpcm</code></dt>
 <dd>Cette unité représente le nombre de <a href="https://fr.wikipedia.org/wiki/Point_par_pouce#Tableau_de_conversion">points par centimètre</a>. Puisque 1 pouce équivaut à 2.54 cm, <code>1dpcm ≈ 2,54 dpi</code>.</dd>
 <dt><code>dppx</code></dt>
 <dd>Cette unité représente le nombre de points par unité CSS <code>px</code>. Puisque le ratio entre les unités CSS <code>in</code> et CSS <code>px</code> vaut 1:96, <code>1 dppx</code> est équivalent à <code>96 dpi</code>, ce qui correspond à la résolution par défaut des images affichées en CSS tel que défini par {{cssxref("image-resolution")}}.</dd>
 <dt><code>x</code></dt>
 <dd>Un alias pour <code>dppx</code>.</dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Bien que le nombre <code>0</code> représente la même mesure pour ces différentes unités. Si la valeur est écrite sans unité, elle sera considérée comme invalide. Autrement dit, <code>0</code> est invalide et ne représente pas <code>0dpi</code>, <code>0dpcm</code> ou <code>0dppx</code>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Usage_correct">Usage correct</h3>

<p>Voici quelques exemples d'utilisation correcte de données de type <code>&lt;resolution&gt;</code> :</p>

<pre class="brush: css">96dpi                                              Usage correct : un {{cssxref("&lt;number&gt;")}} (ici un {{cssxref("&lt;integer&gt;")}}) suivi d'une unité.
@media print and (min-resolution: 300dpi) { ... }  Usage correct dans le contexte d'une <a href="/fr/docs/Web/CSS/Media_Queries/Using_media_queries">media query</a>.
</pre>

<h3 id="Usages_incorrects">Usages incorrects</h3>

<pre class="brush: css">72 dpi    Incorrect : les espaces ne sont pas acceptés entre le {{cssxref("&lt;number&gt;")}} et l'unité.
ten dpi   Incorrect : seules des expressions numériques sont acceptées.
0         Incorrect : l'unité ne peut être omise que pour l'expression de la valeur 0 de type {{cssxref("&lt;length&gt;")}}.
</pre>

<h3 id="Exemple_appliqué">Exemple appliqué</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">/* Saurez-vous trouver votre résolution en dpi */
/* via l'exemple live ?                        */
@media screen and (min-resolution: 100dpi) {
  .exemple {
    background-color: palegreen;
  }
}

@media screen and (max-resolution: 99dpi) {
  .exemple {
    background-color: orange;
  }
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="exemple"&gt;
  À ces mots le Chapelier ouvrit de grands yeux ; mais
  il se contenta de dire : « Pourquoi une pie
  ressemble-t-elle à un pupitre ? »
&lt;/p&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_appliqué","200","200")}}</p>

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
   <td>{{SpecName('CSS4 Values', '#resolution', '&lt;resolution&gt;')}}</td>
   <td>{{Spec2('CSS4 Values')}}</td>
   <td>Ajout de l'unité <code>x</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Values', '#resolution', '&lt;resolution&gt;')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td>Ajout de l'unité <code>dppx</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#resolution', '&lt;resolution&gt;')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.resolution")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Media_Queries">Les <em>media queries</em> CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/@media/resolution">La caractéristique média <code>resolution</code></a></li>
</ul>
