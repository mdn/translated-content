---
title: Booléen
slug: Glossary/Boolean
---

En informatique, un **booléen** est un type de données logique qui ne peut prendre que deux valeurs : `true` (vrai) ou `false` (faux). Par exemple, en JavaScript, les conditions booléennes sont souvent ouvertes pour décider quelle section de code doit être exécutée (comme dans l'[instruction If](/fr/docs/Web/JavaScript/Reference/Instructions/if...else)) ou répétée (comme pour une [boucle For](/fr/docs/Web/JavaScript/Reference/Instructions/for)).

```js
/* JavaScript instruction if */
if (boolean conditional) {
   // code à exécuter si la condition est true (vrai)
}

if (boolean conditional) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}


/* JavaScript boucle for */
for (control variable; boolean conditional; counter) {
  // code à exécuter répétitivement si la condition est vraie
}

for (var i=0; i < 4; i++) {
  console.log("I print only when the boolean conditional is true");
}
```

## Voir aussi

### Culture générale

- [Booléen](http://fr.wikipedia.org/wiki/Booléen) sur Wikipédia

### Informations techniques

- L'objet JavaScript global : {{jsxref("Boolean")}}
- [Structures de données JavaScript](/fr/docs/Web/JavaScript/Structures_de_données) sur MDN
