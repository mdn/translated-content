---
title: Préfixe Fournisseur (Vendor Prefix)
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Les fournisseurs de navigateurs ajoutent des préfixes aux propriétés CSS expérimentales ou non standard et aux API JavaScript, afin que les développeur·euse·s puissent expérimenter de nouvelles idées. Cela, en théorie, aide à empêcher que leurs expérimentations soient prises comme référence et finissent par casser le code des développeur·euse·s Web pendant le processus de normalisation.

Les développeur·euse·s Web incluent des fonctionnalités préfixées sur des sites Web de production, malgré leur caractère expérimental. Cela rend plus difficile pour les fournisseurs de navigateurs d'assurer la compatibilité lorsqu'ils travaillent sur de nouvelles fonctionnalités. L'inclusion de fonctionnalités préfixées nuit aussi aux petits fournisseurs de navigateurs, qui se retrouvent à devoir ajouter les préfixes d'autres navigateurs pour afficher des sites populaires.

Désormais, les fonctionnalités expérimentales des navigateurs sont «&nbsp;placées derrière un drapeau&nbsp;». Cela permet aux développeur·euse·s de modifier la configuration du navigateur pour tester des fonctionnalités à venir. Les navigateurs ajoutent désormais les fonctionnalités expérimentales derrière des indicateurs ou préférences contrôlés par l'utilisateur·ice. Des drapeaux peuvent être ajoutés pour de petites spécifications, permettant d'atteindre un état stable beaucoup plus rapidement.

## CSS préfixes

En général, les principaux navigateurs utilisent ces préfixes&nbsp;:

- `-webkit-` (Chrome, Safari, nouvelles versions d'Opera et d'Edge, presque tous les navigateurs iOS (y compris Firefox pour iOS)&nbsp;; essentiellement, tout navigateur basé sur WebKit ou Chromium)
- `-moz-` (Firefox)
- `-o-` (anciennes versions d'Opera)
- `-ms-` (Internet Explorer et Microsoft Edge, avant Chromium)

Exemple d'utilisation&nbsp;:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

Si vous rencontrez le code ci-dessus dans une base de code, vous pouvez supprimer sans risque toutes les lignes sauf la dernière. Tous les navigateurs prennent en charge les [transitions](/fr/docs/Web/CSS/Reference/Properties/transition#compatibilité_des_navigateurs) sans préfixes fournisseurs&nbsp;:

```css
transition: all 4s ease;
```

## Préxixes des API

Historiquement, les fournisseurs ont également utilisé des préfixes pour les API expérimentales. Si une interface entière est expérimentale, alors le nom de l'interface est préfixé (mais pas les propriétés ou méthodes à l'intérieur). Si une propriété ou une méthode expérimentale est ajoutée à une interface normalisée, la méthode ou la propriété individuelle est préfixée.

### Préfixes d'interfaces

Les préfixes pour les noms d'interface sont en majuscules&nbsp;:

- `Webkit` (Chrome, Safari, nouvelles versions d'Opera et d'Edge, presque tous les navigateurs iOS (y compris Firefox pour iOS)&nbsp;; essentiellement, tout navigateur basé sur WebKit ou Chromium)
- `O` (anciennes versions d'Opera)
- `MS` (Internet Explorer et Microsoft Edge, avant Chromium)

### Préfixes des propriétés et méthodes

Quant aux propriétés et aux méthodes, sont généralement utilisés&nbsp;:

- `webkit` (Chrome, Safari, nouvelles versions d'Opera et d'Edge, presque tous les navigateurs iOS (y compris Firefox pour iOS)&nbsp;; essentiellement, tout navigateur basé sur WebKit ou Chromium)
- `moz` (Firefox)
- `o` (anciennes versions d'Opera)
- `ms` (Internet Explorer et Microsoft Edge, avant Chromium)

Exemple d'utilisation&nbsp;:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

Si vous rencontrez le code ci-dessus dans une base de code, vous pouvez supprimer sans risque toutes les lignes sauf la première. Tous les navigateurs prennent en charge [`requestAnimationFrame`](/fr/docs/Web/API/Window/requestAnimationFrame#compatibilité_des_navigateurs) sans préfixes fournisseurs, et sans `window`&nbsp;:

```js
requestAnimationFrame(callback);
```

## Voir aussi

- [Extensions CSS préfixées `-moz-` par le fournisseur](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- [Extensions CSS préfixées `-webkit-` par le fournisseur](/fr/docs/Web/CSS/Reference/Webkit_extensions)
- [Les préfixes des navigateurs <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) sur Wikipédia
