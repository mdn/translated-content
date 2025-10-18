---
title: "HTMLImageElement : propriété longDesc"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

La propriété **`longDesc`** (_obsolète_) de l'interface {{domxref("HTMLImageElement")}} spécifie l'URL d'un fichier texte ou HTML contenant une description détaillée de l'image. Cela peut être utilisé pour fournir des informations supplémentaires facultatives au-delà de la brève description fournie dans l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title).

## Valeur

Une chaîne de caractères qui peut être soit une chaîne vide (indiquant qu'aucune description longue n'est disponible), soit l'URL d'un fichier contenant une description longue du contenu de l'image.

Par exemple, si l'image est un [PNG](/fr/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) représentant un organigramme, la propriété `longDesc` peut être utilisée pour fournir une explication du déroulement représenté par le schéma, uniquement en texte. Cela peut servir d'explication pour les lecteur·ice·s, mais aussi de substitut pour les utilisateur·ice·s malvoyant·e·s.

## Notes d'utilisation

Cette propriété est _obsolète_ et ne doit plus être utilisée. Au lieu d'utiliser `longDesc` pour fournir un lien vers une description détaillée d'une image, encapsulez l'image dans un lien à l'aide de l'élément HTML {{HTMLElement("a")}}.

Considérez l'exemple HTML suivant&nbsp;:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Ici, `longDesc` est utilisé pour indiquer que l'utilisateur·ice doit pouvoir accéder à une description détaillée de l'image `taco-tuesday.jpg` dans le fichier HTML `image-descriptions/taco-tuesday.html`.

Ceci peut être facilement converti en HTML moderne&nbsp;:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

Ainsi, l'image devient un lien vers le fichier HTML décrivant l'image plus en détail.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
