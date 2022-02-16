---
title: Intl.PluralRules.select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - PluralRules
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/PluralRules/select
---
{{JSRef}}

La méthode **`Intl.PluralRules.prototype.select`** renvoie une chaîne de caractères qui indique la règle de nombre utilisée pour le formatage relatif à la locale.

## Syntaxe

    pluralRule.select(nombre)

### Paramètres

- `nombre`
  - : Le nombre pour lequel on souhaite obtenir la règle de nombre associée.

## Description

Cette fonction permet de sélectionner une règle de nombre en fonction de la locale et des options de formatage choisies via un objet {{jsxref("PluralRules")}}.

## Exemples

```js
 new Intl.PluralRules('ar-EG').select(0);
// → 'zero'

new Intl.PluralRules('ar-EG').select(1);
// → 'one'

new Intl.PluralRules('ar-EG').select(2);
// → 'two'

new Intl.PluralRules('ar-EG').select(6);
// → 'few'

new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

## Spécifications

| Spécification                                                                                                       | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| [Brouillon pour les règles de nombre avec Intl](https://rawgit.com/caridy/intl-plural-rules-spec/master/index.html) | {{Spec2('ES Int Draft')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.PluralRules.select")}}

## Voir aussi

- {{jsxref("PluralRules", "Intl.PluralRules")}}
