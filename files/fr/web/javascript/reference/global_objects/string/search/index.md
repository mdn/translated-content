---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

La méthode **`search()`** éxecute une recherche dans une chaine de caractères grâce à une expression rationnelle appliquée sur la chaîne courante.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntaxe

```js
str.search(regexp);
```

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle. Si l'objet passé n'est pas un objet d'expression régulière, il est directement converti en une instance de {{jsxref("RegExp")}} en utilisant `new RegExp(obj)`.

### Valeur de retour

Si la recherche aboutit, `search()` renvoie un entier qui correspond à l'indice de la première correspondance trouvée dans la chaîne. Si rien n'est trouvé, la méthode renvoie `-1`.

## Description

Si la recherche est positive, `search()` renvoie l'indice de la première correspondance pour l'expression rationnelle au sein de la chaine de caractères. Sinon, la méthode renvoie -1.

Si on souhaite savoir si un motif est trouvé dans une chaine de caractères, on utilisera cette méthode (semblable à la méthode {{jsxref("RegExp.prototype.test", "test()")}}) du prototype de `RegExp` ; pour plus d'informations (mais une éxecution plus lente), on utilisera {{jsxref("String.prototype.match", "match()")}} (semblable à la méthode {{jsxref("RegExp.prototype.exec", "exec()")}} pour les expressions rationnelles). La méthode `test` est semblable mais renvoie uniquement un booléen indiquant si une correspondance a été trouvée.

## Exemples

Dans l'exemple suivant, on utilise une chaîne de caractères pour laquelle on applique deux expressions rationnelles (la première permet d'obtenir une correspondance et la seconde n'en trouve aucune).

```js
var maChaine = "CoucOu";
var regex1 = /[A-Z]/g;
var regex2 = /[.]/g;

console.log(maChaine.search(regex1)); // Renvoie 0, la position de la première majuscule
console.log(maChaine.search(regex2)); // Renvoie -1 car il n'y a aucun point dans la chaîne
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
