---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

La méthode **`join()`** crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'[un objet semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Collections_indexées#Manipuler_des_objets_semblables_à_des_tableaux)). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Syntaxe

```js
arr.join();
arr.join(séparateur);
```

### Paramètres

- `séparateur` {{optional_inline}}
  - : Ce paramètre optionnel indique une chaine de caractères pour séparer chaque élément du tableau. Le séparateur est converti en une chaine de caractères si nécessaire. Si ce paramètre n'est pas utilisé, les éléments du tableau seront séparés par une virgule (,). Si ce paramètre est la chaîne vide, les éléments seront accolés les uns aux autres sans espace entre. La valeur par défaut de ce paramètre est `","`.

### Valeur de retour

Une chaîne de caractères composée de tous les éléments du tableau joints les uns aux autres. Si la longueur du tableau (`arr.length`) vaut `0`, c'est la chaîne vide qui est renvoyée. Si le tableau ne contient qu'un élément, sa version texte sera renvoyée sans être suivie du séparateur.

## Description

Les différents éléments du tableau sont convertis en une chaîne de caractères puis fusionnés en une seule chaîne. Si un élément vaut `undefined` ou `null`, il sera converti en la chaîne vide. Cette fonction est générique et peut donc être utilisée avec [les objets semblables aux tableaux](/fr/docs/Web/JavaScript/Guide/Collections_indexées#Manipuler_des_objets_semblables_à_des_tableaux).

## Exemples

### Fusionner un tableau de quatre façons différentes

L'exemple suivant crée un tableau, `a`, avec trois éléments, puis joint le tableau à trois reprises : en utilisant le séparateur par défaut, une virgule et un espace, puis un plus, puis avec la chaîne vide.

```js
var a = new Array("Vent", "Pluie", "Feu");
a.join(); // "Vent,Pluie,Feu"
a.join(", "); // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join(""); // "VentPluieFeu"
```

### Fusionner un objet semblable à un tableau

Dans l'exemple suivant, on effectue la fusion sur un objet semblable à un tableau ([`arguments`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments)) en appelant {{jsxref("Function.prototype.call")}} sur `Array.prototype.join`.

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s);
}
f(1, "a", true); // '1,a,true'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
