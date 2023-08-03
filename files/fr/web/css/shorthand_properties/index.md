---
title: Propriétés raccourcies
slug: Web/CSS/Shorthand_properties
l10n:
  sourceCommit: be7a098e6af7b820c06a2d5169a9221ee2065e82
---

{{CSSRef}}

**_Les propriétés raccourcies_** sont des propriétés CSS permettant de paramétrer simultanément les valeurs de plusieurs propriétés CSS. Utiliser une propriété raccourcie permet d'obtenir des feuilles de style plus concises (et souvent plus lisibles).

La spécification CSS définit des propriétés raccourcies qui regroupent des propriétés courantes portant sur le même thème. Ainsi, la propriété [`background`](/fr/docs/Web/CSS/background) est une propriété raccourcie qui permet de définir les valeurs de [`background-color`](/fr/docs/Web/CSS/background-color), [`background-image`](/fr/docs/Web/CSS/background-image), [`background-repeat`](/fr/docs/Web/CSS/background-repeat), et [`background-position`](/fr/docs/Web/CSS/background-position). De la même façon, la plupart des propriétés communes relatives aux polices peuvent être définies grâce à la propriété raccourcie [`font`](/fr/docs/Web/CSS/font), et celles portant sur les marges autour d'une boîte peuvent être paramétrées grâce à la propriété raccourcie [`margin`](/fr/docs/Web/CSS/margin).

## Quelques cas aux limites délicats

Il existe quelques cas aux limites qu'il convient de garder à l'esprit lorsqu'on utilise les propriétés raccourcies.

### L'omission de propriétés

Lorsqu'une valeur n'est pas fournie dans la propriété raccourcie, la propriété correspondante utilise alors sa valeur initiale. Cela signifie que la déclaration de la propriété raccourcie **l'emportera** sur les valeurs des éventuelles déclarations précédentes. Prenons par exemple&nbsp;:

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

La couleur de l'arrière-plan ne sera pas rouge (`red`), ce sera la valeur par défaut de [`background-color`](/fr/docs/Web/CSS/background-color) qui sera utilisée&nbsp;: `transparent`.

Seules les propriétés détaillées permettent l'héritage. Comme les valeurs manquantes dans une déclaration raccourcie sont remplacées par les valeurs initiales correspondantes, il est impossible de permettre l'héritage des propriétés détaillées en les omettant. Le mot-clé `inherit` peut être appliqué à une propriété, mais uniquement dans son ensemble et non comme un mot-clé pour une valeur parmi d'autres. Cela signifie que la seule façon pour qu'une valeur donnée soit héritée consiste à utiliser la propriété détaillée avec le mot-clé `inherit`.

### L'ordre des propriétés

Les propriétés raccourcies essaient de ne pas imposer un ordre spécifique pour les valeurs des propriétés qu'elles synthétisent. Cela fonctionne bien lorsque les propriétés détaillées sont de différents types, l'ordre n'ayant alors pas d'importance. En revanche, cela ne peut pas fonctionner si plusieurs des propriétés détaillées permettent d'utiliser des mêmes valeurs.

Il y a deux thèmes pour lesquels l'ordre est important&nbsp;:

- Les propriétés relatives aux bords d'une boîte, comme [`border-style`](/fr/docs/Web/CSS/border-style), [`margin`](/fr/docs/Web/CSS/margin) ou [`padding`](/fr/docs/Web/CSS/padding).
- Les propriétés relatives aux coins d'une boîte, comme [`border-radius`](/fr/docs/Web/CSS/border-radius)

#### Propriétés pour les bords d'une boîte

Les propriétés raccourcies qui portent sur les bords d'une boîte, comme [`border-style`](/fr/docs/Web/CSS/border-style), [`margin`](/fr/docs/Web/CSS/margin) ou [`padding`](/fr/docs/Web/CSS/padding), utilisent toutes une syntaxe cohérente ayant 1 à 4 valeurs&nbsp;:

- Syntaxe avec une valeur

  - : `border-width: 1em` — la valeur représente tous les bords&nbsp;: ![Les bords de la boîte avec une syntaxe utilisant une valeur.](border1.png)

- Syntaxe avec deux valeurs

  - : `border-width: 1em 2em` — la première valeur représente les bords sur l'axe vertical, c'est-à-dire les bords haut et bas&nbsp;; la seconde représente les bords sur l'axe horizontal, c'est-à-dire les bords gauche et droit&nbsp;: ![Les bords de la boîte avec une syntaxe utilisant deux valeurs.](border2.png)

- Syntaxe avec trois valeurs

  - : `border-width: 1em 2em 3em` — la première valeur représente le bord haut, la deuxième représente les bords de l'axe horizontal&nbsp;: gauche et droit, et la troisième représente le bord bas&nbsp;: ![Les bords de la boîte avec une syntaxe utilisant trois valeurs.](border3.png)

- Syntaxe avec quatre valeurs
  - : `border-width: 1em 2em 3em 4em` — les quatre valeurs représentent respectivement les bords haut, droit, bas et gauche (et toujours dans cet ordre), soit un sens horaire à partir du haut&nbsp;: ![Les bords de la boîte avec une syntaxe utilisant quatre valeurs.](border4.png) Un moyen mnémotechnique pour mémoriser l'ordre consiste à visualiser le mouvement des aiguilles sur une horloge&nbsp;: la première valeur (ici `1em`) commence à midi, puis la deuxième (ici `2em`) à 15h, puis la troisième (ici `3em`) à 18h, et la dernière (`4em` dans notre exemple) à 21h.

#### Propriétés pour les coins d'une boîte

De la même manière, les propriétés raccourcies qui portent sur les coins d'une boîte (par exemple [`border-radius`](/fr/docs/Web/CSS/border-radius)) utilisent toutes une syntaxe cohérente ayant 1 à 4 valeurs&nbsp;:

- Syntaxe avec une valeur

  - : `border-radius: 1em` — la valeur unique représente tous les coins&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant une valeur.](corner1.png)

- Syntaxe avec deux valeurs

  - : `border-radius: 1em 2em` — la première valeur porte sur les coins supérieur gauche et inférieur droit, la seconde porte sur les coins supérieur droit et inférieur gauche&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant deux valeurs.](corner2.png)

- Syntaxe avec trois valeurs

  - : `border-radius: 1em 2em 3em` — la première valeur représente le coin supérieur gauche, la deuxième les coins supérieur droit et inférieur gauche, la troisième le coin inférieur droit&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant trois valeurs.](corner3.png)

- Syntaxe avec quatre valeurs
  - : `border-radius: 1em 2em 3em 4em` — les quatre valeurs représentent respectivement les coins supérieur gauche, supérieur droit, inférieur droit et inférieur gauche (et toujours dans cet ordre), soit un sens horaire à partir du coin supérieur gauche&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant quatre valeurs.](corner4.png)

## Propriétés pour l'arrière-plan

Prenons un arrière-plan déclaré comme tel&nbsp;:

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

On pourra synthétiser ces quatre déclarations en une&nbsp;:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

Voir [`background`](/fr/docs/Web/CSS/background) pour plus d'informations.

> **Note :** La forme raccourcie correspond plus précisément aux propriétés détaillées indiquées ici avec également, `background-attachment: scroll` et d'autres propriétés supplémentaires.

## Propriétés typographiques

Prenons les déclarations suivantes&nbsp;:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

On pourra les raccourcir ainsi&nbsp;:

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

Voir [`font`](/fr/docs/Web/CSS/font) pour plus d'informations sur cette propriété.

> **Note :** Cette déclaration raccourcie avec [`font`](/fr/docs/Web/CSS/font) est en réalité équivalente aux déclarations détaillées présentes ici, avec en plus `font-variant: normal`, `font-size-adjust: none`, et `font-stretch: normal`.

## Propriétés pour les bordures

Les épaisseurs, couleurs et styles d'une bordure peuvent être exprimés avec une seule déclaration. Si on part du fragment de CSS suivant&nbsp;:

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

On pourra le simplifier de la façon suivante&nbsp;:

```css
border: 1px solid #000;
```

Voir [`border`](/fr/docs/Web/CSS/border) pour plus d'informations sur cette propriété.

## Propriétés pour les marges et le remplissage (<i lang="en">padding</i>)

Les propriétés raccourcies pour les marges et le remplissage fonctionnent de la même façon. La propriété [`margin`](/fr/docs/Web/CSS/margin) permet une syntaxe avec une, deux, trois ou quatre valeurs. Prenons les déclarations de ce fragment&nbsp;:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

On pourra les condenser en une seule déclaration équivalente (on notera l'ordre dans le sens horaire&nbsp;: haut, droit, bas, gauche)&nbsp;:

```css
margin: 10px 5px 10px 5px;
```

## Propriétés de position

Pour positionner un élément, plutôt que d'utiliser les propriétés détaillées `top`, `right`, `bottom` et `left` comme ceci&nbsp;:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

On pourra utiliser la propriété [`inset`](/fr/docs/Web/CSS/inset) qui les synthétise&nbsp;:

```css
inset: 0 20px 0 20px;
```

À l'instar des marges et du remplissage, les valeurs suivent l'ordre horaire (haut, droit, bas, puis gauche).

## La propriété raccourcie universelle

CSS fournit une propriété raccourcie universelle, [`all`](/fr/docs/Web/CSS/all), qui applique sa valeur à toutes les propriétés du document. Elle permet ainsi de changer le modèle d'héritage des propriétés.

Voir les articles [La cascade et l'héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) ou [Introduction à la cascade CSS](/fr/docs/Web/CSS/Cascade) pour plus d'informations sur le fonctionnement de l'héritage en CSS.

## Voir aussi

- Les concepts fondamentaux de CSS&nbsp;:
  - [La syntaxe CSS](/fr/docs/Web/CSS/Syntax)
  - [Les règles @](/fr/docs/Web/CSS/At-rule)
  - [Les commentaires](/fr/docs/Web/CSS/Comments)
  - [La spécificité](/fr/docs/Web/CSS/Specificity)
  - [L'héritage](/fr/docs/Web/CSS/Inheritance)
  - [Le modèle de boîtes](/fr/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Les modes de disposition](/fr/docs/Web/CSS/Layout_mode)
  - [Les modèles de formatage visuel](/fr/docs/Web/CSS/Visual_formatting_model)
  - [La fusion des marges](/fr/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Les différentes valeurs
    - [Les valeurs initiales](/fr/docs/Web/CSS/initial_value)
    - [Les valeurs calculées](/fr/docs/Web/CSS/computed_value)
    - [Les valeurs utilisées](/fr/docs/Web/CSS/used_value)
    - [Les valeurs réelles](/fr/docs/Web/CSS/actual_value)
  - [La syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
  - [Les éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
- Les propriétés raccourcies&nbsp;:
  - [`all`](/fr/docs/Web/CSS/all)
  - [`animation`](/fr/docs/Web/CSS/animation)
  - [`background`](/fr/docs/Web/CSS/background)
  - [`border`](/fr/docs/Web/CSS/border)
  - [`border-block-end`](/fr/docs/Web/CSS/border-block-end)
  - [`border-block-start`](/fr/docs/Web/CSS/border-block-start)
  - [`border-bottom`](/fr/docs/Web/CSS/border-bottom)
  - [`border-color`](/fr/docs/Web/CSS/border-color)
  - [`border-image`](/fr/docs/Web/CSS/border-image)
  - [`border-inline-end`](/fr/docs/Web/CSS/border-inline-end)
  - [`border-inline-start`](/fr/docs/Web/CSS/border-inline-start)
  - [`border-left`](/fr/docs/Web/CSS/border-left)
  - [`border-radius`](/fr/docs/Web/CSS/border-radius)
  - [`border-right`](/fr/docs/Web/CSS/border-right)
  - [`border-style`](/fr/docs/Web/CSS/border-style)
  - [`border-top`](/fr/docs/Web/CSS/border-top)
  - [`border-width`](/fr/docs/Web/CSS/border-width)
  - [`column-rule`](/fr/docs/Web/CSS/column-rule)
  - [`columns`](/fr/docs/Web/CSS/columns)
  - [`contain-intrinsic-size`](/fr/docs/Web/CSS/contain-intrinsic-size)
  - [`flex`](/fr/docs/Web/CSS/flex)
  - [`flex-flow`](/fr/docs/Web/CSS/flex-flow)
  - [`font`](/fr/docs/Web/CSS/font)
  - [`gap`](/fr/docs/Web/CSS/gap)
  - [`grid`](/fr/docs/Web/CSS/grid)
  - [`grid-area`](/fr/docs/Web/CSS/grid-area)
  - [`grid-column`](/fr/docs/Web/CSS/grid-column)
  - [`grid-row`](/fr/docs/Web/CSS/grid-row)
  - [`grid-template`](/fr/docs/Web/CSS/grid-template)
  - [`inset`](/fr/docs/Web/CSS/inset)
  - [`list-style`](/fr/docs/Web/CSS/list-style)
  - [`margin`](/fr/docs/Web/CSS/margin)
  - [`mask`](/fr/docs/Web/CSS/mask)
  - [`offset`](/fr/docs/Web/CSS/offset)
  - [`outline`](/fr/docs/Web/CSS/outline)
  - [`overflow`](/fr/docs/Web/CSS/overflow)
  - [`padding`](/fr/docs/Web/CSS/padding)
  - [`place-content`](/fr/docs/Web/CSS/place-content)
  - [`place-items`](/fr/docs/Web/CSS/place-items)
  - [`place-self`](/fr/docs/Web/CSS/place-self)
  - [`scroll-margin`](/fr/docs/Web/CSS/scroll-margin)
  - [`scroll-padding`](/fr/docs/Web/CSS/scroll-padding)
  - [`scroll-timeline`](/fr/docs/Web/CSS/scroll-timeline)
  - [`text-decoration`](/fr/docs/Web/CSS/text-decoration)
  - [`text-emphasis`](/fr/docs/Web/CSS/text-emphasis)
  - [`transition`](/fr/docs/Web/CSS/transition)
