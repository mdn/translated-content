---
title: "Number : propriété statique NaN"
short-title: NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Number.NaN`** représente la valeur <i lang="en">Not-A-Number</i>, ce qui est équivalent à {{JSxRef("NaN")}}. Pour plus d'informations sur le comportement de `NaN`, voir la [description de la propriété native](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.NaN", "taller")}}

```js interactive-example
function clean(x) {
  if (x === Number.NaN) {
    // Ne peut jamais être vrai
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Sortie attendue : 0
```

## Valeur

La valeur numérique {{JSxRef("NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

Puisque `NaN` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.NaN`, plutôt que comme propriété d'une valeur numérique.

## Exemples

### Vérifier si les valeurs sont numériques

```js
function assainir(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété native {{JSxRef("NaN")}}
- La méthode statique {{JSxRef("Number.isNaN()")}}
