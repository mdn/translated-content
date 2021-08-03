---
title: Accesseurs de propriétés
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Property_Accessors
original_slug: Web/JavaScript/Reference/Opérateurs/Opérateurs_de_membres
---
{{jsSidebar("Operators")}}

Les **accesseurs de propriété** permettent de fournir un accès aux propriétés d'un objet en utilisant une notation avec un point ou une notation avec des crochets

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}

## Syntaxe

    objet.propriété
    objet["propriété"]

## Description

Les objets peuvent être vus comme des tableaux associatifs (_map_, dictionnaires, table de hachage, annuaire, etc.). Les _clés_ (_keys_) de ce tableau sont les noms des propriétés de l'objet. Lorsqu'on parle d'objets, on fait généralement une distinction entre les propriétés et les méthodes. En réalité cette différence est plus dûe à une convention qu'à une réelle distinction. En effet, une méthode est simplement une propriété qu'on peut appeler (sa valeur fera souvent référence à une instance de {{jsxref("Function")}}).

Il existe deux façons d'accéder aux propriétés d'un objet : la notation avec point et la notation avec crochets.

### Notation avec point

```js
obtenir = objet.propriété;
objet.propriété = définir;
```

`propriété` doit être un identifiant JavaScript valide, c'est-à-dire une séquence de caractères alphanumériques, soulignés (« `_` ») et signes dollar (« `$` »), qui ne peut commencer par un nombre. Par exemple, `objet.$1` est valide, mais `objet.1` ne l'est pas.

```js
document.createElement('pre');
```

Ici, la méthode `createElement` est obtenue depuis l'objet `document` et est appelée.

Si on utilise une méthode pour un littéral numérique et que celui-ci ne possède pas de point décimal ni d'exposant lié à la notation scientifique, il faudra laisser un ou plusieurs blancs afin que l'appel soit bien interprété comme un appel de méthode plutôt que comme un séparateur décimal :

```js
77 .toExponential();
// ou
77
.toExponential();
// ou, mieux pour la lisibilité
(77).toExponential();
// ou encore
77.0.toExponential();
// 77. correspond à 77.0 et là il n'y a aucun doute
```

### Notation avec crochets

```js
obtenir = objet[nom_de_propriété];
objet[nom_de_propriété] = définir;
```

`nom_de_propriété` est une chaîne de caractères ou un {{jsxref("Symbol","symbole","","")}}. Elle n'a pas besoin d'être un identifiant valide ; elle peut avoir n'importe quelle valeur, par exemple `"1foo"`, `"!bar!"` ou même `" "` (une espace).

#### Exemple

```js
document['createElement']('pre');
```

Cette ligne fait exactement la même chose que l'exemple précédent.

### Noms de propriétés

Les noms de propriétés doivent être des chaînes de caractères ou des symboles. Cela signifie que les autres types d'objet ne peuvent pas être utilisés comme clés d'un objet. Tout autre type d'objet, même un nombre, sera converti en une chaîne via sa méthode [`toString`](fr/R%c3%a9f%c3%a9rence_de_JavaScript_1.5_Core/Objets_globaux/Object/toString).

#### Exemples

```js
var objet = {};
objet['1'] = 'valeur';
console.log(objet[1]);
```

Ceci affichera « valeur », étant donné que le nombre `1` sera converti en une chaîne `"1"`.

```js
var toto = {propriété_unique : 1}, truc = {propriété_unique : 2}, objet = {};
objet[toto] = 'valeur';
console.log(objet[truc]);
```

Ce code affichera également « valeur », étant donné que `toto` et `truc` seront convertis en la même chaîne de caractères. Dans le cas du moteur JavaScript [SpiderMonkey](fr/SpiderMonkey), cette chaîne serait `"['object Object']"`.

### Liaison de méthodes

Une méthode n'est pas liée à l'objet dont elle est une méthode. En particulier, `this` n'est pas défini dans une méthode, c'est-à-dire que `this` ne fait pas nécessairement référence à un objet contenant la méthode. En réalité, `this` est « passé » par l'appel de la fonction.

Pour plus d'informations, consultez la page sur [l'opérateur `this` et les liaisons de méthodes](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this#Liaison_de_m.C3.A9thodes).

### Note concernant `eval`

Les nouveaux venus en JavaScript font souvent l'erreur d'utiliser {{jsxref("eval", "eval()")}} alors que la notation avec crochets pourrait être utilisée. Par exemple, la syntaxe suivante est utilisée dans de nombreux scripts.

```js
x = eval('document.formulaire.' + controle + '.value');
```

`eval` est lente et insécurisée et devrait être évitée dès que possible. Il est préférable d'utiliser la notation avec crochets :

```js
x = document.formulaire[controle].value;
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-property-accessors', 'Property Accessors')}}     | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-property-accessors', 'Accesseurs de propriété')}} | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.2.1', 'Accesseurs de propriété')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.2.1', 'Accesseurs de propriété')}}                 | {{Spec2('ES1')}}         | Définition initiale, implémentée avec JavaScript 1.0. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.property_accessors")}}

## Voir aussi

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [L'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition)
- [Le chaînage optionnel](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
