---
title: Set.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Set/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/forEach
original_slug: Web/JavaScript/Reference/Objets_globaux/Set/forEach
---
{{JSRef}}

La méthode **`forEach()`** permet d'exécuter une fonction donnée, une fois pour chaque valeur de l'ensemble `Set`. L'ordre appliqué est celui dans lequel les valeurs ont été ajoutées à l'ensemble.

{{EmbedInteractiveExample("pages/js/set-prototype-foreach.html")}}

## Syntaxe

```js
monSet.forEach(callback[, thisArg])
```

### Valeur de retour

{{jsxref("undefined")}}.

### Paramètres

- `callback`

  - : La fonction qu'on souhaite exécuter pour chaque élément et qui sera appelée avec trois arguments :

    - `valeurCourante`, `cléCourante`
      - : L'élément courant appartenant à l'ensemble `Set`. Un ensemble n'ayant pas de clé, c'est la même valeur qui est passée pour deux arguments de la fonction de rappel.
    - `set`
      - : L'objet `Set` courant (celui sur lequel `forEach()` a été appelé).

- `thisArg`
  - : Paramètre optionnel. La valeur à utiliser comme `this` lors de l'exécution de `callback`.

## Description

La méthode `forEach()` exécute la fonction `callback` fournie pour chaque valeur contenue au sein de l'objet `Set`. Elle n'est pas appelée pour les valeurs qui ont été supprimées. Cependant, elle est exécutée si jamais la valeur vaut `undefined`.

`callback` est appelé avec **trois arguments** :

- la **valeur de l'élément**
- la **clé de l'élément**
- l'objet **`Set` qui est parcouru**

Les objets `Set` n'ont pas de clé (_key_). Cependant les deux premiers arguments correspondent à la **valeur** contenue dans l'objet {{jsxref("Set")}}. Cela permet d'utiliser les fonctions callback de façon cohérente avec les méthodes `forEach()` de {{jsxref("Map.foreach", "Map")}} et {{jsxref("Array.forEach","Array")}}.

Si un paramètre `thisArg` est fourni, il sera passé à la fonction `callback` lors de l'appel comme valeur `this`. Par défaut, la valeur {{jsxref("undefined")}} sera passée comme argument `this`. La valeur `this` effectivement reçue par la fonction `callback` est déterminée selon [les règles usuelles de détermination de `this` par une fonction](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this).

Chacune des valeurs sera traitée une fois sauf si celle-ci a été supprimée puis réajoutée avant la fin de `forEach`. `callback` n'est pas appelé pour les valeurs qui sont supprimés avant le passage de la fonction. Les valeurs qui sont ajoutées avant que `forEach` ait parcouru l'ensemble seront traitées

`forEach` exécute la fonction `callback` une fois pour chaque élément de l'objet `Set`. Cette méthode ne renvoie pas de valeur.

## Exemples

Le code qui suit permet d'enregistrer une ligne pour chaque élément contenu dans l'objet `Set` :

```js
function logSetElements(valeur1, valeur2, set) {
    console.log("s[" + valeur1 + "] = " + valeur2);
}

new Set(["toto", "truc", undefined]).forEach(logSetElements);

// affichera :
// "s[toto] = toto"
// "s[truc] = truc"
// "s[undefined] = undefined"
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.foreach', 'Set.prototype.forEach')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set.prototype.foreach', 'Set.prototype.forEach')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set.forEach")}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
