---
title: "HTMLImageElement : propriété longDesc"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`longDesc`** (_obsolète_) de l'interface {{DOMxRef("HTMLImageElement")}} spécifie l'URL d'un fichier texte ou HTML contenant une description détaillée de l'image. Cela peut être utilisé pour fournir des informations supplémentaires facultatives au-delà de la brève description fournie dans l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title). Elle reflète l'attribut de contenu [`longdesc`](/fr/docs/Web/HTML/Reference/Elements/img#longdesc) de l'élément `<img>`.

Cet attribut est considéré comme obsolète dans la [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). Son avenir est incertain&nbsp;; les auteur·ice·s doivent utiliser une alternative {{Glossary("WAI")}}-{{Glossary("ARIA")}} telle que [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) ou [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). Vous pouvez également encapsuler l'image dans un lien à l'aide de l'élément HTML {{HTMLElement("a")}}.

## Valeur

Une chaîne de caractères qui peut être soit une chaîne vide (indiquant qu'aucune description longue n'est disponible), soit l'URL d'un fichier contenant une description longue du contenu de l'image.

## Exemples

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
