---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{JSRef}}

La méthode **`test()`** vérifie s'il y a une correspondance entre un texte et une expression rationnelle. Elle retourne `true` en cas de succès et `false` dans le cas contraire.

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntaxe

```js
regexObj.test(chaîne);
```

### Paramètres

- `chaîne`
  - : La chaîne de caractères qu'on souhaite comparer à l'expression rationnelle.

### Valeur de retour

Un booléen : `true` ou `false` selon qu'une correspondance a été trouvée entre la chaîne de caractères et la chaîne passée en argument.

## Description

On utilisera `test()` dès qu'on souhaite savoir si une partie d'une chaîne de caractères correspond à une expression rationnelle (similaire à la méthode {{jsxref("String.prototype.search()")}}). Pour obtenir plus d'informations (mais une exécution moins rapide), on utilisera la méthode {{jsxref("RegExp.prototype.exec()", "exec()")}} (similaire à la méthode {{jsxref("String.prototype.match()")}}). Comme avec {{jsxref("RegExp.prototype.exec()", "exec()")}} (et même en combinant les deux), des appels successifs à `test()` sur une même instance d'une expression rationnelle permettent de rechercher après la dernière occurence. Cette méthode est différente de `search` car elle renvoie un booléen et non la position de la correspondance si elle est trouvée (ou `-1` sinon).

## Exemples

### Utiliser `test()`

Voici un exemple simple qui illustre comment détecter si la chaîne `coucou` est contenue au début d'une chaîne :

```js
const chaine = "coucou le monde !";
const resultat = /^coucou/.test(chaine);
console.log(resultat); // true
```

L'exemple ci-dessous affiche un message qui dépend du succès du test :

```js
function testinput(regex, chaine) {
  var midstring;
  if (regex.test(chaine)) {
    midstring = " contient ";
  } else {
    midstring = " ne contient pas ";
  }
  console.log(str + midstring + re.source);
}

testinput(/^coucou/, "coucou le monde"); // coucou le monde contient coucou
testinput(/^coucou/, "salut le monde"); // salut le monde ne contient pas coucou
```

### Utiliser `test()` avec le marqueur global (`/g`)

Si l'expression rationnelle utilise le marqueur global (`g`), la méthode `test()` avancera la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} associée à l'expression rationnelle. Ainsi, si on utilise `test()` ensuite, la recherche commencera à partir de la nouvelle valeur de `lastIndex` (de même {{jsxref("RegExp.prototype.exec()","exec()")}} fera également avancer la propriété `lastIndex`). On notera que la propriété `lastIndex` ne sera pas réinitialisée si la recherche est effectuée sur une autre chaîne de caractères.

```js
var regex = /toto/g;

// regex.lastIndex se situe à 0
regex.test("toto"); // true

// regex.lastIndex se situe désormais à 4
regex.test("toto"); // false
```

Avec le même mécanisme, on peut utiliser une boucle pour compter le nombre de mots contenus dans une chaîne de caractères

```js
function compterMots(texte) {
  for (var regex = /\w+/g, nbMots = 0; regex.test(texte); nbMots++);
  return nbMots;
}

console.log(compterMots("Ah que coucou Bob")); // 4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le chapitre sur [les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières) du [guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
