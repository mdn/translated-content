---
title: Intl.PluralRules.supportedLocalesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/supportedLocalesOf
---

{{JSRef}}

La méthode **`Intl.PluralRules.supportedLocalesOf()`** renvoie un tableau contenant les locales prises en charge, parmi celles passées en argument, pour les règles de nombre (sans avoir à utiliser la locale par défaut du système d'exécution).

## Syntaxe

```js
Intl.PluralRules.supportedLocalesOf(locales[, options])
```

### Paramètres

- `locales`
  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou bien un tableau de telles chaînes. Pour la forme générale de l'argument `locales`, se référer à la page {{jsxref("Intl", "Intl", "#Identification_et_choix_de_la_locale", 1)}}.
- `options` {{optional_inline}}

  - : Optionnel. Un objet pouvant contenir la propriété suivante :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}.

### Valeur de retour

Un tableau de chaînes de caractères représentant le sous-ensemble de balises de langues prises en charge pour le formatage avec les règles de nombre (sans qu'il soit nécssaire d'utiliser la locale par défaut du système d'exploitation).

## Description

Cette méthode renvoie un tableau contenant un sous-ensemble des balises de langue fournies dans l'argument `locales`. Les balises de langue sont celles qui sont prises en charge par l'environnement pour le formatage avec les règles de nombre et pour lesquelles la locale respecte l'algorithme de correspondance indiqué. Les locales de ce tableau évitent d'avoir à utiliser la locale du système d'exécution par défaut.

## Exemples

Dans l'hypothèse où on utilise un système prenant en charge l'indonésien, l'allemand mais pas le balinais pour le formatage avec les règles de nombre, `supportedLocalesOf` renvoie les balises de langue indonésienne et allemande inchangées bien que la collation `pinyin` ne soit pas pertinente ni utilisée avec l'indonésien (et qu'il est peu probable qu'une variante indonésienne pour l'allemand soit prise en charge). On notera que l'algorithme de correspondance `"lookup"` est utilisé ici. L'algorithme `"best fit"` aurait pu déterminer que l'indonésien aurait pu remplacer le balinais car la plupart des personnes parlant le balinais comprend également l'indonésien, la fonction aurait alors pu remplacer la balise de langue balinaise.

```js
var locales = ["ban", "id-u-co-pinyin", "de-ID"];
var options = { localeMatcher: "lookup" };
console.log(Intl.PluralRules.supportedLocalesOf(locales, options).join(", "));
// → "id-u-co-pinyin, de-ID"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("PluralRules", "Intl.PluralRules")}}
