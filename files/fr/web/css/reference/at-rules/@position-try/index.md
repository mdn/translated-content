---
title: "@position-try"
slug: Web/CSS/Reference/At-rules/@position-try
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@position-try`** permet de définir une option personnalisée de repli de position, utilisée pour définir le positionnement et l'alignement des éléments ancrés. Un ou plusieurs ensembles d'options de repli peuvent être appliqués à l'élément ancré via la propriété {{CSSxRef("position-try-fallbacks")}} ou le raccourci {{CSSxRef("position-try")}}. Lorsque l'élément positionné est déplacé à un endroit où il commence à déborder de son bloc conteneur ou de la zone d'affichage (<i lang="en">viewport</i> en anglais), le navigateur sélectionne la première option de repli qui permet de replacer l'élément entièrement à l'écran.

Chaque option de position est nommée avec un {{CSSxRef("dashed-ident")}} et contient une liste de descripteurs spécifiant des déclarations qui définissent des informations telles que la position d'insertion, la marge, la taille et l'auto-alignement. Le `<dashed-ident>` est utilisé pour référencer l'option personnalisée dans la propriété {{CSSxRef("position-try-fallbacks")}} et le raccourci {{CSSxRef("position-try")}}.

Pour des informations détaillées sur les fonctionnalités d'ancrage et l'utilisation des options de repli, consultez la page du module [Positionnement d'ancre CSS](/fr/docs/Web/CSS/CSS_anchor_positioning) et le guide [Options de repli et masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntaxe

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> `--try-option-name` est un {{CSSxRef("dashed-ident")}} qui définit un nom d'identification pour l'option de position personnalisée, pouvant ensuite être ajoutée à la liste {{CSSxRef("position-try-fallbacks")}}.

### Descripteurs

Les descripteurs définissent les valeurs des propriétés qui déterminent le comportement de l'option de position personnalisée, c'est-à-dire l'endroit où l'élément positionné sera placé.

- `position-anchor`&nbsp;: Définit la valeur de la propriété {{CSSxRef("position-anchor")}} qui indique l'élément d'ancrage auquel l'élément positionné est attaché, en spécifiant une valeur {{CSSxRef("dashed-ident")}} identique à la propriété {{CSSxRef("anchor-name")}} de l'élément d'ancrage.
- `position-area`&nbsp;: Définit la valeur de la propriété {{CSSxRef("position-area")}} qui indique la position de l'élément positionné par rapport à l'ancre.
- Descripteurs des propriétés d'insertion&nbsp;: Spécifient des valeurs de fonction [`anchor()`](/fr/docs/Web/CSS/anchor) qui définissent la position des bords de l'élément positionné par rapport aux bords de l'élément d'ancrage. Les descripteurs d'insertion peuvent représenter les propriétés suivantes&nbsp;:
  - {{CSSxRef("top")}}
  - {{CSSxRef("left")}}
  - {{CSSxRef("bottom")}}
  - {{CSSxRef("right")}}
  - {{CSSxRef("inset-block-start")}}
  - {{CSSxRef("inset-block-end")}}
  - {{CSSxRef("inset-inline-start")}}
  - {{CSSxRef("inset-inline-end")}}
  - {{CSSxRef("inset-block")}}
  - {{CSSxRef("inset-inline")}}
  - {{CSSxRef("inset")}}
- Descripteurs de marge&nbsp;: Spécifient la marge appliquée à l'élément positionné. Les descripteurs de marge peuvent représenter les propriétés suivantes&nbsp;:
  - {{CSSxRef("margin-top")}}
  - {{CSSxRef("margin-left")}}
  - {{CSSxRef("margin-bottom")}}
  - {{CSSxRef("margin-right")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-inline-start")}}
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
- Descripteurs de taille&nbsp;: Spécifient des valeurs de fonction [`anchor-size()`](/fr/docs/Web/CSS/anchor-size) qui définissent la taille de l'élément positionné par rapport à la taille de l'ancre. Les descripteurs de taille peuvent représenter les propriétés suivantes&nbsp;:
  - {{CSSxRef("width")}}
  - {{CSSxRef("height")}}
  - {{CSSxRef("min-width")}}
  - {{CSSxRef("min-height")}}
  - {{CSSxRef("max-width")}}
  - {{CSSxRef("max-height")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
- Descripteurs d'auto-alignement&nbsp;: Spécifient la valeur [`anchor-center`](/fr/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) pour aligner l'élément positionné par rapport au centre de l'ancre, dans la direction du bloc ou de l'axe inline. Les propriétés {{CSSxRef("align-self")}} et {{CSSxRef("justify-self")}} peuvent prendre la valeur `anchor-center`.

> [!NOTE]
> Lorsqu'une option de position personnalisée est appliquée à un élément, les valeurs définies dans le descripteur de la règle `@position-try` prennent le dessus sur celles définies sur l'élément via les propriétés CSS standard.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation d'une option de position personnalisée

Dans cet exemple, on définit un élément d'ancrage et un élément positionné, puis on crée quatre options de repli nommées. Ces options sont appliquées à l'élément positionné pour garantir que son contenu reste toujours visible, peu importe la position de l'ancre dans la zone d'affichage.

#### HTML

On inclut deux éléments {{HTMLElement("div")}} qui deviendront une ancre et un élément positionné&nbsp;:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Ceci est une boîte d'information.</p>
</div>
```

#### CSS

On commence par styliser l'élément `<body>` pour qu'il soit très grand, afin de pouvoir faire défiler l'ancre et l'élément positionné dans la zone d'affichage, horizontalement et verticalement&nbsp;:

```css
body {
  width: 1500px;
  height: 500px;
}
```

```css hidden
.anchor {
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

L'ancre reçoit un {{CSSxRef("anchor-name")}} et une valeur {{CSSxRef("position")}} de `absolute`. On la positionne ensuite près du centre du rendu initial du `<body>` avec les valeurs {{CSSxRef("top")}} et {{CSSxRef("left")}}&nbsp;:

```css
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Ensuite, on utilise la règle `@position-try` pour définir quatre options de position personnalisées, avec des noms {{CSSxRef("dashed-ident")}} descriptifs. Chacune place l'élément positionné à un endroit précis autour de l'ancre et lui donne une marge de `10px` adaptée. Le positionnement est géré de différentes manières pour illustrer les techniques disponibles&nbsp;:

- La première et la dernière option utilisent {{CSSxRef("position-area")}}.
- La deuxième option utilise {{CSSxRef("top")}} avec une valeur {{CSSxRef("anchor()")}} et {{CSSxRef("justify-self", "justify-self: anchor-center")}} pour centrer l'élément positionné sur l'ancre dans la direction inline.
- La troisième option utilise {{CSSxRef("left")}} avec une valeur {{CSSxRef("anchor()")}}, enveloppée dans une fonction {{CSSxRef("calc()")}} qui ajoute `10px` d'espacement (plutôt que de créer l'espacement avec {{CSSxRef("margin")}} comme les autres options). Elle utilise ensuite {{CSSxRef("align-self", "align-self: anchor-center")}} pour centrer l'élément positionné sur l'ancre dans la direction du bloc.

Enfin, les options gauche et droite reçoivent une valeur de {{CSSxRef("width")}} plus étroite&nbsp;:

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin-right: 10px;
}

@position-try --custom-bottom {
  top: anchor(bottom);
  justify-self: anchor-center;
  margin-top: 10px;
  position-area: none;
}

@position-try --custom-right {
  left: calc(anchor(right) + 10px);
  align-self: anchor-center;
  width: 100px;
  position-area: none;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

La boîte d'information reçoit un positionnement fixe, une propriété {{CSSxRef("position-anchor")}} qui référence le `anchor-name` de l'ancre pour les associer, et elle est attachée au bord supérieur de l'ancre via {{CSSxRef("position-area")}}. On lui donne aussi une largeur fixe {{CSSxRef("width")}} et une marge inférieure {{CSSxRef("margin")}}. Les options de position personnalisées sont ensuite référencées dans la propriété {{CSSxRef("position-try-fallbacks")}} pour éviter que l'élément positionné ne déborde ou ne soit masqué lors du défilement, lorsque l'ancre s'approche du bord de la zone d'affichage.

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  width: 200px;
  margin-bottom: 10px;
  position-try-fallbacks:
    --custom-left, --custom-bottom, --custom-right, --custom-bottom-right;
}
```

#### Résultat

Faites défiler la page et observez le changement de placement de l'élément positionné lorsque l'ancre s'approche des différents bords de la zone d'affichage. Cela est dû à l'application des différentes options de repli.

{{ EmbedLiveSample("utilisation_dune_option_de_position_personnalisée", "100%", "250") }}

Explication du fonctionnement des options de position&nbsp;:

- Tout d'abord, la position par défaut est définie par `position-area: top`. Lorsque la boîte d'information ne déborde pas, elle se place au-dessus de l'ancre et les options de repli définies dans la propriété `position-try-fallbacks` sont ignorées. Notez aussi que la boîte d'information a une largeur et une marge inférieure fixes. Ces valeurs changent selon l'option de repli appliquée.
- Si la boîte d'information commence à déborder, le navigateur essaie d'abord la position `--custom-left`. Cela déplace la boîte à gauche de l'ancre avec `position-area: left`, ajuste la marge et donne une largeur différente.
- Ensuite, le navigateur essaie la position `--custom-bottom`. Cela place la boîte en dessous de l'ancre avec `top` et `justify-self` au lieu de `position-area`, et définit une marge adaptée. Il n'y a pas de descripteur `width`, donc la boîte reprend sa largeur par défaut de `200px`.
- Le navigateur essaie ensuite la position `--custom-right`. Cela fonctionne comme la position `--custom-left`, avec la même largeur, mais on utilise `left` et `align-self` au lieu de `position-area`. On enveloppe la valeur de `left` dans une fonction `calc()` pour ajouter `10px` d'espacement, au lieu d'utiliser `margin`.
- Si aucune des autres options ne permet d'éviter le débordement, le navigateur essaie la position `--custom-bottom-right` en dernier recours. Cela place la boîte en bas à droite de l'ancre avec `position-area: bottom right`.

Quand une option de position est appliquée, ses valeurs remplacent celles initialement définies sur l'élément positionné. Par exemple, la largeur initiale de la boîte est `200px`, mais lorsque l'option `--custom-right` est appliquée, sa largeur passe à `100px`.

Dans certains cas, il faut désactiver les valeurs initiales à l'intérieur des options personnalisées. Les options `--custom-bottom` et `--custom-right` utilisent des propriétés d'insertion et `*-self: anchor-center` pour placer l'élément, donc on retire la valeur `position-area` précédemment définie en la mettant à `none`. Sinon, la valeur initiale `position-area: top` resterait active et interférerait avec le nouveau positionnement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("position-area")}}
- La propriété {{CSSxRef("position-anchor")}}
- La propriété {{CSSxRef("position-try-fallbacks")}}
- La propriété {{CSSxRef("position-try")}}
- La fonction {{CSSxRef("anchor()")}}
- La fonction {{CSSxRef("anchor-size()")}}
- Le module de [positionnement d'ancre CSS](/fr/docs/Web/CSS/CSS_anchor_positioning)
- [Guide pour utiliser le positionnement d'ancre CSS](/fr/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Guide pour les options de repli et le masquage conditionnel en cas de débordement](/fr/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- L'interface API {{DOMxRef("CSSPositionTryRule")}}
