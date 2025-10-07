---
title: "HTMLImageElement : propriété src"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{domxref("HTMLImageElement")}} reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) qui définit l'image à afficher dans l'élément HTML {{HTMLElement("img")}}.

## Valeur

Lorsque vous fournissez une seule image, plutôt qu'un ensemble d'images parmi lesquelles le navigateur sélectionne la meilleure correspondance pour la taille de la zone d'affichage (<i lang="en">viewport</i> en anglais) et la densité de pixels de l'écran, l'attribut `src` est une chaîne de caractères qui indique l'URL de l'image souhaitée. Cela peut être défini soit dans le HTML lui-même via l'attribut de contenu [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src), soit par programmation en définissant la propriété `src` de l'élément.

Si vous utilisez l'attribut de contenu [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) pour fournir plusieurs options d'image selon la densité de pixels de l'écran, l'URL spécifiée par l'attribut `src` est utilisée de deux façons&nbsp;:

- comme solution de repli pour les navigateurs qui ne prennent pas en charge `srcset`&nbsp;;
- comme équivalent à la définition d'une image dans `srcset` avec le multiplicateur de taille `1x`&nbsp;: l'image définie par `src` est utilisée sur les écrans à faible densité (par exemple, les écrans 72 DPI ou 96 DPI classiques).

De plus, si vous utilisez `src` avec _à la fois_ {{domxref("HTMLImageElement.sizes", "sizes")}} (ou l'attribut de contenu [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes)) _et_ `srcset` pour choisir une image selon la taille de la zone d'affichage, l'attribut `src` n'est utilisé que comme solution de repli pour les navigateurs qui ne prennent pas en charge `sizes` et `srcset`&nbsp;; sinon, il n'est pas utilisé.

## Exemples

### Définir une seule image

#### HTML

```html
<img
  src="grapefruit-slice-332-332.jpg"
  width="160"
  alt="Slices of grapefruit, looking yummy." />
```

#### Résultat

{{EmbedLiveSample("définir_une_seule_image", 640, 200)}}

### Utiliser `src` avec un ensemble d'images

Lorsque vous utilisez un ensemble d'images avec la propriété {{domxref("HTMLImageElement.srcset", "srcset")}}, `src` sert soit de solution de repli pour les anciens navigateurs, soit de taille `1x` de l'image.

#### HTML

#### Résultat

### Définir une solution de repli pour la sélection basée sur la zone d'affichage

Lorsque vous utilisez la sélection d'une image depuis un `srcset` en fonction de la zone d'affichage, en spécifiant aussi la propriété {{domxref("HTMLImageElement.sizes", "sizes")}}, la propriété `src` sert de solution de repli pour les navigateurs qui ne prennent pas en charge la sélection basée sur la zone d'affichage. Les navigateurs qui la prennent en charge ignorent `src` dans ce cas.

#### HTML

#### Résultat

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
