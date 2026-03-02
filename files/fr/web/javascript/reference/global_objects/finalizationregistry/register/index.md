---
title: "FinalizationRegistry : méthode register()"
short-title: register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
l10n:
  sourceCommit: 17c7ffbf1741f892054e4d210689388d787737ae
---

La méthode **`register()`** des instances de {{JSxRef("FinalizationRegistry")}} inscrit une valeur dans cet objet `FinalizationRegistry` afin que, si la valeur est récupérée par le ramasse-miettes, la fonction de rappel du registre puisse être appelée.

## Syntaxe

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Paramètres

- `target`
  - : La valeur cible à inscrire au registre.
- `heldValue`
  - : La valeur à passer au finaliseur pour cette `target`. Cette valeur ne peut pas être la `target` elle-même mais peut être n'importe quoi d'autre, y compris des fonctions et des valeurs primitives.
- `unregisterToken` {{Optional_Inline}}
  - : Un jeton qui peut être utilisé avec la méthode `unregister` plus tard pour retirer la valeur cible du registre. Si cette valeur est fournie (et différente de `undefined`), elle doit être un objet ou un [symbole non enregistré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles). Si cette valeur n'est pas fournie, la cible ne peut pas être retirée du registre.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `target` n'est pas un objet ou un [symbole non enregistré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles) (objet par opposition aux primitives&nbsp;; les fonctions sont aussi des objets)
    - `target` est identique à `heldValue` (`target === heldValue`)
    - `unregisterToken` n'est pas un objet ou un [symbole non enregistré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles)

## Description

Voir les sections [À éviter si possible](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#à_éviter_si_possible) et [Notes sur les fonctions de rappel de nettoyage](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_quant_aux_fonctions_de_rappel_de_nettoyage) de la page {{JSxRef("FinalizationRegistry")}} pour des points importants à prendre en compte.

## Exemples

### Utiliser la méthode `register()`

La ligne suivante enregistre l'objet `cible` et passe la valeur tenue `"une valeur"` et l'objet cible comme jeton de désenregistrement&nbsp;:

```js
registry.register(cible, "une valeur", cible);
```

La ligne suivante enregistre l'objet `cible` et passe un autre objet comme valeur tenue. L'absence de jeton de désenregistrement (indique que `cible` ne peut pas être retiré du registre)&nbsp;:

```js
registry.register(cible, { utile: "info à propos de la cible" });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("FinalizationRegistry")}}
