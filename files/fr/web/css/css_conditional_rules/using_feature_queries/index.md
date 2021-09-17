---
title: Utiliser les requêtes de fonctionnalité (feature queries)
slug: Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries
tags:
  - Amélioration progressive
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries
original_slug: >-
  Web/CSS/CSS_Conditional_Rules/Utiliser_requêtes_fonctionnalité_(feature_queries)
---
<div>{{CSSRef}}</div>

<p><strong>Les requêtes de fonctionnalité (ou <em>feature queries</em>)</strong> sont créées à l'aide de la règle <code><a href="/fr/docs/Web/CSS/@supports">@supports</a></code> et permettent aux développeurs web de tester la prise en charge d'une fonctionnalité donnée par le navigateur puis de fournir le code CSS qui sera appliqué selon le résultat de ce test. Dans ce guide, nous verrons comment gérer l'amélioration progressive grâce à l'aide des requêtes de fonctionnalité.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Les requêtes de fonctionnalité CSS s'inscrivent dans <a href="https://drafts.csswg.org/css-conditional-3/">le module de spécification CSS Conditional Rules</a> qui décrit également le fonctionnement de la règle <code><a href="/fr/docs/Web/CSS/@media">@media</a></code>. Vous pourrez ici voir que les requêtes de fonctionnalité fonctionnent de façon semblable aux requêtes de média. Pour les requêtes de média, on teste une caractéristique de l'environnement dans lequel la page web est affichée/exécutée tandis que pour les requêtes de fonctionnalité, on teste la prise en charge d'une fonctionnalité CSS dans le navigateur.</p>

<p>Une requête de fonctionnalité commence par une règle <code>@supports</code>, suivi du nom de la propriété et de la valeur qu'on souhaite tester. Il n'est pas possible de tester une propriété seule (ex. <code>display</code>) mais uniquement un couple nom/valeur :</p>

<pre class="brush: css">@supports (<em>propriété</em>: <em>valeur</em>) {
  <em>Règles CSS à appliquer</em>
}</pre>

<p>Si, par exemple, on souhaite vérifier qu'un navigateur prend en charge la propriété <code>row-gap</code>, on écrira la requête suivant. Dans la plupart des cas, peu importe la valeur utilisée avec cette propriété, on souhaite simplement la prise en charge de cette propriété et on peut donc utiliser n'importe quelle valeur valide pour ça.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}</p>

<p>La partie dédiée à la valeur de la propriété permet de tester les cas où une nouvelle valeur est spécifiée pour une propriété donnée. Le cas de <code>display</code> est particulièrement intéressant. Tous les navigateurs prennent en charge <code>display</code> (<code>display: block</code> faisait partie de CSS1) mais les valeurs <code>display: flex</code> et <code>display: grid</code> ont été ajoutées plus récemment. Les propriétés CSS peuvent parfois se voir doter de nouvelles valeurs et on peut alors tester leur prise en charge avec <code>@supports</code>.</p>

<h2 id="Tester_labsence_de_prise_en_charge_dune_fonctionnalité">Tester l'absence de prise en charge d'une fonctionnalité</h2>

<p>Il est aussi possible de tester l'absence de prise en charge d'une fonctionnalité en ajoutant le mot-clé <code>not</code> :</p>

<pre class="brush: css">@supports not (<em>propriété</em>: <em>valeur</em>) {
  <em>Règles CSS à appliquer</em>
}</pre>

<p>Les règles CSS contenues dans la requête suivante seront uniquement appliquées lorsque le navigateur ne prend pas en charge <code>row-gap</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}</p>

<h2 id="Tester_la_prise_en_charge_de_plusieurs_fonctionnalités">Tester la prise en charge de plusieurs fonctionnalités</h2>

<p>Si on souhaite tester la prise en charge de plusieurs fonctionnalités en même temps, on pourra les combiner avec le mot-clé <code>and</code> :</p>

<pre class="brush: css">@supports (<em>property1</em>: <em>value</em>) and (<em>property</em>2: <em>value</em>) {
<em>  CSS rules to apply</em>
}</pre>

<p>On peut, par exemple, vérifier que le navigateur prend en charge les formes (<em>shapes</em>) et grilles CSS grâce à une règle qui teste cette conjonction. La règle suivante renverra <code>true</code> uniquement si <code>shape-outside: circle()</code> et <code>display: grid</code> sont pris en charge par le navigateur.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}</p>

<p>De la même façon, on peut utiliser le mot-clé <code>or</code> si on souhaite tester la prise en charge d'au moins une fonctionnalité :</p>

<pre class="brush: css">@supports (<em>property1</em>: <em>value</em>) or (<em>property</em>2: <em>value</em>) {<em>
  CSS rules to apply</em>
}</pre>

<p>Cela peut s'avérer particulièrement utile lorsqu'un préfixe est présent dans le nom d'une propriété (on peut alors tester la prise en charge de la propriété standard et des versions préfixées).</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}</p>

<h2 id="Limites_des_requêtes_de_fonctionnalité">Limites des requêtes de fonctionnalité</h2>

<p>Une règle <code>@supports</code> ne permet de vérifier qu'un navigateur peut interpréter une ou plusieurs paires de propriétés/valeurs. Si cette paire est comprise par le navigateur, celui-ci renverra une réponse positive. Une telle requête ne permet pas d'indiquer que la fonctionnalité est complètement prise en charge, sans bug…</p>

<p>De plus, de telles requêtes ne permettent pas de tester une <em>implémentation partielle</em>. Prenons l'exemple de la propriété <code>gap</code>, à l'heure actuelle (novembre 2019) : tous les navigateurs prennent en charge <code>gap</code> avec les grilles CSS et seul Firefox prend en charge <code>gap</code> avec les boîtes flexibles (<em>flexbox</em>). Si on teste la propriété <code>gap</code> car on souhaite l'utiliser avec les boîtes flexibles, on recevra une réponse positive bien que ce ne soit pas implémenté.</p>

<h2 id="Comment_utiliser_supports_pour_lamélioration_progressive">Comment utiliser <code>@supports</code> pour l'amélioration progressive ?</h2>

<p>Les requêtes de fonctionnalité sont un outil précieux pour améliorer un site de façon progressive. Elles permettent de fournir une solution fonctionnelle pour tous les navigateurs et d'améliorer le résultat pour les navigateurs qui prennent en charge de nouvelles fonctionnalités.</p>

<p>Toutefois, il existe des navigateurs pour lesquels même les requêtes de fonctionnalité/<code>@supports</code> ne sont pas pris en charge. Ainsi, si on souhaite utiliser les grilles CSS (qui ne sont pas prises en charge par IE11), on ne peut pas tester leur prise en charge dans IE11 car ce dernier ne permet pas d'utiliser <code>@supports</code>. En pratique, cela ne devrait pas poser de problème : le code CSS principal est destiné aux navigateurs les plus anciens et on ajoute le CSS plus récent dans les requêtes de fonctionnalité.</p>

<p>Prenons un exemple plus construit.</p>

<p>Imaginons qu'on veuille créer une disposition avec trois boîtes qui se suivent sur une ligne. Idéalement, on voudrait utiliser <a href="/fr/docs/Web/CSS/CSS_Grid_Layout">les grilles CSS</a>. Toutefois, on voudrait aussi une disposition qui fonctionne pour les navigateurs plus anciens avec des éléments flottants. Pour commencer, on crée la disposition flottante avec le code suivante (on a alors trois colonnes).</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step1.html", '100%', 900)}}</p>

<p>Lorsque les navigateurs ne comprennent pas une propriété ou une valeur CSS, ils l'ignorent. On peut donc améliorer progressivement notre disposition avec les grilles CSS. Les navigateurs qui ne prennent pas en charge les grilles ignoreront la valeur <code>grid</code> pour la propriété <code>display</code>. Une fois qu'un objet flottant devient un élément de grille, son caractère flottant est retiré (voir <a href="/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Prendre en charge les navigateurs plus anciens</a>) et la grille écrase alors la version flottante.</p>

<p>Un problème persiste cependant. La propriété <code>width</code>, utilisée par les objets flottants pour afficher trois colonnes, est désormais interprétée par la grille comme étant la largeur de la piste pour la colonne (et pas la largeur du conteneur comme c'était le cas pour la disposition flottante).</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step2.html", '100%', 900)}}</p>

<p>Il faut une façon de retirer la largeur si <code>display: grid</code> est pris en charge. C'est là que les requêtes de fonctionnalité montrent leur force. On peut réinitialiser <code>width</code> avec la valeur <code>auto</code> si les grilles sont prises en charge.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step3.html", '100%', 900)}}</p>

<p>Dans le scénario précédent, peu importe que IE11 ne prenne pas en charge les requêtes de fonctionnalité ou les grilles CSS : c'est la version flottante qui sera utilisée dans tous les cas où le navigateur ne prend pas en charge les grilles.</p>

<p>Une autre façon d'écrire cette solution consiste à grouper le code utilisant la grille dans une même requête de fonctionnalité.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step4.html", '100%', 900)}}</p>

<p>De cette façon, on a un peu plus de code mais on peut alors tester le fonctionnement par défaut en changeant simplement le nom de la valeur. Dans l'exemple qui suit, vous pouvez ainsi alterner entre les deux solutions en changeant <code>display: grid</code> en <code>display: grip</code> (une valeur invalide et donc non prise en charge).</p>

<h2 id="Résumé">Résumé</h2>

<p>Les requêtes de fonctionnalité permettent d'utiliser des fonctionnalités récentes dans l'amélioration progressive de sites fonctionnels avec les anciens navigateurs. En destinant le code CSS aux navigateurs qui le prennent en charge, on ne risque pas d'interférences avec la disposition de base (comme nous avons pu le voir avec l'exemple précédent sur les grilles CSS).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La règle <a href="/fr/docs/Web/CSS/@supports">@supports</a></li>
 <li><a href="/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Apprendre les dispositions en CSS et la prise en charge des anciens navigateurs</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_amélioration_progressive">Les grilles CSS et l'amélioration progressive</a></li>
 <li><a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/">Utiliser les requêtes de fonctionnalités en CSS (billet du blog Hacks en anglais)</a></li>
</ul>
