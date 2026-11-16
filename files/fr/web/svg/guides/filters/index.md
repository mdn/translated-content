---
title: Appliquer des effets avec les filtres SVG
slug: Web/SVG/Guides/Filters
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

Les filtres SVG prennent les pixels qu'un élément a peints et les traitent avant qu'ils n'atteignent l'écran&nbsp;: floutage, décalage, recoloration, composition ou génération d'une nouvelle image. Ils peuvent être enchaînés pour former des chaînes à plusieurs étapes et s'appliquent aussi bien au contenu SVG qu'au contenu HTML.

Un filtre est défini par l'élément {{SVGElement("filter")}}, qui n'est jamais rendu lui-même. Il doit avoir un `id` pour que d'autres éléments puissent y faire référence, et il peut être placé n'importe où dans le document, bien qu'il soit généralement défini à l'intérieur d'un élément {{SVGElement("defs")}}. Les éléments SVG appliquent un filtre avec l'attribut {{SVGAttr("filter")}}, et les éléments SVG et HTML peuvent en appliquer un avec la propriété CSS {{CSSxRef("filter")}}&nbsp;:

```html
<rect width="100" height="100" filter="url(#floutez-moi)" />
```

```css
.floute {
  filter: url("#floutez-moi");
}
```

## Premier filtre

À l'intérieur de l'élément `<filter>`, vous énumérez les _primitives de filtre_&nbsp;: les éléments `fe*`, où `fe` signifie "filter effect" (effet de filtre). Chaque primitive effectue une opération. Le filtre simple suivant contient une seule primitive, {{SVGElement("feGaussianBlur")}}, dont l'attribut {{SVGAttr("stdDeviation")}} contrôle la quantité de flou appliquée. Parmi les deux cercles identiques, seul le second fait référence au filtre&nbsp;:

```html
<svg
  viewBox="0 0 200 100"
  width="200"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="floutez-moi">
      <feGaussianBlur stdDeviation="4" />
    </filter>
  </defs>

  <circle cx="50" cy="50" r="40" fill="steelblue" />
  <circle cx="150" cy="50" r="40" fill="steelblue" filter="url(#floutez-moi)" />
</svg>
```

{{EmbedLiveSample("Premier filtre", "100%", 130)}}

Le cercle filtré est peint, flouté, puis recomposé dans le graphique. Augmenter `stdDeviation` étend le flou davantage, jusqu'à ce qu'il soit coupé par la région de filtre.

## Comment fonctionne un enchaînement de filtres

Un filtre avec plus d'une primitive est un enchaînement. Chaque primitive prend zéro ou plusieurs images en entrée et produit une image en sortie&nbsp;:

- L'attribut {{SVGAttr("in")}} nomme l'entrée. {{SVGAttr("in2")}} nomme la deuxième entrée des primitives qui combinent deux images, comme {{SVGElement("feBlend")}} et {{SVGElement("feComposite")}}.
- L'attribut {{SVGAttr("result")}} nomme la sortie afin qu'une primitive ultérieure puisse s'y référer. Ce nom est limité à l'élément `<filter>`.
- Si une primitive n'a pas d'attribut `in`, elle utilise `SourceGraphic` lorsqu'elle est la première primitive du filtre, et le résultat de la primitive précédente sinon. Ainsi, une chaîne de primitives qui omettent toutes `in` et `result` s'exécute dans l'ordre du document, chacune traitant la sortie de la précédente.

Outre un `result` précédent, `in` et `in2` acceptent des mots-clés nommant l'entrée propre du filtre. Deux d'entre eux sont importants en pratique&nbsp;: `SourceGraphic`, l'élément tel qu'il est peint, et `SourceAlpha`, la même chose réduite à son canal alpha. Cette silhouette est là où commence une ombre, puisque celle-ci a besoin de la forme de l'élément mais pas de ses couleurs. La référence {{SVGAttr("in")}} liste les mots-clés restants, qui se réfèrent à la peinture de remplissage et de contour de l'élément ainsi qu'à l'arrière-plan derrière lui.

Quelques primitives ne prennent aucune entrée&nbsp;: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}} et {{SVGElement("feImage")}} génèrent une image à partir de leurs propres attributs plutôt que de quoi que ce soit de précédent dans l'enchaînement, donc `in` n'a aucun sens pour elles. Ce sont les seules façons d'introduire des images qu'un filtre n'a pas reçues comme entrée.

Les primitives sont toujours appliquées dans l'ordre du document, et un `result` ne peut être référencé que par des primitives qui viennent après lui.

Le filtre suivant floute le graphique source, déplace la copie floutée vers la droite, et multiplie cette copie avec la source non filtrée. Il élargit également la région de filtre afin que la copie déplacée ne soit pas coupée, ce que la [section suivante](#filtre_de_région) explique&nbsp;:

```html
<svg
  viewBox="0 0 140 120"
  width="140"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="echo" x="-20%" y="-20%" width="180%" height="140%">
      <!-- Floute le graphique source, et appelle la sortie "floute" -->
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="floute" />
      <!-- Déplace "floute" vers la droite, et appelle la sortie "shifted" -->
      <feOffset in="floute" dx="14" result="shifted" />
      <!-- Multiplie "shifted" avec le graphique source -->
      <feBlend in="shifted" in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>

  <circle cx="70" cy="60" r="32" fill="steelblue" filter="url(#echo)" />
</svg>
```

{{EmbedLiveSample("Comment fonctionne un enchaînement de filtres", "100%", 150)}}

Cet enchaînement est linéaire&nbsp;: chaque primitive prend la sortie de celle qui la précède. Ainsi, chaque attribut `in` et `result` sauf `in2="SourceGraphic"` peut être supprimé sans changer le rendu. Essayez de les supprimer pour voir par vous-même.

Nommer explicitement le `result` n'est nécessaire que dans un enchaînement non linéaire, lorsqu'une primitive ultérieure a besoin d'une sortie autre que celle produite immédiatement avant. Cela se produit généralement lors de la fusion de résultats de deux chaînes ou de l'entrée du même résultat dans plusieurs chaînes. Lorsque l'enchaînement est linéaire, les noms explicites peuvent rendre votre code plus lisible mais peuvent également introduire des bogues si vous faites une faute de frappe.

## Région de filtre

Un filtre n'est évalué que dans sa _région de filtre_. Tout ce que le filtre peint en dehors de cette région est coupé, donc si vous voyez un flou ou une ombre décalée être coupé à un bord net, vérifiez si une région de filtre plus grande aide.

La région est définie par les attributs `x`, `y`, `width` et `height` sur `<filter>`. Ils ont pour valeurs par défaut `-10%`, `-10%`, `120%` et `120%`, donnant une marge de 10% autour de la boîte englobante de l'élément de chaque côté, car de nombreux effets s'étendent au-delà de l'élément lui-même.

Les deux carrés ci-dessous reçoivent la même ombre. Le premier filtre laisse la région à sa valeur par défaut, donc son ombre se termine par une ligne droite à 7 unités du carré (10% de sa boîte englobante de 70 unités), tandis que la région plus grande du second filtre donne à l'ombre de la place pour s'estomper&nbsp;:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="clipped-shadow">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>

    <filter id="big-shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#clipped-shadow)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#big-shadow)" />
</svg>
```

{{EmbedLiveSample("Région de filtre", "100%", 150)}}

Le découpage est parfois l'effet recherché. Une région de `x="0" y="0" width="100%" height="100%"` ajuste l'effet à la boîte englobante de l'élément, ce qui permet de garder un halo interne à l'intérieur d'un rectangle, et d'empêcher un flou de s'étendre au-delà du bord qu'il adoucit.

L'attribut {{SVGAttr("filterUnits")}} définit si les `x`, `y`, `width` et `height` de la région sont des fractions de la boîte englobante de l'élément (`objectBoundingBox`, la valeur par défaut) ou des longueurs dans le système de coordonnées utilisateur courant (`userSpaceOnUse`). Avec `objectBoundingBox`, les valeurs sont des fractions de la boîte englobante qu'elles soient écrites en pourcentages ou non, donc `width="180%"` et `width="1.8"` décrivent la même région.

Les primitives individuelles acceptent également `x`, `y`, `width` et `height`, ce qui limite cette opération à une _sous-région de primitive_. C'est utile pour appliquer un effet à une partie d'un élément, et pour limiter l'étendue des primitives telles que {{SVGElement("feFlood")}} et {{SVGElement("feTile")}} qui remplissent autrement toute la région. L'attribut {{SVGAttr("primitiveUnits")}} sur `<filter>` fait le même choix que `filterUnits` pour ces sous-régions et pour les valeurs utilisées à l'intérieur des primitives, telles que `stdDeviation` et `dx`. Sa valeur par défaut est `userSpaceOnUse`.

## Interpoler la couleur

Les opérations de filtre sont effectuées dans un espace colorimétrique choisi par la propriété {{SVGAttr("color-interpolation-filters")}}, dont la valeur initiale est `linearRGB`. La couleur linéarisée est plus physiquement précise, car un flou ou un composite en `linearRGB` se comporte comme la lumière. Cependant, cela ne correspond pas à ce que produisent les fonctions de filtre CSS, les éditeurs d'images ou les attentes de la plupart des gens, et la différence est très visible dans les flous, les dégradés et les mélanges de couleurs.

Définissez la propriété sur `sRGB` sur l'élément `<filter>`, ou sur une primitive individuelle, chaque fois qu'un filtre mélange des canaux de couleur et que vous souhaitez un résultat correspondant au CSS. Il est utile de le faire pour chaque filtre, car le `linearRGB` par défaut est facile à confondre avec un bogue visuel.

Les deux ensembles de rayures ci-dessous sont floutés de la même manière, et seul l'espace colorimétrique diffère. Le flou dans le `linearRGB` initial, à gauche, mélange les rayures noires et blanches en un gris beaucoup plus clair que le flou des mêmes rayures en `sRGB`, à droite, ce qui correspond également à ce que produit la fonction CSS {{CSSxRef("filter-function/blur", "blur()")}}&nbsp;:

```html
<svg
  viewBox="0 0 260 120"
  width="260"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-linear" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <filter
      id="blur-srgb"
      x="-25%"
      y="-25%"
      width="150%"
      height="150%"
      color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <g id="stripes">
      <rect width="100" height="80" fill="black" />
      <rect x="10" width="10" height="80" fill="white" />
      <rect x="30" width="10" height="80" fill="white" />
      <rect x="50" width="10" height="80" fill="white" />
      <rect x="70" width="10" height="80" fill="white" />
    </g>
  </defs>

  <use href="#stripes" x="20" y="20" filter="url(#blur-linear)" />
  <use href="#stripes" x="140" y="20" filter="url(#blur-srgb)" />
</svg>
```

{{EmbedLiveSample("Interpoler la couleur", "100%", 150)}}

## Les primitives de filtre

Il existe environ vingt éléments `fe*`. Les regrouper en fonction de ce qu'ils font facilite la recherche de celui dont un effet a besoin&nbsp;:

- Les **générateurs** ne prennent aucune entrée et produisent une image à partir de leurs propres attributs&nbsp;: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}}, et {{SVGElement("feImage")}}.
- Les primitives de **couleur** ré-associent les valeurs des canaux sans déplacer les pixels&nbsp;: {{SVGElement("feColorMatrix")}} et {{SVGElement("feComponentTransfer")}}.
- Les primitives de **géométrie** déplacent, étendent ou déforment les pixels&nbsp;: {{SVGElement("feGaussianBlur")}}, {{SVGElement("feOffset")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feConvolveMatrix")}} et {{SVGElement("feTile")}}.
- Les primitives de **compositing** combinent deux entrées ou plus&nbsp;: {{SVGElement("feBlend")}}, {{SVGElement("feComposite")}} et {{SVGElement("feMerge")}}.
- Les primitives de **lumière** ombrent l'entrée comme une surface, en utilisant son canal alpha comme carte de relief&nbsp;: {{SVGElement("feDiffuseLighting")}} et {{SVGElement("feSpecularLighting")}}. Chacune prend un enfant source de lumière&nbsp;: {{SVGElement("feDistantLight")}}, {{SVGElement("fePointLight")}} ou {{SVGElement("feSpotLight")}}.
- {{SVGElement("feDropShadow")}} est un raccourci pour une chaîne des éléments ci-dessus, abordée dans les [recettes](#ombres_portées) ci-dessous.

`feImage` peut référencer une image externe ou un élément du même document, mais la seconde forme n'est pas prise en charge partout. Voir le [tableau de compatibilité des navigateurs](/fr/docs/Web/SVG/Reference/Element/feImage#compatibilité_des_navigateurs) pour `feImage`.

La page propre à chaque élément documente les attributs qui le contrôlent, et la section [primitives de filtre](/fr/docs/Web/SVG/Reference/Element#éléments_primitives_de_filtre) de la référence des éléments contient la liste complète.

## Recettes

### Ombres portées

{{SVGElement("feDropShadow")}} fait tout le travail en une seule primitive, avec `dx`, `dy` et `stdDeviation` pour la géométrie et les propriétés `flood-color` et `flood-opacity` pour la couleur. Construisez une ombre à la main uniquement lorsque vous avez besoin de quelque chose que le raccourci ne peut pas exprimer, comme réutiliser la silhouette floue pour un autre effet.

L'exemple suivant construit deux fois la même ombre semi-transparente. Le filtre de gauche utilise `feDropShadow`. Celui de droite assemble le même effet à partir de quatre primitives distinctes, en floutant le canal alpha, en le décalant, en le fondant à 50% avec {{SVGElement("feComponentTransfer")}}, et en fusionnant le graphique source par-dessus. Les deux élargissent la région du filtre afin que l'ombre ne soit pas coupée&nbsp;:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow-shorthand" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow
        dx="4"
        dy="4"
        stdDeviation="3"
        flood-color="black"
        flood-opacity="0.5" />
    </filter>

    <filter id="shadow-by-hand" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
      <feComponentTransfer in="offsetBlur" result="fadedBlur">
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="fadedBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-shorthand)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-by-hand)" />
</svg>
```

{{EmbedLiveSample("Ombres portées", "100%", 150)}}

Les deux carrés se ressemblent parce que `feDropShadow` regroupe les mêmes étapes en une seule primitive&nbsp;: flouter le canal alpha, le décaler, le colorer, et dessiner le graphique source par-dessus. Il teinte l'ombre en composant `flood-color` dans l'alpha flouté plutôt qu'en fondant l'alpha, ce qui revient au même pour une ombre solide.

### Recolorer avec `feColorMatrix`

{{SVGElement("feColorMatrix")}} multiplie les valeurs RGBA de chaque pixel par une matrice de 20 nombres&nbsp;: quatre lignes, une par canal de sortie, de cinq colonnes (`R`, `G`, `B`, `A` et une constante). Les valeurs abrégées de `type` couvrent les cas courants (`saturate`, `hueRotate`, `luminanceToAlpha`), tandis que `type="matrix"` donne un contrôle total. Ce filtre convertit en niveaux de gris en utilisant les coefficients de luminance, dans `sRGB` afin que le résultat corresponde à la fonction CSS {{CSSxRef("filter-function/grayscale", "grayscale()")}}. Les mêmes trois cercles sont dessinés deux fois, et seule la copie de droite est filtrée&nbsp;:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="to-grayscale" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0      0      0      1 0" />
    </filter>
  </defs>

  <g id="circles">
    <circle cx="60" cy="47" r="22" fill="crimson" />
    <circle cx="45" cy="73" r="22" fill="seagreen" opacity="0.8" />
    <circle cx="75" cy="73" r="22" fill="orange" opacity="0.8" />
  </g>

  <g filter="url(#to-grayscale)" transform="translate(120, 0)">
    <use href="#circles" />
  </g>
</svg>
```

{{EmbedLiveSample("Recolorer avec `feColorMatrix`", "100%", 150)}}

Chaque ligne de la matrice définit un canal de sortie à partir d'une somme pondérée des canaux d'entrée. Les trois lignes de couleur sont identiques, donc le rouge, le vert et le bleu finissent tous à la même valeur de luminance, tandis que la ligne alpha (`0 0 0 1 0`) laisse passer la transparence sans la modifier.

## Filtres sur le contenu HTML

La propriété CSS {{CSSxRef("filter")}} peut également appliquer un filtre SVG à n'importe quel élément HTML. À cette fin, vous pouvez définir un élément `<svg>` dans le document qui ne contient que le `<filter>` et est complètement transparent pour la mise en page. Vous devez définir sa `width` et sa `height` à `0` afin qu'il ne recouvre pas le contenu de la page, son `position` à `fixed` pour le retirer du flux, et `aria-hidden` pour le maintenir hors de l'arbre d'accessibilité.

Dans l'exemple suivant, le texte est déplacé par le bruit que le filtre génère pour lui-même, ce qu'aucune fonction de filtre CSS ne peut faire&nbsp;:

```html
<svg class="filter-host" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <filter id="wobble" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.05"
      numOctaves="2"
      result="noise" />
    <feDisplacementMap
      in="SourceGraphic"
      in2="noise"
      scale="8"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>
</svg>

<p class="wobble">Texte HTML filtré</p>
```

```css
.filter-host {
  position: fixed;
  width: 0;
  height: 0;
}

.wobble {
  font: bold 2rem sans-serif;
  filter: url("#wobble");
}
```

{{EmbedLiveSample("Filtres sur le contenu HTML", "100%", 140)}}

Voir [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content) pour en savoir plus sur la combinaison des deux langages.

## Les filtres SVG et les fonctions de filtre CSS

La propriété CSS {{CSSxRef("filter")}} accepte à la fois une référence {{CSSxRef("url_function", "url()")}} à un filtre SVG et une liste de [fonctions de filtre](/fr/docs/Web/CSS/Reference/Values/filter-function) telles que {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}} et {{CSSxRef("filter-function/grayscale", "grayscale()")}}. Les fonctions de filtre sont des abréviations pour exactement ces primitives, donc&nbsp;:

- Utiliser une fonction de filtre lorsqu'il en existe une pour l'effet dont vous avez besoin. Elle est plus courte, peut être animée et interpolée par CSS, et fonctionne en `sRGB` sans surprises. Cependant, notez que les fonctions de filtre [peuvent ne pas s'appliquer aux éléments SVG](/fr/docs/Web/CSS/Reference/Properties/filter#compatibilité_des_navigateurs), auquel cas vous devez utiliser un filtre SVG.
- Utiliser un filtre SVG pour des effets plus complexes sans fonction de filtre existante&nbsp;: plusieurs opérations enchaînées, deux entrées combinées, bruit ou éclairage généré, ou contrôle précis de l'espace colorimétrique et de la région de filtrage.

Le choix n'est pas exclusif&nbsp;: la propriété accepte une liste séparée par des espaces, donc `filter: url("#wobble") grayscale(1)` applique d'abord le filtre SVG, puis la fonction, dans cet ordre. Lister deux références `<filter>` est également le moyen de combiner des étapes nécessitant des `primitiveUnits` différents, puisque cet attribut s'applique à un filtre entier plutôt qu'à une seule primitive.

## Voir aussi

- {{SVGElement("filter")}}&nbsp;: l'élément qui définit un filtre
- {{SVGAttr("in")}}, {{SVGAttr("result")}}, {{SVGAttr("color-interpolation-filters")}}&nbsp;: les attributs qui relient les étapes d'un filtre
- [Les éléments primitifs de filtre](/fr/docs/Web/SVG/Reference/Element#filter_primitive_elements)&nbsp;: référence pour les éléments `fe*`
- {{CSSxRef("filter")}}&nbsp;: la propriété CSS qui applique un filtre à SVG ou HTML
- [Utiliser les effets de filtre](/fr/docs/Web/CSS/Guides/Filter_effects/Using)&nbsp;: guide CSS des fonctions de filtre
- [Les effets de filtre](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)&nbsp;: chapitre sur les filtres du tutoriel SVG
- [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)&nbsp;: filtres, découpage et masquage sur le contenu HTML
- [Guide des filtres SVG&nbsp;: commencer avec les bases <sup>(angl.)</sup>](https://blog.master.dev/svg-filters-guide-getting-started-with-the-basics/) sur blog.master.dev (2026)
- [Les effets de texte avec les filtres SVG&nbsp;: letterpress, ink gain, wood type <sup>(angl.)</sup>](https://www.carmenansio.com/articles/svg-filters-on-type/) sur carmenansio.com (2026)
