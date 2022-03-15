---
title: Contenu embarqué dans le SVG
slug: Web/SVG/Tutorial/Other_content_in_SVG
translation_of: Web/SVG/Tutorial/Other_content_in_SVG
original_slug: Web/SVG/Tutoriel/Contenu_embarque_SVG
---
{{ PreviousNext("Web/SVG/Tutoriel/Découpages_et_masquages", "Web/SVG/Tutoriel/filtres") }}

En plus des formes graphiques simples comme les rectangles et les cercles, le format SVG permet d'ajouter d'autres types de contenu aux images.

### Embarquer des images

De la même façon qu'il est possible d'utiliser la balise **img** en HTML, le format SVG possède un élément **`image`** qui a la même utilité. Vous pouvez l'utiliser pour insérer des images bitmap ou vectorielles dans votre image SVG. La spécification définit que les formats PNG, JPEG et SVG au moins doivent être supportés.

L'image embarquée devient un élément SVG normal. Cela implique que vous pouvez utiliser le découpage, les masques, les filtres, les rotations et toute la panoplie des outils svg sur ce contenu embarqué :

```html
<svg version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200" height="200">
<image x="90" y="-65" width="128" height="146" transform="rotate(45)"
  xlink:href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png"/>
</svg>
```

{{ EmbedLiveSample('Embarquer_des_images','220','240') }}

### Embarquer du contenu XML quelconque

Étant donné que le SVG est un document XML, il est toujours possible d'adjoindre un contenu XML quelconque n'importe où dans le document. Mais il n'y a évidemment aucun moyen de savoir comment l'élément SVG encadrant votre contenu réagira à ce qui aura été inséré. En fait, un lecteur SVG correct ne réagira d'aucune façon particulière et ignorera purement et simplement ce contenu. Si la spécification ajoute l'élément SVG `foreignObject`,son utilité est essentiellement d'être une coquille pour d'autres balises et de permettre d'adjoindre des attributs de style (comme par exemple la _largeur_ et la _hauteur_ de l'objet embarqué afin de définir la place que celui-ci occupera).

L'élément **`foreignObject`** est donc la bonne méthode pour embarquer du **XHTML** dans du SVG. Si le SVG doit contenir du texte de longueur conséquente, la disposition HTML est bien plus pratique et utilisable que l'élément SVG `text`. Une autre utilisation bien pratique de cet élément est l'adjonction de formules avec MathML. Pour des applications scientifiques utilisant le SVG, c'est un bon moyen de permettre la communication entre ces deux univers.

> **Note :** Gardez à l'esprit que le contenu du `foreignObject` doit pouvoir être analysé et pris en compte par votre lecteur SVG. Il y a peu de chances qu'un lecteur SVG autonome soit capable de restituer du contenu HTML or MathML.

Etant donné que le `foreignObject` est un élément SVG comme un autre, vous pouvez, comme dans le case de l'élément `image`, utiliser toute la panoplie des attributs SVG qui pourrait s'appliquer au contenu embarqué.

{{ PreviousNext("Web/SVG/Tutoriel/Découpages_et_masquages", "Web/SVG/Tutoriel/filtres") }}
