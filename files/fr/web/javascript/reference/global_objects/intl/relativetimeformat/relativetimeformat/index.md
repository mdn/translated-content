---
title: Constructeur Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
---

{{JSRef}}

Le constructeur **`Intl.RelativeTimeFormat()`** permet de créer des objets [`Intl.RelativeTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) pour exprimer des valeurs temporelles relatives selon une locale et des paramètres donnés.

## Syntaxe

```js
new Intl.RelativeTimeFormat();
new Intl.RelativeTimeFormat(locales);
new Intl.RelativeTimeFormat(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}
  - : Une chaîne de caractères qui est une balise de langue BCP 47 ou un tableau de telles chaînes. Pour plus de détails sur la forme et l'interprétation de ce paramètres, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale).
- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs propriétés parmi les suivantes&nbsp;:

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `numeric`

      - : Le format du message de sortie. Les valeurs possibles sont&nbsp;:

        - "`always`" (la valeur par défaut, par exemple, `il y a 1 jour`),
        - "`auto`" (par exemple, `hier`). La valeur "`auto`" permet de ne pas toujours avoir des valeurs numériques dans le message de sortie.

    - `style`

      - : La longueur du message internationalisé. Les valeurs possibles sont&nbsp;:

        - "`long`" (la valeur par défaut, par exemple, `dans 1 mois`)
        - "`short`" (par exemple, `dans 3 m.`),
        - "`narrow`" (par exemple, `dans 1 m.`). Le style `narrow` peut être similaire au style `short` pour certaines locales.

## Exemples

### Usage simple

Dans l'exemple suivant, on crée un formateur de temps relatif utilisant la locale française.

```js
// On crée un formateur de temps relatif dans la locale
// avec les valeurs par défaut passées explicitement.
const rtf = new Intl.RelativeTimeFormat("fr", {
  localeMatcher: "best fit", // autres valeurs possibles : "lookup"
  numeric: "always", // autres valeurs possibles : "auto"
  style: "long", // autres valeurs possibles : "short" ou "narrow"
});

// On formate un temps relatif un jour dans le passé.
rtf.format(-1, "day");
// > "il y a 1 jour"

// On formate un temps relatif un jour dans le futur.
rtf.format(1, "day");
// > "dans 1 jour"
```

### En utilisant l'option auto

Si l'option `numeric:auto` est passée, le résultat sera la chaîne de caractères `hier` ou `demain` plutôt que `il y a 1 jour` ou `dans 1 jour`. Cela permet de ne pas toujours avoir de valeurs numériques dans la valeur produite.

```js
// On crée un formateur en utilisant la locale française avec
// numeric: "auto" passée en option.
const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });

// On formate un temps relatif un jour dans le passé.
rtf.format(-1, "day");
// > "hier"

// On formate un temps relatif un jour dans le futur.
rtf.format(1, "day");
// > "demain"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.RelativeTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
