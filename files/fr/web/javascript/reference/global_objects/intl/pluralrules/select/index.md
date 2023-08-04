---
title: Intl.PluralRules.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
---

{{JSRef}}

La méthode **`Intl.PluralRules.prototype.select`** renvoie une chaîne de caractères qui indique la règle de nombre utilisée pour le formatage relatif à la locale.

## Syntaxe

```js
pluralRule.select(nombre);
```

### Paramètres

- `nombre`
  - : Le nombre pour lequel on souhaite obtenir la règle de nombre associée.

## Description

Cette fonction permet de sélectionner une règle de nombre en fonction de la locale et des options de formatage choisies via un objet {{jsxref("PluralRules")}}.

## Exemples

```js
new Intl.PluralRules("ar-EG").select(0);
// → 'zero'

new Intl.PluralRules("ar-EG").select(1);
// → 'one'

new Intl.PluralRules("ar-EG").select(2);
// → 'two'

new Intl.PluralRules("ar-EG").select(6);
// → 'few'

new Intl.PluralRules("ar-EG").select(18);
// → 'many'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("PluralRules", "Intl.PluralRules")}}
