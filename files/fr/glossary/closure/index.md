---
title: Fermeture (closure)
slug: Glossary/Closure
l10n:
  sourceCommit: f2497dd4077c67b7832a466868fd5c828df40ec1
---

En programmation informatique, une **fermeture** est une technique permettant d'implémenter une liaison de nom lexicalement {{Glossary("scope", "portée")}} dans un langage avec des {{Glossary("first-class function", "fonctions de première classe")}}.

Dans {{Glossary("JavaScript")}}, une {{Glossary("function", "fonction")}} crée un contexte de fermeture.
Comme le montre le code suivant, la fonction interne conserve l'accès à la variable `compte` même après l'exécution de `creerCompteur()`.

```js
function creerCompteur() {
  let compte = 0;
  return function () {
    compte += 1;
    return compte;
  };
}

const compteur = creerCompteur();
console.log(compteur()); // 1
console.log(compteur()); // 2
console.log(compteur()); // 3
```

## Voir aussi

- [Fermeture en JavaScript](/fr/docs/Web/JavaScript/Guide/Closures)
- [Fermeture](<https://fr.wikipedia.org/wiki/Fermeture_(informatique)>) sur Wikipédia
