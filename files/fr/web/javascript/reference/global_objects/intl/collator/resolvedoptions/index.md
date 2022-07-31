---
title: Intl.Collator.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
tags:
  - Collator
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Collator/resolvedOptions
---
{{JSRef}}

La méthode **`Intl.Collator.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent les options de locale et de collation calculées à l'initialisation de l'objet {{jsxref("Collator")}}.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-resolvedoptions.html")}}

## Syntaxe

```js
collator.resolvedOptions()
```

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options de locale et de collations calculées lors de l'initialisation de l'objet {{jsxref("Collator")}}.

## Description

L'objet renvoyé par cette méthode contient les propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 qui est réellement utilisée. Si des extensions Unicode étaient fournies avec la balise d'origine et sont supportées pour la locale utilisée, les paires de clés-valeurs seront incluses dans `locale`.
- `usage`,`sensitivity`, `ignorePunctuation`
  - : Les valeurs demandées pour ces propriétés via l'argument `options` ou celles utilisées par défaut.
- `collation`
  - : La valeur demandée pour l'extension Unicode `"co"` si elle est supportée par la locale utilisée, sinon `"default"`.
- `numeric`, `caseFirst`
  - : Les valeurs demandées pour ces propriétés via l'argument `options` ou l'utilisation des extensions Unicode `"kn"` et `"kf"` ou les valeurs par défaut. Si l'implémentation utilisée ne supporte pas ces propriétés, elles sont omises.

## Exemples

```js
var de = new Intl.Collator('de', { sensitivity: 'base' })
var usedOptions = de.resolvedOptions();

usedOptions.locale;            // "de"
usedOptions.usage;             // "sort"
usedOptions.sensitivity;        // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation;         // "default"
usedOptions.numeric;           // false
```

## Spécifications

| Spécification                                                                                                                                                    | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.3.3', 'Intl.Collator.prototype.resolvedOptions')}}                                                 | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-10.3.3', 'Intl.Collator.prototype.resolvedOptions')}}                                                 | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.Collator.prototype.resolvedOptions', 'Intl.Collator.prototype.resolvedOptions')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Collator.resolvedOptions")}}

## Voir aussi

- {{jsxref("Collator", "Intl.Collator")}}
