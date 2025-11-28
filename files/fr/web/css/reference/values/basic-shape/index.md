---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
original_slug: Web/CSS/basic-shape
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<basic-shape>`** représente une forme utilisée dans les propriétés {{CSSxRef("clip-path")}}, {{CSSxRef("shape-outside")}} et {{CSSxRef("offset-path")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: &lt;basic-shape&gt;")}}

```css interactive-example-choice
clip-path: inset(22% 12% 15px 35px);
```

```css interactive-example-choice
clip-path: circle(6rem at 12rem 8rem);
```

```css interactive-example-choice
clip-path: ellipse(115px 55px at 50% 40%);
```

```css interactive-example-choice
clip-path: polygon(
  50% 2.4%,
  34.5% 33.8%,
  0% 38.8%,
  25% 63.1%,
  19.1% 97.6%,
  50% 81.3%,
  80.9% 97.6%,
  75% 63.1%,
  100% 38.8%,
  65.5% 33.8%
);
```

```css interactive-example-choice
clip-path: path("M 50,245 A 160,160 0,0,1 360,120 z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntaxe

Le type de donnée `<basic-shape>` permet de créer des formes de base, incluant des rectangles par [décalage du conteneur](#syntaxe_pour_les_rectangles_par_décalage_du_conteneur), par [distance](#syntaxe_pour_les_rectangles_par_distance), ou par [dimensions définies](#syntaxe_pour_les_rectangles_à_dimensions), des [cercles](#syntaxe_pour_les_cercles), [ellipses](#syntaxe_pour_les_ellipses), [polygones](#syntaxe_pour_les_polygones), [chemins](#syntaxe_pour_les_chemins), et [formes créées par l'auteur·ice](#syntaxe_pour_les_formes). Ces formes sont définies à l'aide d'une fonction CSS `<basic_shape>`, chaque valeur nécessitant un paramètre selon la syntaxe spécifique à la fonction.

### Paramètres communs

Les paramètres communs à certaines fonctions de forme de base incluent&nbsp;:

- `round <'border-radius'>`
  - : Définit les coins arrondis pour les [rectangles par décalage du conteneur](#syntaxe_pour_les_rectangles_par_décalage_du_conteneur), [rectangles par distance](#syntaxe_pour_les_rectangles_par_distance) et [rectangles à dimensions](#syntaxe_pour_les_rectangles_à_dimensions) en utilisant la même syntaxe que la propriété abrégée CSS [`border-radius`](/fr/docs/Web/CSS/Reference/Properties/border-radius).

- `<shape-radius>`
  - : Définit le rayon pour un [cercle](#syntaxe_pour_les_cercles) ou une [ellipse](#syntaxe_pour_les_ellipses). Les valeurs valides incluent {{CSSxRef("length")}}, {{CSSxRef("percentage")}}, `closest-side` (valeur par défaut) et `farthest-side`. Les valeurs négatives sont invalides.

    Le mot-clé `closest-side` utilise la distance du centre de la forme au côté le plus proche de la boîte de référence pour créer la longueur du rayon. Le mot-clé `farthest-side` utilise la distance du centre de la forme au côté le plus éloigné de la boîte de référence.

- `<position>`
  - : Définit le centre [`<position>`](/fr/docs/Web/CSS/Reference/Values/position_value) d'un [cercle](#syntaxe_pour_les_cercles) ou d'une [ellipse](#syntaxe_pour_les_ellipses). Par défaut, la valeur est `center` si omise.

- `<fill-rule>`
  - : Définit la règle de remplissage ({{SVGAttr("fill-rule")}}) utilisée pour déterminer comment l'intérieur de la forme définie par les formes de base [polygone](#syntaxe_pour_les_polygones), [chemin](#syntaxe_pour_les_chemins) et [forme](#syntaxe_pour_les_formes) est remplie. Les valeurs possibles sont `nonzero` (par défaut) et `evenodd`.

    > [!NOTE]
    > `<fill-rule>` n'est pas pris en charge dans {{CSSxRef("offset-path")}} et son utilisation invalide la propriété.

### Syntaxe pour les rectangles par décalage du conteneur

La fonction {{CSSxRef("basic-shape/inset","inset()")}} crée un rectangle en retrait, dont la taille est définie par la distance de décalage de chacun des quatre côtés de son conteneur et, optionnellement, des coins arrondis.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Lorsque les quatre premiers arguments sont fournis, ils représentent les décalages haut, droite, bas et gauche depuis la boîte de référence vers l'intérieur, définissant la position des bords du rectangle en retrait. Ces arguments suivent la syntaxe de la propriété abrégée {{CSSxRef("margin")}}, permettant de définir les quatre retraits avec une, deux, trois ou quatre valeurs.

Si la somme des deux marges d'une dimension dépasse 100&nbsp;% de cette dimension, les deux valeurs sont réduites proportionnellement pour que leur somme soit égale à 100&nbsp;%. Par exemple, la valeur `inset(90% 10% 60% 10%)` a un retrait haut de `90%` et un retrait bas de `60%`. Ces valeurs sont réduites proportionnellement à `inset(60% 10% 40% 10%)`. Les formes de ce type, qui n'enferment aucune zone et n'ont pas de {{CSSxRef("shape-margin")}}, n'affectent pas l'habillage.

### Syntaxe pour les rectangles par distance

La fonction {{CSSxRef("basic-shape/rect","rect()")}} définit un rectangle en utilisant les distances spécifiées depuis les bords supérieur et gauche de la boîte de référence, avec des coins arrondis optionnels.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Avec la fonction `rect()`, vous ne définissez pas la largeur et la hauteur du rectangle. Vous spécifiez plutôt quatre valeurs pour créer le rectangle, ses dimensions étant déterminées par la taille de la boîte de référence et les quatre valeurs de décalage. Chaque valeur peut être soit une {{CSSxRef("length")}}, une {{CSSxRef("percentage")}} ou le mot-clé `auto`. Le mot-clé `auto` est interprété comme `0%` pour les valeurs haut et gauche, et comme `100%` pour les valeurs bas et droite.

### Syntaxe pour les rectangles à dimensions

La fonction {{CSSxRef("basic-shape/xywh","xywh()")}} définit un rectangle situé à des distances spécifiées depuis les bords gauche (`x`) et haut (`y`) de la boîte de référence, et dimensionné par la largeur (`w`) et la hauteur (`h`) du rectangle, dans cet ordre, avec des coins arrondis optionnels.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Syntaxe pour les cercles

La fonction {{CSSxRef("basic-shape/circle","circle()")}} définit un cercle à l'aide d'un rayon et d'une position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

L'argument `<shape-radius>` représente le rayon du cercle, défini comme une longueure ({{CSSxRef("length")}}) ou un pourcentage ({{CSSxRef("percentage")}}). Une valeur en pourcentage est résolue à partir de la largeur et de la hauteur utilisées de la boîte de référence comme `sqrt(width^2+height^2)/sqrt(2)`. Si omis, le rayon est défini par `closest-side`.

### Syntaxe pour les ellipses

La fonction {{CSSxRef("basic-shape/ellipse","ellipse()")}} définit une ellipse à l'aide de deux rayons et d'une position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Les arguments `<shape-radius>` représentent _rx_ et _ry_, les rayons selon les axes x et y de l'ellipse, dans cet ordre. Ces valeurs sont spécifiées comme une longueure ({{CSSxRef("length")}}) ou un pourcentage ({{CSSxRef("percentage")}}). Les valeurs en pourcentage sont résolues par rapport à la largeur utilisée (pour rx) et la hauteur utilisée (pour ry) de la boîte de référence. Si un seul rayon est fourni, la fonction `ellipse()` est invalide. Si aucune valeur n'est fournie, `50% 50%` est utilisé.

### Syntaxe pour les polygones

La fonction {{CSSxRef("basic-shape/polygon","polygon()")}} définit un polygone à l'aide d'une règle de remplissage {{SVGAttr("fill-rule")}} SVG et d'un ensemble de coordonnées.

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

La fonction prend une liste de paires de coordonnées séparées par des virgules, chacune composée de deux valeurs `<length-percentage>` séparées par un espace, représentant les coordonnées x et y du polygone à la position _i_ (le sommet où deux lignes se rejoignent).

### Syntaxe pour les chemins

La fonction {{CSSxRef("basic-shape/path","path()")}} définit une forme à l'aide d'une règle de remplissage {{SVGAttr("fill-rule")}} SVG et d'une [définition de chemin SVG](/fr/docs/Web/SVG/Reference/Attribute/d).

```plain
path( <'fill-rule'>? , <string> )
```

La chaîne de caractères (`<string>`) requise est un [chemin SVG](/fr/docs/Web/SVG/Reference/Attribute/d) sous forme de chaîne entre guillemets. La fonction `path()` n'est pas une valeur valide pour la propriété {{CSSxRef("shape-outside")}}.

### Syntaxe pour les formes

La fonction {{CSSxRef("basic-shape/shape","shape()")}} définit une forme à l'aide d'un point de départ initial et d'une série de commandes de forme.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

Le paramètre `from <coordinate-pair>` représente le point de départ pour la première commande de forme, et `<shape-command>` définit une ou plusieurs commandes de forme, similaires aux [commandes de chemin SVG](/fr/docs/Web/SVG/Reference/Attribute/d#path_commands). La fonction `shape()` n'est pas une valeur valide pour la propriété {{CSSxRef("shape-outside")}}.

## Description

Lors de la création d'une forme, la boîte de référence est définie par la propriété qui utilise les valeurs `<basic-shape>`. Le système de coordonnées de la forme a son origine dans le coin supérieur gauche de la boîte de marge de l'élément par défaut, l'axe x allant vers la droite et l'axe y vers le bas. Toutes les longueurs exprimées en pourcentage sont résolues à partir des dimensions de la boîte de référence.

La boîte de référence par défaut est la [`margin-box`](/fr/docs/Web/CSS/Reference/Values/box-edge#margin-box), comme illustré dans l'image ci-dessous. L'image montre un cercle créé avec `shape-outside: circle(50%)`, mettant en évidence les différentes parties du modèle de boîte telles qu'affichées dans les outils de développement du navigateur. La forme ici est définie par rapport à la margin-box.

![Une image montrant un cercle inspecté avec l'inspecteur de formes de Firefox DevTools. Les différentes parties du modèle de boîte sont mises en évidence.](shapes-reference-box.png)

### Valeurs calculées des formes de base

Les valeurs dans une fonction `<basic-shape>` sont calculées comme spécifié, avec les considérations supplémentaires suivantes&nbsp;:

- Pour toute valeur omise, sa valeur par défaut est utilisée.
- Une valeur {{CSSxRef("position_value", "&lt;position&gt;")}} dans `circle()` ou `ellipse()` est calculée comme une paire de coordonnées de décalages depuis le coin supérieur gauche de la boîte de référence&nbsp;: le premier décalage est horizontal, le second est vertical. Chaque décalage est spécifié comme une valeur {{CSSxRef("length-percentage")}}.
- Une valeur [`<border-radius>`](/fr/docs/Web/CSS/Reference/Properties/border-radius) dans `inset()` est développée en une liste de huit valeurs, chacune étant soit une {{CSSxRef("length")}} soit une {{CSSxRef("percentage")}}.
- Les fonctions {{CSSxRef("basic-shape/inset","inset()")}}, {{CSSxRef("basic-shape/rect","rect()")}} et {{CSSxRef("basic-shape/xywh","xywh()")}} sont calculées comme la fonction `inset()` équivalente.

### Interpolation des formes de base

Lors de l'animation entre deux fonctions `<basic-shape>`, les règles d'{{Glossary("interpolation")}} suivantes s'appliquent. Les valeurs des paramètres de chaque fonction `<basic-shape>` forment une liste. Pour qu'une interpolation ait lieu entre deux formes, les deux formes doivent utiliser la même boîte de référence et le nombre et le type de valeurs dans les deux listes `<basic-shape>` doivent correspondre.

Chaque valeur dans les listes des deux fonctions `<basic-shape>` est interpolée selon sa valeur calculée comme {{CSSxRef("number")}}, {{CSSxRef("length")}}, {{CSSxRef("percentage")}}, {{CSSxRef("angle")}} ou {{CSSxRef("calc", "calc()")}} lorsque c'est possible. L'interpolation peut tout de même avoir lieu si les valeurs ne sont pas de ces types mais sont identiques entre les deux fonctions de forme de base interpolées, comme `nonzero`.

- **Les deux formes sont de type `ellipse()` ou `circle()`**&nbsp;: l'interpolation s'applique à chaque valeur correspondante si leurs rayons sont spécifiés comme {{CSSxRef("length")}} ou {{CSSxRef("percentage")}} (et non par des mots-clés comme `closest-side` ou `farthest-side`).

- **Les deux formes sont de type `inset()`**&nbsp;: l'interpolation s'applique à chaque valeur correspondante.

- **Les deux formes sont de type `polygon()`**&nbsp;: l'interpolation s'applique à chaque valeur correspondante si elles utilisent la même `<fill-rule>` et ont le même nombre de paires de coordonnées séparées par des virgules.

- **Les deux formes sont de type `path()`**&nbsp;: l'interpolation s'applique à chaque paramètre comme {{CSSxRef("&lt;number&gt;")}} si les chaînes de chemin dans les deux formes correspondent en nombre, type et séquence de [commandes de données de chemin](/fr/docs/Web/SVG/Reference/Attribute/d#commandes_de_chemin).

- **Les deux formes sont de type `shape()`**&nbsp;: l'interpolation s'applique à chaque valeur correspondante si elles ont le même mot-clé de commande et utilisent le même mot-clé `<by-to>`. Si `shape()` est utilisé dans la propriété {{CSSxRef("clip-path")}}, les deux formes interpolent si elles ont aussi la même `<fill-rule>`.
  - Si elles utilisent la `<curve-command>` ou la `<smooth-command>`, le nombre de points de contrôle doit correspondre pour l'interpolation.

  - Si elles utilisent `<arc-command>` avec des directions `<arc-sweep>` différentes, le résultat interpolé va dans le sens horaire (`cw`). Si elles utilisent des mots-clés `<arc-size>` différents, la taille est interpolée en utilisant la valeur `large`.

- **Une forme est de type `path()` et l'autre de type `shape()`**&nbsp;: l'interpolation s'applique à chaque valeur correspondante si la liste des commandes de données de chemin est identique en nombre et en séquence. La forme interpolée est une fonction `shape()`, conservant la même liste de commandes de données de chemin.

Dans tous les autres cas, aucune interpolation n'a lieu et l'animation est discrète.

## Exemples

### Polygone animé

Dans cet exemple, on utilise la règle {{CSSxRef("@keyframes")}} pour animer un chemin de découpe entre deux polygones. Notez que les deux polygones ont le même nombre de sommets, ce qui est nécessaire pour que ce type d'animation fonctionne.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### Résultat

{{EmbedLiveSample('polygone_animé','340', '340')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés utilisant ce type&nbsp;: {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}}, {{CSSxRef("shape-outside")}}
- Éléments SVG&nbsp;: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Présentation des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le module de [formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Introduction au masquage CSS](/fr/docs/Web/CSS/CSS_masking/Masking)
- Le module de [masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
- [Modifier les chemins de forme dans Firefox Developer Tools <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
