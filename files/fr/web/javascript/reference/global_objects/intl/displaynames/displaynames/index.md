---
title: Intl.DisplayNames() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
---

{{JSRef}}

Le constructeur **`Intl.DisplayNames()`** crée des objets qui permettent de fournir des traductions constantes des noms de langues, régions et systèmes d'écriture.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Syntaxe

```js
new Intl.DisplayNames([langues[, options]])
```

### Paramètres

- `langues` {{optional_inline}}

  - : Une chaine avec un code de langue BCP 47, ou un tableau de telles chaines. Pour comprendre la forme générale et l'interprétation de cet argument, voyez {{jsxref("Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}. Les clés d'extensions Unicode suivantes sont permises :

    - `nu`
      - : Le système de numération à utiliser. Les valeurs possibles sont : `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

- `options` {{optional_inline}}

  - : Un objet avec certaines des des propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance régional à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"` ; celle par défaut étant `"best fit"`. Pour plus d'informations à propos de cette option, voir {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `style`

      - : Le style de mise en forme à utiliser, celui par défaut étant `"long"`.

        - `"narrow"`
        - `"short"`
        - `"long"`

    - `type`

      - : Le type à utiliser, celui par défaut étant `"language"`.

        - `"language"`
        - `"region"`
        - `"script"`
        - `"currency"`

    - `fallback`

      - : La valeur par défaut à utiliser, celle par défaut étant `"code"`.

        - `"code"`
        - `"none"`

## Exemples

### Utilisation simple

Dans son utilisation simple, sans spécifier de langue, une chaine dans la langue locale par défaut et avec les options par défaut sera retournée.

```js
console.log(new Intl.DisplayNames().of("US"));
// Expected output: 'us'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Intl.DisplayNames")}}
