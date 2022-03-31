---
title: <basic-shape>
slug: Web/CSS/basic-shape
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/basic-shape
---
{{CSSRef}}

Le type **`<basic-shape>`** permet de définir une forme simple en utilisant des fonctions et est notamment utilisé pour les propriétés {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} ou {{cssxref("offset-path")}}.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## Syntaxe

Lorsque cette syntaxe est utilisée pour définir des formes, la boîte de référence sera indiquée par chaque propriété qui utilise des valeurs `<basic-shape>`. L'origine du repère utilisé se situe dans le coin en haut à gauche de la boîte de référence avec un axe des abscisses allant vers la droite et un axe des ordonnées allant vers le bas. Toutes les longueurs exprimées en pourcentages sont calculées en fonction des dimensions de la boîte de référence.

Les formes qui suivent sont prises en charge. Toutes les valeurs `<basic-shape>` sont créées via une notation fonctionnelle (pour analyser la syntaxe, se référer à [cette page explicative](/fr/docs/Web/CSS/Syntaxe_de_d%C3%A9finition_des_valeurs)).

- `inset()`

  - : Cette fonction permet de définir un rectangle incrusté (_inset_).

        inset( <shape-arg>{1,4} [round <border-radius>]? )

    Lorsque les quatre premiers arguments sont fournis, ils représentent respectivement les décalages, vers l'intérieur, depuis les côtés haut, droit, bas et gauche par rapport à la boîte de référence. Ces arguments peuvent être utilisés de la même façon que pour {{cssxref("margin")}} afin d'utiliser seulement une, deux ou quatre valeurs.

    L'argument facultatif `<border-radius>` permet de définir des coins arrondis pour le rectangle incrusté en utilisant la même syntaxe que pour la propriété raccourcie {{cssxref("border-radius")}}.

    Si on utilise deux valeurs de décalage pour le même axe (par exemple un décalage depuis le bas et un décalage depuis le haut) dont la somme est supérieure à la dimension de la boîte sur cet axe, la forme obtenue ne contiendra aucune zone. On aura alors une zone de flottement vide.

- `polygon()`

  - : Définit un polygone.

        polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )

    `<fill-rule>` représente [la règle de remplissage](/fr/docs/Web/SVG/Attribute/fill-rule) utilisée pour déterminer l'intérieur du polygone. Les valeurs possibles sont `nonzero` et `evenodd`. La valeur par défaut pour cet argument est `nonzero`.

    Ensuite, chaque paire d'arguments dans la liste représente les coordonnées _xi_ et _yi_ du i-ème sommet du polygone.

- `circle(`)

  - : Définit un cercle.

        circle( [<shape-radius>]? [at <position>]? )

    L'argument `<shape-radius>` représente le rayon du cercle. Les valeurs négatives ne sont pas autorisées et les valeurs exprimées en pourcentages seront calculées de la façon suivante en fonction de la hauteur et de la largeur de la boîte de référence `sqrt(largeur^2+hauteur^2)/sqrt(2)`.

    L'argument {{cssxref("&lt;position&gt;")}} définit la position pour le centre du cercle. La valeur par défaut est `center`.

- `ellipse()`

  - : Définit une ellipse.

        ellipse( [<shape-radius>{2}]? [at <position>]? )

    Les arguments `<shape-radius>` représentent les demi-axes horizontaux (r<sub>x</sub>) et verticaux (r<sub>y</sub>) de l'ellipse. Les valeurs négatives ne sont pas autorisées. Les valeurs exprimées en pourcentages sont calculées : en fonction de la hauteur de la boîte de référence pour le demi-axe vertical, en fonction de la largeur de la boîte de référence pour le demi-axe horizontal.

    L'argument {{cssxref("&lt;position&gt;")}} définit l'emplacement du centre de l'ellipse. La valeur par défaut est `center`.

- `path()`

  - : Définit un chemin.

        path( [<fill-rule>,]? <string>)

    L'argument optionnel `<fill-rule>` représente [la règle de remplissage](/fr/docs/Web/SVG/Attribute/fill-rule) utilisée pour déterminer l'intérieur du chemin. Les valeurs possibles sont `nonzero` et `evenodd`. La valeur par défaut est `nonzero`.

    L'argument obligatoire `<string>` est une chaîne de caractères, entre quotes, représentant [un chemin SVG](/fr/docs/Web/SVG/Attribute/d).

Les arguments qui ne sont pas définis ci-avant suivent cette syntaxe :

    <shape-arg> = <length> | <percentage>
    <shape-radius> = <length> | <percentage> | closest-side | farthest-side

`closest-side` utilise la distance entre le centre de la forme et le côté le plus proche de la boîte de la référence. Pour les cercles, cela au côté le plus proche dans les deux axes. Pour les ellipses, cela correspond au côté le plus proche dans l'axe du rayon de l'ellipse.

À l'inverse, `farthest-side` utilise la distance entre le centre de la forme et le côté le plus éloigné de la boîte de référence.

## Les valeurs calculées des formes simples

Les valeurs d'une fonction `<basic-shape>` sont calculées comme indiqué, avec ces exceptions :

- Les valeurs absentes sont incluses et leurs valeurs calculées sont leurs valeurs par défaut.
- Une valeur {{cssxref("&lt;position&gt;")}} pour `circle()` ou  `ellipse()` est calculée comme une paire de distances indiquant les décalages (horizontaux puis verticaux) depuis l'origine en haut à gauche. Chaque décalage est indiqué comme une combinaison d'une longueur absolue et d'un pourcentage.
- Pour `inset()`, une valeur {{cssxref("border-radius")}} est calculée comme une liste développée de de huit valeurs {{cssxref("length")}} ou de huit pourcentages.

## L'interpolation des formes simples

Afin d'obtenir une interpolation entre deux formes simples, il faut que les règles qui suivent soient respectées. Les valeurs des argument des fonctions de formes sont interpolées comme une liste simple. Les valeurs de la liste sont interpolées comme [des longueurs](/fr/docs/Web/CSS/length), [des pourcentages](/fr/docs/Web/CSS/percentage) ou [des valeurs calculées](</fr/docs/Web/CSS/calc()>) lorsque c'est possible. Si les valeurs de la liste ne sont pas de ces types mais sont identiques, ces valeurs seront interpolées.

- Les deux formes doivent partager la même boîte de référence.
- Si les deux formes sont du même type et que ce type est `ellipse()` ou `circle()`, qu'aucun des rayons n'utilise les mots-clés `closest-side` ou `farthest-side`, on aura une interpolation entre chaque valeur.
- Si les deux formes sont de type `inset()`, on aura une interpolation entre chaque valeur.
- Si les deux formes sont de type `polygon()`, que les deux polygones possèdent le même nombre de sommets et utilisent la même règle `fill-rule`, l'interpolation sera appliquée entre chaque valeur.
- Si les deux formes sont de type `path()`, que les deux chemins possèdent le même nombre de composantes, dans le même ordre et qu'elles sont de même type, les données sont interpolées entre chaque chemin comme des nombres réels.
- Dans les autres cas, aucune interpolation n'est définie.

## Exemples

### Exemple simple

#### CSS

```css
.clipped {
  clip-path: circle(15px at 20px 20px); // bugs 1247229 / 1075457 pour Firefox
}
```

#### HTML

```html
<img class="clipped" src="https://pixabay.com/static/uploads/photo/2016/01/17/04/29/rain-drops-1144448_960_720.jpg" alt="Rain Drops">
```

#### Résultat

{{EmbedLiveSample('Exemple_simple',"500","500")}}

### Polygone animé

Dans cet exemple, on utilise la règle-@ {{cssxref("@keyframes")}} afin d'animer un chemin de rognage entre deux polygones. On notera que les deux polygones ont le même nombre de sommets, une condition nécessaire pour que l'animation fonctionne.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: red;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: 5s poly infinite alternate ease-in-out;
  margin: 1em auto;
  display: block;
}

@keyframes poly {
  from {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  to {
    clip-path: polygon(44% 26%, 58% 38%, 58% 38%, 44% 81%, 44% 81%, 25% 49%);
  }
}
```

#### Résultat

{{EmbedLiveSample('Polygone_animé','100%', '340')}}

## Spécifications

| Spécification                                                                                        | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS Shapes', '#basic-shape-functions', '&lt;basic-shape&gt;')}} | {{Spec2('CSS Shapes')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.basic-shape")}}

## Voir aussi

- {{cssxref("clip-path")}}
- {{cssxref("shape-outside")}}
- [Éditer des contours de formes CSS avec les outils de développement Firefox](/fr/docs/Outils/Inspecteur/Comment/Edit_CSS_shapes)
