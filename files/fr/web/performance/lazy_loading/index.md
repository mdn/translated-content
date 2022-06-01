---
title: Le chargement différé
slug: Web/Performance/Lazy_loading
translation_of: Web/Performance/Lazy_loading
---
Le **chargement différé** (<i lang="en">lazy loading</i> en anglais) est une stratégie d'identification des ressources non bloquantes (non critiques) afin de ne les charger qu'au moment où elles sont utiles. C'est une façon de raccourcir le [chemin critique de rendu](/fr/docs/Web/Performance/Critical_rendering_path), ce qui se traduit par une réduction du temps de chargement de la page.

Le chargement différé peut se dérouler à plusieurs moments du chargement d'une application, mais il se déroule typiquement lorsque l'internaute interagit avec la page, notamment lors du défilement de la page ou de la navigation.

## Vue d'ensemble

Au fur et à mesure de l'évolution du web, nous avons vu une grande augmentation du nombre et de la taille des ressources servie aux internautes. Entre 2011 et 2019, le poids médian des ressources est passé de **\~10 Ko** à **\~40 Ko** sur ordinateur et de **\~5 Ko** à **\~35 Ko** sur mobile. Tandis que la taille médiane des images est passée de **\~25 Ko** à **\~90 Ko** sur ordinateur et de **\~10 Ko** à **\~85 Ko** sur mobile.

L'une des méthodes utilisables pour s'occuper de ce problème consiste à réduire la longueur du [chemin critique de rendu](/fr/docs/Web/Performance/Critical_rendering_path) en chargeant les ressources de façon différée lors du premier rendu de la page. Exemple concret : lorsque vous arrivez sur la page d'accueil d'une boutique en ligne disposant d'un lien vers la section « panier », il est plus optimal de ne charger ses ressources que lorsque vous naviguerez vers cette section.

## Stratégies

Le chargement différé peut être appliqué sur de multiples ressources et avec de multiples stratégies.

### En général

#### Division du code

Le code JavaScript, CSS et HTML peuvent être divisés en petits morceaux. Cela permet de n'envoyer que la portion de code nécessaire à l'affichage sur l'écran de l'internaute, et donc d'améliorer les temps de chargement. Le reste sera chargé sur demande. Deux systèmes sont possibles&nbsp;:

- division par points d'entrée&nbsp;: séparation du code en différents points d'entrée au sein de l'application&nbsp;;
- division dynamique&nbsp;: séparation du code où des déclarations [`import()`](/fr/docs/Web/JavaScript/Reference/Statements/import) dynamiques sont utilisées.

### JavaScript

#### Script de type module

Toute balise `<script>` utilisant `type="module"` sera traitée comme un [module JavaScript](/fr/docs/Web/JavaScript/Guide/Modules) et son chargement sera différé par défaut.

### CSS

Par défaut, les fichiers CSS sont traités comme des ressources [bloquant le rendu](/fr/docs/Web/Performance/Critical_rendering_path), donc le navigateur n'affichera aucun contenu traité tant que le [CSSOM (pour <i lang="en">CSS Object Model</i>)](/fr/docs/Web/API/CSS_Object_Model) est construit. Les fichiers CSS doivent être légers, délivrés aussi rapidement que possible, et l'utilisation des types de médias et des requêtes média est conseillé pour ne pas bloquer le rendu&nbsp;:

```html
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```

Pour cela, il est possible de réaliser certaines [optimisations CSS](/fr/docs/Learn/Performance/CSS).

### Polices

Par défaut, les requêtes d'affichage des polices sont différées jusqu'à ce que l'arbre de rendu soit construit, ce qui peut conduire à un délai d'affichage du texte.

Il est possible de surcharger le comportement par défaut et de précharger les polices web en utilisant `<link rel="preload">`, la [propriété CSS `font-display`](/fr/docs/Web/CSS/@font-face/font-display) et the [l'API de chargement des polices](/fr/docs/Web/API/CSS_Font_Loading_API).

Voir aussi [la documentation de l'élément `Link`](/fr/docs/Web/HTML/Element/link)

### Images et iframes

Très souvent, les pages web contiennent beaucoup d'images et cela contribue à la quantité de données chargées et donc à la vitesse de chargement de la page. La plupart de ces images sont généralement en dehors de l'écran (ces ressources sont alors considérées comme étant [non critiques](/fr/docs/Web/Performance/Critical_rendering_path)), car elles nécessitent une interaction de l'internaute (par exemple le faire de défiler dans la page) avant de les voir.

#### Attribut loading

L'attribut [`loading`](/fr/docs/Web/HTML/Element/Img#attr-loading) utilisé sur un élément [`<img>`](/fr/docs/Web/HTML/Element/Img) (ou sur un élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)) peut être utilisé pour demander au navigateur de différer le chargement des images et des iframes qui se situent en dehors de la zone affichée à l'écran, jusqu'à ce que la personne visitant le site ne les affiche en faisant défiler la page.

```html
<img src="image.jpg" alt="..." loading="lazy">
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

L'événement `load` se déclenche lorsque que le contenu le plus rapide a entièrement été chargé. À ce moment-là, il est complètement possible (et même probable) que des images utilisant le chargement différé, situées dans la [zone visible de l'écran](/fr/docs/Glossary/Visual_Viewport) n'aient pas encore été chargées.

Vous pouvez déterminer si une image donnée a terminé son chargement en examinant la valeur de la valeur booléenne de sa propriété [`complete`](/fr/docs/Web/API/HTMLImageElement/complete).

#### Polyfill

Pour ajouter la prise en charge de l'attribut `loading` sur les vieux navigateurs qui ne sont pas compatibles, vous pouvez utiliser le polyfill suivant&nbsp;: [loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill)

#### API Intersection Observer

[L'API Intersection Observers](/fr/docs/Web/API/IntersectionObserver) permet à l'internaute de savoir si un élément suivi est entré ou est déjà dans la zone d'affichage.

#### Gestionnaires d'évènements

Lorsque la compatibilité navigateur est cruciale, vous pouvez utiliser ces quelques options&nbsp;:

- [polyfill pour l'API <i lang="en">Intersection observer</i>](https://github.com/w3c/IntersectionObserver)

  <i lang="en">Intersection observer</i>

- Utilisés en tant que solution de contournement pour le défilement, les gestionnaires de redimensionnement ou de changement d'orientation peuvent déterminer si un élément spécifique se trouve dans la zone d'affichage ou non.

## Spécifications

| **Spécification**                                                        | **Statut**                       | **Commentaires** |
| ------------------------------------------------------------------------ | -------------------------------- | ---------------- |
| {{SpecName('HTML WHATWG', "#lazy-loading-attributes")}} | {{Spec2('HTML WHATWG')}} |                  |

## Voir aussi

- [CSS bloquant le rendu (en anglais)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [Optimiser le chargement et le rendu (en anglais)](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#optimizing_loading_and_rendering)
- [Chargement différé des images et des vidéos (en anglais)](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
