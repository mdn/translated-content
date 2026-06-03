---
title: Fonction CSS `shape()`
short-title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
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
  - : Définit le point de départ de la première `<shape-command>` comme une paire de coordonnées mesurées à partir du coin supérieur gauche de la [boîte de référence](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box). Les coordonnées sont définies comme des valeurs `<x> <y>` {{CSSxRef("&lt;length-percentage&gt;")}} séparées par un espace, représentant respectivement le décalage à gauche et le décalage en haut. Les pourcentages sont relatifs à la largeur et à la hauteur de la boîte de référence de l'élément. Ajoutez une virgule après ce paramètre.

- `<shape-command>`
  - : Définit une liste d'une ou plusieurs commandes séparées par des virgules qui décrivent la forme, en utilisant une syntaxe similaire aux [commandes de chemin SVG](/fr/docs/Web/SVG/Reference/Attribute/d#commandes_de_tracé). Les commandes incluent `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>` et `close`. Le point de départ de chaque commande est le point d'arrivée de la commande précédente, le premier point étant défini par le paramètre [`from <coordinate-pair>`](#from_coordinate-pair).

#### Commandes de forme

La syntaxe de la plupart des commandes de forme est un mot-clé qui fournit une directive, comme `move` ou `line`, suivi du mot-clé `by` ou `to`, et d'un ensemble de coordonnées.

- `by`&nbsp;: Indique que la `<coordinate-pair>` est relative au point de départ de la commande (valeur «&nbsp;relative&nbsp;»).
- `to`&nbsp;: Indique que la `<coordinate-pair>` est relative au coin supérieur gauche de la boîte de référence (valeur «&nbsp;absolue&nbsp;»).

> [!NOTE]
> Si une coordonnée dans une `<coordinate-pair>` est définie en pourcentage, la valeur est calculée par rapport à la largeur ou la hauteur correspondante de la boîte de référence.

Les `<shape-command>` suivantes peuvent être définies&nbsp;:

- `<move-command>`
  - : Définie comme `move [by | to] <coordinate-pair>`. Cette commande ajoute une [commande MoveTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_moveto_path) à la liste des commandes de forme. Elle ne dessine rien&nbsp;; elle définit uniquement la position de départ pour la commande suivante. Le mot-clé `by` ou `to` indique si le point `<coordinate-pair>` est relatif ou absolu, respectivement. Si la `<move-command>` suit la commande `close`, elle identifie le point de départ de la forme ou du sous-chemin suivant.

- `<line-command>`
  - : Définie comme `line [by | to] <coordinate-pair>`. Cette commande ajoute une [commande LineTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) à la liste des commandes de forme. Elle trace une ligne droite du point de départ de la commande au point d'arrivée. Le mot-clé `by` ou `to` indique si le point d'arrivée défini par `<coordinate-pair>` est relatif ou absolu, respectivement.

- `<hv-line-command>`
  - : Définie comme `[hline | vline] [by | to] <length-percentage>`. Cette commande ajoute une [commande LineTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) horizontale (`hline`) ou verticale (`vline`) à la liste des commandes de forme. Avec `hline`, une ligne horizontale est tracée à partir du point de départ de la commande `to` ou `by` la position `x` définie par `<length-percentage>`. Avec `vline`, une ligne verticale est tracée à partir du point de départ de la commande `to` ou `by` la position `y` définie par `<length-percentage>`. Le mot-clé `by` ou `to` détermine si le point d'arrivée est relatif ou absolu, respectivement. Cette commande est équivalente à `<line-command>` avec une valeur de coordonnée définie par le seul `<length-percentage>` et l'autre valeur de coordonnée restant inchangée par rapport à la commande de départ.

- `<curve-command>`
  - : Définie comme `curve [by | to] <end-point> with <control-point> [/ <control-point>]`. Cette commande ajoute une [commande de courbe de Bézier](/fr/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) à la liste des commandes de forme. Le mot-clé `by` ou `to` détermine si le point d'arrivée de la courbe, défini par `<end-point>`, est relatif ou absolu.

    Le mot-clé `with` définit les points de contrôle de la courbe de Bézier comme suit.
    - Si un seul `<control-point>` est fourni, la commande trace une [courbe de Bézier quadratique](/fr/docs/Web/SVG/Reference/Attribute/d#courbe_de_bézier_quadratique), qui est définie par trois points (le point de départ, le point de contrôle et le point d'arrivée).
    - Si deux valeurs `<control-point>` sont fournies, la commande trace une courbe de Bézier cubique, qui est définie par quatre points (le point de départ, deux points de contrôle et le point d'arrivée).

    Les valeurs valides pour `<end-point>` incluent&nbsp;:
    - {{CSSxRef("&lt;position&gt;")}} mots-clés ou une `<coordinate-value-pair>`
      - : Peut être utilisé si le point d'arrivée de la courbe est absolu (défini en utilisant `to`).
    - `<coordinate-value-pair>`
      - : Peut être utilisé si le point d'arrivée de la courbe est relatif (défini en utilisant `by`).

    Les valeurs valides pour `<control-point>` incluent&nbsp;:
    - {{CSSxRef("&lt;position&gt;")}}
      - : Définit un mot-clé de position. Cette valeur est valide uniquement lorsque le point d'arrivée de la courbe est absolu (défini en utilisant `to`).
    - `<coordinate-value-pair>`
      - : Définit une paire de valeurs {{CSSxRef("&lt;length-percentage&gt;")}} qui définissent les coordonnées.
    - `<relative-control-point>`
      - : Définit une `<coordinate-value-pair>` suivie du mot-clé `from` et de l'un des mots-clés suivants&nbsp;:
        - `start`
          - : Indique que le point de contrôle est relatif au point de départ de la commande actuelle.
        - `end`
          - : Indique que le point de contrôle est relatif au point d'arrivée de la commande actuelle.
        - `origin`
          - : Indique que le point de contrôle est relatif au point en haut à gauche (origine) du conteneur dans lequel la forme est dessinée.
            > [!NOTE]
            > Si les mots-clés `<relative-control-point>` ne sont pas définis, ce qui fait du `<control-point>` une `<coordinate-value-pair>` normale, les coordonnées sont relatives au début de la courbe. En d'autres termes, `start` est le paramètre par défaut.

- `<smooth-command>`
  - : Définie comme `smooth [by | to] <end-point> [with <control-point>]`. Cette commande ajoute une [commande de courbe de Bézier lisse](/fr/docs/Web/SVG/Reference/Attribute/d#courbes_de_bézier_cubiques) à la liste des commandes de forme. Le mot-clé `by` ou `to` détermine si le point d'arrivée de la courbe, défini par `<end-point>`, est relatif ou absolu.

    Le mot-clé `with` définit un point de contrôle optionnel pour la courbe de Bézier&nbsp;:
    - Si `with <control-point>` est omis, la commande trace une courbe de Bézier quadratique lisse, qui utilise le point de contrôle précédent et le point d'arrivée actuel pour définir la courbe.
    - Si le mot-clé optionnel `with` est inclus, il définit un point de contrôle de la courbe avec `<control-point>`, traçant une courbe de Bézier cubique lisse définie par le point de contrôle précédent, le point de contrôle actuel et le point d'arrivée actuel.

    Les courbes lisses assurent une transition continue à partir de la forme, tandis que les courbes quadratiques ne le font pas. Les courbes quadratiques lisses maintiennent une transition fluide en utilisant un seul point de contrôle, tandis que les courbes cubiques lisses offrent une transition plus raffinée en utilisant deux points de contrôle.

    Les valeurs valides pour les composants `<end-point>` et `<control-point>` sont les mêmes que celles de [`<curve-command>`](#curve-command).

- `<arc-command>`
  - : Définie comme `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. Cette commande ajoute une [commande de courbe elliptique](/fr/docs/Web/SVG/Reference/Attribute/d#courbe_darc_elliptique) à la liste des commandes de forme. Elle trace un arc elliptique entre un point de départ et un point d'arrivée. Le mot-clé `by` ou `to` détermine si le point d'arrivée de la courbe, défini par la première `<coordinate-pair>`, est relatif ou absolu, respectivement.

    La commande de courbe elliptique définit deux ellipses possibles, qui intersectent à la fois les points de départ et d'arrivée, et chacune peut être tracée dans le sens des aiguilles d'une montre ou dans le sens inverse, ce qui donne quatre arcs possibles en fonction de la taille de l'arc, de la direction et de l'angle. Le mot-clé `of` définit la taille de l'ellipse à partir de laquelle l'arc est pris&nbsp;: le premier `<length-percentage>` fournit le rayon horizontal de l'ellipse, et le second `<length-percentage>` fournit le rayon vertical.

    Définissez les paramètres suivants pour choisir lequel des quatre arcs utiliser&nbsp;:
    - `<arc-sweep>`&nbsp;: Indique si l'arc souhaité est celui tracé autour de l'ellipse dans le sens des aiguilles d'une montre (`cw`) ou dans le sens inverse (`ccw`). Si omis, la valeur par défaut est `ccw`.
    - `<arc-size>` &nbsp;: Indique si l'arc souhaité est le plus grand (`large`) ou le plus petit (`small`) des deux arcs. Si omis, la valeur par défaut est `small`.
    - `<angle>`&nbsp;: Définit l'angle, en degrés, de rotation de l'ellipse par rapport à l'axe des x. Un angle positif fait pivoter l'ellipse dans le sens des aiguilles d'une montre, et un angle négatif dans le sens inverse. Si omis, la valeur par défaut est `0deg`.

    Les situations spéciales sont gérées comme suit&nbsp;:
    - Si un seul `<length-percentage>` est fourni, la même valeur est utilisée pour les rayons horizontal et vertical, créant effectivement un cercle. Dans ce cas, `<arc-size>` et `<angle>` n'ont aucun effet.
    - Si l'un des rayons est nul, la commande équivaut à une `<line-command>` vers le point d'arrivée.
    - Si l'un des rayons est négatif, sa valeur absolue est utilisée à la place.
    - Si les rayons horizontal et vertical ne décrivent pas une ellipse suffisamment grande pour intersecter à la fois le point de départ et le point d'arrivée (après rotation par un `<angle>` défini), les rayons sont augmentés uniformément jusqu'à ce que l'ellipse soit juste assez grande pour intersecter les deux points.
    - Si les points de départ et d'arrivée de l'arc se trouvent exactement de part et d'autre de l'ellipse, il n'y a qu'une seule ellipse possible et deux arcs possibles. Dans ce cas, `<arc-sweep>` définit l'arc à choisir, et `<arc-size>` n'a aucun effet.

- `close`
  - : Ajoute une [commande ClosePath](/fr/docs/Web/SVG/Reference/Attribute/d#closepath) à la liste des commandes de forme, traçant une ligne droite depuis la position actuelle (fin de la dernière commande) jusqu'au premier point du chemin défini dans le paramètre `from <coordinate-pair>`. Pour fermer la forme sans tracer de ligne, incluez une `<move-command>` avec les coordonnées d'origine avant la commande close. Si la commande `close` est immédiatement suivie d'une `<move-command>`, elle définit le point de départ de la forme ou sous-chemin suivant.

## Description

La fonction `shape()` permet de définir des formes complexes. Elle est similaire à la fonction de forme {{CSSxRef("basic-shape/path","path()")}} à plusieurs égards&nbsp;:

- Le paramètre `<fill-rule>` fonctionne exactement comme dans la fonction `path()`.
- La fonction `shape()` exige une ou plusieurs `<shape-command>`, chacune utilisant une [commande de chemin](/fr/docs/Web/SVG/Reference/Attribute/d#commandes_de_tracé) sous-jacente, comme [MoveTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_moveto_path), [LineTo](/fr/docs/Web/SVG/Reference/Attribute/d#commande_lineto_path) et [ClosePath](/fr/docs/Web/SVG/Reference/Attribute/d#closepath).

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
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la fonction `shape()`.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

{{EmbedLiveSample("Utiliser `shape()` pour définir un chemin", "100%", 300)}}

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
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la fonction `shape()`.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
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

{{EmbedLiveSample("Utiliser `shape()` pour définir la partie visible d'un élément", "100%", 300)}}

### Utiliser `shape()` pour dessiner des courbes avec des points de contrôle relatifs

Comme dans les exemples précédents, cet exemple utilise également {{CSSxRef("clip-path")}} pour créer différentes formes pour les régions de découpe des éléments. Les formes sont définies en utilisant une combinaison de [`<curve-command>`](#curve-command) et [`<smooth-command>`](#smooth-command), et les points de contrôle sont définis en utilisant des valeurs [`<relative-control-point>`](#relative-control-point).

La première forme (`shape1`) dessine deux courbes de Bézier cubiques.

- La première courbe commence au centre du bord gauche de la boîte et est tracée jusqu'à un point `200px` le long de l'axe x — le centre du bord droit de la boîte. Elle utilise un point de contrôle relatif au début de la courbe et un point de contrôle relatif à l'origine (coin supérieur gauche de la boîte).
- La deuxième courbe commence au centre droit de la boîte et est tracée `-200px` le long de l'axe x — le centre du bord gauche de la boîte. Elle utilise un point de contrôle relatif à l'origine et un point de contrôle relatif au début de la courbe.

```html hidden live-sample___relative-control-points
<div class="container">
  <div id="shape1"></div>
  <div id="shape2"></div>
  <div id="shape3"></div>
</div>
```

```css hidden live-sample___relative-control-points
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@supports not (
  clip-path: shape(
      from center left,
      curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
      curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
      close
    )
) {
  body::after {
    content: "Votre navigateur ne prend pas en charge les points de contrôle relatifs de `shape()`.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___relative-control-points
#shape1 {
  width: 200px;
  height: 200px;
  background: green;
  clip-path: shape(
    from center left,
    curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
    curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
    close
  );
}
```

La deuxième forme (`shape2`) dessine une courbe de Bézier quadratique et une courbe de Bézier cubique.

- La première courbe commence au centre du bord gauche de la boîte et est tracée jusqu'à un point absolu `200px` depuis l'origine le long de l'axe x et `100px` depuis l'origine le long de l'axe y. Elle utilise un point de contrôle relatif au début de la courbe.
- La deuxième courbe commence au point final de la courbe précédente et est tracée jusqu'au centre du bord gauche de la boîte. Elle utilise un point de contrôle relatif au début de la courbe et un point de contrôle relatif à la fin.

```css live-sample___relative-control-points
#shape2 {
  width: 200px;
  height: 200px;
  background: purple;
  clip-path: shape(
    from center left,
    curve to 200px 100px with 50% -80% from start,
    curve to center left with 0% 70% from start / 20% 0% from end,
    close
  );
}
```

La troisième forme (`shape3`) dessine une courbe de Bézier quadratique et une courbe de Bézier cubique en utilisant une commande `smooth`.

- La première courbe commence au centre du bord gauche de la boîte et est tracée jusqu'à un point `200px` le long de l'axe horizontal. Elle utilise un point de contrôle relatif au début de la courbe.
- La deuxième courbe commence au point final de la courbe précédente et est tracée jusqu'au centre de la boîte. Elle utilise un point de contrôle relatif au début de la courbe (le dernier point de contrôle de la courbe précédente) et un point de contrôle relatif à l'origine.

```css live-sample___relative-control-points
#shape3 {
  width: 200px;
  height: 200px;
  background: orangered;
  clip-path: shape(
    from center left,
    curve by 200px 0px with 50% -80% from start,
    smooth to center with 50% 100% from origin,
    close
  );
}
```

#### Résultat

{{EmbedLiveSample("relative-control-points", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("offset-path")}}
- Le module des [formes de base](/fr/docs/Web/CSS/Guides/Shapes)
- Le guide [d'aperçu des formes](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le guide [des formes de base](/fr/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
