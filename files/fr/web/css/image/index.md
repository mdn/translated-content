---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{CSSRef}}

Le [type de données](/fr/docs/Web/CSS/CSS_Types) [CSS](/fr/docs/Web/CSS) **`<image>`** représente une image en deux dimensions.

## Syntaxe

Le type de données `<image>` peut être représenté avec l'une des valeurs suivantes&nbsp;:

- Une image portée par une valeur de type [`url()`](/fr/docs/Web/CSS/url)
- Une valeur de type [`<gradient>`](/fr/docs/Web/CSS/gradient) qui représente un dégradé
- Une partie d'une page web définie par la fonction [`element()`](/fr/docs/Web/CSS/element)
- Une image, un fragment d'image ou une zone de couleur définie par la fonction [`image()`](/fr/docs/Web/CSS/image/image)
- Une fusion d'une ou plusieurs images à l'aide de la fonction [`cross-fade()`](/fr/docs/Web/CSS/cross-fade).
- Une sélection d'images déterminée selon la résolution à l'aide de la fonction [`image-set()`](/fr/docs/Web/CSS/image/image-set).

## Description

CSS peut gérer ces différents types d'images&nbsp;:

- Les images avec _des dimensions intrinsèques_ (c'est-à-dire une taille naturelle), comme celles au format JPEG, PNG, ou dans un autre [format matriciel](https://fr.wikipedia.org/wiki/Image_matricielle).
- Les images avec _plusieurs dimensions intrinsèques_, qui existent en plusieurs versions à l'intérieur d'un même fichier (comme certains formats .ico), auquel cas les dimensions intrinsèques seront celles de l'image la plus grande de la zone et avec les proportions les plus proches de la boîte englobante.
- Les images sans dimension intrinsèque, mais avec _des proportions intrinsèques_ entre la hauteur et la largeur, comme un fichier SVG ou une image dans [un format vectoriel](https://fr.wikipedia.org/wiki/Image_vectorielle).
- Les images _sans dimension ou proportion intrinsèques_, comme les dégradés CSS.

Le moteur CSS détermine la _taille effective_ d'un objet en utilisant&nbsp;:

1. Ses dimensions intrinsèques
2. Sa taille indiquée, définie par les propriétés CSS telles que [`width`](/fr/docs/Web/CSS/width), [`height`](/fr/docs/Web/CSS/height), ou [`background-size`](/fr/docs/Web/CSS/background-size)
3. Sa taille par défaut, déterminée en fonction de la propriété avec laquelle l'image est utilisée (voir le tableau qui suit)

| Type d'objet (propriété CSS)                                                                                                                 | Taille par défaut de l'objet                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`background-image`](/fr/docs/Web/CSS/background-image)                                                                                      | La taille de la zone de positionnement de l'arrière-plan de l'élément                         |
| [`list-style-image`](/fr/docs/Web/CSS/list-style-image)                                                                                      | La taille d'un caractère en `1em`                                                             |
| [`border-image-source`](/fr/docs/Web/CSS/border-image-source)                                                                                | La taille de la zone de bordure de l'élément                                                  |
| [`cursor`](/fr/docs/Web/CSS/cursor)                                                                                                          | La taille définie par le navigateur qui correspond à la taille du curseur du système client   |
| [`mask-image`](/fr/docs/Web/CSS/mask-image)                                                                                                  | ?                                                                                             |
| [`shape-outside`](/fr/docs/Web/CSS/shape-outside)                                                                                            | ?                                                                                             |
| [`mask-border-source`](/fr/docs/Web/CSS/mask-border-source)                                                                                  | ?                                                                                             |
| [`symbols()`](/fr/docs/Web/CSS/symbols) pour [`@counter-style`](/fr/docs/Web/CSS/@counter-style)                                             | Fonctionnalité à risque. Si prise en charge, la taille est celle du curseur du système client |
| [`content`](/fr/docs/Web/CSS/content) pour un pseudo-élément ([`::after`](/fr/docs/Web/CSS/::after)/[`::before`](/fr/docs/Web/CSS/::before)) | Un rectangle de 300px par 150px                                                               |

La taille effective d'un objet est calculée avec l'algorithme suivant&nbsp;:

1. Si la taille indiquée définit _la largeur et la hauteur_, ces valeurs sont utilisées pour la taille effective de l'objet.
2. Si la taille indiquée définit _uniquement la largeur ou la hauteur_, la valeur manquante est déterminée à l'aide des proportions intrinsèques si elles existent, de la dimension intrinsèque correspondante si la valeur correspond ou de la taille par défaut de l'objet pour la valeur manquante.
3. Si la taille indiquée ne définit _ni la largeur, ni la hauteur_, la taille effective de l'objet est calculée afin de respecter les proportions intrinsèques de l'image sans dépasser la taille par défaut de l'objet sur aucun des deux axes. Si l'image n'a pas de proportions intrinsèques, ce sont celles de l'objet auquel elle s'applique qui sont utilisées et si l'objet n'en a pas non plus, la largeur ou la hauteur manquante est déterminée à partir de la taille par défaut de l'objet.

> **Note :** Tous les navigateurs ne prennent pas en charge tous les types d'image pour chaque propriété. Voir [le tableau de compatibilité](#compatibilité_des_navigateurs) pour plus de détails.

## Accessibilité

Les navigateurs ne fournissent pas d'informations particulières quant aux images d'arrière-plan pour les outils d'assistance. Cela est notamment important pour les lecteurs d'écran qui n'annonceront pas leur présence et ne véhiculeront pas d'informations à leur propos aux personnes. Si l'image contient des informations critiques pour la compréhension générale de la page, il faudra avoir une description sémantique dans le document.

- [Comprendre les règles WCAG, explications de la règle 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre le critère de réussite 1.1.1, dans le guide de compréhension des WCAG 2.0 du W3C (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Images valides

```css example-good
url(test.jpg)               /* Une valeur <url>, qui fonctionne bien si test.jpg est une image existante. */
linear-gradient(blue, red)  /* Un dégradé (type <gradient>). */
element(#idexistant)        /* Une partie d'une page web, référencée grâce à la fonction element(), qui
                               fonctionne bien si "idexistant" est un identifiant existant sur la page. */
image(ltr 'fleche.png#xywh=0,0,16,16', red)
                            /* Une section 16x16 d'une image commençant dans le coin supérieur gauche
                               de l'image originale arrow.png si celle-ci est prise en charge ou sinon
                               un damier rouge. Si la langue s'écrit de droit à gauche, l'image est
                               renversée horizontalement. */
cross-fade(20% url(vingt.png), url(quatrevingt.png))
                            /* Des images fusionnées, la première ayant une opacité à 20% et la seconde
                               une opacité de 80%. */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* Une sélection d'image avec des résolutions différentes. */
```

### Images invalides

```css example-bad
pasdurl.jpg         /* Un fichier d'image doit être défini à l'aide de la fonction url(). */
url(rapport.pdf)    /* Le fichier visé par la fonction url() doit être une image. */
element(#idfaux)    /* L'identifiant d'un élément doit correspondre à un identifiant existant. */
image(z.jpg#xy=0,0) /* Le fragment spatial doit être écrit selon le format xywh=#,#,#,#. */
image-set('chat.jpg' 1x, 'chien.jpg' 1x) /* Chaque image d'un ensemble doit avoir une résolution différente. */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type [`<gradient>`](/fr/docs/Web/CSS/gradient)
- [`element()`](/fr/docs/Web/CSS/element)
- [`image()`](/fr/docs/Web/CSS/image/image)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade).
