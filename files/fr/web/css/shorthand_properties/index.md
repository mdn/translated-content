---
title: Propriétés raccourcies
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - Guide
  - Reference
translation_of: Web/CSS/Shorthand_properties
original_slug: Web/CSS/Propriétés_raccourcies
---
{{CSSRef}}

_Les propriétés raccourcies sont des propriétés CSS qui permettent de définir la valeur de plusieurs propriétés via une seule déclaration. En manipulant des propriétés raccourcies, un développeur web peut créer des feuilles de style plus concises et plus lisibles, améliorant ainsi la maintenabilité_.

La spécification CSS définit les propriétés raccourcies en regroupant la définition des propriétés agissant sur le même aspect de l'élément. Ainsi, la propriété {{cssxref("background")}} est une propriété raccourcie qui permettra de définir {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}} et {{cssxref("background-position")}}. De même, les propriétés fréquemment utilisées pour la mise en forme des polices de caractères (_font_) peuvent être définies via la propriété raccourcie {{cssxref("font")}} et celles qui concernent la marge avec la propriété raccourcie {{cssxref("margin")}}.

## Quelques cas aux limites épineux

Bien que les propriétés raccourcies soient pratiques à utiliser. Il est nécessaire de noter certains éléments pour parer aux cas étranges qui peuvent survenir :

1.  Une valeur qui n'est pas définie pour la propriété raccourcie **sera réinitialisée avec sa valeur initiale**. Cela peut sembler anecdotique mais attention aux valeurs qui seront surchargées et à l'ordre des déclarations. Ainsi :

    ```css
    background-color: red;
    background: url(images/bg.gif) no-repeat top right;
    ```

    ne définira pas la couleur d'arrière-plan en rouge mais avec la valeur par défaut de {{cssxref("background-color")}} `transparent` car la deuxième déclaration prend le pas sur la première.

2.  L'héritage des propriétés ne peut avoir lieu qu'avec les propriétés individuelles . En effet, les valeurs absentes sont remplacées par leurs valeurs initiales et il est donc impossible d'hériter des valeurs en les omettant. Le mot-clé {{cssxref("inherit")}} pourra être appliqué à une propriété mais ce sera sur l'ensemble et non pour une valeur donnée ou une autre. Ainsi, pour utiliser une valeur héritée sur une propriété spécifique, il faudra utiliser cette propriété « longue » avec le mot-clé `inherit.`
3.  Les propriétés raccourcies n'ont pas d'ordre spécifique pour trier les valeurs des propriétés détaillées qu'elles remplacent. Cela fonctionne sans problème lorsque les différentes propriétés utilisent différents types de valeurs car l'ordre n'a alors aucune importance. Toutefois, lorsque les différentes propriétés peuvent prendre les mêmes valeurs, cela n'est pas si simple. On peut regrouper les différents cas en deux catégories distinctes :

    1.  Les propriétés raccourcies qui gèrent les bords d'une boîte telles que {{cssxref("border-style")}}, {{cssxref("margin")}} ou {{cssxref("padding")}}. Elles utilisent une méthode constante selon qu'elles reçoivent 1 à 4 valeurs :

        <table>
          <tbody>
            <tr>
              <td style="width: 79px"><img alt="border1.png" src="border1.png" /></td>
              <td>
                <em>1 valeur </em>: <code>border-width: 1em</code> — La valeur unique
                s'adresse à tous les côtés.
              </td>
            </tr>
            <tr>
              <td><img alt="border2.png" src="border2.png" /></td>
              <td>
                <em>2 valeurs </em>: <code>border-width: 1em 2em</code> — La première
                valeur représente les côtés horizontaux en haut et en bas. La seconde
                valeur représente les côtés verticaux, à gauche et à droite.
              </td>
            </tr>
            <tr>
              <td><img alt="border3.png" src="border3.png" /></td>
              <td>
                <em>3 valeurs </em>: <code>border-width: 1em 2em 3em</code> — La
                première valeur représente le côté haut, la deuxième les côtés gauche et
                droit et la troisième représente le côté bas.
              </td>
            </tr>
            <tr>
              <td><img alt="border4.png" src="border4.png" /></td>
              <td>
                <p>
                  <em>4 valeurs </em>: <code>border-width: 1em 2em 3em 4em</code> — Les
                  quatre valeurs représentent respectivement le côté haut, le côté
                  droit, le côté bas et le côté haut, toujours dans cet ordre (le sens
                  horaire).
                </p>
              </td>
            </tr>
          </tbody>
        </table>

    2.  De la même façon, les propriétés raccourcies relatives aux coins d'une boîte comme {{cssxref("border-radius")}} utilisent une méthode constante selon qu'elles reçoivent 1 à 4 valeurs :

        <table>
          <tbody>
            <tr>
              <td style="width: 69px"><img alt="corner1.png" src="corner1.png" /></td>
              <td>
                <em>1 valeur </em>: <code>border-radius: 1em</code> — La valeur
                s'applique à tous les coins.
              </td>
            </tr>
            <tr>
              <td><img alt="corner2.png" src="corner2.png" /></td>
              <td>
                <em>2 valeurs </em>: <code>border-radius: 1em 2em</code> — La première
                valeur s'applique aux coins en haut à gauche et en bas à droite et la
                deuxième s'applique aux coins en haut à droite et en bas à gauche.
              </td>
            </tr>
            <tr>
              <td><img alt="corner3.png" src="corner3.png" /></td>
              <td>
                <em>3 valeurs </em>: <code>border-radius: 1em 2em 3em</code> — La
                première valeur représente le coin en haut à gauche, la deuxième
                représente les coins en haut à droite et en bas à gauche et la troisième
                valeur représente le coin en bas à droite.
              </td>
            </tr>
            <tr>
              <td><img alt="corner4.png" src="corner4.png" /></td>
              <td>
                <p>
                  <em>4 valeurs </em>: <code>border-radius: 1em 2em 3em 4em</code> — Les
                  quatre valeurs s'appliquent respectivement au coin en haut à gauche,
                  en haut à droite, en bas à droite et en bas à gauche, toujours dans
                  cet ordre (le sens horaire).
                </p>
              </td>
            </tr>
          </tbody>
        </table>

## Les propriétés concernant l'arrière-plan

Lorsqu'on décrit un arrière-plan avec les propriétés suivantes :

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

On peut le faire de façon plus concise grâce à la propriété raccourcie. Voici la déclaration équivalent :

```css
background: #000 url(images/bg.gif) no-repeat top right;
```

> **Note :** Pour être tout à fait précis, la forme raccourcie présentée juste avant est équivalente aux propriétés détaillées qui précèdent auxquelles on ajoute `background-attachment: scroll` et d'autres propriétés avec CSS3).

Pour plus d'informations, voir {{cssxref("background")}}.

## Les propriétés liées à la police (_font_)

Les déclarations suivantes :

```css
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

Peuvent être synthétisées en une seule déclaration avec la propriété raccourcie :

```css
font: italic bold .8em/1.2 Arial, sans-serif;
```

> **Note :** Pour être tout à fait précis, la déclaration raccourcie précédente est équivalente aux déclarations détaillées ci-avant auxquelles on ajoutera `font-variant: normal` et `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3).

## Les propriétés liées aux bordures

Avec les bordures, la largeur, la couleur et le style peuvent être regroupés en une seule déclaration. Par exemple,

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

peut être écrit ainsi :

```css
border: 1px solid #000;
```

## Les propriétés liées à la marge et au remplissage (_padding_)

Les propriétés raccourcies agissant sur la boîte de marge ou sur la boîte de remplissage (_padding_) fonctionnent de la même façon. Ainsi, les déclarations CSS suivantes :

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

sont équivalentes à la déclaration qui suit (on notera que les valeurs sont ordonnés dans le sens horaire : haut, droit, bas, gauche ; un moyen mnémotechnique est d'utiliser l'acronyme anglais TRBL qui ressemble à _trouble_) :

```css
margin: 10px 5px 10px 5px;
```

## La propriété raccourcie universelle

CSS fournit une propriété raccourcie qui permet d'appliquer une même valeur à l'ensemble des propriétés du document : {{cssxref("all")}}.

Voir l'article sur [la cascade et l'héritage](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) pour plus d'informations sur le fonctionnement de l'héritage.

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
- Les propriétés raccourcies : {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("text-decoration")}}, {{cssxref("transition")}}
