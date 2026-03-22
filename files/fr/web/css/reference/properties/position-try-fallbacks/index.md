---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

La propriété [CSS](/fr/docs/Web/CSS) **`position-try-fallbacks`** permet de définir une liste d'une ou plusieurs **options de repli de position** pour les éléments positionnés par ancre afin qu'ils soient placés par rapport à leurs éléments d'ancrage associés. Lorsque l'élément dépasserait autrement son bloc contenant modifié par les marges internes, le navigateur essaiera de placer l'élément positionné dans ces différentes positions de repli, dans l'ordre fourni, jusqu'à ce qu'il trouve une valeur qui empêche le débordement de son conteneur ou de la fenêtre d'affichage.

> [!NOTE]
> La propriété raccourcie {{CSSxRef("position-try")}} peut être utilisée pour définir les valeurs de {{CSSxRef("position-try-order")}} et `position-try-fallbacks` dans une seule déclaration.

> [!NOTE]
> Cette propriété était à l'origine nommée et prise en charge dans les navigateurs Chromium sous le nom de `position-try-options`, avec les mêmes valeurs de propriété. Jusqu'à ce que `position-try-fallbacks` soit pris en charge, utilisez la propriété raccourcie {{CSSxRef("position-try")}} à la place.

## Syntaxe

```css
/* Valeur par défaut : aucune option de repli de position */
position-try-fallbacks: none;

/* Option de repli unique */
position-try-fallbacks: flip-block;
position-try-fallbacks: top;
position-try-fallbacks: --option-essai-personnalise;

/* Option de combinaison de valeurs multiples */
position-try-fallbacks: flip-block flip-inline;

/* Valeurs multiples */
position-try-fallbacks: flip-block, flip-inline;
position-try-fallbacks: top, right, bottom;
position-try-fallbacks:
  --option-essai-personnalise1, --option-essai-personnalise2;
position-try-fallbacks:
  flip-block,
  flip-inline,
  flip-block flip-inline;
position-try-fallbacks:
  flip-block,
  --option-essai-personnalise,
  --option-essai-personnalise flip-inline,
  right;

/* Valeurs globales */
position-try-fallbacks: inherit;
position-try-fallbacks: initial;
position-try-fallbacks: revert;
position-try-fallbacks: revert-layer;
position-try-fallbacks: unset;
```

La propriété `position-try-fallbacks` peut être définie soit avec la valeur clé `none`, soit avec une liste séparée par des virgules d'un ou plusieurs noms d'options de position personnalisées séparés par des espaces, de `<try-tactic>` ou d'une valeur `position-area`.

### Valeurs

- `none`
  - : La valeur par défaut. Aucune option de repli de position n'est définie.
- `<try-tactic>`
  - : Les options de repli prédéfinies déplacent l'élément positionné en prenant sa position calculée et en la transformant selon un axe particulier de l'ancre, en reflétant tout décalage de marge. Les valeurs possibles sont&nbsp;:
    - `flip-block`
      - : Inverse la position de l'élément le long de l'axe de bloc.
    - `flip-inline`
      - : Inverse la position de l'élément le long de l'axe en ligne.
    - `flip-start`
      - : Inverse les valeurs des axes en ligne et en bloc, en échangeant les propriétés `start` entre elles et les propriétés `end` entre elles.
- Valeur {{CSSxRef("position-area")}}
  - : Positionne l'élément par rapport aux bords de son élément ancre associé en plaçant l'élément positionné sur une ou plusieurs cases d'une grille implicite 3x3 [de la grille de zone de position](/fr/docs/Web/CSS/Reference/Properties/position-area#description) basée sur la valeur spécifiée {{CSSxRef("position-area_value","&lt;position-area>")}}&nbsp;; l'effet est le même qu'une option de repli personnalisée {{CSSxRef("@position-try")}} contenant uniquement un descripteur {{CSSxRef("position-area")}}.
- {{CSSxRef("dashed-ident")}}
  - : Ajoute une option personnalisée {{CSSxRef("@position-try")}} à la liste des options de repli, dont le nom identifiant correspond au `dashed-ident` défini. Si aucune option de position personnalisée n'existe avec ce nom, l'option est ignorée.

> [!NOTE]
> Plusieurs options peuvent être définies, séparées par des virgules.

## Description

Les éléments positionnés par ancre devraient toujours apparaître dans un endroit pratique pour que l'utilisateur·ice puisse interagir avec eux, si possible, quel que soit l'endroit où leur ancre est positionnée. Pour empêcher l'élément positionné de déborder de la fenêtre d'affichage, il est souvent nécessaire de changer sa position lorsque son ancre se rapproche du bord de son élément contenant ou de la fenêtre d'affichage.

Cela est réalisé en fournissant une ou plusieurs options de repli de position dans la propriété `position-try-fallbacks`. Si la position initiale de l'élément positionné déborde, le navigateur essaiera chaque option de repli&nbsp;; la première option de repli qui ne provoque pas de débordement de l'élément contenant est appliquée. Par défaut, le navigateur les essaiera dans l'ordre dans lequel elles apparaissent dans la liste, en appliquant la première qui empêchera l'élément positionné de déborder.

Si aucune option ne permet de placer l'élément positionné complètement à l'écran, le navigateur reviendra à l'affichage de l'élément positionné à sa position par défaut avant l'application de toute option de repli.

> [!NOTE]
> Dans certaines situations, vous pourriez vouloir simplement masquer les éléments positionnés qui débordent, ce qui peut être réalisé en utilisant la propriété {{CSSxRef("position-visibility")}}. Dans la plupart des cas, cependant, il est préférable de les garder à l'écran et utilisables.

Pour des informations détaillées sur les fonctionnalités d'ancre et l'utilisation des essais de position de repli, regardez le module [sur le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [des options de repli et masquage conditionnel pour le débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

### Valeurs prédéfinies de &lt;try-tactic&gt;

Appelées `<try-tactic>` dans la spécification, les valeurs prédéfinies déplacent l'élément positionné en prenant sa position calculée et en la transformant le long d'un axe particulier de l'ancre. Les valeurs prédéfinies sont&nbsp;:

- `flip-block`
  - : Inverse la position de l'élément le long de l'axe de bloc afin qu'il apparaisse à la même distance de l'ancre mais de l'autre côté. En d'autres termes, il reflète la position de l'élément par rapport à un axe en ligne tracé à travers le centre de l'ancre. Par exemple, si l'élément positionné commençait à déborder en haut de l'ancre, cette valeur inverserait la position vers le bas.
- `flip-inline`
  - : Inverse la position de l'élément le long de l'axe en ligne afin qu'il apparaisse à la même distance de l'ancre mais de l'autre côté. En d'autres termes, il reflète la position de l'élément par rapport à un axe de bloc tracé à travers le centre de l'ancre. Par exemple, si l'élément positionné commençait à déborder à gauche de l'ancre, cette valeur inverserait la position vers la droite.
- `flip-start`
  - : Reflète la position de l'élément par rapport à un axe tracé en diagonale à travers le centre de l'ancre, passant par le point à l'intersection du début de l'axe de bloc et du début de l'axe en ligne, et le point à l'intersection de la fin de l'axe de bloc et de la fin de l'axe en ligne. Par exemple, si l'élément positionné commençait à déborder à gauche de l'ancre, cette valeur inverserait l'élément positionné vers le haut.

### Options de combinaison

Une seule option de repli de position peut inclure plus d'une option `<try-tactic>` ou `dashed-ident`, ou une combinaison des deux en les déclarant comme une seule option séparée par des espaces&nbsp;:

- Dans le cas de plusieurs options `<try-tactic>` prédéfinies, leurs transformations sont composées ensemble.
- Dans le cas de la déclaration d'une option `<try-tactic>` prédéfinie et d'une option `<dashed-ident>` nommée `@position-try`, l'option de position personnalisée est appliquée en premier, puis la transformation `<try-tactic>` est appliquée.

Les valeurs `position-area` ne peuvent pas être combinées de cette manière.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre l'utilisation simple de quelques options de repli `<try-tactic>` prédéfinies.

#### HTML

Le HTML inclut deux éléments HTML {{HTMLElement("div")}} qui deviendront une ancre et un élément positionné par ancre&nbsp;:

```html
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

#### CSS

Nous mettons en forme l'élément `<body>` pour qu'il soit très grand, afin de permettre le défilement horizontal et vertical.

L'ancre reçoit un {{CSSxRef("anchor-name")}} et de grandes marges pour la placer quelque part près du centre de la section visible du `<body>`&nbsp;:

```css hidden
.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
body {
  width: 1500px;
  height: 500px;
}

.ancre {
  anchor-name: --mon-ancre;
  margin: 100px 350px;
}
```

La boîte d'information reçoit un positionnement fixe, une propriété {{CSSxRef("position-anchor")}} qui référence le `anchor-name` de l'ancre, pour les associer, et elle est attachée au coin supérieur gauche de l'ancre en utilisant un `position-area`.

Nous incluons une liste `position-try-fallbacks` (et la redéclarons avec le raccourci `position-try` au cas où le nom de propriété long ne serait pas encore pris en charge), fournissant deux options de repli de position prédéfinies pour éviter qu'elle ne déborde lorsque l'ancre se rapproche du bord de la fenêtre, en la retournant le long de l'axe en ligne ou de l'axe de bloc de l'ancre.

```css hidden
.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;
  position-area: top left;

  position-try-fallbacks: flip-block, flip-inline;
  position-try: flip-block, flip-inline;
}
```

#### Résultat

Cela nous donne le résultat suivant&nbsp;:

{{EmbedLiveSample("Utilisation simple", "100%", 250)}}

Essayez de faire défiler la page pour que l'ancre se rapproche des bords&nbsp;:

- Si vous déplacez l'ancre près du haut de la fenêtre, vous verrez l'élément positionné se retourner vers le bas à gauche de l'ancre pour éviter le débordement.
- Si vous déplacez l'ancre près de la gauche de la fenêtre, vous verrez l'élément positionné se retourner vers le haut à droite de l'ancre pour éviter le débordement.

Selon le navigateur, une fois que l'élément positionné passe à la position de repli, il peut rester dans cette position même si le positionnement de repli n'est plus nécessaire, par exemple lorsque l'espace permet de revenir à la position définie par la {{CSSxRef("position-area")}}.

Cependant, si vous déplacez l'ancre vers le coin supérieur gauche de la fenêtre, vous remarquerez un problème — lorsque l'élément positionné commence à déborder dans la direction du bloc et en ligne, il revient à sa position par défaut en haut à gauche et déborde dans les deux directions, ce qui n'est pas ce que nous voulons.

Ceci est dû au fait que nous n'avons donné au navigateur que des options de position `flip-block` _ou_ `flip-inline`. Nous ne lui avons pas donné l'option d'essayer les deux en même temps. L'exemple suivant vous montrera comment résoudre ce problème.

### Combiner plusieurs valeurs en une seule option

Utilisons une option de repli combinée pour résoudre le problème que nous avons rencontré avec la démo précédente.

#### HTML et CSS

Tout le HTML et le CSS de cette démo est le même, sauf pour le code de l'élément positionné. Dans ce cas, il reçoit une troisième option de repli de position `flip-block flip-inline`&nbsp;:

```html hidden
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.ancre {
  anchor-name: --mon-ancre;
  margin: 100px 350px;
}

.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;
  position-area: top left;

  position-try:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

#### Résultat

{{EmbedLiveSample("Combiner plusieurs valeurs en une seule option", "100%", 250)}}

La troisième option de repli pour la position signifie que le navigateur tentera d'abord `flip-block` puis `flip-inline` pour éviter le débordement, et si ces options échouent, il combinera les deux, inversant la position de l'élément dans les directions bloc et en ligne en même temps. Maintenant, lorsque vous faites défiler l'ancre vers les bords supérieur _et_ gauche de la fenêtre, l'élément positionné se retournera vers le bas à droite.

### Options de repli pour `position-area`

Cet exemple illustre certaines options alternatives de repli de position `position-area` en action.

#### HTML et CSS

Tout le HTML et le CSS de cette démonstration est le même, sauf pour le code de l'élément positionné. Dans ce cas, nos options de repli de position sont toutes des valeurs `position-area` — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` et `left`.

Cela signifie que l'élément positionné trouvera une position raisonnable pour s'afficher, quel que soit le bord de la fenêtre proche de l'ancre. Cette approche est un peu plus longue que l'approche des valeurs prédéfinies, mais elle est également plus granulaire et flexible.

```html hidden
<div class="ancre">⚓︎</div>

<div class="boite-information">
  <p>Ceci est une boîte d'information.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.ancre {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.ancre {
  anchor-name: --mon-ancre;
  margin: 100px 350px;
}

.boite-information {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.boite-information {
  position: fixed;
  position-anchor: --mon-ancre;
  position-area: top left;

  position-try:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;

  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

#### Résultat

{{EmbedLiveSample("Options de repli pour `position-area`", "100%", 250)}}

Faites défiler la page et observez l'effet de ces options de repli de position lorsque l'ancre se rapproche du bord de la fenêtre.

### Exemple d'options de repli personnalisées

Voir la page de référence {{CSSxRef("@position-try")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-try")}}
- La propriété {{CSSxRef("position-try-order")}}
- La règle {{CSSxRef("@position-try")}}
- La propriété {{CSSxRef("position-area")}}
- Le type de donnée {{CSSxRef("position-area_value", "&lt;position-area&gt;")}}
- Le guide [des options de repli et de masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Le guide [d'utilisation du positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
