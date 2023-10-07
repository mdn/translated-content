---
title: Abstraction
slug: Glossary/Abstraction
l10n:
  sourceCommit: 69df5ac5749504dee7b92d825e913c1a9d0956f1
---

L'_abstraction_ dans le domaine de la [programmation informatique](/fr/docs/Glossary/Computer_programming) permet de réduire la complexité et d'obtenir une conception et une implémentation plus efficaces dans les systèmes logiciels complexes. Elle dissimule les complexités techniques des systèmes derrière des [API](/fr/docs/Glossary/API) plus simples à manipuler.

## Avantages de l'abstraction de données

- Aider l'utilisatrice ou l'utilisateur à éviter d'écrire du code de bas niveau.
- Éviter la duplication de code et augmenter la réutilisabilité.
- Pouvoir modifier l'implémentation interne de la classe indépendamment sans affecter l'utilisatrice ou l'utilisateur.
- Aider à augmenter la sécurité d'une application ou d'un programme car seuls les détails importants sont fournis à l'utilisatrice ou l'utilisateur.

## Exemple

```js
class ImplementAbstraction {
  // méthode pour affecter des valeurs aux membres internes
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## Voir aussi

- [Abstraction](<https://fr.wikipedia.org/wiki/Abstraction_(informatique)>) sur Wikipédia.
