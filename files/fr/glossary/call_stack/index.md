---
title: Pile d'exécution (call stack)
slug: Glossary/Call_stack
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **pile d'exécution** est le mécanisme d'un interpréteur (comme l'interpréteur de JavaScript sur un navigateur web) pour conserver la trace de son emplacement dans un script qui appelle plusieurs {{Glossary("Function", "fonctions")}} depuis d'autres fonctions — quelle fonction est en cours d'exécution, quelles fonctions sont appelées depuis cette fonction et doivent être appelées ensuite, etc.

- Lorsqu'un script appelle une fonction, l'interpréteur ajoute sa position actuelle sur la pile d'exécution comme étant son adresse de retour, et ensuite, il se lance dans l'exécution de la fonction.
- Toutes les fonctions appelées par cette fonction sont ajoutées à la pile d'appels plus haut, et s'exécutent là où leurs appels sont atteints.
- Quand la fonction se termine, l'interpréteur récupère l'adresse de retour la plus récente depuis la pile et reprend l'exécution à partir de l'endroit indiqué par celle-ci.
- Si la pile est sollicitée au-delà de l'espace qui lui a été affecté, une erreur "dépassement de pile" se produit.

## Exemple

```js
function salutation() {
  // [1] Du code ici
  disBonjour();
  // [2] Du code ici
}
function disBonjour() {
  return "Bonjour !";
}

// Appel de la fonction `salutation`
salutation();

// [3] Du code ici
```

Au tout début, la pile d'exécution est vide, et le code ci-dessus s'exécute ainsi&nbsp;:

1. Ignorer toutes les fonctions jusqu'à atteindre l'appel à la fonction `salutation()`.
2. Ajouter la fonction `salutation()` à la pile d'exécution, ce qui donne&nbsp;:

   ```plain
   - salutation
   ```

3. Exécuter toutes les lignes de code à l'intérieur de la fonction `salutation()`.
4. Arriver à l'appel de la fonction `disBonjour()`.
5. Ajouter la fonction `disBonjour()` à la pile d'exécution, ce qui donne&nbsp;:

   ```plain
   - disBonjour
   - salutation
   ```

6. Exécuter toutes les lignes de code à l'intérieur de la fonction `disBonjour()`, jusqu'à la fin de celle-ci.
7. Revenir à la ligne qui a invoqué `disBonjour()` et continuer l'exécution du reste de la fonction `salutation()`.
8. Retirer la fonction `disBonjour()` de la pile d'exécution. La pile ressemble alors à&nbsp;:

   ```plain
   - salutation
   ```

9. Lorsque tout le code à l'intérieur de la fonction `salutation()` a été exécuté, revenir à la ligne qui l'a invoquée pour continuer l'exécution du reste du code JS.
10. Retirer la fonction `salutation()` de la pile d'exécution. La pile redevient alors vide.

En résumé, on commence avec une pile d'exécution vide. À chaque fois qu'une fonction est invoquée, elle est automatiquement ajoutée à la pile. Une fois que la fonction a exécuté tout son code, elle est automatiquement retirée de la pile. Finalement, la pile redevient vide.

## Voir aussi

- [Pile d'exécution](https://fr.wikipedia.org/wiki/Pile_d'exécution) sur Wikipédia
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Function", "Fonction")}}
