---
title: Mettre en forme les colonnes
slug: Web/CSS/CSS_Columns/Styling_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
translation_of: Web/CSS/CSS_Columns/Styling_Columns
original_slug: Web/CSS/CSS_Columns/Mettre_en_forme_les_colonnes
---
<div>{{CSSRef}}</div>

<p>Les boîtes de colonne créées au sein des conteneurs multi-colonnes sont des boîtes anonymes et leur mise en forme est donc limitée. Elle n'est toutefois pas inexistante. Dans ce guide nous verrons comment modifier l'espace entre les colonnes et comment mettre en forme une ligne entre les colonnes.</p>

<h2 id="Peut-on_mettre_en_forme_les_boîtes_des_colonnes">Peut-on mettre en forme les boîtes des colonnes ?</h2>

<p>Malheureusement, ce n'est pas possible actuellement. Il est impossible de cibler les boîtes anonymes des colonnes de quelque façon que ce soit. On ne peut donc pas changer la couleur d'arrière-plan d'une colonne donnée ou agrandir une colonne plus qu'une autre. De futures versions du module de spécification permettront peut-être de réaliser cela un jour mais nous devons pour le moment nous cantonner à paramétrer l'espacement entre les colonnes et à mettre en forme les lignes séparatrices entre les colonnes.</p>

<h2 id="L'espaceement_la_propriété_column-gap">L'espaceement : la propriété <code>column-gap</code></h2>

<p>L'espacement entre les colonnes est contrôlé par la propriété <code>column-gap</code>. Cette propriété était initialement définie dans le module de spécification <em>Multi-column Layout</em> mais est désormais définie dans le module de spécification <em><a href="/fr/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a></em> (dont le but est d'unifier la gestion des espacements entre les boîtes, que ce soit pour les colonnes ou pour d'autres types de disposition telles que <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">les grilles CSS</a>).</p>

<p>Dans une disposition multi-colonne, la valeur initiale de la propriété <code>column-gap</code> est <code>1em</code>. Cela signifie que les colonnes ne se touchent pas les unes les autres. Pour les autres méthodes de disposition, la valeur initiale de <code>column-gap</code> est 0. Le mot-clé <code>normal</code> est une valeur qui permet d'obtenir un écart de 1em.</p>

<p>Il est possible de modifier l'espacement en utilisant n'importe quelle unité de longueur pour <code>column-gap</code>. Dans l'exemple qui suit, on a ainsi paramétré <code>column-gap</code> avec la valeur 40px.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}</p>

<p>Les valeurs autorisées pour <code>column-gap</code> sont de type <code>&lt;length-percentage&gt;</code>, cela signifie que les pourcentages sont également autorisés. Lorsque de telles valeurs sont utilisées, elles sont calculées relativement à la largeur du conteneur multi-colonnes.</p>

<h2 id="Créer_un_délimiteur_entre_les_colonnes_column-rule">Créer un délimiteur entre les colonnes : <code>column-rule</code></h2>

<p>La spécification définit les propriétés <code>column-rule-width</code>, <code>column-rule-style</code> and <code>column-rule-color</code> et fournit une propriété raccourcie <code>column-rule</code>. Ces propriétés fonctionnent de la même façon que les propriétés relatives à la bordure. Toute valeur valide pour <code>border-style</code> pourra être utilisée pour <code>column-rule-style</code>.</p>

<p>Ces propriétés sont appliquées à l'élément qui est le conteneur multi-colonnes. Aussi, toutes les colonnes disposeront du même délimiteur. Les lignes sont uniquement dessinées entre les colonnes et pas sur les bords extérieurs. Les lignes sont également uniquement dessinées entre les colonnes qui ont du contenu.</p>

<p>Dans le prochain exemple, on a ajouté une ligne en pointillée, épaisse de 5 pixels et dont la couleur est <code>rebeccapurple</code>, sans utiliser la propriété raccourcie.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}</p>

<p>On notera que la ligne n'occupe pas d'espace supplémentaire. Autrement dit, une ligne plus épaisse ne « repoussera » pas les colonnes de part et d'autre. La ligne est superposée sur l'espace occupé par l'espacement entre les colonnes.</p>

<p>Dans le prochain exemple, on utilise une ligne très large de 40 pixels et un espacement qui mesure uniquement 10 pixels. On peut alors voir que la ligne est dessinée sous le contenu des colonnes. Pour avoir un espace de chaque côté de la ligne, il faut avoir un espacement supérieur à 40 pixels.</p>

<p>{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}</p>

<h2 id="Résumé">Résumé</h2>

<p>Voici comment mettre en forme les colonnes avec les contraintes actuelles. Dans le prochain guide, nous verrons comment <a href="/fr/docs/Web/CSS/CSS_Columns/Spanning_Columns">propager les éléments du conteneur sur l'ensemble des colonnes</a>.</p>
