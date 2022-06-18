---
title: Chaîne de caractères binaire
slug: conflicting/Web/API/btoa
tags:
  - Chaînes de caractères
  - JavaScript
  - binaire
  - données
translation_of: Web/API/DOMString/Binary
original_slug: Web/API/DOMString/Binary
---
En termes simples, une chaîne de caractères binaire est une séquence de 1 et de 0. JavaScript est chargé de riches fonctionnalités pour manipuler des données binaires brutes au niveau inférieur.

Au fur et à mesure que les applications Web deviennent de plus en plus puissantes, ajoutant des fonctionnalités telles que la manipulation d'audio et de vidéo, l'accès aux données brutes à l'aide de WebSockets, etc., il apparaît clairement parfois que le code JavaScript peut être utile pour manipuler rapidement et facilement des données binaires brutes. Dans le passé, cela devait être simulé en traitant les données brutes [string](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) (_chaîne de caractères_) et en utilisant la méthode [`charCodeAt()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charCodeAt) pour lire les octets à partir des tampons de données.

Cependant, ceci est lent et sujet aux erreurs, en raison du besoin de conversions multiples (en particulier si les données binaires ne sont pas réellement des données au format octet, mais, par exemple, des entiers ou des flottants de 32 bits).

[Un tableau typé en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s) fournit un mécanisme pour accèder aux données brutes binaires beaucoup plus efficacement. Le constructeur [`StringView`](/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s) Non native est un niveau au-dessus des tableaux typés et fournit une interface de type [C](<https://fr.wikipedia.org/wiki/C_(langage)>) pour les chaînes de caractères.

## Voir aussi

- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s)
- [Opérateurs binaires](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_binaires)
- [`DOMString`](/fr/docs/Web/API/DOMString)
- [String](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)
- [`StringView`](/fr/docs/Archive/Add-ons/Code_snippets/StringView)
