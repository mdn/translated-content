---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
tags:
  - Constructeur
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat
---
{{JSRef}}

L'objet **`Intl.RelativeTimeFormat`** est un constructeur fournissant des objets pour mettre en forme des données temporelles relatives en respectant le format des locales.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## Syntaxe

    new Intl.RelativeTimeFormat([locales[, options]])

### Paramètres

- `locales`
  - : Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}.
- `options` {{optional_inline}}

  - : Optionnel, un objet possédant tout ou partie des propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Objets_globaux/Intl","Intl","##Choix_de_la_locale")}}.
    - `numeric`
      - : Le format du message de sortie. Les valeurs possibles sont `"always"` (par exemple `1 day ago`) ou  `"auto"` (par exemple `yesterday`). `"auto"` permet de ne pas toujours avoir de valeurs numériques dans le message produit.
    - `style`
      - : La longueur du message internationalisé. Les valeurs possibles sont : `"long"` (la valeur par défaut) (par exemple : `in 1 month`), `"short"` (par exemple : `in 1 mo.`) ou  `"narrow"` (par exemple : `in 1 mo.`). Le style `narrow` peut être semblable au style `short` pour certaines locales.

## Description

### Propriétés

- {{jsxref("RelativeTimeFormat.prototype", "Intl.RelativeTimeFormat.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à l'ensemble des instances.

### Méthodes

- {{jsxref("RelativeTimeFormat.supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Cette méthode renvoie un tableau des locales, parmi celles passées en argument, qui sont pris en charge pour le formatage internationalisé des temps relatifs sans qu'il y ait besoin d'utiliser la locale par défaut de l'environnement d'exécution.

## Les instances de `RelativeTimeFormat`

### Propriétés

Les instances de RelativeTimeFormat héritent des propriétés suivantes grâce à leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl.RelativeTimeFormat/prototype', 'Propriétés')}}

### Méthodes

Les instances de `RelativeTimeFormat` héritent des méthodes suivantes grâce à leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl.RelativeTimeFormat/prototype', 'Méthodes')}}

## Exemples

### Utiliser `format()`

L'exemple suivant illustre comment créer un formateur de temps relatif en anglais :

```js
// On crée un formateur en anglais en utilisant explicitement
// les valeurs par défaut.
const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // autre valeur possible : "lookup"
    numeric: "always", // autre valeur possible : "auto"
    style: "long", // autre valeur possible : "short" ou "narrow"
});

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day");
// > "1 day ago"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day");
// > "in 1 day"
```

### Utiliser l'option `auto`

Si l'option `numeric:auto` est passée, on aura la chaîne de caractères `yesterday` ou `tomorrow` plutôt que `1 day ago` ou `in 1 day`. De cette façon, on peut ne pas avoir de valeur numérique dans la valeur produite.

```js
// On crée un formateur en anglais avec l'option
// numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// On formate un temps relatif avec une valeur négative (-1).
rtf.format(-1, "day");
// > "yesterday"

// On formate un temps relatif avec une valeur positive (1).
rtf.format(1, "day");
// > "tomorrow"
```

### Utiliser `formatToParts()`

L'exemple suivant illustre comment créer un formateur de temps relatif qui renvoie les différents fragments pour exprimer le temps relatif internationalisé.

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// On crée un temps relatif exprimé en jour.
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days" }]
```

## Spécifications

| Spécification                                                                                                                                      | Etat                    | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour le constructeur `Intl.RelativeTimeFormat`](https://tc39.es/proposal-intl-relative-time/#sec-intl-relativetimeformat-constructor) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.RelativeTimeFormat")}}

## Voir aussi

- [L'API `Intl.RelativeTimeFormat`, un billet de Mathias Bynens (en anglais)](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
