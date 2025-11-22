---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
original_slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`shape()`** permet de définir une forme pour les propriétés {{CSSxRef("clip-path")}} et {{CSSxRef("offset-path")}}. Elle combine un point de départ initial avec une série de commandes de forme qui définissent le tracé de la forme. La fonction `shape()` fait partie du [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{CSSxRef("&lt;basic-shape&gt;")}}.

## Syntaxe

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, et close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(
  from 10px 10px,
  curve to 80px 80px with 160px 1px / 20% 16px
);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Utilisation d'une fonction mathématique CSS */
offset-path: shape(
  from 5px -5%,
  hline to 50px,
  vline by calc(0% + 160px),
  hline by 70.5px,
  close,
  vline by 60px
);

clip-path: shape(
  evenodd from 10px 10px,
  curve to 60px 20% with 40px 0,
  smooth to 90px 0,
  curve by -20px 60% with 10% 40px / 20% 20px,
  smooth by -40% -10px with -10px 70px,
  close
);
```

### Paramètres

- [`<fill-rule>`](/fr/docs/Web/SVG/Reference/Attribute/fill-rule) {{Optional_Inline}}
  - : Définit la manière dont les régions superposées d'une forme doivent être remplies. Les valeurs possibles sont&nbsp;:
    - `nonzero`&nbsp;: Un point est considéré comme étant à l'intérieur de la forme si un rayon tracé depuis ce point croise plus de segments de chemin de gauche à droite que de droite à gauche, ce qui donne un compte non nul. C'est la valeur par défaut si `<fill-rule>` est omis.

    - `evenodd`&nbsp;: Un point est considéré comme étant à l'intérieur de la forme si un rayon tracé depuis ce point croise un nombre impair de segments de chemin. Cela signifie que pour chaque fois que le rayon entre dans la forme, il n'en est pas sorti un nombre égal de fois, indiquant un nombre impair d'entrées sans sorties correspondantes.

    > [!WARNING]
    > `<fill-rule>` n'est pas pris en charge dans {{CSSxRef("offset-path")}} et son utilisation invalide la propriété.

- `from <coordinate-pair>`
  - : Définit le point de départ de la première `<shape-command>` comme une paire de coordonnées mesurées à partir du coin supérieur gauche de la [boîte de référence](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box). Les coordonnées sont spécifiées comme des valeurs `<x> <y>` {{CSSxRef("&lt;length-percentage&gt;")}} séparées par un espace, représentant respectivement le décalage à gauche et le décalage en haut. Les pourcentages sont relatifs à la largeur et à la hauteur de la boîte de référence de l'élément. Ajoutez une virgule après ce paramètre.

- `<shape-command>`
  - : Définit une liste d'une ou plusieurs commandes séparées par des virgules qui décrivent la forme, en utilisant une syntaxe similaire aux [commandes de chemin SVG](/fr/docs/Web/SVG/Reference/Attribute/d#path_commands). Les commandes incluent `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` et `close`. Le point de départ de chaque commande est le point d'arrivée de la commande précédente, le premier point étant défini par le paramètre [`from <coordinate-pair>`](#from_coordinate-pair).

    La plupart des commandes de forme utilisent un mot-clé (par exemple `move` ou `line`), suivi du mot-clé `by` ou `to`, puis d'un ensemble de coordonnées.

    `by`&nbsp;: Indique que la `<coordinate-pair>` est relative au point de départ de la commande (valeur «&nbsp;relative&nbsp;»).

    `to`&nbsp;: Indique que la `<coordinate-pair>` est relative au coin supérieur gauche de la boîte de référence (valeur «&nbsp;absolue&nbsp;»).

    > [!NOTE]
    > Si une coordonnée dans une `<coordinate-pair>` est spécifiée en pourcentage, la valeur est calculée par rapport à la largeur ou la hauteur correspondante de la boîte de référence.

    Les `<shape-command>` suivantes peuvent être définies&nbsp;: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` et `close`.

    `<move-command>`&nbsp;: Définie comme `move [by | to] <coordinate-pair>`. Cette commande ajoute une [commande MoveTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_moveto_path) à la liste des commandes de forme. Elle ne dessine rien, mais définit la position de départ de la prochaine commande. Le mot-clé `by` ou `to` indique si le point `<coordinate-pair>` est relatif ou absolu. Si la `<move-command>` suit la commande `close`, elle identifie le point de départ de la prochaine forme ou sous-chemin.

    `<line-command>`&nbsp;: Définie comme `line [by | to] <coordinate-pair>`. Cette commande ajoute une [commande LineTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) à la liste des commandes de forme. Elle trace une ligne droite du point de départ au point d'arrivée. Le mot-clé `by` ou `to` indique si le point d'arrivée est relatif ou absolu.

    `<hv-line-command>`&nbsp;: Définie comme `[hline | vline] [by | to] <length-percentage>`. Cette commande ajoute une [commande LineTo horizontale ou verticale](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) à la liste des commandes de forme. Avec `hline`, une ligne horizontale est tracée à partir du point de départ jusqu'à la position `x` définie par `<length-percentage>`. Avec `vline`, une ligne verticale est tracée jusqu'à la position `y` définie par `<length-percentage>`. Le mot-clé `by` ou `to` détermine si le point d'arrivée est relatif ou absolu. Cette commande correspond à `<line-command>` avec une seule coordonnée modifiée, l'autre restant inchangée.

    `<curve-command>`&nbsp;: Définie comme `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`. Cette commande ajoute une [courbe de Bézier](/fr/docs/Web/SVG/Reference/Attribute/d#courbe_cubic_de_bézier) à la liste des commandes de forme. Le mot-clé `by` ou `to` indique si le point d'arrivée de la courbe est relatif ou absolu. Le mot-clé `with` définit les points de contrôle de la courbe de Bézier.
    - Si une seule `<coordinate-pair>` est fournie, la commande trace une [courbe de Bézier quadratique](/fr/docs/Web/SVG/Reference/Attribute/d#courbe_quadratique_de_bézier), définie par trois points (départ, contrôle, arrivée).
    - Si deux `<coordinate-pair>` sont fournies, la commande trace une courbe de Bézier cubique, définie par quatre points (départ, deux points de contrôle, arrivée).

    `<smooth-command>`&nbsp;: Définie comme `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`. Cette commande ajoute une courbe de Bézier lisse à la liste des commandes de forme. Le mot-clé `by` ou `to` indique si le point d'arrivée de la courbe est relatif ou absolu.
    - Si `with <coordinate-pair>` est omis, la commande trace une courbe de Bézier quadratique lisse, utilisant le point de contrôle précédent et le point d'arrivée actuel.
    - Si le mot-clé `with` est inclus, il définit les points de contrôle de la courbe, traçant une courbe de Bézier cubique lisse.

    `<arc-command>`&nbsp;: Définie comme `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Cette commande ajoute une [courbe d'arc elliptique](/fr/docs/Web/SVG/Reference/Attribute/d#courbe_darc_elliptique) à la liste des commandes de forme. Elle trace un arc elliptique entre un point de départ et un point d'arrivée. Le mot-clé `by` ou `to` indique si le point d'arrivée est relatif ou absolu.

    La commande d'arc elliptique définit deux ellipses possibles, qui passent par les points de départ et d'arrivée, chacune pouvant être tracée dans le sens horaire ou antihoraire, soit quatre arcs possibles selon la taille, la direction et l'angle. Le mot-clé `of` définit la taille de l'ellipse&nbsp;: le premier `<length-percentage>` donne le rayon horizontal, le second le rayon vertical.

    Les paramètres suivants permettent de choisir l'un des quatre arcs&nbsp;:
    - `<arc-sweep>`&nbsp;: Indique si l'arc souhaité est tracé dans le sens horaire (`cw`) ou antihoraire (`ccw`). Par défaut&nbsp;: `ccw`.
    - `<arc-size>`&nbsp;: Indique si l'arc souhaité est le plus grand (`large`) ou le plus petit (`small`). Par défaut&nbsp;: `small`.
    - `<angle>`&nbsp;: Spécifie l'angle, en degrés, de rotation de l'ellipse par rapport à l'axe x. Un angle positif fait pivoter l'ellipse dans le sens horaire, un angle négatif dans le sens antihoraire. Par défaut&nbsp;: `0deg`.

    Cas particuliers&nbsp;:
    - Si un seul `<length-percentage>` est fourni, la même valeur est utilisée pour les deux rayons, créant un cercle. Dans ce cas, `<arc-size>` et `<angle>` n'ont pas d'effet.
    - Si l'un des rayons est nul, la commande correspond à une `<line-command>` jusqu'au point d'arrivée.
    - Si un rayon est négatif, sa valeur absolue est utilisée.
    - Si les rayons ne décrivent pas une ellipse assez grande pour passer par les deux points, ils sont augmentés uniformément jusqu'à ce que l'ellipse soit juste assez grande.
    - Si les points de départ et d'arrivée sont diamétralement opposés, il n'y a qu'une seule ellipse possible et deux arcs. Dans ce cas, `<arc-sweep>` choisit l'arc, `<arc-size>` n'a pas d'effet.

    `close`&nbsp;: Ajoute une [commande ClosePath](/fr/docs/Web/SVG/Reference/Attribute/d#closepath) à la liste des commandes de forme, traçant une ligne droite du point courant (fin de la dernière commande) au premier point défini par le paramètre `from <coordinate-pair>`. Pour fermer la forme sans tracer de ligne, ajoutez une `move-command` avec les coordonnées d'origine avant la commande close. Si la commande `close` est suivie immédiatement d'une `move-command`, elle définit le point de départ de la prochaine forme ou sous-chemin.

## Description

La fonction `shape()` permet de définir des formes complexes. Elle est similaire à la fonction de forme {{CSSxRef("basic-shape/path","path()")}} à plusieurs égards&nbsp;:

- Le paramètre `<fill-rule>` fonctionne exactement comme dans la fonction `path()`.
- La fonction `shape()` exige une ou plusieurs `<shape-command>`, chacune utilisant une [commande de chemin](/fr/docs/Web/SVG/Reference/Attribute/d#commande_path) sous-jacente, comme [MoveTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_moveto_path), [LineTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) et [ClosePath](/fr/docs/Web/SVG/Reference/Attribute/d#closepath).

Cependant, `shape()` présente plusieurs avantages par rapport à `path()`&nbsp;:

- `shape()` utilise la syntaxe CSS standard, ce qui facilite la création et la modification des formes directement dans votre feuille de style. À l'inverse, `path()` utilise la syntaxe [SVG path](/fr/docs/Web/SVG/Reference/Element/path), moins intuitive si vous ne connaissez pas SVG.
- `shape()` prend en charge divers types d'unités CSS, y compris les pourcentages, `rem` et `em`. `path()` définit les formes comme une seule chaîne et limite les unités à `px`.
- `shape()` permet aussi l'utilisation de fonctions mathématiques CSS comme {{CSSxRef("calc")}}, {{CSSxRef("max")}} et {{CSSxRef("abs")}}, offrant plus de flexibilité.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `shape()` pour définir un chemin

Cet exemple montre comment la fonction `shape()` peut être utilisée avec la propriété {{CSSxRef("offset-path")}} pour définir le chemin suivi par un élément.

La première forme, `shape1`, suit un chemin courbe de Bézier cubique défini par la commande `curve to`. Ensuite, la commande `close` trace une ligne droite du point final de la courbe au point initial défini par `from`. Enfin, `shape1` se déplace à sa nouvelle position `0px 150px` puis suit une ligne horizontale.

La seconde forme, `shape2`, suit d'abord une ligne horizontale, puis revient à sa position de départ `50px 90px`. Ensuite, elle suit une ligne verticale avant de fermer le chemin.

Les deux formes commencent avec leur couleur d'origine et passent progressivement à `hotpink` à la fin de l'animation `move`, puis reviennent à leur couleur initiale au redémarrage de l'animation. Ce changement cyclique de couleur vous donne un repère visuel sur la progression et le redémarrage de l'animation.

```html hidden
<div class="container">
  Utilisation de <code>&lt;curve-command&gt;</code>
  <div class="shape shape1">>></div>
</div>

<div class="container">
  Utilisation de <code>&lt;move-command&gt;</code> et
  <code>&lt;hvline-command&gt;</code>
  <div class="shape shape2">>></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border: 2px dotted green;
  margin: 20px;
}

@supports not (offset-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la fonction `shape()`.";
  }
}
```

```css
.shape {
  width: 50px;
  height: 50px;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
  animation: move 6s infinite linear;
}

.shape1 {
  offset-path: shape(
    from 30% 60px,
    curve to 180px 180px with 90px 190px,
    close,
    move by 0px 150px,
    hline by 40%
  );
}

.shape2 {
  offset-path: shape(
    from 50px 90px,
    hline to 8em,
    move to 50px 90px,
    vline by 20%,
    close
  );
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    background-color: hotpink;
  }
}
```

#### Résultat

{{EmbedLiveSample('utiliser_shape_pour_définir_un_chemin', '100%', 300)}}

### Utiliser `shape()` pour définir la partie visible d'un élément

Cet exemple montre comment la fonction `shape()` peut être utilisée avec la propriété {{CSSxRef("clip-path")}} pour créer différentes formes de région de découpage. La première forme (`shape1`) utilise un triangle défini par des lignes droites. La seconde forme (`shape2`) inclut des courbes et des transitions lisses&nbsp;; elle illustre aussi l'utilisation de `<move-command>` après la commande `close`, ce qui ajoute une forme rectangulaire à la région de découpage.

```html hidden
<div class="container">
  <div class="shape shape1"></div>
</div>

<div class="container">
  <div class="shape shape2"></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: lightgray;
}

@supports not (clip-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la fonction `shape()`.";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
}

/* Région de découpage triangulaire */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* Région de découpage en cœur avec courbes et arcs,
   et un rectangle ajouté avec hline et vline */
.shape2 {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px,
    close,
    move to 150px 150px,
    hline by 40px,
    vline by 40px,
    hline by -40px,
    close
  );
}
```

#### Résultat

{{EmbedLiveSample('utiliser_shape_pour_définir_la_partie_visible_dun_élément', '100%', 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("clip-path")}}
- {{CSSxRef("offset-path")}}
- Le module des [formes de base](/fr/docs/Web/CSS/Guides/Shapes)
- [Présentation des formes](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- [Guide des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
