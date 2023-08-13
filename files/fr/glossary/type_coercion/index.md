---
title: Type coercion
slug: Glossary/Type_coercion
---

La _type coercion_ (en français, coercition de type) est la conversion automatique ou implicite de valeurs d'un type de données à un autre (par exemple : de string à nombre). La _{{Glossary("type conversion")}}_ est similaire à la _type coercion_ puisque les deux convertissent des valeurs d'un type de données à un autre. La différence fondamentale entre elles est que la _type coercion_ est implicite alors que la _type conversion_ peut être implicite ou explicite.

## Exemples

```js
const valeur1 = "5";
const valeur2 = 9;
let somme = valeur1 + valeur2;

console.log(somme);
```

Dans l'exemple ci-dessus, Javascript a _coercé_ le nombre `9` en une string, et a concaténé les deux valeurs, ce qui donne comme résultat la string `59`. JavaScript avait le choix entre une string et un nombre et a décidé d'utiliser une string.

Le compilateur aurait pu coercer le `5` en un nombre et retourner la somme de `14`, mais ce n'est pas ce qu'il a fait. Pour pouvoir retourner `14`, il aurait fallu explicitement convertir le 5 en un nombre grâce à la méthode {{jsxref("Global_Objects/Number", "Number()")}} :

```js
somme = Number(valeur1) + valeur2;
```

## Voir aussi

- {{Glossary("Type")}}
- {{Glossary("Type conversion")}}
- [Conversion de type](https://fr.wikipedia.org/wiki/Conversion_de_type) sur Wikipédia
