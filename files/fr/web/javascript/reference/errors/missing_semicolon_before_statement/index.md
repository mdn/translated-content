---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Expected ';' (Edge)
SyntaxError: missing ; before statement (Firefox)
```

## Type d'erreur

{{jsxref("SyntaxError")}}.

## Quel est le problème ?

Un point-virgule est absent quelque part. En JavaScript, [les instructions doivent se terminer par des points-virgules](/fr/docs/Web/JavaScript/Reference/Instructions). Certaines de ces instructions sont traitées par [l'insertion automatique de point-virgule (_ASI_ pour _Automatic Semicolon Insertion)_](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Insertion_automatique_de_points-virgules), mais pour le code qui provoque l'erreur, un point-virgule est nécessaire afin que le moteur JavaScript puisse analyser le code source correctement.

La plupart du temps, cette erreur est la conséquence d'une autre erreur : ne pas « fermer » les chaînes de caractères correctement ou utiliser `var` de façon incorrecte. Il peut également y avoir trop de parenthèses à un endroit. Lorsque cette erreur apparaît, faites attention à la syntaxe du code environnant.

## Exemples

### Les chaînes laissées ouvertes

Cette erreur est parfois simplement provoquée par une chaîne dont les quotes ne sont pas échappées correctement ou qui ne sont pas correctement délimitées. Le moteur JavaScript s'attend donc à trouver la fin de la chaîne. Par exemple :

```js example-bad
var toto = 'Ouvrir l'œil';
// SyntaxError: missing ; before statement
```

Pour éviter cela, on pourra utiliser des doubles quotes ou échapper l'apostrophe :

```js example-good
var toto = "Ouvrir l'œil";
var toto = "Ouvrir l'œil";
```

### Déclarer des propriétés avec `var`

On **ne peut pas** déclarer de propriétés sur un objet ou un tableau avec une déclaration `var`.

```js example-bad
var obj = {};
var obj.toto = "coucou"; // SyntaxError missing ; before statement

var array = [];
var array[0] = "monde"; // SyntaxError missing ; before statement
```

Pour éviter cela, on n'utilisera pas le mot-clé `var` qui est inutile dans ces cas :

```js example-good
var obj = {};
obj.toto = "coucou";

var array = [];
array[0] = "monde";
```

### Mauvais mots-clés

Il peut arriver, notamment lorsqu'on provient d'un autre langage de programmation, d'utiliser des mots-clés qui n'ont pas du tout le même sens en JavaScript :

```js example-bad
def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement
```

À la place de `def`, on utilisera le mot-clé `function` :

```js example-good
function print(info) {
  console.log(info);
}
```

## Voir aussi

- [L'insertion automatique de points-virgules](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Insertion_automatique_de_points-virgules)
- [Les instructions JavaScript](/fr/docs/Web/JavaScript/Reference/Instructions)
