---
title: Utiliser un correcteur orthographique externe
slug: Mozilla/Firefox/Releases/3/Using_an_external_spell_checker
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Depuis Firefox 3 (ainsi que Thunderbird 3 et SeaMonkey 2), vous pouvez maintenant installer un correcteur orthographique externe en utilisant une extension.

Ce n'est _pas_ pour les extensions qui souhaitent ajouter un dictionnaire au correcteur orthographique intégré Hunspell.

Un [exemple <sup>(angl.)</sup>](https://sourceforge.net/projects/voikko/) d'extension de correcteur orthographique peut être trouvé dans le cadre du projet [Voikko <sup>(angl.)</sup>](https://voikko.puimula.org/).

## Implémenter la prise en charge du correcteur orthographique

La mise en œuvre d'un correcteur orthographique nécessite les étapes suivantes&nbsp;:

1. Implémentez une classe dérivée de `mozISpellCheckingEngine` qui implémente les fonctionnalités requises ou accède à un correcteur orthographique externe.
2. La méthode `mozISpellCheckingEngine.getDictionaryList()` de `mozISpellCheckingEngine` doit être implémentée pour retourner une liste de dictionnaires pris en charge par le correcteur orthographique.
3. L'extension doit fournir un rappel d'enregistrement. Le rappel d'enregistrement doit utiliser `nsICategoryManager` pour installer dans la catégorie "spell-check-engine" une entrée avec un nom égal à l'ID de contrat de la classe implémentant la fonctionnalité de correction orthographique.
4. L'extension doit également fournir un rappel de désenregistrement, qui doit supprimer l'entrée de la catégorie.

La valeur de l'entrée de la catégorie peut être choisie comme souhaité. Vous pouvez, par exemple, choisir de l'utiliser pour enregistrer le chemin vers la bibliothèque partagée utilisée par l'extension pour gérer la correction orthographique, afin de faciliter sa localisation par d'autres composants de l'extension.

## Priorité des dictionnaires de correction orthographique

Les dictionnaires fournis par les extensions de correction orthographique remplacent les dictionnaires intégrés. Si plusieurs extensions fournissent des dictionnaires pour la même langue, le premier trouvé est utilisé.
