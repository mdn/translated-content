---
title: Abstraction
slug: Glossary/Abstraction
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

L'**abstraction** dans le domaine de la [programmation informatique](/fr/docs/Glossary/Computer_Programming) permet de réduire la complexité et d'obtenir une conception et une implémentation plus efficaces dans les systèmes logiciels complexes. Elle dissimule les complexités techniques des systèmes derrière des [API](/fr/docs/Glossary/API) plus simples à manipuler.

## Avantages de l'abstraction de données

- Éviter d'écrire du code de bas niveau.
- Éviter la duplication de code et augmenter la réutilisabilité.
- Pouvoir modifier l'implémentation interne d'une classe objet, sans affecter les personnes ou codes qui l'utilisent.
- Améliorer la sécurité d'une application ou d'un programme en exposant uniquement les détails importants pour l'usage.

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

- [Abstraction](<https://fr.wikipedia.org/wiki/Abstraction_(informatique)>) sur Wikipédia
