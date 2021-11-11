---
title: Lignes directrices du CSS
slug: MDN/Guidelines/Code_guidelines/CSS
tags:
  - CSS
  - Code
  - Guide
  - Directives
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/CSS
---
<div>{{MDNSidebar}}</div>

<p>Les directives suivantes couvrent la manière d'écrire les CSS pour les exemples de code MDN.</p>

<h2 id="In_this_article">Dans cet article</h2>

<ul>
 <li><a href="#high-level_guidelines">Lignes directrices de haut niveau</a>

  <ul>
   <li><a href="#dont_use_preprocessors">N'utilisez pas de préprocesseurs</a></li>
   <li><a href="#dont_use_specific_css_methodologies">N'utilisez pas de méthodologies CSS spécifiques</a></li>
   <li><a href="#use_flexiblerelative_units">Utiliser des unités flexibles/relatives</a></li>
   <li><a href="#dont_use_resets">Ne pas utiliser de réinitialisation</a></li>
   <li><a href="#plan_your_css_%e2%80%94_avoid_overriding">Planifiez votre CSS — évitez les surcharges</a></li>
  </ul>
 </li>
 <li><a href="#general_css_coding_style">Style général de codage CSS</a>
  <ul>
   <li><a href="#use_expanded_syntax">Utiliser une syntaxe étendue</a></li>
   <li><a href="#favor_longhand_rules_over_terse_shorthand">Privilégiez les règles longues aux règles raccourcies</a></li>
   <li><a href="#use_double_quotes_around_values">Utilisez des guillemets doubles autour des valeurs</a></li>
   <li><a href="#spacing_around_function_parameters">Espacement autour des paramètres de la fonction</a></li>
   <li><a href="#css_comments">Commentaires CSS</a></li>
   <li><a href="#dont_use_!important">Ne pas utiliser !important</a></li>
  </ul>
 </li>
 <li><a href="#specific_css_syntax_points">Points de syntaxe CSS spécifiques</a>
  <ul>
   <li><a href="#turning_off_borders_and_other_properties">Désactiver les bordures et autres propriétés</a></li>
   <li><a href="#use_mobile_first_media_queries">Utilisez des requêtes média "mobile first"</a></li>
  </ul>
 </li>
 <li><a href="#selectors">Sélecteurs</a>
  <ul>
   <li><a href="#dont_use_id_selectors">N'utilisez pas de sélecteurs ID</a></li>
   <li><a href="#put_multiple_selectors_on_separate_lines">Mettre les sélecteurs multiples sur des lignes séparées</a></li>
  </ul>
 </li>
</ul>

<h2 id="High-level_guidelines">Lignes directrices de haut niveau</h2>

<h3 id="Dont_use_preprocessors">N'utilisez pas de préprocesseurs</h3>

<p>N'utilisez pas la syntaxe des préprocesseurs, ex. <a href="https://sass-lang.com/">Sass</a>, <a href="http://lesscss.org/">Less</a>, ou <a href="http://stylus-lang.com/">Stylus,</a> dans votre code d'exemple MDN. MDN documente le langage CSS classique, et l'utilisation de préprocesseurs ne sert qu'à élever la barre pour comprendre les exemples, ce qui peut potentiellement perdre les lecteurs.</p>

<h3 id="Dont_use_specific_CSS_methodologies">N'utilisez pas de méthodologies CSS spécifiques</h3>

<p>Dans le même esprit que la directive précédente, n'écrivez pas de code d'exemple MDN en utilisant une méthodologie CSS spécifique telle que <a href="http://getbem.com/naming/">BEM</a> ou <a href="https://smacss.com/">SMACSS</a>. Même s'il s'agit de syntaxe CSS valide, les conventions de dénomination peuvent prêter à confusion pour les personnes qui ne sont pas familières avec ces méthodologies.</p>

<h3 id="Use_flexiblerelative_units">Utiliser des unités flexibles/relatives</h3>

<p>Pour une flexibilité maximale sur le plus grand nombre possible d'appareils, il est judicieux de dimensionner les conteneurs, le <code>padding</code>, etc. en utilisant des unités relatives comme les <code>em</code> et les <code>rem</code>, ou des pourcentages et des unités de « viewport » si vous souhaitez qu'ils varient en fonction de la largeur du « viewport ». Vous pouvez en savoir plus à ce sujet dans notre article <a href="/fr/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks#fluid_grids">Éléments de construction d'un design adaptatif (Responsive Design)</a>.</p>

<h3 id="Dont_use_resets">Ne pas utiliser de réinitialisation</h3>

<p>Pour un contrôle maximal des CSS sur toutes les plates-formes, beaucoup de gens avaient l'habitude d'utiliser les réinitialisations CSS pour supprimer tous les styles, avant de reconstruire les choses eux-mêmes. Cette méthode a certainement ses mérites, mais surtout dans le monde moderne, les réinitialisations CSS peuvent être excessives et entraîner beaucoup de temps supplémentaire passé à réimplémenter des choses qui n'étaient pas complètement cassées au départ, comme les marges par défaut, les styles de liste, etc.</p>

<p>Si vous avez vraiment envie d'utiliser une réinitialisation, envisagez d'utiliser <a href="https://necolas.github.io/normalize.css/">normalize.css de Nicolas Gallagher</a>, qui vise simplement à rendre les choses plus cohérentes d'un navigateur à l'autre, à se débarrasser de certains désagréments par défaut que nous supprimons toujours (les marges sur <code>&lt;body&gt;</code>, par exemple) et à corriger quelques bogues.</p>

<h3 id="Plan_your_CSS_—_avoid_overriding">Planifiez votre CSS — évitez les surcharges</h3>

<p>Avant de vous lancer dans l'écriture de gros morceaux de CSS, planifiez soigneusement vos styles. Quels styles généraux seront nécessaires, quelles mises en page différentes devrez-vous créer, quelles redéfinitions spécifiques devront être créées et seront-elles réutilisables ? Par-dessus tout, vous devez essayer d'éviter de créer trop de redéfinitions. Si vous vous retrouvez constamment en train d'écrire des styles pour ensuite les annuler quelques règles plus bas, vous devez probablement repenser votre stratégie.</p>

<h2 id="General_CSS_coding_style">Style général de codage CSS</h2>

<h3 id="Use_expanded_syntax">Utiliser une syntaxe étendue</h3>

<p>Vous pouvez utiliser différents styles d'écriture CSS, mais nous préférons le style étendu, avec le sélecteur/l'accolade ouvrante, l'accolade fermante et chaque déclaration sur une ligne distincte. Cela optimise la lisibilité et favorise la cohérence sur le MDN.</p>

<p>Utilisez ceci :</p>

<pre class="brush: css example-good">p {
  color: white;
  background-color: black;
  padding: 1rem;
}</pre>

<p>Pas cela :</p>

<pre class="brush: css example-bad">p { color: white; background-color: black; padding: 1rem; }</pre>

<p>En outre, gardez ces spécificités à l'esprit :</p>

<ul>
  <li>Insérez un espace entre le(s) sélecteur(s) et l'accolade ouvrante.</li>
  <li>Incluez toujours un point-virgule à la fin de la dernière déclaration, même si ce n'est pas strictement nécessaire.</li>
  <li>Mettez l'accolade de fermeture sur une nouvelle ligne.</li>
  <li>Dans chaque déclaration, mettez un espace après les deux points de séparation, mais pas avant.</li>
  <li>Utilisez 2 espaces pour l'indentation du code.</li>
</ul>

<h3 id="Favor_longhand_rules_over_terse_shorthand">Privilégiez les règles longues aux règles raccourcies</h3>

<p>En général, lorsque vous enseignez les spécificités de la syntaxe CSS, il est plus clair et plus évident d'utiliser des propriétés longues plutôt que des raccourcies (à moins bien sûr que l'enseignement du raccourci ne soit le but de l'exemple). N'oubliez pas que les exemples du MDN ont pour but d'enseigner aux gens, et non d'être efficaces ou astucieuses.</p>

<p>Tout d'abord, il est souvent plus difficile de comprendre ce que fait le raccourci. Il faut un certain temps pour comprendre exactement ce que fait la syntaxe <a href="/fr/docs/Web/CSS/font"><code>font</code></a>, par exemple :</p>

<pre class="brush: css">font: small-caps bold 2rem/1.5 sans-serif;</pre>

<p>Alors que celle-ci est plus immédiate en termes de compréhension :</p>

<pre class="brush: css">font-variant: small-caps;
font-weight: bold;
font-size: 2rem;
line-height: 1.5;
font-family: sans-serif;</pre>

<p>Deuxièmement, les raccourcis CSS comportent des pièges potentiels supplémentaires : des valeurs par défaut sont définies pour des parties de la syntaxe que vous n'avez pas explicitement définies, ce qui peut produire des réinitialisations inattendues des valeurs que vous avez définies plus tôt dans la cascade, ou d'autres effets attendus. Par exemple, la propriété <a href="/fr/docs/Web/CSS/grid"><code>grid</code></a> définit toutes les valeurs par défaut suivantes pour les éléments qui ne sont pas spécifiés :</p>

<ul>
  <li><a href="/fr/docs/Web/CSS/grid-template-rows"><code>grid-template-rows</code></a>: <code>none</code></li>
  <li><a href="/fr/docs/Web/CSS/grid-template-columns"><code>grid-template-columns</code></a>: <code>none</code></li>
  <li><a href="/fr/docs/Web/CSS/grid-template-areas"><code>grid-template-areas</code></a>: <code>none</code></li>
  <li><a href="/fr/docs/Web/CSS/grid-auto-rows"><code>grid-auto-rows</code></a>: <code>auto</code></li>
  <li><a href="/fr/docs/Web/CSS/grid-auto-columns"><code>grid-auto-columns</code></a>: <code>auto</code></li>
  <li><a href="/fr/docs/Web/CSS/grid-auto-flow"><code>grid-auto-flow</code></a>: <code>row</code></li>
  <li><a href="/fr/docs/Web/CSS/column-gap"><code>column-gap</code></a>: <code>0</code></li>
  <li><a href="/fr/docs/Web/CSS/row-gap"><code>row-gap</code></a>: <code>0</code></li>
  <li><a href="/fr/docs/Web/CSS/column-gap"><code>column-gap</code></a>: <code>normal</code></li>
  <li><a href="/fr/docs/Web/CSS/row-gap"><code>row-gap</code></a>: <code>normal</code></li>
</ul>

<p>En outre, certains raccourcis ne fonctionnent comme prévu que si vous incluez les différents composants de la valeur dans un certain ordre. Dans les animations CSS, par exemple :</p>

<pre class="brush: css">/* duration | timing-function | delay | iteration-count
   direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;</pre>

<p>À titre d'exemple, la première valeur qui peut être analysée comme un <a href="/fr/docs/Web/CSS/time" title="Le type de données CSS &lt;time&gt ; représente une valeur de temps exprimée en secondes ou en millisecondes. Il est utilisé dans les propriétés d'animation, de transition et autres propriétés connexes."><code>&lt;time&gt;</code></a> est affecté à la propriété <a href="/fr/docs/Web/CSS/animation-duration" title="La propriété CSS animation-duration définit la durée nécessaire à une animation pour effectuer un cycle. "><code>animation-duration</code></a>, et la seconde est affectée à <a href="/fr/docs/Web/CSS/animation-delay" title="La propriété CSS animation-delay définit le moment où une animation commence. L'animation peut démarrer plus tard, immédiatement dès son début, ou immédiatement et à mi-chemin de l'animation."><code>animation-delay</code></a>. Pour plus de détails, lisez l'intégralité de <a href="/fr/docs/Web/CSS/animation#syntax">syntaxe de l'animation</a>.</p>

<h3 id="Use_double_quotes_around_values">Utilisez des guillemets doubles autour des valeurs</h3>

<p>Lorsque des guillemets peuvent ou doivent être inclus, utilisez-les, et utilisez des guillemets doubles. Par exemple :</p>

<pre class="brush: css example-good">[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}</pre>

<h3 id="Spacing_around_function_parameters">Espacement autour des paramètres de la fonction</h3>

<p>Les paramètres des fonctions doivent comporter des espaces après les virgules de séparation, mais pas avant :</p>

<pre class="brush: css example-good">color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);</pre>

<h3 id="CSS_comments">Commentaires CSS</h3>

<p>Utilisez des commentaires de style CSS pour commenter le code qui n'est pas auto-documenté :</p>

<pre class="brush: css example-good">/* Il s'agit d'un commentaire de style CSS */</pre>

<p>Mettez vos commentaires sur des lignes séparées précédant le code auquel ils se réfèrent :</p>

<pre class="brush: css example-good">h3 {
  /* Crée une ombre portée rouge, décalée de 1px vers la droite et le bas, avec un rayon de flou de 2px. */
  text-shadow: 1px 1px 2px red;
  /* Définit la taille de la police au double de la taille de la police du document par défaut. */
  font-size: 2rem;
}</pre>

<p>Notez également que vous devez laisser un espace entre les astérisques et le commentaire, dans chaque cas.</p>

<h3 id="Dont_use_!important">Ne pas utiliser !important</h3>

<p><code>!important</code> est un dernier recours généralement utilisé uniquement lorsque vous devez remplacer quelque chose et qu'il n'y a pas d'autre moyen. Il s'agit d'une mauvaise pratique que vous devez éviter dans la mesure du possible.</p>

<p>Mauvais usage :</p>

<pre class="brush: css example-bad">.bad-code {
  font-size: 4rem !important;
}</pre>

<h2 id="Specific_CSS_syntax_points">Points de syntaxe CSS spécifiques</h2>

<h3 id="Turning_off_borders_and_other_properties">Désactiver les bordures et autres propriétés</h3>

<p>Lorsque vous désactivez les bordures (et toute autre propriété qui peut prendre <code>0</code> ou <code>none</code> comme valeurs), utilisez <code>0</code> plutôt que <code>none</code> :</p>

<pre class="brush: css example-good">border: 0;</pre>

<h3 id="Use_mobile_first_media_queries">Utilisez des requêtes média "mobile first"</h3>

<p>Lorsque vous incluez différents ensembles de styles pour différentes tailles de fenêtres d'affichage à l'aide de requêtes de médias dans la même feuille de style, il est judicieux de faire en sorte que le style par défaut avant l'application de toute requête de médias au document soit le style pour écran étroit/mobile, puis de le remplacer pour les fenêtres d'affichage plus larges dans des requêtes de médias successives.</p>

<pre class="brush: css example-good">/* Mise en page CSS par défaut pour les écrans étroits */

@media (min-width: 480px) {
  /* CSS pour les écrans de largeur moyenne */
}

@media (min-width: 800px) {
  /* CSS pour les écrans larges */
}

@media (min-width: 1100px) {
  /* CSS pour les écrans très larges */
}</pre>

<p>Cela présente de nombreux avantages, exposés dans notre article <a href="/fr/docs/Web/Progressive_web_apps/Responsive/Mobile_first">Priorité aux mobiles</a>.</p>

<h2 id="Selectors">Sélecteurs</h2>

<h3 id="Dont_use_ID_selectors">N'utilisez pas de sélecteurs ID</h3>

<p>Il n'est pas vraiment nécessaire d'utiliser des sélecteurs d'ID - ils sont moins flexibles (vous ne pouvez pas en ajouter d'autres si vous découvrez que vous en avez besoin de plus d'un), et il est plus difficile de les remplacer si nécessaire, car ils sont plus spécifiques que les classes.</p>

<p>Bonne pratique :</p>

<pre class="brush: css example-good">.editorial-summary {
  ...
}</pre>

<p>Mauvaise pratique :</p>

<pre class="brush: css example-bad">#editorial-summary {
  ...
}</pre>

<h3 id="Put_multiple_selectors_on_separate_lines">Mettre les sélecteurs multiples sur des lignes séparées</h3>

<p>Lorsqu'une règle comporte plusieurs sélecteurs, placez chaque sélecteur sur une nouvelle ligne. La liste des sélecteurs est ainsi plus facile à lire et les lignes de code sont plus courtes.</p>

<p>Faites ceci :</p>

<pre class="brush: css example-good">h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}</pre>

<p>Pas ça :</p>

<pre class="brush: css example-bad">h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}</pre>

<h2 id="Good_CSS_examples_on_MDN">De bons exemples de CSS sur MDN</h2>

<p>Vous pouvez trouver de bons extraits CSS concis et significatifs en haut de nos pages de référence des propriétés CSS - parcourez notre <a href="/fr/docs/Web/CSS/Reference#keyword_index">index des mots-clés CSS</a> pour en trouver. Nos exemples interactifs sont généralement écrits pour suivre les directives ci-dessus, mais sachez qu'ils peuvent différer à certains endroits, car ils ont pour la plupart été écrits avant la nouvelle rédaction des directives.</p>
