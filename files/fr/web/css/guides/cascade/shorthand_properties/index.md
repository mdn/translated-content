---
title: Propriétés raccourcies
slug: Web/CSS/Guides/Cascade/Shorthand_properties
l10n:
  sourceCommit: 82f81b39d2a3fb0d944c79ff98343d98d02b7eab
---

Les **_propriétés raccourcies_** sont des propriétés CSS permettant de paramétrer simultanément les valeurs de plusieurs propriétés CSS. Utiliser une propriété raccourcie permet d'obtenir des feuilles de style plus concises (et souvent plus lisibles).

La spécification CSS définit des propriétés raccourcies pour regrouper la définition de propriétés courantes agissant sur le même thème. Par exemple, la propriété CSS {{CSSxRef("background")}} est une propriété raccourcie qui permet de définir les valeurs de {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-repeat")}} et {{CSSxRef("background-position")}}.

## Quelques cas aux limites délicats

Il existe quelques cas aux limites qu'il convient de garder à l'esprit lorsqu'on utilise les propriétés raccourcies.

### L'omission de propriétés

Une valeur qui n'est pas définie est remplacée par une valeur par défaut définie par la propriété raccourcie, qui peut différer de la valeur initiale de la propriété.

Cela signifie que la déclaration de la propriété raccourcie **l'emporte** sur les valeurs précédemment définies.
Par exemple&nbsp;:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

La couleur de l'arrière-plan n'est pas rouge (`red`), c'est la valeur par défaut de {{CSSxRef("background-color")}}, qui est `transparent`.

Seules les propriétés détaillées permettent l'héritage. Comme les valeurs manquantes dans une déclaration raccourcie sont remplacées par les valeurs initiales correspondantes, il est impossible de permettre l'héritage des propriétés détaillées en les omettant. Le mot-clé `inherit` peut être appliqué à une propriété, mais uniquement dans son ensemble et non comme un mot-clé pour une valeur parmi d'autres. Cela signifie que la seule façon pour qu'une valeur donnée soit héritée consiste à utiliser la propriété détaillée avec le mot-clé `inherit`.

### L'ordre des propriétés

Les propriétés raccourcies essaient de ne pas imposer un ordre spécifique pour les valeurs des propriétés qu'elles synthétisent. Cela fonctionne bien lorsque les propriétés détaillées sont de différents types, l'ordre n'ayant alors pas d'importance. En revanche, cela ne peut pas fonctionner si plusieurs des propriétés détaillées permettent d'utiliser des mêmes valeurs.

Il y a deux thèmes pour lesquels l'ordre est important&nbsp;:

- Propriétés relatives aux bords d'une boîte, comme {{CSSxRef("border-style")}}, {{CSSxRef("margin")}} ou {{CSSxRef("padding")}}
- Propriétés relatives aux coins d'une boîte, comme {{CSSxRef("border-radius")}}

#### Propriétés pour les bords d'une boîte

Les raccourcis gérant les propriétés liées aux côtés de la boîte, tels que {{CSSxRef("border-style")}}, {{CSSxRef("margin")}} ou {{CSSxRef("padding")}}, utilisent toujours une syntaxe cohérente à 1 à 4 valeurs représentant ces côtés&nbsp;:

- **Syntaxe à 1 valeur&nbsp;:** `border-width: 1em` — Une seule valeur représente tous les côtés&nbsp;: ![Les côtés de la boîte avec une syntaxe utilisant une valeur](border1.png)

- **Syntaxe à 2 valeurs&nbsp;:** `border-width: 1em 2em` — La première valeur représente les côtés supérieur et inférieur, et la deuxième valeur représente les côtés gauche et droit&nbsp;: ![Les côtés de la boîte avec une syntaxe utilisant deux valeurs](border2.png)

- **Syntaxe à 3 valeurs&nbsp;:** `border-width: 1em 2em 3em` — La première valeur représente le côté supérieur, la deuxième valeur représente les côtés gauche et droit, et la troisième valeur représente le côté inférieur&nbsp;: ![Les côtés de la boîte avec une syntaxe utilisant trois valeurs](border3.png)

- **Syntaxe à 4 valeurs&nbsp;:** `border-width: 1em 2em 3em 4em` — Les quatre valeurs représentent respectivement les côtés supérieur, droit, inférieur et gauche, toujours dans cet ordre&nbsp;; c'est-à-dire dans le sens des aiguilles d'une montre en commençant par le haut&nbsp;: ![Les côtés de la boîte avec une syntaxe utilisant quatre valeurs](border4.png) La première lettre de Top-Right-Bottom-Left correspond à l'ordre des consonnes du mot _trouble_&nbsp;: TRBL. Vous pouvez également vous en souvenir comme de l'ordre dans lequel les aiguilles d'une horloge tourneraient&nbsp;: `1em` commence à la position de 12 heures, puis `2em` à la position de 3 heures, puis `3em` à la position de 6 heures, et `4em` à la position de 9 heures.

#### Propriétés pour les coins d'une boîte

De la même manière, les propriétés raccourcies qui portent sur les coins d'une boîte (par exemple {{CSSxRef("border-radius")}}) utilisent toutes une syntaxe cohérente ayant 1 à 4 valeurs&nbsp;:

- **Syntaxe à 1 valeur&nbsp;:** `border-radius: 1em` — Une seule valeur représente tous les coins&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant une valeur](corner1.png)

- **Syntaxe à 2 valeurs&nbsp;:** `border-radius: 1em 2em` — La première valeur porte sur les coins supérieur gauche et inférieur droit, la seconde porte sur les coins supérieur droit et inférieur gauche&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant deux valeurs](corner2.png)

- **Syntaxe à 3 valeurs&nbsp;:** `border-radius: 1em 2em 3em` — La première valeur représente le coin supérieur gauche, la deuxième les coins supérieur droit et inférieur gauche, la troisième le coin inférieur droit&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant trois valeurs](corner3.png)

- **Syntaxe à 4 valeurs&nbsp;:** `border-radius: 1em 2em 3em 4em` — Les quatre valeurs représentent respectivement les coins supérieur gauche, supérieur droit, inférieur droit et inférieur gauche (et toujours dans cet ordre), soit un sens horaire à partir du coin supérieur gauche&nbsp;: ![Les coins de la boîte avec une syntaxe utilisant quatre valeurs](corner4.png)

## Propriétés pour l'arrière-plan

Prenons un arrière-plan déclaré comme tel&nbsp;:

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

On peut synthétiser ces quatre déclarations en une&nbsp;:

```css
background: black url("images/bg.gif") no-repeat left top;
```

(La forme raccourcie est en fait l'équivalent des propriétés détaillées ci-dessus, auxquelles s'ajoutent `background-attachment: scroll` et, en CSS3, quelques propriétés supplémentaires.)

Voir {{CSSxRef("background")}} pour plus d'informations détaillées, y compris les propriétés CSS3.

## Propriétés typographiques

Prenons les déclarations suivantes&nbsp;:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

Ces 5 déclarations peuvent être raccourcies de la manière suivante&nbsp;:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

Cette déclaration raccourcie est en réalité équivalente aux déclarations détaillées ci-dessus, avec en plus `font-variant: normal`, `font-size-adjust: none` et `font-stretch: normal`.

## Propriétés pour les bordures

Les épaisseurs, couleurs et styles d'une bordure peuvent être exprimés avec une seule déclaration. Si on part du fragment de CSS suivant&nbsp;:

```css
border-width: 1px;
border-style: solid;
border-color: black;
```

On peut le simplifier de la façon suivante&nbsp;:

```css
border: 1px solid black;
```

## Propriétés pour les marges et le remplissage

Les versions raccourcies des valeurs de marge (<i lang="en">margin</i> en anglais) et de remplissage (<i lang="en">padding</i> en anglais) fonctionnent de manière similaire&nbsp;; la propriété `margin` permet de définir des valeurs raccourcies en utilisant une, deux, trois ou quatre valeurs. Considérons les déclarations CSS suivantes&nbsp;:

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

Elles sont équivalentes à la déclaration suivante utilisant la syntaxe raccourcie à quatre valeurs. Notez que les valeurs sont dans l'ordre horaire, en commençant par le haut&nbsp;: haut, droite, bas, puis gauche (TRBL, les consonnes de «&nbsp;trouble&nbsp;»).

```css
margin: 10px 5px 10px 5px;
```

Les règles de raccourci pour les marges avec une, deux, trois et quatre valeurs sont les suivantes&nbsp;:

- Lorsque **une** valeur est définie, elle s'applique à **tous les côtés**.
- Lorsque **deux** valeurs sont définies, la première marge s'applique au **haut et au bas**, la seconde au **gauche et à droite**.
- Lorsque **trois** valeurs sont définies, la première marge s'applique au **haut**, la seconde au **gauche et à droite**, la troisième au **bas**.
- Lorsque **quatre** valeurs sont définies, les marges s'appliquent au **haut**, **droite**, **bas** et **gauche** dans cet ordre (dans le sens des aiguilles d'une montre).

## Propriétés de position

Avec la position, les versions raccourcies de `top`, `right`, `bottom` et `left` peuvent être simplifiées en une seule déclaration. Par exemple, considérons le CSS suivant&nbsp;:

```css
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

Il peut être simplifié comme suit&nbsp;:

```css
inset: 0 20px 0 20px;
```

Commes pour les marges et les remplissages, les valeurs d'encart sont ordonnées dans le sens des aiguilles d'une montre — haut, droite, bas, puis gauche (TRBL).

## La propriété raccourcie universelle

Le CSS fournit une propriété raccourcie universelle, {{CSSxRef("all")}}, qui applique sa valeur à toutes les propriétés du document. Elle permet ainsi de changer le modèle d'héritage des propriétés.

Voir [la gestion des conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) ou [l'introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction) pour plus d'informations sur le fonctionnement de l'héritage en CSS.

## Propriétés raccourcies

- {{CSSxRef("all")}}
- {{CSSxRef("animation")}}
- {{CSSxRef("animation-range")}}
- {{CSSxRef("background")}}
- {{CSSxRef("border")}}
- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-bottom")}}
- {{CSSxRef("border-color")}}
- {{CSSxRef("border-image")}}
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-left")}}
- {{CSSxRef("border-radius")}}
- {{CSSxRef("border-right")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-top")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("column-rule")}}
- {{CSSxRef("columns")}}
- {{CSSxRef("contain-intrinsic-size")}}
- {{CSSxRef("container")}}
- {{CSSxRef("flex")}}
- {{CSSxRef("flex-flow")}}
- {{CSSxRef("font")}}
- {{CSSxRef("font-synthesis")}}
- {{CSSxRef("font-variant")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("grid")}}
- {{CSSxRef("grid-area")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("grid-template")}}
- {{CSSxRef("inset")}}
- {{CSSxRef("inset-block")}}
- {{CSSxRef("inset-inline")}}
- {{CSSxRef("list-style")}}
- {{CSSxRef("margin")}}
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("mask")}}
- {{CSSxRef("mask-border")}}
- {{CSSxRef("offset")}}
- {{CSSxRef("outline")}}
- {{CSSxRef("overflow")}}
- {{CSSxRef("overscroll-behavior")}}
- {{CSSxRef("padding")}}
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("place-content")}}
- {{CSSxRef("place-items")}}
- {{CSSxRef("place-self")}}
- {{CSSxRef("position-try")}}
- {{CSSxRef("scroll-margin")}}
- {{CSSxRef("scroll-margin-block")}}
- {{CSSxRef("scroll-margin-inline")}}
- {{CSSxRef("scroll-padding")}}
- {{CSSxRef("scroll-padding-block")}}
- {{CSSxRef("scroll-padding-inline")}}
- {{CSSxRef("scroll-timeline")}}
- {{CSSxRef("text-box")}}
- {{CSSxRef("text-decoration")}}
- {{CSSxRef("text-emphasis")}}
- {{CSSxRef("text-wrap")}}
- {{CSSxRef("transition")}}
- {{CSSxRef("view-timeline")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-border-before")}}
- {{CSSxRef("-webkit-mask-box-image")}}

## Voir aussi

- Le module [de cascade et héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
- [Introduction à la syntaxe CSS&nbsp;: déclarations, règles et instructions](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Introduction à la cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
- [Apprendre&nbsp;: Gérer les conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Apprendre&nbsp;: Couches de cascade](/fr/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Modèles de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Valeurs&nbsp;: [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale), [calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée), [utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) et [réelle](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_réelle)
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
