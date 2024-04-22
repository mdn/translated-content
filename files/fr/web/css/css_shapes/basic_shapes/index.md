---
title: Formes simples
slug: Web/CSS/CSS_shapes/Basic_shapes
---

{{CSSRef}}

Les formes CSS peuvent être définies grâce au type {{cssxref("&lt;basic-shape&gt;")}}. Dans ce guide, nous verrons les différentes valeurs utilisables avec ce type et leur fonctionnement. Ces formes peuvent par exemple décrire des cercles simples voire des polygones complexes.

Avant d'étudier ces formes dans le détail, attardons nous sur deux notions qui permettent de construire les formes :

- Le type de donnée `<basic-shape>`
- La boîte de référence

## Le type `<basic-shape>`

Le type de donnée `<basic-shape>` fournit les valeurs que nous utiliserons ici pour toutes les formes simples. Ce type utilise une notation fonctionnelle : le type de forme souhaité est suivi de parenthèses au sein desquelles on ajoute différentes valeurs pour décrire la forme finale.

Les arguments de ces fonctions varient selon la forme qu'on veut créer et nous allons voir ces arguments dans les exemples ci-après.

## La boîte de référence

La boîte de référence définit le système de coordonnées de chaque forme. Nous avons déjà abordé cette boîte [dans le guide sur la création de formes à partir des boîtes](/fr/docs/Web/CSS/CSS_Shapes/From_box_values) où nous avons directement utilisé la boîte de référence afin de créer une forme.

L'inspecteur des formes CSS de Firefox affiche la boîte de référence lorsqu'on inspecte une forme. Dans la capture d'écran suivante, on a créé un cercle avec `shape-outside: circle(50%)`, l'élément flottant possède 20 pixels de remplissage avec la bordure et la marge. On voit que l'inspecteur affiche ces boîtes de référence. Lorsqu'on utilise une forme basique, la boîte de référence utilisée par défaut est la boîte des marges. Dans la capture d'écran, on voit que la forme est définie relativement aux boîtes du [modèle de boîtes](/fr/docs/Web/CSS/Modèle_de_boîte_CSS).

![](shapes-reference-box.png)

La boîte de référence qu'on veut utiliser peut être ajoutée après la définition de la forme simple. Autrement dit, le comportement obtenu par défaut est équivalent à l'écriture de .

```css
.shape {
  shape-outside: circle(50%) margin-box;
}
```

On peut changer ce paramètre si la forme utilise une autre boîte du modèle de boîte. Par exemple, si on souhaite utilise la boîte de bordure, on pourra écrire :

```css
.shape {
  shape-outside: circle(50%) border-box;
}
```

On notera que la boîte `margin-box` pourra rogner la forme et que les formes créées relativement aux autres formes et qui dépassent la boîte de marge seront rognées pour être inscrites dans la boîte de marge. Nous verrons ce comportement dans les exemples suivants.

Pour une description des boîtes et de leurs relations avec les formes CSS, voir [Comprendre les liens entre les boîtes de référence et les formes CSS](http://razvancaliman.com/writing/css-shapes-reference-boxes/).

## `inset()`

Le type `inset()` définit un rectangle. Cela peut sembler peu utile car c'est déjà la forme d'une boîte normale. Toutefois, avec `inset()`, on peut inclure des décalages et déplacer la forme autour de la boîte de référence.

`inset()` prend comme arguments quatre valeurs pour les quatres côtés : haut, droit, bas, gauche puis une dernière pour `border-radius`. Le fragment de code CSS suivant permet de créér une forme rectangulaire décalée depuis la boîte de référence (20 pixels du haut et du bas, 10 pixels de la gauche et de la droite) et pour laquelle `border-radius` vaut 10 pixels.

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px 20px 10px round 10px);
}
```

Utilisant les mêmes règles vues pour la version raccourcie de la marge (cf. {{cssxref("margin")}}), on peut indiquer plusieurs décalages de façon synthétique :

- Lorsqu'une seule valeur est fournie, elle est utilisée pour tous les côtés.
- Lorsque deux valeurs sont fournies, la première correspond aux décalages haut et bas et la deuxième correspond aux décalages gauche et droit
- Lorsque trois valeurs sont fournies, la première correspond au décalage haut, la deuxième aux décalages droit et gauche et la dernière au décalage bas.
- Avec quatre valeurs, les décalages suivent l'ordre trigonométrique : haut, droit, bas, gauche.

Ainsi, la règle écrite ci-avant peut-être formulée :

```css
.shape {
  float: left;
  shape-outside: inset(20px 10px round 10px);
}
```

Dans l'exemple qui suit, on a une forme `inset()` qu'on décale au-delà de l'élément flottant. Vous pouvez éditer l'exemple afin d'observer l'effet des différentes valeurs de décalages.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

Vous pouvez également ajouter une valeur pour la boîte de référence. Dans l'exemple suivant, vous pouvez modifier `margin-box` afin d'utiliser `border-box`, `padding-box` ou `content-box` pour observer la façon dont la boîte de référence modifie l'origine des coordonnées utilisées pour les décalages.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset-box.html", '100%', 800)}}

## `circle()`

La valeur `circle()` peut être utilisée pour `shape-outside` et prend jusqu'à deux argument. Le premier de ces arguments correspond à `shape-radius`.

La fonction `circle()` et la fonction `ellipse()`, pour `shape-outside`, peuvent utiliser cet argument `<shape-radius>`. Ce dernier peut être une longueur ou un pourcentage mais également l'un des mots-clés `closest-side` ou `farthest-side`.

Le mot-clé **`closest-side`** utilise la longueur depuis le centre de la forme jusqu'au côté le plus proche de la boîte de référence. Pour les cercles, c'est le côté le plus proche dans n'importe quelle dimension. Pour les ellipses, c'est le côté le plus proche selon l'axe du rayon de l'ellipse.

Le mot-clé **`farthest-side`** utilise la longueur depuis le centre de la forme jusqu'au côté le plus éloigné de la boîte de référence. Pour les cercles, c'est le côté le plus éloigné, quelle que soit la dimension. Pour les ellipses, c'est le côté le plus éloigné selon l'axe du rayon.

Le deuxième argument est une `position` dont la valeur par défaut est `center`. Toutefois, n'importe quelle position valide peut être utilisée afin d'indiquer le centre du cercle.

Pour résumer, le cercle accepte un rayon qui peut être une longueur, un pourcentage ou le mot-clé `closest-side` ou `farthest-side`, optionnellement suivi par le mot-clé `at` suivi par une position.

Dans l'exemple qui suit, on crée un cercle sur un objet de 100 pixels de large avec une marge de 20 pixels. On a donc une largeur totale de la boîte de référence de 140 pixels. On indique une valeur de 50% pour `shape-radius`, ce qui crée donc un cercle de 70 pixels de rayon avec une position fixée à 30%.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle.html", '100%', 800)}}

Dans cet exemple, vous pouvez augmenter ou réduire le rayon pour adapter la taille du cercle ou déplacer le cercle via la position. Vous pouvez aussi modifier la boîte de référence.

Ajoutons un autre exemple, en utilisant les mots-clés `top left` pour indiquer la position, on peut créer une forme en quart de cercle pour le coin supérieur gauche de la page. L'exemple qui suit illustre comment créer un quart de cercle avec du texte qui est écrit autour.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/circle-generated.html", '100%', 700)}}

### Limitation à la boîte de marge

Lorsqu'on a décrit les boîtes de référence ci-avant, on a vu que la boîte de marge pourra rogner la forme. Pour observer cet effet, on peut déplacer le centre du cercle vers le contenu en utilisant la valeur 60% pour la position. Le centre du cercle est alors plus près du contenu et la forme du cercle pourrait dépasser la boîte de marge. La forme est donc rognée et on voit alors un aplat.

```css
img {
  float: left;
  shape-outside: circle(50% at 60%);
}
```

![The circle shape is clipped by the margin box](shapes-circle-clipped.png)

## `ellipse()`

Une ellipse peut être vue comme un cercle aplati. De ce point de vu `ellipse()` fonctionne de façon analogue à `circle()` mais il est nécessaire d'indiquer deux rayons : un rayon horizontal `x` et un rayon vertical `y` (dans cet ordre).

Ces rayons peuvent être suivis par une position qui permet, comme avec `circle()`, de déplacer le centre de l'ellipse. Dans l'exemple qui suit, on dessine une ellipse avec un rayon horizontal de 40%, un rayon vertical de 50% et une position à gauche. Cela signifie que le centre de l'ellipse sera situé sur le bord gauche et on aura donc une demi-ellipse autour de laquelle s'écoulera le texte. N'hésitez pas à modifier ces valeurs pour voir l'impact sur l'exemple.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

Les mots-clés `closest-side` et `farthest-side` permettent de créer rapidmeent une ellipse en fonction de la taille de la boîte de référence de l'élément flottant.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## `polygon()`

La forme simple qui permet de créer une grande variété de formes est `polygon()`. Cette forme prend comme arguments trois ou plusieurs paires de valeurs qui correspondent aux coordonnées dessinées dans la boîte de référence. Attention, les coordonnées doivent au moins former un triangle.

Dans l'exemple qui suit, on crée une forme avec `polygon()` pour que le texte s'écoule autour. N'hésitez pas à modifier les valeurs pour visualiser les impacts.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

L'inspecteur de formes Firefox s'avère très utile pour créer une forme de polygone. La capture d'écran qui suit illustre la forme dessinée dans l'outil.

![The polygon basic shape, highlighted with the Shapes Inspector.](shapes-polygon.png)

Une autre ressource qui peut s'avérer utile sur ces sujets est [Clippy](https://bennettfeely.com/clippy/) : cet outil permet de créer des formes pour `clip-path`. Or, les formes utilisées pour `clip-path` sont les mêmes que pour les formes simples.
