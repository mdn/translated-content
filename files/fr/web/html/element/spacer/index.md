---
title: <spacer>
slug: Web/HTML/Element/spacer
tags:
  - Element
  - HTML
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/spacer
---
{{non-standard_header}}{{deprecated_header}}{{HTMLRef}}

L'élément HTML **`<spacer>`** était utilisé pour insérer des blancs au sein d'une page web. Il a été créé par Netscape pour obtenir le même effet que celui qui était créé avec des images GIF d'un pixel, permettant d'ajouter des espaces blancs. Cependant, `<spacer>` n'est pas pris en charge par les principaux navigateurs principaux et il faut utiliser les règles CSS pour obtenir ces effets d'alignement. Firefox ne prend plus en charge cet élément depuis la version 4.

## Attributs

Comme tous les autres éléments HTML, cet élément supporte [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- {{htmlattrdef("type")}}
  - : Cet attribut détermine le type de `<spacer>`. Les valeurs possibles sont `horizontal`, `vertical` et `block`.
- {{htmlattrdef("size")}}
  - : Cet attribut peut être utilisé pour définir la taille du `<spacer>` en pixels lorsque son type vaut `horizontal` ou `vertical`.
- {{htmlattrdef("width")}}
  - : Cet attribut peut être utilisé pour définir la largeur du `<spacer>` en pixels quand son type est `block`.
- {{htmlattrdef("height")}}
  - : Cet attribut peut être utilisé pour définir la hauteur du `<spacer>` en pixels quand son type est `block`.
- {{htmlattrdef("align")}}
  - : Cet attribut détermine l'alignement du `<spacer>`. Les valeurs possibles sont `left`, `right` et `center`.

## Exemples

### HTML

```html
<span>Un nœud texte</span>
<spacer type="horizontal" size="10"></spacer>
<span>Un autre nœud texte</span>
<spacer type="block" width="10" height="10"></spacer>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","170")}}

## Spécifications

Cet élément ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("html.elements.spacer")}}
