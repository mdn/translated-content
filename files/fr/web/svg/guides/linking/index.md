---
title: Liens
slug: Web/SVG/Guides/Linking
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

L'attribut {{SVGAttr("target")}} sur l'élément SVG {{SVGElement("a")}} ne fonctionne pas dans Mozilla Firefox 1.5. Lorsque des documents SVG sont intégrés dans un document HTML parent à l'aide de la balise&nbsp;:

page1.html&nbsp;:

```html
<html lang="en">
  <body>
    <p>Voici un bouton SVG&nbsp;:</p>
    <object
      width="100"
      height="50"
      type="image/svg+xml"
      data="button.svg"></object>
  </body>
</html>
```

button.svg&nbsp;:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <a href="page2.html" target="_top">
    <g>
      <!-- éléments graphiques du bouton ici -->
    </g>
  </a>
</svg>
```

La spécification indique que le navigateur doit aller vers le document HTML page2.html lorsque le bouton graphique est cliqué. Cependant, `target` ne fonctionne pas avec l'implémentation Mozilla de l'élément SVG `<a>` dans Firefox 1.5. (Le problème est corrigé depuis Firefox 2.0.)

Dans tous les cas, le comportement résultant dans Moz SVG est que page2.html sera chargé dans le cadre où se trouvait le bouton SVG (c'est-à-dire que vous aurez maintenant page2.html intégré dans un cadre de 100x50 pixels à l'intérieur de page1.html).

Pour contourner ce problème, il faut un petit bricolage JavaScript&nbsp;:

button.svg&nbsp;:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <g onclick="top.document.href='page2.html'" cursor="pointer">
    <!-- éléments graphiques du bouton ici -->
  </g>
</svg>
```

## Exemple

Pour un exemple de cette solution en action, voir [www.codedread.com <sup>(angl.)</sup>](https://www.codedread.com/).
