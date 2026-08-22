---
title: "Number : propriété statique MAX_VALUE"
short-title: MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
l10n:
  sourceCommit: c1c0f13171a9e266210f0b284243b2996fc3ec91
---

La propriété statique **`Number.MAX_VALUE`** représente la valeur numérique maximale pouvant être représentée en JavaScript.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.MAX_VALUE")}}

```js interactive-example
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Représenté comme Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// Sortie attendue : 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// Sortie attendue : "Représenté comme Infinity"
```

## Valeur

2<sup>1024</sup> - 2<sup>971</sup>, ou approximativement `1.7976931348623157E+308`.

{{js_property_attributes(0, 0, 0)}}

## Description

Les valeurs supérieures à `MAX_VALUE` sont représentées par {{JSxRef("Infinity")}} (pour l'infini) et perdent leur valeur réelle. Comme mentionné dans {{JSxRef("Number.EPSILON")}}, la précision des nombres dépend de leur magnitude. Les entiers ne peuvent être représentés avec précision que jusqu'à {{JSxRef("Number.MAX_SAFE_INTEGER")}}, qui est 2<sup>53</sup> - 1.

Parce que `MAX_VALUE` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.MAX_VALUE`, plutôt que comme une propriété d'une valeur numérique.

## Exemples

### Utiliser `MAX_VALUE`

Le code suivant multiplie deux valeurs numériques. Si le résultat est inférieur ou égal à `MAX_VALUE`, la fonction `func1` est appelée&nbsp;; sinon, la fonction `func2` est appelée.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique {{JSxRef("Number.MIN_VALUE")}}
- La propriété statique {{JSxRef("Number.MAX_SAFE_INTEGER")}}
- L'objet {{JSxRef("Number")}}
