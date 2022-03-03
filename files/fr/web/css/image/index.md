---
title: <image>
slug: Web/CSS/image
tags:
  - CSS
  - CSS Images
  - Reference
  - Type
translation_of: Web/CSS/image
---
{{CSSRef}}

Le type de donnée CSS **`<image>`** représente une image en deux dimensions. Il existe deux types d'images en CSS : les images statiques (souvent utilisées via une URL (cf. {{cssxref("&lt;url&gt;")}})), et les images générées dynamiquement comme les dégradés (cf. {{cssxref("&lt;gradient&gt;")}}) ou les images construites à partir de fragments de l'arbre du DOM ({{CSSxRef("element()")}}). D'autres fonctions peuvent être utilisées pour créer des images comme {{CSSxRef("imagefunction", "image()")}}, {{CSSxRef("image-set")}} et {{CSSxRef("cross-fade()")}}.

Les images peuvent être utilisées pour de nombreuses propriétés CSS dont, par exemple, {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("content")}}, {{cssxref("list-style-image")}} et {{cssxref("cursor")}}.

## Les types d'images

Le CSS permet de manipuler différentes sortes d'images :

- les images avec des _dimensions intrinsèques_, qui ont une taille propre, comme une image au format JPEG ou PNG (ou dans un autre [format matriciel](https://fr.wikipedia.org/wiki/Image_matricielle)) qui possède des dimensions fixes.
- les images avec _plusieurs dimensions intrinsèques_, qui existent sous différentes dimensions dans un même fichier, comme certains formats .ico. Dans ce cas, les dimensions intrinsèques seront celles de la plus grande image en surface, et ayant le ratio le plus proche de la boîte englobante.
- les images sans dimensions intrinsèques avec un _ratio intrinsèque_, entre la largeur et sa hauteur, comme certaines [images vectorielles](https://fr.wikipedia.org/wiki/Image_vectorielle), au format SVG par exemple.
- les images n'ayant _ni dimensions intrinsèques, ni ratio intrisèque_, comme un dégradé CSS par exemple.

Le CSS détermine la _taille concrète de l'objet_ en utilisant ces _dimensions intrinsèques_, la _taille spécifiée_ définie par les propriétés CSS comme {{cssxref("width")}}, {{cssxref("height")}} ou {{cssxref("background-size")}}, et la _taille par défaut de l'objet_ définie en fonction de la propriété utilisée :

| Type d'objet                                                                                                           | Taille par défaut de l'objet                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("background-image")}}                                                                               | La taille de la zone de positionnement de l'arrière-plan                                                                                    |
| {{cssxref("list-style-image")}}                                                                               | La taille d'un caractère de `1em`                                                                                                           |
| {{cssxref("border-image-source")}}                                                                           | La taille de la zone de bordure de l'élément                                                                                                |
| {{cssxref("cursor")}}                                                                                           | La dimension correspondant à la taille d'un curseur sur le système utilisé                                                                  |
| {{cssxref("mask-image")}}                                                                                       | ?                                                                                                                                           |
| {{cssxref("shape-outside")}}                                                                                   | ?                                                                                                                                           |
| {{cssxref("mask-border-source")}}                                                                           | ?                                                                                                                                           |
| {{cssxref("symbols()")}} pour `@counter-style`                                                                 | Une fonctionnalité en cours de discussion. Si elle est prise en charge, la taille utilisée sera celle des curseurs utilisés par le système. |
| {{cssxref("content")}} avec les pseudo-éléments {{cssxref("::after")}} et {{cssxref("::before")}} | Un rectangle de `300px × 150px`                                                                                                        |

La taille concrète de l'objet est calculée selon l'algorithme suivant :

- si la taille spécifié définit à la fois la largeur et la hauteur, ces valeurs sont utilisées comme la taille concrète de l'élément.
- si la taille spécifiée définit soit la hauteur soit la largeur, la valeur manquante est déterminée grâce au ratio intrinsèque s'il existe ou les dimensions intrisèques si la valeur spécifiée y correspond ou la taille par défaut de l'objet pour la dimension manquante.
- si la taille spécifiée ne définit ni hauteur ni largeur, la taille concrète de l'objet est calculée de manière à ce que le ratio intrinsèque soit conservé et que la taille par défaut de l'objet ne soit pas dépassée. Si l'image n'a pas de ratio intrinsèque, le ratio intrinsèque de l'objet auquel il s'applique est utilisé ; si l'objet n'en possède pas, la hauteur ou la largeur manquante est prise depuis la taille par défaut de l'objet.

Les images peuvent être utilisées pour de nombreuses propriétés CSS comme {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("content")}}, {{cssxref("list-style-image")}} ou {{cssxref("cursor")}}.

> **Note :** tous les navigateurs ne supportent pas n'importe quel type d'image sur n'importe quelle propriété. Voir la section [compatibilité des navigateurs](/fr/docs/Web/CSS/image#compatibilit.c3.a9_des_navigateurs) pour une liste explicative.

## Syntaxe

Un type de donnée CSS `<image>` peut représenter un type parmi les suivants :

- une image dénotée par le type de donnée CSS {{cssxref("&lt;url&gt;")}} et la fonction `url()` ;
- une valeur CSS {{cssxref("&lt;gradient&gt;")}} (représentant un dégradé) ;
- une partie de la page, définie par la fonction {{cssxref("element()")}} ;
- une image, un fragment d'image ou une couleur définie grâce à la fonction {{cssxref("image()")}} ;
- une fusion de deux ou plusieurs images avec la fonction {{cssxref("cross-face")}}
- une image choisie parmi un ensemble d'images (selon leurs résolutions, l'appareil et la connexion utilisés) grâce à la fonction {{cssxref("image-set()")}}.

## Exemples

Voici des exemples valides d'images :

```css example-good
url(test.jpg)              /* La fonction url() fonctionne tant que test.jpg est bien une image */
linear-gradient(blue, red) /* Un dégradé (<gradient>) */
element(#colonne3)         /* Utilisation d'un élément de la page via la fonction element(),
                              si colonne3 est bien un identifiant CSS existant. */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                           /* Une section de 16x16 pixels de l'image arrow.png et qui démarre au coin
                              supérieur gauche de l'image et qui sera utilisée si arrow.png est à un
                              format pris en charge. Sinon, ce sera un fond rouge qui sera utilisé.
                              Si la langue est écrite de gauche à droite, l'image sera inversée
                              horizontalement. */
cross-fade(20% url(vingt.png), url(quatrevingt.png));
                           /* Deux images superposées où « vingt » est 20%
                              opaque et « quatrevingt » compose les 80%
                              restants. */
image-set('test.jpg' 1x, 'text-2x.jpg' 2x);
                           /* Un ensemble d'images avec différentes résolutions. */
```

Voici des exemples invalides :

```css example-bad
nourl.jpg            /* Le fichier de l'image doit être ciblé via la fonction url(). */
url(report.pdf)      /* Le fichier référencé par la fonction url() doit être une image. */
element(#fakeid)     /* Ne fonctionne pas si 'fakeid' n'est pas un identifiant existant. */
image(z.jpg#xy=0,0)  /* L'indicateur de fragment doit avoir la forme xywh=#,#,#,# */
image-set('chat.jpg' 1x, 'chien.jpg' 1x) /* Chaque image doit avoir une résolution différente */
```

## Accessibilité

Les navigateurs ne fournissent pas d'information aux outils d'assistance pour les images d'arrière-plan. Cela est particulièrement important pour les lecteurs d'écran car ces derniers ne pourront pas annoncer la présence de ces informations aux utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre la règle 1.1 du WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Comprendre les critères pour 1.1.1, comprendre WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Spécifications

| Spécification                                                                        | État                             | Commentaires                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS3 Images", "#typedef-image", "&lt;image&gt;")}} | {{Spec2('CSS3 Images')}} | Définition initiale. Avant [CSS3](/fr/docs/Web/CSS/CSS3), il n'existait pas de type défini de façon explicite pour les images. Celles-ci pouvaient uniquement être utilisées via la notation fonctionnelle `url()`.                                                                                |
| {{SpecName("CSS4 Images", "#typedef-image", "&lt;image&gt;")}} | {{Spec2('CSS4 Images')}} | Ajout de {{cssxref("element()")}}, {{cssxref("image()")}}, {{cssxref("image-set()")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-conic-gradient", "repeating-conic-gradient()")}} et {{cssxref("image-resolution")}}. |

## Compatibilité des navigateurs

{{Compat("css.types.image")}}

## Voir aussi

- {{cssxref("&lt;gradient&gt;")}}

  - [Manipuler les dégradés CSS](/fr/docs/Web/Guide/CSS/Using_CSS_gradients)
  - {{cssxref("linear-gradient","linear-gradient()")}}
  - {{cssxref("radial-gradient","radial-gradient()")}}
  - {{cssxref("repeating-linear-gradient","repeating-linear-gradient()")}}
  - {{cssxref("repeating-radial-gradient","repeating-radial-gradient()")}}
  - {{cssxref("conic-gradient")}}

- {{cssxref("element()")}}
- {{CSSxRef("imagefunction", "image()")}}
- {{cssxref("image-set()")}}
- {{CSSxRef("cross-fade()")}}
