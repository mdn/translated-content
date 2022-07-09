---
title: transform-function
slug: Web/CSS/transform-function
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/transform-function
---
{{CSSRef}}

Le type de donnée **`<transform-function>`** représente une fonction qui, lorsqu'elle est appliquée à un élément, permet de modifier sa représentation géométrique. Ces transformations sont généralement exprimées sous forme de matrices et l'image obtenue peut être déterminée en appliquant la matrice de la transformation sur chaque point de l'image. On peut ainsi tourner, redimensionner, distordre. Ce type de donnée est utilisé avec la propriété {{cssxref("transform")}}.

## Coordonnées en deux dimensions

Il existe plusieurs modèles de repères géométriques permettant de décrire des transformations. Le repère utilisé le plus communément est [le système cartésien](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_cart%C3%A9siennes).

### Le système de coordonnées cartésiennes

![](coord_in_r2.png)

Pour [le système cartésien](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_cart%C3%A9siennes), chaque point de l'espace est décrit avec deux valeurs, l'abscisse et l'ordonnée. L'origine du repère `(0, 0)` correspond au coin supérieur gauche de l'élément. À la différence des conventions usuelles, l'axe verticale (_y_) se dirige vers le bas. Chaque point est décrit avec la notation `(x,y)`.

Chaque fonction linéaire est décrite avec une matrice 2 x 2 :

<math><mfenced><mtable><mtr><mtd>a</mtd><mtd>c</mtd></mtr> <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable></mfenced></math>

L'application d'une transformation consiste à multiplier la matrice de transformation au vecteur de coordonnées `(x,y)` :

<math><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr> <mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr> </mtable></mfenced><mfenced><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr> </mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd> </mtr><mtr><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtr></mtable></mfenced></math>

On peut appliquer plusieurs transformations les unes à la suite des autres :

<math><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>1</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>1</mn></msub></mtd> </mtr></mtable></mfenced><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>2</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>2</mn></msub></mtd> </mtr></mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub> </mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable></mfenced></math>

En utilisant cette notation, on peut décrire et enchaîner (ou composer) la plupart des transformations : des rotations, des homothéties et des distorsions. Les transformations qui sont composées entre elles sont appliquées dans l'ordre, de droite à gauche. Une transformation qui n'est pas linéaire ne pourra pas être représentée par cet outil. Ainsi, l'opération de translation ne pourra pas être représentée par une matrice et devra être gérée à part.

[Les coordonnées homogènes de Möbius](https://fr.wikipedia.org/wiki/August_Ferdinand_M%C3%B6bius) utilisées en [géométrie projective](https://fr.wikipedia.org/wiki/G%C3%A9om%C3%A9trie_projective) permettent d'obtenir des matrices de transformations 3x3. Bien que plus complexe et moins usitées, celles-ci permettent de représenter les translations car ces dernières correspondent à des fonctions linéaires pour cette algèbre.

## Syntaxe

Plusieurs fonctions sont disponibles en CSS pour décrire des transformations. Chacune des fonctions qui suivent applique une opération géométrique, en 2D ou en 3D.

### Matrices de transformation

- [`matrix()`](</fr/docs/Web/CSS/transform-function/matrix()>)
  - : La fonction `matrix()` permet de définir une matrice de transformation homogène en deux dimensions. Cette matrice contient six coefficients. Les valeurs constantes de ces matrices sont implicites et ne font donc pas partie des paramètres. Les autres paramètres sont décrits dans l'ordre des colonnes. `matrix(a, b, c, d, tx, ty)` est une notation raccourcie pour `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.
- [`matrix3d()`](</fr/docs/Web/CSS/transform-function/matrix3d()>)
  - : La fonction `matrix3d()` permet de définir une transformation en trois dimensions grâce à une matrice homogène 4x4. Les 16 paramètres sont décrits dans l'ordre des colonnes.

### Perspective

- [`perspective()`](</fr/docs/Web/CSS/transform-function/perspective()>)
  - : La fonction `perspective()` définit la distance entre le plan de coordonnées z=0 et l'œil de l'utilisateur. Cela permet de placer une perspective en trois dimensions sur l'élément. Chaque élément 3D pour lequel z est supérieur à 0 devient plus grand et chaque élément pour lequel z est négatif devient plus petit.

### Rotation

- [`rotate()`](</fr/docs/Web/CSS/transform-function/rotate()>)
  - : La fonction `rotate()` définit une transformation qui déplace l'élément autour d'un point fixe (défini par la propriété {{cssxref("transform-origin")}}) sans le déformer. La quantité de mouvement est définie par l'angle passé en argument. Si la valeur fournie est positive, le mouvement se fait dans le sens des aiguilles d'une montre (sens _horaire_) et sinon dans le sens inverse (sens _anti-horaire_).
- [`rotate3d()`](</fr/docs/Web/CSS/transform-function/rotate3d()>)
  - : La fonction `rotate3d()` définit une transformation qui déplace l'élément autour d'un axe donné, sans déformer l'élément. La quantité de mouvement est indiquée par l'angle passé en argument. Si celui-ci est positif, le mouvement se fera dans le sens des aiguilles d'une montre (sens _horaire_) et s'il est négatif, il se fera dans le sens anti-horaire. Contrairement aux rotations en deux dimensions (rotations _planes_), la composition des rotations en trois dimensions n'est pas commutative (autrement dit, l'ordre dans lequel elles sont appliquées a toute son importance).
- [`rotateX()`](</fr/docs/Web/CSS/transform-function/rotateX()>)
  - : La fonction `rotateX()` définit une transformation qui déplace un élément autour de l'axe des abscisses sans le déformer. La quantité de mouvement est indiquée par l'angle passé en argument. Si celui-ci est positif, le mouvement se fera dans le sens des aiguilles d'une montre (sens _horaire_) et s'il est négatif, il se fera dans le sens anti-horaire. L'origine de cette rotation est définie par la propriété {{cssxref("transform-origin")}}. `rotateX(a)` est une notation raccourcie pour `rotate3D(1, 0, 0, a)`.
- [`rotateY()`](</fr/docs/Web/CSS/transform-function/rotateY()>)
  - : La fonction `rotateY()` définit une transformation qui déplace un élément autour de l'axe des ordonnées sans le déformer. La quantité de mouvement est indiquée par l'angle passé en argument. Si celui-ci est positif, le mouvement se fera dans le sens des aiguilles d'une montre (sens _horaire_) et s'il est négatif, il se fera dans le sens anti-horaire. L'origine de cette rotation est définie par la propriété {{cssxref("transform-origin")}}. `rotateY(a)` est une notation raccourcie pour `rotate3D(0, 1, 0, a)`.
- [`rotateZ()`](</fr/docs/Web/CSS/transform-function/rotateZ()>)
  - : La fonction `rotateZ()` définit une transformation qui déplace un élément autour de l'axe Z sans le déformer. La quantité de mouvement est indiquée par l'angle passé en argument. Si celui-ci est positif, le mouvement se fera dans le sens des aiguilles d'une montre (sens _horaire_) et s'il est négatif, il se fera dans le sens anti-horaire. L'origine de cette rotation est définie par la propriété {{cssxref("transform-origin")}}. `rotateZ(a)` est une notation raccourcie pour `rotate3D(0, 0, 1, a)`.

### Changement d'échelle

- [`scale()`](</fr/docs/Web/CSS/transform-function/scale()>)
  - : La fonction `scale()` modifie la taille d'un élément. Elle permet d'appliquer une homothétie définie par un vecteur. Ce vecteur décrit l'amplification ou la réduction de l'élément selon chacun des deux axes plans. Si les deux coordonnées sont égales, l'homothétie sera uniforme et la forme de l'élément sera conservée.
- [scale3d()](</fr/docs/Web/CSS/transform-function/scale3d()>)
  - : La fonction `scale3d()` modifie la taille d'un élément. Elle permet d'appliquer une homothétie définie par un vecteur. Ce vecteur décrit l'amplification ou la réduction de l'élément selon les trois axes. Si les trois coordonnées sont égales, l'homothétie sera uniforme et la forme de l'élément sera conservée.
- [`scaleX()`](</fr/docs/Web/CSS/transform-function/scaleX()>)
  - : La fonction `scaleX()` modifie l'abscisse de chaque point de l'élément en la multipliant par un facteur. Si ce facteur vaut 1, la fonction de transformation correspondra à l'identité. Cette transformation n'est pas isotropique et les angles de l'élément ne sont pas conservés. `scaleX(-1)` permet de définir une symétrie axiale qui passe par l'axe vertical de l'origine (définie par la propriété {{cssxref("transform-origin")}}). `scaleX(sx)` est une notation raccourcie pour `scale(sx, 1)` ou pour `scale3d(sx, 1, 1)`.
- [`scaleY()`](</fr/docs/Web/CSS/transform-function/scaleY()>)
  - : La fonction `scaleY()` modifie l'ordonnée de chaque point de l'élément en la multipliant par un facteur. Si ce facteur vaut 1, la fonction de transformation correspondra à l'identité. Cette transformation n'est pas isotropique et les angles de l'élément ne sont pas conservés. `scaleY(-1)` permet de définir une symétrie axiale qui passe par l'axe horizontal de l'origine (définie par la propriété {{cssxref("transform-origin")}}). `scaleY(sy)` est une notation raccourcie pour `scale(1, sy)` ou pour `scale3d(1, sy, 1)`.
- [`scaleZ()`](</fr/docs/Web/CSS/transform-function/scaleZ()>)
  - : La fonction `scaleZ()` modifie la côte de chaque point de l'élément en la multipliant par un facteur. Si ce facteur vaut 1, la fonction de transformation correspondra à l'identité. Cette transformation n'est pas isotropique et les angles de l'élément ne sont pas conservés. `scaleZ(-1)` permet de définir une symétrie axiale qui passe par l'axe Z de l'origine (définie par la propriété {{cssxref("transform-origin")}}). `scaleZ(sz)` est une notation raccourcie pour `scale3d(1, 1, sz)`.

### Distorsions

- [`skew()`](</fr/docs/Web/CSS/transform-function/skew()>)
  - : La fonction `skew()` permet de décrire une distorsion de l'élément où chaque point est tourné d'un angle dans chaque direction. Plus le point est éloigné de l'origine, plus grande sera la transformation appliquée.
- [`skewX()`](</fr/docs/Web/CSS/transform-function/skewX()>)
  - : La fonction `skewX()` permet de distordre un élément dans la direction horizontale. Le résultat est obtenu en augmentant l'abscisse par une valeur proportionnelle à l'angle et à la distance par rapport à l'origine. Plus le point est éloigné de l'origine, plus grande sera la transformation appliquée.
- [`skewY()`](</fr/docs/Web/CSS/transform-function/skewY()>)
  - : La fonction `skewY()` permet de distordre un élément dans la direction verticale. Le résultat est obtenu en augmentant l'ordonnée par une valeur proportionnelle à l'angle et à la distance par rapport à l'origine. Plus le point est éloigné de l'origine, plus grande sera la transformation appliquée.

### Translations

- [`translate()`](</fr/docs/Web/CSS/transform-function/translate()>)
  - : La fonction `translate()` permet de déplacer un élément sur le plan formé par le document. Cette transformation est caractérisée par un vecteur contenant deux coordonnées dont chacune définit la quantité de déplacement horizontale et verticale.
- [`translate3d()`](</fr/docs/Web/CSS/transform-function/translate3d()>)
  - : La fonction `translate3d()` permet de déplacer un élément dans l'espace en 3D. Cette transformation est caractérisée par un vecteur en 3 dimensions dont les coordonnées définissent les quantités de déplacement respectives aux trois axes.
- [`translateX()`](/fr/docs/orphaned/Web/CSS/transform-function/translateX)
  - : La fonction `translateX()` permet de déplacer un élément horizontalement dans le plan. Cette transformation est caractérisée par une valeur de type {{cssxref("&lt;length&gt;")}} qui définit la quantité de déplacement horizontal. `translateX(tx)`est une notation raccourcie pour  `translate(tx, 0)`.
- [`translateY()`](</fr/docs/Web/CSS/transform-function/translateY()>)
  - : La fonction `translateY()` permet de déplacer un élément verticalement dans le plan. Cette transformation est caractérisée par une valeur de type {{cssxref("&lt;length&gt;")}} qui définit la quantité de déplacement vertical. `translateY(ty)` est une notation raccourcie pour `translate(0, ty)`.
- [`translateZ()`](</fr/docs/Web/CSS/transform-function/translateZ()>)
  - : La fonction `translateZ()` permet de déplacer un élément sur l'axe z de l'espace en 3D. Cette transformation est caractérisée par une valeur de type {{cssxref("&lt;length&gt;")}} qui définit la quantité de déplacement. `translateZ(tz)` est une notation raccourcie pour `translate3d(0, 0, tz)`.

## Spécifications

| Spécification                                                                                                        | État                                     | Commentaires                  |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------- |
| {{SpecName('CSS Transforms 2', '#transform-functions', '&lt;transform-function&gt;')}} | {{Spec2('CSS Transforms 2')}} | Added 3D transform functions. |
| {{SpecName('CSS3 Transforms', '#transform-functions', '&lt;transform-function&gt;')}}     | {{Spec2('CSS3 Transforms')}}     | Définition initiale.          |

## Compatibilité des navigateurs

{{Compat("css.types.transform-function")}}

## Voir aussi

- La propriété CSS {{cssxref("transform")}}
