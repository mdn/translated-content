---
title: ARIA
slug: Web/Accessibility/ARIA
tags:
  - ARIA
  - Accessibilité
  - Applications
  - Web
translation_of: Web/Accessibility/ARIA
original_slug: Accessibilité/ARIA
---
_Accessible Rich Internet Applications_ **(ARIA)** (qu'on pourrait traduire par « applications internet riches et accessibles ») sont un ensemble d'attributs qui définissent comment rendre le contenu et les applications web accessibles.

ARIA complète HTML afin que les éléments interactifs et les widgets puissent être utilisés par les outils d'assistance quand les fonctionnalités standard ne le permettent pas. Ainsi, ARIA permet de rendre accessible les _widgets_ JavaScript, les indications dans les formulaires, les messages d'erreur et les mises à jour dynamiques du contenu, etc.

> **Attention :** La plupart de ces _widgets_ ont été intégrés au sein d'HTML5 et mieux vaudra donc utiliser les éléments « sémantiques » HTML lorsqu'ils sont disponibles. Ainsi, les éléments natifs disposent de fonctionnalités [de navigation au clavier](/fr/docs/Contrôles_DHTML_personnalisés_navigables_au_clavier), de rôles et d'états définis en standard. Toutefois, lorsque vous choisissez d'utiliser ARIA, il vous revient de recoder les fonctionnalités équivalentes dans vos scripts.

Voici un _widget_ utilisé pour une barre de progression :

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100" />
```

Cette barre de progression utilise un élément `<div>` qui n'a pas de sémantique forte. Malheureusement, HTML 4 ne possède pas d'élément natif avec la sémantique nécessaire et on doit donc inclure les rôles et propriétés ARIA. Ici, l'attribut `role="progressbar"` indique au navigateur qu'il s'agit d'une barre de progression mise à jour en JavaScript. Les attributs `aria-valuemin` et `aria-valuemax` indiquent les valeurs minimales et maximales pour cette barre tandis que `aria-valuenow` décrit l'état actuel de la barre et cette valeur doit être mise à jour par le code JavaScript.

En plus des déclarations _statiques_ dans le contenu HTML, les attributs ARIA peuvent être ajoutés aux éléments et être mis à jour grâce à JavaScript :

```js
// Trouver la barre de progression <div> dans le DOM.
 var progressBar = document.getElementById("percent-loaded");

// Définir les rôles et les états ARIA
// afin que les technologies d'assistance puissent les
// identifier/exploiter correctement
 progressBar.setAttribute("role", "progressbar");
 progressBar.setAttribute("aria-valuemin", 0);
 progressBar.setAttribute("aria-valuemax", 100);

// Créer une fonction qui peut être appelée à tout moment
// pour mettre à jour la valeur de la barre de progression
 function updateProgress(percentComplete) {
   progressBar.setAttribute("aria-valuenow", percentComplete);
 }
```

> **Note :** ARIA a été inventé après HTML4 et ne valide pas HTML4 ou les variantes XHTML. Toutefois, les gains d'accessibilité l'emportent sur cette invalidité.
>
> En HTML5, tous les attributs ARIA sont valides. Les nouveaux éléments de navigation (`<main>`, `<header>`, `<nav>` etc.) possèdent des rôles ARIA natifs et il n'est pas nécessaire de les dupliquer.

## Prise en charge

À l'instar des autres technologies web, la prise en charge d'ARIA est plus ou moins hétérogène parmi les différents navigateurs. La prise en charge d'ARIA repose à la fois sur le navigateur, sur le système d'exploitation sous-jacent et sur la technologie d'assistance utilisée. Certaines versions antérieures de logiciels pourront ne pas prendre en charge (ou que partiellement) certains rôles ARIA.

On notera également que certaines personnes qui utilisent des outils d'assistance hésitent à mettre à jour leurs logiciels de peur de perdre les fonctionnalités liées à l'ordinateur et au navigateur. Pour ces raisons, mieux vaudra [utiliser des éléments HTML « sémantiques »](/fr/docs/Apprendre/a11y/HTML) dès que possible car cela maximisera la prise en charge des technologies d'assistance.

Il est aussi important de tester l'ARIA écrit avec des technologies d'assistance réelles. Bien qu'il existe certains émulateurs et simulateurs, rien ne vaut un test réel afin d'obtenir suffisamment de garanties.

## Tutoriels

- [Introduction à ARIA](/fr/docs/Accessibilité/Aperçu_d_applications_Web_et_de_composants_dynamiques_accessibles)
  - : Une rapide introduction à ARIA pour rendre accessible le contenu dynamique. Voir aussi [l'introduction à ARIA de Gez Lemon](https://dev.opera.com/articles/introduction-to-wai-aria/) en 2008
- [Vidéos de lecteurs d'écran utilisant ARIA](https://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : Des exemples concrets et d'autres simplifiés avec des vidéos comparatives entre l'état « avant ARIA » et « après ARIA ».
- [Utiliser ARIA](https://w3c.github.io/using-aria/)
  - : Un guide pratique pour les développeurs qui fournit également des suggestions quant aux attributs ARIA à utiliser sur les éléments HTML sur la base d'implémentations concrètes.

## Améliorations légères avec ARIA

- [Améliorer la navigation avec les balises (_landmarks_) ARIA](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : Une introduction à l'utilisation des balises ARIA afin d'améliorer la navigation au sein d'une page web pour les utilisateurs de lecteur d'écran. [Voir aussi les notes d'implémentation pour les balises ARIA](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) (mis à jour en juillet 2011).
- [Améliorer l'accessibilité des formulaires](/fr/docs/Accessibilité/ARIA/formulaires)
  - : ARIA ne se limite pas au contenu dynamique ! Apprenez comment améliorer l'accessibilité des formulaires HTML grâce aux attributs ARIA.

## ARIA pour les _widgets_ scriptés

- [Concevoir des _widgets_ JavaScript navigables au clavier](/fr/docs/Contrôles_DHTML_personnalisés_navigables_au_clavier)
  - : Les éléments tels que `<input>`, `<button>` disposent de fonctionnalités natives pour l'utilisation au clavier. Si on triche en utilisant des `<div>` et ARIA, on doit s'assurer que l'accessibilité au clavier soit préservée.
- [Régions dynamiques](/fr/docs/Accessibilité/ARIA/Zones_live_ARIA) (_live regions_)
  - : Les régions dynamiques fournissent des suggestion aux lecteurs d'écran sur la façon dont gérer la modification du contenu d'une page.
- [Utiliser les régions dynamiques ARIA afin d'indiquer une modification de contenu](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm)
  - : Un rapide résumé des régions interactives par les concepteurs du lecteur d'écran JAWS. Les régions dynamiques sont également prises en charge par NVDA pour Firefox et par VoiceOver avec Safari.

## Processus de standardisation

- [La spécification WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/)
  - : La spécification rédigée par le W3C.
- [Bonnes pratiques afin d'écrire avec WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : Les documents officiels décrivant les meilleurs pratiques pour appliquer ARIA aux _widgets_ et aux mécanismes interactifs.

## Videos

[ARIA, les API pour l'accessibilité : coder comme si ça vous intéressait ! de Léonie Watson (en anglais)](https://www.youtube.com/watch?v=qdB8SRhqvFc)

## Rapporter des bogues

[Rapporter des bogues d'accessibilté/ARIA sur les navigateurs, les lecteurs d'écran et les bibliothèques JavaScript.](/fr/docs/Accessibilité/ARIA/Comment_deposer_un_bug_lie_a_ARIA)

## Voir aussi

- [Accessibilité](/fr/docs/Web/Accessibilité)
- [AJAX](/fr/docs/Web/Guide/AJAX)
- [JavaScript](/fr/docs/Web/JavaScript)
- [Accessibilité et Mozilla](/fr/docs/Mozilla/Accessibility)
