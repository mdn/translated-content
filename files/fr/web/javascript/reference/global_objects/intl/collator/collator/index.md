---
title: Constructeur Intl.Collator()
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.Collator()`** crée des objets {{JSxRef("Intl.Collator")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.Collator()")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// Résultat attendu : Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// Résultat attendu : Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// Résultat attendu : Array ["a", "ä", "Z", "z"]
```

## Syntaxe

```js-nolint
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> [!NOTE]
> `Intl.Collator()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `Intl.Collator`.

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de ces identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale d'`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).

    Les clés d'extension Unicode suivantes sont autorisées&nbsp;:
    - `co`
      - : Voir [`collation`](#collation).
    - `kn`
      - : Voir [`numeric`](#numeric).
    - `kf`
      - : Voir [`caseFirst`](#casefirst).

    Ces clés peuvent également être définies avec `options` (comme listé ci-dessous). Lorsque les deux sont définis, la propriété `options` a la priorité.

- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre où elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `usage`
      - : Indique si la comparaison sert à trier une liste de chaînes de caractères ou à filtrer de façon approximative (pour l'écriture latine, insensible aux diacritiques et à la casse) une liste de chaînes de caractères par clé. Les valeurs possibles sont&nbsp;:
        - `"sort"` (par défaut)
          - : Pour trier une liste de chaînes de caractères.
        - `"search"`
          - : Pour filtrer une liste de chaînes de caractères en testant chaque élément de la liste pour une correspondance complète avec une clé. Avec `"search"`, il faut seulement vérifier si `compare()` retourne zéro ou une valeur différente de zéro et peut ne pas distinguer les valeurs non nulles entre elles. Il n'est donc pas approprié d'utiliser `"search"` pour trier/ordonner.
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `collation`
      - : Variantes de collations pour certaines locales, telles que `"emoji"`, `"pinyin"`, `"stroke"`, etc. N'a d'effet que lorsque `usage` vaut `"sort"` (car `"search"` utilise son propre type de collation). Pour la liste des types de collations pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_collation_pris_en_charge)&nbsp;; la valeur par défaut est `"default"`. Cette option peut aussi être définie via la clé d'extension Unicode `co`&nbsp;; si les deux sont fournies, la propriété `options` a la priorité.
    - `numeric`
      - : Indique si une collation numérique doit être utilisée, de sorte que «&nbsp;1&nbsp;» < «&nbsp;2&nbsp;» < «&nbsp;10&nbsp;». Les valeurs possibles sont `true` et `false`&nbsp;; la valeur par défaut est `false`. Cette option peut aussi être définie via la clé d'extension Unicode `kn`&nbsp;; si les deux sont fournies, la propriété `options` a la priorité.
    - `caseFirst`
      - : Indique si les majuscules ou les minuscules doivent être triées en premier. Les valeurs possibles sont `"upper"`, `"lower"` et `"false"` (utilise la valeur par défaut de la locale)&nbsp;; la valeur par défaut est `"false"`. Cette option peut aussi être définie via la clé d'extension Unicode `kf`&nbsp;; si les deux sont fournies, la propriété `options` a la priorité.
    - `sensitivity`
      - : Indique quelles différences dans les chaînes de caractères doivent entraîner des valeurs de résultat non nulles. Les valeurs possibles sont&nbsp;:
        - `"base"`
          - : Seules les chaînes de caractères qui diffèrent par les lettres de base sont considérées comme différentes. Exemples&nbsp;: a ≠ b, a = á, a = A. Dans l'algorithme de collation Unicode, cela correspond au niveau de force primaire.
        - `"accent"`
          - : Seules les chaînes de caractères qui diffèrent par les lettres de base ou les accents et autres marques diacritiques sont considérées comme différentes. Exemples&nbsp;: a ≠ b, a ≠ á, a = A. Dans l'algorithme de collation Unicode, cela correspond au niveau de force secondaire.
        - `"case"`
          - : Seules les chaînes de caractères qui diffèrent par les lettres de base ou la casse sont considérées comme différentes. Exemples&nbsp;: a ≠ b, a = á, a ≠ A. Dans l'algorithme de collation Unicode, cela correspond au niveau de force primaire avec gestion de la casse.
        - `"variant"`
          - : Les chaînes de caractères qui diffèrent par les lettres de base, les accents et autres marques diacritiques, ou la casse, sont considérées comme différentes. D'autres différences peuvent aussi être prises en compte. Exemples&nbsp;: a ≠ b, a ≠ á, a ≠ A. Dans l'algorithme de collation Unicode, cela correspond au niveau de force tertiaire.

        La valeur par défaut est `"variant"` pour l'usage `"sort"`&nbsp;; elle dépend de la locale pour l'usage `"search"` selon la spécification, mais est généralement aussi `"variant"`. Comme la fonctionnalité principale de `"search"` est le filtrage insensible aux accents et à la casse, la valeur `"base"` est la plus logique (et peut-être `"case"`).

    - `ignorePunctuation`
      - : Indique si la ponctuation doit être ignorée. Les valeurs possibles sont `true` et `false`. La valeur par défaut est `true` pour le thaï (`th`) et `false` pour toutes les autres langues.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs invalides.

## Exemples

### Utiliser `Collator()`

Dans l'exemple suivant, on illustre la comparaison de deux chaînes de caractères et le résultat obtenu selon que l'une est située avant ou après, ou de façon équivalente selon l'ordre lexicographique de la langue&nbsp;:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, ou une valeur négative
console.log(new Intl.Collator().compare("c", "a")); // 1, ou une valeur positive
console.log(new Intl.Collator().compare("a", "a")); // 0
```

On notera que les résultats obtenus avec les lignes précédentes peuvent varier d'un navigateur à l'autre et entre les différentes versions. En effet, les valeurs numériques obtenues sont spécifiques aux implémentations et la spécification n'impose que le signe de la valeur obtenue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Collator")}}
- L'objet {{JSxRef("Intl")}}
