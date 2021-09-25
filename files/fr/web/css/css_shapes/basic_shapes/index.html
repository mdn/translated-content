---
title: Formes simples
slug: Web/CSS/CSS_Shapes/Basic_Shapes
tags:
  - CSS
  - CSS Shapes
  - Guide
translation_of: Web/CSS/CSS_Shapes/Basic_Shapes
original_slug: Web/CSS/CSS_Shapes/Formes_simples
---
<div>{{CSSRef}}</div>

<p>Les formes CSS peuvent être définies grâce au type {{cssxref("&lt;basic-shape&gt;")}}. Dans ce guide, nous verrons les différentes valeurs utilisables avec ce type et leur fonctionnement. Ces formes peuvent par exemple décrire des cercles simples voire des polygones complexes.</p>

<p>Avant d'étudier ces formes dans le détail, attardons nous sur deux notions qui permettent de construire les formes :</p>

<ul>
 <li>Le type de donnée <code>&lt;basic-shape&gt;</code></li>
 <li>La boîte de référence</li>
</ul>

<h2 id="Le_type_&lt;basic-shape>">Le type <code>&lt;basic-shape&gt;</code></h2>

<p>Le type de donnée <code>&lt;basic-shape&gt;</code> fournit les valeurs que nous utiliserons ici pour toutes les formes simples. Ce type utilise une notation fonctionnelle : le type de forme souhaité est suivi de parenthèses au sein desquelles on ajoute différentes valeurs pour décrire la forme finale.</p>

<p>Les arguments de ces fonctions varient selon la forme qu'on veut créer et nous allons voir ces arguments dans les exemples ci-après.</p>

<h2 id="La_boîte_de_référence">La boîte de référence</h2>

<p>La boîte de référence définit le système de coordonnées de chaque forme. Nous avons déjà abordé cette boîte <a href="/en-US/docs/Web/CSS/CSS_Shapes/From_box_values">dans le guide sur la création de formes à partir des boîtes</a> où nous avons directement utilisé la boîte de référence afin de créer une forme.</p>

<p>L'inspecteur des formes CSS de Firefox affiche la boîte de référence lorsqu'on inspecte une forme. Dans la capture d'écran suivante, on a créé un cercle avec <code>shape-outside: circle(50%)</code>, l'élément flottant possède 20 pixels de remplissage avec la bordure et la marge. On voit que l'inspecteur affiche ces boîtes de référence. Lorsqu'on utilise une forme basique, la boîte de référence utilisée par défaut est la boîte des marges. Dans la capture d'écran, on voit que la forme est définie relativement aux boîtes du <a href="/fr/docs/Web/CSS/Mod%C3%A8le_de_bo%C3%AEte_CSS">modèle de boîtes</a>.</p>

<p><img alt="" src="shapes-reference-box.png"></p>

<p>La boîte de référence qu'on veut utiliser peut être ajoutée après la définition de la forme simple. Autrement dit, le comportement obtenu par défaut est équivalent à l'écriture de .</p>

<pre class="brush: css">.shape {
  shape-outside: circle(50%) margin-box;
}
</pre>

<p>On peut changer ce paramètre si la forme utilise une autre boîte du modèle de boîte. Par exemple, si on souhaite utilise la boîte de bordure, on pourra écrire :</p>

<pre class="brush: css">.shape {
  shape-outside: circle(50%) border-box;
}
</pre>

<p>On notera que la boîte <code>margin-box</code> pourra rogner la forme et que les formes créées relativement aux autres formes et qui dépassent la boîte de marge seront rognées pour être inscrites dans la boîte de marge. Nous verrons ce comportement dans les exemples suivants.</p>

<p>Pour une description des boîtes et de leurs relations avec les formes CSS, voir <a href="http://razvancaliman.com/writing/css-shapes-reference-boxes/">Comprendre les liens entre les boîtes de référence et les formes CSS</a>.</p>

<h2 id="inset()"><code>inset()</code></h2>

<p>Le type <code>inset()</code> définit un rectangle. Cela peut sembler peu utile car c'est déjà la forme d'une boîte normale. Toutefois, avec <code>inset()</code>, on peut inclure des décalages et déplacer la forme autour de la boîte de référence.</p>

<p><code>inset()</code> prend comme arguments quatre valeurs pour les quatres côtés : haut, droit, bas, gauche puis une dernière pour <code>border-radius</code>. Le fragment de code CSS suivant permet de créér une forme rectangulaire décalée depuis la boîte de référence (20 pixels du haut et du bas, 10 pixels de la gauche et de la droite) et pour laquelle <code>border-radius</code> vaut 10 pixels.</p>

<pre class="brush: css">.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
</pre>

<p>Utilisant les mêmes règles vues pour la version raccourcie de la marge (cf. {{cssxref("margin")}}), on peut indiquer plusieurs décalages de façon synthétique :</p>

<ul>
 <li>Lorsqu'une seule valeur est fournie, elle est utilisée pour tous les côtés.</li>
 <li>Lorsque deux valeurs sont fournies, la première correspond aux décalages haut et bas et la deuxième correspond aux décalages gauche et droit</li>
 <li>Lorsque trois valeurs sont fournies, la première correspond au décalage haut, la deuxième aux décalages droit et gauche et la dernière au décalage bas.</li>
 <li>Avec quatre valeurs, les décalages suivent l'ordre trigonométrique : haut, droit, bas, gauche.</li>
</ul>

<p>Ainsi, la règle écrite ci-avant peut-être formulée :</p>

<pre class="brush: css">.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}</pre>

<p>Dans l'exemple qui suit, on a une forme <code>inset()</code> qu'on décale au-delà de l'élément flottant. Vous pouvez éditer l'exemple afin d'observer l'effet des différentes valeurs de décalages.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}</p>

<p>Vous pouvez également ajouter une valeur pour la boîte de référence. Dans l'exemple suivant, vous pouvez modifier <code>margin-box</code> afin d'utiliser <code>border-box</code>, <code>padding-box</code> ou <code>content-box</code> pour observer la façon dont la boîte de référence modifie l'origine des coordonnées utilisées pour les décalages.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}</p>

<h2 id="circle()"><code>circle()</code></h2>

<p>La valeur <code>circle()</code> peut être utilisée pour <code>shape-outside</code> et prend jusqu'à deux argument. Le premier de ces arguments correspond à <code>shape-radius</code>.</p>

<p>La fonction <code>circle()</code> et la fonction <code>ellipse()</code>, pour <code>shape-outside</code>, peuvent utiliser cet argument <code>&lt;shape-radius&gt;</code>. Ce dernier peut être une longueur ou un pourcentage mais également l'un des mots-clés <code>closest-side</code> ou <code>farthest-side</code>.</p>

<p>Le mot-clé <code><strong>closest-side</strong></code> utilise la longueur depuis le centre de la forme jusqu'au côté le plus proche de la boîte de référence. Pour les cercles, c'est le côté le plus proche dans n'importe quelle dimension. Pour les ellipses, c'est le côté le plus proche selon l'axe du rayon de l'ellipse.</p>

<p>Le mot-clé <code><strong>farthest-side</strong></code> utilise la longueur depuis le centre de la forme jusqu'au côté le plus éloigné de la boîte de référence. Pour les cercles, c'est le côté le plus éloigné, quelle que soit la dimension. Pour les ellipses, c'est le côté le plus éloigné selon l'axe du rayon.</p>

<p>Le deuxième argument est une <code>position</code> dont la valeur par défaut est <code>center</code>. Toutefois, n'importe quelle position valide peut être utilisée afin d'indiquer le centre du cercle.</p>

<p>Pour résumer, le cercle accepte un rayon qui peut être une longueur, un pourcentage ou le mot-clé <code>closest-side</code> ou <code>farthest-side</code>, optionnellement suivi par le mot-clé <code>at</code> suivi par une position.</p>

<p>Dans l'exemple qui suit, on crée un cercle sur un objet de 100 pixels de large avec une marge de 20 pixels. On a donc une largeur totale de la boîte de référence de 140 pixels. On indique une valeur de 50% pour <code>shape-radius</code>, ce qui crée donc un cercle de 70 pixels de rayon avec une position fixée à 30%.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}</p>

<p>Dans cet exemple, vous pouvez augmenter ou réduire le rayon pour adapter la taille du cercle ou déplacer le cercle via la position. Vous pouvez aussi modifier la boîte de référence.</p>

<p>Ajoutons un autre exemple, en utilisant les mots-clés <code>top left</code> pour indiquer la position, on peut créer une forme en quart de cercle pour le coin supérieur gauche de la page. L'exemple qui suit illustre comment créer un quart de cercle avec du texte qui est écrit autour.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}</p>

<h3 id="Limitation_à_la_boîte_de_marge">Limitation à la boîte de marge</h3>

<p>Lorsqu'on a décrit les boîtes de référence ci-avant, on a vu que la boîte de marge pourra rogner la forme. Pour observer cet effet, on peut déplacer le centre du cercle vers le contenu en utilisant la valeur 60% pour la position. Le centre du cercle est alors plus près du contenu et la forme du cercle pourrait dépasser la boîte de marge. La forme est donc rognée et on voit alors un aplat.</p>

<pre class="brush: css">img {
  float: left;
  shape-outside: circle(50% at 60%);
}
</pre>

<p><img alt="The circle shape is clipped by the margin box" src="shapes-circle-clipped.png"></p>

<h2 id="ellipse()"><code>ellipse()</code></h2>

<p>Une ellipse peut être vue comme un cercle aplati. De ce point de vu <code>ellipse()</code> fonctionne de façon analogue à <code>circle()</code> mais il est nécessaire d'indiquer deux rayons : un rayon horizontal <code>x</code> et un rayon vertical <code>y</code> (dans cet ordre).</p>

<p>Ces rayons peuvent être suivis par une position qui permet, comme avec <code>circle()</code>, de déplacer le centre de l'ellipse. Dans l'exemple qui suit, on dessine une ellipse avec un rayon horizontal de 40%, un rayon vertical de 50% et une position à gauche. Cela signifie que le centre de l'ellipse sera situé sur le bord gauche et on aura donc une demi-ellipse autour de laquelle s'écoulera le texte. N'hésitez pas à modifier ces valeurs pour voir l'impact sur l'exemple.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}</p>

<p>Les mots-clés <code>closest-side</code> et <code>farthest-side</code> permettent de créer rapidmeent une ellipse en fonction de la taille de la boîte de référence de l'élément flottant.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}</p>

<h2 id="polygon()"><code>polygon()</code></h2>

<p>La forme simple qui permet de créer une grande variété de formes est <code>polygon()</code>. Cette forme prend comme arguments trois ou plusieurs paires de valeurs qui correspondent aux coordonnées dessinées dans la boîte de référence. Attention, les coordonnées doivent au moins former un triangle.</p>

<p>Dans l'exemple qui suit, on crée une forme avec <code>polygon()</code> pour que le texte s'écoule autour. N'hésitez pas à modifier les valeurs pour visualiser les impacts.</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}</p>

<p>L'inspecteur de formes Firefox s'avère très utile pour créer une forme de polygone. La capture d'écran qui suit illustre la forme dessinée dans l'outil.</p>

<p><img alt="The polygon basic shape, highlighted with the Shapes Inspector." src="shapes-polygon.png"></p>

<p>Une autre ressource qui peut s'avérer utile sur ces sujets est <a href="https://bennettfeely.com/clippy/">Clippy</a> : cet outil permet de créer des formes pour <code>clip-path</code>. Or, les formes utilisées pour <code>clip-path</code> sont les mêmes que pour les formes simples.</p>
