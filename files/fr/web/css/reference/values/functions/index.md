---
title: Fonctions de valeur CSS
slug: Web/CSS/Reference/Values/Functions
original_slug: Web/CSS/CSS_values_and_units/CSS_value_functions
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

Les **fonctions de valeur CSS** (<i lang="en">CSS value functions</i> en anglais) sont des instructions qui invoquent un traitement de données spécial ou des calculs pour renvoyer une [valeur](/fr/docs/Web/CSS/Guides/Values_and_units) [CSS](/fr/docs/Web/CSS) pour une propriété CSS. Les fonctions de valeur CSS représentent des [types de données](/fr/docs/Web/CSS/Reference/Values/Data_types) plus complexes et peuvent prendre certains arguments d'entrée pour calculer la valeur de retour.

## Syntaxe

```plain
sélecteur {
  propriété: fonction([argument]? [, argument]!);
}
```

La valeur syntaxique commence par le **nom de la fonction**, suivi d'une parenthèse ouvrante `(`. Ensuite, il y a les argument(s), et la fonction se termine par une parenthèse fermante `)`.

Les fonctions peuvent prendre plusieurs arguments, qui sont formatés de manière similaire aux valeurs de propriété CSS. Les espaces sont autorisés, mais ils sont facultatifs à l'intérieur des parenthèses. Dans certaines notations fonctionnelles, plusieurs arguments sont séparés par des virgules, tandis que d'autres utilisent des espaces.

> [!NOTE]
> Les fonctions de valeur CSS sont utilisées comme valeurs de propriété et ne doivent pas être confondues avec les pseudo-classes. Les [pseudo-classes fonctionnelles](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_fonctionnelles), [pseudo-classes linguistiques](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_linguistiques), et plusieurs [pseudo-classes structurelles d'arbre](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_structurelles_darbre) nécessitent des valeurs de paramètres, mais ce ne sont pas des fonctions de valeur. Les règles conditionnelles @-rules ne sont également pas des fonctions de valeur&nbsp;; les parenthèses sont utilisées pour les groupements.

## Les fonctions de transformation

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("&lt;transform-function&gt;")}} représente la transformation d'apparence. Il est utilisé comme valeur de la propriété {{CSSxRef("transform")}}.

### Les fonctions de déplacement

- {{CSSxRef("transform-function/translateX", "translateX()")}}
  - : Déplace un élément horizontalement.
- {{CSSxRef("transform-function/translateY", "translateY()")}}
  - : Déplace un élément verticalement.
- {{CSSxRef("transform-function/translateZ", "translateZ()")}}
  - : Déplace un élément le long de l'axe z.
- {{CSSxRef("transform-function/translate", "translate()")}}
  - : Déplace un élément sur le plan 2D.
- {{CSSxRef("transform-function/translate3d", "translate3d()")}}
  - : Déplace un élément dans l'espace 3D.

### Les fonctions de rotation

- {{CSSxRef("transform-function/rotateX", "rotateX()")}}
  - : Fait pivoter un élément autour de l'axe horizontal.
- {{CSSxRef("transform-function/rotateY", "rotateY()")}}
  - : Fait pivoter un élément autour de l'axe vertical.
- {{CSSxRef("transform-function/rotateZ", "rotateZ()")}}
  - : Fait pivoter un élément autour de l'axe z.
- {{CSSxRef("transform-function/rotate", "rotate()")}}
  - : Fait pivoter un élément autour d'un point fixe sur le plan 2D.
- {{CSSxRef("transform-function/rotate3d", "rotate3d()")}}
  - : Fait pivoter un élément autour d'un axe fixe dans l'espace 3D.

### Les fonctions de mise à l'échelle

- {{CSSxRef("transform-function/scaleX", "scaleX()")}}
  - : Fait évoluer un élément horizontalement.
- {{CSSxRef("transform-function/scaleY", "scaleY()")}}
  - : Fait évoluer un élément verticalement.
- {{CSSxRef("transform-function/scaleZ", "scaleZ()")}}
  - : Fait évoluer un élément le long de l'axe z.
- {{CSSxRef("transform-function/scale", "scale()")}}
  - : Fait évoluer un élément sur le plan 2D.
- {{CSSxRef("transform-function/scale3d", "scale3d()")}}
  - : Fait évoluer un élément dans l'espace 3D.

### Les fonctions de déformation

- {{CSSxRef("transform-function/skewX", "skewX()")}}
  - : Fait pencher un élément dans la direction horizontale.
- {{CSSxRef("transform-function/skewY", "skewY()")}}
  - : Fait pencher un élément dans la direction verticale.
- {{CSSxRef("transform-function/skew", "skew()")}}
  - : Fait pencher un élément sur le plan 2D.

### Les fonctions de matrice

- {{CSSxRef("transform-function/matrix", "matrix()")}}
  - : Décrit une matrice de transformation 2D homogène.
- {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}
  - : Décrit une transformation 3D sous la forme d'une matrice homogène 4×4.

### Les fonctions de perspective

- {{CSSxRef("transform-function/perspective", "perspective()")}}
  - : Définit la distance entre l'utilisateur·ice et le plan z=0.

## Les fonctions mathématiques

Les fonctions mathématiques permettent d'écrire des valeurs numériques CSS sous forme d'expressions mathématiques.

Chacune des pages ci-dessous contient des informations détaillées sur la syntaxe d'une fonction mathématique, des données de compatibilité avec les navigateurs, des exemples, etc. Pour une introduction complète aux fonctions mathématiques CSS, regardez [Utiliser les fonctions mathématiques CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_math_functions).

### Les opérations arithmétiques de base

- {{CSSxRef("calc", "calc()")}}
  - : Effectue des calculs arithmétiques de base sur des valeurs numériques.
- {{CSSxRef("calc-size", "calc-size()")}}
  - : Effectue des calculs sur des valeurs de taille intrinsèques telles que `auto`, `fit-content` et `max-content`, qui ne sont pas prises en charge par la fonction `calc()`.

### Les fonctions de comparaison

- {{CSSxRef("min", "min()")}}
  - : Calcule la plus petite valeur d'une liste de valeurs.
- {{CSSxRef("max", "max()")}}
  - : Calcule la plus grande valeur d'une liste de valeurs.
- {{CSSxRef("clamp", "clamp()")}}
  - : Calcule la valeur centrale d'une valeur minimale, centrale et maximale.

### Les fonctions de valeur par paliers

- {{CSSxRef("round", "round()")}}
  - : Calcule un nombre arrondi en fonction d'une stratégie d'arrondi.
- {{CSSxRef("mod", "mod()")}}
  - : Calcule un module (avec le même signe que le diviseur) lors de la division d'un nombre par un autre.
- {{CSSxRef("rem", "rem()")}}
  - : Calcule un reste (avec le même signe que le dividende) lors de la division d'un nombre par un autre.

### Les fonctions trigonométriques

- {{CSSxRef("sin", "sin()")}}
  - : Calcule le sinus trigonométrique d'un nombre.
- {{CSSxRef("cos", "cos()")}}
  - : Calcule le cosinus trigonométrique d'un nombre.
- {{CSSxRef("tan", "tan()")}}
  - : Calcule la tangente trigonométrique d'un nombre.
- {{CSSxRef("asin", "asin()")}}
  - : Calcule l'inverse trigonométrique du sinus d'un nombre.
- {{CSSxRef("acos", "acos()")}}
  - : Calcule l'inverse trigonométrique du cosinus d'un nombre.
- {{CSSxRef("atan", "atan()")}}
  - : Calcule l'inverse trigonométrique de la tangente d'un nombre.
- {{CSSxRef("atan2", "atan2()")}}
  - : Calcule l'inverse trigonométrique de la tangente de deux nombres dans un plan.

### Les fonctions exponentielles

- {{CSSxRef("pow", "pow()")}}
  - : Calcule la base élevée à la puissance d'un nombre.
- {{CSSxRef("sqrt", "sqrt()")}}
  - : Calcule la racine carrée d'un nombre.
- {{CSSxRef("hypot", "hypot()")}}
  - : Calcule la racine carrée de la somme des carrés de ses arguments.
- {{CSSxRef("log", "log()")}}
  - : Calcule le logarithme d'un nombre.
- {{CSSxRef("exp", "exp()")}}
  - : Calcule `e` élevé à la puissance d'un nombre.

### Les fonctions liées au signe

- {{CSSxRef("abs", "abs()")}}
  - : Calcule la valeur absolue d'un nombre.
- {{CSSxRef("sign", "sign()")}}
  - : Calcule le signe (positif ou négatif) d'un nombre.

## Les fonctions de filtre

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("&lt;filter-function&gt;")}} représente un effet graphique qui peut modifier l'apparence d'une image d'entrée. Il est utilisé dans les propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}}.

- {{CSSxRef("filter-function/blur", "blur()")}}
  - : Augmente le flou gaussien de l'image.
- {{CSSxRef("filter-function/brightness", "brightness()")}}
  - : Éclaircit ou assombrit une image.
- {{CSSxRef("filter-function/contrast", "contrast()")}}
  - : Augmente ou diminue le contraste de l'image.
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applique une ombre portée derrière une image.
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
  - : Convertit une image en niveaux de gris.
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
  - : Change la teinte globale d'une image.
- {{CSSxRef("filter-function/invert", "invert()")}}
  - : Inverse les couleurs d'une image.
- {{CSSxRef("filter-function/opacity", "opacity()")}}
  - : Ajoute de la transparence à une image.
- {{CSSxRef("filter-function/saturate", "saturate()")}}
  - : Change la saturation globale d'une image.
- {{CSSxRef("filter-function/sepia", "sepia()")}}
  - : Augmente le sépia d'une image.

## Les fonctions de couleur

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("color_value","&lt;color&gt;")}} spécifie différentes représentations de couleurs.

- {{CSSxRef("color_value/rgb", "rgb()")}}
  - : Définit une couleur donnée selon ses composants rouge, vert, bleu et alpha (transparence).
- {{CSSxRef("color_value/hsl", "hsl()")}}
  - : Définit une couleur donnée selon ses composants teinte, saturation, luminosité et alpha (transparence).
- {{CSSxRef("color_value/hwb", "hwb()")}}
  - : Définit une couleur donnée selon ses composants teinte, blancheur et noirceur.
- {{CSSxRef("color_value/lch", "lch()")}}
  - : Définit une couleur donnée selon ses composants luminosité, chroma et teinte.
- {{CSSxRef("color_value/oklch", "oklch()")}}
  - : Définit une couleur donnée selon ses composants luminosité, chroma, teinte et alpha (transparence).
- {{CSSxRef("color_value/lab", "lab()")}}
  - : Définit une couleur donnée selon ses composants luminosité, distance a et distance b dans l'espace colorimétrique lab.
- {{CSSxRef("color_value/oklab", "oklab()")}}
  - : Définit une couleur donnée selon ses composants luminosité, distance a, distance b dans l'espace colorimétrique lab et alpha (transparence).
- {{CSSxRef("color_value/color", "color()")}}
  - : Spécifie un espace colorimétrique particulier plutôt que l'espace colorimétrique sRGB implicite.
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
  - : Mélange deux valeurs de couleur dans un espace colorimétrique donné par une certaine quantité.
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
  - : Renvoie une couleur avec un contraste maximal par rapport à une couleur donnée.
- {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}
  - : Définit les couleurs CMJN de manière dépendante du périphérique.
- {{CSSxRef("color_value/light-dark", "light-dark()")}}
  - : Renvoie l'une des deux couleurs fournies en fonction du schéma de couleurs actuel.

## Les fonctions d'image

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("&lt;image&gt;")}} fournit une représentation graphique des images ou des dégradés.

### Les fonctions de dégradé

- {{CSSxRef("gradient/linear-gradient","linear-gradient()")}}
  - : Les dégradés linéaires font passer progressivement les couleurs le long d'une ligne imaginaire.
- {{CSSxRef("gradient/radial-gradient","radial-gradient()")}}
  - : Les dégradés radiaux font passer progressivement les couleurs à partir d'un point central (origine).
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
  - : Les dégradés coniques font passer progressivement les couleurs autour d'un cercle.
- {{CSSxRef("gradient/repeating-linear-gradient","repeating-linear-gradient()")}}
  - : Semblable à `linear-gradient()` et prend les mêmes arguments, mais répète les arrêts de couleur indéfiniment dans toutes les directions pour couvrir l'ensemble de son conteneur.
- {{CSSxRef("gradient/repeating-radial-gradient","repeating-radial-gradient()")}}
  - : Semblable à `radial-gradient()` et prend les mêmes arguments, mais répète les arrêts de couleur indéfiniment dans toutes les directions pour couvrir l'ensemble de son conteneur.
- {{CSSxRef("gradient/repeating-conic-gradient","repeating-conic-gradient()")}}
  - : Semblable à `conic-gradient()` et prend les mêmes arguments, mais répète les arrêts de couleur indéfiniment dans toutes les directions pour couvrir l'ensemble de son conteneur.

### Les fonctions d'image

- {{CSSxRef("image/image","image()")}}
  - : Définit un type {{CSSxRef("&lt;image&gt;")}} de manière similaire au type {{cssxref("url_value", "&lt;url&gt;")}}, mais avec des fonctionnalités supplémentaires, y compris la spécification de la direction de l'image et des images de remplacement pour les cas où l'image préférée n'est pas prise en charge.
- {{CSSxRef("image/image-set","image-set()")}}
  - : Sélectionne l'image CSS la plus appropriée à partir d'un ensemble donné, principalement pour les écrans à haute densité de pixels.
- {{CSSxRef("cross-fade", "cross-fade()")}}
  - : Mélange deux ou plusieurs images à une transparence définie.
- {{CSSxRef("element", "element()")}}
  - : Définit une valeur {{CSSxRef("&lt;image&gt;")}} générée à partir d'un élément HTML arbitraire.
- {{CSSxRef("image/paint", "paint()")}}
  - : Définit une valeur {{CSSxRef("&lt;image&gt;")}} générée avec un PaintWorklet.

## Les fonctions de compteur

Les fonctions de compteur CSS sont généralement utilisées avec la propriété {{CSSxRef("content")}}, bien qu'en théorie, elles puissent être utilisées partout où une {{CSSxRef("&lt;string&gt;")}} est prise en charge.

- {{CSSxRef("counter", "counter()")}}
  - : Renvoie une chaîne de caractères représentant la valeur actuelle du compteur nommé s'il y en a un.
- {{CSSxRef("counters", "counters()")}}
  - : Active les compteurs imbriqués, renvoyant une chaîne de caractères concaténée représentant les valeurs actuelles des compteurs nommés, s'il y en a.
- {{CSSxRef("symbols", "symbols()")}}
  - : Définit les styles de compteur en ligne, directement en tant que valeur d'une propriété.

## Les fonctions de forme

### Les formes de base

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("&lt;basic-shape&gt;")}} représente une forme graphique. Il est utilisé dans les propriétés {{CSSxRef("clip-path")}}, {{CSSxRef("offset-path")}} et {{CSSxRef("shape-outside")}}.

- {{CSSxRef("basic-shape/circle","circle()")}}
  - : Définit une forme de cercle.
- {{CSSxRef("basic-shape/ellipse","ellipse()")}}
  - : Définit une forme d'ellipse.
- {{CSSxRef("basic-shape/inset","inset()")}}
  - : Définit une forme de rectangle en retrait.
- {{CSSxRef("basic-shape/rect","rect()")}}
  - : Définit une forme de rectangle en utilisant les distances des bords supérieur et gauche de la boîte de référence.
- {{CSSxRef("basic-shape/xywh","xywh()")}}
  - : Définit une forme de rectangle en utilisant les distances spécifiées des bords supérieur et gauche de la boîte de référence ainsi que la largeur et la hauteur du rectangle.
- {{CSSxRef("basic-shape/polygon","polygon()")}}
  - : Définit une forme de polygone.
- {{CSSxRef("basic-shape/path", "path()")}}
  - : Accepte une chaîne de caractères du chemin SVG pour permettre le dessin d'une forme.
- {{CSSxRef("basic-shape/shape", "shape()")}}
  - : Accepte une liste de commandes séparées par des virgules définissant la forme à dessiner.

### Les autres fonctions de forme

- {{CSSxRef("ray", "ray()")}}
  - : Valide avec {{cssxref("offset-path")}}&nbsp;; définit le segment de ligne qu'un élément animé peut suivre.
- {{CSSxRef("superellipse()")}}
  - : Définit la courbure d'une ellipse&nbsp;; peut être utilisé pour spécifier une {{cssxref("corner-shape-value")}}, qui est utilisée avec {{cssxref("corner-shape")}} et ses [propriétés constitutives](/fr/docs/Web/CSS/corner-shape#constituent_properties) et [associées](/fr/docs/Web/CSS/corner-shape#properties_that_follow_the_corner_shape).

## Les fonctions de référence

Les fonctions suivantes sont utilisées comme valeur des propriétés pour référencer une valeur définie ailleurs&nbsp;:

- {{CSSxRef("attr", "attr()")}}
  - : Utilise les attributs définis sur l'élément HTML.
- {{CSSxRef("env", "env()")}}
  - : Utilise la variable d'environnement définie par l'agent utilisateur.
- {{CSSxRef("if", "if()")}}
  - : Définit conditionnellement une valeur de propriété en fonction du résultat d'une [requête de style](/fr/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), d'une [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) ou d'une [requête de fonctionnalité](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries).
- {{cssxref("url_function", "url()")}}
  - : Utilise un fichier à partir de l'URL spécifiée.
- {{CSSxRef("var", "var()")}}
  - : Utilise la valeur de propriété personnalisée au lieu de toute partie d'une valeur d'une autre propriété.

## Les fonctions de grille

Les fonctions suivantes sont utilisées pour définir une [grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)&nbsp;:

- {{CSSxRef("fit-content_function", "fit-content()")}}
  - : Limite une taille donnée à une taille disponible selon la formule `min(maximum size, max(minimum size, argument))`.
- {{CSSxRef("minmax", "minmax()")}}
  - : Définit une plage de taille supérieure ou égale à _min_ et inférieure ou égale à _max_.
- {{CSSxRef("repeat", "repeat()")}}
  - : Représente un fragment répété de la liste des pistes, permettant un grand nombre de colonnes ou de lignes présentant un motif récurrent.

## Les fonctions de police

Les fonctions de police CSS sont utilisées avec la propriété {{CSSxRef("font-variant-alternates")}} pour contrôler l'utilisation des glyphes alternatifs.

- {{CSSxRef("font-variant-alternates#stylistic", "stylistic()")}}
  - : Active les alternatifs stylistiques pour les caractères individuels. Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond à la valeur OpenType `salt`, comme `salt 2`.
- {{CSSxRef("font-variant-alternates#styleset", "styleset()")}}
  - : Active les alternatifs stylistiques pour les ensembles de caractères. Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond à la valeur OpenType `ssXY`, comme `ss02`.
- {{CSSxRef("font-variant-alternates#character-variant", "character-variant()")}}
  - : Active des alternatives stylistiques spécifiques pour les caractères. C'est similaire à `styleset()`, mais ne crée pas de glyphes cohérents pour un ensemble de caractères&nbsp;; les caractères individuels auront des styles indépendants et pas nécessairement cohérents. Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond à la valeur OpenType `cvXY`, comme `cv02`.
- {{CSSxRef("font-variant-alternates#swash", "swash()")}}
  - : Active les glyphes [swash](https://fr.wikipedia.org/wiki/Lettre_orn%C3%A9e). Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond aux valeurs OpenType `swsh` et `cswh`, comme `swsh 2` et `cswh 2`.
- {{CSSxRef("font-variant-alternates#ornaments", "ornaments()")}}
  - : Active des ornements tels que les [fleurons](<https://fr.wikipedia.org/wiki/Fleuron_(typographie)>) et d'autres glyphes dingbat. Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond à la valeur OpenType `ornm`, comme `ornm 2`.
- {{CSSxRef("font-variant-alternates#annotation", "annotation()")}}
  - : Active les annotations telles que les chiffres cerclés ou les caractères inversés. Le paramètre est un nom spécifique à la police mappé à un numéro. Il correspond à la valeur OpenType `nalt`, comme `nalt 2`.

## Les fonctions d'accélération

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) CSS {{CSSxRef("&lt;easing-function&gt;")}} représente une fonction mathématique. Il est utilisé dans les propriétés de transition et d'animation&nbsp;:

- {{cssxref("easing-function/linear", "linear()")}}
  - : Fonction d'accélération qui interpole linéairement entre ses points.
- {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
  - : Fonction d'accélération qui définit une courbe de Bézier cubique.
- {{cssxref("easing-function/steps", "steps()")}}
  - : Itération le long d'un nombre spécifié d'arrêts le long de la transition, affichant chaque arrêt pendant des durées égales.

## Les fonctions d'animation

Les fonctions suivantes sont utilisées comme valeur de différentes propriétés {{CSSxRef("animation-timeline")}}&nbsp;:

- {{cssxref("animation-timeline/scroll", "scroll()")}}
  - : Définit le {{cssxref("animation-timeline")}} d'un élément sur une _timeline de progression de défilement anonyme_.
- {{cssxref("animation-timeline/view", "view()")}}
  - : Définit le {{cssxref("animation-timeline")}} d'un élément sur une _timeline de progression de vue anonyme_.

## Les fonctions de positionnement des ancres

Les fonctions de positionnement des ancres sont utilisées lors du positionnement et du dimensionnement des éléments positionnés par rapport à la position et à la taille de leurs éléments d'ancrage associés.

- {{cssxref("anchor", "anchor()")}}
  - : Renvoie une longueur relative à la position des bords de l'élément d'ancrage associé à un élément positionné par ancre.
- {{cssxref("anchor-size", "anchor-size()")}}
  - : Renvoie une longueur relative à la taille de l'élément d'ancrage associé.

## Les fonctions de comptage dans l'arbre

Les fonctions suivantes renvoient une valeur entière basée sur l'arbre DOM, plutôt que sur l'arbre plat comme la plupart des valeurs CSS le font&nbsp;:

- {{cssxref("sibling-index", "sibling-index()")}}
  - : Renvoie un entier reflétant la position de l'élément sélectionné parmi ses frères.
- {{cssxref("sibling-count", "sibling-count()")}}
  - : Renvoie un entier reflétant le nombre total de frères, y compris l'élément sélectionné.

## Voir aussi

- Le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
