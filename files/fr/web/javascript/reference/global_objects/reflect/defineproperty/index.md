---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Reflect/defineProperty
---
{{JSRef}}

La méthode statique **`Reflect.defineProperty()`** est semblable à {{jsxref("Object.defineProperty()")}} mais renvoie un {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Syntaxe

```js
Reflect.defineProperty(cible, cléPropriété, attributs)
```

### Paramètres

- `cible`
  - : L'objet cible sur lequel on veut définir la propriété.
- `cléPropriété`
  - : Le nom de la propriété qu'on souhaite définir ou modifier.
- `attributs`
  - : Les attributs de de la propriété qu'on ajoute ou qu'on modifie.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui indique si la propriété a bien été définie.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.defineProperty` permet d'ajouter ou de modifier finement une propriété d'un objet. Pour plus de détails, voir la méthode {{jsxref("Object.defineProperty")}} qui est très similaire. `Object.defineProperty` renvoie l'objet et lève une {{jsxref("TypeError")}} si la propriété n'a pas correctement été définie. `Reflect.defineProperty` renvoie simplement un {{jsxref("Boolean")}} qui indique si la propriété a été définie avec succès ou non.

## Exemples

### Utiliser `Reflect.defineProperty()`

```js
var obj = {};
Reflect.defineProperty(obj, "x", {value: 7}); // true
obj.x; // 7
```

### Vérifier si la définition de propriété a réussi

{{jsxref("Object.defineProperty")}} renvoie un objet si la définition a réussi ou lève une exception {{jsxref("TypeError")}} sinon, ce qui implique d'utiliser un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Instructions/try...catch) pour attraper l'erreur. `Reflect.defineProperty` renvoie un booléen pour indiquer la réussite ou l'échec, un bloc [`if...else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else) suffit :

```js
if (Reflect.defineProperty(cible, propriété, attributs)) {
  // succès
} else {
  // échec
}
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-reflect.defineproperty', 'Reflect.defineProperty')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-reflect.defineproperty', 'Reflect.defineProperty')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Reflect.defineProperty")}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
