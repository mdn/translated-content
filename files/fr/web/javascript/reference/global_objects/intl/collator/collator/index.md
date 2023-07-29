---
title: Constructeur Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
---

{{JSRef}}

Le constructeur **`Intl.Collator()`** crée un objet [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) qui permet de comparer des chaînes de caractères en prenant en compte la locale.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Syntaxe

```js
new Intl.Collator();
new Intl.Collator(locales);
new Intl.Collator(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}

  - : Un argument optionnel qui est une balise de langue BCP 47 ou un tableau de telles chaînes. Pour plus de détails sur la forme et l'interprétation de ce paramètres, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale).

    Les clés d'extension Unicode suivantes sont autorisées&nbsp;:

    > **Note :** Ces clés peuvent généralement être paramétrées avec l'argument `options` (voir ci-après), lorsque ces clés sont indiquées dans les deux paramètres c'est `options` qui a la priorité.

    - `co`
      - : Les variantes de collation pour certaines locales. Les valeurs possibles sont&nbsp;:
        - `big5han`
        - `compat`
        - `dict`
        - `direct`
        - `ducet`
        - `eor`
        - `gb2312`
        - `phonebk` (uniquement pris en charge pour l'allemand)
        - `phonetic`
        - `pinyin`
        - `reformed`
        - `searchjl`
        - `stroke`
        - `trad`
        - `unihan`
        - `zhuyin`
          > **Note :** Cette option peut également être définie via la propriété "`collation`" du paramètre `options`.
    - `kn`
      - : Indique si une collation numérique devrait être utilisée (par exemple pour avoir "1" < "2" < "10"). Les valeurs possibles sont "`true`" et "`false`". Cette option peut également être indiquée via la propriété "`numeric`" du paramètre `options`.
    - `kf`
      - : Indique si les majuscules ou les minuscules devraient être triées en premières. Les valeurs possibles sont "`upper`", "`lower`", ou "`false`" (qui utilise la valeur par défaut pour la locale). Cette option peut également être indiquée via la propriété "`caseFirst`" du paramètre `options`.

- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs propriétés parmi les suivantes&nbsp;:

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `usage`
      - : Indique si la comparaison est utilisée pour trier ou pour rechercher des correspondances. Les valeurs possibles sont "`sort`" et
        "`search`", la valeur par défaut est "`sort`".
    - `sensitivity`

      - : Indique les différences dans les chaînes de caractères qui entraînent un résultat non nul. Les valeurs possibles sont&nbsp;:

        - "`base`"&nbsp;: Seules les chaînes de caractères pour lesquelles les lettres de base sont différentes sont considérées comme différentes. Avec cette option, on a&nbsp;: a ≠ b, a = á, a = A.
        - "`accent`"&nbsp;: Seules les chaînes de caractères pour lesquelles les lettres de base ou les diacritiques diffèrent sont considérées comme différentes. Avec cette option, on a&nbsp;: a ≠ b, a ≠ á, a = A.
        - "`case`"&nbsp;: Seules les chaînes de caractères pour lesquelles les lettres de base ou la casse diffèrent sont considérées comme différentes. Avec cette option, on a&nbsp;: a ≠ b, a = á, a ≠ A.
        - "`variant`"&nbsp;: Seules les chaînes de caractères pour lesquelles les lettres de base, les accents ou autres marques diacritiques ou encore la casse diffèrent, les chaînes sont considérées comme différentes. D'autres différences peuvent également être prises en compte. Avec cette option, on a&nbsp;: a ≠ b, a ≠ á, a ≠ A.

        La valeur par défaut est "`variant`" pour l'usage "`sort`"&nbsp;; pour l'usage "`search`", la valeur par défaut dépend de la locale.

    - `ignorePunctuation`
      - : Indique si la ponctuation devrait être ignorée. Les valeurs possibles sont `true` et `false`&nbsp;; la valeur par défaut est `false`.
    - `numeric`

      - : Indique si une collation numérique devrait être utilisée (afin d'avoir par exemple "1" < "2" < "10"). Les valeurs possibles sont `true` et `false`&nbsp;; la valeur par défaut est `false`.

        > **Note :** Cette option peut également être définie via la clé d'extension Unicode `kn`&nbsp;; si des valeurs sont fournies aux deux endroits, c'est la propriété d'`options` qui a la priorité.

    - `caseFirst`

      - : Indique si les majuscules ou les minuscules devraient être triées en premières. Les valeurs possibles sont "`upper`", "`lower`", ou "`false`" (qui utilisent la valeur par défaut de la locale).

        > **Note :** Cette option peut également être définie via la clé d'extension Unicode `kf`&nbsp;; si des valeurs sont fournies aux deux endroits, c'est la propriété d'`options` qui a la priorité.

    - `collation`
      - : Les variantes de collations pour certaines locales. Les valeurs possibles sont&nbsp;:
        - `big5han`
        - `compat`
        - `dict`
        - `direct`
        - `ducet`
        - `eor`
        - `gb2312`
        - `phonebk` (uniquement pris en charge pour l'allemand)
        - `phonetic`
        - `pinyin`
        - `reformed`
        - `searchjl`
        - `stroke`
        - `trad`
        - `unihan`
        - `zhuyin`
          > **Note :** Cette option peut également être définie via la clé d'extension Unicode `co`&nbsp;; si des valeurs sont fournies aux deux endroits, c'est la propriété d'`options` qui a la priorité.

## Exemples

### Utiliser Collator()

Dans l'exemple suivant, on illustre la comparaison de deux chaînes de caractères et le résultat obtenu selon que l'une est située avant ou après, ou de façon équivalente selon l'ordre lexicographique de la langue&nbsp;:

```js
console.log(new Intl.Collator().compare("a", "c")); // → une valeur négative
console.log(new Intl.Collator().compare("c", "a")); // → une valeur positive
console.log(new Intl.Collator().compare("a", "a")); // → 0
```

On notera que les résultats obtenus avec les lignes précédentes peuvent varier d'un navigateur à l'autre et entre les différentes versions. En effet, les valeurs numériques obtenues sont spécifiques aux implémentations et la spécification n'impose que le signe de la valeur obtenue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
