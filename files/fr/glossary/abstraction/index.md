---
title: Abstraction
slug: Glossary/Abstraction
tags:
  - Abstraction
  - Codage
  - Code
  - Encodage
  - Glossaire
  - Langage de programmation
translation_of: Glossary/Abstraction
original_slug: Glossaire/Abstraction
---
L'_Abstraction_ dans le domaine de la {{Glossary("Computer programming","programmation informatique")}} permet de réduire la complexité et d'obtenir une conception et une implémentation plus efficaces dans les systèmes logiciels complexes. Elle dissimule les complexités techniques des systèmes derrière des {{Glossary("API")}} plus simples à manipuler.

## Avantages de l'abstraction de données

- Aider l'utilisatrice ou l'utilisateur à éviter d'écrire du code de bas niveau.
- Éviter la duplication de code et augmenter la réutilisabilité.
- Pouvoir modifier l'implémentation interne de la classe indépendamment sans que l'utilisateur soit affecté.
- Aider à augmenter la sécurité d'une application ou d'un programme car seuls les détails importants sont fournis à l'utilisatrice ou l'utilisateur.

## Exemple

```js
class ImplementAbstraction {
  // method to set values of internal members
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

- [Abstraction](https://fr.wikipedia.org/wiki/Abstraction_(informatique)) sur Wikipédia.
