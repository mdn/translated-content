---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/search
original_slug: Web/JavaScript/Reference/Objets_globaux/String/search
---
{{JSRef}}

La méthode **`search()`** éxecute une recherche dans une chaine de caractères grâce à une expression rationnelle appliquée sur la chaîne courante.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntaxe

```js
str.search(regexp)
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

| Spécification                                                                                                | État                         | Commentaires                                         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.4.12', 'String.prototype.search')}}                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-string.prototype.search', 'String.prototype.search')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.search")}}

## Notes spécifiques à Gecko

- `flags` était un second argument non standard présent uniquement sur Gecko : _str_.search(_regexp, flags_)
- Avant {{Gecko("8.0")}}, `search()` n'était pas implémenté correctement ; quand il était appelé sans paramètre ou avec {{jsxref("undefined")}}, la recherche validait la chaine de caractères "undefined", au lieu de valider une chaine de caractères vide. Cela a été corrigé ; désormais, `"a".search()` et `"a".search(undefined)` renvoient bien 0.
- À partir de Gecko 39 {{geckoRelease(39)}}, les arguments non-standards (`flags`) pour les drapeaux sont dépréciés et déclenchent des avertissements dans la console ({{bug(1142351)}}). Cette propriété est spécifique à Gecko et sera retirée à l'avenir.
- À partir de Gecko 47 {{geckoRelease(47)}}, l'argument non-standard `flags` n'est plus supporté dans les versions hors _release_ et sera bientôt retiré définitivement ({{bug(1245801)}}).
- À partir de Gecko 49 {{geckoRelease(49)}}, l'argument non-standard `flags` n'est plus pris en charge ({{bug(1108382)}}).

## Voir aussi

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
