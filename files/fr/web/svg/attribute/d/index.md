---
title: d
slug: Web/SVG/Attribute/d
tags:
  - Attribut SVG
  - SVG
translation_of: Web/SVG/Attribute/d
---
{{SVGRef}}

L'attribut **`d`** définit un tracé à dessiner.

La définition d'un tracé est une liste de commandes de tracé où chaque commande est composée d'une lettre pour la commande, et de nombres qui représentent les paramètres de la commande. Les commandes sont détaillées ci-dessous.

Trois éléments ont cet attribut : {{SVGElement("path")}}, {{SVGElement("glyph")}}, and {{SVGElement("missing-glyph")}}

## Exemple

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red"
    d="M 10,30
       A 20, 20 0, 0, 1 50, 30
       A 20, 20 0, 0, 1 90, 30
       Q 90, 60 50, 90
       Q 10, 60 10, 30 z" />
</svg>
```

{{EmbedLiveSample('Exemple', '100%', 200)}}

## Tracé

Pour un {{SVGElement('path')}}, `d` est une chaîne de caractère qui contient une série de commandes de tracé qui définissent le tracé à dessiner.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## glyph

> **Attention :** Depuis SVG2, {{SVGElement('glyph')}} est dépréciée et ne doit plus être utilisé.

Pour un {{SVGElement('glyph')}}, `d` est une chaîne de caractères qui contient une série de commandes de tracé qui définissent la forme du contour de la glyphe.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

> **Note :** Le point d'origine (coordonnée `0,0`) est généralement le point du _coin en haut à gauche_ du context. Néanmoins, l'élément {{SVGElement("glyph")}} a son point d'origine dans le coin en bas à gauche de son enveloppe.

## missing-glyph

> **Attention :** Depuis SVG2, {{SVGElement('missing-glyph')}} est dépréciée et ne doit plus être utilisé.

Pour un {{SVGElement('missing-glyph')}}, `d` est une chaîne de caractères qui contient une série de commandes de tracé qui définissent la forme du contour de la glyphe.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><em>aucune</em></td>
    </tr>
    <tr>
      <th scope="row">Animable</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Commandes de tracé

Les commandes de tracé sont des instructions qui définissent un tracé à dessiner. Chaque commande est composée d'une lettre de commande et de nombres qui représentent les paramètres de la commande.

SVG définit 6 types de commandes, pour un total de 20 commandes :

- Aller à (Moveto)
- Tracer une ligne jusqu'à (Lineto)
- Tracer une courbe jusqu'à (Curveto)
- Tracer un arc de cercle jusqu'à (Arcto)
- Fermer le chemin (ClosePath)

> **Note :** Les commandes sont sensibles à la casse; une commande en majuscule attend des positions absolues en arguments, alors qu'une commande en minuscule attend des points relatifs à la position actuelle du point.

Il est toujours possible de spécifier une valeur négative en argument d'une commande : des angles négatifs pointeront dans une direction vers le sens inverse des aiguilles d'une montre; des positions `x` et `y` seront interprétées commandes coordonnées négatives; des valeurs `x` négatives se déplaceront vers la gauche; et des valeurs `y` négatives se déplaceront vers le haut.

## Moveto (aller à)

Cette instuction peut être vue comme un déplacement du pinceau à une position donnée sans rien tracer. Une bonne pratique consiste à commencer tous ses chemins par une instruction Moveto car, sans un positionnement initial, les instructions du chemin commencerons à un point quelconque ce qui peut donner des résultats non désirés.

Syntaxe:

- **`M x, y`** où x et y sont des coordonnées absolues, respectivement horizontale et verticale.
- **`m dx, dy`** où dx et dy sont des distances relatives à la position courante, respectivement vers la droite et vers le bas.

Exemples :

- Positionnement absolu en x = 50, y = 100 : `<path d="M 50, 100..." />`
- Déplacement de 50 vers la droite et 100 vers le bas : `<path d="m 50, 100..." />`

## Lineto (tracer une ligne jusqu'à)

À l'opposé de l'instruction Moveto, Lineto trace réellement une ligne de la position courante à la position définie. La syntaxe générique est `L x, y` ou `l dx, dy` avec `x, y` des coordonnées absolues et `dx, dy` des distances relatives au point courant, respectivement dans les sens de gauche à droite pour `dx` et de haut en bas pour `dy`.

Il existe aussi des raccourcis pour définir des lignes horizontales (H) ou verticales (V). Leur syntaxe est similaire à celle de L, mais il n'y a qu'une valeur à donner.

Exemples :

- Dessiner un carré (avec coordonnées relatives) : `<path d="M -10, -10 h 50 v 50 h -50 v -50"/>`
- Dessiner un carré (avec coordonnées absolues) : `<path d="M -10, -10 H 40 V 40 H -10 V -10"/>`

## Curveto

L'instruction Curveto trace une courbe de Bézier. Il existe deux types de courbes de Bézier : cubique et quadratique. Les courbes cubiques sont un cas particulier des courbes quadratiques puisque le point de contrôle est commun au point de départ et au point d'arrivée. La syntaxe d'une courbe quadratique de Bézier est "Q cx,cy x,y" ou "q dcx,dcy dx,dy". cx et cy sont les coordonnées absolues du point de contrôle tandis que dcx et dcy sont les coordonnées du point de contrôle relatives au point courant. x et y sont les coordonnées absolues du point d'arrivée tandis que dx et dy sont les coordonnées relatives de ce point par rapport au point courant.

Les courbes cubiques de Bézier suivent le même principe mais avec deux points de contrôle. La syntaxe de ces courbes est `C c1x, c1y c2x, c2y x, y` ou `c dc1x, dc1y dc2x, dc2y dx, dy`.

Pour réaliser des chaînes de courbes de Bézier "adoucies", il est possible d'utiliser les commandes T et S. Leur syntaxe est plus simple que les autres commandes Curveto car elles estiment que le premier point de contrôle est le symétrique du point de contrôle précédent par rapport au point terminal de la courbe précédente, ou que c'est le point précédent lui-même s'il n'y a pas eu de courbe tracée directement avant. La syntaxe de T est `T x, y` ou `t dx, dy` pour un point d'arrivée de position absolue ou relatives et sert à créer des courbes quadratiques de Bézier. S sert donc à faire des courbes cubiques de Bézier avec la syntaxe `S cx, cy x, y` ou `s dcx,dcy dx,dy`, où (d)cx indique le second point de contrôle.

Finalement, toutes les commandes de courbes de Bézier peuvent servir de "polybézier" en spécifiant tous les paramètres successivement après la commande initiale. En conséquence, les deux commandes suivantes sont équivalentes en résultat :

`<path d="c 50, 0 50, 100 100, 100 50, 0 50, -100 100, -100" /> <path d="c 50, 0 50, 100 100, 100 c 50, 0 50, -100 100, -100" />`

## Arcto

Parfois il est plus simple de définir un `path` comme une courbe elliptique plutôt que comme une courbe de Bézier. Dans cette optique, les commandes Arcto sont supportées par les balises `path`.

La définition d'un Arcto est relativement complexe : `A rx, ry xAxisRotate LargeArcFlag, SweepFlag x, y`, où `rx` et `ry` représentent les rayons sur les axes x et y, respectivement ; `LargeArcFlag` est une valeur à 0 ou 1, et permet de déterminer si le plus petit (0) ou le plus grand (1) arc possible doit être dessiné ; `SweepFlag` est une valeur à 0 ou 1 et définit le sens de balayage de la courbe : horaire (1) ou anti-horaire (0) ; et enfin `x` et `y` sont les coordonnées de destination.

La propriété `xAxisRotate` est censée changer l'axe des x relativement au viewport de référence. Cependant, il semble que cette propriété n'ait aucun effet avec le moteur de rendu Gecko 7.

## ClosePath (fermer un chemin)

L'instruction ClosePath trace simplement une ligne droite de la position actuelle jusqu'au point initial de la courbe. C'est l'instruction la plus simple puisqu'elle n'attend aucun argument. Il n'y a pas de différence entre la version majuscule ("Z") et la version minuscule ("z").

## Éléments

Les éléments suivants peuvent utiliser l'attribut **d** :

- {{SVGElement("path")}}
- {{SVGElement("glyph")}}

De plus, les mêmes règles s'appliquent aux animations de chemin {{SVGElement("animate")}}.

## Notes

Le point d'origine (de coordonnées 0,0) est habituellement le **coin supérieur gauche** du contexte. Cependant, l'élément {{SVGElement("glyph")}} a son origine dans le **coin inférieur gauche** de la boîte contenant son caractère.
