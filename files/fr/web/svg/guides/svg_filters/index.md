---
title: Filtres SVG
slug: Web/SVG/Guides/SVG_filters
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

SVG permet d'utiliser des outils similaires à ceux du langage de description bitmap, comme l'utilisation d'ombres, d'effets de flou ou même la fusion des résultats de différents filtres. Avec l'élément `<filter>`, il est possible d'ajouter ces effets puis de les attacher à un objet.

Les filtres agissent comme des calques. Lors de leur création, essayez d'appliquer et de tester l'effet étape par étape.

Cet élément possède différents attributs qui aident à créer la région de découpage. Entre les balises de filtre, on peut définir les _primitives_ qui permettent de réaliser l'effet souhaité. L'une de ces primitives est [`<feGaussianBlur>`](/fr/docs/Web/SVG/Reference/Element/feGaussianBlur). Le mot-clé [`SourceAlpha` <sup>(angl.)</sup>](https://drafts.fxtf.org/filter-effects/#attr-valuedef-in-sourcealpha) identifie l'entrée pour cette primitive, ici l'entrée `in`. La quantité de flou à appliquer se définit avec l'attribut `stdDeviation`.

## Exemple de filtre SVG

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
  </filter>
</defs>

<g id="ghost" filter="url(#drop-shadow)">
  <!--Dessin du fantôme ici-->
</g>
```

L'exemple ci-dessus ne produira pas le rendu souhaité. Il faut ajouter d'autres primitives de filtre pour obtenir le rendu attendu. En ajoutant `feoffset` et `result`, le calque d'effet est défini.

L'attribut `<result>` est une référence qui peut être utilisée plus tard. Il est très différent d'un id XML et ne peut être référencé qu'à l'intérieur du `filter` courant. La primitive **`<feoffset>`** reçoit le résultat du flou gaussien. La primitive **`<feMerge>`** contient les nœuds **`<feMergeNode>`** prenant en entrée le résultat offsetBlur, ce qui permet de l'afficher sous le `sourceGraphic`.

## Implémentation de primitives supplémentaires

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
    <feoffset in="blur" dx="4" dy="4" result="offsetBlur" />
    <feMerge>
      <feMergeNode in="offsetBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
```
