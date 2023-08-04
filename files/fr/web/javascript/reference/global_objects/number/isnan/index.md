---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

La méthode **`Number.isNaN()`** permet de déterminer si la valeur passée en argument est {{jsxref("NaN")}}, avec un type {{jsxref("Number")}}. Cette version est plus robuste que la méthode de l'objet global {{jsxref("isNaN")}}.

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## Syntaxe

```js
Number.isNaN(valeurÀTester);
```

### Paramètres

- `valeurÀTester`
  - : La valeur qu'on souhaite comparer à {{jsxref("NaN")}}.

### Valeur de retour

Un booléen qui indique si la valeur fournie en argument est {{jsxref("NaN")}}.

## Description

Les deux opérateurs d'égalité, {{jsxref("Opérateurs/Opérateurs_de_comparaison", "==", "#.C3.89galit.C3.A9_simple_(.3D.3D)")}} et {{jsxref("Opérateurs/Opérateurs_de_comparaison", "===", "#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}, renvoient `false` pour vérifier que {{jsxref("NaN")}} _est_ NaN. La fonction `Number.isNaN` est nécessaire pour distinguer ce cas. Le résultat de cette comparaison sera différent avec les autres méthodes de comparaisons en JavaScript.

En effet, la fonction globale {{jsxref("isNaN")}} convertit l'argument en un nombre. `Number.isNaN` ne convertit pas l'argument. Cela signifie qu'on peut passer des valeurs qui, normalement, seraient converties en NaN, mais qui ne sont pas NaN. Cela signifie également que, uniquement lorsque la méthode sera utilisée avec des nombres qui valent `NaN`, elle renverra `true`.

## Exemples

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// tout le reste renverra : false
Number.isNaN(undefined);
Number.isNaN({});

Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);

Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
Number.isNaN("NaN");
Number.isNaN("blabla"); // ex : cette valeur aurait rendu true avec la méthode isNaN de l'objet global
```

## Prothèse d'émulation (_polyfill_)

La fonction suivant fonctionne car `NaN` est la seule valeur JavaScript qui n'est pas égale à elle-même.

```js
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return typeof value === "number" && isNaN(value);
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette méthode.
- La méthode {{jsxref("Objets_globaux/Object/is", "Object.is")}} qui permet d'effectuer des comparaisons sur l'égalité de valeur
- La méthode {{jsxref("isNaN")}} de l'objet global
