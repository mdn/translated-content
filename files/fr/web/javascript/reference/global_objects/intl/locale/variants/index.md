---
title: "Intl.Locale : propriété variants"
short-title: variants
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`variants`** des instances de {{JSxRef("Intl.Locale")}} retourne les variantes associées à cette locale, sous forme d'une chaîne de caractères d'identifiants séparés par des tirets (`-`) dans l'ordre spécifié à l'origine.

## Description

Les variantes font partie de l'identifiant principal de la langue. Elles sélectionnent des variantes d'une langue que le triple (langue, région, script) ne peut pas différencier. En général, elles représentent la même langue à différentes époques ou avec différentes orthographes. Par exemple, l'allemand a les variantes d'orthographe `1901` et `1996`, qui s'écrivent `de-1901` et `de-1996`&nbsp;; la variante «&nbsp;Early Modern English (1500-1700)&nbsp;» s'écrit `en-emodeng`. Le sous-balise peut contenir plusieurs identifiants séparés par des tirets (`-`). Ces identifiants sont techniquement non ordonnés, bien qu'en pratique, ils aient souvent une hiérarchie sémantique — par exemple, le dialecte résian du slovène s'écrit `sl-rozaj`, et le dialecte San Giorgio/Bila du résian s'écrit `sl-rozaj-biske`.

La valeur de la propriété `variants` est définie au moment de la construction, soit par la partie de l'identifiant de la locale après `region`, soit par l'option `variants` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes&nbsp;; et si aucune n'est présente, la propriété a pour valeur `undefined`.

Le mutateur d'accesseur de `variants` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour les autres sous-balises de locale, les variantes peuvent être ajoutées à l'objet {{JSxRef("Intl.Locale")}} soit par la chaîne de caractères de locale, soit par un objet de configuration passé en argument au constructeur.

### Ajouter des variantes par le biais de la chaîne de caractères de la locale

Les variantes, si elles sont présentes, sont les dernières parties d'une chaîne de caractères d'identifiant de langue Unicode valide, et peuvent être ajoutées à la chaîne de caractères d'identifiant de locale initiale qui est passée au constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Notez que les variantes ne sont pas une partie obligatoire d'un identifiant de locale.

```js
const locale = new Intl.Locale("sl-rozaj-biske");
console.log(locale.variants); // "rozaj-biske"
```

### Ajouter des variantes par le biais de l'objet de configuration

Le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un objet de configuration optionnel en argument. Définissez la propriété `variants` de l'objet de configuration avec les variantes souhaitées, puis passez-le au constructeur.

```js
const locale = new Intl.Locale("sl", { variants: "rozaj-biske" });
console.log(locale.variants); // "rozaj-biske"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [Sous-balise de variante Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#unicode_variant_subtag_validity) dans la spécification du langage de balisage des données de locale Unicode
- [Registre des sous-balises de langue IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
