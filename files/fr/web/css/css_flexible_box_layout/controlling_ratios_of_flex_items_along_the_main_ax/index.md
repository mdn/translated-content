---
title: Contrôler les proportions des boîtes flexibles le long de l'axe principal
slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
tags:
  - Boîtes flexibles
  - CSS
  - Flex
  - Guide
  - Intermediate
  - flexbox
translation_of: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
original_slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal
---
<div>{{CSSRef}}</div>

<p>Dans ce guide, nous verrons les trois propriétés appliquées aux éléments flexibles qui permettent de contrôler leurs tailles et flexibilités le long de l'axe principal : {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} et {{cssxref("flex-basis")}}. Comprendre le fonctionnement de ces propriétés est primordial pour maîtriser les boîtes flexibles.</p>

<h2 id="Un_premier_aperçu">Un premier aperçu</h2>

<p>Ces trois propriétés contrôlent différents aspects relatifs à la flexibilité des éléments :</p>

<ul>
 <li><code>flex-grow</code> : quelle proportion de l'espace libre peut-on allouer en supplément à cet élément ?</li>
 <li><code>flex-shrink</code> : quelle proportion de l'espace peut être retirée à cet élément ?</li>
 <li><code>flex-basis</code> : quelle est la taille de l'élément avant tout agrandissement/réduction ?</li>
</ul>

<p>Ces propriétés sont généralement définies via la propriété raccourcie {{cssxref("flex")}}. Le code suivant définira <code>flex-grow</code> avec la valeur <code>2</code>, <code>flex-shrink</code> avec la valeur <code>1</code> et <code>flex-basis</code> avec la valeur <code>auto</code>.</p>

<pre class="brush: css no-line-numbers">.item {
  flex: 2 1 auto;
}
</pre>

<p>Dans l'article sur <a href="/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">les concepts de base relatifs aux boîtes flexibles</a>, nous avons pu introduire ces propriétés. Ici, nous les étudierons en profondeur afin de comprendre comment le navigateur les interprète.</p>

<h2 id="Les_concepts_majeurs_relatifs_à_l'axe_principal">Les concepts majeurs relatifs à l'axe principal</h2>

<p>Avant de rentrer dans le détail des propriétés, définissons certains concepts clés qui interviennent lorsqu'on travaille sur les proportions le long de l'axe principal. Ces concepts se basent sur la taille <em>naturelle</em> des éléments flexibles (avant tout redimensionnement) et sur la notion d'espace libre.</p>

<h3 id="Le_dimensionnement_des_objets_flexibles">Le dimensionnement des objets flexibles</h3>

<p>Afin de connaître l'espace disponible pour l'organisation des éléments flexibles, le navigateur doit connaître la taille de l'élément. Comment faire lorsque les éléments ne sont pas dimensionnés avec une largeur ou une hauteur exprimée dans une unité de longueur absolue ?</p>

<p>CSS permet d'utiliser les valeurs {{cssxref('width','min-content','#min-content')}} et  {{cssxref('width','max-content','#max-content')}} — ces mots-clés sont définis <a href="https://drafts.csswg.org/css-sizing-3/#width-height-keywords">dans la spécification CSS pour le dimensionnement intrinsèque et extrinsèque</a> et ces valeurs peuvent être utilisées comme <a href="/fr/docs/Web/CSS/length">unité de longueurs</a>.</p>

<p>Dans l'exemple qui suit, on a deux paragraphes qui contiennent chacun une chaîne de caractères. La largeur du premier paragraphe est <code>min-content</code>. Si le navigateur utilisé prend en charge ce mot-clé, on peut voir que le texte passe à la ligne dès que c'est possible, sans dépasser de la boîte. Autrement dit, la longueur <code>min-content</code> correspond à la taille du plus grand mot du paragraphe.</p>

<p>Dans le second paragraphe, on utilise la valeur <code>max-content</code> et on voit le résultat opposé. Le texte prend autant de place que possible et aucun saut à la ligne supplémentaire n'est introduit. Le texte dépasserait de la boîte si le conteneur était trop étroit.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}</p>

<p>Si votre navigateur ne prend pas en charge ces mots-clés, les paragraphes seront affichés normalement. La capture d'écran qui suit illustre le résultat obtenu avec un navigateur compatible :</p>

<p><img alt="Le premier paragraphe est aussi large que le plus long mot qu'il contient alors que le second est étendu sur une seule ligne et dépasse." src="ratios-size.png"></p>

<p>Pour la suite de cet article, gardez à l'esprit l'impact de <code>min-content</code> et <code>max-content</code> lorsque nous verrons les propriétés <code>flex-grow</code> et <code>flex-shrink</code>.</p>

<h3 id="Espace_libre_positif_et_négatif">Espace libre positif et négatif</h3>

<p>Pour étudier ces propriétés, nous devons définir le concept d'<strong>espace libre positif et négatif</strong>. Lorsqu'un conteneur flexible possède un espace libre positif, il dispose de plus d'espace qu'il n'est nécessaire pour afficher les éléments flexibles qu'il contient. Si on a, par exemple, un conteneur dont la largeur mesure 500 pixels, la propriété {{cssxref("flex-direction")}} qui vaut <code>row</code> et trois éléments qui mesurent chacun 100 pixels, il reste alors 200 pixels d'espace libre positif qui pourrait être réparti entre les éléments si on le souhaitait.</p>

<p><img alt="Une image illustrant l'espace restant après que les éléments aient été affichés." src="basics7.png"></p>

<p>L'espace libre négatif est l'espace supplémentaire qui aurait été nécessaire pour contenir tous les éléments à l'intérieur du conteneur flexible. Si on dispose d'un conteneur dont la largeur mesure 500 pixels et trois éléments flexibles dont chacun mesure 200, l'espace total occupé mesure 600 pixels et on a donc 100 pixels d'espace libre négatif. Cet espace pourrait être retiré des éléments afin qu'ils soient contenus dans le conteneur.</p>

<p><img alt="Les objets dépassent du conteneur." src="ratios1.png"></p>

<p>C'est cette distribution de l'espace libre qu'il est nécessaire de comprendre afin d'étudier les différentes propriétés relatives aux propriétés flexibles.</p>

<p>Les exemples étudiés par la suite utilisent la propriété {{cssxref("flex-direction")}} avec la valeur <code>row</code>, ce sera donc leur largeur qui sera leur dimension principale. Vous pouvez modifier les exemples afin d'utiliser <code>flex-direction: column</code> (dans ce cas, l'axe principal sera celui des colonnes et la dimension principale sera la hauteur).</p>

<h2 id="La_propriété_flex-basis">La propriété <code>flex-basis</code></h2>

<p>La propriété {{cssxref("flex-basis")}} définit la taille initiale de l'élément flexible avant la répartition de l'espace. La valeur initiale de cette propriété est <code>auto</code>. Si  <code>flex-basis</code> vaut <code>auto</code>, le navigateur vérifie si la taille de l'élément est définie de façon absolue et utilise cette valeur pour <code>flex-basis</code> (par exemple si on indique dans la feuille de style que l'élément mesure 200 pixels, c'est cette mesure qui sera utilisée comme valeur pour <code>flex-basis</code> pour cet élément).</p>

<p>Si la taille initiale de l'élément n'est pas définie de façon absolue, <code>auto</code> correspondra à la taille déterminée automatique. C'est là qu'on comprend mieux l'utilité de <code>min-</code> et <code>max-content</code>, car la boîte flexible utilisera <code>max-content</code> comme valeur pour <code>flex-basis</code>. Dans l'exemple suivant, nous verrons comment en tirer parti.</p>

<p>Dans cet exemple, on crée un ensemble de boîtes inflexibles avec la valeur <code>0</code> pour <code>flex-grow</code> et <code>flex-shrink</code>. On peut voir comment le premier objet, ayant une largeur explicite de 150 pixels, occupe une <code>flex-basis</code> de <code>150px</code> tandis que les deux autres objets qui n'ont pas de largeur sont dimensionnés en fonction de la largeur de leur contenu.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}</p>

<p>En plus du mot-clé <code>auto</code>, on peut également utiliser le mot-clé <code>content</code> comme valeur pour <code>flex-basis</code>. Ainsi, <code>flex-basis</code> sera calculée en fonction de la taille du contenu, même s'il y a une largeur explicitement définie sur l'objet. Ce mot-clé est plus récent et est moins largement pris en charge. Toutefois, on peut obtenir le même effet en utilisant le mot-clé <code>auto</code> et en s'assurant que l'objet n'a pas de largeur définie, ainsi, le dimensionnement automatique sera effectué en fonction du contenu.</p>

<p>Si on souhaite que la boîte flexible ignore complètement la taille du contenu lors de la répartition de l'espace, on pourra utiliser <code>flex-basis</code> avec la valeur <code>0</code>. En résumé, cela revient à indiquer que tout l'espace est disponible et peut être réparti proportionnellement. Nous verrons des exemples utilisant cette valeur lorsque nous étudierons <code>flex-grow</code>.</p>

<h2 id="La_propriété_flex-grow">La propriété <code>flex-grow</code></h2>

<p>La propriété {{cssxref("flex-grow")}} définit <strong>le coefficient d'agrandissement flexible</strong>, qui détermine la façon dont l'objet flexible grandira par rapport aux autres objets flexibles du même conteneur lorsque l'espace libre sera distribué.</p>

<p>Si tous les objets possèdent la même valeur pour le coefficient <code>flex-grow</code>, l'espace sera réparti également entre chacun. Dans ce cas, on utilisera généralement la valeur <code>1</code>. Ceci étant dit, on pourrait tout aussi bien utiliser la valeur <code>88</code>, <code>100</code> ou <code>1.2</code> — ce coefficient est un simple ratio. Si le coefficient est le même pour tous les objets et qu'il reste de l'espace libre dans le conteneur, cet espace sera réparti équitablement.</p>

<h3 id="Combiner_flex-grow_et_flex-basis">Combiner <code>flex-grow</code> et <code>flex-basis</code></h3>

<p>Les choses se compliquent lorsque <code>flex-grow</code> et <code>flex-basis</code> interagissent. Prenons un exemple où trois objets flexibles ont chacun des contenus de longueurs différentes et auxquels on applique la règle suivante :</p>

<p><code>flex: 1 1 auto;</code></p>

<p>Dans ce cas, <code>flex-basis</code> vaut <code>auto</code> et les objets n'ont pas de largeur explicite définie : ils sont donc dimensionnés automatiquement. Cela signifie que la boîte flexible utilisera la taille <code>max-content</code> des éléments. Après avoir disposé les objets, il reste de l'espace libre dans le conteneur flexible (ce qui correspond à la zone hachurée de la figure suivante) :</p>

<p><img alt="Une image illustrant l'espace libre positif avec une zone hachurée." src="ratios2.png"></p>

<p>On utilise ici une valeur <code>flex-basis</code> égale à la taille du contenu, l'espace disponible qui peut être distribué est donc égal à la taille du conteneur (ici sa largeur) moins la taille des éléments. Cet espace est partagé équitablement entre les différents objets. Ainsi, l'objet le plus grand finira avec une taille plus grande, car sa taille de départ est plus importante bien que la même quantité d'espace restant ait été affectée aux autres objets :</p>

<p><img alt="L'espace positif est réparti entre les éléments." src="ratios3.png"></p>

<p>Si on souhaite obtenir trois objets de la même taille alors qu'ils ont des tailles initiales différentes, on pourra utiliser :</p>

<p><code>flex: 1 1 0;</code></p>

<p>Ici, on indique que, lors de la phase de répartition de l'espace, la taille des objets vaut <code>0</code> — tout l'espace peut être utilisé. Or, les trois objets ayant tous le même coefficient <code>flex-grow</code>, ils récupèrent chacun la même quantité d'espace. On obtient donc trois objets flexibles de même largeur.</p>

<p>Vous pouvez modifier le coefficient <code>flex-grow</code> pour le passer de 1 à 0 dans l'exemple qui suit pour observer la façon dont les objets se comportent :</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}</p>

<h3 id="Affecter_différents_coefficients_flex-grow_aux_éléments">Affecter différents coefficients <code>flex-grow</code> aux éléments</h3>

<p>Notre compréhension du fonctionnement de <code>flex-grow</code> avec <code>flex-basis</code> nous permet de mieux contrôler chacun des éléments en leur affectant différents coefficients <code>flex-grow</code>. Si on conserve la valeur <code>0</code> pour <code>flex-basis</code> afin que tout l'espace soit distribué, on pourra affecter différentes valeurs de <code>flex-grow</code> afin qu'ils grandissent différemment. Dans l'exemple qui suit, on utilise les valeurs suivantes :</p>

<ul>
 <li><code>1</code> pour le premier élément</li>
 <li><code>1</code> pour le deuxième élément</li>
 <li><code>2</code> pour le troisième</li>
</ul>

<p>On utilise <code>flex-basis</code> avec la valeur <code>0</code> ce qui signifie que l'espace disponible est réparti de la façon suivante. On additionne les différents facteurs <code>flex-grow</code> puis on divise l'espace libre du conteneur par cette somme (dans notre exemple, elle vaut 4). Ensuite, on répartit l'espace en fonction des différents coefficients individuels : le premier objet récupère une part d'espace, le deuxième en récupère également une et le dernier récupère deux parts. Autrement dit, le troisième objet sera deux fois plus grand que le premier et le deuxième objet.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}</p>

<p>Rappelons qu'on peut utiliser n'importe quelle valeur positive pour ces facteurs. C'est le rapport entre ces différents facteurs qui importe. Vous pouvez aussi bien utiliser des nombres entiers ou des nombres décimaux. Pour tester cela, vous pouvez changer les coefficients précédents afin de plutôt utiliser respectivement <code>.25</code>, <code>.25</code> et <code>.50</code> — vous obtiendrez alors le même résultat.</p>

<h2 id="La_propriété_flex-shrink">La propriété <code>flex-shrink</code></h2>

<p>La propriété {{cssxref("flex-shrink")}} définit <strong>le coefficient de rétrécissement flexible</strong> qui détermine la façon dont l'objet flexible se réduit relatviement aux autres objets du conteneur flexible lorsque l'espace négatif est distribué.</p>

<p>Cette propriété est utilisée lorsque le navigateur calcule les valeurs <code>flex-basis</code> des différents objets flexibles et obtient des valeurs qui dépassent la taille du conteneur flexible. Tant que <code>flex-shrink</code> possède une valeur positive, les éléments pourront rétrécir afin de ne pas dépasser du conteneur.</p>

<p>Ainsi, si <code>flex-grow</code> gère la façon dont on peut ajouter de l'espace disponible, <code>flex-shrink</code> gère la façon dont on retire de l'espace aux boîtes des objets afin qu'ils ne dépassent pas de leur conteneur.</p>

<p>Dans le prochain exemple, on dispose de trois éléments dans le conteneur flexible. Chacun mesure 200 pixels de large dans un conteneur qui mesure 500 pixels de large. Si <code>flex-shrink</code> vaut <code>0</code>, les éléments ne sont pas autorisés à rétrécir et ils dépassent donc de la boîte.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}</p>

<p>En passant la valeur de <code>flex-shrink</code> à <code>1</code>, on peut voir que la taille de chaque élément diminue de la même façon afin que l'ensemble des objets tiennent dans la boîte. Les éléments ont désormais une taille inférieure à leur taille initiale.</p>

<h3 id="Combiner_flex-shrink_et_flex-basis">Combiner <code>flex-shrink</code> et <code>flex-basis</code></h3>

<p>On pourrait dire et penser que <code>flex-shrink</code> fonctionne de la même façon que <code>flex-grow</code>. Toutefois, deux arguments viennent contrecarrer cette analogie.</p>

<p>Le premier, expliqué de façon subtile dans la spécification est la différence de comportement entre <code>flex-shrink</code> et l'espace libre négatif et celui de <code>flex-grow</code> avec l'espace libre positif :</p>

<blockquote>
<p>“Note : Le coefficient <code>flex-shrink</code> est multiplié par la taille de base (<code>flex-basis</code>) lors de la distribution de l'espace négatif. Ainsi, l'espace négatif est distribué proportionnellement au rétrécissement possible de l'élément. Autrement dit, un petit élément ne sera pas réduit à une taille nulle avant qu'un plus grand élément n'ait été réduit de façon notable.”</p>
</blockquote>

<p>Le second argument s'explique par l'impossibilité de réduire les petits éléments à une taille nulle lors de la suppression de l'espace libre négatif. Les éléments seront au maximum rétrécis jusqu'à obtenir leur taille  <code>min-content</code> — c'est-à-dire la taille qu'ils obtiennent s'ils utilisent tous les emplacements de rupture de ligne possibles.</p>

<p>On peut observer ce seuil avec <code>min-content</code> dans l'exemple qui suit où <code>flex-basis</code> est résolu avec la taille du contenu. Si on change la largeur du conteneur flexible (en l'augmentant à 700 pixels par exemple) puis en réduisant la largeur de l'élément flexible, on peut voir que les deux premiers objets passent à la ligne. Toutefois, ils ne deviennent pas plus petits que <code>min-content</code>. Lorsque la boîte se réduit, l'espace est simplement retiré du troisième élément.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}</p>

<p>En pratique, cette méthode de rétrécissement fournit des résultats prévisibles, car on ne souhaite pas que le contenu disparaisse entièrement ou que les boîtes soient plus petites que leur contenu minimal. Les règles présentées ci-avant sont donc pertinentes lorsqu'on souhaite rétrécir des objets afin qu'ils rentrent dans un conteneur.</p>

<h3 id="Utiliser_différents_coefficients_flex-shrink_pour_différents_éléments">Utiliser différents coefficients <code>flex-shrink</code> pour différents éléments</h3>

<p>Comme avec <code>flex-grow</code>, on peut utiliser différents coefficients <code>flex-shrink</code>. Cela permet de modifier le comportement par défaut et on peut ainsi avoir un élément qui se réduit plus ou moins rapidement que ses voisins (voire qui ne se réduit pas du tout).</p>

<p>Dans l'exemple suivant, le premier objet possède un coefficient <code>flex-shrink</code> égal à 1, le deuxième a un coefficient égal à <code>0</code> (il ne rétrécira pas du tout) et le troisième est paramétré avec <code>4</code>. Ainsi, le troisième élément rétrécit plus vite que le premier. N'hésitez pas à utiliser différentes valeurs pour observer le résultat obtenu. De la même façon qu'avec <code>flex-grow</code>, on peut utiliser nombres entiers ou des nombres décimaux, utilisez ce qui vous paraît le plus pertinent.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}</p>

<h2 id="Maîtriser_le_dimensionnement_des_objets_flexibles">Maîtriser le dimensionnement des objets flexibles</h2>

<p>Comprendre le dimensionnement des objets flexibles revient avant tout à comprendre les différentes étapes qui sont déroulées et notamment celles-ci que nous avons pu étudier dans ces guides :</p>

<h3 id="Quelle_est_la_taille_de_base_de_l'objet">Quelle est la taille de base de l'objet ?</h3>

<ol>
 <li>Si  <code>flex-basis</code> vaut <code>auto</code> et que l'objet possède une dimension explicitement définie, c'est cette dimension qui sera utilisée.</li>
 <li>Si  <code>flex-basis</code> vaut <code>auto</code> ou <code>content</code> (pour les navigateurs qui prennent en charge cette valeur), c'est la taille du contenu qui déterminera la taille de base de l'élément</li>
 <li>Si <code>flex-basis</code> est exprimée avec une valeur de longueur non nulle, c'est cette valeur qui sera la taille de base de l'élément.</li>
 <li>Si  <code>flex-basis</code> vaut <code>0</code>, la taille de l'élément n'est pas pris en compte lors de la répartition de l'espace.</li>
</ol>

<h3 id="De_l'espace_est-il_disponible">De l'espace est-il disponible ?</h3>

<p>Les objets ne s'étendent pas s'il n'y a pas d'espace libre positif et ne se réduisent pas s'il n'y a pas d'espace libre négatif.</p>

<ol>
 <li>Si on prend tous les objets et qu'on somme leur dimension principale (la largeur si on travaille en ligne ou la hauteur si on travaille en colonne) et qu'on obtient une quantité inférieure à la dimension principale du conteneur, on aura alors un espace libre positif et c'est la propriété <code>flex-grow</code> qui entrera en jeu.</li>
 <li>Si cette somme dépasse la taille du conteneur flexible, on aura alors un espace libre négatif et c'est la propriété <code>flex-shrink</code> qui sera utilisée.</li>
</ol>

<h3 id="Les_autres_façons_de_distribuer_l'espace">Les autres façons de distribuer l'espace</h3>

<p>Si on ne souhaite pas ajouter d'espace aux objets, on pourra tout aussi bien répartir cet espace libre entre les objets ou autour grâce aux propriétés d'alignement vu dans <a href="/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">le guide sur l'alignement</a>. La propriété {{cssxref("justify-content")}} permettra de répartir cet espace entre les objets ou autour d'eux. Les marges automatiques peuvent être utilisées sur les objets flexibles afin d'absorber l'espace et de créer des gouttières entre ces objets.</p>

<p>Tout ces outils relatifs aux boîtes flexibles vous permettent d'accomplir la plupart des dispositions et n'auront plus de secret au fur et à mesure de vos essais et expérimentations.</p>
