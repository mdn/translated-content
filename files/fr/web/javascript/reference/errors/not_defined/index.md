---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
tags:
  - Erreur
  - JavaScript
  - Reference
  - ReferenceError
translation_of: Web/JavaScript/Reference/Errors/Not_defined
original_slug: Web/JavaScript/Reference/Erreurs/Not_defined
---
{{jsSidebar("Errors")}}

## Message

    ReferenceError: "x" is not defined

## Type d'erreur

{{jsxref("ReferenceError")}}.

## Quel est le problème ?

Une variable qui n'existe pas est référencée quelque part. Cette variable doit être déclarée ou il faut vérifier qu'elle est disponible dans le script concerné ou dans la portée utilisée.

> **Note :** Lors du chargement d'une bibliothèque comme jQuery, assurez-vous de bien charger la bibliothèque avant d'accéder aux variables comme `$`. La balise {{HTMLElement("script")}} utilisée pour charger la bibliothèque doit être présente avant le code qui l'utilise.

## Exemples

### Exemple de variable non déclarée

```js example-bad
toto.substring(1); // ReferenceError: toto is not defined
```

La variable `toto` n'est définie nulle part. De plus, il faut qu'elle soit une chaîne de caractères afin que la méthode {{jsxref("String.prototype.substring()")}} puisse fonctionner.

```js example-good
var toto = "truc";
toto.substring(1); // "ruc"
```

### Exemple de portée invalide

Une variable doit être disponible dans le contexte d'exécution où elle est utilisée. Les variables définies au sein d'une fonction ne peuvent pas être utilisées en dehors de cette fonction car la variable appartient à la _portée_ de la fonction.

```js example-bad
function numbers () {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Toutefois, une fonction peut accéder aux variables et aux fonctions définies dans la portée dans laquelle elle s'inscrit. Ainsi, une fonction définie dans la portée globale peut utiliser toutes les variables définies dans la portée globale.

```js example-good
var num1 = 2,
    num2 = 3;

function numbers () {
  return num1 + num2;
}

console.log(num1); // 2
```

## Voir aussi

- [La déclaration de variables dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Déclaration_de_variables)
- [Les notions de portées dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Fonctions#Portée_d'une_fonction)
